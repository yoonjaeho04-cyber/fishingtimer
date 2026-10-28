#!/usr/bin/env python3
"""Slice a GPT sheet of 2x2 bundles (black background) into per-species sprites.

    python3 tools/art/import_grid.py <sheet.png> <out_dir> --cols 0,384,768,1152,1536 --rows 0,215,426,624,821,1024 --ids ids.txt

ids.txt: one line per bundle, ids in reading order (top-left, top-right, bottom-left, bottom-right).
Each cell: the label strip at the top is skipped, the dark background is keyed out softly (so glows
survive), pieces are grouped by connected parts and assigned to the nearest quadrant, then each
creature is cropped and written as <id>.png at its native size for import_zip.py / review.
"""
import sys,os
from PIL import Image, ImageFilter
import numpy as np

def label(mask):
    h,w=mask.shape;lab=np.zeros((h,w),np.int32);cur=0;info=[]
    for y in range(h):
        row=mask[y]
        for x in np.nonzero(row)[0]:
            if lab[y,x]:continue
            cur+=1;lab[y,x]=cur;stack=[(y,x)];n=0;sx=sy=0;x0=x1=x;y0=y1=y
            while stack:
                cy,cx=stack.pop();n+=1;sx+=cx;sy+=cy;x0=min(x0,cx);x1=max(x1,cx);y0=min(y0,cy);y1=max(y1,cy)
                for ny,nx in ((cy-1,cx),(cy+1,cx),(cy,cx-1),(cy,cx+1)):
                    if 0<=ny<h and 0<=nx<w and mask[ny,nx] and not lab[ny,nx]:lab[ny,nx]=cur;stack.append((ny,nx))
            info.append((cur,n,sx/n,sy/n,x0,y0,x1,y1))
    return lab,info

def main():
    args=sys.argv;sheet=args[1];out=args[2];os.makedirs(out,exist_ok=True)
    cols=[int(v) for v in args[args.index('--cols')+1].split(',')];rows=[int(v) for v in args[args.index('--rows')+1].split(',')]
    ids=[l.split() for l in open(args[args.index('--ids')+1],encoding='utf-8') if l.strip()]
    im=Image.open(sheet).convert('RGB');A=np.asarray(im).astype(np.float32)
    k=0;report=[]
    for r in range(len(rows)-1):
        for c in range(len(cols)-1):
            if k>=len(ids):break
            bid=ids[k];k+=1
            x0,x1=cols[c]+4,cols[c+1]-4;y0,y1=rows[r]+30,rows[r+1]-4
            cell=A[y0:y1,x0:x1];lum=cell.max(axis=2)
            core=lum>34
            grown=np.asarray(Image.fromarray((core*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(7)))>0
            # a creature touching its neighbour across the cell's middle gets cut at the middle line
            H0,W0=grown.shape;lab0,info0=label(grown)
            for (lid,n,cx,cy,bx0,by0,bx1,by1) in info0:
                if by0<H0*0.35 and by1>H0*0.65 and len(bid)==4: grown[H0//2-1:H0//2+1,bx0:bx1+1]&=~(lab0[H0//2-1:H0//2+1,bx0:bx1+1]==lid)
                if bx0<W0*0.35 and bx1>W0*0.65 and len(bid)>=2: grown[by0:by1+1,W0//2-1:W0//2+1]&=~(lab0[by0:by1+1,W0//2-1:W0//2+1]==lid)
            lab,info=label(grown)
            H,W=grown.shape;centers=[(W*0.25,H*0.25),(W*0.75,H*0.25),(W*0.25,H*0.75),(W*0.75,H*0.75)][:len(bid)] if len(bid)>2 else [(W*0.25,H*0.5),(W*0.75,H*0.5)]
            if len(bid)==3: centers=[(W*0.25,H*0.5),(W*0.75,H*0.5),(W*0.5,H*0.5)]
            assign={i:[] for i in range(len(centers))}
            for (lid,n,cx,cy,bx0,by0,bx1,by1) in info:
                if n<25:continue
                d=[(cx-px)**2+(cy-py)**2 for px,py in centers];assign[int(np.argmin(d))].append(lid)
            for qi,fid in enumerate(bid):
                if not assign.get(qi):report.append(f'{fid}: nothing found');continue
                m=np.isin(lab,assign[qi])
                ys,xs=np.nonzero(m);bx0,bx1,by0,by1=xs.min(),xs.max(),ys.min(),ys.max()
                # touching the cell edge means it may be clipped
                edge=bx0<=1 or by0<=1 or bx1>=W-2 or by1>=H-2
                alpha=np.clip((lum-14)/(60-14),0,1)*m
                rgba=np.dstack([cell,alpha*255]).astype(np.uint8)
                sp=Image.fromarray(rgba,'RGBA').crop((max(0,bx0-2),max(0,by0-2),min(W,bx1+3),min(H,by1+3)))
                sp.save(os.path.join(out,fid+'.png'))
                report.append(f'{fid}: {sp.width}x{sp.height}'+(' EDGE' if edge else ''))
    print('\n'.join(report))
if __name__=='__main__':main()

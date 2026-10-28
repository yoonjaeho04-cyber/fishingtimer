#!/usr/bin/env python3
"""Import a folder of <id>.png creature cutouts (e.g. from a GPT sheet) into assets/fish.
Cleans each cutout: hard alpha, fill enclosed holes, keep the largest piece (drops neighbours' fins
and stray text), crop, then fit into 96x64 and 192x128.
    python3 tools/art/import_zip.py <folder> [--skip 3-17,...]
"""
import sys,os
from PIL import Image, ImageFilter
import numpy as np

def largest_component(mask):
    h,w=mask.shape;lab=np.zeros((h,w),np.int32);cur=0;best=(0,0)
    stack=[]
    for y in range(h):
        for x in range(w):
            if mask[y,x] and lab[y,x]==0:
                cur+=1;lab[y,x]=cur;stack.append((y,x));n=0
                while stack:
                    cy,cx=stack.pop();n+=1
                    for ny,nx in ((cy-1,cx),(cy+1,cx),(cy,cx-1),(cy,cx+1)):
                        if 0<=ny<h and 0<=nx<w and mask[ny,nx] and lab[ny,nx]==0: lab[ny,nx]=cur;stack.append((ny,nx))
                if n>best[1]: best=(cur,n)
    return lab==best[0]

def fill_holes(mask):
    h,w=mask.shape;outside=np.zeros((h,w),bool);stack=[]
    for x in range(w):
        for y in (0,h-1):
            if not mask[y,x] and not outside[y,x]: outside[y,x]=True;stack.append((y,x))
    for y in range(h):
        for x in (0,w-1):
            if not mask[y,x] and not outside[y,x]: outside[y,x]=True;stack.append((y,x))
    while stack:
        cy,cx=stack.pop()
        for ny,nx in ((cy-1,cx),(cy+1,cx),(cy,cx-1),(cy,cx+1)):
            if 0<=ny<h and 0<=nx<w and not mask[ny,nx] and not outside[ny,nx]: outside[ny,nx]=True;stack.append((ny,nx))
    return ~outside

def clean(im):
    im=im.convert('RGBA');a=np.asarray(im).copy()
    alpha=a[...,3]>40
    # close small gaps so thin fins join the body, then keep the main piece and fill holes
    m=Image.fromarray((alpha*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.MinFilter(5))
    m=np.asarray(m)>127
    m=largest_component(m)
    m=fill_holes(m)
    # where we filled a hole, synthesize colour from the blurred neighbourhood
    rgb=Image.fromarray(a[...,:3]);blur=np.asarray(rgb.filter(ImageFilter.GaussianBlur(3)))
    filled=m&~alpha
    a[filled,:3]=blur[filled]
    a[...,3]=np.where(m,255,0).astype(np.uint8)
    # soften the edge a touch
    out=Image.fromarray(a,'RGBA');al=out.getchannel('A').filter(ImageFilter.GaussianBlur(0.8));out.putalpha(al)
    return out

def crop_content(im,pad=3):
    a=np.asarray(im)[...,3];ys,xs=np.where(a>30)
    if len(xs)==0:return im
    return im.crop((max(0,xs.min()-pad),max(0,ys.min()-pad),min(im.width,xs.max()+pad+1),min(im.height,ys.max()+pad+1)))

def fit(im,W,H,margin=0.05):
    box=Image.new('RGBA',(W,H),(0,0,0,0));mw,mh=int(W*(1-2*margin)),int(H*(1-2*margin))
    s=min(mw/im.width,mh/im.height);r=im.resize((max(1,round(im.width*s)),max(1,round(im.height*s))),Image.LANCZOS)
    box.paste(r,((W-r.width)//2,(H-r.height)//2),r);return box

def main():
    folder=sys.argv[1];skip=set()
    if '--skip' in sys.argv: skip=set(sys.argv[sys.argv.index('--skip')+1].split(','))
    root=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))));out=os.path.join(root,'assets','fish');os.makedirs(out,exist_ok=True)
    n=0
    for f in sorted(os.listdir(folder)):
        if not f.lower().endswith('.png'):continue
        fid=f[:-4]
        if fid in skip: print('skip',fid);continue
        im=clean(Image.open(os.path.join(folder,f)));im=crop_content(im)
        fit(im,96,64).save(os.path.join(out,fid+'.png'),optimize=True);fit(im,192,128).save(os.path.join(out,fid+'@2.png'),optimize=True);n+=1
    print('imported',n)
if __name__=='__main__':main()

#!/usr/bin/env python3
"""Turn a generated character picture (or, with --ally, a companion picture into assets/ally at 48x64 and 96x128) (black or transparent background, facing right) into hero sprites.

    python3 tools/art/import_hero.py <input> <cls> [--flip]

cls is one of rogue, mage, knight, bard, druid. Writes assets/hero/<cls>.png (64x128, used in the scene
at 32x64) and assets/hero/<cls>@2.png (128x256, character picker). The background is removed by
flood-filling the near-black area that touches the border, so dark clothing inside the figure survives.
The figure is bottom-aligned and lifted a little in brightness so it reads against the dark scene.
"""
import sys,os
from collections import deque
from PIL import Image, ImageEnhance
import numpy as np

def crop_content(im, thr=22, pad=6):
    a=np.asarray(im.convert('RGB')).max(axis=2)
    ys,xs=np.where(a>thr)
    if len(xs)==0: return im
    x0,x1,y0,y1=xs.min(),xs.max(),ys.min(),ys.max()
    return im.crop((max(0,x0-pad),max(0,y0-pad),min(im.width,x1+pad+1),min(im.height,y1+pad+1)))

def fit_bottom_rgb(im, W, H, margin=0.03):
    box=Image.new('RGB',(W,H),(0,0,0))
    mw,mh=int(W*(1-margin*2)),int(H*(1-margin))
    s=min(mw/im.width, mh/im.height)
    r=im.convert('RGB').resize((max(1,round(im.width*s)),max(1,round(im.height*s))),Image.LANCZOS)
    box.paste(r,((W-r.width)//2,H-r.height-int(H*margin)))
    return box

def key_by_flood(rgb, thr=6, soft=22):
    """alpha=0 for near-black pixels connected to the border; soft ramp on the rim; opaque inside."""
    a=np.asarray(rgb).astype(np.float32); lum=a.max(axis=2); h,w=lum.shape
    bg=lum<=soft; reach=np.zeros((h,w),bool); q=deque()
    for x in range(w):
        for y in (0,h-1):
            if bg[y,x] and not reach[y,x]: reach[y,x]=True; q.append((y,x))
    for y in range(h):
        for x in (0,w-1):
            if bg[y,x] and not reach[y,x]: reach[y,x]=True; q.append((y,x))
    while q:
        y,x=q.popleft()
        for ny,nx in ((y-1,x),(y+1,x),(y,x-1),(y,x+1)):
            if 0<=ny<h and 0<=nx<w and bg[ny,nx] and not reach[ny,nx]:
                reach[ny,nx]=True; q.append((ny,nx))
    alpha=np.ones((h,w),np.float32)
    ramp=np.clip((lum-thr)/(soft-thr),0,1)
    alpha[reach]=ramp[reach]
    out=np.dstack([a,alpha*255]).astype(np.uint8)
    return Image.fromarray(out,'RGBA')

def lift(im, bright=1.32, contrast=1.10):
    rgb=im.convert('RGB'); rgb=ImageEnhance.Brightness(rgb).enhance(bright); rgb=ImageEnhance.Contrast(rgb).enhance(contrast)
    out=rgb.convert('RGBA'); out.putalpha(im.getchannel('A')); return out

def main():
    src,cls=sys.argv[1],sys.argv[2]; flip='--flip' in sys.argv
    sub='ally' if '--ally' in sys.argv else 'hero'
    sizes=((48,64,''),(96,128,'@2')) if sub=='ally' else ((64,128,''),(128,256,'@2'))
    im=Image.open(src).convert('RGBA')
    if np.asarray(im)[...,3].min()<255:
        bg=Image.new('RGBA',im.size,(0,0,0,255)); bg.alpha_composite(im); im=bg
    im=crop_content(im)
    if flip: im=im.transpose(Image.FLIP_LEFT_RIGHT)
    root=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','assets',sub)
    os.makedirs(root,exist_ok=True)
    for W,H,suf in sizes:
        lift(key_by_flood(fit_bottom_rgb(im,W,H))).save(os.path.join(root,cls+suf+'.png'))
    print('wrote',cls)

if __name__=='__main__': main()

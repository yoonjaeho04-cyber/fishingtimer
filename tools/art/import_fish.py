#!/usr/bin/env python3
"""Turn a generated creature picture (any size, black or transparent background) into game sprites.

    python3 tools/art/import_fish.py <input.png> <id> [--flip]

Writes assets/fish/<id>.png (96x64) and assets/fish/<id>@2.png (192x128), creature centered,
facing right (pass --flip if the picture faces left). Near-black background is keyed out; the
glow around lights is kept as soft alpha.
"""
import sys,os
from PIL import Image, ImageFilter
import numpy as np

def key_black(im, thr=28, soft=70):
    a=np.asarray(im.convert('RGBA')).astype(np.float32)
    rgb=a[...,:3]; lum=rgb.max(axis=2)
    # alpha ramps from 0 (lum<=thr) to 1 (lum>=soft); existing alpha is respected
    alpha=np.clip((lum-thr)/(soft-thr),0,1)*(a[...,3]/255.0)
    out=a.copy(); out[...,3]=alpha*255
    return Image.fromarray(out.astype(np.uint8),'RGBA')

def crop_content(im, pad=4, min_alpha=40):
    a=np.asarray(im)[...,3]
    ys,xs=np.where(a>min_alpha)
    if len(xs)==0: return im
    x0,x1,y0,y1=xs.min(),xs.max(),ys.min(),ys.max()
    return im.crop((max(0,x0-pad),max(0,y0-pad),min(im.width,x1+pad+1),min(im.height,y1+pad+1)))

def fit(im, W, H, margin=0.06):
    box=Image.new('RGBA',(W,H),(0,0,0,0))
    mw,mh=int(W*(1-margin*2)),int(H*(1-margin*2))
    s=min(mw/im.width, mh/im.height)
    r=im.resize((max(1,round(im.width*s)),max(1,round(im.height*s))),Image.LANCZOS)
    box.paste(r,((W-r.width)//2,(H-r.height)//2),r)
    return box

def main():
    src,fid=sys.argv[1],sys.argv[2]; flip='--flip' in sys.argv
    im=Image.open(src).convert('RGBA')
    if np.asarray(im)[...,3].min()==255: im=key_black(im)
    im=crop_content(im)
    if flip: im=im.transpose(Image.FLIP_LEFT_RIGHT)
    root=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    out=os.path.join(root,'assets','fish'); os.makedirs(out,exist_ok=True)
    fit(im,96,64).save(os.path.join(out,fid+'.png'),optimize=True)
    fit(im,192,128).save(os.path.join(out,fid+'@2.png'),optimize=True)
    print('wrote',os.path.join(out,fid+'.png'),'and @2')
if __name__=='__main__': main()

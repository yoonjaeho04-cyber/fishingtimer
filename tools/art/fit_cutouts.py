#!/usr/bin/env python3
"""Fit clean transparent cutouts (<id>.png, e.g. from import_grid.py) into the game's two sizes.
Keeps soft alpha (glows) and every piece; only crops to content and scales.
    python3 tools/art/fit_cutouts.py <folder>
"""
import sys,os
from PIL import Image
import numpy as np
def fit(im,W,H,margin=0.04):
    box=Image.new('RGBA',(W,H),(0,0,0,0));mw,mh=int(W*(1-2*margin)),int(H*(1-2*margin))
    s=min(mw/im.width,mh/im.height);r=im.resize((max(1,round(im.width*s)),max(1,round(im.height*s))),Image.LANCZOS)
    box.paste(r,((W-r.width)//2,(H-r.height)//2),r);return box
root=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))));out=os.path.join(root,'assets','fish');os.makedirs(out,exist_ok=True)
n=0
for f in sorted(os.listdir(sys.argv[1])):
    if not f.endswith('.png'):continue
    im=Image.open(os.path.join(sys.argv[1],f)).convert('RGBA');a=np.asarray(im)[...,3];ys,xs=np.nonzero(a>20)
    im=im.crop((xs.min(),ys.min(),xs.max()+1,ys.max()+1));fid=f[:-4]
    fit(im,96,64).save(os.path.join(out,fid+'.png'),optimize=True);fit(im,192,128).save(os.path.join(out,fid+'@2.png'),optimize=True);n+=1
print('fitted',n)

#!/usr/bin/env python3
"""Extract the current (old) fish drawing code and fish data from index.html into old.js,
so mock.html can show old vs new side by side. Run from the repo root:
    python3 tools/fishmock/build.py && node tools/fishmock/shot.js
"""
import os
root=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
s=open(os.path.join(root,'index.html'),encoding='utf-8').read()
def grab(start,end):
    i=s.index(start); j=s.index(end,i); return s[i:j]
old=grab('const FISH_SIL={','const fishCache={}')+grab('const fishCache={}','function drawFish(')+grab('const nz=','\n')+'\n'+grab('const SPOTS=[','const CHARS=[')
open(os.path.join(root,'tools','fishmock','old.js'),'w',encoding='utf-8').write(old)
print('wrote tools/fishmock/old.js')

#!/usr/bin/env python3
"""Extract the fish table (SPOTS, allFish, fishById) and the nz noise helper from index.html into old.js
so the mockup pages can render species by id. Run from the repo root:
    python3 tools/fishmock/build.py && node tools/fishmock/s96shot.js     # tools/fishmock/s96.png
    node tools/fishmock/pick96.js 0-6 4-11                                # tools/fishmock/last96.png
    node tools/fishmock/heroshot.js                                       # heromock.png + hero-scene-*.png
"""
import os,re
root=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
s=open(os.path.join(root,'index.html'),encoding='utf-8').read()
def grab(start,end):
    i=s.index(start); j=s.index(end,i); return s[i:j]
old=grab('const SPOTS=[','const CHARS=[')+re.search(r"const nz=.*?\n",s).group(0)
old+=grab("const OUT='#0b0a0e';","\n")+"\n"
open(os.path.join(root,'tools','fishmock','old.js'),'w',encoding='utf-8').write(old)
print('wrote tools/fishmock/old.js')

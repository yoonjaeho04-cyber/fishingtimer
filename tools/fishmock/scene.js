// Show the new fish at real size inside the actual game scene (tank fish swimming + catch popup)
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({viewport:{width:1100,height:760},deviceScaleFactor:2})).newPage();
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file:///home/user/fishingtimer/index.html');await p.waitForTimeout(300);
await p.addScriptTag({content:fs.readFileSync(__dirname+'/fish2.js','utf8')});
await p.addScriptTag({content:fs.readFileSync(__dirname+'/species.js','utf8')});
await p.evaluate(()=>{
  const cache={};window.drawFish=function(g,f,x,y,scale){if(FISH2[f.id]){const c=cache[f.id]||(cache[f.id]=renderFish(FISH2[f.id]));g.imageSmoothingEnabled=false;g.drawImage(c,x,y-8*scale,48*scale,32*scale)}else{const c=fishCanvas(f);g.imageSmoothingEnabled=false;g.drawImage(c,x,y,24*scale,16*scale)}};
  S.char='rogue';S.gold=12345;S.tanks=[[{id:'0-6',cm:30},{id:'0-8',cm:90},{id:'0-11',cm:12},{id:'0-3',cm:10}]];S.tankSel=0;
  document.querySelectorAll('.overlay').forEach(o=>o.remove());save();renderAll();
  // force a catch popup with the new eel at 2x (the game draws it at 4x of 24x16 = same box)
  const orig=window.drawFish;window.drawFish=function(g,f,x,y,scale){if(scale===4&&FISH2[f.id])return orig(g,f,x+4,y+8,2);return orig(g,f,x,y,scale)};
  bite=performance.now();bitePop={id:'0-9',cm:25};
});
await p.waitForTimeout(700);
const sc=await p.$('canvas.scene');await sc.screenshot({path:__dirname+'/scene.png'});
await p.waitForTimeout(2500);await sc.screenshot({path:__dirname+'/scene2.png'});
await b.close()})();

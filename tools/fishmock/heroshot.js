// Render the hero mockup sheet, and the new heroes placed in the real game scene.
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();
  const p=await (await b.newContext({viewport:{width:1000,height:700},deviceScaleFactor:2})).newPage();
  p.on('pageerror',e=>console.log('ERR',e.message));
  await p.goto('file://'+__dirname+'/heromock.html');await p.waitForTimeout(300);await p.screenshot({path:__dirname+'/heromock.png',fullPage:true});
  // in-scene check: swap the hero sprite for the new one, one screenshot per class
  const s=await (await b.newContext({viewport:{width:1100,height:760},deviceScaleFactor:2})).newPage();
  s.on('pageerror',e=>console.log('ERR',e.message));
  await s.goto('file:///home/user/fishingtimer/index.html');await s.waitForTimeout(300);
  await s.addScriptTag({content:fs.readFileSync(__dirname+'/fish2.js','utf8')});
  await s.addScriptTag({content:fs.readFileSync(__dirname+'/heroes.js','utf8')});
  await s.evaluate(()=>{const cache={};const od=window.drawSprite;window.drawSprite=function(g,sp,x,y,scale=1){if(sp.__hero){const c=cache[sp.__hero]||(cache[sp.__hero]=renderFish(HERO2[sp.__hero]));g.imageSmoothingEnabled=false;g.drawImage(c,x,y,32*scale,64*scale);return}return od(g,sp,x,y,scale)};
    window.heroSprite=cls=>({__hero:cls,rows:[],pal:{}});document.querySelectorAll('.overlay').forEach(o=>o.remove());});
  for(const id of ['rogue','mage','knight','bard','druid']){await s.evaluate(id=>{S.char=id;renderAll()},id);await s.waitForTimeout(250);const sc=await s.$('canvas.scene');await sc.screenshot({path:__dirname+'/hero-scene-'+id+'.png'})}
  await b.close()})();

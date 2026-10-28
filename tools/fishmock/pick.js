const {chromium}=require('playwright');(async()=>{const ids=process.argv.slice(2);const b=await chromium.launch();const p=await (await b.newContext({viewport:{width:920,height:900}})).newPage();
p.on('pageerror',e=>console.log('ERR',e.message));await p.goto('file://'+__dirname+'/detail.html');await p.waitForTimeout(300);
await p.evaluate(ids=>{document.body.innerHTML='';const g=document.createElement('div');g.className='g';ids.forEach(id=>{const f=fishById(id);const d=document.createElement('div');const c=document.createElement('canvas');c.width=48;c.height=32;c.getContext('2d').drawImage(renderFish(FISH2[id],f.r),0,0);d.append(c,document.createTextNode(f.name));g.append(d)});document.body.append(g)},ids);
await p.screenshot({path:__dirname+'/last.png',fullPage:true});await b.close()})();

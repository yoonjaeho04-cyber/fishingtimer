const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await (await b.newContext({viewport:{width:820,height:1600},deviceScaleFactor:2})).newPage();
p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>{if(m.type()==='error')console.log('CONSOLE',m.text())});
await p.goto('file://'+__dirname+'/mock.html');await p.waitForTimeout(400);await p.screenshot({path:__dirname+'/mock.png',fullPage:true});await b.close()})();

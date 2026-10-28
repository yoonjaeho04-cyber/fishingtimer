const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await (await b.newContext({viewport:{width:920,height:900},deviceScaleFactor:1})).newPage();
p.on('pageerror',e=>console.log('ERR',e.message));await p.goto('file://'+__dirname+'/detail.html');await p.waitForTimeout(300);await p.screenshot({path:__dirname+'/detail.png',fullPage:true});await b.close()})();

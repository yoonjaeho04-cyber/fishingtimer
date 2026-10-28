const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await (await b.newContext({viewport:{width:900,height:900},deviceScaleFactor:2})).newPage();
p.on('pageerror',e=>console.log('ERR',e.message));await p.goto('file://'+__dirname+'/s96.html');await p.waitForTimeout(500);await p.screenshot({path:__dirname+'/s96.png',fullPage:true});await b.close()})();

// crop the detail grid to only the last N species for quick review
const {chromium}=require('playwright');(async()=>{const n=+process.argv[2]||8;const b=await chromium.launch();const p=await (await b.newContext({viewport:{width:920,height:900}})).newPage();
p.on('pageerror',e=>console.log('ERR',e.message));await p.goto('file://'+__dirname+'/detail.html');await p.waitForTimeout(300);
await p.evaluate(n=>{const d=[...document.body.children];d.slice(0,d.length-n).forEach(x=>x.remove())},n);
await p.screenshot({path:__dirname+'/last.png',fullPage:true});await b.close()})();

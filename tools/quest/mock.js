// Quest board mockup injected into the real game page (no game code changed).
const {chromium}=require('playwright');const D=__dirname+'/';
const CSS=`
.qboard{position:relative;padding:14px 12px 12px;background:
 repeating-linear-gradient(0deg,#2a1e14 0 22px,#1f160e 22px 24px),#24190f;border:3px solid #120c08;box-shadow:inset 0 0 0 2px #3b2a1a,inset 0 0 24px #000}
.qhead{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px}
.qhead h3{margin:0;font:18px var(--display);color:var(--gold);text-shadow:2px 2px 0 #000}
.qhead .hint{color:#a8987a}
.qgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
@media (max-width:640px){.qgrid{grid-template-columns:1fr}}
.note{position:relative;background:linear-gradient(#c9b78f,#b4a078);color:#2a1d12;padding:12px 10px 10px;border:1px solid #6b5636;
 box-shadow:2px 3px 0 #0008,inset 0 0 18px #7a623a88;display:flex;flex-direction:column;gap:6px;min-height:230px}
.note:nth-child(1){transform:rotate(-1deg)}.note:nth-child(2){transform:rotate(.8deg)}.note:nth-child(3){transform:rotate(-.5deg)}
.note::before{content:"";position:absolute;top:-6px;left:50%;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#7a2a22;box-shadow:0 0 0 2px #2a0f0c,1px 1px 0 #000}
.note .who{font:11px var(--display);color:#5c4628;letter-spacing:.5px}
.note h4{margin:0;font:15px var(--display);color:#22160c}
.note .art{background:#10161f;border:2px solid #3b2a1a;height:72px;display:grid;place-items:center}
.note .art canvas{width:96px;height:64px;image-rendering:pixelated}
.note .cond{font-size:11px;color:#4a3820}
.note .prog{display:flex;align-items:center;gap:6px;font:12px var(--display)}
.note .prog .bar{width:auto;flex:1;height:7px;margin:0;background:#3b2a1a;box-shadow:none;border:1px solid #2a1d12}
.note .prog .bar i{background:#6a3a1a}
.note .rew{font-size:12px;border-top:1px dashed #6b5636;padding-top:6px}
.note .rew b{color:#6a3a10}
.note .foot{display:flex;justify-content:space-between;align-items:center;margin-top:auto;gap:6px}
.note .foot .t{font-size:10px;color:#5c4628}
.note .stamp{position:absolute;right:8px;top:30px;transform:rotate(-14deg);font:16px var(--display);color:#8a2a1a;border:2px solid #8a2a1a;padding:1px 6px;opacity:.85}
.note.done{box-shadow:2px 3px 0 #0008,inset 0 0 18px #7a623a88,0 0 0 2px #d9b05a,0 0 14px #d9b05a66}
.qfoot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;flex-wrap:wrap;gap:8px}
.qfoot .hint{color:#a8987a}
.rep{display:flex;gap:4px;align-items:center;font:12px var(--display);color:#c9b78f}
.rep i{width:10px;height:10px;background:#3b2a1a;border:1px solid #000;display:inline-block}.rep i.on{background:#d9b05a}
`;
(async()=>{const b=await chromium.launch();
 for(const [vw,vh,name] of [[1100,900,'desktop'],[390,1600,'mobile']]){
 const p=await (await b.newContext({viewport:{width:vw,height:vh},deviceScaleFactor:2})).newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.goto('file:///home/user/fishingtimer/index.html');await p.waitForTimeout(500);
 await p.addStyleTag({content:CSS});
 await p.evaluate(()=>{
  S.char='bard';S.maps=[0,1,2];S.gold=4200;S.tanks=[[{id:'0-5',cm:40,at:Date.now()}]];save();document.querySelectorAll('.overlay').forEach(o=>o.remove());renderAll();
  // add a tab button after 도감
  const codexBtn=document.querySelector('[data-tab=codex]');const qb=codexBtn.cloneNode(true);qb.dataset.tab='quest';qb.textContent='의뢰';qb.setAttribute('aria-selected','true');
  const c=document.createElement('canvas');c.width=12;c.height=12;drawTabIcon(c.getContext('2d'),'quill');qb.prepend(c);codexBtn.after(qb);
  document.querySelectorAll('#tabs [role=tab]').forEach(x=>{if(x!==qb)x.setAttribute('aria-selected','false')});
  const pane=$('pane');pane.innerHTML='';
  const fishCv=id=>{const cv=document.createElement('canvas');cv.width=96;cv.height=64;drawFishHD(cv.getContext('2d'),fishById(id),0,0,1);return cv};
  const notes=[
   {who:'여관 주인 브람',title:'유령잉어 3마리 납품',fish:'0-5',cond:'안개 호수 · 밤에만 · 어항에서 넘김',cur:1,max:3,unit:'마리',rew:'<b>희귀 미끼 ×10</b> · 300 G',t:'2시간 41분 뒤 교체',btn:['납품 (어항에 1)','btn'],state:''},
   {who:'등대지기 노파',title:'노을에 1시간 낚시',fish:null,cond:'어느 낚시터든 · 노을 시간대에 출항',cur:40,max:60,unit:'분',rew:'<b>500 G</b> · 등대지기의 호의 +1',t:'1시간 12분 뒤 교체',btn:['진행 중','btn',true],state:''},
   {who:'마법사 길드',title:'희귀 이상 2마리 낚기',fish:'1-3',cond:'요정의 샘 · 한 번 출항 안에',cur:2,max:2,unit:'마리',rew:'<b>마나 수정 장신구</b> (희귀 확률 +3%)',t:'완료됨',btn:['보상 받기','btn primary'],state:'done'}];
  const board=document.createElement('div');board.className='qboard';
  board.innerHTML=`<div class="qhead"><h3>여관 의뢰판</h3><span class="hint">의뢰는 한 시간마다 하나씩 새로 붙어요</span></div>`;
  const grid=document.createElement('div');grid.className='qgrid';
  notes.forEach(n=>{const d=document.createElement('div');d.className='note '+n.state;
   d.innerHTML=`<div class="who">${n.who}</div><h4>${n.title}</h4><div class="art"></div><div class="cond">${n.cond}</div>
   <div class="prog"><span>${n.cur} / ${n.max}${n.unit}</span><div class="bar"><i style="width:${Math.round(n.cur/n.max*100)}%"></i></div></div>
   <div class="rew">보상: ${n.rew}</div><div class="foot"><span class="t">${n.t}</span><button class="${n.btn[1]} small" ${n.btn[2]?'disabled':''}>${n.btn[0]}</button></div>${n.state==='done'?'<div class="stamp">완료</div>':''}`;
   const art=d.querySelector('.art');if(n.fish)art.append(fishCv(n.fish));else{art.innerHTML='<span style="font:13px var(--display);color:#d9a35a">☀ 노을 1:00</span>'}
   grid.append(d)});
  board.append(grid);
  const f=document.createElement('div');f.className='qfoot';f.innerHTML=`<span class="rep">여관 평판 <i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i> · 완료한 의뢰 12</span><span class="hint">다음 의뢰까지 38분 · <button class="btn small">지금 새로 받기 · 200 G</button></span>`;
  board.append(f);pane.append(board);
 });
 await p.waitForTimeout(300);
 if(name==='desktop'){const el=await p.$('.qboard');await el.screenshot({path:D+'quest-board.png'});await p.screenshot({path:D+'quest-page.png'})}
 else{const el=await p.$('#pane');await el.screenshot({path:D+'quest-mobile.png'})}
 console.log(name,'errors',errs)}
 await b.close()})();

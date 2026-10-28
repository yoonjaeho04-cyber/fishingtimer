// ---------- 96x64 part kits ----------
// All coordinates are in 96x64 space, creatures face right, light from the upper-left.
// A kit returns an ordered parts array (back to front) that a species can extend with props.
const W2=96,H2=64;
const DEF=(o,d)=>Object.assign({},d,o);
// fish eye: sclera, iris, slit pupil, glint. r = sclera radius (2..5)
function fishEye(x,y,r,o={}){const p=[];
  if(o.hollow){p.push({t:'e',a:[x,y,r,r],m:M(0,0,8),flat:true,tones:1,ink:false});if(o.light!==false)p.push({t:'px',a:[[Math.round(x),Math.round(y),3],[Math.round(x)+1,Math.round(y),3]],m:M(o.h??190,o.s??60,o.l??72),ink:false});return p}
  p.push({t:'e',a:[x,y,r,r],m:M(o.sh??45,o.ss??15,o.sl??80,{step:6}),ink:o.ink??true});
  if(r>=2.5)p.push({t:'e',a:[x+r*0.15,y,r*0.62,r*0.68],m:M(o.h??40,o.s??35,o.l??42,{step:8}),ink:false});
  const px=Math.round(x+r*0.25),py=Math.round(y);
  p.push({t:'px',a:[[px,py,0],[px,py-1,0],[px,py+1,0]].slice(0,r>=3?3:1),m:M(0,0,6),ink:false});
  if(o.glint!==false)p.push({t:'px',a:[[Math.round(x-r*0.45),Math.round(y-r*0.45),4]],m:M(0,0,97),ink:false});
  return p}
function mouth(x0,y0,x1,y1,mat){return {t:'line',a:[x0,y0,x1,y1],m:mat||M(0,0,12),tone:0,ink:false}}
// tail fin attached at (x,cy): type fork | fan | round | ragged | whip
function tail(x,cy,o={}){const len=o.len||14,sp=o.sp||10,m=o.m||M(200,10,36);const ty=o.type||'fork';
  if(ty==='fork')return[{t:'poly',a:[[x-len,cy-sp],[x+2,cy-4],[x+2,cy+4],[x-len,cy+sp],[x-len*0.45,cy]],m,ink:true,tex:o.tex||'rays',holes:o.holes}];
  if(ty==='fan')return[{t:'poly',a:[[x-len,cy-sp],[x-len*0.6,cy-sp*0.8],[x+2,cy-4],[x+2,cy+4],[x-len*0.6,cy+sp*0.8],[x-len,cy+sp],[x-len*0.9,cy]],m,ink:true,tex:o.tex||'rays',holes:o.holes}];
  if(ty==='round')return[{t:'e',a:[x-len*0.5,cy,len*0.55,sp],m,ink:true,tex:o.tex||'rays',holes:o.holes}];
  if(ty==='ragged')return[{t:'poly',a:[[x-len,cy-sp],[x-len*0.7,cy-sp*0.5],[x-len*0.9,cy-sp*0.2],[x+2,cy-4],[x+2,cy+4],[x-len*0.85,cy+sp*0.3],[x-len*0.6,cy+sp*0.6],[x-len,cy+sp],[x-len*0.4,cy]],m,ink:true,tex:'rays',holes:o.holes||[[x-len*0.6,cy-sp*0.3,1.6],[x-len*0.5,cy+sp*0.4,1.3]]}];
  if(ty==='whip')return[{t:'curve',a:[x,cy,x-len*0.6,cy+sp*0.4,x-len,cy+sp],th:[2,0.6],m}];
  return[]}
// dorsal fin on the back between x0..x1, base at yb, height h: soft | spiny | sail | ragged | low
function dorsal(x0,x1,yb,h,o={}){const m=o.m||M(200,10,34);const ty=o.type||'soft';const w=x1-x0;
  if(ty==='soft')return[{t:'poly',a:[[x0,yb+2],[x0+w*0.25,yb-h],[x1-w*0.15,yb-h*0.55],[x1,yb+2]],m,ink:true,tex:'rays',holes:o.holes}];
  if(ty==='spiny'){const pts=[[x0,yb+2]];const n=o.n||5;for(let i=0;i<n;i++){const t=i/(n-1);pts.push([x0+w*t,yb-h*(1-t*0.5)]);if(i<n-1)pts.push([x0+w*(t+0.5/(n-1)),yb-h*0.35])}pts.push([x1,yb+2]);return[{t:'poly',a:pts,m,ink:true,tex:'rays'}]}
  if(ty==='sail')return[{t:'poly',a:[[x0,yb+2],[x0+w*0.15,yb-h],[x0+w*0.55,yb-h*0.9],[x1,yb-h*0.3],[x1,yb+2]],m,ink:true,tex:'rays',holes:o.holes}];
  if(ty==='ragged')return[{t:'poly',a:[[x0,yb+2],[x0+w*0.2,yb-h],[x0+w*0.35,yb-h*0.5],[x0+w*0.5,yb-h*0.9],[x0+w*0.7,yb-h*0.4],[x0+w*0.85,yb-h*0.6],[x1,yb+2]],m,ink:true,tex:'rays',holes:o.holes||[[x0+w*0.4,yb-h*0.3,1.4]]}];
  if(ty==='low')return[{t:'poly',a:[[x0,yb+2],[x0+w*0.3,yb-h],[x1-w*0.2,yb-h],[x1,yb+2]],m,ink:true,tex:'rays'}];
  return[]}
function pectoral(x,y,o={}){const s=o.s||1,m=o.m||M(200,10,34);return[{t:'poly',a:[[x,y],[x+9*s,y+8*s],[x+13*s,y+1*s]],m,ink:true,tex:'rays',holes:o.holes}]}
function anal(x,y,o={}){const s=o.s||1,m=o.m||M(200,10,32);return[{t:'poly',a:[[x,y],[x+6*s,y+6*s],[x+12*s,y]],m,ink:true,tex:'rays'}]}
// generic fish body. o: cx,cy,rx,ry,rot,m,tex, back(bool), belly(bool), bellyM, gill, headM
function fishBody(o){const {cx,cy,rx,ry}=o;const m=o.m||M(200,14,44,{step:7});const p=[];
  p.push({t:'e',a:[cx,cy,rx,ry],m,rot:o.rot||0,tex:o.tex||'scales',rim:true,spec:o.spec});
  if(o.back!==false)p.push({t:'e',a:[cx-rx*0.1,cy-ry*0.5,rx*0.82,ry*0.42],m:o.backM||M(m.h,m.s+4,Math.max(8,m.l-14)),rot:o.rot||0,ink:false,lift:-0.1,tex:o.tex||'scales'});
  if(o.belly!==false)p.push({t:'e',a:[cx-rx*0.05,cy+ry*0.5,rx*0.7,ry*0.38],m:o.bellyM||M(m.h,Math.max(0,m.s-6),Math.min(92,m.l+16)),rot:o.rot||0,ink:false,lift:0.1});
  if(o.gill!==false)p.push({t:'curve',a:[cx+rx*0.52,cy-ry*0.6,cx+rx*0.42,cy,cx+rx*0.52,cy+ry*0.6],th:[0.7,0.7],m:M(m.h,m.s,Math.max(6,m.l-22)),ink:false});
  return p}
// crab: carapace, legs, two claws (pose: 'up' | 'down' | 'low' | 'point')
function crabKit(o){const cx=o.cx||48,cy=o.cy||36,rx=o.rx||22,ry=o.ry||12;const m=o.m||M(200,10,40,{step:7});const lm=o.legM||M(m.h,m.s,m.l-10);const p=[];
  const legs=[[-14,8,-22,20],[-8,10,-14,22],[8,10,14,22],[14,8,22,20]];legs.forEach(([ax,ay,bx,by])=>{p.push({t:'line',a:[cx+ax,cy+ay,cx+bx,cy+by],m:lm,tone:1,w:2});p.push({t:'line',a:[cx+bx,cy+by,cx+bx+(bx>0?2:-2),cy+by+4],m:lm,tone:0})});
  p.push({t:'e',a:[cx,cy,rx,ry],m,tex:o.tex||'grain',rim:true});
  p.push({t:'poly',a:[[cx-rx*0.8,cy-2],[cx+rx*0.8,cy-2],[cx+rx*0.65,cy-ry*0.75],[cx-rx*0.65,cy-ry*0.75]],m:M(m.h,m.s,m.l+8),ink:false,lift:0.1});
  const pose=o.pose||'up';const cm=o.clawM||M(m.h,m.s,m.l+4,{step:7});
  const claw=(sx,dir)=>{ // sx: shoulder x, dir -1 left / +1 right
    if(pose==='up'){p.push({t:'curve',a:[sx,cy-2,sx+dir*10,cy-10,sx+dir*14,cy-20],th:[3,2],m:cm});p.push({t:'poly',a:[[sx+dir*11,cy-21],[sx+dir*20,cy-24],[sx+dir*19,cy-16],[sx+dir*12,cy-15]],m:cm,ink:true});p.push({t:'px',a:[[Math.round(sx+dir*17),cy-20,0]],m:M(m.h,m.s,m.l-16)})}
    else if(pose==='low'){p.push({t:'e',a:[sx+dir*8,cy+4,7,4.5],m:cm,rot:dir*0.2,rim:true});p.push({t:'poly',a:[[sx+dir*13,cy+1],[sx+dir*22,cy+3],[sx+dir*20,cy+8],[sx+dir*13,cy+8]],m:cm,ink:true})}
    else if(pose==='point'){p.push({t:'curve',a:[sx,cy-2,sx+dir*14,cy-6,sx+dir*22,cy-18],th:[3,1.6],m:cm});p.push({t:'poly',a:[[sx+dir*19,cy-19],[sx+dir*27,cy-23],[sx+dir*26,cy-15],[sx+dir*20,cy-14]],m:cm,ink:true})}
    else {p.push({t:'e',a:[sx+dir*10,cy-4,7,5],m:cm,rot:-dir*0.5,rim:true});p.push({t:'poly',a:[[sx+dir*14,cy-10],[sx+dir*24,cy-8],[sx+dir*22,cy-2],[sx+dir*14,cy-2]],m:cm,ink:true})}};
  claw(cx-rx*0.75,-1);claw(cx+rx*0.75,1);
  if(o.eyes!==false){[cx-5,cx+5].forEach(ex=>{p.push({t:'line',a:[ex,cy-ry+2,ex,cy-ry-4],m:M(m.h,m.s,m.l-8),tone:1});p.push({t:'px',a:[[ex,cy-ry-5,0],[ex,cy-ry-6,0]],m:M(0,0,8)});p.push({t:'px',a:[[ex-1,cy-ry-6,4]],m:M(0,0,90),ink:false})})}
  return p}
// shrimp: arched body with segments, legs, antennae, rostrum
function shrimpKit(o){const m=o.m||M(60,30,44,{step:7});const x0=o.x0||24,x1=o.x1||72,cy=o.cy||32;const p=[];const lm=M(m.h,m.s,m.l-10);
  for(let i=0;i<5;i++){const x=x0+8+i*9;p.push({t:'line',a:[x,cy+8,x-3+i,cy+20],m:lm,tone:1,w:1})}
  p.push(...tail(x0+2,cy+2,{type:'fan',len:14,sp:9,m:M(m.h,m.s,m.l-4)}));
  p.push({t:'curve',a:[x0,cy+2,(x0+x1)/2,cy-12,x1,cy],th:[4.5,6.5],m,tex:o.tex||'bands',rim:true});
  for(let i=1;i<6;i++){const t=i/6;const x=x0+(x1-x0)*t,y=cy+2+(-14)*4*t*(1-t)-2;p.push({t:'px',a:[[Math.round(x),Math.round(y)-4,0],[Math.round(x),Math.round(y)-3,0]],m:M(m.h,m.s,m.l-18)})}
  p.push({t:'e',a:[x1+4,cy+2,9,6.5],m,rim:true});
  p.push({t:'poly',a:[[x1+10,cy-2],[x1+24,cy-8],[x1+22,cy+2]],m:M(m.h,m.s,m.l-4),ink:true});
  p.push({t:'line',a:[x1+8,cy-4,x1+24,cy-22],m:M(m.h,m.s,m.l-6),tone:1},{t:'line',a:[x1+10,cy-2,x1+26,cy-18],m:M(m.h,m.s,m.l-6),tone:1});
  p.push({t:'line',a:[x1+2,cy+7,x1+10,cy+16],m:lm,tone:1},{t:'line',a:[x1+6,cy+7,x1+14,cy+14],m:lm,tone:1});
  p.push(...fishEye(x1+5,cy,2,{sh:0,ss:0,sl:10,glint:true}));
  return p}
// turtle: shell, rim, legs, head, beak, heavy lid
function turtleKit(o){const cx=o.cx||42,cy=o.cy||34,rx=o.rx||28,ry=o.ry||15;const m=o.m||M(95,16,30,{step:7});const sk=o.skinM||M(85,16,34,{step:7});const p=[];
  p.push({t:'e',a:[cx-rx*0.75,cy+ry*0.65,8,4.5],m:sk,rot:0.5,rim:true},{t:'e',a:[cx+rx*0.85,cy+ry*0.75,8,4.5],m:sk,rot:-0.4,rim:true});
  p.push({t:'px',a:[[cx-rx*0.75-8|0,cy+ry*0.65+4|0,0],[cx-rx*0.75-6|0,cy+ry*0.65+5|0,0],[cx+rx*0.85+6|0,cy+ry*0.75+5|0,0],[cx+rx*0.85+8|0,cy+ry*0.75+4|0,0]],m:M(0,0,10)});
  p.push({t:'e',a:[cx,cy,rx,ry],m,tex:o.tex||'plates',rim:true});
  p.push({t:'poly',a:[[cx-rx,cy+2],[cx+rx,cy+2],[cx+rx*0.95,cy+ry*0.55],[cx-rx*0.95,cy+ry*0.55]],m:M(m.h,m.s-4,m.l-6),tex:'grain',ink:true});
  p.push({t:'e',a:[cx+rx+8,cy+4,12,7.5],m:sk,tex:'grain',rim:true});
  p.push({t:'poly',a:[[cx+rx+14,cy],[cx+rx+24,cy+4],[cx+rx+22,cy+10],[cx+rx+12,cy+10]],m:M(sk.h,sk.s,sk.l-4),ink:true});
  p.push(...fishEye(cx+rx+11,cy+1,2.6,{h:50,s:30,l:45}));
  p.push({t:'poly',a:[[cx+rx+7,cy-2],[cx+rx+15,cy-2],[cx+rx+15,cy],[cx+rx+7,cy]],m:M(sk.h,sk.s,sk.l-14),ink:false});
  return p}
// jellyfish: bell with rim, tentacles
function jellyKit(o){const cx=o.cx||48,cy=o.cy||24,rx=o.rx||24,ry=o.ry||17;const m=o.m||M(285,38,40,{step:7});const tm=o.tentM||M(m.h,m.s,m.l+10);const p=[];
  const n=o.n||5;for(let i=0;i<n;i++){const t=(i+0.5)/n;const x=cx-rx*0.7+rx*1.4*t;p.push({t:'curve',a:[x,cy+ry*0.6,x+(t-0.5)*10,cy+ry+14,x+(t-0.5)*22,H2-1],th:[1.6,0.6],m:tm,ink:false,fade:o.fadeT||[cy+ry+6,H2]})}
  p.push({t:'e',a:[cx,cy,rx,ry],m,tex:o.tex||'grain',rim:true,holes:o.holes});
  p.push({t:'poly',a:[[cx-rx,cy+ry*0.35],[cx+rx,cy+ry*0.35],[cx+rx*0.92,cy+ry*0.8],[cx-rx*0.92,cy+ry*0.8]],m:M(m.h,m.s-6,m.l-8),ink:true});
  for(let i=0;i<6;i++){const x=cx-rx*0.8+rx*1.6*(i+0.5)/6;p.push({t:'px',a:[[Math.round(x),Math.round(cy+ry*0.75),3]],m:M(m.h,m.s+10,m.l+28),ink:false})}
  return p}
// eel / serpent: two S curves and a head
function eelKit(o){const m=o.m||M(265,22,17,{step:6});const y0=o.y0||48,y1=o.y1||12,y2=o.y2||40,hy=o.hy||30;const th=o.th||[2.4,7];const p=[];
  p.push({t:'curve',a:[6,y0,28,y1,52,hy+2],th:[th[0],th[1]],m,tex:o.tex||'ridges'});
  p.push({t:'curve',a:[52,hy+2,72,y2+16,84,hy],th:[th[1],th[1]*0.85],m,tex:o.tex||'ridges'});
  p.push({t:'e',a:[84,hy-2,11,6.5],m:M(m.h,m.s,m.l+2,{step:6}),rot:-0.2,rim:true});
  p.push(mouth(80,hy+1,95,hy-1,M(m.h,m.s,Math.max(4,m.l-10))));
  return p}
// octopus: mantle + arms
function octoKit(o){const cx=o.cx||58,cy=o.cy||26;const m=o.m||M(258,32,32,{step:7});const am=M(m.h,m.s,m.l-4,{step:7});const p=[];
  const arms=[[cx-8,cy+14,cx-30,cy+18,cx-46,cy+6],[cx-6,cy+18,cx-28,cy+30,cx-46,cy+26],[cx-2,cy+20,cx-12,cy+36,cx-30,cy+38],[cx+6,cy+20,cx+14,cy+36,cx+34,cy+36],[cx+10,cy+16,cx+28,cy+26,cx+38,cy+18],[cx-12,cy+8,cx-30,cy-4,cx-44,cy-12]];
  arms.forEach(a=>p.push({t:'curve',a,th:[4.4,1.2],m:am}));
  arms.forEach(a=>{for(let i=1;i<4;i++){const t=i/4;const x=(1-t)*(1-t)*a[0]+2*(1-t)*t*a[2]+t*t*a[4],y=(1-t)*(1-t)*a[1]+2*(1-t)*t*a[3]+t*t*a[5];p.push({t:'px',a:[[Math.round(x),Math.round(y)+1,3]],m:M(m.h,m.s-10,m.l+20),ink:false})}});
  p.push({t:'e',a:[cx,cy,20,18],m,tex:o.tex||'spots',rim:true});
  p.push({t:'e',a:[cx,cy-8,14,8],m:M(m.h,m.s-4,m.l+6),lift:0.15,ink:false});
  p.push(...fishEye(cx+13,cy+2,3.4,{h:45,s:50,l:60}));
  return p}
// ray: diamond wings, tail, back
function rayKit(o){const cx=o.cx||52,cy=o.cy||30;const m=o.m||M(215,18,36,{step:7});const p=[];
  p.push({t:'curve',a:[cx-26,cy+2,cx-42,cy+10,cx-50,cy+26],th:[2.4,0.6],m:M(m.h,m.s,m.l-6)});
  p.push({t:'poly',a:[[cx-28,cy],[cx-4,cy-26],[cx+38,cy],[cx-4,cy+24]],m,tex:o.tex||'grain',rim:true});
  p.push({t:'poly',a:[[cx-22,cy],[cx-4,cy-20],[cx+18,cy],[cx-4,cy+18]],m:M(m.h,m.s-2,m.l+4),ink:false,lift:0.05});
  p.push({t:'line',a:[cx-4,cy-24,cx-4,cy+22],m:M(m.h,m.s,m.l-10),tone:0,ink:false});
  p.push({t:'px',a:[[cx+10,cy-6,1],[cx+10,cy-5,0],[cx+14,cy-6,1],[cx+14,cy-5,0]],m:M(0,0,10)});
  return p}
// starfish: 5 arms with bumps
function starKit(o){const cx=o.cx||48,cy=o.cy||32;const m=o.m||M(270,30,40,{step:7});const R=o.R||28,r=o.r||7;const p=[];
  for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5,a1=a-0.35,a2=a+0.35;p.push({t:'poly',a:[[cx+Math.cos(a1)*r,cy+Math.sin(a1)*r],[cx+Math.cos(a)*R,cy+Math.sin(a)*R],[cx+Math.cos(a2)*r,cy+Math.sin(a2)*r]],m,ink:true,tex:o.tex||'grain'})}
  p.push({t:'e',a:[cx,cy,r+2,r+1],m:M(m.h,m.s,m.l+4,{step:7}),rim:true,tex:o.tex||'spots'});
  for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5;for(let k=1;k<=2;k++){const d=r+4+k*7;p.push({t:'px',a:[[Math.round(cx+Math.cos(a)*d),Math.round(cy+Math.sin(a)*d),0]],m:M(m.h,m.s,m.l-14)})}}
  return p}
// seahorse: curled body, head, snout, tail
function seahorseKit(o){const m=o.m||M(262,24,34,{step:7});const p=[];
  p.push({t:'curve',a:[54,56,44,64,38,50],th:[3.2,2],m:M(m.h,m.s,m.l-4),tex:'ridges'});
  p.push({t:'curve',a:[58,20,70,40,54,56],th:[7.6,3.6],m,tex:'ridges',rim:true});
  for(let i=0;i<5;i++){const y=26+i*6;p.push({t:'line',a:[54+i*1.5,y,66+i*0.8,y],m:M(m.h,m.s,m.l+12),tone:3,ink:false})}
  p.push({t:'e',a:[60,18,8.4,6.8],m:M(m.h,m.s,m.l+2,{step:7}),rim:true});
  p.push({t:'e',a:[72,20,8,3],m:M(m.h,m.s,m.l-2),rot:0.15});
  p.push(...fishEye(63,17,2.6,{h:190,s:60,l:60}));
  return p}
// a complete generic fish in one call; species add props on top
function simpleFish(o){const cx=o.cx??50,cy=o.cy??34,rx=o.rx??26,ry=o.ry??12;const m=o.m||M(200,14,44,{step:7});const fm=o.finM||M(m.h,m.s,Math.max(8,m.l-10));const p=[];
  p.push(...tail(cx-rx+3,cy,DEF(o.tail,{len:14,sp:11,m:fm})));
  if(o.dorsal!==false)p.push(...dorsal(cx-rx*0.45,cx+rx*0.45,cy-ry+1,o.dh??10,DEF(o.dorsal,{m:fm})));
  if(o.anal!==false)p.push(...anal(cx-rx*0.2,cy+ry-2,DEF(o.anal,{m:fm})));
  p.push(...fishBody(DEF(o.body,{cx,cy,rx,ry,m,tex:o.tex})));
  if(o.pectoral!==false)p.push(...pectoral(cx+rx*0.25,cy+ry*0.2,DEF(o.pectoral,{m:fm})));
  if(o.head)p.push({t:'e',a:[cx+rx*0.7,cy,rx*0.38,ry*0.85],m:o.head.m||M(m.h,m.s,m.l+4,{step:7}),rim:true});
  if(o.mouth!==false)p.push(mouth(cx+rx*0.78,cy+ry*0.3,cx+rx+1,cy+ry*0.15,M(m.h,m.s,Math.max(4,m.l-24))));
  if(o.eye!==false)p.push(...fishEye(cx+rx*0.72,cy-ry*0.25,o.eyeR??3,o.eye||{}));
  return p}
const bubbles=(x,y,n=3,m)=>Array.from({length:n},(_,i)=>({t:'px',a:[[x+i*2,y-i*5,3]],m:m||M(200,20,72),ink:false}));
const dots=(pts,m,tone=0)=>({t:'px',a:pts.map(([x,y])=>[x,y,tone]),m});

// ---------- fish v2: 48x32 hand-composed creatures ----------
// Each species is a list of parts drawn back-to-front. Parts are ellipses/polys/lines/pixels with a
// material (h,s,l). Shading is computed per part (light from upper-left) with ordered dithering,
// then optional texture, inner ink edges, an outer outline, and glow halos.
const FW=48,FH=32;
if(typeof window!=='undefined'&&typeof window.nz!=='function'&&typeof nz==='undefined')window.nz=(x,y,s=0)=>{let h=(x*374761393+y*668265263+s*1442695041)|0;h=(h^(h>>13))*1274126177;h=(h^(h>>16))>>>0;return (h%1000)/1000};
const BAYER=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]];
const bay=(x,y)=>BAYER[y&3][x&3]/16;const chk=(x,y)=>((x+y)&1)?0.72:0.28;
function hsl(h,s,l){return `hsl(${((h%360)+360)%360} ${Math.max(0,Math.min(100,s))}% ${Math.max(0,Math.min(100,l))}%)`}
function inPoly(pts,x,y){let c=false;for(let i=0,j=pts.length-1;i<pts.length;j=i++){const [xi,yi]=pts[i],[xj,yj]=pts[j];if(((yi>y)!==(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))c=!c}return c}
function bbox(pts){let x0=99,y0=99,x1=-99,y1=-99;pts.forEach(([x,y])=>{x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)});return[x0,y0,x1,y1]}
const RARITY_OUTLINE=[null,null,null,'#3a2c16','#4a2e5e'];
function renderFish(spec,r){
  const W=spec.w||FW,H=spec.h||FH;
  const cells=new Array(W*H).fill(null); // {p:partIndex, tone:0..4}
  const pid=(x,y)=>x<0||y<0||x>=W||y>=H?-1:(cells[y*W+x]?cells[y*W+x].p:-1);
  spec.parts.forEach((p,pi)=>{
    const m=p.m; // material {h,s,l}
    const put=(x,y,tone)=>{if(x<0||y<0||x>=W||y>=H)return;cells[y*W+x]={p:pi,tone,m,p0:p}};
    // shade: normalized position inside part's ellipse/bbox -> light amount
    const shadeAt=(nx,ny)=>{const lt=0.5-(nx*(p.lx??0.45)+ny*(p.ly??0.7))*0.5;return Math.max(0,Math.min(0.999,lt+(p.lift||0)))};
    const toneOf=(x,y,lt)=>{const v=lt*(p.tones||4)+ (p.flat?0:(chk(x,y)-0.5)*0.9);return Math.max(0,Math.min((p.tones||4)-1,Math.floor(v)))};
    const fadeOk=(x,y)=>{if(!p.fade)return true;const [x0,x1]=p.fade;const t=(x-x0)/(x1-x0);const keep=x1>x0?1-t:1-t; return bay(x,y)<Math.max(0,Math.min(1,keep))};
    const holeOk=(x,y)=>!p.holes||!p.holes.some(([hx,hy,hr])=>(x-hx)**2+(y-hy)**2<=hr*hr);
    if(p.t==='e'){const [cx,cy,rx,ry]=p.a;const rot=p.rot||0,cs=Math.cos(rot),sn=Math.sin(rot);
      for(let y=Math.floor(cy-ry-rx);y<=cy+ry+rx;y++)for(let x=Math.floor(cx-rx-ry);x<=cx+rx+ry;x++){const dx=x+0.5-cx,dy=y+0.5-cy;const ux=(dx*cs+dy*sn)/rx,uy=(-dx*sn+dy*cs)/ry;if(ux*ux+uy*uy>1)continue;if(!fadeOk(x,y)||!holeOk(x,y))continue;put(x,y,toneOf(x,y,shadeAt(ux,uy)))}}
    else if(p.t==='poly'){const pts=p.a;const [x0,y0,x1,y1]=bbox(pts);const cx=(x0+x1)/2,cy=(y0+y1)/2,rx=Math.max(1,(x1-x0)/2),ry=Math.max(1,(y1-y0)/2);
      for(let y=Math.floor(y0);y<=y1;y++)for(let x=Math.floor(x0);x<=x1;x++){if(!inPoly(pts,x+0.5,y+0.5))continue;if(!fadeOk(x,y)||!holeOk(x,y))continue;put(x,y,toneOf(x,y,shadeAt((x+0.5-cx)/rx,(y+0.5-cy)/ry)))}}
    else if(p.t==='line'){const [xa,ya,xb,yb]=p.a;const n=Math.max(Math.abs(xb-xa),Math.abs(yb-ya));for(let i=0;i<=n;i++){const x=Math.round(xa+(xb-xa)*i/n),y=Math.round(ya+(yb-ya)*i/n);if(!fadeOk(x,y))continue;put(x,y,p.tone??2);if(p.w>1)put(x,y+1,p.tone??2)}}
    else if(p.t==='px'){p.a.forEach(([x,y,tone])=>put(x,y,tone??2))}
    else if(p.t==='curve'){ // quadratic bezier with thickness profile
      const [xa,ya,xc,yc,xb,yb]=p.a;const n=64;const th=p.th||[2,2];
      for(let i=0;i<=n;i++){const t=i/n;const x=(1-t)*(1-t)*xa+2*(1-t)*t*xc+t*t*xb,y=(1-t)*(1-t)*ya+2*(1-t)*t*yc+t*t*yb;const r=th[0]+(th[1]-th[0])*t;
        for(let yy=Math.floor(y-r);yy<=y+r;yy++)for(let xx=Math.floor(x-r);xx<=x+r;xx++){const dx=xx+0.5-x,dy=yy+0.5-y;if(dx*dx+dy*dy>r*r)continue;if(!fadeOk(xx,yy))continue;const lt=0.5-(dy/r)*0.5*0.8;put(xx,yy,toneOf(xx,yy,Math.max(0,Math.min(0.999,lt))))}}}
  });
  // textures and ink edges
  const toneAdj=new Array(W*H).fill(0),cool=new Array(W*H).fill(0);
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const c=cells[y*W+x];if(!c)continue;const p=c.p0;
    if(p.tex==='scales'){const ox=((y>>1)&1)*2;if(((x+ox)&3)===0&&(y&1)===1)toneAdj[y*W+x]-=1;else if(((x+ox)&3)===2&&(y&1)===0)toneAdj[y*W+x]+=1}
    if(p.tex==='rays'&&(((x-(y>>1))%3)+3)%3===0)toneAdj[y*W+x]-=1;
    if(p.tex==='plates'&&((x%7===0)||(y%5===0)))toneAdj[y*W+x]-=1;
    if(p.tex==='ridges'&&(y%3===0))toneAdj[y*W+x]-=1;
    if(p.tex==='web'&&((x+y)%5===0||(x-y+40)%5===0))toneAdj[y*W+x]-=1;
    if(p.rim){const beh=(xx,yy)=>{const q=pid(xx,yy);return q<c.p};if(beh(x,y-1)||beh(x-1,y))toneAdj[y*W+x]+=1}
    if(spec.water!==false&&p.rim2!==false&&!p.fade){const emp=(xx,yy)=>pid(xx,yy)===-1;if((emp(x,y+1)||emp(x+1,y))&&((x+y)&1))cool[y*W+x]=1}
    if(p.spec){p.spec.forEach(([sx,sy,ln])=>{if(y===sy&&x>=sx&&x<sx+ln)toneAdj[y*W+x]+=2})}
    if(p.tex==='scales2'&&(((x>>1)+(y>>1))&1)===0&&((x&1)===0))toneAdj[y*W+x]-=1;
    if(p.tex==='stripes'&&(x%6<2))toneAdj[y*W+x]-=1;
    if(p.tex==='bands'&&(((x+y)>>1)%5===0))toneAdj[y*W+x]-=1;
    if(p.tex==='spots'&&nz(x,y,7)>0.84)toneAdj[y*W+x]-=2;
    if(p.tex==='grain'&&nz(x,y,3)>0.7)toneAdj[y*W+x]-=1;
    if(p.tex==='cracks'&&nz(x>>1,y,5)>0.9)toneAdj[y*W+x]-=2;
    if(p.ink!==false){ // inner ink: edge of this part against other parts drawn before it or empty
      const other=(xx,yy)=>{const q=pid(xx,yy);return q!==c.p&&q<c.p}; // only against parts behind (lower index) or empty (-1)
      if(other(x-1,y)||other(x+1,y)||other(x,y-1)||other(x,y+1))toneAdj[y*W+x]-=(p.inkW??2)}
  }
  // compose to canvas
  const oc=document.createElement('canvas');oc.width=W;oc.height=H;const g=oc.getContext('2d');
  const img=g.createImageData(W,H),d=img.data;
  const setPx=(x,y,css)=>{const [r,gg,b]=cssToRgb(css);const i=(y*W+x)*4;d[i]=r;d[i+1]=gg;d[i+2]=b;d[i+3]=255};
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const c=cells[y*W+x];if(!c)continue;const t=Math.max(-1,Math.min((c.p0.tones||4),c.tone+toneAdj[y*W+x]));const m=c.m;
    let l=m.l+(t-1.5)*(m.step||8),s=m.s+(t-1.5)*(m.sstep||-3),h=m.h+(t-1.5)*(m.hshift||0);
    if(cool[y*W+x]){h=h+(205-h)*0.18;l+=5}
    (spec.tint||[]).forEach(([cx,cy,r,th,ts,amt])=>{const dd=Math.hypot(x+0.5-cx,y+0.5-cy)/r;if(dd>=1)return;const k=(1-dd)*amt;if(bay(x,y)<k*1.4){h=th;s=Math.max(s,ts);l=l+k*30}});
    setPx(x,y,hsl(h,s,l))}
  // outer outline
  const solid=(x,y)=>x>=0&&y>=0&&x<W&&y<H&&d[(y*W+x)*4+3]>0;
  const outl=spec.outline||(r!=null&&RARITY_OUTLINE[r])||'#0b0a0e';const [orr,og,ob]=cssToRgb(outl);
  const mark=[];for(let y=0;y<H;y++)for(let x=0;x<W;x++){if(solid(x,y))continue;if(solid(x-1,y)||solid(x+1,y)||solid(x,y-1)||solid(x,y+1))mark.push([x,y])}
  mark.forEach(([x,y])=>{const i=(y*W+x)*4;d[i]=orr;d[i+1]=og;d[i+2]=ob;d[i+3]=255});
  // glows (soft dithered halos outside the outline)
  (spec.glow||[]).forEach(gl=>{const [cx,cy,r,css,str]=gl;const [rr,gg,bb]=cssToRgb(css);
    for(let y=Math.floor(cy-r);y<=cy+r;y++)for(let x=Math.floor(cx-r);x<=cx+r;x++){if(x<0||y<0||x>=W||y>=H)continue;const i=(y*W+x)*4;if(d[i+3])continue;const dd=Math.hypot(x+0.5-cx,y+0.5-cy)/r;if(dd>1)continue;const a=Math.pow(1-dd,1.6)*(str||0.8);if(bay(x,y)<a){d[i]=rr;d[i+1]=gg;d[i+2]=bb;d[i+3]=255}}});
  // sparkles
  const sparks=spec.spark||(r===3?[[6,5,'hsl(45 50% 80%)'],[43,27,'hsl(45 50% 80%)']]:[]);
  sparks.forEach(([x,y,css])=>{if(x<0||y<0||x>=W||y>=H)return;const [rr,gg,bb]=cssToRgb(css||'#f4ecd8');const i=(y*W+x)*4;d[i]=rr;d[i+1]=gg;d[i+2]=bb;d[i+3]=255});
  g.putImageData(img,0,0);return oc;
}
let _cc;function cssToRgb(css){if(css[0]==='#'){const n=parseInt(css.slice(1),16);return[(n>>16)&255,(n>>8)&255,n&255]}_cc=_cc||document.createElement('canvas').getContext('2d',{willReadFrequently:true});_cc.fillStyle=css;_cc.fillRect(0,0,1,1);const p=_cc.getImageData(0,0,1,1).data;return[p[0],p[1],p[2]]}
// materials
const M=(h,s,l,o={})=>Object.assign({h,s,l},o);
// eye helper: returns parts (sclera/iris/pupil/glint)
function eye(x,y,o={}){const sz=o.sz||2;const parts=[];
  if(sz>=3)parts.push({t:'e',a:[x,y,1.6,1.6],m:M(o.h||40,o.s??20,o.l??78),flat:true,tones:1,ink:false});
  else parts.push({t:'px',a:[[x-0.5|0,y-0.5|0,2],[x+0.5|0,y-0.5|0,2],[x-0.5|0,y+0.5|0,2],[x+0.5|0,y+0.5|0,2]].slice(0,sz===2?4:1),m:M(o.h||40,o.s??20,o.l??78),ink:false});
  parts.push({t:'px',a:[[o.px??(x|0),o.py??(y|0),2]],m:M(0,0,o.pl??6),ink:false});
  if(o.glint!==false)parts.push({t:'px',a:[[(x|0)-1,(y|0)-1,2]],m:M(0,0,96),ink:false});
  return parts}

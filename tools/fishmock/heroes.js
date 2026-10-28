// hero v2: 32x64, facing right, light from the upper-left lantern. Same engine and tone as the fish.
// Anchor: feet on y≈61, rod hand around (29,38) so the game's rod/line still attach.
const HW=32,HH=64;
// shared pieces
const SKIN=(l=44)=>M(28,22,l,{step:7});
const SHADOW_FACE=(x,y,w,h)=>({t:'e',a:[x,y,w,h],m:M(0,0,9),flat:true,tones:1,ink:false});
const EYE_GLINT=(x,y,h,s,l)=>[{t:'px',a:[[x,y,3]],m:M(h,s,l),ink:false}];
const FACE=(h,sl,l)=>[{t:'e',a:[16,9.6,5,1.9],m:M(0,0,9),flat:true,tones:1,ink:false},{t:'px',a:[[14,12,0],[18,12,0]],m:M(0,0,8),ink:false},{t:'px',a:[[19,12,3]],m:M(h,sl,l),ink:false},{t:'px',a:[[16,14,0]],m:M(28,20,30),ink:false},{t:'line',a:[15,16,18,16],m:M(28,20,28),tone:0,ink:false}];
const HAND=(x,y)=>({t:'e',a:[x,y,1.6,1.4],m:SKIN(42),ink:true});
function boots(mat){return[
  {t:'poly',a:[[10,52],[15,52],[15,61],[9,62]],m:mat,ink:true,tex:'grain'},            // back leg
  {t:'poly',a:[[16,52],[21,52],[22,62],[16,62]],m:mat,ink:true,tex:'grain'},            // front leg
  {t:'px',a:[[9,61,0],[10,61,0],[16,61,0],[17,61,0]],m:M(0,0,6)},                        // soles
]}
const HERO2={
 // 도적: hood low, scarf over the mouth, one pale eye. Coin purse and a knife he says is for cutting line.
 rogue:{w:HW,h:HH,parts:[
   ...boots(M(25,20,20)),
   {t:'poly',a:[[9,20],[23,20],[26,56],[4,58],[7,40]],m:M(150,12,22,{step:6}),tex:'grain',rim:true},          // cloak, blown slightly left
   {t:'poly',a:[[4,58],[8,52],[10,58]],m:M(150,12,22),ink:false},                                             // ragged hem
   {t:'poly',a:[[12,22],[21,22],[22,44],[12,44]],m:M(28,25,26,{step:6}),tex:'grain',rim:true},                 // leather vest
   {t:'line',a:[13,30,22,30],m:M(28,20,16),tone:0,ink:false},                                                   // strap
   {t:'line',a:[12,40,22,40],m:M(28,20,14),tone:0,ink:false},                                                   // belt
   {t:'px',a:[[17,40,4]],m:M(45,50,55),ink:false},                                                              // buckle
   {t:'e',a:[11,44,2.4,2.8],m:M(40,30,34),ink:true,tex:'grain'},                                                // coin purse
   {t:'px',a:[[10,42,0],[12,42,0]],m:M(40,30,20)},
   {t:'line',a:[22,41,24,48],m:M(215,8,60),tone:3},                                                             // knife blade
   {t:'px',a:[[22,40,0],[21,40,0]],m:M(28,20,18)},                                                               // its grip
   {t:'poly',a:[[20,24],[24,26],[30,36],[27,39],[22,32]],m:M(150,12,24,{step:6}),ink:true,tex:'grain'},        // right arm to the rod
   HAND(28.5,38),
   {t:'poly',a:[[10,24],[13,26],[12,42],[9,42]],m:M(150,12,20),ink:true,tex:'grain'},                            // back arm
   {t:'poly',a:[[9,17],[23,17],[25,22],[7,22]],m:M(150,10,30),ink:true},                                        // scarf wrapped high
   {t:'e',a:[16,12,5,6.5],m:SKIN(42),rim:true},                                                                // head
   SHADOW_FACE(16,11,5,4.5),                                                                                      // face lost in the hood
   {t:'poly',a:[[9,14],[9,5],[14,2],[20,2],[24,6],[24,14],[20,9],[12,9]],m:M(150,12,20,{step:6}),tex:'grain',rim:true}, // hood
   {t:'poly',a:[[9,14],[12,9],[20,9],[24,14],[22,16],[10,16]],m:M(150,10,12),ink:false},                       // hood's inner dark
   ...EYE_GLINT(18,12,120,40,78),
  ],glow:[[18,12,2,'hsl(120 40% 70%)',0.35]]},
 // 마법사: a bent, wide-brimmed hat; long ash beard; staff with a crystal that lights the left side.
 mage:{w:HW,h:HH,parts:[
   ...boots(M(255,10,16)),
   {t:'curve',a:[4,16,3,38,5,61],th:[0.9,0.9],m:M(30,25,28)},                                                    // staff, held in the back hand
   {t:'poly',a:[[2,10],[5,4],[8,10],[5,16]],m:M(195,55,56,{step:9}),ink:true,rim:true},                          // crystal
   {t:'px',a:[[5,6,4]],m:M(195,60,90),ink:false},
   {t:'poly',a:[[8,20],[24,20],[27,58],[5,58]],m:M(255,22,22,{step:6}),tex:'grain',rim:true},                    // robe
   {t:'px',a:[[8,55,3],[12,56,3],[16,55,3],[20,56,3],[24,55,3]],m:M(195,50,60),ink:false},                      // runes on the hem
   {t:'line',a:[9,30,23,30],m:M(255,18,14),tone:0,ink:false},                                                    // sash
   {t:'poly',a:[[20,24],[24,26],[30,36],[27,39],[22,32]],m:M(255,22,24,{step:6}),ink:true,tex:'grain'},          // sleeve to the rod
   HAND(28.5,38),
   {t:'poly',a:[[8,24],[12,26],[10,42],[6,40]],m:M(255,22,20),ink:true,tex:'grain'},                              // back sleeve
   HAND(5.5,40),
   {t:'poly',a:[[11,18],[21,18],[20,34],[16,38],[12,34]],m:M(40,8,62,{step:7}),tex:'grain',rim:true},             // long beard
   {t:'e',a:[16,13,5,6],m:SKIN(44),rim:true},
   ...FACE(195,50,85),
   {t:'poly',a:[[1,12],[31,12],[29,15],[3,15]],m:M(255,20,16,{step:6}),ink:true,tex:'grain'},                     // brim
   {t:'poly',a:[[9,12],[12,1],[20,0],[22,4],[24,12]],m:M(255,20,18,{step:6}),tex:'grain',rim:true},               // crown, bent tip
   {t:'poly',a:[[20,0],[26,2],[22,4]],m:M(255,20,16),ink:true},
   {t:'px',a:[[10,13,4],[22,13,4]],m:M(45,50,55),ink:false},                                                      // a worn band
  ],glow:[[5,8,5,'hsl(195 60% 65%)',0.45]],tint:[[5,8,10,195,50,0.25]]},
 // 기사: a dented helm with a dark visor slit, chainmail, a torn wine tabard, round shield on the back.
 knight:{w:HW,h:HH,parts:[
   ...boots(M(215,6,22)),
   {t:'e',a:[7,32,5,7],m:M(30,28,28,{step:6}),tex:'plates',ink:true,rim:true},                                    // shield on the back
   {t:'e',a:[7,32,5,7],m:M(215,6,30),ink:false,holes:[[7,32,4]]},                                                 // iron rim
   {t:'px',a:[[7,32,3],[7,31,3]],m:M(215,6,52),ink:false},                                                         // boss
   {t:'poly',a:[[9,20],[23,20],[25,52],[7,52]],m:M(215,6,30,{step:7}),tex:'scales',rim:true},                     // chainmail body
   {t:'poly',a:[[11,22],[21,22],[22,50],[18,54],[14,50],[10,50]],m:M(355,32,24,{step:6}),tex:'grain',holes:[[14,48,1.2],[20,46,1]]}, // torn tabard
   {t:'line',a:[11,36,22,36],m:M(28,25,18),tone:0,ink:false},                                                     // belt
   {t:'px',a:[[16,36,4]],m:M(45,45,50),ink:false},
   {t:'e',a:[10,22,4,3],m:M(215,8,38,{step:7}),ink:true,rim:true},                                                // pauldrons
   {t:'e',a:[22,22,4,3],m:M(215,8,40,{step:7}),ink:true,rim:true},
   {t:'poly',a:[[21,24],[25,26],[30,36],[27,39],[22,32]],m:M(215,6,30,{step:7}),ink:true,tex:'scales'},           // mail sleeve
   HAND(28.5,38),
   {t:'poly',a:[[9,24],[13,26],[12,44],[8,44]],m:M(215,6,28),ink:true,tex:'scales'},
   {t:'poly',a:[[11,17],[21,17],[22,21],[10,21]],m:M(215,6,32),ink:true,tex:'scales'},                            // coif at the neck
   {t:'e',a:[16,11,6,7],m:M(215,8,40,{step:7}),rim:true,tex:'grain'},                                             // helm
   {t:'poly',a:[[11,10],[22,10],[22,13],[11,13]],m:M(0,0,8),flat:true,tones:1,ink:false},                         // visor slit
   {t:'px',a:[[18,11,3]],m:M(45,30,70),ink:false},                                                                 // a glint inside
   {t:'px',a:[[13,6,0],[14,7,0],[20,5,0],[21,6,0],[12,15,0]],m:M(215,8,24)},                                      // dents
   {t:'poly',a:[[15,3],[17,3],[17,8],[15,8]],m:M(215,8,46),ink:true},                                              // crest ridge
   {t:'px',a:[[16,2,2],[16,1,2]],m:M(355,30,30)},                                                                   // torn plume
  ]},
 // 음유시인: feathered cap, scarf trailing left, a lute slung on the back.
 bard:{w:HW,h:HH,parts:[
   ...boots(M(25,25,22)),
   {t:'e',a:[7,36,5,7],m:M(30,38,36,{step:6}),tex:'grain',ink:true,rim:true},                                      // lute body
   {t:'line',a:[7,29,9,18],m:M(30,35,30),tone:1},                                                                   // lute neck
   {t:'px',a:[[8,18,0],[9,17,0]],m:M(30,30,22)},
   {t:'line',a:[6,33,6,40],m:M(40,10,70),tone:3,ink:false},{t:'line',a:[8,32,8,41],m:M(40,10,70),tone:3,ink:false}, // strings
   {t:'px',a:[[7,37,0]],m:M(30,30,14)},                                                                             // sound hole
   {t:'poly',a:[[10,20],[22,20],[24,44],[8,44]],m:M(280,16,26,{step:6}),tex:'grain',rim:true},                     // doublet
   {t:'px',a:[[16,24,3],[16,28,3],[16,32,3],[16,36,3]],m:M(45,45,55),ink:false},                                   // buttons
   {t:'poly',a:[[9,44],[23,44],[22,52],[10,52]],m:M(25,25,30,{step:6}),tex:'grain',rim:true},                      // breeches
   {t:'poly',a:[[20,24],[24,26],[30,36],[27,39],[22,32]],m:M(280,16,28,{step:6}),ink:true,tex:'grain'},            // sleeve to rod
   HAND(28.5,38),
   {t:'poly',a:[[10,24],[13,26],[12,42],[9,42]],m:M(280,16,24),ink:true,tex:'grain'},
   {t:'curve',a:[14,19,6,22,1,30],th:[1.6,0.6],m:M(20,45,38,{step:6}),tex:'grain'},                                  // scarf trailing in the wind
   {t:'poly',a:[[10,17],[22,17],[23,21],[9,21]],m:M(20,45,40),ink:true},
   {t:'e',a:[16,12,5,6.5],m:SKIN(46),rim:true},
   ...FACE(40,30,88),
   {t:'poly',a:[[8,9],[10,3],[22,3],[25,9],[22,8],[11,8]],m:M(340,28,26,{step:6}),tex:'grain',rim:true},            // cap
   {t:'poly',a:[[7,9],[25,9],[24,11],[8,11]],m:M(340,28,20),ink:true},                                               // brim
   {t:'curve',a:[20,4,26,0,31,2],th:[1.1,0.4],m:M(40,20,72),ink:false},                                             // feather
  ]},
 // 드루이드: antler crown, moss on the shoulders, a long beard, a crow that never leaves.
 druid:{w:HW,h:HH,parts:[
   {t:'poly',a:[[10,54],[15,54],[15,62],[9,62]],m:SKIN(34),ink:true},                                               // bare feet in wrappings
   {t:'poly',a:[[16,54],[21,54],[22,62],[16,62]],m:SKIN(36),ink:true},
   {t:'line',a:[10,57,15,57],m:M(40,15,50),tone:3,ink:false},{t:'line',a:[16,58,22,58],m:M(40,15,50),tone:3,ink:false},
   {t:'poly',a:[[8,20],[24,20],[27,56],[5,56]],m:M(90,18,22,{step:6}),tex:'grain',rim:true},                        // earth robe
   {t:'line',a:[9,34,23,34],m:M(30,30,26),tone:0,ink:false},                                                        // rope belt
   {t:'px',a:[[12,34,2],[20,34,2]],m:M(30,30,34)},
   {t:'curve',a:[6,24,10,30,8,40],th:[0.8,0.4],m:M(100,30,30)},                                                      // trailing ivy
   {t:'poly',a:[[20,24],[24,26],[30,36],[27,39],[22,32]],m:M(90,18,24,{step:6}),ink:true,tex:'grain'},               // sleeve to rod
   HAND(28.5,38),
   {t:'poly',a:[[8,24],[12,26],[10,42],[6,42]],m:M(90,18,20),ink:true,tex:'grain'},
   {t:'e',a:[10,21,4,2.4],m:M(100,32,28),tex:'grain',rim:true},                                                     // moss on the shoulders
   {t:'e',a:[22,21,3.5,2.2],m:M(100,32,30),tex:'grain',rim:true},
   {t:'px',a:[[9,19,4],[23,19,4]],m:M(335,45,70),ink:false},                                                        // tiny flowers in the moss
   {t:'poly',a:[[11,17],[21,17],[21,36],[16,41],[11,36]],m:M(40,8,58,{step:7}),tex:'grain',rim:true},                // long beard
   {t:'e',a:[16,12,5,6.5],m:SKIN(40),rim:true},
   ...FACE(100,40,80),
   {t:'poly',a:[[10,8],[22,8],[21,10],[11,10]],m:M(40,10,56),ink:false},                                            // hair line
   {t:'curve',a:[12,8,9,4,6,0],th:[1,0.5],m:M(35,15,42)},                                                            // antlers, branching
   {t:'line',a:[9,4,7,5],m:M(35,15,40),tone:2},{t:'line',a:[10,2,12,0],m:M(35,15,40),tone:2},
   {t:'curve',a:[20,8,23,4,27,1],th:[1,0.5],m:M(35,15,44)},
   {t:'line',a:[23,4,25,5],m:M(35,15,42),tone:2},{t:'line',a:[22,2,20,0],m:M(35,15,42),tone:2},
   {t:'px',a:[[6,0,0],[27,1,0]],m:M(35,15,30)},
   {t:'e',a:[6,18,2.6,2],m:M(240,8,10),ink:true},                                                                     // crow on the back shoulder
   {t:'e',a:[4,16,1.6,1.5],m:M(240,8,12),ink:true},
   {t:'px',a:[[3,16,4]],m:M(45,60,70),ink:false},                                                                      // crow's eye
   {t:'px',a:[[2,17,2]],m:M(40,20,40)},                                                                                 // beak
  ]},
};

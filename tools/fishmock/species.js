// mockup species, 48x32, facing right. Light from upper-left.
const FISH2={
 // 안개피라미 (흔함, 안개 호수): a sliver of fish whose tail dissolves into mist
 '0-1':{parts:[
   {t:'line',a:[2,12,9,14],m:M(205,10,62),tone:3,fade:[9,1],ink:false},
   {t:'line',a:[1,20,8,18],m:M(205,10,62),tone:3,fade:[8,0],ink:false},
   {t:'poly',a:[[5,9],[14,14],[14,18],[5,23],[9,16]],m:M(205,12,42),fade:[13,3],tex:'rays'},     // forked tail -> fog
   {t:'poly',a:[[19,10],[23,6],[28,7],[31,11]],m:M(205,12,40),ink:true,tex:'rays',holes:[[26,7,0.8]]},
   {t:'e',a:[27,16,13,4.4],m:M(205,14,50,{step:7}),fade:[17,9],tex:'scales',rim:true,spec:[[24,13,8]]},
   {t:'e',a:[25,18,8,2.4],m:M(205,10,60),lift:0.1,ink:false,fade:[18,12]},
   {t:'poly',a:[[27,19],[32,23],[34,19]],m:M(205,12,42),ink:true,tex:'rays'},
   {t:'e',a:[36,16,6,3.4],m:M(205,10,55,{step:6}),lift:0.1,rim:true},
   {t:'line',a:[33,13,34,19],m:M(205,10,40),tone:1,ink:false},                                   // gill slit
   {t:'line',a:[38,18,43,17],m:M(205,8,30),tone:0,ink:false},
   ...eye(38.5,15.5,{sz:2,h:200,s:10,l:85,pl:40,glint:false}),
  ],glow:[[39,15,3,'hsl(205 30% 80%)',0.4]]},
 // 늪거북 (희귀, 안개 호수): a drowned-ruin turtle, moss and a broken watchtower on its back
 '0-6':{parts:[
   {t:'e',a:[10,22,4,2.2],m:M(85,14,28),rot:0.5},
   {t:'e',a:[33,23,4,2.2],m:M(85,14,30),rot:-0.4},
   {t:'px',a:[[6,24,0],[7,25,0],[36,25,0],[37,24,0]],m:M(85,10,18)},                               // claws
   {t:'e',a:[21,17,14,7.5],m:M(95,16,27,{step:7}),tex:'plates',rim:true},                            // shell
   {t:'poly',a:[[7,18],[35,18],[34,22],[8,22]],m:M(80,12,22),tex:'grain',ink:true},
   {t:'line',a:[12,22,11,27],m:M(100,25,26),tone:1,ink:false},                                      // hanging weed
   {t:'line',a:[27,22,28,28],m:M(100,25,26),tone:1,ink:false},
   {t:'e',a:[14,13,4,2.2],m:M(100,32,32),tex:'grain',lift:0.05},
   {t:'e',a:[27,12,3.5,1.8],m:M(100,30,30),tex:'grain'},
   {t:'e',a:[22,19,2.5,1.4],m:M(100,30,30),tex:'grain'},
   {t:'poly',a:[[17,11],[17,4],[19,2],[21,3],[23,6],[23,11]],m:M(30,8,36,{step:6}),tex:'cracks',rim:true},
   {t:'px',a:[[21,7,0],[21,8,0]],m:M(30,8,20)},                                                     // arrow slit
   {t:'px',a:[[19,6,3]],m:M(38,70,60),ink:false},                                                    // a candle still burning
   {t:'poly',a:[[17,4],[19,2],[21,3],[23,6],[22,7],[20,5],[18,6]],m:M(30,8,42),ink:false},
   {t:'e',a:[38,19,6,3.6],m:M(85,16,34,{step:7}),tex:'grain',rim:true},
   {t:'poly',a:[[41,17],[45,19],[44,22],[40,22]],m:M(85,14,30),ink:true},
   {t:'px',a:[[32,14,3],[29,16,3],[35,16,3],[31,20,3]],m:M(60,10,60)},                               // barnacles
   ...eye(39.5,17.5,{sz:2,h:50,s:30,l:70,pl:8}),
   {t:'px',a:[[38,16,0],[39,16,0],[40,16,0],[41,16,0]],m:M(85,14,20)},
  ],tint:[[19,6,4,38,60,0.5]]},
 // 마나 해마 (희귀, 요정의 샘): a seahorse grown from crystal, rune on the belly
 '1-3':{parts:[
   {t:'curve',a:[27,28,22,32,19,25],th:[1.6,1],m:M(260,22,30)},
   {t:'curve',a:[29,10,35,20,27,28],th:[3.8,1.8],m:M(262,24,34,{step:7}),tex:'ridges'},
   {t:'poly',a:[[26,10],[30,4],[31,10]],m:M(195,55,60,{step:9}),ink:true,rim:true},
   {t:'poly',a:[[31,12],[36,8],[35,14]],m:M(195,50,56,{step:9}),ink:true,rim:true},
   {t:'poly',a:[[34,17],[40,16],[36,21]],m:M(195,50,54,{step:9}),ink:true,rim:true},
   {t:'poly',a:[[33,23],[38,24],[33,27]],m:M(195,45,50,{step:9}),ink:true,rim:true},
   {t:'e',a:[30,9,4.2,3.4],m:M(262,24,36,{step:7}),rim:true},
   {t:'e',a:[36,10,4,1.5],m:M(262,20,32),rot:0.15},
   {t:'px',a:[[31,18,3],[32,20,3],[31,22,3],[32,16,3],[30,20,3]],m:M(190,70,75),ink:false},
   ...eye(31.5,8.5,{sz:2,h:190,s:60,l:80,pl:20}),
  ],glow:[[31,19,5,'hsl(190 60% 70%)',0.3],[31,8,4,'hsl(190 60% 70%)',0.25]],tint:[[31,19,6,190,50,0.35]]},
 // 달그림자 뱀장어 (영웅, 안개 호수, 밤): an eel made of shadow with a moon scar
 '0-8':{parts:[
   {t:'poly',a:[[8,16],[12,6],[14,14],[18,4],[20,12],[24,5],[26,13]],m:M(265,20,18),fade:[12,4],ink:true,tex:'rays'},
   {t:'curve',a:[4,24,14,6,26,18],th:[1.2,3.6],m:M(265,22,16,{step:6}),tex:'ridges'},
   {t:'curve',a:[26,18,36,30,43,16],th:[3.6,3],m:M(265,22,17,{step:6}),tex:'ridges'},
   {t:'poly',a:[[28,22],[33,30],[36,27]],m:M(265,18,14),ink:true,tex:'rays'},
   {t:'poly',a:[[14,19],[10,27],[17,24]],m:M(265,18,14),ink:true,tex:'rays',fade:[14,9]},
   {t:'e',a:[42,14,5.5,3.2],m:M(265,20,19,{step:6}),rot:-0.2,rim:true},
   {t:'line',a:[40,16,47,15],m:M(265,15,10),tone:0,ink:false},
   {t:'px',a:[[46,16,2],[44,16,2]],m:M(50,20,80),ink:false},                                         // teeth
   {t:'px',a:[[39,10,3],[38,11,3],[38,12,3],[39,13,3],[40,10,2],[40,13,2]],m:M(50,30,86),ink:false},
   ...eye(43.5,13.5,{sz:2,h:50,s:20,l:92,pl:60,glint:false}),
   {t:'px',a:[[16,9,3],[22,8,3],[30,21,3],[36,25,3]],m:M(265,30,40)},
  ],glow:[[44,13,4,'hsl(50 40% 80%)',0.5]],tint:[[44,13,6,50,30,0.3]]},
 // 익사자의 반지 (영웅, 안개 호수, 밤): a bloated drowned fish, ribs showing, a gold ring in its brow
 '0-9':{parts:[
   {t:'poly',a:[[5,9],[11,14],[11,18],[5,24],[8,16]],m:M(185,8,26),tex:'rays',holes:[[7,13,1.1],[7,20,1]]},
   {t:'curve',a:[6,10,9,18,5,25],th:[0.6,0.6],m:M(120,20,24),ink:false},                             // tangled weed
   {t:'poly',a:[[16,9],[20,5],[26,7],[29,10]],m:M(185,8,28),ink:true,tex:'rays',holes:[[22,7,0.9]]},
   {t:'e',a:[24,17,13,7.5],m:M(185,12,33,{step:7}),tex:'grain',rim:true},
   {t:'e',a:[22,20,9,3.5],m:M(170,10,40),lift:0.05,ink:false},
   {t:'line',a:[16,13,17,21],m:M(60,12,58),tone:3,ink:false},
   {t:'line',a:[20,12,21,22],m:M(60,12,58),tone:3,ink:false},
   {t:'line',a:[24,12,25,22],m:M(60,12,58),tone:3,ink:false},
   {t:'line',a:[28,13,29,21],m:M(60,12,58),tone:3,ink:false},
   {t:'poly',a:[[24,22],[29,27],[33,24],[30,22]],m:M(185,8,28),ink:true,tex:'rays',holes:[[29,25,0.9]]},
   {t:'e',a:[34,16,6,4.5],m:M(185,10,35,{step:7}),rim:true},
   {t:'line',a:[35,19,41,18],m:M(185,10,16),tone:0,ink:false},
   ...eye(36.5,14.5,{sz:3,h:60,s:8,l:70,pl:55,glint:false}),
   {t:'e',a:[33,11,2.6,2.6],m:M(45,65,52,{step:10}),holes:[[33,11,1.4]],ink:true},
   {t:'px',a:[[32,9,3]],m:M(45,60,85),ink:false},
   {t:'px',a:[[43,15,3],[45,12,3],[44,9,3]],m:M(185,20,70),ink:false},                               // bubbles
  ]},
 // 안개의 심장 (신화, 안개 호수, 새벽): dawn mist that has curdled into a beating heart
 '0-11':{parts:[
   {t:'curve',a:[20,20,10,26,4,20],th:[2.5,0.8],m:M(210,20,70),fade:[14,3]},
   {t:'curve',a:[22,10,12,6,6,10],th:[2,0.6],m:M(210,20,72),fade:[14,4]},
   {t:'e',a:[20,13,7,6.5],m:M(212,22,68,{step:6}),tex:'grain',rim:true},
   {t:'e',a:[29,13,7,6.5],m:M(212,22,68,{step:6}),tex:'grain',rim:true},
   {t:'poly',a:[[13.5,15],[35.5,15],[25,28]],m:M(212,22,66,{step:6}),tex:'grain',ink:false},
   {t:'curve',a:[33,9,39,5,43,8],th:[1.6,0.5],m:M(210,18,76),fade:[35,44],ink:false},
   {t:'curve',a:[31,20,38,24,43,22],th:[1.6,0.5],m:M(210,18,76),fade:[34,44],ink:false},
   {t:'line',a:[22,19,24,22],m:M(38,60,78),tone:3,ink:false},                                        // veins of light
   {t:'line',a:[28,19,26,22],m:M(38,60,78),tone:3,ink:false},
   {t:'e',a:[25,16,3.4,4],m:M(38,85,74,{step:9}),lift:0.1},
   {t:'px',a:[[24,14,4],[25,15,4]],m:M(40,80,95),ink:false},
   ...eye(31.5,12.5,{sz:2,h:40,s:60,l:90,pl:70,glint:false}),
  ],outline:'#4a2e5e',glow:[[25,16,9,'hsl(40 70% 70%)',0.45]],tint:[[25,16,8,38,70,0.45]],spark:[[9,6],[43,26],[13,28]]},
 // 해골창꼬치 (영웅, 잉걸불 협곡, 밤): a barracuda whose head is bare bone, embers in the sockets
 // 해골창꼬치 (영웅, 잉걸불 협곡, 밤): a barracuda whose head is bare bone, embers in the sockets
 '2-9':{parts:[
   {t:'poly',a:[[3,10],[10,15],[10,17],[3,22],[7,16]],m:M(15,20,24),tex:'rays'},
   {t:'poly',a:[[15,11],[19,7],[25,8],[27,11]],m:M(15,18,22),ink:true,tex:'rays'},
   {t:'poly',a:[[9,13],[30,11],[32,16],[30,21],[9,19]],m:M(15,22,30,{step:7}),tex:'scales',rim:true},
   {t:'poly',a:[[9,16],[29,15],[30,19],[9,19]],m:M(20,16,22),ink:false,lift:-0.1},
   {t:'px',a:[[14,14,3],[18,13,3],[22,13,3],[26,13,3]],m:M(20,60,55),ink:false},
   {t:'px',a:[[12,12,2],[16,11,2],[20,11,2],[24,11,2],[28,11,2]],m:M(40,10,60)},
   {t:'poly',a:[[25,19],[30,24],[33,21]],m:M(15,18,22),ink:true,tex:'rays'},
   {t:'poly',a:[[29,12],[36,9],[42,10],[47,14],[46,17],[38,17],[31,18]],m:M(42,12,64,{step:7}),tex:'cracks',rim:true},  // cranium
   {t:'poly',a:[[33,17],[47,17],[46,20],[40,22],[33,20]],m:M(42,10,56,{step:7}),ink:true},                 // jaw
   {t:'px',a:[[36,17,0],[38,18,0],[40,18,0],[42,18,0],[44,17,0]],m:M(42,10,20)},                             // dark gum line
   {t:'px',a:[[37,19,4],[39,19,4],[41,19,4],[43,18,4],[45,18,4]],m:M(45,8,90),ink:false},                    // teeth
   {t:'e',a:[36,13,2.6,2.2],m:M(40,10,10),ink:false},                                                        // socket
   {t:'px',a:[[36,13,4],[35,13,3],[36,14,3]],m:M(22,95,62),ink:false},                                      // ember
   {t:'px',a:[[41,12,0],[42,11,0],[40,13,0]],m:M(40,10,36)},                                                 // nasal crack
  ],glow:[[36,13,4,'hsl(20 85% 55%)',0.55]],tint:[[36,13,5,20,70,0.25]]},
 '4-5':{parts:[
   {t:'poly',a:[[6,16],[12,10],[12,22]],m:M(230,14,16),ink:true,tex:'rays'},
   {t:'curve',a:[20,26,16,31,10,30],th:[1,0.4],m:M(230,14,18),ink:false},                           // feelers
   {t:'curve',a:[26,27,26,32,20,31],th:[1,0.4],m:M(230,14,18),ink:false},
   {t:'e',a:[25,16,13,11],m:M(230,16,20,{step:6}),tex:'grain',rim:true},
   {t:'poly',a:[[19,5],[23,1],[27,5]],m:M(230,14,18),ink:true},
   {t:'e',a:[27,16,8.5,8.5],m:M(50,12,80,{step:7})},
   {t:'e',a:[28,16,5.5,5.5],m:M(190,45,40,{step:8}),tex:'rays'},
   {t:'e',a:[29,16,2.6,3],m:M(0,0,6),flat:true,tones:1,ink:false},
   {t:'px',a:[[24,12,4],[25,12,4],[24,13,4]],m:M(0,0,97),ink:false},
   {t:'line',a:[19,9,22,11],m:M(0,60,45),tone:2,ink:false},
   {t:'line',a:[20,23,23,21],m:M(0,60,45),tone:2,ink:false},
   {t:'line',a:[33,8,31,11],m:M(0,60,45),tone:2,ink:false},
   {t:'poly',a:[[36,20],[43,22],[40,26],[35,24]],m:M(230,14,18),ink:true,tex:'rays'},
  ],glow:[[28,16,11,'hsl(190 50% 50%)',0.3]],tint:[[28,16,10,190,40,0.25]]},
 // 은하 문어 (영웅, 별이 진 바다): an octopus with a different constellation on every arm
 '3-5':{parts:[
   {t:'curve',a:[26,20,14,22,6,14],th:[2.2,0.6],m:M(258,30,28,{step:7})},                           // arms
   {t:'curve',a:[27,22,16,28,5,24],th:[2.2,0.6],m:M(258,30,26,{step:7})},
   {t:'curve',a:[29,23,24,31,12,31],th:[2.2,0.6],m:M(258,30,25,{step:7})},
   {t:'curve',a:[33,23,36,31,46,29],th:[2.2,0.6],m:M(258,30,27,{step:7})},
   {t:'curve',a:[35,21,42,26,47,20],th:[2,0.6],m:M(258,30,29,{step:7})},
   {t:'curve',a:[24,18,18,14,12,8],th:[1.8,0.5],m:M(258,30,27,{step:7})},
   {t:'px',a:[[12,20,3],[16,21,3],[20,22,3],[10,25,3],[15,27,3],[20,28,3],[40,29,3],[44,28,3],[41,24,3],[45,21,3]],m:M(258,20,55),ink:false}, // suckers
   {t:'e',a:[30,13,10,9],m:M(258,32,32,{step:7}),tex:'spots',rim:true},                              // mantle
   {t:'e',a:[30,9,7,4],m:M(258,28,38),lift:0.15,ink:false},
   {t:'px',a:[[25,8,4],[33,6,4],[36,12,4],[27,15,4],[22,12,4],[31,17,4]],m:M(45,60,90),ink:false},    // stars
   {t:'line',a:[25,8,33,6],m:M(45,30,60),tone:2,ink:false},                                          // constellation lines
   {t:'line',a:[33,6,36,12],m:M(45,30,60),tone:2,ink:false},
   ...eye(37.5,13.5,{sz:3,h:45,s:50,l:85,pl:10}),
   {t:'px',a:[[38,13,0],[38,14,0],[38,12,0]],m:M(0,0,6),ink:false},                                   // bar pupil
  ],glow:[[33,6,3,'hsl(45 60% 85%)',0.4]]},
 // 달빛 가오리 (영웅, 별이 진 바다, 밤): a ray that carries moonlight on its back
 // 달빛 가오리 (영웅, 별이 진 바다, 밤): a ray that carries a moon on its back
 '3-6':{parts:[
   {t:'curve',a:[14,16,6,20,1,28],th:[1.2,0.4],m:M(215,15,30)},
   {t:'px',a:[[4,22,3],[6,21,3]],m:M(215,10,50)},                                                            // tail barb
   {t:'poly',a:[[14,16],[26,3],[46,16],[26,27]],m:M(215,18,34,{step:7}),tex:'grain',rim:true},
   {t:'poly',a:[[16,16],[26,6],[36,16],[26,25]],m:M(215,16,38),ink:false,lift:0.05},                         // inner wing tone
   {t:'line',a:[26,4,26,26],m:M(215,12,28),tone:0,ink:false},                                                 // dorsal ridge
   {t:'e',a:[27,14,3.6,3.6],m:M(50,18,74,{step:6}),rim:true},                                                 // the moon disc
   {t:'px',a:[[28,13,1],[26,15,1]],m:M(50,10,62),ink:false},                                                  // craters
   {t:'px',a:[[19,13,4],[21,19,4],[34,10,4],[38,16,4],[31,21,4]],m:M(50,30,92),ink:false},
   {t:'px',a:[[37,12,1],[37,13,0],[40,12,1],[40,13,0]],m:M(0,0,10)},
   {t:'px',a:[[35,17,0],[36,17,0],[37,17,0]],m:M(215,10,22)},
  ],glow:[[27,14,9,'hsl(50 30% 85%)',0.35]],tint:[[27,14,9,50,20,0.3]]},
 '2-10':{parts:[
   {t:'curve',a:[30,24,14,30,6,22],th:[2.4,0.9],m:M(10,45,30,{step:7}),tex:'scales'},                     // tail sweeping under
   {t:'poly',a:[[6,22],[2,18],[4,25]],m:M(10,40,26),ink:true},                                               // arrow tip
   {t:'poly',a:[[12,10],[22,1],[30,8],[26,12]],m:M(5,35,20,{step:6}),ink:true,tex:'rays',fade:[22,12]},    // wing membrane
   {t:'line',a:[12,10,22,1],m:M(5,30,30),tone:3,ink:false},                                                 // wing bone
   {t:'line',a:[22,1,30,8],m:M(5,30,30),tone:3,ink:false},
   {t:'curve',a:[10,18,20,10,34,15],th:[2.6,4.2],m:M(10,45,34,{step:7}),tex:'scales',rim:true},            // neck/body
   {t:'e',a:[27,19,8,5],m:M(10,45,34,{step:7}),tex:'scales',rim:true},                                      // belly bulk
   {t:'e',a:[27,21,6,2.6],m:M(30,60,52),lift:0.2,ink:false,tex:'ridges'},                                   // ember belly scutes
   {t:'e',a:[38,14,6.5,4],m:M(10,45,36,{step:7}),rim:true},                                                 // head
   {t:'poly',a:[[41,13],[47,14],[46,17],[40,17]],m:M(10,40,32),ink:true},                                   // snout
   {t:'px',a:[[46,15,0]],m:M(10,30,12)},                                                                     // nostril
   {t:'poly',a:[[34,11],[31,5],[36,10]],m:M(35,15,42),ink:true},                                             // horns swept back
   {t:'poly',a:[[37,10],[35,4],[39,10]],m:M(35,15,42),ink:true},
   {t:'px',a:[[38,13,0],[39,14,0],[40,14,0],[41,13,0]],m:M(10,30,10)},                                        // closed eye
   {t:'line',a:[41,16,46,16],m:M(10,30,14),tone:0,ink:false},
   {t:'px',a:[[45,12,3],[47,9,3],[46,6,3]],m:M(20,30,70),ink:false},                                          // sleepy bubbles
   {t:'poly',a:[[30,22],[33,27],[36,23]],m:M(10,35,24),ink:true,tex:'rays'},
  ],glow:[[27,21,7,'hsl(30 70% 55%)',0.35]],tint:[[27,21,8,30,60,0.3]]},
 // 유령선원 (전설, 별이 진 바다, 밤): a drowned sailor who has taken the shape of a fish
 '3-9':{parts:[
   {t:'poly',a:[[4,10],[12,15],[12,17],[4,23],[8,16]],m:M(150,18,34),fade:[12,3],tex:'rays'},
   {t:'e',a:[24,18,12,6],m:M(150,20,36,{step:6}),fade:[16,10],tex:'grain',rim:true},
   {t:'poly',a:[[18,13],[22,9],[27,10],[29,13]],m:M(150,16,30),ink:true,tex:'rays',fade:[20,17]},
   {t:'poly',a:[[26,21],[31,26],[34,22]],m:M(150,16,30),ink:true,tex:'rays'},
   {t:'poly',a:[[26,13],[40,14],[40,19],[28,22]],m:M(215,25,22,{step:6}),ink:true,tex:'grain'},            // sodden coat
   {t:'px',a:[[31,16,3],[34,16,3],[37,16,3]],m:M(45,60,60),ink:false},                                      // brass buttons
   {t:'e',a:[38,15,6,4.2],m:M(150,18,40,{step:6}),rim:true},
   {t:'poly',a:[[31,12],[34,7],[44,7],[46,12]],m:M(220,18,16,{step:6}),ink:true},                            // tricorn
   {t:'poly',a:[[30,12],[47,12],[46,13],[31,13]],m:M(220,18,24),ink:false},                                  // brim
   {t:'px',a:[[39,9,3],[40,8,3]],m:M(45,50,60),ink:false},
   {t:'e',a:[39,15,1.8,1.8],m:M(150,30,8),ink:false},                                                        // hollow eye
   {t:'px',a:[[39,15,4],[40,15,3]],m:M(150,80,78),ink:false},
   {t:'line',a:[40,18,45,18],m:M(150,20,18),tone:0,ink:false},
   {t:'px',a:[[46,13,3],[47,10,3]],m:M(150,30,70),ink:false},                                                 // bubbles
  ],outline:'#1c3a2e',glow:[[39,15,5,'hsl(150 60% 60%)',0.5],[22,18,8,'hsl(150 40% 55%)',0.12]],tint:[[39,15,6,150,50,0.3]]},

 // 안개게 (흔함, 안개 호수, 새벽): an ash-grey crab climbing onto the rocks at dawn
 '0-3':{parts:[
   {t:'line',a:[12,22,8,28],m:M(200,8,34),tone:1},{t:'line',a:[17,23,14,29],m:M(200,8,34),tone:1},          // legs
   {t:'line',a:[31,23,34,29],m:M(200,8,34),tone:1},{t:'line',a:[36,22,40,28],m:M(200,8,34),tone:1},
   {t:'line',a:[22,24,21,30],m:M(200,8,34),tone:1},{t:'line',a:[27,24,28,30],m:M(200,8,34),tex:'grain',tone:1},
   {t:'e',a:[24,17,12,6.5],m:M(200,10,40,{step:7}),tex:'grain',rim:true},                                   // carapace
   {t:'poly',a:[[13,15],[35,15],[33,12],[15,12]],m:M(200,8,46),ink:false,lift:0.1},
   {t:'px',a:[[18,14,0],[23,13,0],[28,14,0],[21,18,0],[26,19,0]],m:M(200,8,28)},                             // pits
   {t:'e',a:[10,12,4,3],m:M(200,10,44,{step:7}),rot:-0.5,rim:true},                                          // left claw
   {t:'poly',a:[[6,9],[10,8],[9,12],[6,13]],m:M(200,10,40),ink:true},
   {t:'e',a:[39,11,4.5,3.2],m:M(200,10,46,{step:7}),rot:0.6,rim:true},                                       // big right claw
   {t:'poly',a:[[41,6],[46,7],[44,11],[41,10]],m:M(200,10,42),ink:true},
   {t:'px',a:[[44,9,0],[43,8,0]],m:M(200,8,20)},
   {t:'px',a:[[29,10,1],[29,9,2],[32,10,1],[32,9,2]],m:M(200,8,30)},                                         // eye stalks
   {t:'px',a:[[29,8,0],[32,8,0]],m:M(0,0,6)},
   {t:'px',a:[[12,10,3],[20,11,3]],m:M(200,20,70),ink:false},                                                 // dew
  ]},
 // 요정여왕의 눈물 (신화, 요정의 샘): a tear-shaped fish, something small curled inside it
 '1-11':{parts:[
   {t:'curve',a:[22,16,10,10,4,16],th:[1.5,0.4],m:M(170,30,70),fade:[14,3],ink:false},                      // light trails
   {t:'curve',a:[22,18,10,24,4,18],th:[1.5,0.4],m:M(170,30,70),fade:[14,3],ink:false},
   {t:'poly',a:[[12,16],[30,6],[30,26]],m:M(185,35,62,{step:6}),tex:'grain',rim:true},                       // tear point
   {t:'e',a:[31,16,10,10],m:M(185,35,62,{step:6}),tex:'grain',rim:true},                                      // drop
   {t:'e',a:[32,13,6,4],m:M(185,25,76),lift:0.1,ink:false},                                                    // inner sheen
   {t:'curve',a:[33,12,37,18,31,21],th:[1.4,0.8],m:M(320,40,55,{step:7})},                                    // curled sleeper inside
   {t:'e',a:[33,12,1.8,1.8],m:M(320,40,58)},
   {t:'px',a:[[33,12,0]],m:M(320,30,20)},
   {t:'px',a:[[27,9,4],[26,10,4]],m:M(185,30,96),ink:false},                                                   // highlight
   {t:'poly',a:[[38,8],[44,3],[42,11]],m:M(185,30,72),fade:[39,45],ink:false,tex:'rays'},                      // glass fins
   {t:'poly',a:[[38,24],[44,29],[42,21]],m:M(185,30,72),fade:[39,45],ink:false,tex:'rays'},
  ],outline:'#4a2e5e',glow:[[31,16,12,'hsl(185 50% 70%)',0.3]],spark:[[8,8],[44,25],[14,27],[46,6]]},
 // 리바이어던 (신화, 심연의 우물): only the head fits in the frame. The rest is the well.
 '4-11':{parts:[
   {t:'poly',a:[[0,6],[8,2],[16,6],[12,12]],m:M(215,18,16,{step:6}),ink:true,tex:'rays'},                    // fin crest leaving the frame
   {t:'poly',a:[[0,10],[46,7],[48,19],[42,22],[0,21]],m:M(215,20,21,{step:7}),tex:'scales',rim:true},         // upper head
   {t:'poly',a:[[0,23],[10,24],[20,23],[30,24],[40,23],[46,24],[44,30],[0,30]],m:M(215,16,25,{step:6}),tex:'ridges',rim:true}, // lower jaw
   {t:'poly',a:[[6,21],[9,27],[12,21]],m:M(50,10,86,{step:6}),ink:true},                                      // fangs
   {t:'poly',a:[[16,21],[19,28],[22,21]],m:M(50,10,86,{step:6}),ink:true},
   {t:'poly',a:[[27,21],[30,27],[33,21]],m:M(50,10,86,{step:6}),ink:true},
   {t:'poly',a:[[38,21],[41,27],[44,21]],m:M(50,10,86,{step:6}),ink:true},
   {t:'poly',a:[[12,25],[14,21],[16,25]],m:M(50,10,80,{step:6}),ink:true},                                    // lower fangs
   {t:'poly',a:[[23,25],[25,22],[27,25]],m:M(50,10,80,{step:6}),ink:true},
   {t:'poly',a:[[34,25],[36,22],[38,25]],m:M(50,10,80,{step:6}),ink:true},
   {t:'px',a:[[4,12,0],[12,11,0],[22,10,0],[38,11,0],[8,16,0],[18,15,0],[40,16,0]],m:M(215,15,12)},           // old scars
   {t:'e',a:[29,14,5.5,3.8],m:M(50,70,58,{step:8}),rim:true},                                                 // ancient gold eye
   {t:'px',a:[[30,13,0],[30,14,0],[30,15,0],[29,14,0],[31,14,0]],m:M(0,0,6),ink:false},                       // cross pupil
   {t:'px',a:[[27,12,4]],m:M(50,40,96),ink:false},
   {t:'line',a:[22,10,36,10],m:M(215,15,10),tone:0,ink:false},                                                 // brow
   {t:'px',a:[[45,15,3],[47,12,3],[46,9,3]],m:M(215,30,65),ink:false},
  ],outline:'#4a2e5e',glow:[[29,14,7,'hsl(50 60% 60%)',0.45]],tint:[[29,14,8,50,50,0.3]]},
};

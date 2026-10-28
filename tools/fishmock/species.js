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
 // 마나 해마 (희귀, 요정의 샘): a seahorse grown from crystal, rune on the belly
 // 마나 해마 (희귀, 요정의 샘): a seahorse grown from crystal, rune on the belly
 '1-3':{parts:[
   {t:'curve',a:[27,28,22,32,19,25],th:[1.6,1],m:M(260,22,30),tex:'ridges'},                                 // tail curl
   {t:'poly',a:[[24,13],[19,12],[18,17],[21,21],[26,21]],m:M(255,26,38),ink:false,tex:'rays',fade:[24,17]},  // translucent dorsal membrane
   {t:'curve',a:[29,10,35,20,27,28],th:[3.8,1.8],m:M(262,24,34,{step:7}),rim:true},                          // body
   {t:'line',a:[27,13,32,13],m:M(262,20,46),tone:3,ink:false},                                                 // bony rings
   {t:'line',a:[29,16,34,16],m:M(262,20,46),tone:3,ink:false},
   {t:'line',a:[30,19,35,19],m:M(262,20,46),tone:3,ink:false},
   {t:'line',a:[29,22,34,22],m:M(262,20,46),tone:3,ink:false},
   {t:'line',a:[27,25,31,25],m:M(262,20,46),tone:3,ink:false},
   {t:'poly',a:[[27,10],[30,3],[32,10]],m:M(195,55,58,{step:9}),ink:true,rim:true},                           // crystal crest
   {t:'poly',a:[[33,13],[39,9],[37,15]],m:M(195,50,54,{step:9}),ink:true,rim:true},
   {t:'poly',a:[[35,19],[41,20],[36,24]],m:M(195,45,50,{step:9}),ink:true,rim:true},
   {t:'px',a:[[30,5,4],[38,10,4],[40,20,4]],m:M(195,60,88),ink:false},                                        // facet glints
   {t:'e',a:[30,9,4.2,3.4],m:M(262,24,36,{step:7}),rim:true},                                                 // head
   {t:'e',a:[36,10,4,1.5],m:M(262,20,32),rot:0.15},                                                           // snout
   {t:'px',a:[[39,10,3]],m:M(190,60,80),ink:false},
   {t:'px',a:[[31,18,3],[32,20,3],[31,22,3],[32,16,3],[30,20,3]],m:M(190,70,75),ink:false},                   // rune
   ...eye(31.5,8.5,{sz:2,h:190,s:60,l:80,pl:20}),
  ],glow:[[31,19,5,'hsl(190 60% 70%)',0.3],[31,8,4,'hsl(190 60% 70%)',0.25]],tint:[[31,19,6,190,50,0.3]]},
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
 // 잠든 용의 새끼 (전설, 잉걸불 협곡): a dragon hatchling asleep, coiled in the hot water
 '2-10':{parts:[
   {t:'curve',a:[20,24,8,30,4,20],th:[2.4,0.9],m:M(10,45,30,{step:7}),tex:'scales'},                       // tail sweeping under
   {t:'poly',a:[[4,20],[1,16],[2,24]],m:M(10,40,26),ink:true},                                                // arrow tip
   {t:'poly',a:[[14,12],[22,2],[32,9],[28,13]],m:M(5,35,20,{step:6}),ink:true,tex:'rays',fade:[22,13]},     // wing membrane
   {t:'line',a:[14,12,22,2],m:M(5,30,32),tone:3,ink:false},
   {t:'line',a:[22,2,32,9],m:M(5,30,32),tone:3,ink:false},
   {t:'line',a:[22,2,26,12],m:M(5,30,28),tone:2,ink:false},                                                   // wing finger
   {t:'e',a:[24,18,13,7],m:M(10,45,34,{step:7}),tex:'scales',rim:true},                                       // body
   {t:'e',a:[25,21,9,2.8],m:M(30,62,52),lift:0.2,ink:false,tex:'ridges'},                                     // ember belly scutes
   {t:'px',a:[[14,13,2],[18,12,2],[22,12,2],[26,12,2],[30,13,2]],m:M(10,30,18)},                              // back spines
   {t:'e',a:[38,14,6.5,4],m:M(10,45,36,{step:7}),rim:true},                                                   // head
   {t:'poly',a:[[41,13],[47,14],[46,17],[40,17]],m:M(10,40,32),ink:true},                                     // snout
   {t:'px',a:[[46,15,0]],m:M(10,30,12)},
   {t:'poly',a:[[34,11],[31,5],[36,10]],m:M(35,15,42),ink:true},                                               // horns
   {t:'poly',a:[[37,10],[35,4],[39,10]],m:M(35,15,42),ink:true},
   {t:'px',a:[[38,13,0],[39,14,0],[40,14,0],[41,13,0]],m:M(10,30,10)},                                          // closed eye
   {t:'line',a:[41,16,46,16],m:M(10,30,14),tone:0,ink:false},
   {t:'px',a:[[45,12,3],[47,9,3],[46,6,3]],m:M(20,30,70),ink:false},
   {t:'poly',a:[[30,23],[33,28],[36,24]],m:M(10,35,24),ink:true,tex:'rays'},
   {t:'px',a:[[18,25,1],[19,26,0],[21,25,1],[22,26,0]],m:M(35,15,38)},                                         // tucked claws
  ],glow:[[25,21,7,'hsl(30 70% 55%)',0.35]],tint:[[25,21,9,30,60,0.3]]},
 '3-9':{parts:[
   {t:'poly',a:[[3,10],[12,15],[12,17],[3,23],[7,16]],m:M(150,18,34),fade:[12,2],tex:'rays'},               // tail fading to nothing
   {t:'e',a:[22,18,11,6],m:M(150,20,36,{step:6}),fade:[16,10],tex:'grain',rim:true},                          // ghost-green rear body
   {t:'poly',a:[[17,13],[21,9],[26,10],[28,13]],m:M(150,16,30),ink:true,tex:'rays',fade:[20,16]},             // dorsal
   {t:'poly',a:[[24,21],[29,26],[32,22]],m:M(150,16,30),ink:true,tex:'rays'},
   {t:'poly',a:[[27,12],[36,12],[36,24],[26,24],[29,18]],m:M(215,28,22,{step:6}),ink:true,tex:'grain'},      // navy coat (front body)
   {t:'poly',a:[[33,12],[36,12],[36,16],[32,15]],m:M(215,22,32),ink:true},                                   // folded collar
   {t:'px',a:[[31,15,3],[31,18,3],[31,21,3]],m:M(45,60,58),ink:false},                                         // brass buttons down the front
   {t:'e',a:[40,17,6,4.5],m:M(150,18,42,{step:6}),rim:true},                                                   // head
   {t:'poly',a:[[33,13],[36,8],[46,8],[48,13]],m:M(220,18,15,{step:6}),ink:true},                              // tricorn
   {t:'poly',a:[[32,13],[48,13],[48,14],[33,14]],m:M(220,18,24),ink:false},
   {t:'px',a:[[41,10,3],[42,9,3]],m:M(45,50,60),ink:false},
   {t:'e',a:[41,17,1.9,1.9],m:M(150,30,8),ink:false},                                                          // hollow eye
   {t:'px',a:[[41,17,4],[42,17,3]],m:M(150,80,78),ink:false},
   {t:'line',a:[42,20,46,20],m:M(150,20,18),tone:0,ink:false},
   {t:'line',a:[45,20,47,22],m:M(25,20,28),tone:1,ink:false},                                                   // pipe
   {t:'px',a:[[47,22,1],[47,23,1],[46,23,1]],m:M(25,20,30)},
   {t:'px',a:[[47,21,3]],m:M(20,80,60),ink:false},
   {t:'px',a:[[46,18,3],[45,15,2]],m:M(150,20,70),ink:false},
  ],outline:'#1c3a2e',glow:[[41,17,5,'hsl(150 60% 60%)',0.5],[20,18,8,'hsl(150 40% 55%)',0.12],[47,21,3,'hsl(20 70% 55%)',0.4]],tint:[[41,17,6,150,50,0.3]]},
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

 // 불씨해파리 (희귀, 잉걸불 협곡, 밤): an ember drifting through the gorge, trailing threads of heat
 '2-5':{parts:[
   {t:'curve',a:[18,18,16,26,14,31],th:[0.8,0.4],m:M(15,60,40),ink:false,fade:[22,31]},                     // tentacles
   {t:'curve',a:[22,19,24,27,20,31],th:[0.8,0.4],m:M(15,60,42),ink:false,fade:[22,31]},
   {t:'curve',a:[26,19,26,26,29,31],th:[0.8,0.4],m:M(15,60,42),ink:false,fade:[22,31]},
   {t:'curve',a:[30,18,33,25,36,30],th:[0.8,0.4],m:M(15,60,40),ink:false,fade:[22,31]},
   {t:'px',a:[[16,24,4],[24,23,4],[27,25,4],[33,24,4],[15,29,3],[29,29,3]],m:M(30,90,70),ink:false},          // sparks on the threads
   {t:'e',a:[24,12,11,8],m:M(12,55,30,{step:7}),tex:'cracks',rim:true},                                       // bell: cooled crust
   {t:'e',a:[24,14,8,4],m:M(20,80,48),lift:0.1,ink:false,tex:'web'},                                           // inner heat
   {t:'px',a:[[18,10,4],[22,8,4],[27,9,4],[30,12,4],[21,13,4]],m:M(35,90,72),ink:false},                       // glowing cracks
   {t:'poly',a:[[13,13],[35,13],[33,18],[15,18]],m:M(12,45,24),ink:true},                                      // bell rim
   {t:'px',a:[[16,17,3],[20,18,3],[24,18,3],[28,18,3],[32,17,3]],m:M(30,80,60),ink:false},
  ],glow:[[24,13,10,'hsl(25 80% 55%)',0.35]],tint:[[24,13,11,25,70,0.25]]},
 // 눈 없는 아귀 (흔함, 심연의 우물): no eyes, a mouth, and a lantern it stole from a drowned fisher
 '4-0':{parts:[
   {t:'poly',a:[[4,12],[12,15],[12,19],[4,22],[7,17]],m:M(230,8,22),tex:'rays'},
   {t:'curve',a:[26,9,30,2,38,4],th:[0.8,0.6],m:M(230,8,24)},                                                 // lure stalk
   {t:'poly',a:[[36,3],[41,3],[42,9],[35,9]],m:M(30,10,30,{step:6}),ink:true},                                 // tin lantern
   {t:'px',a:[[38,5,4],[39,6,4],[38,6,3]],m:M(40,80,70),ink:false},                                            // its flame
   {t:'px',a:[[37,4,1],[40,4,1],[37,8,1],[40,8,1]],m:M(30,10,18)},                                              // frame
   {t:'e',a:[26,18,14,9],m:M(230,10,24,{step:6}),tex:'grain',rim:true},                                        // lumpy body
   {t:'e',a:[21,13,4,2.5],m:M(230,10,28),ink:false},{t:'e',a:[30,12,3,2],m:M(230,10,28),ink:false},           // warts
   {t:'poly',a:[[30,16],[46,15],[44,22],[31,25]],m:M(230,8,16),ink:true},                                      // gaping mouth
   {t:'px',a:[[33,17,4],[36,17,4],[39,16,4],[42,16,4],[34,23,4],[38,23,4],[42,22,4]],m:M(50,10,88),ink:false},  // needle teeth
   {t:'line',a:[32,16,45,16],m:M(230,8,10),tone:0,ink:false},
   {t:'poly',a:[[18,10],[22,5],[26,10]],m:M(230,8,20),ink:true,tex:'rays'},                                    // ragged dorsal
   {t:'poly',a:[[22,25],[27,30],[31,26]],m:M(230,8,20),ink:true,tex:'rays'},
   {t:'px',a:[[27,13,0],[28,13,0],[29,13,0]],m:M(230,8,14)},                                                    // skin fold where eyes should be
  ],glow:[[38,6,5,'hsl(40 70% 65%)',0.5]],tint:[[38,6,8,40,60,0.35]]},
 // 별고래 (전설, 별이 진 바다): a whale that swallowed a fallen star and glows from within
 // 별고래 (전설, 별이 진 바다): a whale that swallowed a fallen star and glows from within
 '3-10':{parts:[
   {t:'poly',a:[[2,8],[9,14],[9,18],[2,24],[6,16]],m:M(220,22,26),tex:'rays'},                                 // flukes
   {t:'e',a:[26,16,19,8.5],m:M(222,24,26,{step:7}),tex:'grain',rim:true},                                      // body
   {t:'e',a:[28,20,15,4],m:M(222,14,36),lift:0.1,ink:false,tex:'ridges'},                                       // throat grooves
   {t:'poly',a:[[20,9],[24,5],[28,9]],m:M(222,20,22),ink:true},
   {t:'poly',a:[[26,22],[31,28],[36,24]],m:M(222,20,22),ink:true,tex:'rays'},
   {t:'poly',a:[[24,9],[25.5,13.5],[30,15],[25.5,16.5],[24,21],[22.5,16.5],[18,15],[22.5,13.5]],m:M(45,85,60,{step:9}),lift:0.15,ink:false}, // the star inside
   {t:'e',a:[24,15,1.8,1.8],m:M(45,80,92),ink:false},
   {t:'px',a:[[12,13,3],[16,11,3],[33,10,3],[38,13,3],[14,19,3],[36,19,3],[30,11,3]],m:M(45,50,78),ink:false},  // barnacle-stars
   {t:'px',a:[[42,14,1],[42,15,0]],m:M(0,0,10)},
   {t:'line',a:[36,18,45,17],m:M(222,16,14),tone:0,ink:false},
   {t:'px',a:[[46,12,3],[47,9,3]],m:M(220,30,70),ink:false},
  ],glow:[[24,15,9,'hsl(45 70% 65%)',0.35]],tint:[[24,15,10,45,60,0.4]]},

 // 꽃잎송사리 (흔함, 요정의 샘): fins split like petals; hard to tell from the petals floating on the spring
 '1-0':{parts:[
   {t:'poly',a:[[8,12],[14,15],[14,17],[8,21],[11,16]],m:M(335,35,58),ink:true,tex:'rays'},                  // petal tail
   {t:'poly',a:[[9,9],[13,14],[7,14]],m:M(335,30,62),ink:true},                                                // extra petals
   {t:'poly',a:[[9,23],[13,18],[7,18]],m:M(335,30,62),ink:true},
   {t:'poly',a:[[20,12],[24,6],[28,7],[31,12]],m:M(335,35,60),ink:true,tex:'rays'},                           // dorsal petal
   {t:'poly',a:[[22,20],[26,26],[30,21]],m:M(335,35,60),ink:true,tex:'rays'},
   {t:'e',a:[27,16,11,3.6],m:M(90,20,52,{step:6}),tex:'scales',rim:true,spec:[[22,14,6]]},                   // slim green-white body
   {t:'e',a:[36,16,5,2.8],m:M(90,16,58,{step:6}),rim:true},
   {t:'px',a:[[32,14,0],[32,18,0]],m:M(90,16,36)},
   ...eye(38.5,15.5,{sz:2,h:40,s:20,l:85,pl:15}),
   {t:'px',a:[[12,12,4],[11,21,4],[26,7,4]],m:M(335,40,88),ink:false},                                        // petal tips catch light
  ]},
 // 이슬구피 (흔함, 요정의 샘): a single drop of dew sits inside its body and never dries
 // 이슬구피 (흔함, 요정의 샘): a single drop of dew sits inside its body and never dries
 '1-1':{parts:[
   {t:'poly',a:[[9,12],[15,15],[15,17],[9,20],[12,16]],m:M(45,25,46),ink:true,tex:'rays'},
   {t:'poly',a:[[22,12],[27,7],[31,12]],m:M(45,25,44),ink:true,tex:'rays'},
   {t:'poly',a:[[18,13],[21,10],[23,13]],m:M(45,25,44),ink:true},                                                   // second little fin
   {t:'e',a:[27,16,10,4.5],m:M(45,28,50,{step:7}),tex:'scales',rim:true},
   {t:'e',a:[27,18,7,1.8],m:M(45,20,62),lift:0.1,ink:false},
   {t:'e',a:[25,16,3,3.5],m:M(195,45,68,{step:6}),ink:true},                                                        // the dew drop
   {t:'px',a:[[24,14,4]],m:M(195,40,97),ink:false},
   {t:'px',a:[[26,18,3]],m:M(195,40,85),ink:false},
   {t:'poly',a:[[28,19],[32,23],[34,19]],m:M(45,25,44),ink:true,tex:'rays'},
   {t:'e',a:[35,16,4.5,2.8],m:M(45,22,54,{step:6}),rim:true},
   {t:'px',a:[[38,17,0],[39,17,0]],m:M(45,20,30)},                                                                   // tiny mouth
   ...eye(37.5,15.5,{sz:2,h:40,s:20,l:85,pl:15}),
   {t:'px',a:[[30,8,3],[33,5,3]],m:M(195,40,80),ink:false},                                                          // a dew drop falling onto it
  ],glow:[[25,16,4,'hsl(195 50% 75%)',0.3]]},
 '4-2':{parts:[
   {t:'line',a:[16,22,13,28],m:M(45,8,52),tone:1},{t:'line',a:[20,23,18,29],m:M(45,8,52),tone:1},             // legs
   {t:'line',a:[24,23,24,29],m:M(45,8,52),tone:1},{t:'line',a:[28,23,30,29],m:M(45,8,52),tone:1},
   {t:'poly',a:[[6,10],[12,13],[12,17],[6,20],[9,15]],m:M(45,8,48),ink:true,tex:'rays'},                        // tail fan
   {t:'e',a:[22,17,10,5],m:M(45,8,56,{step:7}),rim:true,holes:[[19,17,1],[23,17,1],[27,17,1]]},                 // segmented shell with gaps
   {t:'px',a:[[15,14,0],[19,13,0],[23,13,0],[27,13,0],[31,14,0]],m:M(45,8,30)},                                 // segment seams
   {t:'e',a:[35,15,6,4],m:M(45,8,58,{step:7}),rim:true},                                                        // head shell
   {t:'poly',a:[[39,12],[47,8],[46,13]],m:M(45,8,50),ink:true},                                                 // rostrum
   {t:'line',a:[38,11,46,3],m:M(45,8,44),tone:1,ink:false},                                                     // antennae
   {t:'line',a:[39,12,47,7],m:M(45,8,44),tone:1,ink:false},
   {t:'e',a:[36,14,1.5,1.5],m:M(45,8,10),ink:false},                                                            // empty socket
   {t:'px',a:[[36,14,3]],m:M(195,60,70),ink:false},                                                              // something faint inside
   {t:'poly',a:[[32,19],[36,24],[39,21],[36,18]],m:M(45,8,50),ink:true},                                        // claw
  ],glow:[[36,14,3,'hsl(195 50% 60%)',0.3]]},
 // 침묵의 뱀장어 (희귀, 심연의 우물): the water goes quiet when it passes
 '4-3':{parts:[
   {t:'curve',a:[2,12,10,26,20,14],th:[1,2.6],m:M(230,10,14,{step:5})},                                          // body, almost invisible
   {t:'curve',a:[20,14,30,2,42,16],th:[2.6,2.4],m:M(230,10,15,{step:5})},
   {t:'poly',a:[[8,20],[14,24],[18,19]],m:M(230,8,12),ink:true,tex:'rays',fade:[14,8]},
   {t:'e',a:[42,16,5,2.8],m:M(230,10,17,{step:5}),rim:true},
   {t:'line',a:[41,18,47,17],m:M(230,8,6),tone:0,ink:false},
   {t:'px',a:[[6,15,2],[12,21,2],[18,15,2],[26,8,2],[34,8,2]],m:M(230,20,30)},                                   // faint pale dots along the side
   {t:'px',a:[[44,15,2]],m:M(230,5,40)},                                                                          // a dull eye, no glow
   {t:'px',a:[[44,15,0]],m:M(0,0,4),ink:false},
  ],outline:'#06060a'},
 // 유성 날치 (희귀, 별이 진 바다, 밤): leaps at night and leaves a burning trail
 '3-4':{parts:[
   {t:'curve',a:[2,26,8,22,14,20],th:[0.6,1.4],m:M(35,80,62),fade:[12,0],ink:false},                           // burning trail
   {t:'px',a:[[4,28,4],[7,24,4],[10,25,4]],m:M(40,90,80),ink:false},
   {t:'poly',a:[[12,16],[18,19],[18,21],[12,26],[15,21]],m:M(215,25,30),ink:true,tex:'rays'},                  // tail
   {t:'poly',a:[[20,17],[14,6],[30,4],[36,13]],m:M(215,22,24,{step:6}),ink:true,tex:'rays',fade:[22,14]},      // great wing-fins, spread
   {t:'line',a:[20,17,14,6],m:M(215,20,38),tone:3,ink:false},{t:'line',a:[20,17,30,4],m:M(215,20,38),tone:3,ink:false},
   {t:'e',a:[29,19,11,3.6],m:M(215,25,36,{step:7}),tex:'scales',rim:true,spec:[[24,17,8]]},                  // sleek body
   {t:'poly',a:[[24,22],[20,28],[32,24]],m:M(215,22,24),ink:true,tex:'rays',fade:[22,19]},                     // lower wing
   {t:'e',a:[38,19,5.5,3],m:M(215,20,40,{step:6}),rim:true},
   ...eye(40.5,18.5,{sz:2,h:40,s:40,l:88,pl:15}),
   {t:'px',a:[[31,6,4],[22,8,4]],m:M(40,60,90),ink:false},                                                      // sparks on the wing
  ],glow:[[6,25,5,'hsl(35 80% 60%)',0.4]]},

 // 이끼송어 (흔함, 안개 호수): moss grows on its back from eating the rocks' moss
 '0-0':{parts:[
   {t:'poly',a:[[5,10],[12,15],[12,17],[5,22],[8,16]],m:M(195,16,34),ink:true,tex:'rays'},
   {t:'poly',a:[[18,10],[22,6],[28,7],[31,10]],m:M(195,16,32),ink:true,tex:'rays'},
   {t:'e',a:[26,16,14,5.5],m:M(195,18,42,{step:7}),tex:'scales',rim:true,spec:[[21,13,7]]},                   // trout body
   {t:'e',a:[25,18,10,2.6],m:M(40,20,56),lift:0.1,ink:false},                                                  // pale belly
   {t:'px',a:[[16,15,0],[20,16,0],[24,15,0],[28,16,0],[32,15,0],[18,18,0],[22,19,0],[26,18,0],[30,18,0]],m:M(195,16,30)}, // speckles
   {t:'e',a:[22,12,5,1.8],m:M(100,35,34),tex:'grain',rim:true},                                                 // moss on the back
   {t:'e',a:[30,12,3,1.4],m:M(100,32,32),tex:'grain'},
   {t:'px',a:[[21,10,3],[31,10,3]],m:M(100,40,46)},
   {t:'poly',a:[[24,20],[29,24],[32,20]],m:M(195,16,34),ink:true,tex:'rays'},
   {t:'e',a:[36,16,6,3.8],m:M(195,16,44,{step:6}),rim:true},
   {t:'line',a:[38,18,43,17],m:M(195,14,24),tone:0,ink:false},
   ...eye(38.5,15.5,{sz:2,h:40,s:20,l:82,pl:12}),
  ]},
 // 갈대새우 (흔함, 안개 호수): lives among reed roots, striped like a reed stem
 '0-2':{parts:[
   {t:'line',a:[16,21,13,27],m:M(60,25,34),tone:1},{t:'line',a:[20,22,19,28],m:M(60,25,34),tone:1},
   {t:'line',a:[25,22,26,28],m:M(60,25,34),tone:1},{t:'line',a:[30,21,33,27],m:M(60,25,34),tone:1},
   {t:'poly',a:[[7,12],[13,15],[13,18],[7,21],[10,16]],m:M(60,28,40),ink:true,tex:'rays'},                    // tail fan
   {t:'curve',a:[12,16,24,10,36,15],th:[2.2,3],m:M(62,30,44,{step:7}),tex:'bands',rim:true},                    // arched body
   {t:'px',a:[[18,12,0],[23,11,0],[28,11,0],[33,13,0]],m:M(62,25,28)},                                           // segment seams
   {t:'e',a:[38,16,5,3.4],m:M(62,30,46,{step:7}),rim:true},
   {t:'poly',a:[[41,14],[47,11],[46,16]],m:M(62,28,40),ink:true},                                                // rostrum
   {t:'line',a:[40,13,47,4],m:M(62,25,40),tone:1,ink:false},{t:'line',a:[41,14,47,6],m:M(62,25,40),tone:1,ink:false}, // antennae
   {t:'line',a:[36,19,40,24],m:M(62,25,38),tone:1,ink:false},{t:'line',a:[39,19,43,23],m:M(62,25,38),tone:1,ink:false}, // small claws
   {t:'px',a:[[38,14,0]],m:M(0,0,6)},{t:'px',a:[[37,13,4]],m:M(60,20,80),ink:false},
   {t:'line',a:[2,24,2,30],m:M(90,25,30),tone:1,ink:false},{t:'line',a:[5,22,5,30],m:M(90,25,30),tone:1,ink:false}, // reeds
  ]},
 // 은빛잉어 (희귀, 안개 호수): scales like mirrors, said to have escaped the old castle's pond
 // 은빛잉어 (희귀, 안개 호수): scales like mirrors, said to have escaped the old castle's pond
 '0-4':{parts:[
   {t:'poly',a:[[4,8],[12,14],[12,18],[4,24],[8,16]],m:M(210,10,40),ink:true,tex:'rays'},
   {t:'poly',a:[[16,9],[20,3],[30,4],[33,9]],m:M(210,10,38),ink:true,tex:'rays'},
   {t:'e',a:[25,16,14,7],m:M(210,10,52,{step:9}),tex:'scales',rim:true,spec:[[18,11,10],[24,13,5]]},            // mirror body
   {t:'e',a:[25,12,12,3],m:M(210,12,36),ink:false,lift:-0.1,tex:'scales'},                                        // darker back
   {t:'e',a:[24,19,10,3],m:M(210,6,68),lift:0.1,ink:false},
   {t:'px',a:[[20,12,4],[27,11,4],[33,14,4],[22,16,4],[30,17,4],[16,15,4]],m:M(210,10,98),ink:false},              // mirror glints
   {t:'px',a:[[19,13,0],[26,12,0],[32,15,0],[21,17,0],[29,18,0]],m:M(210,12,30)},                                   // and their shadows
   {t:'poly',a:[[23,22],[28,28],[33,23]],m:M(210,10,40),ink:true,tex:'rays'},
   {t:'e',a:[36,16,6.5,4.5],m:M(210,8,54,{step:8}),rim:true},
   {t:'line',a:[39,19,44,18],m:M(210,8,26),tone:0,ink:false},
   {t:'line',a:[42,19,45,22],m:M(210,8,36),tone:1,ink:false},
   ...eye(39.5,15.5,{sz:2,h:40,s:30,l:80,pl:12}),
  ]},
 '0-5':{parts:[
   {t:'poly',a:[[5,9],[12,14],[12,18],[5,23],[8,16]],m:M(190,15,50),ink:true,tex:'rays',fade:[12,4]},
   {t:'poly',a:[[17,9],[21,4],[29,5],[32,9]],m:M(190,15,48),ink:true,tex:'rays',fade:[24,17]},
   {t:'e',a:[25,16,13,6.5],m:M(190,16,52,{step:6}),tex:'grain',rim:true,holes:[[20,15,1.2],[29,18,1],[24,20,0.9]]}, // see-through body
   {t:'line',a:[14,16,34,16],m:M(190,10,80),tone:3,ink:false},                                                  // spine
   {t:'line',a:[17,13,17,19],m:M(190,10,76),tone:3,ink:false},{t:'line',a:[21,12,21,20],m:M(190,10,76),tone:3,ink:false},
   {t:'line',a:[25,12,25,20],m:M(190,10,76),tone:3,ink:false},{t:'line',a:[29,13,29,19],m:M(190,10,76),tone:3,ink:false},
   {t:'poly',a:[[24,21],[28,26],[32,22]],m:M(190,15,48),ink:true,tex:'rays',fade:[26,32]},
   {t:'e',a:[36,16,6,4.2],m:M(190,16,54,{step:6}),rim:true},
   {t:'e',a:[36,16,3,2],m:M(190,10,70),ink:false,lift:0.1},                                                      // skull showing
   {t:'line',a:[38,19,43,18],m:M(190,10,30),tone:0,ink:false},
   ...eye(39.5,15.5,{sz:2,h:190,s:30,l:92,pl:60,glint:false}),
  ],glow:[[25,16,10,'hsl(190 30% 70%)',0.12]]},
 // 검은 메기 (희귀, 안개 호수, 밤): the thing that cries under the dock at night
 '0-7':{parts:[
   {t:'poly',a:[[3,9],[11,14],[11,18],[3,23],[7,16]],m:M(250,10,16),ink:true,tex:'rays'},
   {t:'poly',a:[[14,11],[20,8],[30,8],[34,11]],m:M(250,10,15),ink:true,tex:'rays'},                             // long low dorsal
   {t:'e',a:[25,17,15,6.5],m:M(250,12,19,{step:6}),tex:'grain',rim:true},
   {t:'e',a:[24,20,11,2.8],m:M(250,8,26),lift:0.1,ink:false},
   {t:'poly',a:[[22,22],[27,28],[31,23]],m:M(250,10,15),ink:true,tex:'rays'},
   {t:'e',a:[38,17,8,5.5],m:M(250,12,20,{step:6}),rim:true},                                                    // broad flat head
   {t:'line',a:[36,20,46,19],m:M(250,8,6),tone:0,ink:false},                                                     // wide mouth
   {t:'px',a:[[37,21,1],[40,21,1],[43,21,1]],m:M(250,8,30)},                                                      // downturned corners
   {t:'line',a:[44,17,47,9],m:M(250,10,30),tone:2,ink:false},{t:'line',a:[45,19,47,27],m:M(250,10,30),tone:2,ink:false}, // whiskers
   {t:'line',a:[43,17,40,8],m:M(250,10,28),tone:2,ink:false},
   {t:'px',a:[[41,15,2],[36,15,2]],m:M(40,20,70)},{t:'px',a:[[41,15,0],[36,15,0]],m:M(0,0,4),ink:false},         // tiny eyes
   {t:'px',a:[[41,17,3],[41,18,3],[36,17,3]],m:M(200,30,70),ink:false},                                          // tear tracks
  ]},
 // 호수의 주인 (전설, 안개 호수): the oldest carp; catch it and the year's fog thins
 '0-10':{parts:[
   {t:'poly',a:[[2,6],[11,13],[11,19],[2,26],[7,16]],m:M(85,18,30),ink:true,tex:'rays'},
   {t:'poly',a:[[14,9],[17,2],[23,1],[31,3],[34,9]],m:M(85,16,28),ink:true,tex:'rays',holes:[[20,4,0.9]]},       // torn old dorsal
   {t:'e',a:[25,16,15,8],m:M(85,18,34,{step:7}),tex:'scales',rim:true},
   {t:'e',a:[24,20,11,3.2],m:M(60,16,46),lift:0.1,ink:false},
   {t:'px',a:[[17,12,0],[18,13,0],[19,14,0],[27,20,0],[28,21,0],[12,17,0],[13,18,0]],m:M(85,14,18)},             // old scars
   {t:'e',a:[21,10,4,1.6],m:M(100,35,32),tex:'grain'},                                                            // moss
   {t:'e',a:[29,9,5,2.2],m:M(110,40,30),ink:true},                                                                // a lily pad on its back
   {t:'px',a:[[30,8,4]],m:M(330,40,70),ink:false},                                                                // a flower on it
   {t:'poly',a:[[24,23],[29,29],[34,24]],m:M(85,16,28),ink:true,tex:'rays'},
   {t:'e',a:[37,16,7.5,5.5],m:M(85,18,36,{step:7}),rim:true},
   {t:'line',a:[40,19,46,18],m:M(85,14,16),tone:0,ink:false},
   {t:'line',a:[44,19,47,24],m:M(85,14,34),tone:1,ink:false},{t:'line',a:[40,20,42,25],m:M(85,14,34),tone:1,ink:false}, // barbels
   ...eye(40.5,15.5,{sz:3,h:45,s:60,l:62,pl:10}),
  ],glow:[[41,15,4,'hsl(45 50% 60%)',0.3]],spark:[[8,5,'hsl(85 20% 70%)'],[44,27,'hsl(85 20% 70%)']]},
 // 수정새우 (흔함, 요정의 샘): clear as glass; you can watch its heart beat
 '1-2':{parts:[
   {t:'line',a:[16,21,13,27],m:M(190,20,62),tone:1},{t:'line',a:[20,22,19,28],m:M(190,20,62),tone:1},
   {t:'line',a:[25,22,26,28],m:M(190,20,62),tone:1},{t:'line',a:[30,21,33,27],m:M(190,20,62),tone:1},
   {t:'poly',a:[[7,12],[13,15],[13,18],[7,21],[10,16]],m:M(190,22,66),ink:true,tex:'rays',fade:[13,7]},
   {t:'curve',a:[12,16,24,10,36,15],th:[2.2,3],m:M(190,22,70,{step:6}),rim:true,holes:[[20,13,1],[28,12,1]]},  // glass body
   {t:'px',a:[[18,12,0],[23,11,0],[28,11,0],[33,13,0]],m:M(190,18,50)},
   {t:'px',a:[[30,14,2],[31,14,2],[30,15,2],[31,15,2]],m:M(350,70,55),ink:false},                               // the heart
   {t:'px',a:[[32,14,0],[33,15,0],[34,15,0]],m:M(350,50,40),ink:false},                                          // a vein
   {t:'e',a:[38,16,5,3.4],m:M(190,22,72,{step:6}),rim:true},
   {t:'poly',a:[[41,14],[47,11],[46,16]],m:M(190,20,66),ink:true},
   {t:'line',a:[40,13,47,4],m:M(190,20,60),tone:1,ink:false},{t:'line',a:[41,14,47,6],m:M(190,20,60),tone:1,ink:false},
   {t:'px',a:[[38,14,0]],m:M(0,0,10)},{t:'px',a:[[37,13,4]],m:M(190,20,96),ink:false},
  ]},
 // 반딧불 열목어 (희귀, 요정의 샘, 밤): hunts by following fireflies; its belly glows yellow
 '1-4':{parts:[
   {t:'poly',a:[[5,10],[12,15],[12,17],[5,22],[8,16]],m:M(150,18,30),ink:true,tex:'rays'},
   {t:'poly',a:[[18,10],[22,6],[28,7],[31,10]],m:M(150,18,28),ink:true,tex:'rays'},
   {t:'e',a:[26,16,14,5.5],m:M(150,20,36,{step:7}),tex:'scales',rim:true},
   {t:'e',a:[25,18.5,10,2.6],m:M(55,80,58),lift:0.15,ink:false},                                                 // glowing belly
   {t:'px',a:[[18,15,0],[22,14,0],[26,14,0],[30,15,0]],m:M(150,18,24)},
   {t:'poly',a:[[24,20],[29,24],[32,20]],m:M(150,18,30),ink:true,tex:'rays'},
   {t:'e',a:[36,16,6,3.8],m:M(150,18,38,{step:6}),rim:true},
   {t:'line',a:[38,18,43,17],m:M(150,14,20),tone:0,ink:false},
   ...eye(38.5,15.5,{sz:2,h:55,s:40,l:85,pl:12}),
  ],glow:[[25,19,8,'hsl(55 80% 60%)',0.3]],tint:[[25,19,9,55,70,0.3]],spark:[[10,8,'hsl(55 90% 75%)'],[40,6,'hsl(55 90% 75%)'],[44,24,'hsl(55 90% 75%)'],[14,26,'hsl(55 90% 75%)']]},

 // 꽃게요정 (희귀, 요정의 샘, 낮): a crab that wanders the flowers and snips petals
 '1-5':{parts:[
   {t:'line',a:[13,21,9,27],m:M(330,20,40),tone:1},{t:'line',a:[18,22,15,28],m:M(330,20,40),tone:1},
   {t:'line',a:[30,22,33,28],m:M(330,20,40),tone:1},{t:'line',a:[35,21,39,27],m:M(330,20,40),tone:1},
   {t:'e',a:[24,17,11,6],m:M(335,28,46,{step:7}),tex:'grain',rim:true},                                        // petal-pink shell
   {t:'poly',a:[[14,15],[34,15],[32,12],[16,12]],m:M(335,24,54),ink:false,lift:0.1},
   {t:'px',a:[[19,14,4],[24,13,4],[29,14,4],[22,18,4],[27,18,4]],m:M(50,60,88),ink:false},                      // pollen specks
   {t:'e',a:[11,12,4,3],m:M(335,26,48,{step:7}),rot:-0.5,rim:true},                                              // claws
   {t:'poly',a:[[7,9],[11,8],[10,12],[7,13]],m:M(335,24,44),ink:true},
   {t:'e',a:[38,11,4.5,3.2],m:M(335,26,50,{step:7}),rot:0.6,rim:true},
   {t:'poly',a:[[40,6],[45,7],[43,11],[40,10]],m:M(335,24,46),ink:true},
   {t:'poly',a:[[44,4],[47,2],[46,7]],m:M(330,40,66),ink:true},                                                   // a petal held in the claw
   {t:'px',a:[[29,10,1],[29,9,2],[32,10,1],[32,9,2]],m:M(335,20,36)},
   {t:'px',a:[[29,8,0],[32,8,0]],m:M(0,0,6)},
   {t:'poly',a:[[20,12],[24,7],[28,12]],m:M(110,30,40),ink:true},                                                 // a leaf sprouting on its back
   {t:'px',a:[[24,9,4],[23,10,3]],m:M(330,40,72),ink:false},                                                      // flower bud
  ]},
 // 별꽃불가사리 (희귀, 요정의 샘): five arms whose tips glow at night, scattered like a constellation
 // 별꽃불가사리 (희귀, 요정의 샘): five arms whose tips glow at night, scattered like a constellation
 '1-6':{parts:[
   {t:'poly',a:[[24,16],[22,2],[26,2]],m:M(270,30,40,{step:7}),ink:true,tex:'grain'},                            // slender arms
   {t:'poly',a:[[24,16],[44,10],[43,14]],m:M(270,30,40,{step:7}),ink:true,tex:'grain'},
   {t:'poly',a:[[24,16],[38,30],[34,31]],m:M(270,30,40,{step:7}),ink:true,tex:'grain'},
   {t:'poly',a:[[24,16],[14,31],[10,29]],m:M(270,30,40,{step:7}),ink:true,tex:'grain'},
   {t:'poly',a:[[24,16],[4,14],[5,10]],m:M(270,30,40,{step:7}),ink:true,tex:'grain'},
   {t:'e',a:[24,16,4.5,4],m:M(270,30,44,{step:7}),rim:true,tex:'spots'},
   {t:'px',a:[[24,3,4],[23,3,4],[43,11,4],[43,12,4],[36,30,4],[35,30,4],[12,30,4],[12,29,4],[5,12,4],[5,11,4]],m:M(55,85,88),ink:false}, // glowing tips
   {t:'px',a:[[24,9,0],[33,13,0],[30,23,0],[18,24,0],[15,15,0]],m:M(270,25,28)},
  ],glow:[[24,3,4,'hsl(55 70% 70%)',0.5],[43,11,4,'hsl(55 70% 70%)',0.5],[36,30,4,'hsl(55 70% 70%)',0.5],[12,30,4,'hsl(55 70% 70%)',0.5],[5,12,4,'hsl(55 70% 70%)',0.5]]},
 '1-7':{parts:[
   {t:'e',a:[11,22,4,2.2],m:M(100,18,30),rot:0.5},{t:'e',a:[33,23,4,2.2],m:M(100,18,32),rot:-0.4},
   {t:'e',a:[22,17,13,7],m:M(105,30,30,{step:7}),tex:'grain',rim:true},                                          // mossy shell
   {t:'poly',a:[[9,18],[35,18],[34,22],[10,22]],m:M(95,20,24),tex:'grain',ink:true},
   {t:'e',a:[16,12,4,2],m:M(110,40,36),tex:'grain'},{t:'e',a:[27,12,4,2],m:M(110,40,36),tex:'grain'},
   {t:'px',a:[[14,10,4],[19,9,4],[25,9,4],[30,10,4]],m:M(335,55,72),ink:false},                                   // flowers
   {t:'px',a:[[14,9,4],[25,8,4]],m:M(50,70,88),ink:false},
   {t:'line',a:[21,10,22,6],m:M(110,30,34),tone:1,ink:false},                                                     // a sprout
   {t:'px',a:[[22,5,3],[23,6,3]],m:M(110,40,50)},
   {t:'e',a:[38,19,6,3.6],m:M(100,20,36,{step:7}),tex:'grain',rim:true},
   {t:'poly',a:[[41,17],[45,19],[44,22],[40,22]],m:M(100,18,32),ink:true},
   ...eye(39.5,17.5,{sz:2,h:50,s:30,l:70,pl:8}),
   {t:'px',a:[[38,16,0],[39,16,0],[40,16,0],[41,16,0]],m:M(100,18,20)},
  ],spark:[[31,6,'hsl(55 80% 85%)'],[33,8,'hsl(55 80% 85%)']]},
 // 세계수 뿌리잉어 (영웅, 요정의 샘): lives among the world-tree's roots; its scales ring like a tree's years
 '1-8':{parts:[
   {t:'poly',a:[[4,8],[12,14],[12,18],[4,24],[8,16]],m:M(30,30,30),ink:true,tex:'rays'},
   {t:'poly',a:[[16,9],[20,4],[30,5],[33,9]],m:M(30,28,28),ink:true,tex:'rays'},
   {t:'e',a:[25,16,14,7],m:M(32,32,36,{step:7}),tex:'plates',rim:true},                                          // bark body
   {t:'e',a:[21,15,7,4],m:M(32,28,30),ink:false,tex:'ridges',rot:0.2},                                          // a knot in the wood
   {t:'e',a:[21,15,3.5,2],m:M(32,28,38),ink:false,tex:'ridges',rot:0.2},
   {t:'px',a:[[21,15,0],[20,15,0]],m:M(32,28,20)},
   {t:'line',a:[28,12,36,13],m:M(32,24,28),tone:0,ink:false},{t:'line',a:[28,19,36,18],m:M(32,24,28),tone:0,ink:false}, // grain lines
   {t:'curve',a:[14,20,10,26,6,30],th:[1,0.4],m:M(30,30,26)},                                                    // root tendrils
   {t:'curve',a:[20,22,18,28,13,31],th:[1,0.4],m:M(30,30,26)},
   {t:'poly',a:[[23,22],[28,28],[33,23]],m:M(30,28,28),ink:true,tex:'rays'},
   {t:'e',a:[36,16,6.5,4.5],m:M(32,30,38,{step:7}),rim:true},
   {t:'line',a:[39,19,44,18],m:M(30,28,16),tone:0,ink:false},
   {t:'px',a:[[30,9,3],[32,8,3],[34,9,3]],m:M(110,45,45)},                                                        // leaves sprouting
   ...eye(39.5,15.5,{sz:2,h:110,s:50,l:70,pl:12}),
  ]},
 // 샘의 뱀 (영웅, 요정의 샘, 노을): circles the spring once at dusk and is gone
 '1-9':{parts:[
   {t:'curve',a:[3,20,12,4,24,16],th:[1,3],m:M(20,45,38,{step:7}),tex:'scales'},                                 // sunset-gold body
   {t:'curve',a:[24,16,36,30,44,14],th:[3,2.6],m:M(20,45,40,{step:7}),tex:'scales'},
   {t:'poly',a:[[10,8],[14,2],[18,8],[22,3],[26,10]],m:M(15,40,30),ink:true,tex:'rays',fade:[14,8]},            // frilled crest
   {t:'e',a:[43,13,5.5,3.4],m:M(20,45,42,{step:7}),rot:-0.3,rim:true},
   {t:'line',a:[42,15,47,15],m:M(20,40,14),tone:0,ink:false},
   {t:'line',a:[47,15,48,13],m:M(350,60,50),tone:2,ink:false},                                                   // forked tongue
   {t:'px',a:[[6,17,4],[14,8,4],[22,14,4],[30,23,4],[38,22,4]],m:M(45,70,80),ink:false},                          // dusk glints
   ...eye(44.5,12.5,{sz:2,h:40,s:60,l:80,pl:15}),
  ],glow:[[44,12,3,'hsl(30 60% 70%)',0.25]]},
 // 샘의 수호자 (전설, 요정의 샘): drags those who foul the spring under. Watches fishers.
 // 샘의 수호자 (전설, 요정의 샘): drags those who foul the spring under. Watches fishers.
 '1-10':{parts:[
   {t:'poly',a:[[2,10],[10,15],[10,18],[2,24],[6,16]],m:M(160,25,22),ink:true,tex:'rays'},
   {t:'e',a:[20,18,11,6.5],m:M(160,28,26,{step:7}),tex:'scales',rim:true},                                       // body
   {t:'e',a:[28,13,9,6],m:M(160,28,27,{step:7}),tex:'scales',rim:true},                                           // the hunch
   {t:'poly',a:[[12,12],[15,5],[18,10],[21,3],[24,9],[27,4],[30,8],[33,5],[35,10]],m:M(160,25,20),ink:true,tex:'rays'}, // spiny ridge
   {t:'curve',a:[24,23,20,30,27,32],th:[1.3,0.5],m:M(160,25,24)},                                                 // long grasping fingers
   {t:'curve',a:[29,24,28,31,35,32],th:[1.3,0.5],m:M(160,25,24)},
   {t:'curve',a:[33,23,36,30,42,31],th:[1.3,0.5],m:M(160,25,24)},
   {t:'curve',a:[36,21,42,27,47,27],th:[1.3,0.5],m:M(160,25,24)},
   {t:'e',a:[39,15,7,5],m:M(160,28,29,{step:7}),rim:true},                                                          // broad head
   {t:'poly',a:[[35,17],[47,16],[46,21],[36,21]],m:M(160,26,24),ink:true},                                         // heavy lower jaw
   {t:'curve',a:[34,10,38,4,44,8],th:[0.8,0.4],m:M(110,30,30)},                                                     // weed hair
   {t:'curve',a:[36,10,42,6,47,10],th:[0.8,0.4],m:M(110,30,30)},
   {t:'curve',a:[33,11,36,6,39,7],th:[0.7,0.3],m:M(110,30,30)},
   {t:'line',a:[37,17,46,17],m:M(160,20,8),tone:0,ink:false},
   {t:'px',a:[[38,18,4],[40,18,4],[42,18,4],[44,17,4],[39,16,4],[43,16,4]],m:M(50,10,88),ink:false},
   ...eye(39.5,13.5,{sz:3,h:120,s:70,l:60,pl:10}),
   ...eye(44.5,13.5,{sz:2,h:120,s:70,l:60,pl:10}),
  ],glow:[[40,13,4,'hsl(120 60% 55%)',0.35],[44,13,3,'hsl(120 60% 55%)',0.3]]},
 // 재송어 (흔함, 잉걸불 협곡): lives in ash-grey water; smoke follows it
 '2-0':{parts:[
   {t:'curve',a:[12,13,6,9,2,4],th:[1.4,0.4],m:M(20,4,40),fade:[10,1],ink:false},                                  // smoke trailing off
   {t:'curve',a:[12,15,5,16,1,13],th:[1.2,0.4],m:M(20,4,36),fade:[9,0],ink:false},
   {t:'poly',a:[[5,10],[12,15],[12,17],[5,22],[8,16]],m:M(20,8,36),ink:true,tex:'rays'},
   {t:'poly',a:[[18,10],[22,6],[28,7],[31,10]],m:M(20,8,34),ink:true,tex:'rays'},
   {t:'e',a:[26,16,14,5.5],m:M(20,10,44,{step:7}),tex:'scales',rim:true},
   {t:'e',a:[25,18,10,2.6],m:M(20,8,54),lift:0.1,ink:false},
   {t:'px',a:[[17,14,0],[21,13,0],[25,13,0],[29,14,0],[33,15,0],[19,17,0],[23,18,0],[27,17,0]],m:M(20,8,28)},
   {t:'px',a:[[20,15,3],[28,15,3],[24,16,3]],m:M(20,70,55),ink:false},                                             // embers under the ash
   {t:'poly',a:[[24,20],[29,24],[32,20]],m:M(20,8,36),ink:true,tex:'rays'},
   {t:'e',a:[36,16,6,3.8],m:M(20,8,46,{step:6}),rim:true},
   {t:'line',a:[38,18,43,17],m:M(20,8,24),tone:0,ink:false},
   ...eye(38.5,15.5,{sz:2,h:40,s:20,l:82,pl:12}),
  ],glow:[[24,16,4,'hsl(20 60% 50%)',0.15]]},
 '2-1':{parts:[
   {t:'poly',a:[[3,9],[11,14],[11,18],[3,23],[7,16]],m:M(20,10,14),ink:true,tex:'rays'},
   {t:'poly',a:[[14,11],[20,8],[30,8],[34,11]],m:M(20,10,13),ink:true,tex:'rays'},
   {t:'e',a:[25,17,15,6.5],m:M(20,12,17,{step:6}),tex:'cracks',rim:true},                                        // charcoal body
   {t:'px',a:[[16,15,3],[22,19,3],[28,14,3],[31,19,3]],m:M(20,80,50),ink:false},                                  // cracks glowing orange
   {t:'poly',a:[[22,22],[27,28],[31,23]],m:M(20,10,13),ink:true,tex:'rays'},
   {t:'e',a:[38,17,8,5.5],m:M(20,12,18,{step:6}),rim:true},
   {t:'line',a:[36,20,46,19],m:M(20,8,5),tone:0,ink:false},
   {t:'line',a:[44,17,47,9],m:M(20,10,26),tone:2,ink:false},{t:'line',a:[45,19,47,27],m:M(20,10,26),tone:2,ink:false},
   {t:'px',a:[[47,9,3],[47,27,3]],m:M(20,80,55),ink:false},                                                        // singed whisker tips
   {t:'px',a:[[41,15,2],[36,15,2]],m:M(40,20,60)},{t:'px',a:[[41,15,0],[36,15,0]],m:M(0,0,4),ink:false},
  ],glow:[[22,19,3,'hsl(20 70% 50%)',0.25],[28,14,3,'hsl(20 70% 50%)',0.25]]},

 // 잿더미게 (흔함, 잉걸불 협곡): wears a coat of ash; poke it and ash puffs up
 // 잿더미게 (흔함, 잉걸불 협곡): sits half-buried in ash; poke it and ash puffs up
 '2-2':{parts:[
   {t:'e',a:[24,25,20,3],m:M(20,4,26),ink:false,tex:'grain',fade:[24,46]},                                       // ash drift it sits in
   {t:'line',a:[12,22,9,26],m:M(20,6,30),tone:1},{t:'line',a:[17,23,15,27],m:M(20,6,30),tone:1},
   {t:'line',a:[31,23,33,27],m:M(20,6,30),tone:1},{t:'line',a:[36,22,39,26],m:M(20,6,30),tone:1},
   {t:'e',a:[24,19,13,5.5],m:M(20,6,36,{step:6}),tex:'grain',rim:true},                                          // wide flat shell
   {t:'e',a:[24,16,11,2.6],m:M(20,4,50),ink:false,lift:0.1,tex:'grain'},                                          // ash layer on top
   {t:'px',a:[[18,19,3],[28,20,3]],m:M(20,80,50),ink:false},                                                       // ember peeking through
   {t:'e',a:[9,19,4,2.6],m:M(20,6,38,{step:7}),rot:0.1,rim:true},                                                  // claws tucked low
   {t:'poly',a:[[4,18],[8,17],[7,21],[4,21]],m:M(20,6,34),ink:true},
   {t:'e',a:[39,19,4,2.6],m:M(20,6,40,{step:7}),rot:-0.1,rim:true},
   {t:'poly',a:[[40,17],[45,18],[44,21],[40,21]],m:M(20,6,36),ink:true},
   {t:'px',a:[[21,13,1],[21,12,2],[27,13,1],[27,12,2]],m:M(20,6,28)},
   {t:'px',a:[[21,11,0],[27,11,0]],m:M(0,0,6)},
   {t:'px',a:[[14,10,3],[22,7,3],[33,6,3],[40,4,3],[30,9,3]],m:M(20,4,55),ink:false},                               // ash drifting up
  ]},
 '2-3':{parts:[
   {t:'poly',a:[[6,12],[12,15],[12,17],[6,20],[9,16]],m:M(10,50,30),ink:true,tex:'rays'},
   {t:'e',a:[25,16,13,11],m:M(8,55,28,{step:7}),tex:'cracks',rim:true},                                          // swollen body, cooled crust
   {t:'e',a:[24,19,9,5],m:M(20,80,50),ink:false,lift:0.1,tex:'web'},                                               // molten underside
   {t:'px',a:[[18,10,3],[24,8,3],[30,10,3],[16,16,3],[33,16,3],[20,22,3],[29,23,3]],m:M(30,90,70),ink:false},     // glowing cracks
   {t:'px',a:[[14,8,2],[19,4,2],[25,3,2],[31,4,2],[36,8,2],[12,14,2],[38,14,2],[13,22,2],[37,22,2],[18,27,2],[25,29,2],[32,27,2]],m:M(30,20,60)}, // spines
   {t:'poly',a:[[29,24],[33,29],[36,25]],m:M(10,50,30),ink:true,tex:'rays'},
   ...eye(33.5,13.5,{sz:3,h:50,s:40,l:80,pl:8}),
   {t:'line',a:[35,19,40,19],m:M(10,40,12),tone:0,ink:false},
   {t:'px',a:[[37,20,4],[39,20,4]],m:M(50,10,90),ink:false},                                                        // beak teeth
  ],glow:[[24,19,9,'hsl(20 80% 55%)',0.3]],tint:[[24,19,11,20,70,0.25]]},
 // 용암새우 (희귀, 잉걸불 협곡): shell black and cracked like cooled lava
 '2-4':{parts:[
   {t:'line',a:[16,21,13,27],m:M(10,20,18),tone:1},{t:'line',a:[20,22,19,28],m:M(10,20,18),tone:1},
   {t:'line',a:[25,22,26,28],m:M(10,20,18),tone:1},{t:'line',a:[30,21,33,27],m:M(10,20,18),tone:1},
   {t:'poly',a:[[7,12],[13,15],[13,18],[7,21],[10,16]],m:M(10,25,20),ink:true,tex:'rays'},
   {t:'curve',a:[12,16,24,10,36,15],th:[2.2,3],m:M(10,25,22,{step:6}),tex:'cracks',rim:true},
   {t:'px',a:[[18,12,3],[23,11,3],[28,11,3],[33,13,3],[20,15,3],[30,15,3]],m:M(25,90,60),ink:false},               // lava in the seams
   {t:'e',a:[38,16,5,3.4],m:M(10,25,24,{step:6}),rim:true},
   {t:'poly',a:[[41,14],[47,11],[46,16]],m:M(10,25,20),ink:true},
   {t:'line',a:[40,13,47,4],m:M(10,25,22),tone:1,ink:false},{t:'line',a:[41,14,47,6],m:M(10,25,22),tone:1,ink:false},
   {t:'px',a:[[38,14,0]],m:M(0,0,4)},{t:'px',a:[[37,13,3]],m:M(25,80,65),ink:false},
  ],glow:[[24,13,8,'hsl(25 80% 55%)',0.18]]},
 // 흑요석 창꼬치 (영웅, 잉걸불 협곡): teeth sharp as obsidian; cuts lines clean through
 '2-6':{parts:[
   {t:'poly',a:[[2,10],[9,15],[9,17],[2,22],[6,16]],m:M(280,8,14),ink:true,tex:'rays'},
   {t:'poly',a:[[16,11],[19,7],[25,8],[27,11]],m:M(280,8,12),ink:true,tex:'rays'},
   {t:'poly',a:[[8,13],[36,11],[40,16],[36,21],[8,19]],m:M(280,10,18,{step:7}),tex:'scales',rim:true,spec:[[14,13,10],[26,12,8]]}, // glassy black
   {t:'poly',a:[[8,16],[34,15],[36,19],[8,19]],m:M(280,8,12),ink:false,lift:-0.1},
   {t:'px',a:[[12,14,4],[20,13,4],[29,13,4]],m:M(280,10,70),ink:false},                                            // glass glints
   {t:'poly',a:[[26,19],[31,24],[34,21]],m:M(280,8,12),ink:true,tex:'rays'},
   {t:'poly',a:[[36,12],[48,15],[47,18],[36,20]],m:M(280,10,20,{step:7}),rim:true},                                // spear head
   {t:'line',a:[38,17,47,16],m:M(280,8,4),tone:0,ink:false},
   {t:'px',a:[[39,18,4],[41,18,4],[43,17,4],[45,17,4],[40,15,4],[44,15,4]],m:M(280,5,85),ink:false},               // obsidian teeth (pale edges)
   ...eye(39.5,14.5,{sz:2,h:0,s:50,l:60,pl:10}),
  ]},
 // 불꽃 장어 (영웅, 잉걸불 협곡, 노을): surfaces only at sunset; its whole body burns
 '2-7':{parts:[
   {t:'poly',a:[[8,16],[12,6],[14,14],[18,4],[20,12],[24,5],[26,13]],m:M(30,90,60),fade:[12,4],ink:false,tex:'rays'}, // flame crest
   {t:'curve',a:[4,24,14,6,26,18],th:[1.2,3.6],m:M(15,80,42,{step:8})},
   {t:'curve',a:[26,18,36,30,43,16],th:[3.6,3],m:M(15,80,44,{step:8})},
   {t:'poly',a:[[28,22],[33,30],[36,27]],m:M(30,90,58),ink:false,tex:'rays',fade:[30,36]},
   {t:'px',a:[[10,18,4],[16,10,4],[22,14,4],[30,22,4],[36,26,4],[40,18,4]],m:M(45,95,80),ink:false},              // white-hot spots
   {t:'e',a:[42,14,5.5,3.2],m:M(15,80,46,{step:8}),rot:-0.2,rim:true},
   {t:'line',a:[40,16,47,15],m:M(10,70,20),tone:0,ink:false},
   ...eye(43.5,13.5,{sz:2,h:50,s:90,l:92,pl:70,glint:false}),
  ],glow:[[24,16,14,'hsl(25 90% 55%)',0.2],[44,13,4,'hsl(50 90% 70%)',0.4]]},
 // 화산거북 (영웅, 잉걸불 협곡): shell of basalt; steams when pulled out of the water
 '2-8':{parts:[
   {t:'e',a:[10,22,4,2.2],m:M(10,20,22),rot:0.5},{t:'e',a:[33,23,4,2.2],m:M(10,20,24),rot:-0.4},
   {t:'e',a:[21,17,14,7.5],m:M(10,15,20,{step:7}),tex:'plates',rim:true},                                        // basalt shell
   {t:'poly',a:[[7,18],[35,18],[34,22],[8,22]],m:M(10,15,16),tex:'grain',ink:true},
   {t:'px',a:[[14,14,3],[19,12,3],[25,12,3],[30,14,3],[17,17,3],[27,17,3]],m:M(25,90,58),ink:false},              // magma between the plates
   {t:'poly',a:[[18,10],[21,4],[24,10]],m:M(10,15,18),ink:true},                                                   // a small cone on top
   {t:'px',a:[[21,5,4],[21,4,3]],m:M(30,90,70),ink:false},                                                          // its vent
   {t:'px',a:[[22,2,3],[23,1,3]],m:M(20,5,60),ink:false},                                                           // steam
   {t:'e',a:[38,19,6,3.6],m:M(10,18,24,{step:7}),tex:'grain',rim:true},
   {t:'poly',a:[[41,17],[45,19],[44,22],[40,22]],m:M(10,18,20),ink:true},
   ...eye(39.5,17.5,{sz:2,h:30,s:80,l:60,pl:8}),
   {t:'px',a:[[38,16,0],[39,16,0],[40,16,0],[41,16,0]],m:M(10,18,12)},
  ],glow:[[21,5,3,'hsl(30 80% 60%)',0.4]],tint:[[21,13,10,25,60,0.12]]},
 // 심장불 살라만더 (신화, 잉걸불 협곡): called the gorge's heat source; a lizard with fins and a visible beating heart
 '2-11':{parts:[
   {t:'curve',a:[22,22,10,28,4,18],th:[2.2,0.7],m:M(5,70,34,{step:7}),tex:'scales'},                               // tail
   {t:'px',a:[[6,19,4],[10,25,4],[15,27,4]],m:M(40,95,80),ink:false},                                               // flames along the tail
   {t:'e',a:[26,17,12,6],m:M(5,70,38,{step:7}),tex:'scales',rim:true},                                              // body
   {t:'poly',a:[[16,12],[20,6],[26,8],[32,6],[36,12]],m:M(30,90,60),ink:false,tex:'rays',fade:[26,20]},            // fin of fire
   {t:'line',a:[18,21,15,27],m:M(5,60,30),tone:1},{t:'line',a:[32,22,35,28],m:M(5,60,30),tone:1},                  // legs
   {t:'px',a:[[14,28,0],[15,28,0],[16,28,0],[34,29,0],[35,29,0],[36,29,0]],m:M(5,50,20)},                           // toes
   {t:'e',a:[25,17,3.2,3.6],m:M(0,0,10),ink:false},                                                                  // dark window into the chest
   {t:'px',a:[[24,16,4],[25,16,4],[24,17,4],[25,17,4],[26,17,3],[25,18,3]],m:M(355,90,60),ink:false},               // the heart
   {t:'px',a:[[24,15,4]],m:M(40,90,90),ink:false},
   {t:'e',a:[39,15,6,4],m:M(5,70,40,{step:7}),rim:true},
   {t:'line',a:[41,18,46,17],m:M(5,60,16),tone:0,ink:false},
   {t:'px',a:[[36,12,2],[38,11,2],[40,11,2]],m:M(5,60,24)},                                                          // ridge
   ...eye(41.5,14.5,{sz:2,h:45,s:90,l:90,pl:60,glint:false}),
  ],outline:'#4a2e5e',glow:[[25,17,8,'hsl(355 80% 55%)',0.45],[42,14,3,'hsl(45 80% 70%)',0.3]],tint:[[25,17,9,355,70,0.35]],spark:[[8,10,'hsl(40 90% 80%)'],[44,26,'hsl(40 90% 80%)']]},
 // 별모래 정어리 (흔함, 별이 진 바다): star-sand stuck to its scales; schools through the night sea
 // 별모래 정어리 (흔함, 별이 진 바다): star-sand stuck to its scales; never alone
 '3-0':{parts:[
   {t:'e',a:[12,9,7,2.2],m:M(225,18,30,{step:5}),fade:[16,4],ink:false},                                          // two of the school, behind
   {t:'e',a:[11,24,7,2.2],m:M(225,18,30,{step:5}),fade:[15,3],ink:false},
   {t:'px',a:[[14,9,3],[13,24,3]],m:M(50,50,80),ink:false},
   {t:'poly',a:[[13,12],[19,15],[19,17],[13,21],[16,16]],m:M(225,25,34),ink:true,tex:'rays'},
   {t:'poly',a:[[24,12],[27,8],[32,9],[34,12]],m:M(225,25,32),ink:true,tex:'rays'},
   {t:'e',a:[30,16,12,3.4],m:M(225,22,46,{step:7}),tex:'scales',rim:true,spec:[[26,14,6]]},
   {t:'e',a:[29,17.5,8,1.6],m:M(225,15,62),lift:0.1,ink:false},
   {t:'px',a:[[21,15,4],[25,14,4],[29,15,4],[33,14,4],[37,15,4],[27,17,4],[35,17,4]],m:M(50,70,90),ink:false},     // star sand
   {t:'poly',a:[[30,18],[34,22],[36,18]],m:M(225,25,34),ink:true,tex:'rays'},
   {t:'e',a:[39,16,5,2.6],m:M(225,22,48,{step:6}),rim:true},
   ...eye(41.5,15.5,{sz:2,h:40,s:20,l:85,pl:12}),
  ],spark:[[5,16,'hsl(50 60% 85%)'],[45,24,'hsl(50 60% 85%)']]},
 '3-1':{parts:[
   {t:'line',a:[14,22,10,28],m:M(225,20,26),tone:1},{t:'line',a:[19,23,17,29],m:M(225,20,26),tone:1},
   {t:'line',a:[29,23,31,29],m:M(225,20,26),tone:1},{t:'line',a:[34,22,38,28],m:M(225,20,26),tone:1},
   {t:'e',a:[24,18,11,6],m:M(228,26,30,{step:7}),tex:'grain',rim:true},                                           // night-blue shell
   {t:'px',a:[[18,15,4],[23,13,4],[29,14,4],[31,19,4],[21,20,4]],m:M(50,70,92),ink:false},                          // stars
   {t:'line',a:[18,15,23,13],m:M(50,30,55),tone:2,ink:false},{t:'line',a:[23,13,29,14],m:M(50,30,55),tone:2,ink:false},
   {t:'line',a:[29,14,31,19],m:M(50,30,55),tone:2,ink:false},
   {t:'curve',a:[14,15,9,10,8,3],th:[1.6,1],m:M(228,24,32,{step:7})},                                              // left arm raised high
   {t:'poly',a:[[6,1],[11,1],[9,5],[6,5]],m:M(228,22,30),ink:true},
   {t:'curve',a:[34,15,40,12,44,6],th:[1.6,1],m:M(228,24,34,{step:7})},                                            // right arm pointing up
   {t:'poly',a:[[42,3],[47,4],[46,8],[42,7]],m:M(228,22,32),ink:true},
   {t:'px',a:[[46,2,4]],m:M(50,70,95),ink:false},                                                                    // the star it points at
   {t:'px',a:[[22,12,1],[22,11,2],[26,12,1],[26,11,2]],m:M(228,20,24)},
   {t:'px',a:[[22,10,0],[26,10,0]],m:M(0,0,6)},
  ],spark:[[46,2,'hsl(50 70% 95%)']]},
 '3-2':{parts:[
   {t:'curve',a:[6,26,12,12,20,8],th:[1.4,0.3],m:M(270,40,55),fade:[14,4],ink:false},                             // galaxy trail
   {t:'px',a:[[8,24,4],[11,17,4],[15,11,4],[7,20,3],[13,14,3]],m:M(280,50,90),ink:false},
   {t:'line',a:[22,21,19,27],m:M(265,30,40),tone:1},{t:'line',a:[26,22,25,28],m:M(265,30,40),tone:1},
   {t:'line',a:[30,22,31,28],m:M(265,30,40),tone:1},{t:'line',a:[34,21,37,27],m:M(265,30,40),tone:1},
   {t:'poly',a:[[14,12],[19,15],[19,18],[14,21],[16,16]],m:M(265,32,46),ink:true,tex:'rays'},
   {t:'curve',a:[18,16,28,10,38,15],th:[2.2,3],m:M(265,32,44,{step:7}),tex:'bands',rim:true},
   {t:'px',a:[[22,12,4],[27,11,4],[33,12,4],[30,15,4]],m:M(280,50,92),ink:false},                                   // stars on the shell
   {t:'e',a:[40,16,4.5,3.2],m:M(265,32,46,{step:7}),rim:true},
   {t:'poly',a:[[43,14],[48,11],[47,16]],m:M(265,30,42),ink:true},
   {t:'line',a:[42,13,48,5],m:M(265,30,42),tone:1,ink:false},{t:'line',a:[43,14,48,7],m:M(265,30,42),tone:1,ink:false},
   {t:'px',a:[[40,14,0]],m:M(0,0,6)},{t:'px',a:[[39,13,4]],m:M(280,40,92),ink:false},
  ],glow:[[12,16,6,'hsl(275 50% 65%)',0.25]]},
 // 성운 해파리 (희귀, 별이 진 바다): colours turn slowly inside it; stare and you forget your name
 '3-3':{parts:[
   {t:'curve',a:[16,19,14,26,12,31],th:[0.8,0.4],m:M(290,35,52),ink:false,fade:[22,31]},
   {t:'curve',a:[21,20,22,27,19,31],th:[0.8,0.4],m:M(290,35,52),ink:false,fade:[22,31]},
   {t:'curve',a:[27,20,27,27,30,31],th:[0.8,0.4],m:M(290,35,52),ink:false,fade:[22,31]},
   {t:'curve',a:[32,19,35,26,38,30],th:[0.8,0.4],m:M(290,35,52),ink:false,fade:[22,31]},
   {t:'e',a:[24,13,12,8.5],m:M(285,38,40,{step:7}),tex:'grain',rim:true,holes:[[20,12,1.2],[29,10,1]]},          // translucent bell
   {t:'e',a:[22,13,6,4],m:M(330,55,55),ink:false,lift:0.1,tex:'spots'},                                             // nebula clouds
   {t:'e',a:[28,15,5,3],m:M(200,55,50),ink:false,lift:0.1,tex:'spots'},
   {t:'px',a:[[18,9,4],[25,7,4],[31,11,4],[21,16,4],[27,17,4],[15,14,4]],m:M(50,60,95),ink:false},                 // stars inside
   {t:'poly',a:[[12,15],[36,15],[34,20],[14,20]],m:M(285,30,34),ink:true},
   {t:'px',a:[[15,19,3],[20,20,3],[25,20,3],[30,20,3],[34,19,3]],m:M(290,40,70),ink:false},
  ],glow:[[24,13,12,'hsl(290 50% 60%)',0.2]]},
 // 달거북 (영웅, 별이 진 바다, 밤): its shell brightens as the moon fills
 '3-7':{parts:[
   {t:'e',a:[10,22,4,2.2],m:M(225,15,26),rot:0.5},{t:'e',a:[33,23,4,2.2],m:M(225,15,28),rot:-0.4},
   {t:'e',a:[21,17,14,7.5],m:M(50,15,70,{step:7}),tex:'plates',rim:true},                                         // moon shell
   {t:'px',a:[[13,15,1],[18,13,1],[25,12,1],[29,16,1],[16,19,1],[24,19,1]],m:M(50,10,56)},                          // craters
   {t:'poly',a:[[7,18],[35,18],[34,22],[8,22]],m:M(225,15,26),tex:'grain',ink:true},
   {t:'poly',a:[[21,10],[28,10],[30,15],[24,17],[19,15]],m:M(225,18,30),ink:false,lift:-0.2},                     // the shadowed part of the moon
   {t:'e',a:[38,19,6,3.6],m:M(225,15,30,{step:7}),tex:'grain',rim:true},
   {t:'poly',a:[[41,17],[45,19],[44,22],[40,22]],m:M(225,15,26),ink:true},
   ...eye(39.5,17.5,{sz:2,h:50,s:30,l:80,pl:8}),
   {t:'px',a:[[38,16,0],[39,16,0],[40,16,0],[41,16,0]],m:M(225,15,18)},
  ],glow:[[18,16,12,'hsl(50 30% 85%)',0.25]]},
 // 바다불가사리 (희귀, 별이 진 바다): a piece of fallen star that hardened
 '3-8':{parts:[
   {t:'poly',a:[[24,16],[21,3],[27,3]],m:M(40,45,52,{step:7}),ink:true,tex:'grain'},
   {t:'poly',a:[[24,16],[44,11],[43,17]],m:M(40,45,52,{step:7}),ink:true,tex:'grain'},
   {t:'poly',a:[[24,16],[37,30],[31,31]],m:M(40,45,52,{step:7}),ink:true,tex:'grain'},
   {t:'poly',a:[[24,16],[17,31],[11,28]],m:M(40,45,52,{step:7}),ink:true,tex:'grain'},
   {t:'poly',a:[[24,16],[4,16],[7,10]],m:M(40,45,52,{step:7}),ink:true,tex:'grain'},
   {t:'e',a:[24,16,5,4.5],m:M(40,50,58,{step:7}),rim:true},
   {t:'px',a:[[24,16,4],[23,15,4]],m:M(45,70,95),ink:false},                                                        // still-hot core
   {t:'px',a:[[23,9,0],[25,7,0],[33,13,0],[38,12,0],[30,23,0],[34,27,0],[17,24,0],[13,27,0],[14,15,0],[9,13,0]],m:M(40,40,40)}, // pits
   {t:'px',a:[[12,12,0],[19,20,0],[36,16,0]],m:M(40,40,34)},                                                        // chips
  ],glow:[[24,16,6,'hsl(45 70% 70%)',0.35]]},
 // 떨어진 첫 번째 별 (신화, 별이 진 바다): the first star that ever fell, become a fish
 '3-11':{parts:[
   {t:'curve',a:[20,16,10,12,2,16],th:[1.6,0.4],m:M(45,70,70),fade:[14,2],ink:false},                              // light trails
   {t:'curve',a:[20,18,10,22,2,18],th:[1.6,0.4],m:M(45,70,70),fade:[14,2],ink:false},
   {t:'poly',a:[[28,4],[31,12],[40,13],[33,18],[35,27],[28,22],[21,27],[23,18],[16,13],[25,12]],m:M(45,80,66,{step:8}),tex:'grain',rim:true}, // five-point star body
   {t:'e',a:[28,16,4,3.5],m:M(45,70,88),ink:false,lift:0.1},                                                          // white-hot center
   {t:'px',a:[[27,15,4],[28,15,4]],m:M(45,50,99),ink:false},
   {t:'poly',a:[[38,13],[47,10],[44,16]],m:M(45,60,74),ink:false,fade:[40,47],tex:'rays'},                           // a fin of light
   {t:'poly',a:[[33,19],[41,24],[35,24]],m:M(45,60,74),ink:false,fade:[35,42],tex:'rays'},
   ...eye(33.5,13.5,{sz:2,h:220,s:60,l:40,pl:5,glint:false}),                                                          // one dark, old eye
  ],outline:'#4a2e5e',glow:[[28,16,13,'hsl(45 80% 70%)',0.3]],spark:[[6,8],[44,26],[10,26],[46,5],[24,2]]},

 // 장님게 (흔함, 심연의 우물): no eyes, claws grown long to feel along the walls
 '4-1':{parts:[
   {t:'line',a:[13,21,9,27],m:M(230,8,22),tone:1},{t:'line',a:[18,22,15,28],m:M(230,8,22),tone:1},
   {t:'line',a:[30,22,33,28],m:M(230,8,22),tone:1},{t:'line',a:[35,21,39,27],m:M(230,8,22),tone:1},
   {t:'e',a:[24,17,11,6],m:M(230,8,30,{step:6}),tex:'grain',rim:true},                                            // bone-pale shell
   {t:'poly',a:[[14,15],[34,15],[32,12],[16,12]],m:M(230,6,36),ink:false,lift:0.1},
   {t:'px',a:[[29,9,1],[32,9,1]],m:M(230,6,24)},                                                                   // stumps where eyes were
   {t:'curve',a:[14,13,6,6,1,2],th:[1.6,0.6],m:M(230,8,30,{step:6})},                                              // long feeling claws
   {t:'poly',a:[[0,1],[4,0],[3,4]],m:M(230,8,26),ink:true},
   {t:'curve',a:[34,13,42,6,47,1],th:[1.6,0.6],m:M(230,8,32,{step:6})},
   {t:'poly',a:[[45,0],[48,1],[47,4]],m:M(230,8,28),ink:true},
   {t:'px',a:[[20,17,0],[25,18,0],[29,16,0]],m:M(230,8,16)},
  ]},
 // 검은 물 해파리 (희귀, 심연의 우물): darker than the well water; a lantern shows only its outline
 '4-4':{parts:[
   {t:'curve',a:[16,19,14,26,12,31],th:[0.8,0.4],m:M(240,10,10),ink:false,fade:[22,31]},
   {t:'curve',a:[21,20,22,27,19,31],th:[0.8,0.4],m:M(240,10,10),ink:false,fade:[22,31]},
   {t:'curve',a:[27,20,27,27,30,31],th:[0.8,0.4],m:M(240,10,10),ink:false,fade:[22,31]},
   {t:'curve',a:[32,19,35,26,38,30],th:[0.8,0.4],m:M(240,10,10),ink:false,fade:[22,31]},
   {t:'e',a:[24,13,12,8.5],m:M(240,12,8,{step:4}),rim:true},                                                       // nearly black bell
   {t:'poly',a:[[12,15],[36,15],[34,20],[14,20]],m:M(240,10,6),ink:true},
   {t:'px',a:[[15,7,3],[13,10,3],[35,9,3],[33,6,3],[20,4,3],[29,4,3]],m:M(200,20,40),ink:false},                    // the lantern catching its rim
  ],outline:'#2a2a3a'},
 // 우물거북 (영웅, 심연의 우물): climbs the well walls; shell covered in scrape marks
 '4-6':{parts:[
   {t:'e',a:[10,22,4,2.2],m:M(230,10,24),rot:0.5},{t:'e',a:[33,23,4,2.2],m:M(230,10,26),rot:-0.4},
   {t:'px',a:[[6,24,0],[7,25,0],[36,25,0],[37,24,0],[5,23,0],[38,23,0]],m:M(230,8,14)},                            // climbing claws
   {t:'e',a:[21,17,14,7.5],m:M(230,10,28,{step:7}),tex:'grain',rim:true},
   {t:'line',a:[12,13,18,15],m:M(230,8,40),tone:3,ink:false},{t:'line',a:[20,11,27,13],m:M(230,8,40),tone:3,ink:false}, // scrape marks
   {t:'line',a:[16,18,22,20],m:M(230,8,40),tone:3,ink:false},{t:'line',a:[26,16,32,17],m:M(230,8,40),tone:3,ink:false},
   {t:'line',a:[10,16,14,19],m:M(230,8,18),tone:0,ink:false},{t:'line',a:[24,13,29,11],m:M(230,8,18),tone:0,ink:false},
   {t:'poly',a:[[7,18],[35,18],[34,22],[8,22]],m:M(230,8,22),tex:'grain',ink:true},
   {t:'e',a:[38,19,6,3.6],m:M(230,10,30,{step:7}),tex:'grain',rim:true},
   {t:'poly',a:[[41,17],[45,19],[44,22],[40,22]],m:M(230,10,26),ink:true},
   ...eye(39.5,17.5,{sz:2,h:190,s:40,l:70,pl:8}),
   {t:'px',a:[[38,16,0],[39,16,0],[40,16,0],[41,16,0]],m:M(230,10,14)},
  ],glow:[[40,17,3,'hsl(190 40% 60%)',0.25]]},
 // 심연의 해골 (전설, 심연의 우물): grins at the fisher; every tooth still in place
 '4-7':{parts:[
   {t:'poly',a:[[3,10],[11,15],[11,17],[3,22],[7,16]],m:M(45,10,40),ink:true,tex:'rays',holes:[[6,16,1]]},        // tattered bone tail
   {t:'line',a:[11,16,26,16],m:M(45,10,62),tone:2},                                                                 // spine
   {t:'line',a:[14,12,14,20],m:M(45,10,60),tone:2,ink:false},{t:'line',a:[18,11,18,21],m:M(45,10,60),tone:2,ink:false}, // ribs
   {t:'line',a:[22,11,22,21],m:M(45,10,60),tone:2,ink:false},
   {t:'poly',a:[[14,11],[17,5],[23,6],[26,11]],m:M(45,10,50),ink:true,tex:'rays',holes:[[20,8,0.9]]},
   {t:'poly',a:[[25,9],[36,8],[44,11],[46,16],[42,20],[34,21],[26,20]],m:M(45,12,70,{step:7}),tex:'cracks',rim:true}, // skull
   {t:'poly',a:[[30,20],[46,18],[45,23],[36,25],[30,24]],m:M(45,12,62,{step:7}),ink:true},                         // jaw, wide grin
   {t:'line',a:[31,21,45,19],m:M(45,10,20),tone:0,ink:false},
   {t:'px',a:[[32,22,4],[34,22,4],[36,22,4],[38,21,4],[40,21,4],[42,20,4],[44,20,4]],m:M(45,8,96),ink:false},      // every tooth
   {t:'px',a:[[33,20,4],[35,20,4],[37,19,4],[39,19,4],[41,19,4],[43,18,4]],m:M(45,8,92),ink:false},
   {t:'e',a:[36,13,3,2.6],m:M(45,10,10),ink:false},                                                                  // socket
   {t:'px',a:[[36,13,4],[37,13,3]],m:M(190,70,70),ink:false},                                                        // cold light inside
   {t:'px',a:[[41,14,0],[42,13,0],[40,15,0]],m:M(45,10,40)},                                                          // nose hole
   {t:'px',a:[[28,10,0],[29,9,0],[33,8,0]],m:M(45,10,45)},                                                            // cracks
  ],glow:[[36,13,5,'hsl(190 60% 60%)',0.4]],tint:[[36,13,6,190,50,0.25]]},
 // 우물지기 (전설, 심연의 우물): the giant catfish at the bottom; remembers every coin ever dropped
 '4-8':{parts:[
   {t:'poly',a:[[1,8],[10,14],[10,18],[1,24],[6,16]],m:M(230,10,18),ink:true,tex:'rays'},
   {t:'poly',a:[[12,10],[18,6],[30,6],[34,10]],m:M(230,10,16),ink:true,tex:'rays'},
   {t:'e',a:[24,17,16,7.5],m:M(230,12,22,{step:6}),tex:'grain',rim:true},
   {t:'e',a:[23,20,12,3],m:M(230,8,30),lift:0.1,ink:false},
   {t:'px',a:[[14,14,4],[20,19,4],[27,13,4],[31,19,4],[18,22,4]],m:M(45,70,62),ink:false},                          // coins stuck in its hide
   {t:'px',a:[[15,14,2],[21,19,2],[28,13,2]],m:M(45,60,45),ink:false},
   {t:'poly',a:[[22,23],[27,29],[32,24]],m:M(230,10,16),ink:true,tex:'rays'},
   {t:'e',a:[38,17,9,6],m:M(230,12,24,{step:6}),rim:true},                                                           // huge flat head
   {t:'line',a:[35,21,47,20],m:M(230,8,6),tone:0,ink:false},
   {t:'line',a:[44,17,47,7],m:M(230,10,34),tone:2,ink:false},{t:'line',a:[46,20,47,30],m:M(230,10,34),tone:2,ink:false},
   {t:'line',a:[42,16,38,6],m:M(230,10,32),tone:2,ink:false},
   ...eye(41.5,15.5,{sz:3,h:45,s:50,l:60,pl:10}),                                                                     // one coin-gold eye
  ],glow:[[42,15,4,'hsl(45 50% 60%)',0.3]]},
 // 잊힌 이름 (전설, 심연의 우물, 새벽): those who lost their names; it rises at dawn to look for one
 '4-9':{parts:[
   {t:'poly',a:[[6,10],[13,15],[13,17],[6,22],[9,16]],m:M(200,12,46),ink:true,tex:'rays',fade:[13,5]},
   {t:'e',a:[25,16,12,6],m:M(200,14,50,{step:6}),tex:'grain',rim:true,fade:[18,12],holes:[[22,15,1.4],[28,18,1]]}, // half-there body
   {t:'poly',a:[[19,10],[23,6],[28,7],[31,10]],m:M(200,12,44),ink:true,tex:'rays',fade:[24,18]},
   {t:'e',a:[36,15,6,4.5],m:M(200,14,54,{step:6}),rim:true},                                                         // a face, almost human
   {t:'px',a:[[35,14,1],[38,14,1]],m:M(200,10,30)},                                                                    // two shut eyes
   {t:'line',a:[35,17,39,17],m:M(200,10,30),tone:1,ink:false},                                                        // mouth, open as if to speak
   {t:'px',a:[[41,13,3],[43,10,3],[44,7,3],[46,4,3]],m:M(200,20,80),ink:false},                                       // bubbles: the name trying to get out
   {t:'poly',a:[[26,20],[30,25],[33,21]],m:M(200,12,44),ink:true,tex:'rays',fade:[28,34]},
  ],outline:'#2a3040',glow:[[36,15,6,'hsl(200 30% 75%)',0.2]]},
 // 밑바닥의 뱀 (신화, 심연의 우물, 밤): the Leviathan's shadow; climbs the well wall at night
 // 밑바닥의 뱀 (신화, 심연의 우물, 밤): the Leviathan's shadow; climbs the well wall at night
 '4-10':{parts:[
   {t:'poly',a:[[6,16],[9,6],[12,14],[16,4],[19,12],[23,5],[26,13]],m:M(250,22,12),ink:true,tex:'rays',fade:[12,4]}, // shadow frill
   {t:'curve',a:[2,26,10,6,22,16],th:[1.2,3.4],m:M(250,25,14,{step:5}),tex:'scales'},
   {t:'curve',a:[22,16,34,28,43,13],th:[3.4,3],m:M(250,25,15,{step:5}),tex:'scales'},
   {t:'poly',a:[[26,20],[30,29],[34,26]],m:M(250,20,11),ink:true,tex:'rays'},
   {t:'e',a:[42,12,5.8,3.6],m:M(250,25,18,{step:5}),rot:-0.2,rim:true},
   {t:'line',a:[40,14,47,13],m:M(250,20,5),tone:0,ink:false},
   {t:'px',a:[[43,15,3],[46,15,3],[44,12,3]],m:M(300,40,60),ink:false},                                            // violet fangs
   {t:'line',a:[47,13,48,11],m:M(300,60,55),tone:2,ink:false},
   {t:'px',a:[[8,14,3],[14,9,3],[20,13,3],[28,22,3],[36,22,3]],m:M(300,50,45)},                                    // dim violet sheen along the spine
   ...eye(43.5,11.5,{sz:2,h:300,s:80,l:70,pl:60,glint:false}),
  ],outline:'#4a2e5e',glow:[[44,11,5,'hsl(300 70% 60%)',0.45]],tint:[[44,11,6,300,50,0.3]],spark:[[4,6,'hsl(300 60% 80%)'],[36,30,'hsl(300 60% 80%)']]},
};

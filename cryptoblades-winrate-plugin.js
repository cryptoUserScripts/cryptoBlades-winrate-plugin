// ==UserScript==
// @name           CryptoBlades Win Rate calculator
// @description    Calculate fight win rate
// @include       https://app.cryptoblades.io/*
// @version        3
// @grant	   GM_log
// @grant	   GM_addStyle
// @run-at document-end
// ==/UserScript==

const _0xee4b=['_0x3e5430','encounter-container','528618tiyunE','0xBaCB865b3201d02f142f7858112cC04a3573E606','519783kGXlMh','8677BizsEu','reduce','water-icon','pwr','165211gQTTUe','#f44336','nodeName','912190cFnFkG','random','#8bc34a','4639AlamaB','Error,\x20no\x20se\x20ha\x20podido\x20mapear\x20el\x20classname\x20al\x20element','31RSflxv','mouseleave','innerHTML','color','length','_0x260f56','click','fire-icon','split','Go\x20github\x20project','_0x489c5e','KeyC','getElementsByClassName','toFixed','dex','push','872927ZyUiyv','_0x426755','onmouseenter','style','innerText','clipboard','mouseenter','https://github.com/cryptoUserScripts/cryptoBlades-winrate-plugin','bonus-power','element','Power','2xteaFr','Calculate\x20WinRate\x20(\x20ALT\x20+\x20C\x20)','addEventListener','floor','#9e8a57','lightning-icon','focus','187VKAWTX','tooltip-inner','code','onclick','textContent','includes','Bonus\x20power:','earth-icon','className','childNodes','Fight!\x20','appendChild','createElement','forEach','button','keydown','ceil','2kQiKLc','3ujepYi','#text','open','name\x20bold\x20character-name','Error:\x20loading\x20weapon\x20stats','weapon-icon\x20weapon-icon\x20has-tooltip','1gxDGAF','dispatchEvent','_0x3fa5cf','replace','character-list','_blank','_0x50bb88','_0x17bc0c','enemy-character','btn\x20ml-3\x20btn-primary','altKey','_0x690254'];function _0x1fce(_0xb1febc,_0x30443a){return _0x1fce=function(_0xee4be5,_0x1fcec1){_0xee4be5=_0xee4be5-0x1bd;let _0x59af59=_0xee4b[_0xee4be5];return _0x59af59;},_0x1fce(_0xb1febc,_0x30443a);}(function(_0x2f9572,_0x237016){function _0x2ea490(_0x16225f,_0x2ef26a){return _0x1fce(_0x2ef26a-0x219,_0x16225f);}function _0x317435(_0x509b61,_0x35012c){return _0x1fce(_0x35012c- -0xb8,_0x509b61);}while(!![]){try{const _0x44dff7=parseInt(_0x2ea490(0x3c0,0x3e2))*parseInt(_0x317435(0x128,0x10f))+parseInt(_0x2ea490(0x407,0x41c))*parseInt(_0x2ea490(0x3c3,0x3dd))+parseInt(_0x317435(0x144,0x15b))+parseInt(_0x317435(0x106,0x12c))*-parseInt(_0x317435(0x159,0x159))+-parseInt(_0x317435(0xfe,0x109))*-parseInt(_0x317435(0x158,0x145))+parseInt(_0x317435(0x119,0x105))*parseInt(_0x317435(0x10e,0x133))+-parseInt(_0x317435(0x162,0x144))*parseInt(_0x317435(0x106,0x121));if(_0x44dff7===_0x237016)break;else _0x2f9572['push'](_0x2f9572['shift']());}catch(_0x223839){_0x2f9572['push'](_0x2f9572['shift']());}}}(_0xee4b,0xd982c),setTimeout(()=>{const _0x486548=0x0,_0x39fa6b=0x1,_0x457426=0x2,_0x53a9d1=0x3,_0x4245c3=0x4;let _0x3e4dcb=[],_0x311d41='',_0x305304=new Event(_0x30be44(0x282,0x25b)),_0x253c98=new Event(_0x30be44(0x26d,0x295));function _0x1d781e(_0x1803d1,_0x50eaed,_0x3c5218){let _0x3ac985=0x1,_0x20abc9=0.075;if(_0x1803d1==_0x50eaed)_0x3ac985=_0x3ac985+_0x20abc9;if(_0x3e04e5(_0x1803d1,_0x3c5218))_0x3ac985=_0x3ac985+_0x20abc9;if(_0x2eaf43(_0x1803d1,_0x3c5218))_0x3ac985=_0x3ac985-_0x20abc9;return _0x3ac985;}function _0x3e04e5(_0xb9f65d,_0x5dd260){if(_0xb9f65d==_0x53a9d1&&_0x5dd260==_0x486548)return!![];if(_0xb9f65d==_0x457426&&_0x5dd260==_0x53a9d1)return!![];if(_0xb9f65d==_0x39fa6b&&_0x5dd260==_0x457426)return!![];if(_0xb9f65d==_0x486548&&_0x5dd260==_0x39fa6b)return!![];return![];}function _0x2eaf43(_0xf362f1,_0x2cec61){if(_0xf362f1==_0x53a9d1&&_0x2cec61==_0x457426)return!![];if(_0xf362f1==_0x457426&&_0x2cec61==_0x39fa6b)return!![];if(_0xf362f1==_0x39fa6b&&_0x2cec61==_0x486548)return!![];if(_0xf362f1==_0x486548&&_0x2cec61==_0x53a9d1)return!![];return![];}function _0x57b296(_0x438cac,_0xfb9aeb){_0x438cac=Math[_0x13ab36(0x350,0x370)](_0x438cac),_0xfb9aeb=Math['floor'](_0xfb9aeb);function _0x13ab36(_0x3ae81f,_0x900335){return _0x30be44(_0x3ae81f-0xb2,_0x900335);}function _0x4f998b(_0xcbf2de,_0x1d6269){return _0x7931fb(_0xcbf2de,_0x1d6269- -0x3c6);}return Math[_0x4f998b(0x33,0x59)](Math[_0x4f998b(0x1b,0x37)]()*(_0xfb9aeb-_0x438cac+0x1))+_0x438cac;}function _0x4ed93a(){let _0x1fe48c=_0x311d41[_0x68858c(0x149,0x12e)]('|'),_0x4dc986=[];function _0x4ddad4(_0x1715d1,_0x27ae05){return _0x30be44(_0x1715d1-0x6d,_0x27ae05);}function _0x68858c(_0x3d0338,_0x19ef82){return _0x30be44(_0x3d0338- -0x12b,_0x19ef82);}for(let _0x1e8bad=0x0;_0x1e8bad<_0x1fe48c[_0x68858c(0x145,0x12c)]-0x1;_0x1e8bad++){let _0x5327cf=_0x1fe48c[_0x1e8bad][_0x4ddad4(0x2e1,0x2db)]('&');_0x4dc986['push']({'_0x690254':parseFloat(_0x5327cf[0x0]),'_0x2f6c44':parseFloat(_0x5327cf[0x1]),'_0x489c5e':parseFloat(_0x5327cf[0x2]),'_0x50bb88':parseFloat(_0x5327cf[0x3]),'_0x48c1a9':parseFloat(_0x5327cf[0x4]),'_0x3e5430':parseFloat(_0x5327cf[0x5]),'_0x17bc0c':parseFloat(_0x5327cf[0x6]),'_0x260f56':parseFloat(_0x5327cf[0x7]),'id':_0x5327cf[0x8]});}_0x3e4dcb=_0x4dc986;}function _0x31e1da(_0x3f476c,_0x428b36,_0x697c17,_0x20e480,_0x305b14,_0xc3801f,_0x370e32){let _0x5710e6=0.0025,_0x9abfa1=_0x5710e6*1.07,_0x5196f8=_0x5710e6*1.03,_0x87100c=0x1;if(_0x428b36>0x0&&_0x697c17>=0x0){if(_0x697c17==_0x3f476c)_0x87100c=_0x87100c+_0x428b36*_0x9abfa1;else{if(_0x697c17==_0x4245c3)_0x87100c=_0x87100c+_0x428b36*_0x5196f8;else _0x87100c=_0x87100c+_0x428b36*_0x5710e6;}}if(_0x20e480>0x0&&_0x305b14>=0x0){if(_0x305b14==_0x3f476c)_0x87100c=_0x87100c+_0x20e480*_0x9abfa1;else{if(_0x305b14==_0x4245c3)_0x87100c=_0x87100c+_0x20e480*_0x5196f8;else _0x87100c=_0x87100c+_0x20e480*_0x5710e6;}}if(_0xc3801f>0x0&&_0x370e32>=0x0){if(_0x370e32==_0x3f476c)_0x87100c=_0x87100c+_0xc3801f*_0x9abfa1;else{if(_0x370e32==_0x4245c3)_0x87100c=_0x87100c+_0xc3801f*_0x5196f8;else _0x87100c=_0x87100c+_0xc3801f*_0x5710e6;}}return _0x87100c;}function _0x2e30f0(_0x3021b5,_0xd69bae,_0x561069,_0x39092e,_0x22549a,_0x3c24bf,_0x37100c,_0x9dc8cc,_0x5cba33,_0x5e97d4,_0x26856b,_0x55b687,_0x183b19,_0x33b9c6,_0x9c182e,_0x279ed2,_0x798b68,_0x33a19d){let _0x554b2f=_0x31e1da(_0x39092e,_0x22549a,_0x3c24bf,_0x37100c,_0x9dc8cc,_0x5cba33,_0x5e97d4),_0xc5bd85=_0x3021b5*_0x554b2f+_0x561069,_0x26037c=Math['ceil'](_0x26856b-_0x26856b*0.1),_0x2ce95f=Math['floor'](_0x26856b+_0x26856b*0.1),_0x5588af=Math[_0x4922fb(0x515,0x514)](_0xc5bd85-_0xc5bd85*0.1),_0x4ed2ef=Math[_0xaba3f3(0x5cf,0x5a4)](_0xc5bd85+_0xc5bd85*0.1),_0xf86792=Math[_0x4922fb(0x515,0x512)](_0x183b19-_0x183b19*0.1),_0x19aa8d=Math['floor'](_0x183b19+_0x183b19*0.1),_0x43bd8d=Math[_0xaba3f3(0x5b6,0x5b8)](_0xc5bd85-_0xc5bd85*0.1),_0x2da1f4=Math['floor'](_0xc5bd85+_0xc5bd85*0.1),_0x300b74=Math[_0x4922fb(0x515,0x532)](_0x9c182e-_0x9c182e*0.1),_0x25fd3c=Math[_0x4922fb(0x501,0x503)](_0x9c182e+_0x9c182e*0.1),_0x3ab00c=Math['ceil'](_0xc5bd85-_0xc5bd85*0.1),_0x178f4c=Math[_0xaba3f3(0x598,0x5a4)](_0xc5bd85+_0xc5bd85*0.1),_0x32bb2e=Math[_0xaba3f3(0x5bf,0x5b8)](_0x798b68-_0x798b68*0.1),_0xcffa10=Math[_0x4922fb(0x501,0x519)](_0x798b68+_0x798b68*0.1);function _0xaba3f3(_0x1a6394,_0x5cae0c){return _0x30be44(_0x5cae0c-0x31a,_0x1a6394);}let _0x16b75c=Math[_0x4922fb(0x515,0x525)](_0xc5bd85-_0xc5bd85*0.1),_0x210aed=Math[_0x4922fb(0x501,0x4e9)](_0xc5bd85+_0xc5bd85*0.1);function _0x4922fb(_0x2a8bbf,_0x1c5fba){return _0x30be44(_0x2a8bbf-0x277,_0x1c5fba);}let _0xdb2a28=_0x1d781e(_0xd69bae,_0x39092e,_0x55b687),_0x3bcc13=_0x1d781e(_0xd69bae,_0x39092e,_0x33b9c6),_0xfd884f=_0x1d781e(_0xd69bae,_0x39092e,_0x279ed2),_0xcbba5c=_0x1d781e(_0xd69bae,_0x39092e,_0x33a19d),_0x56edfd=0x1f4,_0xdf2577=0x0,_0x10b028=0x0,_0x2f06ac=0x0,_0xf7f624=0x0,_0x139b9c,_0x4478a1;for(let _0x32ff8b=0x0;_0x32ff8b<_0x56edfd;_0x32ff8b++){_0x139b9c=_0x57b296(_0x5588af,_0x4ed2ef)*_0xdb2a28,_0x4478a1=_0x57b296(_0x26037c,_0x2ce95f);if(_0x139b9c>=_0x4478a1)_0xdf2577++;_0x139b9c=_0x57b296(_0x43bd8d,_0x2da1f4)*_0x3bcc13,_0x4478a1=_0x57b296(_0xf86792,_0x19aa8d);if(_0x139b9c>=_0x4478a1)_0x10b028++;_0x139b9c=_0x57b296(_0x3ab00c,_0x178f4c)*_0xfd884f,_0x4478a1=_0x57b296(_0x300b74,_0x25fd3c);if(_0x139b9c>=_0x4478a1)_0x2f06ac++;_0x139b9c=_0x57b296(_0x16b75c,_0x210aed)*_0xcbba5c,_0x4478a1=_0x57b296(_0x32bb2e,_0xcffa10);if(_0x139b9c>=_0x4478a1)_0xf7f624++;}let _0x111a22=(_0xdf2577/_0x56edfd*0x64)[_0xaba3f3(0x5b7,0x593)](0x2),_0x45bea6=(_0x10b028/_0x56edfd*0x64)[_0x4922fb(0x4f0,0x4cd)](0x2),_0x17c198=(_0x2f06ac/_0x56edfd*0x64)['toFixed'](0x2),_0x38a8e9=(_0xf7f624/_0x56edfd*0x64)[_0xaba3f3(0x5a7,0x593)](0x2);return[parseFloat(_0x111a22),parseFloat(_0x45bea6),parseFloat(_0x17c198),parseFloat(_0x38a8e9)];}function _0x540bb7(_0x31819a){let _0x3a7b6f=document['getElementsByClassName'](_0x5173cc(0x198,0x18f))[_0x31819a][_0x24906f(-0x193,-0x1b8)][0x0]['childNodes'][0x0][_0x24906f(-0x199,-0x1b9)];function _0x24906f(_0x439dc5,_0x5037fd){return _0x30be44(_0x5037fd- -0x44f,_0x439dc5);}function _0x5173cc(_0x14da5f,_0x267cab){return _0x30be44(_0x267cab- -0x11f,_0x14da5f);}let _0x411092=document[_0x5173cc(0x141,0x159)](_0x24906f(-0x1b9,-0x1a1))[_0x31819a][_0x5173cc(0x160,0x178)][0x2][_0x24906f(-0x1e2,-0x1bd)][_0x5173cc(0x177,0x155)](_0x5173cc(0x18b,0x167))[0x0][_0x24906f(-0x1ab,-0x1a6)](/[^0-9]/g,'');return{'_0x426755':_0x5896f7(_0x3a7b6f),'_0x3fa5cf':parseFloat(_0x411092)};}function _0xe41422(_0x343d08,_0x22e085){function _0x56ba7e(_0x4db5f4,_0x500ae2){return _0x30be44(_0x500ae2- -0x479,_0x4db5f4);}let _0x307c1b=document[_0x5541f3(0x6b,0x80)](_0x56ba7e(-0x1e5,-0x1c6))[_0x343d08][_0x5541f3(0xa4,0x9f)][0x2]['childNodes'][0x0],_0xfb52f2=_0x5541f3(0xb5,0xa0),_0x4bf945=_0x22e085>0x5a?_0x5541f3(0x5b,0x71):_0x5541f3(0x56,0x6d);_0x307c1b[_0x56ba7e(-0x21a,-0x1fa)]['color']=_0x4bf945,_0x307c1b[_0x5541f3(0xa3,0x9a)]=_0xfb52f2+'['+_0x22e085[_0x56ba7e(-0x1e7,-0x200)](0x2)+'%]';function _0x5541f3(_0x35c2f0,_0xa7f6a){return _0x7931fb(_0x35c2f0,_0xa7f6a- -0x38d);}_0x307c1b[_0x5541f3(0xb0,0x99)]===null&&(_0x307c1b[_0x5541f3(0x9b,0x99)]=function(){function _0x202df6(_0x516cb0,_0x5d8cbb){return _0x5541f3(_0x516cb0,_0x5d8cbb- -0xa9);}function _0x4f841a(_0x4becc5,_0x388adf){return _0x56ba7e(_0x388adf,_0x4becc5-0x28f);}for(let _0x2bcf9e=0x0;_0x2bcf9e<0x4;_0x2bcf9e++){let _0x4b3e03=document[_0x202df6(-0xc,-0x29)](_0x202df6(0xc,0x12))[_0x2bcf9e][_0x4f841a(0xad,0xc1)][0x2][_0x202df6(-0x11,-0xa)][0x0];_0x4b3e03[_0x4f841a(0x95,0x72)][_0x202df6(-0x21,-0x32)]=_0x4f841a(0xa1,0xc7),_0x4b3e03['textContent']=_0xfb52f2;}});}function _0x5896f7(_0x6da027){if(_0x6da027==_0x1aa80f(-0x1f3,-0x1e1))return _0x53a9d1;if(_0x6da027==_0x1aa80f(-0x1a6,-0x1c8))return _0x39fa6b;if(_0x6da027==_0x1aa80f(-0x1db,-0x1bf))return _0x486548;function _0x1aa80f(_0x2b5eb6,_0x158a38){return _0x7931fb(_0x2b5eb6,_0x158a38- -0x5e9);}if(_0x6da027==_0x1aa80f(-0x1f3,-0x1f2))return _0x457426;function _0x12395d(_0x233267,_0x4b5d41){return _0x30be44(_0x4b5d41- -0x35f,_0x233267);}alert(_0x1aa80f(-0x1cd,-0x1e9),_0x6da027);}let _0x51f691=_0xd5403=>_0xd5403[_0x7931fb(0x3dd,0x3f6)]((_0x1f2b13,_0x496d1d)=>_0x1f2b13+_0x496d1d,0x0)/_0xd5403[_0x30be44(0x270,0x277)];function _0x7f2f71(_0x43a01e){if(_0x43a01e=='str')return _0x53a9d1;function _0x57c2d7(_0x3ac001,_0x2b82e1){return _0x30be44(_0x3ac001- -0x17,_0x2b82e1);}if(_0x43a01e=='cha')return _0x39fa6b;function _0x193825(_0x6ce1c7,_0x41cd92){return _0x30be44(_0x6ce1c7- -0x142,_0x41cd92);}if(_0x43a01e==_0x57c2d7(0x263,0x28e))return _0x486548;if(_0x43a01e=='int')return _0x457426;if(_0x43a01e==_0x57c2d7(0x24c,0x22e))return _0x4245c3;}let _0x358fc9=function(){let _0x38679f=_0x5896f7(document[_0x27f653(0x4df,0x4bc)](_0x27f653(0x4be,0x4e9))[0x0][_0x27f653(0x504,0x4db)][0x1][_0x801661(0x509,0x4eb)][0x1][_0x801661(0x4df,0x4eb)][0x0]['className']),_0x2054e8=[{'element':0x0,'_0x3fa5cf':0x0},{'element':0x0,'_0x3fa5cf':0x0},{'element':0x0,'_0x3fa5cf':0x0}],_0x502df1=0x0;function _0x801661(_0x2adbad,_0x32b773){return _0x30be44(_0x32b773-0x254,_0x2adbad);}document[_0x27f653(0x4d4,0x4bc)](_0x801661(0x50e,0x4f9))[0x0]['childNodes'][0x3][_0x801661(0x4dd,0x4eb)][_0x27f653(0x4bd,0x4df)](_0xc2abd3=>{function _0x3c80ec(_0x4506fd,_0x37183c){return _0x27f653(_0x4506fd,_0x37183c-0xec);}function _0x4f27ed(_0x1069f2,_0x4921ff){return _0x801661(_0x1069f2,_0x4921ff- -0x60b);}if(_0xc2abd3[_0x3c80ec(0x588,0x596)]=='DIV'&&_0x502df1<0x3){let _0x39852f=_0xc2abd3[_0x3c80ec(0x5b9,0x5c7)][0x1];_0x2054e8[_0x502df1][_0x3c80ec(0x5a9,0x5b5)]=_0x7f2f71(_0x39852f[_0x3c80ec(0x5a5,0x5c6)]),_0x2054e8[_0x502df1][_0x3c80ec(0x5bb,0x5d8)]=_0x39852f[_0x3c80ec(0x5d5,0x5c2)][_0x4f27ed(-0x102,-0x10e)](/[^0-9]/g,'');}_0x502df1++;});let _0x5308dd=0x0;function _0x27f653(_0x1933cd,_0x24452d){return _0x30be44(_0x24452d-0x244,_0x1933cd);}return{'_0x690254':_0x38679f,'_0x2f6c44':_0x5308dd,'_0x489c5e':parseFloat(_0x2054e8[0x0][_0x27f653(0x4c6,0x4ec)]),'_0x50bb88':_0x2054e8[0x0][_0x27f653(0x4ce,0x4c9)],'_0x48c1a9':parseFloat(_0x2054e8[0x1][_0x27f653(0x4f6,0x4ec)]),'_0x3e5430':_0x2054e8[0x1]['element'],'_0x17bc0c':parseFloat(_0x2054e8[0x2][_0x801661(0x503,0x4fc)]),'_0x260f56':_0x2054e8[0x2][_0x801661(0x4f6,0x4d9)]};},_0x152c5d=function(){setTimeout(()=>{let _0x5a0d4d=document[_0x5c8ef5(0xab,0xc7)]('weapon-icon\x20weapon-icon\x20has-tooltip')[0x0],_0x54bdb2=0x0;function _0x158a00(_0x4c7c95,_0x69b753){return _0x1fce(_0x69b753-0x111,_0x4c7c95);}document[_0x5c8ef5(0xab,0x9a)](_0x5c8ef5(0xc2,0xbc))[0x0]['childNodes'][_0x5c8ef5(0xce,0xc3)](_0x285948=>{function _0x1265fe(_0x2e7e2b,_0x5da600){return _0x158a00(_0x2e7e2b,_0x5da600- -0x103);}function _0x1abeb5(_0x376246,_0x108cd5){return _0x5c8ef5(_0x376246-0x4,_0x108cd5);}_0x285948[_0x1abeb5(0x9d,0xc1)]==_0x1abeb5(0xd8,0xd1)&&_0x285948['textContent'][_0x1265fe(0x1d3,0x1fe)](_0x1abeb5(0xcb,0xa8))&&(_0x54bdb2=parseInt(_0x285948[_0x1abeb5(0xc9,0xa6)][_0x1265fe(0x23b,0x214)](/[^0-9]/g,'')));});function _0x5c8ef5(_0xf342e1,_0x1a479a){return _0x1fce(_0xf342e1- -0x12a,_0x1a479a);}_0x5a0d4d[_0x158a00(0x2eb,0x315)](_0x253c98),_0x5a0d4d['removeEventListener'](_0x158a00(0x2d9,0x2f0),_0x99f21c);if(!_0x54bdb2){aler(_0x5c8ef5(0xd7,0xd1));return;}_0x5026ab(_0x54bdb2);},0x1);},_0x99f21c=function(){_0x152c5d();},_0x5026ab=function(_0x181fec){if(_0x181fec==0x0){let _0x5deda4=![];document[_0x5d81cd(0x27d,0x253)](_0x362aaa(-0x4d,-0x46))[0x0][_0x362aaa(-0x3a,-0x1a)][_0x5d81cd(0x267,0x276)](_0xf348a7=>{_0xf348a7['textContent']&&(_0x5deda4=!![]);});if(_0x5deda4){let _0x4ec5ee=document[_0x362aaa(-0x59,-0x34)](_0x362aaa(-0x2c,-0x4c))[0x0];if(!_0x4ec5ee[_0x5d81cd(0x240,0x259)])_0x4ec5ee['addEventListener']('mouseenter',_0x99f21c);else{}_0x4ec5ee[_0x5d81cd(0x296,0x282)](_0x305304);return;}}let _0x2a9d6f=_0x358fc9(),_0x49f837=document[_0x362aaa(-0x59,-0x4c)](_0x362aaa(-0x2e,-0x11))[0x0][_0x5d81cd(0x267,0x272)][0x1][_0x5d81cd(0x287,0x271)][_0x362aaa(-0x5d,-0x55)]('\x20')[0x0],_0x382bee=parseFloat(document['getElementsByClassName']('subtext-stats')[0x0][_0x5d81cd(0x258,0x272)][0x5][_0x362aaa(-0x51,-0x4b)][_0x5d81cd(0x29a,0x284)](/[^0-9]/g,'')),_0x4f53a6=_0x5896f7(_0x49f837),_0x4b8f3c=_0x2a9d6f[_0x5d81cd(0x292,0x28c)],_0x2c3601=_0x2a9d6f[_0x362aaa(-0x5b,-0x81)],_0x17f6b0=_0x2a9d6f[_0x5d81cd(0x29f,0x287)],_0x4a94d6=_0x2a9d6f['_0x48c1a9'],_0x4e8a81=_0x2a9d6f[_0x362aaa(-0x1f,-0x33)],_0xc45a00=_0x2a9d6f[_0x5d81cd(0x27b,0x288)],_0x5e236d=_0x2a9d6f[_0x362aaa(-0x60,-0x4c)],_0xd21a73=_0x540bb7(0x0),_0x3d24e3=_0xd21a73[_0x362aaa(-0x29,-0x2c)],_0x4ee1bc=_0xd21a73[_0x5d81cd(0x278,0x258)],_0x366b30=_0x540bb7(0x1);function _0x362aaa(_0x45b6c8,_0x3bcc80){return _0x7931fb(_0x3bcc80,_0x45b6c8- -0x466);}let _0x1fcbb4=_0x366b30[_0x362aaa(-0x29,-0x1a)],_0xbf721f=_0x366b30[_0x362aaa(-0x54,-0x44)],_0x555970=_0x540bb7(0x2),_0x3e37fa=_0x555970[_0x5d81cd(0x2a0,0x283)],_0x5b3377=_0x555970['_0x426755'],_0x6186d9=_0x540bb7(0x3),_0x487f00=_0x6186d9['_0x3fa5cf'],_0xe2be6d=_0x6186d9[_0x5d81cd(0x243,0x258)],_0x5a1dae=[],_0x4fa8c7=[],_0x1c614b=[],_0x12a8b0=[];for(let _0x3ab2f6=0x0;_0x3ab2f6<0x32;_0x3ab2f6++){let _0x2b2006=_0x2e30f0(_0x382bee,_0x4f53a6,_0x181fec,_0x4b8f3c,_0x2c3601,_0x17f6b0,_0x4a94d6,_0x4e8a81,_0xc45a00,_0x5e236d,_0x3d24e3,_0x4ee1bc,_0x1fcbb4,_0xbf721f,_0x3e37fa,_0x5b3377,_0x487f00,_0xe2be6d);_0x5a1dae['push'](_0x2b2006[0x0]),_0x4fa8c7[_0x5d81cd(0x244,0x256)](_0x2b2006[0x1]),_0x1c614b[_0x362aaa(-0x56,-0x81)](_0x2b2006[0x2]),_0x12a8b0[_0x362aaa(-0x56,-0x2f)](_0x2b2006[0x3]);}let _0x31b257=[_0x51f691(_0x5a1dae),_0x51f691(_0x4fa8c7),_0x51f691(_0x1c614b),_0x51f691(_0x12a8b0)];for(let _0x5459cf=0x0;_0x5459cf<0x4;_0x5459cf++){_0xe41422(_0x5459cf,_0x31b257[_0x5459cf]);}function _0x5d81cd(_0x104b23,_0xc336ea){return _0x7931fb(_0x104b23,_0xc336ea- -0x1ba);}return _0x31b257;},_0x1d9e10=function(){let _0x22ce0f=_0x11e6eb(0x598,0x5b3);function _0x11e6eb(_0xbfeae2,_0x26fa73){return _0x7931fb(_0x26fa73,_0xbfeae2-0x14e);}function _0x7bd0c7(_0x14c3fc,_0x4c3b12){return _0x7931fb(_0x4c3b12,_0x14c3fc- -0x38a);}navigator[_0x11e6eb(0x564,0x557)]['writeText'](_0x22ce0f)['then'](function(){},function(_0x157b80){}),alert(_0x22ce0f);},_0x582135=function(){let _0xb76260=document[_0x755fa8(0x2fb,0x2d1)](_0x42fc29(0x2b1,0x2bc))[0x0],_0x3eb089=document['createElement'](_0x755fa8(0x304,0x2f5));_0x3eb089['innerHTML']=_0x42fc29(0x28f,0x299),_0x3eb089['className']=_0x42fc29(0x2b6,0x2a9),_0xb76260['appendChild'](_0x3eb089),_0x3eb089[_0x755fa8(0x2ff,0x2e2)](_0x755fa8(0x2ca,0x2cb),()=>_0x5026ab(0x0));let _0x485ade=document[_0x755fa8(0x2d8,0x2f3)](_0x755fa8(0x2ff,0x2f5));_0x485ade[_0x755fa8(0x29d,0x2c7)]='Donation!\x20:)',_0x485ade[_0x42fc29(0x29d,0x279)]=_0x42fc29(0x2b6,0x28f),_0x485ade[_0x755fa8(0x2f9,0x2e2)](_0x755fa8(0x2b8,0x2cb),_0x1d9e10);function _0x42fc29(_0x395601,_0x1366d1){return _0x7931fb(_0x1366d1,_0x395601- -0x18e);}_0xb76260[_0x755fa8(0x314,0x2f2)](_0x485ade);let _0x375975=document[_0x755fa8(0x2cf,0x2f3)](_0x42fc29(0x2a3,0x29a));_0x375975[_0x755fa8(0x2dc,0x2c7)]=_0x755fa8(0x2f8,0x2ce),_0x375975[_0x755fa8(0x2ce,0x2ef)]=_0x755fa8(0x305,0x308),_0x375975[_0x755fa8(0x2e8,0x2e2)](_0x755fa8(0x2d8,0x2cb),()=>window[_0x755fa8(0x2f2,0x2fb)](_0x755fa8(0x2c3,0x2dc),_0x755fa8(0x32b,0x304))[_0x42fc29(0x294,0x296)]());function _0x755fa8(_0x102d45,_0x4f191b){return _0x7931fb(_0x102d45,_0x4f191b- -0x13c);}_0xb76260['appendChild'](_0x375975),window[_0x755fa8(0x2f2,0x2e2)](_0x755fa8(0x2d5,0x2f6),function(_0x50ef2d){function _0x1e1b96(_0x103c62,_0x23e449){return _0x755fa8(_0x103c62,_0x23e449- -0x3be);}function _0x1538ab(_0x907cfc,_0x3ad9cf){return _0x755fa8(_0x907cfc,_0x3ad9cf-0x1ed);}if(_0x50ef2d[_0x1538ab(0x4d7,0x4f6)]==!![]&&_0x50ef2d[_0x1e1b96(-0xd8,-0xd5)]==_0x1e1b96(-0xca,-0xee))_0x5026ab(0x0);});};function _0x30be44(_0x595d74,_0x27132c){return _0x1fce(_0x595d74-0xa3,_0x27132c);}function _0x7931fb(_0x4846fb,_0xba34e1){return _0x1fce(_0xba34e1-0x238,_0x4846fb);}_0x582135();},0x7d0));

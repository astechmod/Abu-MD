const Jsl_0x79fe65=Jsl_0x17c6;function Jsl_0xc315(){const _0x4ec972=['7203749JzGpfx','../lib/','53532jbQeXZ','audio','4327578TOhtSt','output.mp4','save','reply_message','duration','imgbb-uploader','_Audio\x20too\x20large.\x20Try\x20below\x2090\x20seconds!_','-filter_complex','328423LTNbNd','end','downloadMediaMessage','Uploads\x20image\x20to\x20imgur.com','3856998TMhgIg','image','outputOptions','_Failed\x20to\x20upload\x20file!_','abu-bot','jid','248BMPAva','url','5nDbnmZ','sendMessage','2KfzMRm','../config','link','client','[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]','31587910qyPTQM','io\x20?(.*)','sticker','_Reply\x20to\x20image|video|audio|sticker_','9267600Glvhbi','11wAXnPn'];Jsl_0xc315=function(){return _0x4ec972;};return Jsl_0xc315();}(function(_0x77e1a5,_0x53953d){const _0x35bf62=Jsl_0x17c6,_0x5d4d57=_0x77e1a5();while(!![]){try{const _0x32f810=-parseInt(_0x35bf62(0x148))/0x1*(parseInt(_0x35bf62(0x156))/0x2)+-parseInt(_0x35bf62(0x163))/0x3*(-parseInt(_0x35bf62(0x152))/0x4)+-parseInt(_0x35bf62(0x154))/0x5*(parseInt(_0x35bf62(0x14c))/0x6)+-parseInt(_0x35bf62(0x161))/0x7+-parseInt(_0x35bf62(0x15f))/0x8+-parseInt(_0x35bf62(0x165))/0x9+-parseInt(_0x35bf62(0x15b))/0xa*(-parseInt(_0x35bf62(0x160))/0xb);if(_0x32f810===_0x53953d)break;else _0x5d4d57['push'](_0x5d4d57['shift']());}catch(_0x322908){_0x5d4d57['push'](_0x5d4d57['shift']());}}}(Jsl_0xc315,0x98b38));const {IMGBB_KEY}=require(Jsl_0x79fe65(0x157));async function webpUpload(_0x2f3525){return new Promise(async _0x555ff5=>{const _0xabc778=Jsl_0x17c6,_0x90de9=require(_0xabc778(0x16a));for(let _0x3cef65 of IMGBB_KEY){const _0x38eea7={'apiKey':_0x3cef65,'imagePath':_0x2f3525};var _0x3c85ea=await _0x90de9(_0x38eea7);if(_0x3c85ea['url'])return _0x555ff5(_0x3c85ea[_0xabc778(0x153)]);}});}const {Module,isPublic}=require(Jsl_0x79fe65(0x162)),ffmpeg=require('fluent-ffmpeg'),{upload}=require(Jsl_0x79fe65(0x150));function Jsl_0x17c6(_0x2d9eab,_0x58b95f){const _0xc31525=Jsl_0xc315();return Jsl_0x17c6=function(_0x17c633,_0x35b4f2){_0x17c633=_0x17c633-0x146;let _0x1a0b53=_0xc31525[_0x17c633];return _0x1a0b53;},Jsl_0x17c6(_0x2d9eab,_0x58b95f);}Module({'pattern':Jsl_0x79fe65(0x15c),'fromMe':isPublic,'type':'misc','desc':Jsl_0x79fe65(0x14b)},async _0x232fc7=>{const _0x2e4216=Jsl_0x79fe65;if(_0x232fc7[_0x2e4216(0x168)][_0x2e4216(0x15d)])return await _0x232fc7['client'][_0x2e4216(0x155)](_0x232fc7[_0x2e4216(0x151)],{'text':'_'+await webpUpload(await _0x232fc7[_0x2e4216(0x168)]['downloadMediaMessage']())+'_'},{'quoted':_0x232fc7});else{if(_0x232fc7[_0x2e4216(0x168)][_0x2e4216(0x164)]){if(_0x232fc7['reply_message'][_0x2e4216(0x169)]>0x5a)return await _0x232fc7[_0x2e4216(0x159)]['sendMessage'](_0x232fc7[_0x2e4216(0x151)],{'text':_0x2e4216(0x146)},{'quoted':_0x232fc7});var _0x5efc8e=await _0x232fc7[_0x2e4216(0x168)][_0x2e4216(0x14a)]();ffmpeg(_0x5efc8e)[_0x2e4216(0x14e)](['-y',_0x2e4216(0x147),_0x2e4216(0x15a),'-map','[vid]','-map\x200:a'])[_0x2e4216(0x167)](_0x2e4216(0x166))['on'](_0x2e4216(0x149),async()=>{const _0x38a30b=_0x2e4216;try{var _0x246868=await upload('output.mp4');}catch{return await _0x232fc7[_0x38a30b(0x159)][_0x38a30b(0x155)](_0x232fc7[_0x38a30b(0x151)],{'text':'_Failed\x20to\x20upload\x20file!_'},{'quoted':_0x232fc7});}return await _0x232fc7['client'][_0x38a30b(0x155)](_0x232fc7[_0x38a30b(0x151)],{'text':'_'+_0x246868['link']+'_'},{'quoted':_0x232fc7});});}else{if(_0x232fc7[_0x2e4216(0x168)][_0x2e4216(0x14d)]||_0x232fc7[_0x2e4216(0x168)]['video'])try{await _0x232fc7[_0x2e4216(0x159)][_0x2e4216(0x155)](_0x232fc7[_0x2e4216(0x151)],{'text':'_'+(await upload(await _0x232fc7['reply_message'][_0x2e4216(0x14a)]()))[_0x2e4216(0x158)]+'_'},{'quoted':_0x232fc7});}catch{return await _0x232fc7[_0x2e4216(0x159)][_0x2e4216(0x155)](_0x232fc7[_0x2e4216(0x151)],{'text':_0x2e4216(0x14f)},{'quoted':_0x232fc7});}else return await _0x232fc7['reply'](_0x2e4216(0x15e));}}});

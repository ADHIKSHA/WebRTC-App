var _0x1e31=['localDescription','Your\x20Room\x20Id\x20is:---','mediaDevices','true','value','1:110306645620:web:6dae39c7ea8b530d02a321','onicecandidate','block','display','in\x20the\x20val','candidate','stun:stun.services.mozilla.com','adhikshat1905@gmail.com','sdp','floor','joinroom','setRemoteDescription','onaddstream','stun:stun.l.google.com:19302','then','answer','log','srcObject','stream','friendsVideo','createroom','initializeApp','videochat-96f4e.firebaseapp.com','disabled','style','ref','stringify','createOffer','videochat-96f4e.appspot.com','push','https://videochat-96f4e.firebaseio.com','Please\x20enter\x20your\x20room\x20ID\x20here:-','yourVideo','110306645620','random','Adhiksha@123','remove','none','Please\x20add\x20room\x20id\x20from\x20your\x20friend\x27s\x20room\x20or\x20Go\x20ahead\x20and\x20create\x20a\x20room\x20if\x20you\x20dont\x20have\x20an\x20id!','roomId','database','parse','addIceCandidate','getUserMedia','val','Sent\x20All\x20Ice','ice','type','getElementById','createAnswer'];(function(_0x46a4ef,_0x1e3154){var _0x14b6e1=function(_0x5bc95c){while(--_0x5bc95c){_0x46a4ef['push'](_0x46a4ef['shift']());}};_0x14b6e1(++_0x1e3154);}(_0x1e31,0x18d));var _0x14b6=function(_0x46a4ef,_0x1e3154){_0x46a4ef=_0x46a4ef-0x0;var _0x14b6e1=_0x1e31[_0x46a4ef];return _0x14b6e1;};var firebaseConfig={'apiKey':'AIzaSyBrJciZ3GS_tf9fpXZHXShQG6vGsM3FFDg','authDomain':_0x14b6('0xf'),'databaseURL':_0x14b6('0x17'),'projectId':'videochat-96f4e','storageBucket':_0x14b6('0x15'),'messagingSenderId':_0x14b6('0x1a'),'appId':_0x14b6('0x30'),'measurementId':'G-4WHSVHFN7E'};firebase[_0x14b6('0xe')](firebaseConfig);var database=firebase[_0x14b6('0x21')]()[_0x14b6('0x12')]();var roomid=document[_0x14b6('0x29')](_0x14b6('0x20'));var yourVideo=document['getElementById'](_0x14b6('0x19'));var friendsVideo=document['getElementById'](_0x14b6('0xc'));var desc=document[_0x14b6('0x29')]('roomdes');desc['style'][_0x14b6('0x33')]=_0x14b6('0x1e');roomid[_0x14b6('0x11')][_0x14b6('0x33')]=_0x14b6('0x1e');var child=0x0;var yourId=Math[_0x14b6('0x2')](Math[_0x14b6('0x1b')]()*0x3b9aca00);console[_0x14b6('0x9')](yourId);var servers={'iceServers':[{'urls':_0x14b6('0x36')},{'urls':_0x14b6('0x6')},{'urls':'turn:numb.viagenie.ca','credential':_0x14b6('0x1c'),'username':_0x14b6('0x0')}]};var pc=new RTCPeerConnection(servers);pc[_0x14b6('0x31')]=_0x192a4d=>_0x192a4d[_0x14b6('0x35')]?sendMessage(yourId,JSON[_0x14b6('0x13')]({'ice':_0x192a4d[_0x14b6('0x35')]})):console[_0x14b6('0x9')](_0x14b6('0x26'));pc[_0x14b6('0x5')]=_0x5edef8=>friendsVideo[_0x14b6('0xa')]=_0x5edef8[_0x14b6('0xb')];function sendMessage(_0x1b0618,_0x367e01){var _0x42170b=database[_0x14b6('0x16')]({'sender':_0x1b0618,'message':_0x367e01});console[_0x14b6('0x9')](_0x42170b);_0x42170b[_0x14b6('0x1d')]();}function readMessage(_0x41be99){console[_0x14b6('0x9')](_0x14b6('0x34'));console[_0x14b6('0x9')](roomid);var _0xabc321=JSON[_0x14b6('0x22')](_0x41be99[_0x14b6('0x25')]()['message']);var _0x4f3b45=_0x41be99[_0x14b6('0x25')]()['sender'];console['log'](_0x4f3b45);if(_0x4f3b45!=yourId){if(_0xabc321[_0x14b6('0x27')]!=undefined)pc[_0x14b6('0x23')](new RTCIceCandidate(_0xabc321[_0x14b6('0x27')]));else if(_0xabc321[_0x14b6('0x1')][_0x14b6('0x28')]=='offer')pc[_0x14b6('0x4')](new RTCSessionDescription(_0xabc321['sdp']))[_0x14b6('0x7')](()=>pc[_0x14b6('0x2a')]())[_0x14b6('0x7')](_0x285292=>pc['setLocalDescription'](_0x285292))[_0x14b6('0x7')](()=>sendMessage(yourId,JSON[_0x14b6('0x13')]({'sdp':pc[_0x14b6('0x2b')]})));else if(_0xabc321[_0x14b6('0x1')]['type']==_0x14b6('0x8')&&_0x4f3b45==roomid)pc['setRemoteDescription'](new RTCSessionDescription(_0xabc321[_0x14b6('0x1')]));}document[_0x14b6('0x29')](_0x14b6('0x20'))[_0x14b6('0x2f')]=_0x4f3b45;};database['on']('child_added',readMessage);function showMyFace(){navigator[_0x14b6('0x2d')][_0x14b6('0x24')]({'audio':!![],'video':!![]})[_0x14b6('0x7')](_0x31137e=>yourVideo[_0x14b6('0xa')]=_0x31137e)[_0x14b6('0x7')](_0x31bd83=>pc['addStream'](_0x31bd83));}function showFriendsFace(){child=child+0x1;roomid=document[_0x14b6('0x29')](_0x14b6('0x20'))[_0x14b6('0x2f')];if(roomid==null){alert(_0x14b6('0x1f'));}document['getElementById'](_0x14b6('0xd'))[_0x14b6('0x10')]=_0x14b6('0x2e');pc[_0x14b6('0x14')]()[_0x14b6('0x7')](_0x2ccc3c=>pc['setLocalDescription'](_0x2ccc3c))[_0x14b6('0x7')](()=>sendMessage(yourId,JSON[_0x14b6('0x13')]({'sdp':pc[_0x14b6('0x2b')]})));}function createRoom(){roomid['style']['display']=_0x14b6('0x32');document['getElementById'](_0x14b6('0x20'))['value']=yourId;desc['style'][_0x14b6('0x33')]='block';alert(_0x14b6('0x2c')+yourId);document['getElementById']('roomId')[_0x14b6('0x10')]=_0x14b6('0x2e');document[_0x14b6('0x29')](_0x14b6('0x3'))[_0x14b6('0x10')]=_0x14b6('0x2e');}function JoinRoom(){console[_0x14b6('0x9')](roomid[_0x14b6('0x2f')]);if(roomid['value']==''){var _0x2eff1a=prompt(_0x14b6('0x18'),'');if(_0x2eff1a!=null){document[_0x14b6('0x29')](_0x14b6('0x20'))[_0x14b6('0x2f')]=_0x2eff1a;}else{alert(_0x14b6('0x1f'));}}roomid[_0x14b6('0x11')]['display']='block';showFriendsFace();}
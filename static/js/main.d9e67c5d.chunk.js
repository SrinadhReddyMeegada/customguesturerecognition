(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{247:function(e,t,n){e.exports=n.p+"static/media/victory.854a2217.svg"},248:function(e,t,n){e.exports=n.p+"static/media/thumbs_up.03ee9e5f.svg"},249:function(e,t,n){e.exports=n.p+"static/media/something.7318c9ff.svg"},250:function(e,t,n){e.exports=n.p+"static/media/hello.7bde1594.svg"},272:function(e,t,n){e.exports=n(299)},277:function(e,t,n){},283:function(e,t){},284:function(e,t){},292:function(e,t){},295:function(e,t){},296:function(e,t){},297:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(42),i=n.n(r),o=n(226),a=n.n(o),l=(n(277),n(5)),c=n.n(l),s=n(13),u=n(8),d=(n(298),n(245)),g=n(246),h=n.n(g),f=(n(297),{thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]}),m={0:{color:"yellow",size:15},1:{color:"gold",size:6},2:{color:"green",size:10},3:{color:"gold",size:6},4:{color:"gold",size:6},5:{color:"purple",size:10},6:{color:"gold",size:6},7:{color:"gold",size:6},8:{color:"gold",size:6},9:{color:"blue",size:10},10:{color:"gold",size:6},11:{color:"gold",size:6},12:{color:"gold",size:6},13:{color:"red",size:10},14:{color:"gold",size:6},15:{color:"gold",size:6},16:{color:"gold",size:6},17:{color:"orange",size:10},18:{color:"gold",size:6},19:{color:"gold",size:6},20:{color:"gold",size:6}},p=function(e,t){e.length>0&&e.forEach((function(e){for(var n=e.landmarks,r=0;r<Object.keys(f).length;r++)for(var i=Object.keys(f)[r],o=0;o<f[i].length-1;o++){var a=f[i][o],l=f[i][o+1];t.beginPath(),t.moveTo(n[a][0],n[a][1]),t.lineTo(n[l][0],n[l][1]),t.strokeStyle="plum",t.lineWidth=4,t.stroke()}for(var c=0;c<n.length;c++){var s=n[c][0],u=n[c][1];t.beginPath(),t.arc(s,u,m[c].size,0,3*Math.PI),t.fillStyle=m[c].color,t.fill()}}))},v=n(36),b=new v.GestureDescription("i_love_you");b.addCurl(v.Finger.Thumb,v.FingerCurl.NoCurl,1),b.addDirection(v.Finger.Thumb,v.FingerDirection.HorizontalLeft,.25),b.addDirection(v.Finger.Thumb,v.FingerDirection.HorizontalRight,.25),b.addCurl(v.Finger.Index,v.FingerCurl.NoCurl,1),b.addDirection(v.Finger.Index,v.FingerDirection.VerticalUp,.25),b.addCurl(v.Finger.Pinky,v.FingerCurl.NoCurl,1),b.addDirection(v.Finger.Pinky,v.FingerDirection.VerticalUp,.25);for(var F=0,y=[v.Finger.Middle,v.Finger.Ring];F<y.length;F++){var x=y[F];b.addCurl(x,v.FingerCurl.FullCurl,.75),b.addDirection(x,v.FingerDirection.VerticalDown,.25)}var z=new v.GestureDescription("hello");z.addCurl(v.Finger.Thumb,v.FingerCurl.NoCurl,.25),z.addDirection(v.Finger.Thumb,v.FingerDirection.HorizontalLeft,.25),z.addDirection(v.Finger.Thumb,v.FingerDirection.HorizontalRight,.25),z.addCurl(v.Finger.Index,v.FingerCurl.NoCurl,1),z.addDirection(v.Finger.Index,v.FingerDirection.VerticalUp,.25),z.addCurl(v.Finger.Pinky,v.FingerCurl.NoCurl,1),z.addDirection(v.Finger.Pinky,v.FingerDirection.VerticalUp,.25);for(var C=0,w=[v.Finger.Middle,v.Finger.Ring];C<w.length;C++){var D=w[C];z.addCurl(D,v.FingerCurl.NoCurl,1),z.addDirection(D,v.FingerDirection.VerticalUp,.25)}var k=n(247),E=n.n(k),j=n(248),O=n.n(j),N=n(249),T=n.n(N),I=n(250),R=n.n(I);var _=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useState)("Loading"),o=Object(u.a)(n,2),a=o[0],l=o[1],g=Object(r.useState)(!0),f=Object(u.a)(g,2),m=f[0],F=f[1],y=Object(r.useState)(null),x=Object(u.a)(y,2),C=x[0],w=x[1],D={thumbs_up:O.a,victory:E.a,i_love_you:T.a,hello:R.a},k={thumbs_up:"Thumbs Up",victory:"Victory",i_love_you:"I Love You",hello:"Hello"},j=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a();case 2:t=e.sent,console.log("Handpose model loaded."),setInterval((function(){N(t)}),10);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var n=Object(s.a)(c.a.mark((function n(r){var i,o,a,s,u,d,g,h,f;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){n.next=22;break}return i=e.current.video,o=e.current.video.videoWidth,a=e.current.video.videoHeight,e.current.video.width=o,e.current.video.height=a,t.current.width=o,t.current.height=a,n.next=10,r.estimateHands(i);case 10:if(s=n.sent,F(!1),l(""),w(""),!(s.length>0)){n.next=20;break}return u=new v.GestureEstimator([v.Gestures.VictoryGesture,v.Gestures.ThumbsUpGesture,b,z]),n.next=18,u.estimate(s[0].landmarks,4);case 18:void 0!==(d=n.sent).gestures&&d.gestures.length>0&&(console.log(d.gestures),l(k[d.gestures[0].name]),g=d.gestures.map((function(e){return e.confidence})),h=g.indexOf(Math.max.apply(null,g)),w(d.gestures[h].name),console.log(C));case 20:f=t.current.getContext("2d"),p(s,f);case 22:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){j()}),[]),i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(h.a,{ref:e,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),i.a.createElement("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),m&&i.a.createElement("div",{style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480,background:"rgba(0,0,0,0.5)"}},i.a.createElement("div",{className:"lds-ring"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)))),i.a.createElement("div",{style:{position:"fixed",width:"20%",height:"100%",background:"white",left:0,top:0,display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("div",null,i.a.createElement("div",{style:{fontSize:"20px",fontWeight:"600"}},a),i.a.createElement("img",{src:D[C],style:{width:"50%",display:"block",margin:"20px auto"}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[272,1,2]]]);
//# sourceMappingURL=main.d9e67c5d.chunk.js.map
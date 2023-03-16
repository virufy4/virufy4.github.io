(this["webpackJsonpmtd-app"]=this["webpackJsonpmtd-app"]||[]).push([[23,40,52],{203:function(n,t,e){"use strict";var r=e(9),a=e.n(r),o=e(217);t.a=function(){var n=a.a.useContext(o.a),t=n.title,e=n.setTitle,r=n.subtitle,i=n.setSubtitle,u=n.type,c=n.setType,l=n.logoSize,s=n.setLogoSize,f=n.setDoGoBack;return{title:t,setTitle:e,subtitle:r,setSubtitle:i,type:u,setType:c,logoSize:l,setLogoSize:s,doGoBack:n.doGoBack,setDoGoBack:f}}},204:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},207:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return i}));var r=e(201),a=e(211);function o(n){return function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},n,Object(a.a)(Object(a.a)({},t[n]),e)))}}function i(){return function(n){return{welcome:{language:n.welcome.language}}}}},208:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(9),a=e.n(r),o=e(209),i=e(199);function u(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return n},n}var c=e(198).default.div(u(),(function(n){return"calc(100% - ".concat(2*n.theme.layout.generalPaddingAmount,"px)")}),(function(n){return n.theme.breakpoints.tablet})),l=a.a.memo((function(n){var t=n.invert,e=void 0!==t&&t,r=n.leftLabel,i=n.leftDisabled,u=n.leftHandler,l=n.rightLabel,s=n.rightDisabled,f=n.rightHandler;return a.a.createElement(c,null,a.a.createElement(o.a,{dark:e,disabled:i,onClick:u},r),l&&f&&a.a.createElement(o.a,{dark:!e,disabled:s,onClick:f},l))})),s=a.a.memo(l)},209:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e(214),a=e(9),o=e.n(a),i=e(199),u=e(198),c=e(206);function l(){var n=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return n},n}var s=u.default.button(l(),(function(n){var t=n.dark,e=n.disabled?c.a.purple_50:c.a.purple;return t?"\n    background-color: ".concat(e,";\n    color: ").concat(c.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(c.a.white,";\n    color: ").concat(e,";\n    border: 1px solid ").concat(e,";\n  ")})),f=o.a.memo((function(n){var t=n.children,e=Object(r.a)(n,["children"]);return o.a.createElement(s,Object.assign({type:"button"},e),t)}))},253:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e(245);function a(n,t){return new Promise((function(e){n.duration===1/0||r.isSafari&&!(r.isSafari&&n.duration>0)?(n.addEventListener("durationchange",(function(){t?n.remove():(n.pause(),n.volume=1,n.currentTime=0),e(n.duration)})),n.currentTime=86400,n.play()):e(n.duration)}))}},268:function(n,t,e){"use strict";e.r(t),e.d(t,"MainContainer",(function(){return E})),e.d(t,"PlayerContainer",(function(){return T})),e.d(t,"PlayerContainerTop",(function(){return k})),e.d(t,"PlayerPlayContainer",(function(){return S})),e.d(t,"PlayerCrossContainer",(function(){return w})),e.d(t,"PlayerContainerBottom",(function(){return C})),e.d(t,"PlayerTopMiddle",(function(){return L})),e.d(t,"PlayerBottomTop",(function(){return M})),e.d(t,"PlayerBottomTrack",(function(){return z})),e.d(t,"PlayerBottomThumb",(function(){return G})),e.d(t,"PlayerBottomBottom",(function(){return A})),e.d(t,"Subtitle",(function(){return D})),e.d(t,"TitleAudioName",(function(){return F})),e.d(t,"PlayerTimeIndicator",(function(){return H})),e.d(t,"PlayerPlayButton",(function(){return I})),e.d(t,"PlayerPlay",(function(){return N})),e.d(t,"PlayerCross",(function(){return R})),e.d(t,"BeforeSubmitText",(function(){return U})),e.d(t,"TempBeforeSubmitError",(function(){return Y}));var r=e(199),a=e(198),o=e(206);function i(){var n=Object(r.a)(["\ncolor: ",";\n  text-align: center;\n  margin-bottom: 16px;\n"]);return i=function(){return n},n}function u(){var n=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 14px;\n  line-height: 20px;\n  color: ",";\n  margin: 0;\n"]);return u=function(){return n},n}function c(){var n=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n  width: 33px;\n  height: 40px;\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  width: 108px;\n  height: 108px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n"]);return s=function(){return n},n}function f(){var n=Object(r.a)(["\n  opacity: 0.5;\n  margin-top: 8px;\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  color: ",";\n  font-weight: 400;\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  color: ",';\n  font-size: 14px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n']);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  color: ",';\n  font-size: 18px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n  white-space: pre-wrap;\n  width: 100%;\n  margin-left: 20px;\n  margin-bottom: 60px;\n  \n  @media screen and (',") {\n    max-width: 592px;\n    margin-right: auto; \n    margin-left: auto; \n  }\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return p=function(){return n},n}function b(){var n=Object(r.a)(["\n  position: absolute;\n  top: -6px;\n  left: ",";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return b=function(){return n},n}function g(){var n=Object(r.a)(["\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: ",";\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: 0;\n    height: 4px;\n    background-color: ",";\n    width: ",";\n    ","\n\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return v=function(){return n},n}function h(){var n=Object(r.a)(["\n  flex: 1;\n"]);return h=function(){return n},n}function x(){var n=Object(r.a)([""]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n  cursor: pointer;\n"]);return y=function(){return n},n}function j(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 76px;\n"]);return j=function(){return n},n}function P(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return P=function(){return n},n}function O(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 60px 20px 0px 20px;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return O=function(){return n},n}function B(){var n=Object(r.a)(["\n  margin-bottom: 77px;\n\n  @media screen and (",") {\n    max-width: 470px;\n    margin: auto;\n  }\n"]);return B=function(){return n},n}var E=a.default.div(B(),(function(n){return n.theme.breakpoints.tablet})),T=a.default.div(O(),(function(n){return n.theme.breakpoints.tablet})),k=a.default.div(P()),S=a.default.div(j()),w=a.default.div(y()),C=a.default.div(x()),L=a.default.div(h()),M=a.default.div(v()),z=a.default.div(g(),o.a.purple_10,o.a.purple,(function(n){return n.progress?"".concat(n.progress,"%"):"0%"}),(function(n){return n.playing?"transition: width 0.2s linear;":""})),G=a.default.div(b(),(function(n){return n.progress?"".concat(n.progress,"%"):"0px"}),o.a.purple,(function(n){return n.playing?"transition: left 0.2s linear;":""})),A=a.default.div(p()),D=a.default.h2(m(),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.breakpoints.tablet})),F=a.default.p(d(),(function(n){return n.theme.colors.mineShaft})),H=a.default.p(f(),o.a.mineShaft),I=a.default.div(s(),o.a.purple_10),N=a.default.img(l()),R=a.default.img(c()),U=a.default.p(u(),(function(n){return n.theme.colors.darkGray_70})),Y=Object(a.default)(U)(i(),(function(n){return n.theme.colors.red}))},281:function(n,t,e){"use strict";t.a={sizeAsHuman:function(n,t){var e=t?1e3:1024;if(Math.abs(n)<e)return"".concat(n," B");var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1;do{n/=e,++a}while(Math.abs(n)>=e&&a<r.length-1);return"".concat(n.toFixed(1)," ").concat(r[a])},blobToFile:function(n,t){var e=n;return e.lastModifiedDate=new Date,e.name=t,n}}},282:function(n,t,e){"use strict";e.r(t);var r=e(201),a=e(212),o=e.n(a),i=e(213),u=e(200),c=e(9),l=e.n(c),s=e(219),f=e(210),d=e.n(f),m=e(817),p=e(205),b=e(203),g=e(208),v=e(207),h=e(204),x=e(281),y=e(253),j=e(366),P=e.n(j),O=e(367),B=e.n(O),E=e(368),T=e.n(E),k=e(268);t.default=l.a.memo((function(n){var t,e,a=n.storeKey,f=n.previousStep,j=n.nextStep,O=n.metadata,E=l.a.useMemo((function(){return!!O&&"recordYourCough"===O.currentLogic}),[O]),S=l.a.useMemo((function(){return!!O&&"recordYourBreath"===O.currentLogic}),[O]),w=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,C=Object(b.a)(),L=C.setDoGoBack,M=C.setTitle,z=C.setSubtitle,G=Object(s.g)(),A=Object(s.h)(),D=Object(p.d)(Object(v.b)(a)),F=D.state,H=D.action,I=Object(m.a)().t,N=(null===A||void 0===A||null===(t=A.state)||void 0===t?void 0:t.isShortAudioCollection)||!1,R=null===F||void 0===F||null===(e=F[a])||void 0===e?void 0:e[null===O||void 0===O?void 0:O.currentLogic],U=R?R.recordingFile||R.uploadedFile:null,Y=l.a.useRef(null),_=l.a.useRef(),J=l.a.useRef(0),K=l.a.useState(!0),Z=Object(u.a)(K,2),X=Z[0],q=Z[1],Q=l.a.useState(!1),V=Object(u.a)(Q,2),W=V[0],$=V[1],nn=l.a.useState(0),tn=Object(u.a)(nn,2),en=tn[0],rn=tn[1],an=l.a.useState(0),on=Object(u.a)(an,2),un=on[0],cn=on[1];l.a.useEffect((function(){var n=function(){!function n(t){cn(t/1e3),J.current=t,_.current=setTimeout((function(){n(t+200)}),200)}(J.current),setTimeout((function(){$(!0)}),0)},t=function(n){n.target.currentTime>=n.target.duration&&(cn(0),J.current=0),$(!1),clearTimeout(_.current)},e=function(){var n=Object(i.a)(o.a.mark((function n(t){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(y.a)(t.target);case 2:e=n.sent,rn(e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Y.current&&(Y.current.addEventListener("playing",n),Y.current.addEventListener("pause",t),Y.current.addEventListener("loadedmetadata",e)),function(){Y.current&&(Y.current.removeEventListener("playing",n),Y.current.removeEventListener("pause",t),Y.current.removeEventListener("loadedmetadata",e))}}),[]);var ln=l.a.useMemo((function(){var n={fileUrl:"",fileName:"",fileSize:""};if(U&&void 0!==U.size)try{var t=URL.createObjectURL(U);n.fileUrl=t,n.fileName=U.name,n.fileSize=x.a.sizeAsHuman(U.size,!0)}catch(e){console.log("Error",e)}return n}),[U]),sn=ln.fileUrl,fn=ln.fileName,dn=l.a.useCallback((function(){j&&(q(!1),G.push(j))}),[G,j]),mn=l.a.useCallback((function(){W&&Y.current&&Y.current.pause(),q(!1),A.state&&A.state.from?E?G.push("/submit-steps/step-record/cough",{isShortAudioCollection:N}):S?G.push("/submit-steps/step-record/breath"):G.push("/submit-steps/step-record/speech"):f?G.push(f):G.goBack()}),[A.state,f,G,E,S,N,W]),pn=l.a.useCallback((function(){W&&Y.current&&Y.current.pause(),(null===F||void 0===F?void 0:F[a][null===O||void 0===O?void 0:O.currentLogic])&&(H(Object(r.a)({},null===O||void 0===O?void 0:O.currentLogic,{recordingFile:null,uploadFile:null})),mn())}),[W,F,a,O,H,mn]),bn=l.a.useCallback((function(){W||Y.current&&Y.current.play()}),[W]),gn=l.a.useCallback((function(){W&&Y.current&&Y.current.pause()}),[W]);Object(c.useEffect)((function(){Object(h.a)(),z(I("recordingsListen:title")),M(I(E?"recordingsListen:recordCough.header":S?"recordingsListen:recordBreath.header":"recordingsListen:recordSpeech.header")),L((function(){return mn}))}),[mn,E,S,L,M,z,I]);var vn=l.a.useMemo((function(){var n={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(en){var t=Math.floor(Math.floor(un)/60),e=Math.floor(un)-60*t;n.currentTime="".concat(t,":").concat(e<10?"0".concat(e):e);var r=en>un?Math.ceil(en-un):0,a=Math.floor(r/60),o=r-60*a;n.remainingTime="-".concat(a,":").concat(o<10?"0".concat(o):o),n.trackProgress=Math.ceil(un/en*100)}return n}),[en,un]),hn=vn.currentTime,xn=vn.remainingTime,yn=vn.trackProgress;return l.a.createElement(l.a.Fragment,null,sn&&l.a.createElement("audio",{ref:Y},l.a.createElement("source",{src:sn})),l.a.createElement(k.MainContainer,null,l.a.createElement(k.Subtitle,null,I("recordingsListen:subtitle")),l.a.createElement(k.PlayerContainer,null,l.a.createElement(k.PlayerContainerTop,null,l.a.createElement(k.PlayerTopMiddle,null,l.a.createElement(k.TitleAudioName,null,fn)),l.a.createElement(k.PlayerCrossContainer,{onClick:pn},l.a.createElement(k.PlayerCross,{src:T.a}))),l.a.createElement(k.PlayerContainerBottom,null,l.a.createElement(k.PlayerBottomTop,null,l.a.createElement(k.PlayerBottomTrack,{playing:W,progress:yn}),l.a.createElement(k.PlayerBottomThumb,{playing:W,progress:yn})),l.a.createElement(k.PlayerBottomBottom,null,l.a.createElement(k.PlayerTimeIndicator,null,hn),l.a.createElement(k.PlayerTimeIndicator,null,xn)))),l.a.createElement(k.PlayerPlayContainer,{onClick:W?gn:bn},l.a.createElement(k.PlayerPlayButton,null,l.a.createElement(k.PlayerPlay,{src:W?B.a:P.a})))),X&&l.a.createElement(w,null,l.a.createElement(g.a,{invert:!0,leftLabel:I("recordingsListen:next"),leftHandler:dn})))}))},310:function(n,t,e){"use strict";e.r(t);var r=e(282);e.d(t,"default",(function(){return r.default}))},366:function(n,t,e){n.exports=e.p+"static/media/play.6f092911.svg"},367:function(n,t,e){n.exports=e.p+"static/media/pause.d55011c8.svg"},368:function(n,t,e){n.exports=e.p+"static/media/cross.13e841fb.svg"}}]);
//# sourceMappingURL=23.359ab53d.chunk.js.map
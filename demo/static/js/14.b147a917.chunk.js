(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[14,26,32],{162:function(n,t,e){"use strict";var r=e(6),i=e.n(r),a=e(180);t.a=function(){var n=i.a.useContext(a.a),t=n.title,e=n.setTitle,r=n.subtitle,o=n.setSubtitle,c=n.type,u=n.setType,l=n.logoSize,s=n.setLogoSize,d=n.setDoGoBack;return{title:t,setTitle:e,subtitle:r,setSubtitle:o,type:c,setType:u,logoSize:l,setLogoSize:s,doGoBack:n.doGoBack,setDoGoBack:d}}},163:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},167:function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var r=e(160),i=e(37),a=e(175),o=e(6),c=e.n(o),u=e(158),l=e(157),s=e(161);function d(){var n=Object(u.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return d=function(){return n},n}var f=l.default.button(d(),(function(n){var t=n.dark,e=n.disabled?s.a.purple_50:s.a.purple;return t?"\n    background-color: ".concat(e,";\n    color: ").concat(s.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(s.a.white,";\n    color: ").concat(e,";\n    border: 1px solid ").concat(e,";\n  ")})),b=c.a.memo((function(n){var t=n.children,e=Object(a.a)(n,["children"]);return Object(i.jsx)(f,Object(r.a)(Object(r.a)({type:"button"},e),{},{children:t}))}))},169:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var r=e(37),i=e(6),a=e.n(i),o=e(167),c=e(158);function u(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return n},n}var l=e(157).default.div(u(),(function(n){return"calc(100% - ".concat(2*n.theme.layout.generalPaddingAmount,"px)")}),(function(n){return n.theme.breakpoints.tablet})),s=a.a.memo((function(n){var t=n.invert,e=void 0!==t&&t,i=n.leftLabel,a=n.leftDisabled,c=n.leftHandler,u=n.rightLabel,s=n.rightDisabled,d=n.rightHandler;return Object(r.jsxs)(l,{children:[Object(r.jsx)(o.a,{dark:e,disabled:a,onClick:c,children:i}),u&&d&&Object(r.jsx)(o.a,{dark:!e,disabled:s,onClick:d,children:u})]})})),d=a.a.memo(s)},171:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e(166),i=e(160);function a(n){return function(t,e){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},n,Object(i.a)(Object(i.a)({},t[n]),e)))}}},172:function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"a",(function(){return d}));var r=e(158),i=e(157),a=e(161);function o(){var n=Object(r.a)(["\n  font-family: 'Open Sans';\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1;\n  color: ",";\n"]);return o=function(){return n},n}function c(){var n=Object(r.a)(["\n  ","\n  color: ",";\n  ","\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  line-height: 20px;\n"]);return u=function(){return n},n}var l=Object(i.css)(u()),s=i.default.div(c(),l,(function(n){return n.dark?a.a.darkBlack:a.a.black}),(function(n){return n.fontSize?"font-size: ".concat(n.fontSize,";"):""})),d=i.default.div(o(),a.a.darkBlack)},227:function(n,t,e){"use strict";e.r(t),e.d(t,"MainContainer",(function(){return B})),e.d(t,"ImportantNote",(function(){return S})),e.d(t,"Subtitle",(function(){return T})),e.d(t,"PlayerContainer",(function(){return z})),e.d(t,"PlayerContainerTop",(function(){return C})),e.d(t,"PlayerPlayContainer",(function(){return L})),e.d(t,"PlayerPlayButton",(function(){return M})),e.d(t,"PlayerPlay",(function(){return E})),e.d(t,"PlayerCrossContainer",(function(){return F})),e.d(t,"PlayerCross",(function(){return I})),e.d(t,"PlayerTopMiddle",(function(){return D})),e.d(t,"PlayerFileName",(function(){return G})),e.d(t,"PlayerFileSize",(function(){return N})),e.d(t,"PlayerContainerBottom",(function(){return H})),e.d(t,"PlayerBottomTop",(function(){return A})),e.d(t,"PlayerBottomTrack",(function(){return R})),e.d(t,"PlayerBottomThumb",(function(){return U})),e.d(t,"PlayerBottomBottom",(function(){return K})),e.d(t,"PlayerTimeIndicator",(function(){return V}));var r=e(158),i=e(157),a=e(161),o=e(172);function c(){var n=Object(r.a)(["\n  opacity: 0.5;\n  margin-top: 8px;\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  position: absolute;\n  top: -6px;\n  left: ",";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: ",";\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: 0;\n    height: 4px;\n    background-color: ",";\n    width: ",";\n    ","\n\n  }\n"]);return s=function(){return n},n}function d(){var n=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return d=function(){return n},n}function f(){var n=Object(r.a)([""]);return f=function(){return n},n}function b(){var n=Object(r.a)(["\n  text-align: left;\n  color: ",";\n\n  @media screen and (",") {\n    font-size: 0.875rem;\n    line-height: 24px;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(r.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  text-align: left;\n  font-size: 14px;\n\n  @media screen and (",") {\n    font-size: 1.5rem;\n    line-height: 24px;\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(r.a)(["\n  flex: 1;\n"]);return m=function(){return n},n}function h(){var n=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return h=function(){return n},n}function g(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n  cursor: pointer;\n"]);return g=function(){return n},n}function j(){var n=Object(r.a)(["\n  width: 33px;\n  height: 40px;\n"]);return j=function(){return n},n}function x(){var n=Object(r.a)(["\n  width: 108px;\n  height: 108px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n"]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 76px;\n"]);return v=function(){return n},n}function y(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return y=function(){return n},n}function O(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 60px 20px 0px 20px;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return O=function(){return n},n}function k(){var n=Object(r.a)(["\n  color: ",';\n  font-size: 18px;\n  font-family: "Source Sans Pro";\n  margin-left: 20px;\n  margin-top: 35px;\n  text-align: left;\n  white-space: pre-wrap;\n  width: 100%;\n  \n  @media screen and (',") {\n    align-text: center; \n    max-width: 592px;\n    margin: 30px auto;\n  }\n"]);return k=function(){return n},n}function P(){var n=Object(r.a)(['\n  font-family: "Source Sans Pro";\n  font-size: 0.75rem;\n  line-height: 1.42;\n  font-weight: ',";\n \n  display: block;\n  max-width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin: 52px auto;\n  \n  @media screen and (",") {\n    max-width: 470px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return P=function(){return n},n}function w(){var n=Object(r.a)(["\n  margin-bottom: 77px;\n\n  @media screen and (",") {\n    max-width: 470px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return w=function(){return n},n}var B=i.default.div(w(),(function(n){return n.theme.breakpoints.tablet})),S=i.default.span(P(),(function(n){return n.isBold?700:400}),(function(n){return n.theme.breakpoints.tablet})),T=i.default.h2(k(),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.breakpoints.tablet})),z=i.default.div(O(),(function(n){return n.theme.breakpoints.tablet})),C=i.default.div(y()),L=i.default.div(v()),M=i.default.div(x(),a.a.purple_10),E=i.default.img(j()),F=i.default.div(g()),I=i.default.img(h()),D=i.default.div(m()),G=Object(i.default)(o.b).attrs({dark:!0,fontSize:"1rem"})(p(),(function(n){return n.theme.breakpoints.tablet})),N=Object(i.default)(o.b).attrs({dark:!0,fontSize:"0.625rem"})(b(),(function(n){return n.theme.colors.darkGray}),(function(n){return n.theme.breakpoints.tablet})),H=i.default.div(f()),A=i.default.div(d()),R=i.default.div(s(),a.a.purple_10,a.a.purple,(function(n){return n.progress?"".concat(n.progress,"%"):"0%"}),(function(n){return n.playing?"transition: width 0.2s linear;":""})),U=i.default.div(l(),(function(n){return n.progress?"".concat(n.progress,"%"):"0px"}),a.a.purple,(function(n){return n.playing?"transition: left 0.2s linear;":""})),K=i.default.div(u()),V=Object(i.default)(o.b).attrs({dark:!0,fontSize:"14px"})(c())},245:function(n,t,e){"use strict";t.a={sizeAsHuman:function(n,t){var e=t?1e3:1024;if(Math.abs(n)<e)return"".concat(n," B");var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=-1;do{n/=e,++i}while(Math.abs(n)>=e&&i<r.length-1);return"".concat(n.toFixed(1)," ").concat(r[i])},blobToFile:function(n,t){var e=n;return e.lastModifiedDate=new Date,e.name=t,n}}},246:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(325);function i(n,t){return new Promise((function(e){n.duration===1/0||r.isSafari&&!(r.isSafari&&n.duration>0)?(n.addEventListener("durationchange",(function(){t?n.remove():(n.pause(),n.volume=1,n.currentTime=0),e(n.duration)})),n.currentTime=86400,n.play()):e(n.duration)}))}},251:function(n,t,e){"use strict";e.r(t);var r=e(37),i=e(166),a=e(176),o=e.n(a),c=e(177),u=e(164),l=e(6),s=e.n(l),d=e(173),f=e(178),b=e.n(f),p=e(843),m=e(226),h=e(165),g=e(162),j=e(169),x=e(171),v=e(163),y=e(246),O=e.p+"static/media/play.e148f529.svg",k=e.p+"static/media/pause.6d9603fe.svg",P=e.p+"static/media/cross.2dabeb54.svg",w=e(245),B=e(227),S=function(n){var t,e=n.storeKey,a=n.previousStep,f=n.nextStep,S=n.metadata,T=b()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,z=Object(g.a)(),C=z.setDoGoBack,L=z.setSubtitle,M=Object(d.g)(),E=Object(d.h)(),F=Object(h.c)({updateAction:Object(x.a)(e)}),I=F.state,D=F.actions,G=Object(p.a)().t,N=null===I||void 0===I||null===(t=I[e])||void 0===t?void 0:t[null===S||void 0===S?void 0:S.currentLogic],H=N?N.recordingFile||N.uploadedFile:null,A=s.a.useRef(null),R=s.a.useRef(),U=s.a.useRef(0),K=s.a.useState(!0),V=Object(u.a)(K,2),_=V[0],J=V[1],Y=s.a.useState(!1),Z=Object(u.a)(Y,2),X=Z[0],q=Z[1],Q=s.a.useState(0),W=Object(u.a)(Q,2),$=W[0],nn=W[1],tn=s.a.useState(0),en=Object(u.a)(tn,2),rn=en[0],an=en[1];s.a.useEffect((function(){var n=function n(t){an(t/1e3),U.current=t,R.current=setTimeout((function(){n(t+200)}),200)},t=function(){n(U.current),setTimeout((function(){q(!0)}),0)},e=function(n){n.target.currentTime>=n.target.duration&&(an(0),U.current=0),q(!1),clearTimeout(R.current)},r=function(){var n=Object(c.a)(o.a.mark((function n(t){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(y.a)(t.target);case 2:e=n.sent,nn(e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return A.current&&(A.current.addEventListener("playing",t),A.current.addEventListener("pause",e),A.current.addEventListener("loadedmetadata",r)),function(){A.current&&(A.current.removeEventListener("playing",t),A.current.removeEventListener("pause",e),A.current.removeEventListener("loadedmetadata",r))}}),[]);var on=s.a.useMemo((function(){var n={fileUrl:"",fileName:"",fileSize:""};if(H&&void 0!==H.size)try{var t=URL.createObjectURL(H);n.fileUrl=t,n.fileName=H.name,n.fileSize=w.a.sizeAsHuman(H.size,!0)}catch(e){console.log("Error",e)}return n}),[H]),cn=on.fileUrl,un=on.fileName,ln=s.a.useCallback((function(){f&&(J(!1),M.push(f))}),[M,f]),sn=s.a.useCallback((function(){if(X&&A.current&&A.current.pause(),J(!1),E.state&&E.state.from){M.push("/submit-steps/step-record/cough")}else a?M.push(a):M.goBack()}),[E.state,a,M,X]),dn=s.a.useCallback((function(){X&&A.current&&A.current.pause(),(null===I||void 0===I?void 0:I[e][null===S||void 0===S?void 0:S.currentLogic])&&(D.updateAction(Object(i.a)({},null===S||void 0===S?void 0:S.currentLogic,{recordingFile:null,uploadFile:null})),sn())}),[X,I,e,S,D,sn]),fn=s.a.useCallback((function(){X||(an(0),A.current&&A.current.play())}),[X]),bn=s.a.useCallback((function(){X&&A.current&&A.current.pause()}),[X]);Object(l.useEffect)((function(){Object(v.a)(),L(G("recordingsListen:title")),C((function(){return sn}))}),[sn,C,L,G]);var pn=s.a.useMemo((function(){var n={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if($){var t=Math.floor(Math.floor(rn)/60),e=Math.floor(rn)-60*t;n.currentTime="".concat(t,":").concat(e<10?"0".concat(e):e);var r=$>rn?Math.ceil($-rn):0,i=Math.floor(r/60),a=r-60*i;n.remainingTime="-".concat(i,":").concat(a<10?"0".concat(a):a),n.trackProgress=Math.ceil(rn/$*100)}return n}),[$,rn]),mn=pn.currentTime,hn=pn.remainingTime,gn=pn.trackProgress;return Object(r.jsxs)(r.Fragment,{children:[cn&&Object(r.jsx)("audio",{ref:A,children:Object(r.jsx)("source",{src:cn})}),Object(r.jsxs)(B.MainContainer,{children:[Object(r.jsx)(B.Subtitle,{children:G("recordingsListen:subtitle")}),Object(r.jsxs)(B.PlayerContainer,{children:[Object(r.jsxs)(B.PlayerContainerTop,{children:[Object(r.jsx)(B.PlayerTopMiddle,{children:Object(r.jsx)(B.PlayerFileName,{children:un})}),Object(r.jsx)(B.PlayerCrossContainer,{onClick:dn,children:Object(r.jsx)(B.PlayerCross,{src:P})})]}),Object(r.jsxs)(B.PlayerContainerBottom,{children:[Object(r.jsxs)(B.PlayerBottomTop,{children:[Object(r.jsx)(B.PlayerBottomTrack,{playing:X,progress:gn}),Object(r.jsx)(B.PlayerBottomThumb,{playing:X,progress:gn})]}),Object(r.jsxs)(B.PlayerBottomBottom,{children:[Object(r.jsx)(B.PlayerTimeIndicator,{children:mn}),Object(r.jsx)(B.PlayerTimeIndicator,{children:hn})]})]})]}),Object(r.jsx)(B.PlayerPlayContainer,{onClick:X?bn:fn,children:Object(r.jsx)(B.PlayerPlayButton,{children:Object(r.jsx)(B.PlayerPlay,{src:X?k:O})})})]}),Object(r.jsx)(B.ImportantNote,{children:Object(r.jsxs)(m.a,{i18nKey:"main:note",children:[Object(r.jsx)("strong",{children:"Please note:"})," This form is for data collection only. It will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor."]})}),_&&Object(r.jsx)(T,{children:Object(r.jsx)(j.a,{invert:!0,leftLabel:G("recordingsListen:next"),leftHandler:ln,rightLabel:G("recordingsListen:retake"),rightHandler:dn})})]})};t.default=s.a.memo(S)},272:function(n,t,e){"use strict";e.r(t);var r=e(251);e.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=14.b147a917.chunk.js.map
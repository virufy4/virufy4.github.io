(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[25,30],{172:function(n,t,e){"use strict";var r=e(6),i=e.n(r),a=e(191);t.a=function(){var n=i.a.useContext(a.a),t=n.title,e=n.setTitle,r=n.subtitle,o=n.setSubtitle,c=n.type,u=n.setType,l=n.logoSize,s=n.setLogoSize,d=n.setDoGoBack;return{title:t,setTitle:e,subtitle:r,setSubtitle:o,type:c,setType:u,logoSize:l,setLogoSize:s,doGoBack:n.doGoBack,setDoGoBack:d}}},173:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},176:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return o}));var r=e(174),i=e(169);function a(n){return function(t,e){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},n,Object(i.a)(Object(i.a)({},t[n]),e)))}}function o(){return function(n){return{welcome:{language:n.welcome.language}}}}},177:function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"a",(function(){return d}));var r=e(166),i=e(165),a=e(167);function o(){var n=Object(r.a)(["\n  font-family: 'Open Sans';\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1;\n  color: ",";\n"]);return o=function(){return n},n}function c(){var n=Object(r.a)(["\n  ","\n  color: ",";\n  ","\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  line-height: 20px;\n"]);return u=function(){return n},n}var l=Object(i.css)(u()),s=i.default.div(c(),l,(function(n){return n.dark?a.a.darkBlack:a.a.black}),(function(n){return n.fontSize?"font-size: ".concat(n.fontSize,";"):""})),d=i.default.div(o(),a.a.darkBlack)},181:function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var r=e(169),i=e(37),a=e(196),o=e(6),c=e.n(o),u=e(166),l=e(165),s=e(167);function d(){var n=Object(u.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return d=function(){return n},n}var f=l.default.button(d(),(function(n){var t=n.dark,e=n.disabled?s.a.purple_50:s.a.purple;return t?"\n    background-color: ".concat(e,";\n    color: ").concat(s.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(s.a.white,";\n    color: ").concat(e,";\n    border: 1px solid ").concat(e,";\n  ")})),b=c.a.memo((function(n){var t=n.children,e=Object(a.a)(n,["children"]);return Object(i.jsx)(f,Object(r.a)(Object(r.a)({type:"button"},e),{},{children:t}))}))},189:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var r=e(37),i=e(6),a=e.n(i),o=e(181),c=e(166);function u(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return n},n}var l=e(165).default.div(u(),(function(n){return"calc(100% - ".concat(2*n.theme.layout.generalPaddingAmount,"px)")}),(function(n){return n.theme.breakpoints.tablet})),s=a.a.memo((function(n){var t=n.invert,e=void 0!==t&&t,i=n.leftLabel,a=n.leftDisabled,c=n.leftHandler,u=n.rightLabel,s=n.rightDisabled,d=n.rightHandler;return Object(r.jsxs)(l,{children:[Object(r.jsx)(o.a,{dark:e,disabled:a,onClick:c,children:i}),u&&d&&Object(r.jsx)(o.a,{dark:!e,disabled:s,onClick:d,children:u})]})})),d=a.a.memo(s)},231:function(n,t,e){"use strict";e.r(t),e.d(t,"MainContainer",(function(){return B})),e.d(t,"ImportantNote",(function(){return T})),e.d(t,"Subtitle",(function(){return S})),e.d(t,"PlayerContainer",(function(){return z})),e.d(t,"PlayerContainerTop",(function(){return C})),e.d(t,"PlayerPlayContainer",(function(){return L})),e.d(t,"PlayerPlayButton",(function(){return M})),e.d(t,"PlayerPlay",(function(){return E})),e.d(t,"PlayerCrossContainer",(function(){return F})),e.d(t,"PlayerCross",(function(){return I})),e.d(t,"PlayerTopMiddle",(function(){return D})),e.d(t,"PlayerFileName",(function(){return G})),e.d(t,"PlayerFileSize",(function(){return N})),e.d(t,"PlayerContainerBottom",(function(){return H})),e.d(t,"PlayerBottomTop",(function(){return A})),e.d(t,"PlayerBottomTrack",(function(){return U})),e.d(t,"PlayerBottomThumb",(function(){return R})),e.d(t,"PlayerBottomBottom",(function(){return K})),e.d(t,"PlayerTimeIndicator",(function(){return V}));var r=e(166),i=e(165),a=e(167),o=e(177);function c(){var n=Object(r.a)(["\n  opacity: 0.5;\n  margin-top: 8px;\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  position: absolute;\n  top: -6px;\n  left: ",";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: ",";\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: 0;\n    height: 4px;\n    background-color: ",";\n    width: ",";\n    ","\n\n  }\n"]);return s=function(){return n},n}function d(){var n=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return d=function(){return n},n}function f(){var n=Object(r.a)([""]);return f=function(){return n},n}function b(){var n=Object(r.a)(["\n  text-align: left;\n  color: ",";\n\n  @media screen and (",") {\n    font-size: 0.875rem;\n    line-height: 24px;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(r.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  text-align: left;\n  font-size: 14px;\n\n  @media screen and (",") {\n    font-size: 1.5rem;\n    line-height: 24px;\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(r.a)(["\n  flex: 1;\n"]);return m=function(){return n},n}function h(){var n=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return h=function(){return n},n}function g(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n"]);return g=function(){return n},n}function j(){var n=Object(r.a)(["\n  width: 33px;\n  height: 40px;\n"]);return j=function(){return n},n}function v(){var n=Object(r.a)(["\n  width: 108px;\n  height: 108px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n"]);return v=function(){return n},n}function x(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 76px;\n"]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return y=function(){return n},n}function O(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 60px 20px 0px 20px;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return O=function(){return n},n}function k(){var n=Object(r.a)(["\n  color: ",';\n  font-size: 18px;\n  font-family: "Source Sans Pro";\n  margin-left: 20px;\n  margin-top: 35px;\n  text-align: left;\n  white-space: pre-wrap;\n  width: 100%;\n  \n  @media screen and (',") {\n    align-text: center; \n    max-width: 592px;\n    margin: 30px auto;\n  }\n"]);return k=function(){return n},n}function P(){var n=Object(r.a)(['\n  font-family: "Source Sans Pro";\n  font-size: 0.75rem;\n  line-height: 1.42;\n  font-weight: ',";\n \n  display: block;\n  max-width: 320px;\n  margin: 52px auto;\n"]);return P=function(){return n},n}function w(){var n=Object(r.a)(["\n  margin-bottom: 77px;\n"]);return w=function(){return n},n}var B=i.default.div(w()),T=i.default.span(P(),(function(n){return n.isBold?700:400})),S=i.default.h2(k(),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.breakpoints.tablet})),z=i.default.div(O(),(function(n){return n.theme.breakpoints.tablet})),C=i.default.div(y()),L=i.default.div(x()),M=i.default.div(v(),a.a.purple_10),E=i.default.img(j()),F=i.default.div(g()),I=i.default.img(h()),D=i.default.div(m()),G=Object(i.default)(o.b).attrs({dark:!0,fontSize:"1rem"})(p(),(function(n){return n.theme.breakpoints.tablet})),N=Object(i.default)(o.b).attrs({dark:!0,fontSize:"0.625rem"})(b(),(function(n){return n.theme.colors.darkGray}),(function(n){return n.theme.breakpoints.tablet})),H=i.default.div(f()),A=i.default.div(d()),U=i.default.div(s(),a.a.purple_10,a.a.purple,(function(n){return n.progress?"".concat(n.progress,"%"):"0%"}),(function(n){return n.playing?"transition: width 0.2s linear;":""})),R=i.default.div(l(),(function(n){return n.progress?"".concat(n.progress,"%"):"0px"}),a.a.purple,(function(n){return n.playing?"transition: left 0.2s linear;":""})),K=i.default.div(u()),V=Object(i.default)(o.b).attrs({dark:!0,fontSize:"14px"})(c())},250:function(n,t,e){"use strict";t.a={sizeAsHuman:function(n,t){var e=t?1e3:1024;if(Math.abs(n)<e)return"".concat(n," B");var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=-1;do{n/=e,++i}while(Math.abs(n)>=e&&i<r.length-1);return"".concat(n.toFixed(1)," ").concat(r[i])},blobToFile:function(n,t){var e=n;return e.lastModifiedDate=new Date,e.name=t,n}}},259:function(n,t,e){"use strict";e.r(t);var r=e(37),i=e(174),a=e(202),o=e.n(a),c=e(203),u=e(171),l=e(6),s=e.n(l),d=e(179),f=e(199),b=e.n(f),p=e(847),m=e(224),h=e(170),g=e(172),j=e(189),v=e(176),x=e(173),y=e.p+"static/media/play.e148f529.svg",O=e.p+"static/media/cross.2dabeb54.svg",k=e(250),P=e(231),w=function(n){var t,e=n.storeKey,a=n.previousStep,f=n.nextStep,w=n.metadata,B=b()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,T=Object(g.a)(),S=T.setDoGoBack,z=T.setSubtitle,C=Object(d.g)(),L=Object(d.h)(),M=Object(h.c)({updateAction:Object(v.b)(e)}),E=M.state,F=M.actions,I=Object(p.a)().t,D=null===E||void 0===E||null===(t=E[e])||void 0===t?void 0:t[null===w||void 0===w?void 0:w.currentLogic],G=D?D.recordingFile||D.uploadedFile:null,N=s.a.useRef(null),H=s.a.useRef(),A=s.a.useState(!0),U=Object(u.a)(A,2),R=U[0],K=U[1],V=s.a.useState(!1),_=Object(u.a)(V,2),J=_[0],Y=_[1],Z=s.a.useState(0),X=Object(u.a)(Z,2),q=X[0],Q=X[1],W=s.a.useState(0),$=Object(u.a)(W,2),nn=$[0],tn=$[1];s.a.useEffect((function(){var n=function n(t){tn(t/1e3),H.current=setTimeout((function(){n(t+200)}),200)},t=function(){n(0),setTimeout((function(){Y(!0)}),0)},e=function(n){Q(n.target.currentTime),tn(n.target.currentTime),Y(!1),clearTimeout(H.current)},r=function(){var n=Object(c.a)(o.a.mark((function n(t){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(n){t.target.duration!==1/0&&n(t.target.duration);t.target.addEventListener("durationchange",(function e(){t.target.pause(),t.target.volume=1,t.target.currentTime=0,n(t.target.duration),t.target.removeEventListener("durationchange",e)})),t.target.volume=0,t.target.currentTime=86400}));case 2:e=n.sent,t.target.volume=1,Q(e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return N.current&&(N.current.addEventListener("playing",t),N.current.addEventListener("pause",e),N.current.addEventListener("loadedmetadata",r)),function(){N.current&&(N.current.removeEventListener("playing",t),N.current.removeEventListener("pause",e),N.current.removeEventListener("loadedmetadata",r))}}),[]);var en=s.a.useMemo((function(){var n={fileUrl:"",fileName:"",fileSize:""};if(G&&void 0!==G.size)try{var t=URL.createObjectURL(G);n.fileUrl=t,n.fileName=G.name,n.fileSize=k.a.sizeAsHuman(G.size,!0)}catch(e){console.log("Error",e)}return n}),[G]),rn=en.fileUrl,an=en.fileName,on=s.a.useCallback((function(){f&&(K(!1),C.push(f))}),[C,f]),cn=s.a.useCallback((function(){if(K(!1),L.state&&L.state.from){C.push("/submit-steps/step-record/cough")}else a?C.push(a):C.goBack()}),[L.state,a,C]),un=s.a.useCallback((function(){J&&N.current&&N.current.pause(),(null===E||void 0===E?void 0:E[e][null===w||void 0===w?void 0:w.currentLogic])&&(F.updateAction(Object(i.a)({},null===w||void 0===w?void 0:w.currentLogic,{recordingFile:null,uploadFile:null})),cn())}),[J,E,e,w,F,cn]),ln=s.a.useCallback((function(){J||(tn(0),N.current&&N.current.play())}),[J]);Object(l.useEffect)((function(){Object(x.a)(),z(I("recordingsListen:title")),S((function(){return cn}))}),[cn,S,z,I]);var sn=s.a.useMemo((function(){var n={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(q){var t=Math.floor(Math.floor(nn)/60),e=Math.floor(nn)-60*t;n.currentTime="".concat(t,":").concat(e<10?"0".concat(e):e);var r=q>nn?Math.ceil(q-nn):0,i=Math.floor(r/60),a=r-60*i;n.remainingTime="-".concat(i,":").concat(a<10?"0".concat(a):a),n.trackProgress=Math.ceil(nn/q*100)}return n}),[q,nn]),dn=sn.currentTime,fn=sn.remainingTime,bn=sn.trackProgress;return Object(r.jsxs)(r.Fragment,{children:[rn&&Object(r.jsx)("audio",{ref:N,children:Object(r.jsx)("source",{src:rn})}),Object(r.jsxs)(P.MainContainer,{children:[Object(r.jsx)(P.Subtitle,{children:I("recordingsListen:subtitle")}),Object(r.jsxs)(P.PlayerContainer,{children:[Object(r.jsxs)(P.PlayerContainerTop,{children:[Object(r.jsx)(P.PlayerTopMiddle,{children:Object(r.jsx)(P.PlayerFileName,{children:an})}),Object(r.jsx)(P.PlayerCrossContainer,{onClick:un,children:Object(r.jsx)(P.PlayerCross,{src:O})})]}),Object(r.jsxs)(P.PlayerContainerBottom,{children:[Object(r.jsxs)(P.PlayerBottomTop,{children:[Object(r.jsx)(P.PlayerBottomTrack,{playing:J,progress:bn}),Object(r.jsx)(P.PlayerBottomThumb,{playing:J,progress:bn})]}),Object(r.jsxs)(P.PlayerBottomBottom,{children:[Object(r.jsx)(P.PlayerTimeIndicator,{children:dn}),Object(r.jsx)(P.PlayerTimeIndicator,{children:fn})]})]})]}),Object(r.jsx)(P.PlayerPlayContainer,{onClick:ln,children:Object(r.jsx)(P.PlayerPlayButton,{children:Object(r.jsx)(P.PlayerPlay,{src:y})})})]}),Object(r.jsx)(P.ImportantNote,{children:Object(r.jsxs)(m.a,{i18nKey:"main:note",children:[Object(r.jsx)("strong",{children:"Please note:"})," This form is for data collection only. It will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor."]})}),R&&Object(r.jsx)(B,{children:Object(r.jsx)(j.a,{invert:!0,leftLabel:I("recordingsListen:next"),leftHandler:on,rightLabel:I("recordingsListen:retake"),rightHandler:un})})]})};t.default=s.a.memo(w)}}]);
//# sourceMappingURL=25.d18f9aa5.chunk.js.map
(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[32,60,72],{207:function(n,e,t){"use strict";var r=t(9),a=t.n(r),o=t(235);e.a=function(){var n=a.a.useContext(o.a),e=n.title,t=n.setTitle,r=n.subtitle,i=n.setSubtitle,u=n.type,c=n.setType,l=n.logoSize,s=n.setLogoSize,f=n.setDoGoBack;return{title:e,setTitle:t,subtitle:r,setSubtitle:i,type:u,setType:c,logoSize:l,setLogoSize:s,doGoBack:n.doGoBack,setDoGoBack:f}}},208:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},215:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var r=t(9),a=t.n(r),o=t(228),i=t(205);function u(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return n},n}var c=t(204).default.div(u(),(function(n){return"calc(100% - ".concat(2*n.theme.layout.generalPaddingAmount,"px)")}),(function(n){return n.theme.breakpoints.tablet})),l=a.a.memo((function(n){var e=n.invert,t=void 0!==e&&e,r=n.leftLabel,i=n.leftDisabled,u=n.leftHandler,l=n.rightLabel,s=n.rightDisabled,f=n.rightHandler;return a.a.createElement(c,null,a.a.createElement(o.a,{dark:t,disabled:i,onClick:u},r),l&&f&&a.a.createElement(o.a,{dark:!t,disabled:s,onClick:f},l))})),s=a.a.memo(l)},218:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return u}));var r=t(213),a=t(237),o=t(234);function i(n){return function(e,t){return Object(a.a)(Object(a.a)({},e),{},Object(r.a)({},n,Object(a.a)(Object(a.a)({},e[n]),t)))}}function u(){return function(n){var e={welcome:{language:n.welcome.language}};return o.a&&(e.welcome.country=n.welcome.country,e.welcome.region=n.welcome.region,e.welcome.hospitalId=n.welcome.hospitalId),e}}},228:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var r=t(233),a=t(9),o=t.n(a),i=t(205),u=t(204),c=t(211);function l(){var n=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return n},n}var s=u.default.button(l(),(function(n){var e=n.dark,t=n.disabled?c.a.purple_50:c.a.purple;return e?"\n    background-color: ".concat(t,";\n    color: ").concat(c.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(c.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),f=o.a.memo((function(n){var e=n.children,t=Object(r.a)(n,["children"]);return o.a.createElement(s,Object.assign({type:"button"},t),e)}))},239:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var r=t(9),a=t.n(r),o=t(260),i=t(852),u=t(17),c=t(205);function l(){var n=Object(c.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return l=function(){return n},n}var s=t(204).default.div(l()),f=function(n){var e=n.onChange,t=n.setRecaptchaAvailable,r=Object(i.a)().i18n;return a.a.createElement(s,null,a.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:e,onErrored:function(){t(!1),u.a("Error on ReCAPTCHA")},hl:r.language}))}},267:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(247);function a(n,e){return new Promise((function(t){n.duration===1/0||r.isSafari&&!(r.isSafari&&n.duration>0)?(n.addEventListener("durationchange",(function(){e?n.remove():(n.pause(),n.volume=1,n.currentTime=0),t(n.duration)})),n.currentTime=86400,n.play()):t(n.duration)}))}},280:function(n,e,t){"use strict";t.r(e),t.d(e,"MainContainer",(function(){return S})),t.d(e,"PlayerContainer",(function(){return B})),t.d(e,"PlayerContainerTop",(function(){return w})),t.d(e,"PlayerPlayContainer",(function(){return T})),t.d(e,"PlayerCrossContainer",(function(){return k})),t.d(e,"PlayerContainerBottom",(function(){return C})),t.d(e,"PlayerTopMiddle",(function(){return L})),t.d(e,"PlayerBottomTop",(function(){return M})),t.d(e,"PlayerBottomTrack",(function(){return z})),t.d(e,"PlayerBottomThumb",(function(){return A})),t.d(e,"PlayerBottomBottom",(function(){return Y})),t.d(e,"Subtitle",(function(){return I})),t.d(e,"TitleAudioName",(function(){return R})),t.d(e,"PlayerTimeIndicator",(function(){return D})),t.d(e,"PlayerPlayButton",(function(){return F})),t.d(e,"PlayerPlay",(function(){return G})),t.d(e,"PlayerCross",(function(){return H})),t.d(e,"BeforeSubmitText",(function(){return U})),t.d(e,"TempBeforeSubmitError",(function(){return N}));var r=t(205),a=t(204),o=t(211);function i(){var n=Object(r.a)(["\ncolor: ",";\n  text-align: center;\n  margin-bottom: 16px;\n"]);return i=function(){return n},n}function u(){var n=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 14px;\n  line-height: 20px;\n  color: ",";\n  margin: 0;\n"]);return u=function(){return n},n}function c(){var n=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n  width: 33px;\n  height: 40px;\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  width: 108px;\n  height: 108px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n"]);return s=function(){return n},n}function f(){var n=Object(r.a)(["\n  opacity: 0.5;\n  margin-top: 8px;\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  color: ",";\n  font-weight: 400;\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  color: ",';\n  font-size: 14px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n']);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  color: ",';\n  font-size: 18px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n  white-space: pre-wrap;\n  width: 100%;\n  margin-left: 20px;\n  margin-bottom: 60px;\n  \n  @media screen and (',") {\n    max-width: 592px;\n    margin-right: auto; \n    margin-left: auto; \n  }\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return p=function(){return n},n}function b(){var n=Object(r.a)(["\n  position: absolute;\n  top: -6px;\n  left: ",";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return b=function(){return n},n}function g(){var n=Object(r.a)(["\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: ",";\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: 0;\n    height: 4px;\n    background-color: ",";\n    width: ",";\n    ","\n\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return v=function(){return n},n}function h(){var n=Object(r.a)(["\n  flex: 1;\n"]);return h=function(){return n},n}function y(){var n=Object(r.a)([""]);return y=function(){return n},n}function x(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n  cursor: pointer;\n"]);return x=function(){return n},n}function j(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 76px;\n"]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return O=function(){return n},n}function E(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 60px 20px 0px 20px;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return E=function(){return n},n}function P(){var n=Object(r.a)(["\n  margin-bottom: 77px;\n\n  @media screen and (",") {\n    max-width: 470px;\n    margin: auto;\n  }\n"]);return P=function(){return n},n}var S=a.default.div(P(),(function(n){return n.theme.breakpoints.tablet})),B=a.default.div(E(),(function(n){return n.theme.breakpoints.tablet})),w=a.default.div(O()),T=a.default.div(j()),k=a.default.div(x()),C=a.default.div(y()),L=a.default.div(h()),M=a.default.div(v()),z=a.default.div(g(),o.a.purple_10,o.a.purple,(function(n){return n.progress?"".concat(n.progress,"%"):"0%"}),(function(n){return n.playing?"transition: width 0.2s linear;":""})),A=a.default.div(b(),(function(n){return n.progress?"".concat(n.progress,"%"):"0px"}),o.a.purple,(function(n){return n.playing?"transition: left 0.2s linear;":""})),Y=a.default.div(p()),I=a.default.h2(m(),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.breakpoints.tablet})),R=a.default.p(d(),(function(n){return n.theme.colors.mineShaft})),D=a.default.p(f(),o.a.mineShaft),F=a.default.div(s(),o.a.purple_10),G=a.default.img(l()),H=a.default.img(c()),U=a.default.p(u(),(function(n){return n.theme.colors.darkGray_70})),N=Object(a.default)(U)(i(),(function(n){return n.theme.colors.red}))},298:function(n,e,t){"use strict";e.a={sizeAsHuman:function(n,e){var t=e?1e3:1024;if(Math.abs(n)<t)return"".concat(n," B");var r=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1;do{n/=t,++a}while(Math.abs(n)>=t&&a<r.length-1);return"".concat(n.toFixed(1)," ").concat(r[a])},blobToFile:function(n,e){var t=n;return t.lastModifiedDate=new Date,t.name=e,n}}},299:function(n,e,t){"use strict";t.r(e);var r=t(213),a=t(216),o=t.n(a),i=t(217),u=t(206),c=t(9),l=t.n(c),s=t(240),f=t(212),d=t.n(f),m=t(852),p=t(209),b=t(214),g=t(231),v=t(232),h=t(207),y=t(215),x=t(239),j=t(218),O=t(229),E=t(208),P=t(267),S=t(398),B=t.n(S),w=t(399),T=t.n(w),k=t(400),C=t.n(k),L=t(298),M=t(280);e.default=l.a.memo((function(n){var e,t,a=n.storeKey,f=n.previousStep,S=n.nextStep,w=n.metadata,k=l.a.useMemo((function(){return!!w&&"recordYourCough"===w.currentLogic}),[w]),z=l.a.useMemo((function(){return!!w&&"recordYourBreath"===w.currentLogic}),[w]),A=v.object({audioCollection:v.object()}).defined(),Y=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,I=Object(h.a)(),R=I.setDoGoBack,D=I.setTitle,F=I.setSubtitle,G=Object(s.g)(),H=Object(s.h)(),U=Object(p.d)(Object(j.b)(a)),N=U.state,_=U.action,J=Object(m.a)().t,Z=Object(O.e)(),K=Object(O.d)(),q=(null===H||void 0===H||null===(e=H.state)||void 0===e?void 0:e.isShortAudioCollection)||!1,V=null===N||void 0===N||null===(t=N[a])||void 0===t?void 0:t[null===w||void 0===w?void 0:w.currentLogic],W=V?V.recordingFile||V.uploadedFile:null,X=l.a.useRef(null),Q=l.a.useRef(),$=l.a.useRef(0),nn=l.a.useState(!0),en=Object(u.a)(nn,2),tn=en[0],rn=en[1],an=l.a.useState(!1),on=Object(u.a)(an,2),un=on[0],cn=on[1],ln=l.a.useState(0),sn=Object(u.a)(ln,2),fn=sn[0],dn=sn[1],mn=l.a.useState(0),pn=Object(u.a)(mn,2),bn=pn[0],gn=pn[1],vn=l.a.useState(!0),hn=Object(u.a)(vn,2),yn=hn[0],xn=hn[1];l.a.useEffect((function(){var n=function(){!function n(e){gn(e/1e3),$.current=e,Q.current=setTimeout((function(){n(e+200)}),200)}($.current),setTimeout((function(){cn(!0)}),0)},e=function(n){n.target.currentTime>=n.target.duration&&(gn(0),$.current=0),cn(!1),clearTimeout(Q.current)},t=function(){var n=Object(i.a)(o.a.mark((function n(e){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(P.a)(e.target);case 2:t=n.sent,dn(t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return X.current&&(X.current.addEventListener("playing",n),X.current.addEventListener("pause",e),X.current.addEventListener("loadedmetadata",t)),function(){X.current&&(X.current.removeEventListener("playing",n),X.current.removeEventListener("pause",e),X.current.removeEventListener("loadedmetadata",t))}}),[]);var jn=l.a.useMemo((function(){var n={fileUrl:"",fileName:"",fileSize:""};if(W&&void 0!==W.size)try{var e=URL.createObjectURL(W);n.fileUrl=e,n.fileName=W.name,n.fileSize=L.a.sizeAsHuman(W.size,!0)}catch(t){console.log("Error",t)}return n}),[W]),On=jn.fileUrl,En=jn.fileName,Pn=l.a.useCallback((function(){S&&(rn(!1),G.push(S))}),[G,S]),Sn=l.a.useCallback((function(){un&&X.current&&X.current.pause(),rn(!1),H.state&&H.state.from?k?G.push("/submit-steps/step-record/cough",{isShortAudioCollection:q}):z?G.push("/submit-steps/step-record/breath"):G.push("/submit-steps/step-record/speech"):f?G.push(f):G.goBack()}),[H.state,f,G,k,z,q,un]),Bn=l.a.useCallback((function(){un&&X.current&&X.current.pause(),(null===N||void 0===N?void 0:N[a][null===w||void 0===w?void 0:w.currentLogic])&&(_(Object(r.a)({},null===w||void 0===w?void 0:w.currentLogic,{recordingFile:null,uploadFile:null})),Sn())}),[un,N,a,w,_,Sn]),wn=l.a.useCallback((function(){un||X.current&&X.current.play()}),[un]),Tn=l.a.useCallback((function(){un&&X.current&&X.current.pause()}),[un]),kn=Object(b.e)({defaultValues:null===N||void 0===N?void 0:N[a],resolver:Object(g.a)(A)}),Cn=kn.handleSubmit,Ln=kn.formState,Mn=l.a.useState(null),zn=Object(u.a)(Mn,2),An=zn[0],Yn=zn[1],In=l.a.useState(null),Rn=Object(u.a)(In,2),Dn=Rn[0],Fn=Rn[1],Gn=Ln.isSubmitting;Object(c.useEffect)((function(){Dn||Yn(null)}),[Dn]),Object(c.useEffect)((function(){Object(E.a)(),F(J("recordingsListen:title")),D(J(k?"recordingsListen:recordCough.header":z?"recordingsListen:recordBreath.header":"recordingsListen:recordSpeech.header")),R((function(){return Sn}))}),[Sn,k,z,R,D,F,J]);var Hn=l.a.useMemo((function(){var n={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(fn){var e=Math.floor(Math.floor(bn)/60),t=Math.floor(bn)-60*e;n.currentTime="".concat(e,":").concat(t<10?"0".concat(t):t);var r=fn>bn?Math.ceil(fn-bn):0,a=Math.floor(r/60),o=r-60*a;n.remainingTime="-".concat(a,":").concat(o<10?"0".concat(o):o),n.trackProgress=Math.ceil(bn/fn*100)}return n}),[fn,bn]),Un=Hn.currentTime,Nn=Hn.remainingTime,_n=Hn.trackProgress;return l.a.createElement(l.a.Fragment,null,On&&l.a.createElement("audio",{ref:X},l.a.createElement("source",{src:On})),l.a.createElement(M.MainContainer,null,l.a.createElement(M.Subtitle,null,J("recordingsListen:subtitle")),l.a.createElement(M.PlayerContainer,null,l.a.createElement(M.PlayerContainerTop,null,l.a.createElement(M.PlayerTopMiddle,null,l.a.createElement(M.TitleAudioName,null,En)),l.a.createElement(M.PlayerCrossContainer,{onClick:Bn},l.a.createElement(M.PlayerCross,{src:C.a}))),l.a.createElement(M.PlayerContainerBottom,null,l.a.createElement(M.PlayerBottomTop,null,l.a.createElement(M.PlayerBottomTrack,{playing:un,progress:_n}),l.a.createElement(M.PlayerBottomThumb,{playing:un,progress:_n})),l.a.createElement(M.PlayerBottomBottom,null,l.a.createElement(M.PlayerTimeIndicator,null,Un),l.a.createElement(M.PlayerTimeIndicator,null,Nn)))),l.a.createElement(M.PlayerPlayContainer,{onClick:un?Tn:wn},l.a.createElement(M.PlayerPlayButton,null,l.a.createElement(M.PlayerPlay,{src:un?T.a:B.a})))),(!Z&&tn||Z&&O.b.includes(K)&&"recordYourSpeech"!==(null===w||void 0===w?void 0:w.currentLogic)&&!q||Z&&!O.b.includes(K)&&"recordYourBreath"!==(null===w||void 0===w?void 0:w.currentLogic))&&l.a.createElement(Y,null,l.a.createElement(y.a,{invert:!0,leftLabel:J("recordingsListen:next"),leftHandler:Pn})),(Z&&!O.b.includes(K)&&"recordYourBreath"===(null===w||void 0===w?void 0:w.currentLogic)||Z&&O.b.includes(K)&&"recordYourSpeech"===(null===w||void 0===w?void 0:w.currentLogic)||Z&&q&&"recordYourCough"===(null===w||void 0===w?void 0:w.currentLogic))&&l.a.createElement(Y,null,"Colombia"!==K&&l.a.createElement(x.a,{onChange:Fn,setRecaptchaAvailable:xn}),An&&l.a.createElement(M.TempBeforeSubmitError,null,An),l.a.createElement(y.a,{invert:!0,leftLabel:J(Gn?"questionary:submitting":"beforeSubmit:submitButton"),leftDisabled:"Colombia"!==K?Gn||yn&&!Dn:Gn,leftHandler:Cn((function(){S&&(rn(!1),G.push(S))}))})))}))},341:function(n,e,t){"use strict";t.r(e);var r=t(299);t.d(e,"default",(function(){return r.default}))},398:function(n,e,t){n.exports=t.p+"static/media/play.6f092911.svg"},399:function(n,e,t){n.exports=t.p+"static/media/pause.d55011c8.svg"},400:function(n,e,t){n.exports=t.p+"static/media/cross.13e841fb.svg"}}]);
//# sourceMappingURL=32.40620e02.chunk.js.map
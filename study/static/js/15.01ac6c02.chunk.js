(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[15,72],{207:function(e,t,n){"use strict";var r=n(9),a=n.n(r),o=n(242);t.a=function(){var e=a.a.useContext(o.a),t=e.title,n=e.setTitle,r=e.subtitle,i=e.setSubtitle,u=e.type,c=e.setType,l=e.logoSize,s=e.setLogoSize,d=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:i,type:u,setType:c,logoSize:l,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:d}}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(9),a=n.n(r),o=n(233),i=n(205);function u(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return e},e}var c=n(204).default.div(u(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),l=a.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftLabel,i=e.leftDisabled,u=e.leftHandler,l=e.rightLabel,s=e.rightDisabled,d=e.rightHandler;return a.a.createElement(c,null,a.a.createElement(o.a,{dark:n,disabled:i,onClick:u},r),l&&d&&a.a.createElement(o.a,{dark:!n,disabled:s,onClick:d},l))})),s=a.a.memo(l)},218:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(216),a=n(234),o=n(240);function i(e){return function(t,n){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},e,Object(a.a)(Object(a.a)({},t[e]),n)))}}function u(){return function(e){var t={welcome:{language:e.welcome.language}};return o.a&&(t.welcome.country=e.welcome.country,t.welcome.region=e.welcome.region,t.welcome.hospitalId=e.welcome.hospitalId),t}}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(251),a=n.n(r).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return a}},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(238),a=n(9),o=n.n(a),i=n(205),u=n(204),c=n(213);function l(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var s=u.default.button(l(),(function(e){var t=e.dark,n=e.disabled?c.a.purple_50:c.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(c.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(c.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),d=o.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return o.a.createElement(s,Object.assign({type:"button"},n),t)}))},235:function(e,t,n){"use strict";var r=n(239);t.a=function(){return{isBrowser:r.isBrowser?Object(r.deviceDetect)():null,isMobile:r.isMobile?Object(r.deviceDetect)():null,isSmartTv:r.isSmartTV?Object(r.deviceDetect)():null,isConsole:r.isConsole?Object(r.deviceDetect)():null,isTablet:r.isTablet?Object(r.deviceDetect)():null,isWearable:r.isWearable?Object(r.deviceDetect)():null}}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(9),a=n.n(r),o=n(260),i=n(849),u=n(17),c=n(205);function l(){var e=Object(c.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return l=function(){return e},e}var s=n(204).default.div(l()),d=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,r=Object(i.a)().i18n;return a.a.createElement(s,null,a.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),u.a("Error on ReCAPTCHA")},hl:r.language}))}},246:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return b}));var r=n(211),a=n.n(r),o=n(212),i=n(229),u=n(220),c=n(235);function l(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,l,s,d,p,f,m,b,v,g,h,y,x,S,j,w,O,C,E,T,k,P,B,I,L,A,M,D;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,u=t.nextStep,l=t.setActiveStep,s=t.history,e.prev=1,n(null),b=r.welcome,v=b.language,g=b.country,h=b.region,y=b.patientId,x=b.hospitalId,S=r["submit-steps"],j=S.vaccine,w=S.ageGroup,O=S.gender,C=S.ethnicity,E=S.biologicalSex,T=S.smokeLastSixMonths,k=S.currentSymptoms,P=S.symptomsStartedDate,B=S.currentRespiratoryCondition,I=S.currentMedicalCondition,(L=new FormData).append("device",JSON.stringify(Object(c.a)())),L.append("language",v),L.append("country",g),h&&L.append("region",h),x&&L.append("hospitalId",x),window.sourceCampaign&&L.append("source",window.sourceCampaign),j&&L.append("vaccine",j),w&&L.append("ageGroup",w),(A=O.other||O.selected[0])&&L.append("gender",A),C&&L.append("ethnicity",C),E&&L.append("biologicalSex",E),T&&L.append("smokeLastSixMonths",T),(null===k||void 0===k||null===(d=k.selected)||void 0===d?void 0:d.length)>0&&L.append("currentSymptoms",k.selected.join(",")),P&&L.append("symptomsStartedDate",P),(null===B||void 0===B||null===(p=B.selected)||void 0===p?void 0:p.length)>0&&L.append("currentRespiratoryCondition",B.selected.join(",")),(null===I||void 0===I||null===(f=I.selected)||void 0===f?void 0:f.length)>0&&L.append("currentMedicalCondition",I.selected.join(",")),(null===k||void 0===k?void 0:k.other)&&L.append("otherSymptoms",null===k||void 0===k?void 0:k.other),(null===B||void 0===B?void 0:B.other)&&L.append("otherRespiratoryConditions",null===B||void 0===B?void 0:B.other),(null===I||void 0===I?void 0:I.other)&&L.append("otherMedicalConditions",null===I||void 0===I?void 0:I.other),o&&L.append("captchaValue",o),e.next=29,i.a.post("/patient/".concat(y,"/questionary"),L,{headers:{"Content-Type":"multipart/form-data; boundary=Questionary"}});case 29:M=e.sent,u&&(null===(m=M.data)||void 0===m?void 0:m.submissionId)&&(l(!1),s.push(u,{submissionId:null===(D=M.data)||void 0===D?void 0:D.submissionId,patientId:y})),e.next=37;break;case 33:e.prev=33,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 37:case"end":return e.stop()}}),e,null,[[1,33]])})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,l,s,d,p,f,m,b,v,g,h,y,x,S,j,w,O,C,E,T;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,u=t.nextStep,l=t.setActiveStep,s=t.history,e.prev=1,n(null),f=r.welcome,m=f.language,b=f.country,v=f.region,g=f.patientId,h=f.hospitalId,y=r["submit-steps"],x=y.ageGroup,S=y.gender,j=y.currentSymptoms,w=y.symptomsStartedDate,(O=new FormData).append("device",JSON.stringify(Object(c.a)())),O.append("language",m),O.append("country",b),v&&O.append("region",v),h&&O.append("hospitalId",h),window.sourceCampaign&&O.append("source",window.sourceCampaign),x&&O.append("ageGroup",x),(C=S.other||S.selected[0])&&O.append("gender",C),(null===j||void 0===j||null===(d=j.selected)||void 0===d?void 0:d.length)>0&&O.append("currentSymptoms",j.selected.join(",")),w&&O.append("symptomsStartedDate",w),o&&O.append("captchaValue",o),e.next=20,i.a.post("/patient/".concat(g,"/shortQuestionary"),O,{headers:{"Content-Type":"multipart/form-data; boundary=ShortQuestionary"}});case 20:E=e.sent,u&&(null===(p=E.data)||void 0===p?void 0:p.submissionId)&&(l(!1),s.push(u,{submissionId:null===(T=E.data)||void 0===T?void 0:T.submissionId,patientId:g})),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 28:case"end":return e.stop()}}),e,null,[[1,24]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(a.a.mark((function e(t){var n,r,o,l,s,d,p,f,m,b,v,g,h,y,x,S,j,w,O,C,E,T,k,P,B,I;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,l=t.nextStep,s=t.otherSteps,d=t.setActiveStep,p=t.history,f=t.isShortAudioCollection,e.prev=1,n(null),b=r.welcome,v=b.language,g=b.country,h=b.region,y=b.patientId,x=b.hospitalId,S=r["submit-steps"],j=S.recordYourCough,w=S.recordYourBreath,O=S.recordYourSpeech,(C=new FormData).append("device",JSON.stringify(Object(c.a)())),C.append("language",v),C.append("country",g),h&&C.append("region",h),x&&C.append("hospitalId",x),window.sourceCampaign&&C.append("source",window.sourceCampaign),j&&(E=j.recordingFile||j.uploadedFile,C.append("cough",E,E.name||"filename.wav")),w&&(T=w.recordingFile||w.uploadedFile,C.append("breath",T,T.name||"filename_breath.wav")),u.b.includes(g)&&O&&(k=O.recordingFile||O.uploadedFile,C.append("voice",k,k.name||"filename_voice.wav")),o&&C.append("captchaValue",o),C.append("shortAudioCollection",f||"false"),e.next=19,i.a.post("/patient/".concat(y,"/audioCollection"),C,{headers:{"Content-Type":"multipart/form-data; boundary=AudioCollection"}});case 19:P=e.sent,f&&(null===s||void 0===s?void 0:s.isShortAudioStep)?(d(!1),p.push(null===s||void 0===s?void 0:s.isShortAudioStep,{submissionId:null===(B=P.data)||void 0===B?void 0:B.submissionId,patientId:y})):l&&(null===(m=P.data)||void 0===m?void 0:m.submissionId)&&(d(!1),p.push(l,{submissionId:null===(I=P.data)||void 0===I?void 0:I.submissionId,patientId:y})),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 27:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,l,s,d,p,f,m,b,v,g,h,y,x,S,j,w;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,u=t.nextStep,l=t.setActiveStep,s=t.history,e.prev=1,n(null),p=r.welcome,f=p.language,m=p.country,b=p.region,v=p.patientId,g=p.hospitalId,h=r["submit-steps"],y=h.patientAntigenTestResult,x=h.patientPcrTestResult,(S=new FormData).append("device",JSON.stringify(Object(c.a)())),S.append("language",f),S.append("country",m),b&&S.append("region",b),g&&S.append("hospitalId",g),window.sourceCampaign&&S.append("source",window.sourceCampaign),y&&S.append("patientAntigenTestResult",y),x&&S.append("patientPcrTestResult",x),o&&S.append("captchaValue",o),e.next=17,i.a.post("/patient/".concat(v,"/testResult"),S,{headers:{"Content-Type":"multipart/form-data; boundary=testResult"}});case 17:j=e.sent,u&&(null===(d=j.data)||void 0===d?void 0:d.submissionId)&&(l(!1),s.push(u,{submissionId:null===(w=j.data)||void 0===w?void 0:w.submissionId,patientId:v})),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 25:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}},339:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n(211),o=n.n(a),i=n(212),u=n(206),c=n(9),l=n.n(c),s=n(244),d=n(215),p=n.n(d),f=n(849),m=n(210),b=n(214),v=n(231),g=n(232),h=n(207),y=n(217),x=n(237),S=n(218),j=n(220),w=n(208),O=n(246),C=n(824),E=n.n(C),T=n(825),k=n.n(T),P=n(826),B=n.n(P),I=n(398),L=n(340);t.default=l.a.memo((function(e){var t,n,a=e.storeKey,d=e.previousStep,C=e.nextStep,T=e.otherSteps,P=e.metadata,A=l.a.useMemo((function(){return!!P&&"recordYourCough"===P.currentLogic}),[P]),M=l.a.useMemo((function(){return!!P&&"recordYourBreath"===P.currentLogic}),[P]),D=g.object({audioCollection:g.object()}).defined(),z=p()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,R=Object(h.a)(),F=R.setDoGoBack,Y=R.setTitle,G=R.setSubtitle,V=Object(s.g)(),N=Object(s.h)(),U=Object(m.d)(Object(S.b)(a)),H=U.state,J=U.action,_=Object(f.a)().t,Q=Object(j.e)(),W=Object(j.d)(),Z=(null===N||void 0===N||null===(t=N.state)||void 0===t?void 0:t.isShortAudioCollection)||!1,q=null===H||void 0===H||null===(n=H[a])||void 0===n?void 0:n[null===P||void 0===P?void 0:P.currentLogic],K=q?q.recordingFile||q.uploadedFile:null,X=l.a.useRef(null),$=l.a.useRef(),ee=l.a.useRef(0),te=l.a.useState(!0),ne=Object(u.a)(te,2),re=ne[0],ae=ne[1],oe=l.a.useState(!1),ie=Object(u.a)(oe,2),ue=ie[0],ce=ie[1],le=l.a.useState(0),se=Object(u.a)(le,2),de=se[0],pe=se[1],fe=l.a.useState(0),me=Object(u.a)(fe,2),be=me[0],ve=me[1],ge=l.a.useState(!0),he=Object(u.a)(ge,2),ye=he[0],xe=he[1];l.a.useEffect((function(){var e=function(){!function e(t){ve(t/1e3),ee.current=t,$.current=setTimeout((function(){e(t+200)}),200)}(ee.current),setTimeout((function(){ce(!0)}),0)},t=function(e){e.target.currentTime>=e.target.duration&&(ve(0),ee.current=0),ce(!1),clearTimeout($.current)},n=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){if(t.target.duration!==1/0)e(t.target.duration);else{t.target.addEventListener("durationchange",(function n(){t.target.pause(),t.target.volume=1,t.target.currentTime=0,e(t.target.duration),t.target.removeEventListener("durationchange",n)})),t.target.volume=0,t.target.currentTime=86400}}));case 2:n=e.sent,t.target.volume=1,pe(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return X.current&&(X.current.addEventListener("playing",e),X.current.addEventListener("pause",t),X.current.addEventListener("loadedmetadata",n)),function(){X.current&&(X.current.removeEventListener("playing",e),X.current.removeEventListener("pause",t),X.current.removeEventListener("loadedmetadata",n))}}),[]);var Se=l.a.useMemo((function(){var e={fileUrl:"",fileName:"",fileSize:""};if(K&&void 0!==K.size)try{var t=URL.createObjectURL(K);e.fileUrl=t,e.fileName=K.name,e.fileSize=I.a.sizeAsHuman(K.size,!0)}catch(n){console.log("Error",n)}return e}),[K]),je=Se.fileUrl,we=Se.fileName,Oe=l.a.useCallback((function(){C&&(ae(!1),V.push(C))}),[V,C]),Ce=l.a.useCallback((function(){ae(!1),N.state&&N.state.from?A?V.push("/submit-steps/step-record/cough",{isShortAudioCollection:Z}):M?V.push("/submit-steps/step-record/breath"):V.push("/submit-steps/step-record/speech"):d?V.push(d):V.goBack()}),[N.state,d,V,A,M,Z]),Ee=l.a.useCallback((function(){ue&&X.current&&X.current.pause(),(null===H||void 0===H?void 0:H[a][null===P||void 0===P?void 0:P.currentLogic])&&(J(Object(r.a)({},null===P||void 0===P?void 0:P.currentLogic,{recordingFile:null,uploadFile:null})),Ce())}),[ue,H,a,P,J,Ce]),Te=l.a.useCallback((function(){ue||X.current&&X.current.play()}),[ue]),ke=l.a.useCallback((function(){ue&&X.current&&X.current.pause()}),[ue]),Pe=Object(b.e)({defaultValues:null===H||void 0===H?void 0:H[a],resolver:Object(v.a)(D)}),Be=Pe.handleSubmit,Ie=Pe.formState,Le=l.a.useState(null),Ae=Object(u.a)(Le,2),Me=Ae[0],De=Ae[1],ze=l.a.useState(null),Re=Object(u.a)(ze,2),Fe=Re[0],Ye=Re[1],Ge=Ie.isSubmitting;Object(c.useEffect)((function(){Fe||De(null)}),[Fe]),Object(c.useEffect)((function(){Object(w.a)(),G(_("recordingsListen:title")),Y(_(A?"recordingsListen:recordCough.header":M?"recordingsListen:recordBreath.header":"recordingsListen:recordSpeech.header")),F((function(){return Ce}))}),[Ce,A,M,F,Y,G,_]);var Ve=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,Object(O.a)({setSubmitError:function(e){return De(e?_(e):null)},state:H,captchaValue:Fe,action:J,nextStep:C,otherSteps:T,setActiveStep:ae,history:V,isShortAudioCollection:Z.toString()});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ne=l.a.useMemo((function(){var e={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(de){var t=Math.floor(Math.floor(be)/60),n=Math.floor(be)-60*t;e.currentTime="".concat(t,":").concat(n<10?"0".concat(n):n);var r=de>be?Math.ceil(de-be):0,a=Math.floor(r/60),o=r-60*a;e.remainingTime="-".concat(a,":").concat(o<10?"0".concat(o):o),e.trackProgress=Math.ceil(be/de*100)}return e}),[de,be]),Ue=Ne.currentTime,He=Ne.remainingTime,Je=Ne.trackProgress;return l.a.createElement(l.a.Fragment,null,je&&l.a.createElement("audio",{ref:X},l.a.createElement("source",{src:je})),l.a.createElement(L.MainContainer,null,l.a.createElement(L.Subtitle,null,_("recordingsListen:subtitle")),l.a.createElement(L.PlayerContainer,null,l.a.createElement(L.PlayerContainerTop,null,l.a.createElement(L.PlayerTopMiddle,null,l.a.createElement(L.TitleAudioName,null,we)),l.a.createElement(L.PlayerCrossContainer,{onClick:Ee},l.a.createElement(L.PlayerCross,{src:B.a}))),l.a.createElement(L.PlayerContainerBottom,null,l.a.createElement(L.PlayerBottomTop,null,l.a.createElement(L.PlayerBottomTrack,{playing:ue,progress:Je}),l.a.createElement(L.PlayerBottomThumb,{playing:ue,progress:Je})),l.a.createElement(L.PlayerBottomBottom,null,l.a.createElement(L.PlayerTimeIndicator,null,Ue),l.a.createElement(L.PlayerTimeIndicator,null,He)))),l.a.createElement(L.PlayerPlayContainer,{onClick:ue?ke:Te},l.a.createElement(L.PlayerPlayButton,null,l.a.createElement(L.PlayerPlay,{src:ue?k.a:E.a})))),(!Q&&re||Q&&j.b.includes(W)&&"recordYourSpeech"!==(null===P||void 0===P?void 0:P.currentLogic)&&!Z||Q&&!j.b.includes(W)&&"recordYourBreath"!==(null===P||void 0===P?void 0:P.currentLogic))&&l.a.createElement(z,null,l.a.createElement(y.a,{invert:!0,leftLabel:_("recordingsListen:next"),leftHandler:Oe})),(Q&&!j.b.includes(W)&&"recordYourBreath"===(null===P||void 0===P?void 0:P.currentLogic)||Q&&j.b.includes(W)&&"recordYourSpeech"===(null===P||void 0===P?void 0:P.currentLogic)||Q&&Z&&"recordYourCough"===(null===P||void 0===P?void 0:P.currentLogic))&&l.a.createElement(z,null,"Colombia"!==W&&l.a.createElement(x.a,{onChange:Ye,setRecaptchaAvailable:xe}),Me&&l.a.createElement(L.TempBeforeSubmitError,null,Me),l.a.createElement(y.a,{invert:!0,leftLabel:_(Ge?"questionary:submitting":"beforeSubmit:submitButton"),leftDisabled:"Colombia"!==W?Ge||ye&&!Fe:Ge,leftHandler:Be(Ve)})))}))},340:function(e,t,n){"use strict";n.r(t),n.d(t,"MainContainer",(function(){return C})),n.d(t,"PlayerContainer",(function(){return E})),n.d(t,"PlayerContainerTop",(function(){return T})),n.d(t,"PlayerPlayContainer",(function(){return k})),n.d(t,"PlayerCrossContainer",(function(){return P})),n.d(t,"PlayerContainerBottom",(function(){return B})),n.d(t,"PlayerTopMiddle",(function(){return I})),n.d(t,"PlayerBottomTop",(function(){return L})),n.d(t,"PlayerBottomTrack",(function(){return A})),n.d(t,"PlayerBottomThumb",(function(){return M})),n.d(t,"PlayerBottomBottom",(function(){return D})),n.d(t,"Subtitle",(function(){return z})),n.d(t,"TitleAudioName",(function(){return R})),n.d(t,"PlayerTimeIndicator",(function(){return F})),n.d(t,"PlayerPlayButton",(function(){return Y})),n.d(t,"PlayerPlay",(function(){return G})),n.d(t,"PlayerCross",(function(){return V})),n.d(t,"BeforeSubmitText",(function(){return N})),n.d(t,"TempBeforeSubmitError",(function(){return U}));var r=n(205),a=n(204),o=n(213);function i(){var e=Object(r.a)(["\ncolor: ",";\n  text-align: center;\n  margin-bottom: 16px;\n"]);return i=function(){return e},e}function u(){var e=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 14px;\n  line-height: 20px;\n  color: ",";\n  margin: 0;\n"]);return u=function(){return e},e}function c(){var e=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["\n  width: 33px;\n  height: 40px;\n"]);return l=function(){return e},e}function s(){var e=Object(r.a)(["\n  width: 108px;\n  height: 108px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  opacity: 0.5;\n  margin-top: 8px;\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  color: ",";\n  font-weight: 400;\n"]);return d=function(){return e},e}function p(){var e=Object(r.a)(["\n  color: ",';\n  font-size: 14px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n']);return p=function(){return e},e}function f(){var e=Object(r.a)(["\n  color: ",';\n  font-size: 18px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n  white-space: pre-wrap;\n  width: 100%;\n  margin-left: 20px;\n  margin-bottom: 60px;\n  \n  @media screen and (',") {\n    max-width: 592px;\n    margin-right: auto; \n    margin-left: auto; \n  }\n"]);return f=function(){return e},e}function m(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return m=function(){return e},e}function b(){var e=Object(r.a)(["\n  position: absolute;\n  top: -6px;\n  left: ",";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return b=function(){return e},e}function v(){var e=Object(r.a)(["\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: ",";\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: 0;\n    height: 4px;\n    background-color: ",";\n    width: ",";\n    ","\n\n  }\n"]);return v=function(){return e},e}function g(){var e=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return g=function(){return e},e}function h(){var e=Object(r.a)(["\n  flex: 1;\n"]);return h=function(){return e},e}function y(){var e=Object(r.a)([""]);return y=function(){return e},e}function x(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n"]);return x=function(){return e},e}function S(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 76px;\n"]);return S=function(){return e},e}function j(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return j=function(){return e},e}function w(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 60px 20px 0px 20px;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(r.a)(["\n  margin-bottom: 77px;\n\n  @media screen and (",") {\n    max-width: 470px;\n    margin: auto;\n  }\n"]);return O=function(){return e},e}var C=a.default.div(O(),(function(e){return e.theme.breakpoints.tablet})),E=a.default.div(w(),(function(e){return e.theme.breakpoints.tablet})),T=a.default.div(j()),k=a.default.div(S()),P=a.default.div(x()),B=a.default.div(y()),I=a.default.div(h()),L=a.default.div(g()),A=a.default.div(v(),o.a.purple_10,o.a.purple,(function(e){return e.progress?"".concat(e.progress,"%"):"0%"}),(function(e){return e.playing?"transition: width 0.2s linear;":""})),M=a.default.div(b(),(function(e){return e.progress?"".concat(e.progress,"%"):"0px"}),o.a.purple,(function(e){return e.playing?"transition: left 0.2s linear;":""})),D=a.default.div(m()),z=a.default.h2(f(),(function(e){return e.theme.colors.mineShaft}),(function(e){return e.theme.breakpoints.tablet})),R=a.default.p(p(),(function(e){return e.theme.colors.mineShaft})),F=a.default.p(d(),o.a.mineShaft),Y=a.default.div(s(),o.a.purple_10),G=a.default.img(l()),V=a.default.img(c()),N=a.default.p(u(),(function(e){return e.theme.colors.darkGray_70})),U=Object(a.default)(N)(i(),(function(e){return e.theme.colors.red}))},398:function(e,t,n){"use strict";t.a={sizeAsHuman:function(e,t){var n=t?1e3:1024;if(Math.abs(e)<n)return"".concat(e," B");var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1;do{e/=n,++a}while(Math.abs(e)>=n&&a<r.length-1);return"".concat(e.toFixed(1)," ").concat(r[a])},blobToFile:function(e,t){var n=e;return n.lastModifiedDate=new Date,n.name=t,e}}},824:function(e,t,n){e.exports=n.p+"static/media/play.6f092911.svg"},825:function(e,t,n){e.exports=n.p+"static/media/pause.d55011c8.svg"},826:function(e,t,n){e.exports=n.p+"static/media/cross.13e841fb.svg"}}]);
//# sourceMappingURL=15.01ac6c02.chunk.js.map
(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[15,72],{207:function(e,t,n){"use strict";var r=n(9),a=n.n(r),o=n(242);t.a=function(){var e=a.a.useContext(o.a),t=e.title,n=e.setTitle,r=e.subtitle,i=e.setSubtitle,u=e.type,c=e.setType,l=e.logoSize,s=e.setLogoSize,d=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:i,type:u,setType:c,logoSize:l,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:d}}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(9),a=n.n(r),o=n(233),i=n(205);function u(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return e},e}var c=n(204).default.div(u(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),l=a.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftLabel,i=e.leftDisabled,u=e.leftHandler,l=e.rightLabel,s=e.rightDisabled,d=e.rightHandler;return a.a.createElement(c,null,a.a.createElement(o.a,{dark:n,disabled:i,onClick:u},r),l&&d&&a.a.createElement(o.a,{dark:!n,disabled:s,onClick:d},l))})),s=a.a.memo(l)},218:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(216),a=n(234),o=n(240);function i(e){return function(t,n){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},e,Object(a.a)(Object(a.a)({},t[e]),n)))}}function u(){return function(e){var t={welcome:{language:e.welcome.language}};return o.a&&(t.welcome.country=e.welcome.country,t.welcome.region=e.welcome.region,t.welcome.hospitalId=e.welcome.hospitalId),t}}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(251),a=n.n(r).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return a}},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(239),a=n(9),o=n.n(a),i=n(205),u=n(204),c=n(213);function l(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var s=u.default.button(l(),(function(e){var t=e.dark,n=e.disabled?c.a.purple_50:c.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(c.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(c.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),d=o.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return o.a.createElement(s,Object.assign({type:"button"},n),t)}))},235:function(e,t,n){"use strict";var r=n(237);t.a=function(){return{isBrowser:r.isBrowser?Object(r.deviceDetect)():null,isMobile:r.isMobile?Object(r.deviceDetect)():null,isSmartTv:r.isSmartTV?Object(r.deviceDetect)():null,isConsole:r.isConsole?Object(r.deviceDetect)():null,isTablet:r.isTablet?Object(r.deviceDetect)():null,isWearable:r.isWearable?Object(r.deviceDetect)():null}}},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(9),a=n.n(r),o=n(260),i=n(850),u=n(17),c=n(205);function l(){var e=Object(c.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return l=function(){return e},e}var s=n(204).default.div(l()),d=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,r=Object(i.a)().i18n;return a.a.createElement(s,null,a.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),u.a("Error on ReCAPTCHA")},hl:r.language}))}},246:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return b}));var r=n(211),a=n.n(r),o=n(212),i=n(229),u=n(220),c=n(235);function l(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,l,s,d,p,f,m,b,v,h,g,y,x,S,j,w,O,C,E,k,T,P,B,I,L,A,M,D;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,u=t.nextStep,l=t.setActiveStep,s=t.history,e.prev=1,n(null),b=r.welcome,v=b.language,h=b.country,g=b.region,y=b.patientId,x=b.hospitalId,S=r["submit-steps"],j=S.vaccine,w=S.ageGroup,O=S.gender,C=S.ethnicity,E=S.biologicalSex,k=S.smokeLastSixMonths,T=S.currentSymptoms,P=S.symptomsStartedDate,B=S.currentRespiratoryCondition,I=S.currentMedicalCondition,(L=new FormData).append("device",JSON.stringify(Object(c.a)())),L.append("language",v),L.append("country",h),g&&L.append("region",g),x&&L.append("hospitalId",x),window.sourceCampaign&&L.append("source",window.sourceCampaign),j&&L.append("vaccine",j),w&&L.append("ageGroup",w),(A=O.other||O.selected[0])&&L.append("gender",A),C&&L.append("ethnicity",C),E&&L.append("biologicalSex",E),k&&L.append("smokeLastSixMonths",k),(null===T||void 0===T||null===(d=T.selected)||void 0===d?void 0:d.length)>0&&L.append("currentSymptoms",T.selected.join(",")),P&&L.append("symptomsStartedDate",P),(null===B||void 0===B||null===(p=B.selected)||void 0===p?void 0:p.length)>0&&L.append("currentRespiratoryCondition",B.selected.join(",")),(null===I||void 0===I||null===(f=I.selected)||void 0===f?void 0:f.length)>0&&L.append("currentMedicalCondition",I.selected.join(",")),(null===T||void 0===T?void 0:T.other)&&L.append("otherSymptoms",null===T||void 0===T?void 0:T.other),(null===B||void 0===B?void 0:B.other)&&L.append("otherRespiratoryConditions",null===B||void 0===B?void 0:B.other),(null===I||void 0===I?void 0:I.other)&&L.append("otherMedicalConditions",null===I||void 0===I?void 0:I.other),o&&L.append("captchaValue",o),e.next=29,i.a.post("/patient/".concat(y,"/questionary"),L,{headers:{"Content-Type":"multipart/form-data; boundary=Questionary"}});case 29:M=e.sent,u&&(null===(m=M.data)||void 0===m?void 0:m.submissionId)&&(l(!1),s.push(u,{submissionId:null===(D=M.data)||void 0===D?void 0:D.submissionId,patientId:y})),e.next=37;break;case 33:e.prev=33,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 37:case"end":return e.stop()}}),e,null,[[1,33]])})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,l,s,d,p,f,m,b,v,h,g,y,x,S,j,w,O,C,E,k;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,u=t.nextStep,l=t.setActiveStep,s=t.history,e.prev=1,n(null),f=r.welcome,m=f.language,b=f.country,v=f.region,h=f.patientId,g=f.hospitalId,y=r["submit-steps"],x=y.ageGroup,S=y.gender,j=y.currentSymptoms,w=y.symptomsStartedDate,(O=new FormData).append("device",JSON.stringify(Object(c.a)())),O.append("language",m),O.append("country",b),v&&O.append("region",v),g&&O.append("hospitalId",g),window.sourceCampaign&&O.append("source",window.sourceCampaign),x&&O.append("ageGroup",x),(C=S.other||S.selected[0])&&O.append("gender",C),(null===j||void 0===j||null===(d=j.selected)||void 0===d?void 0:d.length)>0&&O.append("currentSymptoms",j.selected.join(",")),w&&O.append("symptomsStartedDate",w),o&&O.append("captchaValue",o),e.next=20,i.a.post("/patient/".concat(h,"/shortQuestionary"),O,{headers:{"Content-Type":"multipart/form-data; boundary=ShortQuestionary"}});case 20:E=e.sent,u&&(null===(p=E.data)||void 0===p?void 0:p.submissionId)&&(l(!1),s.push(u,{submissionId:null===(k=E.data)||void 0===k?void 0:k.submissionId,patientId:h})),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 28:case"end":return e.stop()}}),e,null,[[1,24]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(a.a.mark((function e(t){var n,r,o,l,s,d,p,f,m,b,v,h,g,y,x,S,j,w,O,C,E,k,T,P,B,I;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,l=t.nextStep,s=t.otherSteps,d=t.setActiveStep,p=t.history,f=t.isShortAudioCollection,e.prev=1,n(null),b=r.welcome,v=b.language,h=b.country,g=b.region,y=b.patientId,x=b.hospitalId,S=r["submit-steps"],j=S.recordYourCough,w=S.recordYourBreath,O=S.recordYourSpeech,(C=new FormData).append("device",JSON.stringify(Object(c.a)())),C.append("language",v),C.append("country",h),g&&C.append("region",g),x&&C.append("hospitalId",x),window.sourceCampaign&&C.append("source",window.sourceCampaign),j&&(E=j.recordingFile||j.uploadedFile,C.append("cough",E,E.name||"filename.wav")),w&&(k=w.recordingFile||w.uploadedFile,C.append("breath",k,k.name||"filename_breath.wav")),u.b.includes(h)&&O&&(T=O.recordingFile||O.uploadedFile,C.append("voice",T,T.name||"filename_voice.wav")),o&&C.append("captchaValue",o),C.append("shortAudioCollection",f||"false"),e.next=19,i.a.post("/patient/".concat(y,"/audioCollection"),C,{headers:{"Content-Type":"multipart/form-data; boundary=AudioCollection"}});case 19:P=e.sent,f&&(null===s||void 0===s?void 0:s.isShortAudioStep)?(d(!1),p.push(null===s||void 0===s?void 0:s.isShortAudioStep,{submissionId:null===(B=P.data)||void 0===B?void 0:B.submissionId,patientId:y})):l&&(null===(m=P.data)||void 0===m?void 0:m.submissionId)&&(d(!1),p.push(l,{submissionId:null===(I=P.data)||void 0===I?void 0:I.submissionId,patientId:y})),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 27:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,l,s,d,p,f,m,b,v,h,g,y,x,S,j,w;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,u=t.nextStep,l=t.setActiveStep,s=t.history,e.prev=1,n(null),p=r.welcome,f=p.language,m=p.country,b=p.region,v=p.patientId,h=p.hospitalId,g=r["submit-steps"],y=g.patientAntigenTestResult,x=g.patientPcrTestResult,(S=new FormData).append("device",JSON.stringify(Object(c.a)())),S.append("language",f),S.append("country",m),b&&S.append("region",b),h&&S.append("hospitalId",h),window.sourceCampaign&&S.append("source",window.sourceCampaign),y&&S.append("patientAntigenTestResult",y),x&&S.append("patientPcrTestResult",x),o&&S.append("captchaValue",o),e.next=17,i.a.post("/patient/".concat(v,"/testResult"),S,{headers:{"Content-Type":"multipart/form-data; boundary=testResult"}});case 17:j=e.sent,u&&(null===(d=j.data)||void 0===d?void 0:d.submissionId)&&(l(!1),s.push(u,{submissionId:null===(w=j.data)||void 0===w?void 0:w.submissionId,patientId:v})),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 25:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(237);function a(e){return new Promise((function(t){e.duration===1/0||r.isSafari&&!(r.isSafari&&e.duration>0)?(e.addEventListener("durationchange",(function(){e.remove(),t(e.duration)})),e.currentTime=86400,e.play()):t(e.duration)}))}},340:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n(211),o=n.n(a),i=n(212),u=n(206),c=n(9),l=n.n(c),s=n(244),d=n(215),p=n.n(d),f=n(850),m=n(210),b=n(214),v=n(231),h=n(232),g=n(207),y=n(217),x=n(238),S=n(218),j=n(220),w=n(208),O=n(246),C=n(281),E=n(825),k=n.n(E),T=n(826),P=n.n(T),B=n(827),I=n.n(B),L=n(399),A=n(341);t.default=l.a.memo((function(e){var t,n,a=e.storeKey,d=e.previousStep,E=e.nextStep,T=e.otherSteps,B=e.metadata,M=l.a.useMemo((function(){return!!B&&"recordYourCough"===B.currentLogic}),[B]),D=l.a.useMemo((function(){return!!B&&"recordYourBreath"===B.currentLogic}),[B]),z=h.object({audioCollection:h.object()}).defined(),R=p()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,F=Object(g.a)(),Y=F.setDoGoBack,G=F.setTitle,V=F.setSubtitle,N=Object(s.g)(),U=Object(s.h)(),H=Object(m.d)(Object(S.b)(a)),J=H.state,_=H.action,Q=Object(f.a)().t,W=Object(j.e)(),Z=Object(j.d)(),q=(null===U||void 0===U||null===(t=U.state)||void 0===t?void 0:t.isShortAudioCollection)||!1,K=null===J||void 0===J||null===(n=J[a])||void 0===n?void 0:n[null===B||void 0===B?void 0:B.currentLogic],X=K?K.recordingFile||K.uploadedFile:null,$=l.a.useRef(null),ee=l.a.useRef(),te=l.a.useRef(0),ne=l.a.useState(!0),re=Object(u.a)(ne,2),ae=re[0],oe=re[1],ie=l.a.useState(!1),ue=Object(u.a)(ie,2),ce=ue[0],le=ue[1],se=l.a.useState(0),de=Object(u.a)(se,2),pe=de[0],fe=de[1],me=l.a.useState(0),be=Object(u.a)(me,2),ve=be[0],he=be[1],ge=l.a.useState(!0),ye=Object(u.a)(ge,2),xe=ye[0],Se=ye[1];l.a.useEffect((function(){var e=function(){!function e(t){he(t/1e3),te.current=t,ee.current=setTimeout((function(){e(t+200)}),200)}(te.current),setTimeout((function(){le(!0)}),0)},t=function(e){e.target.currentTime>=e.target.duration&&(he(0),te.current=0),le(!1),clearTimeout(ee.current)},n=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(t.target);case 2:n=e.sent,fe(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return $.current&&($.current.addEventListener("playing",e),$.current.addEventListener("pause",t),$.current.addEventListener("loadedmetadata",n)),function(){$.current&&($.current.removeEventListener("playing",e),$.current.removeEventListener("pause",t),$.current.removeEventListener("loadedmetadata",n))}}),[]);var je=l.a.useMemo((function(){var e={fileUrl:"",fileName:"",fileSize:""};if(X&&void 0!==X.size)try{var t=URL.createObjectURL(X);e.fileUrl=t,e.fileName=X.name,e.fileSize=L.a.sizeAsHuman(X.size,!0)}catch(n){console.log("Error",n)}return e}),[X]),we=je.fileUrl,Oe=je.fileName,Ce=l.a.useCallback((function(){E&&(oe(!1),N.push(E))}),[N,E]),Ee=l.a.useCallback((function(){oe(!1),U.state&&U.state.from?M?N.push("/submit-steps/step-record/cough",{isShortAudioCollection:q}):D?N.push("/submit-steps/step-record/breath"):N.push("/submit-steps/step-record/speech"):d?N.push(d):N.goBack()}),[U.state,d,N,M,D,q]),ke=l.a.useCallback((function(){ce&&$.current&&$.current.pause(),(null===J||void 0===J?void 0:J[a][null===B||void 0===B?void 0:B.currentLogic])&&(_(Object(r.a)({},null===B||void 0===B?void 0:B.currentLogic,{recordingFile:null,uploadFile:null})),Ee())}),[ce,J,a,B,_,Ee]),Te=l.a.useCallback((function(){ce||$.current&&$.current.play()}),[ce]),Pe=l.a.useCallback((function(){ce&&$.current&&$.current.pause()}),[ce]),Be=Object(b.e)({defaultValues:null===J||void 0===J?void 0:J[a],resolver:Object(v.a)(z)}),Ie=Be.handleSubmit,Le=Be.formState,Ae=l.a.useState(null),Me=Object(u.a)(Ae,2),De=Me[0],ze=Me[1],Re=l.a.useState(null),Fe=Object(u.a)(Re,2),Ye=Fe[0],Ge=Fe[1],Ve=Le.isSubmitting;Object(c.useEffect)((function(){Ye||ze(null)}),[Ye]),Object(c.useEffect)((function(){Object(w.a)(),V(Q("recordingsListen:title")),G(Q(M?"recordingsListen:recordCough.header":D?"recordingsListen:recordBreath.header":"recordingsListen:recordSpeech.header")),Y((function(){return Ee}))}),[Ee,M,D,Y,G,V,Q]);var Ne=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,Object(O.a)({setSubmitError:function(e){return ze(e?Q(e):null)},state:J,captchaValue:Ye,action:_,nextStep:E,otherSteps:T,setActiveStep:oe,history:N,isShortAudioCollection:q.toString()});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ue=l.a.useMemo((function(){var e={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(pe){var t=Math.floor(Math.floor(ve)/60),n=Math.floor(ve)-60*t;e.currentTime="".concat(t,":").concat(n<10?"0".concat(n):n);var r=pe>ve?Math.ceil(pe-ve):0,a=Math.floor(r/60),o=r-60*a;e.remainingTime="-".concat(a,":").concat(o<10?"0".concat(o):o),e.trackProgress=Math.ceil(ve/pe*100)}return e}),[pe,ve]),He=Ue.currentTime,Je=Ue.remainingTime,_e=Ue.trackProgress;return l.a.createElement(l.a.Fragment,null,we&&l.a.createElement("audio",{ref:$},l.a.createElement("source",{src:we})),l.a.createElement(A.MainContainer,null,l.a.createElement(A.Subtitle,null,Q("recordingsListen:subtitle")),l.a.createElement(A.PlayerContainer,null,l.a.createElement(A.PlayerContainerTop,null,l.a.createElement(A.PlayerTopMiddle,null,l.a.createElement(A.TitleAudioName,null,Oe)),l.a.createElement(A.PlayerCrossContainer,{onClick:ke},l.a.createElement(A.PlayerCross,{src:I.a}))),l.a.createElement(A.PlayerContainerBottom,null,l.a.createElement(A.PlayerBottomTop,null,l.a.createElement(A.PlayerBottomTrack,{playing:ce,progress:_e}),l.a.createElement(A.PlayerBottomThumb,{playing:ce,progress:_e})),l.a.createElement(A.PlayerBottomBottom,null,l.a.createElement(A.PlayerTimeIndicator,null,He),l.a.createElement(A.PlayerTimeIndicator,null,Je)))),l.a.createElement(A.PlayerPlayContainer,{onClick:ce?Pe:Te},l.a.createElement(A.PlayerPlayButton,null,l.a.createElement(A.PlayerPlay,{src:ce?P.a:k.a})))),(!W&&ae||W&&j.b.includes(Z)&&"recordYourSpeech"!==(null===B||void 0===B?void 0:B.currentLogic)&&!q||W&&!j.b.includes(Z)&&"recordYourBreath"!==(null===B||void 0===B?void 0:B.currentLogic))&&l.a.createElement(R,null,l.a.createElement(y.a,{invert:!0,leftLabel:Q("recordingsListen:next"),leftHandler:Ce})),(W&&!j.b.includes(Z)&&"recordYourBreath"===(null===B||void 0===B?void 0:B.currentLogic)||W&&j.b.includes(Z)&&"recordYourSpeech"===(null===B||void 0===B?void 0:B.currentLogic)||W&&q&&"recordYourCough"===(null===B||void 0===B?void 0:B.currentLogic))&&l.a.createElement(R,null,"Colombia"!==Z&&l.a.createElement(x.a,{onChange:Ge,setRecaptchaAvailable:Se}),De&&l.a.createElement(A.TempBeforeSubmitError,null,De),l.a.createElement(y.a,{invert:!0,leftLabel:Q(Ve?"questionary:submitting":"beforeSubmit:submitButton"),leftDisabled:"Colombia"!==Z?Ve||xe&&!Ye:Ve,leftHandler:Ie(Ne)})))}))},341:function(e,t,n){"use strict";n.r(t),n.d(t,"MainContainer",(function(){return C})),n.d(t,"PlayerContainer",(function(){return E})),n.d(t,"PlayerContainerTop",(function(){return k})),n.d(t,"PlayerPlayContainer",(function(){return T})),n.d(t,"PlayerCrossContainer",(function(){return P})),n.d(t,"PlayerContainerBottom",(function(){return B})),n.d(t,"PlayerTopMiddle",(function(){return I})),n.d(t,"PlayerBottomTop",(function(){return L})),n.d(t,"PlayerBottomTrack",(function(){return A})),n.d(t,"PlayerBottomThumb",(function(){return M})),n.d(t,"PlayerBottomBottom",(function(){return D})),n.d(t,"Subtitle",(function(){return z})),n.d(t,"TitleAudioName",(function(){return R})),n.d(t,"PlayerTimeIndicator",(function(){return F})),n.d(t,"PlayerPlayButton",(function(){return Y})),n.d(t,"PlayerPlay",(function(){return G})),n.d(t,"PlayerCross",(function(){return V})),n.d(t,"BeforeSubmitText",(function(){return N})),n.d(t,"TempBeforeSubmitError",(function(){return U}));var r=n(205),a=n(204),o=n(213);function i(){var e=Object(r.a)(["\ncolor: ",";\n  text-align: center;\n  margin-bottom: 16px;\n"]);return i=function(){return e},e}function u(){var e=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 14px;\n  line-height: 20px;\n  color: ",";\n  margin: 0;\n"]);return u=function(){return e},e}function c(){var e=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["\n  width: 33px;\n  height: 40px;\n"]);return l=function(){return e},e}function s(){var e=Object(r.a)(["\n  width: 108px;\n  height: 108px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  opacity: 0.5;\n  margin-top: 8px;\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  color: ",";\n  font-weight: 400;\n"]);return d=function(){return e},e}function p(){var e=Object(r.a)(["\n  color: ",';\n  font-size: 14px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n']);return p=function(){return e},e}function f(){var e=Object(r.a)(["\n  color: ",';\n  font-size: 18px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n  white-space: pre-wrap;\n  width: 100%;\n  margin-left: 20px;\n  margin-bottom: 60px;\n  \n  @media screen and (',") {\n    max-width: 592px;\n    margin-right: auto; \n    margin-left: auto; \n  }\n"]);return f=function(){return e},e}function m(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return m=function(){return e},e}function b(){var e=Object(r.a)(["\n  position: absolute;\n  top: -6px;\n  left: ",";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return b=function(){return e},e}function v(){var e=Object(r.a)(["\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: ",";\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: 0;\n    height: 4px;\n    background-color: ",";\n    width: ",";\n    ","\n\n  }\n"]);return v=function(){return e},e}function h(){var e=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return h=function(){return e},e}function g(){var e=Object(r.a)(["\n  flex: 1;\n"]);return g=function(){return e},e}function y(){var e=Object(r.a)([""]);return y=function(){return e},e}function x(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n"]);return x=function(){return e},e}function S(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 76px;\n"]);return S=function(){return e},e}function j(){var e=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return j=function(){return e},e}function w(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 60px 20px 0px 20px;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(r.a)(["\n  margin-bottom: 77px;\n\n  @media screen and (",") {\n    max-width: 470px;\n    margin: auto;\n  }\n"]);return O=function(){return e},e}var C=a.default.div(O(),(function(e){return e.theme.breakpoints.tablet})),E=a.default.div(w(),(function(e){return e.theme.breakpoints.tablet})),k=a.default.div(j()),T=a.default.div(S()),P=a.default.div(x()),B=a.default.div(y()),I=a.default.div(g()),L=a.default.div(h()),A=a.default.div(v(),o.a.purple_10,o.a.purple,(function(e){return e.progress?"".concat(e.progress,"%"):"0%"}),(function(e){return e.playing?"transition: width 0.2s linear;":""})),M=a.default.div(b(),(function(e){return e.progress?"".concat(e.progress,"%"):"0px"}),o.a.purple,(function(e){return e.playing?"transition: left 0.2s linear;":""})),D=a.default.div(m()),z=a.default.h2(f(),(function(e){return e.theme.colors.mineShaft}),(function(e){return e.theme.breakpoints.tablet})),R=a.default.p(p(),(function(e){return e.theme.colors.mineShaft})),F=a.default.p(d(),o.a.mineShaft),Y=a.default.div(s(),o.a.purple_10),G=a.default.img(l()),V=a.default.img(c()),N=a.default.p(u(),(function(e){return e.theme.colors.darkGray_70})),U=Object(a.default)(N)(i(),(function(e){return e.theme.colors.red}))},399:function(e,t,n){"use strict";t.a={sizeAsHuman:function(e,t){var n=t?1e3:1024;if(Math.abs(e)<n)return"".concat(e," B");var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1;do{e/=n,++a}while(Math.abs(e)>=n&&a<r.length-1);return"".concat(e.toFixed(1)," ").concat(r[a])},blobToFile:function(e,t){var n=e;return n.lastModifiedDate=new Date,n.name=t,e}}},825:function(e,t,n){e.exports=n.p+"static/media/play.6f092911.svg"},826:function(e,t,n){e.exports=n.p+"static/media/pause.d55011c8.svg"},827:function(e,t,n){e.exports=n.p+"static/media/cross.13e841fb.svg"}}]);
//# sourceMappingURL=15.ec57badb.chunk.js.map
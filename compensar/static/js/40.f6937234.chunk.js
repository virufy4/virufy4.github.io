(this["webpackJsonpcompensar-app"]=this["webpackJsonpcompensar-app"]||[]).push([[40],{255:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return p}));var o=n(240),r=n(207),a="/submit-steps";function c(e){return[{path:"",componentPath:"Welcome/Step2",props:{storeKey:e,nextStep:"".concat("/welcome","/step-3")}},{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:e,previousStep:"".concat("/welcome"),nextStep:"".concat("/welcome","/step-4")}}]}function u(e){return[{path:"/step-4",componentPath:"Welcome/Step4",props:{storeKey:e,previousStep:"".concat("/welcome","/step-3"),nextStep:"".concat("/welcome","/step-5")}},{path:"/step-5",componentPath:"Welcome/Step5",props:{storeKey:e,previousStep:"".concat("/welcome","/step-4"),nextStep:"/submit-steps/step-record/cough"}}]}function p(e){return[].concat(Object(o.a)(function(e){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:e,previousStep:"/welcome/step-5",nextStep:"".concat(a,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(a,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough"}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:e,previousStep:"".concat(a,"/step-record/cough"),nextStep:"".concat(a,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:e,previousStep:"".concat(a,"/step-record/cough"),nextStep:"".concat(a,"/questionary/step1"),otherSteps:{isShortAudioStep:"".concat(a,"/thank-you")},metadata:{currentLogic:"recordYourCough"}}}]}(e)),Object(o.a)(function(e){var t={total:2,progressCurrent:2,progressTotal:2};return[{path:"/questionary/step1",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1"),props:{storeKey:e,previousStep:"".concat(a,"/step-listen/cough"),nextStep:"".concat(a,"/questionary/step2"),metadata:Object(r.a)({},t)}},{path:"/questionary/step2",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step2"),props:{storeKey:e,previousStep:"".concat(a,"/questionary/step1"),nextStep:"".concat(a,"/questionary/step3"),metadata:Object(r.a)({current:1},t)}},{path:"/questionary/step3",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step3"),props:{storeKey:e,previousStep:"".concat(a,"/questionary/step2"),nextStep:"".concat(a,"/thank-you"),metadata:Object(r.a)({current:2},t)}}]}(e)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:e,previousStep:"".concat(a,"/before-submit"),nextStep:"/welcome"}}])}},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(196),r=n(9),a=n.n(r),c=n(81),u=n(316),p=n(214),i=n(199),s=n(195),l=n(194);function d(){var e=Object(s.a)(["\n  padding-bottom: 40px; \n\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return d=function(){return e},e}var h=l.default.div(d(),(function(e){return e.theme.breakpoints.tablet}));function m(){var e=Object(s.a)(["\n  margin-bottom: 24px;\n"]);return m=function(){return e},e}function f(){var e=Object(s.a)(["\n  height: 100%;\n"]);return f=function(){return e},e}function S(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return S=function(){return e},e}var b=l.default.div(S()),v=l.default.div(f()),g=l.default.div(m()),y=Object(c.a)((function(e){var t=e.container;return n(267)("./".concat(t))}),{fallback:a.a.createElement("div",null,"Loading ...")});var j=a.a.memo((function(e){var t=e.steps,n=e.children,r=Object(p.i)(),c=Object(p.h)(),s=a.a.useState(!1),l=Object(o.a)(s,2),d=l[0],m=l[1],f=a.a.useMemo((function(){var e=r.url.replace(/\/$/,"");return t.map((function(t){return e+t.path}))}),[r.url,t]);return a.a.useEffect((function(){m(!0)}),[]),a.a.createElement(i.a,null,a.a.createElement(b,null,a.a.createElement(v,null,d&&a.a.createElement(u.a,{location:c,timing:"ease-in-out",duration:500,pathList:f},t.map((function(e){return a.a.createElement(p.b,{key:e.componentPath,exact:!0,path:Array.isArray(e.path)?e.path.map((function(e){return r.path+e})):r.path+e.path,render:function(){return a.a.createElement(h,null,a.a.createElement(y,Object.assign({container:e.componentPath},e.props)))}})})))),a.a.createElement(g,{id:"wizard-buttons"},n)))}))},277:function(e,t,n){"use strict";n.r(t);var o=n(197),r=n(9),a=n.n(r),c=n(199),u=n(214),p=n(256),i=n(255);Object(c.c)(window.localStorage);var s="submit-steps";Object(c.b)(Object(o.a)({},s,{recordYourCough:{recordingFile:null,uploadedFile:null},recordYourBreath:{recordingFile:null,uploadedFile:null},recordYourSpeech:{recordingFile:null,uploadedFile:null}}),{name:"compensar-app-wizard"});var l=function(){var e=Object(c.d)().state,t=Object(u.g)();return a.a.useEffect((function(){var n=function(e){var t,n=null;if(!(null===(t=e.welcome)||void 0===t?void 0:t.patientId)&&e[s]){var o=e[s],r=o.recordYourCough,a=o.recordYourSpeech,c=o.recordYourBreath,u=[];if(r){var p=r.recordingFile,i=r.uploadedFile;p&&u.push({file:p,route:"/step-record/cough"}),i&&u.push({file:i,route:"/step-manual-upload/cough"})}if(c){var l=c.recordingFile,d=c.uploadedFile;l&&u.push({file:l,route:"/step-record/breath"}),d&&u.push({file:d,route:"/step-manual-upload/breath"})}if(a){var h=r.recordingFile,m=r.uploadedFile;h&&u.push({file:h,route:"/step-record/speech"}),m&&u.push({file:m,route:"/step-manual-upload/speech"})}var f=u.find((function(e){return!(!(t=e.file)||void 0!==t.size);var t}));f&&(n=f.route)}return n}(e);n&&t.push("/".concat(s).concat(n))}),[]),null},d=Object(i.a)(s);t.default=a.a.memo((function(){return a.a.createElement(p.a,{steps:d},a.a.createElement(l,null))}))}}]);
//# sourceMappingURL=40.f6937234.chunk.js.map
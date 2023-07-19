(this["webpackJsonpmtd-app"]=this["webpackJsonpmtd-app"]||[]).push([[21,35],{263:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u}));var o=n(222),r="/submit-steps";function a(e){return[{path:"",componentPath:"Welcome/Step1",props:{storeKey:e,nextStep:"".concat("/welcome","/step-2")}},{path:"/step-2",componentPath:"Welcome/Step2",props:{storeKey:e,previousStep:"".concat("/welcome"),nextStep:"".concat("/welcome","/step-3")}},{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:e,previousStep:"".concat("/welcome","/step-2"),nextStep:"/submit-steps/step-record/cough"}}]}function c(e){return[]}function u(e){return[].concat(Object(o.a)(function(e){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:e,previousStep:"/welcome/step-3",nextStep:"".concat(r,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(r,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough"}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/cough"),nextStep:"".concat(r,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/cough"),nextStep:"".concat(r,"/prediction-result"),otherSteps:{isShortAudioStep:"".concat(r,"/thank-you")},metadata:{currentLogic:"recordYourCough"}}}]}(e)),Object(o.a)(function(e){return[{path:"/prediction-result",componentPath:"".concat("SubmitSteps","/").concat("Submission","/PredictionResult"),props:{storeKey:e,previousStep:"".concat(r,"/step-listen/cough"),nextStep:"".concat(r,"/thank-you")}}]}(e)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:e,previousStep:"".concat(r,"/before-submit"),nextStep:"/welcome"}}])}},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(185),r=n(6),a=n.n(r),c=n(76),u=n(327),p=n(210),i=n(190),s=n(183),l=n(182);function d(){var e=Object(s.a)(["\n  padding-bottom: 40px; \n\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return d=function(){return e},e}var h=l.default.div(d(),(function(e){return e.theme.breakpoints.tablet}));function m(){var e=Object(s.a)(["\n  margin-bottom: 24px;\n\n  .text-center {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n"]);return m=function(){return e},e}function f(){var e=Object(s.a)(["\n  height: 100%;\n"]);return f=function(){return e},e}function b(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return b=function(){return e},e}var S=l.default.div(b()),g=l.default.div(f()),v=l.default.div(m()),x=Object(c.a)((function(e){var t=e.container;return n(280)("./".concat(t))}),{fallback:a.a.createElement("div",null,"Loading ...")});var j=a.a.memo((function(e){var t=e.steps,n=e.children,r=Object(p.i)(),c=Object(p.h)(),s=a.a.useState(!1),l=Object(o.a)(s,2),d=l[0],m=l[1],f=a.a.useMemo((function(){var e=r.url.replace(/\/$/,"");return t.map((function(t){return e+t.path}))}),[r.url,t]);return a.a.useEffect((function(){m(!0)}),[]),a.a.createElement(i.a,null,a.a.createElement(S,null,a.a.createElement(g,null,d&&a.a.createElement(u.a,{location:c,timing:"ease-in-out",duration:500,pathList:f},t.map((function(e){return a.a.createElement(p.b,{key:e.componentPath,exact:!0,path:Array.isArray(e.path)?e.path.map((function(e){return r.path+e})):r.path+e.path,render:function(){return a.a.createElement(h,null,a.a.createElement(x,Object.assign({container:e.componentPath},e.props)))}})})))),a.a.createElement(v,{id:"wizard-buttons"},n)))}))},292:function(e,t,n){"use strict";n.r(t);var o=n(186),r=n(6),a=n.n(r),c=n(190),u=n(210),p=n(264),i=n(263);Object(c.c)(window.localStorage);var s="submit-steps";Object(c.b)(Object(o.a)({},s,{recordYourCough:{recordingFile:null,uploadedFile:null},recordYourBreath:{recordingFile:null,uploadedFile:null},recordYourSpeech:{recordingFile:null,uploadedFile:null}}),{name:"pakistan-app-wizard"});var l=function(){var e=Object(c.d)().state,t=Object(u.g)();return a.a.useEffect((function(){var n=function(e){var t,n=null;if(!(null===(t=e.welcome)||void 0===t?void 0:t.patientId)&&e[s]){var o=e[s],r=o.recordYourCough,a=o.recordYourSpeech,c=o.recordYourBreath,u=[];if(r){var p=r.recordingFile,i=r.uploadedFile;p&&u.push({file:p,route:"/step-record/cough"}),i&&u.push({file:i,route:"/step-manual-upload/cough"})}if(c){var l=c.recordingFile,d=c.uploadedFile;l&&u.push({file:l,route:"/step-record/breath"}),d&&u.push({file:d,route:"/step-manual-upload/breath"})}if(a){var h=r.recordingFile,m=r.uploadedFile;h&&u.push({file:h,route:"/step-record/speech"}),m&&u.push({file:m,route:"/step-manual-upload/speech"})}var f=u.find((function(e){return!(!(t=e.file)||void 0!==t.size);var t}));f&&(n=f.route)}return n}(e);n&&t.push("/".concat(s).concat(n))}),[]),null},d=Object(i.a)(s);t.default=a.a.memo((function(){return a.a.createElement(p.a,{steps:d},a.a.createElement(l,null))}))},320:function(e,t,n){"use strict";n.r(t);var o=n(292);n.d(t,"default",(function(){return o.default}))}}]);
//# sourceMappingURL=21.1877244f.chunk.js.map
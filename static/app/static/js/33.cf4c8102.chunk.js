(this["webpackJsonpmtd-app"]=this["webpackJsonpmtd-app"]||[]).push([[33],{252:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return p}));var o=n(214),r=n(194),a="/submit-steps";function c(t){return[{path:"",componentPath:"Welcome/Step1",props:{storeKey:t,nextStep:"".concat("/welcome","/step-2")}},{path:"/step-2",componentPath:"Welcome/Step2",props:{storeKey:t,previousStep:"".concat("/welcome"),nextStep:"".concat("/welcome","/step-3")}},{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:t,previousStep:"".concat("/welcome","/step-2"),nextStep:"/submit-steps/step-record/cough"}}]}function u(t){return[]}function p(t){return[].concat(Object(o.a)(function(t){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:t,previousStep:"/welcome/step-3",nextStep:"".concat(a,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(a,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough"}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:t,previousStep:"".concat(a,"/step-record/cough"),nextStep:"".concat(a,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:t,previousStep:"".concat(a,"/step-record/cough"),nextStep:"".concat(a,"/questionary/step1"),otherSteps:{isShortAudioStep:"".concat(a,"/thank-you")},metadata:{currentLogic:"recordYourCough"}}}]}(t)),Object(o.a)(function(t){var e={total:2,progressCurrent:2,progressTotal:2};return[{path:"/questionary/step1",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1"),props:{storeKey:t,previousStep:"".concat(a,"/step-listen/cough"),nextStep:"".concat(a,"/questionary/step2"),metadata:Object(r.a)({current:1},e)}},{path:"/questionary/step2",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step2"),props:{storeKey:t,previousStep:"".concat(a,"/questionary/step1"),nextStep:"".concat(a,"/prediction-result"),metadata:Object(r.a)({current:2},e)}},{path:"/prediction-result",componentPath:"".concat("SubmitSteps","/").concat("Submission","/PredictionResult"),props:{storeKey:t,previousStep:"".concat(a,"/questionary/step2"),nextStep:"".concat(a,"/thank-you")}}]}(t)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:t,previousStep:"".concat(a,"/before-submit"),nextStep:"/welcome"}}])}},253:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var o=n(185),r=n(6),a=n.n(r),c=n(75),u=n(319),p=n(203),i=n(191),s=n(183),l=n(182);function d(){var t=Object(s.a)(["\n  padding-bottom: 40px; \n\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return d=function(){return t},t}var h=l.default.div(d(),(function(t){return t.theme.breakpoints.tablet}));function m(){var t=Object(s.a)(["\n  margin-bottom: 24px;\n\n  .text-center {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n"]);return m=function(){return t},t}function f(){var t=Object(s.a)(["\n  height: 100%;\n"]);return f=function(){return t},t}function S(){var t=Object(s.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return S=function(){return t},t}var b=l.default.div(S()),g=l.default.div(f()),v=l.default.div(m()),y=Object(c.a)((function(t){var e=t.container;return n(268)("./".concat(e))}),{fallback:a.a.createElement("div",null,"Loading ...")});var x=a.a.memo((function(t){var e=t.steps,n=t.children,r=Object(p.i)(),c=Object(p.h)(),s=a.a.useState(!1),l=Object(o.a)(s,2),d=l[0],m=l[1],f=a.a.useMemo((function(){var t=r.url.replace(/\/$/,"");return e.map((function(e){return t+e.path}))}),[r.url,e]);return a.a.useEffect((function(){m(!0)}),[]),a.a.createElement(i.a,null,a.a.createElement(b,null,a.a.createElement(g,null,d&&a.a.createElement(u.a,{location:c,timing:"ease-in-out",duration:500,pathList:f},e.map((function(t){return a.a.createElement(p.b,{key:t.componentPath,exact:!0,path:Array.isArray(t.path)?t.path.map((function(t){return r.path+t})):r.path+t.path,render:function(){return a.a.createElement(h,null,a.a.createElement(y,Object.assign({container:t.componentPath},t.props)))}})})))),a.a.createElement(v,{id:"wizard-buttons"},n)))}))},284:function(t,e,n){"use strict";n.r(e);var o=n(187),r=n(6),a=n.n(r),c=n(191),u=n(203),p=n(253),i=n(252);Object(c.c)(window.localStorage);var s="submit-steps";Object(c.b)(Object(o.a)({},s,{recordYourCough:{recordingFile:null,uploadedFile:null},recordYourBreath:{recordingFile:null,uploadedFile:null},recordYourSpeech:{recordingFile:null,uploadedFile:null}}),{name:"pakistan-app-wizard"});var l=function(){var t=Object(c.d)().state,e=Object(u.g)();return a.a.useEffect((function(){var n=function(t){var e,n=null;if(!(null===(e=t.welcome)||void 0===e?void 0:e.patientId)&&t[s]){var o=t[s],r=o.recordYourCough,a=o.recordYourSpeech,c=o.recordYourBreath,u=[];if(r){var p=r.recordingFile,i=r.uploadedFile;p&&u.push({file:p,route:"/step-record/cough"}),i&&u.push({file:i,route:"/step-manual-upload/cough"})}if(c){var l=c.recordingFile,d=c.uploadedFile;l&&u.push({file:l,route:"/step-record/breath"}),d&&u.push({file:d,route:"/step-manual-upload/breath"})}if(a){var h=r.recordingFile,m=r.uploadedFile;h&&u.push({file:h,route:"/step-record/speech"}),m&&u.push({file:m,route:"/step-manual-upload/speech"})}var f=u.find((function(t){return!(!(e=t.file)||void 0!==e.size);var e}));f&&(n=f.route)}return n}(t);n&&e.push("/".concat(s).concat(n))}),[]),null},d=Object(i.a)(s);e.default=a.a.memo((function(){return a.a.createElement(p.a,{steps:d},a.a.createElement(l,null))}))}}]);
//# sourceMappingURL=33.cf4c8102.chunk.js.map
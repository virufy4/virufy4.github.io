(this["webpackJsonpvirumap-app"]=this["webpackJsonpvirumap-app"]||[]).push([[33],{241:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return i}));var o=n(234),r=n(211),a="/submit-steps";function c(){var e,t,n=function(){try{return JSON.parse(window.localStorage.getItem("virumap-app-wizard")||"{}")}catch(e){return{}}}();return null!==(e=null===n||void 0===n||null===(t=n.welcome)||void 0===t?void 0:t.country)&&void 0!==e?e:""}function u(e){return[{path:"",componentPath:"Welcome/Step1",props:{storeKey:e,nextStep:"".concat("/welcome","/step-2")}}]}function p(e){return[{path:"/step-2",componentPath:"Welcome/Step2",props:{storeKey:e,previousStep:"".concat("/welcome"),nextStep:"".concat("/welcome","/step-3")}},{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:e,previousStep:"".concat("/welcome","/step-2"),nextStep:"".concat("/welcome","/step-4")}},{path:"/step-4",componentPath:"Welcome/Step4",props:{storeKey:e,previousStep:"".concat("/welcome","/step-3"),nextStep:"/submit-steps/step-record/cough"}}]}function i(e){return[].concat(Object(o.a)(function(e){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:e,previousStep:"/welcome/step-4",nextStep:"".concat(a,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(a,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough"}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:e,previousStep:"".concat(a,"/step-record/cough"),nextStep:"".concat(a,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:e,previousStep:"".concat(a,"/step-record/cough"),nextStep:"".concat(a,"/questionary/step1"),metadata:{currentLogic:"recordYourCough"}}}]}(e)),Object(o.a)(function(e){return[{path:"/questionary/step1",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1"),props:{storeKey:e,previousStep:"".concat(a,"/step-listen/cough"),nextStep:"".concat(a,"/thank-you"),metadata:Object(r.a)({current:1},{total:1,progressCurrent:1,progressTotal:1})}}]}(e)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:e,previousStep:"".concat(a,"/before-submit"),nextStep:"/welcome"}}])}},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o=n(202),r=n(9),a=n.n(r),c=n(81),u=n(330),p=n(216),i=n(207),s=n(201),l=n(200);function d(){var e=Object(s.a)(["\n  padding-bottom: 40px; \n\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return d=function(){return e},e}var m=l.default.div(d(),(function(e){return e.theme.breakpoints.tablet}));function h(){var e=Object(s.a)(["\n  margin-bottom: 24px;\n\n  .text-center {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n"]);return h=function(){return e},e}function f(){var e=Object(s.a)(["\n  height: 100%;\n\n  &.overflowVisible {\n    > div {\n      overflow: visible;\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return v=function(){return e},e}var b=l.default.div(v()),g=l.default.div(f()),S=l.default.div(h()),w=Object(c.a)((function(e){var t=e.container;return n(276)("./".concat(t))}),{fallback:a.a.createElement("div",null,"Cargando ...")});var y=a.a.memo((function(e){var t=e.steps,n=e.children,r=Object(p.i)(),c=Object(p.h)(),s=a.a.useState(!1),l=Object(o.a)(s,2),d=l[0],h=l[1],f=a.a.useMemo((function(){var e=r.url.replace(/\/$/,"");return t.map((function(t){return e+t.path}))}),[r.url,t]);return a.a.useEffect((function(){h(!0)}),[]),a.a.createElement(i.a,null,a.a.createElement(b,null,a.a.createElement(g,{className:"/welcome"===c.pathname?"overflowVisible":""},d&&a.a.createElement(u.a,{location:c,timing:"ease-in-out",duration:500,pathList:f},t.map((function(e){return a.a.createElement(p.b,{key:e.componentPath,exact:!0,path:Array.isArray(e.path)?e.path.map((function(e){return r.path+e})):r.path+e.path,render:function(){return a.a.createElement(m,null,a.a.createElement(w,Object.assign({container:e.componentPath},e.props)))}})})))),a.a.createElement(S,{id:"wizard-buttons"},n)))}))},290:function(e,t,n){"use strict";n.r(t);var o=n(204),r=n(9),a=n.n(r),c=n(207),u=n(216),p=n(264),i=n(241);Object(c.c)(window.localStorage);var s="submit-steps";Object(c.b)(Object(o.a)({},s,{recordYourCough:{recordingFile:null,uploadedFile:null},recordYourBreath:{recordingFile:null,uploadedFile:null},recordYourSpeech:{recordingFile:null,uploadedFile:null}}),{name:"virumap-app-wizard"});var l=function(){var e=Object(c.d)().state,t=Object(u.g)();return a.a.useEffect((function(){var n=function(e){var t,n=null;if(!(null===(t=e.welcome)||void 0===t?void 0:t.patientId)&&e[s]){var o=e[s],r=o.recordYourCough,a=o.recordYourSpeech,c=o.recordYourBreath,u=[];if(r){var p=r.recordingFile,i=r.uploadedFile;p&&u.push({file:p,route:"/step-record/cough"}),i&&u.push({file:i,route:"/step-manual-upload/cough"})}if(c){var l=c.recordingFile,d=c.uploadedFile;l&&u.push({file:l,route:"/step-record/breath"}),d&&u.push({file:d,route:"/step-manual-upload/breath"})}if(a){var m=r.recordingFile,h=r.uploadedFile;m&&u.push({file:m,route:"/step-record/speech"}),h&&u.push({file:h,route:"/step-manual-upload/speech"})}var f=u.find((function(e){return!(!(t=e.file)||void 0!==t.size);var t}));f&&(n=f.route)}return n}(e);n&&t.push("/".concat(s).concat(n))}),[]),null},d=Object(i.a)(s);t.default=a.a.memo((function(){return a.a.createElement(p.a,{steps:d},a.a.createElement(l,null))}))}}]);
//# sourceMappingURL=33.ac8e2aa1.chunk.js.map
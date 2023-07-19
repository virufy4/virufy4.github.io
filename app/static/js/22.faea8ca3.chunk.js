(this["webpackJsonpmtd-app"]=this["webpackJsonpmtd-app"]||[]).push([[22,36],{263:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var o=n(222),a="/submit-steps";function c(t){return[{path:"",componentPath:"Welcome/Step1",props:{storeKey:t,nextStep:"".concat("/welcome","/step-2")}},{path:"/step-2",componentPath:"Welcome/Step2",props:{storeKey:t,previousStep:"".concat("/welcome"),nextStep:"".concat("/welcome","/step-3")}},{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:t,previousStep:"".concat("/welcome","/step-2"),nextStep:"/submit-steps/step-record/cough"}}]}function r(t){return[]}function u(t){return[].concat(Object(o.a)(function(t){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:t,previousStep:"/welcome/step-3",nextStep:"".concat(a,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(a,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough"}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:t,previousStep:"".concat(a,"/step-record/cough"),nextStep:"".concat(a,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:t,previousStep:"".concat(a,"/step-record/cough"),nextStep:"".concat(a,"/prediction-result"),otherSteps:{isShortAudioStep:"".concat(a,"/thank-you")},metadata:{currentLogic:"recordYourCough"}}}]}(t)),Object(o.a)(function(t){return[{path:"/prediction-result",componentPath:"".concat("SubmitSteps","/").concat("Submission","/PredictionResult"),props:{storeKey:t,previousStep:"".concat(a,"/step-listen/cough"),nextStep:"".concat(a,"/thank-you")}}]}(t)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:t,previousStep:"".concat(a,"/before-submit"),nextStep:"/welcome"}}])}},264:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var o=n(185),a=n(6),c=n.n(a),r=n(76),u=n(327),i=n(210),p=n(190),s=n(183),l=n(182);function m(){var t=Object(s.a)(["\n  padding-bottom: 40px; \n\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return m=function(){return t},t}var d=l.default.div(m(),(function(t){return t.theme.breakpoints.tablet}));function h(){var t=Object(s.a)(["\n  margin-bottom: 24px;\n\n  .text-center {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n"]);return h=function(){return t},t}function f(){var t=Object(s.a)(["\n  height: 100%;\n"]);return f=function(){return t},t}function b(){var t=Object(s.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return b=function(){return t},t}var S=l.default.div(b()),g=l.default.div(f()),v=l.default.div(h()),x=Object(r.a)((function(t){var e=t.container;return n(280)("./".concat(e))}),{fallback:c.a.createElement("div",null,"Loading ...")});var j=c.a.memo((function(t){var e=t.steps,n=t.children,a=Object(i.i)(),r=Object(i.h)(),s=c.a.useState(!1),l=Object(o.a)(s,2),m=l[0],h=l[1],f=c.a.useMemo((function(){var t=a.url.replace(/\/$/,"");return e.map((function(e){return t+e.path}))}),[a.url,e]);return c.a.useEffect((function(){h(!0)}),[]),c.a.createElement(p.a,null,c.a.createElement(S,null,c.a.createElement(g,null,m&&c.a.createElement(u.a,{location:r,timing:"ease-in-out",duration:500,pathList:f},e.map((function(t){return c.a.createElement(i.b,{key:t.componentPath,exact:!0,path:Array.isArray(t.path)?t.path.map((function(t){return a.path+t})):a.path+t.path,render:function(){return c.a.createElement(d,null,c.a.createElement(x,Object.assign({container:t.componentPath},t.props)))}})})))),c.a.createElement(v,{id:"wizard-buttons"},n)))}))},296:function(t,e,n){"use strict";n.r(e);var o=n(222),a=n(186),c=n(6),r=n.n(c),u=n(210),i=n(190),p=n(264),s=n(183),l=n(182);function m(){var t=Object(s.a)(["\n  background-color: ",";\n  border-radius: 50%;\n  display: inline-block;\n\n  height: 7px;\n  width: 7px;\n\n  &:not(:first-of-type){\n    margin-left: 6px;\n  };\n\n  &.active {\n    background-color: ",";\n  };\n\n"]);return m=function(){return t},t}function d(){var t=Object(s.a)(["\n  display: flex;\n  justify-content:center;\n  padding: 0;\n  margin-bottom: 22px;\n\n @media screen and (","){\n    margin-bottom: 40px;\n  }\n"]);return d=function(){return t},t}var h=l.default.ul(d(),(function(t){return t.theme.breakpoints.tablet})),f=l.default.li(m(),(function(t){return t.theme.colors.gray}),(function(t){return t.theme.colors.darkBlack})),b=r.a.memo((function(t){var e=t.className,n=void 0===e?"":e,o=t.current,a=t.total,c=r.a.useMemo((function(){for(var t=[],e=0;e<a;e+=1)t.push(r.a.createElement(f,{className:e===o?"active":"",id:"WelcomeStepButton-".concat(e),key:"WelcomeStepButton-".concat(e)}));return t}),[o,a]);return r.a.createElement(h,{className:n},c)})),S=n(263);Object(i.c)(window.localStorage);Object(i.b)(Object(a.a)({},"welcome",{}),{name:"pakistan-app-wizard"});var g=Object(S.b)("welcome"),v=Object(S.c)("welcome"),x=[].concat(Object(o.a)(g),Object(o.a)(v));e.default=r.a.memo((function(){var t=Object(u.h)(),e=Object(u.i)(),n=t.pathname.replace(e.url,""),o=v.findIndex((function(t){return t.path===n}));return r.a.createElement(p.a,{steps:x},o>=0&&r.a.createElement(b,{current:o,total:v.length}))}))},325:function(t,e,n){"use strict";n.r(e);var o=n(296);n.d(e,"default",(function(){return o.default}))}}]);
//# sourceMappingURL=22.faea8ca3.chunk.js.map
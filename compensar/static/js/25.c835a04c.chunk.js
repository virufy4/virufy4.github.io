(this["webpackJsonpcompensar-app"]=this["webpackJsonpcompensar-app"]||[]).push([[25,41],{260:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return p}));var a=n(245),o=n(211),c="/submit-steps";function r(t){return[{path:"",componentPath:"Welcome/Step2",props:{storeKey:t,nextStep:"".concat("/welcome","/step-3")}},{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:t,previousStep:"".concat("/welcome"),nextStep:"".concat("/welcome","/step-4")}}]}function u(t){return[{path:"/step-4",componentPath:"Welcome/Step4",props:{storeKey:t,previousStep:"".concat("/welcome","/step-3"),nextStep:"".concat("/welcome","/step-5")}},{path:"/step-5",componentPath:"Welcome/Step5",props:{storeKey:t,previousStep:"".concat("/welcome","/step-4"),nextStep:"/submit-steps/step-record/cough"}}]}function p(t){return[].concat(Object(a.a)(function(t){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:t,previousStep:"/welcome/step-5",nextStep:"".concat(c,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(c,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough"}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/cough"),nextStep:"".concat(c,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/cough"),nextStep:"".concat(c,"/questionary/step1"),otherSteps:{isShortAudioStep:"".concat(c,"/thank-you")},metadata:{currentLogic:"recordYourCough"}}}]}(t)),Object(a.a)(function(t){var e={total:2,progressCurrent:2,progressTotal:2};return[{path:"/questionary/step1",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1"),props:{storeKey:t,previousStep:"".concat(c,"/step-listen/cough"),nextStep:"".concat(c,"/questionary/step2"),metadata:Object(o.a)({},e)}},{path:"/questionary/step2",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step2"),props:{storeKey:t,previousStep:"".concat(c,"/questionary/step1"),nextStep:"".concat(c,"/questionary/step3"),metadata:Object(o.a)({current:1},e)}},{path:"/questionary/step3",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step3"),props:{storeKey:t,previousStep:"".concat(c,"/questionary/step2"),nextStep:"".concat(c,"/thank-you"),metadata:Object(o.a)({current:2},e)}}]}(t)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:t,previousStep:"".concat(c,"/before-submit"),nextStep:"/welcome"}}])}},262:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var a=n(200),o=n(9),c=n.n(o),r=n(81),u=n(322),p=n(218),s=n(203),i=n(199),m=n(198);function l(){var t=Object(i.a)(["\n  padding-bottom: 40px; \n\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return l=function(){return t},t}var d=m.default.div(l(),(function(t){return t.theme.breakpoints.tablet}));function h(){var t=Object(i.a)(["\n  margin-bottom: 24px;\n\n  .text-center {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n"]);return h=function(){return t},t}function f(){var t=Object(i.a)(["\n  height: 100%;\n"]);return f=function(){return t},t}function b(){var t=Object(i.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return b=function(){return t},t}var S=m.default.div(b()),g=m.default.div(f()),v=m.default.div(h()),y=Object(r.a)((function(t){var e=t.container;return n(273)("./".concat(e))}),{fallback:c.a.createElement("div",null,"Cargando ...")});var x=c.a.memo((function(t){var e=t.steps,n=t.children,o=Object(p.i)(),r=Object(p.h)(),i=c.a.useState(!1),m=Object(a.a)(i,2),l=m[0],h=m[1],f=c.a.useMemo((function(){var t=o.url.replace(/\/$/,"");return e.map((function(e){return t+e.path}))}),[o.url,e]);return c.a.useEffect((function(){h(!0)}),[]),c.a.createElement(s.a,null,c.a.createElement(S,null,c.a.createElement(g,null,l&&c.a.createElement(u.a,{location:r,timing:"ease-in-out",duration:500,pathList:f},e.map((function(t){return c.a.createElement(p.b,{key:t.componentPath,exact:!0,path:Array.isArray(t.path)?t.path.map((function(t){return o.path+t})):o.path+t.path,render:function(){return c.a.createElement(d,null,c.a.createElement(y,Object.assign({container:t.componentPath},t.props)))}})})))),c.a.createElement(v,{id:"wizard-buttons"},n)))}))},290:function(t,e,n){"use strict";n.r(e);var a=n(245),o=n(201),c=n(9),r=n.n(c),u=n(218),p=n(203),s=n(262),i=n(199),m=n(198);function l(){var t=Object(i.a)(["\n  background-color: ",";\n  border-radius: 50%;\n  display: inline-block;\n\n  height: 7px;\n  width: 7px;\n\n  &:not(:first-of-type){\n    margin-left: 6px;\n  };\n\n  &.active {\n    background-color: ",";\n  };\n\n"]);return l=function(){return t},t}function d(){var t=Object(i.a)(["\n  display: flex;\n  justify-content:center;\n  padding: 0;\n  margin-bottom: 22px;\n\n @media screen and (","){\n    margin-bottom: 40px;\n  }\n"]);return d=function(){return t},t}var h=m.default.ul(d(),(function(t){return t.theme.breakpoints.tablet})),f=m.default.li(l(),(function(t){return t.theme.colors.gray}),(function(t){return t.theme.colors.darkBlack})),b=r.a.memo((function(t){var e=t.className,n=void 0===e?"":e,a=t.current,o=t.total,c=r.a.useMemo((function(){for(var t=[],e=0;e<o;e+=1)t.push(r.a.createElement(f,{className:e===a?"active":"",id:"WelcomeStepButton-".concat(e),key:"WelcomeStepButton-".concat(e)}));return t}),[a,o]);return r.a.createElement(h,{className:n},c)})),S=n(260);Object(p.c)(window.localStorage);Object(p.b)(Object(o.a)({},"welcome",{}),{name:"compensar-app-wizard"});var g=Object(S.b)("welcome"),v=Object(S.c)("welcome"),y=[].concat(Object(a.a)(g),Object(a.a)(v));e.default=r.a.memo((function(){var t=Object(u.h)(),e=Object(u.i)(),n=t.pathname.replace(e.url,""),a=v.findIndex((function(t){return t.path===n}));return r.a.createElement(s.a,{steps:y},a>=0&&r.a.createElement(b,{current:a,total:v.length}))}))},321:function(t,e,n){"use strict";n.r(e);var a=n(290);n.d(e,"default",(function(){return a.default}))}}]);
//# sourceMappingURL=25.c835a04c.chunk.js.map
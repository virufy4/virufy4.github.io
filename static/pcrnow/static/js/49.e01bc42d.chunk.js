(this.webpackJsonppcrnow=this.webpackJsonppcrnow||[]).push([[49],{251:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return p})),n.d(e,"a",(function(){return s}));var o=n(213),a=n(203),c="/submit-steps";function r(t){return[{path:"",componentPath:"Welcome/Step2",props:{storeKey:t,nextStep:"".concat("/welcome","/step-3")}},{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:t,previousStep:"".concat("/welcome"),nextStep:"".concat("/welcome","/step-4")}}]}function p(t){return[{path:"/step-4",componentPath:"Welcome/Step4",props:{storeKey:t,previousStep:"".concat("/welcome","/step-3"),nextStep:"".concat(c,"/questionary/step1")}},{path:"/step-5",componentPath:"Welcome/Step5",props:{storeKey:t,previousStep:"".concat("/welcome","/step-4"),nextStep:"/submit-steps/step-record/cough"}}]}function s(t){return[].concat(Object(o.a)(function(t){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:t,previousStep:"/welcome/step-5",nextStep:"".concat(c,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(c,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough"}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/cough"),nextStep:"".concat(c,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/cough"),nextStep:"".concat(c,"/step-record/breath"),otherSteps:{isShortAudioStep:"".concat(c,"/thank-you")},metadata:{currentLogic:"recordYourCough"}}}]}(t)),Object(o.a)(function(t){return[{path:"/step-record/breath",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:t,previousStep:"".concat(c,"/step-listen/cough"),nextStep:"".concat(c,"/step-listen/breath"),otherSteps:{manualUploadStep:"".concat(c,"/step-manual-upload/breath")},metadata:{currentLogic:"recordYourBreath"}}},{path:"/step-manual-upload/breath",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/breath"),nextStep:"".concat(c,"/step-listen/breath"),metadata:{currentLogic:"recordYourBreath"}}},{path:"/step-listen/breath",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/breath"),nextStep:"".concat(c,"/step-record/speech"),metadata:{currentLogic:"recordYourBreath"}}}]}(t)),Object(o.a)(function(t){return[{path:"/step-record/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:t,previousStep:"".concat(c,"/step-listen/breath"),nextStep:"".concat(c,"/step-listen/speech"),otherSteps:{manualUploadStep:"".concat(c,"/step-manual-upload/speech")},metadata:{currentLogic:"recordYourSpeech"}}},{path:"/step-manual-upload/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/speech"),nextStep:"".concat(c,"/step-listen/speech"),metadata:{currentLogic:"recordYourSpeech"}}},{path:"/step-listen/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/speech"),nextStep:"".concat(c,"/questionary/step3"),metadata:{currentLogic:"recordYourSpeech"}}}]}(t)),Object(o.a)(function(t){var e={total:6,progressCurrent:6,progressTotal:6};return[{path:"/questionary/step1",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1"),props:{storeKey:t,previousStep:"".concat("/welcome","/step-4"),nextStep:"".concat(c,"/questionary/step2"),metadata:Object(a.a)({current:1},e)}},{path:"/questionary/step2",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step2"),props:{storeKey:t,previousStep:"".concat(c,"/questionary/step1"),nextStep:"".concat("/welcome","/step-5"),metadata:Object(a.a)({current:2},e)}},{path:"/questionary/step3",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step3"),props:{storeKey:t,previousStep:"".concat(c,"/step-listen/speech"),nextStep:"".concat(c,"/questionary/step4"),metadata:Object(a.a)({current:3},e)}},{path:"/questionary/step4",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step4"),props:{storeKey:t,previousStep:"".concat(c,"/questionary/step3"),nextStep:"".concat(c,"/questionary/step5a"),metadata:Object(a.a)({current:4},e)}},{path:"/questionary/step5a",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step5a"),props:{storeKey:t,previousStep:"".concat(c,"/questionary/step4"),nextStep:"".concat(c,"/questionary/step6"),otherSteps:{covidSymptomsStep:"".concat(c,"/questionary/step5b")},metadata:Object(a.a)({current:5},e)}},{path:"/questionary/step5b",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step5b"),props:{storeKey:t,previousStep:"".concat(c,"/questionary/step5a"),nextStep:"".concat(c,"/questionary/step6"),metadata:Object(a.a)({},e)}},{path:"/questionary/step6",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step6"),props:{storeKey:t,previousStep:"".concat(c,"/questionary/step5a"),nextStep:"".concat(c,"/thank-you"),metadata:Object(a.a)({current:6},e)}}]}(t)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:t,previousStep:"".concat(c,"/before-submit"),nextStep:"/welcome"}}])}},252:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var o=n(188),a=n(6),c=n.n(a),r=n(80),p=n(321),s=n(215),u=n(189),i=n(187),m=n(186);function h(){var t=Object(i.a)(["\n  padding-bottom: 40px; \n\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return h=function(){return t},t}var l=m.default.div(h(),(function(t){return t.theme.breakpoints.tablet}));function d(){var t=Object(i.a)(["\n  margin-bottom: 24px;\n"]);return d=function(){return t},t}function S(){var t=Object(i.a)(["\n  height: 100%;\n"]);return S=function(){return t},t}function b(){var t=Object(i.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return b=function(){return t},t}var f=m.default.div(b()),y=m.default.div(S()),g=m.default.div(d()),v=Object(r.a)((function(t){var e=t.container;return n(262)("./".concat(e))}),{fallback:c.a.createElement("div",null,"Loading ...")});var x=c.a.memo((function(t){var e=t.steps,n=t.children,a=Object(s.i)(),r=Object(s.h)(),i=c.a.useState(!1),m=Object(o.a)(i,2),h=m[0],d=m[1],S=c.a.useMemo((function(){var t=a.url.replace(/\/$/,"");return e.map((function(e){return t+e.path}))}),[a.url,e]);return c.a.useEffect((function(){d(!0)}),[]),c.a.createElement(u.a,null,c.a.createElement(f,null,c.a.createElement(y,null,h&&c.a.createElement(p.a,{location:r,timing:"ease-in-out",duration:500,pathList:S},e.map((function(t){return c.a.createElement(s.b,{key:t.componentPath,exact:!0,path:Array.isArray(t.path)?t.path.map((function(t){return a.path+t})):a.path+t.path,render:function(){return c.a.createElement(l,null,c.a.createElement(v,Object.assign({container:t.componentPath},t.props)))}})})))),c.a.createElement(g,{id:"wizard-buttons"},n)))}))},283:function(t,e,n){"use strict";n.r(e);var o=n(213),a=n(190),c=n(6),r=n.n(c),p=n(215),s=n(189),u=n(252),i=n(187),m=n(186);function h(){var t=Object(i.a)(["\n  background-color: ",";\n  border-radius: 50%;\n  display: inline-block;\n\n  height: 7px;\n  width: 7px;\n\n  &:not(:first-of-type){\n    margin-left: 6px;\n  };\n\n  &.active {\n    background-color: ",";\n  };\n\n"]);return h=function(){return t},t}function l(){var t=Object(i.a)(["\n  display: flex;\n  justify-content:center;\n  padding: 0;\n  margin-bottom: 22px;\n\n @media screen and (","){\n    margin-bottom: 40px;\n  }\n"]);return l=function(){return t},t}var d=m.default.ul(l(),(function(t){return t.theme.breakpoints.tablet})),S=m.default.li(h(),(function(t){return t.theme.colors.gray}),(function(t){return t.theme.colors.darkBlack})),b=r.a.memo((function(t){var e=t.className,n=void 0===e?"":e,o=t.current,a=t.total,c=r.a.useMemo((function(){for(var t=[],e=0;e<a;e+=1)t.push(r.a.createElement(S,{className:e===o?"active":"",id:"WelcomeStepButton-".concat(e),key:"WelcomeStepButton-".concat(e)}));return t}),[o,a]);return r.a.createElement(d,{className:n},c)})),f=n(251);Object(s.c)(window.localStorage);Object(s.b)(Object(a.a)({},"welcome",{}),{name:"pcrnow-wizard"});var y=Object(f.b)("welcome"),g=Object(f.c)("welcome"),v=[].concat(Object(o.a)(y),Object(o.a)(g));e.default=r.a.memo((function(){var t=Object(p.h)(),e=Object(p.i)(),n=t.pathname.replace(e.url,""),o=g.findIndex((function(t){return t.path===n}));return r.a.createElement(u.a,{steps:v},o>=0&&r.a.createElement(b,{current:o,total:g.length}))}))}}]);
//# sourceMappingURL=49.e01bc42d.chunk.js.map
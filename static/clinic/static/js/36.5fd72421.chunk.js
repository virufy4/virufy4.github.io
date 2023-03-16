(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[36,64],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(9),r=n.n(a),o=n(214),u=function(){return(u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var l=function(e){var t=e.as,n=e.errors,a=e.name,l=e.message,s=e.render,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["as","errors","name","message","render"]),c=Object(o.f)(),m=Object(o.c)(n||c.errors,a);if(!m)return null;var f=m.message,p=m.types,b=u(u({},i),{children:f||l});return t?r.a.isValidElement(t)?r.a.cloneElement(t,b):r.a.createElement(t,b):s?s({message:f||l,messages:p}):r.a.createElement(r.a.Fragment,u({},b))}},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(9),r=n.n(a),o=n(260),u=n(853),l=n(17),s=n(205);function i(){var e=Object(s.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return i=function(){return e},e}var c=n(204).default.div(i()),m=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,a=Object(u.a)().i18n;return r.a.createElement(c,null,r.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),l.a("Error on ReCAPTCHA")},hl:a.language}))}},295:function(e,t,n){"use strict";n.r(t);var a=n(216),r=n.n(a),o=n(217),u=n(206),l=n(9),s=n.n(l),i=n(240),c=n(212),m=n.n(c),f=n(853),p=n(214),b=n(210),d=n(231),y=n(219),v=n(232),O=n(218),g=n(207),h=n(208),j=n(229),E=n(215),S=n(239),C=n(245),k=n(236),q=v.object({symptomsStartedDate:v.string().when("$country",{is:"Japan",then:v.string().required(),else:v.string().required().test("symptomsStartedDate-invalid","",(function(e){var t=!0;return e&&!e.match(/^[0-9]+$/)&&(t=!1),t}))})}).defined();t.default=s.a.memo((function(e){var t=e.previousStep,n=e.nextStep,a=e.storeKey,c=e.metadata,v=m()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,w=Object(g.a)(),x=w.setDoGoBack,A=w.setTitle,D=w.setType,T=Object(i.g)(),B=Object(f.a)().t,P=Object(b.d)(Object(O.b)(a)),I=P.state,J=P.action,R=Object(j.d)(),V=s.a.useState(!0),z=Object(u.a)(V,2),F=z[0],M=z[1],Q=s.a.useState(null),W=Object(u.a)(Q,2),H=W[0],L=W[1],U=s.a.useState(null),$=Object(u.a)(U,2),G=$[0],K=$[1],N=s.a.useState(!0),Y=Object(u.a)(N,2),Z=Y[0],X=Y[1],_=null===c||void 0===c?void 0:c.isShortQuestionary,ee=Object(p.e)({mode:"onChange",defaultValues:null===I||void 0===I?void 0:I[a],resolver:Object(d.a)(q),context:{country:R}}),te=ee.control,ne=ee.handleSubmit,ae=ee.formState,re=ae.errors,oe=ae.isSubmitting,ue=ae.isValid;Object(l.useEffect)((function(){G||L(null)}),[G]);var le=s.a.useMemo((function(){return _&&"Colombia"!==R?H?s.a.createElement(s.a.Fragment,null,s.a.createElement(S.a,{onChange:K,setRecaptchaAvailable:X}),s.a.createElement(k.TempBeforeSubmitError,null,H)):s.a.createElement(S.a,{onChange:K,setRecaptchaAvailable:X}):null}),[R,_,H]),se=s.a.useCallback((function(){M(!1),t?T.push(t):T.goBack()}),[T,t]),ie=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(J(t),n&&(M(!1),T.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){Object(h.a)(),A(B("questionary:symptomsDateTitle")),D("primary"),x((function(){return se}))}),[se,x,A,D,B]);return s.a.createElement(k.MainContainer,null,s.a.createElement(k.QuestionText,{extraSpace:!0,first:!0},B("questionary:symptomsDate")),s.a.createElement(p.a,{control:te,name:"symptomsStartedDate",defaultValue:"",render:function(e){var t=e.onChange,n=e.value,a=e.name;return"Japan"===R?s.a.createElement(C.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:[{value:"none",label:B("questionary:options.none")},{value:"today",label:B("questionary:options.today")},{value:"days",label:B("questionary:options.days")},{value:"week",label:B("questionary:options.week")},{value:"overWeek",label:B("questionary:options.overWeek")}]}):s.a.createElement(k.QuestionInput,{name:a,value:n,onChange:t,type:"text",placeholder:B("questionary:enterDays"),autoComplete:"Off"})}}),s.a.createElement("p",null,s.a.createElement(y.a,{errors:re,name:"name"})),F&&s.a.createElement(v,null,le,s.a.createElement(E.a,{leftLabel:B(_?oe?"questionary:submitting":"beforeSubmit:submitButton":"questionary:nextButton"),leftHandler:ne(_?function(){n&&(M(!1),T.push(n))}:ie),leftDisabled:_&&"Colombia"!==R?oe||Z&&!G:!ue,invert:!0})))}))},334:function(e,t,n){"use strict";n.r(t);var a=n(295);n.d(t,"default",(function(){return a.default}))}}]);
//# sourceMappingURL=36.5fd72421.chunk.js.map
(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[37,65],{230:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(9),r=n.n(a),i=n(852),o=n(211),c=n(205),l=n(204);function s(){var e=Object(c.a)(["\n  width: 120px;\n  height: 10px;\n  background: ",";\n  position: relative;\n  border-radius: 24px;\n  margin-top: 12px;\n  \n  &:after {\n    content:'';\n    width: ",";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ",";\n    border-radius: 24px;\n  }\n"]);return s=function(){return e},e}function u(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  color: ",";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 700;\n  "]);return u=function(){return e},e}function d(){var e=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return d=function(){return e},e}function f(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return f=function(){return e},e}var p=l.default.div(f(),(function(e){return e.theme.breakpoints.tablet})),m=(l.default.div(d()),l.default.div(u(),(function(e){return e.theme.colors.purple}))),h=l.default.div(s(),(function(e){return e.theme.colors.midGrayBlue}),(function(e){var t=e.currentStep,n=e.totalSteps;return"calc((100%/".concat(n,") * ").concat(t,")")}),(function(e){return e.theme.colors.purple})),v=r.a.memo((function(e){var t=e.className,n=void 0===t?"":t,a=e.radius,c=void 0===a?30:a,l=e.stroke,s=void 0===l?6:l,u=e.currentStep,d=void 0===u?2:u,f=e.totalSteps,v=void 0===f?4:f,b=e.color,y=void 0===b?o.a.green:b,g=e.colorTrack,x=void 0===g?o.a.gray3:g,k=e.progressBar,O=void 0!==k&&k,E=Object(i.a)().t,S=d/v*100,j=c-s/2,w=2*j*Math.PI,q=w-S/100*w;return r.a.createElement(r.a.Fragment,null,O?r.a.createElement(m,null,E("questionary:progressBar",{currentStep:d,totalSteps:v}),r.a.createElement(h,{currentStep:d,totalSteps:v})):r.a.createElement(p,{className:n},r.a.createElement("svg",{width:2*c,height:2*c,viewBox:"0 0 ".concat(2*c," ").concat(2*c)},r.a.createElement("circle",{className:"track",stroke:x,fill:"transparent",strokeWidth:s,r:j,cx:c,cy:c}),r.a.createElement("circle",{stroke:y,fill:"transparent",strokeWidth:s,strokeDasharray:"".concat(w," ").concat(w),style:{strokeDashoffset:q},r:j,cx:c,cy:c}),r.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(d,"/").concat(v)))))}))},294:function(e,t,n){"use strict";n.r(t);var a=n(216),r=n.n(a),i=n(217),o=n(206),c=n(9),l=n.n(c),s=n(240),u=n(212),d=n.n(u),f=n(852),p=n(246),m=n(214),h=n(209),v=n(231),b=n(219),y=n(232),g=n(218),x=n(207),k=n(208),O=n(245),E=n(215),S=n(230),j=n(236),w=y.object({ethnicity:y.string()}).defined();t.default=l.a.memo((function(e){var t=e.previousStep,n=e.nextStep,a=e.storeKey,u=e.otherSteps,y=e.metadata,q=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,B=Object(x.a)(),A=B.setDoGoBack,C=B.setTitle,D=B.setType,P=Object(s.g)(),T=Object(f.a)().t,z=Object(h.d)(Object(g.b)(a)),N=z.state,V=z.action,H=l.a.useState(!0),L=Object(o.a)(H,2),W=L[0],F=L[1],G=Object(m.e)({mode:"onChange",defaultValues:null===N||void 0===N?void 0:N[a],resolver:Object(v.a)(w)}),I=G.control,J=G.handleSubmit,K=G.formState,M=K.errors,Q=K.isValid,R=l.a.useCallback((function(){F(!1),t?P.push(t):P.goBack()}),[P,t]);Object(c.useEffect)((function(){Object(k.a)(),C("".concat(T("questionary:ethnicity.title"))),D("primary"),A((function(){return R}))}),[R,A,C,D,y,T]);var U=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,i,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=17;break}a=t.ethnicity,V(t),i=!1,o=0;case 5:if(!(o<(null===(c=a.selected)||void 0===c?void 0:c.length))){e.next=12;break}if("none"===a.selected[o]){e.next=9;break}return i=!0,e.abrupt("break",12);case 9:o++,e.next=5;break;case 12:if(!i||!u){e.next=16;break}return F(!1),P.push(u.covidSymptomsStep),e.abrupt("return");case 16:n&&(F(!1),P.push(n));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(j.MainContainer,null,l.a.createElement(S.a,{currentStep:null===y||void 0===y?void 0:y.current,totalSteps:null===y||void 0===y?void 0:y.total,progressBar:!0}),l.a.createElement(j.QuestionText,{extraSpace:!0,first:!0},l.a.createElement(p.a,{i18nKey:"questionary:ethnicity.question"},l.a.createElement("strong",null,"Which of the below symptoms do you currently have?")),l.a.createElement(j.QuestionNote,null,T("questionary:ethnicity.note"))),l.a.createElement(m.a,{control:I,name:"ethnicity",defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(O.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:[{value:"asian",label:T("questionary:ethnicity.options.asian")},{value:"nativeAmericanOrArab",label:T("questionary:ethnicity.options.nativeAmericanOrArab")},{value:"blackOrAfrican",label:T("questionary:ethnicity.options.blackOrAfrican")},{value:"hispanicOrLatin",label:T("questionary:ethnicity.options.hispanicOrLatin")},{value:"nativeHawaiianOrPacific",label:T("questionary:ethnicity.options.nativeHawaiianOrPacific")},{value:"white",label:T("questionary:ethnicity.options.white")}],excludableValues:["none"]})}}),l.a.createElement("p",null,l.a.createElement(b.a,{errors:M,name:"name"})),W&&l.a.createElement(q,null,l.a.createElement(E.a,{leftLabel:T("questionary:nextButton"),leftHandler:J(U),leftDisabled:!Q,invert:!0})))}))},329:function(e,t,n){"use strict";n.r(t);var a=n(294);n.d(t,"default",(function(){return a.default}))}}]);
//# sourceMappingURL=37.2a35a8cc.chunk.js.map
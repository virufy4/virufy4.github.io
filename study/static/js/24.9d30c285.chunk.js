(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[24],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return y}));var r=n(214),a=n(204),o=n(9),i=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function u(e,t){var n=t||"__STATE_MACHINE__",r=i(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var c=function(e){return void 0===e};function l(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var s=Object(o.createContext)({store:{},updateStore:function(e){return e}}),d=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:i(r,n),currentStoreData:a})};function f(e,t,n){var o=e,u=t.syncStores;if(!u)return o;try{if(Array.isArray(u))u.forEach((function(e){o=d({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(u.externalStoreName&&"function"===typeof u.transform&&"string"===typeof u.externalStoreName)return d({transform:u.transform,externalStoreName:u.externalStoreName,storageType:n,store:o});Object.entries(u).forEach((function(e){var t=Object(a.a)(e,2),u=t[0],c=t[1],l=i(n,u);c.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),l[e])))}))}))}}catch(c){return o}return o}var v,m,p,b="undefined"!==typeof window,g=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},h=[];function O(e){g=e}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=u(g,n);p=r.getName,v=r.get,m=r.set,h=t.middleWares,l(!1,g,p,v),m(f(v()||e,t,g))}function E(e){var t=Object(o.useState)(v()),n=Object(a.a)(t,2),r=n[0],i=n[1],u=Object(o.useMemo)((function(){return{store:r,updateStore:i}}),[r]);return Object(o.createElement)(s.Provider,Object.assign({value:u},e))}var k=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(v(),e)),m(c(a)?v():a),g.setItem(p(),JSON.stringify(v())),c(t)||t&&!1!==t.shouldReRenderApp){var o=v();Array.isArray(h)&&h.length&&(o=h.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function y(e,t){var n=Object(o.useContext)(s),i=n.store,u=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var i=Object(a.a)(n,2),c=i[0],l=i[1];return Object.assign(Object.assign({},e),Object(r.a)({},c,Object(o.useCallback)(k({options:t,callback:l,updateStore:u}),[])))}),{}),action:function(e){return e},state:i}:{actions:{},action:Object(o.useCallback)(e?k({options:t,callback:e,updateStore:u}):function(){},[]),state:i}}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(9),a=n.n(r),o=n(209),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var u=function(e){var t=e.as,n=e.errors,r=e.name,u=e.message,c=e.render,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),s=Object(o.f)(),d=Object(o.c)(n||s.errors,r);if(!d)return null;var f=d.message,v=d.types,m=i(i({},l),{children:f||u});return t?a.a.isValidElement(t)?a.a.cloneElement(t,m):a.a.createElement(t,m):c?c({message:f||u,messages:v}):a.a.createElement(a.a.Fragment,i({},m))}},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(226),a=n(204),o=n(9),i=n.n(o),u=n(206),c=n(205);function l(){var e=Object(u.a)(["\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  width: 100%;\n  padding: 0 20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: 1px "," solid;\n  ::placeholder {\n    color: ",";\n  }\n  @media screen and (","){\n    text-align: center;\n  }\n"]);return l=function(){return e},e}function s(){var e=Object(u.a)(["\n  position: relative;\n  display: inline-block;\n  width: calc(100% + 40px);\n  margin: 0 -20px;\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(u.a)(["\n  width: 22px;\n  height: 22px; \n  border-radius: ",";\n  border: 3px solid ",";\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 14px;\n  margin-right: 29px;\n  \n  @media screen and (","){\n    margin-right: 31px;\n  }\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: ","; \n    top: ",";\n    height: ",";\n    width: ",";\n    border-radius: ",";\n    background-color: ","; \n    display: ",";\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.0005 2L6.00018 10L2 6.00018' stroke='%233578DE' stroke-width='2.18192' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n  }\n"]);return d=function(){return e},e}function f(){var e=Object(u.a)(["\n  font-weight: bold;\n"]);return f=function(){return e},e}function v(){var e=Object(u.a)(["\n  display: block;\n  width: 250px;\n  @media screen and (","){\n    width: auto;\n    text-align: left;\n    margin: auto;\n  }\n"]);return v=function(){return e},e}function m(){var e=Object(u.a)(["\n  width: 100%;\n  height: 50px;\n  position: relative;\n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n  padding: 0 20px;\n  margin: 3px auto;\n  border: none;\n  border-radius: 10px;\n  background-color: ",";\n  @media screen and (","){\n    max-width: 470px;\n    text-align: left;\n  }\n"]);return m=function(){return e},e}var p=c.default.button(m(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.purple_10:e.theme.colors.mercury}),(function(e){return e.theme.breakpoints.tablet})),b=c.default.span(v(),(function(e){return e.theme.breakpoints.tablet})),g=Object(c.default)(p)(f()),h=c.default.div(d(),(function(e){return e.checkbox?"10%":"50%"}),(function(e){return e.isSelected?e.theme.colors.purple:"#C1C1C1"}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"0%":"50%"}),(function(e){return e.checkbox?e.theme.colors.purple_10:e.theme.colors.purple}),(function(e){return e.isSelected?"block":"none"})),O=c.default.div(s(),(function(e){return e.theme.breakpoints.tablet})),x=c.default.input(l(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.midDarkGray}),(function(e){return e.theme.breakpoints.tablet})),E={selected:[],other:""},k=function(e){var t=e.value,n=void 0===t?E:t,u=e.items,c=e.excludableValues,l=e.singleSelection,s=e.isCheckbox,d=e.onChange,f=e.allowAddOther,v=e.addOtherLabel,m=e.enableOther,k=e.otherPlaceholder,y=Object(o.useState)(!1),S=Object(a.a)(y,2),j=S[0],w=S[1];Object(o.useEffect)((function(){w(!!m||!!(null===n||void 0===n?void 0:n.other))}),[n,m]);var T=function(e){var t,r=n.selected;t=l||c&&r.some((function(e){return c.includes(e)}))?[]:r,d&&d({selected:t,other:e}),e||w(!1)};return i.a.createElement(i.a.Fragment,null,u.map((function(e,t){var a,o=null===n||void 0===n||null===(a=n.selected)||void 0===a?void 0:a.includes(e.value);return i.a.createElement(p,{key:e.value,lastItem:u.length===t+1&&!f&&!m,onClick:function(){return function(e){var t,a,o=n.selected,i=n.other,u=o.indexOf(e.value);u>=0?(t=[].concat(Object(r.a)(o.slice(0,u)),Object(r.a)(o.slice(u+1))),a=i):l||(null===c||void 0===c?void 0:c.includes(e.value))||c&&o.some((function(e){return c.includes(e)}))?(t=[e.value],a=void 0):(t=[].concat(Object(r.a)(o),[e.value]),a=i),d&&d({selected:t,other:a})}(e)},isSelected:o},i.a.createElement(b,null,e.label),i.a.createElement(h,{isSelected:o,checkbox:s}))})),f&&!j&&i.a.createElement(g,{onClick:function(){w(!0)},lastItem:!0},v),j&&i.a.createElement(O,null,i.a.createElement(x,{placeholder:k,value:(null===n||void 0===n?void 0:n.other)||"",isSelected:!!(null===n||void 0===n?void 0:n.other),onChange:function(e){return T(e.target.value)}}),!!(null===n||void 0===n?void 0:n.other)&&i.a.createElement(h,null)))};k.defaultProps={value:E,excludableValues:void 0,singleSelection:!1,onChange:void 0,allowAddOther:!1,addOtherLabel:"",enableOther:!1,otherPlaceholder:""};var y=i.a.memo(k)},223:function(e,t,n){"use strict";var r=n(9),a=n(207),o=n(208);t.a=function(e,t){var n=Object(a.d)(Object(o.b)(e)).state,i=Object(r.useMemo)((function(){var r={total:null===t||void 0===t?void 0:t.total,current:null===t||void 0===t?void 0:t.current};if(n[e]){var a,o,i,u,c,l,s=null===(a=n["submit-steps"])||void 0===a||null===(o=a.typeCovidFlu)||void 0===o?void 0:o.selected.includes("antigenTaken"),d=null===(i=n["submit-steps"])||void 0===i||null===(u=i.typeCovidFlu)||void 0===u?void 0:u.selected.includes("PCRTaken"),f=null===(c=n["submit-steps"])||void 0===c||null===(l=c.typeCovidFlu)||void 0===l?void 0:l.selected.includes("fluTaken");switch(!0){case s&&!d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-2-2,r.current=(null===t||void 0===t?void 0:t.current)-2-2;break;case s&&d&&!f||s&&!d&&f:r.total=(null===t||void 0===t?void 0:t.total)-2,r.current=(null===t||void 0===t?void 0:t.current)-2;break;case!s&&!d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-1-2-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2-2;break;case!s&&d&&f:r.total=(null===t||void 0===t?void 0:t.total)-1,r.current=(null===t||void 0===t?void 0:t.current)-1;break;case!s&&!d&&f||!s&&d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-1-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2}}return r}),[n,t,e]),u=Object(r.useMemo)((function(){if(n[e]){var t,r,a,o=null===(t=n["submit-steps"].typeCovidFlu)||void 0===t?void 0:t.selected.includes("PCRTaken"),u=null===(r=n["submit-steps"].typeCovidFlu)||void 0===r?void 0:r.selected.includes("antigenTaken"),c=null===(a=n["submit-steps"].typeCovidFlu)||void 0===a?void 0:a.selected.includes("fluTaken");return o&&!u&&!c||o&&u&&!c?i.current+2:i.current}return 0}),[n,e,i]);return{customSteps:i,customCurrentStepPCR:u}}},276:function(e,t,n){e.exports=n.p+"static/media/calendar.ffdaf43c.svg"},277:function(e,t,n){e.exports=n.p+"static/media/chevron.66e5f21f.svg"},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(9),a=n.n(r),o=n(23),i=n.n(o),u=n(151),c=n(276),l=n.n(c),s=n(277),d=n.n(s),f=n(206),v=n(205);function m(){var e=Object(f.a)(["\n  font-family: Source Sans Pro;\n  font-size: 14px;\n  line-height: 142.69%;\n  color: ",";\n"]);return m=function(){return e},e}function p(){var e=Object(f.a)(["\n  font-family: Source Sans Pro;\n  font-size: 12px;\n  line-height: 142.69%;\n  color: ",";\n"]);return p=function(){return e},e}function b(){var e=Object(f.a)(["\n  flex: 1;\n  text-align: left;\n  padding-left: 14px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);return b=function(){return e},e}function g(){var e=Object(f.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  border: none;\n  padding: 0 19.69px 0 14px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return g=function(){return e},e}function h(){var e=Object(f.a)(["\n  .react-datepicker-wrapper {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return h=function(){return e},e}var O=v.default.div(h()),x=v.default.button(g(),(function(e){return e.theme.colors.lightGray})),E=v.default.div(b()),k=v.default.div(p(),(function(e){return e.theme.colors.darkGray})),y=v.default.div(m(),(function(e){return e.theme.colors.darkBlack})),S=a.a.forwardRef((function(e,t){var n=e.label,r=e.value,o=e.onClick;return a.a.createElement(x,{ref:t,onClick:o},a.a.createElement("img",{alt:"calendar",src:l.a}),a.a.createElement(E,null,a.a.createElement(k,null,n),a.a.createElement(y,null,r)),a.a.createElement("img",{alt:"calendar",src:d.a}))}));S.defaultProps={value:void 0,onClick:void 0};var j=a.a.memo((function(e){var t=e.label,n=e.value,r=e.locale,o=e.onChange,c=a.a.useMemo((function(){return Object(u.default)(new Date)}),[]);return a.a.createElement(O,null,a.a.createElement(i.a,{selected:n,customInput:a.a.createElement(S,{label:t}),onChange:o,dateFormat:"EEE, MMM d, Y",locale:r,maxDate:c}))}))},338:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n.n(r),o=n(217),i=n(204),u=n(9),c=n.n(u),l=n(242),s=n(219),d=n.n(s),f=n(863),v=n(209),m=n(207),p=n(221),b=n(213),g=n(222),h=n(220),O=n(211),x=n(208),E=n(210),k=n(223),y=n(218),S=n(280),j=n(215),w=n(227),T=n(224),C=g.object({antigenTestDate:g.date().required(),antigenTestResult:g.string().required()}).defined();t.default=c.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,s=e.metadata,g=e.otherSteps,_=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,A=Object(E.a)(),I=A.setDoGoBack,N=A.setTitle,M=A.setSubtitle,P=A.setType,D=Object(l.g)(),B=Object(f.a)(),R=B.t,F=B.i18n,H=Object(m.d)(Object(x.b)(r)),q=H.state,G=H.action,V=Object(h.e)(),L=Object(h.d)(),z=Object(k.a)(r,s).customSteps,J=c.a.useState(!0),Q=Object(i.a)(J,2),U=Q[0],W=Q[1],K=Object(v.e)({mode:"onChange",defaultValues:null===q||void 0===q?void 0:q[r],context:{country:L},resolver:Object(p.a)(C)}),Y=K.control,X=K.handleSubmit,Z=K.formState,$=Z.errors,ee=Z.isValid,te=c.a.useCallback((function(){W(!1),t?D.push(t):D.goBack()}),[D,t]);Object(u.useEffect)((function(){Object(O.a)(),V?(N(""),P("tertiary")):(N(R("questionary:testTaken.title")),P("primary")),M(""),I((function(){return te}))}),[te,I,N,P,M,V,R]);var ne=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,o,i,u,c,l,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}if(u=(i=t).antigenTestDate,c=i.antigenTestResult,u&&c){e.next=4;break}return e.abrupt("return");case 4:G(t),l=null===(r=q["submit-steps"].typeCovidFlu)||void 0===r?void 0:r.selected.includes("PCRTaken"),s=null===(o=q["submit-steps"].typeCovidFlu)||void 0===o?void 0:o.selected.includes("fluTaken"),l&&g?(W(!1),D.push(g.PCRTakenStep)):s&&g?(W(!1),D.push(g.fluTakenStep)):n&&(W(!1),D.push(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=c.a.useMemo((function(){return[{value:"positive",label:R("questionary:resultAntigenTest.options.positive")},{value:"negative",label:R("questionary:resultAntigenTest.options.negative")}]}),[R]);return c.a.createElement(T.MainContainer,null,c.a.createElement(w.a,{currentStep:null===s||void 0===s?void 0:s.current,totalSteps:z.total,progressBar:!0}),c.a.createElement(T.QuestionText,{extraSpace:!0,first:!0},R("questionary:whenAntigenTest"),c.a.createElement(T.QuestionAllApply,null,R("questionary:whenAntigenTestCaption"))),c.a.createElement(v.a,{control:Y,name:"antigenTestDate",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return c.a.createElement(S.a,{label:n?"":"Date",value:n?new Date(n):null,locale:F.language,onChange:t})}}),c.a.createElement(b.a,{errors:$,name:"antigenTestDate",render:function(e){var t=e.message;return c.a.createElement("p",null,t)}}),c.a.createElement(T.QuestionText,{extraSpace:!0},R("questionary:resultAntigenTest.question")),c.a.createElement(v.a,{control:Y,name:"antigenTestResult",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return c.a.createElement(y.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:re})}}),c.a.createElement(b.a,{errors:$,name:"antigenTestResult",render:function(e){var t=e.message;return c.a.createElement("p",null,t)}}),U&&c.a.createElement(_,null,c.a.createElement(j.a,{leftLabel:R("questionary:nextButton"),leftHandler:X(ne),leftDisabled:!ee,invert:!0})))}))}}]);
//# sourceMappingURL=24.9d30c285.chunk.js.map
(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[77],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return j}));var r=n(214),a=n(204),o=n(9),u=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function i(e,t){var n=t||"__STATE_MACHINE__",r=u(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var c=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var l=Object(o.createContext)({store:{},updateStore:function(e){return e}}),d=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:u(r,n),currentStoreData:a})};function f(e,t,n){var o=e,i=t.syncStores;if(!i)return o;try{if(Array.isArray(i))i.forEach((function(e){o=d({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(i.externalStoreName&&"function"===typeof i.transform&&"string"===typeof i.externalStoreName)return d({transform:i.transform,externalStoreName:i.externalStoreName,storageType:n,store:o});Object.entries(i).forEach((function(e){var t=Object(a.a)(e,2),i=t[0],c=t[1],s=u(n,i);c.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),s[e])))}))}))}}catch(c){return o}return o}var v,m,p,b="undefined"!==typeof window,O=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},y=[];function S(e){O=e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=i(O,n);p=r.getName,v=r.get,m=r.set,y=t.middleWares,s(!1,O,p,v),m(f(v()||e,t,O))}function E(e){var t=Object(o.useState)(v()),n=Object(a.a)(t,2),r=n[0],u=n[1],i=Object(o.useMemo)((function(){return{store:r,updateStore:u}}),[r]);return Object(o.createElement)(l.Provider,Object.assign({value:i},e))}var T=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(v(),e)),m(c(a)?v():a),O.setItem(p(),JSON.stringify(v())),c(t)||t&&!1!==t.shouldReRenderApp){var o=v();Array.isArray(y)&&y.length&&(o=y.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function j(e,t){var n=Object(o.useContext)(l),u=n.store,i=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var u=Object(a.a)(n,2),c=u[0],s=u[1];return Object.assign(Object.assign({},e),Object(r.a)({},c,Object(o.useCallback)(T({options:t,callback:s,updateStore:i}),[])))}),{}),action:function(e){return e},state:u}:{actions:{},action:Object(o.useCallback)(e?T({options:t,callback:e,updateStore:i}):function(){},[]),state:u}}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(9),a=n.n(r),o=n(209),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var i=function(e){var t=e.as,n=e.errors,r=e.name,i=e.message,c=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),l=Object(o.f)(),d=Object(o.c)(n||l.errors,r);if(!d)return null;var f=d.message,v=d.types,m=u(u({},s),{children:f||i});return t?a.a.isValidElement(t)?a.a.cloneElement(t,m):a.a.createElement(t,m):c?c({message:f||i,messages:v}):a.a.createElement(a.a.Fragment,u({},m))}},223:function(e,t,n){"use strict";var r=n(9),a=n(207),o=n(208);t.a=function(e,t){var n=Object(a.d)(Object(o.b)(e)).state,u=Object(r.useMemo)((function(){var r={total:null===t||void 0===t?void 0:t.total,current:null===t||void 0===t?void 0:t.current};if(n[e]){var a,o,u,i,c,s,l=null===(a=n["submit-steps"])||void 0===a||null===(o=a.typeCovidFlu)||void 0===o?void 0:o.selected.includes("antigenTaken"),d=null===(u=n["submit-steps"])||void 0===u||null===(i=u.typeCovidFlu)||void 0===i?void 0:i.selected.includes("PCRTaken"),f=null===(c=n["submit-steps"])||void 0===c||null===(s=c.typeCovidFlu)||void 0===s?void 0:s.selected.includes("fluTaken");switch(!0){case l&&!d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-2-2,r.current=(null===t||void 0===t?void 0:t.current)-2-2;break;case l&&d&&!f||l&&!d&&f:r.total=(null===t||void 0===t?void 0:t.total)-2,r.current=(null===t||void 0===t?void 0:t.current)-2;break;case!l&&!d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-1-2-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2-2;break;case!l&&d&&f:r.total=(null===t||void 0===t?void 0:t.total)-1,r.current=(null===t||void 0===t?void 0:t.current)-1;break;case!l&&!d&&f||!l&&d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-1-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2}}return r}),[n,t,e]),i=Object(r.useMemo)((function(){if(n[e]){var t,r,a,o=null===(t=n["submit-steps"].typeCovidFlu)||void 0===t?void 0:t.selected.includes("PCRTaken"),i=null===(r=n["submit-steps"].typeCovidFlu)||void 0===r?void 0:r.selected.includes("antigenTaken"),c=null===(a=n["submit-steps"].typeCovidFlu)||void 0===a?void 0:a.selected.includes("fluTaken");return o&&!i&&!c||o&&i&&!c?u.current+2:u.current}return 0}),[n,e,u]);return{customSteps:u,customCurrentStepPCR:i}}},300:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n.n(r),o=n(217),u=n(204),i=n(9),c=n.n(i),s=n(242),l=n(219),d=n.n(l),f=n(863),v=n(209),m=n(207),p=n(221),b=n(213),O=n(222),y=n(220),S=n(211),g=n(208),E=n(210),T=n(223),j=n(215),C=n(227),h=n(224),_=O.object({covidTimes:O.string().required(),lastTimeCovidMonths:O.string().notRequired()}).defined();t.default=c.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,l=e.metadata,O=e.otherSteps,w=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,A=Object(E.a)(),k=A.setDoGoBack,I=A.setTitle,N=A.setSubtitle,x=A.setType,M=Object(s.g)(),P=Object(f.a)().t,H=Object(m.d)(Object(g.b)(r)),q=H.state,R=H.action,B=Object(y.e)(),D=Object(y.d)(),F=Object(T.a)(r,l),V=F.customSteps,G=F.customCurrentStepPCR,J=c.a.useState(!0),Q=Object(u.a)(J,2),U=Q[0],L=Q[1],W=Object(v.e)({mode:"onChange",defaultValues:null===q||void 0===q?void 0:q[r],context:{country:D},resolver:Object(p.a)(_)}),z=W.control,K=W.handleSubmit,X=W.formState,Y=X.errors,Z=X.isValid,$=c.a.useCallback((function(){L(!1),t?M.push(t):M.goBack()}),[M,t]);Object(i.useEffect)((function(){Object(S.a)(),B?(I(""),x("tertiary")):(I(P("questionary:covidTimesTitle")),x("primary")),N(""),k((function(){return $}))}),[$,k,I,x,N,B,P]);var ee=function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(R(t),(null===(r=q["submit-steps"].typeCovidFlu)||void 0===r?void 0:r.selected.includes("fluTaken"))&&O?(L(!1),M.push(O.fluTakenStep)):n&&(L(!1),M.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(h.MainContainer,null,c.a.createElement(C.a,{currentStep:G,totalSteps:V.total,progressBar:!0}),c.a.createElement(h.QuestionText,{extraSpace:!0,first:!0},P("questionary:covidTimes")),c.a.createElement(v.a,{control:z,name:"covidTimes",defaultValue:"",render:function(e){var t=e.onChange,n=e.value,r=e.name;return c.a.createElement(h.QuestionInput,{name:r,value:n,onChange:t,type:"number",placeholder:P("questionary:covidTimesPlaceholder"),autoComplete:"Off"})}}),c.a.createElement(b.a,{errors:Y,name:"covidTimes",render:function(e){var t=e.message;return c.a.createElement("p",null,t)}}),c.a.createElement(h.QuestionText,{extraSpace:!0},P("questionary:lastTimeCovidMonths"),c.a.createElement(h.QuestionAllApply,null,P("questionary:lastTimeCovidMonthsCaption"))),c.a.createElement(v.a,{control:z,name:"lastTimeCovidMonths",defaultValue:"",render:function(e){var t=e.onChange,n=e.value,r=e.name;return c.a.createElement(h.QuestionInput,{name:r,value:n,onChange:t,type:"number",placeholder:P("questionary:lastTimeCovidMonthsPlaceholder"),autoComplete:"Off"})}}),c.a.createElement(b.a,{errors:Y,name:"lastTimeCovidMonths",render:function(e){var t=e.message;return c.a.createElement("p",null,t)}}),U&&c.a.createElement(w,null,c.a.createElement(j.a,{leftLabel:P("questionary:nextButton"),leftHandler:K(ee),leftDisabled:!Z,invert:!0})))}))}}]);
//# sourceMappingURL=77.f3ab976d.chunk.js.map
(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[78],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return _}));var r=n(214),a=n(204),o=n(9),u=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function i(e,t){var n=t||"__STATE_MACHINE__",r=u(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var c=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var l=Object(o.createContext)({store:{},updateStore:function(e){return e}}),d=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:u(r,n),currentStoreData:a})};function f(e,t,n){var o=e,i=t.syncStores;if(!i)return o;try{if(Array.isArray(i))i.forEach((function(e){o=d({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(i.externalStoreName&&"function"===typeof i.transform&&"string"===typeof i.externalStoreName)return d({transform:i.transform,externalStoreName:i.externalStoreName,storageType:n,store:o});Object.entries(i).forEach((function(e){var t=Object(a.a)(e,2),i=t[0],c=t[1],s=u(n,i);c.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),s[e])))}))}))}}catch(c){return o}return o}var m,v,b,p="undefined"!==typeof window,y=p?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},O=[];function S(e){y=e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=i(y,n);b=r.getName,m=r.get,v=r.set,O=t.middleWares,s(!1,y,b,m),v(f(m()||e,t,y))}function j(e){var t=Object(o.useState)(m()),n=Object(a.a)(t,2),r=n[0],u=n[1],i=Object(o.useMemo)((function(){return{store:r,updateStore:u}}),[r]);return Object(o.createElement)(l.Provider,Object.assign({value:i},e))}var E=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(m(),e)),v(c(a)?m():a),y.setItem(b(),JSON.stringify(m())),c(t)||t&&!1!==t.shouldReRenderApp){var o=m();Array.isArray(O)&&O.length&&(o=O.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function _(e,t){var n=Object(o.useContext)(l),u=n.store,i=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var u=Object(a.a)(n,2),c=u[0],s=u[1];return Object.assign(Object.assign({},e),Object(r.a)({},c,Object(o.useCallback)(E({options:t,callback:s,updateStore:i}),[])))}),{}),action:function(e){return e},state:u}:{actions:{},action:Object(o.useCallback)(e?E({options:t,callback:e,updateStore:i}):function(){},[]),state:u}}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(9),a=n.n(r),o=n(209),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var i=function(e){var t=e.as,n=e.errors,r=e.name,i=e.message,c=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),l=Object(o.f)(),d=Object(o.c)(n||l.errors,r);if(!d)return null;var f=d.message,m=d.types,v=u(u({},s),{children:f||i});return t?a.a.isValidElement(t)?a.a.cloneElement(t,v):a.a.createElement(t,v):c?c({message:f||i,messages:m}):a.a.createElement(a.a.Fragment,u({},v))}},223:function(e,t,n){"use strict";var r=n(9),a=n(207),o=n(208);t.a=function(e,t){var n=Object(a.d)(Object(o.b)(e)).state,u=Object(r.useMemo)((function(){var r={total:null===t||void 0===t?void 0:t.total,current:null===t||void 0===t?void 0:t.current};if(n[e]){var a,o,u,i,c,s,l=null===(a=n["submit-steps"])||void 0===a||null===(o=a.typeCovidFlu)||void 0===o?void 0:o.selected.includes("antigenTaken"),d=null===(u=n["submit-steps"])||void 0===u||null===(i=u.typeCovidFlu)||void 0===i?void 0:i.selected.includes("PCRTaken"),f=null===(c=n["submit-steps"])||void 0===c||null===(s=c.typeCovidFlu)||void 0===s?void 0:s.selected.includes("fluTaken");switch(!0){case l&&!d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-2-2,r.current=(null===t||void 0===t?void 0:t.current)-2-2;break;case l&&d&&!f||l&&!d&&f:r.total=(null===t||void 0===t?void 0:t.total)-2,r.current=(null===t||void 0===t?void 0:t.current)-2;break;case!l&&!d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-1-2-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2-2;break;case!l&&d&&f:r.total=(null===t||void 0===t?void 0:t.total)-1,r.current=(null===t||void 0===t?void 0:t.current)-1;break;case!l&&!d&&f||!l&&d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-1-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2}}return r}),[n,t,e]),i=Object(r.useMemo)((function(){if(n[e]){var t,r,a,o=null===(t=n["submit-steps"].typeCovidFlu)||void 0===t?void 0:t.selected.includes("PCRTaken"),i=null===(r=n["submit-steps"].typeCovidFlu)||void 0===r?void 0:r.selected.includes("antigenTaken"),c=null===(a=n["submit-steps"].typeCovidFlu)||void 0===a?void 0:a.selected.includes("fluTaken");return o&&!i&&!c||o&&i&&!c?u.current+2:u.current}return 0}),[n,e,u]);return{customSteps:u,customCurrentStepPCR:i}}},308:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n.n(r),o=n(217),u=n(204),i=n(9),c=n.n(i),s=n(242),l=n(219),d=n.n(l),f=n(863),m=n(209),v=n(207),b=n(221),p=n(213),y=n(222),O=n(208),S=n(210),g=n(223),j=n(211),E=n(220),_=n(215),T=n(227),h=n(224),w=y.object({symptomsStartedDate:y.string().test("symptomsStartedDate-invalid","",(function(e){var t=!0;return e&&Number(e)<=0&&(t=!1),t})).required()}).defined();t.default=c.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,l=e.metadata,y=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,C=Object(S.a)(),A=C.setDoGoBack,N=C.setTitle,k=C.setType,I=Object(s.g)(),x=Object(f.a)().t,D=Object(v.d)(Object(O.b)(r)),M=D.state,H=D.action,B=Object(E.d)(),P=Object(g.a)(r,l).customSteps,F=c.a.useState(!0),R=Object(u.a)(F,2),q=R[0],J=R[1],G=null===l||void 0===l?void 0:l.isShortQuestionary,V=Object(m.e)({mode:"onChange",defaultValues:null===M||void 0===M?void 0:M[r],resolver:Object(b.a)(w),context:{country:B}}),Q=V.control,U=V.handleSubmit,L=V.formState,W=L.errors,z=L.isSubmitting,K=L.isValid,X=c.a.useCallback((function(){J(!1),t?I.push(t):I.goBack()}),[I,t]),Y=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(H(t),n&&(J(!1),I.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){Object(j.a)(),N(x("questionary:symptoms.title")),k("primary"),A((function(){return X}))}),[X,A,N,k,x]),c.a.createElement(h.MainContainer,null,"Japan"===B&&c.a.createElement(T.a,{currentStep:P.current,totalSteps:P.total,progressBar:!0}),c.a.createElement(h.QuestionText,{extraSpace:!0,first:!0},x("questionary:symptomsDate")),c.a.createElement(m.a,{control:Q,name:"symptomsStartedDate",defaultValue:"",render:function(e){var t=e.onChange,n=e.value,r=e.name;return c.a.createElement(h.QuestionInput,{name:r,value:n,onChange:t,type:"number",placeholder:x("questionary:enterDays"),autoComplete:"Off"})}}),c.a.createElement(p.a,{errors:W,name:"symptomsStartedDate",render:function(e){var t=e.message;return c.a.createElement("p",null,t)}}),q&&c.a.createElement(y,null,c.a.createElement(_.a,{leftLabel:x(G?z?"questionary:submitting":"beforeSubmit:submitButton":"questionary:nextButton"),leftHandler:U(G?function(){n&&(J(!1),I.push(n))}:Y),leftDisabled:!K,invert:!0})))}))}}]);
//# sourceMappingURL=78.8d758783.chunk.js.map
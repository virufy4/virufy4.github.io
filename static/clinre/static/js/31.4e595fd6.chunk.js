(this.webpackJsonpclinre=this.webpackJsonpclinre||[]).push([[31,53],{192:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return j}));var r=n(193),o=n(190),a=n(6),u=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function c(e,t){var n=t||"__STATE_MACHINE__",r=u(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var i=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var l=Object(a.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,o=e.store;return t({externalStoreData:u(r,n),currentStoreData:o})};function d(e,t,n){var a=e,c=t.syncStores;if(!c)return a;try{if(Array.isArray(c))c.forEach((function(e){a=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:a})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return f({transform:c.transform,externalStoreName:c.externalStoreName,storageType:n,store:a});Object.entries(c).forEach((function(e){var t=Object(o.a)(e,2),c=t[0],i=t[1],s=u(n,c);i.forEach((function(e){a=Object.assign(Object.assign({},a),Object(r.a)({},e,Object.assign(Object.assign({},a[e]),s[e])))}))}))}}catch(i){return a}return a}var v,m,p,b="undefined"!==typeof window,O=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},g=[];function y(e){O=e}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=c(O,n);p=r.getName,v=r.get,m=r.set,g=t.middleWares,s(!1,O,p,v),m(d(v()||e,t,O))}function S(e){var t=Object(a.useState)(v()),n=Object(o.a)(t,2),r=n[0],u=n[1],c=Object(a.useMemo)((function(){return{store:r,updateStore:u}}),[r]);return Object(a.createElement)(l.Provider,Object.assign({value:c},e))}var h=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var o;n&&n.name;if(n&&(o=n(v(),e)),m(i(o)?v():o),O.setItem(p(),JSON.stringify(v())),i(t)||t&&!1!==t.shouldReRenderApp){var a=v();Array.isArray(g)&&g.length&&(a=g.reduce((function(e,t){return t(e)||e}),a)),r(a)}}};function j(e,t){var n=Object(a.useContext)(l),u=n.store,c=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var u=Object(o.a)(n,2),i=u[0],s=u[1];return Object.assign(Object.assign({},e),Object(r.a)({},i,Object(a.useCallback)(h({options:t,callback:s,updateStore:c}),[])))}),{}),action:function(e){return e},state:u}:{actions:{},action:Object(a.useCallback)(e?h({options:t,callback:e,updateStore:c}):function(){},[]),state:u}}},197:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(6),c=n(42),i=a(n(202));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,v=void 0!==d&&d,m=e.onOpen,p=e.onClose,b=e.onPortalClick,O=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),g=i.default(),y=g.isServer,E=g.isBrowser,S=u.useState(v),h=S[0],j=S[1],w=u.useRef(h),_=u.useCallback((function(e){w.current=e,j(e)}),[]),k=u.useRef(),T=u.useRef(E?document.createElement("div"):null);u.useEffect((function(){E&&!T.current&&(T.current=document.createElement("div"))}),[E,T]);var C=u.useMemo((function(){if(!y)return f&&c.findDOMNode(f)||document.body}),[y,f]),x=function(e){if(!e)return{portal:T,targetEl:k,event:e};var t=e||{};t.persist&&t.persist(),t.portal=T,t.targetEl=k,t.event=e;var n=e.currentTarget;return!k.current&&n&&n!==document&&(k.current=t.currentTarget),t},M=Object.entries(O).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){y||r(x(e))},e}),{}),N=u.useCallback((function(e){if(!y){var n=x(e);if(null==k.current)throw setTimeout((function(){return _(!0)}),0),Error(t.errorMessage1);m&&m(n),_(!0)}}),[y,T,_,k,m]),A=u.useCallback((function(e){if(!y){var t=x(e);p&&w.current&&p(t),w.current&&_(!1)}}),[y,p,_]),P=u.useCallback((function(e){return w.current?A(e):N(e)}),[A,N]),I=u.useCallback((function(e){return"Escape"===e.key&&l?A(e):void 0}),[l,A]),L=u.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(T)||0!==e.button||!w.current||t(k)||a&&A(e)}),[y,A,a,T]),H=u.useCallback((function(e){if(!y&&T.current instanceof HTMLElement){var t=x(e);T.current.contains(t.target)&&b&&b(t),L(e)}}),[L]),R=u.useRef({});u.useEffect((function(){if(!y&&C instanceof HTMLElement&&T.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=T.current;return C.appendChild(T.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(R.current[t]=function(e){return O[t](x(e))},document.addEventListener(n,R.current[t]))})),document.addEventListener("keydown",I),document.addEventListener("mousedown",H),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(document.removeEventListener(n,R.current[t]),delete R.current[t])})),document.removeEventListener("keydown",I),document.removeEventListener("mousedown",H),C.removeChild(t)}}}),[y,L,I,C,T]);var B=u.useCallback((function(e){var t=e.children;return null!=T.current?c.createPortal(t,T.current):null}),[T]);return Object.assign([N,A,w.current,B,P,k,T],r(r({isOpen:w.current,openPortal:N,ref:k,closePortal:A,togglePortal:P,Portal:B,portalRef:T},M),{bind:r({ref:k},M)}))}},201:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},202:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,u=r.Server,c=r.Native,i=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:i?a:u,l={isBrowser:s===a,isServer:s===u,isNative:s===c,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===a&&!!window.addEventListener,canUseViewport:s===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),o=n.n(r),a=n(203),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var c=function(e){var t=e.as,n=e.errors,r=e.name,c=e.message,i=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["as","errors","name","message","render"]),l=Object(a.f)(),f=Object(a.c)(n||l.errors,r);if(!f)return null;var d=f.message,v=f.types,m=u(u({},s),{children:d||c});return t?o.a.isValidElement(t)?o.a.cloneElement(t,m):o.a.createElement(t,m):i?i({message:d||c,messages:v}):o.a.createElement(o.a.Fragment,u({},m))}},278:function(e,t,n){"use strict";n.r(t);var r=n(205),o=n.n(r),a=n(206),u=n(190),c=n(6),i=n.n(c),s=n(226),l=n(197),f=n.n(l),d=n(819),v=n(203),m=n(192),p=n(214),b=n(204),O=n(215),g=n(198),y=n(194),E=n(195),S=n(211),h=n(212),j=n(199),w=n(208),_=n(210),k=n(207),T=O.object({smokeLastSixMonths:O.string().required("smokeLastSixMonthsSexRequired")}).defined();t.default=i.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,l=e.metadata,O=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,C=Object(y.a)(),x=C.setDoGoBack,M=C.setTitle,N=C.setType,A=Object(s.g)(),P=Object(d.a)().t,I=Object(m.d)(Object(g.b)(r)),L=I.state,H=I.action,R=i.a.useState(!0),B=Object(u.a)(R,2),D=B[0],q=B[1],U=Object(v.e)({mode:"onChange",defaultValues:null===L||void 0===L?void 0:L[r],resolver:Object(p.a)(T)}),V=U.control,G=U.handleSubmit,J=U.formState,W=J.errors,Q=J.isValid,z=i.a.useCallback((function(){q(!1),t?A.push(t):A.goBack()}),[A,t]);Object(c.useEffect)((function(){Object(E.a)(),M("".concat(P("questionary:headerQuestions"))),N("primary"),x((function(){return z}))}),[z,x,M,N,l,P]);var F=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(H(t),n&&(q(!1),A.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(k.MainContainer,null,i.a.createElement(S.a,{currentStep:null===l||void 0===l?void 0:l.current,totalSteps:null===l||void 0===l?void 0:l.total,progressBar:!0}),i.a.createElement(k.QuestionText,{extraSpace:!0,first:!0},P("questionary:smokeLastSixMonths.question"),i.a.createElement(k.QuestionNote,null,P("questionary:smokeLastSixMonths.note"))),i.a.createElement(v.a,{control:V,name:"smokeLastSixMonths",defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return i.a.createElement(h.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:[{value:"true",label:P("questionary:smokeLastSixMonths.options.yes")},{value:"false",label:P("questionary:smokeLastSixMonths.options.no")}]})}}),i.a.createElement(b.a,{errors:W,name:"smokeLastSixMonths",render:function(e){var t=e.message;return i.a.createElement(_.TextErrorContainer,null,i.a.createElement(w.a,null),P("main:".concat(t),"Please select an option"))}}),D&&i.a.createElement(O,null,i.a.createElement(j.a,{leftLabel:P("questionary:nextButton"),leftHandler:G(F),leftDisabled:!Q,invert:!0})))}))},309:function(e,t,n){"use strict";n.r(t);var r=n(278);n.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=31.4e595fd6.chunk.js.map
(this.webpackJsonppcrnow=this.webpackJsonppcrnow||[]).push([[47],{189:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return h}));var r=n(190),o=n(188),a=n(6),u=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function c(e,t){var n=t||"__STATE_MACHINE__",r=u(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var i=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var l=Object(a.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,o=e.store;return t({externalStoreData:u(r,n),currentStoreData:o})};function d(e,t,n){var a=e,c=t.syncStores;if(!c)return a;try{if(Array.isArray(c))c.forEach((function(e){a=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:a})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return f({transform:c.transform,externalStoreName:c.externalStoreName,storageType:n,store:a});Object.entries(c).forEach((function(e){var t=Object(o.a)(e,2),c=t[0],i=t[1],s=u(n,c);i.forEach((function(e){a=Object.assign(Object.assign({},a),Object(r.a)({},e,Object.assign(Object.assign({},a[e]),s[e])))}))}))}}catch(i){return a}return a}var v,m,p,b="undefined"!==typeof window,O=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},g=[];function E(e){O=e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=c(O,n);p=r.getName,v=r.get,m=r.set,g=t.middleWares,s(!1,O,p,v),m(d(v()||e,t,O))}function S(e){var t=Object(a.useState)(v()),n=Object(o.a)(t,2),r=n[0],u=n[1],c=Object(a.useMemo)((function(){return{store:r,updateStore:u}}),[r]);return Object(a.createElement)(l.Provider,Object.assign({value:c},e))}var w=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var o;n&&n.name;if(n&&(o=n(v(),e)),m(i(o)?v():o),O.setItem(p(),JSON.stringify(v())),i(t)||t&&!1!==t.shouldReRenderApp){var a=v();Array.isArray(g)&&g.length&&(a=g.reduce((function(e,t){return t(e)||e}),a)),r(a)}}};function h(e,t){var n=Object(a.useContext)(l),u=n.store,c=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var u=Object(o.a)(n,2),i=u[0],s=u[1];return Object.assign(Object.assign({},e),Object(r.a)({},i,Object(a.useCallback)(w({options:t,callback:s,updateStore:c}),[])))}),{}),action:function(e){return e},state:u}:{actions:{},action:Object(a.useCallback)(e?w({options:t,callback:e,updateStore:c}):function(){},[]),state:u}}},195:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(6),c=n(42),i=a(n(198));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,v=void 0!==d&&d,m=e.onOpen,p=e.onClose,b=e.onPortalClick,O=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),g=i.default(),E=g.isServer,y=g.isBrowser,S=u.useState(v),w=S[0],h=S[1],j=u.useRef(w),_=u.useCallback((function(e){j.current=e,h(e)}),[]),T=u.useRef(),C=u.useRef(y?document.createElement("div"):null);u.useEffect((function(){y&&!C.current&&(C.current=document.createElement("div"))}),[y,C]);var k=u.useMemo((function(){if(!E)return f&&c.findDOMNode(f)||document.body}),[E,f]),A=function(e){if(!e)return{portal:C,targetEl:T,event:e};var t=e||{};t.persist&&t.persist(),t.portal=C,t.targetEl=T,t.event=e;var n=e.currentTarget;return!T.current&&n&&n!==document&&(T.current=t.currentTarget),t},N=Object.entries(O).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){E||r(A(e))},e}),{}),I=u.useCallback((function(e){if(!E){var n=A(e);if(null==T.current)throw setTimeout((function(){return _(!0)}),0),Error(t.errorMessage1);m&&m(n),_(!0)}}),[E,C,_,T,m]),P=u.useCallback((function(e){if(!E){var t=A(e);p&&j.current&&p(t),j.current&&_(!1)}}),[E,p,_]),M=u.useCallback((function(e){return j.current?P(e):I(e)}),[P,I]),x=u.useCallback((function(e){return"Escape"===e.key&&l?P(e):void 0}),[l,P]),H=u.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(C)||0!==e.button||!j.current||t(T)||a&&P(e)}),[E,P,a,C]),L=u.useCallback((function(e){if(!E&&C.current instanceof HTMLElement){var t=A(e);C.current.contains(t.target)&&b&&b(t),H(e)}}),[H]),R=u.useRef({});u.useEffect((function(){if(!E&&k instanceof HTMLElement&&C.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=C.current;return k.appendChild(C.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(R.current[t]=function(e){return O[t](A(e))},document.addEventListener(n,R.current[t]))})),document.addEventListener("keydown",x),document.addEventListener("mousedown",L),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(document.removeEventListener(n,R.current[t]),delete R.current[t])})),document.removeEventListener("keydown",x),document.removeEventListener("mousedown",L),k.removeChild(t)}}}),[E,H,x,k,C]);var B=u.useCallback((function(e){var t=e.children;return null!=C.current?c.createPortal(t,C.current):null}),[C]);return Object.assign([I,P,j.current,B,M,T,C],r(r({isOpen:j.current,openPortal:I,ref:T,closePortal:P,togglePortal:M,Portal:B,portalRef:C},N),{bind:r({ref:T},N)}))}},198:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,u=r.Server,c=r.Native,i=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:i?a:u,l={isBrowser:s===a,isServer:s===u,isNative:s===c,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===a&&!!window.addEventListener,canUseViewport:s===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),o=n.n(r),a=n(199),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var c=function(e){var t=e.as,n=e.errors,r=e.name,c=e.message,i=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["as","errors","name","message","render"]),l=Object(a.f)(),f=Object(a.c)(n||l.errors,r);if(!f)return null;var d=f.message,v=f.types,m=u(u({},s),{children:d||c});return t?o.a.isValidElement(t)?o.a.cloneElement(t,m):o.a.createElement(t,m):i?i({message:d||c,messages:v}):o.a.createElement(o.a.Fragment,u({},m))}},270:function(e,t,n){"use strict";n.r(t);var r=n(201),o=n.n(r),a=n(202),u=n(188),c=n(6),i=n.n(c),s=n(215),l=n(195),f=n.n(l),d=n(809),v=n(199),m=n(189),p=n(211),b=n(204),O=n(212),g=n(196),E=n(191),y=n(192),S=n(225),w=n(197),h=n(206),j=n(207),_=n(208),T=O.object({ageGroup:O.string().required("ageGroupRequired").test("age-invalid","",(function(e){var t=!0;return e&&!e.match(/^[0-9]+$/)&&(t=!1),t}))}).defined();t.default=i.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,l=e.metadata,O=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,C=Object(E.a)(),k=C.setDoGoBack,A=C.setTitle,N=C.setType,I=C.setSubtitle,P=Object(s.g)(),M=Object(d.a)().t,x=Object(m.d)(Object(g.b)(r)),H=x.state,L=x.action,R=i.a.useState(!0),B=Object(u.a)(R,2),D=B[0],G=B[1],q=Object(v.e)({mode:"onChange",defaultValues:null===H||void 0===H?void 0:H[r],resolver:Object(p.a)(T)}),U=q.control,V=q.handleSubmit,J=q.formState,W=J.errors,Q=i.a.useCallback((function(){G(!1),t?P.push(t):P.goBack()}),[P,t]),z=J.isValid;Object(c.useEffect)((function(){Object(y.a)(),A("".concat(M("questionary:ageTitle"))),I(M("")),N("primary"),k((function(){return Q}))}),[Q,k,A,N,I,l,M]);var F=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(L(t),n&&(G(!1),P.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(_.MainContainer,null,i.a.createElement(S.a,{currentStep:null===l||void 0===l?void 0:l.current,totalSteps:null===l||void 0===l?void 0:l.total,progressBar:!0}),i.a.createElement(_.QuestionText,{extraSpace:!0,first:!0},M("questionary:ageGroup")),i.a.createElement(v.a,{control:U,name:"ageGroup",defaultValue:"",render:function(e){var t=e.onChange,n=e.value,r=e.name;return i.a.createElement(_.QuestionInput,{name:r,value:n,onChange:t,type:"number",placeholder:M("questionary:enterAge"),autoComplete:"Off"})}}),i.a.createElement(b.a,{errors:W,name:"ageGroup",render:function(e){var t=e.message;return i.a.createElement(j.TextErrorContainer,null,i.a.createElement(h.a,null),M("main:".concat(t),"Please enter your age"))}}),D&&i.a.createElement(O,null,i.a.createElement(w.a,{leftLabel:M("questionary:nextButton"),leftHandler:V(F),leftDisabled:!z,invert:!0})))}))}}]);
//# sourceMappingURL=47.c4ff89f4.chunk.js.map
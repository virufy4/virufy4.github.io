(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[5],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return E}));var r=n(212),o=n(206),i=n(9),a=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function c(e,t){var n=t||"__STATE_MACHINE__",r=a(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var s=function(e){return void 0===e};function u(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var d=Object(i.createContext)({store:{},updateStore:function(e){return e}}),p=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,o=e.store;return t({externalStoreData:a(r,n),currentStoreData:o})};function l(e,t,n){var i=e,c=t.syncStores;if(!c)return i;try{if(Array.isArray(c))c.forEach((function(e){i=p({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:i})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return p({transform:c.transform,externalStoreName:c.externalStoreName,storageType:n,store:i});Object.entries(c).forEach((function(e){var t=Object(o.a)(e,2),c=t[0],s=t[1],u=a(n,c);s.forEach((function(e){i=Object.assign(Object.assign({},i),Object(r.a)({},e,Object.assign(Object.assign({},i[e]),u[e])))}))}))}}catch(s){return i}return i}var f,h,v,g="undefined"!==typeof window,m=g?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},b=[];function y(e){m=e}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=c(m,n);v=r.getName,f=r.get,h=r.set,b=t.middleWares,u(!1,m,v,f),h(l(f()||e,t,m))}function O(e){var t=Object(i.useState)(f()),n=Object(o.a)(t,2),r=n[0],a=n[1],c=Object(i.useMemo)((function(){return{store:r,updateStore:a}}),[r]);return Object(i.createElement)(d.Provider,Object.assign({value:c},e))}var _=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var o;n&&n.name;if(n&&(o=n(f(),e)),h(s(o)?f():o),m.setItem(v(),JSON.stringify(f())),s(t)||t&&!1!==t.shouldReRenderApp){var i=f();Array.isArray(b)&&b.length&&(i=b.reduce((function(e,t){return t(e)||e}),i)),r(i)}}};function E(e,t){var n=Object(i.useContext)(d),a=n.store,c=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var a=Object(o.a)(n,2),s=a[0],u=a[1];return Object.assign(Object.assign({},e),Object(r.a)({},s,Object(i.useCallback)(_({options:t,callback:u,updateStore:c}),[])))}),{}),action:function(e){return e},state:a}:{actions:{},action:Object(i.useCallback)(e?_({options:t,callback:e,updateStore:c}):function(){},[]),state:a}}},211:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),c=n(44),s=i(n(217));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,i=void 0===n||n,u=e.closeOnEsc,d=void 0===u||u,p=e.bindTo,l=e.isOpen,f=void 0!==l&&l,h=e.onOpen,v=e.onClose,g=e.onPortalClick,m=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),b=s.default(),y=b.isServer,w=b.isBrowser,O=a.useState(f),_=O[0],E=O[1],S=a.useRef(_),C=a.useCallback((function(e){S.current=e,E(e)}),[]),j=a.useRef(),R=a.useRef(w?document.createElement("div"):null);a.useEffect((function(){w&&!R.current&&(R.current=document.createElement("div"))}),[w,R]);var x=a.useMemo((function(){if(!y)return p&&c.findDOMNode(p)||document.body}),[y,p]),k=function(e){if(!e)return{portal:R,targetEl:j,event:e};var t=e||{};t.persist&&t.persist(),t.portal=R,t.targetEl=j,t.event=e;var n=e.currentTarget;return!j.current&&n&&n!==document&&(j.current=t.currentTarget),t},L=Object.entries(m).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){y||r(k(e))},e}),{}),I=a.useCallback((function(e){if(!y){var n=k(e);if(null==j.current)throw setTimeout((function(){return C(!0)}),0),Error(t.errorMessage1);h&&h(n),C(!0)}}),[y,R,C,j,h]),T=a.useCallback((function(e){if(!y){var t=k(e);v&&S.current&&v(t),S.current&&C(!1)}}),[y,v,C]),N=a.useCallback((function(e){return S.current?T(e):I(e)}),[T,I]),A=a.useCallback((function(e){return"Escape"===e.key&&d?T(e):void 0}),[d,T]),M=a.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(R)||0!==e.button||!S.current||t(j)||i&&T(e)}),[y,T,i,R]),P=a.useCallback((function(e){if(!y&&R.current instanceof HTMLElement){var t=k(e);R.current.contains(t.target)&&g&&g(t),M(e)}}),[M]),D=a.useRef({});a.useEffect((function(){if(!y&&x instanceof HTMLElement&&R.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=R.current;return x.appendChild(R.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];m[t]&&(D.current[t]=function(e){return m[t](k(e))},document.addEventListener(n,D.current[t]))})),document.addEventListener("keydown",A),document.addEventListener("mousedown",P),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];m[t]&&(document.removeEventListener(n,D.current[t]),delete D.current[t])})),document.removeEventListener("keydown",A),document.removeEventListener("mousedown",P),x.removeChild(t)}}}),[y,M,A,x,R]);var H=a.useCallback((function(e){var t=e.children;return null!=R.current?c.createPortal(t,R.current):null}),[R]);return Object.assign([I,T,S.current,H,N,j,R],r(r({isOpen:S.current,openPortal:I,ref:j,closePortal:T,togglePortal:N,Portal:H,portalRef:R},L),{bind:r({ref:j},L)}))}},217:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var i=r.Browser,a=r.Server,c=r.Native,s=!("undefined"===typeof window||!window.document||!window.document.createElement),u="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:s?i:a,d={isBrowser:u===i,isServer:u===a,isNative:u===c,device:u,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:u===i&&!!window.addEventListener,canUseViewport:u===i&&!!window.screen},p=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=d,Object.keys(e).map((function(t){return e[t]})),d));var e},l=p();t.weAreServer=function(){d.isServer=!0,l=p()},t.useSSR=function(){return l},t.default=t.useSSR},262:function(e,t,n){"use strict";var r=n(9),o=n.n(r),i=n(79),a=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(s(t)),t.handleErrored=t.handleErrored.bind(s(t)),t.handleChange=t.handleChange.bind(s(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(s(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return o.a.createElement("div",c({},t,{ref:this.handleRecaptchaRef}))},r}(o.a.Component);u.displayName="ReCAPTCHA",u.propTypes={sitekey:a.a.string.isRequired,onChange:a.a.func,grecaptcha:a.a.object,theme:a.a.oneOf(["dark","light"]),type:a.a.oneOf(["image","audio"]),tabindex:a.a.number,onExpired:a.a.func,onErrored:a.a.func,size:a.a.oneOf(["compact","normal","invisible"]),stoken:a.a.string,hl:a.a.string,badge:a.a.oneOf(["bottomright","bottomleft","inline"])},u.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var d=n(82),p=n.n(d);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f={},h=0;var v,g,m=(v=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload=onloadcallback&render=explicit"},g=(g={callbackName:"onloadcallback",globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,o;function i(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}o=t,(n=i).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+h++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"===typeof v?v():v,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=f[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[g.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=g,o=r.globalName,i=r.callbackName,a=r.scriptId;if(o&&"undefined"!==typeof window[o]&&(f[t]={loaded:!0,observers:{}}),f[t]){var c=f[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},f[t]={loaded:!1,observers:s};var u=document.createElement("script");for(var d in u.src=t,u.async=!0,g.attributes)u.setAttribute(d,g.attributes[d]);a&&(u.id=a);var p=function(e){if(f[t]){var n=f[t].observers;for(var r in n)e(n[r])&&delete n[r]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),u.onload=function(){var e=f[t];e&&(e.loaded=!0,p((function(t){return!i&&(t(e),!0)})))},u.onerror=function(){var e=f[t];e&&(e.errored=!0,p((function(t){return t(e),!0})))},document.body.appendChild(u)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===g.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=f[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===g.removeOnUnmount&&delete f[e])},a.render=function(){var t=g.globalName,n=this.props,o=(n.asyncScriptOnLoad,n.forwardedRef),i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=o,Object(r.createElement)(e,i)},i}(r.Component),o=Object(r.forwardRef)((function(e,t){return Object(r.createElement)(n,l({},e,{forwardedRef:t}))}));return o.displayName="AsyncScriptLoader("+t+")",o.propTypes={asyncScriptOnLoad:a.a.func},p()(o,e)})(u);t.a=m}}]);
//# sourceMappingURL=5.5c0892a1.chunk.js.map
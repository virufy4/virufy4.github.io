(this["webpackJsonpcompensar-app"]=this["webpackJsonpcompensar-app"]||[]).push([[12,49],{199:function(e,n,t){"use strict";t.d(n,"a",(function(){return C})),t.d(n,"b",(function(){return E})),t.d(n,"c",(function(){return O})),t.d(n,"d",(function(){return j}));var r=t(197),o=t(196),a=t(9),i=function(e,n){var t=e.getItem(n);try{return t?JSON.parse(t):void 0}catch(r){return}};function u(e,n){var t=n||"__STATE_MACHINE__",r=i(e,t);return{set:function(e){r=e},get:function(){return r},getName:function(){return t}}}var c=function(e){return void 0===e};function l(e,n,t,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return n.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return n.clear()},window.STATE_MACHINE_GET_STORE=function(){return n.getItem(t())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return n.setItem(t()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var s=Object(a.createContext)({store:{},updateStore:function(e){return e}}),d=function(e){var n=e.transform,t=e.externalStoreName,r=e.storageType,o=e.store;return n({externalStoreData:i(r,t),currentStoreData:o})};function f(e,n,t){var a=e,u=n.syncStores;if(!u)return a;try{if(Array.isArray(u))u.forEach((function(e){a=d({transform:e.transform,externalStoreName:e.externalStoreName,storageType:t,store:a})}));else{if(u.externalStoreName&&"function"===typeof u.transform&&"string"===typeof u.externalStoreName)return d({transform:u.transform,externalStoreName:u.externalStoreName,storageType:t,store:a});Object.entries(u).forEach((function(e){var n=Object(o.a)(e,2),u=n[0],c=n[1],l=i(t,u);c.forEach((function(e){a=Object.assign(Object.assign({},a),Object(r.a)({},e,Object.assign(Object.assign({},a[e]),l[e])))}))}))}}catch(c){return a}return a}var p,m,v,b="undefined"!==typeof window,g=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},h=[];function O(e){g=e}function E(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},t=n?n.name:"__STATE_MACHINE__",r=u(g,t);v=r.getName,p=r.get,m=r.set,h=n.middleWares,l(!1,g,v,p),m(f(p()||e,n,g))}function C(e){var n=Object(a.useState)(p()),t=Object(o.a)(n,2),r=t[0],i=t[1],u=Object(a.useMemo)((function(){return{store:r,updateStore:i}}),[r]);return Object(a.createElement)(s.Provider,Object.assign({value:u},e))}var w=function(e){var n=e.options,t=e.callback,r=e.updateStore;return function(e){var o;t&&t.name;if(t&&(o=t(p(),e)),m(c(o)?p():o),g.setItem(v(),JSON.stringify(p())),c(n)||n&&!1!==n.shouldReRenderApp){var a=p();Array.isArray(h)&&h.length&&(a=h.reduce((function(e,n){return n(e)||e}),a)),r(a)}}};function j(e,n){var t=Object(a.useContext)(s),i=t.store,u=t.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,t){var i=Object(o.a)(t,2),c=i[0],l=i[1];return Object.assign(Object.assign({},e),Object(r.a)({},c,Object(a.useCallback)(w({options:n,callback:l,updateStore:u}),[])))}),{}),action:function(e){return e},state:i}:{actions:{},action:Object(a.useCallback)(e?w({options:n,callback:e,updateStore:u}):function(){},[]),state:i}}},200:function(e,n,t){"use strict";var r=t(9),o=t.n(r),a=t(216);n.a=function(){var e=o.a.useContext(a.a),n=e.title,t=e.setTitle,r=e.subtitle,i=e.setSubtitle,u=e.type,c=e.setType,l=e.logoSize,s=e.setLogoSize,d=e.setDoGoBack;return{title:n,setTitle:t,subtitle:r,setSubtitle:i,type:u,setType:c,logoSize:l,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:d}}},201:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},203:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t(197),o=t(207);function a(e){return function(n,t){return Object(o.a)(Object(o.a)({},n),{},Object(r.a)({},e,Object(o.a)(Object(o.a)({},n[e]),t)))}}function i(){return function(e){return{welcome:{language:e.welcome.language}}}}},204:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(9),o=t.n(r),a=t(205),i=t(195);function u(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return e},e}var c=t(194).default.div(u(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),l=o.a.memo((function(e){var n=e.invert,t=void 0!==n&&n,r=e.leftLabel,i=e.leftDisabled,u=e.leftHandler,l=e.rightLabel,s=e.rightDisabled,d=e.rightHandler;return o.a.createElement(c,null,o.a.createElement(a.a,{dark:t,disabled:i,onClick:u},r),l&&d&&o.a.createElement(a.a,{dark:!t,disabled:s,onClick:d},l))})),s=o.a.memo(l)},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(210),o=t(9),a=t.n(o),i=t(195),u=t(194),c=t(202);function l(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var s=u.default.button(l(),(function(e){var n=e.dark,t=e.disabled?c.a.purple_50:c.a.purple;return n?"\n    background-color: ".concat(t,";\n    color: ").concat(c.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(c.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),d=a.a.memo((function(e){var n=e.children,t=Object(r.a)(e,["children"]);return a.a.createElement(s,Object.assign({type:"button"},t),n)}))},206:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i=t(9),u=t(44),c=a(t(212));n.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",n.default=function(e){void 0===e&&(e={});var t=e.closeOnOutsideClick,a=void 0===t||t,l=e.closeOnEsc,s=void 0===l||l,d=e.bindTo,f=e.isOpen,p=void 0!==f&&f,m=e.onOpen,v=e.onClose,b=e.onPortalClick,g=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),h=c.default(),O=h.isServer,E=h.isBrowser,C=i.useState(p),w=C[0],j=C[1],y=i.useRef(w),S=i.useCallback((function(e){y.current=e,j(e)}),[]),x=i.useRef(),k=i.useRef(E?document.createElement("div"):null);i.useEffect((function(){E&&!k.current&&(k.current=document.createElement("div"))}),[E,k]);var _=i.useMemo((function(){if(!O)return d&&u.findDOMNode(d)||document.body}),[O,d]),T=function(e){if(!e)return{portal:k,targetEl:x,event:e};var n=e||{};n.persist&&n.persist(),n.portal=k,n.targetEl=x,n.event=e;var t=e.currentTarget;return!x.current&&t&&t!==document&&(x.current=n.currentTarget),n},R=Object.entries(g).reduce((function(e,n){var t=n[0],r=n[1];return e[t]=function(e){O||r(T(e))},e}),{}),M=i.useCallback((function(e){if(!O){var t=T(e);if(null==x.current)throw setTimeout((function(){return S(!0)}),0),Error(n.errorMessage1);m&&m(t),S(!0)}}),[O,k,S,x,m]),A=i.useCallback((function(e){if(!O){var n=T(e);v&&y.current&&v(n),y.current&&S(!1)}}),[O,v,S]),I=i.useCallback((function(e){return y.current?A(e):M(e)}),[A,M]),L=i.useCallback((function(e){return"Escape"===e.key&&s?A(e):void 0}),[s,A]),N=i.useCallback((function(e){var n=function(n){return n.current.contains(e.target)};n(k)||0!==e.button||!y.current||n(x)||a&&A(e)}),[O,A,a,k]),P=i.useCallback((function(e){if(!O&&k.current instanceof HTMLElement){var n=T(e);k.current.contains(n.target)&&b&&b(n),N(e)}}),[N]),B=i.useRef({});i.useEffect((function(){if(!O&&_ instanceof HTMLElement&&k.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},n=k.current;return _.appendChild(k.current),Object.entries(e).forEach((function(e){var n=e[0],t=e[1];g[n]&&(B.current[n]=function(e){return g[n](T(e))},document.addEventListener(t,B.current[n]))})),document.addEventListener("keydown",L),document.addEventListener("mousedown",P),function(){Object.entries(e).forEach((function(e){var n=e[0],t=e[1];g[n]&&(document.removeEventListener(t,B.current[n]),delete B.current[n])})),document.removeEventListener("keydown",L),document.removeEventListener("mousedown",P),_.removeChild(n)}}}),[O,N,L,_,k]);var D=i.useCallback((function(e){var n=e.children;return null!=k.current?u.createPortal(n,k.current):null}),[k]);return Object.assign([M,A,y.current,D,I,x,k],r(r({isOpen:y.current,openPortal:M,ref:x,closePortal:A,togglePortal:I,Portal:D,portalRef:k},R),{bind:r({ref:x},R)}))}},212:function(e,n,t){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=n.Device||(n.Device={}));var a=r.Browser,i=r.Server,u=r.Native,c=!("undefined"===typeof window||!window.document||!window.document.createElement),l="undefined"!=typeof navigator&&"ReactNative"==navigator.product?u:c?a:i,s={isBrowser:l===a,isServer:l===i,isNative:l===u,device:l,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:l===a&&!!window.addEventListener,canUseViewport:l===a&&!!window.screen},d=function(){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.reduce((function(e,n){return o(o({},e),n)}),{})}((e=s,Object.keys(e).map((function(n){return e[n]})),s));var e},f=d();n.weAreServer=function(){s.isServer=!0,f=d()},n.useSSR=function(){return f},n.default=n.useSSR},249:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(234);function o(e,n){return new Promise((function(t){e.duration===1/0||r.isSafari&&!(r.isSafari&&e.duration>0)?(e.addEventListener("durationchange",(function(){n?e.remove():(e.pause(),e.volume=1,e.currentTime=0),t(e.duration)})),e.currentTime=86400,e.play()):t(e.duration)}))}},321:function(e,n,t){"use strict";t.r(n),t.d(n,"MainContainer",(function(){return M})),t.d(n,"TextAddFile",(function(){return A})),t.d(n,"TextFileConstraints",(function(){return I})),t.d(n,"TextErrorContainer",(function(){return L})),t.d(n,"UploadContainer",(function(){return N})),t.d(n,"UploadInput",(function(){return P})),t.d(n,"UploadButton",(function(){return B})),t.d(n,"ArrowUp",(function(){return D})),t.d(n,"CloudsSVG",(function(){return F}));var r=t(195),o=t(194),a=t(202),i=t(213),u=t(9),c=t.n(u);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=c.a.createElement("path",{d:"M166.609 94.673C166.611 91.0315 165.894 87.4253 164.502 84.0606C163.109 80.6958 161.067 77.6384 158.492 75.063C155.917 72.4875 152.86 70.4445 149.495 69.0506C146.13 67.6568 142.524 66.9393 138.882 66.9393C137.294 66.94 135.71 67.0789 134.146 67.3547C134.166 56.8902 130.027 46.8466 122.64 39.4335C115.253 32.0204 105.223 27.8449 94.7569 27.8256C84.2909 27.8063 74.2459 31.9448 66.8317 39.3307C59.4175 46.7166 55.2414 56.7448 55.2221 67.2093C53.9521 67.0353 52.672 66.9451 51.3901 66.9393C44.1573 66.9086 37.1987 69.705 31.9989 74.7319C26.799 79.7588 23.7696 86.6183 23.5569 93.8471C23.3442 101.076 25.965 108.102 30.8602 113.425C35.7554 118.749 42.5375 121.95 49.7597 122.344H140.585C147.631 121.911 154.246 118.807 159.081 113.665C163.917 108.523 166.609 101.731 166.609 94.673Z",fill:"#D5E4FF"}),f=c.a.createElement("path",{d:"M197 38.8013C197.007 36.4261 196.493 34.0783 195.494 31.9232C194.495 29.7681 193.036 27.8581 191.219 26.3277C189.403 24.7973 187.272 23.6837 184.979 23.0654C182.685 22.4471 180.284 22.339 177.944 22.7488C177.827 16.6826 175.337 10.9037 171.009 6.65113C166.681 2.39858 160.858 0.0109033 154.79 3.72496e-05C148.722 -0.0108288 142.891 2.35598 138.547 6.593C134.204 10.83 131.694 16.6 131.555 22.6657C130.809 22.5576 130.056 22.5021 129.302 22.4996C125.066 22.5049 121 24.1578 117.962 27.1082C114.924 30.0587 113.154 34.0753 113.026 38.3078C112.897 42.5403 114.421 46.6567 117.275 49.7855C120.129 52.9144 124.088 54.8102 128.315 55.0718H181.703C185.844 54.8131 189.731 52.9865 192.573 49.9639C195.414 46.9413 196.997 42.9497 197 38.8013Z",fill:"#EAF1FF"}),p=c.a.createElement("path",{d:"M47.3115 91.1833C47.3115 88.7462 46.3432 86.4089 44.6197 84.6856C42.8961 82.9623 40.5585 81.9941 38.121 81.9941C37.5953 81.9913 37.0704 82.0365 36.5529 82.1291C36.5529 78.6621 35.1754 75.337 32.7235 72.8854C30.2715 70.4339 26.946 69.0566 23.4785 69.0566C20.0109 69.0566 16.6854 70.4339 14.2334 72.8854C11.7815 75.337 10.404 78.6621 10.404 82.1291C9.98039 82.0749 9.55377 82.0472 9.12669 82.046C6.74799 82.0626 4.46834 83.0006 2.76706 84.6629C1.06577 86.3252 0.0754078 88.5823 0.00413104 90.9597C-0.0671457 93.337 0.786245 95.6494 2.38488 97.4106C3.98352 99.1718 6.20286 100.245 8.57629 100.404H38.6922C41.0347 100.258 43.2327 99.2214 44.8354 97.507C46.4381 95.7926 47.324 93.53 47.3115 91.1833Z",fill:"#B1CDFF"}),m=function(e){var n=e.svgRef,t=e.title,r=s(e,["svgRef","title"]);return c.a.createElement("svg",l({viewBox:"0 0 197 123",fill:"none",ref:n},r),t?c.a.createElement("title",null,t):null,d,f,p)},v=c.a.forwardRef((function(e,n){return c.a.createElement(m,l({svgRef:n},e))}));t.p;function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function g(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var h=c.a.createElement("path",{d:"M20 33.4749V6.52491",stroke:"#3578DE",strokeWidth:3.675,strokeLinecap:"round",strokeLinejoin:"round"}),O=c.a.createElement("path",{d:"M8.97485 17.5499L19.9999 6.5249L31.0249 17.5499",stroke:"#3578DE",strokeWidth:3.675,strokeLinecap:"round",strokeLinejoin:"round"}),E=function(e){var n=e.svgRef,t=e.title,r=g(e,["svgRef","title"]);return c.a.createElement("svg",b({viewBox:"0 0 40 40",fill:"none",ref:n},r),t?c.a.createElement("title",null,t):null,h,O)},C=c.a.forwardRef((function(e,n){return c.a.createElement(E,b({svgRef:n},e))}));t.p;function w(){var e=Object(r.a)(["\n  width: 197px;\n  height: 122px;\n  margin: 0 auto;\n  margin-top: 110px;\n  display: block;\n\n  @media screen and (",") {\n    width: 374px;\n    height: 299px;\n  }\n"]);return w=function(){return e},e}function j(){var e=Object(r.a)(["\n  width: 39px;\n  height: 39px;\n  position: absolute; \n  bottom: 55%;\n  pointer-events: none;\n\n  @media screen and (",") {\n    width: 80px;\n    height: 80px;\n    position: absolute;\n    bottom: 60%;\n  } \n"]);return j=function(){return e},e}function y(){var e=Object(r.a)(["\n  width: 98px;\n  height: 98px;\n  background-color: #EBF1FC;\n  border-radius: 50%;\n  cursor: pointer;\n  position: relative;\n  margin-top: -40%;\n\n  @media screen and (",") {\n    width: 200px;\n    height: 200px;\n    margin-bottom: 30px;\n  }\n"]);return y=function(){return e},e}function S(){var e=Object(r.a)(["\n  display: none;\n"]);return S=function(){return e},e}function x(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  margin: 0 auto;\n  position: relative;\n"]);return x=function(){return e},e}function k(){var e=Object(r.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  display: 'flex';\n  height: 50px;\n"]);return k=function(){return e},e}function _(){var e=Object(r.a)(["\n  text-align: center;\n  line-height: 24px;\n  color: ",";\n\n  @media screen and (",") {\n    font-size: 1rem;\n    margin-top: 20px;\n  }\n"]);return _=function(){return e},e}function T(){var e=Object(r.a)(["\n  text-align: center;\n  line-height: 24px;\n\n  @media screen and (",") {\n    font-size: 1.75rem;\n  }\n"]);return T=function(){return e},e}function R(){var e=Object(r.a)(["\n  width: 100%; \n  max-width: 320px; \n  margin: auto; \n\n  @media screen and (",") {\n    margin-bottom: 64px;\n    max-width: 470px;\n  }\n"]);return R=function(){return e},e}var M=o.default.div(R(),(function(e){return e.theme.breakpoints.tablet})),A=Object(o.default)(i.a).attrs({dark:!0,fontSize:"1rem"})(T(),(function(e){return e.theme.breakpoints.tablet})),I=Object(o.default)(i.a).attrs({dark:!0,fontSize:"0.625rem"})(_(),(function(e){return e.theme.colors.darkGray}),(function(e){return e.theme.breakpoints.tablet})),L=o.default.div(k(),a.a.red),N=o.default.div(x()),P=o.default.input(S()),B=o.default.label(y(),(function(e){return e.theme.breakpoints.tablet})),D=Object(o.default)(C)(j(),(function(e){return e.theme.breakpoints.tablet})),F=Object(o.default)(v)(w(),(function(e){return e.theme.breakpoints.tablet}))},325:function(e,n,t){"use strict";t.r(n);var r=t(197),o=t(196),a=t(9),i=t.n(a),u=t(214),c=t(206),l=t.n(c),s=t(808),d=t(217),f=t(199),p=t(232),m=t(234),v=t(355),b=t(204),g=t(213),h=t(363),O=t(200);var E=t(203),C=t(201),w=t(321),j={recordYourBreath:5,recordYourSpeech:5,recordYourCough:3};"audio/wav,audio/wave,audio/wav,audio/x-wav,audio/x-pn-wav,audio/mp3,audio/ogg".concat(m.isSafari||m.isIOS?"":"audio/flac");var y=v.a.object({uploadedFile:v.a.mixed().required("ERROR.FILE_REQUIRED").validateAudioSize(5).when("$_currentLogic",(function(e,n){return n.validateAudioLength(j[e]||5)}))}).defined();n.default=i.a.memo((function(e){var n,t,c=e.storeKey,m=e.previousStep,v=e.nextStep,j=e.metadata,S=l()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,x=Object(O.a)(),k=x.setDoGoBack,_=x.setTitle,T=x.setSubtitle,R=x.setType,M=Object(u.g)(),A=Object(f.d)(Object(E.b)(c)),I=A.state,L=A.action,N=function(){var e=i.a.useState(!1),n=Object(o.a)(e,2),t=n[0],r=n[1];return{isOpen:t,openModal:i.a.useCallback((function(){r(!0)}),[]),closeModal:i.a.useCallback((function(){r(!1)}),[]),toggleModal:i.a.useCallback((function(){r((function(e){return!e}))}),[])}}(),P=N.isOpen,B=N.openModal,D=N.closeModal,F=Object(a.useRef)(null),H=Object(d.e)({mode:"onChange",defaultValues:null===I||void 0===I||null===(n=I[c])||void 0===n?void 0:n[null===j||void 0===j?void 0:j.currentLogic],resolver:Object(p.a)(y)}).control,U=Object(s.a)().t,z=Object(u.h)(),G=(null===z||void 0===z||null===(t=z.state)||void 0===t?void 0:t.isShortAudioCollection)||!1,W=i.a.useState(!0),V=Object(o.a)(W,2),J=V[0],Z=V[1],Y=i.a.useState(""),q=Object(o.a)(Y,2),Q=q[0],K=q[1],$=i.a.useCallback((function(e){v&&(L(Object(r.a)({},null===j||void 0===j?void 0:j.currentLogic,{recordingFile:null,uploadedFile:e})),Z(!1),M.push(v,{from:"step-manual-upload",isShortAudioCollection:G}))}),[v,L,j,M,G]),X=i.a.useCallback((function(){Z(!1),m?M.push(m,{isShortAudioCollection:G}):M.goBack()}),[M,m,G]),ee=i.a.useCallback((function(e){y.validate({uploadedFile:e}).then((function(){$(e)})).catch((function(e){"ERROR.FILE_SIZE"===e.errors[0]&&K(U("recordingsRecordManual:fileSizeTooBig")),"ERROR.FILE_REQUIRED"===e.errors[0]?K(U("recordingsRecordManual:fileRequired")):K(U("recordingsRecordManual:fileDurationTooShort")),B()}))}),[$,U,B]);return Object(a.useEffect)((function(){Object(C.a)(),_(U("recordingsRecordManual:header")),R("primary"),T(""),k((function(){return X}))}),[X,k,_,R,T,U]),i.a.createElement(i.a.Fragment,null,i.a.createElement(w.MainContainer,null,i.a.createElement(g.c,null,U("recordingsRecordManual:micError")),i.a.createElement(w.CloudsSVG,null),i.a.createElement(d.a,{control:H,name:"uploadedFile",render:function(e){var n=e.name;return i.a.createElement(w.UploadContainer,null,i.a.createElement(w.UploadButton,{htmlFor:"uploaded-file"}),i.a.createElement(w.ArrowUp,null),i.a.createElement(w.UploadInput,{ref:F,id:"uploaded-file",type:"file",name:n,accept:"audio/wav,audio/wave,audio/wav,audio/x-wav,audio/x-pn-wav,audio/mp3,audio/ogg",onChange:function(e){var n;return ee(null===(n=e.currentTarget.files)||void 0===n?void 0:n[0])}}))}})),i.a.createElement(h.a,{isOpen:P,modalTitle:"Oops.",onConfirm:D},Q),J&&i.a.createElement(S,null,i.a.createElement(b.a,{invert:!0,leftLabel:U("recordingsRecordManual:uploadFile"),leftHandler:function(){var e;return null===(e=F.current)||void 0===e?void 0:e.click()}})))}))},355:function(e,n,t){"use strict";var r=t(208),o=t.n(r),a=t(209),i=t(233),u=t(249);i.addMethod(i.mixed,"validateAudioLength",(function(e){return this.test("fileDuration","ERROR.FILE_DURATION",function(){var n=Object(a.a)(o.a.mark((function n(t){var r,a,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=12;break}return r=t,(a=new Audio(URL.createObjectURL(r))).defaultMuted=!0,a.muted=!0,a.load(),n.next=8,new Promise((function(e){return a.addEventListener("loadedmetadata",e)}));case 8:return n.next=10,Object(u.a)(a);case 10:return i=n.sent,n.abrupt("return",i>=e);case 12:return n.abrupt("return",!!t);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})),i.addMethod(i.mixed,"validateAudioSize",(function(e){return this.test("fileSize","ERROR.FILE_SIZE",(function(n){return n?n.size<=Math.pow(1024,3)*e:!!n}))})),n.a=i},363:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var r=t(210),o=t(9),a=t.n(o),i=t(302),u=t.n(i),c=t(808),l=t(205),s=t(195),d=t(194);function f(){var e=Object(s.a)(["\n  font-family: 'Source Sans Pro';\n  text-align: center;\n  line-height: 25px;\n  font-size: 18px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n"]);return f=function(){return e},e}function p(){var e=Object(s.a)(["\n  font-family: 'Biko';\n  font-size: 30px;\n  line-height: 30px;\n  margin-bottom: 10px;\n  font-weight: 600;\n"]);return p=function(){return e},e}function m(){var e=Object(s.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (",") {\n    margin: auto;\n"]);return m=function(){return e},e}var v=d.default.div(m(),(function(e){return e.theme.breakpoints.tablet})),b=d.default.div(p()),g=d.default.div(f());u.a.setAppElement("#root");var h=a.a.memo((function(e){var n=e.modalTitle,t=e.children,o=e.onConfirm,i=Object(r.a)(e,["modalTitle","children","onConfirm"]),s=Object(c.a)().t;return a.a.createElement(u.a,Object.assign({},i,{style:{content:{height:"281px",maxWidth:"348px",margin:"auto",borderRadius:"10px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}}),a.a.createElement(v,{className:"ModalBody"},a.a.createElement(b,null,n),a.a.createElement(g,null,t),a.a.createElement(l.a,{onClick:o,dark:!0},s("recordingsIntroduction:retryButton","Retry"))))}))}}]);
//# sourceMappingURL=12.2d7d9f70.chunk.js.map
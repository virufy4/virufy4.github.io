(this["webpackJsonpmtd-app"]=this["webpackJsonpmtd-app"]||[]).push([[18,32],{186:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(193),o=n(6),a=n.n(o),c=n(183),i=n(182),u=n(184);function l(){var e=Object(c.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var s=i.default.button(l(),(function(e){var t=e.dark,n=e.disabled?u.a.purple_50:u.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),f=a.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return a.a.createElement(s,Object.assign({type:"button"},n),t)}))},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(6),o=n.n(r),a=n(186),c=n(183);function i(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n    text-align: center;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return i=function(){return e},e}var u=n(182).default.div(i(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),l=o.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftSide,c=e.leftDisabled,i=e.leftHandler,l=e.rightSide,s=e.rightDisabled,f=e.rightHandler,d=e.className;return o.a.createElement(u,{className:d},o.a.createElement(a.a,{dark:n,disabled:c,onClick:i},r),l&&f&&o.a.createElement(a.a,{dark:!n,disabled:s,onClick:f},l))})),s=o.a.memo(l)},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){return t.includes(e)}},195:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(6),i=n(39),u=a(n(220));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,l=e.closeOnEsc,s=void 0===l||l,f=e.bindTo,d=e.isOpen,m=void 0!==d&&d,v=e.onOpen,p=e.onClose,b=e.onPortalClick,h=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),g=u.default(),y=g.isServer,w=g.isBrowser,O=c.useState(m),E=O[0],k=O[1],S=c.useRef(E),j=c.useCallback((function(e){S.current=e,k(e)}),[]),C=c.useRef(),x=c.useRef(w?document.createElement("div"):null);c.useEffect((function(){w&&!x.current&&(x.current=document.createElement("div"))}),[w,x]);var P=c.useMemo((function(){if(!y)return f&&i.findDOMNode(f)||document.body}),[y,f]),_=function(e){if(!e)return{portal:x,targetEl:C,event:e};var t=e||{};t.persist&&t.persist(),t.portal=x,t.targetEl=C,t.event=e;var n=e.currentTarget;return!C.current&&n&&n!==document&&(C.current=t.currentTarget),t},L=Object.entries(h).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){y||r(_(e))},e}),{}),M=c.useCallback((function(e){if(!y){var n=_(e);if(null==C.current)throw setTimeout((function(){return j(!0)}),0),Error(t.errorMessage1);v&&v(n),j(!0)}}),[y,x,j,C,v]),T=c.useCallback((function(e){if(!y){var t=_(e);p&&S.current&&p(t),S.current&&j(!1)}}),[y,p,j]),I=c.useCallback((function(e){return S.current?T(e):M(e)}),[T,M]),D=c.useCallback((function(e){return"Escape"===e.key&&s?T(e):void 0}),[s,T]),R=c.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(x)||0!==e.button||!S.current||t(C)||a&&T(e)}),[y,T,a,x]),B=c.useCallback((function(e){if(!y&&x.current instanceof HTMLElement){var t=_(e);x.current.contains(t.target)&&b&&b(t),R(e)}}),[R]),N=c.useRef({});c.useEffect((function(){if(!y&&P instanceof HTMLElement&&x.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=x.current;return P.appendChild(x.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];h[t]&&(N.current[t]=function(e){return h[t](_(e))},document.addEventListener(n,N.current[t]))})),document.addEventListener("keydown",D),document.addEventListener("mousedown",B),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];h[t]&&(document.removeEventListener(n,N.current[t]),delete N.current[t])})),document.removeEventListener("keydown",D),document.removeEventListener("mousedown",B),P.removeChild(t)}}}),[y,R,D,P,x]);var W=c.useCallback((function(e){var t=e.children;return null!=x.current?i.createPortal(t,x.current):null}),[x]);return Object.assign([M,T,S.current,W,I,C,x],r(r({isOpen:S.current,openPortal:M,ref:C,closePortal:T,togglePortal:I,Portal:W,portalRef:x},L),{bind:r({ref:C},L)}))}},220:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,c=r.Server,i=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),l="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:u?a:c,s={isBrowser:l===a,isServer:l===c,isNative:l===i,device:l,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:l===a&&!!window.addEventListener,canUseViewport:l===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=s,Object.keys(e).map((function(t){return e[t]})),s));var e},d=f();t.weAreServer=function(){s.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},285:function(e,t,n){"use strict";n.r(t);var r=n(185),o=n(6),a=n.n(o),c=n(203),i=n(195),u=n.n(i),l=n(217),s=n(793),f=n(412),d=n(196),m=n(188),v=n(202),p=n(190),b=n(197),h=n(192),g=["Please use your own device and wear a mask when appropriate.","Disinfect your device and any affected or nearby surfaces after recording your cough/speech.","If you have an underlying condition that increases your risk from coughing, please check with your health care provider before participating.","If you feel your symptoms are getting worse, please contact your local medical response."];t.default=a.a.memo((function(e){var t=u()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,n=Object(o.useState)(!0),i=Object(r.a)(n,2),y=i[0],w=i[1],O=Object(d.a)(),E=O.setType,k=O.setSubtitle,S=O.setDoGoBack,j=O.setTitle,C=O.title,x=Object(c.g)(),P=a.a.useCallback((function(){e.nextStep&&x.push(e.nextStep)}),[x,e.nextStep]),_=Object(o.useCallback)((function(){e.previousStep?(w(!1),x.push(e.previousStep)):x.goBack()}),[]);Object(o.useEffect)((function(){C&&j("")}),[C]);var L=Object(s.a)(),M=L.t,T=L.i18n;Object(o.useEffect)((function(){Object(b.a)(),S((function(){return _})),E("secondary"),k(M("beforeStart:title"))}),[_,S,E,k,M]);var I=M("beforeStart:advise_list",{returnObjects:!0,defaultValue:g});return a.a.createElement(h.WelcomeStyledFormAlternative,null,a.a.createElement(h.ContainerShapeDown,{isMobile:l.isMobile},a.a.createElement(h.InnerContainerShapeDown,null,a.a.createElement(v.a,null,a.a.createElement(f.a,{i18nKey:"beforeStart:subtitle"},a.a.createElement("strong",null,"To ensure safety, we advise you to:"))))),a.a.createElement(h.WelcomeContent,{mt:20},a.a.createElement(h.WelcomeItemList,null,I.map((function(e,t){return a.a.createElement(h.WelcomeItemListItem,{className:"welcomeItemListItem",key:"advise_".concat(t)},e)}))),y&&a.a.createElement(t,null,a.a.createElement(m.a,{leftSide:Object(p.a)(T.language,["ur"])?a.a.createElement(h.ArrowRightSVG,null):M("main:nextButton"),leftHandler:P,invert:!0}))))}))},317:function(e,t,n){"use strict";n.r(t);var r=n(285);n.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=18.228d7170.chunk.js.map
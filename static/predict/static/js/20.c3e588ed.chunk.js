(this["webpackJsonpmtd-app"]=this["webpackJsonpmtd-app"]||[]).push([[20,34],{187:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(198),o=n(6),a=n.n(o),c=n(183),i=n(182),l=n(184);function u(){var e=Object(c.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return u=function(){return e},e}var s=i.default.button(u(),(function(e){var t=e.dark,n=e.disabled?l.a.purple_50:l.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(l.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(l.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),f=a.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return a.a.createElement(s,Object.assign({type:"button"},n),t)}))},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(6),o=n.n(r),a=n(187),c=n(183);function i(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n    text-align: center;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return i=function(){return e},e}var l=n(182).default.div(i(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),u=o.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftSide,c=e.leftDisabled,i=e.leftHandler,u=e.rightSide,s=e.rightDisabled,f=e.rightHandler,d=e.className;return o.a.createElement(l,{className:d},o.a.createElement(a.a,{dark:n,disabled:c,onClick:i},r),u&&f&&o.a.createElement(a.a,{dark:!n,disabled:s,onClick:f},u))})),s=o.a.memo(u)},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){return t.includes(e)}},200:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(6),i=n(39),l=a(n(240));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,u=e.closeOnEsc,s=void 0===u||u,f=e.bindTo,d=e.isOpen,p=void 0!==d&&d,m=e.onOpen,v=e.onClose,h=e.onPortalClick,b=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),y=l.default(),g=y.isServer,O=y.isBrowser,E=c.useState(p),j=E[0],w=E[1],x=c.useRef(j),k=c.useCallback((function(e){x.current=e,w(e)}),[]),S=c.useRef(),P=c.useRef(O?document.createElement("div"):null);c.useEffect((function(){O&&!P.current&&(P.current=document.createElement("div"))}),[O,P]);var R=c.useMemo((function(){if(!g)return f&&i.findDOMNode(f)||document.body}),[g,f]),T=function(e){if(!e)return{portal:P,targetEl:S,event:e};var t=e||{};t.persist&&t.persist(),t.portal=P,t.targetEl=S,t.event=e;var n=e.currentTarget;return!S.current&&n&&n!==document&&(S.current=t.currentTarget),t},C=Object.entries(b).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){g||r(T(e))},e}),{}),N=c.useCallback((function(e){if(!g){var n=T(e);if(null==S.current)throw setTimeout((function(){return k(!0)}),0),Error(t.errorMessage1);m&&m(n),k(!0)}}),[g,P,k,S,m]),D=c.useCallback((function(e){if(!g){var t=T(e);v&&x.current&&v(t),x.current&&k(!1)}}),[g,v,k]),I=c.useCallback((function(e){return x.current?D(e):N(e)}),[D,N]),_=c.useCallback((function(e){return"Escape"===e.key&&s?D(e):void 0}),[s,D]),L=c.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(P)||0!==e.button||!x.current||t(S)||a&&D(e)}),[g,D,a,P]),M=c.useCallback((function(e){if(!g&&P.current instanceof HTMLElement){var t=T(e);P.current.contains(t.target)&&h&&h(t),L(e)}}),[L]),V=c.useRef({});c.useEffect((function(){if(!g&&R instanceof HTMLElement&&P.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=P.current;return R.appendChild(P.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];b[t]&&(V.current[t]=function(e){return b[t](T(e))},document.addEventListener(n,V.current[t]))})),document.addEventListener("keydown",_),document.addEventListener("mousedown",M),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];b[t]&&(document.removeEventListener(n,V.current[t]),delete V.current[t])})),document.removeEventListener("keydown",_),document.removeEventListener("mousedown",M),R.removeChild(t)}}}),[g,L,_,R,P]);var A=c.useCallback((function(e){var t=e.children;return null!=P.current?i.createPortal(t,P.current):null}),[P]);return Object.assign([N,D,x.current,A,I,S,P],r(r({isOpen:x.current,openPortal:N,ref:S,closePortal:D,togglePortal:I,Portal:A,portalRef:P},C),{bind:r({ref:S},C)}))}},201:function(e,t,n){var r=n(74);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},202:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},203:function(e,t,n){e.exports={parse:n(204),stringify:n(207)}},204:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(205),a=Object.create?Object.create(null):{};function c(e,t,n,r,o){var a=t.indexOf("<",r),c=t.slice(r,-1===a?void 0:a);/^\s*$/.test(c)&&(c=" "),(!o&&a>-1&&n+e.length>=0||" "!==c)&&e.push({type:"text",content:c})}e.exports=function(e,t){t||(t={}),t.components||(t.components=a);var n,i=[],l=-1,u=[],s={},f=!1;return e.replace(r,(function(r,a){if(f){if(r!=="</"+n.name+">")return;f=!1}var d,p="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),v=a+r.length,h=e.charAt(v);p&&!m&&(l++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!h||"<"===h||c(n.children,e,l,v,t.ignoreWhitespace),s[n.tagName]=n,0===l&&i.push(n),(d=u[l-1])&&d.children.push(n),u[l]=n),(m||!p||n.voidElement)&&(m||l--,!f&&"<"!==h&&h&&c(d=-1===l?i:u[l].children,e,l,v,t.ignoreWhitespace))})),!i.length&&e.length&&c(i,e,0,0,t.ignoreWhitespace),i}},205:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(206);e.exports=function(e){var t,n=0,a=!0,c={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return a=!0,void n++;a?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(c.voidElement=!0),c.name=r):(c.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(c.attrs[t]=t),t=r),n++,a=!1})),c}},206:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},207:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(201),o=n.n(r),a=n(202),c=n.n(a),i=n(9),l=n.n(i),u=n(6),s=n.n(u),f=n(203),d=n.n(f),p=n(174),m=n(223);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],i=t&&new RegExp(a.join("|")).test(t);if(!e&&!i)return[t];var l={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(b(t)?e(y(t)):"object"!==c()(t)||s.a.isValidElement(t)||Object.assign(l,t))}))}(e);var u=n.services.interpolator.interpolate(t,h(h({},l),o),n.language),f=d.a.parse("<0>".concat(u,"</0>"));function p(e,t,n){var r=y(e),o=v(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return s.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function m(e,t,n,r){e.dummy&&(e.children=t),n.push(s.a.cloneElement(e,h(h({},e.props),{},{key:r}),t))}function v(t,n,o){var l=g(t);return g(n).reduce((function(t,n,u){var f=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=l[parseInt(n.name,10)];!d&&1===o.length&&o[0][n.name]&&(d=o[0][n.name]),d||(d={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=h({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=s.a.isValidElement(y),O=g&&b(n,!0)&&!n.voidElement,E=i&&"object"===c()(y)&&y.dummy&&!g,j="object"===c()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(b(y)||O){m(y,p(y,n,o),t,u)}else if(E){var w=v(l,n.children,o);t.push(s.a.cloneElement(y,h(h({},y.props),{},{key:u}),w))}else if(Number.isNaN(parseFloat(n.name))){if(j)m(y,p(y,n,o),t,u);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)}));else{var x=v(l,n.children,o);t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)},x))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var k=v(l,n.children,o);t.push("<".concat(n.name,">").concat(k,"</").concat(n.name,">"))}}else if("object"!==c()(y)||g)1===n.children.length&&f?t.push(s.a.cloneElement(y,h(h({},y.props),{},{key:u}),f)):t.push(s.a.cloneElement(y,h(h({},y.props),{},{key:u})));else{var S=n.children[0]?f:null;S&&t.push(S)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(v([{dummy:!0,children:e}],f,g(e||[]))[0])}function E(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,i=e.tOptions,l=e.values,f=e.defaults,d=e.components,v=e.ns,b=e.i18n,y=e.t,E=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(u.useContext)(p.a)||{},w=j.i18n,x=j.defaultNS,k=b||w||Object(p.d)();if(!k)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var S=y||k.t.bind(k)||function(e){return e},P=h(h({},Object(p.c)()),k.options&&k.options.react),R=v||S.ns||x||k.options&&k.options.defaultNS;R="string"===typeof R?[R]:R||["translation"];var T=f||function e(t,n){if(!t)return"";var r="",a=g(t),i=n.transKeepBasicHtmlNodesFor||[];return a.forEach((function(t,a){if("string"===typeof t)r+="".concat(t);else if(s.a.isValidElement(t)){var l=Object.keys(t.props).length,u=i.indexOf(t.type)>-1,f=t.props.children;if(!f&&u&&0===l)r+="<".concat(t.type,"/>");else if(f||u&&0===l)if(t.props.i18nIsDynamicList)r+="<".concat(a,"></").concat(a,">");else if(u&&1===l&&"string"===typeof f)r+="<".concat(t.type,">").concat(f,"</").concat(t.type,">");else{var d=e(f,n);r+="<".concat(a,">").concat(d,"</").concat(a,">")}else r+="<".concat(a,"></").concat(a,">")}else if("object"===c()(t)){var p=t.format,v=o()(t,["format"]),h=Object.keys(v);if(1===h.length){var b=p?"".concat(h[0],", ").concat(p):h[0];r+="{{".concat(b,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,P)||P.transEmptyNodeValue||a,C=P.hashTransKey,N=a||(C?C(T):T),D=l?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},I=h(h(h(h({},i),{},{count:n},l),D),{},{defaultValue:T,ns:R}),_=O(d||t,N?S(N,I):T,k,P,I),L=void 0!==r?r:P.defaultTransParent;return L?s.a.createElement(L,E,_):_}},240:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,c=r.Server,i=r.Native,l=!("undefined"===typeof window||!window.document||!window.document.createElement),u="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:l?a:c,s={isBrowser:u===a,isServer:u===c,isNative:u===i,device:u,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:u===a&&!!window.addEventListener,canUseViewport:u===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=s,Object.keys(e).map((function(t){return e[t]})),s));var e},d=f();t.weAreServer=function(){s.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},291:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),a=n(802),c=n(237),i=n(210),l=n(200),u=n.n(l),s=n(188),f=n(194),d=n(191),p=n(196),m=n(197),v=n(184),h=n(233);t.default=o.a.memo((function(e){var t,n=e.nextStep,r=Object(p.a)(),l=r.setDoGoBack,b=r.setTitle,y=r.setSubtitle,g=r.setType,O=Object(a.a)(),E=O.t,j=O.i18n,w=Object(i.g)(),x=u()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,k=Object(i.h)(),S=null===(t=k.state)||void 0===t?void 0:t.predictionResult,P=o.a.useCallback((function(){w.replace("step-record/cough")}),[w]),R=o.a.useMemo((function(){return Object(d.a)(j.language,["ur"])}),[j.language]),T="positive"===S||"negative"===S,C=R?o.a.createElement(f.ArrowRightSVG,null):E("nextButton");o.a.useEffect((function(){Object(m.a)(),b(""),l((function(){})),g("tertiary"),y("".concat(E("predictionResult:result"))),g("tertiary")}),[]);var N=o.a.useMemo((function(){return"positive"===S?o.a.createElement(o.a.Fragment,null,o.a.createElement(h.TitleResult,{color:v.a.red},E("predictionResult:resultDetected")),R?o.a.createElement(h.StyledHighUr,null):o.a.createElement(h.StyledHigh,null),o.a.createElement(h.IntroText,null,o.a.createElement(c.a,{i18nKey:"predictionResult:resultDetectedText"},o.a.createElement("strong",null,"Please contact your healthcare professional")," and take additional precautions.",o.a.createElement("br",null),o.a.createElement("br",null),"Your cough has similar patterns to our database of COVID-19 coughs."))):"negative"===S?o.a.createElement(o.a.Fragment,null,o.a.createElement(h.TitleResult,{color:v.a.green},E("predictionResult:resultNotDetected")),R?o.a.createElement(h.StyledLowUr,null):o.a.createElement(h.StyledLow,null),o.a.createElement(h.IntroText,null,o.a.createElement(c.a,{i18nKey:"predictionResult:resultNotDetectedText"},"Please ",o.a.createElement("strong",null,"continue to take appropriate measures")," based on the advice of your healthcare professional or applicable regulatory body and reassess yourself in our app daily. ",o.a.createElement("br",null),o.a.createElement("br",null),"Your cough does not have similar patterns to our database of COVID-19 coughs."))):o.a.createElement(o.a.Fragment,null,o.a.createElement(h.TitleResult,{color:v.a.black},E("predictionResult:resultNotAnalyze")),o.a.createElement(h.IntroText,null,o.a.createElement(c.a,{i18nKey:"predictionResult:resultNotAnalyzeText"},"Our algorithm is not able to analyze your cough. Please ",o.a.createElement("strong",null,"submit another recording of your cough"),".")))}),[S,E,R]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.PredictionResultContainer,null,o.a.createElement(h.TitleResult,null,E("predictionResult:results")),N),o.a.createElement(x,null,o.a.createElement(h.IntroText,null,o.a.createElement(c.a,{i18nKey:"predictionResult:noteStatement"},o.a.createElement("strong",null,"Important note:")," This form is for informational purposes and data collection only. It will not diagnose your  respiratory status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for research. The Virufy app doesn\u2019t replace a doctor. Remember that it is your responsibility to seek medical advice from your doctor.")),o.a.createElement(s.a,{invert:!0,leftSide:T?C:E("predictionResult:nextButton"),leftHandler:T?function(){n&&w.push(n,{submissionId:k.state.submissionId})}:P})))}))},314:function(e,t,n){"use strict";n.r(t);var r=n(291);n.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=20.c3e588ed.chunk.js.map
(this["webpackJsonpmtd-app"]=this["webpackJsonpmtd-app"]||[]).push([[10],{187:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(198),o=n(6),a=n.n(o),c=n(183),i=n(182),u=n(184);function l(){var e=Object(c.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var s=i.default.button(l(),(function(e){var t=e.dark,n=e.disabled?u.a.purple_50:u.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),f=a.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return a.a.createElement(s,Object.assign({type:"button"},n),t)}))},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(6),o=n.n(r),a=n(187),c=n(183);function i(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n    text-align: center;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return i=function(){return e},e}var u=n(182).default.div(i(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),l=o.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftSide,c=e.leftDisabled,i=e.leftHandler,l=e.rightSide,s=e.rightDisabled,f=e.rightHandler,p=e.className;return o.a.createElement(u,{className:p},o.a.createElement(a.a,{dark:n,disabled:c,onClick:i},r),l&&f&&o.a.createElement(a.a,{dark:!n,disabled:s,onClick:f},l))})),s=o.a.memo(l)},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){return t.includes(e)}},200:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(6),i=n(39),u=a(n(240));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,l=e.closeOnEsc,s=void 0===l||l,f=e.bindTo,p=e.isOpen,d=void 0!==p&&p,m=e.onOpen,h=e.onClose,v=e.onPortalClick,b=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),g=u.default(),y=g.isServer,O=g.isBrowser,E=c.useState(d),j=E[0],w=E[1],k=c.useRef(j),x=c.useCallback((function(e){k.current=e,w(e)}),[]),S=c.useRef(),P=c.useRef(O?document.createElement("div"):null);c.useEffect((function(){O&&!P.current&&(P.current=document.createElement("div"))}),[O,P]);var C=c.useMemo((function(){if(!y)return f&&i.findDOMNode(f)||document.body}),[y,f]),_=function(e){if(!e)return{portal:P,targetEl:S,event:e};var t=e||{};t.persist&&t.persist(),t.portal=P,t.targetEl=S,t.event=e;var n=e.currentTarget;return!S.current&&n&&n!==document&&(S.current=t.currentTarget),t},B=Object.entries(b).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){y||r(_(e))},e}),{}),D=c.useCallback((function(e){if(!y){var n=_(e);if(null==S.current)throw setTimeout((function(){return x(!0)}),0),Error(t.errorMessage1);m&&m(n),x(!0)}}),[y,P,x,S,m]),N=c.useCallback((function(e){if(!y){var t=_(e);h&&k.current&&h(t),k.current&&x(!1)}}),[y,h,x]),V=c.useCallback((function(e){return k.current?N(e):D(e)}),[N,D]),A=c.useCallback((function(e){return"Escape"===e.key&&s?N(e):void 0}),[s,N]),L=c.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(P)||0!==e.button||!k.current||t(S)||a&&N(e)}),[y,N,a,P]),M=c.useCallback((function(e){if(!y&&P.current instanceof HTMLElement){var t=_(e);P.current.contains(t.target)&&v&&v(t),L(e)}}),[L]),T=c.useRef({});c.useEffect((function(){if(!y&&C instanceof HTMLElement&&P.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=P.current;return C.appendChild(P.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];b[t]&&(T.current[t]=function(e){return b[t](_(e))},document.addEventListener(n,T.current[t]))})),document.addEventListener("keydown",A),document.addEventListener("mousedown",M),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];b[t]&&(document.removeEventListener(n,T.current[t]),delete T.current[t])})),document.removeEventListener("keydown",A),document.removeEventListener("mousedown",M),C.removeChild(t)}}}),[y,L,A,C,P]);var I=c.useCallback((function(e){var t=e.children;return null!=P.current?i.createPortal(t,P.current):null}),[P]);return Object.assign([D,N,k.current,I,V,S,P],r(r({isOpen:k.current,openPortal:D,ref:S,closePortal:N,togglePortal:V,Portal:I,portalRef:P},B),{bind:r({ref:S},B)}))}},201:function(e,t,n){var r=n(74);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},202:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},203:function(e,t,n){e.exports={parse:n(204),stringify:n(207)}},204:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(205),a=Object.create?Object.create(null):{};function c(e,t,n,r,o){var a=t.indexOf("<",r),c=t.slice(r,-1===a?void 0:a);/^\s*$/.test(c)&&(c=" "),(!o&&a>-1&&n+e.length>=0||" "!==c)&&e.push({type:"text",content:c})}e.exports=function(e,t){t||(t={}),t.components||(t.components=a);var n,i=[],u=-1,l=[],s={},f=!1;return e.replace(r,(function(r,a){if(f){if(r!=="</"+n.name+">")return;f=!1}var p,d="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),h=a+r.length,v=e.charAt(h);d&&!m&&(u++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!v||"<"===v||c(n.children,e,u,h,t.ignoreWhitespace),s[n.tagName]=n,0===u&&i.push(n),(p=l[u-1])&&p.children.push(n),l[u]=n),(m||!d||n.voidElement)&&(m||u--,!f&&"<"!==v&&v&&c(p=-1===u?i:l[u].children,e,u,h,t.ignoreWhitespace))})),!i.length&&e.length&&c(i,e,0,0,t.ignoreWhitespace),i}},205:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(206);e.exports=function(e){var t,n=0,a=!0,c={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return a=!0,void n++;a?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(c.voidElement=!0),c.name=r):(c.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(c.attrs[t]=t),t=r),n++,a=!1})),c}},206:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},207:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(201),o=n.n(r),a=n(202),c=n.n(a),i=n(9),u=n.n(i),l=n(6),s=n.n(l),f=n(203),p=n.n(f),d=n(174),m=n(223);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function g(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function y(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],i=t&&new RegExp(a.join("|")).test(t);if(!e&&!i)return[t];var u={};!function e(t){y(t).forEach((function(t){"string"!==typeof t&&(b(t)?e(g(t)):"object"!==c()(t)||s.a.isValidElement(t)||Object.assign(u,t))}))}(e);var l=n.services.interpolator.interpolate(t,v(v({},u),o),n.language),f=p.a.parse("<0>".concat(l,"</0>"));function d(e,t,n){var r=g(e),o=h(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return s.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function m(e,t,n,r){e.dummy&&(e.children=t),n.push(s.a.cloneElement(e,v(v({},e.props),{},{key:r}),t))}function h(t,n,o){var u=y(t);return y(n).reduce((function(t,n,l){var f=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var p=u[parseInt(n.name,10)];!p&&1===o.length&&o[0][n.name]&&(p=o[0][n.name]),p||(p={});var g=0!==Object.keys(n.attrs).length?function(e,t){var n=v({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},p):p,y=s.a.isValidElement(g),O=y&&b(n,!0)&&!n.voidElement,E=i&&"object"===c()(g)&&g.dummy&&!y,j="object"===c()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof g)t.push(g);else if(b(g)||O){m(g,d(g,n,o),t,l)}else if(E){var w=h(u,n.children,o);t.push(s.a.cloneElement(g,v(v({},g.props),{},{key:l}),w))}else if(Number.isNaN(parseFloat(n.name))){if(j)m(g,d(g,n,o),t,l);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var k=h(u,n.children,o);t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},k))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var x=h(u,n.children,o);t.push("<".concat(n.name,">").concat(x,"</").concat(n.name,">"))}}else if("object"!==c()(g)||y)1===n.children.length&&f?t.push(s.a.cloneElement(g,v(v({},g.props),{},{key:l}),f)):t.push(s.a.cloneElement(g,v(v({},g.props),{},{key:l})));else{var S=n.children[0]?f:null;S&&t.push(S)}}else"text"===n.type&&t.push(n.content);return t}),[])}return g(h([{dummy:!0,children:e}],f,y(e||[]))[0])}function E(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,i=e.tOptions,u=e.values,f=e.defaults,p=e.components,h=e.ns,b=e.i18n,g=e.t,E=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(l.useContext)(d.a)||{},w=j.i18n,k=j.defaultNS,x=b||w||Object(d.d)();if(!x)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var S=g||x.t.bind(x)||function(e){return e},P=v(v({},Object(d.c)()),x.options&&x.options.react),C=h||S.ns||k||x.options&&x.options.defaultNS;C="string"===typeof C?[C]:C||["translation"];var _=f||function e(t,n){if(!t)return"";var r="",a=y(t),i=n.transKeepBasicHtmlNodesFor||[];return a.forEach((function(t,a){if("string"===typeof t)r+="".concat(t);else if(s.a.isValidElement(t)){var u=Object.keys(t.props).length,l=i.indexOf(t.type)>-1,f=t.props.children;if(!f&&l&&0===u)r+="<".concat(t.type,"/>");else if(f||l&&0===u)if(t.props.i18nIsDynamicList)r+="<".concat(a,"></").concat(a,">");else if(l&&1===u&&"string"===typeof f)r+="<".concat(t.type,">").concat(f,"</").concat(t.type,">");else{var p=e(f,n);r+="<".concat(a,">").concat(p,"</").concat(a,">")}else r+="<".concat(a,"></").concat(a,">")}else if("object"===c()(t)){var d=t.format,h=o()(t,["format"]),v=Object.keys(h);if(1===v.length){var b=d?"".concat(v[0],", ").concat(d):v[0];r+="{{".concat(b,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,P)||P.transEmptyNodeValue||a,B=P.hashTransKey,D=a||(B?B(_):_),N=u?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},V=v(v(v(v({},i),{},{count:n},u),N),{},{defaultValue:_,ns:C}),A=O(p||t,D?S(D,V):_,x,P,V),L=void 0!==r?r:P.defaultTransParent;return L?s.a.createElement(L,E,A):A}},240:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,c=r.Server,i=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),l="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:u?a:c,s={isBrowser:l===a,isServer:l===c,isNative:l===i,device:l,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:l===a&&!!window.addEventListener,canUseViewport:l===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=s,Object.keys(e).map((function(t){return e[t]})),s));var e},p=f();t.weAreServer=function(){s.isServer=!0,p=f()},t.useSSR=function(){return p},t.default=t.useSSR},328:function(e,t,n){"use strict";n.r(t);var r=n(185),o=n(6),a=n.n(o),c=n(210),i=n(802),u=n(237),l=n(200),s=n.n(l),f=n(234),p=n(196),d=n(188),m=n(214),h=n(183),v=n(182),b=n(189);function g(){var e=Object(h.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return g=function(){return e},e}function y(){var e=Object(h.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return y=function(){return e},e}var O=Object(v.default)(b.b)(y(),(function(e){return e.theme.colors.purple}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.purple})),E=v.default.a(g(),(function(e){return e.theme.colors.purple}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.purple})),j=function(e){var t=e.children,n=e.to,r=e.target,o=void 0===r?"_self":r,c=e.isBold,i=void 0===c||c;return"_blank"===o?a.a.createElement(E,{href:n,target:"_blank",rel:"noopener noreferrer",isBold:i},t):a.a.createElement(O,{to:n,isBold:i},t)},w=n(191),k=n(197),x=n(194);t.default=a.a.memo((function(e){var t=s()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,n=Object(o.useState)(!0),l=Object(r.a)(n,2),h=l[0],v=l[1],b=Object(p.a)(),g=b.setType,y=b.setDoGoBack,O=b.setLogoSize,E=b.setSubtitle,S=Object(c.g)(),P=a.a.useCallback((function(){e.nextStep&&S.push(e.nextStep)}),[S,e.nextStep]),C=Object(o.useCallback)((function(){e.previousStep?(v(!1),S.push(e.previousStep)):S.goBack()}),[]),_=Object(i.a)(),B=_.t,D=_.i18n;return Object(o.useEffect)((function(){Object(k.a)(),y((function(){return C})),O("regular"),E(B("helpVirufy:title")),g("secondary")}),[C,y,O,g,E,B]),a.a.createElement(x.WelcomeStyledFormAlternative,null,a.a.createElement(x.ContainerShapeDown,{isMobile:f.isMobile},a.a.createElement(x.InnerContainerShapeDown,null,a.a.createElement(x.AboutUsSVG,null))),a.a.createElement(x.WelcomeContent,{maxWidth:470,mt:0},a.a.createElement(m.a,null,a.a.createElement(u.a,{i18nKey:"helpVirufy:aboutParagraph"},a.a.createElement("p",null,"Virufy is a ",a.a.createElement("strong",null,"nonprofit organization")," that is working to develop the means to use",a.a.createElement("strong",null," artificial intelligence (Al) to screen for COVID-19 from cough patterns"),"rapidly and at no cost through use of a smartphone for the benefit of low-income countries."),a.a.createElement("p",null,"Our team includes researchers from over ",a.a.createElement("strong",null,"25 countries"),".",a.a.createElement(j,{to:"https://virufy.org/es/our-approach",target:"_blank"}," Our research")," has shown that Al technology may be able to identify COVID's unique coug signature."),a.a.createElement("p",null,"By collecting ",a.a.createElement("strong",null,"coughs recordings")," from people around the world, Virufy is improving the robustness of its AI algorithm in recognizing COVID's unique sound pattern."),a.a.createElement("p",null,a.a.createElement("strong",null,"You have the power"),"to help benefit millions of people across the globe by ",a.a.createElement("strong",null,"contributing your cough")," in our study.")))),h&&a.a.createElement(t,null,a.a.createElement(d.a,{invert:!0,leftSide:Object(w.a)(D.language,["ur"])?a.a.createElement(x.ArrowRightSVG,null):B("main:nextButton"),leftHandler:P})))}))}}]);
//# sourceMappingURL=10.14044a3b.chunk.js.map
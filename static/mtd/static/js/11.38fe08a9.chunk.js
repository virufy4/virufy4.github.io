(this["webpackJsonpmtd-app"]=this["webpackJsonpmtd-app"]||[]).push([[11],{203:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(217);t.a=function(){var e=o.a.useContext(a.a),t=e.title,n=e.setTitle,r=e.subtitle,i=e.setSubtitle,c=e.type,u=e.setType,l=e.logoSize,s=e.setLogoSize,d=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:i,type:c,setType:u,logoSize:l,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:d}}},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(9),o=n.n(r),a=n(209),i=n(199);function c(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return c=function(){return e},e}var u=n(198).default.div(c(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),l=o.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftLabel,i=e.leftDisabled,c=e.leftHandler,l=e.rightLabel,s=e.rightDisabled,d=e.rightHandler;return o.a.createElement(u,null,o.a.createElement(a.a,{dark:n,disabled:i,onClick:c},r),l&&d&&o.a.createElement(a.a,{dark:!n,disabled:s,onClick:d},l))})),s=o.a.memo(l)},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(214),o=n(9),a=n.n(o),i=n(199),c=n(198),u=n(206);function l(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var s=c.default.button(l(),(function(e){var t=e.dark,n=e.disabled?u.a.purple_50:u.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),d=a.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return a.a.createElement(s,Object.assign({type:"button"},n),t)}))},210:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),c=n(44),u=a(n(215));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,l=e.closeOnEsc,s=void 0===l||l,d=e.bindTo,f=e.isOpen,p=void 0!==f&&f,m=e.onOpen,v=e.onClose,b=e.onPortalClick,h=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),y=u.default(),g=y.isServer,O=y.isBrowser,E=i.useState(p),j=E[0],w=E[1],k=i.useRef(j),x=i.useCallback((function(e){k.current=e,w(e)}),[]),S=i.useRef(),P=i.useRef(O?document.createElement("div"):null);i.useEffect((function(){O&&!P.current&&(P.current=document.createElement("div"))}),[O,P]);var T=i.useMemo((function(){if(!g)return d&&c.findDOMNode(d)||document.body}),[g,d]),C=function(e){if(!e)return{portal:P,targetEl:S,event:e};var t=e||{};t.persist&&t.persist(),t.portal=P,t.targetEl=S,t.event=e;var n=e.currentTarget;return!S.current&&n&&n!==document&&(S.current=t.currentTarget),t},R=Object.entries(h).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){g||r(C(e))},e}),{}),D=i.useCallback((function(e){if(!g){var n=C(e);if(null==S.current)throw setTimeout((function(){return x(!0)}),0),Error(t.errorMessage1);m&&m(n),x(!0)}}),[g,P,x,S,m]),N=i.useCallback((function(e){if(!g){var t=C(e);v&&k.current&&v(t),k.current&&x(!1)}}),[g,v,x]),L=i.useCallback((function(e){return k.current?N(e):D(e)}),[N,D]),I=i.useCallback((function(e){return"Escape"===e.key&&s?N(e):void 0}),[s,N]),_=i.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(P)||0!==e.button||!k.current||t(S)||a&&N(e)}),[g,N,a,P]),B=i.useCallback((function(e){if(!g&&P.current instanceof HTMLElement){var t=C(e);P.current.contains(t.target)&&b&&b(t),_(e)}}),[_]),M=i.useRef({});i.useEffect((function(){if(!g&&T instanceof HTMLElement&&P.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=P.current;return T.appendChild(P.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];h[t]&&(M.current[t]=function(e){return h[t](C(e))},document.addEventListener(n,M.current[t]))})),document.addEventListener("keydown",I),document.addEventListener("mousedown",B),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];h[t]&&(document.removeEventListener(n,M.current[t]),delete M.current[t])})),document.removeEventListener("keydown",I),document.removeEventListener("mousedown",B),T.removeChild(t)}}}),[g,_,I,T,P]);var V=i.useCallback((function(e){var t=e.children;return null!=P.current?c.createPortal(t,P.current):null}),[P]);return Object.assign([D,N,k.current,V,L,S,P],r(r({isOpen:k.current,openPortal:D,ref:S,closePortal:N,togglePortal:L,Portal:V,portalRef:P},R),{bind:r({ref:S},R)}))}},214:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},215:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,i=r.Server,c=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),l="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:u?a:i,s={isBrowser:l===a,isServer:l===i,isNative:l===c,device:l,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:l===a&&!!window.addEventListener,canUseViewport:l===a&&!!window.screen},d=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=s,Object.keys(e).map((function(t){return e[t]})),s));var e},f=d();t.weAreServer=function(){s.isServer=!0,f=d()},t.useSSR=function(){return f},t.default=t.useSSR},223:function(e,t,n){var r=n(79);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},224:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},225:function(e,t,n){e.exports={parse:n(226),stringify:n(229)}},226:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(227),a=Object.create?Object.create(null):{};function i(e,t,n,r,o){var a=t.indexOf("<",r),i=t.slice(r,-1===a?void 0:a);/^\s*$/.test(i)&&(i=" "),(!o&&a>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=a);var n,c=[],u=-1,l=[],s={},d=!1;return e.replace(r,(function(r,a){if(d){if(r!=="</"+n.name+">")return;d=!1}var f,p="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),v=a+r.length,b=e.charAt(v);p&&!m&&(u++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",d=!0),n.voidElement||d||!b||"<"===b||i(n.children,e,u,v,t.ignoreWhitespace),s[n.tagName]=n,0===u&&c.push(n),(f=l[u-1])&&f.children.push(n),l[u]=n),(m||!p||n.voidElement)&&(m||u--,!d&&"<"!==b&&b&&i(f=-1===u?c:l[u].children,e,u,v,t.ignoreWhitespace))})),!c.length&&e.length&&i(c,e,0,0,t.ignoreWhitespace),c}},227:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(228);e.exports=function(e){var t,n=0,a=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return a=!0,void n++;a?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=r):(i.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=r),n++,a=!1})),i}},228:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},229:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(223),o=n.n(r),a=n(224),i=n.n(a),c=n(12),u=n.n(c),l=n(9),s=n.n(l),d=n(225),f=n.n(d),p=n(181),m=n(246);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(a.join("|")).test(t);if(!e&&!c)return[t];var u={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(h(t)?e(y(t)):"object"!==i()(t)||s.a.isValidElement(t)||Object.assign(u,t))}))}(e);var l=n.services.interpolator.interpolate(t,b(b({},u),o),n.language),d=f.a.parse("<0>".concat(l,"</0>"));function p(e,t,n){var r=y(e),o=v(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return s.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function m(e,t,n,r){e.dummy&&(e.children=t),n.push(s.a.cloneElement(e,b(b({},e.props),{},{key:r}),t))}function v(t,n,o){var u=g(t);return g(n).reduce((function(t,n,l){var d=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var f=u[parseInt(n.name,10)];!f&&1===o.length&&o[0][n.name]&&(f=o[0][n.name]),f||(f={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=b({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},f):f,g=s.a.isValidElement(y),O=g&&h(n,!0)&&!n.voidElement,E=c&&"object"===i()(y)&&y.dummy&&!g,j="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(h(y)||O){m(y,p(y,n,o),t,l)}else if(E){var w=v(u,n.children,o);t.push(s.a.cloneElement(y,b(b({},y.props),{},{key:l}),w))}else if(Number.isNaN(parseFloat(n.name))){if(j)m(y,p(y,n,o),t,l);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var k=v(u,n.children,o);t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},k))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var x=v(u,n.children,o);t.push("<".concat(n.name,">").concat(x,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&d?t.push(s.a.cloneElement(y,b(b({},y.props),{},{key:l}),d)):t.push(s.a.cloneElement(y,b(b({},y.props),{},{key:l})));else{var S=n.children[0]?d:null;S&&t.push(S)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(v([{dummy:!0,children:e}],d,g(e||[]))[0])}function E(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,c=e.tOptions,u=e.values,d=e.defaults,f=e.components,v=e.ns,h=e.i18n,y=e.t,E=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(l.useContext)(p.a)||{},w=j.i18n,k=j.defaultNS,x=h||w||Object(p.d)();if(!x)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var S=y||x.t.bind(x)||function(e){return e},P=b(b({},Object(p.c)()),x.options&&x.options.react),T=v||S.ns||k||x.options&&x.options.defaultNS;T="string"===typeof T?[T]:T||["translation"];var C=d||function e(t,n){if(!t)return"";var r="",a=g(t),c=n.transKeepBasicHtmlNodesFor||[];return a.forEach((function(t,a){if("string"===typeof t)r+="".concat(t);else if(s.a.isValidElement(t)){var u=Object.keys(t.props).length,l=c.indexOf(t.type)>-1,d=t.props.children;if(!d&&l&&0===u)r+="<".concat(t.type,"/>");else if(d||l&&0===u)if(t.props.i18nIsDynamicList)r+="<".concat(a,"></").concat(a,">");else if(l&&1===u&&"string"===typeof d)r+="<".concat(t.type,">").concat(d,"</").concat(t.type,">");else{var f=e(d,n);r+="<".concat(a,">").concat(f,"</").concat(a,">")}else r+="<".concat(a,"></").concat(a,">")}else if("object"===i()(t)){var p=t.format,v=o()(t,["format"]),b=Object.keys(v);if(1===b.length){var h=p?"".concat(b[0],", ").concat(p):b[0];r+="{{".concat(h,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,P)||P.transEmptyNodeValue||a,R=P.hashTransKey,D=a||(R?R(C):C),N=u?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},L=b(b(b(b({},c),{},{count:n},u),N),{},{defaultValue:C,ns:T}),I=O(f||t,D?S(D,L):C,x,P,L),_=void 0!==r?r:P.defaultTransParent;return _?s.a.createElement(_,E,I):I}},312:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r),a=n(817),i=n(260),c=n(219),u=n(210),l=n.n(u),s=n(208),d=n(203),f=n(204),p=n(206),m=n(326);t.default=o.a.memo((function(e){var t,n=e.nextStep,r=Object(d.a)(),u=r.setDoGoBack,v=r.setTitle,b=r.setSubtitle,h=r.setType,y=Object(a.a)().t,g=Object(c.g)(),O=l()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,E=null===(t=Object(c.h)().state)||void 0===t?void 0:t.predictionResult,j=o.a.useCallback((function(){g.replace("step-record/cough")}),[g]);o.a.useEffect((function(){Object(f.a)(),v(""),u((function(){})),h("tertiary"),b("".concat(y("predictionResult:result"))),h("tertiary")}),[]);var w=o.a.useMemo((function(){return"positive"===E?o.a.createElement(o.a.Fragment,null,o.a.createElement(m.TitleResult,{color:p.a.red},y("predictionResult:resultDetected")),o.a.createElement(m.StyledHigh,null),o.a.createElement(m.IntroText,null,o.a.createElement(i.a,{i18nKey:"predictionResult:resultDetectedTextt"},"Su voz tiene indicadores de COVID-19. ",o.a.createElement("strong",null,"P\xf3ngase en contacto con su m\xe9dico")," y tome precauciones adicionales. Le sugerimos tomarse una prueba PCR. Si lo hace, le agradecemos enviarnos el resultado al siguiente formulario: (por definir)"))):"negative"===E?o.a.createElement(o.a.Fragment,null,o.a.createElement(m.TitleResult,{color:p.a.green},y("predictionResult:resultNotDetected")),o.a.createElement(m.StyledLow,null),o.a.createElement(m.IntroText,null,o.a.createElement(i.a,{i18nKey:"predictionResult:resultNotDetectedText"},"Su voz no parece tener indicadores de COVID-19. Por favor, ",o.a.createElement("strong",null,"siga tomando las medidas apropiadas")," bas\xe1ndose en el consejo de su m\xe9dico o del organismo regulador aplicable y vuelva a evaluarse en nuestra app a diario."))):o.a.createElement(o.a.Fragment,null,o.a.createElement(m.TitleResult,{color:p.a.black},y("predictionResult:resultNotAnalyze")),o.a.createElement(m.IntroText,null,o.a.createElement(i.a,{i18nKey:"predictionResult:resultNotAnalyzeText"},"Nuestro algoritmo no pudo determinar su estado de la COVID-19. Por favor, grabe de nuevo su tos.")))}),[E,y]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.PredictionResultContainer,null,o.a.createElement(m.TitleResult,null,y("predictionResult:results")),w),o.a.createElement(O,null,o.a.createElement(m.IntroText,null,o.a.createElement(i.a,{i18nKey:"predictionResult:noteStatement"},o.a.createElement("strong",null,"Aviso importante:")," Esta aplicaci\xf3n no predecir\xe1 su estado de COVID-19 ni diagnosticar\xe1 ninguna enfermedad, trastorno u otra condici\xf3n de salud. Virufy est\xe1 llevando a cabo una investigaci\xf3n y utilizar\xe1 la informaci\xf3n que proporciones \xfanicamente para dicha investigaci\xf3n. Virufy no sustituir\xe1 a un m\xe9dico y le recuerda que es su responsabilidad buscar consejo m\xe9dico de su m\xe9dico.")),o.a.createElement(s.a,{invert:!0,leftLabel:y("positive"===E||"negative"===E?"nextButton":"predictionResult:returnMain"),leftHandler:"positive"===E||"negative"===E?function(){n&&g.push(n)}:j})))}))}}]);
//# sourceMappingURL=11.38fe08a9.chunk.js.map
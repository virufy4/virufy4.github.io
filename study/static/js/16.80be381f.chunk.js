(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[16],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return k}));var r=n(214),o=n(204),a=n(9),i=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function c(e,t){var n=t||"__STATE_MACHINE__",r=i(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var u=function(e){return void 0===e};function l(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var s=Object(a.createContext)({store:{},updateStore:function(e){return e}}),d=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,o=e.store;return t({externalStoreData:i(r,n),currentStoreData:o})};function p(e,t,n){var a=e,c=t.syncStores;if(!c)return a;try{if(Array.isArray(c))c.forEach((function(e){a=d({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:a})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return d({transform:c.transform,externalStoreName:c.externalStoreName,storageType:n,store:a});Object.entries(c).forEach((function(e){var t=Object(o.a)(e,2),c=t[0],u=t[1],l=i(n,c);u.forEach((function(e){a=Object.assign(Object.assign({},a),Object(r.a)({},e,Object.assign(Object.assign({},a[e]),l[e])))}))}))}}catch(u){return a}return a}var f,v,m,b="undefined"!==typeof window,h=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},y=[];function g(e){h=e}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=c(h,n);m=r.getName,f=r.get,v=r.set,y=t.middleWares,l(!1,h,m,f),v(p(f()||e,t,h))}function j(e){var t=Object(a.useState)(f()),n=Object(o.a)(t,2),r=n[0],i=n[1],c=Object(a.useMemo)((function(){return{store:r,updateStore:i}}),[r]);return Object(a.createElement)(s.Provider,Object.assign({value:c},e))}var x=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var o;n&&n.name;if(n&&(o=n(f(),e)),v(u(o)?f():o),h.setItem(m(),JSON.stringify(f())),u(t)||t&&!1!==t.shouldReRenderApp){var a=f();Array.isArray(y)&&y.length&&(a=y.reduce((function(e,t){return t(e)||e}),a)),r(a)}}};function k(e,t){var n=Object(a.useContext)(s),i=n.store,c=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var i=Object(o.a)(n,2),u=i[0],l=i[1];return Object.assign(Object.assign({},e),Object(r.a)({},u,Object(a.useCallback)(x({options:t,callback:l,updateStore:c}),[])))}),{}),action:function(e){return e},state:i}:{actions:{},action:Object(a.useCallback)(e?x({options:t,callback:e,updateStore:c}):function(){},[]),state:i}}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9),o=n.n(r),a=n(209),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var c=function(e){var t=e.as,n=e.errors,r=e.name,c=e.message,u=e.render,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["as","errors","name","message","render"]),s=Object(a.f)(),d=Object(a.c)(n||s.errors,r);if(!d)return null;var p=d.message,f=d.types,v=i(i({},l),{children:p||c});return t?o.a.isValidElement(t)?o.a.cloneElement(t,v):o.a.createElement(t,v):u?u({message:p||c,messages:f}):o.a.createElement(o.a.Fragment,i({},v))}},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(226),o=n(204),a=n(9),i=n.n(a),c=n(206),u=n(205);function l(){var e=Object(c.a)(["\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  width: 100%;\n  padding: 0 20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: 1px "," solid;\n  ::placeholder {\n    color: ",";\n  }\n  @media screen and (","){\n    text-align: center;\n  }\n"]);return l=function(){return e},e}function s(){var e=Object(c.a)(["\n  position: relative;\n  display: inline-block;\n  width: calc(100% + 40px);\n  margin: 0 -20px;\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(c.a)(["\n  width: 22px;\n  height: 22px; \n  border-radius: ",";\n  border: 3px solid ",";\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 14px;\n  margin-right: 29px;\n  \n  @media screen and (","){\n    margin-right: 31px;\n  }\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: ","; \n    top: ",";\n    height: ",";\n    width: ",";\n    border-radius: ",";\n    background-color: ","; \n    display: ",";\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.0005 2L6.00018 10L2 6.00018' stroke='%233578DE' stroke-width='2.18192' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n  }\n"]);return d=function(){return e},e}function p(){var e=Object(c.a)(["\n  font-weight: bold;\n"]);return p=function(){return e},e}function f(){var e=Object(c.a)(["\n  display: block;\n  width: 250px;\n  @media screen and (","){\n    width: auto;\n    text-align: left;\n    margin: auto;\n  }\n"]);return f=function(){return e},e}function v(){var e=Object(c.a)(["\n  width: 100%;\n  height: 50px;\n  position: relative;\n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n  padding: 0 20px;\n  margin: 3px auto;\n  border: none;\n  border-radius: 10px;\n  background-color: ",";\n  @media screen and (","){\n    max-width: 470px;\n    text-align: left;\n  }\n"]);return v=function(){return e},e}var m=u.default.button(v(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.purple_10:e.theme.colors.mercury}),(function(e){return e.theme.breakpoints.tablet})),b=u.default.span(f(),(function(e){return e.theme.breakpoints.tablet})),h=Object(u.default)(m)(p()),y=u.default.div(d(),(function(e){return e.checkbox?"10%":"50%"}),(function(e){return e.isSelected?e.theme.colors.purple:"#C1C1C1"}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"0%":"50%"}),(function(e){return e.checkbox?e.theme.colors.purple_10:e.theme.colors.purple}),(function(e){return e.isSelected?"block":"none"})),g=u.default.div(s(),(function(e){return e.theme.breakpoints.tablet})),O=u.default.input(l(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.midDarkGray}),(function(e){return e.theme.breakpoints.tablet})),j={selected:[],other:""},x=function(e){var t=e.value,n=void 0===t?j:t,c=e.items,u=e.excludableValues,l=e.singleSelection,s=e.isCheckbox,d=e.onChange,p=e.allowAddOther,f=e.addOtherLabel,v=e.enableOther,x=e.otherPlaceholder,k=Object(a.useState)(!1),E=Object(o.a)(k,2),S=E[0],w=E[1];Object(a.useEffect)((function(){w(!!v||!!(null===n||void 0===n?void 0:n.other))}),[n,v]);var C=function(e){var t,r=n.selected;t=l||u&&r.some((function(e){return u.includes(e)}))?[]:r,d&&d({selected:t,other:e}),e||w(!1)};return i.a.createElement(i.a.Fragment,null,c.map((function(e,t){var o,a=null===n||void 0===n||null===(o=n.selected)||void 0===o?void 0:o.includes(e.value);return i.a.createElement(m,{key:e.value,lastItem:c.length===t+1&&!p&&!v,onClick:function(){return function(e){var t,o,a=n.selected,i=n.other,c=a.indexOf(e.value);c>=0?(t=[].concat(Object(r.a)(a.slice(0,c)),Object(r.a)(a.slice(c+1))),o=i):l||(null===u||void 0===u?void 0:u.includes(e.value))||u&&a.some((function(e){return u.includes(e)}))?(t=[e.value],o=void 0):(t=[].concat(Object(r.a)(a),[e.value]),o=i),d&&d({selected:t,other:o})}(e)},isSelected:a},i.a.createElement(b,null,e.label),i.a.createElement(y,{isSelected:a,checkbox:s}))})),p&&!S&&i.a.createElement(h,{onClick:function(){w(!0)},lastItem:!0},f),S&&i.a.createElement(g,null,i.a.createElement(O,{placeholder:x,value:(null===n||void 0===n?void 0:n.other)||"",isSelected:!!(null===n||void 0===n?void 0:n.other),onChange:function(e){return C(e.target.value)}}),!!(null===n||void 0===n?void 0:n.other)&&i.a.createElement(y,null)))};x.defaultProps={value:j,excludableValues:void 0,singleSelection:!1,onChange:void 0,allowAddOther:!1,addOtherLabel:"",enableOther:!1,otherPlaceholder:""};var k=i.a.memo(x)},223:function(e,t,n){"use strict";var r=n(9),o=n(207),a=n(208);t.a=function(e,t){var n=Object(o.d)(Object(a.b)(e)).state,i=Object(r.useMemo)((function(){var r={total:null===t||void 0===t?void 0:t.total,current:null===t||void 0===t?void 0:t.current};if(n[e]){var o,a,i,c,u,l,s=null===(o=n["submit-steps"])||void 0===o||null===(a=o.typeCovidFlu)||void 0===a?void 0:a.selected.includes("antigenTaken"),d=null===(i=n["submit-steps"])||void 0===i||null===(c=i.typeCovidFlu)||void 0===c?void 0:c.selected.includes("PCRTaken"),p=null===(u=n["submit-steps"])||void 0===u||null===(l=u.typeCovidFlu)||void 0===l?void 0:l.selected.includes("fluTaken");switch(!0){case s&&!d&&!p:r.total=(null===t||void 0===t?void 0:t.total)-2-2,r.current=(null===t||void 0===t?void 0:t.current)-2-2;break;case s&&d&&!p||s&&!d&&p:r.total=(null===t||void 0===t?void 0:t.total)-2,r.current=(null===t||void 0===t?void 0:t.current)-2;break;case!s&&!d&&!p:r.total=(null===t||void 0===t?void 0:t.total)-1-2-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2-2;break;case!s&&d&&p:r.total=(null===t||void 0===t?void 0:t.total)-1,r.current=(null===t||void 0===t?void 0:t.current)-1;break;case!s&&!d&&p||!s&&d&&!p:r.total=(null===t||void 0===t?void 0:t.total)-1-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2}}return r}),[n,t,e]),c=Object(r.useMemo)((function(){if(n[e]){var t,r,o,a=null===(t=n["submit-steps"].typeCovidFlu)||void 0===t?void 0:t.selected.includes("PCRTaken"),c=null===(r=n["submit-steps"].typeCovidFlu)||void 0===r?void 0:r.selected.includes("antigenTaken"),u=null===(o=n["submit-steps"].typeCovidFlu)||void 0===o?void 0:o.selected.includes("fluTaken");return a&&!c&&!u||a&&c&&!u?i.current+2:i.current}return 0}),[n,e,i]);return{customSteps:i,customCurrentStepPCR:c}}},229:function(e,t,n){var r=n(79);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},230:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},231:function(e,t,n){e.exports={parse:n(232),stringify:n(235)}},232:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(233),a=Object.create?Object.create(null):{};function i(e,t,n,r,o){var a=t.indexOf("<",r),i=t.slice(r,-1===a?void 0:a);/^\s*$/.test(i)&&(i=" "),(!o&&a>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=a);var n,c=[],u=-1,l=[],s={},d=!1;return e.replace(r,(function(r,a){if(d){if(r!=="</"+n.name+">")return;d=!1}var p,f="/"!==r.charAt(1),v=0===r.indexOf("\x3c!--"),m=a+r.length,b=e.charAt(m);f&&!v&&(u++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",d=!0),n.voidElement||d||!b||"<"===b||i(n.children,e,u,m,t.ignoreWhitespace),s[n.tagName]=n,0===u&&c.push(n),(p=l[u-1])&&p.children.push(n),l[u]=n),(v||!f||n.voidElement)&&(v||u--,!d&&"<"!==b&&b&&i(p=-1===u?c:l[u].children,e,u,m,t.ignoreWhitespace))})),!c.length&&e.length&&i(c,e,0,0,t.ignoreWhitespace),c}},233:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(234);e.exports=function(e){var t,n=0,a=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return a=!0,void n++;a?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=r):(i.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=r),n++,a=!1})),i}},234:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},235:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(229),o=n.n(r),a=n(230),i=n.n(a),c=n(12),u=n.n(c),l=n(9),s=n.n(l),d=n(231),p=n.n(d),f=n(187),v=n(246);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(a.join("|")).test(t);if(!e&&!c)return[t];var u={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(h(t)?e(y(t)):"object"!==i()(t)||s.a.isValidElement(t)||Object.assign(u,t))}))}(e);var l=n.services.interpolator.interpolate(t,b(b({},u),o),n.language),d=p.a.parse("<0>".concat(l,"</0>"));function f(e,t,n){var r=y(e),o=m(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return s.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function v(e,t,n,r){e.dummy&&(e.children=t),n.push(s.a.cloneElement(e,b(b({},e.props),{},{key:r}),t))}function m(t,n,o){var u=g(t);return g(n).reduce((function(t,n,l){var d=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var p=u[parseInt(n.name,10)];!p&&1===o.length&&o[0][n.name]&&(p=o[0][n.name]),p||(p={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=b({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},p):p,g=s.a.isValidElement(y),O=g&&h(n,!0)&&!n.voidElement,j=c&&"object"===i()(y)&&y.dummy&&!g,x="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(h(y)||O){v(y,f(y,n,o),t,l)}else if(j){var k=m(u,n.children,o);t.push(s.a.cloneElement(y,b(b({},y.props),{},{key:l}),k))}else if(Number.isNaN(parseFloat(n.name))){if(x)v(y,f(y,n,o),t,l);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var E=m(u,n.children,o);t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},E))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var S=m(u,n.children,o);t.push("<".concat(n.name,">").concat(S,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&d?t.push(s.a.cloneElement(y,b(b({},y.props),{},{key:l}),d)):t.push(s.a.cloneElement(y,b(b({},y.props),{},{key:l})));else{var w=n.children[0]?d:null;w&&t.push(w)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(m([{dummy:!0,children:e}],d,g(e||[]))[0])}function j(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,c=e.tOptions,u=e.values,d=e.defaults,p=e.components,m=e.ns,h=e.i18n,y=e.t,j=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),x=Object(l.useContext)(f.a)||{},k=x.i18n,E=x.defaultNS,S=h||k||Object(f.d)();if(!S)return Object(v.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var w=y||S.t.bind(S)||function(e){return e},C=b(b({},Object(f.c)()),S.options&&S.options.react),T=m||w.ns||E||S.options&&S.options.defaultNS;T="string"===typeof T?[T]:T||["translation"];var _=d||function e(t,n){if(!t)return"";var r="",a=g(t),c=n.transKeepBasicHtmlNodesFor||[];return a.forEach((function(t,a){if("string"===typeof t)r+="".concat(t);else if(s.a.isValidElement(t)){var u=Object.keys(t.props).length,l=c.indexOf(t.type)>-1,d=t.props.children;if(!d&&l&&0===u)r+="<".concat(t.type,"/>");else if(d||l&&0===u)if(t.props.i18nIsDynamicList)r+="<".concat(a,"></").concat(a,">");else if(l&&1===u&&"string"===typeof d)r+="<".concat(t.type,">").concat(d,"</").concat(t.type,">");else{var p=e(d,n);r+="<".concat(a,">").concat(p,"</").concat(a,">")}else r+="<".concat(a,"></").concat(a,">")}else if("object"===i()(t)){var f=t.format,m=o()(t,["format"]),b=Object.keys(m);if(1===b.length){var h=f?"".concat(b[0],", ").concat(f):b[0];r+="{{".concat(h,"}}")}else Object(v.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(v.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,C)||C.transEmptyNodeValue||a,A=C.hashTransKey,N=a||(A?A(_):_),P=u?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},I=b(b(b(b({},c),{},{count:n},u),P),{},{defaultValue:_,ns:T}),q=O(p||t,N?w(N,I):_,S,C,I),B=void 0!==r?r:C.defaultTransParent;return B?s.a.createElement(B,j,q):q}},348:function(e,t,n){"use strict";n.r(t);var r=n(216),o=n.n(r),a=n(217),i=n(204),c=n(9),u=n.n(c),l=n(242),s=n(219),d=n.n(s),p=n(863),f=n(255),v=n(209),m=n(207),b=n(221),h=n(213),y=n(222),g=n(208),O=n(223),j=n(210),x=n(211),k=n(220),E=n(218),S=n(215),w=n(227),C=n(224),T=y.object({ethnicity:y.object({selected:y.array().required()})}).defined();t.default=u.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,s=e.otherSteps,y=e.otherBackSteps,_=e.metadata,A=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,N=Object(j.a)(),P=N.setDoGoBack,I=N.setTitle,q=N.setType,B=Object(l.g)(),M=Object(p.a)().t,H=Object(m.d)(Object(g.b)(r)),D=H.state,F=H.action,V=Object(k.d)(),R=Object(O.a)(r,_).customSteps,L=u.a.useState(!0),K=Object(i.a)(L,2),G=K[0],J=K[1],W=Object(v.e)({mode:"onChange",defaultValues:null===D||void 0===D?void 0:D[r],resolver:Object(b.a)(T)}),$=W.control,z=W.handleSubmit,U=W.formState,Q=U.errors,Y=U.isValid,X=u.a.useCallback((function(){var e,n,r;J(!1);var o=null===(e=D["submit-steps"].typeCovidFlu)||void 0===e?void 0:e.selected.includes("fluTaken"),a=null===(n=D["submit-steps"].typeCovidFlu)||void 0===n?void 0:n.selected.includes("antigenTaken"),i=null===(r=D["submit-steps"].typeCovidFlu)||void 0===r?void 0:r.selected.includes("PCRTaken");o&&y?B.push(y.fluTakenStep):i&&y?B.push(y.PCRTakenStep):a&&y?B.push(y.antigenTakenStep):t?B.push(t):B.goBack()}),[B,y,t,D]);Object(c.useEffect)((function(){Object(x.a)(),I("".concat(M("questionary:ethnicity.title"))),q("primary"),P((function(){return X}))}),[X,P,I,q,_,M]);var Z=function(){var e=Object(a.a)(o.a.mark((function e(t){var r,a,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=17;break}r=t.ethnicity,F(t),a=!1,i=0;case 5:if(!(i<(null===(c=r.selected)||void 0===c?void 0:c.length))){e.next=12;break}if("none"===r.selected[i]){e.next=9;break}return a=!0,e.abrupt("break",12);case 9:i++,e.next=5;break;case 12:if(!a||!s){e.next=16;break}return J(!1),B.push(s.covidSymptomsStep),e.abrupt("return");case 16:n&&(J(!1),B.push(n));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=u.a.useMemo((function(){return"Japan"===V?[{value:"japanese",label:M("questionary:ethnicity.options.japanese")},{value:"chinese",label:M("questionary:ethnicity.options.chinese")},{value:"vietnamese",label:M("questionary:ethnicity.options.vietnamese")},{value:"korean",label:M("questionary:ethnicity.options.korean")},{value:"philippines",label:M("questionary:ethnicity.options.philippines")},{value:"southAmerica",label:M("questionary:ethnicity.options.southAmerica")},{value:"other",label:M("questionary:ethnicity.options.other")}]:[{value:"asian",label:M("questionary:ethnicity.options.asian")},{value:"nativeAmericanOrArab",label:M("questionary:ethnicity.options.nativeAmericanOrArab")},{value:"blackOrAfrican",label:M("questionary:ethnicity.options.blackOrAfrican")},{value:"hispanicOrLatin",label:M("questionary:ethnicity.options.hispanicOrLatin")},{value:"nativeHawaiianOrPacific",label:M("questionary:ethnicity.options.nativeHawaiianOrPacific")},{value:"white",label:M("questionary:ethnicity.options.white")}]}),[V,M]);return u.a.createElement(C.MainContainer,null,u.a.createElement(w.a,{currentStep:R.current,totalSteps:R.total,progressBar:!0}),u.a.createElement(C.QuestionText,{extraSpace:!0,first:!0},u.a.createElement(f.a,{i18nKey:"questionary:ethnicity.question"},u.a.createElement("strong",null,"Which of the below symptoms do you currently have?")),u.a.createElement(C.QuestionAllApply,null,M("questionary:ethnicity.note"))),u.a.createElement(v.a,{control:$,name:"ethnicity",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(E.a,{isCheckbox:!0,value:n,onChange:function(e){return t(e)},items:ee,excludableValues:["none"]})}}),u.a.createElement(h.a,{errors:Q,name:"ethnicity",render:function(e){var t=e.message;return u.a.createElement("p",null,t)}}),G&&u.a.createElement(A,null,u.a.createElement(S.a,{leftLabel:M("questionary:nextButton"),leftHandler:z(Z),leftDisabled:!Y,invert:!0})))}))}}]);
//# sourceMappingURL=16.80be381f.chunk.js.map
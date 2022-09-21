/*! For license information please see 474feb55d36648028ea8b478107fd63a83f6fce0-25524ac7d1f775989ca8.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5878],{862:function(t,e,r){var n=r(8).default;function o(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(o=function(t){return t?r:e})(t)}t.exports=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=o(e);if(r&&r.has(t))return r.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var c=a?Object.getOwnPropertyDescriptor(t,u):null;c&&(c.get||c.set)?Object.defineProperty(i,u,c):i[u]=t[u]}return i.default=t,r&&r.set(t,i),i},t.exports.__esModule=!0,t.exports.default=t.exports},9591:function(t,e,r){var n=r(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(P){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=s;var p={};function d(){}function v(){}function y(){}var g={};f(g,u,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(j([])));w&&w!==r&&i.call(w,u)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,u,c){var l=h(t[o],t,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==n(s)&&i.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=y,f(x,"constructor",y),f(y,"constructor",v),v.displayName=f(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},b(_.prototype),f(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),f(x,l,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},7757:function(t,e,r){var n=r(9591)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},9703:function(t,e,r){"use strict";var n=r(5318),o=r(862);e.__esModule=!0;var i={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};e.IntlContextConsumer=e.IntlContextProvider=e.changeLocale=e.navigate=e.withIntl=e.Link=void 0;var a=r(182);Object.keys(a).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(i,t)||(e[t]=a[t]))}));var u=o(r(4687));e.Link=u.default,e.navigate=u.navigate,e.changeLocale=u.changeLocale;var c=n(r(8770));e.withIntl=c.default;var l=r(8368);e.IntlContextProvider=l.IntlContextProvider,e.IntlContextConsumer=l.IntlContextConsumer},4687:function(t,e,r){"use strict";var n=r(5318);e.__esModule=!0,e.changeLocale=e.navigate=e.default=void 0;var o=n(r(7154)),i=n(r(7316)),a=n(r(7294)),u=n(r(5697)),c=r(5444),l=r(8368),f=function(t){var e=t.to,r=t.language,n=t.children,u=t.onClick,f=(0,i.default)(t,["to","language","children","onClick"]);return a.default.createElement(l.IntlContextConsumer,null,(function(t){var i=r||t.language,l=t.routed||r?"/"+i+e:""+e;return a.default.createElement(c.Link,(0,o.default)({},f,{to:l,onClick:function(t){r&&localStorage.setItem("gatsby-intl-language",r),u&&u(t)}}),n)}))};f.propTypes={children:u.default.node.isRequired,to:u.default.string,language:u.default.string},f.defaultProps={to:""};var s=f;e.default=s;e.navigate=function(t,e){if("undefined"!=typeof window){var r=window.___gatsbyIntl,n=r.language,o=r.routed?"/"+n+t:""+t;(0,c.navigate)(o,e)}};e.changeLocale=function(t,e){if("undefined"!=typeof window){var r=window.___gatsbyIntl.routed,n="/"+t+(e||function(t){if(!r)return t;var e=t.indexOf("/",1);return t.substring(e)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",t),(0,c.navigate)(n)}}},8770:function(t,e,r){"use strict";var n=r(5318);e.__esModule=!0,e.default=void 0;var o=n(r(7294)),i=r(182);e.default=function(t){return function(e){return console.warn("withIntl is deprecated. Please use injectIntl instead."),o.default.createElement((0,i.injectIntl)(t),e)}}},5861:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=474feb55d36648028ea8b478107fd63a83f6fce0-25524ac7d1f775989ca8.js.map
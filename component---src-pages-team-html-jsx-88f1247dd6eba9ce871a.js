(self.webpackChunk=self.webpackChunk||[]).push([[217],{862:function(e,t,n){var o=n(8).default;function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=u?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a},e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9703:function(e,t,n){"use strict";var o=n(5318),r=n(862);t.__esModule=!0;var a={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.IntlContextProvider=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var u=n(182);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||(t[e]=u[e]))}));var l=r(n(4687));t.Link=l.default,t.navigate=l.navigate,t.changeLocale=l.changeLocale;var i=o(n(8770));t.withIntl=i.default;var c=n(8368);t.IntlContextProvider=c.IntlContextProvider,t.IntlContextConsumer=c.IntlContextConsumer},4687:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var r=o(n(7154)),a=o(n(7316)),u=o(n(7294)),l=o(n(5697)),i=n(5444),c=n(8368),f=function(e){var t=e.to,n=e.language,o=e.children,l=e.onClick,f=(0,a.default)(e,["to","language","children","onClick"]);return u.default.createElement(c.IntlContextConsumer,null,(function(e){var a=n||e.language,c=e.routed||n?"/"+a+t:""+t;return u.default.createElement(i.Link,(0,r.default)({},f,{to:c,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),l&&l(e)}}),o)}))};f.propTypes={children:l.default.node.isRequired,to:l.default.string,language:l.default.string},f.defaultProps={to:""};var s=f;t.default=s;t.navigate=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,o=n.language,r=n.routed?"/"+o+e:""+e;(0,i.navigate)(r,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,o="/"+e+(t||function(e){if(!n)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,i.navigate)(o)}}},8770:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.default=void 0;var r=o(n(7294)),a=n(182);t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),r.default.createElement((0,a.injectIntl)(e),t)}}},8766:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var o=n(7294),r=n(9703);function a(){var e=(0,r.useIntl)();return(0,o.useEffect)((function(){window.location.replace("/"+e.locale+"/our-org#our-team")})),o.createElement("p",null,"Redirecting...")}}}]);
//# sourceMappingURL=component---src-pages-team-html-jsx-88f1247dd6eba9ce871a.js.map
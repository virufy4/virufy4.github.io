"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[217],{9703:function(e,n,t){var a=t(5318),o=t(862);n.__esModule=!0;var l={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};n.IntlContextConsumer=n.IntlContextProvider=n.changeLocale=n.navigate=n.withIntl=n.Link=void 0;var r=t(5984);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(l,e)||(n[e]=r[e]))}));var i=o(t(4687));n.Link=i.default,n.navigate=i.navigate,n.changeLocale=i.changeLocale;var u=a(t(8770));n.withIntl=u.default;var c=t(8368);n.IntlContextProvider=c.IntlContextProvider,n.IntlContextConsumer=c.IntlContextConsumer},4687:function(e,n,t){var a=t(5318);n.__esModule=!0,n.changeLocale=n.navigate=n.default=void 0;var o=a(t(7154)),l=a(t(7316)),r=a(t(7294)),i=a(t(5697)),u=t(5444),c=t(8368),d=function(e){var n=e.to,t=e.language,a=e.children,i=e.onClick,d=(0,l.default)(e,["to","language","children","onClick"]);return r.default.createElement(c.IntlContextConsumer,null,(function(e){var l=t||e.language,c=e.routed||t?"/"+l+n:""+n;return r.default.createElement(u.Link,(0,o.default)({},d,{to:c,onClick:function(e){t&&localStorage.setItem("gatsby-intl-language",t),i&&i(e)}}),a)}))};d.propTypes={children:i.default.node.isRequired,to:i.default.string,language:i.default.string},d.defaultProps={to:""};var f=d;n.default=f;n.navigate=function(e,n){if("undefined"!=typeof window){var t=window.___gatsbyIntl,a=t.language,o=t.routed?"/"+a+e:""+e;(0,u.navigate)(o,n)}};n.changeLocale=function(e,n){if("undefined"!=typeof window){var t=window.___gatsbyIntl.routed,a="/"+e+(n||function(e){if(!t)return e;var n=e.indexOf("/",1);return e.substring(n)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,u.navigate)(a)}}},8770:function(e,n,t){var a=t(5318);n.__esModule=!0,n.default=void 0;var o=a(t(7294)),l=t(5984);n.default=function(e){return function(n){return console.warn("withIntl is deprecated. Please use injectIntl instead."),o.default.createElement((0,l.injectIntl)(e),n)}}},8766:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a=t(7294),o=t(9703);function l(){var e=(0,o.useIntl)();return(0,a.useEffect)((function(){window.location.replace("/"+e.locale+"/our-org#our-team")})),a.createElement("p",null,"Redirecting...")}}}]);
//# sourceMappingURL=component---src-pages-team-html-jsx-ba2253afded611f973b8.js.map
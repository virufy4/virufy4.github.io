"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{9703:function(e,t,n){var a=n(5318),r=n(862);t.__esModule=!0;var o={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.IntlContextProvider=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var l=n(5984);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=l[e]))}));var i=r(n(4687));t.Link=i.default,t.navigate=i.navigate,t.changeLocale=i.changeLocale;var u=a(n(8770));t.withIntl=u.default;var c=n(8368);t.IntlContextProvider=c.IntlContextProvider,t.IntlContextConsumer=c.IntlContextConsumer},4687:function(e,t,n){var a=n(5318);t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var r=a(n(7154)),o=a(n(7316)),l=a(n(7294)),i=a(n(5697)),u=n(5444),c=n(8368),s=function(e){var t=e.to,n=e.language,a=e.children,i=e.onClick,s=(0,o.default)(e,["to","language","children","onClick"]);return l.default.createElement(c.IntlContextConsumer,null,(function(e){var o=n||e.language,c=e.routed||n?"/"+o+t:""+t;return l.default.createElement(u.Link,(0,r.default)({},s,{to:c,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),i&&i(e)}}),a)}))};s.propTypes={children:i.default.node.isRequired,to:i.default.string,language:i.default.string},s.defaultProps={to:""};var d=s;t.default=d;t.navigate=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,a=n.language,r=n.routed?"/"+a+e:""+e;(0,u.navigate)(r,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,a="/"+e+(t||function(e){if(!n)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,u.navigate)(a)}}},8770:function(e,t,n){var a=n(5318);t.__esModule=!0,t.default=void 0;var r=a(n(7294)),o=n(5984);t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),r.default.createElement((0,o.injectIntl)(e),t)}}},5842:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(8644),r=n(7294),o=n(9703),l=["children","style"],i={primary:"text-white bg-blue",secondary:"text-black bg-white"};function u(e,t){return void 0===t&&(t="primary"),"inline-block text-lg py-3 px-12 no-underline rounded-xl "+i[t]+" "+e}function c(e){var t=e.children,n=e.style,i=(0,a.Z)(e,l);return r.createElement(o.Link,Object.assign({},i,{className:u(i.className,n)}),t)}},4455:function(e,t,n){var a=n(7294),r=n(2340),o=n(9748);function l(e,t){var n=e.current;if(null===n)return[0,0,0,0];var a=n.getBoundingClientRect(),r=a.x,o=a.y,l=a.width,i=a.height,u=window,c=u.innerWidth,s=u.innerHeight,d=Math.min(c-64,l*t),m=Math.min(s-96,i*t),f=r-(l*t-l)/2,v=o-(i*t-i)/2,g=Math.max(Math.min(f,c-32-d),32);return[Math.max(Math.min(v,s-48-m),48),g,d,m]}t.Z=function(e){var t=e.triggerRef,n=e.scale,i=e.children,u=e.show,c=e.onClose;if(!t||!n)throw new Error("Trigger ref and scale props must be set");var s=function(e,t,n){var r=l(e,t),i=r[0],u=r[1],c=r[2],s=r[3],d=(0,o.Do)(i),m=d[0],f=d[1],v=(0,o.Do)(u),g=v[0],p=v[1],h=(0,o.Do)(c),b=h[0],y=h[1],w=(0,o.Do)(s),x=w[0],E=w[1];return(0,a.useEffect)((function(){function n(){var n=l(e,t),a=n[0],r=n[1],o=n[2],i=n[3];f(a),p(r),y(o),E(i)}return window.addEventListener("scroll",n),window.addEventListener("resize",n),function(){window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[e,t,f,p,y,E]),(0,a.useEffect)((function(){var n=l(e,t),a=n[0],r=n[1],o=n[2],i=n[3];f(a),p(r),y(o),E(i)}),[e,t,f,p,y,E,n]),[m,g,b,x]}(t,n,u);s[0],s[1],s[2],s[3],(0,o.Pr)(u),(0,o.Y5)(u,c);var d=(0,a.useRef)(null);return a.createElement(r.Z,{active:u,onClick:function(e){var t=d.current;e.target===t||t.contains(e.target)||c()}},a.createElement("div",{className:"md:mx-72 md:px-8 py-20"},a.createElement("div",{className:"fixed xs:absolute bg-white p-6 shadow-2xl overflow-y-auto rounded-2xl  md:w-2/4 md:h-4/5",ref:d},a.createElement("div",{className:"flex flex-row-reverse "},a.createElement("button",{className:"black text-black ",onClick:c},"✕")),i)))}},2340:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(8644),r=n(7294),o=["active"];function l(e){var t=e.active,n=(0,a.Z)(e,o),l=void 0!==n.children;return r.createElement(r.Fragment,null,t&&r.createElement("div",Object.assign({className:"bg-black bg-opacity-20 fixed inset-0 z-10"},n),l&&r.createElement("div",{className:"z-20"},n.children)))}},9748:function(e,t,n){n.d(t,{Y5:function(){return l.Z},Do:function(){return r},Pr:function(){return o}});var a=n(7294);function r(e){var t=(0,a.useState)(e),n=t[0],r=t[1];return[n,function(e){r(e+"px")}]}function o(e){var t=(0,a.useRef)(!0),n=(0,a.useCallback)((function(){document.body.style.height="100%",document.body.style.overflowY="hidden"}),[]),r=(0,a.useCallback)((function(){document.body.style.height="",document.body.style.overflowY=""}),[]);(0,a.useEffect)((function(){return t.current?(t.current=!1,void(e&&n())):(e?n():r(),r)}),[e,n,r])}var l=n(3928)},3928:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e,t){(0,a.useEffect)((function(){function n(e){27===e.keyCode&&t()}return e?document.addEventListener("keydown",n):document.removeEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[e,t])}},947:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(5861),r=n(7757),o=n.n(r),l=n(7294),i=n(9703),u=n(4455),c=n(5444),s=n(1496),d=n(5842);var m=function(){var e=(0,i.useIntl)(),t=(0,c.useStaticQuery)("471208797"),n={};t.allFile.edges.forEach((function(e){return n[e.node.name]=e.node.childImageSharp.fluid}));var a=(0,l.useState)(!1),r=a[0],o=a[1],m=l.useRef(null);return l.createElement(l.Fragment,null,l.createElement("button",{className:"flex flex-col rounded-2xl cursor-pointer transition-shadow hover:shadow-xl md:overflow-scroll",onClick:function(){o(!0)},ref:m},e.formatMessage({id:"becomeaSupporter.button"})),l.createElement(u.Z,{show:r,triggerRef:m,scale:1,onClose:function(){o(!1)}},l.createElement("div",{className:""},l.createElement(s.Z,{fluid:n["background-modaltellsrory"],imgStyle:{objectFit:"contain"},className:"h-44"})),l.createElement("p",{className:"font-bold pb-4 text-center text-black"},e.formatMessage({id:"getInvolved.joinusTellStory.yourStory"})),l.createElement("p",{className:"py-8  text-black"},e.formatMessage({id:"getInvolved.joinusTellStory.thankyou"})),l.createElement("div",{className:"flex justify-center rounded-xl pt-8 mx-12"},l.createElement(d.Z,{to:"/our-approach#tech-behind",className:"px-18 py-4 text-lg"},e.formatMessage({id:"getInvolved.joinusTellStory.learnmore"})))))};var f=function(){var e,t=(0,l.useState)(!1),n=(t[0],t[1],(0,l.useState)("")),r=(n[0],n[1],(0,l.useState)("")),u=(r[0],r[1],(0,l.useState)("")),c=(u[0],u[1],(0,l.useState)("")),s=c[0],d=(c[1],(0,l.useState)(!1)),f=d[0],v=d[1],g=(0,l.useState)(""),p=g[0],h=g[1],b=(0,i.useIntl)(),y=(0,l.useState)({email:"",name:"",story:"",fileupload:""}),w=y[0],x=y[1],E=function(e){var t;console.log(e.target.name),console.log(e.target.value),x(Object.assign({},w,((t={})[e.target.name]=e.target.value,t)))};function k(){return(k=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),h(""),v(!0);try{h("There was an error"),v(!1)}catch(n){h("There was an error"),v(!1)}case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.createElement(l.Fragment,null,l.createElement("div",{className:"overflow-visible flex flex-col items-center justify-center text-center text-black"},l.createElement("form",{className:"m-8 md:px-6 pb-10 overflow ",onSubmit:function(e){e.preventDefault(),console.log("enviando datos..."+w.email+" "+w.name+" "+w.story+" "+w.fileupload)},autoComplete:"off"},l.createElement("input",{className:"mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue",required:!0,type:"email",name:"email",id:"email",placeholder:b.formatMessage({id:"becomeaSupporter.inputemail"}),onChange:E}),l.createElement("input",((e={type:"text",className:"mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue",required:!0}).type="text",e.name="name",e.placeholder=b.formatMessage({id:"becomeaSupporter.inputname"}),e.id="name",e.onChange=E,e)),l.createElement("textarea",{className:"mt-2 w-full p-2 h-44 border-gray-500 shadow-lg focus:border-blue",required:!0,type:"text",name:"story",id:"story",placeholder:b.formatMessage({id:"becomeaSupporter.inputstory"}),onChange:E}),l.createElement("div",null,l.createElement("label",{className:"block text-sm font-medium text-gray-700 mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue"}),l.createElement("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},l.createElement("div",{className:"space-y-1 text-center"},l.createElement("div",{className:"flex text-sm "},l.createElement("label",{htmlFor:"file-upload",className:"cursor-pointer bg-white rounded-md font-medium  focus-within:ring-gray"},l.createElement("span",{className:"text-gray-500 text-lg font-medium"},b.formatMessage({id:"becomeaSupporter.inputupLoadyourPicture"})),l.createElement("input",{className:"sr-only",required:!0,id:"file-upload",name:"fileupload",type:"file",value:s,onChange:E})))))),l.createElement("div",{className:""},l.createElement("button",{className:"\n              bg-blue  border-2 rounded-xl text-white  px-6 my-4  py-2\n            "+(f?"bg-blue text-black animate-pulse":"")+"\n          ",disabled:f,onClick:function(e){return k.apply(this,arguments)},type:"submit"},l.createElement(m,null)),l.createElement("p",{className:"text-blue"},p)))))}},8644:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-formtellstory-jsx-c939907086719bae0cab.js.map
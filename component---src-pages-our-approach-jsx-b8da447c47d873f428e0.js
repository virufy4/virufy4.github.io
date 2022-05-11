"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7548],{5842:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(3366),n=r(7294),l=r(9703),o=["children","style"],c={primary:"text-white bg-blue",secondary:"text-black bg-white"};function i(e,t){return void 0===t&&(t="primary"),"inline-block text-lg py-3 px-12 no-underline rounded-xl "+c[t]+" "+e}function s(e){var t=e.children,r=e.style,c=(0,a.Z)(e,o);return n.createElement(l.Link,Object.assign({},c,{className:i(c.className,r)}),t)}},9748:function(e,t,r){r.d(t,{Y5:function(){return o.Z},Do:function(){return n},Pr:function(){return l}});var a=r(7294);function n(e){var t=(0,a.useState)(e),r=t[0],n=t[1];return[r,function(e){n(e+"px")}]}function l(e){var t=(0,a.useRef)(!0),r=(0,a.useCallback)((function(){document.body.style.height="100%",document.body.style.overflowY="hidden"}),[]),n=(0,a.useCallback)((function(){document.body.style.height="",document.body.style.overflowY=""}),[]);(0,a.useEffect)((function(){return t.current?(t.current=!1,void(e&&r())):(e?r():n(),n)}),[e,r,n])}var o=r(3928)},485:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var a=r(7294),n=r(9703),l=(r(1496),r(1177)),o=r(5842),c=r(6911),i=r(2340),s=r(9748);function m(e,t){var r=e.current;if(null===r)return[0,0,0,0];var a=r.getBoundingClientRect(),n=a.x,l=a.y,o=a.width,c=a.height,i=window,s=i.innerWidth,m=i.innerHeight,d=Math.min(s-64,o*t),u=Math.min(m-96,c*t),p=n-(o*t-o)/2,f=l-(c*t-c)/2,h=Math.max(Math.min(p,s-32-d),32);return[Math.max(Math.min(f,m-48-u),48),h,d,u]}var d=function(e){var t=e.triggerRef,r=e.scale,n=e.children,l=e.show,o=e.onClose;if(!t||!r)throw new Error("Trigger ref and scale props must be set");var c=function(e,t,r){var n=m(e,t),l=n[0],o=n[1],c=n[2],i=n[3],d=(0,s.Do)(l),u=d[0],p=d[1],f=(0,s.Do)(o),h=f[0],g=f[1],x=(0,s.Do)(c),v=x[0],E=x[1],b=(0,s.Do)(i),y=b[0],N=b[1];return(0,a.useEffect)((function(){function r(){var r=m(e,t),a=r[0],n=r[1],l=r[2],o=r[3];p(a),g(n),E(l),N(o)}return window.addEventListener("scroll",r),window.addEventListener("resize",r),function(){window.removeEventListener("scroll",r),window.removeEventListener("resize",r)}}),[e,t,p,g,E,N]),(0,a.useEffect)((function(){var r=m(e,t),a=r[0],n=r[1],l=r[2],o=r[3];p(a),g(n),E(l),N(o)}),[e,t,p,g,E,N,r]),[u,h,v,y]}(t,r,l);c[0],c[1],c[2],c[3],(0,s.Pr)(l),(0,s.Y5)(l,o);var d=(0,a.useRef)(null);return a.createElement(i.Z,{active:l,onClick:function(e){var t=d.current;e.target===t||t.contains(e.target)||o()}},a.createElement("div",{className:"md:mx-72 md:px-8 md:py-20 xs:py-10"},a.createElement("div",{className:"fixed xs:absolute bg-white p-4 shadow-2xl overflow-y-auto rounded-2xl   md:w-2/4 md:h-4/5",ref:d},a.createElement("div",{className:"flex flex-row-reverse "},a.createElement("button",{className:"black ",onClick:o},"✕")),n)))};var u=function(e){var t=e.title,r=e.description,l=(e.source,e.icon),o=(0,n.useIntl)(),i=(0,a.useState)(!1),s=i[0],m=i[1],u=a.useRef(null);function p(){m(!1)}return a.createElement(a.Fragment,null,a.createElement("button",{className:"flex flex-col  rounded-2xl cursor-pointer  hover:shadow-xl",onClick:function(){m(!0)},ref:u},a.createElement("div",{className:"flex-grow flex justify-center w-full bg-gray rounded-xl shadow-2xl md:hover:text-white md:hover:bg-blue "},a.createElement("div",{className:"h-48 pt-4"},a.createElement(c.Z,{className:"h-36 w-36 md:opacity-75",fluid:l,imgStyle:{objectFit:"contain"},"aria-hidden":!0},a.createElement("div",{className:"font-normal text-center py-6 "},a.createElement("h4",null,""+t)))))),a.createElement(d,{show:s,triggerRef:u,scale:1,onClose:p},a.createElement("h2",{className:"pb-2 text-center border-b-2  border-gray-300"},t),a.createElement("p",{className:"px-4 md:py-4 xs:text-center xs:py-2 xs:px-2"},r),a.createElement("div",{className:"flex flex-col min-w-max"},a.createElement("button",{className:"vf-btn-primary mx-auto px-6 py-2  text-blue border-2 border-blue ",onClick:p}," ",o.formatMessage({id:"ourApproach.topFold.bottonClose"})))))},p=[{id:"imperialCollegeLondon",imageName:"coughbasealgorithm"},{id:"carnegieMellonUniversity",imageName:"coughsound"},{id:"MIT",imageName:"callforanewartificial"},{id:"CornellUniversity",imageName:"exploringautomatic"}],f=r(4959),h=r(5186);var g=function(){var e=(0,n.useIntl)();return a.createElement(h.q,null,a.createElement("meta",{name:"description",content:e.formatMessage({id:"ourApproach.meta"})}),a.createElement("link",{rel:"alternate",hreflang:"x-default",href:"https://virufy.org/en/our-approach/"}),a.createElement("link",{rel:"alternate",hreflang:"en",href:"https://virufy.org/en/our-approach/"}),a.createElement("link",{rel:"alternate",hreflang:"es",href:"https://virufy.org/es/our-approach/"}),a.createElement("link",{rel:"alternate",hreflang:"pt",href:"https://virufy.org/pt/our-approach/"}),a.createElement("link",{rel:"alternate",hreflang:"ja",href:"https://virufy.org/ja/our-approach/"}))};function x(e){var t=e.data.allFile.edges,r=(0,n.useIntl)(),i=(0,a.useCallback)((function(e){return t.find((function(t){return t.node.name===e})).node.childImageSharp.fluid}),[t]);return a.createElement(l.Z,{className:"font-montserrat"},a.createElement(f.Z,{title:r.formatMessage({id:"ourApproach.title"})}),a.createElement(g,null),a.createElement("div",null,a.createElement("div",{className:"md:hidden font-medium"},a.createElement(c.Z,{className:"text-white",fluid:i("background-OurApproch"),imgStyle:{objectFit:"contain"}},a.createElement("div",{className:"flex-container"},a.createElement("h2",{className:"flex-1 text-lg text-left text-black xs:pt-8 xs:pb-12 xs:pl-8 xs:mr-32"},r.formatMessage({id:"ourApproach.topFold.diagnoseDisease"})))),a.createElement("div",{className:"flex-1"},a.createElement("p",{className:"text-center xs:px-6 pt-4 xs:pb-4"},r.formatMessage({id:"ourApproach.topFold.healthcare"})))),a.createElement(c.Z,{className:"xs:hidden font-medium",imgStyle:{objectFit:"contain"},fluid:i("background-OurApproch")},a.createElement("div",{className:"flex-container"},a.createElement("h2",{className:"flex-1 md:pt-32 pb-6 md:pr-60 pl-32 mr-56"},r.formatMessage({id:"ourApproach.topFold.diagnoseDisease"})),a.createElement("h3",{className:"flex-1 md:pb-32 md:pr-60 pl-32 mr-56 font-bold"},r.formatMessage({id:"ourApproach.topFold.healthcare"})))),a.createElement("p",{className:"font-normal md:pt-8 px-10 md:mx-18 xs:pt-4 xs:px-12 xs:text-sm"},r.formatMessage({id:"ourApproach.topFold.algorithmInfo"}))),a.createElement("h1",{className:"pt-2 pb-8 mx-8"},r.formatMessage({id:"ourApproach.topFold.ourTech"})),a.createElement("div",{className:"md:pt-12 md:py-14 mx-8 xs:py-8"},a.createElement("div",{className:"grid grid-cols-1  lg:grid-cols-2 gap-6"},a.createElement("div",{className:" md:p-4 xs:pt-4"},a.createElement(o.Z,{to:"/paper",className:"vf-btn-primary mx-auto my-4 px-6  border-2 border-blue"},r.formatMessage({id:"ourApproach.topFold.checkOutResearch"}))))),a.createElement("div",{className:"flex-container md:py-14 md:px-10 mx-8"},a.createElement("h2",{className:"md:mb-6 lg:mb-4"},r.formatMessage({id:"ourApproach.research.resourcestolear"})),a.createElement("p",{className:"font-heading font-medium my-6 lg:mb-4"},r.formatMessage({id:"ourApproach.research.wantToLearnMore"})),a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"},p.map((function(e,t){var n=i(e.imageName);return a.createElement(u,{key:e.id,sourceNum:t+1,title:r.formatMessage({id:"ourApproach.research."+e.id+".title"}),description:r.formatMessage({id:"ourApproach.research."+e.id+".description"}),icon:n,source:r.formatMessage({id:"ourApproach.research."+e.id+".source"})})})))))}}}]);
//# sourceMappingURL=component---src-pages-our-approach-jsx-b8da447c47d873f428e0.js.map
(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[35],{220:function(n,t,e){"use strict";e.d(t,"a",(function(){return k}));var r=e(37),a=e(159),c=e(165),o=e(6),i=e.n(o),u=e(56),s=e(284),p=e(173),l=e(162),d=e(158),f=e(157);function h(){var n=Object(d.a)(["\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return h=function(){return n},n}var m=f.default.div(h(),(function(n){return n.theme.breakpoints.tablet}));function b(){var n=Object(d.a)(["\n  margin-bottom: 16px;\n"]);return b=function(){return n},n}function j(){var n=Object(d.a)(["\n  height: 100%;\n"]);return j=function(){return n},n}function v(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return v=function(){return n},n}var x=f.default.div(v()),O=f.default.div(j()),g=f.default.div(b()),y=Object(u.a)((function(n){var t=n.container;return e(233)("./".concat(t))}),{fallback:Object(r.jsx)("div",{children:"Loading ..."}),cacheKey:function(n){return n.container}});var w=function(n){var t=n.steps,e=n.children,o=Object(p.i)(),u=Object(p.h)(),d=i.a.useState(!1),f=Object(c.a)(d,2),h=f[0],b=f[1],j=i.a.useMemo((function(){var n=o.url.replace(/\/$/,"");return t.map((function(t){return n+t.path}))}),[o.url,t]);return i.a.useEffect((function(){b(!0)}),[]),Object(r.jsx)(l.a,{children:Object(r.jsxs)(x,{children:[Object(r.jsx)(O,{children:h&&Object(r.jsx)(s.a,{location:u,timing:"ease-in-out",duration:500,pathList:j,children:t.map((function(n){return Object(r.jsx)(p.b,{exact:!0,path:Array.isArray(n.path)?n.path.map((function(n){return o.path+n})):o.path+n.path,render:function(){return Object(r.jsx)(m,{children:Object(r.jsx)(y,Object(a.a)({container:n.componentPath},n.props))})}},n.componentPath)}))})}),Object(r.jsx)(g,{id:"wizard-buttons",children:e})]})})},k=i.a.memo(w)},253:function(n,t,e){"use strict";e.r(t);var r=e(37),a=e(166),c=e(6),o=e.n(c),i=e(162),u=e(173),s=e(220),p=e(158),l=e(157);function d(){var n=Object(p.a)(["\n  background-color: ",";\n  border-radius: 50%;\n  display: inline-block;\n\n  height: 7px;\n  width: 7px;\n\n  &:not(:first-of-type){\n    margin-left: 6px;\n  };\n\n  &.active {\n    background-color: ",";\n  };\n\n"]);return d=function(){return n},n}function f(){var n=Object(p.a)(["\n  display: flex;\n  justify-content:center;\n  padding: 0;\n  margin-bottom: 22px;\n\n @media screen and (","){\n    margin-bottom: 40px;\n  }\n"]);return f=function(){return n},n}var h=l.default.ul(f(),(function(n){return n.theme.breakpoints.tablet})),m=l.default.li(d(),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.darkBlack})),b=function(n){var t=n.className,e=void 0===t?"":t,a=n.current,c=n.total,i=o.a.useMemo((function(){for(var n=[],t=0;t<c;t+=1)n.push(Object(r.jsx)(m,{className:t===a?"active":"",id:"WelcomeStepButton-".concat(t)},"WelcomeStepButton-".concat(t)));return n}),[a,c]);return Object(r.jsx)(h,{className:e,children:i})},j=o.a.memo(b),v="welcome";Object(i.b)(Object(a.a)({},v,{}),{name:"VirufyWizard",middleWares:[],storageType:window.localStorage});var x="/welcome",O=[{path:"/",componentPath:"Welcome/Step2",props:{storeKey:v,previousStep:"".concat(x),nextStep:"".concat(x,"/step-3")}}],g=[{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:v,previousStep:"".concat(x,"/step-2"),nextStep:"/submit-steps/step-record/cough"}}],y=function(){var n=Object(u.h)(),t=Object(u.i)(),e=n.pathname.replace(t.url,""),a=g.findIndex((function(n){return n.path===e}));return Object(r.jsx)(s.a,{steps:[].concat(O,g),children:a>=0&&Object(r.jsx)(j,{current:a,total:g.length})})};t.default=o.a.memo(y)}}]);
//# sourceMappingURL=35.87457cb4.chunk.js.map
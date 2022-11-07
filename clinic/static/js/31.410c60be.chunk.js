(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[31,59],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9),a=n.n(r),o=n(214),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var c=function(e){var t=e.as,n=e.errors,r=e.name,c=e.message,l=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),u=Object(o.f)(),p=Object(o.c)(n||u.errors,r);if(!p)return null;var d=p.message,f=p.types,m=i(i({},s),{children:d||c});return t?a.a.isValidElement(t)?a.a.cloneElement(t,m):a.a.createElement(t,m):l?l({message:d||c,messages:f}):a.a.createElement(a.a.Fragment,i({},m))}},221:function(e,t,n){var r=n(78);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},222:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},223:function(e,t,n){e.exports={parse:n(224),stringify:n(227)}},224:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,a=n(225),o=Object.create?Object.create(null):{};function i(e,t,n,r,a){var o=t.indexOf("<",r),i=t.slice(r,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!a&&o>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,c=[],l=-1,s=[],u={},p=!1;return e.replace(r,(function(r,o){if(p){if(r!=="</"+n.name+">")return;p=!1}var d,f="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),v=o+r.length,h=e.charAt(v);f&&!m&&(l++,"tag"===(n=a(r)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!h||"<"===h||i(n.children,e,l,v,t.ignoreWhitespace),u[n.tagName]=n,0===l&&c.push(n),(d=s[l-1])&&d.children.push(n),s[l]=n),(m||!f||n.voidElement)&&(m||l--,!p&&"<"!==h&&h&&i(d=-1===l?c:s[l].children,e,l,v,t.ignoreWhitespace))})),!c.length&&e.length&&i(c,e,0,0,t.ignoreWhitespace),c}},225:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,a=n(226);e.exports=function(e){var t,n=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return o=!0,void n++;o?0===n?((a[r]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=r):(i.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=r),n++,o=!1})),i}},226:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},227:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(251),a=n.n(r).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return a}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(9),a=n.n(r),o=n(849),i=n(213),c=n(205),l=n(204);function s(){var e=Object(c.a)(["\n  width: 120px;\n  height: 10px;\n  background: ",";\n  position: relative;\n  border-radius: 24px;\n  margin-top: 12px;\n  \n  &:after {\n    content:'';\n    width: ",";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ",";\n    border-radius: 24px;\n  }\n"]);return s=function(){return e},e}function u(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  color: ",";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 700;\n  "]);return u=function(){return e},e}function p(){var e=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return p=function(){return e},e}function d(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return d=function(){return e},e}var f=l.default.div(d(),(function(e){return e.theme.breakpoints.tablet})),m=(l.default.div(p()),l.default.div(u(),(function(e){return e.theme.colors.purple}))),v=l.default.div(s(),(function(e){return e.theme.colors.midGrayBlue}),(function(e){var t=e.currentStep,n=e.totalSteps;return"calc((100%/".concat(n,") * ").concat(t,")")}),(function(e){return e.theme.colors.purple})),h=a.a.memo((function(e){var t=e.className,n=void 0===t?"":t,r=e.radius,c=void 0===r?30:r,l=e.stroke,s=void 0===l?6:l,u=e.currentStep,p=void 0===u?2:u,d=e.totalSteps,h=void 0===d?4:d,b=e.color,y=void 0===b?i.a.green:b,g=e.colorTrack,O=void 0===g?i.a.gray3:g,j=e.progressBar,x=void 0!==j&&j,E=Object(o.a)().t,S=p/h*100,k=c-s/2,w=2*k*Math.PI,T=w-S/100*w;return a.a.createElement(a.a.Fragment,null,x?a.a.createElement(m,null,E("questionary:progressBar",{currentStep:p,totalSteps:h}),a.a.createElement(v,{currentStep:p,totalSteps:h})):a.a.createElement(f,{className:n},a.a.createElement("svg",{width:2*c,height:2*c,viewBox:"0 0 ".concat(2*c," ").concat(2*c)},a.a.createElement("circle",{className:"track",stroke:O,fill:"transparent",strokeWidth:s,r:k,cx:c,cy:c}),a.a.createElement("circle",{stroke:y,fill:"transparent",strokeWidth:s,strokeDasharray:"".concat(w," ").concat(w),style:{strokeDashoffset:T},r:k,cx:c,cy:c}),a.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(p,"/").concat(h)))))}))},235:function(e,t,n){"use strict";var r=n(239);t.a=function(){return{isBrowser:r.isBrowser?Object(r.deviceDetect)():null,isMobile:r.isMobile?Object(r.deviceDetect)():null,isSmartTv:r.isSmartTV?Object(r.deviceDetect)():null,isConsole:r.isConsole?Object(r.deviceDetect)():null,isTablet:r.isTablet?Object(r.deviceDetect)():null,isWearable:r.isWearable?Object(r.deviceDetect)():null}}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(9),a=n.n(r),o=n(260),i=n(849),c=n(17),l=n(205);function s(){var e=Object(l.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return s=function(){return e},e}var u=n(204).default.div(s()),p=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,r=Object(i.a)().i18n;return a.a.createElement(u,null,a.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),c.a("Error on ReCAPTCHA")},hl:r.language}))}},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(221),a=n.n(r),o=n(222),i=n.n(o),c=n(12),l=n.n(c),s=n(9),u=n.n(s),p=n(223),d=n.n(p),f=n(187),m=n(243);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,a){if(""===t)return[];var o=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(o.join("|")).test(t);if(!e&&!c)return[t];var l={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(b(t)?e(y(t)):"object"!==i()(t)||u.a.isValidElement(t)||Object.assign(l,t))}))}(e);var s=n.services.interpolator.interpolate(t,h(h({},l),a),n.language),p=d.a.parse("<0>".concat(s,"</0>"));function f(e,t,n){var r=y(e),a=v(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return u.a.isValidElement(e)}))}(r)&&0===a.length?r:a}function m(e,t,n,r){e.dummy&&(e.children=t),n.push(u.a.cloneElement(e,h(h({},e.props),{},{key:r}),t))}function v(t,n,a){var l=g(t);return g(n).reduce((function(t,n,s){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=l[parseInt(n.name,10)];!d&&1===a.length&&a[0][n.name]&&(d=a[0][n.name]),d||(d={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=h({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=u.a.isValidElement(y),O=g&&b(n,!0)&&!n.voidElement,j=c&&"object"===i()(y)&&y.dummy&&!g,x="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(b(y)||O){m(y,f(y,n,a),t,s)}else if(j){var E=v(l,n.children,a);t.push(u.a.cloneElement(y,h(h({},y.props),{},{key:s}),E))}else if(Number.isNaN(parseFloat(n.name))){if(x)m(y,f(y,n,a),t,s);else if(r.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)}));else{var S=v(l,n.children,a);t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)},S))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var k=v(l,n.children,a);t.push("<".concat(n.name,">").concat(k,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&p?t.push(u.a.cloneElement(y,h(h({},y.props),{},{key:s}),p)):t.push(u.a.cloneElement(y,h(h({},y.props),{},{key:s})));else{var w=n.children[0]?p:null;w&&t.push(w)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(v([{dummy:!0,children:e}],p,g(e||[]))[0])}function j(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,c=e.tOptions,l=e.values,p=e.defaults,d=e.components,v=e.ns,b=e.i18n,y=e.t,j=a()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),x=Object(s.useContext)(f.a)||{},E=x.i18n,S=x.defaultNS,k=b||E||Object(f.d)();if(!k)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var w=y||k.t.bind(k)||function(e){return e},T=h(h({},Object(f.c)()),k.options&&k.options.react),C=v||w.ns||S||k.options&&k.options.defaultNS;C="string"===typeof C?[C]:C||["translation"];var A=p||function e(t,n){if(!t)return"";var r="",o=g(t),c=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)r+="".concat(t);else if(u.a.isValidElement(t)){var l=Object.keys(t.props).length,s=c.indexOf(t.type)>-1,p=t.props.children;if(!p&&s&&0===l)r+="<".concat(t.type,"/>");else if(p||s&&0===l)if(t.props.i18nIsDynamicList)r+="<".concat(o,"></").concat(o,">");else if(s&&1===l&&"string"===typeof p)r+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var d=e(p,n);r+="<".concat(o,">").concat(d,"</").concat(o,">")}else r+="<".concat(o,"></").concat(o,">")}else if("object"===i()(t)){var f=t.format,v=a()(t,["format"]),h=Object.keys(v);if(1===h.length){var b=f?"".concat(h[0],", ").concat(f):h[0];r+="{{".concat(b,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,T)||T.transEmptyNodeValue||o,D=T.hashTransKey,P=o||(D?D(A):A),B=l?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},R=h(h(h(h({},c),{},{count:n},l),B),{},{defaultValue:A,ns:C}),I=O(d||t,P?w(P,R):A,k,T,R),N=void 0!==r?r:T.defaultTransParent;return N?u.a.createElement(N,j,I):I}},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(211),a=n.n(r),o=n(212),i=n(229),c=n(220),l=n(235);function s(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(a.a.mark((function e(t){var n,r,o,s,u,p,d,f,m,v,h,b,y,g,O,j,x,E,S,k,w,T,C,A,D,P,B,R,I,N,V,q,F,M,W,z,K,L,H,Y,G,J,$,U,Q,_,Z,X,ee;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,s=t.action,u=t.nextStep,p=t.setActiveStep,d=t.history,e.prev=1,n(null),b=r.welcome,y=b.language,g=b.country,O=b.region,j=b.patientId,x=b.agreedConsentTerms,E=b.agreedPolicyTerms,S=b.agreedCovidDetection,k=b.agreedCovidCollection,w=b.agreedTrainingArtificial,T=b.agreedBiometric,C=r["submit-steps"],A=C.recordYourCough,D=C.recordYourBreath,P=C.recordYourSpeech,B=C.testTaken,R=C.pcrTestDate,I=C.pcrTestResult,N=C.antigenTestDate,V=C.whatAntigenTestResult,q=C.antigenTestResult,F=C.vaccine,M=C.ageGroup,W=C.gender,z=C.ethnicity,K=C.biologicalSex,L=C.smokeLastSixMonths,H=C.currentSymptoms,Y=C.symptomsStartedDate,G=C.currentRespiratoryCondition,J=C.currentMedicalCondition,($=new FormData).append("device",JSON.stringify(Object(l.a)())),$.append("language",y),$.append("country",g),O&&$.append("region",O),j&&$.append("patientId",j),window.sourceCampaign&&$.append("source",window.sourceCampaign),$.append("agreedConsentTerms",x),$.append("agreedPolicyTerms",E),$.append("agreedCovidCollection",k),$.append("agreedCovidDetection",S),$.append("agreedTrainingArtificial",w),$.append("agreedBiometric",T),U=A.recordingFile||A.uploadedFile,$.append("cough",U,U.name||"filename.wav"),Q=D.recordingFile||D.uploadedFile,$.append("breath",Q,Q.name||"filename_breath.wav"),c.b.includes(g)&&(_=P.recordingFile||P.uploadedFile,$.append("voice",_,_.name||"filename_voice.wav")),$.append("testTaken",B.join(",")),B.includes("pcr")&&($.append("pcrTestDate",R.toISOString()),$.append("pcrTestResult",I)),B.includes("antigen")&&($.append("antigenTestDate",N.toISOString()),$.append("antigenTestResult",q),$.append("whatAntigenTestResult",V)),F&&$.append("vaccine",F),M&&$.append("ageGroup",M),Z=W.other||W.selected[0],z&&$.append("ethnicity",z),Z&&$.append("gender",Z),K&&$.append("biologicalSex",K),L&&$.append("smokeLastSixMonths",L),(null===H||void 0===H||null===(f=H.selected)||void 0===f?void 0:f.length)>0&&$.append("currentSymptoms",H.selected.join(",")),Y&&$.append("symptomsStartedDate",Y),(null===G||void 0===G||null===(m=G.selected)||void 0===m?void 0:m.length)>0&&$.append("currentRespiratoryCondition",G.selected.join(",")),(null===J||void 0===J||null===(v=J.selected)||void 0===v?void 0:v.length)>0&&$.append("currentMedicalCondition",J.selected.join(",")),(null===H||void 0===H?void 0:H.other)&&$.append("otherSymptoms",null===H||void 0===H?void 0:H.other),(null===G||void 0===G?void 0:G.other)&&$.append("otherRespiratoryConditions",null===G||void 0===G?void 0:G.other),(null===J||void 0===J?void 0:J.other)&&$.append("otherMedicalConditions",null===J||void 0===J?void 0:J.other),o&&$.append("captchaValue",o),e.next=43,i.a.post("saveSurvey",$,{headers:{"Content-Type":"multipart/form-data; boundary=SaveSurvey"}});case 43:X=e.sent,s({}),u&&(null===(h=X.data)||void 0===h?void 0:h.submissionId)&&(p(!1),d.push(u,{submissionId:null===(ee=X.data)||void 0===ee?void 0:ee.submissionId})),e.next=52;break;case 48:e.prev=48,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 52:case"end":return e.stop()}}),e,null,[[1,48]])})))).apply(this,arguments)}},296:function(e,t,n){"use strict";n.r(t);var r=n(211),a=n.n(r),o=n(212),i=n(206),c=n(9),l=n.n(c),s=n(244),u=n(215),p=n.n(u),d=n(849),f=n(250),m=n(214),v=n(210),h=n(231),b=n(219),y=n(232),g=n(218),O=n(237),j=n(230),x=n(207),E=n(208),S=n(275),k=n(247),w=n(217),T=n(236),C=y.object({currentRespiratoryCondition:y.object().required()}).defined();t.default=l.a.memo((function(e){var t,n,r=e.previousStep,u=e.nextStep,y=e.storeKey,A=e.metadata,D=p()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,P=Object(x.a)(),B=P.setDoGoBack,R=P.setTitle,I=P.setType,N=Object(s.g)(),V=Object(d.a)().t,q=Object(v.d)(Object(g.b)(y)),F=q.state,M=q.action,W=l.a.useState(!0),z=Object(i.a)(W,2),K=z[0],L=z[1],H=l.a.useState(null),Y=Object(i.a)(H,2),G=Y[0],J=Y[1],$=l.a.useState(null),U=Object(i.a)($,2),Q=U[0],_=U[1],Z=l.a.useState(!0),X=Object(i.a)(Z,2),ee=X[0],te=X[1],ne=Object(m.e)({mode:"onChange",defaultValues:null===F||void 0===F?void 0:F[y],resolver:Object(h.a)(C)}),re=ne.control,ae=ne.handleSubmit,oe=ne.formState,ie=oe.errors,ce=oe.isValid,le=l.a.useCallback((function(){L(!1),r?N.push(r):N.goBack()}),[N,r]);Object(c.useEffect)((function(){Object(E.a)(),R("".concat(V("questionary:respiration.title"))),I("primary"),B((function(){return le}))}),[le,B,R,I,A,V]);var se=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}if((null!==(n=null===A||void 0===A?void 0:A.current)&&void 0!==n?n:5)!==(null!==(r=null===A||void 0===A?void 0:A.total)&&void 0!==r?r:6)){e.next=6;break}return e.next=4,Object(S.a)({setSubmitError:function(e){return J(e?V(e):null)},state:F,captchaValue:Q,action:M,nextStep:u,setActiveStep:L,history:N});case 4:e.next=8;break;case 6:M(t),u&&(L(!1),N.push(u));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(T.MainContainer,null,l.a.createElement(j.a,{currentStep:null===A||void 0===A?void 0:A.current,totalSteps:null===A||void 0===A?void 0:A.total,progressBar:!0}),l.a.createElement(T.QuestionText,{bold:!1},l.a.createElement(f.a,{i18nKey:"questionary:respiration.question"},l.a.createElement("strong",null,"Which of the below respiratory conditions do you currently have?")),l.a.createElement(T.QuestionAllApply,null,V("questionary:allThatApply"))),l.a.createElement(m.a,{control:re,name:"currentRespiratoryCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(k.a,{value:n,onChange:function(e){return t(e)},items:[{value:"none",label:V("questionary:respiration.options.none")},{value:"asthma",label:V("questionary:respiration.options.asthma")},{value:"bronchitis",label:V("questionary:respiration.options.bronchitis")},{value:"copdEmphysema",label:V("questionary:respiration.options.emphysema")},{value:"pneumonia",label:V("questionary:respiration.options.pneumonia")},{value:"tuberculosis",label:V("questionary:respiration.options.tuberculosis")},{value:"other",label:V("questionary:medical.options.other")}],excludableValues:["none"]})}}),l.a.createElement("p",null,l.a.createElement(b.a,{errors:ie,name:"name"})),K&&l.a.createElement(D,null,(null!==(t=null===A||void 0===A?void 0:A.current)&&void 0!==t?t:5)===(null!==(n=null===A||void 0===A?void 0:A.total)&&void 0!==n?n:6)&&l.a.createElement(O.a,{onChange:_,setRecaptchaAvailable:te}),G&&l.a.createElement(T.TempBeforeSubmitError,null,G),l.a.createElement(w.a,{invert:!0,leftLabel:V("questionary:nextButton"),leftHandler:ae(se),leftDisabled:!ce||!ee})))}))},333:function(e,t,n){"use strict";n.r(t);var r=n(296);n.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=31.410c60be.chunk.js.map
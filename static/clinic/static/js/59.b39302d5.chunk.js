(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[59],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(9),r=n.n(a),o=n(214),i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var l=function(e){var t=e.as,n=e.errors,a=e.name,l=e.message,c=e.render,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["as","errors","name","message","render"]),u=Object(o.f)(),p=Object(o.c)(n||u.errors,a);if(!p)return null;var d=p.message,m=p.types,f=i(i({},s),{children:d||l});return t?r.a.isValidElement(t)?r.a.cloneElement(t,f):r.a.createElement(t,f):c?c({message:d||l,messages:m}):r.a.createElement(r.a.Fragment,i({},f))}},221:function(e,t,n){var a=n(78);e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},222:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},223:function(e,t,n){e.exports={parse:n(224),stringify:n(227)}},224:function(e,t,n){var a=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,r=n(225),o=Object.create?Object.create(null):{};function i(e,t,n,a,r){var o=t.indexOf("<",a),i=t.slice(a,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!r&&o>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,l=[],c=-1,s=[],u={},p=!1;return e.replace(a,(function(a,o){if(p){if(a!=="</"+n.name+">")return;p=!1}var d,m="/"!==a.charAt(1),f=0===a.indexOf("\x3c!--"),v=o+a.length,b=e.charAt(v);m&&!f&&(c++,"tag"===(n=r(a)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!b||"<"===b||i(n.children,e,c,v,t.ignoreWhitespace),u[n.tagName]=n,0===c&&l.push(n),(d=s[c-1])&&d.children.push(n),s[c]=n),(f||!m||n.voidElement)&&(f||c--,!p&&"<"!==b&&b&&i(d=-1===c?l:s[c].children,e,c,v,t.ignoreWhitespace))})),!l.length&&e.length&&i(l,e,0,0,t.ignoreWhitespace),l}},225:function(e,t,n){var a=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,r=n(226);e.exports=function(e){var t,n=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(a,(function(a){if("="===a)return o=!0,void n++;o?0===n?((r[a]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=a):(i.attrs[t]=a.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=a),n++,o=!1})),i}},226:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},227:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(9),r=n.n(a),o=n(853),i=n(211),l=n(205),c=n(204);function s(){var e=Object(l.a)(["\n  width: 120px;\n  height: 10px;\n  background: ",";\n  position: relative;\n  border-radius: 24px;\n  margin-top: 12px;\n  \n  &:after {\n    content:'';\n    width: ",";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ",";\n    border-radius: 24px;\n  }\n"]);return s=function(){return e},e}function u(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  color: ",";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 700;\n  "]);return u=function(){return e},e}function p(){var e=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return p=function(){return e},e}function d(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return d=function(){return e},e}var m=c.default.div(d(),(function(e){return e.theme.breakpoints.tablet})),f=(c.default.div(p()),c.default.div(u(),(function(e){return e.theme.colors.purple}))),v=c.default.div(s(),(function(e){return e.theme.colors.midGrayBlue}),(function(e){var t=e.currentStep,n=e.totalSteps;return"calc((100%/".concat(n,") * ").concat(t,")")}),(function(e){return e.theme.colors.purple})),b=r.a.memo((function(e){var t=e.className,n=void 0===t?"":t,a=e.radius,l=void 0===a?30:a,c=e.stroke,s=void 0===c?6:c,u=e.currentStep,p=void 0===u?2:u,d=e.totalSteps,b=void 0===d?4:d,h=e.color,y=void 0===h?i.a.green:h,g=e.colorTrack,O=void 0===g?i.a.gray3:g,j=e.progressBar,x=void 0!==j&&j,S=Object(o.a)().t,E=p/b*100,k=l-s/2,w=2*k*Math.PI,C=w-E/100*w;return r.a.createElement(r.a.Fragment,null,x?r.a.createElement(f,null,S("questionary:progressBar",{currentStep:p,totalSteps:b}),r.a.createElement(v,{currentStep:p,totalSteps:b})):r.a.createElement(m,{className:n},r.a.createElement("svg",{width:2*l,height:2*l,viewBox:"0 0 ".concat(2*l," ").concat(2*l)},r.a.createElement("circle",{className:"track",stroke:O,fill:"transparent",strokeWidth:s,r:k,cx:l,cy:l}),r.a.createElement("circle",{stroke:y,fill:"transparent",strokeWidth:s,strokeDasharray:"".concat(w," ").concat(w),style:{strokeDashoffset:C},r:k,cx:l,cy:l}),r.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(p,"/").concat(b)))))}))},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(9),r=n.n(a),o=n(260),i=n(853),l=n(17),c=n(205);function s(){var e=Object(c.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return s=function(){return e},e}var u=n(204).default.div(s()),p=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,a=Object(i.a)().i18n;return r.a.createElement(u,null,r.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),l.a("Error on ReCAPTCHA")},hl:a.language}))}},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(221),r=n.n(a),o=n(222),i=n.n(o),l=n(12),c=n.n(l),s=n(9),u=n.n(s),p=n(223),d=n.n(p),m=n(187),f=n(243);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,a,r){if(""===t)return[];var o=a.transKeepBasicHtmlNodesFor||[],l=t&&new RegExp(o.join("|")).test(t);if(!e&&!l)return[t];var c={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(h(t)?e(y(t)):"object"!==i()(t)||u.a.isValidElement(t)||Object.assign(c,t))}))}(e);var s=n.services.interpolator.interpolate(t,b(b({},c),r),n.language),p=d.a.parse("<0>".concat(s,"</0>"));function m(e,t,n){var a=y(e),r=v(a,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return u.a.isValidElement(e)}))}(a)&&0===r.length?a:r}function f(e,t,n,a){e.dummy&&(e.children=t),n.push(u.a.cloneElement(e,b(b({},e.props),{},{key:a}),t))}function v(t,n,r){var c=g(t);return g(n).reduce((function(t,n,s){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=c[parseInt(n.name,10)];!d&&1===r.length&&r[0][n.name]&&(d=r[0][n.name]),d||(d={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=b({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=u.a.isValidElement(y),O=g&&h(n,!0)&&!n.voidElement,j=l&&"object"===i()(y)&&y.dummy&&!g,x="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(h(y)||O){f(y,m(y,n,r),t,s)}else if(j){var S=v(c,n.children,r);t.push(u.a.cloneElement(y,b(b({},y.props),{},{key:s}),S))}else if(Number.isNaN(parseFloat(n.name))){if(x)f(y,m(y,n,r),t,s);else if(a.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)}));else{var E=v(c,n.children,r);t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)},E))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var k=v(c,n.children,r);t.push("<".concat(n.name,">").concat(k,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&p?t.push(u.a.cloneElement(y,b(b({},y.props),{},{key:s}),p)):t.push(u.a.cloneElement(y,b(b({},y.props),{},{key:s})));else{var w=n.children[0]?p:null;w&&t.push(w)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(v([{dummy:!0,children:e}],p,g(e||[]))[0])}function j(e){var t=e.children,n=e.count,a=e.parent,o=e.i18nKey,l=e.tOptions,c=e.values,p=e.defaults,d=e.components,v=e.ns,h=e.i18n,y=e.t,j=r()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),x=Object(s.useContext)(m.a)||{},S=x.i18n,E=x.defaultNS,k=h||S||Object(m.d)();if(!k)return Object(f.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var w=y||k.t.bind(k)||function(e){return e},C=b(b({},Object(m.c)()),k.options&&k.options.react),q=v||w.ns||E||k.options&&k.options.defaultNS;q="string"===typeof q?[q]:q||["translation"];var T=p||function e(t,n){if(!t)return"";var a="",o=g(t),l=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)a+="".concat(t);else if(u.a.isValidElement(t)){var c=Object.keys(t.props).length,s=l.indexOf(t.type)>-1,p=t.props.children;if(!p&&s&&0===c)a+="<".concat(t.type,"/>");else if(p||s&&0===c)if(t.props.i18nIsDynamicList)a+="<".concat(o,"></").concat(o,">");else if(s&&1===c&&"string"===typeof p)a+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var d=e(p,n);a+="<".concat(o,">").concat(d,"</").concat(o,">")}else a+="<".concat(o,"></").concat(o,">")}else if("object"===i()(t)){var m=t.format,v=r()(t,["format"]),b=Object.keys(v);if(1===b.length){var h=m?"".concat(b[0],", ").concat(m):b[0];a+="{{".concat(h,"}}")}else Object(f.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(f.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),a}(t,C)||C.transEmptyNodeValue||o,D=C.hashTransKey,A=o||(D?D(T):T),P=c?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},B=b(b(b(b({},l),{},{count:n},c),P),{},{defaultValue:T,ns:q}),I=O(d||t,A?w(A,B):T,k,C,B),F=void 0!==a?a:C.defaultTransParent;return F?u.a.createElement(F,j,I):I}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(273),r=n.n(a).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return r}},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(216),r=n.n(a),o=n(217),i=n(251),l=n(229),c=n(247),s=function(){return{isBrowser:c.isBrowser?Object(c.deviceDetect)():null,isMobile:c.isMobile?Object(c.deviceDetect)():null,isSmartTv:c.isSmartTV?Object(c.deviceDetect)():null,isConsole:c.isConsole?Object(c.deviceDetect)():null,isTablet:c.isTablet?Object(c.deviceDetect)():null,isWearable:c.isWearable?Object(c.deviceDetect)():null}};function u(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(r.a.mark((function e(t){var n,a,o,c,u,p,d,m,f,v,b,h,y,g,O,j,x,S,E,k,w,C,q,T,D,A,P,B,I,F,N,R,M,V,H,W,z,K,J,L,Y,G,$,U,Q,_,Z,X,ee,te;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,c=t.action,u=t.nextStep,p=t.setActiveStep,d=t.history,m=t.userCookie,e.prev=1,n(null),y=a.welcome,g=y.language,O=y.country,j=y.region,x=y.patientId,S=y.agreedConsentTerms,E=y.agreedPolicyTerms,k=y.agreedCovidDetection,w=y.agreedCovidCollection,C=y.agreedTrainingArtificial,q=y.agreedBiometric,T=a["submit-steps"],D=T.recordYourCough,A=T.recordYourBreath,P=T.recordYourSpeech,B=T.testTaken,I=T.pcrTestDate,F=T.pcrTestResult,N=T.antigenTestDate,R=T.whatAntigenTestResult,M=T.antigenTestResult,V=T.vaccine,H=T.ageGroup,W=T.gender,z=T.ethnicity,K=T.biologicalSex,J=T.smokeLastSixMonths,L=T.currentSymptoms,Y=T.symptomsStartedDate,G=T.currentRespiratoryCondition,$=T.currentMedicalCondition,(U=new FormData).append("device",JSON.stringify(s())),U.append("language",g),U.append("country",O),j&&U.append("region",j),x&&U.append("patientId",x),window.sourceCampaign&&U.append("source",window.sourceCampaign),m&&U.append("userCookie",JSON.stringify(m)),U.append("agreedConsentTerms",S),U.append("agreedPolicyTerms",E),U.append("agreedCovidCollection",w),U.append("agreedCovidDetection",k),U.append("agreedTrainingArtificial",C),U.append("agreedBiometric",q),Q=D.recordingFile||D.uploadedFile,U.append("cough",Q,Q.name||"filename.wav"),_=A.recordingFile||A.uploadedFile,U.append("breath",_,_.name||"filename_breath.wav"),l.b.includes(O)&&(Z=P.recordingFile||P.uploadedFile,U.append("voice",Z,Z.name||"filename_voice.wav")),U.append("testTaken",B.join(",")),B.includes("pcr")&&(U.append("pcrTestDate",I.toISOString()),U.append("pcrTestResult",F)),B.includes("antigen")&&(U.append("antigenTestDate",N.toISOString()),U.append("antigenTestResult",M),U.append("whatAntigenTestResult",R)),V&&U.append("vaccine",V),H&&U.append("ageGroup",H),X=W.other||W.selected[0],z&&U.append("ethnicity",z),X&&U.append("gender",X),K&&U.append("biologicalSex",K),J&&U.append("smokeLastSixMonths",J),(null===L||void 0===L||null===(f=L.selected)||void 0===f?void 0:f.length)>0&&U.append("currentSymptoms",L.selected.join(",")),Y&&U.append("symptomsStartedDate",Y),(null===G||void 0===G||null===(v=G.selected)||void 0===v?void 0:v.length)>0&&U.append("currentRespiratoryCondition",G.selected.join(",")),(null===$||void 0===$||null===(b=$.selected)||void 0===b?void 0:b.length)>0&&U.append("currentMedicalCondition",$.selected.join(",")),(null===L||void 0===L?void 0:L.other)&&U.append("otherSymptoms",null===L||void 0===L?void 0:L.other),(null===G||void 0===G?void 0:G.other)&&U.append("otherRespiratoryConditions",null===G||void 0===G?void 0:G.other),(null===$||void 0===$?void 0:$.other)&&U.append("otherMedicalConditions",null===$||void 0===$?void 0:$.other),o&&U.append("captchaValue",o),e.next=44,i.a.post("saveSurvey",U,{headers:{"Content-Type":"multipart/form-data; boundary=SaveSurvey"}});case 44:ee=e.sent,c({}),u&&(null===(h=ee.data)||void 0===h?void 0:h.submissionId)&&(p(!1),d.push(u,{submissionId:null===(te=ee.data)||void 0===te?void 0:te.submissionId})),e.next=53;break;case 49:e.prev=49,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 53:case"end":return e.stop()}}),e,null,[[1,49]])})))).apply(this,arguments)}},297:function(e,t,n){"use strict";n.r(t);var a=n(216),r=n.n(a),o=n(237),i=n(217),l=n(206),c=n(9),s=n.n(c),u=n(240),p=n(212),d=n.n(p),m=n(853),f=n(246),v=n(855),b=n(214),h=n(210),y=n(231),g=n(219),O=n(232),j=n(218),x=n(239),S=n(230),E=n(207),k=n(229),w=n(208),C=n(275),q=n(245),T=n(215),D=n(236),A=O.object({currentMedicalCondition:O.object()}).defined();t.default=s.a.memo((function(e){var t=e.previousStep,n=e.nextStep,a=e.storeKey,p=e.metadata,O=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,P=Object(E.a)(),B=P.setDoGoBack,I=P.setTitle,F=P.setType,N=Object(u.g)(),R=Object(m.a)().t,M=Object(h.d)(Object(j.b)(a)),V=M.state,H=M.action,W=Object(k.e)(),z=Object(k.d)(),K=Object(v.a)(["virufy-study-user"]),J=Object(l.a)(K,1)[0]["virufy-study-user"],L=s.a.useState(!0),Y=Object(l.a)(L,2),G=Y[0],$=Y[1],U=Object(b.e)({defaultValues:null===V||void 0===V?void 0:V[a],resolver:Object(y.a)(A)}),Q=U.control,_=U.handleSubmit,Z=U.formState,X=Z.errors,ee=s.a.useState(null),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],re=s.a.useState(null),oe=Object(l.a)(re,2),ie=oe[0],le=oe[1],ce=s.a.useState(!0),se=Object(l.a)(ce,2),ue=se[0],pe=se[1],de=Z.isSubmitting;Object(c.useEffect)((function(){ie||ae(null)}),[ie]);var me=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,Object(C.a)({setSubmitError:function(e){return ae(e?R(e):null)},state:Object(o.a)(Object(o.a)({},V),{},{"submit-steps":Object(o.a)(Object(o.a)({},V["submit-steps"]),t)}),captchaValue:ie,action:H,nextStep:n,setActiveStep:$,history:N,userCookie:J});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=s.a.useCallback((function(){$(!1),t?N.push(t):N.goBack()}),[N,t]);Object(c.useEffect)((function(){Object(w.a)(),I("".concat(R("questionary:respiration.title"))),F("primary"),B((function(){return fe}))}),[fe,B,I,F,p,R]);var ve=s.a.useMemo((function(){return"Japan"===z?[{value:"none",label:R("questionary:medical.options.none")},{value:"allergies",label:R("questionary:medical.options.allergies")},{value:"asthma",label:R("questionary:medical.options.asthma")},{value:"bronchitis",label:R("questionary:medical.options.bronchitis")},{value:"congestiveHeartFailure",label:R("questionary:medical.options.congestiveHeart")},{value:"copdEmphysema",label:R("questionary:medical.options.emphysema")},{value:"extremeObesity",label:R("questionary:medical.options.obesity")},{value:"heartDisease",label:R("questionary:medical.options.heartDisease")},{value:"hivAidsOrImpairedImmuneSystem",label:R("questionary:medical.options.hiv")},{value:"lungCancer",label:R("questionary:medical.options.lungCancer")},{value:"otherChronic",label:R("questionary:medical.options.otherChronic")},{value:"pneumonia",label:R("questionary:medical.options.pneumonia")},{value:"pulmonaryFibrosis",label:R("questionary:medical.options.pulmonary")},{value:"sinusitis",label:R("questionary:medical.options.sinusitis")},{value:"tuberculosis",label:R("questionary:medical.options.tuberculosis")},{value:"other",label:R("questionary:medical.options.other")}]:[{value:"none",label:R("questionary:medical.options.none")},{value:"allergies",label:R("questionary:medical.options.allergies")},{value:"asthma",label:R("questionary:medical.options.asthma")},{value:"bronchitis",label:R("questionary:medical.options.bronchitis")},{value:"congestiveHeartFailure",label:R("questionary:medical.options.congestiveHeart")},{value:"copdEmphysema",label:R("questionary:medical.options.emphysema")},{value:"extremeObesity",label:R("questionary:medical.options.obesity")},{value:"heartDisease",label:R("questionary:medical.options.heartDisease")},{value:"hivAidsOrImpairedImmuneSystem",label:R("questionary:medical.options.hiv")},{value:"lungCancer",label:R("questionary:medical.options.lungCancer")},{value:"otherChronic",label:R("questionary:medical.options.otherChronic")},{value:"pneumonia",label:R("questionary:medical.options.pneumonia")},{value:"pulmonaryFibrosis",label:R("questionary:medical.options.pulmonary")},{value:"reflux",label:R("questionary:medical.options.reflux")},{value:"sinusitis",label:R("questionary:medical.options.sinusitis")},{value:"tuberculosis",label:R("questionary:medical.options.tuberculosis")},{value:"other",label:R("questionary:medical.options.other")}]}),[z,R]);return s.a.createElement(D.MainContainer,null,s.a.createElement(S.a,{currentStep:null===p||void 0===p?void 0:p.current,totalSteps:null===p||void 0===p?void 0:p.total,progressBar:!0}),s.a.createElement(D.QuestionText,{extraSpace:!0,first:!0},s.a.createElement(f.a,{i18nKey:"questionary:medical.question"},s.a.createElement("strong",null,"Which of the below medical conditions do you currently have?")),s.a.createElement(D.QuestionAllApply,null,R("questionary:allThatApply"))),s.a.createElement(b.a,{control:Q,name:"currentMedicalCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return s.a.createElement(q.a,{isCheckbox:!0,value:n,onChange:function(e){return t(e)},items:ve,excludableValues:["none"]})}}),s.a.createElement("p",null,s.a.createElement(g.a,{errors:X,name:"name"})),G&&s.a.createElement(O,null,(!W||W&&"Colombia"!==z)&&s.a.createElement(x.a,{onChange:le,setRecaptchaAvailable:pe}),ne&&s.a.createElement(D.TempBeforeSubmitError,null,ne),s.a.createElement(T.a,{invert:!0,leftLabel:R(de?"questionary:submitting":"beforeSubmit:submitButton"),leftDisabled:"Colombia"!==z?de||ue&&!ie:de,leftHandler:_(W?function(){n&&($(!1),N.push(n))}:me)})))}))}}]);
//# sourceMappingURL=59.b39302d5.chunk.js.map
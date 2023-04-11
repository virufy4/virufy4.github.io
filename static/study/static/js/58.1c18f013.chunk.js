(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[58],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9),a=n.n(r),o=n(214),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var c=function(e){var t=e.as,n=e.errors,r=e.name,c=e.message,s=e.render,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),u=Object(o.f)(),p=Object(o.c)(n||u.errors,r);if(!p)return null;var d=p.message,f=p.types,m=i(i({},l),{children:d||c});return t?a.a.isValidElement(t)?a.a.cloneElement(t,m):a.a.createElement(t,m):s?s({message:d||c,messages:f}):a.a.createElement(a.a.Fragment,i({},m))}},221:function(e,t,n){var r=n(78);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},222:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},223:function(e,t,n){e.exports={parse:n(224),stringify:n(227)}},224:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,a=n(225),o=Object.create?Object.create(null):{};function i(e,t,n,r,a){var o=t.indexOf("<",r),i=t.slice(r,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!a&&o>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,c=[],s=-1,l=[],u={},p=!1;return e.replace(r,(function(r,o){if(p){if(r!=="</"+n.name+">")return;p=!1}var d,f="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),v=o+r.length,h=e.charAt(v);f&&!m&&(s++,"tag"===(n=a(r)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!h||"<"===h||i(n.children,e,s,v,t.ignoreWhitespace),u[n.tagName]=n,0===s&&c.push(n),(d=l[s-1])&&d.children.push(n),l[s]=n),(m||!f||n.voidElement)&&(m||s--,!p&&"<"!==h&&h&&i(d=-1===s?c:l[s].children,e,s,v,t.ignoreWhitespace))})),!c.length&&e.length&&i(c,e,0,0,t.ignoreWhitespace),c}},225:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,a=n(226);e.exports=function(e){var t,n=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return o=!0,void n++;o?0===n?((a[r]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=r):(i.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=r),n++,o=!1})),i}},226:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},227:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(9),a=n.n(r),o=n(852),i=n(211),c=n(205),s=n(204);function l(){var e=Object(c.a)(["\n  width: 120px;\n  height: 10px;\n  background: ",";\n  position: relative;\n  border-radius: 24px;\n  margin-top: 12px;\n  \n  &:after {\n    content:'';\n    width: ",";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ",";\n    border-radius: 24px;\n  }\n"]);return l=function(){return e},e}function u(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  color: ",";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 700;\n  "]);return u=function(){return e},e}function p(){var e=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return p=function(){return e},e}function d(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return d=function(){return e},e}var f=s.default.div(d(),(function(e){return e.theme.breakpoints.tablet})),m=(s.default.div(p()),s.default.div(u(),(function(e){return e.theme.colors.purple}))),v=s.default.div(l(),(function(e){return e.theme.colors.midGrayBlue}),(function(e){var t=e.currentStep,n=e.totalSteps;return"calc((100%/".concat(n,") * ").concat(t,")")}),(function(e){return e.theme.colors.purple})),h=a.a.memo((function(e){var t=e.className,n=void 0===t?"":t,r=e.radius,c=void 0===r?30:r,s=e.stroke,l=void 0===s?6:s,u=e.currentStep,p=void 0===u?2:u,d=e.totalSteps,h=void 0===d?4:d,b=e.color,y=void 0===b?i.a.green:b,g=e.colorTrack,O=void 0===g?i.a.gray3:g,j=e.progressBar,x=void 0!==j&&j,S=Object(o.a)().t,E=p/h*100,k=c-l/2,w=2*k*Math.PI,C=w-E/100*w;return a.a.createElement(a.a.Fragment,null,x?a.a.createElement(m,null,S("questionary:progressBar",{currentStep:p,totalSteps:h}),a.a.createElement(v,{currentStep:p,totalSteps:h})):a.a.createElement(f,{className:n},a.a.createElement("svg",{width:2*c,height:2*c,viewBox:"0 0 ".concat(2*c," ").concat(2*c)},a.a.createElement("circle",{className:"track",stroke:O,fill:"transparent",strokeWidth:l,r:k,cx:c,cy:c}),a.a.createElement("circle",{stroke:y,fill:"transparent",strokeWidth:l,strokeDasharray:"".concat(w," ").concat(w),style:{strokeDashoffset:C},r:k,cx:c,cy:c}),a.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(p,"/").concat(h)))))}))},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(9),a=n.n(r),o=n(260),i=n(852),c=n(17),s=n(205);function l(){var e=Object(s.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return l=function(){return e},e}var u=n(204).default.div(l()),p=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,r=Object(i.a)().i18n;return a.a.createElement(u,null,a.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),c.a("Error on ReCAPTCHA")},hl:r.language}))}},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(221),a=n.n(r),o=n(222),i=n.n(o),c=n(12),s=n.n(c),l=n(9),u=n.n(l),p=n(223),d=n.n(p),f=n(187),m=n(243);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,a){if(""===t)return[];var o=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(o.join("|")).test(t);if(!e&&!c)return[t];var s={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(b(t)?e(y(t)):"object"!==i()(t)||u.a.isValidElement(t)||Object.assign(s,t))}))}(e);var l=n.services.interpolator.interpolate(t,h(h({},s),a),n.language),p=d.a.parse("<0>".concat(l,"</0>"));function f(e,t,n){var r=y(e),a=v(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return u.a.isValidElement(e)}))}(r)&&0===a.length?r:a}function m(e,t,n,r){e.dummy&&(e.children=t),n.push(u.a.cloneElement(e,h(h({},e.props),{},{key:r}),t))}function v(t,n,a){var s=g(t);return g(n).reduce((function(t,n,l){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=s[parseInt(n.name,10)];!d&&1===a.length&&a[0][n.name]&&(d=a[0][n.name]),d||(d={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=h({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=u.a.isValidElement(y),O=g&&b(n,!0)&&!n.voidElement,j=c&&"object"===i()(y)&&y.dummy&&!g,x="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(b(y)||O){m(y,f(y,n,a),t,l)}else if(j){var S=v(s,n.children,a);t.push(u.a.cloneElement(y,h(h({},y.props),{},{key:l}),S))}else if(Number.isNaN(parseFloat(n.name))){if(x)m(y,f(y,n,a),t,l);else if(r.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var E=v(s,n.children,a);t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},E))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var k=v(s,n.children,a);t.push("<".concat(n.name,">").concat(k,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&p?t.push(u.a.cloneElement(y,h(h({},y.props),{},{key:l}),p)):t.push(u.a.cloneElement(y,h(h({},y.props),{},{key:l})));else{var w=n.children[0]?p:null;w&&t.push(w)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(v([{dummy:!0,children:e}],p,g(e||[]))[0])}function j(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,c=e.tOptions,s=e.values,p=e.defaults,d=e.components,v=e.ns,b=e.i18n,y=e.t,j=a()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),x=Object(l.useContext)(f.a)||{},S=x.i18n,E=x.defaultNS,k=b||S||Object(f.d)();if(!k)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var w=y||k.t.bind(k)||function(e){return e},C=h(h({},Object(f.c)()),k.options&&k.options.react),T=v||w.ns||E||k.options&&k.options.defaultNS;T="string"===typeof T?[T]:T||["translation"];var A=p||function e(t,n){if(!t)return"";var r="",o=g(t),c=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)r+="".concat(t);else if(u.a.isValidElement(t)){var s=Object.keys(t.props).length,l=c.indexOf(t.type)>-1,p=t.props.children;if(!p&&l&&0===s)r+="<".concat(t.type,"/>");else if(p||l&&0===s)if(t.props.i18nIsDynamicList)r+="<".concat(o,"></").concat(o,">");else if(l&&1===s&&"string"===typeof p)r+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var d=e(p,n);r+="<".concat(o,">").concat(d,"</").concat(o,">")}else r+="<".concat(o,"></").concat(o,">")}else if("object"===i()(t)){var f=t.format,v=a()(t,["format"]),h=Object.keys(v);if(1===h.length){var b=f?"".concat(h[0],", ").concat(f):h[0];r+="{{".concat(b,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,C)||C.transEmptyNodeValue||o,D=C.hashTransKey,P=o||(D?D(A):A),B=s?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},R=h(h(h(h({},c),{},{count:n},s),B),{},{defaultValue:A,ns:T}),N=O(d||t,P?w(P,R):A,k,C,R),I=void 0!==r?r:C.defaultTransParent;return I?u.a.createElement(I,j,N):N}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(273),a=n.n(r).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return a}},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(216),a=n.n(r),o=n(217),i=n(251),c=n(229),s=n(247),l=function(){return{isBrowser:s.isBrowser?Object(s.deviceDetect)():null,isMobile:s.isMobile?Object(s.deviceDetect)():null,isSmartTv:s.isSmartTV?Object(s.deviceDetect)():null,isConsole:s.isConsole?Object(s.deviceDetect)():null,isTablet:s.isTablet?Object(s.deviceDetect)():null,isWearable:s.isWearable?Object(s.deviceDetect)():null}};function u(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark((function e(t){var n,r,o,s,u,p,d,f,m,v,h,b,y,g,O,j,x,S,E,k,w,C,T,A,D,P,B,R,N,I,V,q,F,M,W,z,K,L,H,J,Y,G,$,U,Q,_,Z,X,ee,te;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,r=t.state,o=t.captchaValue,s=t.action,u=t.nextStep,p=t.setActiveStep,d=t.history,f=t.userCookie,e.prev=1,n(null),y=r.welcome,g=y.language,O=y.country,j=y.region,x=y.patientId,S=y.agreedConsentTerms,E=y.agreedPolicyTerms,k=y.agreedCovidDetection,w=y.agreedCovidCollection,C=y.agreedTrainingArtificial,T=y.agreedBiometric,A=r["submit-steps"],D=A.recordYourCough,P=A.recordYourBreath,B=A.recordYourSpeech,R=A.testTaken,N=A.pcrTestDate,I=A.pcrTestResult,V=A.antigenTestDate,q=A.whatAntigenTestResult,F=A.antigenTestResult,M=A.vaccine,W=A.ageGroup,z=A.gender,K=A.ethnicity,L=A.biologicalSex,H=A.smokeLastSixMonths,J=A.currentSymptoms,Y=A.symptomsStartedDate,G=A.currentRespiratoryCondition,$=A.currentMedicalCondition,(U=new FormData).append("device",JSON.stringify(l())),U.append("language",g),U.append("country",O),j&&U.append("region",j),x&&U.append("patientId",x),window.sourceCampaign&&U.append("source",window.sourceCampaign),f&&U.append("userCookie",JSON.stringify(f)),U.append("agreedConsentTerms",S),U.append("agreedPolicyTerms",E),U.append("agreedCovidCollection",w),U.append("agreedCovidDetection",k),U.append("agreedTrainingArtificial",C),U.append("agreedBiometric",T),Q=D.recordingFile||D.uploadedFile,U.append("cough",Q,Q.name||"filename.wav"),_=P.recordingFile||P.uploadedFile,U.append("breath",_,_.name||"filename_breath.wav"),c.b.includes(O)&&(Z=B.recordingFile||B.uploadedFile,U.append("voice",Z,Z.name||"filename_voice.wav")),U.append("testTaken",R.join(",")),R.includes("pcr")&&(U.append("pcrTestDate",N.toISOString()),U.append("pcrTestResult",I)),R.includes("antigen")&&(U.append("antigenTestDate",V.toISOString()),U.append("antigenTestResult",F),U.append("whatAntigenTestResult",q)),M&&U.append("vaccine",M),W&&U.append("ageGroup",W),X=z.other||z.selected[0],K&&U.append("ethnicity",K),X&&U.append("gender",X),L&&U.append("biologicalSex",L),H&&U.append("smokeLastSixMonths",H),(null===J||void 0===J||null===(m=J.selected)||void 0===m?void 0:m.length)>0&&U.append("currentSymptoms",J.selected.join(",")),Y&&U.append("symptomsStartedDate",Y),(null===G||void 0===G||null===(v=G.selected)||void 0===v?void 0:v.length)>0&&U.append("currentRespiratoryCondition",G.selected.join(",")),(null===$||void 0===$||null===(h=$.selected)||void 0===h?void 0:h.length)>0&&U.append("currentMedicalCondition",$.selected.join(",")),(null===J||void 0===J?void 0:J.other)&&U.append("otherSymptoms",null===J||void 0===J?void 0:J.other),(null===G||void 0===G?void 0:G.other)&&U.append("otherRespiratoryConditions",null===G||void 0===G?void 0:G.other),(null===$||void 0===$?void 0:$.other)&&U.append("otherMedicalConditions",null===$||void 0===$?void 0:$.other),o&&U.append("captchaValue",o),e.next=44,i.a.post("saveSurvey",U,{headers:{"Content-Type":"multipart/form-data; boundary=SaveSurvey"}});case 44:ee=e.sent,s({}),u&&(null===(b=ee.data)||void 0===b?void 0:b.submissionId)&&(p(!1),d.push(u,{submissionId:null===(te=ee.data)||void 0===te?void 0:te.submissionId})),e.next=53;break;case 49:e.prev=49,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 53:case"end":return e.stop()}}),e,null,[[1,49]])})))).apply(this,arguments)}},296:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n.n(r),o=n(217),i=n(206),c=n(9),s=n.n(c),l=n(240),u=n(212),p=n.n(u),d=n(852),f=n(246),m=n(854),v=n(214),h=n(209),b=n(231),y=n(219),g=n(232),O=n(218),j=n(239),x=n(230),S=n(207),E=n(208),k=n(275),w=n(245),C=n(215),T=n(236),A=g.object({currentRespiratoryCondition:g.object().required()}).defined();t.default=s.a.memo((function(e){var t,n,r=e.previousStep,u=e.nextStep,g=e.storeKey,D=e.metadata,P=p()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,B=Object(S.a)(),R=B.setDoGoBack,N=B.setTitle,I=B.setType,V=Object(l.g)(),q=Object(d.a)().t,F=Object(h.d)(Object(O.b)(g)),M=F.state,W=F.action,z=Object(m.a)(["virufy-study-user"]),K=Object(i.a)(z,1)[0]["virufy-study-user"],L=s.a.useState(!0),H=Object(i.a)(L,2),J=H[0],Y=H[1],G=s.a.useState(null),$=Object(i.a)(G,2),U=$[0],Q=$[1],_=s.a.useState(null),Z=Object(i.a)(_,2),X=Z[0],ee=Z[1],te=s.a.useState(!0),ne=Object(i.a)(te,2),re=ne[0],ae=ne[1],oe=Object(v.e)({mode:"onChange",defaultValues:null===M||void 0===M?void 0:M[g],resolver:Object(b.a)(A)}),ie=oe.control,ce=oe.handleSubmit,se=oe.formState,le=se.errors,ue=se.isValid,pe=s.a.useCallback((function(){Y(!1),r?V.push(r):V.goBack()}),[V,r]);Object(c.useEffect)((function(){Object(E.a)(),N("".concat(q("questionary:respiration.title"))),I("primary"),R((function(){return pe}))}),[pe,R,N,I,D,q]);var de=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}if((null!==(n=null===D||void 0===D?void 0:D.current)&&void 0!==n?n:5)!==(null!==(r=null===D||void 0===D?void 0:D.total)&&void 0!==r?r:6)){e.next=6;break}return e.next=4,Object(k.a)({setSubmitError:function(e){return Q(e?q(e):null)},state:M,captchaValue:X,action:W,nextStep:u,setActiveStep:Y,history:V,userCookie:K});case 4:e.next=8;break;case 6:W(t),u&&(Y(!1),V.push(u));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(T.MainContainer,null,s.a.createElement(x.a,{currentStep:null===D||void 0===D?void 0:D.current,totalSteps:null===D||void 0===D?void 0:D.total,progressBar:!0}),s.a.createElement(T.QuestionText,{bold:!1},s.a.createElement(f.a,{i18nKey:"questionary:respiration.question"},s.a.createElement("strong",null,"Which of the below respiratory conditions do you currently have?")),s.a.createElement(T.QuestionAllApply,null,q("questionary:allThatApply"))),s.a.createElement(v.a,{control:ie,name:"currentRespiratoryCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return s.a.createElement(w.a,{value:n,onChange:function(e){return t(e)},items:[{value:"none",label:q("questionary:respiration.options.none")},{value:"asthma",label:q("questionary:respiration.options.asthma")},{value:"bronchitis",label:q("questionary:respiration.options.bronchitis")},{value:"copdEmphysema",label:q("questionary:respiration.options.emphysema")},{value:"pneumonia",label:q("questionary:respiration.options.pneumonia")},{value:"tuberculosis",label:q("questionary:respiration.options.tuberculosis")},{value:"other",label:q("questionary:medical.options.other")}],excludableValues:["none"]})}}),s.a.createElement("p",null,s.a.createElement(y.a,{errors:le,name:"name"})),J&&s.a.createElement(P,null,(null!==(t=null===D||void 0===D?void 0:D.current)&&void 0!==t?t:5)===(null!==(n=null===D||void 0===D?void 0:D.total)&&void 0!==n?n:6)&&s.a.createElement(j.a,{onChange:ee,setRecaptchaAvailable:ae}),U&&s.a.createElement(T.TempBeforeSubmitError,null,U),s.a.createElement(C.a,{invert:!0,leftLabel:q("questionary:nextButton"),leftHandler:ce(de),leftDisabled:!ue||!re})))}))}}]);
//# sourceMappingURL=58.1c18f013.chunk.js.map
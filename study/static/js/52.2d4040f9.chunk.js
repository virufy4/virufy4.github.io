(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[52],{220:function(e,t,n){var a=n(78);e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},221:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},222:function(e,t,n){e.exports={parse:n(223),stringify:n(226)}},223:function(e,t,n){var a=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,r=n(224),o=Object.create?Object.create(null):{};function i(e,t,n,a,r){var o=t.indexOf("<",a),i=t.slice(a,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!r&&o>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,s=[],c=-1,l=[],u={},p=!1;return e.replace(a,(function(a,o){if(p){if(a!=="</"+n.name+">")return;p=!1}var d,m="/"!==a.charAt(1),v=0===a.indexOf("\x3c!--"),b=o+a.length,f=e.charAt(b);m&&!v&&(c++,"tag"===(n=r(a)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!f||"<"===f||i(n.children,e,c,b,t.ignoreWhitespace),u[n.tagName]=n,0===c&&s.push(n),(d=l[c-1])&&d.children.push(n),l[c]=n),(v||!m||n.voidElement)&&(v||c--,!p&&"<"!==f&&f&&i(d=-1===c?s:l[c].children,e,c,b,t.ignoreWhitespace))})),!s.length&&e.length&&i(s,e,0,0,t.ignoreWhitespace),s}},224:function(e,t,n){var a=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,r=n(225);e.exports=function(e){var t,n=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(a,(function(a){if("="===a)return o=!0,void n++;o?0===n?((r[a]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=a):(i.attrs[t]=a.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=a),n++,o=!1})),i}},225:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},226:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(253),r=n.n(a).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return r}},236:function(e,t,n){"use strict";var a=n(247);t.a=function(){return{isBrowser:a.isBrowser?Object(a.deviceDetect)():null,isMobile:a.isMobile?Object(a.deviceDetect)():null,isSmartTv:a.isSmartTV?Object(a.deviceDetect)():null,isConsole:a.isConsole?Object(a.deviceDetect)():null,isTablet:a.isTablet?Object(a.deviceDetect)():null,isWearable:a.isWearable?Object(a.deviceDetect)():null}}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(9),r=n.n(a),o=n(262),i=n(846),s=n(17),c=n(205);function l(){var e=Object(c.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return l=function(){return e},e}var u=n(204).default.div(l()),p=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,a=Object(i.a)().i18n;return r.a.createElement(u,null,r.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),s.a("Error on ReCAPTCHA")},hl:a.language}))}},248:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return b}));var a=n(212),r=n.n(a),o=n(213),i=n(229),s=n(227),c=n(236);function l(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l,u,p,d,m,v,b,f,h,y,g,O,S,j,w,x,C,E,k,I,T,A,D,q,F,R;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,l=t.setActiveStep,u=t.history,e.prev=1,n(null),b=a.welcome,f=b.language,h=b.country,y=b.region,g=b.patientId,O=b.hospitalId,S=a["submit-steps"],j=S.vaccine,w=S.ageGroup,x=S.gender,C=S.biologicalSex,E=S.smokeLastSixMonths,k=S.currentSymptoms,I=S.symptomsStartedDate,T=S.currentRespiratoryCondition,A=S.currentMedicalCondition,(D=new FormData).append("device",JSON.stringify(Object(c.a)())),D.append("language",f),D.append("country",h),y&&D.append("region",y),O&&D.append("hospitalId",O),window.sourceCampaign&&D.append("source",window.sourceCampaign),j&&D.append("vaccine",j),w&&D.append("ageGroup",w),(q=x.other||x.selected[0])&&D.append("gender",q),C&&D.append("biologicalSex",C),E&&D.append("smokeLastSixMonths",E),(null===k||void 0===k||null===(p=k.selected)||void 0===p?void 0:p.length)>0&&D.append("currentSymptoms",k.selected.join(",")),I&&D.append("symptomsStartedDate",I),(null===T||void 0===T||null===(d=T.selected)||void 0===d?void 0:d.length)>0&&D.append("currentRespiratoryCondition",T.selected.join(",")),(null===A||void 0===A||null===(m=A.selected)||void 0===m?void 0:m.length)>0&&D.append("currentMedicalCondition",A.selected.join(",")),(null===k||void 0===k?void 0:k.other)&&D.append("otherSymptoms",null===k||void 0===k?void 0:k.other),(null===T||void 0===T?void 0:T.other)&&D.append("otherRespiratoryConditions",null===T||void 0===T?void 0:T.other),(null===A||void 0===A?void 0:A.other)&&D.append("otherMedicalConditions",null===A||void 0===A?void 0:A.other),o&&D.append("captchaValue",o),e.next=28,i.a.post("/patient/".concat(g,"/questionary"),D,{headers:{"Content-Type":"multipart/form-data; boundary=Questionary"}});case 28:F=e.sent,s&&(null===(v=F.data)||void 0===v?void 0:v.submissionId)&&(l(!1),u.push(s,{submissionId:null===(R=F.data)||void 0===R?void 0:R.submissionId,patientId:g})),e.next=36;break;case 32:e.prev=32,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 36:case"end":return e.stop()}}),e,null,[[1,32]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l,u,p,d,m,v,b,f,h,y,g,O,S,j,w,x,C,E,k;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,l=t.setActiveStep,u=t.history,e.prev=1,n(null),m=a.welcome,v=m.language,b=m.country,f=m.region,h=m.patientId,y=m.hospitalId,g=a["submit-steps"],O=g.ageGroup,S=g.gender,j=g.currentSymptoms,w=g.symptomsStartedDate,(x=new FormData).append("device",JSON.stringify(Object(c.a)())),x.append("language",v),x.append("country",b),f&&x.append("region",f),y&&x.append("hospitalId",y),window.sourceCampaign&&x.append("source",window.sourceCampaign),O&&x.append("ageGroup",O),(C=S.other||S.selected[0])&&x.append("gender",C),(null===j||void 0===j||null===(p=j.selected)||void 0===p?void 0:p.length)>0&&x.append("currentSymptoms",j.selected.join(",")),w&&x.append("symptomsStartedDate",w),o&&x.append("captchaValue",o),e.next=20,i.a.post("/patient/".concat(h,"/shortQuestionary"),x,{headers:{"Content-Type":"multipart/form-data; boundary=ShortQuestionary"}});case 20:E=e.sent,s&&(null===(d=E.data)||void 0===d?void 0:d.submissionId)&&(l(!1),u.push(s,{submissionId:null===(k=E.data)||void 0===k?void 0:k.submissionId,patientId:h})),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 28:case"end":return e.stop()}}),e,null,[[1,24]])})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(r.a.mark((function e(t){var n,a,o,l,u,p,d,m,v,b,f,h,y,g,O,S,j,w,x,C,E,k,I,T,A,D;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,l=t.nextStep,u=t.otherSteps,p=t.setActiveStep,d=t.history,m=t.isShortAudioCollection,e.prev=1,n(null),b=a.welcome,f=b.language,h=b.country,y=b.region,g=b.patientId,O=b.hospitalId,S=a["submit-steps"],j=S.recordYourCough,w=S.recordYourBreath,x=S.recordYourSpeech,(C=new FormData).append("device",JSON.stringify(Object(c.a)())),C.append("language",f),C.append("country",h),y&&C.append("region",y),O&&C.append("hospitalId",O),window.sourceCampaign&&C.append("source",window.sourceCampaign),j&&(E=j.recordingFile||j.uploadedFile,C.append("cough",E,E.name||"filename.wav")),w&&(k=w.recordingFile||w.uploadedFile,C.append("breath",k,k.name||"filename_breath.wav")),s.b.includes(h)&&x&&(I=x.recordingFile||x.uploadedFile,C.append("voice",I,I.name||"filename_voice.wav")),o&&C.append("captchaValue",o),C.append("shortAudioCollection",m||"false"),e.next=19,i.a.post("/patient/".concat(g,"/audioCollection"),C,{headers:{"Content-Type":"multipart/form-data; boundary=AudioCollection"}});case 19:T=e.sent,m&&(null===u||void 0===u?void 0:u.isShortAudioStep)?(p(!1),d.push(null===u||void 0===u?void 0:u.isShortAudioStep,{submissionId:null===(A=T.data)||void 0===A?void 0:A.submissionId,patientId:g})):l&&(null===(v=T.data)||void 0===v?void 0:v.submissionId)&&(p(!1),d.push(l,{submissionId:null===(D=T.data)||void 0===D?void 0:D.submissionId,patientId:g})),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 27:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l,u,p,d,m,v,b,f,h,y,g,O,S,j,w;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,l=t.setActiveStep,u=t.history,e.prev=1,n(null),d=a.welcome,m=d.language,v=d.country,b=d.region,f=d.patientId,h=d.hospitalId,y=a["submit-steps"],g=y.patientAntigenTestResult,O=y.patientPcrTestResult,(S=new FormData).append("device",JSON.stringify(Object(c.a)())),S.append("language",m),S.append("country",v),b&&S.append("region",b),h&&S.append("hospitalId",h),window.sourceCampaign&&S.append("source",window.sourceCampaign),g&&S.append("patientAntigenTestResult",g),O&&S.append("patientPcrTestResult",O),o&&S.append("captchaValue",o),e.next=17,i.a.post("/patient/".concat(f,"/testResult"),S,{headers:{"Content-Type":"multipart/form-data; boundary=testResult"}});case 17:j=e.sent,s&&(null===(p=j.data)||void 0===p?void 0:p.submissionId)&&(l(!1),u.push(s,{submissionId:null===(w=j.data)||void 0===w?void 0:w.submissionId,patientId:f})),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 25:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(220),r=n.n(a),o=n(221),i=n.n(o),s=n(12),c=n.n(s),l=n(9),u=n.n(l),p=n(222),d=n.n(p),m=n(187),v=n(244);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,a,r){if(""===t)return[];var o=a.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(o.join("|")).test(t);if(!e&&!s)return[t];var c={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(h(t)?e(y(t)):"object"!==i()(t)||u.a.isValidElement(t)||Object.assign(c,t))}))}(e);var l=n.services.interpolator.interpolate(t,f(f({},c),r),n.language),p=d.a.parse("<0>".concat(l,"</0>"));function m(e,t,n){var a=y(e),r=b(a,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return u.a.isValidElement(e)}))}(a)&&0===r.length?a:r}function v(e,t,n,a){e.dummy&&(e.children=t),n.push(u.a.cloneElement(e,f(f({},e.props),{},{key:a}),t))}function b(t,n,r){var c=g(t);return g(n).reduce((function(t,n,l){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=c[parseInt(n.name,10)];!d&&1===r.length&&r[0][n.name]&&(d=r[0][n.name]),d||(d={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=f({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=u.a.isValidElement(y),O=g&&h(n,!0)&&!n.voidElement,S=s&&"object"===i()(y)&&y.dummy&&!g,j="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(h(y)||O){v(y,m(y,n,r),t,l)}else if(S){var w=b(c,n.children,r);t.push(u.a.cloneElement(y,f(f({},y.props),{},{key:l}),w))}else if(Number.isNaN(parseFloat(n.name))){if(j)v(y,m(y,n,r),t,l);else if(a.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var x=b(c,n.children,r);t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},x))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var C=b(c,n.children,r);t.push("<".concat(n.name,">").concat(C,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&p?t.push(u.a.cloneElement(y,f(f({},y.props),{},{key:l}),p)):t.push(u.a.cloneElement(y,f(f({},y.props),{},{key:l})));else{var E=n.children[0]?p:null;E&&t.push(E)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(b([{dummy:!0,children:e}],p,g(e||[]))[0])}function S(e){var t=e.children,n=e.count,a=e.parent,o=e.i18nKey,s=e.tOptions,c=e.values,p=e.defaults,d=e.components,b=e.ns,h=e.i18n,y=e.t,S=r()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(l.useContext)(m.a)||{},w=j.i18n,x=j.defaultNS,C=h||w||Object(m.d)();if(!C)return Object(v.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var E=y||C.t.bind(C)||function(e){return e},k=f(f({},Object(m.c)()),C.options&&C.options.react),I=b||E.ns||x||C.options&&C.options.defaultNS;I="string"===typeof I?[I]:I||["translation"];var T=p||function e(t,n){if(!t)return"";var a="",o=g(t),s=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)a+="".concat(t);else if(u.a.isValidElement(t)){var c=Object.keys(t.props).length,l=s.indexOf(t.type)>-1,p=t.props.children;if(!p&&l&&0===c)a+="<".concat(t.type,"/>");else if(p||l&&0===c)if(t.props.i18nIsDynamicList)a+="<".concat(o,"></").concat(o,">");else if(l&&1===c&&"string"===typeof p)a+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var d=e(p,n);a+="<".concat(o,">").concat(d,"</").concat(o,">")}else a+="<".concat(o,"></").concat(o,">")}else if("object"===i()(t)){var m=t.format,b=r()(t,["format"]),f=Object.keys(b);if(1===f.length){var h=m?"".concat(f[0],", ").concat(m):f[0];a+="{{".concat(h,"}}")}else Object(v.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(v.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),a}(t,k)||k.transEmptyNodeValue||o,A=k.hashTransKey,D=o||(A?A(T):T),q=c?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},F=f(f(f(f({},s),{},{count:n},c),q),{},{defaultValue:T,ns:I}),R=O(d||t,D?E(D,F):T,C,k,F),V=void 0!==a?a:k.defaultTransParent;return V?u.a.createElement(V,S,R):R}},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(212),r=n.n(a),o=n(213),i=n(229),s=n(227),c=n(236);function l(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(r.a.mark((function e(t){var n,a,o,l,u,p,d,m,v,b,f,h,y,g,O,S,j,w,x,C,E,k,I,T,A,D,q,F,R,V,P,M,N,B,J,L,Y,G,H,K,W,z,Q,$,_,U,Z;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,l=t.action,u=t.nextStep,p=t.setActiveStep,d=t.history,e.prev=1,n(null),h=a.welcome,y=h.language,g=h.country,O=h.region,S=h.patientId,j=h.agreedConsentTerms,w=h.agreedPolicyTerms,x=h.agreedCovidDetection,C=h.agreedCovidCollection,E=h.agreedTrainingArtificial,k=h.agreedBiometric,I=a["submit-steps"],T=I.recordYourCough,A=I.recordYourBreath,D=I.recordYourSpeech,q=I.testTaken,F=I.pcrTestDate,R=I.pcrTestResult,V=I.antigenTestDate,P=I.antigenTestResult,M=I.vaccine,N=I.ageGroup,B=I.gender,J=I.biologicalSex,L=I.smokeLastSixMonths,Y=I.currentSymptoms,G=I.symptomsStartedDate,H=I.currentRespiratoryCondition,K=I.currentMedicalCondition,(W=new FormData).append("device",JSON.stringify(Object(c.a)())),W.append("language",y),W.append("country",g),O&&W.append("region",O),S&&W.append("patientId",S),window.sourceCampaign&&W.append("source",window.sourceCampaign),W.append("agreedConsentTerms",j),W.append("agreedPolicyTerms",w),W.append("agreedCovidCollection",C),W.append("agreedCovidDetection",x),W.append("agreedTrainingArtificial",E),W.append("agreedBiometric",k),z=T.recordingFile||T.uploadedFile,W.append("cough",z,z.name||"filename.wav"),Q=A.recordingFile||A.uploadedFile,W.append("breath",Q,Q.name||"filename_breath.wav"),s.b.includes(g)&&($=D.recordingFile||D.uploadedFile,W.append("voice",$,$.name||"filename_voice.wav")),W.append("testTaken",q.join(",")),q.includes("pcr")&&(W.append("pcrTestDate",F.toISOString()),W.append("pcrTestResult",R)),q.includes("antigen")&&(W.append("antigenTestDate",V.toISOString()),W.append("antigenTestResult",P)),M&&W.append("vaccine",M),N&&W.append("ageGroup",N),(_=B.other||B.selected[0])&&W.append("gender",_),J&&W.append("biologicalSex",J),L&&W.append("smokeLastSixMonths",L),(null===Y||void 0===Y||null===(m=Y.selected)||void 0===m?void 0:m.length)>0&&W.append("currentSymptoms",Y.selected.join(",")),G&&W.append("symptomsStartedDate",G),(null===H||void 0===H||null===(v=H.selected)||void 0===v?void 0:v.length)>0&&W.append("currentRespiratoryCondition",H.selected.join(",")),(null===K||void 0===K||null===(b=K.selected)||void 0===b?void 0:b.length)>0&&W.append("currentMedicalCondition",K.selected.join(",")),(null===Y||void 0===Y?void 0:Y.other)&&W.append("otherSymptoms",null===Y||void 0===Y?void 0:Y.other),(null===H||void 0===H?void 0:H.other)&&W.append("otherRespiratoryConditions",null===H||void 0===H?void 0:H.other),(null===K||void 0===K?void 0:K.other)&&W.append("otherMedicalConditions",null===K||void 0===K?void 0:K.other),o&&W.append("captchaValue",o),e.next=42,i.a.post("saveSurvey",W,{headers:{"Content-Type":"multipart/form-data; boundary=SaveSurvey"}});case 42:U=e.sent,l({}),u&&(null===(f=U.data)||void 0===f?void 0:f.submissionId)&&(p(!1),d.push(u,{submissionId:null===(Z=U.data)||void 0===Z?void 0:Z.submissionId})),e.next=51;break;case 47:e.prev=47,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 51:case"end":return e.stop()}}),e,null,[[1,47]])})))).apply(this,arguments)}},298:function(e,t,n){"use strict";n.r(t);var a=n(212),r=n.n(a),o=n(234),i=n(213),s=n(206),c=n(9),l=n.n(c),u=n(243),p=n(211),d=n.n(p),m=n(846),v=n(249),b=n(219),f=n(207),h=n(228),y=n(232),g=n(230),O=n(216),S=n(240),j=n(208),w=n(227),x=n(209),C=n(274),E=n(248),k=n(241),I=n(215),T=n(233),A=g.object({currentMedicalCondition:g.object()}).defined();t.default=l.a.memo((function(e){var t=e.previousStep,n=e.nextStep,a=e.storeKey,p=e.metadata,g=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,D=Object(j.a)(),q=D.setDoGoBack,F=D.setTitle,R=D.setType,V=Object(u.g)(),P=Object(m.a)().t,M=Object(f.d)(Object(O.b)(a)),N=M.state,B=M.action,J=Object(w.e)(),L=Object(w.d)(),Y=l.a.useState(!0),G=Object(s.a)(Y,2),H=G[0],K=G[1],W=Object(b.e)({defaultValues:null===N||void 0===N?void 0:N[a],resolver:Object(h.a)(A)}),z=W.control,Q=W.handleSubmit,$=W.formState,_=$.errors,U=l.a.useState(null),Z=Object(s.a)(U,2),X=Z[0],ee=Z[1],te=l.a.useState(null),ne=Object(s.a)(te,2),ae=ne[0],re=ne[1],oe=l.a.useState(!0),ie=Object(s.a)(oe,2),se=ie[0],ce=ie[1],le=$.isSubmitting;Object(c.useEffect)((function(){ae||ee(null)}),[ae]);var ue=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,Object(C.a)({setSubmitError:function(e){return ee(e?P(e):null)},state:Object(o.a)(Object(o.a)({},N),{},{"submit-steps":Object(o.a)(Object(o.a)({},N["submit-steps"]),t)}),captchaValue:ae,action:B,nextStep:n,setActiveStep:K,history:V});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,Object(E.b)({setSubmitError:function(e){return ee(e?P(e):null)},state:Object(o.a)(Object(o.a)({},N),{},{"submit-steps":Object(o.a)(Object(o.a)({},N["submit-steps"]),t)}),captchaValue:ae,action:B,nextStep:n,setActiveStep:K,history:V});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=l.a.useCallback((function(){K(!1),t?V.push(t):V.goBack()}),[V,t]);return Object(c.useEffect)((function(){Object(x.a)(),F("".concat(P("questionary:headerText")," ").concat(null===p||void 0===p?void 0:p.current," ").concat(P("questionary:stepOf")," ").concat(null===p||void 0===p?void 0:p.total)),R("primary"),q((function(){return de}))}),[de,q,F,R,p,P]),l.a.createElement(T.MainContainer,null,l.a.createElement(T.QuestionText,{extraSpace:!0,first:!0},l.a.createElement(v.a,{i18nKey:"questionary:medical.question"},l.a.createElement("strong",null,"Which of the below medical conditions do you currently have?")),l.a.createElement(T.QuestionAllApply,null,P("questionary:allThatApply"))),l.a.createElement(b.a,{control:z,name:"currentMedicalCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(k.a,{isCheckbox:!0,value:n,onChange:function(e){return t(e)},items:[{value:"none",label:P("questionary:medical.options.none")},{value:"allergies",label:P("questionary:medical.options.allergies")},{value:"asthma",label:P("questionary:medical.options.asthma")},{value:"bronchitis",label:P("questionary:medical.options.bronchitis")},{value:"congestiveHeartFailure",label:P("questionary:medical.options.congestiveHeart")},{value:"copdEmphysema",label:P("questionary:medical.options.emphysema")},{value:"extremeObesity",label:P("questionary:medical.options.obesity")},{value:"heartDisease",label:P("questionary:medical.options.heartDisease")},{value:"hivAidsOrImpairedImmuneSystem",label:P("questionary:medical.options.hiv")},{value:"lungCancer",label:P("questionary:medical.options.lungCancer")},{value:"otherChronic",label:P("questionary:medical.options.otherChronic")},{value:"pneumonia",label:P("questionary:medical.options.pneumonia")},{value:"pulmonaryFibrosis",label:P("questionary:medical.options.pulmonary")},{value:"reflux",label:P("questionary:medical.options.reflux")},{value:"sinusitis",label:P("questionary:medical.options.sinusitis")},{value:"tuberculosis",label:P("questionary:medical.options.tuberculosis")},{value:"other",label:P("questionary:medical.options.other")}],excludableValues:["none"]})}}),l.a.createElement("p",null,l.a.createElement(y.a,{errors:_,name:"name"})),H&&l.a.createElement(g,null,(!J||J&&"Colombia"!==L)&&l.a.createElement(S.a,{onChange:re,setRecaptchaAvailable:ce}),X&&l.a.createElement(T.TempBeforeSubmitError,null,X),l.a.createElement(I.a,{invert:!0,leftLabel:P(le?"questionary:submitting":"beforeSubmit:submitButton"),leftDisabled:"Colombia"!==L?le||se&&!ae:le,leftHandler:Q(J?pe:ue)})))}))}}]);
//# sourceMappingURL=52.2d4040f9.chunk.js.map
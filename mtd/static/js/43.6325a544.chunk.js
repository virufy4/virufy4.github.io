(this["webpackJsonpmtd-app"]=this["webpackJsonpmtd-app"]||[]).push([[43],{203:function(e,n,t){"use strict";var a=t(9),o=t.n(a),r=t(217);n.a=function(){var e=o.a.useContext(r.a),n=e.title,t=e.setTitle,a=e.subtitle,i=e.setSubtitle,c=e.type,l=e.setType,u=e.logoSize,s=e.setLogoSize,d=e.setDoGoBack;return{title:n,setTitle:t,subtitle:a,setSubtitle:i,type:c,setType:l,logoSize:u,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:d}}},204:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(){window.scrollTo({top:0,behavior:"smooth"})}},207:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var a=t(201),o=t(211);function r(e){return function(n,t){return Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},e,Object(o.a)(Object(o.a)({},n[e]),t)))}}function i(){return function(e){return{welcome:{language:e.welcome.language}}}}},208:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(9),o=t.n(a),r=t(209),i=t(199);function c(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return c=function(){return e},e}var l=t(198).default.div(c(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),u=o.a.memo((function(e){var n=e.invert,t=void 0!==n&&n,a=e.leftLabel,i=e.leftDisabled,c=e.leftHandler,u=e.rightLabel,s=e.rightDisabled,d=e.rightHandler;return o.a.createElement(l,null,o.a.createElement(r.a,{dark:t,disabled:i,onClick:c},a),u&&d&&o.a.createElement(r.a,{dark:!t,disabled:s,onClick:d},u))})),s=o.a.memo(u)},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(214),o=t(9),r=t.n(o),i=t(199),c=t(198),l=t(206);function u(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return u=function(){return e},e}var s=c.default.button(u(),(function(e){var n=e.dark,t=e.disabled?l.a.purple_50:l.a.purple;return n?"\n    background-color: ".concat(t,";\n    color: ").concat(l.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(l.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),d=r.a.memo((function(e){var n=e.children,t=Object(a.a)(e,["children"]);return r.a.createElement(s,Object.assign({type:"button"},t),n)}))},286:function(e,n,t){"use strict";t.r(n);var a=t(212),o=t.n(a),r=t(213),i=t(200),c=t(9),l=t.n(c),u=t(219),s=t(817),d=t(260),f=t(210),m=t.n(f),g=t(245),h=t(221),b=t(205),p=t(236),v=t(240),y=t(237),C=t(208),x=t(329),w=t(199),k=t(198),O=t(372);function E(){var e=Object(w.a)(["\n  margin: auto;\n  margin-left:  ","px;\n  margin-right: 20px;\n"]);return E=function(){return e},e}function j(){var e=Object(w.a)(["\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z' fill='%2321242C'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  height: 18px;\n  left: ","px;\n  outline: 0;\n  position:absolute;\n  width: 18px;\n  border: 0;\n  border-radius: 0;\n  transform: translateY(4px);\n\n  &:checked{\n    height: 18px;\n    width: 28px;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM14.99 6L13.58 4.58L6.99 11.17L4.41 8.6L2.99 10.01L6.99 14L14.99 6Z' fill='%2321242C'/%3E%3C/svg%3E%0A\");\n  }\n"]);return j=function(){return e},e}function S(){var e=Object(w.a)(["font-weight: ",";"]);return S=function(){return e},e}function L(){var e=Object(w.a)(['\n  display: flex;\n  font-family: "Source Sans Pro";\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  ',"\n  padding: 0 0 16px 0;\n  position: relative;\n\n  @media screen and (","){\n    max-width: 470px;\n    margin: auto;\n    width: 100%;\n  }\n"]);return L=function(){return e},e}var P=Object(k.default)(O.a)(L(),(function(e){var n=e.fontWeight;return n&&Object(k.css)(S(),n)}),(function(e){return e.theme.breakpoints.tablet})),T=k.default.input.attrs((function(){return{type:"checkbox"}}))(j(),(function(e){return e.checkboxLeftOffsetPosition})),V=k.default.label(E(),(function(e){return e.checkboxLeftOffsetPosition+32})),B=function(e){var n=e.label,t=e.id,a=e.name,o=e.value,r=e.fontWeight,i=void 0===r?400:r,c=e.margin,u=void 0===c?"auto":c,s=e.checkboxLeftOffsetPosition,d=void 0===s?20:s,f=e.onChange;return l.a.createElement(P,{isChecked:o,fontWeight:i,margin:u},l.a.createElement(T,{onChange:f,checkboxLeftOffsetPosition:d,id:t,name:a,checked:o}),l.a.createElement(V,{htmlFor:t,checkboxLeftOffsetPosition:d},n))},F=t(218),H=t(207),M=t(203),D=t(443),z=t.n(D)()(window),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=Object(c.useState)(!1),t=Object(i.a)(n,2),a=t[0],o=t[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),u=l[0],s=l[1];return Object(c.useEffect)((function(){o(!0),fetch(e,{mode:"no-cors"}).then((function(e){return e.text()})).then((function(e){o(!1),s(e)}))}),[e]),{file:z.sanitize(u,{ADD_ATTR:["target"]}),isLoadingFile:a}},A={Colombia:{consentLang:["default.html"]},Global:{consentLang:["default.html"]}},I=t(204),q={Argentina:"https://drive.google.com/file/d/1slccHiR-vCc5mUHZgklTynejddO_IoCT/view",Bolivia:"https://drive.google.com/file/d/1nTzfJAOHQwefCdqwNBBEqzeRc66RYbYf/view",Brazil:"https://drive.google.com/file/d/1YMtfTiFdpg9tXhdWlQF8kh8Vu4q5RL1U/view",Colombia:"https://drive.google.com/file/d/1YMtfTiFdpg9tXhdWlQF8kh8Vu4q5RL1U/view",Greece:"https://drive.google.com/file/d/1lMVygBx3pV_lZBhFtZe5go4UM4mFt0qP/view",Peru:"https://drive.google.com/file/d/1nb9CbF4l6RF2IJQbzWY9YDnomQWMixbT/view",Mexico:"https://drive.google.com/file/d/16_0GEMA5uApVuf9K9YlYD7ukPAS2_8wn/view",Japan:"https://drive.google.com/file/d/11RTMmnHW4SqHNf7htr3xuSi-o2v2vWlp/view","United States":"https://drive.google.com/file/d/166Fu8RKluJdkRaxPDfWPyCpM7BUIzmnE/view",Global:"https://drive.google.com/file/d/1hnxvDJ5qHBnUi7cnkNdyD4PuWMz8Ntss/view"},R=t(243),Y=y.object().shape({agreedConsentTerms:y.boolean().required().default(!1).oneOf([!0]),agreedPolicyTerms:y.boolean().required().default(!1).oneOf([!0]),agreedCovidCollection:y.boolean().required().default(!1).oneOf([!0])});n.default=l.a.memo((function(e){var n=m()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,t=l.a.useState(!0),a=Object(i.a)(t,2),f=a[0],y=a[1],w=Object(M.a)(),k=w.setType,O=w.setDoGoBack,E=w.setSubtitle,j=Object(b.d)(Object(H.b)(e.storeKey)),S=j.state,L=j.action,P=null===S||void 0===S?void 0:S[e.storeKey],T=Object(h.e)({defaultValues:P,resolver:Object(p.a)(Y),context:{country:"Colombia"},mode:"onChange"}),V=T.control,D=T.handleSubmit,z=T.formState,G=z.errors,K=z.isValid,_=Object(u.g)(),Z=W(function(e,n){var t="".concat("https://virufy.org/mtd","/static/consent"),a=A[e].consentLang.indexOf("".concat(n,".html"));if(-1!==a)return"".concat(t,"/").concat(e,"/").concat(A[e].consentLang[a]);var o=A[e].consentLang.indexOf("default.html");return"".concat(t,"/").concat(e,"/").concat(A[e].consentLang[o])}("Colombia",S.welcome.language)),J=Z.isLoadingFile,U=Z.file,Q=function(){var n=Object(r.a)(o.a.mark((function n(t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t&&(L(t),e.nextStep&&(y(!1),_.push(e.nextStep)));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=Object(c.useCallback)((function(){e.previousStep?(y(!1),_.push(e.previousStep)):_.goBack()}),[]),X=Object(s.a)().t;return Object(c.useEffect)((function(){Object(I.a)(),O((function(){return N})),k("secondary"),E(X("consent:title"))}),[N,O,k,E,X]),l.a.createElement(R.WelcomeStyledFormAlternative,null,l.a.createElement(R.ContainerShapeDown,{isMobile:g.isMobile},l.a.createElement(R.InnerContainerShapeDown,null,l.a.createElement(F.a,null,l.a.createElement(d.a,{i18nKey:"consent:paragraph1"},"Virufy cares about your privacy and is advised by licensed data privacy experts. The information and recordings you provide will only be used for the purposes described in our Privacy Policy and consent form. Please read the consent Form:")))),l.a.createElement(R.WelcomeContent,null,l.a.createElement(R.WelcomeConsentForm,{dangerouslySetInnerHTML:{__html:J?"Cargando...":U}}),l.a.createElement(F.a,null,l.a.createElement(d.a,{i18nKey:"consent:paragraph3"},"By checking the below boxes, you are granting your explicit, freely given, and informed consent to Virufy to collect, process, and share your information for the purposes indicated above and as provided in greater detail in our Privacy Policy. You can print a copy of this Consent Form for your personal records by accessing ",l.a.createElement(x.a,{to:q.Colombia,target:"_blank"},"Consent Form"))),l.a.createElement(R.CheckboxTitle,null,X("consent:pleaseConfirm","Please confirm the following:")),l.a.createElement(h.a,{control:V,name:"agreedConsentTerms",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value;return l.a.createElement(B,{id:"Step2-ConsentTerms",label:l.a.createElement(d.a,{i18nKey:"consent:certify"},"I certify that I am at least 18 years old and agree to the terms of this Consent Form."),name:"agreedConsentTerms",onChange:function(e){return n(e.target.checked)},value:t})}}),l.a.createElement(h.a,{control:V,name:"agreedPolicyTerms",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value;return l.a.createElement(B,{id:"Step2-PolicyTerms",label:l.a.createElement(d.a,{i18nKey:"consent:agree"},"I have read, understood, and agree to the terms of the Virufy Privacy Policy."),name:"agreedPolicyTerms",onChange:function(e){return n(e.target.checked)},value:t})}}),l.a.createElement(h.a,{control:V,name:"agreedCovidCollection",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value,a=e.name;return l.a.createElement(B,{id:"Step2-CollectionCovid",label:l.a.createElement(d.a,{i18nKey:"consent:collectionColombia"},"I hereby expressly consent to the collection, processing and transfer of my personal information, biometric information, and health information."),name:a,onChange:function(e){return n(e.target.checked)},value:t})}}),l.a.createElement("p",null,l.a.createElement(v.a,{errors:G,name:"name"})),f&&l.a.createElement(n,null,l.a.createElement(C.a,{invert:!0,leftLabel:X("consent:nextButton"),leftHandler:D(Q),leftDisabled:!K}))))}))}}]);
//# sourceMappingURL=43.6325a544.chunk.js.map
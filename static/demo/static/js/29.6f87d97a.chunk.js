(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[29],{163:function(e,t,n){"use strict";var r=n(6),i=n.n(r),o=n(180);t.a=function(){var e=i.a.useContext(o.a),t=e.title,n=e.setTitle,r=e.subtitle,c=e.setSubtitle,a=e.type,s=e.setType,l=e.logoSize,u=e.setLogoSize,d=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:c,type:a,setType:s,logoSize:l,setLogoSize:u,doGoBack:e.doGoBack,setDoGoBack:d}}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},167:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(166),i=n(159);function o(e){return function(t,n){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},e,Object(i.a)(Object(i.a)({},t[e]),n)))}}function c(){return function(e){return{welcome:{language:e.welcome.language}}}}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(159),i=n(37),o=n(175),c=n(6),a=n.n(c),s=n(158),l=n(157),u=n(161);function d(){var e=Object(s.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return d=function(){return e},e}var b=l.default.button(d(),(function(e){var t=e.dark,n=e.disabled?u.a.purple_50:u.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),j=a.a.memo((function(e){var t=e.children,n=Object(o.a)(e,["children"]);return Object(i.jsx)(b,Object(r.a)(Object(r.a)({type:"button"},n),{},{children:t}))}))},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(37),i=n(6),o=n.n(i),c=n(168),a=n(158);function s(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return s=function(){return e},e}var l=n(157).default.div(s(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),u=o.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,i=e.leftLabel,o=e.leftDisabled,a=e.leftHandler,s=e.rightLabel,u=e.rightDisabled,d=e.rightHandler;return Object(r.jsxs)(l,{children:[Object(r.jsx)(c.a,{dark:n,disabled:o,onClick:a,children:i}),s&&d&&Object(r.jsx)(c.a,{dark:!n,disabled:u,onClick:d,children:s})]})})),d=o.a.memo(u)},248:function(e,t,n){"use strict";n.r(t);var r=n(37),i=n(176),o=n.n(i),c=n(177),a=n(165),s=n(6),l=n.n(s),u=n(870),d=n(227),b=n(178),j=n.n(b),p=n(408),f=n.n(p),h=n(173),m=n(162),x=n(167),O=n(163),g=n(164),v=n(170),y=n(285),w=function(){var e=Object(O.a)(),t=e.setDoGoBack,n=e.setTitle,i=e.setSubtitle,s=e.setType,b=Object(u.a)().t,p=Object(m.c)({resetStore:Object(x.a)()}),w=p.actions,k=p.state,T=j()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,R=Object(h.g)(),S=l.a.useState(null),D=Object(a.a)(S,2),C=D[0],I=D[1],F=l.a.useState(null),z=Object(a.a)(F,2),P=z[0],E=z[1],V=l.a.useState(!0),B=Object(a.a)(V,2),K=B[0],L=B[1],A=l.a.useState("unknown"),G=Object(a.a)(A,2),H=G[0],q=G[1],N=l.a.useState(null),Y=Object(a.a)(N,2),_=Y[0],J=Y[1];l.a.useEffect((function(){var e=document&&document.getElementById("footer-report-problems");e&&(e.style.display=K?"none":"flex")}),[K]);var M=function(){var e=Object(c.a)(o.a.mark((function e(){var t,n,r,i,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,J(null),!(k&&k.welcome&&k["submit-steps"])){e.next=14;break}return r=k["submit-steps"].recordYourCough,i=new FormData,(c=(null===r||void 0===r?void 0:r.recordingFile)||(null===r||void 0===r?void 0:r.uploadedFile))&&i.append("cough",c,c.name||"filename.wav"),i.append("accessCode",null!==(t=null===(n=k.welcome)||void 0===n?void 0:n.accessCode)&&void 0!==t?t:""),e.next=10,f.a.post("https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod/demo-predict",i,{headers:{"Content-Type":"multipart/form-data"}});case 10:(a=e.sent).data&&(L(!1),q(a.data.prediction),I(a.data.errorCode),w.resetStore({})),e.next=15;break;case 14:w.resetStore({});case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),console.log("Error",e.t0),J(b("predictionResult:submitError"));case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),Q=l.a.useCallback((function(){R.replace("/welcome")}),[R]);return l.a.useEffect((function(){var e,r;E(null!==(e=null===(r=k.welcome)||void 0===r?void 0:r.accessCode)&&void 0!==e?e:""),Object(g.a)(),n(""),t((function(){})),s("noShape"),M()}),[]),l.a.useEffect((function(){i(K?"":"".concat(b("predictionResult:result")))}),[K]),console.log("errorCode",C),Object(r.jsxs)(r.Fragment,{children:[K?Object(r.jsxs)(y.ProcessingContainer,{children:[Object(r.jsx)(y.Title,{children:b("predictionResult:processingTitle")}),Object(r.jsx)(y.ImageProcessing,{})]}):Object(r.jsx)(r.Fragment,{children:P&&"invalid_access_code"!==C?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(y.PredictionResultContainer,{children:[Object(r.jsx)(y.Title,{children:b("predictionResult:result")}),"positive"===H&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y.TitleResult,{color:"#4FDB76",children:b("predictionResult:resultNotDetected")}),Object(r.jsx)(y.StyledLow,{}),Object(r.jsx)(y.IntroText,{children:Object(r.jsxs)(d.a,{i18nKey:"predictionResult:resultNotDetectedText",children:["Your voice does not seem to have indicators of COVID-19. Please ",Object(r.jsx)("strong",{children:"continue to take appropriate measures"})," based on the advice of your healthcare professional or applicable regulatory body and reassess yourself in our app daily."]})})]}),"unknown"===H&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y.TitleResult,{children:b("predictionResult:resultNotAnalyze")}),Object(r.jsx)(y.IntroText,{children:Object(r.jsxs)(d.a,{i18nKey:"predictionResult:resultNotAnalyzeText",children:["Our algorithm is not able to determine your COVID-19 status.",Object(r.jsx)("strong",{children:"Please submit another cough"}),"."]})})]}),"negative"===H&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y.StyledHigh,{}),Object(r.jsx)(y.TitleResult,{color:"#FF4444",children:b("predictionResult:resultDetected")}),Object(r.jsx)(y.IntroText,{children:Object(r.jsx)(d.a,{i18nKey:"predictionResult:resultDetectedText",children:"Your voice has indicators of COVID-19. Please contact your healthcare professional and take additional precautions."})})]})]})}):Object(r.jsxs)(y.PredictionResultContainer,{children:[Object(r.jsx)(y.Title,{children:b("predictionResult:result")}),Object(r.jsx)(y.TitleResult,{color:"#FF4444",children:Object(r.jsx)(d.a,{i18nKey:"predictionResult:resultDetectedDummy"})}),Object(r.jsx)(y.StyledHigh,{}),Object(r.jsx)(y.IntroText,{children:Object(r.jsx)(d.a,{i18nKey:"predictionResult:resultDetectedText",children:"Your voice has indicators of COVID-19. Please contact your healthcare professional and take additional precautions."})}),Object(r.jsx)(y.ImagePredictionResult,{})]})}),Object(r.jsxs)(T,{children:[!K&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y.IntroText,{children:P?Object(r.jsxs)(d.a,{i18nKey:"predictionResult:resultModal",children:[Object(r.jsx)("strong",{children:"Aviso importante:"})," Esta aplicaci\xf3n no predecir\xe1 su estado de COVID-19 ni diagnosticar\xe1 ninguna enfermedad, trastorno u otra condici\xf3n de salud. Virufy est\xe1 llevando a cabo una investigaci\xf3n y utilizar\xe1 la informaci\xf3n que proporciones \xfanicamente para dicha investigaci\xf3n. Virufy no sustituir\xe1 a un m\xe9dico y le recuerda que es su responsabilidad buscar consejo m\xe9dico de su m\xe9dico."]}):Object(r.jsxs)(d.a,{i18nKey:"predictionResult:resultModalDummy",children:[Object(r.jsx)("strong",{children:"Aviso importante:"})," Esta aplicaci\xf3n no predecir\xe1 su estado de COVID-19 ni diagnosticar\xe1 ninguna enfermedad, trastorno u otra condici\xf3n de salud. Virufy est\xe1 llevando a cabo una investigaci\xf3n y utilizar\xe1 la informaci\xf3n que proporciones \xfanicamente para dicha investigaci\xf3n. Virufy no sustituir\xe1 a un m\xe9dico y le recuerda que es su responsabilidad buscar consejo m\xe9dico de su m\xe9dico."]})}),Object(r.jsx)(v.a,{invert:!0,leftLabel:b("predictionResult:nextButton"),leftHandler:Q})]}),_&&Object(r.jsx)(y.SubmitError,{children:"".concat(b("predictionResult:error")," ").concat(_)})]})]})};t.default=l.a.memo(w)}}]);
//# sourceMappingURL=29.6f87d97a.chunk.js.map
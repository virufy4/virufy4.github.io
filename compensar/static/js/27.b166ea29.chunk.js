(this["webpackJsonpcompensar-app"]=this["webpackJsonpcompensar-app"]||[]).push([[27,45],{287:function(e,t,a){"use strict";a.r(t);var n=a(212),r=a.n(n),o=a(211),i=a(213),s=a(200),c=a(9),u=a.n(c),l=a(218),d=a(210),p=a.n(d),m=a(814),v=a(84),f=a.n(v),b=a(220),h=a(203),g=a(236),y=a(240),S=a(237),C=a(207),O=a(208),j=a(329),w=a(328),E=a(357),k=a(440),x=a(17),T=a(199);function A(){var e=Object(T.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return A=function(){return e},e}var D=a(198).default.div(A()),I=function(e){var t=e.onChange,a=e.setRecaptchaAvailable,n=Object(m.a)().i18n,r=u.a.useState(!0),o=Object(s.a)(r,2),i=o[0],c=o[1],l=u.a.useCallback((function(e){if(e&&e.captcha){var t=e.captcha;new MutationObserver((function(e,a){var n,r=Object(E.a)(e);try{for(r.s();!(n=r.n()).done;){"childList"===n.value.type&&t.childNodes[0].children.length>1&&(c(!1),a.disconnect())}}catch(o){r.e(o)}finally{r.f()}})).observe(t,{childList:!0,subtree:!0})}}),[]);return u.a.createElement(D,null,i&&u.a.createElement("div",{className:"text-center"},"Cargando, por favor espere..."),u.a.createElement(k.a,{ref:l,sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){a(!1),x.a("Error on ReCAPTCHA")},hl:n.language,size:"compact"}))},q=a(204),B=a(205),L=a(424),z=a.n(L).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function V(e){return F.apply(this,arguments)}function F(){return(F=Object(i.a)(r.a.mark((function e(t){var a,n,o,i,s,c,u,l,d,p,m,v,f,b,h,g,y,S,C,O,j,w,E,k,x,T;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.setSubmitError,n=t.state,o=t.captchaValue,i=t.action,s=t.nextStep,c=t.setActiveStep,u=t.history,e.prev=1,a(null),p=n.welcome,m=p.patientId,v=p.sede,f=p.agreedConsentTerms,b=p.agreedPolicyTerms,h=p.agreedCovidDetection,g=p.agreedCovidCollection,y=p.agreedTrainingArtificial,S=p.agreedBiometric,C=n["submit-steps"],O=C.recordYourCough,j=C.currentSymptoms,w=C.symptomsStartedDate,E=new FormData,m&&E.append("patientId",m),v&&E.append("sede",v),window.sourceCampaign&&E.append("source",window.sourceCampaign),E.append("agreedConsentTerms",f),E.append("agreedPolicyTerms",b),E.append("agreedCovidCollection",g),E.append("agreedCovidDetection",h),E.append("agreedTrainingArtificial",y),E.append("agreedBiometric",S),k=O.recordingFile||O.uploadedFile,E.append("cough",k,k.name||"filename.wav"),(null===j||void 0===j||null===(l=j.selected)||void 0===l?void 0:l.length)>0&&E.append("currentSymptoms",j.selected.join(",")),w&&E.append("symptomsStartedDate",w),(null===j||void 0===j?void 0:j.other)&&E.append("otherSymptoms",null===j||void 0===j?void 0:j.other),o&&E.append("captchaValue",o),e.next=23,z.post("saveCompensarInfo",E,{headers:{"Content-Type":"multipart/form-data; boundary=saveCompensarInfo"}});case 23:x=e.sent,i({}),s&&(null===(d=x.data)||void 0===d?void 0:d.submissionId)&&(c(!1),u.push(s,{submissionId:null===(T=x.data)||void 0===T?void 0:T.submissionId})),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(1),console.log(e.t0),a("beforeSubmit:submitError");case 32:case"end":return e.stop()}}),e,null,[[1,28]])})))).apply(this,arguments)}function R(e){if(!(null===e||void 0===e?void 0:e.selected))return!1;for(var t=e.selected,a=["breathShortness","feverChillsSweating","dryCough","wetCough","newOrWorseCough"],n=!1,r=0;!n&&r<(null===t||void 0===t?void 0:t.length);r++)n=a.includes(t[r]);return n}var M=a(247),P=S.object({symptomsStartedDate:S.string().when("currentSymptoms",{is:function(e){return R(e)},then:function(e){return e.required()},otherwise:function(e){return e}})}).defined();t.default=u.a.memo((function(e){var t=e.previousStep,a=e.nextStep,n=e.storeKey,d=e.metadata,v=p()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,S=Object(q.a)(),E=S.setDoGoBack,k=S.setTitle,x=S.setType,T=Object(l.g)(),A=Object(m.a)().t,D=Object(h.d)(Object(C.b)(n)),L=D.state,z=D.action,F=u.a.useState(!0),W=Object(s.a)(F,2),J=W[0],N=W[1],U=Object(b.e)({mode:"onChange",defaultValues:null===L||void 0===L?void 0:L[n],resolver:Object(g.a)(P)}),H=U.control,Q=U.handleSubmit,Y=U.formState,G=U.watch,K=Y.errors,Z=Y.isValid,_=G("currentSymptoms"),X=u.a.useState(null),$=Object(s.a)(X,2),ee=$[0],te=$[1],ae=u.a.useState(null),ne=Object(s.a)(ae,2),re=ne[0],oe=ne[1],ie=u.a.useState(!0),se=Object(s.a)(ie,2),ce=se[0],ue=se[1],le=Y.isSubmitting;Object(c.useEffect)((function(){re||te(null)}),[re]);var de=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,V({setSubmitError:function(e){return te(e?A(e):null)},state:Object(o.a)(Object(o.a)({},L),{},{"submit-steps":Object(o.a)(Object(o.a)({},L["submit-steps"]),t)}),captchaValue:re,action:z,nextStep:a,setActiveStep:N,history:T});case 3:f.a.dataLayer({dataLayer:{event:"successful_session"}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=u.a.useCallback((function(){N(!1),t?T.push(t):T.goBack()}),[T,t]);Object(c.useEffect)((function(){Object(B.a)(),k(A("questionary:headerQuestions")),x("primary"),E((function(){return pe}))}),[pe,E,k,x,A]);var me=u.a.useMemo((function(){return R(_)}),[_]);return u.a.createElement(M.MainContainer,null,u.a.createElement(j.a,{currentStep:null===d||void 0===d?void 0:d.current,totalSteps:null===d||void 0===d?void 0:d.total,progressBar:!0}),me&&u.a.createElement(u.a.Fragment,null,u.a.createElement(M.QuestionText,{extraSpace:!0,first:!0},A("questionary:symptomsDate")),u.a.createElement(b.a,{control:H,name:"symptomsStartedDate",defaultValue:"",render:function(e){var t=e.onChange,a=e.value;return u.a.createElement(w.a,{singleSelection:!0,value:{selected:a?[a]:[]},onChange:function(e){return t(e.selected[0])},items:[{value:"today",label:A("questionary:options.today")},{value:"days",label:A("questionary:options.days")},{value:"week",label:A("questionary:options.week")},{value:"overWeek",label:A("questionary:options.overWeek")}]})}})),u.a.createElement("p",null,u.a.createElement(y.a,{errors:K,name:"name"})),J&&u.a.createElement(v,null,u.a.createElement(I,{onChange:oe,setRecaptchaAvailable:ue}),ee&&u.a.createElement(M.TempBeforeSubmitError,null,ee),u.a.createElement(O.a,{invert:!0,leftLabel:A(le?"questionary:submitting":"beforeSubmit:submitButton"),leftDisabled:le||ce&&!re||!Z,leftHandler:Q(de)})))}))},306:function(e,t,a){"use strict";a.r(t);var n=a(287);a.d(t,"default",(function(){return n.default}))}}]);
//# sourceMappingURL=27.b166ea29.chunk.js.map
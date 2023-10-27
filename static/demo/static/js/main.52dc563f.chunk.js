(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[37],{140:function(e,o,t){"use strict";t.r(o);var r={};t.r(r),t.d(r,"en",(function(){return I})),t.d(r,"es",(function(){return w})),t.d(r,"ja",(function(){return V}));var n=t(37),a=(t(6),t(24)),s=t.n(a),i=t(56),c=(t(79),t(52)),d=t(69),u=t(145),l=t(15),g=t(34),p=t(147),f=t(148),m=t(149),h=t(150),y=t(151),v=t(152),b=t(153),C=t(154),D=t(155),I=t(58),w=t(59),V=t(60);Object(l.registerLocale)("en",g.a),Object(l.registerLocale)("es",p.a),Object(l.registerLocale)("pt",f.a),Object(l.registerLocale)("fr",m.a),Object(l.registerLocale)("el",h.a),Object(l.registerLocale)("bn",y.a),Object(l.registerLocale)("th",v.a),Object(l.registerLocale)("tr",b.a),Object(l.registerLocale)("ja",C.a),Object(l.registerLocale)("hi",D.a),c.a.use(d.a).use(u.e).init({resources:r,ns:"main",missingKeyHandler:!1,fallbackLng:"en",fallbackNS:"main",interpolation:{escapeValue:!1},debug:!0});c.a;var O={onUpdate:function(e){confirm("A new version is available. Do you want to update?")&&e.unregister().then((function(){window.location.replace("https://virufy.org/demo")}))},onSuccess:function(e){console.info("service worker on success state"),console.log(e)}},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,o){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=Object(i.a)((function(){return Promise.all([t.e(40),t.e(41)]).then(t.bind(null,871))}),{fallback:Object(n.jsx)("div",{children:"Loading"})});s.a.render(Object(n.jsx)(P,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://virufy.org/demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var o="".concat("https://virufy.org/demo","/service-worker.js");S?(function(e,o){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.replace("https://virufy.org/demo")}))})):x(e,o)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(o,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(o,e)}))}}(O)},58:function(e){e.exports=JSON.parse('{"main":{"title":"COVID-19 Cough Detection","note":"<strong>Please note:</strong> This form is for data collection only. It will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor.","selectYourLanguage":"Language","nextButton":"Next","createdBy":"Created By","provideAccessCode":"Access code","enterAccessCode":"Enter access  code","aboutUsTitle":"About Us","privacyPolicy":"By proceeding you accept the terms of our <strong>Privacy Policy</strong>"},"helpVirufy":{"aboutParagraph":"<0><strong>Virufy</strong> is a robust <strong>501(c)(3) nonprofit</strong> company with <strong>250 volunteers/staff</strong> and <strong>50 partner organizations</strong> including Amazon Web Services, Stanford COVID-19 Response Innovation Lab, and One Young World. We\'ve developed a smartphone app which leverages AI to analyze the signature of recorded coughs to <strong>determine their similarity with COVID positive cough data</strong>. Virufy is supported by faculty and alumni from UW, Stanford, UC Berkeley, MIT, Harvard, and CMU.</0> <1>By collecting <strong>coughs recordings</strong> from people around the world, Virufy is improving the robustness of its AI algorithm in recognizing COVID\u2019s unique sound pattern.</1><2><strong>You have the power</strong> to help benefit millions of people across the globe by <strong>contributing your cough</strong> in our study.</2>","installApp":"Install as an app","nextButton":"Consent"},"beforeStart":{"title":"Lastly, before we start...","subtitle":"<strong>To ensure safety, we advise you to:</strong>","advise_list":["Please use your own device and wear a mask when appropriate.","Disinfect your device and any affected or nearby surfaces after recording your cough/speech.","If you have an underlying condition that increases your risk from coughing, please check with your health care provider before participating.","If you feel your symptoms are getting worse, please contact your local medical response."],"startButton":"Start"},"recordingsIntroduction":{"recordCough":{"header":"Record your cough","title":"Instructions","intro1":"Find a <strong>quiet environment</strong> at least <strong>20 ft (6m)</strong> away from others and wear a cloth or surgical mask. If you are feeling ill, please sit down.","intro2":"Hold your device <strong>1-2 ft (30-60 cm)</strong> away from your mouth and <strong>do not obstruct</strong> or cover your device with plastic. Do not cough violently or too forcefully.","text":"Tap the record button and <strong>cough intentionally</strong> into the bottom of your phone <strong>3 times</strong> with a <strong>deep breath</strong> between each cough. When you are done, tap the stop button. ","record":"Record","stop":"Stop"},"next":"Next","retryButton":"Retry","releaseButtonStart":"Release to start recording","releaseButtonStop":"Release to stop recording","shortRecording":"Please make a recording of at least 2 seconds"},"recordingsRecord":{"recordCough":{"header":"Record your cough"},"next":"Continue","delete":"Delete","textCount":"Click continue to proceed.","upload":"Upload your own file"},"recordingsRecordManual":{"header":"Upload a file","addFile":"Add your file","constraint":"Add up to 5 MB","uploadFile":"Upload File","next":"Done","micError":"Can\u2019t access the mic? Upload an audio file.","micErrorDescription":"Please upload an audio file here.","fileDurationTooShort":"Please upload a file of at least 3 seconds","fileSizeTooBig":"Please upload a file of less than 5 MB","fileRequired":"Please upload a file"},"recordingsListen":{"recordCough":{"header":"Record your cough","intro1":"Please cough away from others around you! Please sit down if you are feeling ill.","intro2":" In a quiet environment, please press record and intentionally cough around 3-5 times."},"title":"Upload Complete","subtitle":"Feel free to take a listen!","next":"Continue","retake":"Retake"},"predictionResult":{"processingTitle":"Processing...","note":"Important Note:","result":"Results","resultModal":"<strong>Important note:</strong> This app will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor.","resultNotDetected":"COVID-19: NOT DETECTED","resultNotDetectedText":"Your voice does not seem to have indicators of COVID-19. Please <strong>continue to take appropriate measures</strong> based on the advice of your healthcare professional or applicable regulatory body and reassess yourself in our app daily.","resultDetected":"COVID-19: DETECTED","resultNotAnalyze":"Unable to Analyze Cough","resultModalDummy":"<strong>Important note:</strong> This app is only for demonstration purposes and does not provide a true prediction. Please visit the Virufy Study to contribute your cough.","resultNotAnalyzeText":"Our algorithm is not able to determine your COVID-19 status. <strong>Please submit another cough</strong>.","resultDetectedDummy":"COVID-19: DETECTED <br/>(Dummy Example)","resultDetectedText":"Your voice has indicators of possible COVID-19. <strong>Please contact your healthcare professional</strong> and take additional precautions.","testForCovid":"Test for COVID-19","nextButton":"Submit another cough","submitError":"An error occurred. Please try again.","nextSteps":"Next Steps"},"footerReportProblems":{"message":"Something wrong? Report an error"}}')},59:function(e){e.exports=JSON.parse('{"main":{"title":"Formulario de Recolecci\xf3n de datos de COVID-19","note":"<strong>Por favor, tenga en cuenta:</strong> Este formulario es s\xf3lo para recopilar datos. No predice su estado de COVID-19 ni diagnostica ninguna enfermedad, trastorno u otra condici\xf3n de salud. Virufy est\xe1 llevando a cabo una investigaci\xf3n y utilizar\xe1 la informaci\xf3n que usted proporcione s\xf3lo para esa investigaci\xf3n. Virufy no sustituir\xe1 a un m\xe9dico y le recuerda que es su responsabilidad buscar el consejo de su m\xe9dico.","selectYourLanguage":"Idioma","paragraph2":"Estudio de recopilaci\xf3n de datos de tos Covid-19","nextButton":"Siguiente","createdBy":"Creado por","provideAccessCode":"C\xf3digo de acceso","enterAccessCode":"Introduzca el c\xf3digo de acceso","aboutUsTitle":"Sobre Nosotros","privacyPolicy":"Al continuar, acepta los t\xe9rminos de nuestra Pol\xedtica de privacidad."},"helpVirufy":{"aboutParagraph":"<0><strong>Virufy</strong> es una s\xf3lida empresa <strong>501(c)(3) sin fines de lucro</strong> con <strong>250 voluntarios/personal</strong> y <strong>50 organizaciones asociadas</strong> incluidos Amazon Web Services, Stanford COVID-19 Response Innovation Lab y One Young World. Hemos desarrollado una aplicaci\xf3n para tel\xe9fonos inteligentes que aprovecha la IA para analizar la firma de toses registradas para <strong>determinar su similitud con los datos de tos positivos de COVID</strong>. Virufy cuenta con el apoyo de profesores y ex alumnos de UW, Stanford, UC Berkeley, MIT, Harvard y CMU.</0> <1>Al recopilar <strong>grabaciones de tos</strong> de personas de todo el mundo, Virufy est\xe1 mejorando la robustez de su algoritmo de IA para reconocer el patr\xf3n de sonido \xfanico de COVID.</1><2><strong>Tienes el poder</strong> de ayudar a beneficiar a millones de personas en todo el mundo al <strong>contribuir con tu tos</strong> en nuestro estudio.</2>","installApp":"Instalar como aplicaci\xf3n","nextButton":"Consentimiento"},"beforeStart":{"title":"Por \xfaltimo, antes de empezar...","subtitle":"<strong>Para garantizar la seguridad, le aconsejamos:</strong>","advise_list":["Utilice su propio dispositivo y use una m\xe1scara cuando sea apropiado.","Desinfecte su dispositivo y cualquier superficie afectada o cercana despu\xe9s de registrar su tos/habla","Si tiene una afecci\xf3n subyacente que aumenta el riesgo de toser, consulte con su proveedor de atenci\xf3n m\xe9dica antes de participar.","Si cree que sus s\xedntomas est\xe1n empeorando, p\xf3ngase en contacto con los servicios de emergencia m\xe9dica locales."],"startButton":"Comenzar"},"recordingsIntroduction":{"recordCough":{"header":"Grabe su tos","title":"Instrucciones","intro1":"Busque un <strong>entorno tranquilo</strong>, al menos a <strong>6 metros </strong> de distancia de los dem\xe1s, y utilice una mascarilla quir\xfargica o de tela. Si se siente mal, si\xe9ntese.","intro2":"Mantenga el dispositivo a una distancia de <strong> 30-60 cent\xedmetros </strong> de su boca y <strong>no obstruya</strong> ni cubra el dispositivo con pl\xe1stico. No tosa violentamente o con demasiada fuerza.","text":"Haga clic en el bot\xf3n de grabaci\xf3n (el micr\xf3fono) y <strong>tosa intencionalmente tres veces, con una respiraci\xf3n profunda entre cada tos</strong>, dirigiendo su tos a la parte inferior de su dispositivo. Cuando haya terminado, haga clic en el bot\xf3n de detener (stop)","record":"Grabar","stop":"Parar"},"next":"Siguiente","retryButton":"Reintentar","releaseButtonStart":"Suelte para empezar a grabar","releaseButtonStop":"Suelte para detener la grabaci\xf3n","shortRecording":"Por favor, haga una grabaci\xf3n de al menos 2 segundos"},"recordingsRecord":{"recordCough":{"header":"Grabe su tos"},"next":"Continuar","delete":"Borrar","textCount":"Pulse el bot\xf3n continuar para avanzar.","upload":"Sube tu propio audio"},"recordingsRecordManual":{"header":"Subir un archivo","addFile":"A\xf1ada su archivo","constraint":"A\xf1ada hasta 5 MB","next":"Hecho","uploadFile":"Subir Archivo","micError":"\xbfNo puede acceder al micr\xf3fono? Suba un archivo de audio.","micErrorDescription":"Por favor, suba un archivo de audio aqu\xed.","fileDurationTooShort":"Por favor, suba un archivo de al menos 3 segundos","fileSizeTooBig":"Por favor, suba un archivo de menos de 5 MB","fileRequired":"Por favor, suba un archivo"},"recordingsListen":{"recordCough":{"header":"Grabe su tos","intro1":"Por favor, tosa lejos de las personas a tu alrededor. Si se siente enfermo, por favor si\xe9ntese.","intro2":"En un ambiente silencioso, por favor presione el bot\xf3n de grabar y tosa intencionalmente de 3 a 5 veces."},"title":"Grabaci\xf3n completada","subtitle":"Si\xe9ntase libre de escuchar la grabaci\xf3n!","next":"Continuar","retake":"Retomar"},"predictionResult":{"processingTitle":"Procesando...","note":"Nota importante:","result":"Resultados","resultModal":"<strong>Nota importante: </strong>Esta aplicaci\xf3n no predice tu estado de COVID-19 ni diagnostica ninguna enfermedad, trastorno u otra condici\xf3n de salud. Virufy est\xe1 llevando a cabo una investigaci\xf3n y utilizar\xe1 la informaci\xf3n que proporciones \xfanicamente para dicha investigaci\xf3n. Virufy no sustituye a un m\xe9dico y le recuerda que es su responsabilidad buscar el consejo de su m\xe9dico.","resultNotDetected":"COVID-19: NO DETECTADO","resultNotDetectedText":"Su voz no parece tener indicadores de COVID-19. <strong> Contin\xfae tomando las medidas adecuadas </strong> seg\xfan los consejos de su profesional sanitario o del organismo regulador correspondiente y vuelva a evaluarse en nuestra aplicaci\xf3n a diario.","resultNotAnalyze":"Incapaz de analizar la tos","resultModalDummy":"<strong>Nota importante:</strong> Esta aplicaci\xf3n es s\xf3lo para fines de demostraci\xf3n y no proporciona una predicci\xf3n verdadera. Por favor, visite el Estudio Virufy para contribuir con su tos.","resultNotAnalyzeText":"Nuestro algoritmo no es capaz de determinar su estado COVID-19. <strong>PPor favor, env\xede otra tos</strong>.","resultDetectedDummy":"COVID-19: DETECTADO <br/>(Ejemplo ficticio)","resultDetectedText":"Su voz tiene indicadores de posible COVID-19.  <strong>P\xf3ngase en contacto con su profesional sanitario</strong> y tome precauciones adicionales.","testForCovid":"Test for COVID-19","resultDetected":"COVID-19: DETECTADO","predictionResultTitle":"Resultado de la Predicci\xf3n","nextButton":"Subir otra tos","submitError":"Se produjo un error. Por favor, int\xe9ntelo de nuevo.","nextSteps":"Pr\xf3ximos pasos"},"footerReportProblems":{"message":"\xbfAlgo mal? Reportar un problema"}}')},60:function(e){e.exports=JSON.parse('{"main":{"title":"COVID-19 \u54b3\u306e\u691c\u51fa","note":"<strong>\u6ce8\u610f:</strong> \u3053\u306e\u30d5\u30a9\u30fc\u30e0\u306f\u30c7\u30fc\u30bf\u53ce\u96c6\u306e\u307f\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002COVID-19\u306e\u72b6\u614b\u3092\u4e88\u6e2c\u3057\u305f\u308a\u3001\u75c5\u6c17\u3084\u969c\u5bb3\u3001\u305d\u306e\u4ed6\u306e\u5065\u5eb7\u72b6\u614b\u3092\u8a3a\u65ad\u3059\u308b\u3082\u306e\u3067\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002Virufy\u3067\u306f\u7814\u7a76\u3092\u884c\u3063\u3066\u304a\u308a\u3001\u63d0\u4f9b\u3057\u3066\u3044\u305f\u3060\u3044\u305f\u60c5\u5831\u306f\u305d\u306e\u7814\u7a76\u306e\u305f\u3081\u3060\u3051\u306b\u4f7f\u7528\u3044\u305f\u3057\u307e\u3059\u3002\u307e\u305f\u3001Virufy\u306f\u533b\u5e2b\u306e\u4ee3\u308f\u308a\u306b\u306f\u306a\u308a\u307e\u305b\u3093\u306e\u3067\u3001\u3054\u81ea\u8eab\u306e\u8cac\u4efb\u306b\u304a\u3044\u3066\u533b\u5e2b\u306e\u8a3a\u65ad\u3092\u53d7\u3051\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002","selectYourLanguage":"\u8a00\u8a9e","nextButton":"\u6b21\u306e\u30da\u30fc\u30b8","createdBy":"\u4f5c\u6210\u8005","provideAccessCode":"\u30a2\u30af\u30bb\u30b9\u30b3\u30fc\u30c9","enterAccessCode":"\u30a2\u30af\u30bb\u30b9\u30b3\u30fc\u30c9\u306e\u5165\u529b","aboutUsTitle":"\u4f1a\u793e\u6982\u8981","privacyPolicy":"\u6b21\u306b\u9032\u3080\u3068\u3001\u5f53\u793e\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306e\u6761\u9805\u306b\u540c\u610f\u3057\u305f\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"},"helpVirufy":{"aboutParagraph":"<0><strong>Virufy</strong> \u306f <strong>501(c)(3) \u975e\u55b6\u5229\u56e3\u4f53</strong> \u3067\u3042\u308a\u3001<strong>250\u4eba\u306e\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u3001\u30b9\u30bf\u30c3\u30d5</strong> \u3068 <strong>50\u306e\u30d1\u30fc\u30c8\u30ca\u30fc\u7d44\u7e54</strong>\u3092\u64c1\u3057\u3066\u3044\u307e\u3059\u3002 \u30d1\u30fc\u30c8\u30ca\u30fc\u7d44\u7e54\u306b\u306f\u3001\u30a2\u30de\u30be\u30f3\u30a6\u30a7\u30d6\u30b5\u30fc\u30d3\u30b9\u3001\u30b9\u30bf\u30f3\u30d5\u30a9\u30fc\u30c9COVID-19\u5bfe\u5fdc\u30a4\u30ce\u30d9\u30fc\u30b7\u30e7\u30f3\u30e9\u30dc\u3001One Young World\u306a\u3069\u304c\u542b\u307e\u308c\u307e\u3059\u3002 AI\u3092\u6d3b\u7528\u3057\u3066\u8a18\u9332\u3055\u308c\u305f\u54b3\u306e\u7279\u5fb4\u3092\u5206\u6790\u3057\u3001<strong>COVID \u967d\u6027\u306e\u54b3\u30c7\u30fc\u30bf\u3068\u306e\u985e\u4f3c\u6027\u3092\u5224\u65ad\u3059\u308b</strong>\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3044\u305f\u3057\u307e\u3057\u305f\u3002 Virufy \u306f\u3001UW\u3001\u30b9\u30bf\u30f3\u30d5\u30a9\u30fc\u30c9\u3001UC \u30d0\u30fc\u30af\u30ec\u30fc\u3001MIT\u3001\u30cf\u30fc\u30d0\u30fc\u30c9\u3001CMU \u306e\u6559\u8077\u54e1\u3084\u5352\u696d\u751f\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002</0> <1>\u4e16\u754c\u4e2d\u306e\u4eba\u3005\u304b\u3089<strong>\u54b3\u306e\u8a18\u9332</strong>\u3092\u53ce\u96c6\u3059\u308b\u3053\u3068\u3067\u3001Virufy \u306fCOVID \u306e\u72ec\u7279\u306a\u97f3\u306e\u30d1\u30bf\u30fc\u30f3\u3092\u8a8d\u8b58\u3059\u308b AI \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u78ba\u5b9f\u6027\u3092\u9ad8\u3081\u3066\u3044\u307e\u3059\u3002</1><2><strong>\u3042\u306a\u305f\u306b\u306f\u3001<strong>\u54b3\u3092\u3059\u308b</strong>\u3053\u3068\u3067\u4e16\u754c\u4e2d\u306e\u4f55\u767e\u4e07\u4eba\u3082\u306e\u4eba\u3005\u306b\u5229\u76ca\u3092\u3082\u305f\u3089\u3059\u529b\u304c\u3042\u308a\u307e\u3059</strong>\u3002 </2>","nextButton":"\u540c\u610f","installApp":"\u30a2\u30d7\u30ea\u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"beforeStart":{"title":"\u6700\u5f8c\u306b\u3001\u59cb\u3081\u308b\u524d\u306b...","subtitle":"<strong>\u5b89\u5168\u6027\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u3001\u6b21\u306e\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\uff1a</strong>\u3002","advise_list":["\u3054\u81ea\u8eab\u306e\u6a5f\u5668\u3092\u4f7f\u7528\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30de\u30b9\u30af\u3092\u7740\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002","\u54b3\u3084\u8a71\u3057\u58f0\u3092\u9332\u97f3\u3057\u305f\u5f8c\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u3068\u305d\u306e\u5468\u8fba\u306e\u8868\u9762\u3092\u6d88\u6bd2\u3057\u3066\u304f\u3060\u3055\u3044\u3002","\u54b3\u306e\u30ea\u30b9\u30af\u3092\u9ad8\u3081\u308b\u57fa\u790e\u75be\u60a3\u3092\u304a\u6301\u3061\u306e\u65b9\u306f\u3001\u53c2\u52a0\u3059\u308b\u524d\u306b\u533b\u7642\u5f93\u4e8b\u8005\u306b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002","\u75c7\u72b6\u304c\u60aa\u5316\u3057\u3066\u3044\u308b\u3068\u611f\u3058\u305f\u5834\u5408\u306f\u3001\u304a\u8fd1\u304f\u306e\u533b\u7642\u6a5f\u95a2\u306b\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044\u3002"],"startButton":"\u6b21\u3078"},"recordingsIntroduction":{"recordCough":{"header":"\u54b3\u3092\u8a18\u9332\u3059\u308b","title":"\u624b\u9806","intro1":"\u4ed6\u306e\u4eba\u304b\u3089\u5c11\u306a\u304f\u3068\u3082<strong>20\u30d5\u30a3\u30fc\u30c8\uff086m\uff09</strong>\u96e2\u308c\u305f<strong>\u9759\u304b\u306a\u74b0\u5883</strong>\u3092\u898b\u3064\u3051\u3001\u5e03\u3084\u30b5\u30fc\u30b8\u30ab\u30eb\u30de\u30b9\u30af\u3092\u7740\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4f53\u8abf\u304c\u60aa\u3044\u3068\u304d\u306f\u3001\u5ea7\u3063\u3066\u304f\u3060\u3055\u3044\u3002","intro2":"\u30c7\u30d0\u30a4\u30b9\u3092<strong>30-60 cm</strong>\u53e3\u304b\u3089\u96e2\u3057\u3066\u6301\u3061\u3001 \u30d7\u30e9\u30b9\u30c1\u30c3\u30af\u306a\u3069\u3067\u30c7\u30d0\u30a4\u30b9\u3092\u8986\u3063\u305f\u308a<strong>\u906e\u3063\u305f\u308a</strong> \u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u54b3\u3092\u5f37\u304f\u3057\u3059\u304e\u306a\u3044\u3088\u3046\u306b\u6ce8\u610f\u3057\u307e\u3057\u3087\u3046\u3002","text":"\u9332\u97f3\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3001\u643a\u5e2f\u96fb\u8a71\u306e\u4e0b\u90e8\u306b\u5411\u304b\u3063\u3066<strong>\u610f\u56f3\u7684\u306b</strong>\u54b3\u3092<strong>3\u56de</strong>\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u7d42\u308f\u3063\u305f\u3089\u3001\u505c\u6b62\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u307e\u3059\u3002","record":"\u8a18\u9332\u3059\u308b","stop":"\u505c\u6b62\u3059\u308b"},"next":"\u6b21\u3078","retryButton":"\u30ea\u30c8\u30e9\u30a4","releaseButtonStart":"\u96e2\u3059\u3068\u9332\u97f3\u958b\u59cb","releaseButtonStop":"\u624b\u3092\u96e2\u3059\u3068\u9332\u97f3\u304c\u6b62\u307e\u308a\u307e\u3059","shortRecording":"\u5c11\u306a\u304f\u3068\u30822\u79d2\u9593\u9332\u97f3\u3059\u308b"},"recordingsRecord":{"recordCough":{"header":"\u54b3\u3092\u9332\u97f3\u3059\u308b"},"next":"\u7d9a\u3051\u308b","delete":"\u524a\u9664","textCount":"\u300c\u7d9a\u3051\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u6b21\u306b\u9032\u307f\u307e\u3059\u3002","upload":"\u81ea\u5206\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"},"recordingsRecordManual":{"header":"\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9","addFile":"\u81ea\u5206\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3059\u308b","constraint":"5MB\u307e\u3067\u8ffd\u52a0\u53ef\u80fd","next":"\u5b8c\u4e86","micError":"\u30de\u30a4\u30af\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u5834\u5408 \u97f3\u58f0\u30d5\u30a1\u30a4\u30eb\uff08.wav/.wave/.mp3/.ogg\uff09\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9","micErrorDescription":"\u3053\u3053\u306b\u97f3\u58f0\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002","fileDurationTooShort":"3\u79d2\u4ee5\u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002","fileSizeTooBig":"5MB\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002","fileRequired":"\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044","uploadFile":"\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"},"recordingsListen":{"recordCough":{"header":"\u54b3\u3092\u9332\u97f3\u3059\u308b","intro1":"\u54b3\u3092\u3059\u308b\u3068\u304d\u306f\u3001\u5468\u308a\u306e\u4eba\u306b\u8ff7\u60d1\u3092\u304b\u3051\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4f53\u8abf\u304c\u60aa\u3044\u3068\u304d\u306f\u5ea7\u3063\u3066\u304f\u3060\u3055\u3044\u3002","intro2":"\u9759\u304b\u306a\u74b0\u5883\u3067\u3001\u9332\u97f3\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3001\u610f\u56f3\u7684\u306b3\uff5e5\u56de\u7a0b\u5ea6\u306e\u54b3\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002"},"title":"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u5b8c\u4e86","subtitle":"\u3054\u81ea\u7531\u306b\u304a\u8074\u304d\u304f\u3060\u3055\u3044\u3002","next":"\u7d9a\u3051\u308b","retake":"\u518d\u8a66\u884c"},"predictionResult":{"processingTitle":"\u8a3a\u65ad\u4e2d...","note":"\u6ce8\u610f\uff1a","result":"\u7d50\u679c","resultModal":"<strong>Important note:</strong> This app will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor.","resultNotDetected":"COVID-19: \u9670\u6027","resultNotDetectedText":"\u3042\u306a\u305f\u306e\u58f0\u306b\u306fCOVID-19\u306e\u6307\u6a19\u304c\u306a\u3044\u3088\u3046\u3067\u3059\u3002 \u533b\u7642\u5c02\u9580\u5bb6\u3084\u8a72\u5f53\u3059\u308b\u898f\u5236\u6a5f\u95a2\u306e\u30a2\u30c9\u30d0\u30a4\u30b9\u306b\u57fa\u3065\u3044\u3066\u3001<strong>\u9069\u5207\u306a\u5bfe\u7b56\u3092\u7d99\u7d9a\u3057\u3001\u65e5\u3005\u30a2\u30d7\u30ea\u3067\u81ea\u5206\u81ea\u8eab\u3092\u898b\u3064\u3081\u76f4\u3057\u3066\u304f\u3060\u3055\u3044</strong>","resultNotAnalyze":"\u54b3\u306e\u5206\u6790\u304c\u3067\u304d\u306a\u3044","resultModalDummy":"<strong\u6ce8\u610f\uff1a</strong> \u672c\u30a2\u30d7\u30ea\u306f\u30c7\u30e2\u30f3\u30b9\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3\u76ee\u7684\u3067\u3042\u308a\u3001\u5b9f\u969b\u306e\u4e88\u6e2c\u7d50\u679c\u3092\u63d0\u4f9b\u3059\u308b\u3082\u306e\u3067\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u54b3\u306e\u63d0\u4f9b\u306fVirufy Study\u3067\u884c\u3046\u3088\u3046\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002","resultNotAnalyzeText":"\u5f53\u56e3\u4f53\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u306f\u3001\u304a\u5ba2\u69d8\u306eCOVID-19\u306e\u72b6\u614b\u3092\u5224\u65ad\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002<strong>\u5225\u306e\u54b3\u3092\u63d0\u51fa\u3057\u3066\u304f\u3060\u3055\u3044</strong>.","resultDetectedDummy":"COVID-19: \u967d\u6027 <br/>(\u30c0\u30df\u30fc\u306e\u4f8b)","resultDetectedText":"\u3042\u306a\u305f\u306e\u58f0\u306b\u306fCOVID-19\u306e\u53ef\u80fd\u6027\u3092\u793a\u3059\u6307\u6a19\u304c\u3042\u308a\u307e\u3059\u3002 <strong>\u533b\u7642\u5f93\u4e8b\u8005</strong>\u306b\u9023\u7d61\u3057\u3001\u8ffd\u52a0\u306e\u4e88\u9632\u7b56\u3092\u8b1b\u3058\u3066\u304f\u3060\u3055\u3044\u3002","testForCovid":"COVID-19\u306e\u30c6\u30b9\u30c8","resultDetected":"COVID-19: \u967d\u6027","nextButton":"\u518d\u5ea6\u54b3\u3092\u9001\u4fe1\u3059\u308b","submitError":"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002","nextSteps":"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"},"footerReportProblems":{"message":"\u4f55\u304b\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u304b\uff1f\u30a8\u30e9\u30fc\u3092\u5831\u544a\u3059\u308b"}}')}},[[140,38,39]]]);
//# sourceMappingURL=main.52dc563f.chunk.js.map
(this["webpackJsonpcompensar-app"]=this["webpackJsonpcompensar-app"]||[]).push([[52],{104:function(a,e,o){a.exports=o(175)},175:function(a,e,o){"use strict";o.r(e);var n={};o.r(n),o.d(n,"es",(function(){return M}));var i=o(9),r=o.n(i),t=o(44),s=o.n(t),c=o(81),l=(o(109),o(84)),d=o.n(l),u=o(187),p=o(98),g={onUpdate:function(a){console.info("New version available. Reload"),a.unregister().then((function(){window.location.replace("https://virufy.org/compensar")}))},onSuccess:function(a){console.info("service worker on success state"),console.log(a)}},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(a,e){navigator.serviceWorker.register(a).then((function(a){a.onupdatefound=function(){var o=a.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(a)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(a)))})}})).catch((function(a){console.error("Error during service worker registration:",a)}))}var h=o(77),f=o(94),v=o(181),y=o(26),S=o(56),C=o(188),B=o(189),I=o(190),P=o(191),w=o(192),z=o(193),A=o(194),k=o(195),q=o(196),M=o(85);Object(y.registerLocale)("en",S.a),Object(y.registerLocale)("es",C.a),Object(y.registerLocale)("pt",B.a),Object(y.registerLocale)("fr",I.a),Object(y.registerLocale)("el",P.a),Object(y.registerLocale)("bn",w.a),Object(y.registerLocale)("th",z.a),Object(y.registerLocale)("tr",A.a),Object(y.registerLocale)("ja",k.a),Object(y.registerLocale)("hi",q.a),h.a.use(f.a).use(v.e).init({resources:n,ns:"main",missingKeyHandler:!1,fallbackLng:"es",fallbackNS:"main",interpolation:{escapeValue:!1}});h.a;var T=Object(c.a)((function(){return Promise.all([o.e(55),o.e(56)]).then(o.bind(null,812))}),{fallback:r.a.createElement("div",null,"Cargando")});u.a({dsn:"https://b6777d6f5b8849b18220800e5988ce1b@o1065161.ingest.sentry.io/6056535",integrations:[new p.a.BrowserTracing],release:"".concat("compensar-app"," @ v").concat("0.0.16"),environment:"compensar",tracesSampleRate:1});var N={gtmId:"G-VZTT2SP3TX"};d.a.initialize(N),s.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null)),document.getElementById("root")),function(a){if("serviceWorker"in navigator){if(new URL("https://virufy.org/compensar",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("https://virufy.org/compensar","/service-worker.js");m?(!function(a,e){fetch(a,{headers:{"Service-Worker":"script"}}).then((function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(a){a.unregister().then((function(){window.location.replace("https://virufy.org/compensar")}))})):b(a,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,a),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(e,a)}))}}(g)},85:function(a){a.exports=JSON.parse('{"main":{"Brazil":"Brasil","title":"Formulario para la recolecci\xf3n de datos sobre la tos de la COVID-19","logoIntro":"Una organizaci\xf3n de investigaci\xf3n independiente sin \xe1nimo de lucro","note":"Tenga en cuenta que este formulario es solo para la recopilaci\xf3n y tratamiento de datos. Virufy no predecir\xe1 su estado de COVID-19 ni diagnosticar\xe1 ninguna enfermedad, trastorno u otra condici\xf3n de salud. Virufy est\xe1 realizando una investigaci\xf3n y utilizar\xe1 la informaci\xf3n que proporcione \xfanicamente con fines investigativos.","paragraph1":"\xa1Bienvenido(a)! Solo deber\xeda tomarle unos 5 minutos en completar este formulario.","selectYourLanguage":"Idioma.","paragraph2":"Recolecci\xf3n de datos para la investigaci\xf3n sobre la tos de la COVID-19","selectCountry":"Seleccione pa\xeds","selectRegion":"Seleccione region","region":"Regi\xf3n","regionRequired":"Por favor ingresar una regi\xf3n","selectLocation":"Localizaci\xf3n","patientId":"N\xfamero de Identificaci\xf3n","selectSede":"Seleccione la sede de Compensar","selectSedePlaceholder":"Seleccione una sede","hospitalId":"ID del hospital","enterPatientId":"Ingrese n\xfamero de c\xe9dula","nextButton":"Siguiente","createdBy":"Creado por","installApp":"Instalar como aplicaci\xf3n","addToHomeScreen":"Agregar a la pantalla principal","hello":"Hola,","patient":"Paciente","questionnaire":"Cuestionario","audioCollection":"Recolecci\xf3n de audio","shortAudioCollection":"Recolecci\xf3n de audio abreviada","testResults":"Env\xedo de resultados del test","screeningResults":"Resultados de la predicci\xf3n de Virufy","shortQuestionnaire":"Cuestionario abreviado","supportedBy":"Apoyado por","visitWebsite":"Visite nuestra p\xe1gina web","errorCountry":"En este momento no podemos recoger tos de su regi\xf3n. Vuelva a consultarnos pronto!","noOptionsError":"No se encontraron opciones","noValueError":"No se encontraron resultados","accessCode":"C\xf3digo de acceso","enterAccessCode":"Ingresar c\xf3digo de acceso","patientIdLength":"Numero de Identificaci\xf3n debe tener entre 6 y 10 digitos","patientIdRequired":"Numero de Identificaci\xf3n es requerido","countries":{"Afghanistan":"Afganist\xe1n","Albania":"Albania","Algeria":"Argelia","Andorra":"Andorra","Angola":"Angola","Antigua and barbuda":"Antigua y Barbuda","Argentina":"Argentina","Armenia":"Armenia","Australia":"Australia","Austria":"Austria","Azerbaijan":"Azerbaiy\xe1n","Bahamas":"Bahamas","Bahrain":"Bahrein","Bangladesh":"Bangladesh","Barbados":"Barbados","Belarus":"Belar\xfas","Belgium":"B\xe9lgica","Belize":"Belice","Benin":"Benin","Bhutan":"Bhut\xe1n","Bolivia ":"Bolivia","Bosnia and herzegovina":"Bosnia y Herzegovina","Botswana":"Botswana","Brazil":"Brasil","Brunei darussalam":"Brunei Darussalam","Bulgaria":"Bulgaria","Burkina faso":"Burkina Faso","Burundi":"Burundi","Cabo verde":"Cabo Verde","Cambodia":"Camboya","Cameroon":"Camer\xfan","Canada":"Canad\xe1","Central african republic":"Rep\xfablica Centroafricana","Chad":"Chad","Chile":"Chile","China":"China","Colombia":"Colombia","Comoros":"Comoras","Congo":"Congo","Cook islands":"Islas Cook","Costa rica":"Costa Rica","Croatia":"Croacia","Cuba":"Cuba","Cyprus":"Chequia","Czechia":"Chipre","Ivory Coast":"Costa de Marfil","Democratic republic of korea":"Rep\xfablica Democr\xe1tica de Corea","Democratic republic of the congo":"Rep\xfablica Democr\xe1tica del Congo","Denmark":"Dinamarca","Djibouti":"Djibouti","Dominica":"Dominica","Dominican republic":"Rep\xfablica Dominicana","Ecuador":"Ecuador","Egypt":"Egipto","El salvador":"El Salvador","Equatorial guinea":"Guinea Ecuatorial","Eritrea":"Eritrea","Estonia":"Estonia","Eswatini":"Eswatini","Ethiopia":"Etiop\xeda","Faroe islands":"Islas Feroe","Fiji":"Fiji","Finland":"Finlandia","France":"Francia","Gabon":"Gab\xf3n","Gambia":"Gambia","Georgia":"Georgia","Germany":"Alemania","Ghana":"Ghana","Greece":"Grecia","Grenada":"Granada","Guatemala":"Guatemala","Guinea":"Guinea","Guinea-bissau":"Guinea-Bissau","Guyana":"Guyana","Haiti":"Hait\xed","Honduras":"Honduras","Hungary":"Hungr\xeda","Iceland":"Islandia","India":"India","Indonesia":"Indonesia","Iran":"Ir\xe1n ","Iraq":"Iraq","Ireland":"Irlanda","Israel":"Israel","Italy":"Italia","Jamaica":"Jamaica","Japan":"Jap\xf3n","Jordan":"Jordania","Kazakhstan":"Kazajst\xe1n","Kenya":"Kenya","Kiribati":"Kiribati","Kuwait":"Kuwait","Kyrgyzstan":"Kirguist\xe1n","Lao democratic republic":"Rep\xfablica Democr\xe1tica Lao","Latvia":"Letonia","Lebanon":"L\xedbano","Lesotho":"Lesotho","Liberia":"Liberia","Libya":"Libia","Lithuania":"Lituania","Luxembourg":"Luxemburgo","Madagascar":"Madagascar","Malawi":"Malawi","Malaysia":"Malasia","Maldives":"Maldivas","Mali":"Mal\xed","Malta":"Malta","Marshall islands":"Islas Marshall","Mauritania":"Mauritania","Mauritius":"Mauricio","Mexico":"M\xe9xico","Micronesia":"Micronesia","Monaco":"M\xf3naco","Mongolia":"Mongolia","Montenegro":"Montenegro","Morocco":"Marruecos","Mozambique":"Mozambique","Myanmar":"Myanmar","Namibia":"Namibia","Nauru":"Nauru","Nepal":"Nepal","Netherlands":"Pa\xedses Bajos","New zealand":"Nueva Zelanda","Nicaragua":"Nicaragua","Niger":"N\xedger","Nigeria":"Nigeria","Niue":"Niue","North macedonia":"Macedonia del Norte","Norway":"Noruega","Oman":"Om\xe1n","Pakistan":"Pakist\xe1n","Palau":"Palau","Palestine":"Palestina","Panama":"Panam\xe1","Papua new guinea":"Papua Nueva Guinea","Paraguay":"Paraguay","Peru":"Per\xfa","Philippines":"Filipinas","Poland":"Polonia","Portugal":"Portugal","Qatar":"Qatar","Republic of korea":"Rep\xfablica de Corea","Republic of moldova":"Rep\xfablica de Moldova","Romania":"Rumania","Russian federation":"Federaci\xf3n de Rusia","Rwanda":"Rwanda","Saint kitts and nevis":"Saint Kitts y Nevis","Saint lucia":"Santa Luc\xeda","Saint vincent and the grenadines":"San Vicente y las Granadinas","Samoa":"Samoa","San marino":"San Marino","Sao tome and principe":"Santo Tom\xe9 y Pr\xedncipe","Saudi arabia":"Arabia Saudita","Senegal":"Senegal","Serbia":"Serbia","Seychelles":"Seychelles","Sierra leone":"Sierra Leona","Singapore":"Singapur","Slovakia":"Eslovaquia","Slovenia":"Eslovenia","Solomon islands":"Islas Salom\xf3n","Somalia":"Somalia","South africa":"Sud\xe1frica","South sudan":"Sud\xe1n del Sur","Spain":"Espa\xf1a","Sri lanka":"Sri Lanka","Sudan":"Sud\xe1n","Suriname":"Suriname","Sweden":"Suecia","Switzerland":"Suiza","Syrian arab republic":"Rep\xfablica \xc1rabe Siria","Tajikistan":"Tayikist\xe1n","Thailand":"Tailandia","Timor-leste":"Timor-Leste","Togo":"Togo","Tokelau":"Tokelau","Tonga":"Tonga","Trinidad and tobago":"Trinidad y Tabago","Tunisia":"T\xfanez","Turkey":"Turqu\xeda","Turkmenistan":"Turkmenist\xe1n","Tuvalu":"Tuvalu","Uganda":"Uganda","Ukraine":"Ucrania","United arab emirates":"Emiratos \xc1rabes Unidos","United kingdom":"Reino Unido","United republic of tanzania":"Rep\xfablica Unida de Tanzan\xeda","United States":"Estados Unidos de Am\xe9rica","Uruguay":"Uruguay","Uzbekistan":"Uzbekist\xe1n","Vanuatu":"Vanuatu","Venezuela":"Venezuela ","Vietnam":"Vietnam","Yemen":"Yemen","Zambia":"Zambia","Zimbabwe":"Zimbabwe"}},"helpVirufy":{"title":"Sobre nosotros","ourSupporters":"Nuestros colaboradores","introParagraph":"Bienvenido a nuestra investigaci\xf3n y recolecci\xf3n de datos sobre la COVID- 19 a trav\xe9s de la tos. S\xf3lo le llevar\xe1 unos 5 minutos completarlo. Antes de empezar, vamos a discutir lo que vamos a cubrir:","aboutParagraph":"<0>Virufy es una <strong>organizaci\xf3n sin \xe1nimo de lucro</strong> que est\xe1 trabajando para desarrollar medios que utilicen <strong>la inteligencia artificial (IA) para detectar la COVID-19 a partir de los patrones de tos</strong>, de forma r\xe1pida y sin costo alguno, mediante el uso de dispositivos electr\xf3nicos en beneficio de los pa\xedses de bajos ingresos.</0><1>Nuestro equipo incluye investigadores de m\xe1s de <strong>50 organizaciones</strong>. Nuestra investigaci\xf3n ha demostrado que la tecnolog\xeda de IA puede ser capaz de identificar el patr\xf3n \xfanico de la tos del COVID-19.</1><2>Al recopilar <strong>grabaciones de tos</strong> de personas de todo el mundo, Virufy est\xe1 mejorando la solidez de su algoritmo de IA para reconocer el patr\xf3n de sonido \xfanico del COVID-19.</2><3><strong><strong>En sus manos est\xe1 el poder</strong> para ayudar a que millones de personas de todo el mundo se beneficien de nuestra investigaci\xf3n <strong>contribuyendo con su tos</strong>.</3>","bulletsIntro":"<strong>Introducci\xf3n: </strong>Acerca de nosotros y recordatorios de seguridad","bulletCough":"<strong>Toser en el tel\xe9fono</strong>","bulletQuestions":"<strong>Preguntas r\xe1pidas de salud</strong>","nextButton":"Siguiente"},"consent":{"title":"Consentimiento para la investigaci\xf3n","paragraph1":"Virufy se preocupa por su privacidad y est\xe1 asesorado por expertos legales en materia de privacidad de datos. La informaci\xf3n y las grabaciones que proporcione solo se utilizar\xe1n para los fines descritos en nuestra pol\xedtica de privacidad y nuestro formulario de consentimiento. Por favor, lea el formulario de consentimiento:","paragraph2Title":"Consentimiento expl\xedcito para la recopilaci\xf3n de informaci\xf3n personal y participaci\xf3n en la investigaci\xf3n","paragraph2":"\\"Recopilaci\xf3n de datos personales de audio a trav\xe9s de dispositivos electr\xf3nicos para el cribado de la COVID-19\\"","paragraph3":"Al marcar las casillas de abajo, usted reconoce que ha le\xeddo y entendido la pol\xedtica de privacidad de Virufy y que est\xe1 otorgando su consentimiento expl\xedcito, libre e informado a Virufy para recopilar, procesar y compartir su informaci\xf3n biom\xe9trica y de salud seg\xfan se indica a continuaci\xf3n.","certifyBrazil":"Certifico que tengo al menos 18 a\xf1os y acepto los t\xe9rminos de este formulario de consentimiento, autorizando expresamente la recogida y el tratamiento de mis datos personales, biom\xe9tricos y de salud.","certify":"Certifico que tengo al menos 18 a\xf1os y estoy de acuerdo con los t\xe9rminos del formulario de consentimiento.","agree":"He le\xeddo, entendido y acepto los t\xe9rminos de la pol\xedtica de privacidad de Virufy.","collection":" Por la presente doy mi consentimiento expreso a la recogida y tratamiento de mis datos personales, biom\xe9tricos y de salud.","collectionColombia":"Por la presente doy mi consentimiento expreso a la recolecci\xf3n, tratamiento y transferencia de mis datos personales, biom\xe9tricos y de salud.","detection":"Por la presente reconozco y acepto que el procesamiento se realizar\xe1 para los fines indicados anteriormente y, en particular, pero sin limitaci\xf3n, para la investigaci\xf3n y compilaci\xf3n de un conjunto de datos necesarios para el desarrollo de algoritmos de inteligencia artificial para la detecci\xf3n de COVID-19 basada en dispositivos.","signs":"Por la presente, reconozco y acepto que el tratamiento se realice para los fines indicados anteriormente y, en particular, pero sin limitarse a ello, para el entrenamiento de algoritmos de inteligencia artificial que analicen las grabaciones de audio de la tos para determinar mejor los signos de COVID-19.","biometric":"Por la presente doy mi consentimiento expreso para compartir mi informaci\xf3n personal, informaci\xf3n biom\xe9trica e informaci\xf3n de salud con terceros como se describe en este Formulario de Consentimiento y/o la Pol\xedtica de Privacidad de Virufy","pleaseConfirm":"Por favor, confirme lo siguiente:","nextButton":"Siguiente","jumpToBottom":"Saltar al final"},"beforeStart":{"title":"Por \xfaltimo, antes de comenzar","subtitle":"Para garantizar su seguridad, le aconsejamos:","advise_list":["Utilice su propio dispositivo y use un tapabocas cuando sea apropiado.","Desinfecte su dispositivo y cualquier superficie afectada o cercana despu\xe9s de grabar su tos/habla.","Si tiene una enfermedad subyacente en la que toser aumente los riesgos, por favor consulte con su profesional m\xe9dico de cabecera antes de participar.","Si cree que sus s\xedntomas empeoran, contacte a un profesional m\xe9dico."],"startButton":"Siguiente"},"recordingsIntroduction":{"recordCough":{"header":"Grabe su tos","title":"Instrucciones","intro1":"Busque un <strong>entorno tranquilo</strong>, al menos a <strong>6 metros </strong> de distancia de los dem\xe1s, y utilice una mascarilla quir\xfargica o de tela. Si se siente mal, si\xe9ntese.","intro2Cough":"Mantenga el dispositivo a una distancia de <strong> 30-60 cent\xedmetros </strong> de su boca y <strong>no obstruya</strong> ni cubra el dispositivo con pl\xe1stico. No tosa violentamente o con demasiada fuerza.","intro2Breath":"Mantenga el dispositivo a una distancia de <strong> 30-60 cent\xedmetros </strong> de su boca y <strong>no obstruya</strong> ni cubra el dispositivo con pl\xe1stico. No respire violentamente o con demasiada fuerza.","intro2Speech":"Mantenga el dispositivo a una distancia de <strong> 30-60 cent\xedmetros </strong> de su boca y <strong>no obstruya</strong> ni cubra el dispositivo con pl\xe1stico. No hable violentamente o con demasiada fuerza."},"recordBreath":{"header":"Graba tu respiraci\xf3n"},"recordSpeech":{"header":"Grabe su voz","intro1":"\xa1El sonido de su voz tambi\xe9n puede ayudarnos a aprender c\xf3mo suena la COVID! Por favor, haga clic para grabar y cuente claramente del uno al diez."},"next":"Siguiente","retryButton":"Reintentar","releaseButtonStart":"Haga clic para empezar a grabar","releaseButtonStop":"Haga clic para detener la grabaci\xf3n","shortRecording":"Por favor, haga una grabaci\xf3n de al menos {{seconds}} segundos"},"recordingsRecord":{"recordCough":{"header":"Grabe su tos"},"recordBreath":{"header":"Graba tu respiraci\xf3n"},"recordSpeech":{"header":"Grabe su voz"},"next":"Continuar","delete":"Borrar","textCough":"Haga clic en el bot\xf3n de grabaci\xf3n (el micr\xf3fono) y <strong>tosa intencionalmente tres veces, con una respiraci\xf3n profunda entre cada tos</strong>, dirigiendo su tos a la parte inferior de su dispositivo. Cuando haya terminado, haga clic en el bot\xf3n de detener (stop).","textBreath":" Haga clic en el bot\xf3n de grabaci\xf3n y <strong>respira profunda y fuertemente </strong> con la boca en la parte inferior del tel\xe9fono <strong>3 veces</strong>, dejando un espacio entre cada respiraci\xf3n. Cuando haya terminado, toque el bot\xf3n de detener.","textSpeech":"Haga clic en el bot\xf3n de grabaci\xf3n (micr\xf3fono), a continuaci\xf3n inhale profundamente y luego <strong> diga un \'aaaaah\' sostenido durante al menos 5 segundos.</strong> Cuando haya terminado, haga clic en el bot\xf3n de detener","textNext":"Haga clic en Continuar para seguir adelante","textCount":"Haga clic en el bot\xf3n de grabaci\xf3n (el micr\xf3fono) y <strong>cuente claramente del uno (1) al diez (10)</strong>. Cuando haya terminado, haga clic en el bot\xf3n de pausa.","upload":"Suba su propio archivo","record":"Grabar","recordStop":"Detener"},"recordingsRecordManual":{"header":"Subir un archivo","addFile":"A\xf1adir un archivo","constraint":"A\xf1ada hasta 5 MB","next":"Hecho","micError":"\xbfNo puede acceder al micr\xf3fono? Suba un archivo de audio (.wav/.wave/.mp3/.ogg)","micErrorDescription":"Por favor, suba un archivo de audio aqu\xed.","fileDurationTooShort":"Por favor, suba un archivo de al menos 3 segundos","fileSizeTooBig":"Por favor, suba un archivo de menos de 5 MB","fileRequired":"Por favor, suba un archivo","uploadFile":"Subir Archivo"},"recordingsListen":{"recordCough":{"header":"Grabe su tos","intro1":"Busque un entorno tranquilo que est\xe9 a 6 metros de los dem\xe1s","intro2":"Use un tapabocas quirurgico o de tela y sostenga el dispositivo a 30-60 cm de distancia de su cara"},"recordBreath":{"header":"Graba tu respiraci\xf3n"},"recordSpeech":{"header":"Grabe su voz","intro1":"\xa1El sonido de su voz tambi\xe9n puede ayudarnos a aprender c\xf3mo suena la COVID! Por favor, haga clic para grabar y cuente claramente del uno (1)  al diez (10)."},"title":"Carga completa","subtitle":"Si lo desea, puede escuchar su grabaci\xf3n.","next":"Continuar","retake":"Volver a grabar"},"questionary":{"headerQuestions":"Preguntas","title":"\xa1Vamos a responder unas breves preguntas!","note":"Sus respuestas nos ayudar\xe1n a crear un algoritmo m\xe1s preciso y coherente.","allThatApply":"(seleccione todas las que correspondan)","symptoms":{"title":"S\xedntomas actuales","question":"<strong>\xbfCu\xe1l de los siguientes s\xedntomas tiene actualmente?</strong>","options":{"bodyAches":"Dolores corporales","dryCough":"Tos (Seca)","wetCough":"Tos (h\xfameda, con mocos)","feverChillsSweating":"Fiebre, escalofr\xedos o sudor","headaches":"Dolores de cabeza","lossTasteOrSmell":"P\xe9rdida del gusto y/o del olfato","worseCough":"Tos nueva o que empeora","runnyNose":"Nariz que moquea","breathShortness":"Dificultad para respirar","soreThroat":"Dolor de garganta","chestTightness":"Presi\xf3n en el pecho","vomitingAndDiarrhea":"V\xf3mito y diarrea","none":"Ninguno","weakness":"Debilidad","other":"Otro","addOther":"+ A\xf1adir otro"}},"symptomsDate":"Aproximadamente, \xbfcu\xe1ndo comenz\xf3 a experimentar los s\xedntomas de la COVID-19, como tos, fiebre y/o dificultad para respirar?","options":{"today":"Hoy","days":"Hace 1 a 3 d\xedas","week":"Hace una semana","overWeek":"Hace m\xe1s de una semana"},"stepOf":"de","nextButton":"Siguiente","submitting":"Enviando...","progressBar":"Paso {{currentStep}}/{{totalSteps}}"},"beforeSubmit":{"submitButton":"Enviar formulario","submitError":"Se produjo un error. Por favor, int\xe9ntelo de nuevo."},"thankyou":{"title":"\xa1Gracias por su participaci\xf3n!","paragraph1_cough":"El resultado de su predicci\xf3n ser\xe1 enviado a COMPENSAR."},"footerReportProblems":{"message":"\xbfAlgo mal? Reportar un problema"},"stayInTouch":{"title":"\xa1Mant\xe9ngase en contacto!","cards":[{"title":"M\xe1s informaci\xf3n","description":"Visite nuestro sitio web para aprender mas sobre nosotros.","cta":{"label":"Visite nuestro sitio web","link":"https://virufy.org/"}},{"title":"\xdanete a nosotros","description":"Contribuya con sus habilidades para combatir la COVID-19.","cta":{"label":"Postular ahora","link":"https://virufy.org/join"}}]},"socialIcons":{"title":"S\xedganos"}}')}},[[104,53,54]]]);
//# sourceMappingURL=main.2a43f6a3.chunk.js.map
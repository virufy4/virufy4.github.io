(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[4,28],{178:function(e,n,t){"use strict";t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return l}));var r=t(166),o=t(165),a=t(168);function i(){var e=Object(r.a)(["\n  font-family: 'Open Sans';\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1;\n  color: ",";\n"]);return i=function(){return e},e}function c(){var e=Object(r.a)(["\n  ","\n  color: ",";\n  ","\n"]);return c=function(){return e},e}function s(){var e=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  line-height: 20px;\n"]);return s=function(){return e},e}var u=Object(o.css)(s()),d=o.default.div(c(),u,(function(e){return e.dark?a.a.darkBlack:a.a.black}),(function(e){return e.fontSize?"font-size: ".concat(e.fontSize,";"):""})),l=o.default.div(i(),a.a.darkBlack)},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(169),o=t(37),a=t(198),i=t(6),c=t.n(i),s=t(166),u=t(165),d=t(168);function l(){var e=Object(s.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var f=u.default.button(l(),(function(e){var n=e.dark,t=e.disabled?d.a.purple_50:d.a.purple;return n?"\n    background-color: ".concat(t,";\n    color: ").concat(d.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(d.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),p=c.a.memo((function(e){var n=e.children,t=Object(a.a)(e,["children"]);return Object(o.jsx)(f,Object(r.a)(Object(r.a)({type:"button"},t),{},{children:n}))}))},195:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(37),o=t(6),a=t.n(o),i=t(189),c=t(166);function s(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return s=function(){return e},e}var u=t(165).default.div(s(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),d=a.a.memo((function(e){var n=e.invert,t=void 0!==n&&n,o=e.leftLabel,a=e.leftDisabled,c=e.leftHandler,s=e.rightLabel,d=e.rightDisabled,l=e.rightHandler;return Object(r.jsxs)(u,{children:[Object(r.jsx)(i.a,{dark:t,disabled:a,onClick:c,children:o}),s&&l&&Object(r.jsx)(i.a,{dark:!t,disabled:d,onClick:l,children:s})]})})),l=a.a.memo(d)},216:function(e,n,t){"use strict";t.r(n);var r=t(37),o=t(174),a=t(203),i=t.n(a),c=t(204),s=t(6),u=t.n(s),d=t(201),l=t.n(d),f=t(848),p=t(245),m=t(274),h=t(287),g=t(169),b=t(171),v=t(827),x=t.n(v),j=t(188),y=function(){var e=this,n=[];this.onmessage=function(t){"encode"===t.data[0]?function(e){for(var t=e.length,r=new Uint8Array(2*t*1),o=0;o<t;o+=1){var a=2*o*1,i=e[o];i>1?i=1:i<-1&&(i=-1),i*=32768,r[a]=i,r[a+1]=i>>8}n.push(r)}(t.data[1]):"dump"===t.data[0]?function(e){var t=n.length?n[0].length:0,r=n.length*t,o=new Uint8Array(44+r),a=new DataView(o.buffer);a.setUint32(0,1380533830,!1),a.setUint32(4,36+r,!0),a.setUint32(8,1463899717,!1),a.setUint32(12,1718449184,!1),a.setUint32(16,16,!0),a.setUint16(20,1,!0),a.setUint16(22,1,!0),a.setUint32(24,e,!0),a.setUint32(28,1*e*2,!0),a.setUint16(32,2,!0),a.setUint16(34,16,!0),a.setUint32(36,1684108385,!1),a.setUint32(40,r,!0);for(var i=0;i<n.length;i+=1)o.set(n[i],i*t+44);n=[];var c=[o.buffer];postMessage(c,[c[0]])}(t.data[1]):"close"===t.data[0]&&e.close()}},O=function(){var e=null,n=1152,t=[];function r(e){var n=new Float32Array(e),t=new Int16Array(e.length);return function(e,n){for(var t=0;t<e.length;t+=1){var r=Math.max(-1,Math.min(1,e[t]));n[t]=r<0?32768*r:32767*r}}(n,t),t}onmessage=function(o){var a;"encode"===o.data[0]?function(o){for(var a=r(o),i=a.length,c=0;i>=0;c+=n){var s=a.subarray(c,c+n),u=e.encodeBuffer(s);t.push(u),i-=n}}(o.data[1]):"dump"===o.data[0]?function(){var n=e.flush();n.length>0&&t.push(n),postMessage(t),t=[]}(o.data[1]):"init"===o.data[0]?(a=o.data[1],importScripts(a.baseUrl+"/workers/encoders/lame.min.js"),e=new lamejs.Mp3Encoder(1,a.sampleRate,128)):"close"===o.data[0]&&this.close()}},w=function(){var e;importScripts("".concat("https://virufy.org/demo","/workers/encoders/libflac.dev.js"));var n=1,t=44100,r=5,o=16,a=1,i=0,c=[],s=[];function u(e,n){c.push(e),i+=e.byteLength}function d(){if(0!==(e=Flac.init_libflac_encoder(t,n,o,r,0))){var i=Flac.init_encoder_stream(e,u);a&=0==i,console.log("flac init     : ".concat(a)),console.log("status encoder: ".concat(i)),!0}else console.error("Error initializing the encoder.")}function l(t){for(var r=t.length,o=new Uint32Array(r),a=new DataView(o.buffer),i=0,c=0;c<r;c+=1)a.setInt32(i,32767*t[c],!0),i+=4;var s=Flac.FLAC__stream_encoder_process_interleaved(e,o,o.length/n);1!=s&&console.log("Error: encode_buffer_pcm_as_flac returned false. ".concat(s))}function f(e,n){var t=function(e,n){for(var t=new Uint8Array(n),r=0,o=e.length,a=0;a<o;a+=1){var i=e[a];t.set(i,r),r+=i.length}return t}(e,n);return new Blob([t],{type:"audio/flac"})}this.onmessage=function(u){if("init"===u.data[0])!function(e){var a=e;a||(a={bps:o,channels:n,samplerate:t,compression:r}),a.channels=a.channels?a.channels:n,a.samplerate=a.samplerate?a.samplerate:t,a.bps=a.bps?a.bps:o,a.compression=a.compression?a.compression:r,r=a.compression,o=a.bps,t=a.samplerate,n=a.channels,Flac.isReady()?d():Flac.onready=function(){setTimeout((function(){d()}),0)}}(u.data[1]);else if("encode"===u.data[0])!function(e){if(Flac.isReady()){if(s.length>0)for(var n=s.length,t=s.splice(0,n),r=0;r<n;++r)l(t[r]);l(e)}else s.push(e),console.info("buffered audio data for Flac encdoing")}(u.data[1]);else if("dump"===u.data[0]){var p;Flac.isReady()?(a&=Flac.FLAC__stream_encoder_finish(e),console.log("flac finish: ".concat(a)),p=f(c,i),Flac.FLAC__stream_encoder_delete(e)):console.error("Flac was not initialized: could not encode data!"),c.splice(0,c.length),i=0,s.splice(0,s.length),postMessage(p),!1}}},C=function e(n){var t=this;Object(j.a)(this,e),this.cleanup=function(){t.config.onRecording&&t.em.removeEventListener("recording",t.recordingFn),t.config.onAudioProcesss&&t.em.removeEventListener("onaudioprocess",t.onAudioProcessFn)},this.createWorker=function(e){var n=e.toString().replace(/^function\s*\(\)\s*{/,"").replace(/}$/,""),t=new Blob([n]);return new Worker(URL.createObjectURL(t))},this.startRecording=function(e){if("inactive"===t.state&&navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){if(t.audioCtx=new AudioContext({sampleRate:t.config.sampleRate}),t.micGainNode=t.audioCtx.createGain(),t.outputGainNode=t.audioCtx.createGain(),t.config.createDynamicsCompressorNode&&(t.dynamicsCompressorNode=t.audioCtx.createDynamicsCompressor()),t.config.createAnalyserNode&&(t.analyserNode=t.audioCtx.createAnalyser()),(t.config.forceScriptProcessor||t.config.broadcastAudioProcessEvents||!t.config.usingMediaRecorder)&&(t.processorNode=t.audioCtx.createScriptProcessor(t.config.processorBufferSize,1,1)),t.audioCtx.createMediaStreamDestination?t.destinationNode=t.audioCtx.createMediaStreamDestination():t.destinationNode=t.audioCtx.destination,!t.config.usingMediaRecorder){if("mp3"===t.config.manualEncoderId){t.encoderWorker=t.createWorker(O);t.encoderWorker.postMessage(["init",{baseUrl:"https://virufy.org/demo",sampleRate:t.audioCtx.sampleRate}]),t.encoderMimeType="audio/mpeg"}else"flac"===t.config.manualEncoderId?(t.encoderWorker=t.createWorker(w),t.encoderWorker.postMessage(["init",{sampleRate:t.audioCtx.sampleRate}]),t.encoderMimeType="audio/flac"):(t.encoderWorker=t.createWorker(y),t.encoderMimeType="audio/wav");t.encoderWorker.addEventListener("message",(function(e){var n=new Event("dataavailable");"ogg"===t.config.manualEncoderId||"flac"===t.config.manualEncoderId?n.data=e.data:n.data=new Blob(e.data,{type:t.encoderMimeType}),t._onDataAvailable(n)}))}var n={audio:{echoCancellation:t.config.enableEchoCancellation}};return t.config.deviceId&&(n.audio.deviceId=t.config.deviceId),navigator.mediaDevices.getUserMedia(n).then((function(n){t._startRecordingWithStream(n,e)})).catch((function(e){console.log(e)}))}},this.setMicGain=function(e){t.config.micGain=e,t.audioCtx&&t.micGainNode&&t.micGainNode.gain.setValueAtTime(e,t.audioCtx.currentTime)},this._startRecordingWithStream=function(e,n){t.micAudioStream=e,t.inputStreamNode=t.audioCtx.createMediaStreamSource(t.micAudioStream),t.audioCtx=t.inputStreamNode.context,t.onGraphSetupWithInputStream&&t.onGraphSetupWithInputStream(t.inputStreamNode),t.inputStreamNode.connect(t.micGainNode),t.micGainNode.gain.setValueAtTime(t.config.micGain,t.audioCtx.currentTime);var r=t.micGainNode;t.dynamicsCompressorNode&&(t.micGainNode.connect(t.dynamicsCompressorNode),r=t.dynamicsCompressorNode),t.state="recording",t.processorNode?(r.connect(t.processorNode),t.processorNode.connect(t.outputGainNode),t.processorNode.onaudioprocess=function(e){return t._onAudioProcess(e)}):r.connect(t.outputGainNode),t.analyserNode&&r.connect(t.analyserNode),t.outputGainNode.connect(t.destinationNode),t.config.usingMediaRecorder?(t.mediaRecorder=new MediaRecorder(t.destinationNode.stream,{mimeType:t.encoderMimeType||"audio/wav"}),t.mediaRecorder.addEventListener("dataavailable",(function(e){return t._onDataAvailable(e)})),t.mediaRecorder.addEventListener("error",(function(e){return t._onError(e)})),t.mediaRecorder.start(n)):(t.outputGainNode.gain.setValueAtTime(0,t.audioCtx.currentTime),n&&(console.log("Time slicing without MediaRecorder is not yet supported. The resulting recording will not be playable."),t.slicing=setInterval((function(){"recording"===this.state&&this.encoderWorker.postMessage(["dump",this.context.sampleRate])}),n)))},this._onAudioProcess=function(e){t.config.broadcastAudioProcessEvents&&t.em.dispatchEvent(new CustomEvent("onaudioprocess",{detail:{inputBuffer:e.inputBuffer,outputBuffer:e.outputBuffer}})),t.config.usingMediaRecorder||"recording"===t.state&&(t.config.broadcastAudioProcessEvents?t.encoderWorker.postMessage(["encode",e.outputBuffer.getChannelData(0)]):t.encoderWorker.postMessage(["encode",e.inputBuffer.getChannelData(0)]))},this.stopRecording=function(){"inactive"!==t.state&&(t.config.usingMediaRecorder?(t.state="inactive",t.mediaRecorder.stop()):(t.state="inactive",t.encoderWorker.postMessage(["dump",t.audioCtx.sampleRate]),clearInterval(t.slicing)))},this._onDataAvailable=function(e){if(t.chunks.push(e.data),t.chunkType=e.data.type,"inactive"===t.state){var n=new Blob(t.chunks,{type:t.chunkType}),r=URL.createObjectURL(n),o={ts:(new Date).getTime(),blobUrl:r,mimeType:n.type,size:n.size};t.chunks=[],t.chunkType=null,t.destinationNode&&(t.destinationNode.disconnect(),t.destinationNode=null),t.outputGainNode&&(t.outputGainNode.disconnect(),t.outputGainNode=null),t.analyserNode&&(t.analyserNode.disconnect(),t.analyserNode=null),t.processorNode&&(t.processorNode.disconnect(),t.processorNode=null),t.encoderWorker&&(t.encoderWorker.postMessage(["close"]),t.encoderWorker=null),t.dynamicsCompressorNode&&(t.dynamicsCompressorNode.disconnect(),t.dynamicsCompressorNode=null),t.micGainNode&&(t.micGainNode.disconnect(),t.micGainNode=null),t.inputStreamNode&&(t.inputStreamNode.disconnect(),t.inputStreamNode=null),t.config.stopTracksAndCloseCtxWhenFinished&&(t.micAudioStream.getTracks().forEach((function(e){return e.stop()})),t.micAudioStream=null,t.audioCtx.close(),t.audioCtx=null),t.em.dispatchEvent(new CustomEvent("recording",{detail:{recording:o}}))}},this._onError=function(e){console.log("error",e),t.em.dispatchEvent(new Event("error"))},window.AudioContext=window.AudioContext||window.webkitAudioContext,this.em=document.createDocumentFragment(),this.state="inactive",this.chunks=[],this.chunkType="",this.encoderMimeType="audio/wav",this.config={broadcastAudioProcessEvents:void 0!==n.broadcastAudioProcessEvents&&n.broadcastAudioProcessEvents,createAnalyserNode:void 0!==n.createAnalyserNode&&n.createAnalyserNode,createDynamicsCompressorNode:void 0!==n.createDynamicsCompressorNode&&n.createDynamicsCompressorNode,forceScriptProcessor:void 0!==n.forceScriptProcessor&&n.forceScriptProcessor,manualEncoderId:void 0!==n.manualEncoderId?n.manualEncoderId:"wav",micGain:void 0!==n.micGain?n.micGain:1,processorBufferSize:void 0!==n.processorBufferSize?n.processorBufferSize:2048,stopTracksAndCloseCtxWhenFinished:void 0===n.stopTracksAndCloseCtxWhenFinished||n.stopTracksAndCloseCtxWhenFinished,usingMediaRecorder:void 0!==n.usingMediaRecorder?n.usingMediaRecorder:"undefined"!==typeof window.MediaRecorder,enableEchoCancellation:void 0===n.enableEchoCancellation||n.enableEchoCancellation,sampleRate:void 0!==n.sampleRate?n.sampleRate:44100,onRecording:n.onRecording,onAudioPress:n.onAudioPress},n.onRecording&&(this.recordingFn=function(e){return n.onRecording(e)},this.em.addEventListener("recording",this.recordingFn)),n.onAudioProcesss&&(this.onAudioProcessFn=function(e){return n.onAudioProcesss(e)},this.em.addEventListener("onaudioprocess",this.onAudioProcessFn))},k=t(249),R=t(250),S=t(198),N=t(834),E=t.n(N),M=t(189),A=t(166),T=t(165);function B(){var e=Object(A.a)(["\n  font-family: 'Source Sans Pro';\n  text-align: center;\n  line-height: 25px;\n  font-size: 18px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n"]);return B=function(){return e},e}function U(){var e=Object(A.a)(["\n  font-family: 'Biko';\n  font-size: 30px;\n  line-height: 30px;\n  margin-bottom: 10px;\n  font-weight: 600;\n"]);return U=function(){return e},e}function F(){var e=Object(A.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (",") {\n    margin: auto;\n"]);return F=function(){return e},e}var I=T.default.div(F(),(function(e){return e.theme.breakpoints.tablet})),L=T.default.div(U()),P=T.default.div(B());E.a.setAppElement("#root");var D=u.a.memo((function(e){var n=e.modalTitle,t=e.children,o=e.onConfirm,a=Object(S.a)(e,["modalTitle","children","onConfirm"]),i=Object(f.a)().t;return Object(r.jsx)(E.a,Object(g.a)(Object(g.a)({},a),{},{style:{content:{height:"281px",maxWidth:"348px",margin:"auto",borderRadius:"10px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:Object(r.jsxs)(I,{className:"ModalBody",children:[Object(r.jsx)(L,{children:n}),Object(r.jsx)(P,{children:t}),Object(r.jsx)(M.a,{onClick:o,dark:!0,children:i("recordingsIntroduction:retryButton","Retry")})]})}))})),_=t.p+"static/media/start.e0d4d3a6.svg",z=t(272),G=t(168);function W(){var e=Object(A.a)(["\n  visibility: ",";\n"]);return W=function(){return e},e}function V(){var e=Object(A.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  display: flex; \n  margin-left: 20px;\n  margin-top:10px;\n"]);return V=function(){return e},e}function H(){var e=Object(A.a)(["\n  width: 70px;\n  height: 41px;\n  font-size: 1.25rem;\n  color: ",";\n  font-weight: bold;\n  font-family: 'Source Sans Pro';\n  border: 1px solid ",";\n  border-radius: 15px;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n  margin-bottom: 28px;\n\n  @media screen and (",") {\n    font-size: 1.75rem;\n    margin-top: 22px;\n  }\n"]);return H=function(){return e},e}function Z(){var e=Object(A.a)(["\n  width: 15px;\n  height: 15px;\n"]);return Z=function(){return e},e}function J(){var e=Object(A.a)(["\n  width: 27px;\n  height: 27px;\n"]);return J=function(){return e},e}function Y(){var e=Object(A.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: opacity 0.25s;\n"]);return Y=function(){return e},e}function q(){var e=Object(A.a)(["\n  background-color: ",";\n  width: 56px;\n  height: 56px;\n  position: relative;\n  outline: none !important;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  transition: background-color 0.25s;\n  opacity: ",";\n\n  @supports not (-webkit-touch-callout: none) {\n    /* CSS for other than iOS devices */\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: transparent;\n    z-index: 1;\n    border-radius: 50%;\n  }\n\n  @media screen and (",") {\n    width: 66px;\n    height: 66px;\n  }\n"]);return q=function(){return e},e}function K(){var e=Object(A.a)(["\n  font-size: 14px;\n  color: ",";\n  margin-top: 8px;\n  margin-bottom: 0px;\n"]);return K=function(){return e},e}function Q(){var e=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Q=function(){return e},e}function $(){var e=Object(A.a)(["\n  display:flex;\n  justify-content: space-between;\n  width: 144px;\n  margin: auto;\n"]);return $=function(){return e},e}function X(){var e=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]);return X=function(){return e},e}var ee=T.default.div(X()),ne=T.default.div($()),te=T.default.div(Q()),re=T.default.p(K(),G.a.lightDarkGray),oe=T.default.button(q(),G.a.purple,(function(e){return e.disabled||e.opacity?"0.5":"1"}),G.a.purple,(function(e){return e.theme.breakpoints.tablet})),ae=T.default.img(Y()),ie=Object(T.default)(ae)(J()),ce=Object(T.default)(ae)(Z()),se=T.default.div(H(),G.a.purple,G.a.purple,(function(e){return e.theme.breakpoints.tablet})),ue=T.default.div(V(),G.a.red),de=T.default.p(W(),(function(e){return e.show?"flex":"hidden"})),le={usingMediaRecorder:!1,sampleRate:48e3,manualEncoderId:"wav",processorBufferSize:2048},fe=function(e){var n=e.className,t=void 0===n?"":n,o=e.maxTimeInSeconds,a=void 0===o?30:o,s=e.onNewRecord,d=e.delay,l=void 0===d?500:d,p=e.recordingFile,m=Object(f.a)().t,h=u.a.useRef(),v=u.a.useRef(0),j=u.a.useRef(),y=u.a.useRef(),O=u.a.useRef(),w=u.a.useState(!0),S=Object(b.a)(w,2),N=S[0],E=S[1],M=u.a.useState(),A=Object(b.a)(M,2),T=A[0],B=A[1],U=u.a.useState(!1),F=Object(b.a)(U,2),I=F[0],L=F[1],P=u.a.useState(!1),G=Object(b.a)(P,2),W=G[0],V=G[1],H=u.a.useState(!1),Z=Object(b.a)(H,2),J=Z[0],Y=Z[1],q=u.a.useCallback((function(e){v.current+=1;for(var n=e.detail,t=n.inputBuffer,r=n.outputBuffer,o=0;o<r.numberOfChannels;o+=1)for(var a=t.getChannelData(o),i=r.getChannelData(o),c=0;c<t.length;c+=1)i[c]=a[c]}),[]),K=u.a.useCallback(function(){var e=Object(c.a)(i.a.mark((function e(n){var t,r,o,a,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.detail,r=t.recording,e.next=4,fetch(r.blobUrl).then((function(e){return e.blob()}));case 4:o=e.sent,a="Filename.".concat(le.manualEncoderId),c=k.a.blobToFile(o,a),u=k.a.sizeAsHuman(c.size,!0),s(c,u);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[s]);u.a.useEffect((function(){h.current=new C(Object(g.a)(Object(g.a)({},le),{},{onRecording:K,onAudioProcesss:q}));var e={audio:{echoCancellation:h.current.config.enableEchoCancellation}};if(navigator.mediaDevices.getUserMedia(e).then((function(){E(!0)})).catch((function(){E(!1)})),p){var n=p;if(n.size){var t=new Audio(URL.createObjectURL(n));t.load();var r=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.removeEventListener("loadedmetadata",r),Object(R.a)(t,!0).then((function(e){var n;null===(n=j.current)||void 0===n||n.setTime(1e3*e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.addEventListener("loadedmetadata",r)}}return function(){h.current&&h.current.cleanup()}}),[]);var Q=u.a.useCallback((function(){h.current&&(v.current=0,h.current.startRecording().then((function(){var e;(B(!0),V(!1),j.current)&&(j.current.reset(),null===(e=j.current)||void 0===e||e.setTime(0),j.current.start())})).catch((function(e){return console.error("ERROR",e)})))}),[]),$=u.a.useCallback((function(){h.current&&(h.current.stopRecording(),B(!1),j.current&&(j.current.getTime()/1e3<2&&V(!0),j.current.stop()))}),[]),X=u.a.useCallback((function(e){return e<10?"0".concat(e):e}),[]),ae=function(e){"touches"in e||e.preventDefault()},fe=u.a.useCallback((function(e){e.target&&(e.target.addEventListener("touchend",ae,{passive:!1}),O.current=e.target),y.current=setTimeout((function(){L(!0),Y(!0),V(!1)}),l)}),[l]),pe=u.a.useCallback((function(){y.current&&clearTimeout(y.current),J&&L(!1),Y(!1),O.current&&O.current.removeEventListener("touchend",ae)}),[J]);return Object(r.jsxs)(ee,{className:t,children:[Object(r.jsxs)(ue,{children:[!W&&Object(r.jsx)(de,{show:I,children:m(T?"recordingsIntroduction:releaseButtonStop":"recordingsIntroduction:releaseButtonStart")}),Object(r.jsx)(D,{isOpen:W,modalTitle:"Oops.",onConfirm:Q,children:m("recordingsIntroduction:shortRecording")})]}),Object(r.jsx)(se,{children:Object(r.jsxs)(x.a,{ref:j,startImmediately:!1,checkpoints:[{time:1e3*a,callback:$}],children:[Object(r.jsx)(x.a.Minutes,{}),":",Object(r.jsx)(x.a.Seconds,{formatValue:X})]})}),Object(r.jsxs)(ne,{children:[Object(r.jsxs)(te,{children:[Object(r.jsx)(oe,{disabled:!N||T,onClick:Q,onMouseDown:fe,onMouseUp:pe,onTouchStart:fe,onTouchEnd:pe,onMouseLeave:pe,children:Object(r.jsx)(ie,{src:_,alt:"Start"})}),Object(r.jsx)(re,{children:m("recordingsIntroduction:recordCough.record")})]}),Object(r.jsxs)(te,{children:[Object(r.jsx)(oe,{disabled:!N||!T,onClick:$,onMouseDown:fe,onMouseUp:pe,onTouchStart:fe,onTouchEnd:pe,onMouseLeave:pe,children:Object(r.jsx)(ce,{src:z.a,alt:"Stop"})}),Object(r.jsx)(re,{children:m("recordingsIntroduction:recordCough.stop")})]})]})]})},pe=u.a.memo(fe),me=t(195),he=t.p+"static/media/upload.21eec1c7.svg",ge=t(273),be=h.b({recordingFile:h.a().required("ERROR.FILE_REQUIRED").test("fileSize","ERROR.FILE_SIZE",(function(e){return e?e.size<=5*Math.pow(1024,3):!!e})).test("fileDuration","ERROR.FILE_DURATION",function(){var e=Object(c.a)(i.a.mark((function e(n){var t,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=10;break}return t=n,(r=new Audio(URL.createObjectURL(t))).load(),e.next=6,new Promise((function(e){return r.addEventListener("loadedmetadata",e)}));case 6:return e.next=8,new Promise((function(e){r.duration!==1/0&&e(r.duration),r.addEventListener("durationchange",(function(){r.remove(),e(r.duration)})),r.volume=0,r.currentTime=86400,r.play()}));case 8:return o=e.sent,e.abrupt("return",o>=2);case 10:return e.abrupt("return",!!n);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}).defined(),ve=function(e){var n=e.onNext,t=e.onManualUpload,a=e.defaultValues,i=e.currentLogic,c=e.action,s=l()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,d=Object(p.c)({mode:"onChange",defaultValues:a,resolver:Object(m.yupResolver)(be)}),h=d.handleSubmit,g=d.control,b=d.getValues,v=d.formState,x=Object(f.a)().t,j=v.isValid,y=u.a.useRef(1);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(ge.MainContainer,{children:[Object(r.jsx)(ge.MicContainer,{children:Object(r.jsx)(p.a,{control:g,name:"recordingFile",render:function(e){var n=e.onChange;return Object(r.jsx)(pe,{onNewRecord:n,recordingFile:null===a||void 0===a?void 0:a.recordingFile},y.current)}})}),Object(r.jsxs)(s,{children:[Object(r.jsx)(me.a,{invert:!0,leftLabel:x("recordingsRecord:next"),leftDisabled:!j,leftHandler:h(n)}),Object(r.jsxs)(ge.UploadContainer,{onClick:function(){c(Object(o.a)({},i,{recordingFile:b("recordingFile")||null,uploadedFile:null})),null===t||void 0===t||t()},children:[Object(r.jsx)(ge.UploadImage,{src:he}),Object(r.jsx)(ge.UploadText,{children:x("recordingsRecord:upload")})]})]})]})})};n.default=u.a.memo(ve)},249:function(e,n,t){"use strict";n.a={sizeAsHuman:function(e,n){var t=n?1e3:1024;if(Math.abs(e)<t)return"".concat(e," B");var r=n?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=-1;do{e/=t,++o}while(Math.abs(e)>=t&&o<r.length-1);return"".concat(e.toFixed(1)," ").concat(r[o])},blobToFile:function(e,n){var t=e;return t.lastModifiedDate=new Date,t.name=n,e}}},250:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(331);function o(e,n){return new Promise((function(t){e.duration===1/0||r.isSafari&&!(r.isSafari&&e.duration>0)?(e.addEventListener("durationchange",(function(){n?e.remove():(e.pause(),e.volume=1,e.currentTime=0),t(e.duration)})),e.currentTime=86400,e.play()):t(e.duration)}))}},272:function(e,n,t){"use strict";n.a=t.p+"static/media/stop.e6f44abd.svg"},273:function(e,n,t){"use strict";t.r(n),t.d(n,"MainContainer",(function(){return h})),t.d(n,"Text",(function(){return g})),t.d(n,"MicContainer",(function(){return b})),t.d(n,"UploadContainer",(function(){return v})),t.d(n,"UploadImage",(function(){return x})),t.d(n,"UploadText",(function(){return j})),t.d(n,"StopImg",(function(){return y}));var r=t(166),o=t(165),a=t(178),i=t(168),c=t(272);function s(){var e=Object(r.a)(["\n  display: inline;\n  height: 10px;\n  margin: 0px 2px 4px;\n"]);return s=function(){return e},e}function u(){var e=Object(r.a)(["\n  cursor: pointer;\n  font-family: Source Sans Pro;\n  font-weight: bold;\n  font-size: 0.75rem;\n  line-height: 24px;\n  color: ",";\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  cursor: pointer;\n  width: 13px;\n  height: 12px;\n  margin-right: 7px;\n"]);return d=function(){return e},e}function l(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 20px;\n  margin: 20px auto;\n  width: fit-content;\n\n\n  @media screen and (","){\n    padding: 0px 22px;\n    margin: 22px auto;\n  }\n"]);return l=function(){return e},e}function f(){var e=Object(r.a)([""]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n  color: ",";\n  margin-bottom: 2px;\n  text-align: left;\n\n  @media screen and (","){\n    max-width: 470px;\n    margin: 0 auto;\n    font-size: 16px;\n  }\n\n  @media screen and (","){\n    @media (orientation: portrait) {\n      margin-bottom: 248px;\n    }\n\n    @media (orientation: landscape) {\n      margin-bottom: 24px;\n    }\n  }\n"]);return p=function(){return e},e}function m(){var e=Object(r.a)(["\n  padding: 0px 0px;\n"]);return m=function(){return e},e}var h=o.default.div(m()),g=Object(o.default)(a.b)(p(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet})),b=o.default.div(f()),v=o.default.div(l(),(function(e){return e.theme.breakpoints.tablet})),x=o.default.img(d()),j=o.default.div(u(),i.a.darkBlack),y=o.default.img.attrs((function(){return{src:c.a}}))(s())}}]);
//# sourceMappingURL=4.c9f8caad.chunk.js.map
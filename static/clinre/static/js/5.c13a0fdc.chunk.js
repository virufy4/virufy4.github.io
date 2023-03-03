(this.webpackJsonpclinre=this.webpackJsonpclinre||[]).push([[5,57],{199:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(6),o=t.n(r),a=t(200),i=t(189);function c(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return c=function(){return e},e}var u=t(188).default.div(c(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),s=o.a.memo((function(e){var n=e.invert,t=void 0!==n&&n,r=e.leftLabel,i=e.leftDisabled,c=e.leftHandler,s=e.rightLabel,d=e.rightDisabled,l=e.rightHandler;return o.a.createElement(u,null,o.a.createElement(a.a,{dark:t,disabled:i,onClick:c},r),s&&l&&o.a.createElement(a.a,{dark:!t,disabled:d,onClick:l},s))})),d=o.a.memo(s)},200:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(201),o=t(6),a=t.n(o),i=t(189),c=t(188),u=t(191);function s(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return s=function(){return e},e}var d=c.default.button(s(),(function(e){var n=e.dark,t=e.disabled?u.a.purple_50:u.a.purple;return n?"\n    background-color: ".concat(t,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),l=a.a.memo((function(e){var n=e.children,t=Object(r.a)(e,["children"]);return a.a.createElement(d,Object.assign({type:"button"},t),n)}))},248:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(235);function o(e,n){return new Promise((function(t){e.duration===1/0||r.isSafari&&!(r.isSafari&&e.duration>0)?(e.addEventListener("durationchange",(function(){n?e.remove():(e.pause(),e.volume=1,e.currentTime=0),t(e.duration)})),e.currentTime=86400,e.play()):t(e.duration)}))}},250:function(e,n,t){"use strict";t.r(n);var r=t(193),o=t(6),a=t.n(o),i=t(197),c=t.n(i),u=t(819),s=t(203),d=t(214),l=t(369),f=t(209),m=t(205),p=t.n(m),g=t(206),h=t(190),v=t(370),b=t.n(v),x=t(13),y=t(381),E=function(){var e=this,n=[];this.onmessage=function(t){"encode"===t.data[0]?function(e){for(var t=e.length,r=new Uint8Array(2*t*1),o=0;o<t;o+=1){var a=2*o*1,i=e[o];i>1?i=1:i<-1&&(i=-1),i*=32768,r[a]=i,r[a+1]=i>>8}n.push(r)}(t.data[1]):"dump"===t.data[0]?function(e){var t=n.length?n[0].length:0,r=n.length*t,o=new Uint8Array(44+r),a=new DataView(o.buffer);a.setUint32(0,1380533830,!1),a.setUint32(4,36+r,!0),a.setUint32(8,1463899717,!1),a.setUint32(12,1718449184,!1),a.setUint32(16,16,!0),a.setUint16(20,1,!0),a.setUint16(22,1,!0),a.setUint32(24,e,!0),a.setUint32(28,1*e*2,!0),a.setUint16(32,2,!0),a.setUint16(34,16,!0),a.setUint32(36,1684108385,!1),a.setUint32(40,r,!0);for(var i=0;i<n.length;i+=1)o.set(n[i],i*t+44);n=[];var c=[o.buffer];postMessage(c,[c[0]])}(t.data[1]):"close"===t.data[0]&&e.close()}},C=function(){var e=null,n=[];function t(e){var n=new Float32Array(e),t=new Int16Array(e.length);return function(e,n){for(var t=0;t<e.length;t+=1){var r=Math.max(-1,Math.min(1,e[t]));n[t]=r<0?32768*r:32767*r}}(n,t),t}onmessage=function(r){var o;"encode"===r.data[0]?function(r){for(var o=t(r),a=o.length,i=0;a>=0;i+=1152){var c=o.subarray(i,i+1152),u=e.encodeBuffer(c);n.push(u),a-=1152}}(r.data[1]):"dump"===r.data[0]?function(){var t=e.flush();t.length>0&&n.push(t),postMessage(n),n=[]}(r.data[1]):"init"===r.data[0]?(o=r.data[1],importScripts(o.baseUrl+"/workers/encoders/lame.min.js"),e=new lamejs.Mp3Encoder(1,o.sampleRate,128)):"close"===r.data[0]&&this.close()}},w=function(){var e;importScripts("".concat("https://virufy.org/clinre","/workers/encoders/libflac.dev.js"));var n=1,t=44100,r=5,o=16,a=1,i=0,c=[],u=[];function s(e,n){c.push(e),i+=e.byteLength}function d(){if(0!==(e=Flac.create_libflac_encoder(t,n,o,r,0))){var i=Flac.init_encoder_stream(e,s);a&=0==i,console.log("flac init     : ".concat(a)),console.log("status encoder: ".concat(i)),!0}else console.error("Error initializing the encoder.")}function l(t){for(var r=t.length,o=new Uint32Array(r),a=new DataView(o.buffer),i=0,c=0;c<r;c+=1)a.setInt32(i,32767*t[c],!0),i+=4;var u=Flac.FLAC__stream_encoder_process_interleaved(e,o,o.length/n);1!=u&&console.log("Error: encode_buffer_pcm_as_flac returned false. ".concat(u))}function f(e,n){var t=function(e,n){for(var t=new Uint8Array(n),r=0,o=e.length,a=0;a<o;a+=1){var i=e[a];t.set(i,r),r+=i.length}return t}(e,n);return new Blob([t],{type:"audio/flac"})}this.onmessage=function(s){if("init"===s.data[0])!function(e){var a=e;a||(a={bps:o,channels:n,samplerate:t,compression:r}),a.channels=a.channels?a.channels:n,a.samplerate=a.samplerate?a.samplerate:t,a.bps=a.bps?a.bps:o,a.compression=a.compression?a.compression:r,r=a.compression,o=a.bps,t=a.samplerate,n=a.channels,Flac.isReady()?d():Flac.onready=function(){setTimeout((function(){d()}),0)}}(s.data[1]);else if("encode"===s.data[0])!function(e){if(Flac.isReady()){if(u.length>0)for(var n=u.length,t=u.splice(0,n),r=0;r<n;++r)l(t[r]);l(e)}else u.push(e),console.info("buffered audio data for Flac encdoing")}(s.data[1]);else if("dump"===s.data[0]){var m;Flac.isReady()?(a&=Flac.FLAC__stream_encoder_finish(e),console.log("flac finish: ".concat(a)),m=f(c,i),Flac.FLAC__stream_encoder_delete(e)):console.error("Flac was not initialized: could not encode data!"),c.splice(0,c.length),i=0,u.splice(0,u.length),postMessage(m),!1}}},R=function e(n){var t=this;Object(y.a)(this,e),this.cleanup=function(){t.config.onRecording&&t.em.removeEventListener("recording",t.recordingFn),t.config.onAudioProcesss&&t.em.removeEventListener("onaudioprocess",t.onAudioProcessFn)},this.createWorker=function(e){var n=e.toString().replace(/^function\s*\(\)\s*{/,"").replace(/}$/,""),t=new Blob([n]);return new Worker(URL.createObjectURL(t))},this.startRecording=function(e){if("inactive"===t.state&&navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){if(t.audioCtx=new AudioContext({sampleRate:t.config.sampleRate}),t.micGainNode=t.audioCtx.createGain(),t.outputGainNode=t.audioCtx.createGain(),t.config.createDynamicsCompressorNode&&(t.dynamicsCompressorNode=t.audioCtx.createDynamicsCompressor()),t.config.createAnalyserNode&&(t.analyserNode=t.audioCtx.createAnalyser()),(t.config.forceScriptProcessor||t.config.broadcastAudioProcessEvents||!t.config.usingMediaRecorder)&&(t.processorNode=t.audioCtx.createScriptProcessor(t.config.processorBufferSize,1,1)),t.audioCtx.createMediaStreamDestination?t.destinationNode=t.audioCtx.createMediaStreamDestination():t.destinationNode=t.audioCtx.destination,!t.config.usingMediaRecorder){if("mp3"===t.config.manualEncoderId){t.encoderWorker=t.createWorker(C);t.encoderWorker.postMessage(["init",{baseUrl:"https://virufy.org/clinre",sampleRate:t.audioCtx.sampleRate}]),t.encoderMimeType="audio/mpeg"}else"flac"===t.config.manualEncoderId?(t.encoderWorker=t.createWorker(w),t.encoderWorker.postMessage(["init",{sampleRate:t.audioCtx.sampleRate}]),t.encoderMimeType="audio/flac"):(t.encoderWorker=t.createWorker(E),t.encoderMimeType="audio/wav");t.encoderWorker.addEventListener("message",(function(e){var n=new Event("dataavailable");"ogg"===t.config.manualEncoderId||"flac"===t.config.manualEncoderId?n.data=e.data:n.data=new Blob(e.data,{type:t.encoderMimeType}),t._onDataAvailable(n)}))}var n={audio:{echoCancellation:t.config.enableEchoCancellation}};return t.config.deviceId&&(n.audio.deviceId=t.config.deviceId),navigator.mediaDevices.getUserMedia(n).then((function(n){t._startRecordingWithStream(n,e)})).catch((function(e){console.log(e)}))}},this.setMicGain=function(e){t.config.micGain=e,t.audioCtx&&t.micGainNode&&t.micGainNode.gain.setValueAtTime(e,t.audioCtx.currentTime)},this._startRecordingWithStream=function(e,n){t.micAudioStream=e,t.inputStreamNode=t.audioCtx.createMediaStreamSource(t.micAudioStream),t.audioCtx=t.inputStreamNode.context,t.onGraphSetupWithInputStream&&t.onGraphSetupWithInputStream(t.inputStreamNode),t.inputStreamNode.connect(t.micGainNode),t.micGainNode.gain.setValueAtTime(t.config.micGain,t.audioCtx.currentTime);var r=t.micGainNode;t.dynamicsCompressorNode&&(t.micGainNode.connect(t.dynamicsCompressorNode),r=t.dynamicsCompressorNode),t.state="recording",t.processorNode?(r.connect(t.processorNode),t.processorNode.connect(t.outputGainNode),t.processorNode.onaudioprocess=function(e){return t._onAudioProcess(e)}):r.connect(t.outputGainNode),t.analyserNode&&r.connect(t.analyserNode),t.outputGainNode.connect(t.destinationNode),t.config.usingMediaRecorder?(t.mediaRecorder=new MediaRecorder(t.destinationNode.stream,{mimeType:t.encoderMimeType}),t.mediaRecorder.addEventListener("dataavailable",(function(e){return t._onDataAvailable(e)})),t.mediaRecorder.addEventListener("error",(function(e){return t._onError(e)})),t.mediaRecorder.start(n)):(t.outputGainNode.gain.setValueAtTime(0,t.audioCtx.currentTime),n&&(console.log("Time slicing without MediaRecorder is not yet supported. The resulting recording will not be playable."),t.slicing=setInterval((function(){"recording"===this.state&&this.encoderWorker.postMessage(["dump",this.context.sampleRate])}),n)))},this._onAudioProcess=function(e){t.config.broadcastAudioProcessEvents&&t.em.dispatchEvent(new CustomEvent("onaudioprocess",{detail:{inputBuffer:e.inputBuffer,outputBuffer:e.outputBuffer}})),t.config.usingMediaRecorder||"recording"===t.state&&(t.config.broadcastAudioProcessEvents?t.encoderWorker.postMessage(["encode",e.outputBuffer.getChannelData(0)]):t.encoderWorker.postMessage(["encode",e.inputBuffer.getChannelData(0)]))},this.stopRecording=function(){"inactive"!==t.state&&(t.config.usingMediaRecorder?(t.state="inactive",t.mediaRecorder.stop()):(t.state="inactive",t.encoderWorker.postMessage(["dump",t.audioCtx.sampleRate]),clearInterval(t.slicing)))},this._onDataAvailable=function(e){if(t.chunks.push(e.data),t.chunkType=e.data.type,"inactive"===t.state){var n=new Blob(t.chunks,{type:t.chunkType}),r=URL.createObjectURL(n),o={ts:(new Date).getTime(),blobUrl:r,mimeType:n.type,size:n.size};t.chunks=[],t.chunkType=null,t.destinationNode&&(t.destinationNode.disconnect(),t.destinationNode=null),t.outputGainNode&&(t.outputGainNode.disconnect(),t.outputGainNode=null),t.analyserNode&&(t.analyserNode.disconnect(),t.analyserNode=null),t.processorNode&&(t.processorNode.disconnect(),t.processorNode=null),t.encoderWorker&&(t.encoderWorker.postMessage(["close"]),t.encoderWorker=null),t.dynamicsCompressorNode&&(t.dynamicsCompressorNode.disconnect(),t.dynamicsCompressorNode=null),t.micGainNode&&(t.micGainNode.disconnect(),t.micGainNode=null),t.inputStreamNode&&(t.inputStreamNode.disconnect(),t.inputStreamNode=null),t.config.stopTracksAndCloseCtxWhenFinished&&(t.micAudioStream.getTracks().forEach((function(e){return e.stop()})),t.micAudioStream=null,t.audioCtx.close(),t.audioCtx=null),t.em.dispatchEvent(new CustomEvent("recording",{detail:{recording:o}}))}},this._onError=function(e){console.log("error",e),t.em.dispatchEvent(new Event("error"))},window.AudioContext=window.AudioContext||window.webkitAudioContext,this.em=document.createDocumentFragment(),this.state="inactive",this.chunks=[],this.chunkType="",this.encoderMimeType="audio/wav",this.config={broadcastAudioProcessEvents:void 0!==n.broadcastAudioProcessEvents&&n.broadcastAudioProcessEvents,createAnalyserNode:void 0!==n.createAnalyserNode&&n.createAnalyserNode,createDynamicsCompressorNode:void 0!==n.createDynamicsCompressorNode&&n.createDynamicsCompressorNode,forceScriptProcessor:void 0!==n.forceScriptProcessor&&n.forceScriptProcessor,manualEncoderId:void 0!==n.manualEncoderId?n.manualEncoderId:"wav",micGain:void 0!==n.micGain?n.micGain:1,processorBufferSize:void 0!==n.processorBufferSize?n.processorBufferSize:2048,stopTracksAndCloseCtxWhenFinished:void 0===n.stopTracksAndCloseCtxWhenFinished||n.stopTracksAndCloseCtxWhenFinished,usingMediaRecorder:void 0!==n.usingMediaRecorder?n.usingMediaRecorder:"undefined"!==typeof window.MediaRecorder,enableEchoCancellation:void 0===n.enableEchoCancellation||n.enableEchoCancellation,sampleRate:void 0!==n.sampleRate?n.sampleRate:44100,onRecording:n.onRecording,onAudioPress:n.onAudioPress},n.onRecording&&(this.recordingFn=function(e){return n.onRecording(e)},this.em.addEventListener("recording",this.recordingFn)),n.onAudioProcesss&&(this.onAudioProcessFn=function(e){return n.onAudioProcesss(e)},this.em.addEventListener("onaudioprocess",this.onAudioProcessFn))},k=t(284),S=t(248),N=t(377),j=t(809),A=t.n(j),O=t(314),M=t.n(O),T=t(189),B=t(188),U=t(191);function F(){var e=Object(T.a)(["\n  visibility: ",";\n"]);return F=function(){return e},e}function L(){var e=Object(T.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  display: flex; \n  margin-left: 20px;\n  margin-top:10px;\n"]);return L=function(){return e},e}function I(){var e=Object(T.a)(["\n  width: 70px;\n  height: 41px;\n  font-size: 1.25rem;\n  color: ",";\n  font-weight: bold;\n  font-family: 'Source Sans Pro';\n  border: 1px solid ",";\n  border-radius: 15px;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n  margin-bottom: 28px;\n\n  @media screen and (",") {\n    font-size: 1.75rem;\n    margin-top: 22px;\n  }\n"]);return I=function(){return e},e}function _(){var e=Object(T.a)(["\n  width: 15px;\n  height: 15px;\n"]);return _=function(){return e},e}function D(){var e=Object(T.a)(["\n  width: 27px;\n  height: 27px;\n"]);return D=function(){return e},e}function P(){var e=Object(T.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: opacity 0.25s;\n"]);return P=function(){return e},e}function G(){var e=Object(T.a)(["\n  background-color: ",";\n  width: 56px;\n  height: 56px;\n  position: relative;\n  outline: none !important;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  transition: background-color 0.25s;\n  opacity: ",";\n\n  @supports not (-webkit-touch-callout: none) {\n    /* CSS for other than iOS devices */\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: transparent;\n    z-index: 1;\n    border-radius: 50%;\n  }\n\n  @media screen and (",") {\n    width: 66px;\n    height: 66px;\n  }\n"]);return G=function(){return e},e}function z(){var e=Object(T.a)(["\n  font-size: 14px;\n  color: ",";\n  margin-top: 8px;\n  margin-bottom: 0px;\n"]);return z=function(){return e},e}function W(){var e=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return W=function(){return e},e}function V(){var e=Object(T.a)(["\n  display:flex;\n  justify-content: space-between;\n  width: 144px;\n  margin: auto;\n"]);return V=function(){return e},e}function H(){var e=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]);return H=function(){return e},e}var Y=B.default.div(H()),Z=B.default.div(V()),J=B.default.div(W()),$=B.default.p(z(),U.a.lightDarkGray),q=B.default.button(G(),U.a.purple,(function(e){return e.disabled||e.opacity?"0.5":"1"}),U.a.purple,(function(e){return e.theme.breakpoints.tablet})),K=B.default.img(P()),Q=Object(B.default)(K)(D()),X=Object(B.default)(K)(_()),ee=B.default.div(I(),U.a.purple,U.a.purple,(function(e){return e.theme.breakpoints.tablet})),ne=B.default.div(L(),U.a.red),te=B.default.p(F(),(function(e){return e.show?"flex":"hidden"})),re={usingMediaRecorder:!1,sampleRate:48e3,manualEncoderId:"wav",processorBufferSize:2048},oe=a.a.memo((function(e){var n=e.className,t=void 0===n?"":n,r=e.maxTimeInSeconds,o=void 0===r?30:r,i=e.minTimeInSeconds,c=void 0===i?5:i,s=e.onNewRecord,d=e.delay,l=void 0===d?500:d,m=e.recordingFile,v=e.isShortAudioCollection,y=Object(u.a)().t,E=a.a.useRef(),C=a.a.useRef(0),w=a.a.useRef(),j=a.a.useRef(),O=a.a.useRef(),T=a.a.useState(!0),B=Object(h.a)(T,2),U=B[0],F=B[1],L=a.a.useState(),I=Object(h.a)(L,2),_=I[0],D=I[1],P=a.a.useState(!1),G=Object(h.a)(P,2),z=G[0],W=G[1],V=a.a.useState(!1),H=Object(h.a)(V,2),K=H[0],oe=H[1],ae=a.a.useState(!1),ie=Object(h.a)(ae,2),ce=ie[0],ue=ie[1],se=a.a.useCallback((function(e){C.current+=1;for(var n=e.detail,t=n.inputBuffer,r=n.outputBuffer,o=0;o<r.numberOfChannels;o+=1)for(var a=t.getChannelData(o),i=r.getChannelData(o),c=0;c<t.length;c+=1)i[c]=a[c]}),[]),de=a.a.useCallback(function(){var e=Object(g.a)(p.a.mark((function e(n){var t,r,o,a,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.detail,r=t.recording,e.next=4,fetch(r.blobUrl).then((function(e){return e.blob()}));case 4:o=e.sent,a="Filename.".concat(re.manualEncoderId),i=k.a.blobToFile(o,a),c=k.a.sizeAsHuman(i.size,!0),s(i,c);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[s]);a.a.useEffect((function(){E.current=new R(Object(f.a)(Object(f.a)({},re),{},{sampleRate:v?16e3:re.sampleRate,onRecording:de,onAudioProcesss:se}));var e={audio:{echoCancellation:E.current.config.enableEchoCancellation}};if(navigator.mediaDevices.getUserMedia(e).then((function(){F(!0)})).catch((function(e){F(!1),x.a(e)})),m){var n=m;if(n.size){var t=new Audio(URL.createObjectURL(n));t.defaultMuted=!0,t.muted=!0,t.load();var r=function(){var e=Object(g.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.removeEventListener("loadedmetadata",r),Object(S.a)(t,!0).then((function(e){var n;null===(n=w.current)||void 0===n||n.setTime(1e3*e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.addEventListener("loadedmetadata",r)}}return function(){E.current&&E.current.cleanup()}}),[]);var le=a.a.useCallback((function(){E.current&&(C.current=0,E.current.startRecording().then((function(){var e;(D(!0),oe(!1),w.current)&&(w.current.reset(),null===(e=w.current)||void 0===e||e.setTime(0),w.current.start())})).catch((function(e){return console.error("ERROR",e)})))}),[]),fe=a.a.useCallback((function(){E.current&&(E.current.stopRecording(),D(!1),w.current&&(w.current.getTime()/1e3<c&&oe(!0),w.current.stop()))}),[c]),me=a.a.useCallback((function(e){return e<10?"0".concat(e):e}),[]),pe=function(e){"touches"in e||e.preventDefault()},ge=a.a.useCallback((function(e){e.target&&(e.target.addEventListener("touchend",pe,{passive:!1}),O.current=e.target),j.current=setTimeout((function(){W(!0),ue(!0),oe(!1)}),l)}),[l]),he=a.a.useCallback((function(){j.current&&clearTimeout(j.current),ce&&W(!1),ue(!1),O.current&&O.current.removeEventListener("touchend",pe)}),[ce]);return a.a.createElement(Y,{className:t},a.a.createElement(ne,null,!K&&a.a.createElement(te,{show:z},y(_?"recordingsIntroduction:releaseButtonStop":"recordingsIntroduction:releaseButtonStart")),a.a.createElement(N.a,{isOpen:K,modalTitle:"Oops.",onConfirm:le},y("recordingsIntroduction:shortRecording",{seconds:c}))),a.a.createElement(ee,null,a.a.createElement(b.a,{ref:w,startImmediately:!1,checkpoints:[{time:1e3*o,callback:fe}]},a.a.createElement(b.a.Minutes,null),":",a.a.createElement(b.a.Seconds,{formatValue:me}))),a.a.createElement(Z,null,a.a.createElement(J,null,a.a.createElement(q,{disabled:!U||_,onClick:le,onMouseDown:ge,onMouseUp:he,onTouchStart:ge,onTouchEnd:he,onMouseLeave:he},a.a.createElement(Q,{src:A.a,alt:"Start"})),a.a.createElement($,null,y("recordingsRecord:record"))),a.a.createElement(J,null,a.a.createElement(q,{disabled:!U||!_,onClick:fe,onMouseDown:ge,onMouseUp:he,onTouchStart:ge,onTouchEnd:he,onMouseLeave:he},a.a.createElement(X,{src:M.a,alt:"Stop"})),a.a.createElement($,null,y("recordingsRecord:recordStop")))))})),ae=t(199),ie=t(810),ce=t.n(ie),ue=t(315),se={recordYourBreath:5,recordYourSpeech:5,recordYourCough:3},de=l.a.object({recordingFile:l.a.mixed().required("ERROR.FILE_REQUIRED").validateAudioSize(5).when("$_currentLogic",(function(e,n){return n.validateAudioLength(se[e]||5)}))}).defined();n.default=a.a.memo((function(e){var n=e.onNext,t=e.onManualUpload,o=e.defaultValues,i=e.currentLogic,l=e.action,f=e.isShortAudioCollection,m=c()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,p=Object(s.e)({mode:"onChange",defaultValues:o,context:{_currentLogic:i},resolver:Object(d.a)(de)}),g=p.handleSubmit,h=p.control,v=p.getValues,b=p.formState,x=Object(u.a)().t,y=b.isValid,E=a.a.useRef(1);return a.a.createElement(a.a.Fragment,null,a.a.createElement(ue.MainContainer,null,a.a.createElement(ue.MicContainer,null,a.a.createElement(s.a,{control:h,name:"recordingFile",render:function(e){var n=e.onChange;return a.a.createElement(oe,{key:E.current,onNewRecord:n,recordingFile:null===o||void 0===o?void 0:o.recordingFile,minTimeInSeconds:se[i],isShortAudioCollection:f})}})),a.a.createElement(m,null,a.a.createElement(ae.a,{invert:!0,leftLabel:x("recordingsRecord:next"),leftDisabled:!y,leftHandler:g(n)}),a.a.createElement(ue.UploadContainer,{onClick:function(){l(Object(r.a)({},i,{recordingFile:v("recordingFile")||null,uploadedFile:null})),null===t||void 0===t||t()}},a.a.createElement(ue.UploadImage,{src:ce.a}),a.a.createElement(ue.UploadText,null,x("recordingsRecord:upload"))))))}))},284:function(e,n,t){"use strict";n.a={sizeAsHuman:function(e,n){var t=n?1e3:1024;if(Math.abs(e)<t)return"".concat(e," B");var r=n?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=-1;do{e/=t,++o}while(Math.abs(e)>=t&&o<r.length-1);return"".concat(e.toFixed(1)," ").concat(r[o])},blobToFile:function(e,n){var t=e;return t.lastModifiedDate=new Date,t.name=n,e}}},314:function(e,n,t){e.exports=t.p+"static/media/stop.c2f5fdba.svg"},315:function(e,n,t){"use strict";t.r(n),t.d(n,"MainContainer",(function(){return h})),t.d(n,"Text",(function(){return v})),t.d(n,"MicContainer",(function(){return b})),t.d(n,"UploadContainer",(function(){return x})),t.d(n,"UploadImage",(function(){return y})),t.d(n,"UploadText",(function(){return E})),t.d(n,"StopImg",(function(){return C}));var r=t(189),o=t(188),a=t(225),i=t(191),c=t(314),u=t.n(c);function s(){var e=Object(r.a)(["\n  display: inline;\n  height: 10px;\n  margin: 0px 2px 4px;\n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  cursor: pointer;\n  font-family: Source Sans Pro;\n  font-weight: bold;\n  font-size: 0.75rem;\n  line-height: 24px;\n  color: ",";\n"]);return d=function(){return e},e}function l(){var e=Object(r.a)(["\n  cursor: pointer;\n  width: 13px;\n  height: 12px;\n  margin-right: 7px;\n"]);return l=function(){return e},e}function f(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 20px 12px;\n  width: fit-content;\n  margin: 0 auto;\n\n  @media screen and (","){\n    padding: 22px;\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(r.a)([""]);return m=function(){return e},e}function p(){var e=Object(r.a)(["\n  color: ",";\n  margin-bottom: 2px;\n  text-align: left;\n\n  @media screen and (","){\n    max-width: 470px;\n    margin: 0 auto;\n    font-size: 16px;\n  }\n\n  @media screen and (","){\n    @media (orientation: portrait) {\n      margin-bottom: 248px;\n    }\n\n    @media (orientation: landscape) {\n      margin-bottom: 24px;\n    }\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(r.a)(["\n  padding: 40px 0px;\n"]);return g=function(){return e},e}var h=o.default.div(g()),v=Object(o.default)(a.a)(p(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet})),b=o.default.div(m()),x=o.default.div(f(),(function(e){return e.theme.breakpoints.tablet})),y=o.default.img(l()),E=o.default.div(d(),i.a.darkBlack),C=o.default.img.attrs((function(){return{src:u.a}}))(s())},369:function(e,n,t){"use strict";var r=t(205),o=t.n(r),a=t(206),i=t(215),c=t(248);i.addMethod(i.mixed,"validateAudioLength",(function(e){return this.test("fileDuration","ERROR.FILE_DURATION",function(){var n=Object(a.a)(o.a.mark((function n(t){var r,a,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=12;break}return r=t,(a=new Audio(URL.createObjectURL(r))).defaultMuted=!0,a.muted=!0,a.load(),n.next=8,new Promise((function(e){return a.addEventListener("loadedmetadata",e)}));case 8:return n.next=10,Object(c.a)(a);case 10:return i=n.sent,n.abrupt("return",i>=e);case 12:return n.abrupt("return",!!t);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})),i.addMethod(i.mixed,"validateAudioSize",(function(e){return this.test("fileSize","ERROR.FILE_SIZE",(function(n){return n?n.size<=Math.pow(1024,3)*e:!!n}))})),n.a=i},377:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t(201),o=t(6),a=t.n(o),i=t(443),c=t.n(i),u=t(819),s=t(200),d=t(189),l=t(188);function f(){var e=Object(d.a)(["\n  font-family: 'Source Sans Pro';\n  text-align: center;\n  line-height: 25px;\n  font-size: 18px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n"]);return f=function(){return e},e}function m(){var e=Object(d.a)(["\n  font-family: 'Biko';\n  font-size: 30px;\n  line-height: 30px;\n  margin-bottom: 10px;\n  font-weight: 600;\n"]);return m=function(){return e},e}function p(){var e=Object(d.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (",") {\n    margin: auto;\n"]);return p=function(){return e},e}var g=l.default.div(p(),(function(e){return e.theme.breakpoints.tablet})),h=l.default.div(m()),v=l.default.div(f());c.a.setAppElement("#root");var b=a.a.memo((function(e){var n=e.modalTitle,t=e.children,o=e.onConfirm,i=Object(r.a)(e,["modalTitle","children","onConfirm"]),d=Object(u.a)().t;return a.a.createElement(c.a,Object.assign({},i,{style:{content:{height:"281px",maxWidth:"348px",margin:"auto",borderRadius:"10px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}}),a.a.createElement(g,{className:"ModalBody"},a.a.createElement(h,null,n),a.a.createElement(v,null,t),a.a.createElement(s.a,{onClick:o,dark:!0},d("recordingsIntroduction:retryButton","Retry"))))}))},809:function(e,n,t){e.exports=t.p+"static/media/start.1023f927.svg"},810:function(e,n,t){e.exports=t.p+"static/media/upload.e35eb772.svg"}}]);
//# sourceMappingURL=5.c13a0fdc.chunk.js.map
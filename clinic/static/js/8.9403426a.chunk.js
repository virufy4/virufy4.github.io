(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[8,68],{217:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(9),a=t.n(r),o=t(233),i=t(205);function c(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return c=function(){return e},e}var u=t(204).default.div(c(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),s=a.a.memo((function(e){var n=e.invert,t=void 0!==n&&n,r=e.leftLabel,i=e.leftDisabled,c=e.leftHandler,s=e.rightLabel,d=e.rightDisabled,l=e.rightHandler;return a.a.createElement(u,null,a.a.createElement(o.a,{dark:t,disabled:i,onClick:c},r),s&&l&&a.a.createElement(o.a,{dark:!t,disabled:d,onClick:l},s))})),d=a.a.memo(s)},233:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(239),a=t(9),o=t.n(a),i=t(205),c=t(204),u=t(213);function s(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return s=function(){return e},e}var d=c.default.button(s(),(function(e){var n=e.dark,t=e.disabled?u.a.purple_50:u.a.purple;return n?"\n    background-color: ".concat(t,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),l=o.a.memo((function(e){var n=e.children,t=Object(r.a)(e,["children"]);return o.a.createElement(d,Object.assign({type:"button"},t),n)}))},270:function(e,n,t){"use strict";t.r(n);var r=t(216),a=t(9),o=t.n(a),i=t(215),c=t.n(i),u=t(850),s=t(214),d=t(231),l=t(397),f=t(234),m=t(211),p=t.n(m),g=t(212),h=t(206),v=t(810),b=t.n(v),x=t(17),y=t(237),E=t(407),C=function(){var e=this,n=[];this.onmessage=function(t){"encode"===t.data[0]?function(e){for(var t=e.length,r=new Uint8Array(2*t*1),a=0;a<t;a+=1){var o=2*a*1,i=e[a];i>1?i=1:i<-1&&(i=-1),i*=32768,r[o]=i,r[o+1]=i>>8}n.push(r)}(t.data[1]):"dump"===t.data[0]?function(e){var t=n.length?n[0].length:0,r=n.length*t,a=new Uint8Array(44+r),o=new DataView(a.buffer);o.setUint32(0,1380533830,!1),o.setUint32(4,36+r,!0),o.setUint32(8,1463899717,!1),o.setUint32(12,1718449184,!1),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,1,!0),o.setUint32(24,e,!0),o.setUint32(28,1*e*2,!0),o.setUint16(32,2,!0),o.setUint16(34,16,!0),o.setUint32(36,1684108385,!1),o.setUint32(40,r,!0);for(var i=0;i<n.length;i+=1)a.set(n[i],i*t+44);n=[];var c=[a.buffer];postMessage(c,[c[0]])}(t.data[1]):"close"===t.data[0]&&e.close()}},w=function(){var e=null,n=[];function t(e){var n=new Float32Array(e),t=new Int16Array(e.length);return function(e,n){for(var t=0;t<e.length;t+=1){var r=Math.max(-1,Math.min(1,e[t]));n[t]=r<0?32768*r:32767*r}}(n,t),t}onmessage=function(r){var a;"encode"===r.data[0]?function(r){for(var a=t(r),o=a.length,i=0;o>=0;i+=1152){var c=a.subarray(i,i+1152),u=e.encodeBuffer(c);n.push(u),o-=1152}}(r.data[1]):"dump"===r.data[0]?function(){var t=e.flush();t.length>0&&n.push(t),postMessage(n),n=[]}(r.data[1]):"init"===r.data[0]?(a=r.data[1],importScripts(a.baseUrl+"/workers/encoders/lame.min.js"),e=new lamejs.Mp3Encoder(1,a.sampleRate,128)):"close"===r.data[0]&&this.close()}},R=function(){var e;importScripts("".concat("https://virufy.org/clinic","/workers/encoders/libflac.dev.js"));var n=1,t=44100,r=5,a=16,o=1,i=0,c=[],u=[];function s(e,n){c.push(e),i+=e.byteLength}function d(){if(0!==(e=Flac.create_libflac_encoder(t,n,a,r,0))){var i=Flac.init_encoder_stream(e,s);o&=0==i,console.log("flac init     : ".concat(o)),console.log("status encoder: ".concat(i)),!0}else console.error("Error initializing the encoder.")}function l(t){for(var r=t.length,a=new Uint32Array(r),o=new DataView(a.buffer),i=0,c=0;c<r;c+=1)o.setInt32(i,32767*t[c],!0),i+=4;var u=Flac.FLAC__stream_encoder_process_interleaved(e,a,a.length/n);1!=u&&console.log("Error: encode_buffer_pcm_as_flac returned false. ".concat(u))}function f(e,n){var t=function(e,n){for(var t=new Uint8Array(n),r=0,a=e.length,o=0;o<a;o+=1){var i=e[o];t.set(i,r),r+=i.length}return t}(e,n);return new Blob([t],{type:"audio/flac"})}this.onmessage=function(s){if("init"===s.data[0])!function(e){var o=e;o||(o={bps:a,channels:n,samplerate:t,compression:r}),o.channels=o.channels?o.channels:n,o.samplerate=o.samplerate?o.samplerate:t,o.bps=o.bps?o.bps:a,o.compression=o.compression?o.compression:r,r=o.compression,a=o.bps,t=o.samplerate,n=o.channels,Flac.isReady()?d():Flac.onready=function(){setTimeout((function(){d()}),0)}}(s.data[1]);else if("encode"===s.data[0])!function(e){if(Flac.isReady()){if(u.length>0)for(var n=u.length,t=u.splice(0,n),r=0;r<n;++r)l(t[r]);l(e)}else u.push(e),console.info("buffered audio data for Flac encdoing")}(s.data[1]);else if("dump"===s.data[0]){var m;Flac.isReady()?(o&=Flac.FLAC__stream_encoder_finish(e),console.log("flac finish: ".concat(o)),m=f(c,i),Flac.FLAC__stream_encoder_delete(e)):console.error("Flac was not initialized: could not encode data!"),c.splice(0,c.length),i=0,u.splice(0,u.length),postMessage(m),!1}}},k=function e(n){var t=this;Object(E.a)(this,e),this.cleanup=function(){t.config.onRecording&&t.em.removeEventListener("recording",t.recordingFn),t.config.onAudioProcesss&&t.em.removeEventListener("onaudioprocess",t.onAudioProcessFn)},this.createWorker=function(e){var n=e.toString().replace(/^function\s*\(\)\s*{/,"").replace(/}$/,""),t=new Blob([n]);return new Worker(URL.createObjectURL(t))},this.startRecording=function(e){if("inactive"===t.state&&navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){if(t.audioCtx=new AudioContext({sampleRate:t.config.sampleRate}),t.micGainNode=t.audioCtx.createGain(),t.outputGainNode=t.audioCtx.createGain(),t.config.createDynamicsCompressorNode&&(t.dynamicsCompressorNode=t.audioCtx.createDynamicsCompressor()),t.config.createAnalyserNode&&(t.analyserNode=t.audioCtx.createAnalyser()),(t.config.forceScriptProcessor||t.config.broadcastAudioProcessEvents||!t.config.usingMediaRecorder)&&(t.processorNode=t.audioCtx.createScriptProcessor(t.config.processorBufferSize,1,1)),t.audioCtx.createMediaStreamDestination?t.destinationNode=t.audioCtx.createMediaStreamDestination():t.destinationNode=t.audioCtx.destination,!t.config.usingMediaRecorder){if("mp3"===t.config.manualEncoderId){t.encoderWorker=t.createWorker(w);t.encoderWorker.postMessage(["init",{baseUrl:"https://virufy.org/clinic",sampleRate:t.audioCtx.sampleRate}]),t.encoderMimeType="audio/mpeg"}else"flac"===t.config.manualEncoderId?(t.encoderWorker=t.createWorker(R),t.encoderWorker.postMessage(["init",{sampleRate:t.audioCtx.sampleRate}]),t.encoderMimeType="audio/flac"):(t.encoderWorker=t.createWorker(C),t.encoderMimeType="audio/wav");t.encoderWorker.addEventListener("message",(function(e){var n=new Event("dataavailable");"ogg"===t.config.manualEncoderId||"flac"===t.config.manualEncoderId?n.data=e.data:n.data=new Blob(e.data,{type:t.encoderMimeType}),t._onDataAvailable(n)}))}var n={audio:{echoCancellation:t.config.enableEchoCancellation}};return t.config.deviceId&&(n.audio.deviceId=t.config.deviceId),navigator.mediaDevices.getUserMedia(n).then((function(n){t._startRecordingWithStream(n,e)})).catch((function(e){console.log(e)}))}},this.setMicGain=function(e){t.config.micGain=e,t.audioCtx&&t.micGainNode&&t.micGainNode.gain.setValueAtTime(e,t.audioCtx.currentTime)},this._startRecordingWithStream=function(e,n){t.micAudioStream=e,t.inputStreamNode=t.audioCtx.createMediaStreamSource(t.micAudioStream),t.audioCtx=t.inputStreamNode.context,t.onGraphSetupWithInputStream&&t.onGraphSetupWithInputStream(t.inputStreamNode),t.inputStreamNode.connect(t.micGainNode),t.micGainNode.gain.setValueAtTime(t.config.micGain,t.audioCtx.currentTime);var r=t.micGainNode;t.dynamicsCompressorNode&&(t.micGainNode.connect(t.dynamicsCompressorNode),r=t.dynamicsCompressorNode),t.state="recording",t.processorNode?(r.connect(t.processorNode),t.processorNode.connect(t.outputGainNode),t.processorNode.onaudioprocess=function(e){return t._onAudioProcess(e)}):r.connect(t.outputGainNode),t.analyserNode&&r.connect(t.analyserNode),t.outputGainNode.connect(t.destinationNode),t.config.usingMediaRecorder?(t.mediaRecorder=new MediaRecorder(t.destinationNode.stream,{mimeType:t.encoderMimeType}),t.mediaRecorder.addEventListener("dataavailable",(function(e){return t._onDataAvailable(e)})),t.mediaRecorder.addEventListener("error",(function(e){return t._onError(e)})),t.mediaRecorder.start(n)):(t.outputGainNode.gain.setValueAtTime(0,t.audioCtx.currentTime),n&&(console.log("Time slicing without MediaRecorder is not yet supported. The resulting recording will not be playable."),t.slicing=setInterval((function(){"recording"===this.state&&this.encoderWorker.postMessage(["dump",this.context.sampleRate])}),n)))},this._onAudioProcess=function(e){t.config.broadcastAudioProcessEvents&&t.em.dispatchEvent(new CustomEvent("onaudioprocess",{detail:{inputBuffer:e.inputBuffer,outputBuffer:e.outputBuffer}})),t.config.usingMediaRecorder||"recording"===t.state&&(t.config.broadcastAudioProcessEvents?t.encoderWorker.postMessage(["encode",e.outputBuffer.getChannelData(0)]):t.encoderWorker.postMessage(["encode",e.inputBuffer.getChannelData(0)]))},this.stopRecording=function(){"inactive"!==t.state&&(t.config.usingMediaRecorder?(t.state="inactive",t.mediaRecorder.stop()):(t.state="inactive",t.encoderWorker.postMessage(["dump",t.audioCtx.sampleRate]),clearInterval(t.slicing)))},this._onDataAvailable=function(e){if(t.chunks.push(e.data),t.chunkType=e.data.type,"inactive"===t.state){var n=new Blob(t.chunks,{type:t.chunkType}),r=URL.createObjectURL(n),a={ts:(new Date).getTime(),blobUrl:r,mimeType:n.type,size:n.size};t.chunks=[],t.chunkType=null,t.destinationNode&&(t.destinationNode.disconnect(),t.destinationNode=null),t.outputGainNode&&(t.outputGainNode.disconnect(),t.outputGainNode=null),t.analyserNode&&(t.analyserNode.disconnect(),t.analyserNode=null),t.processorNode&&(t.processorNode.disconnect(),t.processorNode=null),t.encoderWorker&&(t.encoderWorker.postMessage(["close"]),t.encoderWorker=null),t.dynamicsCompressorNode&&(t.dynamicsCompressorNode.disconnect(),t.dynamicsCompressorNode=null),t.micGainNode&&(t.micGainNode.disconnect(),t.micGainNode=null),t.inputStreamNode&&(t.inputStreamNode.disconnect(),t.inputStreamNode=null),t.config.stopTracksAndCloseCtxWhenFinished&&(t.micAudioStream.getTracks().forEach((function(e){return e.stop()})),t.micAudioStream=null,t.audioCtx.close(),t.audioCtx=null),t.em.dispatchEvent(new CustomEvent("recording",{detail:{recording:a}}))}},this._onError=function(e){console.log("error",e),t.em.dispatchEvent(new Event("error"))},window.AudioContext=window.AudioContext||window.webkitAudioContext,this.em=document.createDocumentFragment(),this.state="inactive",this.chunks=[],this.chunkType="",this.encoderMimeType="audio/wav",this.config={broadcastAudioProcessEvents:void 0!==n.broadcastAudioProcessEvents&&n.broadcastAudioProcessEvents,createAnalyserNode:void 0!==n.createAnalyserNode&&n.createAnalyserNode,createDynamicsCompressorNode:void 0!==n.createDynamicsCompressorNode&&n.createDynamicsCompressorNode,forceScriptProcessor:void 0!==n.forceScriptProcessor&&n.forceScriptProcessor,manualEncoderId:void 0!==n.manualEncoderId?n.manualEncoderId:"wav",micGain:void 0!==n.micGain?n.micGain:1,processorBufferSize:void 0!==n.processorBufferSize?n.processorBufferSize:2048,stopTracksAndCloseCtxWhenFinished:void 0===n.stopTracksAndCloseCtxWhenFinished||n.stopTracksAndCloseCtxWhenFinished,usingMediaRecorder:void 0!==n.usingMediaRecorder?n.usingMediaRecorder:"undefined"!==typeof window.MediaRecorder,enableEchoCancellation:void 0===n.enableEchoCancellation||n.enableEchoCancellation,sampleRate:void 0!==n.sampleRate?n.sampleRate:44100,onRecording:n.onRecording,onAudioPress:n.onAudioPress},n.onRecording&&(this.recordingFn=function(e){return n.onRecording(e)},this.em.addEventListener("recording",this.recordingFn)),n.onAudioProcesss&&(this.onAudioProcessFn=function(e){return n.onAudioProcesss(e)},this.em.addEventListener("onaudioprocess",this.onAudioProcessFn))},S=t(399),N=t(281),O=t(402),j=t(823),A=t.n(j),M=t(337),T=t.n(M),B=t(205),U=t(204),F=t(213);function I(){var e=Object(B.a)(["\n  visibility: ",";\n"]);return I=function(){return e},e}function L(){var e=Object(B.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  display: flex; \n  margin-left: 20px;\n  margin-top:10px;\n"]);return L=function(){return e},e}function _(){var e=Object(B.a)(["\n  width: 70px;\n  height: 41px;\n  font-size: 1.25rem;\n  color: ",";\n  font-weight: bold;\n  font-family: 'Source Sans Pro';\n  border: 1px solid ",";\n  border-radius: 15px;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n  margin-bottom: 28px;\n\n  @media screen and (",") {\n    font-size: 1.75rem;\n    margin-top: 22px;\n  }\n"]);return _=function(){return e},e}function D(){var e=Object(B.a)(["\n  width: 15px;\n  height: 15px;\n"]);return D=function(){return e},e}function P(){var e=Object(B.a)(["\n  width: 27px;\n  height: 27px;\n"]);return P=function(){return e},e}function G(){var e=Object(B.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: opacity 0.25s;\n"]);return G=function(){return e},e}function z(){var e=Object(B.a)(["\n  background-color: ",";\n  width: 56px;\n  height: 56px;\n  position: relative;\n  outline: none !important;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  transition: background-color 0.25s;\n  opacity: ",";\n\n  @supports not (-webkit-touch-callout: none) {\n    /* CSS for other than iOS devices */\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: transparent;\n    z-index: 1;\n    border-radius: 50%;\n  }\n\n  @media screen and (",") {\n    width: 66px;\n    height: 66px;\n  }\n"]);return z=function(){return e},e}function W(){var e=Object(B.a)(["\n  font-size: 14px;\n  color: ",";\n  margin-top: 8px;\n  margin-bottom: 0px;\n"]);return W=function(){return e},e}function V(){var e=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return V=function(){return e},e}function H(){var e=Object(B.a)(["\n  display:flex;\n  justify-content: space-between;\n  width: 144px;\n  margin: auto;\n"]);return H=function(){return e},e}function Y(){var e=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]);return Y=function(){return e},e}var Z=U.default.div(Y()),J=U.default.div(H()),$=U.default.div(V()),q=U.default.p(W(),F.a.lightDarkGray),K=U.default.button(z(),F.a.purple,(function(e){return e.disabled||e.opacity?"0.5":"1"}),F.a.purple,(function(e){return e.theme.breakpoints.tablet})),Q=U.default.img(G()),X=Object(U.default)(Q)(P()),ee=Object(U.default)(Q)(D()),ne=U.default.div(_(),F.a.purple,F.a.purple,(function(e){return e.theme.breakpoints.tablet})),te=U.default.div(L(),F.a.red),re=U.default.p(I(),(function(e){return e.show?"flex":"hidden"})),ae={usingMediaRecorder:!1,sampleRate:48e3,manualEncoderId:y.isSafari||y.isIOS?"wav":"flac",processorBufferSize:y.isSafari||y.isIOS?2048:4096},oe=o.a.memo((function(e){var n=e.className,t=void 0===n?"":n,r=e.maxTimeInSeconds,a=void 0===r?30:r,i=e.minTimeInSeconds,c=void 0===i?5:i,s=e.onNewRecord,d=e.delay,l=void 0===d?500:d,m=e.recordingFile,v=e.isShortAudioCollection,y=Object(u.a)().t,E=o.a.useRef(),C=o.a.useRef(0),w=o.a.useRef(),R=o.a.useRef(),j=o.a.useRef(),M=o.a.useState(!0),B=Object(h.a)(M,2),U=B[0],F=B[1],I=o.a.useState(),L=Object(h.a)(I,2),_=L[0],D=L[1],P=o.a.useState(!1),G=Object(h.a)(P,2),z=G[0],W=G[1],V=o.a.useState(!1),H=Object(h.a)(V,2),Y=H[0],Q=H[1],oe=o.a.useState(!1),ie=Object(h.a)(oe,2),ce=ie[0],ue=ie[1],se=o.a.useCallback((function(e){C.current+=1;for(var n=e.detail,t=n.inputBuffer,r=n.outputBuffer,a=0;a<r.numberOfChannels;a+=1)for(var o=t.getChannelData(a),i=r.getChannelData(a),c=0;c<t.length;c+=1)i[c]=o[c]}),[]),de=o.a.useCallback(function(){var e=Object(g.a)(p.a.mark((function e(n){var t,r,a,o,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.detail,r=t.recording,e.next=4,fetch(r.blobUrl).then((function(e){return e.blob()}));case 4:a=e.sent,o="Filename.".concat(ae.manualEncoderId),i=S.a.blobToFile(a,o),c=S.a.sizeAsHuman(i.size,!0),s(i,c);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[s]);o.a.useEffect((function(){E.current=new k(Object(f.a)(Object(f.a)({},ae),{},{sampleRate:v?16e3:ae.sampleRate,onRecording:de,onAudioProcesss:se}));var e={audio:{echoCancellation:E.current.config.enableEchoCancellation}};if(navigator.mediaDevices.getUserMedia(e).then((function(){F(!0)})).catch((function(e){F(!1),x.a(e)})),m){var n=m;if(n.size){var t=new Audio(URL.createObjectURL(n));t.defaultMuted=!0,t.muted=!0,t.load();var r=function(){var e=Object(g.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.removeEventListener("loadedmetadata",r),Object(N.a)(t).then((function(e){var n;null===(n=w.current)||void 0===n||n.setTime(1e3*e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.addEventListener("loadedmetadata",r)}}return function(){E.current&&E.current.cleanup()}}),[]);var le=o.a.useCallback((function(){E.current&&(C.current=0,E.current.startRecording().then((function(){var e;(D(!0),Q(!1),w.current)&&(w.current.reset(),null===(e=w.current)||void 0===e||e.setTime(0),w.current.start())})).catch((function(e){return console.error("ERROR",e)})))}),[]),fe=o.a.useCallback((function(){E.current&&(E.current.stopRecording(),D(!1),w.current&&(w.current.getTime()/1e3<c&&Q(!0),w.current.stop()))}),[c]),me=o.a.useCallback((function(e){return e<10?"0".concat(e):e}),[]),pe=function(e){"touches"in e||e.preventDefault()},ge=o.a.useCallback((function(e){e.target&&(e.target.addEventListener("touchend",pe,{passive:!1}),j.current=e.target),R.current=setTimeout((function(){W(!0),ue(!0),Q(!1)}),l)}),[l]),he=o.a.useCallback((function(){R.current&&clearTimeout(R.current),ce&&W(!1),ue(!1),j.current&&j.current.removeEventListener("touchend",pe)}),[ce]);return o.a.createElement(Z,{className:t},o.a.createElement(te,null,!Y&&o.a.createElement(re,{show:z},y(_?"recordingsIntroduction:releaseButtonStop":"recordingsIntroduction:releaseButtonStart")),o.a.createElement(O.a,{isOpen:Y,modalTitle:"Oops.",onConfirm:le},y("recordingsIntroduction:shortRecording",{seconds:c}))),o.a.createElement(ne,null,o.a.createElement(b.a,{ref:w,startImmediately:!1,checkpoints:[{time:1e3*a,callback:fe}]},o.a.createElement(b.a.Minutes,null),":",o.a.createElement(b.a.Seconds,{formatValue:me}))),o.a.createElement(J,null,o.a.createElement($,null,o.a.createElement(K,{disabled:!U||_,onClick:le,onMouseDown:ge,onMouseUp:he,onTouchStart:ge,onTouchEnd:he,onMouseLeave:he},o.a.createElement(X,{src:A.a,alt:"Start"})),o.a.createElement(q,null,y("recordingsRecord:record"))),o.a.createElement($,null,o.a.createElement(K,{disabled:!U||!_,onClick:fe,onMouseDown:ge,onMouseUp:he,onTouchStart:ge,onTouchEnd:he,onMouseLeave:he},o.a.createElement(ee,{src:T.a,alt:"Stop"})),o.a.createElement(q,null,y("recordingsRecord:recordStop")))))})),ie=t(217),ce=t(824),ue=t.n(ce),se=t(338),de={recordYourBreath:5,recordYourSpeech:5,recordYourCough:3},le=l.a.object({recordingFile:l.a.mixed().required("ERROR.FILE_REQUIRED").validateAudioSize(5).when("$_currentLogic",(function(e,n){return n.validateAudioLength(de[e]||5)}))}).defined();n.default=o.a.memo((function(e){var n=e.onNext,t=e.onManualUpload,a=e.defaultValues,i=e.currentLogic,l=e.action,f=e.isShortAudioCollection,m=c()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,p=Object(s.e)({mode:"onChange",defaultValues:a,context:{_currentLogic:i},resolver:Object(d.a)(le)}),g=p.handleSubmit,h=p.control,v=p.getValues,b=p.formState,x=Object(u.a)().t,y=b.isValid,E=o.a.useRef(1);return o.a.createElement(o.a.Fragment,null,o.a.createElement(se.MainContainer,null,o.a.createElement(se.MicContainer,null,o.a.createElement(s.a,{control:h,name:"recordingFile",render:function(e){var n=e.onChange;return o.a.createElement(oe,{key:E.current,onNewRecord:n,recordingFile:null===a||void 0===a?void 0:a.recordingFile,minTimeInSeconds:de[i],isShortAudioCollection:f})}})),o.a.createElement(m,null,o.a.createElement(ie.a,{invert:!0,leftLabel:x("recordingsRecord:next"),leftDisabled:!y,leftHandler:g(n)}),o.a.createElement(se.UploadContainer,{onClick:function(){l(Object(r.a)({},i,{recordingFile:v("recordingFile")||null,uploadedFile:null})),null===t||void 0===t||t()}},o.a.createElement(se.UploadImage,{src:ue.a}),o.a.createElement(se.UploadText,null,x("recordingsRecord:upload"))))))}))},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(237);function a(e){return new Promise((function(n){e.duration===1/0||r.isSafari&&!(r.isSafari&&e.duration>0)?(e.addEventListener("durationchange",(function(){e.remove(),n(e.duration)})),e.currentTime=86400,e.play()):n(e.duration)}))}},337:function(e,n,t){e.exports=t.p+"static/media/stop.c2f5fdba.svg"},338:function(e,n,t){"use strict";t.r(n),t.d(n,"MainContainer",(function(){return h})),t.d(n,"Text",(function(){return v})),t.d(n,"MicContainer",(function(){return b})),t.d(n,"UploadContainer",(function(){return x})),t.d(n,"UploadImage",(function(){return y})),t.d(n,"UploadText",(function(){return E})),t.d(n,"StopImg",(function(){return C}));var r=t(205),a=t(204),o=t(248),i=t(213),c=t(337),u=t.n(c);function s(){var e=Object(r.a)(["\n  display: inline;\n  height: 10px;\n  margin: 0px 2px 4px;\n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  cursor: pointer;\n  font-family: Source Sans Pro;\n  font-weight: bold;\n  font-size: 0.75rem;\n  line-height: 24px;\n  color: ",";\n"]);return d=function(){return e},e}function l(){var e=Object(r.a)(["\n  cursor: pointer;\n  width: 13px;\n  height: 12px;\n  margin-right: 7px;\n"]);return l=function(){return e},e}function f(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 20px 12px;\n  width: fit-content;\n  margin: 0 auto;\n\n  @media screen and (","){\n    padding: 22px;\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(r.a)([""]);return m=function(){return e},e}function p(){var e=Object(r.a)(["\n  color: ",";\n  margin-bottom: 2px;\n  text-align: left;\n\n  @media screen and (","){\n    max-width: 470px;\n    margin: 0 auto;\n    font-size: 16px;\n  }\n\n  @media screen and (","){\n    @media (orientation: portrait) {\n      margin-bottom: 248px;\n    }\n\n    @media (orientation: landscape) {\n      margin-bottom: 24px;\n    }\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(r.a)(["\n  padding: 40px 0px;\n"]);return g=function(){return e},e}var h=a.default.div(g()),v=Object(a.default)(o.a)(p(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet})),b=a.default.div(m()),x=a.default.div(f(),(function(e){return e.theme.breakpoints.tablet})),y=a.default.img(l()),E=a.default.div(d(),i.a.darkBlack),C=a.default.img.attrs((function(){return{src:u.a}}))(s())},397:function(e,n,t){"use strict";var r=t(211),a=t.n(r),o=t(212),i=t(232),c=t(281);i.addMethod(i.mixed,"validateAudioLength",(function(e){return this.test("fileDuration","ERROR.FILE_DURATION",function(){var n=Object(o.a)(a.a.mark((function n(t){var r,o,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=12;break}return r=t,(o=new Audio(URL.createObjectURL(r))).defaultMuted=!0,o.muted=!0,o.load(),n.next=8,new Promise((function(e){return o.addEventListener("loadedmetadata",e)}));case 8:return n.next=10,Object(c.a)(o);case 10:return i=n.sent,n.abrupt("return",i>=e);case 12:return n.abrupt("return",!!t);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})),i.addMethod(i.mixed,"validateAudioSize",(function(e){return this.test("fileSize","ERROR.FILE_SIZE",(function(n){return n?n.size<=Math.pow(1024,3)*e:!!n}))})),n.a=i},399:function(e,n,t){"use strict";n.a={sizeAsHuman:function(e,n){var t=n?1e3:1024;if(Math.abs(e)<t)return"".concat(e," B");var r=n?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1;do{e/=t,++a}while(Math.abs(e)>=t&&a<r.length-1);return"".concat(e.toFixed(1)," ").concat(r[a])},blobToFile:function(e,n){var t=e;return t.lastModifiedDate=new Date,t.name=n,e}}},402:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t(239),a=t(9),o=t.n(a),i=t(336),c=t.n(i),u=t(850),s=t(233),d=t(205),l=t(204);function f(){var e=Object(d.a)(["\n  font-family: 'Source Sans Pro';\n  text-align: center;\n  line-height: 25px;\n  font-size: 18px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n"]);return f=function(){return e},e}function m(){var e=Object(d.a)(["\n  font-family: 'Biko';\n  font-size: 30px;\n  line-height: 30px;\n  margin-bottom: 10px;\n  font-weight: 600;\n"]);return m=function(){return e},e}function p(){var e=Object(d.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (",") {\n    margin: auto;\n"]);return p=function(){return e},e}var g=l.default.div(p(),(function(e){return e.theme.breakpoints.tablet})),h=l.default.div(m()),v=l.default.div(f());c.a.setAppElement("#root");var b=o.a.memo((function(e){var n=e.modalTitle,t=e.children,a=e.onConfirm,i=Object(r.a)(e,["modalTitle","children","onConfirm"]),d=Object(u.a)().t;return o.a.createElement(c.a,Object.assign({},i,{style:{content:{height:"281px",maxWidth:"348px",margin:"auto",borderRadius:"10px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}}),o.a.createElement(g,{className:"ModalBody"},o.a.createElement(h,null,n),o.a.createElement(v,null,t),o.a.createElement(s.a,{onClick:a,dark:!0},d("recordingsIntroduction:retryButton","Retry"))))}))},823:function(e,n,t){e.exports=t.p+"static/media/start.1023f927.svg"},824:function(e,n,t){e.exports=t.p+"static/media/upload.e35eb772.svg"}}]);
//# sourceMappingURL=8.9403426a.chunk.js.map
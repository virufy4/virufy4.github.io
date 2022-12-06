(this.webpackJsonppredict=this.webpackJsonppredict||[]).push([[13,22],{179:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i=["ms","s","m","h","d"],n=i.findIndex((function(t){return t===e})),r=[1e3,60,60,24,1],s=[1,1e3,6e4,36e5,864e5];return i.reduce((function(e,i,o){return e[i]=o>n?0:o===n?Math.floor(t/s[o]):Math.floor(t/s[o])%r[o],e}),{ms:0,s:0,m:0,h:0,d:0})}},191:function(t,e,i){"use strict";i.r(e);var n=i(182);i.d(e,"default",(function(){return n.default}))},194:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(179)),s=n(i(232)),o=n(i(233)),u=function(){function t(t){var e=t.initialTime,i=t.direction,n=t.timeToUpdate,r=t.lastUnit,u=t.checkpoints,a=t.onChange;this.internalTime=s.default(),this.initialTime=e,this.time=e,this.direction=i,this.timeToUpdate=n,this.lastUnit=r,this.checkpoints=u,this.innerState=new o.default(a),this.onChange=a,this.timerId=null}return Object.defineProperty(t.prototype,"state",{get:function(){return this.innerState.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeParts",{get:function(){return this.getTimeParts(this.computeTime())},enumerable:!0,configurable:!0}),t.prototype.getTimeParts=function(t){return r.default(t,this.lastUnit)},t.prototype.setTime=function(t){this.internalTime=s.default(),this.initialTime=t,this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},t.prototype.getTime=function(){return this.time},t.prototype.setLastUnit=function(t){this.innerState.isPlaying()?(this.pause(),this.lastUnit=t,this.resume(!0)):this.lastUnit=t},t.prototype.setTimeToUpdate=function(t){this.innerState.isPlaying()?(this.pause(),this.timeToUpdate=t,this.resume()):this.timeToUpdate=t},t.prototype.setDirection=function(t){this.direction=t},t.prototype.setCheckpoints=function(t){this.checkpoints=t},t.prototype.start=function(){this.innerState.setPlaying()&&this.setTimerInterval(!0)},t.prototype.resume=function(t){void 0===t&&(t=!1),!this.innerState.isStopped()&&this.innerState.setPlaying()&&this.setTimerInterval(t)},t.prototype.pause=function(){this.innerState.setPaused()&&clearInterval(this.timerId)},t.prototype.stop=function(){this.innerState.setStopped()&&clearInterval(this.timerId)},t.prototype.reset=function(){this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},t.prototype.setTimerInterval=function(t){var e=this;void 0===t&&(t=!1),this.timerId&&clearInterval(this.timerId),this.internalTime=s.default();t&&this.onChange(this.getTimeParts(this.time)),this.timerId=window.setInterval((function(){var t=e.time,i=e.computeTime();e.onChange(e.getTimeParts(i)),e.checkpoints.map((function(n){var r=n.time,s=n.callback,o=r>t&&r<=i,u=r<t&&r>=i;("backward"===e.direction?u:o)&&s()}))}),this.timeToUpdate)},t.prototype.computeTime=function(){if(this.innerState.isPlaying()){var t=s.default(),e=Math.abs(t-this.internalTime);switch(this.direction){case"forward":return this.time=this.time+e,this.internalTime=t,this.time;case"backward":return this.time=this.time-e,this.internalTime=t,this.time<0?(this.stop(),0):this.time;default:return this.time}}return this.time},t}();e.TimerModel=u},230:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(231)),s=n(i(179));e.getTimeParts=s.default;var o=i(234);e.useTimer=o.useTimer,e.default=r.default},231:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=s(i(3)),u=i(194),a=o.default.createContext({ms:0,s:0,m:0,h:0,d:0,formatValue:function(t){return String(t)}}),c=function(t){var e=t.unit,i=t.formatValue;return o.default.createElement(d.Consumer,null,(function(t){return(i||t.formatValue)(t[e])||null}))},p=function(t){return o.default.createElement(c,r({unit:"ms"},t))},f=function(t){return o.default.createElement(c,r({unit:"s"},t))},h=function(t){return o.default.createElement(c,r({unit:"m"},t))},l=function(t){return o.default.createElement(c,r({unit:"h"},t))},m=function(t){return o.default.createElement(c,r({unit:"d"},t))},d=function(t){function e(e){var i=t.call(this,e)||this,n=i.props,s=n.initialTime,o=n.direction,a=n.timeToUpdate,c=n.lastUnit,p=n.checkpoints;return i.timer=new u.TimerModel({initialTime:s,direction:o,timeToUpdate:a,lastUnit:c,checkpoints:p,onChange:i.setState.bind(i)}),i.state=r({},i.timer.timeParts,{timerState:"INITED"}),i.start=i.start.bind(i),i.pause=i.pause.bind(i),i.resume=i.resume.bind(i),i.stop=i.stop.bind(i),i.reset=i.reset.bind(i),i.setTime=i.setTime.bind(i),i.getTime=i.getTime.bind(i),i.getTimerState=i.getTimerState.bind(i),i.setDirection=i.setDirection.bind(i),i.setCheckpoints=i.setCheckpoints.bind(i),i}return n(e,t),e.getUI=function(t,e){if(null===t)return null;if(Array.isArray(t)||o.default.isValidElement(t))return t;if(t.prototype&&t.prototype.isReactComponent)return o.default.createElement(t,e);if("function"===typeof t)return t(e);throw new Error("Please use one of the supported APIs for children")},e.prototype.componentDidMount=function(){this.props.startImmediately&&this.timer.start()},e.prototype.componentWillUnmount=function(){this.timer.stop()},e.prototype.render=function(){var t=this,i=t.start,n=t.pause,r=t.resume,s=t.stop,u=t.reset,c=t.getTime,p=t.getTimerState,f=t.setTime,h=t.setDirection,l=t.setCheckpoints,m=this.state,d=m.ms,T=m.s,y=m.m,g=m.h,P=m.d,v=m.timerState,b=this.props,I=b.formatValue,S=b.children;return o.default.createElement(a.Provider,{value:{ms:d,s:T,m:y,h:g,d:P,formatValue:I}},e.getUI(S,{start:i,resume:r,pause:n,stop:s,reset:u,getTime:c,getTimerState:p,setTime:f,setDirection:h,setCheckpoints:l,timerState:v}))},e.prototype.setTime=function(t){this.timer.setTime(t)},e.prototype.getTime=function(){return this.timer.getTime()},e.prototype.getTimerState=function(){return this.timer.state},e.prototype.setDirection=function(t){this.timer.setDirection(t)},e.prototype.setCheckpoints=function(t){this.timer.setCheckpoints(t)},e.prototype.start=function(){this.timer.start(),this.props.onStart()},e.prototype.stop=function(){this.timer.stop(),this.props.onStop()},e.prototype.pause=function(){this.timer.pause(),this.props.onPause()},e.prototype.reset=function(){this.timer.reset(),this.props.onReset()},e.prototype.resume=function(){this.timer.resume(),this.props.onResume()},e.Consumer=a.Consumer,e.Milliseconds=p,e.Seconds=f,e.Minutes=h,e.Hours=l,e.Days=m,e.defaultProps={timeToUpdate:1e3,direction:"forward",initialTime:0,startImmediately:!0,lastUnit:"d",checkpoints:[],children:null,formatValue:function(t){return String(t)},onStart:function(){},onResume:function(){},onPause:function(){},onStop:function(){},onReset:function(){}},e}(o.default.PureComponent);e.default=d},232:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return"undefined"!==typeof window&&"performance"in window?performance.now():Date.now()}},233:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.INITED="INITED",e.PLAYING="PLAYING",e.PAUSED="PAUSED",e.STOPPED="STOPPED";var n=function(){function t(t){var i=this;void 0===t&&(t=function(t){}),this.state=e.INITED,this.onChange=function(){return t({state:i.state})},this.state=e.INITED}return t.prototype.getState=function(){return this.state},t.prototype.setInited=function(){return this.state!==e.INITED&&(this.state=e.INITED,this.onChange(),!0)},t.prototype.isInited=function(){return this.state===e.INITED},t.prototype.setPlaying=function(){return this.state!==e.PLAYING&&(this.state=e.PLAYING,this.onChange(),!0)},t.prototype.isPlaying=function(){return this.state===e.PLAYING},t.prototype.setPaused=function(){return this.state===e.PLAYING&&(this.state=e.PAUSED,this.onChange(),!0)},t.prototype.isPaused=function(){return this.state===e.PAUSED},t.prototype.setStopped=function(){return this.state!==e.INITED&&(this.state=e.STOPPED,this.onChange(),!0)},t.prototype.isStopped=function(){return this.state===e.STOPPED},t}();e.default=n},234:function(t,e,i){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),o=i(194),u=r(i(179));e.useTimer=function(t){var e=void 0===t?{}:t,i=e.initialTime,r=void 0===i?0:i,a=e.direction,c=void 0===a?"forward":a,p=e.timeToUpdate,f=void 0===p?1e3:p,h=e.startImmediately,l=void 0===h||h,m=e.lastUnit,d=void 0===m?"d":m,T=e.checkpoints,y=void 0===T?[]:T,g=e.onStart,P=e.onResume,v=e.onPause,b=e.onStop,I=e.onReset,S=s.useState(n({},u.default(r<0?0:r,d),{state:"INITED"})),_=S[0],C=S[1],k=s.useMemo((function(){return new o.TimerModel({initialTime:r,direction:c,timeToUpdate:f,lastUnit:d,checkpoints:y,onChange:function(t){return C((function(e){return n({},e,t)}))}})}),[]),D=s.useCallback((function(t){return k.setTime(t)}),[k]),U=s.useCallback((function(){return k.getTime()}),[k]),E=s.useCallback((function(){return k.state}),[k]),w=s.useCallback((function(t){return k.setDirection(t)}),[k]),O=s.useCallback((function(t){return k.setLastUnit(t)}),[k]),M=s.useCallback((function(t){return k.setCheckpoints(t)}),[k]),N=s.useCallback((function(t){return k.setTimeToUpdate(t)}),[k]),j=s.useCallback((function(){k.start(),g&&g()}),[k,g]),A=s.useCallback((function(){k.stop(),b&&b()}),[k,b]),L=s.useCallback((function(){k.pause(),v&&v()}),[k,v]),R=s.useCallback((function(){k.reset(),I&&I()}),[k,I]),V=s.useCallback((function(){k.resume(),P&&P()}),[k,P]),G=s.useMemo((function(){return{start:j,stop:A,pause:L,reset:R,resume:V,setTime:D,getTime:U,getTimerState:E,setDirection:w,setLastUnit:O,setTimeToUpdate:N,setCheckpoints:M}}),[j,A,L,R,V,D,U,E,w,O,N,M]);return s.useEffect((function(){return l&&j(),function(){A()}}),[]),{controls:G,value:_}}}}]);
//# sourceMappingURL=13.2d3f6659.chunk.js.map
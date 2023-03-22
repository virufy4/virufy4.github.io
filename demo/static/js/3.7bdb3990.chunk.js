/*! For license information please see 3.7bdb3990.chunk.js.LICENSE.txt */
(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[3],{330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=["ms","s","m","h","d"],o=n.findIndex((function(e){return e===t})),r=[1e3,60,60,24,1],i=[1,1e3,6e4,36e5,864e5];return n.reduce((function(t,n,s){return t[n]=s>o?0:s===o?Math.floor(e/i[s]):Math.floor(e/i[s])%r[s],t}),{ms:0,s:0,m:0,h:0,d:0})}},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var o,r=n(839);var i=((o=r)&&o.__esModule?o:{default:o}).default,s=i.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=i.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=i.canUseDOM?window.NodeList:{},t.canUseDOM=i.canUseDOM;t.default=s},408:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(330)),i=o(n(829)),s=o(n(830)),a=function(){function e(e){var t=e.initialTime,n=e.direction,o=e.timeToUpdate,r=e.lastUnit,a=e.checkpoints,u=e.onChange;this.internalTime=i.default(),this.initialTime=t,this.time=t,this.direction=n,this.timeToUpdate=o,this.lastUnit=r,this.checkpoints=a,this.innerState=new s.default(u),this.onChange=u,this.timerId=null}return Object.defineProperty(e.prototype,"state",{get:function(){return this.innerState.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"timeParts",{get:function(){return this.getTimeParts(this.computeTime())},enumerable:!0,configurable:!0}),e.prototype.getTimeParts=function(e){return r.default(e,this.lastUnit)},e.prototype.setTime=function(e){this.internalTime=i.default(),this.initialTime=e,this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},e.prototype.getTime=function(){return this.time},e.prototype.setLastUnit=function(e){this.innerState.isPlaying()?(this.pause(),this.lastUnit=e,this.resume(!0)):this.lastUnit=e},e.prototype.setTimeToUpdate=function(e){this.innerState.isPlaying()?(this.pause(),this.timeToUpdate=e,this.resume()):this.timeToUpdate=e},e.prototype.setDirection=function(e){this.direction=e},e.prototype.setCheckpoints=function(e){this.checkpoints=e},e.prototype.start=function(){this.innerState.setPlaying()&&this.setTimerInterval(!0)},e.prototype.resume=function(e){void 0===e&&(e=!1),!this.innerState.isStopped()&&this.innerState.setPlaying()&&this.setTimerInterval(e)},e.prototype.pause=function(){this.innerState.setPaused()&&clearInterval(this.timerId)},e.prototype.stop=function(){this.innerState.setStopped()&&clearInterval(this.timerId)},e.prototype.reset=function(){this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},e.prototype.setTimerInterval=function(e){var t=this;void 0===e&&(e=!1),this.timerId&&clearInterval(this.timerId),this.internalTime=i.default();e&&this.onChange(this.getTimeParts(this.time)),this.timerId=window.setInterval((function(){var e=t.time,n=t.computeTime();t.onChange(t.getTimeParts(n)),t.checkpoints.map((function(o){var r=o.time,i=o.callback,s=r>e&&r<=n,a=r<e&&r>=n;("backward"===t.direction?a:s)&&i()}))}),this.timeToUpdate)},e.prototype.computeTime=function(){if(this.innerState.isPlaying()){var e=i.default(),t=Math.abs(e-this.internalTime);switch(this.direction){case"forward":return this.time=this.time+t,this.internalTime=e,this.time;case"backward":return this.time=this.time-t,this.internalTime=e,this.time<0?(this.stop(),0):this.time;default:return this.time}}return this.time},e}();t.TimerModel=a},409:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(s)};var o=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function i(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&i(e,!n)}e.exports=t.default},410:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=u,t.setElement=function(e){var t=e;if("string"===typeof t&&s.canUseDOM){var n=document.querySelectorAll(t);u(n,t),t=n}return a=t||a},t.validateElement=l,t.hide=function(e){var t=!0,n=!1,o=void 0;try{for(var r,i=l(e)[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.setAttribute("aria-hidden","true")}}catch(s){n=!0,o=s}finally{try{!t&&i.return&&i.return()}finally{if(n)throw o}}},t.show=function(e){var t=!0,n=!1,o=void 0;try{for(var r,i=l(e)[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.removeAttribute("aria-hidden")}}catch(s){n=!0,o=s}finally{try{!t&&i.return&&i.return()}finally{if(n)throw o}}},t.documentNotReadyOrSSRTesting=function(){a=null},t.resetForTesting=function(){a=null};var o,r=n(43),i=(o=r)&&o.__esModule?o:{default:o},s=n(332);var a=null;function u(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function l(e){var t=e||a;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,i.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},411:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=o,e.exports=t.default},827:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(828)),i=o(n(330));t.getTimeParts=i.default;var s=n(831);t.useTimer=s.useTimer,t.default=r.default},828:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(6)),a=n(408),u=s.default.createContext({ms:0,s:0,m:0,h:0,d:0,formatValue:function(e){return String(e)}}),l=function(e){var t=e.unit,n=e.formatValue;return s.default.createElement(m.Consumer,null,(function(e){return(n||e.formatValue)(e[t])||null}))},c=function(e){return s.default.createElement(l,r({unit:"ms"},e))},f=function(e){return s.default.createElement(l,r({unit:"s"},e))},p=function(e){return s.default.createElement(l,r({unit:"m"},e))},d=function(e){return s.default.createElement(l,r({unit:"h"},e))},h=function(e){return s.default.createElement(l,r({unit:"d"},e))},m=function(e){function t(t){var n=e.call(this,t)||this,o=n.props,i=o.initialTime,s=o.direction,u=o.timeToUpdate,l=o.lastUnit,c=o.checkpoints;return n.timer=new a.TimerModel({initialTime:i,direction:s,timeToUpdate:u,lastUnit:l,checkpoints:c,onChange:n.setState.bind(n)}),n.state=r({},n.timer.timeParts,{timerState:"INITED"}),n.start=n.start.bind(n),n.pause=n.pause.bind(n),n.resume=n.resume.bind(n),n.stop=n.stop.bind(n),n.reset=n.reset.bind(n),n.setTime=n.setTime.bind(n),n.getTime=n.getTime.bind(n),n.getTimerState=n.getTimerState.bind(n),n.setDirection=n.setDirection.bind(n),n.setCheckpoints=n.setCheckpoints.bind(n),n}return o(t,e),t.getUI=function(e,t){if(null===e)return null;if(Array.isArray(e)||s.default.isValidElement(e))return e;if(e.prototype&&e.prototype.isReactComponent)return s.default.createElement(e,t);if("function"===typeof e)return e(t);throw new Error("Please use one of the supported APIs for children")},t.prototype.componentDidMount=function(){this.props.startImmediately&&this.timer.start()},t.prototype.componentWillUnmount=function(){this.timer.stop()},t.prototype.render=function(){var e=this,n=e.start,o=e.pause,r=e.resume,i=e.stop,a=e.reset,l=e.getTime,c=e.getTimerState,f=e.setTime,p=e.setDirection,d=e.setCheckpoints,h=this.state,m=h.ms,y=h.s,v=h.m,b=h.h,C=h.d,O=h.timerState,g=this.props,T=g.formatValue,S=g.children;return s.default.createElement(u.Provider,{value:{ms:m,s:y,m:v,h:b,d:C,formatValue:T}},t.getUI(S,{start:n,resume:r,pause:o,stop:i,reset:a,getTime:l,getTimerState:c,setTime:f,setDirection:p,setCheckpoints:d,timerState:O}))},t.prototype.setTime=function(e){this.timer.setTime(e)},t.prototype.getTime=function(){return this.timer.getTime()},t.prototype.getTimerState=function(){return this.timer.state},t.prototype.setDirection=function(e){this.timer.setDirection(e)},t.prototype.setCheckpoints=function(e){this.timer.setCheckpoints(e)},t.prototype.start=function(){this.timer.start(),this.props.onStart()},t.prototype.stop=function(){this.timer.stop(),this.props.onStop()},t.prototype.pause=function(){this.timer.pause(),this.props.onPause()},t.prototype.reset=function(){this.timer.reset(),this.props.onReset()},t.prototype.resume=function(){this.timer.resume(),this.props.onResume()},t.Consumer=u.Consumer,t.Milliseconds=c,t.Seconds=f,t.Minutes=p,t.Hours=d,t.Days=h,t.defaultProps={timeToUpdate:1e3,direction:"forward",initialTime:0,startImmediately:!0,lastUnit:"d",checkpoints:[],children:null,formatValue:function(e){return String(e)},onStart:function(){},onResume:function(){},onPause:function(){},onStop:function(){},onReset:function(){}},t}(s.default.PureComponent);t.default=m},829:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"undefined"!==typeof window&&"performance"in window?performance.now():Date.now()}},830:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INITED="INITED",t.PLAYING="PLAYING",t.PAUSED="PAUSED",t.STOPPED="STOPPED";var o=function(){function e(e){var n=this;void 0===e&&(e=function(e){}),this.state=t.INITED,this.onChange=function(){return e({state:n.state})},this.state=t.INITED}return e.prototype.getState=function(){return this.state},e.prototype.setInited=function(){return this.state!==t.INITED&&(this.state=t.INITED,this.onChange(),!0)},e.prototype.isInited=function(){return this.state===t.INITED},e.prototype.setPlaying=function(){return this.state!==t.PLAYING&&(this.state=t.PLAYING,this.onChange(),!0)},e.prototype.isPlaying=function(){return this.state===t.PLAYING},e.prototype.setPaused=function(){return this.state===t.PLAYING&&(this.state=t.PAUSED,this.onChange(),!0)},e.prototype.isPaused=function(){return this.state===t.PAUSED},e.prototype.setStopped=function(){return this.state!==t.INITED&&(this.state=t.STOPPED,this.onChange(),!0)},e.prototype.isStopped=function(){return this.state===t.STOPPED},e}();t.default=o},831:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),s=n(408),a=r(n(330));t.useTimer=function(e){var t=void 0===e?{}:e,n=t.initialTime,r=void 0===n?0:n,u=t.direction,l=void 0===u?"forward":u,c=t.timeToUpdate,f=void 0===c?1e3:c,p=t.startImmediately,d=void 0===p||p,h=t.lastUnit,m=void 0===h?"d":h,y=t.checkpoints,v=void 0===y?[]:y,b=t.onStart,C=t.onResume,O=t.onPause,g=t.onStop,T=t.onReset,S=i.useState(o({},a.default(r<0?0:r,m),{state:"INITED"})),_=S[0],w=S[1],P=i.useMemo((function(){return new s.TimerModel({initialTime:r,direction:l,timeToUpdate:f,lastUnit:m,checkpoints:v,onChange:function(e){return w((function(t){return o({},t,e)}))}})}),[]),E=i.useCallback((function(e){return P.setTime(e)}),[P]),M=i.useCallback((function(){return P.getTime()}),[P]),D=i.useCallback((function(){return P.state}),[P]),U=i.useCallback((function(e){return P.setDirection(e)}),[P]),N=i.useCallback((function(e){return P.setLastUnit(e)}),[P]),k=i.useCallback((function(e){return P.setCheckpoints(e)}),[P]),A=i.useCallback((function(e){return P.setTimeToUpdate(e)}),[P]),I=i.useCallback((function(){P.start(),b&&b()}),[P,b]),j=i.useCallback((function(){P.stop(),g&&g()}),[P,g]),R=i.useCallback((function(){P.pause(),O&&O()}),[P,O]),F=i.useCallback((function(){P.reset(),T&&T()}),[P,T]),L=i.useCallback((function(){P.resume(),C&&C()}),[P,C]),W=i.useMemo((function(){return{start:I,stop:j,pause:R,reset:F,resume:L,setTime:E,getTime:M,getTimerState:D,setDirection:U,setLastUnit:N,setTimeToUpdate:A,setCheckpoints:k}}),[I,j,R,F,L,E,M,D,U,N,A,k]);return i.useEffect((function(){return d&&I(),function(){j()}}),[]),{controls:W,value:_}}},834:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(835),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default,e.exports=t.default},835:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(6),s=h(i),a=h(n(24)),u=h(n(53)),l=h(n(836)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(410)),f=n(332),p=h(f),d=n(842);function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var v=t.portalClassName="ReactModalPortal",b=t.bodyOpenClassName="ReactModal__Body--open",C=f.canUseDOM&&void 0!==a.default.createPortal,O=function(){return C?a.default.createPortal:a.default.unstable_renderSubtreeIntoContainer};function g(e){return e()}var T=function(e){function t(){var e,n,r;m(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=r=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.removePortal=function(){!C&&a.default.unmountComponentAtNode(r.node);var e=g(r.props.parentSelector);e&&e.contains(r.node)?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=O()(r,s.default.createElement(l.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},y(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){f.canUseDOM&&(C||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,g(this.props.parentSelector).appendChild(this.node),!C&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:g(e.parentSelector),nextParent:g(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(f.canUseDOM){var o=this.props,r=o.isOpen,i=o.portalClassName;e.portalClassName!==i&&(this.node.className=i);var s=n.prevParent,a=n.nextParent;a!==s&&(s.removeChild(this.node),a.appendChild(this.node)),(e.isOpen||r)&&!C&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(f.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return f.canUseDOM&&C?(!this.node&&C&&(this.node=document.createElement("div")),O()(s.default.createElement(l.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(i.Component);T.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(p.default),u.default.instanceOf(f.SafeHTMLCollection),u.default.instanceOf(f.SafeNodeList),u.default.arrayOf(u.default.instanceOf(p.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func},T.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:b,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return s.default.createElement("div",e,t)},contentElement:function(e,t){return s.default.createElement("div",e,t)}},T.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,d.polyfill)(T),t.default=T},836:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(6),a=y(n(53)),u=m(n(837)),l=y(n(838)),c=m(n(410)),f=m(n(840)),p=n(332),d=y(p),h=y(n(411));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function y(e){return e&&e.__esModule?e:{default:e}}n(841);var v={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,C=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,i=e.bodyOpenClassName;i&&f.remove(document.body,i),r&&f.remove(document.getElementsByTagName("html")[0],r),o&&b>0&&0===(b-=1)&&c.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(u.returnFocus(n.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),h.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(u.setupScopedFocus(n.node),u.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,l.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===("undefined"===typeof t?"undefined":r(t))?t:{base:v[e],afterOpen:v[e]+"--after-open",beforeClose:v[e]+"--before-close"},i=o.base;return n.state.afterOpen&&(i=i+" "+o.afterOpen),n.state.beforeClose&&(i=i+" "+o.beforeClose),"string"===typeof t&&t?i+" "+t:i},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&f.add(document.body,r),o&&f.add(document.getElementsByTagName("html")[0],o),n&&(b+=1,c.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,i=e.defaultStyles,s=e.children,a=n?{}:i.content,u=r?{}:i.overlay;if(this.shouldBeClosed())return null;var l={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},u,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=o({id:t,ref:this.setContentRef,style:o({},a,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),f=this.props.contentElement(c,s);return this.props.overlayElement(l,f)}}]),t}(s.Component);C.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},C.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(d.default),a.default.instanceOf(p.SafeHTMLCollection),a.default.instanceOf(p.SafeNodeList),a.default.arrayOf(a.default.instanceOf(d.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=C,e.exports=t.default},837:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=l,t.handleFocus=c,t.markForFocusLater=function(){s.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==s.length&&(t=s.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){s.length>0&&s.pop()},t.setupScopedFocus=function(e){a=e,window.addEventListener?(window.addEventListener("blur",l,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",l),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){a=null,window.addEventListener?(window.removeEventListener("blur",l),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",l),document.detachEvent("onFocus",c))};var o,r=n(409),i=(o=r)&&o.__esModule?o:{default:o};var s=[],a=null,u=!1;function l(){u=!0}function c(){if(u){if(u=!1,!a)return;setTimeout((function(){a.contains(document.activeElement)||((0,i.default)(a)[0]||a).focus()}),0)}}},838:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,i.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,r=t.shiftKey,s=n[0],a=n[n.length-1];if(e===document.activeElement){if(!r)return;o=a}a!==document.activeElement||r||(o=s);s===document.activeElement&&r&&(o=a);if(o)return t.preventDefault(),void o.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var l=n.indexOf(document.activeElement);l>-1&&(l+=r?-1:1);if("undefined"===typeof(o=n[l]))return t.preventDefault(),void(o=r?a:s).focus();t.preventDefault(),o.focus()};var o,r=n(409),i=(o=r)&&o.__esModule?o:{default:o};e.exports=t.default},839:function(e,t,n){var o;!function(){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return i}.call(t,n,t,e))||(e.exports=o)}()},840:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var o={},r={};t.add=function(e,t){return n=e.classList,i="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(i,e),n.add(e)}));var n,i},t.remove=function(e,t){return n=e.classList,i="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(i,e),0===i[e]&&n.remove(e)}));var n,i}},841:function(e,t,n){"use strict";var o,r=n(411),i=(o=r)&&o.__esModule?o:{default:o};var s=void 0,a=void 0,u=[];function l(){0!==u.length&&u[u.length-1].focusContent()}i.default.subscribe((function(e,t){s&&a||((s=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),s.style.position="absolute",s.style.opacity="0",s.setAttribute("tabindex","0"),s.addEventListener("focus",l),(a=s.cloneNode()).addEventListener("focus",l)),(u=t).length>0?(document.body.firstChild!==s&&document.body.insertBefore(s,document.body.firstChild),document.body.lastChild!==a&&document.body.appendChild(a)):(s.parentElement&&s.parentElement.removeChild(s),a.parentElement&&a.parentElement.removeChild(a))}))},842:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function i(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?a="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var u=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return s})),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=3.7bdb3990.chunk.js.map
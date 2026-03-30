function rA(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function lI(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cI={exports:{}},A9={},sI={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),aA=Symbol.for("react.portal"),oA=Symbol.for("react.fragment"),iA=Symbol.for("react.strict_mode"),lA=Symbol.for("react.profiler"),cA=Symbol.for("react.provider"),sA=Symbol.for("react.context"),dA=Symbol.for("react.forward_ref"),uA=Symbol.for("react.suspense"),hA=Symbol.for("react.memo"),yA=Symbol.for("react.lazy"),cC=Symbol.iterator;function pA(e){return e===null||typeof e!="object"?null:(e=cC&&e[cC]||e["@@iterator"],typeof e=="function"?e:null)}var dI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uI=Object.assign,hI={};function qr(e,t,n){this.props=e,this.context=t,this.refs=hI,this.updater=n||dI}qr.prototype.isReactComponent={};qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yI(){}yI.prototype=qr.prototype;function Kw(e,t,n){this.props=e,this.context=t,this.refs=hI,this.updater=n||dI}var Qw=Kw.prototype=new yI;Qw.constructor=Kw;uI(Qw,qr.prototype);Qw.isPureReactComponent=!0;var sC=Array.isArray,pI=Object.prototype.hasOwnProperty,Yw={current:null},kI={key:!0,ref:!0,__self:!0,__source:!0};function fI(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)pI.call(t,r)&&!kI.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];a.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)a[r]===void 0&&(a[r]=c[r]);return{$$typeof:ro,type:e,key:i,ref:l,props:a,_owner:Yw.current}}function kA(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jw(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function fA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dC=/\/+/g;function tM(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fA(""+e.key):t.toString(36)}function To(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ro:case aA:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+tM(l,0):r,sC(a)?(n="",e!=null&&(n=e.replace(dC,"$&/")+"/"),To(a,t,n,"",function(u){return u})):a!=null&&(Jw(a)&&(a=kA(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(dC,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",sC(e))for(var c=0;c<e.length;c++){i=e[c];var d=r+tM(i,c);l+=To(i,t,n,d,a)}else if(d=pA(e),typeof d=="function")for(e=d.call(e),c=0;!(i=e.next()).done;)i=i.value,d=r+tM(i,c++),l+=To(i,t,n,d,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function uo(e,t,n){if(e==null)return e;var r=[],a=0;return To(e,r,"","",function(i){return t.call(n,i,a++)}),r}function mA(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},qo={transition:null},vA={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:qo,ReactCurrentOwner:Yw};function mI(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:uo,forEach:function(e,t,n){uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uo(e,function(){t++}),t},toArray:function(e){return uo(e,function(t){return t})||[]},only:function(e){if(!Jw(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=qr;W.Fragment=oA;W.Profiler=lA;W.PureComponent=Kw;W.StrictMode=iA;W.Suspense=uA;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vA;W.act=mI;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=uI({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Yw.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)pI.call(t,d)&&!kI.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:ro,type:e.type,key:a,ref:i,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:sA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cA,_context:e},e.Consumer=e};W.createElement=fI;W.createFactory=function(e){var t=fI.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:dA,render:e}};W.isValidElement=Jw;W.lazy=function(e){return{$$typeof:yA,_payload:{_status:-1,_result:e},_init:mA}};W.memo=function(e,t){return{$$typeof:hA,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=qo.transition;qo.transition={};try{e()}finally{qo.transition=t}};W.unstable_act=mI;W.useCallback=function(e,t){return Te.current.useCallback(e,t)};W.useContext=function(e){return Te.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};W.useEffect=function(e,t){return Te.current.useEffect(e,t)};W.useId=function(){return Te.current.useId()};W.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Te.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};W.useRef=function(e){return Te.current.useRef(e)};W.useState=function(e){return Te.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Te.current.useTransition()};W.version="18.3.1";sI.exports=W;var g=sI.exports;const V=lI(g),eL=rA({__proto__:null,default:V},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gA=g,xA=Symbol.for("react.element"),MA=Symbol.for("react.fragment"),wA=Object.prototype.hasOwnProperty,LA=gA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CA={key:!0,ref:!0,__self:!0,__source:!0};function vI(e,t,n){var r,a={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)wA.call(t,r)&&!CA.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:xA,type:e,key:i,ref:l,props:a,_owner:LA.current}}A9.Fragment=MA;A9.jsx=vI;A9.jsxs=vI;cI.exports=A9;var s=cI.exports,_M={},gI={exports:{}},Qe={},xI={exports:{}},MI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,A){var q=b.length;b.push(A);e:for(;0<q;){var D=q-1>>>1,ae=b[D];if(0<a(ae,A))b[D]=A,b[q]=ae,q=D;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var A=b[0],q=b.pop();if(q!==A){b[0]=q;e:for(var D=0,ae=b.length,mt=ae>>>1;D<mt;){var Ce=2*(D+1)-1,vt=b[Ce],Ae=Ce+1,B=b[Ae];if(0>a(vt,q))Ae<ae&&0>a(B,vt)?(b[D]=B,b[Ae]=q,D=Ae):(b[D]=vt,b[Ce]=q,D=Ce);else if(Ae<ae&&0>a(B,q))b[D]=B,b[Ae]=q,D=Ae;else break e}}return A}function a(b,A){var q=b.sortIndex-A.sortIndex;return q!==0?q:b.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var d=[],u=[],h=1,p=null,m=3,x=!1,w=!1,f=!1,M=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=b)r(u),A.sortIndex=A.expirationTime,t(d,A);else break;A=n(u)}}function L(b){if(f=!1,v(b),!w)if(n(d)!==null)w=!0,E(C);else{var A=n(u);A!==null&&U(L,A.startTime-b)}}function C(b,A){w=!1,f&&(f=!1,k(j),j=-1),x=!0;var q=m;try{for(v(A),p=n(d);p!==null&&(!(p.expirationTime>A)||b&&!F());){var D=p.callback;if(typeof D=="function"){p.callback=null,m=p.priorityLevel;var ae=D(p.expirationTime<=A);A=e.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(d)&&r(d),v(A)}else r(d);p=n(d)}if(p!==null)var mt=!0;else{var Ce=n(u);Ce!==null&&U(L,Ce.startTime-A),mt=!1}return mt}finally{p=null,m=q,x=!1}}var I=!1,S=null,j=-1,T=5,P=-1;function F(){return!(e.unstable_now()-P<T)}function H(){if(S!==null){var b=e.unstable_now();P=b;var A=!0;try{A=S(!0,b)}finally{A?_():(I=!1,S=null)}}else I=!1}var _;if(typeof y=="function")_=function(){y(H)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,X=N.port2;N.port1.onmessage=H,_=function(){X.postMessage(null)}}else _=function(){M(H,0)};function E(b){S=b,I||(I=!0,_())}function U(b,A){j=M(function(){b(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,E(C))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var q=m;m=A;try{return b()}finally{m=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,A){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var q=m;m=b;try{return A()}finally{m=q}},e.unstable_scheduleCallback=function(b,A,q){var D=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?D+q:D):q=D,b){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=q+ae,b={id:h++,callback:A,priorityLevel:b,startTime:q,expirationTime:ae,sortIndex:-1},q>D?(b.sortIndex=q,t(u,b),n(d)===null&&b===n(u)&&(f?(k(j),j=-1):f=!0,U(L,q-D))):(b.sortIndex=ae,t(d,b),w||x||(w=!0,E(C))),b},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(b){var A=m;return function(){var q=m;m=A;try{return b.apply(this,arguments)}finally{m=q}}}})(MI);xI.exports=MI;var SA=xI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IA=g,Ke=SA;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wI=new Set,Va={};function E1(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(Va[e]=t,e=0;e<t.length;e++)wI.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),UM=Object.prototype.hasOwnProperty,bA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uC={},hC={};function jA(e){return UM.call(hC,e)?!0:UM.call(uC,e)?!1:bA.test(e)?hC[e]=!0:(uC[e]=!0,!1)}function zA(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function AA(e,t,n,r){if(t===null||typeof t>"u"||zA(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var tL=/[\-:]([a-z])/g;function nL(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tL,nL);we[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tL,nL);we[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tL,nL);we[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function rL(e,t,n,r){var a=we.hasOwnProperty(t)?we[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(AA(t,n,a,r)&&(n=null),r||a===null?jA(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=IA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),G1=Symbol.for("react.portal"),$1=Symbol.for("react.fragment"),aL=Symbol.for("react.strict_mode"),WM=Symbol.for("react.profiler"),LI=Symbol.for("react.provider"),CI=Symbol.for("react.context"),oL=Symbol.for("react.forward_ref"),ZM=Symbol.for("react.suspense"),GM=Symbol.for("react.suspense_list"),iL=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),SI=Symbol.for("react.offscreen"),yC=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=yC&&e[yC]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,nM;function ia(e){if(nM===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nM=t&&t[1]||""}return`
`+nM+e}var rM=!1;function aM(e,t){if(!e||rM)return"";rM=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,c=i.length-1;1<=l&&0<=c&&a[l]!==i[c];)c--;for(;1<=l&&0<=c;l--,c--)if(a[l]!==i[c]){if(l!==1||c!==1)do if(l--,c--,0>c||a[l]!==i[c]){var d=`
`+a[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{rM=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ia(e):""}function PA(e){switch(e.tag){case 5:return ia(e.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return e=aM(e.type,!1),e;case 11:return e=aM(e.type.render,!1),e;case 1:return e=aM(e.type,!0),e;default:return""}}function $M(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $1:return"Fragment";case G1:return"Portal";case WM:return"Profiler";case aL:return"StrictMode";case ZM:return"Suspense";case GM:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case CI:return(e.displayName||"Context")+".Consumer";case LI:return(e._context.displayName||"Context")+".Provider";case oL:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case iL:return t=e.displayName||null,t!==null?t:$M(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return $M(e(t))}catch{}}return null}function RA(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $M(t);case 8:return t===aL?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function II(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function HA(e){var t=II(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){e._valueTracker||(e._valueTracker=HA(e))}function bI(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=II(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yx(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function XM(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pC(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jI(e,t){t=t.checked,t!=null&&rL(e,"checked",t,!1)}function KM(e,t){jI(e,t);var n=kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?QM(e,t.type,n):t.hasOwnProperty("defaultValue")&&QM(e,t.type,kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kC(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function QM(e,t,n){(t!=="number"||Yx(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var la=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function YM(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fC(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(la(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kn(n)}}function zI(e,t){var n=kn(t.value),r=kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mC(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function AI(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function JM(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?AI(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,PI=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TA=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(e){TA.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ha[t]=ha[e]})});function RI(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ha.hasOwnProperty(e)&&ha[e]?(""+t).trim():t+"px"}function HI(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=RI(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var qA=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ew(e,t){if(t){if(qA[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function tw(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nw=null;function lL(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rw=null,ir=null,lr=null;function vC(e){if(e=io(e)){if(typeof rw!="function")throw Error(z(280));var t=e.stateNode;t&&(t=q9(t),rw(e.stateNode,e.type,t))}}function TI(e){ir?lr?lr.push(e):lr=[e]:ir=e}function qI(){if(ir){var e=ir,t=lr;if(lr=ir=null,vC(e),t)for(e=0;e<t.length;e++)vC(t[e])}}function BI(e,t){return e(t)}function VI(){}var oM=!1;function FI(e,t,n){if(oM)return e(t,n);oM=!0;try{return BI(e,t,n)}finally{oM=!1,(ir!==null||lr!==null)&&(VI(),qI())}}function Ea(e,t){var n=e.stateNode;if(n===null)return null;var r=q9(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var aw=!1;if(Et)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){aw=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{aw=!1}function BA(e,t,n,r,a,i,l,c,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var ya=!1,Jx=null,e9=!1,ow=null,VA={onError:function(e){ya=!0,Jx=e}};function FA(e,t,n,r,a,i,l,c,d){ya=!1,Jx=null,BA.apply(VA,arguments)}function EA(e,t,n,r,a,i,l,c,d){if(FA.apply(this,arguments),ya){if(ya){var u=Jx;ya=!1,Jx=null}else throw Error(z(198));e9||(e9=!0,ow=u)}}function D1(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function EI(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gC(e){if(D1(e)!==e)throw Error(z(188))}function DA(e){var t=e.alternate;if(!t){if(t=D1(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return gC(a),e;if(i===r)return gC(a),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,r=i;break}if(c===r){l=!0,r=a,n=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===n){l=!0,n=i,r=a;break}if(c===r){l=!0,r=i,n=a;break}c=c.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function DI(e){return e=DA(e),e!==null?OI(e):null}function OI(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=OI(e);if(t!==null)return t;e=e.sibling}return null}var NI=Ke.unstable_scheduleCallback,xC=Ke.unstable_cancelCallback,OA=Ke.unstable_shouldYield,NA=Ke.unstable_requestPaint,ue=Ke.unstable_now,_A=Ke.unstable_getCurrentPriorityLevel,cL=Ke.unstable_ImmediatePriority,_I=Ke.unstable_UserBlockingPriority,t9=Ke.unstable_NormalPriority,UA=Ke.unstable_LowPriority,UI=Ke.unstable_IdlePriority,P9=null,jt=null;function WA(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(P9,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:$A,ZA=Math.log,GA=Math.LN2;function $A(e){return e>>>=0,e===0?32:31-(ZA(e)/GA|0)|0}var ko=64,fo=4194304;function ca(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function n9(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~a;c!==0?r=ca(c):(i&=l,i!==0&&(r=ca(i)))}else l=n&~a,l!==0?r=ca(l):i!==0&&(r=ca(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),a=1<<n,r|=e[n],t&=~a;return r}function XA(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KA(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ht(i),c=1<<l,d=a[l];d===-1?(!(c&n)||c&r)&&(a[l]=XA(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}}function iw(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function WI(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function iM(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function QA(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ht(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function sL(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var $=0;function ZI(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var GI,dL,$I,XI,KI,lw=!1,mo=[],an=null,on=null,ln=null,Da=new Map,Oa=new Map,Jt=[],YA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function MC(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(t.pointerId)}}function Yr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=io(t),t!==null&&dL(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function JA(e,t,n,r,a){switch(t){case"focusin":return an=Yr(an,e,t,n,r,a),!0;case"dragenter":return on=Yr(on,e,t,n,r,a),!0;case"mouseover":return ln=Yr(ln,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Da.set(i,Yr(Da.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Oa.set(i,Yr(Oa.get(i)||null,e,t,n,r,a)),!0}return!1}function QI(e){var t=w1(e.target);if(t!==null){var n=D1(t);if(n!==null){if(t=n.tag,t===13){if(t=EI(n),t!==null){e.blockedOn=t,KI(e.priority,function(){$I(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cw(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nw=r,n.target.dispatchEvent(r),nw=null}else return t=io(n),t!==null&&dL(t),e.blockedOn=n,!1;t.shift()}return!0}function wC(e,t,n){Bo(e)&&n.delete(t)}function eP(){lw=!1,an!==null&&Bo(an)&&(an=null),on!==null&&Bo(on)&&(on=null),ln!==null&&Bo(ln)&&(ln=null),Da.forEach(wC),Oa.forEach(wC)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,lw||(lw=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,eP)))}function Na(e){function t(a){return Jr(a,e)}if(0<mo.length){Jr(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Jr(an,e),on!==null&&Jr(on,e),ln!==null&&Jr(ln,e),Da.forEach(t),Oa.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)QI(n),n.blockedOn===null&&Jt.shift()}var cr=Wt.ReactCurrentBatchConfig,r9=!0;function tP(e,t,n,r){var a=$,i=cr.transition;cr.transition=null;try{$=1,uL(e,t,n,r)}finally{$=a,cr.transition=i}}function nP(e,t,n,r){var a=$,i=cr.transition;cr.transition=null;try{$=4,uL(e,t,n,r)}finally{$=a,cr.transition=i}}function uL(e,t,n,r){if(r9){var a=cw(e,t,n,r);if(a===null)fM(e,t,r,a9,n),MC(e,r);else if(JA(a,e,t,n,r))r.stopPropagation();else if(MC(e,r),t&4&&-1<YA.indexOf(e)){for(;a!==null;){var i=io(a);if(i!==null&&GI(i),i=cw(e,t,n,r),i===null&&fM(e,t,r,a9,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else fM(e,t,r,null,n)}}var a9=null;function cw(e,t,n,r){if(a9=null,e=lL(r),e=w1(e),e!==null)if(t=D1(e),t===null)e=null;else if(n=t.tag,n===13){if(e=EI(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return a9=e,null}function YI(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_A()){case cL:return 1;case _I:return 4;case t9:case UA:return 16;case UI:return 536870912;default:return 16}default:return 16}}var tn=null,hL=null,Vo=null;function JI(){if(Vo)return Vo;var e,t=hL,n=t.length,r,a="value"in tn?tn.value:tn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Vo=a.slice(e,1<r?1-r:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function LC(){return!1}function Ye(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vo:LC,this.isPropagationStopped=LC,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yL=Ye(Br),oo=se({},Br,{view:0,detail:0}),rP=Ye(oo),lM,cM,ea,R9=se({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pL,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ea&&(ea&&e.type==="mousemove"?(lM=e.screenX-ea.screenX,cM=e.screenY-ea.screenY):cM=lM=0,ea=e),lM)},movementY:function(e){return"movementY"in e?e.movementY:cM}}),CC=Ye(R9),aP=se({},R9,{dataTransfer:0}),oP=Ye(aP),iP=se({},oo,{relatedTarget:0}),sM=Ye(iP),lP=se({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),cP=Ye(lP),sP=se({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dP=Ye(sP),uP=se({},Br,{data:0}),SC=Ye(uP),hP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kP(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pP[e])?!!t[e]:!1}function pL(){return kP}var fP=se({},oo,{key:function(e){if(e.key){var t=hP[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yP[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pL,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mP=Ye(fP),vP=se({},R9,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),IC=Ye(vP),gP=se({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pL}),xP=Ye(gP),MP=se({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),wP=Ye(MP),LP=se({},R9,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),CP=Ye(LP),SP=[9,13,27,32],kL=Et&&"CompositionEvent"in window,pa=null;Et&&"documentMode"in document&&(pa=document.documentMode);var IP=Et&&"TextEvent"in window&&!pa,eb=Et&&(!kL||pa&&8<pa&&11>=pa),bC=" ",jC=!1;function tb(e,t){switch(e){case"keyup":return SP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var X1=!1;function bP(e,t){switch(e){case"compositionend":return nb(t);case"keypress":return t.which!==32?null:(jC=!0,bC);case"textInput":return e=t.data,e===bC&&jC?null:e;default:return null}}function jP(e,t){if(X1)return e==="compositionend"||!kL&&tb(e,t)?(e=JI(),Vo=hL=tn=null,X1=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eb&&t.locale!=="ko"?null:t.data;default:return null}}var zP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zC(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zP[e.type]:t==="textarea"}function rb(e,t,n,r){TI(r),t=o9(t,"onChange"),0<t.length&&(n=new yL("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ka=null,_a=null;function AP(e){pb(e,0)}function H9(e){var t=Y1(e);if(bI(t))return e}function PP(e,t){if(e==="change")return t}var ab=!1;if(Et){var dM;if(Et){var uM="oninput"in document;if(!uM){var AC=document.createElement("div");AC.setAttribute("oninput","return;"),uM=typeof AC.oninput=="function"}dM=uM}else dM=!1;ab=dM&&(!document.documentMode||9<document.documentMode)}function PC(){ka&&(ka.detachEvent("onpropertychange",ob),_a=ka=null)}function ob(e){if(e.propertyName==="value"&&H9(_a)){var t=[];rb(t,_a,e,lL(e)),FI(AP,t)}}function RP(e,t,n){e==="focusin"?(PC(),ka=t,_a=n,ka.attachEvent("onpropertychange",ob)):e==="focusout"&&PC()}function HP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return H9(_a)}function TP(e,t){if(e==="click")return H9(t)}function qP(e,t){if(e==="input"||e==="change")return H9(t)}function BP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:BP;function Ua(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!UM.call(t,a)||!pt(e[a],t[a]))return!1}return!0}function RC(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function HC(e,t){var n=RC(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=RC(n)}}function ib(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ib(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lb(){for(var e=window,t=Yx();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yx(e.document)}return t}function fL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function VP(e){var t=lb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ib(n.ownerDocument.documentElement,n)){if(r!==null&&fL(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=HC(n,i);var l=HC(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var FP=Et&&"documentMode"in document&&11>=document.documentMode,K1=null,sw=null,fa=null,dw=!1;function TC(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dw||K1==null||K1!==Yx(r)||(r=K1,"selectionStart"in r&&fL(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fa&&Ua(fa,r)||(fa=r,r=o9(sw,"onSelect"),0<r.length&&(t=new yL("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=K1)))}function go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Q1={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},hM={},cb={};Et&&(cb=document.createElement("div").style,"AnimationEvent"in window||(delete Q1.animationend.animation,delete Q1.animationiteration.animation,delete Q1.animationstart.animation),"TransitionEvent"in window||delete Q1.transitionend.transition);function T9(e){if(hM[e])return hM[e];if(!Q1[e])return e;var t=Q1[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cb)return hM[e]=t[n];return e}var sb=T9("animationend"),db=T9("animationiteration"),ub=T9("animationstart"),hb=T9("transitionend"),yb=new Map,qC="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){yb.set(e,t),E1(t,[e])}for(var yM=0;yM<qC.length;yM++){var pM=qC[yM],EP=pM.toLowerCase(),DP=pM[0].toUpperCase()+pM.slice(1);gn(EP,"on"+DP)}gn(sb,"onAnimationEnd");gn(db,"onAnimationIteration");gn(ub,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(hb,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);E1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));E1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));E1("onBeforeInput",["compositionend","keypress","textInput","paste"]);E1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));E1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));E1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OP=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function BC(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,EA(r,t,void 0,e),e.currentTarget=null}function pb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==i&&a.isPropagationStopped())break e;BC(a,c,u),i=d}else for(l=0;l<r.length;l++){if(c=r[l],d=c.instance,u=c.currentTarget,c=c.listener,d!==i&&a.isPropagationStopped())break e;BC(a,c,u),i=d}}}if(e9)throw e=ow,e9=!1,ow=null,e}function ne(e,t){var n=t[kw];n===void 0&&(n=t[kw]=new Set);var r=e+"__bubble";n.has(r)||(kb(t,e,2,!1),n.add(r))}function kM(e,t,n){var r=0;t&&(r|=4),kb(n,e,r,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Wa(e){if(!e[xo]){e[xo]=!0,wI.forEach(function(n){n!=="selectionchange"&&(OP.has(n)||kM(n,!1,e),kM(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,kM("selectionchange",!1,t))}}function kb(e,t,n,r){switch(YI(t)){case 1:var a=tP;break;case 4:a=nP;break;default:a=uL}n=a.bind(null,t,n,e),a=void 0,!aw||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function fM(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;l=l.return}for(;c!==null;){if(l=w1(c),l===null)return;if(d=l.tag,d===5||d===6){r=i=l;continue e}c=c.parentNode}}r=r.return}FI(function(){var u=i,h=lL(n),p=[];e:{var m=yb.get(e);if(m!==void 0){var x=yL,w=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":x=mP;break;case"focusin":w="focus",x=sM;break;case"focusout":w="blur",x=sM;break;case"beforeblur":case"afterblur":x=sM;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=CC;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=oP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=xP;break;case sb:case db:case ub:x=cP;break;case hb:x=wP;break;case"scroll":x=rP;break;case"wheel":x=CP;break;case"copy":case"cut":case"paste":x=dP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=IC}var f=(t&4)!==0,M=!f&&e==="scroll",k=f?m!==null?m+"Capture":null:m;f=[];for(var y=u,v;y!==null;){v=y;var L=v.stateNode;if(v.tag===5&&L!==null&&(v=L,k!==null&&(L=Ea(y,k),L!=null&&f.push(Za(y,L,v)))),M)break;y=y.return}0<f.length&&(m=new x(m,w,null,n,h),p.push({event:m,listeners:f}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==nw&&(w=n.relatedTarget||n.fromElement)&&(w1(w)||w[Dt]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?w1(w):null,w!==null&&(M=D1(w),w!==M||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(f=CC,L="onMouseLeave",k="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(f=IC,L="onPointerLeave",k="onPointerEnter",y="pointer"),M=x==null?m:Y1(x),v=w==null?m:Y1(w),m=new f(L,y+"leave",x,n,h),m.target=M,m.relatedTarget=v,L=null,w1(h)===u&&(f=new f(k,y+"enter",w,n,h),f.target=v,f.relatedTarget=M,L=f),M=L,x&&w)t:{for(f=x,k=w,y=0,v=f;v;v=O1(v))y++;for(v=0,L=k;L;L=O1(L))v++;for(;0<y-v;)f=O1(f),y--;for(;0<v-y;)k=O1(k),v--;for(;y--;){if(f===k||k!==null&&f===k.alternate)break t;f=O1(f),k=O1(k)}f=null}else f=null;x!==null&&VC(p,m,x,f,!1),w!==null&&M!==null&&VC(p,M,w,f,!0)}}e:{if(m=u?Y1(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var C=PP;else if(zC(m))if(ab)C=qP;else{C=HP;var I=RP}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=TP);if(C&&(C=C(e,u))){rb(p,C,n,h);break e}I&&I(e,m,u),e==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&QM(m,"number",m.value)}switch(I=u?Y1(u):window,e){case"focusin":(zC(I)||I.contentEditable==="true")&&(K1=I,sw=u,fa=null);break;case"focusout":fa=sw=K1=null;break;case"mousedown":dw=!0;break;case"contextmenu":case"mouseup":case"dragend":dw=!1,TC(p,n,h);break;case"selectionchange":if(FP)break;case"keydown":case"keyup":TC(p,n,h)}var S;if(kL)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else X1?tb(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(eb&&n.locale!=="ko"&&(X1||j!=="onCompositionStart"?j==="onCompositionEnd"&&X1&&(S=JI()):(tn=h,hL="value"in tn?tn.value:tn.textContent,X1=!0)),I=o9(u,j),0<I.length&&(j=new SC(j,e,null,n,h),p.push({event:j,listeners:I}),S?j.data=S:(S=nb(n),S!==null&&(j.data=S)))),(S=IP?bP(e,n):jP(e,n))&&(u=o9(u,"onBeforeInput"),0<u.length&&(h=new SC("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=S))}pb(p,t)})}function Za(e,t,n){return{instance:e,listener:t,currentTarget:n}}function o9(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ea(e,n),i!=null&&r.unshift(Za(e,i,a)),i=Ea(e,t),i!=null&&r.push(Za(e,i,a))),e=e.return}return r}function O1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function VC(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var c=n,d=c.alternate,u=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&u!==null&&(c=u,a?(d=Ea(n,i),d!=null&&l.unshift(Za(n,d,c))):a||(d=Ea(n,i),d!=null&&l.push(Za(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var NP=/\r\n?/g,_P=/\u0000|\uFFFD/g;function FC(e){return(typeof e=="string"?e:""+e).replace(NP,`
`).replace(_P,"")}function Mo(e,t,n){if(t=FC(t),FC(e)!==t&&n)throw Error(z(425))}function i9(){}var uw=null,hw=null;function yw(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pw=typeof setTimeout=="function"?setTimeout:void 0,UP=typeof clearTimeout=="function"?clearTimeout:void 0,EC=typeof Promise=="function"?Promise:void 0,WP=typeof queueMicrotask=="function"?queueMicrotask:typeof EC<"u"?function(e){return EC.resolve(null).then(e).catch(ZP)}:pw;function ZP(e){setTimeout(function(){throw e})}function mM(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Na(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function DC(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),St="__reactFiber$"+Vr,Ga="__reactProps$"+Vr,Dt="__reactContainer$"+Vr,kw="__reactEvents$"+Vr,GP="__reactListeners$"+Vr,$P="__reactHandles$"+Vr;function w1(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=DC(e);e!==null;){if(n=e[St])return n;e=DC(e)}return t}e=n,n=e.parentNode}return null}function io(e){return e=e[St]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Y1(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function q9(e){return e[Ga]||null}var fw=[],J1=-1;function xn(e){return{current:e}}function re(e){0>J1||(e.current=fw[J1],fw[J1]=null,J1--)}function J(e,t){J1++,fw[J1]=e.current,e.current=t}var fn={},ze=xn(fn),Ee=xn(!1),A1=fn;function jr(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function De(e){return e=e.childContextTypes,e!=null}function l9(){re(Ee),re(ze)}function OC(e,t,n){if(ze.current!==fn)throw Error(z(168));J(ze,t),J(Ee,n)}function fb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(z(108,RA(e)||"Unknown",a));return se({},n,r)}function c9(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,A1=ze.current,J(ze,e),J(Ee,Ee.current),!0}function NC(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=fb(e,t,A1),r.__reactInternalMemoizedMergedChildContext=e,re(Ee),re(ze),J(ze,e)):re(Ee),J(Ee,n)}var qt=null,B9=!1,vM=!1;function mb(e){qt===null?qt=[e]:qt.push(e)}function XP(e){B9=!0,mb(e)}function Mn(){if(!vM&&qt!==null){vM=!0;var e=0,t=$;try{var n=qt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,B9=!1}catch(a){throw qt!==null&&(qt=qt.slice(e+1)),NI(cL,Mn),a}finally{$=t,vM=!1}}return null}var er=[],tr=0,s9=null,d9=0,Je=[],et=0,P1=null,Bt=1,Vt="";function bn(e,t){er[tr++]=d9,er[tr++]=s9,s9=e,d9=t}function vb(e,t,n){Je[et++]=Bt,Je[et++]=Vt,Je[et++]=P1,P1=e;var r=Bt;e=Vt;var a=32-ht(r)-1;r&=~(1<<a),n+=1;var i=32-ht(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Bt=1<<32-ht(t)+a|n<<a|r,Vt=i+e}else Bt=1<<i|n<<a|r,Vt=e}function mL(e){e.return!==null&&(bn(e,1),vb(e,1,0))}function vL(e){for(;e===s9;)s9=er[--tr],er[tr]=null,d9=er[--tr],er[tr]=null;for(;e===P1;)P1=Je[--et],Je[et]=null,Vt=Je[--et],Je[et]=null,Bt=Je[--et],Je[et]=null}var $e=null,Ge=null,oe=!1,ut=null;function gb(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _C(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ge=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=P1!==null?{id:Bt,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Ge=null,!0):!1;default:return!1}}function mw(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vw(e){if(oe){var t=Ge;if(t){var n=t;if(!_C(e,t)){if(mw(e))throw Error(z(418));t=cn(n.nextSibling);var r=$e;t&&_C(e,t)?gb(r,n):(e.flags=e.flags&-4097|2,oe=!1,$e=e)}}else{if(mw(e))throw Error(z(418));e.flags=e.flags&-4097|2,oe=!1,$e=e}}}function UC(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function wo(e){if(e!==$e)return!1;if(!oe)return UC(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yw(e.type,e.memoizedProps)),t&&(t=Ge)){if(mw(e))throw xb(),Error(z(418));for(;t;)gb(e,t),t=cn(t.nextSibling)}if(UC(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=$e?cn(e.stateNode.nextSibling):null;return!0}function xb(){for(var e=Ge;e;)e=cn(e.nextSibling)}function zr(){Ge=$e=null,oe=!1}function gL(e){ut===null?ut=[e]:ut.push(e)}var KP=Wt.ReactCurrentBatchConfig;function ta(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var c=a.refs;l===null?delete c[i]:c[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Lo(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function WC(e){var t=e._init;return t(e._payload)}function Mb(e){function t(k,y){if(e){var v=k.deletions;v===null?(k.deletions=[y],k.flags|=16):v.push(y)}}function n(k,y){if(!e)return null;for(;y!==null;)t(k,y),y=y.sibling;return null}function r(k,y){for(k=new Map;y!==null;)y.key!==null?k.set(y.key,y):k.set(y.index,y),y=y.sibling;return k}function a(k,y){return k=hn(k,y),k.index=0,k.sibling=null,k}function i(k,y,v){return k.index=v,e?(v=k.alternate,v!==null?(v=v.index,v<y?(k.flags|=2,y):v):(k.flags|=2,y)):(k.flags|=1048576,y)}function l(k){return e&&k.alternate===null&&(k.flags|=2),k}function c(k,y,v,L){return y===null||y.tag!==6?(y=SM(v,k.mode,L),y.return=k,y):(y=a(y,v),y.return=k,y)}function d(k,y,v,L){var C=v.type;return C===$1?h(k,y,v.props.children,L,v.key):y!==null&&(y.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Qt&&WC(C)===y.type)?(L=a(y,v.props),L.ref=ta(k,y,v),L.return=k,L):(L=Wo(v.type,v.key,v.props,null,k.mode,L),L.ref=ta(k,y,v),L.return=k,L)}function u(k,y,v,L){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=IM(v,k.mode,L),y.return=k,y):(y=a(y,v.children||[]),y.return=k,y)}function h(k,y,v,L,C){return y===null||y.tag!==7?(y=I1(v,k.mode,L,C),y.return=k,y):(y=a(y,v),y.return=k,y)}function p(k,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=SM(""+y,k.mode,v),y.return=k,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ho:return v=Wo(y.type,y.key,y.props,null,k.mode,v),v.ref=ta(k,null,y),v.return=k,v;case G1:return y=IM(y,k.mode,v),y.return=k,y;case Qt:var L=y._init;return p(k,L(y._payload),v)}if(la(y)||Kr(y))return y=I1(y,k.mode,v,null),y.return=k,y;Lo(k,y)}return null}function m(k,y,v,L){var C=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:c(k,y,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:return v.key===C?d(k,y,v,L):null;case G1:return v.key===C?u(k,y,v,L):null;case Qt:return C=v._init,m(k,y,C(v._payload),L)}if(la(v)||Kr(v))return C!==null?null:h(k,y,v,L,null);Lo(k,v)}return null}function x(k,y,v,L,C){if(typeof L=="string"&&L!==""||typeof L=="number")return k=k.get(v)||null,c(y,k,""+L,C);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ho:return k=k.get(L.key===null?v:L.key)||null,d(y,k,L,C);case G1:return k=k.get(L.key===null?v:L.key)||null,u(y,k,L,C);case Qt:var I=L._init;return x(k,y,v,I(L._payload),C)}if(la(L)||Kr(L))return k=k.get(v)||null,h(y,k,L,C,null);Lo(y,L)}return null}function w(k,y,v,L){for(var C=null,I=null,S=y,j=y=0,T=null;S!==null&&j<v.length;j++){S.index>j?(T=S,S=null):T=S.sibling;var P=m(k,S,v[j],L);if(P===null){S===null&&(S=T);break}e&&S&&P.alternate===null&&t(k,S),y=i(P,y,j),I===null?C=P:I.sibling=P,I=P,S=T}if(j===v.length)return n(k,S),oe&&bn(k,j),C;if(S===null){for(;j<v.length;j++)S=p(k,v[j],L),S!==null&&(y=i(S,y,j),I===null?C=S:I.sibling=S,I=S);return oe&&bn(k,j),C}for(S=r(k,S);j<v.length;j++)T=x(S,k,j,v[j],L),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?j:T.key),y=i(T,y,j),I===null?C=T:I.sibling=T,I=T);return e&&S.forEach(function(F){return t(k,F)}),oe&&bn(k,j),C}function f(k,y,v,L){var C=Kr(v);if(typeof C!="function")throw Error(z(150));if(v=C.call(v),v==null)throw Error(z(151));for(var I=C=null,S=y,j=y=0,T=null,P=v.next();S!==null&&!P.done;j++,P=v.next()){S.index>j?(T=S,S=null):T=S.sibling;var F=m(k,S,P.value,L);if(F===null){S===null&&(S=T);break}e&&S&&F.alternate===null&&t(k,S),y=i(F,y,j),I===null?C=F:I.sibling=F,I=F,S=T}if(P.done)return n(k,S),oe&&bn(k,j),C;if(S===null){for(;!P.done;j++,P=v.next())P=p(k,P.value,L),P!==null&&(y=i(P,y,j),I===null?C=P:I.sibling=P,I=P);return oe&&bn(k,j),C}for(S=r(k,S);!P.done;j++,P=v.next())P=x(S,k,j,P.value,L),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?j:P.key),y=i(P,y,j),I===null?C=P:I.sibling=P,I=P);return e&&S.forEach(function(H){return t(k,H)}),oe&&bn(k,j),C}function M(k,y,v,L){if(typeof v=="object"&&v!==null&&v.type===$1&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:e:{for(var C=v.key,I=y;I!==null;){if(I.key===C){if(C=v.type,C===$1){if(I.tag===7){n(k,I.sibling),y=a(I,v.props.children),y.return=k,k=y;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Qt&&WC(C)===I.type){n(k,I.sibling),y=a(I,v.props),y.ref=ta(k,I,v),y.return=k,k=y;break e}n(k,I);break}else t(k,I);I=I.sibling}v.type===$1?(y=I1(v.props.children,k.mode,L,v.key),y.return=k,k=y):(L=Wo(v.type,v.key,v.props,null,k.mode,L),L.ref=ta(k,y,v),L.return=k,k=L)}return l(k);case G1:e:{for(I=v.key;y!==null;){if(y.key===I)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(k,y.sibling),y=a(y,v.children||[]),y.return=k,k=y;break e}else{n(k,y);break}else t(k,y);y=y.sibling}y=IM(v,k.mode,L),y.return=k,k=y}return l(k);case Qt:return I=v._init,M(k,y,I(v._payload),L)}if(la(v))return w(k,y,v,L);if(Kr(v))return f(k,y,v,L);Lo(k,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(k,y.sibling),y=a(y,v),y.return=k,k=y):(n(k,y),y=SM(v,k.mode,L),y.return=k,k=y),l(k)):n(k,y)}return M}var Ar=Mb(!0),wb=Mb(!1),u9=xn(null),h9=null,nr=null,xL=null;function ML(){xL=nr=h9=null}function wL(e){var t=u9.current;re(u9),e._currentValue=t}function gw(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){h9=e,xL=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(xL!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(h9===null)throw Error(z(308));nr=e,h9.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var L1=null;function LL(e){L1===null?L1=[e]:L1.push(e)}function Lb(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,LL(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function CL(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ot(e,n)}return a=r.interleaved,a===null?(t.next=t,LL(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ot(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sL(e,n)}}function ZC(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function y9(e,t,n,r){var a=e.updateQueue;Yt=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var d=c,u=d.next;d.next=null,l===null?i=u:l.next=u,l=d;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==l&&(c===null?h.firstBaseUpdate=u:c.next=u,h.lastBaseUpdate=d))}if(i!==null){var p=a.baseState;l=0,h=u=d=null,c=i;do{var m=c.lane,x=c.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,f=c;switch(m=t,x=n,f.tag){case 1:if(w=f.payload,typeof w=="function"){p=w.call(x,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=f.payload,m=typeof w=="function"?w.call(x,p,m):w,m==null)break e;p=se({},p,m);break e;case 2:Yt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[c]:m.push(c))}else x={eventTime:x,lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(u=h=x,d=p):h=h.next=x,l|=m;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;m=c,c=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(h===null&&(d=p),a.baseState=d,a.firstBaseUpdate=u,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);H1|=l,e.lanes=l,e.memoizedState=p}}function GC(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(z(191,a));a.call(r)}}}var lo={},zt=xn(lo),$a=xn(lo),Xa=xn(lo);function C1(e){if(e===lo)throw Error(z(174));return e}function SL(e,t){switch(J(Xa,t),J($a,e),J(zt,lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:JM(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=JM(t,e)}re(zt),J(zt,t)}function Pr(){re(zt),re($a),re(Xa)}function Sb(e){C1(Xa.current);var t=C1(zt.current),n=JM(t,e.type);t!==n&&(J($a,e),J(zt,n))}function IL(e){$a.current===e&&(re(zt),re($a))}var le=xn(0);function p9(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gM=[];function bL(){for(var e=0;e<gM.length;e++)gM[e]._workInProgressVersionPrimary=null;gM.length=0}var Do=Wt.ReactCurrentDispatcher,xM=Wt.ReactCurrentBatchConfig,R1=0,ce=null,fe=null,ve=null,k9=!1,ma=!1,Ka=0,QP=0;function Ie(){throw Error(z(321))}function jL(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function zL(e,t,n,r,a,i){if(R1=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?tR:nR,e=n(r,a),ma){i=0;do{if(ma=!1,Ka=0,25<=i)throw Error(z(301));i+=1,ve=fe=null,t.updateQueue=null,Do.current=rR,e=n(r,a)}while(ma)}if(Do.current=f9,t=fe!==null&&fe.next!==null,R1=0,ve=fe=ce=null,k9=!1,t)throw Error(z(300));return e}function AL(){var e=Ka!==0;return Ka=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ce.memoizedState=ve=e:ve=ve.next=e,ve}function ot(){if(fe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ve===null?ce.memoizedState:ve.next;if(t!==null)ve=t,fe=e;else{if(e===null)throw Error(z(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ve===null?ce.memoizedState=ve=e:ve=ve.next=e}return ve}function Qa(e,t){return typeof t=="function"?t(e):t}function MM(e){var t=ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=fe,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var c=l=null,d=null,u=i;do{var h=u.lane;if((R1&h)===h)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=p,l=r):d=d.next=p,ce.lanes|=h,H1|=h}u=u.next}while(u!==null&&u!==i);d===null?l=r:d.next=c,pt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ce.lanes|=i,H1|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wM(e){var t=ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);pt(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ib(){}function bb(e,t){var n=ce,r=ot(),a=t(),i=!pt(r.memoizedState,a);if(i&&(r.memoizedState=a,Fe=!0),r=r.queue,PL(Ab.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Ya(9,zb.bind(null,n,r,a,t),void 0,null),ge===null)throw Error(z(349));R1&30||jb(n,t,a)}return a}function jb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zb(e,t,n,r){t.value=n,t.getSnapshot=r,Pb(t)&&Rb(e)}function Ab(e,t,n){return n(function(){Pb(t)&&Rb(e)})}function Pb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Rb(e){var t=Ot(e,1);t!==null&&yt(t,e,1,-1)}function $C(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:e},t.queue=e,e=e.dispatch=eR.bind(null,ce,e),[t.memoizedState,e]}function Ya(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hb(){return ot().memoizedState}function Oo(e,t,n,r){var a=Ct();ce.flags|=e,a.memoizedState=Ya(1|t,n,void 0,r===void 0?null:r)}function V9(e,t,n,r){var a=ot();r=r===void 0?null:r;var i=void 0;if(fe!==null){var l=fe.memoizedState;if(i=l.destroy,r!==null&&jL(r,l.deps)){a.memoizedState=Ya(t,n,i,r);return}}ce.flags|=e,a.memoizedState=Ya(1|t,n,i,r)}function XC(e,t){return Oo(8390656,8,e,t)}function PL(e,t){return V9(2048,8,e,t)}function Tb(e,t){return V9(4,2,e,t)}function qb(e,t){return V9(4,4,e,t)}function Bb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vb(e,t,n){return n=n!=null?n.concat([e]):null,V9(4,4,Bb.bind(null,t,e),n)}function RL(){}function Fb(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jL(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eb(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jL(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Db(e,t,n){return R1&21?(pt(n,t)||(n=WI(),ce.lanes|=n,H1|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function YP(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=xM.transition;xM.transition={};try{e(!1),t()}finally{$=n,xM.transition=r}}function Ob(){return ot().memoizedState}function JP(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nb(e))_b(t,n);else if(n=Lb(e,t,n,r),n!==null){var a=He();yt(n,e,r,a),Ub(n,t,r)}}function eR(e,t,n){var r=un(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nb(e))_b(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,c=i(l,n);if(a.hasEagerState=!0,a.eagerState=c,pt(c,l)){var d=t.interleaved;d===null?(a.next=a,LL(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}n=Lb(e,t,a,r),n!==null&&(a=He(),yt(n,e,r,a),Ub(n,t,r))}}function Nb(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function _b(e,t){ma=k9=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ub(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sL(e,n)}}var f9={readContext:at,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},tR={readContext:at,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:XC,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4194308,4,Bb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=JP.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:$C,useDebugValue:RL,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=$C(!1),t=e[0];return e=YP.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,a=Ct();if(oe){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ge===null)throw Error(z(349));R1&30||jb(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,XC(Ab.bind(null,r,i,e),[e]),r.flags|=2048,Ya(9,zb.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ct(),t=ge.identifierPrefix;if(oe){var n=Vt,r=Bt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ka++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=QP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nR={readContext:at,useCallback:Fb,useContext:at,useEffect:PL,useImperativeHandle:Vb,useInsertionEffect:Tb,useLayoutEffect:qb,useMemo:Eb,useReducer:MM,useRef:Hb,useState:function(){return MM(Qa)},useDebugValue:RL,useDeferredValue:function(e){var t=ot();return Db(t,fe.memoizedState,e)},useTransition:function(){var e=MM(Qa)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ib,useSyncExternalStore:bb,useId:Ob,unstable_isNewReconciler:!1},rR={readContext:at,useCallback:Fb,useContext:at,useEffect:PL,useImperativeHandle:Vb,useInsertionEffect:Tb,useLayoutEffect:qb,useMemo:Eb,useReducer:wM,useRef:Hb,useState:function(){return wM(Qa)},useDebugValue:RL,useDeferredValue:function(e){var t=ot();return fe===null?t.memoizedState=e:Db(t,fe.memoizedState,e)},useTransition:function(){var e=wM(Qa)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ib,useSyncExternalStore:bb,useId:Ob,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xw(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var F9={isMounted:function(e){return(e=e._reactInternals)?D1(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),a=un(e),i=Ft(r,a);i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,a),t!==null&&(yt(t,e,a,r),Eo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),a=un(e),i=Ft(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,a),t!==null&&(yt(t,e,a,r),Eo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=un(e),a=Ft(n,r);a.tag=2,t!=null&&(a.callback=t),t=sn(e,a,r),t!==null&&(yt(t,e,r,n),Eo(t,e,r))}};function KC(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Ua(n,r)||!Ua(a,i):!0}function Wb(e,t,n){var r=!1,a=fn,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(a=De(t)?A1:ze.current,r=t.contextTypes,i=(r=r!=null)?jr(e,a):fn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=F9,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function QC(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&F9.enqueueReplaceState(t,t.state,null)}function Mw(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},CL(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=at(i):(i=De(t)?A1:ze.current,a.context=jr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xw(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&F9.enqueueReplaceState(a,a.state,null),y9(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",r=t;do n+=PA(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function LM(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ww(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var aR=typeof WeakMap=="function"?WeakMap:Map;function Zb(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){v9||(v9=!0,Rw=r),ww(e,t)},n}function Gb(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){ww(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ww(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function YC(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new aR;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=vR.bind(null,e,t,n),t.then(e,e))}function JC(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eS(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var oR=Wt.ReactCurrentOwner,Fe=!1;function Pe(e,t,n,r){t.child=e===null?wb(t,null,n,r):Ar(t,e.child,n,r)}function tS(e,t,n,r,a){n=n.render;var i=t.ref;return sr(t,a),r=zL(e,t,n,r,i,a),n=AL(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nt(e,t,a)):(oe&&n&&mL(t),t.flags|=1,Pe(e,t,r,a),t.child)}function nS(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!DL(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$b(e,t,i,r,a)):(e=Wo(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(l,r)&&e.ref===t.ref)return Nt(e,t,a)}return t.flags|=1,e=hn(i,r),e.ref=t.ref,e.return=t,t.child=e}function $b(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Ua(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Nt(e,t,a)}return Lw(e,t,n,r,a)}function Xb(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(ar,We),We|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(ar,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(ar,We),We|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(ar,We),We|=r;return Pe(e,t,a,n),t.child}function Kb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lw(e,t,n,r,a){var i=De(n)?A1:ze.current;return i=jr(t,i),sr(t,a),n=zL(e,t,n,r,i,a),r=AL(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nt(e,t,a)):(oe&&r&&mL(t),t.flags|=1,Pe(e,t,n,a),t.child)}function rS(e,t,n,r,a){if(De(n)){var i=!0;c9(t)}else i=!1;if(sr(t,a),t.stateNode===null)No(e,t),Wb(t,n,r),Mw(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=De(n)?A1:ze.current,u=jr(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||d!==u)&&QC(t,l,r,u),Yt=!1;var m=t.memoizedState;l.state=m,y9(t,r,l,a),d=t.memoizedState,c!==r||m!==d||Ee.current||Yt?(typeof h=="function"&&(xw(t,n,h,r),d=t.memoizedState),(c=Yt||KC(t,n,c,r,m,d,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=u,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Cb(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:st(t.type,c),l.props=u,p=t.pendingProps,m=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=at(d):(d=De(n)?A1:ze.current,d=jr(t,d));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==p||m!==d)&&QC(t,l,r,d),Yt=!1,m=t.memoizedState,l.state=m,y9(t,r,l,a);var w=t.memoizedState;c!==p||m!==w||Ee.current||Yt?(typeof x=="function"&&(xw(t,n,x,r),w=t.memoizedState),(u=Yt||KC(t,n,u,r,m,w,d)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=d,r=u):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Cw(e,t,n,r,i,a)}function Cw(e,t,n,r,a,i){Kb(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&NC(t,n,!1),Nt(e,t,i);r=t.stateNode,oR.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ar(t,e.child,null,i),t.child=Ar(t,null,c,i)):Pe(e,t,c,i),t.memoizedState=r.state,a&&NC(t,n,!0),t.child}function Qb(e){var t=e.stateNode;t.pendingContext?OC(e,t.pendingContext,t.pendingContext!==t.context):t.context&&OC(e,t.context,!1),SL(e,t.containerInfo)}function aS(e,t,n,r,a){return zr(),gL(a),t.flags|=256,Pe(e,t,n,r),t.child}var Sw={dehydrated:null,treeContext:null,retryLane:0};function Iw(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yb(e,t,n){var r=t.pendingProps,a=le.current,i=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),J(le,a&1),e===null)return vw(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=O9(l,r,0,null),e=I1(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Iw(n),t.memoizedState=Sw,e):HL(t,l));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return iR(e,t,l,r,c,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,c=a.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=hn(a,d),r.subtreeFlags=a.subtreeFlags&14680064),c!==null?i=hn(c,i):(i=I1(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Iw(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Sw,r}return i=e.child,e=i.sibling,r=hn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function HL(e,t){return t=O9({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Co(e,t,n,r){return r!==null&&gL(r),Ar(t,e.child,null,n),e=HL(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iR(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=LM(Error(z(422))),Co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=O9({mode:"visible",children:r.children},a,0,null),i=I1(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ar(t,e.child,null,l),t.child.memoizedState=Iw(l),t.memoizedState=Sw,i);if(!(t.mode&1))return Co(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(z(419)),r=LM(i,r,void 0),Co(e,t,l,r)}if(c=(l&e.childLanes)!==0,Fe||c){if(r=ge,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Ot(e,a),yt(r,e,a,-1))}return EL(),r=LM(Error(z(421))),Co(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=gR.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ge=cn(a.nextSibling),$e=t,oe=!0,ut=null,e!==null&&(Je[et++]=Bt,Je[et++]=Vt,Je[et++]=P1,Bt=e.id,Vt=e.overflow,P1=t),t=HL(t,r.children),t.flags|=4096,t)}function oS(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gw(e.return,t,n)}function CM(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Jb(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Pe(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oS(e,n,t);else if(e.tag===19)oS(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(le,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&p9(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),CM(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&p9(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}CM(t,!0,n,null,i);break;case"together":CM(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function No(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),H1|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lR(e,t,n){switch(t.tag){case 3:Qb(t),zr();break;case 5:Sb(t);break;case 1:De(t.type)&&c9(t);break;case 4:SL(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;J(u9,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Yb(e,t,n):(J(le,le.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);J(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jb(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),J(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Xb(e,t,n)}return Nt(e,t,n)}var ej,bw,tj,nj;ej=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bw=function(){};tj=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,C1(zt.current);var i=null;switch(n){case"input":a=XM(e,a),r=XM(e,r),i=[];break;case"select":a=se({},a,{value:void 0}),r=se({},r,{value:void 0}),i=[];break;case"textarea":a=YM(e,a),r=YM(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=i9)}ew(n,r);var l;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var c=a[u];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Va.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var d=r[u];if(c=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(i||(i=[]),i.push(u,n)),n=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(i=i||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Va.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&ne("scroll",e),i||c===d||(i=[])):(i=i||[]).push(u,d))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};nj=function(e,t,n,r){n!==r&&(t.flags|=4)};function na(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cR(e,t,n){var r=t.pendingProps;switch(vL(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return De(t.type)&&l9(),be(t),null;case 3:return r=t.stateNode,Pr(),re(Ee),re(ze),bL(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(qw(ut),ut=null))),bw(e,t),be(t),null;case 5:IL(t);var a=C1(Xa.current);if(n=t.type,e!==null&&t.stateNode!=null)tj(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return be(t),null}if(e=C1(zt.current),wo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[St]=t,r[Ga]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(a=0;a<sa.length;a++)ne(sa[a],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":pC(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":fC(r,i),ne("invalid",r)}ew(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var c=i[l];l==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,c,e),a=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,c,e),a=["children",""+c]):Va.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":yo(r),kC(r,i,!0);break;case"textarea":yo(r),mC(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=i9)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=AI(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[Ga]=r,ej(e,t,!1,!1),t.stateNode=e;e:{switch(l=tw(n,r),n){case"dialog":ne("cancel",e),ne("close",e),a=r;break;case"iframe":case"object":case"embed":ne("load",e),a=r;break;case"video":case"audio":for(a=0;a<sa.length;a++)ne(sa[a],e);a=r;break;case"source":ne("error",e),a=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),a=r;break;case"details":ne("toggle",e),a=r;break;case"input":pC(e,r),a=XM(e,r),ne("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=se({},r,{value:void 0}),ne("invalid",e);break;case"textarea":fC(e,r),a=YM(e,r),ne("invalid",e);break;default:a=r}ew(n,a),c=a;for(i in c)if(c.hasOwnProperty(i)){var d=c[i];i==="style"?HI(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&PI(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Fa(e,d):typeof d=="number"&&Fa(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Va.hasOwnProperty(i)?d!=null&&i==="onScroll"&&ne("scroll",e):d!=null&&rL(e,i,d,l))}switch(n){case"input":yo(e),kC(e,r,!1);break;case"textarea":yo(e),mC(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?or(e,!!r.multiple,i,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=i9)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)nj(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=C1(Xa.current),C1(zt.current),wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return be(t),null;case 13:if(re(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ge!==null&&t.mode&1&&!(t.flags&128))xb(),zr(),t.flags|=98560,i=!1;else if(i=wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[St]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),i=!1}else ut!==null&&(qw(ut),ut=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?me===0&&(me=3):EL())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Pr(),bw(e,t),e===null&&Wa(t.stateNode.containerInfo),be(t),null;case 10:return wL(t.type._context),be(t),null;case 17:return De(t.type)&&l9(),be(t),null;case 19:if(re(le),i=t.memoizedState,i===null)return be(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)na(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=p9(e),l!==null){for(t.flags|=128,na(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>Hr&&(t.flags|=128,r=!0,na(i,!1),t.lanes=4194304)}else{if(!r)if(e=p9(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),na(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!oe)return be(t),null}else 2*ue()-i.renderingStartTime>Hr&&n!==1073741824&&(t.flags|=128,r=!0,na(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=le.current,J(le,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return FL(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function sR(e,t){switch(vL(t),t.tag){case 1:return De(t.type)&&l9(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),re(Ee),re(ze),bL(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return IL(t),null;case 13:if(re(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(le),null;case 4:return Pr(),null;case 10:return wL(t.type._context),null;case 22:case 23:return FL(),null;case 24:return null;default:return null}}var So=!1,je=!1,dR=typeof WeakSet=="function"?WeakSet:Set,R=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function jw(e,t,n){try{n()}catch(r){de(e,t,r)}}var iS=!1;function uR(e,t){if(uw=r9,e=lb(),fL(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,c=-1,d=-1,u=0,h=0,p=e,m=null;t:for(;;){for(var x;p!==n||a!==0&&p.nodeType!==3||(c=l+a),p!==i||r!==0&&p.nodeType!==3||(d=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===e)break t;if(m===n&&++u===a&&(c=l),m===i&&++h===r&&(d=l),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(hw={focusedElem:e,selectionRange:n},r9=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var f=w.memoizedProps,M=w.memoizedState,k=t.stateNode,y=k.getSnapshotBeforeUpdate(t.elementType===t.type?f:st(t.type,f),M);k.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(L){de(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=iS,iS=!1,w}function va(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&jw(t,n,i)}a=a.next}while(a!==r)}}function E9(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zw(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rj(e){var t=e.alternate;t!==null&&(e.alternate=null,rj(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Ga],delete t[kw],delete t[GP],delete t[$P])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function aj(e){return e.tag===5||e.tag===3||e.tag===4}function lS(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||aj(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Aw(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=i9));else if(r!==4&&(e=e.child,e!==null))for(Aw(e,t,n),e=e.sibling;e!==null;)Aw(e,t,n),e=e.sibling}function Pw(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pw(e,t,n),e=e.sibling;e!==null;)Pw(e,t,n),e=e.sibling}var xe=null,dt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)oj(e,t,n),n=n.sibling}function oj(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(P9,n)}catch{}switch(n.tag){case 5:je||rr(n,t);case 6:var r=xe,a=dt;xe=null,Gt(e,t,n),xe=r,dt=a,xe!==null&&(dt?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(dt?(e=xe,n=n.stateNode,e.nodeType===8?mM(e.parentNode,n):e.nodeType===1&&mM(e,n),Na(e)):mM(xe,n.stateNode));break;case 4:r=xe,a=dt,xe=n.stateNode.containerInfo,dt=!0,Gt(e,t,n),xe=r,dt=a;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&jw(n,t,l),a=a.next}while(a!==r)}Gt(e,t,n);break;case 1:if(!je&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){de(n,t,c)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Gt(e,t,n),je=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function cS(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dR),t.forEach(function(r){var a=xR.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:xe=c.stateNode,dt=!1;break e;case 3:xe=c.stateNode.containerInfo,dt=!0;break e;case 4:xe=c.stateNode.containerInfo,dt=!0;break e}c=c.return}if(xe===null)throw Error(z(160));oj(i,l,a),xe=null,dt=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(u){de(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ij(t,e),t=t.sibling}function ij(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),xt(e),r&4){try{va(3,e,e.return),E9(3,e)}catch(f){de(e,e.return,f)}try{va(5,e,e.return)}catch(f){de(e,e.return,f)}}break;case 1:lt(t,e),xt(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(lt(t,e),xt(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var a=e.stateNode;try{Fa(a,"")}catch(f){de(e,e.return,f)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&jI(a,i),tw(c,l);var u=tw(c,i);for(l=0;l<d.length;l+=2){var h=d[l],p=d[l+1];h==="style"?HI(a,p):h==="dangerouslySetInnerHTML"?PI(a,p):h==="children"?Fa(a,p):rL(a,h,p,u)}switch(c){case"input":KM(a,i);break;case"textarea":zI(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?or(a,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?or(a,!!i.multiple,i.defaultValue,!0):or(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ga]=i}catch(f){de(e,e.return,f)}}break;case 6:if(lt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(z(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(f){de(e,e.return,f)}}break;case 3:if(lt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(t.containerInfo)}catch(f){de(e,e.return,f)}break;case 4:lt(t,e),xt(e);break;case 13:lt(t,e),xt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(BL=ue())),r&4&&cS(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||h,lt(t,e),je=u):lt(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(p=R=h;R!==null;){switch(m=R,x=m.child,m.tag){case 0:case 11:case 14:case 15:va(4,m,m.return);break;case 1:rr(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(f){de(r,n,f)}}break;case 5:rr(m,m.return);break;case 22:if(m.memoizedState!==null){dS(p);continue}}x!==null?(x.return=m,R=x):dS(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{a=p.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=p.stateNode,d=p.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=RI("display",l))}catch(f){de(e,e.return,f)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(f){de(e,e.return,f)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),xt(e),r&4&&cS(e);break;case 21:break;default:lt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(aj(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Fa(a,""),r.flags&=-33);var i=lS(e);Pw(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,c=lS(e);Aw(e,c,l);break;default:throw Error(z(161))}}catch(d){de(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hR(e,t,n){R=e,lj(e)}function lj(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var a=R,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||So;if(!l){var c=a.alternate,d=c!==null&&c.memoizedState!==null||je;c=So;var u=je;if(So=l,(je=d)&&!u)for(R=a;R!==null;)l=R,d=l.child,l.tag===22&&l.memoizedState!==null?uS(a):d!==null?(d.return=l,R=d):uS(a);for(;i!==null;)R=i,lj(i),i=i.sibling;R=a,So=c,je=u}sS(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,R=i):sS(e)}}function sS(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||E9(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&GC(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}GC(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Na(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}je||t.flags&512&&zw(t)}catch(m){de(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function dS(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function uS(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{E9(4,t)}catch(d){de(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(d){de(t,a,d)}}var i=t.return;try{zw(t)}catch(d){de(t,i,d)}break;case 5:var l=t.return;try{zw(t)}catch(d){de(t,l,d)}}}catch(d){de(t,t.return,d)}if(t===e){R=null;break}var c=t.sibling;if(c!==null){c.return=t.return,R=c;break}R=t.return}}var yR=Math.ceil,m9=Wt.ReactCurrentDispatcher,TL=Wt.ReactCurrentOwner,rt=Wt.ReactCurrentBatchConfig,G=0,ge=null,ke=null,Me=0,We=0,ar=xn(0),me=0,Ja=null,H1=0,D9=0,qL=0,ga=null,Ve=null,BL=0,Hr=1/0,Tt=null,v9=!1,Rw=null,dn=null,Io=!1,nn=null,g9=0,xa=0,Hw=null,_o=-1,Uo=0;function He(){return G&6?ue():_o!==-1?_o:_o=ue()}function un(e){return e.mode&1?G&2&&Me!==0?Me&-Me:KP.transition!==null?(Uo===0&&(Uo=WI()),Uo):(e=$,e!==0||(e=window.event,e=e===void 0?16:YI(e.type)),e):1}function yt(e,t,n,r){if(50<xa)throw xa=0,Hw=null,Error(z(185));ao(e,n,r),(!(G&2)||e!==ge)&&(e===ge&&(!(G&2)&&(D9|=n),me===4&&en(e,Me)),Oe(e,r),n===1&&G===0&&!(t.mode&1)&&(Hr=ue()+500,B9&&Mn()))}function Oe(e,t){var n=e.callbackNode;KA(e,t);var r=n9(e,e===ge?Me:0);if(r===0)n!==null&&xC(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xC(n),t===1)e.tag===0?XP(hS.bind(null,e)):mb(hS.bind(null,e)),WP(function(){!(G&6)&&Mn()}),n=null;else{switch(ZI(r)){case 1:n=cL;break;case 4:n=_I;break;case 16:n=t9;break;case 536870912:n=UI;break;default:n=t9}n=kj(n,cj.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cj(e,t){if(_o=-1,Uo=0,G&6)throw Error(z(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=n9(e,e===ge?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=x9(e,r);else{t=r;var a=G;G|=2;var i=dj();(ge!==e||Me!==t)&&(Tt=null,Hr=ue()+500,S1(e,t));do try{fR();break}catch(c){sj(e,c)}while(!0);ML(),m9.current=i,G=a,ke!==null?t=0:(ge=null,Me=0,t=me)}if(t!==0){if(t===2&&(a=iw(e),a!==0&&(r=a,t=Tw(e,a))),t===1)throw n=Ja,S1(e,0),en(e,r),Oe(e,ue()),n;if(t===6)en(e,r);else{if(a=e.current.alternate,!(r&30)&&!pR(a)&&(t=x9(e,r),t===2&&(i=iw(e),i!==0&&(r=i,t=Tw(e,i))),t===1))throw n=Ja,S1(e,0),en(e,r),Oe(e,ue()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:jn(e,Ve,Tt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=BL+500-ue(),10<t)){if(n9(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=pw(jn.bind(null,e,Ve,Tt),t);break}jn(e,Ve,Tt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ht(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yR(r/1960))-r,10<r){e.timeoutHandle=pw(jn.bind(null,e,Ve,Tt),r);break}jn(e,Ve,Tt);break;case 5:jn(e,Ve,Tt);break;default:throw Error(z(329))}}}return Oe(e,ue()),e.callbackNode===n?cj.bind(null,e):null}function Tw(e,t){var n=ga;return e.current.memoizedState.isDehydrated&&(S1(e,t).flags|=256),e=x9(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&qw(t)),e}function qw(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function pR(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!pt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~qL,t&=~D9,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function hS(e){if(G&6)throw Error(z(327));dr();var t=n9(e,0);if(!(t&1))return Oe(e,ue()),null;var n=x9(e,t);if(e.tag!==0&&n===2){var r=iw(e);r!==0&&(t=r,n=Tw(e,r))}if(n===1)throw n=Ja,S1(e,0),en(e,t),Oe(e,ue()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,Ve,Tt),Oe(e,ue()),null}function VL(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Hr=ue()+500,B9&&Mn())}}function T1(e){nn!==null&&nn.tag===0&&!(G&6)&&dr();var t=G;G|=1;var n=rt.transition,r=$;try{if(rt.transition=null,$=1,e)return e()}finally{$=r,rt.transition=n,G=t,!(G&6)&&Mn()}}function FL(){We=ar.current,re(ar)}function S1(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,UP(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(vL(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&l9();break;case 3:Pr(),re(Ee),re(ze),bL();break;case 5:IL(r);break;case 4:Pr();break;case 13:re(le);break;case 19:re(le);break;case 10:wL(r.type._context);break;case 22:case 23:FL()}n=n.return}if(ge=e,ke=e=hn(e.current,null),Me=We=t,me=0,Ja=null,qL=D9=H1=0,Ve=ga=null,L1!==null){for(t=0;t<L1.length;t++)if(n=L1[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}L1=null}return e}function sj(e,t){do{var n=ke;try{if(ML(),Do.current=f9,k9){for(var r=ce.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}k9=!1}if(R1=0,ve=fe=ce=null,ma=!1,Ka=0,TL.current=null,n===null||n.return===null){me=1,Ja=t,ke=null;break}e:{var i=e,l=n.return,c=n,d=t;if(t=Me,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,h=c,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=JC(l);if(x!==null){x.flags&=-257,eS(x,l,c,i,t),x.mode&1&&YC(i,u,t),t=x,d=u;var w=t.updateQueue;if(w===null){var f=new Set;f.add(d),t.updateQueue=f}else w.add(d);break e}else{if(!(t&1)){YC(i,u,t),EL();break e}d=Error(z(426))}}else if(oe&&c.mode&1){var M=JC(l);if(M!==null){!(M.flags&65536)&&(M.flags|=256),eS(M,l,c,i,t),gL(Rr(d,c));break e}}i=d=Rr(d,c),me!==4&&(me=2),ga===null?ga=[i]:ga.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var k=Zb(i,d,t);ZC(i,k);break e;case 1:c=d;var y=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dn===null||!dn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var L=Gb(i,c,t);ZC(i,L);break e}}i=i.return}while(i!==null)}hj(n)}catch(C){t=C,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function dj(){var e=m9.current;return m9.current=f9,e===null?f9:e}function EL(){(me===0||me===3||me===2)&&(me=4),ge===null||!(H1&268435455)&&!(D9&268435455)||en(ge,Me)}function x9(e,t){var n=G;G|=2;var r=dj();(ge!==e||Me!==t)&&(Tt=null,S1(e,t));do try{kR();break}catch(a){sj(e,a)}while(!0);if(ML(),G=n,m9.current=r,ke!==null)throw Error(z(261));return ge=null,Me=0,me}function kR(){for(;ke!==null;)uj(ke)}function fR(){for(;ke!==null&&!OA();)uj(ke)}function uj(e){var t=pj(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?hj(e):ke=t,TL.current=null}function hj(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sR(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ke=null;return}}else if(n=cR(n,t,We),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);me===0&&(me=5)}function jn(e,t,n){var r=$,a=rt.transition;try{rt.transition=null,$=1,mR(e,t,n,r)}finally{rt.transition=a,$=r}return null}function mR(e,t,n,r){do dr();while(nn!==null);if(G&6)throw Error(z(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(QA(e,i),e===ge&&(ke=ge=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Io||(Io=!0,kj(t9,function(){return dr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=rt.transition,rt.transition=null;var l=$;$=1;var c=G;G|=4,TL.current=null,uR(e,n),ij(n,e),VP(hw),r9=!!uw,hw=uw=null,e.current=n,hR(n),NA(),G=c,$=l,rt.transition=i}else e.current=n;if(Io&&(Io=!1,nn=e,g9=a),i=e.pendingLanes,i===0&&(dn=null),WA(n.stateNode),Oe(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(v9)throw v9=!1,e=Rw,Rw=null,e;return g9&1&&e.tag!==0&&dr(),i=e.pendingLanes,i&1?e===Hw?xa++:(xa=0,Hw=e):xa=0,Mn(),null}function dr(){if(nn!==null){var e=ZI(g9),t=rt.transition,n=$;try{if(rt.transition=null,$=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,g9=0,G&6)throw Error(z(331));var a=G;for(G|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var c=i.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(R=u;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:va(8,h,i)}var p=h.child;if(p!==null)p.return=h,R=p;else for(;R!==null;){h=R;var m=h.sibling,x=h.return;if(rj(h),h===u){R=null;break}if(m!==null){m.return=x,R=m;break}R=x}}}var w=i.alternate;if(w!==null){var f=w.child;if(f!==null){w.child=null;do{var M=f.sibling;f.sibling=null,f=M}while(f!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:va(9,i,i.return)}var k=i.sibling;if(k!==null){k.return=i.return,R=k;break e}R=i.return}}var y=e.current;for(R=y;R!==null;){l=R;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,R=v;else e:for(l=y;R!==null;){if(c=R,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:E9(9,c)}}catch(C){de(c,c.return,C)}if(c===l){R=null;break e}var L=c.sibling;if(L!==null){L.return=c.return,R=L;break e}R=c.return}}if(G=a,Mn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(P9,e)}catch{}r=!0}return r}finally{$=n,rt.transition=t}}return!1}function yS(e,t,n){t=Rr(n,t),t=Zb(e,t,1),e=sn(e,t,1),t=He(),e!==null&&(ao(e,1,t),Oe(e,t))}function de(e,t,n){if(e.tag===3)yS(e,e,n);else for(;t!==null;){if(t.tag===3){yS(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=Rr(n,e),e=Gb(t,e,1),t=sn(t,e,1),e=He(),t!==null&&(ao(t,1,e),Oe(t,e));break}}t=t.return}}function vR(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(Me&n)===n&&(me===4||me===3&&(Me&130023424)===Me&&500>ue()-BL?S1(e,0):qL|=n),Oe(e,t)}function yj(e,t){t===0&&(e.mode&1?(t=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):t=1);var n=He();e=Ot(e,t),e!==null&&(ao(e,t,n),Oe(e,n))}function gR(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yj(e,n)}function xR(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),yj(e,n)}var pj;pj=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,lR(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,oe&&t.flags&1048576&&vb(t,d9,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;No(e,t),e=t.pendingProps;var a=jr(t,ze.current);sr(t,n),a=zL(null,t,r,e,a,n);var i=AL();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(i=!0,c9(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,CL(t),a.updater=F9,t.stateNode=a,a._reactInternals=t,Mw(t,r,e,n),t=Cw(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&mL(t),Pe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(No(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=wR(r),e=st(r,e),a){case 0:t=Lw(null,t,r,e,n);break e;case 1:t=rS(null,t,r,e,n);break e;case 11:t=tS(null,t,r,e,n);break e;case 14:t=nS(null,t,r,st(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),Lw(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),rS(e,t,r,a,n);case 3:e:{if(Qb(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Cb(e,t),y9(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Rr(Error(z(423)),t),t=aS(e,t,r,n,a);break e}else if(r!==a){a=Rr(Error(z(424)),t),t=aS(e,t,r,n,a);break e}else for(Ge=cn(t.stateNode.containerInfo.firstChild),$e=t,oe=!0,ut=null,n=wb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===a){t=Nt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return Sb(t),e===null&&vw(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,yw(r,a)?l=null:i!==null&&yw(r,i)&&(t.flags|=32),Kb(e,t),Pe(e,t,l,n),t.child;case 6:return e===null&&vw(t),null;case 13:return Yb(e,t,n);case 4:return SL(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),tS(e,t,r,a,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,J(u9,r._currentValue),r._currentValue=l,i!==null)if(pt(i.value,l)){if(i.children===a.children&&!Ee.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){l=i.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=Ft(-1,n&-n),d.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?d.next=d:(d.next=h.next,h.next=d),u.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),gw(i.return,n,t),c.lanes|=n;break}d=d.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),gw(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Pe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,sr(t,n),a=at(a),r=r(a),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,a=st(r,t.pendingProps),a=st(r.type,a),nS(e,t,r,a,n);case 15:return $b(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),No(e,t),t.tag=1,De(r)?(e=!0,c9(t)):e=!1,sr(t,n),Wb(t,r,a),Mw(t,r,a,n),Cw(null,t,r,!0,e,n);case 19:return Jb(e,t,n);case 22:return Xb(e,t,n)}throw Error(z(156,t.tag))};function kj(e,t){return NI(e,t)}function MR(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new MR(e,t,n,r)}function DL(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wR(e){if(typeof e=="function")return DL(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oL)return 11;if(e===iL)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wo(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")DL(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case $1:return I1(n.children,a,i,t);case aL:l=8,a|=8;break;case WM:return e=tt(12,n,t,a|2),e.elementType=WM,e.lanes=i,e;case ZM:return e=tt(13,n,t,a),e.elementType=ZM,e.lanes=i,e;case GM:return e=tt(19,n,t,a),e.elementType=GM,e.lanes=i,e;case SI:return O9(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case LI:l=10;break e;case CI:l=9;break e;case oL:l=11;break e;case iL:l=14;break e;case Qt:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=tt(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function I1(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function O9(e,t,n,r){return e=tt(22,e,r,t),e.elementType=SI,e.lanes=n,e.stateNode={isHidden:!1},e}function SM(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function IM(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function LR(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iM(0),this.expirationTimes=iM(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iM(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function OL(e,t,n,r,a,i,l,c,d){return e=new LR(e,t,n,c,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},CL(i),e}function CR(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G1,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fj(e){if(!e)return fn;e=e._reactInternals;e:{if(D1(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(De(n))return fb(e,n,t)}return t}function mj(e,t,n,r,a,i,l,c,d){return e=OL(n,r,!0,e,a,i,l,c,d),e.context=fj(null),n=e.current,r=He(),a=un(n),i=Ft(r,a),i.callback=t??null,sn(n,i,a),e.current.lanes=a,ao(e,a,r),Oe(e,r),e}function N9(e,t,n,r){var a=t.current,i=He(),l=un(a);return n=fj(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(a,t,l),e!==null&&(yt(e,a,l,i),Eo(e,a,l)),l}function M9(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pS(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function NL(e,t){pS(e,t),(e=e.alternate)&&pS(e,t)}function SR(){return null}var vj=typeof reportError=="function"?reportError:function(e){console.error(e)};function _L(e){this._internalRoot=e}_9.prototype.render=_L.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));N9(e,t,null,null)};_9.prototype.unmount=_L.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;T1(function(){N9(null,e,null,null)}),t[Dt]=null}};function _9(e){this._internalRoot=e}_9.prototype.unstable_scheduleHydration=function(e){if(e){var t=XI();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&QI(e)}};function UL(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function U9(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kS(){}function IR(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=M9(l);i.call(u)}}var l=mj(t,r,e,0,null,!1,!1,"",kS);return e._reactRootContainer=l,e[Dt]=l.current,Wa(e.nodeType===8?e.parentNode:e),T1(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var c=r;r=function(){var u=M9(d);c.call(u)}}var d=OL(e,0,!1,null,null,!1,!1,"",kS);return e._reactRootContainer=d,e[Dt]=d.current,Wa(e.nodeType===8?e.parentNode:e),T1(function(){N9(t,d,n,r)}),d}function W9(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var c=a;a=function(){var d=M9(l);c.call(d)}}N9(t,l,e,a)}else l=IR(n,t,e,a,r);return M9(l)}GI=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ca(t.pendingLanes);n!==0&&(sL(t,n|1),Oe(t,ue()),!(G&6)&&(Hr=ue()+500,Mn()))}break;case 13:T1(function(){var r=Ot(e,1);if(r!==null){var a=He();yt(r,e,1,a)}}),NL(e,1)}};dL=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=He();yt(t,e,134217728,n)}NL(e,134217728)}};$I=function(e){if(e.tag===13){var t=un(e),n=Ot(e,t);if(n!==null){var r=He();yt(n,e,t,r)}NL(e,t)}};XI=function(){return $};KI=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};rw=function(e,t,n){switch(t){case"input":if(KM(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=q9(r);if(!a)throw Error(z(90));bI(r),KM(r,a)}}}break;case"textarea":zI(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};BI=VL;VI=T1;var bR={usingClientEntryPoint:!1,Events:[io,Y1,q9,TI,qI,VL]},ra={findFiberByHostInstance:w1,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jR={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=DI(e),e===null?null:e.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||SR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{P9=bo.inject(jR),jt=bo}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bR;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!UL(t))throw Error(z(200));return CR(e,t,null,n)};Qe.createRoot=function(e,t){if(!UL(e))throw Error(z(299));var n=!1,r="",a=vj;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=OL(e,1,!1,null,null,n,!1,r,a),e[Dt]=t.current,Wa(e.nodeType===8?e.parentNode:e),new _L(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=DI(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return T1(e)};Qe.hydrate=function(e,t,n){if(!U9(t))throw Error(z(200));return W9(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!UL(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=vj;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=mj(t,null,e,1,n??null,a,!1,i,l),e[Dt]=t.current,Wa(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new _9(t)};Qe.render=function(e,t,n){if(!U9(t))throw Error(z(200));return W9(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!U9(e))throw Error(z(40));return e._reactRootContainer?(T1(function(){W9(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Qe.unstable_batchedUpdates=VL;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!U9(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return W9(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function gj(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gj)}catch(e){console.error(e)}}gj(),gI.exports=Qe;var Fr=gI.exports;const zR=lI(Fr);var fS=Fr;_M.createRoot=fS.createRoot,_M.hydrateRoot=fS.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eo.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const mS="popstate";function AR(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:l,hash:c}=r.location;return Bw("",{pathname:i,search:l,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:w9(a)}return RR(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function WL(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function PR(){return Math.random().toString(36).substr(2,8)}function vS(e,t){return{usr:e.state,key:e.key,idx:t}}function Bw(e,t,n,r){return n===void 0&&(n=null),eo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Er(t):t,{state:n,key:t&&t.key||r||PR()})}function w9(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Er(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function RR(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,c=rn.Pop,d=null,u=h();u==null&&(u=0,l.replaceState(eo({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function p(){c=rn.Pop;let M=h(),k=M==null?null:M-u;u=M,d&&d({action:c,location:f.location,delta:k})}function m(M,k){c=rn.Push;let y=Bw(f.location,M,k);u=h()+1;let v=vS(y,u),L=f.createHref(y);try{l.pushState(v,"",L)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(L)}i&&d&&d({action:c,location:f.location,delta:1})}function x(M,k){c=rn.Replace;let y=Bw(f.location,M,k);u=h();let v=vS(y,u),L=f.createHref(y);l.replaceState(v,"",L),i&&d&&d({action:c,location:f.location,delta:0})}function w(M){let k=a.location.origin!=="null"?a.location.origin:a.location.href,y=typeof M=="string"?M:w9(M);return y=y.replace(/ $/,"%20"),he(k,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,k)}let f={get action(){return c},get location(){return e(a,l)},listen(M){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(mS,p),d=M,()=>{a.removeEventListener(mS,p),d=null}},createHref(M){return t(a,M)},createURL:w,encodeLocation(M){let k=w(M);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:m,replace:x,go(M){return l.go(M)}};return f}var gS;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gS||(gS={}));function HR(e,t,n){return n===void 0&&(n="/"),TR(e,t,n)}function TR(e,t,n,r){let a=typeof t=="string"?Er(t):t,i=ZL(a.pathname||"/",n);if(i==null)return null;let l=xj(e);qR(l);let c=null;for(let d=0;c==null&&d<l.length;++d){let u=GR(i);c=UR(l[d],u)}return c}function xj(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,l,c)=>{let d={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};d.relativePath.startsWith("/")&&(he(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let u=yn([r,d.relativePath]),h=n.concat(d);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xj(i.children,t,h,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:NR(u,i.index),routesMeta:h})};return e.forEach((i,l)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))a(i,l);else for(let d of Mj(i.path))a(i,l,d)}),t}function Mj(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=Mj(r.join("/")),c=[];return c.push(...l.map(d=>d===""?i:[i,d].join("/"))),a&&c.push(...l),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function qR(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_R(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const BR=/^:[\w-]+$/,VR=3,FR=2,ER=1,DR=10,OR=-2,xS=e=>e==="*";function NR(e,t){let n=e.split("/"),r=n.length;return n.some(xS)&&(r+=OR),t&&(r+=FR),n.filter(a=>!xS(a)).reduce((a,i)=>a+(BR.test(i)?VR:i===""?ER:DR),r)}function _R(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function UR(e,t,n){let{routesMeta:r}=e,a={},i="/",l=[];for(let c=0;c<r.length;++c){let d=r[c],u=c===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",p=WR({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},h),m=d.route;if(!p)return null;Object.assign(a,p.params),l.push({params:a,pathname:yn([i,p.pathname]),pathnameBase:YR(yn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=yn([i,p.pathnameBase]))}return l}function WR(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ZR(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:r.reduce((u,h,p)=>{let{paramName:m,isOptional:x}=h;if(m==="*"){let f=c[p]||"";l=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}const w=c[p];return x&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function ZR(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),WL(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,d)=>(r.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function GR(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return WL(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ZL(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const $R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XR=e=>$R.test(e);function KR(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Er(e):e,i;if(n)if(XR(n))i=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),WL(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?i=MS(n.substring(1),"/"):i=MS(n,t)}else i=t;return{pathname:i,search:JR(r),hash:eH(a)}}function MS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function bM(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QR(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function GL(e,t){let n=QR(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $L(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Er(e):(a=eo({},e),he(!a.pathname||!a.pathname.includes("?"),bM("?","pathname","search",a)),he(!a.pathname||!a.pathname.includes("#"),bM("#","pathname","hash",a)),he(!a.search||!a.search.includes("#"),bM("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,c;if(l==null)c=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}c=p>=0?t[p]:"/"}let d=KR(a,c),u=l&&l!=="/"&&l.endsWith("/"),h=(i||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(u||h)&&(d.pathname+="/"),d}const yn=e=>e.join("/").replace(/\/\/+/g,"/"),YR=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),JR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,eH=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tH(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wj=["post","put","patch","delete"];new Set(wj);const nH=["get",...wj];new Set(nH);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},to.apply(this,arguments)}const XL=g.createContext(null),rH=g.createContext(null),wn=g.createContext(null),Z9=g.createContext(null),Ln=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Lj=g.createContext(null);function aH(e,t){let{relative:n}=t===void 0?{}:t;Dr()||he(!1);let{basename:r,navigator:a}=g.useContext(wn),{hash:i,pathname:l,search:c}=Ij(e,{relative:n}),d=l;return r!=="/"&&(d=l==="/"?r:yn([r,l])),a.createHref({pathname:d,search:c,hash:i})}function Dr(){return g.useContext(Z9)!=null}function Or(){return Dr()||he(!1),g.useContext(Z9).location}function Cj(e){g.useContext(wn).static||g.useLayoutEffect(e)}function Sj(){let{isDataRoute:e}=g.useContext(Ln);return e?mH():oH()}function oH(){Dr()||he(!1);let e=g.useContext(XL),{basename:t,future:n,navigator:r}=g.useContext(wn),{matches:a}=g.useContext(Ln),{pathname:i}=Or(),l=JSON.stringify(GL(a,n.v7_relativeSplatPath)),c=g.useRef(!1);return Cj(()=>{c.current=!0}),g.useCallback(function(u,h){if(h===void 0&&(h={}),!c.current)return;if(typeof u=="number"){r.go(u);return}let p=$L(u,JSON.parse(l),i,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:yn([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,l,i,e])}function Ij(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=g.useContext(wn),{matches:a}=g.useContext(Ln),{pathname:i}=Or(),l=JSON.stringify(GL(a,r.v7_relativeSplatPath));return g.useMemo(()=>$L(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function iH(e,t){return lH(e,t)}function lH(e,t,n,r){Dr()||he(!1);let{navigator:a}=g.useContext(wn),{matches:i}=g.useContext(Ln),l=i[i.length-1],c=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let u=Or(),h;if(t){var p;let M=typeof t=="string"?Er(t):t;d==="/"||(p=M.pathname)!=null&&p.startsWith(d)||he(!1),h=M}else h=u;let m=h.pathname||"/",x=m;if(d!=="/"){let M=d.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(M.length).join("/")}let w=HR(e,{pathname:x}),f=hH(w&&w.map(M=>Object.assign({},M,{params:Object.assign({},c,M.params),pathname:yn([d,a.encodeLocation?a.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?d:yn([d,a.encodeLocation?a.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),i,n,r);return t&&f?g.createElement(Z9.Provider,{value:{location:to({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:rn.Pop}},f):f}function cH(){let e=fH(),t=tH(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:a},n):null,null)}const sH=g.createElement(cH,null);class dH extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(Ln.Provider,{value:this.props.routeContext},g.createElement(Lj.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uH(e){let{routeContext:t,match:n,children:r}=e,a=g.useContext(XL);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(Ln.Provider,{value:t},r)}function hH(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(a=n)==null?void 0:a.errors;if(c!=null){let h=l.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);h>=0||he(!1),l=l.slice(0,Math.min(l.length,h+1))}let d=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let p=l[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=h),p.route.id){let{loaderData:m,errors:x}=n,w=p.route.loader&&m[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||w){d=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,p,m)=>{let x,w=!1,f=null,M=null;n&&(x=c&&p.route.id?c[p.route.id]:void 0,f=p.route.errorElement||sH,d&&(u<0&&m===0?(vH("route-fallback"),w=!0,M=null):u===m&&(w=!0,M=p.route.hydrateFallbackElement||null)));let k=t.concat(l.slice(0,m+1)),y=()=>{let v;return x?v=f:w?v=M:p.route.Component?v=g.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=h,g.createElement(uH,{match:p,routeContext:{outlet:h,matches:k,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?g.createElement(dH,{location:n.location,revalidation:n.revalidation,component:f,error:x,children:y(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):y()},null)}var bj=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bj||{}),jj=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(jj||{});function yH(e){let t=g.useContext(XL);return t||he(!1),t}function pH(e){let t=g.useContext(rH);return t||he(!1),t}function kH(e){let t=g.useContext(Ln);return t||he(!1),t}function zj(e){let t=kH(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function fH(){var e;let t=g.useContext(Lj),n=pH(),r=zj();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mH(){let{router:e}=yH(bj.UseNavigateStable),t=zj(jj.UseNavigateStable),n=g.useRef(!1);return Cj(()=>{n.current=!0}),g.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,to({fromRouteId:t},i)))},[e,t])}const wS={};function vH(e,t,n){wS[e]||(wS[e]=!0)}function gH(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function xH(e){let{to:t,replace:n,state:r,relative:a}=e;Dr()||he(!1);let{future:i,static:l}=g.useContext(wn),{matches:c}=g.useContext(Ln),{pathname:d}=Or(),u=Sj(),h=$L(t,GL(c,i.v7_relativeSplatPath),d,a==="path"),p=JSON.stringify(h);return g.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:a}),[u,p,a,n,r]),null}function Ue(e){he(!1)}function MH(e){let{basename:t="/",children:n=null,location:r,navigationType:a=rn.Pop,navigator:i,static:l=!1,future:c}=e;Dr()&&he(!1);let d=t.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:d,navigator:i,static:l,future:to({v7_relativeSplatPath:!1},c)}),[d,c,i,l]);typeof r=="string"&&(r=Er(r));let{pathname:h="/",search:p="",hash:m="",state:x=null,key:w="default"}=r,f=g.useMemo(()=>{let M=ZL(h,d);return M==null?null:{location:{pathname:M,search:p,hash:m,state:x,key:w},navigationType:a}},[d,h,p,m,x,w,a]);return f==null?null:g.createElement(wn.Provider,{value:u},g.createElement(Z9.Provider,{children:n,value:f}))}function wH(e){let{children:t,location:n}=e;return iH(Vw(t),n)}new Promise(()=>{});function Vw(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(r,a)=>{if(!g.isValidElement(r))return;let i=[...t,a];if(r.type===g.Fragment){n.push.apply(n,Vw(r.props.children,i));return}r.type!==Ue&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Vw(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fw(){return Fw=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fw.apply(this,arguments)}function LH(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function CH(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function SH(e,t){return e.button===0&&(!t||t==="_self")&&!CH(e)}const IH=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bH="6";try{window.__reactRouterVersion=bH}catch{}const jH="startTransition",LS=eL[jH];function zH(e){let{basename:t,children:n,future:r,window:a}=e,i=g.useRef();i.current==null&&(i.current=AR({window:a,v5Compat:!0}));let l=i.current,[c,d]=g.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},h=g.useCallback(p=>{u&&LS?LS(()=>d(p)):d(p)},[d,u]);return g.useLayoutEffect(()=>l.listen(h),[l,h]),g.useEffect(()=>gH(r),[r]),g.createElement(MH,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const AH=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PH=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L9=g.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:l,state:c,target:d,to:u,preventScrollReset:h,viewTransition:p}=t,m=LH(t,IH),{basename:x}=g.useContext(wn),w,f=!1;if(typeof u=="string"&&PH.test(u)&&(w=u,AH))try{let v=new URL(window.location.href),L=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=ZL(L.pathname,x);L.origin===v.origin&&C!=null?u=C+L.search+L.hash:f=!0}catch{}let M=aH(u,{relative:a}),k=RH(u,{replace:l,state:c,target:d,preventScrollReset:h,relative:a,viewTransition:p});function y(v){r&&r(v),v.defaultPrevented||k(v)}return g.createElement("a",Fw({},m,{href:w||M,onClick:f||i?r:y,ref:n,target:d}))});var CS;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(CS||(CS={}));var SS;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(SS||(SS={}));function RH(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:l,viewTransition:c}=t===void 0?{}:t,d=Sj(),u=Or(),h=Ij(e,{relative:l});return g.useCallback(p=>{if(SH(p,n)){p.preventDefault();let m=r!==void 0?r:w9(u)===w9(h);d(e,{replace:m,state:a,preventScrollReset:i,relative:l,viewTransition:c})}},[u,d,h,r,a,n,e,i,l,c])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var HH={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{const n=g.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:d,...u},h)=>g.createElement("svg",{ref:h,...HH,width:a,height:a,stroke:r,strokeWidth:l?Number(i)*24/Number(a):i,className:["lucide",`lucide-${TH(e)}`,c].join(" "),...u},[...t.map(([p,m])=>g.createElement(p,m)),...Array.isArray(d)?d:[d]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=o("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=o("ActivitySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=o("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=o("AirVent",[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=o("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["polygon",{points:"12 15 17 21 7 21 12 15",key:"1sy95i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=o("AlarmClockCheck",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=o("AlarmClockOff",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=o("AlarmClock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=o("AlarmMinus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=o("AlarmPlus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=o("Album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=o("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=o("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=o("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=o("AlignCenterHorizontal",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=o("AlignCenterVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=o("AlignCenter",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=o("AlignEndHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=o("AlignEndVertical",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=o("AlignHorizontalDistributeCenter",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=o("AlignHorizontalDistributeEnd",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=o("AlignHorizontalDistributeStart",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=o("AlignHorizontalJustifyCenter",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=o("AlignHorizontalJustifyEnd",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=o("AlignHorizontalJustifyStart",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=o("AlignHorizontalSpaceAround",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=o("AlignHorizontalSpaceBetween",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=o("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=o("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=o("AlignRight",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=o("AlignStartHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=o("AlignStartVertical",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=o("AlignVerticalDistributeCenter",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M7 7H1",key:"105l6j"}],["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M5 17H2",key:"1gx9xc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=o("AlignVerticalDistributeEnd",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=o("AlignVerticalDistributeStart",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=o("AlignVerticalJustifyCenter",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=o("AlignVerticalJustifyEnd",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=o("AlignVerticalJustifyStart",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=o("AlignVerticalSpaceAround",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=o("AlignVerticalSpaceBetween",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=o("Ampersand",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=o("Ampersands",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=o("Anchor",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["line",{x1:"12",x2:"12",y1:"22",y2:"8",key:"abakz7"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=o("Angry",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h0",key:"1vxvly"}],["path",{d:"M15 10h0",key:"1j6oav"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=o("Annoyed",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=o("Antenna",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=o("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"14.31",x2:"20.05",y1:"8",y2:"17.94",key:"jdes2e"}],["line",{x1:"9.69",x2:"21.17",y1:"8",y2:"8",key:"1gubuk"}],["line",{x1:"7.38",x2:"13.12",y1:"12",y2:"2.06",key:"1m4d1n"}],["line",{x1:"9.69",x2:"3.95",y1:"16",y2:"6.06",key:"1wye2p"}],["line",{x1:"14.31",x2:"2.83",y1:"16",y2:"16",key:"1l9f4x"}],["line",{x1:"16.62",x2:"10.88",y1:"12",y2:"21.94",key:"1jjvfs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=o("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=o("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=o("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=o("ArchiveX",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=o("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=o("AreaChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z",key:"zxz28u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=o("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=o("ArrowBigDownDash",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9h6z",key:"oscb9h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=o("ArrowBigDown",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=o("ArrowBigLeftDash",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=o("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=o("ArrowBigRightDash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=o("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=o("ArrowBigUpDash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=o("ArrowBigUp",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=o("ArrowDown01",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=o("ArrowDown10",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=o("ArrowDownAZ",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=o("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=o("ArrowDownFromLine",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=o("ArrowDownLeftFromCircle",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=o("ArrowDownLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=o("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=o("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=o("ArrowDownRightFromCircle",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=o("ArrowDownRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=o("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=o("ArrowDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=o("ArrowDownToDot",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=o("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=o("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=o("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=o("ArrowDownZA",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=o("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=o("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=o("ArrowLeftFromLine",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=o("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=o("ArrowLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=o("ArrowLeftToLine",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=o("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=o("ArrowRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=o("ArrowRightFromLine",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=o("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=o("ArrowRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=o("ArrowRightToLine",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=o("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=o("ArrowUp01",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=o("ArrowUp10",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=o("ArrowUpAZ",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=o("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=o("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=o("ArrowUpFromDot",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=o("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=o("ArrowUpLeftFromCircle",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=o("ArrowUpLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=o("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=o("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=o("ArrowUpRightFromCircle",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=o("ArrowUpRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=o("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=o("ArrowUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=o("ArrowUpToLine",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=o("ArrowUpWideNarrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=o("ArrowUpZA",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=o("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=o("ArrowsUpFromLine",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=o("Asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=o("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=o("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=o("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=o("AudioWaveform",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=o("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=o("Axe",[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=o("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=o("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=o("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=o("BadgeAlert",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=o("BadgeCent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=o("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=o("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=o("BadgeEuro",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=o("BadgeHelp",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=o("BadgeIndianRupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=o("BadgeInfo",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=o("BadgeJapaneseYen",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=o("BadgeMinus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=o("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=o("BadgePlus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=o("BadgePoundSterling",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=o("BadgeRussianRuble",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=o("BadgeSwissFranc",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=o("BadgeX",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=o("Badge",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=o("BaggageClaim",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=o("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=o("Banana",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=o("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=o("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=o("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=o("BarChart4",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=o("BarChartBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1",key:"14u6mf"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1",key:"b3pek6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=o("BarChartHorizontalBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1",key:"936jl1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1",key:"jqfkpy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=o("BarChartHorizontal",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=o("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=o("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=o("Baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=o("Bath",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=o("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=o("BatteryFull",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=o("BatteryLow",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=o("BatteryMedium",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=o("BatteryWarning",[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2",key:"1if82c"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2",key:"2pdlyl"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13",key:"1uzyus"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01",key:"1y8k4g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=o("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=o("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=o("BeanOff",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=o("Bean",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=o("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=o("BedSingle",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=o("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=o("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=o("Beer",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=o("BellDot",[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",key:"xcehk"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=o("BellMinus",[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",key:"eck70s"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=o("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=o("BellPlus",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=o("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=o("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=o("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=o("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=o("Biohazard",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=o("Bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=o("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=o("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=o("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=o("BluetoothConnected",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=o("BluetoothOff",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=o("BluetoothSearching",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=o("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=o("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=o("Bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=o("Bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=o("BookA",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=o("BookAudio",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 8v3",key:"1qzp49"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=o("BookCheck",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=o("BookCopy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=o("BookDashed",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=o("BookDown",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=o("BookHeadphones",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=o("BookHeart",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",key:"1dlbw1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=o("BookImage",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17",key:"160say"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=o("BookKey",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20",key:"zb0ngp"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"m19 3 1 1",key:"ze14oc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=o("BookLock",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20",key:"dpch1j"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1",key:"9nqwug"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=o("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=o("BookMinus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=o("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=o("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=o("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=o("BookPlus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=o("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 7h6",key:"1f0q6e"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=o("BookType",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M10 13h4",key:"ytezjc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=o("BookUp2",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"1nfm9i"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=o("BookUp",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=o("BookUser",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=o("BookX",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=o("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=o("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=o("BookmarkMinus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=o("BookmarkPlus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=o("BookmarkX",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=o("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=o("BoomBox",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=o("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=o("BoxSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=o("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=o("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=o("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=o("Brackets",[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=o("BrainCircuit",[["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z",key:"ixwj2a"}],["path",{d:"M16 8V5c0-1.1.9-2 2-2",key:"13dx7u"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",key:"1s25gz"}],["path",{d:"M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",key:"127460"}],["path",{d:"M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",key:"fys062"}],["path",{d:"M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",key:"1vib61"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=o("BrainCog",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5",key:"1f4le0"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=o("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=o("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=o("BringToFront",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=o("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=o("BugOff",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=o("BugPlay",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m12 12 8 5-8 5Z",key:"1ydf81"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=o("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=o("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=o("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=o("BusFront",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=o("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=o("CableCar",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=o("Cable",[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z",key:"1s6oa5"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M7 5V3",key:"1t1388"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9",key:"1ytv72"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z",key:"sdz6o8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=o("CakeSlice",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=o("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=o("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=o("CalendarCheck2",[["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=o("CalendarCheck",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=o("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.25V14",key:"re2vv1"}],["path",{d:"M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",key:"ame013"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=o("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=o("CalendarHeart",[["path",{d:"M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7",key:"1sfrvf"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=o("CalendarMinus",[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19",key:"1g9955"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=o("CalendarOff",[["path",{d:"M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"1feomx"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=o("CalendarPlus",[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["line",{x1:"19",x2:"19",y1:"16",y2:"22",key:"1ttwzi"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19",key:"1g9955"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=o("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=o("CalendarSearch",[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5",key:"18ncp8"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=o("CalendarX2",[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["line",{x1:"17",x2:"22",y1:"17",y2:"22",key:"xa9o8b"}],["line",{x1:"17",x2:"22",y1:"22",y2:"17",key:"18nitg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=o("CalendarX",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["line",{x1:"10",x2:"14",y1:"14",y2:"18",key:"1g3qc0"}],["line",{x1:"14",x2:"10",y1:"14",y2:"18",key:"1az83m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=o("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=o("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=o("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=o("CandlestickChart",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=o("CandyCane",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=o("CandyOff",[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=o("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=o("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=o("CarTaxiFront",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=o("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=o("Caravan",[["rect",{width:"4",height:"4",x:"2",y:"9",key:"1vcvhd"}],["rect",{width:"4",height:"10",x:"10",y:"9",key:"1b7ev2"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}],["path",{d:"M10 19h12v-2",key:"1yu2qx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=o("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=o("CaseLower",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=o("CaseSensitive",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=o("CaseUpper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=o("CassetteTape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=o("Cast",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=o("Castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4",key:"jdggr9"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=o("Cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=o("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=o("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=o("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=o("CheckSquare2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=o("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=o("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=o("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=o("Cherry",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=o("ChevronDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=o("ChevronDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=o("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=o("ChevronFirst",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=o("ChevronLast",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=o("ChevronLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=o("ChevronLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=o("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=o("ChevronRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=o("ChevronRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=o("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=o("ChevronUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=o("ChevronUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=o("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=o("ChevronsDownUp",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=o("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=o("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=o("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=o("ChevronsRightLeft",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=o("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=o("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=o("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=o("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=o("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=o("CigaretteOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M12 12H2v4h14",key:"91gsaq"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M18 12h-.5",key:"12ymji"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=o("Cigarette",[["path",{d:"M18 12H2v4h16",key:"2rt1hm"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=o("CircleDashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=o("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=o("CircleDotDashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=o("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=o("CircleEllipsis",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=o("CircleEqual",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=o("CircleOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=o("CircleSlash2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=o("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=o("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=o("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=o("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=o("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=o("Citrus",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=o("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=o("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=o("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=o("ClipboardEdit",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",key:"1rgxu8"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=o("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=o("ClipboardPaste",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=o("ClipboardSignature",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z",key:"johvi5"}],["path",{d:"M8 18h1",key:"13wk12"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=o("ClipboardType",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=o("ClipboardX",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=o("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=o("Clock1",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=o("Clock10",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=o("Clock11",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=o("Clock12",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=o("Clock2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=o("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=o("Clock4",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=o("Clock5",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=o("Clock6",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=o("Clock7",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=o("Clock8",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=o("Clock9",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=o("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=o("CloudCog",[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=o("CloudDrizzle",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=o("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=o("CloudHail",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=o("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=o("CloudMoonRain",[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",key:"u82z8m"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=o("CloudMoon",[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"16nha0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=o("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=o("CloudRainWind",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=o("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=o("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=o("CloudSunRain",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=o("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=o("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=o("Cloudy",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=o("Clover",[["path",{d:"M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z",key:"1gxwox"}],["path",{d:"M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16",key:"il7z7z"}],["path",{d:"M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8",key:"15bpx2"}],["path",{d:"M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z",key:"v9mug8"}],["path",{d:"m7 17-5 5",key:"1py3mz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=o("Club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=o("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=o("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=o("Codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=o("Codesandbox",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=o("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=o("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=o("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=o("Columns",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=o("Combine",[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2",key:"z1hh3n"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"83orz6"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"k86dmt"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1",key:"6vokjl"}],["polyline",{points:"7 21 10 18 7 15",key:"1k02g0"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=o("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=o("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=o("Component",[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",key:"1kciei"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",key:"1ome0g"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",key:"vbupec"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",key:"16csic"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=o("Computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=o("ConciergeBell",[["path",{d:"M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z",key:"1co3i8"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=o("Cone",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=o("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=o("Contact2",[["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=o("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=o("Container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=o("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=o("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=o("CopyCheck",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=o("CopyMinus",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=o("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=o("CopySlash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=o("CopyX",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=o("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=o("Copyleft",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=o("Copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=o("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=o("CornerDownRight",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=o("CornerLeftDown",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=o("CornerLeftUp",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=o("CornerRightDown",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=o("CornerRightUp",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=o("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=o("CornerUpRight",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=o("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=o("CreativeCommons",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=o("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=o("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=o("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=o("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=o("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=o("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=o("Cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=o("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=o("Currency",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=o("Cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=o("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=o("DatabaseZap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=o("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=o("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=o("Dessert",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=o("Diameter",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=o("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=o("Dice1",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=o("Dice2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=o("Dice3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=o("Dice4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=o("Dice5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=o("Dice6",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=o("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=o("Diff",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=o("Disc2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=o("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=o("DiscAlbum",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=o("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=o("DivideCircle",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=o("DivideSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=o("Divide",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=o("DnaOff",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",key:"sxiaad"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",key:"yn4bs1"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=o("Dna",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=o("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=o("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=o("Donut",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=o("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=o("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=o("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=o("DownloadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=o("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=o("DraftingCompass",[["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0",key:"1tsu18"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=o("Drama",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=o("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=o("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=o("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=o("Drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=o("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=o("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=o("EarOff",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=o("Ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=o("EggFried",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=o("EggOff",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=o("Egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=o("EqualNot",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=o("Equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=o("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=o("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=o("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=o("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=o("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=o("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=o("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=o("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=o("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=o("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=o("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=o("FerrisWheel",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=o("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=o("FileArchive",[["path",{d:"M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2",key:"1u864v"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=o("FileAudio2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2",key:"fkyf72"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=o("FileAudio",[["path",{d:"M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",key:"1013sb"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z",key:"gqt63y"}],["path",{d:"M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z",key:"cf7lqx"}],["path",{d:"M2 19v-3a6 6 0 0 1 12 0v3",key:"1acxgf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=o("FileAxis3d",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M8 10v8h8",key:"tlaukw"}],["path",{d:"m8 18 4-4",key:"12zab0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=o("FileBadge2",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["path",{d:"M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"13rien"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=o("FileBadge",[["path",{d:"M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6",key:"qtddq0"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=o("FileBarChart2",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=o("FileBarChart",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=o("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"h7jej2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",key:"f4a3oc"}],["path",{d:"m7 17-4.74-2.85",key:"etm6su"}],["path",{d:"m7 17 4.74-2.85",key:"5xuooz"}],["path",{d:"M7 17v5",key:"1yj1jh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=o("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=o("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=o("FileClock",[["path",{d:"M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",key:"9lo3o3"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=o("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=o("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=o("FileCog",[["circle",{cx:"6",cy:"13",r:"3",key:"1z65bp"}],["path",{d:"m9.7 14.4-.9-.3",key:"o1luaq"}],["path",{d:"m3.2 11.9-.9-.3",key:"qm3zk5"}],["path",{d:"m4.6 16.7.3-.9",key:"1o0ect"}],["path",{d:"m7.6 16.7-.4-1",key:"1ym8d1"}],["path",{d:"m4.8 10.3-.4-1",key:"18q26g"}],["path",{d:"m2.3 14.6 1-.4",key:"121m88"}],["path",{d:"m8.7 11.8 1-.4",key:"9meqp2"}],["path",{d:"m7.4 9.3-.3.9",key:"136qqn"}],["path",{d:"M14 2v6h6",key:"1kof46"}],["path",{d:"M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5",key:"xwe04"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=o("FileDiff",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=o("FileDigit",[["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M14 2v6h6",key:"1kof46"}],["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=o("FileDown",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=o("FileEdit",[["path",{d:"M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5",key:"1bg6eb"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",key:"1rgxu8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=o("FileHeart",[["path",{d:"M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",key:"dba9qu"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=o("FileImage",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["circle",{cx:"10",cy:"13",r:"2",key:"6v46hv"}],["path",{d:"m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22",key:"17vly1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=o("FileInput",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=o("FileJson2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=o("FileJson",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=o("FileKey2",[["path",{d:"M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",key:"1nw5t3"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=o("FileKey",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=o("FileLineChart",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=o("FileLock2",[["path",{d:"M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",key:"gwd2r9"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=o("FileLock",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M15 12v-2a3 3 0 1 0-6 0v2",key:"1nqnhw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=o("FileMinus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=o("FileMinus",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15",key:"110plj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=o("FileMusic",[["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",key:"skc018"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=o("FileOutput",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=o("FilePieChart",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",key:"zhyrez"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29",key:"f1t5jc"}],["path",{d:"M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z",key:"7q54ec"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=o("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=o("FilePlus",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"12",x2:"12",y1:"18",y2:"12",key:"1tsf04"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15",key:"110plj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=o("FileQuestion",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"1umxtm"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=o("FileScan",[["path",{d:"M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5",key:"uvikde"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=o("FileSearch2",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.25 16.25 15 18",key:"9eh8bj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=o("FileSearch",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",key:"am10z3"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"ychnub"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=o("FileSignature",[["path",{d:"M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5",key:"kd5d3"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z",key:"johvi5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=o("FileSpreadsheet",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=o("FileStack",[["path",{d:"M16 2v5h5",key:"kt2in0"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z",key:"1km23n"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=o("FileSymlink",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7",key:"138uzh"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M4 18v-1a2 2 0 0 1 2-2h6",key:"5uz2rn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=o("FileTerminal",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=o("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=o("FileType2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M4 18h2",key:"1xrofg"}],["path",{d:"M5 12v6",key:"150t9c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=o("FileType",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=o("FileUp",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=o("FileVideo2",[["path",{d:"M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",key:"1nti49"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=o("FileVideo",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=o("FileVolume2",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5",key:"joawwx"}],["path",{d:"M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3",key:"1f2wyw"}],["path",{d:"M8 15h.01",key:"a7atzg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=o("FileVolume",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",key:"am10z3"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m7 10-3 2H2v4h2l3 2v-8Z",key:"tazg57"}],["path",{d:"M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3",key:"1yej3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=o("FileWarning",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=o("FileX2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["path",{d:"M14 2v6h6",key:"1kof46"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=o("FileX",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"9.5",x2:"14.5",y1:"12.5",y2:"17.5",key:"izs6du"}],["line",{x1:"14.5",x2:"9.5",y1:"12.5",y2:"17.5",key:"1lehlj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=o("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=o("Files",[["path",{d:"M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",key:"cennsq"}],["path",{d:"M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8",key:"ms809a"}],["path",{d:"M15 2v5h5",key:"qq6kwv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=o("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=o("FilterX",[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=o("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=o("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=o("FishOff",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=o("FishSymbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=o("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=o("FlagOff",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=o("FlagTriangleLeft",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=o("FlagTriangleRight",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=o("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=o("FlameKindling",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=o("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=o("FlashlightOff",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=o("Flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=o("FlaskConicalOff",[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",key:"59ek9y"}],["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h9",key:"t5njau"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=o("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=o("FlaskRound",[["path",{d:"M10 2v7.31",key:"5d1hyh"}],["path",{d:"M14 9.3V1.99",key:"14k4l0"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0",key:"1r8fvy"}],["path",{d:"M5.52 16h12.96",key:"46hh1i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=o("FlipHorizontal2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=o("FlipHorizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=o("FlipVertical2",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=o("FlipVertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=o("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=o("Flower",[["path",{d:"M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15",key:"51z86h"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m8 16 1.5-1.5",key:"ce6zph"}],["path",{d:"M14.5 9.5 16 8",key:"1kzrzb"}],["path",{d:"m8 8 1.5 1.5",key:"1yv88w"}],["path",{d:"M14.5 14.5 16 16",key:"12xhjh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=o("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=o("FoldHorizontal",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=o("FoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=o("FolderArchive",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=o("FolderCheck",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=o("FolderClock",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=o("FolderClosed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=o("FolderCog",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=o("FolderDot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=o("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=o("FolderEdit",[["path",{d:"M8.4 10.6a2.1 2.1 0 1 1 2.99 2.98L6 19l-4 1 1-3.9Z",key:"10ocjb"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"1h3cz8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=o("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=o("FolderGit",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=o("FolderHeart",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"vgq86i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=o("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=o("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=o("FolderKey",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=o("FolderLock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=o("FolderMinus",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=o("FolderOpenDot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=o("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=o("FolderOutput",[["path",{d:"M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",key:"jm8npq"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=o("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=o("FolderRoot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=o("FolderSearch2",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=o("FolderSearch",[["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.5-1.5",key:"3sg1j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=o("FolderSymlink",[["path",{d:"M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",key:"1or2t8"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}],["path",{d:"M2 16v-1a2 2 0 0 1 2-2h6",key:"pgw8ln"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=o("FolderSync",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1",key:"1rkwto"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5",key:"25wejs"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5",key:"vlp1j8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=o("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=o("FolderUp",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=o("FolderX",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=o("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=o("Folders",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=o("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=o("Forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=o("FormInput",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=o("Forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=o("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=o("Framer",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=o("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=o("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=o("Fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=o("FunctionSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=o("GalleryHorizontalEnd",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=o("GalleryHorizontal",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=o("GalleryThumbnails",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=o("GalleryVerticalEnd",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=o("GalleryVertical",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=o("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=o("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=o("GanttChartSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=o("GanttChart",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=o("GaugeCircle",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=o("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=o("Gavel",[["path",{d:"m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10",key:"c9cbz0"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=o("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=o("Ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=o("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=o("GitBranchPlus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=o("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=o("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=o("GitCommitVertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=o("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=o("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=o("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=o("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=o("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=o("GitPullRequestArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=o("GitPullRequestClosed",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=o("GitPullRequestCreateArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=o("GitPullRequestCreate",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=o("GitPullRequestDraft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=o("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=o("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=o("Gitlab",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=o("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=o("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=o("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=o("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=o("Goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.55 10.23A9 9 0 1 1 8 4.94",key:"5988i3"}],["path",{d:"M8 10a5 5 0 1 0 8.9 2.02",key:"1hq7ot"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=o("Grab",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"n5nng"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"185i9d"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"11pz95"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"16yk7l"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"nzvb1c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=o("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=o("Grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=o("Grid2x2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=o("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=o("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=o("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=o("Grip",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=o("Group",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=o("Guitar",[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z",key:"15ixgv"}],["path",{d:"m17 7-5.1 5.1",key:"l9guh7"}],["circle",{cx:"11.5",cy:"12.5",r:".5",key:"1evg0a"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",key:"x9fguj"}],["path",{d:"m6 16 2 2",key:"16qmzd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=o("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=o("HandMetal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=o("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=o("HardDriveDownload",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=o("HardDriveUpload",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=o("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=o("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=o("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=o("Haze",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=o("HdmiPort",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=o("Heading1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=o("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=o("Heading3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=o("Heading4",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v4h4",key:"13sv97"}],["path",{d:"M21 10v8",key:"1kdml4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=o("Heading5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=o("Heading6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=o("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=o("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=o("HeartCrack",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=o("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=o("HeartOff",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=o("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=o("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=o("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=o("HelpingHand",[["path",{d:"m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19",key:"nitrv7"}],["path",{d:"m2 14 6 6",key:"g6j1uo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=o("Hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=o("Highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=o("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=o("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=o("HopOff",[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226",key:"10j95a"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5",key:"1mqyjd"}],["path",{d:"M17.5 17.5c-2.5 0-4 0-6-1",key:"11elt5"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5",key:"13ezvz"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5",key:"1ufrz1"}],["path",{d:"M22 22c-2 0-3.5-.5-5.5-1.5",key:"1n8vbj"}],["path",{d:"M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618",key:"1h85u8"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=o("Hop",[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1",key:"l0z2za"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5",key:"1mqyjd"}],["path",{d:"M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1",key:"10xoad"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5",key:"1a4gpx"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5",key:"1ufrz1"}],["path",{d:"M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5",key:"1ok5d2"}],["path",{d:"M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z",key:"8hlroy"}],["path",{d:"M4.5 4.5 3 3c-.184-.185-.184-.816 0-1",key:"q3aj97"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=o("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=o("Hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=o("IceCream2",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"g86ewz"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=o("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=o("ImageDown",[["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8",key:"sqts6f"}],["path",{d:"m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"1h47z9"}],["path",{d:"m14 19.5 3 3v-6",key:"1x9jmo"}],["path",{d:"m17 22.5 3-3",key:"xzuz0n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=o("ImageMinus",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=o("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=o("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=o("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=o("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=o("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=o("Indent",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=o("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=o("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=o("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=o("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=o("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=o("IterationCcw",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=o("IterationCw",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=o("JapaneseYen",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=o("Joystick",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=o("KanbanSquareDashed",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=o("KanbanSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=o("Kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=o("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",key:"1kog09"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=o("KeySquare",[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",key:"9li5bk"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4",key:"1ym3zm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=o("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=o("KeyboardMusic",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=o("Keyboard",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",ry:"2",key:"15u882"}],["path",{d:"M6 8h.001",key:"1ej0i3"}],["path",{d:"M10 8h.001",key:"1x2st2"}],["path",{d:"M14 8h.001",key:"1vkmyp"}],["path",{d:"M18 8h.001",key:"kfsenl"}],["path",{d:"M8 12h.001",key:"1sjpby"}],["path",{d:"M12 12h.001",key:"al75ts"}],["path",{d:"M16 12h.001",key:"931bgk"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=o("LampCeiling",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=o("LampDesk",[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=o("LampFloor",[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=o("LampWallDown",[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=o("LampWallUp",[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=o("Lamp",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=o("LandPlot",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=o("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=o("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=o("Laptop2",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=o("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=o("LassoSelect",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",key:"1bawls"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=o("Lasso",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=o("Laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=o("Layers2",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=o("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=o("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=o("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=o("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=o("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=o("LayoutPanelLeft",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=o("LayoutPanelTop",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=o("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=o("Layout",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"9",x2:"9",y1:"21",y2:"9",key:"wpwpyp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=o("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=o("LeafyGreen",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=o("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=o("LibrarySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=o("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=o("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=o("Ligature",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=o("LightbulbOff",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=o("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=o("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=o("Link2Off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=o("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=o("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=o("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=o("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=o("ListEnd",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=o("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=o("ListMinus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=o("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=o("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=o("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=o("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=o("ListStart",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=o("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=o("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=o("ListVideo",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=o("ListX",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=o("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=o("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=o("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=o("LocateFixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=o("LocateOff",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=o("Locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=o("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=o("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=o("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=o("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=o("Lollipop",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=o("Luggage",[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",key:"1h5fkc"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=o("MSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=o("Magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=o("MailCheck",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=o("MailMinus",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=o("MailOpen",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=o("MailPlus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=o("MailQuestion",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=o("MailSearch",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=o("MailWarning",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=o("MailX",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=o("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=o("Mailbox",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0",key:"n6nfvi"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=o("Mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=o("MapPinOff",[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",key:"12a8pk"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",key:"1r9f6y"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",key:"erynq7"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16",key:"1hwwmx"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=o("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=o("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=o("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=o("Martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=o("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=o("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=o("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=o("MegaphoneOff",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=o("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=o("Meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=o("MemoryStick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=o("MenuSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=o("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=o("Merge",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=o("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=o("MessageSquareDashed",[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2",key:"9usibi"}],["path",{d:"M11 3h3",key:"1c3ji7"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2",key:"19esxn"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1",key:"1fo1j8"}],["path",{d:"M14 17h-3",key:"1w4p2m"}],["path",{d:"m7 17-4 4v-5",key:"ph9x1h"}],["path",{d:"M3 12v-2",key:"856n1q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=o("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["line",{x1:"9",x2:"15",y1:"10",y2:"10",key:"1lj1wd"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=o("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=o("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",key:"16vlm8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=o("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=o("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=o("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=o("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=o("Microwave",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=o("Milestone",[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",key:"1mp5s7"}],["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=o("MilkOff",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=o("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=o("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=o("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=o("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=o("MinusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=o("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=o("MonitorCheck",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=o("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=o("MonitorDown",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=o("MonitorOff",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=o("MonitorPause",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=o("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=o("MonitorSmartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=o("MonitorSpeaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=o("MonitorStop",[["rect",{x:"9",y:"7",width:"6",height:"6",key:"4xvc6r"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=o("MonitorUp",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=o("MonitorX",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=o("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=o("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=o("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=o("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=o("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=o("MountainSnow",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=o("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=o("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=o("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=o("MousePointerSquareDashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=o("MousePointerSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=o("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=o("Mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=o("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=o("MoveDiagonal2",[["polyline",{points:"5 11 5 5 11 5",key:"ncfzxk"}],["polyline",{points:"19 13 19 19 13 19",key:"1mk7hk"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19",key:"mcyte3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=o("MoveDiagonal",[["polyline",{points:"13 5 19 5 19 11",key:"11219e"}],["polyline",{points:"11 19 5 19 5 13",key:"sfq3wq"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=o("MoveDownLeft",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=o("MoveDownRight",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=o("MoveDown",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=o("MoveHorizontal",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=o("MoveLeft",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=o("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=o("MoveUpLeft",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=o("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=o("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=o("MoveVertical",[["polyline",{points:"8 18 12 22 16 18",key:"1uutw3"}],["polyline",{points:"8 6 12 2 16 6",key:"d60sxy"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=o("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=o("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=o("Music3",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=o("Music4",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=o("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=o("Navigation2Off",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=o("Navigation2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=o("NavigationOff",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=o("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=o("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=o("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=o("Nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=o("NutOff",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=o("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=o("Octagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=o("Option",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=o("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=o("Outdent",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=o("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=o("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=o("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=o("PackageOpen",[["path",{d:"M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z",key:"1vy178"}],["path",{d:"m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z",key:"s3bv25"}],["line",{x1:"12",x2:"12",y1:"22",y2:"13",key:"1o4xyi"}],["path",{d:"M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5",key:"1na2nq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=o("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=o("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=o("PackageX",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=o("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=o("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=o("Paintbrush2",[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",key:"1c8kta"}],["path",{d:"M6 12V2h12v10",key:"1esbnf"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M10 2v2",key:"7u0qdc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=o("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=o("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=o("Palmtree",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",key:"epoumf"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=o("PanelBottomClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=o("PanelBottomInactive",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=o("PanelBottomOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=o("PanelBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=o("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=o("PanelLeftInactive",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=o("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=o("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"9",x2:"9",y1:"3",y2:"21",key:"13tij5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=o("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21",key:"1hpv9i"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=o("PanelRightInactive",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=o("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21",key:"1hpv9i"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=o("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21",key:"1hpv9i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=o("PanelTopClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=o("PanelTopInactive",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=o("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=o("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=o("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=o("Parentheses",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=o("ParkingCircleOff",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=o("ParkingCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=o("ParkingMeter",[["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",key:"1l50wn"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=o("ParkingSquareOff",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=o("ParkingSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=o("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=o("PauseCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=o("PauseOctagon",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z",key:"1m7qra"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=o("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=o("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=o("PcCase",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=o("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=o("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=o("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=o("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=o("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=o("PencilRuler",[["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",key:"hes763"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=o("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=o("Pentagon",[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",key:"hsj90r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=o("PercentCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=o("PercentDiamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=o("PercentSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=o("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=o("PersonStanding",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=o("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=o("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=o("PhoneIncoming",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=o("PhoneMissed",[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=o("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=o("PhoneOutgoing",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=o("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=o("PiSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=o("Pi",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=o("Piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=o("PictureInPicture2",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=o("PictureInPicture",[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",key:"bcd8fb"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2",key:"136fx3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=o("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=o("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=o("PilcrowSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=o("Pilcrow",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=o("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=o("PinOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=o("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=o("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=o("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=o("PlaneLanding",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=o("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=o("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=o("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=o("PlaySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=o("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=o("Plug2",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z",key:"nd4hoy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=o("PlugZap2",[["path",{d:"m13 2-2 2.5h3L12 7",key:"1me98u"}],["path",{d:"M10 14v-3",key:"1mllf3"}],["path",{d:"M14 14v-3",key:"1l3fkq"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z",key:"jd5pat"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=o("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=o("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=o("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=o("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=o("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=o("PocketKnife",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=o("Pocket",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=o("Podcast",[["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",key:"1n5fvv"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0",key:"jqtxkf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=o("Pointer",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"1pp0yd"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",key:"u654g"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",key:"1e2dtv"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=o("Popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=o("Popsicle",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=o("PoundSterling",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=o("PowerCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 12V6",key:"30zewn"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5",key:"1r0tk2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=o("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=o("PowerSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8",key:"15eubv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=o("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=o("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=o("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=o("Projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=o("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=o("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=o("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=o("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=o("Rabbit",[["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3",key:"1i2yr3"}],["path",{d:"M7.61 12.53a3 3 0 1 0-1.6 4.3",key:"9ygxkv"}],["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=o("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=o("Radiation",[["path",{d:"M12 12h0.01",key:"6ztbls"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=o("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=o("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=o("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=o("Radius",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=o("RailSymbol",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=o("Rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=o("Rat",[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",key:"16aj0u"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",key:"1crdmb"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5",key:"1ol3lk"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M16 9h.01",key:"1bdo4e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=o("Ratio",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=o("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",key:"wqdwcb"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17V7",key:"pyj7ub"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=o("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=o("RectangleVertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=o("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=o("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",key:"19mnr4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=o("RedoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=o("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=o("RefreshCcwDot",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=o("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=o("RefreshCwOff",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=o("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=o("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=o("Regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=o("RemoveFormatting",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=o("Repeat1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=o("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=o("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=o("ReplaceAll",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"1w9p8c"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"m45eaa"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=o("Replace",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=o("ReplyAll",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=o("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=o("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=o("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=o("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=o("RockingChair",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=o("RollerCoaster",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=o("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=o("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=o("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=o("RouteOff",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=o("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=o("Router",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=o("Rows",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=o("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=o("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=o("RussianRuble",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=o("Sailboat",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=o("Salad",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=o("Sandwich",[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3",key:"34v9d7"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",key:"1k5vfb"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z",key:"1oe7l6"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",key:"1ts2ri"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=o("SatelliteDish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=o("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=o("SaveAll",[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z",key:"1unput"}],["path",{d:"M10 2v4h6",key:"1p5sg6"}],["path",{d:"M18 18v-7h-8v7",key:"1oniuk"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=o("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=o("Scale3d",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M5 7v12h12",key:"vtaa4r"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=o("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=o("Scaling",[["path",{d:"M21 3 9 15",key:"15kdhq"}],["path",{d:"M12 3H3v18h18v-9",key:"8suug0"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=o("ScanBarcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=o("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=o("ScanFace",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=o("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=o("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=o("ScanText",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=o("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=o("ScatterChart",[["circle",{cx:"7.5",cy:"7.5",r:".5",key:"1x97lo"}],["circle",{cx:"18.5",cy:"5.5",r:".5",key:"56iowl"}],["circle",{cx:"11.5",cy:"11.5",r:".5",key:"m9xkw9"}],["circle",{cx:"7.5",cy:"16.5",r:".5",key:"14ln9z"}],["circle",{cx:"17.5",cy:"14.5",r:".5",key:"14qxqt"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=o("School2",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"8z0lq4"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"jfgdp0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=o("School",[["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=o("ScissorsLineDashed",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=o("ScissorsSquareDashedBottom",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=o("ScissorsSquare",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=o("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=o("ScreenShareOff",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=o("ScreenShare",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=o("ScrollText",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M15 12h-5",key:"r7krc0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=o("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=o("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=o("SearchCode",[["path",{d:"m9 9-2 2 2 2",key:"17gsfh"}],["path",{d:"m13 13 2-2-2-2",key:"186z8k"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=o("SearchSlash",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=o("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=o("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=o("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=o("SendToBack",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=o("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=o("SeparatorHorizontal",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=o("SeparatorVertical",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=o("ServerCog",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=o("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=o("ServerOff",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=o("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=o("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=o("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=o("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=o("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=o("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=o("Sheet",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=o("Shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=o("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=o("ShieldBan",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m4 5 14 12",key:"1ta6nf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=o("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=o("ShieldEllipsis",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=o("ShieldHalf",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=o("ShieldMinus",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=o("ShieldOff",[["path",{d:"M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2",key:"342pvf"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38",key:"p0ycf4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=o("ShieldPlus",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M12 15V7",key:"1ycneb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=o("ShieldQuestion",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=o("ShieldX",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m14.5 9-5 5",key:"1m49dw"}],["path",{d:"m9.5 9 5 5",key:"wyx7zg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=o("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=o("ShipWheel",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=o("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=o("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=o("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=o("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=o("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=o("Shovel",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=o("ShowerHead",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=o("Shrink",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=o("Shrub",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",key:"12jcau"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=o("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=o("SigmaSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=o("Sigma",[["path",{d:"M18 7V4H6l6 8-6 8h12v-3",key:"zis8ev"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=o("SignalHigh",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=o("SignalLow",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=o("SignalMedium",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=o("SignalZero",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=o("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=o("SignpostBig",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=o("Signpost",[["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z",key:"27os56"}],["path",{d:"M12 13v8",key:"1l5pq0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=o("Siren",[["path",{d:"M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z",key:"rmc51c"}],["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z",key:"yyvmjy"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=o("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=o("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=o("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=o("Slack",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=o("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=o("Slice",[["path",{d:"m8 14-6 6h9v-3",key:"zo3j9a"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",key:"1dzx0j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=o("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=o("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=o("SmartphoneCharging",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=o("SmartphoneNfc",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=o("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=o("SmilePlus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=o("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=o("Snail",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=o("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=o("Sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",key:"u5qfb7"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=o("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=o("Space",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=o("Spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=o("Sparkle",[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",key:"nraa5p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=o("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=o("Speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=o("Speech",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=o("SpellCheck2",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=o("SpellCheck",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=o("Spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=o("SplitSquareHorizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=o("SplitSquareVertical",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=o("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=o("SprayCan",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=o("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=o("SquareAsterisk",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=o("SquareCode",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=o("SquareDashedBottomCode",[["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=o("SquareDashedBottom",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=o("SquareDot",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=o("SquareEqual",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=o("SquareSlash",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=o("SquareStack",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=o("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=o("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=o("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=o("Squirrel",[["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}],["path",{d:"M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"19wibc"}],["path",{d:"M15.2 22a3 3 0 0 0-2.2-5",key:"13bpac"}],["path",{d:"M18 13h.01",key:"9veqaj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=o("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=o("StarHalf",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=o("StarOff",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=o("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=o("StepBack",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=o("StepForward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=o("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=o("Sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M15 3v6h6",key:"edgan2"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}],["path",{d:"M8 13h0",key:"jdup5h"}],["path",{d:"M16 13h0",key:"l4i2ga"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=o("StickyNote",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M15 3v6h6",key:"edgan2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=o("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=o("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=o("StretchHorizontal",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=o("StretchVertical",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=o("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=o("Subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=o("Subtitles",[["path",{d:"M7 13h4",key:"1m1xj0"}],["path",{d:"M15 13h2",key:"vgjay3"}],["path",{d:"M7 9h2",key:"1q072n"}],["path",{d:"M13 9h4",key:"o7fxw0"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z",key:"5somay"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=o("SunDim",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=o("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=o("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=o("SunSnow",[["path",{d:"M10 9a3 3 0 1 0 0 6",key:"6zmtdl"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M14 21V3",key:"1llu3z"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 4-3 3",key:"15jcng"}],["path",{d:"m14 17 3 3",key:"6tlq38"}],["path",{d:"m21 15-3-3 3-3",key:"1nlnje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=o("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=o("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=o("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=o("Superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=o("SwissFranc",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=o("SwitchCamera",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=o("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=o("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=o("Syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=o("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=o("TableProperties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=o("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=o("TabletSmartphone",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=o("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=o("Tablets",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=o("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=o("Tags",[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",key:"gt587u"}],["path",{d:"M6 9.01V9",key:"1flxpt"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=o("Tally1",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=o("Tally2",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=o("Tally3",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=o("Tally4",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=o("Tally5",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=o("Tangent",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=o("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=o("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=o("Tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=o("TerminalSquare",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=o("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=o("TestTube2",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3",key:"dg8b2p"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=o("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=o("TestTubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2",key:"12z67u"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2",key:"1q2nfy"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=o("TextCursorInput",[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=o("TextCursor",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=o("TextQuote",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=o("TextSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=o("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=o("Theater",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=o("ThermometerSnowflake",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=o("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=o("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=o("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=o("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=o("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=o("TimerOff",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=o("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=o("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=o("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=o("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=o("Tornado",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=o("Torus",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=o("TouchpadOff",[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=o("Touchpad",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=o("TowerControl",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=o("ToyBrick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=o("Tractor",[["path",{d:"M3 4h9l1 7",key:"1ftpo8"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M8 10V4",key:"1y5f7n"}],["path",{d:"M18 5c-.6 0-1 .4-1 1v5.6",key:"10zbvr"}],["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["circle",{cx:"7",cy:"15",r:".5",key:"fbsjqy"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=o("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=o("TrainFrontTunnel",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=o("TrainFront",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=o("TrainTrack",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=o("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h0",key:"q9eq1f"}],["path",{d:"M16 15h0",key:"pzrbjg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=o("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=o("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=o("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=o("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=o("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=o("Trello",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=o("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=o("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=o("TriangleRight",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=o("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=o("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=o("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=o("Turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=o("Tv2",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=o("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=o("Twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=o("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=o("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=o("UmbrellaOff",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=o("Umbrella",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=o("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=o("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=o("UndoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=o("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=o("UnfoldHorizontal",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=o("UnfoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=o("Ungroup",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=o("Unlink2",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=o("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=o("UnlockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=o("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=o("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=o("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=o("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=o("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=o("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=o("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=o("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=o("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=o("UserRoundCheck",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=o("UserRoundCog",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=o("UserRoundMinus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=o("UserRoundPlus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=o("UserRoundX",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=o("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=o("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=o("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=o("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=o("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=o("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=o("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=o("UtilityPole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=o("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=o("Vegan",[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6",key:"n7eohy"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3",key:"1dion0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=o("VenetianMask",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=o("VibrateOff",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=o("Vibrate",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=o("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=o("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=o("Videotape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=o("View",[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",key:"vptub8"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",key:"10lhjs"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=o("Voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=o("Volume1",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=o("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=o("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=o("Volume",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=o("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=o("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=o("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=o("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=o("Wallpaper",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=o("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=o("Wand",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h0",key:"kg5t1u"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=o("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=o("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=o("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=o("Waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=o("Webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=o("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=o("Weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=o("WheatOff",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=o("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=o("WholeWord",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=o("WifiOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 4.17-2.65",key:"11utq1"}],["path",{d:"M10.66 5c4.01-.36 8.14.9 11.34 3.76",key:"hxefdu"}],["path",{d:"M16.85 11.25a10 10 0 0 1 2.22 1.68",key:"q734kn"}],["path",{d:"M5 13a10 10 0 0 1 5.24-2.76",key:"piq4yl"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=o("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=o("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=o("WineOff",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=o("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=o("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=o("WrapText",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=o("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=o("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=o("XOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=o("XSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=o("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=o("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=o("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=o("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=o("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=o("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:Zo,Activity:$o,ActivitySquare:Go,AirVent:Xo,Airplay:Ko,AlarmClock:Yo,AlarmClockCheck:zn,AlarmClockOff:Qo,AlarmMinus:Jo,AlarmPlus:ei,Album:ti,AlertCircle:ni,AlertOctagon:ri,AlertTriangle:Ma,AlignCenter:ii,AlignCenterHorizontal:ai,AlignCenterVertical:oi,AlignEndHorizontal:li,AlignEndVertical:ci,AlignHorizontalDistributeCenter:si,AlignHorizontalDistributeEnd:di,AlignHorizontalDistributeStart:ui,AlignHorizontalJustifyCenter:hi,AlignHorizontalJustifyEnd:yi,AlignHorizontalJustifyStart:pi,AlignHorizontalSpaceAround:ki,AlignHorizontalSpaceBetween:fi,AlignJustify:mi,AlignLeft:ur,AlignRight:vi,AlignStartHorizontal:gi,AlignStartVertical:xi,AlignVerticalDistributeCenter:Mi,AlignVerticalDistributeEnd:wi,AlignVerticalDistributeStart:Li,AlignVerticalJustifyCenter:Ci,AlignVerticalJustifyEnd:Si,AlignVerticalJustifyStart:Ii,AlignVerticalSpaceAround:bi,AlignVerticalSpaceBetween:ji,Ampersand:zi,Ampersands:Ai,Anchor:Pi,Angry:Ri,Annoyed:Hi,Antenna:Ti,Aperture:qi,AppWindow:Bi,Apple:Vi,Archive:Di,ArchiveRestore:Fi,ArchiveX:Ei,AreaChart:Oi,Armchair:Ni,ArrowBigDown:Ui,ArrowBigDownDash:_i,ArrowBigLeft:Zi,ArrowBigLeftDash:Wi,ArrowBigRight:$i,ArrowBigRightDash:Gi,ArrowBigUp:Ki,ArrowBigUpDash:Xi,ArrowDown:hl,ArrowDown01:Qi,ArrowDown10:Yi,ArrowDownAZ:An,ArrowDownCircle:Ji,ArrowDownFromLine:el,ArrowDownLeft:rl,ArrowDownLeftFromCircle:tl,ArrowDownLeftSquare:nl,ArrowDownNarrowWide:al,ArrowDownRight:ll,ArrowDownRightFromCircle:ol,ArrowDownRightSquare:il,ArrowDownSquare:cl,ArrowDownToDot:sl,ArrowDownToLine:dl,ArrowDownUp:ul,ArrowDownWideNarrow:Pn,ArrowDownZA:Rn,ArrowLeft:vl,ArrowLeftCircle:yl,ArrowLeftFromLine:pl,ArrowLeftRight:kl,ArrowLeftSquare:fl,ArrowLeftToLine:ml,ArrowRight:wa,ArrowRightCircle:gl,ArrowRightFromLine:xl,ArrowRightLeft:Ml,ArrowRightSquare:wl,ArrowRightToLine:Ll,ArrowUp:El,ArrowUp01:Cl,ArrowUp10:Sl,ArrowUpAZ:Hn,ArrowUpCircle:Il,ArrowUpDown:bl,ArrowUpFromDot:jl,ArrowUpFromLine:zl,ArrowUpLeft:Rl,ArrowUpLeftFromCircle:Al,ArrowUpLeftSquare:Pl,ArrowUpNarrowWide:Tn,ArrowUpRight:ql,ArrowUpRightFromCircle:Hl,ArrowUpRightSquare:Tl,ArrowUpSquare:Bl,ArrowUpToLine:Vl,ArrowUpWideNarrow:Fl,ArrowUpZA:qn,ArrowsUpFromLine:Dl,Asterisk:Ol,AtSign:Nl,Atom:_l,AudioLines:Ul,AudioWaveform:Wl,Award:Zl,Axe:Gl,Axis3d:Bn,Baby:$l,Backpack:Xl,Badge:uc,BadgeAlert:Kl,BadgeCent:Ql,BadgeCheck:Vn,BadgeDollarSign:Yl,BadgeEuro:Jl,BadgeHelp:ec,BadgeIndianRupee:tc,BadgeInfo:nc,BadgeJapaneseYen:rc,BadgeMinus:ac,BadgePercent:oc,BadgePlus:ic,BadgePoundSterling:lc,BadgeRussianRuble:cc,BadgeSwissFranc:sc,BadgeX:dc,BaggageClaim:hc,Ban:yc,Banana:pc,Banknote:kc,BarChart:wc,BarChart2:fc,BarChart3:mc,BarChart4:vc,BarChartBig:gc,BarChartHorizontal:Mc,BarChartHorizontalBig:xc,Barcode:Lc,Baseline:Cc,Bath:Sc,Battery:Pc,BatteryCharging:Ic,BatteryFull:bc,BatteryLow:jc,BatteryMedium:zc,BatteryWarning:Ac,Beaker:Rc,Bean:Tc,BeanOff:Hc,Bed:Vc,BedDouble:qc,BedSingle:Bc,Beef:Fc,Beer:Ec,Bell:Wc,BellDot:Dc,BellMinus:Oc,BellOff:Nc,BellPlus:_c,BellRing:Uc,Bike:Zc,Binary:Gc,Biohazard:$c,Bird:Xc,Bitcoin:Kc,Blinds:Qc,Blocks:Yc,Bluetooth:n2,BluetoothConnected:Jc,BluetoothOff:e2,BluetoothSearching:t2,Bold:r2,Bomb:a2,Bone:o2,Book:j2,BookA:i2,BookAudio:l2,BookCheck:c2,BookCopy:s2,BookDashed:Fn,BookDown:d2,BookHeadphones:u2,BookHeart:h2,BookImage:y2,BookKey:p2,BookLock:k2,BookMarked:f2,BookMinus:m2,BookOpen:x2,BookOpenCheck:v2,BookOpenText:g2,BookPlus:M2,BookText:w2,BookType:L2,BookUp:S2,BookUp2:C2,BookUser:I2,BookX:b2,Bookmark:H2,BookmarkCheck:z2,BookmarkMinus:A2,BookmarkPlus:P2,BookmarkX:R2,BoomBox:T2,Bot:q2,Box:hr,BoxSelect:B2,Boxes:V2,Braces:En,Brackets:F2,Brain:O2,BrainCircuit:E2,BrainCog:D2,Briefcase:N2,BringToFront:_2,Brush:U2,Bug:G2,BugOff:W2,BugPlay:Z2,Building:X2,Building2:$2,Bus:Q2,BusFront:K2,Cable:J2,CableCar:Y2,Cake:ts,CakeSlice:es,Calculator:ns,Calendar:ks,CalendarCheck:as,CalendarCheck2:rs,CalendarClock:os,CalendarDays:is,CalendarHeart:ls,CalendarMinus:cs,CalendarOff:ss,CalendarPlus:ds,CalendarRange:us,CalendarSearch:hs,CalendarX:ps,CalendarX2:ys,Camera:ms,CameraOff:fs,CandlestickChart:vs,Candy:Ms,CandyCane:gs,CandyOff:xs,Car:Cs,CarFront:ws,CarTaxiFront:Ls,Caravan:Ss,Carrot:Is,CaseLower:bs,CaseSensitive:js,CaseUpper:zs,CassetteTape:As,Cast:Ps,Castle:Rs,Cat:Hs,Check:yr,CheckCheck:Ts,CheckCircle:Bs,CheckCircle2:qs,CheckSquare:Fs,CheckSquare2:Vs,ChefHat:Es,Cherry:Ds,ChevronDown:b1,ChevronDownCircle:Os,ChevronDownSquare:Ns,ChevronFirst:_s,ChevronLast:Us,ChevronLeft:Gs,ChevronLeftCircle:Ws,ChevronLeftSquare:Zs,ChevronRight:Ks,ChevronRightCircle:$s,ChevronRightSquare:Xs,ChevronUp:pr,ChevronUpCircle:Qs,ChevronUpSquare:Ys,ChevronsDown:ed,ChevronsDownUp:Js,ChevronsLeft:nd,ChevronsLeftRight:td,ChevronsRight:ad,ChevronsRightLeft:rd,ChevronsUp:od,ChevronsUpDown:La,Chrome:id,Church:ld,Cigarette:sd,CigaretteOff:cd,Circle:vd,CircleDashed:dd,CircleDollarSign:ud,CircleDot:yd,CircleDotDashed:hd,CircleEllipsis:pd,CircleEqual:kd,CircleOff:fd,CircleSlash:md,CircleSlash2:Dn,CircleUser:Nn,CircleUserRound:On,CircuitBoard:gd,Citrus:xd,Clapperboard:Md,Clipboard:Ad,ClipboardCheck:wd,ClipboardCopy:Ld,ClipboardEdit:Cd,ClipboardList:Sd,ClipboardPaste:Id,ClipboardSignature:bd,ClipboardType:jd,ClipboardX:zd,Clock:_d,Clock1:Pd,Clock10:Rd,Clock11:Hd,Clock12:Td,Clock2:qd,Clock3:Bd,Clock4:Vd,Clock5:Fd,Clock6:Ed,Clock7:Dd,Clock8:Od,Clock9:Nd,Cloud:r0,CloudCog:Ud,CloudDrizzle:Wd,CloudFog:Zd,CloudHail:Gd,CloudLightning:$d,CloudMoon:Kd,CloudMoonRain:Xd,CloudOff:Qd,CloudRain:Jd,CloudRainWind:Yd,CloudSnow:e0,CloudSun:n0,CloudSunRain:t0,Cloudy:a0,Clover:o0,Club:i0,Code:c0,Code2:l0,Codepen:s0,Codesandbox:d0,Coffee:u0,Cog:h0,Coins:y0,Columns:p0,Combine:k0,Command:f0,Compass:m0,Component:v0,Computer:g0,ConciergeBell:x0,Cone:M0,Construction:w0,Contact:C0,Contact2:L0,Container:S0,Contrast:I0,Cookie:b0,Copy:H0,CopyCheck:j0,CopyMinus:z0,CopyPlus:A0,CopySlash:P0,CopyX:R0,Copyleft:T0,Copyright:q0,CornerDownLeft:B0,CornerDownRight:V0,CornerLeftDown:F0,CornerLeftUp:E0,CornerRightDown:D0,CornerRightUp:O0,CornerUpLeft:N0,CornerUpRight:_0,Cpu:U0,CreativeCommons:W0,CreditCard:Z0,Croissant:G0,Crop:$0,Cross:X0,Crosshair:K0,Crown:Q0,Cuboid:Y0,CupSoda:J0,Currency:eu,Cylinder:tu,Database:au,DatabaseBackup:nu,DatabaseZap:ru,Delete:ou,Dessert:iu,Diameter:lu,Diamond:cu,Dice1:su,Dice2:du,Dice3:uu,Dice4:hu,Dice5:yu,Dice6:pu,Dices:ku,Diff:fu,Disc:xu,Disc2:mu,Disc3:vu,DiscAlbum:gu,Divide:Lu,DivideCircle:Mu,DivideSquare:wu,Dna:Su,DnaOff:Cu,Dog:Iu,DollarSign:bu,Donut:ju,DoorClosed:zu,DoorOpen:Au,Dot:Pu,Download:pn,DownloadCloud:Ru,DraftingCompass:Hu,Drama:Tu,Dribbble:qu,Droplet:Bu,Droplets:Vu,Drum:Fu,Drumstick:Eu,Dumbbell:Du,Ear:Nu,EarOff:Ou,Egg:Wu,EggFried:_u,EggOff:Uu,Equal:Gu,EqualNot:Zu,Eraser:$u,Euro:Xu,Expand:Ku,ExternalLink:Ca,Eye:Ia,EyeOff:Sa,Facebook:Qu,Factory:Yu,Fan:Ju,FastForward:eh,Feather:th,FerrisWheel:nh,Figma:rh,File:ay,FileArchive:ah,FileAudio:ih,FileAudio2:oh,FileAxis3d:_n,FileBadge:ch,FileBadge2:lh,FileBarChart:dh,FileBarChart2:sh,FileBox:uh,FileCheck:yh,FileCheck2:hh,FileClock:ph,FileCode:fh,FileCode2:kh,FileCog:Un,FileDiff:mh,FileDigit:vh,FileDown:gh,FileEdit:xh,FileHeart:Mh,FileImage:wh,FileInput:Lh,FileJson:Sh,FileJson2:Ch,FileKey:bh,FileKey2:Ih,FileLineChart:jh,FileLock:Ah,FileLock2:zh,FileMinus:Rh,FileMinus2:Ph,FileMusic:Hh,FileOutput:Th,FilePieChart:qh,FilePlus:Vh,FilePlus2:Bh,FileQuestion:Fh,FileScan:Eh,FileSearch:Oh,FileSearch2:Dh,FileSignature:Nh,FileSpreadsheet:_h,FileStack:Uh,FileSymlink:Wh,FileTerminal:Zh,FileText:Gh,FileType:Xh,FileType2:$h,FileUp:Kh,FileVideo:Yh,FileVideo2:Qh,FileVolume:ey,FileVolume2:Jh,FileWarning:ty,FileX:ry,FileX2:ny,Files:oy,Film:iy,Filter:cy,FilterX:ly,Fingerprint:sy,Fish:hy,FishOff:dy,FishSymbol:uy,Flag:fy,FlagOff:yy,FlagTriangleLeft:py,FlagTriangleRight:ky,Flame:vy,FlameKindling:my,Flashlight:xy,FlashlightOff:gy,FlaskConical:wy,FlaskConicalOff:My,FlaskRound:Ly,FlipHorizontal:Sy,FlipHorizontal2:Cy,FlipVertical:by,FlipVertical2:Iy,Flower:zy,Flower2:jy,Focus:Ay,FoldHorizontal:Py,FoldVertical:Ry,Folder:ip,FolderArchive:Hy,FolderCheck:Ty,FolderClock:qy,FolderClosed:By,FolderCog:Wn,FolderDot:Vy,FolderDown:Fy,FolderEdit:Ey,FolderGit:Oy,FolderGit2:Dy,FolderHeart:Ny,FolderInput:_y,FolderKanban:Uy,FolderKey:Wy,FolderLock:Zy,FolderMinus:Gy,FolderOpen:Xy,FolderOpenDot:$y,FolderOutput:Ky,FolderPlus:Qy,FolderRoot:Yy,FolderSearch:ep,FolderSearch2:Jy,FolderSymlink:tp,FolderSync:np,FolderTree:rp,FolderUp:ap,FolderX:op,Folders:lp,Footprints:cp,Forklift:sp,FormInput:dp,Forward:up,Frame:hp,Framer:yp,Frown:pp,Fuel:kp,Fullscreen:fp,FunctionSquare:mp,GalleryHorizontal:gp,GalleryHorizontalEnd:vp,GalleryThumbnails:xp,GalleryVertical:wp,GalleryVerticalEnd:Mp,Gamepad:Cp,Gamepad2:Lp,GanttChart:Sp,GanttChartSquare:Zn,Gauge:bp,GaugeCircle:Ip,Gavel:jp,Gem:zp,Ghost:Ap,Gift:Pp,GitBranch:Hp,GitBranchPlus:Rp,GitCommitHorizontal:Gn,GitCommitVertical:Tp,GitCompare:Bp,GitCompareArrows:qp,GitFork:Vp,GitGraph:Fp,GitMerge:Ep,GitPullRequest:Wp,GitPullRequestArrow:Dp,GitPullRequestClosed:Op,GitPullRequestCreate:_p,GitPullRequestCreateArrow:Np,GitPullRequestDraft:Up,Github:ba,Gitlab:Zp,GlassWater:Gp,Glasses:$p,Globe:Kp,Globe2:Xp,Goal:Qp,Grab:Yp,GraduationCap:Jp,Grape:ek,Grid2x2:$n,Grid3x3:Mt,Grip:rk,GripHorizontal:tk,GripVertical:nk,Group:ak,Guitar:ok,Hammer:ik,Hand:ck,HandMetal:lk,HardDrive:uk,HardDriveDownload:sk,HardDriveUpload:dk,HardHat:hk,Hash:yk,Haze:pk,HdmiPort:kk,Heading:wk,Heading1:fk,Heading2:mk,Heading3:vk,Heading4:gk,Heading5:xk,Heading6:Mk,Headphones:Lk,Heart:jk,HeartCrack:Ck,HeartHandshake:Sk,HeartOff:Ik,HeartPulse:bk,HelpCircle:zk,HelpingHand:Ak,Hexagon:Pk,Highlighter:Rk,History:Hk,Home:Tk,Hop:Bk,HopOff:qk,Hotel:Vk,Hourglass:Fk,IceCream:Dk,IceCream2:Ek,Image:Wk,ImageDown:Ok,ImageMinus:Nk,ImageOff:_k,ImagePlus:Uk,Import:Zk,Inbox:Gk,Indent:$k,IndianRupee:Xk,Infinity:Kk,Info:Qk,Instagram:Yk,Italic:Jk,IterationCcw:ef,IterationCw:tf,JapaneseYen:nf,Joystick:rf,Kanban:af,KanbanSquare:Kn,KanbanSquareDashed:Xn,Key:cf,KeyRound:of,KeySquare:lf,Keyboard:df,KeyboardMusic:sf,Lamp:ff,LampCeiling:uf,LampDesk:hf,LampFloor:yf,LampWallDown:pf,LampWallUp:kf,LandPlot:mf,Landmark:vf,Languages:gf,Laptop:Mf,Laptop2:xf,Lasso:Lf,LassoSelect:wf,Laugh:Cf,Layers:j1,Layers2:Sf,Layers3:If,Layout:Rf,LayoutDashboard:ja,LayoutGrid:bf,LayoutList:jf,LayoutPanelLeft:zf,LayoutPanelTop:Af,LayoutTemplate:Pf,Leaf:Hf,LeafyGreen:Tf,Library:Vf,LibraryBig:qf,LibrarySquare:Bf,LifeBuoy:Ff,Ligature:Ef,Lightbulb:Of,LightbulbOff:Df,LineChart:Nf,Link:Wf,Link2:Uf,Link2Off:_f,Linkedin:Zf,List:i4,ListChecks:Gf,ListEnd:$f,ListFilter:Xf,ListMinus:Kf,ListMusic:Qf,ListOrdered:Yf,ListPlus:Jf,ListRestart:e4,ListStart:t4,ListTodo:n4,ListTree:r4,ListVideo:a4,ListX:o4,Loader:c4,Loader2:l4,Locate:u4,LocateFixed:s4,LocateOff:d4,Lock:za,LockKeyhole:h4,LogIn:y4,LogOut:p4,Lollipop:k4,Luggage:f4,MSquare:m4,Magnet:v4,Mail:Aa,MailCheck:g4,MailMinus:x4,MailOpen:M4,MailPlus:w4,MailQuestion:L4,MailSearch:C4,MailWarning:S4,MailX:I4,Mailbox:b4,Mails:j4,Map:R4,MapPin:A4,MapPinOff:z4,MapPinned:P4,Martini:H4,Maximize:q4,Maximize2:T4,Medal:B4,Megaphone:F4,MegaphoneOff:V4,Meh:E4,MemoryStick:D4,Menu:N4,MenuSquare:O4,Merge:_4,MessageCircle:U4,MessageSquare:G4,MessageSquareDashed:W4,MessageSquarePlus:Z4,MessagesSquare:$4,Mic:Q4,Mic2:X4,MicOff:K4,Microscope:Y4,Microwave:J4,Milestone:e5,Milk:n5,MilkOff:t5,Minimize:a5,Minimize2:r5,Minus:Pa,MinusCircle:o5,MinusSquare:i5,Monitor:Ra,MonitorCheck:l5,MonitorDot:c5,MonitorDown:s5,MonitorOff:d5,MonitorPause:u5,MonitorPlay:h5,MonitorSmartphone:y5,MonitorSpeaker:p5,MonitorStop:k5,MonitorUp:f5,MonitorX:m5,Moon:Ha,MoonStar:v5,MoreHorizontal:g5,MoreVertical:x5,Mountain:w5,MountainSnow:M5,Mouse:I5,MousePointer:S5,MousePointer2:L5,MousePointerClick:kr,MousePointerSquare:Qn,MousePointerSquareDashed:C5,Move:E5,Move3d:Yn,MoveDiagonal:j5,MoveDiagonal2:b5,MoveDown:P5,MoveDownLeft:z5,MoveDownRight:A5,MoveHorizontal:R5,MoveLeft:H5,MoveRight:T5,MoveUp:V5,MoveUpLeft:q5,MoveUpRight:B5,MoveVertical:F5,Music:_5,Music2:D5,Music3:O5,Music4:N5,Navigation:G5,Navigation2:W5,Navigation2Off:U5,NavigationOff:Z5,Network:$5,Newspaper:X5,Nfc:K5,Nut:Y5,NutOff:Q5,Octagon:J5,Option:e3,Orbit:t3,Outdent:n3,Package:d3,Package2:r3,PackageCheck:a3,PackageMinus:o3,PackageOpen:i3,PackagePlus:l3,PackageSearch:c3,PackageX:s3,PaintBucket:u3,Paintbrush:y3,Paintbrush2:h3,Palette:fr,Palmtree:p3,PanelBottom:v3,PanelBottomClose:k3,PanelBottomInactive:f3,PanelBottomOpen:m3,PanelLeft:t1,PanelLeftClose:Jn,PanelLeftInactive:g3,PanelLeftOpen:e1,PanelRight:L3,PanelRightClose:x3,PanelRightInactive:M3,PanelRightOpen:w3,PanelTop:b3,PanelTopClose:C3,PanelTopInactive:S3,PanelTopOpen:I3,Paperclip:j3,Parentheses:z3,ParkingCircle:P3,ParkingCircleOff:A3,ParkingMeter:R3,ParkingSquare:T3,ParkingSquareOff:H3,PartyPopper:q3,Pause:F3,PauseCircle:B3,PauseOctagon:V3,PawPrint:E3,PcCase:D3,Pen:r1,PenLine:n1,PenSquare:wt,PenTool:O3,Pencil:Ta,PencilLine:N3,PencilRuler:_3,Pentagon:U3,Percent:$3,PercentCircle:W3,PercentDiamond:Z3,PercentSquare:G3,PersonStanding:X3,Phone:nm,PhoneCall:K3,PhoneForwarded:Q3,PhoneIncoming:Y3,PhoneMissed:J3,PhoneOff:em,PhoneOutgoing:tm,Pi:am,PiSquare:rm,Piano:om,PictureInPicture:lm,PictureInPicture2:im,PieChart:cm,PiggyBank:sm,Pilcrow:um,PilcrowSquare:dm,Pill:hm,Pin:pm,PinOff:ym,Pipette:km,Pizza:fm,Plane:gm,PlaneLanding:mm,PlaneTakeoff:vm,Play:wm,PlayCircle:xm,PlaySquare:Mm,Plug:Im,Plug2:Lm,PlugZap:Sm,PlugZap2:Cm,Plus:qa,PlusCircle:bm,PlusSquare:jm,Pocket:Am,PocketKnife:zm,Podcast:Pm,Pointer:Rm,Popcorn:Hm,Popsicle:Tm,PoundSterling:qm,Power:Em,PowerCircle:Bm,PowerOff:Vm,PowerSquare:Fm,Presentation:Dm,Printer:Om,Projector:Nm,Puzzle:_m,Pyramid:Um,QrCode:Wm,Quote:Zm,Rabbit:Gm,Radar:$m,Radiation:Xm,Radio:Ym,RadioReceiver:Km,RadioTower:Qm,Radius:Jm,RailSymbol:ev,Rainbow:tv,Rat:nv,Ratio:rv,Receipt:av,RectangleHorizontal:ov,RectangleVertical:iv,Recycle:lv,Redo:dv,Redo2:cv,RedoDot:sv,RefreshCcw:hv,RefreshCcwDot:uv,RefreshCw:pv,RefreshCwOff:yv,Refrigerator:kv,Regex:fv,RemoveFormatting:mv,Repeat:xv,Repeat1:vv,Repeat2:gv,Replace:wv,ReplaceAll:Mv,Reply:Cv,ReplyAll:Lv,Rewind:Sv,Ribbon:Iv,Rocket:bv,RockingChair:jv,RollerCoaster:zv,Rotate3d:a1,RotateCcw:Av,RotateCw:Pv,Route:Hv,RouteOff:Rv,Router:Tv,Rows:qv,Rss:Bv,Ruler:Vv,RussianRuble:Fv,Sailboat:Ev,Salad:Dv,Sandwich:Ov,Satellite:_v,SatelliteDish:Nv,Save:Wv,SaveAll:Uv,Scale:Zv,Scale3d:o1,Scaling:Gv,Scan:e6,ScanBarcode:$v,ScanEye:Xv,ScanFace:Kv,ScanLine:Qv,ScanSearch:Yv,ScanText:Jv,ScatterChart:t6,School:r6,School2:n6,Scissors:l6,ScissorsLineDashed:a6,ScissorsSquare:i6,ScissorsSquareDashedBottom:o6,ScreenShare:s6,ScreenShareOff:c6,Scroll:u6,ScrollText:d6,Search:mr,SearchCheck:h6,SearchCode:y6,SearchSlash:p6,SearchX:k6,Send:m6,SendHorizontal:i1,SendToBack:f6,SeparatorHorizontal:v6,SeparatorVertical:g6,Server:L6,ServerCog:x6,ServerCrash:M6,ServerOff:w6,Settings:S6,Settings2:C6,Shapes:I6,Share:j6,Share2:b6,Sheet:z6,Shell:A6,Shield:D6,ShieldAlert:P6,ShieldBan:R6,ShieldCheck:H6,ShieldEllipsis:T6,ShieldHalf:q6,ShieldMinus:B6,ShieldOff:V6,ShieldPlus:F6,ShieldQuestion:E6,ShieldX:l1,Ship:N6,ShipWheel:O6,Shirt:_6,ShoppingBag:U6,ShoppingBasket:W6,ShoppingCart:Z6,Shovel:G6,ShowerHead:$6,Shrink:X6,Shrub:K6,Shuffle:Q6,Sigma:J6,SigmaSquare:Y6,Signal:a8,SignalHigh:e8,SignalLow:t8,SignalMedium:n8,SignalZero:r8,Signpost:i8,SignpostBig:o8,Siren:l8,SkipBack:c8,SkipForward:s8,Skull:d8,Slack:u8,Slash:h8,Slice:y8,Sliders:k8,SlidersHorizontal:p8,Smartphone:v8,SmartphoneCharging:f8,SmartphoneNfc:m8,Smile:x8,SmilePlus:g8,Snail:M8,Snowflake:w8,Sofa:L8,Soup:C8,Space:S8,Spade:I8,Sparkle:b8,Sparkles:c1,Speaker:j8,Speech:z8,SpellCheck:P8,SpellCheck2:A8,Spline:R8,Split:q8,SplitSquareHorizontal:H8,SplitSquareVertical:T8,SprayCan:B8,Sprout:V8,Square:vr,SquareAsterisk:F8,SquareCode:E8,SquareDashedBottom:O8,SquareDashedBottomCode:D8,SquareDot:N8,SquareEqual:_8,SquareSlash:U8,SquareStack:W8,SquareUser:d1,SquareUserRound:s1,Squirrel:Z8,Stamp:G8,Star:K8,StarHalf:$8,StarOff:X8,StepBack:Q8,StepForward:Y8,Stethoscope:J8,Sticker:eg,StickyNote:tg,StopCircle:ng,Store:rg,StretchHorizontal:ag,StretchVertical:og,Strikethrough:ig,Subscript:lg,Subtitles:cg,Sun:Ba,SunDim:sg,SunMedium:dg,SunMoon:ug,SunSnow:hg,Sunrise:yg,Sunset:pg,Superscript:kg,SwissFranc:fg,SwitchCamera:mg,Sword:vg,Swords:gg,Syringe:xg,Table:wg,Table2:Mg,TableProperties:gr,Tablet:Cg,TabletSmartphone:Lg,Tablets:Sg,Tag:xr,Tags:Ig,Tally1:bg,Tally2:jg,Tally3:zg,Tally4:Ag,Tally5:Pg,Tangent:Rg,Target:Hg,Tent:qg,TentTree:Tg,Terminal:Vg,TerminalSquare:Bg,TestTube:Eg,TestTube2:Fg,TestTubes:Dg,Text:Ug,TextCursor:Ng,TextCursorInput:Og,TextQuote:_g,TextSelect:u1,Theater:Wg,Thermometer:$g,ThermometerSnowflake:Zg,ThermometerSun:Gg,ThumbsDown:Xg,ThumbsUp:Kg,Ticket:Qg,Timer:e7,TimerOff:Yg,TimerReset:Jg,ToggleLeft:Mr,ToggleRight:t7,Tornado:n7,Torus:r7,Touchpad:o7,TouchpadOff:a7,TowerControl:i7,ToyBrick:l7,Tractor:c7,TrafficCone:s7,TrainFront:u7,TrainFrontTunnel:d7,TrainTrack:h7,TramFront:h1,Trash:y7,Trash2:z1,TreeDeciduous:p7,TreePine:k7,Trees:f7,Trello:m7,TrendingDown:v7,TrendingUp:g7,Triangle:M7,TriangleRight:x7,Trophy:w7,Truck:L7,Turtle:C7,Tv:I7,Tv2:S7,Twitch:b7,Twitter:j7,Type:wr,Umbrella:A7,UmbrellaOff:z7,Underline:P7,Undo:T7,Undo2:R7,UndoDot:H7,UnfoldHorizontal:q7,UnfoldVertical:B7,Ungroup:V7,Unlink:E7,Unlink2:F7,Unlock:O7,UnlockKeyhole:D7,Unplug:N7,Upload:U7,UploadCloud:_7,Usb:W7,User:Q7,UserCheck:Z7,UserCog:G7,UserMinus:$7,UserPlus:X7,UserRound:v1,UserRoundCheck:y1,UserRoundCog:p1,UserRoundMinus:k1,UserRoundPlus:f1,UserRoundX:m1,UserX:K7,Users:Y7,UsersRound:g1,Utensils:ex,UtensilsCrossed:J7,UtilityPole:tx,Variable:nx,Vegan:rx,VenetianMask:ax,Vibrate:ix,VibrateOff:ox,Video:cx,VideoOff:lx,Videotape:sx,View:dx,Voicemail:ux,Volume:kx,Volume1:hx,Volume2:yx,VolumeX:px,Vote:fx,Wallet:gx,Wallet2:mx,WalletCards:vx,Wallpaper:xx,Wand:wx,Wand2:Mx,Warehouse:Lx,Watch:Cx,Waves:Sx,Waypoints:Ix,Webcam:bx,Webhook:jx,Weight:zx,Wheat:Px,WheatOff:Ax,WholeWord:Rx,Wifi:Tx,WifiOff:Hx,Wind:qx,Wine:Vx,WineOff:Bx,Workflow:Fx,WrapText:Ex,Wrench:Dx,X:Lr,XCircle:Ox,XOctagon:Nx,XSquare:_x,Youtube:Ux,Zap:Zx,ZapOff:Wx,ZoomIn:Gx,ZoomOut:$x},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:Zo,AccessibilityIcon:Zo,Activity:$o,ActivityIcon:$o,ActivitySquare:Go,ActivitySquareIcon:Go,AirVent:Xo,AirVentIcon:Xo,Airplay:Ko,AirplayIcon:Ko,AlarmCheck:zn,AlarmCheckIcon:zn,AlarmClock:Yo,AlarmClockCheck:zn,AlarmClockCheckIcon:zn,AlarmClockIcon:Yo,AlarmClockOff:Qo,AlarmClockOffIcon:Qo,AlarmMinus:Jo,AlarmMinusIcon:Jo,AlarmPlus:ei,AlarmPlusIcon:ei,Album:ti,AlbumIcon:ti,AlertCircle:ni,AlertCircleIcon:ni,AlertOctagon:ri,AlertOctagonIcon:ri,AlertTriangle:Ma,AlertTriangleIcon:Ma,AlignCenter:ii,AlignCenterHorizontal:ai,AlignCenterHorizontalIcon:ai,AlignCenterIcon:ii,AlignCenterVertical:oi,AlignCenterVerticalIcon:oi,AlignEndHorizontal:li,AlignEndHorizontalIcon:li,AlignEndVertical:ci,AlignEndVerticalIcon:ci,AlignHorizontalDistributeCenter:si,AlignHorizontalDistributeCenterIcon:si,AlignHorizontalDistributeEnd:di,AlignHorizontalDistributeEndIcon:di,AlignHorizontalDistributeStart:ui,AlignHorizontalDistributeStartIcon:ui,AlignHorizontalJustifyCenter:hi,AlignHorizontalJustifyCenterIcon:hi,AlignHorizontalJustifyEnd:yi,AlignHorizontalJustifyEndIcon:yi,AlignHorizontalJustifyStart:pi,AlignHorizontalJustifyStartIcon:pi,AlignHorizontalSpaceAround:ki,AlignHorizontalSpaceAroundIcon:ki,AlignHorizontalSpaceBetween:fi,AlignHorizontalSpaceBetweenIcon:fi,AlignJustify:mi,AlignJustifyIcon:mi,AlignLeft:ur,AlignLeftIcon:ur,AlignRight:vi,AlignRightIcon:vi,AlignStartHorizontal:gi,AlignStartHorizontalIcon:gi,AlignStartVertical:xi,AlignStartVerticalIcon:xi,AlignVerticalDistributeCenter:Mi,AlignVerticalDistributeCenterIcon:Mi,AlignVerticalDistributeEnd:wi,AlignVerticalDistributeEndIcon:wi,AlignVerticalDistributeStart:Li,AlignVerticalDistributeStartIcon:Li,AlignVerticalJustifyCenter:Ci,AlignVerticalJustifyCenterIcon:Ci,AlignVerticalJustifyEnd:Si,AlignVerticalJustifyEndIcon:Si,AlignVerticalJustifyStart:Ii,AlignVerticalJustifyStartIcon:Ii,AlignVerticalSpaceAround:bi,AlignVerticalSpaceAroundIcon:bi,AlignVerticalSpaceBetween:ji,AlignVerticalSpaceBetweenIcon:ji,Ampersand:zi,AmpersandIcon:zi,Ampersands:Ai,AmpersandsIcon:Ai,Anchor:Pi,AnchorIcon:Pi,Angry:Ri,AngryIcon:Ri,Annoyed:Hi,AnnoyedIcon:Hi,Antenna:Ti,AntennaIcon:Ti,Aperture:qi,ApertureIcon:qi,AppWindow:Bi,AppWindowIcon:Bi,Apple:Vi,AppleIcon:Vi,Archive:Di,ArchiveIcon:Di,ArchiveRestore:Fi,ArchiveRestoreIcon:Fi,ArchiveX:Ei,ArchiveXIcon:Ei,AreaChart:Oi,AreaChartIcon:Oi,Armchair:Ni,ArmchairIcon:Ni,ArrowBigDown:Ui,ArrowBigDownDash:_i,ArrowBigDownDashIcon:_i,ArrowBigDownIcon:Ui,ArrowBigLeft:Zi,ArrowBigLeftDash:Wi,ArrowBigLeftDashIcon:Wi,ArrowBigLeftIcon:Zi,ArrowBigRight:$i,ArrowBigRightDash:Gi,ArrowBigRightDashIcon:Gi,ArrowBigRightIcon:$i,ArrowBigUp:Ki,ArrowBigUpDash:Xi,ArrowBigUpDashIcon:Xi,ArrowBigUpIcon:Ki,ArrowDown:hl,ArrowDown01:Qi,ArrowDown01Icon:Qi,ArrowDown10:Yi,ArrowDown10Icon:Yi,ArrowDownAZ:An,ArrowDownAZIcon:An,ArrowDownAz:An,ArrowDownAzIcon:An,ArrowDownCircle:Ji,ArrowDownCircleIcon:Ji,ArrowDownFromLine:el,ArrowDownFromLineIcon:el,ArrowDownIcon:hl,ArrowDownLeft:rl,ArrowDownLeftFromCircle:tl,ArrowDownLeftFromCircleIcon:tl,ArrowDownLeftIcon:rl,ArrowDownLeftSquare:nl,ArrowDownLeftSquareIcon:nl,ArrowDownNarrowWide:al,ArrowDownNarrowWideIcon:al,ArrowDownRight:ll,ArrowDownRightFromCircle:ol,ArrowDownRightFromCircleIcon:ol,ArrowDownRightIcon:ll,ArrowDownRightSquare:il,ArrowDownRightSquareIcon:il,ArrowDownSquare:cl,ArrowDownSquareIcon:cl,ArrowDownToDot:sl,ArrowDownToDotIcon:sl,ArrowDownToLine:dl,ArrowDownToLineIcon:dl,ArrowDownUp:ul,ArrowDownUpIcon:ul,ArrowDownWideNarrow:Pn,ArrowDownWideNarrowIcon:Pn,ArrowDownZA:Rn,ArrowDownZAIcon:Rn,ArrowDownZa:Rn,ArrowDownZaIcon:Rn,ArrowLeft:vl,ArrowLeftCircle:yl,ArrowLeftCircleIcon:yl,ArrowLeftFromLine:pl,ArrowLeftFromLineIcon:pl,ArrowLeftIcon:vl,ArrowLeftRight:kl,ArrowLeftRightIcon:kl,ArrowLeftSquare:fl,ArrowLeftSquareIcon:fl,ArrowLeftToLine:ml,ArrowLeftToLineIcon:ml,ArrowRight:wa,ArrowRightCircle:gl,ArrowRightCircleIcon:gl,ArrowRightFromLine:xl,ArrowRightFromLineIcon:xl,ArrowRightIcon:wa,ArrowRightLeft:Ml,ArrowRightLeftIcon:Ml,ArrowRightSquare:wl,ArrowRightSquareIcon:wl,ArrowRightToLine:Ll,ArrowRightToLineIcon:Ll,ArrowUp:El,ArrowUp01:Cl,ArrowUp01Icon:Cl,ArrowUp10:Sl,ArrowUp10Icon:Sl,ArrowUpAZ:Hn,ArrowUpAZIcon:Hn,ArrowUpAz:Hn,ArrowUpAzIcon:Hn,ArrowUpCircle:Il,ArrowUpCircleIcon:Il,ArrowUpDown:bl,ArrowUpDownIcon:bl,ArrowUpFromDot:jl,ArrowUpFromDotIcon:jl,ArrowUpFromLine:zl,ArrowUpFromLineIcon:zl,ArrowUpIcon:El,ArrowUpLeft:Rl,ArrowUpLeftFromCircle:Al,ArrowUpLeftFromCircleIcon:Al,ArrowUpLeftIcon:Rl,ArrowUpLeftSquare:Pl,ArrowUpLeftSquareIcon:Pl,ArrowUpNarrowWide:Tn,ArrowUpNarrowWideIcon:Tn,ArrowUpRight:ql,ArrowUpRightFromCircle:Hl,ArrowUpRightFromCircleIcon:Hl,ArrowUpRightIcon:ql,ArrowUpRightSquare:Tl,ArrowUpRightSquareIcon:Tl,ArrowUpSquare:Bl,ArrowUpSquareIcon:Bl,ArrowUpToLine:Vl,ArrowUpToLineIcon:Vl,ArrowUpWideNarrow:Fl,ArrowUpWideNarrowIcon:Fl,ArrowUpZA:qn,ArrowUpZAIcon:qn,ArrowUpZa:qn,ArrowUpZaIcon:qn,ArrowsUpFromLine:Dl,ArrowsUpFromLineIcon:Dl,Asterisk:Ol,AsteriskIcon:Ol,AtSign:Nl,AtSignIcon:Nl,Atom:_l,AtomIcon:_l,AudioLines:Ul,AudioLinesIcon:Ul,AudioWaveform:Wl,AudioWaveformIcon:Wl,Award:Zl,AwardIcon:Zl,Axe:Gl,AxeIcon:Gl,Axis3D:Bn,Axis3DIcon:Bn,Axis3d:Bn,Axis3dIcon:Bn,Baby:$l,BabyIcon:$l,Backpack:Xl,BackpackIcon:Xl,Badge:uc,BadgeAlert:Kl,BadgeAlertIcon:Kl,BadgeCent:Ql,BadgeCentIcon:Ql,BadgeCheck:Vn,BadgeCheckIcon:Vn,BadgeDollarSign:Yl,BadgeDollarSignIcon:Yl,BadgeEuro:Jl,BadgeEuroIcon:Jl,BadgeHelp:ec,BadgeHelpIcon:ec,BadgeIcon:uc,BadgeIndianRupee:tc,BadgeIndianRupeeIcon:tc,BadgeInfo:nc,BadgeInfoIcon:nc,BadgeJapaneseYen:rc,BadgeJapaneseYenIcon:rc,BadgeMinus:ac,BadgeMinusIcon:ac,BadgePercent:oc,BadgePercentIcon:oc,BadgePlus:ic,BadgePlusIcon:ic,BadgePoundSterling:lc,BadgePoundSterlingIcon:lc,BadgeRussianRuble:cc,BadgeRussianRubleIcon:cc,BadgeSwissFranc:sc,BadgeSwissFrancIcon:sc,BadgeX:dc,BadgeXIcon:dc,BaggageClaim:hc,BaggageClaimIcon:hc,Ban:yc,BanIcon:yc,Banana:pc,BananaIcon:pc,Banknote:kc,BanknoteIcon:kc,BarChart:wc,BarChart2:fc,BarChart2Icon:fc,BarChart3:mc,BarChart3Icon:mc,BarChart4:vc,BarChart4Icon:vc,BarChartBig:gc,BarChartBigIcon:gc,BarChartHorizontal:Mc,BarChartHorizontalBig:xc,BarChartHorizontalBigIcon:xc,BarChartHorizontalIcon:Mc,BarChartIcon:wc,Barcode:Lc,BarcodeIcon:Lc,Baseline:Cc,BaselineIcon:Cc,Bath:Sc,BathIcon:Sc,Battery:Pc,BatteryCharging:Ic,BatteryChargingIcon:Ic,BatteryFull:bc,BatteryFullIcon:bc,BatteryIcon:Pc,BatteryLow:jc,BatteryLowIcon:jc,BatteryMedium:zc,BatteryMediumIcon:zc,BatteryWarning:Ac,BatteryWarningIcon:Ac,Beaker:Rc,BeakerIcon:Rc,Bean:Tc,BeanIcon:Tc,BeanOff:Hc,BeanOffIcon:Hc,Bed:Vc,BedDouble:qc,BedDoubleIcon:qc,BedIcon:Vc,BedSingle:Bc,BedSingleIcon:Bc,Beef:Fc,BeefIcon:Fc,Beer:Ec,BeerIcon:Ec,Bell:Wc,BellDot:Dc,BellDotIcon:Dc,BellIcon:Wc,BellMinus:Oc,BellMinusIcon:Oc,BellOff:Nc,BellOffIcon:Nc,BellPlus:_c,BellPlusIcon:_c,BellRing:Uc,BellRingIcon:Uc,Bike:Zc,BikeIcon:Zc,Binary:Gc,BinaryIcon:Gc,Biohazard:$c,BiohazardIcon:$c,Bird:Xc,BirdIcon:Xc,Bitcoin:Kc,BitcoinIcon:Kc,Blinds:Qc,BlindsIcon:Qc,Blocks:Yc,BlocksIcon:Yc,Bluetooth:n2,BluetoothConnected:Jc,BluetoothConnectedIcon:Jc,BluetoothIcon:n2,BluetoothOff:e2,BluetoothOffIcon:e2,BluetoothSearching:t2,BluetoothSearchingIcon:t2,Bold:r2,BoldIcon:r2,Bomb:a2,BombIcon:a2,Bone:o2,BoneIcon:o2,Book:j2,BookA:i2,BookAIcon:i2,BookAudio:l2,BookAudioIcon:l2,BookCheck:c2,BookCheckIcon:c2,BookCopy:s2,BookCopyIcon:s2,BookDashed:Fn,BookDashedIcon:Fn,BookDown:d2,BookDownIcon:d2,BookHeadphones:u2,BookHeadphonesIcon:u2,BookHeart:h2,BookHeartIcon:h2,BookIcon:j2,BookImage:y2,BookImageIcon:y2,BookKey:p2,BookKeyIcon:p2,BookLock:k2,BookLockIcon:k2,BookMarked:f2,BookMarkedIcon:f2,BookMinus:m2,BookMinusIcon:m2,BookOpen:x2,BookOpenCheck:v2,BookOpenCheckIcon:v2,BookOpenIcon:x2,BookOpenText:g2,BookOpenTextIcon:g2,BookPlus:M2,BookPlusIcon:M2,BookTemplate:Fn,BookTemplateIcon:Fn,BookText:w2,BookTextIcon:w2,BookType:L2,BookTypeIcon:L2,BookUp:S2,BookUp2:C2,BookUp2Icon:C2,BookUpIcon:S2,BookUser:I2,BookUserIcon:I2,BookX:b2,BookXIcon:b2,Bookmark:H2,BookmarkCheck:z2,BookmarkCheckIcon:z2,BookmarkIcon:H2,BookmarkMinus:A2,BookmarkMinusIcon:A2,BookmarkPlus:P2,BookmarkPlusIcon:P2,BookmarkX:R2,BookmarkXIcon:R2,BoomBox:T2,BoomBoxIcon:T2,Bot:q2,BotIcon:q2,Box:hr,BoxIcon:hr,BoxSelect:B2,BoxSelectIcon:B2,Boxes:V2,BoxesIcon:V2,Braces:En,BracesIcon:En,Brackets:F2,BracketsIcon:F2,Brain:O2,BrainCircuit:E2,BrainCircuitIcon:E2,BrainCog:D2,BrainCogIcon:D2,BrainIcon:O2,Briefcase:N2,BriefcaseIcon:N2,BringToFront:_2,BringToFrontIcon:_2,Brush:U2,BrushIcon:U2,Bug:G2,BugIcon:G2,BugOff:W2,BugOffIcon:W2,BugPlay:Z2,BugPlayIcon:Z2,Building:X2,Building2:$2,Building2Icon:$2,BuildingIcon:X2,Bus:Q2,BusFront:K2,BusFrontIcon:K2,BusIcon:Q2,Cable:J2,CableCar:Y2,CableCarIcon:Y2,CableIcon:J2,Cake:ts,CakeIcon:ts,CakeSlice:es,CakeSliceIcon:es,Calculator:ns,CalculatorIcon:ns,Calendar:ks,CalendarCheck:as,CalendarCheck2:rs,CalendarCheck2Icon:rs,CalendarCheckIcon:as,CalendarClock:os,CalendarClockIcon:os,CalendarDays:is,CalendarDaysIcon:is,CalendarHeart:ls,CalendarHeartIcon:ls,CalendarIcon:ks,CalendarMinus:cs,CalendarMinusIcon:cs,CalendarOff:ss,CalendarOffIcon:ss,CalendarPlus:ds,CalendarPlusIcon:ds,CalendarRange:us,CalendarRangeIcon:us,CalendarSearch:hs,CalendarSearchIcon:hs,CalendarX:ps,CalendarX2:ys,CalendarX2Icon:ys,CalendarXIcon:ps,Camera:ms,CameraIcon:ms,CameraOff:fs,CameraOffIcon:fs,CandlestickChart:vs,CandlestickChartIcon:vs,Candy:Ms,CandyCane:gs,CandyCaneIcon:gs,CandyIcon:Ms,CandyOff:xs,CandyOffIcon:xs,Car:Cs,CarFront:ws,CarFrontIcon:ws,CarIcon:Cs,CarTaxiFront:Ls,CarTaxiFrontIcon:Ls,Caravan:Ss,CaravanIcon:Ss,Carrot:Is,CarrotIcon:Is,CaseLower:bs,CaseLowerIcon:bs,CaseSensitive:js,CaseSensitiveIcon:js,CaseUpper:zs,CaseUpperIcon:zs,CassetteTape:As,CassetteTapeIcon:As,Cast:Ps,CastIcon:Ps,Castle:Rs,CastleIcon:Rs,Cat:Hs,CatIcon:Hs,Check:yr,CheckCheck:Ts,CheckCheckIcon:Ts,CheckCircle:Bs,CheckCircle2:qs,CheckCircle2Icon:qs,CheckCircleIcon:Bs,CheckIcon:yr,CheckSquare:Fs,CheckSquare2:Vs,CheckSquare2Icon:Vs,CheckSquareIcon:Fs,ChefHat:Es,ChefHatIcon:Es,Cherry:Ds,CherryIcon:Ds,ChevronDown:b1,ChevronDownCircle:Os,ChevronDownCircleIcon:Os,ChevronDownIcon:b1,ChevronDownSquare:Ns,ChevronDownSquareIcon:Ns,ChevronFirst:_s,ChevronFirstIcon:_s,ChevronLast:Us,ChevronLastIcon:Us,ChevronLeft:Gs,ChevronLeftCircle:Ws,ChevronLeftCircleIcon:Ws,ChevronLeftIcon:Gs,ChevronLeftSquare:Zs,ChevronLeftSquareIcon:Zs,ChevronRight:Ks,ChevronRightCircle:$s,ChevronRightCircleIcon:$s,ChevronRightIcon:Ks,ChevronRightSquare:Xs,ChevronRightSquareIcon:Xs,ChevronUp:pr,ChevronUpCircle:Qs,ChevronUpCircleIcon:Qs,ChevronUpIcon:pr,ChevronUpSquare:Ys,ChevronUpSquareIcon:Ys,ChevronsDown:ed,ChevronsDownIcon:ed,ChevronsDownUp:Js,ChevronsDownUpIcon:Js,ChevronsLeft:nd,ChevronsLeftIcon:nd,ChevronsLeftRight:td,ChevronsLeftRightIcon:td,ChevronsRight:ad,ChevronsRightIcon:ad,ChevronsRightLeft:rd,ChevronsRightLeftIcon:rd,ChevronsUp:od,ChevronsUpDown:La,ChevronsUpDownIcon:La,ChevronsUpIcon:od,Chrome:id,ChromeIcon:id,Church:ld,ChurchIcon:ld,Cigarette:sd,CigaretteIcon:sd,CigaretteOff:cd,CigaretteOffIcon:cd,Circle:vd,CircleDashed:dd,CircleDashedIcon:dd,CircleDollarSign:ud,CircleDollarSignIcon:ud,CircleDot:yd,CircleDotDashed:hd,CircleDotDashedIcon:hd,CircleDotIcon:yd,CircleEllipsis:pd,CircleEllipsisIcon:pd,CircleEqual:kd,CircleEqualIcon:kd,CircleIcon:vd,CircleOff:fd,CircleOffIcon:fd,CircleSlash:md,CircleSlash2:Dn,CircleSlash2Icon:Dn,CircleSlashIcon:md,CircleSlashed:Dn,CircleSlashedIcon:Dn,CircleUser:Nn,CircleUserIcon:Nn,CircleUserRound:On,CircleUserRoundIcon:On,CircuitBoard:gd,CircuitBoardIcon:gd,Citrus:xd,CitrusIcon:xd,Clapperboard:Md,ClapperboardIcon:Md,Clipboard:Ad,ClipboardCheck:wd,ClipboardCheckIcon:wd,ClipboardCopy:Ld,ClipboardCopyIcon:Ld,ClipboardEdit:Cd,ClipboardEditIcon:Cd,ClipboardIcon:Ad,ClipboardList:Sd,ClipboardListIcon:Sd,ClipboardPaste:Id,ClipboardPasteIcon:Id,ClipboardSignature:bd,ClipboardSignatureIcon:bd,ClipboardType:jd,ClipboardTypeIcon:jd,ClipboardX:zd,ClipboardXIcon:zd,Clock:_d,Clock1:Pd,Clock10:Rd,Clock10Icon:Rd,Clock11:Hd,Clock11Icon:Hd,Clock12:Td,Clock12Icon:Td,Clock1Icon:Pd,Clock2:qd,Clock2Icon:qd,Clock3:Bd,Clock3Icon:Bd,Clock4:Vd,Clock4Icon:Vd,Clock5:Fd,Clock5Icon:Fd,Clock6:Ed,Clock6Icon:Ed,Clock7:Dd,Clock7Icon:Dd,Clock8:Od,Clock8Icon:Od,Clock9:Nd,Clock9Icon:Nd,ClockIcon:_d,Cloud:r0,CloudCog:Ud,CloudCogIcon:Ud,CloudDrizzle:Wd,CloudDrizzleIcon:Wd,CloudFog:Zd,CloudFogIcon:Zd,CloudHail:Gd,CloudHailIcon:Gd,CloudIcon:r0,CloudLightning:$d,CloudLightningIcon:$d,CloudMoon:Kd,CloudMoonIcon:Kd,CloudMoonRain:Xd,CloudMoonRainIcon:Xd,CloudOff:Qd,CloudOffIcon:Qd,CloudRain:Jd,CloudRainIcon:Jd,CloudRainWind:Yd,CloudRainWindIcon:Yd,CloudSnow:e0,CloudSnowIcon:e0,CloudSun:n0,CloudSunIcon:n0,CloudSunRain:t0,CloudSunRainIcon:t0,Cloudy:a0,CloudyIcon:a0,Clover:o0,CloverIcon:o0,Club:i0,ClubIcon:i0,Code:c0,Code2:l0,Code2Icon:l0,CodeIcon:c0,Codepen:s0,CodepenIcon:s0,Codesandbox:d0,CodesandboxIcon:d0,Coffee:u0,CoffeeIcon:u0,Cog:h0,CogIcon:h0,Coins:y0,CoinsIcon:y0,Columns:p0,ColumnsIcon:p0,Combine:k0,CombineIcon:k0,Command:f0,CommandIcon:f0,Compass:m0,CompassIcon:m0,Component:v0,ComponentIcon:v0,Computer:g0,ComputerIcon:g0,ConciergeBell:x0,ConciergeBellIcon:x0,Cone:M0,ConeIcon:M0,Construction:w0,ConstructionIcon:w0,Contact:C0,Contact2:L0,Contact2Icon:L0,ContactIcon:C0,Container:S0,ContainerIcon:S0,Contrast:I0,ContrastIcon:I0,Cookie:b0,CookieIcon:b0,Copy:H0,CopyCheck:j0,CopyCheckIcon:j0,CopyIcon:H0,CopyMinus:z0,CopyMinusIcon:z0,CopyPlus:A0,CopyPlusIcon:A0,CopySlash:P0,CopySlashIcon:P0,CopyX:R0,CopyXIcon:R0,Copyleft:T0,CopyleftIcon:T0,Copyright:q0,CopyrightIcon:q0,CornerDownLeft:B0,CornerDownLeftIcon:B0,CornerDownRight:V0,CornerDownRightIcon:V0,CornerLeftDown:F0,CornerLeftDownIcon:F0,CornerLeftUp:E0,CornerLeftUpIcon:E0,CornerRightDown:D0,CornerRightDownIcon:D0,CornerRightUp:O0,CornerRightUpIcon:O0,CornerUpLeft:N0,CornerUpLeftIcon:N0,CornerUpRight:_0,CornerUpRightIcon:_0,Cpu:U0,CpuIcon:U0,CreativeCommons:W0,CreativeCommonsIcon:W0,CreditCard:Z0,CreditCardIcon:Z0,Croissant:G0,CroissantIcon:G0,Crop:$0,CropIcon:$0,Cross:X0,CrossIcon:X0,Crosshair:K0,CrosshairIcon:K0,Crown:Q0,CrownIcon:Q0,Cuboid:Y0,CuboidIcon:Y0,CupSoda:J0,CupSodaIcon:J0,CurlyBraces:En,CurlyBracesIcon:En,Currency:eu,CurrencyIcon:eu,Cylinder:tu,CylinderIcon:tu,Database:au,DatabaseBackup:nu,DatabaseBackupIcon:nu,DatabaseIcon:au,DatabaseZap:ru,DatabaseZapIcon:ru,Delete:ou,DeleteIcon:ou,Dessert:iu,DessertIcon:iu,Diameter:lu,DiameterIcon:lu,Diamond:cu,DiamondIcon:cu,Dice1:su,Dice1Icon:su,Dice2:du,Dice2Icon:du,Dice3:uu,Dice3Icon:uu,Dice4:hu,Dice4Icon:hu,Dice5:yu,Dice5Icon:yu,Dice6:pu,Dice6Icon:pu,Dices:ku,DicesIcon:ku,Diff:fu,DiffIcon:fu,Disc:xu,Disc2:mu,Disc2Icon:mu,Disc3:vu,Disc3Icon:vu,DiscAlbum:gu,DiscAlbumIcon:gu,DiscIcon:xu,Divide:Lu,DivideCircle:Mu,DivideCircleIcon:Mu,DivideIcon:Lu,DivideSquare:wu,DivideSquareIcon:wu,Dna:Su,DnaIcon:Su,DnaOff:Cu,DnaOffIcon:Cu,Dog:Iu,DogIcon:Iu,DollarSign:bu,DollarSignIcon:bu,Donut:ju,DonutIcon:ju,DoorClosed:zu,DoorClosedIcon:zu,DoorOpen:Au,DoorOpenIcon:Au,Dot:Pu,DotIcon:Pu,Download:pn,DownloadCloud:Ru,DownloadCloudIcon:Ru,DownloadIcon:pn,DraftingCompass:Hu,DraftingCompassIcon:Hu,Drama:Tu,DramaIcon:Tu,Dribbble:qu,DribbbleIcon:qu,Droplet:Bu,DropletIcon:Bu,Droplets:Vu,DropletsIcon:Vu,Drum:Fu,DrumIcon:Fu,Drumstick:Eu,DrumstickIcon:Eu,Dumbbell:Du,DumbbellIcon:Du,Ear:Nu,EarIcon:Nu,EarOff:Ou,EarOffIcon:Ou,Edit:wt,Edit2:r1,Edit2Icon:r1,Edit3:n1,Edit3Icon:n1,EditIcon:wt,Egg:Wu,EggFried:_u,EggFriedIcon:_u,EggIcon:Wu,EggOff:Uu,EggOffIcon:Uu,Equal:Gu,EqualIcon:Gu,EqualNot:Zu,EqualNotIcon:Zu,Eraser:$u,EraserIcon:$u,Euro:Xu,EuroIcon:Xu,Expand:Ku,ExpandIcon:Ku,ExternalLink:Ca,ExternalLinkIcon:Ca,Eye:Ia,EyeIcon:Ia,EyeOff:Sa,EyeOffIcon:Sa,Facebook:Qu,FacebookIcon:Qu,Factory:Yu,FactoryIcon:Yu,Fan:Ju,FanIcon:Ju,FastForward:eh,FastForwardIcon:eh,Feather:th,FeatherIcon:th,FerrisWheel:nh,FerrisWheelIcon:nh,Figma:rh,FigmaIcon:rh,File:ay,FileArchive:ah,FileArchiveIcon:ah,FileAudio:ih,FileAudio2:oh,FileAudio2Icon:oh,FileAudioIcon:ih,FileAxis3D:_n,FileAxis3DIcon:_n,FileAxis3d:_n,FileAxis3dIcon:_n,FileBadge:ch,FileBadge2:lh,FileBadge2Icon:lh,FileBadgeIcon:ch,FileBarChart:dh,FileBarChart2:sh,FileBarChart2Icon:sh,FileBarChartIcon:dh,FileBox:uh,FileBoxIcon:uh,FileCheck:yh,FileCheck2:hh,FileCheck2Icon:hh,FileCheckIcon:yh,FileClock:ph,FileClockIcon:ph,FileCode:fh,FileCode2:kh,FileCode2Icon:kh,FileCodeIcon:fh,FileCog:Un,FileCog2:Un,FileCog2Icon:Un,FileCogIcon:Un,FileDiff:mh,FileDiffIcon:mh,FileDigit:vh,FileDigitIcon:vh,FileDown:gh,FileDownIcon:gh,FileEdit:xh,FileEditIcon:xh,FileHeart:Mh,FileHeartIcon:Mh,FileIcon:ay,FileImage:wh,FileImageIcon:wh,FileInput:Lh,FileInputIcon:Lh,FileJson:Sh,FileJson2:Ch,FileJson2Icon:Ch,FileJsonIcon:Sh,FileKey:bh,FileKey2:Ih,FileKey2Icon:Ih,FileKeyIcon:bh,FileLineChart:jh,FileLineChartIcon:jh,FileLock:Ah,FileLock2:zh,FileLock2Icon:zh,FileLockIcon:Ah,FileMinus:Rh,FileMinus2:Ph,FileMinus2Icon:Ph,FileMinusIcon:Rh,FileMusic:Hh,FileMusicIcon:Hh,FileOutput:Th,FileOutputIcon:Th,FilePieChart:qh,FilePieChartIcon:qh,FilePlus:Vh,FilePlus2:Bh,FilePlus2Icon:Bh,FilePlusIcon:Vh,FileQuestion:Fh,FileQuestionIcon:Fh,FileScan:Eh,FileScanIcon:Eh,FileSearch:Oh,FileSearch2:Dh,FileSearch2Icon:Dh,FileSearchIcon:Oh,FileSignature:Nh,FileSignatureIcon:Nh,FileSpreadsheet:_h,FileSpreadsheetIcon:_h,FileStack:Uh,FileStackIcon:Uh,FileSymlink:Wh,FileSymlinkIcon:Wh,FileTerminal:Zh,FileTerminalIcon:Zh,FileText:Gh,FileTextIcon:Gh,FileType:Xh,FileType2:$h,FileType2Icon:$h,FileTypeIcon:Xh,FileUp:Kh,FileUpIcon:Kh,FileVideo:Yh,FileVideo2:Qh,FileVideo2Icon:Qh,FileVideoIcon:Yh,FileVolume:ey,FileVolume2:Jh,FileVolume2Icon:Jh,FileVolumeIcon:ey,FileWarning:ty,FileWarningIcon:ty,FileX:ry,FileX2:ny,FileX2Icon:ny,FileXIcon:ry,Files:oy,FilesIcon:oy,Film:iy,FilmIcon:iy,Filter:cy,FilterIcon:cy,FilterX:ly,FilterXIcon:ly,Fingerprint:sy,FingerprintIcon:sy,Fish:hy,FishIcon:hy,FishOff:dy,FishOffIcon:dy,FishSymbol:uy,FishSymbolIcon:uy,Flag:fy,FlagIcon:fy,FlagOff:yy,FlagOffIcon:yy,FlagTriangleLeft:py,FlagTriangleLeftIcon:py,FlagTriangleRight:ky,FlagTriangleRightIcon:ky,Flame:vy,FlameIcon:vy,FlameKindling:my,FlameKindlingIcon:my,Flashlight:xy,FlashlightIcon:xy,FlashlightOff:gy,FlashlightOffIcon:gy,FlaskConical:wy,FlaskConicalIcon:wy,FlaskConicalOff:My,FlaskConicalOffIcon:My,FlaskRound:Ly,FlaskRoundIcon:Ly,FlipHorizontal:Sy,FlipHorizontal2:Cy,FlipHorizontal2Icon:Cy,FlipHorizontalIcon:Sy,FlipVertical:by,FlipVertical2:Iy,FlipVertical2Icon:Iy,FlipVerticalIcon:by,Flower:zy,Flower2:jy,Flower2Icon:jy,FlowerIcon:zy,Focus:Ay,FocusIcon:Ay,FoldHorizontal:Py,FoldHorizontalIcon:Py,FoldVertical:Ry,FoldVerticalIcon:Ry,Folder:ip,FolderArchive:Hy,FolderArchiveIcon:Hy,FolderCheck:Ty,FolderCheckIcon:Ty,FolderClock:qy,FolderClockIcon:qy,FolderClosed:By,FolderClosedIcon:By,FolderCog:Wn,FolderCog2:Wn,FolderCog2Icon:Wn,FolderCogIcon:Wn,FolderDot:Vy,FolderDotIcon:Vy,FolderDown:Fy,FolderDownIcon:Fy,FolderEdit:Ey,FolderEditIcon:Ey,FolderGit:Oy,FolderGit2:Dy,FolderGit2Icon:Dy,FolderGitIcon:Oy,FolderHeart:Ny,FolderHeartIcon:Ny,FolderIcon:ip,FolderInput:_y,FolderInputIcon:_y,FolderKanban:Uy,FolderKanbanIcon:Uy,FolderKey:Wy,FolderKeyIcon:Wy,FolderLock:Zy,FolderLockIcon:Zy,FolderMinus:Gy,FolderMinusIcon:Gy,FolderOpen:Xy,FolderOpenDot:$y,FolderOpenDotIcon:$y,FolderOpenIcon:Xy,FolderOutput:Ky,FolderOutputIcon:Ky,FolderPlus:Qy,FolderPlusIcon:Qy,FolderRoot:Yy,FolderRootIcon:Yy,FolderSearch:ep,FolderSearch2:Jy,FolderSearch2Icon:Jy,FolderSearchIcon:ep,FolderSymlink:tp,FolderSymlinkIcon:tp,FolderSync:np,FolderSyncIcon:np,FolderTree:rp,FolderTreeIcon:rp,FolderUp:ap,FolderUpIcon:ap,FolderX:op,FolderXIcon:op,Folders:lp,FoldersIcon:lp,Footprints:cp,FootprintsIcon:cp,Forklift:sp,ForkliftIcon:sp,FormInput:dp,FormInputIcon:dp,Forward:up,ForwardIcon:up,Frame:hp,FrameIcon:hp,Framer:yp,FramerIcon:yp,Frown:pp,FrownIcon:pp,Fuel:kp,FuelIcon:kp,Fullscreen:fp,FullscreenIcon:fp,FunctionSquare:mp,FunctionSquareIcon:mp,GalleryHorizontal:gp,GalleryHorizontalEnd:vp,GalleryHorizontalEndIcon:vp,GalleryHorizontalIcon:gp,GalleryThumbnails:xp,GalleryThumbnailsIcon:xp,GalleryVertical:wp,GalleryVerticalEnd:Mp,GalleryVerticalEndIcon:Mp,GalleryVerticalIcon:wp,Gamepad:Cp,Gamepad2:Lp,Gamepad2Icon:Lp,GamepadIcon:Cp,GanttChart:Sp,GanttChartIcon:Sp,GanttChartSquare:Zn,GanttChartSquareIcon:Zn,Gauge:bp,GaugeCircle:Ip,GaugeCircleIcon:Ip,GaugeIcon:bp,Gavel:jp,GavelIcon:jp,Gem:zp,GemIcon:zp,Ghost:Ap,GhostIcon:Ap,Gift:Pp,GiftIcon:Pp,GitBranch:Hp,GitBranchIcon:Hp,GitBranchPlus:Rp,GitBranchPlusIcon:Rp,GitCommit:Gn,GitCommitHorizontal:Gn,GitCommitHorizontalIcon:Gn,GitCommitIcon:Gn,GitCommitVertical:Tp,GitCommitVerticalIcon:Tp,GitCompare:Bp,GitCompareArrows:qp,GitCompareArrowsIcon:qp,GitCompareIcon:Bp,GitFork:Vp,GitForkIcon:Vp,GitGraph:Fp,GitGraphIcon:Fp,GitMerge:Ep,GitMergeIcon:Ep,GitPullRequest:Wp,GitPullRequestArrow:Dp,GitPullRequestArrowIcon:Dp,GitPullRequestClosed:Op,GitPullRequestClosedIcon:Op,GitPullRequestCreate:_p,GitPullRequestCreateArrow:Np,GitPullRequestCreateArrowIcon:Np,GitPullRequestCreateIcon:_p,GitPullRequestDraft:Up,GitPullRequestDraftIcon:Up,GitPullRequestIcon:Wp,Github:ba,GithubIcon:ba,Gitlab:Zp,GitlabIcon:Zp,GlassWater:Gp,GlassWaterIcon:Gp,Glasses:$p,GlassesIcon:$p,Globe:Kp,Globe2:Xp,Globe2Icon:Xp,GlobeIcon:Kp,Goal:Qp,GoalIcon:Qp,Grab:Yp,GrabIcon:Yp,GraduationCap:Jp,GraduationCapIcon:Jp,Grape:ek,GrapeIcon:ek,Grid:Mt,Grid2X2:$n,Grid2X2Icon:$n,Grid2x2:$n,Grid2x2Icon:$n,Grid3X3:Mt,Grid3X3Icon:Mt,Grid3x3:Mt,Grid3x3Icon:Mt,GridIcon:Mt,Grip:rk,GripHorizontal:tk,GripHorizontalIcon:tk,GripIcon:rk,GripVertical:nk,GripVerticalIcon:nk,Group:ak,GroupIcon:ak,Guitar:ok,GuitarIcon:ok,Hammer:ik,HammerIcon:ik,Hand:ck,HandIcon:ck,HandMetal:lk,HandMetalIcon:lk,HardDrive:uk,HardDriveDownload:sk,HardDriveDownloadIcon:sk,HardDriveIcon:uk,HardDriveUpload:dk,HardDriveUploadIcon:dk,HardHat:hk,HardHatIcon:hk,Hash:yk,HashIcon:yk,Haze:pk,HazeIcon:pk,HdmiPort:kk,HdmiPortIcon:kk,Heading:wk,Heading1:fk,Heading1Icon:fk,Heading2:mk,Heading2Icon:mk,Heading3:vk,Heading3Icon:vk,Heading4:gk,Heading4Icon:gk,Heading5:xk,Heading5Icon:xk,Heading6:Mk,Heading6Icon:Mk,HeadingIcon:wk,Headphones:Lk,HeadphonesIcon:Lk,Heart:jk,HeartCrack:Ck,HeartCrackIcon:Ck,HeartHandshake:Sk,HeartHandshakeIcon:Sk,HeartIcon:jk,HeartOff:Ik,HeartOffIcon:Ik,HeartPulse:bk,HeartPulseIcon:bk,HelpCircle:zk,HelpCircleIcon:zk,HelpingHand:Ak,HelpingHandIcon:Ak,Hexagon:Pk,HexagonIcon:Pk,Highlighter:Rk,HighlighterIcon:Rk,History:Hk,HistoryIcon:Hk,Home:Tk,HomeIcon:Tk,Hop:Bk,HopIcon:Bk,HopOff:qk,HopOffIcon:qk,Hotel:Vk,HotelIcon:Vk,Hourglass:Fk,HourglassIcon:Fk,IceCream:Dk,IceCream2:Ek,IceCream2Icon:Ek,IceCreamIcon:Dk,Image:Wk,ImageDown:Ok,ImageDownIcon:Ok,ImageIcon:Wk,ImageMinus:Nk,ImageMinusIcon:Nk,ImageOff:_k,ImageOffIcon:_k,ImagePlus:Uk,ImagePlusIcon:Uk,Import:Zk,ImportIcon:Zk,Inbox:Gk,InboxIcon:Gk,Indent:$k,IndentIcon:$k,IndianRupee:Xk,IndianRupeeIcon:Xk,Infinity:Kk,InfinityIcon:Kk,Info:Qk,InfoIcon:Qk,Inspect:Qn,InspectIcon:Qn,Instagram:Yk,InstagramIcon:Yk,Italic:Jk,ItalicIcon:Jk,IterationCcw:ef,IterationCcwIcon:ef,IterationCw:tf,IterationCwIcon:tf,JapaneseYen:nf,JapaneseYenIcon:nf,Joystick:rf,JoystickIcon:rf,Kanban:af,KanbanIcon:af,KanbanSquare:Kn,KanbanSquareDashed:Xn,KanbanSquareDashedIcon:Xn,KanbanSquareIcon:Kn,Key:cf,KeyIcon:cf,KeyRound:of,KeyRoundIcon:of,KeySquare:lf,KeySquareIcon:lf,Keyboard:df,KeyboardIcon:df,KeyboardMusic:sf,KeyboardMusicIcon:sf,Lamp:ff,LampCeiling:uf,LampCeilingIcon:uf,LampDesk:hf,LampDeskIcon:hf,LampFloor:yf,LampFloorIcon:yf,LampIcon:ff,LampWallDown:pf,LampWallDownIcon:pf,LampWallUp:kf,LampWallUpIcon:kf,LandPlot:mf,LandPlotIcon:mf,Landmark:vf,LandmarkIcon:vf,Languages:gf,LanguagesIcon:gf,Laptop:Mf,Laptop2:xf,Laptop2Icon:xf,LaptopIcon:Mf,Lasso:Lf,LassoIcon:Lf,LassoSelect:wf,LassoSelectIcon:wf,Laugh:Cf,LaughIcon:Cf,Layers:j1,Layers2:Sf,Layers2Icon:Sf,Layers3:If,Layers3Icon:If,LayersIcon:j1,Layout:Rf,LayoutDashboard:ja,LayoutDashboardIcon:ja,LayoutGrid:bf,LayoutGridIcon:bf,LayoutIcon:Rf,LayoutList:jf,LayoutListIcon:jf,LayoutPanelLeft:zf,LayoutPanelLeftIcon:zf,LayoutPanelTop:Af,LayoutPanelTopIcon:Af,LayoutTemplate:Pf,LayoutTemplateIcon:Pf,Leaf:Hf,LeafIcon:Hf,LeafyGreen:Tf,LeafyGreenIcon:Tf,Library:Vf,LibraryBig:qf,LibraryBigIcon:qf,LibraryIcon:Vf,LibrarySquare:Bf,LibrarySquareIcon:Bf,LifeBuoy:Ff,LifeBuoyIcon:Ff,Ligature:Ef,LigatureIcon:Ef,Lightbulb:Of,LightbulbIcon:Of,LightbulbOff:Df,LightbulbOffIcon:Df,LineChart:Nf,LineChartIcon:Nf,Link:Wf,Link2:Uf,Link2Icon:Uf,Link2Off:_f,Link2OffIcon:_f,LinkIcon:Wf,Linkedin:Zf,LinkedinIcon:Zf,List:i4,ListChecks:Gf,ListChecksIcon:Gf,ListEnd:$f,ListEndIcon:$f,ListFilter:Xf,ListFilterIcon:Xf,ListIcon:i4,ListMinus:Kf,ListMinusIcon:Kf,ListMusic:Qf,ListMusicIcon:Qf,ListOrdered:Yf,ListOrderedIcon:Yf,ListPlus:Jf,ListPlusIcon:Jf,ListRestart:e4,ListRestartIcon:e4,ListStart:t4,ListStartIcon:t4,ListTodo:n4,ListTodoIcon:n4,ListTree:r4,ListTreeIcon:r4,ListVideo:a4,ListVideoIcon:a4,ListX:o4,ListXIcon:o4,Loader:c4,Loader2:l4,Loader2Icon:l4,LoaderIcon:c4,Locate:u4,LocateFixed:s4,LocateFixedIcon:s4,LocateIcon:u4,LocateOff:d4,LocateOffIcon:d4,Lock:za,LockIcon:za,LockKeyhole:h4,LockKeyholeIcon:h4,LogIn:y4,LogInIcon:y4,LogOut:p4,LogOutIcon:p4,Lollipop:k4,LollipopIcon:k4,LucideAccessibility:Zo,LucideActivity:$o,LucideActivitySquare:Go,LucideAirVent:Xo,LucideAirplay:Ko,LucideAlarmCheck:zn,LucideAlarmClock:Yo,LucideAlarmClockCheck:zn,LucideAlarmClockOff:Qo,LucideAlarmMinus:Jo,LucideAlarmPlus:ei,LucideAlbum:ti,LucideAlertCircle:ni,LucideAlertOctagon:ri,LucideAlertTriangle:Ma,LucideAlignCenter:ii,LucideAlignCenterHorizontal:ai,LucideAlignCenterVertical:oi,LucideAlignEndHorizontal:li,LucideAlignEndVertical:ci,LucideAlignHorizontalDistributeCenter:si,LucideAlignHorizontalDistributeEnd:di,LucideAlignHorizontalDistributeStart:ui,LucideAlignHorizontalJustifyCenter:hi,LucideAlignHorizontalJustifyEnd:yi,LucideAlignHorizontalJustifyStart:pi,LucideAlignHorizontalSpaceAround:ki,LucideAlignHorizontalSpaceBetween:fi,LucideAlignJustify:mi,LucideAlignLeft:ur,LucideAlignRight:vi,LucideAlignStartHorizontal:gi,LucideAlignStartVertical:xi,LucideAlignVerticalDistributeCenter:Mi,LucideAlignVerticalDistributeEnd:wi,LucideAlignVerticalDistributeStart:Li,LucideAlignVerticalJustifyCenter:Ci,LucideAlignVerticalJustifyEnd:Si,LucideAlignVerticalJustifyStart:Ii,LucideAlignVerticalSpaceAround:bi,LucideAlignVerticalSpaceBetween:ji,LucideAmpersand:zi,LucideAmpersands:Ai,LucideAnchor:Pi,LucideAngry:Ri,LucideAnnoyed:Hi,LucideAntenna:Ti,LucideAperture:qi,LucideAppWindow:Bi,LucideApple:Vi,LucideArchive:Di,LucideArchiveRestore:Fi,LucideArchiveX:Ei,LucideAreaChart:Oi,LucideArmchair:Ni,LucideArrowBigDown:Ui,LucideArrowBigDownDash:_i,LucideArrowBigLeft:Zi,LucideArrowBigLeftDash:Wi,LucideArrowBigRight:$i,LucideArrowBigRightDash:Gi,LucideArrowBigUp:Ki,LucideArrowBigUpDash:Xi,LucideArrowDown:hl,LucideArrowDown01:Qi,LucideArrowDown10:Yi,LucideArrowDownAZ:An,LucideArrowDownAz:An,LucideArrowDownCircle:Ji,LucideArrowDownFromLine:el,LucideArrowDownLeft:rl,LucideArrowDownLeftFromCircle:tl,LucideArrowDownLeftSquare:nl,LucideArrowDownNarrowWide:al,LucideArrowDownRight:ll,LucideArrowDownRightFromCircle:ol,LucideArrowDownRightSquare:il,LucideArrowDownSquare:cl,LucideArrowDownToDot:sl,LucideArrowDownToLine:dl,LucideArrowDownUp:ul,LucideArrowDownWideNarrow:Pn,LucideArrowDownZA:Rn,LucideArrowDownZa:Rn,LucideArrowLeft:vl,LucideArrowLeftCircle:yl,LucideArrowLeftFromLine:pl,LucideArrowLeftRight:kl,LucideArrowLeftSquare:fl,LucideArrowLeftToLine:ml,LucideArrowRight:wa,LucideArrowRightCircle:gl,LucideArrowRightFromLine:xl,LucideArrowRightLeft:Ml,LucideArrowRightSquare:wl,LucideArrowRightToLine:Ll,LucideArrowUp:El,LucideArrowUp01:Cl,LucideArrowUp10:Sl,LucideArrowUpAZ:Hn,LucideArrowUpAz:Hn,LucideArrowUpCircle:Il,LucideArrowUpDown:bl,LucideArrowUpFromDot:jl,LucideArrowUpFromLine:zl,LucideArrowUpLeft:Rl,LucideArrowUpLeftFromCircle:Al,LucideArrowUpLeftSquare:Pl,LucideArrowUpNarrowWide:Tn,LucideArrowUpRight:ql,LucideArrowUpRightFromCircle:Hl,LucideArrowUpRightSquare:Tl,LucideArrowUpSquare:Bl,LucideArrowUpToLine:Vl,LucideArrowUpWideNarrow:Fl,LucideArrowUpZA:qn,LucideArrowUpZa:qn,LucideArrowsUpFromLine:Dl,LucideAsterisk:Ol,LucideAtSign:Nl,LucideAtom:_l,LucideAudioLines:Ul,LucideAudioWaveform:Wl,LucideAward:Zl,LucideAxe:Gl,LucideAxis3D:Bn,LucideAxis3d:Bn,LucideBaby:$l,LucideBackpack:Xl,LucideBadge:uc,LucideBadgeAlert:Kl,LucideBadgeCent:Ql,LucideBadgeCheck:Vn,LucideBadgeDollarSign:Yl,LucideBadgeEuro:Jl,LucideBadgeHelp:ec,LucideBadgeIndianRupee:tc,LucideBadgeInfo:nc,LucideBadgeJapaneseYen:rc,LucideBadgeMinus:ac,LucideBadgePercent:oc,LucideBadgePlus:ic,LucideBadgePoundSterling:lc,LucideBadgeRussianRuble:cc,LucideBadgeSwissFranc:sc,LucideBadgeX:dc,LucideBaggageClaim:hc,LucideBan:yc,LucideBanana:pc,LucideBanknote:kc,LucideBarChart:wc,LucideBarChart2:fc,LucideBarChart3:mc,LucideBarChart4:vc,LucideBarChartBig:gc,LucideBarChartHorizontal:Mc,LucideBarChartHorizontalBig:xc,LucideBarcode:Lc,LucideBaseline:Cc,LucideBath:Sc,LucideBattery:Pc,LucideBatteryCharging:Ic,LucideBatteryFull:bc,LucideBatteryLow:jc,LucideBatteryMedium:zc,LucideBatteryWarning:Ac,LucideBeaker:Rc,LucideBean:Tc,LucideBeanOff:Hc,LucideBed:Vc,LucideBedDouble:qc,LucideBedSingle:Bc,LucideBeef:Fc,LucideBeer:Ec,LucideBell:Wc,LucideBellDot:Dc,LucideBellMinus:Oc,LucideBellOff:Nc,LucideBellPlus:_c,LucideBellRing:Uc,LucideBike:Zc,LucideBinary:Gc,LucideBiohazard:$c,LucideBird:Xc,LucideBitcoin:Kc,LucideBlinds:Qc,LucideBlocks:Yc,LucideBluetooth:n2,LucideBluetoothConnected:Jc,LucideBluetoothOff:e2,LucideBluetoothSearching:t2,LucideBold:r2,LucideBomb:a2,LucideBone:o2,LucideBook:j2,LucideBookA:i2,LucideBookAudio:l2,LucideBookCheck:c2,LucideBookCopy:s2,LucideBookDashed:Fn,LucideBookDown:d2,LucideBookHeadphones:u2,LucideBookHeart:h2,LucideBookImage:y2,LucideBookKey:p2,LucideBookLock:k2,LucideBookMarked:f2,LucideBookMinus:m2,LucideBookOpen:x2,LucideBookOpenCheck:v2,LucideBookOpenText:g2,LucideBookPlus:M2,LucideBookTemplate:Fn,LucideBookText:w2,LucideBookType:L2,LucideBookUp:S2,LucideBookUp2:C2,LucideBookUser:I2,LucideBookX:b2,LucideBookmark:H2,LucideBookmarkCheck:z2,LucideBookmarkMinus:A2,LucideBookmarkPlus:P2,LucideBookmarkX:R2,LucideBoomBox:T2,LucideBot:q2,LucideBox:hr,LucideBoxSelect:B2,LucideBoxes:V2,LucideBraces:En,LucideBrackets:F2,LucideBrain:O2,LucideBrainCircuit:E2,LucideBrainCog:D2,LucideBriefcase:N2,LucideBringToFront:_2,LucideBrush:U2,LucideBug:G2,LucideBugOff:W2,LucideBugPlay:Z2,LucideBuilding:X2,LucideBuilding2:$2,LucideBus:Q2,LucideBusFront:K2,LucideCable:J2,LucideCableCar:Y2,LucideCake:ts,LucideCakeSlice:es,LucideCalculator:ns,LucideCalendar:ks,LucideCalendarCheck:as,LucideCalendarCheck2:rs,LucideCalendarClock:os,LucideCalendarDays:is,LucideCalendarHeart:ls,LucideCalendarMinus:cs,LucideCalendarOff:ss,LucideCalendarPlus:ds,LucideCalendarRange:us,LucideCalendarSearch:hs,LucideCalendarX:ps,LucideCalendarX2:ys,LucideCamera:ms,LucideCameraOff:fs,LucideCandlestickChart:vs,LucideCandy:Ms,LucideCandyCane:gs,LucideCandyOff:xs,LucideCar:Cs,LucideCarFront:ws,LucideCarTaxiFront:Ls,LucideCaravan:Ss,LucideCarrot:Is,LucideCaseLower:bs,LucideCaseSensitive:js,LucideCaseUpper:zs,LucideCassetteTape:As,LucideCast:Ps,LucideCastle:Rs,LucideCat:Hs,LucideCheck:yr,LucideCheckCheck:Ts,LucideCheckCircle:Bs,LucideCheckCircle2:qs,LucideCheckSquare:Fs,LucideCheckSquare2:Vs,LucideChefHat:Es,LucideCherry:Ds,LucideChevronDown:b1,LucideChevronDownCircle:Os,LucideChevronDownSquare:Ns,LucideChevronFirst:_s,LucideChevronLast:Us,LucideChevronLeft:Gs,LucideChevronLeftCircle:Ws,LucideChevronLeftSquare:Zs,LucideChevronRight:Ks,LucideChevronRightCircle:$s,LucideChevronRightSquare:Xs,LucideChevronUp:pr,LucideChevronUpCircle:Qs,LucideChevronUpSquare:Ys,LucideChevronsDown:ed,LucideChevronsDownUp:Js,LucideChevronsLeft:nd,LucideChevronsLeftRight:td,LucideChevronsRight:ad,LucideChevronsRightLeft:rd,LucideChevronsUp:od,LucideChevronsUpDown:La,LucideChrome:id,LucideChurch:ld,LucideCigarette:sd,LucideCigaretteOff:cd,LucideCircle:vd,LucideCircleDashed:dd,LucideCircleDollarSign:ud,LucideCircleDot:yd,LucideCircleDotDashed:hd,LucideCircleEllipsis:pd,LucideCircleEqual:kd,LucideCircleOff:fd,LucideCircleSlash:md,LucideCircleSlash2:Dn,LucideCircleSlashed:Dn,LucideCircleUser:Nn,LucideCircleUserRound:On,LucideCircuitBoard:gd,LucideCitrus:xd,LucideClapperboard:Md,LucideClipboard:Ad,LucideClipboardCheck:wd,LucideClipboardCopy:Ld,LucideClipboardEdit:Cd,LucideClipboardList:Sd,LucideClipboardPaste:Id,LucideClipboardSignature:bd,LucideClipboardType:jd,LucideClipboardX:zd,LucideClock:_d,LucideClock1:Pd,LucideClock10:Rd,LucideClock11:Hd,LucideClock12:Td,LucideClock2:qd,LucideClock3:Bd,LucideClock4:Vd,LucideClock5:Fd,LucideClock6:Ed,LucideClock7:Dd,LucideClock8:Od,LucideClock9:Nd,LucideCloud:r0,LucideCloudCog:Ud,LucideCloudDrizzle:Wd,LucideCloudFog:Zd,LucideCloudHail:Gd,LucideCloudLightning:$d,LucideCloudMoon:Kd,LucideCloudMoonRain:Xd,LucideCloudOff:Qd,LucideCloudRain:Jd,LucideCloudRainWind:Yd,LucideCloudSnow:e0,LucideCloudSun:n0,LucideCloudSunRain:t0,LucideCloudy:a0,LucideClover:o0,LucideClub:i0,LucideCode:c0,LucideCode2:l0,LucideCodepen:s0,LucideCodesandbox:d0,LucideCoffee:u0,LucideCog:h0,LucideCoins:y0,LucideColumns:p0,LucideCombine:k0,LucideCommand:f0,LucideCompass:m0,LucideComponent:v0,LucideComputer:g0,LucideConciergeBell:x0,LucideCone:M0,LucideConstruction:w0,LucideContact:C0,LucideContact2:L0,LucideContainer:S0,LucideContrast:I0,LucideCookie:b0,LucideCopy:H0,LucideCopyCheck:j0,LucideCopyMinus:z0,LucideCopyPlus:A0,LucideCopySlash:P0,LucideCopyX:R0,LucideCopyleft:T0,LucideCopyright:q0,LucideCornerDownLeft:B0,LucideCornerDownRight:V0,LucideCornerLeftDown:F0,LucideCornerLeftUp:E0,LucideCornerRightDown:D0,LucideCornerRightUp:O0,LucideCornerUpLeft:N0,LucideCornerUpRight:_0,LucideCpu:U0,LucideCreativeCommons:W0,LucideCreditCard:Z0,LucideCroissant:G0,LucideCrop:$0,LucideCross:X0,LucideCrosshair:K0,LucideCrown:Q0,LucideCuboid:Y0,LucideCupSoda:J0,LucideCurlyBraces:En,LucideCurrency:eu,LucideCylinder:tu,LucideDatabase:au,LucideDatabaseBackup:nu,LucideDatabaseZap:ru,LucideDelete:ou,LucideDessert:iu,LucideDiameter:lu,LucideDiamond:cu,LucideDice1:su,LucideDice2:du,LucideDice3:uu,LucideDice4:hu,LucideDice5:yu,LucideDice6:pu,LucideDices:ku,LucideDiff:fu,LucideDisc:xu,LucideDisc2:mu,LucideDisc3:vu,LucideDiscAlbum:gu,LucideDivide:Lu,LucideDivideCircle:Mu,LucideDivideSquare:wu,LucideDna:Su,LucideDnaOff:Cu,LucideDog:Iu,LucideDollarSign:bu,LucideDonut:ju,LucideDoorClosed:zu,LucideDoorOpen:Au,LucideDot:Pu,LucideDownload:pn,LucideDownloadCloud:Ru,LucideDraftingCompass:Hu,LucideDrama:Tu,LucideDribbble:qu,LucideDroplet:Bu,LucideDroplets:Vu,LucideDrum:Fu,LucideDrumstick:Eu,LucideDumbbell:Du,LucideEar:Nu,LucideEarOff:Ou,LucideEdit:wt,LucideEdit2:r1,LucideEdit3:n1,LucideEgg:Wu,LucideEggFried:_u,LucideEggOff:Uu,LucideEqual:Gu,LucideEqualNot:Zu,LucideEraser:$u,LucideEuro:Xu,LucideExpand:Ku,LucideExternalLink:Ca,LucideEye:Ia,LucideEyeOff:Sa,LucideFacebook:Qu,LucideFactory:Yu,LucideFan:Ju,LucideFastForward:eh,LucideFeather:th,LucideFerrisWheel:nh,LucideFigma:rh,LucideFile:ay,LucideFileArchive:ah,LucideFileAudio:ih,LucideFileAudio2:oh,LucideFileAxis3D:_n,LucideFileAxis3d:_n,LucideFileBadge:ch,LucideFileBadge2:lh,LucideFileBarChart:dh,LucideFileBarChart2:sh,LucideFileBox:uh,LucideFileCheck:yh,LucideFileCheck2:hh,LucideFileClock:ph,LucideFileCode:fh,LucideFileCode2:kh,LucideFileCog:Un,LucideFileCog2:Un,LucideFileDiff:mh,LucideFileDigit:vh,LucideFileDown:gh,LucideFileEdit:xh,LucideFileHeart:Mh,LucideFileImage:wh,LucideFileInput:Lh,LucideFileJson:Sh,LucideFileJson2:Ch,LucideFileKey:bh,LucideFileKey2:Ih,LucideFileLineChart:jh,LucideFileLock:Ah,LucideFileLock2:zh,LucideFileMinus:Rh,LucideFileMinus2:Ph,LucideFileMusic:Hh,LucideFileOutput:Th,LucideFilePieChart:qh,LucideFilePlus:Vh,LucideFilePlus2:Bh,LucideFileQuestion:Fh,LucideFileScan:Eh,LucideFileSearch:Oh,LucideFileSearch2:Dh,LucideFileSignature:Nh,LucideFileSpreadsheet:_h,LucideFileStack:Uh,LucideFileSymlink:Wh,LucideFileTerminal:Zh,LucideFileText:Gh,LucideFileType:Xh,LucideFileType2:$h,LucideFileUp:Kh,LucideFileVideo:Yh,LucideFileVideo2:Qh,LucideFileVolume:ey,LucideFileVolume2:Jh,LucideFileWarning:ty,LucideFileX:ry,LucideFileX2:ny,LucideFiles:oy,LucideFilm:iy,LucideFilter:cy,LucideFilterX:ly,LucideFingerprint:sy,LucideFish:hy,LucideFishOff:dy,LucideFishSymbol:uy,LucideFlag:fy,LucideFlagOff:yy,LucideFlagTriangleLeft:py,LucideFlagTriangleRight:ky,LucideFlame:vy,LucideFlameKindling:my,LucideFlashlight:xy,LucideFlashlightOff:gy,LucideFlaskConical:wy,LucideFlaskConicalOff:My,LucideFlaskRound:Ly,LucideFlipHorizontal:Sy,LucideFlipHorizontal2:Cy,LucideFlipVertical:by,LucideFlipVertical2:Iy,LucideFlower:zy,LucideFlower2:jy,LucideFocus:Ay,LucideFoldHorizontal:Py,LucideFoldVertical:Ry,LucideFolder:ip,LucideFolderArchive:Hy,LucideFolderCheck:Ty,LucideFolderClock:qy,LucideFolderClosed:By,LucideFolderCog:Wn,LucideFolderCog2:Wn,LucideFolderDot:Vy,LucideFolderDown:Fy,LucideFolderEdit:Ey,LucideFolderGit:Oy,LucideFolderGit2:Dy,LucideFolderHeart:Ny,LucideFolderInput:_y,LucideFolderKanban:Uy,LucideFolderKey:Wy,LucideFolderLock:Zy,LucideFolderMinus:Gy,LucideFolderOpen:Xy,LucideFolderOpenDot:$y,LucideFolderOutput:Ky,LucideFolderPlus:Qy,LucideFolderRoot:Yy,LucideFolderSearch:ep,LucideFolderSearch2:Jy,LucideFolderSymlink:tp,LucideFolderSync:np,LucideFolderTree:rp,LucideFolderUp:ap,LucideFolderX:op,LucideFolders:lp,LucideFootprints:cp,LucideForklift:sp,LucideFormInput:dp,LucideForward:up,LucideFrame:hp,LucideFramer:yp,LucideFrown:pp,LucideFuel:kp,LucideFullscreen:fp,LucideFunctionSquare:mp,LucideGalleryHorizontal:gp,LucideGalleryHorizontalEnd:vp,LucideGalleryThumbnails:xp,LucideGalleryVertical:wp,LucideGalleryVerticalEnd:Mp,LucideGamepad:Cp,LucideGamepad2:Lp,LucideGanttChart:Sp,LucideGanttChartSquare:Zn,LucideGauge:bp,LucideGaugeCircle:Ip,LucideGavel:jp,LucideGem:zp,LucideGhost:Ap,LucideGift:Pp,LucideGitBranch:Hp,LucideGitBranchPlus:Rp,LucideGitCommit:Gn,LucideGitCommitHorizontal:Gn,LucideGitCommitVertical:Tp,LucideGitCompare:Bp,LucideGitCompareArrows:qp,LucideGitFork:Vp,LucideGitGraph:Fp,LucideGitMerge:Ep,LucideGitPullRequest:Wp,LucideGitPullRequestArrow:Dp,LucideGitPullRequestClosed:Op,LucideGitPullRequestCreate:_p,LucideGitPullRequestCreateArrow:Np,LucideGitPullRequestDraft:Up,LucideGithub:ba,LucideGitlab:Zp,LucideGlassWater:Gp,LucideGlasses:$p,LucideGlobe:Kp,LucideGlobe2:Xp,LucideGoal:Qp,LucideGrab:Yp,LucideGraduationCap:Jp,LucideGrape:ek,LucideGrid:Mt,LucideGrid2X2:$n,LucideGrid2x2:$n,LucideGrid3X3:Mt,LucideGrid3x3:Mt,LucideGrip:rk,LucideGripHorizontal:tk,LucideGripVertical:nk,LucideGroup:ak,LucideGuitar:ok,LucideHammer:ik,LucideHand:ck,LucideHandMetal:lk,LucideHardDrive:uk,LucideHardDriveDownload:sk,LucideHardDriveUpload:dk,LucideHardHat:hk,LucideHash:yk,LucideHaze:pk,LucideHdmiPort:kk,LucideHeading:wk,LucideHeading1:fk,LucideHeading2:mk,LucideHeading3:vk,LucideHeading4:gk,LucideHeading5:xk,LucideHeading6:Mk,LucideHeadphones:Lk,LucideHeart:jk,LucideHeartCrack:Ck,LucideHeartHandshake:Sk,LucideHeartOff:Ik,LucideHeartPulse:bk,LucideHelpCircle:zk,LucideHelpingHand:Ak,LucideHexagon:Pk,LucideHighlighter:Rk,LucideHistory:Hk,LucideHome:Tk,LucideHop:Bk,LucideHopOff:qk,LucideHotel:Vk,LucideHourglass:Fk,LucideIceCream:Dk,LucideIceCream2:Ek,LucideImage:Wk,LucideImageDown:Ok,LucideImageMinus:Nk,LucideImageOff:_k,LucideImagePlus:Uk,LucideImport:Zk,LucideInbox:Gk,LucideIndent:$k,LucideIndianRupee:Xk,LucideInfinity:Kk,LucideInfo:Qk,LucideInspect:Qn,LucideInstagram:Yk,LucideItalic:Jk,LucideIterationCcw:ef,LucideIterationCw:tf,LucideJapaneseYen:nf,LucideJoystick:rf,LucideKanban:af,LucideKanbanSquare:Kn,LucideKanbanSquareDashed:Xn,LucideKey:cf,LucideKeyRound:of,LucideKeySquare:lf,LucideKeyboard:df,LucideKeyboardMusic:sf,LucideLamp:ff,LucideLampCeiling:uf,LucideLampDesk:hf,LucideLampFloor:yf,LucideLampWallDown:pf,LucideLampWallUp:kf,LucideLandPlot:mf,LucideLandmark:vf,LucideLanguages:gf,LucideLaptop:Mf,LucideLaptop2:xf,LucideLasso:Lf,LucideLassoSelect:wf,LucideLaugh:Cf,LucideLayers:j1,LucideLayers2:Sf,LucideLayers3:If,LucideLayout:Rf,LucideLayoutDashboard:ja,LucideLayoutGrid:bf,LucideLayoutList:jf,LucideLayoutPanelLeft:zf,LucideLayoutPanelTop:Af,LucideLayoutTemplate:Pf,LucideLeaf:Hf,LucideLeafyGreen:Tf,LucideLibrary:Vf,LucideLibraryBig:qf,LucideLibrarySquare:Bf,LucideLifeBuoy:Ff,LucideLigature:Ef,LucideLightbulb:Of,LucideLightbulbOff:Df,LucideLineChart:Nf,LucideLink:Wf,LucideLink2:Uf,LucideLink2Off:_f,LucideLinkedin:Zf,LucideList:i4,LucideListChecks:Gf,LucideListEnd:$f,LucideListFilter:Xf,LucideListMinus:Kf,LucideListMusic:Qf,LucideListOrdered:Yf,LucideListPlus:Jf,LucideListRestart:e4,LucideListStart:t4,LucideListTodo:n4,LucideListTree:r4,LucideListVideo:a4,LucideListX:o4,LucideLoader:c4,LucideLoader2:l4,LucideLocate:u4,LucideLocateFixed:s4,LucideLocateOff:d4,LucideLock:za,LucideLockKeyhole:h4,LucideLogIn:y4,LucideLogOut:p4,LucideLollipop:k4,LucideLuggage:f4,LucideMSquare:m4,LucideMagnet:v4,LucideMail:Aa,LucideMailCheck:g4,LucideMailMinus:x4,LucideMailOpen:M4,LucideMailPlus:w4,LucideMailQuestion:L4,LucideMailSearch:C4,LucideMailWarning:S4,LucideMailX:I4,LucideMailbox:b4,LucideMails:j4,LucideMap:R4,LucideMapPin:A4,LucideMapPinOff:z4,LucideMapPinned:P4,LucideMartini:H4,LucideMaximize:q4,LucideMaximize2:T4,LucideMedal:B4,LucideMegaphone:F4,LucideMegaphoneOff:V4,LucideMeh:E4,LucideMemoryStick:D4,LucideMenu:N4,LucideMenuSquare:O4,LucideMerge:_4,LucideMessageCircle:U4,LucideMessageSquare:G4,LucideMessageSquareDashed:W4,LucideMessageSquarePlus:Z4,LucideMessagesSquare:$4,LucideMic:Q4,LucideMic2:X4,LucideMicOff:K4,LucideMicroscope:Y4,LucideMicrowave:J4,LucideMilestone:e5,LucideMilk:n5,LucideMilkOff:t5,LucideMinimize:a5,LucideMinimize2:r5,LucideMinus:Pa,LucideMinusCircle:o5,LucideMinusSquare:i5,LucideMonitor:Ra,LucideMonitorCheck:l5,LucideMonitorDot:c5,LucideMonitorDown:s5,LucideMonitorOff:d5,LucideMonitorPause:u5,LucideMonitorPlay:h5,LucideMonitorSmartphone:y5,LucideMonitorSpeaker:p5,LucideMonitorStop:k5,LucideMonitorUp:f5,LucideMonitorX:m5,LucideMoon:Ha,LucideMoonStar:v5,LucideMoreHorizontal:g5,LucideMoreVertical:x5,LucideMountain:w5,LucideMountainSnow:M5,LucideMouse:I5,LucideMousePointer:S5,LucideMousePointer2:L5,LucideMousePointerClick:kr,LucideMousePointerSquare:Qn,LucideMousePointerSquareDashed:C5,LucideMove:E5,LucideMove3D:Yn,LucideMove3d:Yn,LucideMoveDiagonal:j5,LucideMoveDiagonal2:b5,LucideMoveDown:P5,LucideMoveDownLeft:z5,LucideMoveDownRight:A5,LucideMoveHorizontal:R5,LucideMoveLeft:H5,LucideMoveRight:T5,LucideMoveUp:V5,LucideMoveUpLeft:q5,LucideMoveUpRight:B5,LucideMoveVertical:F5,LucideMusic:_5,LucideMusic2:D5,LucideMusic3:O5,LucideMusic4:N5,LucideNavigation:G5,LucideNavigation2:W5,LucideNavigation2Off:U5,LucideNavigationOff:Z5,LucideNetwork:$5,LucideNewspaper:X5,LucideNfc:K5,LucideNut:Y5,LucideNutOff:Q5,LucideOctagon:J5,LucideOption:e3,LucideOrbit:t3,LucideOutdent:n3,LucidePackage:d3,LucidePackage2:r3,LucidePackageCheck:a3,LucidePackageMinus:o3,LucidePackageOpen:i3,LucidePackagePlus:l3,LucidePackageSearch:c3,LucidePackageX:s3,LucidePaintBucket:u3,LucidePaintbrush:y3,LucidePaintbrush2:h3,LucidePalette:fr,LucidePalmtree:p3,LucidePanelBottom:v3,LucidePanelBottomClose:k3,LucidePanelBottomInactive:f3,LucidePanelBottomOpen:m3,LucidePanelLeft:t1,LucidePanelLeftClose:Jn,LucidePanelLeftInactive:g3,LucidePanelLeftOpen:e1,LucidePanelRight:L3,LucidePanelRightClose:x3,LucidePanelRightInactive:M3,LucidePanelRightOpen:w3,LucidePanelTop:b3,LucidePanelTopClose:C3,LucidePanelTopInactive:S3,LucidePanelTopOpen:I3,LucidePaperclip:j3,LucideParentheses:z3,LucideParkingCircle:P3,LucideParkingCircleOff:A3,LucideParkingMeter:R3,LucideParkingSquare:T3,LucideParkingSquareOff:H3,LucidePartyPopper:q3,LucidePause:F3,LucidePauseCircle:B3,LucidePauseOctagon:V3,LucidePawPrint:E3,LucidePcCase:D3,LucidePen:r1,LucidePenBox:wt,LucidePenLine:n1,LucidePenSquare:wt,LucidePenTool:O3,LucidePencil:Ta,LucidePencilLine:N3,LucidePencilRuler:_3,LucidePentagon:U3,LucidePercent:$3,LucidePercentCircle:W3,LucidePercentDiamond:Z3,LucidePercentSquare:G3,LucidePersonStanding:X3,LucidePhone:nm,LucidePhoneCall:K3,LucidePhoneForwarded:Q3,LucidePhoneIncoming:Y3,LucidePhoneMissed:J3,LucidePhoneOff:em,LucidePhoneOutgoing:tm,LucidePi:am,LucidePiSquare:rm,LucidePiano:om,LucidePictureInPicture:lm,LucidePictureInPicture2:im,LucidePieChart:cm,LucidePiggyBank:sm,LucidePilcrow:um,LucidePilcrowSquare:dm,LucidePill:hm,LucidePin:pm,LucidePinOff:ym,LucidePipette:km,LucidePizza:fm,LucidePlane:gm,LucidePlaneLanding:mm,LucidePlaneTakeoff:vm,LucidePlay:wm,LucidePlayCircle:xm,LucidePlaySquare:Mm,LucidePlug:Im,LucidePlug2:Lm,LucidePlugZap:Sm,LucidePlugZap2:Cm,LucidePlus:qa,LucidePlusCircle:bm,LucidePlusSquare:jm,LucidePocket:Am,LucidePocketKnife:zm,LucidePodcast:Pm,LucidePointer:Rm,LucidePopcorn:Hm,LucidePopsicle:Tm,LucidePoundSterling:qm,LucidePower:Em,LucidePowerCircle:Bm,LucidePowerOff:Vm,LucidePowerSquare:Fm,LucidePresentation:Dm,LucidePrinter:Om,LucideProjector:Nm,LucidePuzzle:_m,LucidePyramid:Um,LucideQrCode:Wm,LucideQuote:Zm,LucideRabbit:Gm,LucideRadar:$m,LucideRadiation:Xm,LucideRadio:Ym,LucideRadioReceiver:Km,LucideRadioTower:Qm,LucideRadius:Jm,LucideRailSymbol:ev,LucideRainbow:tv,LucideRat:nv,LucideRatio:rv,LucideReceipt:av,LucideRectangleHorizontal:ov,LucideRectangleVertical:iv,LucideRecycle:lv,LucideRedo:dv,LucideRedo2:cv,LucideRedoDot:sv,LucideRefreshCcw:hv,LucideRefreshCcwDot:uv,LucideRefreshCw:pv,LucideRefreshCwOff:yv,LucideRefrigerator:kv,LucideRegex:fv,LucideRemoveFormatting:mv,LucideRepeat:xv,LucideRepeat1:vv,LucideRepeat2:gv,LucideReplace:wv,LucideReplaceAll:Mv,LucideReply:Cv,LucideReplyAll:Lv,LucideRewind:Sv,LucideRibbon:Iv,LucideRocket:bv,LucideRockingChair:jv,LucideRollerCoaster:zv,LucideRotate3D:a1,LucideRotate3d:a1,LucideRotateCcw:Av,LucideRotateCw:Pv,LucideRoute:Hv,LucideRouteOff:Rv,LucideRouter:Tv,LucideRows:qv,LucideRss:Bv,LucideRuler:Vv,LucideRussianRuble:Fv,LucideSailboat:Ev,LucideSalad:Dv,LucideSandwich:Ov,LucideSatellite:_v,LucideSatelliteDish:Nv,LucideSave:Wv,LucideSaveAll:Uv,LucideScale:Zv,LucideScale3D:o1,LucideScale3d:o1,LucideScaling:Gv,LucideScan:e6,LucideScanBarcode:$v,LucideScanEye:Xv,LucideScanFace:Kv,LucideScanLine:Qv,LucideScanSearch:Yv,LucideScanText:Jv,LucideScatterChart:t6,LucideSchool:r6,LucideSchool2:n6,LucideScissors:l6,LucideScissorsLineDashed:a6,LucideScissorsSquare:i6,LucideScissorsSquareDashedBottom:o6,LucideScreenShare:s6,LucideScreenShareOff:c6,LucideScroll:u6,LucideScrollText:d6,LucideSearch:mr,LucideSearchCheck:h6,LucideSearchCode:y6,LucideSearchSlash:p6,LucideSearchX:k6,LucideSend:m6,LucideSendHorizonal:i1,LucideSendHorizontal:i1,LucideSendToBack:f6,LucideSeparatorHorizontal:v6,LucideSeparatorVertical:g6,LucideServer:L6,LucideServerCog:x6,LucideServerCrash:M6,LucideServerOff:w6,LucideSettings:S6,LucideSettings2:C6,LucideShapes:I6,LucideShare:j6,LucideShare2:b6,LucideSheet:z6,LucideShell:A6,LucideShield:D6,LucideShieldAlert:P6,LucideShieldBan:R6,LucideShieldCheck:H6,LucideShieldClose:l1,LucideShieldEllipsis:T6,LucideShieldHalf:q6,LucideShieldMinus:B6,LucideShieldOff:V6,LucideShieldPlus:F6,LucideShieldQuestion:E6,LucideShieldX:l1,LucideShip:N6,LucideShipWheel:O6,LucideShirt:_6,LucideShoppingBag:U6,LucideShoppingBasket:W6,LucideShoppingCart:Z6,LucideShovel:G6,LucideShowerHead:$6,LucideShrink:X6,LucideShrub:K6,LucideShuffle:Q6,LucideSidebar:t1,LucideSidebarClose:Jn,LucideSidebarOpen:e1,LucideSigma:J6,LucideSigmaSquare:Y6,LucideSignal:a8,LucideSignalHigh:e8,LucideSignalLow:t8,LucideSignalMedium:n8,LucideSignalZero:r8,LucideSignpost:i8,LucideSignpostBig:o8,LucideSiren:l8,LucideSkipBack:c8,LucideSkipForward:s8,LucideSkull:d8,LucideSlack:u8,LucideSlash:h8,LucideSlice:y8,LucideSliders:k8,LucideSlidersHorizontal:p8,LucideSmartphone:v8,LucideSmartphoneCharging:f8,LucideSmartphoneNfc:m8,LucideSmile:x8,LucideSmilePlus:g8,LucideSnail:M8,LucideSnowflake:w8,LucideSofa:L8,LucideSortAsc:Tn,LucideSortDesc:Pn,LucideSoup:C8,LucideSpace:S8,LucideSpade:I8,LucideSparkle:b8,LucideSparkles:c1,LucideSpeaker:j8,LucideSpeech:z8,LucideSpellCheck:P8,LucideSpellCheck2:A8,LucideSpline:R8,LucideSplit:q8,LucideSplitSquareHorizontal:H8,LucideSplitSquareVertical:T8,LucideSprayCan:B8,LucideSprout:V8,LucideSquare:vr,LucideSquareAsterisk:F8,LucideSquareCode:E8,LucideSquareDashedBottom:O8,LucideSquareDashedBottomCode:D8,LucideSquareDot:N8,LucideSquareEqual:_8,LucideSquareGantt:Zn,LucideSquareKanban:Kn,LucideSquareKanbanDashed:Xn,LucideSquareSlash:U8,LucideSquareStack:W8,LucideSquareUser:d1,LucideSquareUserRound:s1,LucideSquirrel:Z8,LucideStamp:G8,LucideStar:K8,LucideStarHalf:$8,LucideStarOff:X8,LucideStars:c1,LucideStepBack:Q8,LucideStepForward:Y8,LucideStethoscope:J8,LucideSticker:eg,LucideStickyNote:tg,LucideStopCircle:ng,LucideStore:rg,LucideStretchHorizontal:ag,LucideStretchVertical:og,LucideStrikethrough:ig,LucideSubscript:lg,LucideSubtitles:cg,LucideSun:Ba,LucideSunDim:sg,LucideSunMedium:dg,LucideSunMoon:ug,LucideSunSnow:hg,LucideSunrise:yg,LucideSunset:pg,LucideSuperscript:kg,LucideSwissFranc:fg,LucideSwitchCamera:mg,LucideSword:vg,LucideSwords:gg,LucideSyringe:xg,LucideTable:wg,LucideTable2:Mg,LucideTableProperties:gr,LucideTablet:Cg,LucideTabletSmartphone:Lg,LucideTablets:Sg,LucideTag:xr,LucideTags:Ig,LucideTally1:bg,LucideTally2:jg,LucideTally3:zg,LucideTally4:Ag,LucideTally5:Pg,LucideTangent:Rg,LucideTarget:Hg,LucideTent:qg,LucideTentTree:Tg,LucideTerminal:Vg,LucideTerminalSquare:Bg,LucideTestTube:Eg,LucideTestTube2:Fg,LucideTestTubes:Dg,LucideText:Ug,LucideTextCursor:Ng,LucideTextCursorInput:Og,LucideTextQuote:_g,LucideTextSelect:u1,LucideTextSelection:u1,LucideTheater:Wg,LucideThermometer:$g,LucideThermometerSnowflake:Zg,LucideThermometerSun:Gg,LucideThumbsDown:Xg,LucideThumbsUp:Kg,LucideTicket:Qg,LucideTimer:e7,LucideTimerOff:Yg,LucideTimerReset:Jg,LucideToggleLeft:Mr,LucideToggleRight:t7,LucideTornado:n7,LucideTorus:r7,LucideTouchpad:o7,LucideTouchpadOff:a7,LucideTowerControl:i7,LucideToyBrick:l7,LucideTractor:c7,LucideTrafficCone:s7,LucideTrain:h1,LucideTrainFront:u7,LucideTrainFrontTunnel:d7,LucideTrainTrack:h7,LucideTramFront:h1,LucideTrash:y7,LucideTrash2:z1,LucideTreeDeciduous:p7,LucideTreePine:k7,LucideTrees:f7,LucideTrello:m7,LucideTrendingDown:v7,LucideTrendingUp:g7,LucideTriangle:M7,LucideTriangleRight:x7,LucideTrophy:w7,LucideTruck:L7,LucideTurtle:C7,LucideTv:I7,LucideTv2:S7,LucideTwitch:b7,LucideTwitter:j7,LucideType:wr,LucideUmbrella:A7,LucideUmbrellaOff:z7,LucideUnderline:P7,LucideUndo:T7,LucideUndo2:R7,LucideUndoDot:H7,LucideUnfoldHorizontal:q7,LucideUnfoldVertical:B7,LucideUngroup:V7,LucideUnlink:E7,LucideUnlink2:F7,LucideUnlock:O7,LucideUnlockKeyhole:D7,LucideUnplug:N7,LucideUpload:U7,LucideUploadCloud:_7,LucideUsb:W7,LucideUser:Q7,LucideUser2:v1,LucideUserCheck:Z7,LucideUserCheck2:y1,LucideUserCircle:Nn,LucideUserCircle2:On,LucideUserCog:G7,LucideUserCog2:p1,LucideUserMinus:$7,LucideUserMinus2:k1,LucideUserPlus:X7,LucideUserPlus2:f1,LucideUserRound:v1,LucideUserRoundCheck:y1,LucideUserRoundCog:p1,LucideUserRoundMinus:k1,LucideUserRoundPlus:f1,LucideUserRoundX:m1,LucideUserSquare:d1,LucideUserSquare2:s1,LucideUserX:K7,LucideUserX2:m1,LucideUsers:Y7,LucideUsers2:g1,LucideUsersRound:g1,LucideUtensils:ex,LucideUtensilsCrossed:J7,LucideUtilityPole:tx,LucideVariable:nx,LucideVegan:rx,LucideVenetianMask:ax,LucideVerified:Vn,LucideVibrate:ix,LucideVibrateOff:ox,LucideVideo:cx,LucideVideoOff:lx,LucideVideotape:sx,LucideView:dx,LucideVoicemail:ux,LucideVolume:kx,LucideVolume1:hx,LucideVolume2:yx,LucideVolumeX:px,LucideVote:fx,LucideWallet:gx,LucideWallet2:mx,LucideWalletCards:vx,LucideWallpaper:xx,LucideWand:wx,LucideWand2:Mx,LucideWarehouse:Lx,LucideWatch:Cx,LucideWaves:Sx,LucideWaypoints:Ix,LucideWebcam:bx,LucideWebhook:jx,LucideWeight:zx,LucideWheat:Px,LucideWheatOff:Ax,LucideWholeWord:Rx,LucideWifi:Tx,LucideWifiOff:Hx,LucideWind:qx,LucideWine:Vx,LucideWineOff:Bx,LucideWorkflow:Fx,LucideWrapText:Ex,LucideWrench:Dx,LucideX:Lr,LucideXCircle:Ox,LucideXOctagon:Nx,LucideXSquare:_x,LucideYoutube:Ux,LucideZap:Zx,LucideZapOff:Wx,LucideZoomIn:Gx,LucideZoomOut:$x,Luggage:f4,LuggageIcon:f4,MSquare:m4,MSquareIcon:m4,Magnet:v4,MagnetIcon:v4,Mail:Aa,MailCheck:g4,MailCheckIcon:g4,MailIcon:Aa,MailMinus:x4,MailMinusIcon:x4,MailOpen:M4,MailOpenIcon:M4,MailPlus:w4,MailPlusIcon:w4,MailQuestion:L4,MailQuestionIcon:L4,MailSearch:C4,MailSearchIcon:C4,MailWarning:S4,MailWarningIcon:S4,MailX:I4,MailXIcon:I4,Mailbox:b4,MailboxIcon:b4,Mails:j4,MailsIcon:j4,Map:R4,MapIcon:R4,MapPin:A4,MapPinIcon:A4,MapPinOff:z4,MapPinOffIcon:z4,MapPinned:P4,MapPinnedIcon:P4,Martini:H4,MartiniIcon:H4,Maximize:q4,Maximize2:T4,Maximize2Icon:T4,MaximizeIcon:q4,Medal:B4,MedalIcon:B4,Megaphone:F4,MegaphoneIcon:F4,MegaphoneOff:V4,MegaphoneOffIcon:V4,Meh:E4,MehIcon:E4,MemoryStick:D4,MemoryStickIcon:D4,Menu:N4,MenuIcon:N4,MenuSquare:O4,MenuSquareIcon:O4,Merge:_4,MergeIcon:_4,MessageCircle:U4,MessageCircleIcon:U4,MessageSquare:G4,MessageSquareDashed:W4,MessageSquareDashedIcon:W4,MessageSquareIcon:G4,MessageSquarePlus:Z4,MessageSquarePlusIcon:Z4,MessagesSquare:$4,MessagesSquareIcon:$4,Mic:Q4,Mic2:X4,Mic2Icon:X4,MicIcon:Q4,MicOff:K4,MicOffIcon:K4,Microscope:Y4,MicroscopeIcon:Y4,Microwave:J4,MicrowaveIcon:J4,Milestone:e5,MilestoneIcon:e5,Milk:n5,MilkIcon:n5,MilkOff:t5,MilkOffIcon:t5,Minimize:a5,Minimize2:r5,Minimize2Icon:r5,MinimizeIcon:a5,Minus:Pa,MinusCircle:o5,MinusCircleIcon:o5,MinusIcon:Pa,MinusSquare:i5,MinusSquareIcon:i5,Monitor:Ra,MonitorCheck:l5,MonitorCheckIcon:l5,MonitorDot:c5,MonitorDotIcon:c5,MonitorDown:s5,MonitorDownIcon:s5,MonitorIcon:Ra,MonitorOff:d5,MonitorOffIcon:d5,MonitorPause:u5,MonitorPauseIcon:u5,MonitorPlay:h5,MonitorPlayIcon:h5,MonitorSmartphone:y5,MonitorSmartphoneIcon:y5,MonitorSpeaker:p5,MonitorSpeakerIcon:p5,MonitorStop:k5,MonitorStopIcon:k5,MonitorUp:f5,MonitorUpIcon:f5,MonitorX:m5,MonitorXIcon:m5,Moon:Ha,MoonIcon:Ha,MoonStar:v5,MoonStarIcon:v5,MoreHorizontal:g5,MoreHorizontalIcon:g5,MoreVertical:x5,MoreVerticalIcon:x5,Mountain:w5,MountainIcon:w5,MountainSnow:M5,MountainSnowIcon:M5,Mouse:I5,MouseIcon:I5,MousePointer:S5,MousePointer2:L5,MousePointer2Icon:L5,MousePointerClick:kr,MousePointerClickIcon:kr,MousePointerIcon:S5,MousePointerSquare:Qn,MousePointerSquareDashed:C5,MousePointerSquareDashedIcon:C5,MousePointerSquareIcon:Qn,Move:E5,Move3D:Yn,Move3DIcon:Yn,Move3d:Yn,Move3dIcon:Yn,MoveDiagonal:j5,MoveDiagonal2:b5,MoveDiagonal2Icon:b5,MoveDiagonalIcon:j5,MoveDown:P5,MoveDownIcon:P5,MoveDownLeft:z5,MoveDownLeftIcon:z5,MoveDownRight:A5,MoveDownRightIcon:A5,MoveHorizontal:R5,MoveHorizontalIcon:R5,MoveIcon:E5,MoveLeft:H5,MoveLeftIcon:H5,MoveRight:T5,MoveRightIcon:T5,MoveUp:V5,MoveUpIcon:V5,MoveUpLeft:q5,MoveUpLeftIcon:q5,MoveUpRight:B5,MoveUpRightIcon:B5,MoveVertical:F5,MoveVerticalIcon:F5,Music:_5,Music2:D5,Music2Icon:D5,Music3:O5,Music3Icon:O5,Music4:N5,Music4Icon:N5,MusicIcon:_5,Navigation:G5,Navigation2:W5,Navigation2Icon:W5,Navigation2Off:U5,Navigation2OffIcon:U5,NavigationIcon:G5,NavigationOff:Z5,NavigationOffIcon:Z5,Network:$5,NetworkIcon:$5,Newspaper:X5,NewspaperIcon:X5,Nfc:K5,NfcIcon:K5,Nut:Y5,NutIcon:Y5,NutOff:Q5,NutOffIcon:Q5,Octagon:J5,OctagonIcon:J5,Option:e3,OptionIcon:e3,Orbit:t3,OrbitIcon:t3,Outdent:n3,OutdentIcon:n3,Package:d3,Package2:r3,Package2Icon:r3,PackageCheck:a3,PackageCheckIcon:a3,PackageIcon:d3,PackageMinus:o3,PackageMinusIcon:o3,PackageOpen:i3,PackageOpenIcon:i3,PackagePlus:l3,PackagePlusIcon:l3,PackageSearch:c3,PackageSearchIcon:c3,PackageX:s3,PackageXIcon:s3,PaintBucket:u3,PaintBucketIcon:u3,Paintbrush:y3,Paintbrush2:h3,Paintbrush2Icon:h3,PaintbrushIcon:y3,Palette:fr,PaletteIcon:fr,Palmtree:p3,PalmtreeIcon:p3,PanelBottom:v3,PanelBottomClose:k3,PanelBottomCloseIcon:k3,PanelBottomIcon:v3,PanelBottomInactive:f3,PanelBottomInactiveIcon:f3,PanelBottomOpen:m3,PanelBottomOpenIcon:m3,PanelLeft:t1,PanelLeftClose:Jn,PanelLeftCloseIcon:Jn,PanelLeftIcon:t1,PanelLeftInactive:g3,PanelLeftInactiveIcon:g3,PanelLeftOpen:e1,PanelLeftOpenIcon:e1,PanelRight:L3,PanelRightClose:x3,PanelRightCloseIcon:x3,PanelRightIcon:L3,PanelRightInactive:M3,PanelRightInactiveIcon:M3,PanelRightOpen:w3,PanelRightOpenIcon:w3,PanelTop:b3,PanelTopClose:C3,PanelTopCloseIcon:C3,PanelTopIcon:b3,PanelTopInactive:S3,PanelTopInactiveIcon:S3,PanelTopOpen:I3,PanelTopOpenIcon:I3,Paperclip:j3,PaperclipIcon:j3,Parentheses:z3,ParenthesesIcon:z3,ParkingCircle:P3,ParkingCircleIcon:P3,ParkingCircleOff:A3,ParkingCircleOffIcon:A3,ParkingMeter:R3,ParkingMeterIcon:R3,ParkingSquare:T3,ParkingSquareIcon:T3,ParkingSquareOff:H3,ParkingSquareOffIcon:H3,PartyPopper:q3,PartyPopperIcon:q3,Pause:F3,PauseCircle:B3,PauseCircleIcon:B3,PauseIcon:F3,PauseOctagon:V3,PauseOctagonIcon:V3,PawPrint:E3,PawPrintIcon:E3,PcCase:D3,PcCaseIcon:D3,Pen:r1,PenBox:wt,PenBoxIcon:wt,PenIcon:r1,PenLine:n1,PenLineIcon:n1,PenSquare:wt,PenSquareIcon:wt,PenTool:O3,PenToolIcon:O3,Pencil:Ta,PencilIcon:Ta,PencilLine:N3,PencilLineIcon:N3,PencilRuler:_3,PencilRulerIcon:_3,Pentagon:U3,PentagonIcon:U3,Percent:$3,PercentCircle:W3,PercentCircleIcon:W3,PercentDiamond:Z3,PercentDiamondIcon:Z3,PercentIcon:$3,PercentSquare:G3,PercentSquareIcon:G3,PersonStanding:X3,PersonStandingIcon:X3,Phone:nm,PhoneCall:K3,PhoneCallIcon:K3,PhoneForwarded:Q3,PhoneForwardedIcon:Q3,PhoneIcon:nm,PhoneIncoming:Y3,PhoneIncomingIcon:Y3,PhoneMissed:J3,PhoneMissedIcon:J3,PhoneOff:em,PhoneOffIcon:em,PhoneOutgoing:tm,PhoneOutgoingIcon:tm,Pi:am,PiIcon:am,PiSquare:rm,PiSquareIcon:rm,Piano:om,PianoIcon:om,PictureInPicture:lm,PictureInPicture2:im,PictureInPicture2Icon:im,PictureInPictureIcon:lm,PieChart:cm,PieChartIcon:cm,PiggyBank:sm,PiggyBankIcon:sm,Pilcrow:um,PilcrowIcon:um,PilcrowSquare:dm,PilcrowSquareIcon:dm,Pill:hm,PillIcon:hm,Pin:pm,PinIcon:pm,PinOff:ym,PinOffIcon:ym,Pipette:km,PipetteIcon:km,Pizza:fm,PizzaIcon:fm,Plane:gm,PlaneIcon:gm,PlaneLanding:mm,PlaneLandingIcon:mm,PlaneTakeoff:vm,PlaneTakeoffIcon:vm,Play:wm,PlayCircle:xm,PlayCircleIcon:xm,PlayIcon:wm,PlaySquare:Mm,PlaySquareIcon:Mm,Plug:Im,Plug2:Lm,Plug2Icon:Lm,PlugIcon:Im,PlugZap:Sm,PlugZap2:Cm,PlugZap2Icon:Cm,PlugZapIcon:Sm,Plus:qa,PlusCircle:bm,PlusCircleIcon:bm,PlusIcon:qa,PlusSquare:jm,PlusSquareIcon:jm,Pocket:Am,PocketIcon:Am,PocketKnife:zm,PocketKnifeIcon:zm,Podcast:Pm,PodcastIcon:Pm,Pointer:Rm,PointerIcon:Rm,Popcorn:Hm,PopcornIcon:Hm,Popsicle:Tm,PopsicleIcon:Tm,PoundSterling:qm,PoundSterlingIcon:qm,Power:Em,PowerCircle:Bm,PowerCircleIcon:Bm,PowerIcon:Em,PowerOff:Vm,PowerOffIcon:Vm,PowerSquare:Fm,PowerSquareIcon:Fm,Presentation:Dm,PresentationIcon:Dm,Printer:Om,PrinterIcon:Om,Projector:Nm,ProjectorIcon:Nm,Puzzle:_m,PuzzleIcon:_m,Pyramid:Um,PyramidIcon:Um,QrCode:Wm,QrCodeIcon:Wm,Quote:Zm,QuoteIcon:Zm,Rabbit:Gm,RabbitIcon:Gm,Radar:$m,RadarIcon:$m,Radiation:Xm,RadiationIcon:Xm,Radio:Ym,RadioIcon:Ym,RadioReceiver:Km,RadioReceiverIcon:Km,RadioTower:Qm,RadioTowerIcon:Qm,Radius:Jm,RadiusIcon:Jm,RailSymbol:ev,RailSymbolIcon:ev,Rainbow:tv,RainbowIcon:tv,Rat:nv,RatIcon:nv,Ratio:rv,RatioIcon:rv,Receipt:av,ReceiptIcon:av,RectangleHorizontal:ov,RectangleHorizontalIcon:ov,RectangleVertical:iv,RectangleVerticalIcon:iv,Recycle:lv,RecycleIcon:lv,Redo:dv,Redo2:cv,Redo2Icon:cv,RedoDot:sv,RedoDotIcon:sv,RedoIcon:dv,RefreshCcw:hv,RefreshCcwDot:uv,RefreshCcwDotIcon:uv,RefreshCcwIcon:hv,RefreshCw:pv,RefreshCwIcon:pv,RefreshCwOff:yv,RefreshCwOffIcon:yv,Refrigerator:kv,RefrigeratorIcon:kv,Regex:fv,RegexIcon:fv,RemoveFormatting:mv,RemoveFormattingIcon:mv,Repeat:xv,Repeat1:vv,Repeat1Icon:vv,Repeat2:gv,Repeat2Icon:gv,RepeatIcon:xv,Replace:wv,ReplaceAll:Mv,ReplaceAllIcon:Mv,ReplaceIcon:wv,Reply:Cv,ReplyAll:Lv,ReplyAllIcon:Lv,ReplyIcon:Cv,Rewind:Sv,RewindIcon:Sv,Ribbon:Iv,RibbonIcon:Iv,Rocket:bv,RocketIcon:bv,RockingChair:jv,RockingChairIcon:jv,RollerCoaster:zv,RollerCoasterIcon:zv,Rotate3D:a1,Rotate3DIcon:a1,Rotate3d:a1,Rotate3dIcon:a1,RotateCcw:Av,RotateCcwIcon:Av,RotateCw:Pv,RotateCwIcon:Pv,Route:Hv,RouteIcon:Hv,RouteOff:Rv,RouteOffIcon:Rv,Router:Tv,RouterIcon:Tv,Rows:qv,RowsIcon:qv,Rss:Bv,RssIcon:Bv,Ruler:Vv,RulerIcon:Vv,RussianRuble:Fv,RussianRubleIcon:Fv,Sailboat:Ev,SailboatIcon:Ev,Salad:Dv,SaladIcon:Dv,Sandwich:Ov,SandwichIcon:Ov,Satellite:_v,SatelliteDish:Nv,SatelliteDishIcon:Nv,SatelliteIcon:_v,Save:Wv,SaveAll:Uv,SaveAllIcon:Uv,SaveIcon:Wv,Scale:Zv,Scale3D:o1,Scale3DIcon:o1,Scale3d:o1,Scale3dIcon:o1,ScaleIcon:Zv,Scaling:Gv,ScalingIcon:Gv,Scan:e6,ScanBarcode:$v,ScanBarcodeIcon:$v,ScanEye:Xv,ScanEyeIcon:Xv,ScanFace:Kv,ScanFaceIcon:Kv,ScanIcon:e6,ScanLine:Qv,ScanLineIcon:Qv,ScanSearch:Yv,ScanSearchIcon:Yv,ScanText:Jv,ScanTextIcon:Jv,ScatterChart:t6,ScatterChartIcon:t6,School:r6,School2:n6,School2Icon:n6,SchoolIcon:r6,Scissors:l6,ScissorsIcon:l6,ScissorsLineDashed:a6,ScissorsLineDashedIcon:a6,ScissorsSquare:i6,ScissorsSquareDashedBottom:o6,ScissorsSquareDashedBottomIcon:o6,ScissorsSquareIcon:i6,ScreenShare:s6,ScreenShareIcon:s6,ScreenShareOff:c6,ScreenShareOffIcon:c6,Scroll:u6,ScrollIcon:u6,ScrollText:d6,ScrollTextIcon:d6,Search:mr,SearchCheck:h6,SearchCheckIcon:h6,SearchCode:y6,SearchCodeIcon:y6,SearchIcon:mr,SearchSlash:p6,SearchSlashIcon:p6,SearchX:k6,SearchXIcon:k6,Send:m6,SendHorizonal:i1,SendHorizonalIcon:i1,SendHorizontal:i1,SendHorizontalIcon:i1,SendIcon:m6,SendToBack:f6,SendToBackIcon:f6,SeparatorHorizontal:v6,SeparatorHorizontalIcon:v6,SeparatorVertical:g6,SeparatorVerticalIcon:g6,Server:L6,ServerCog:x6,ServerCogIcon:x6,ServerCrash:M6,ServerCrashIcon:M6,ServerIcon:L6,ServerOff:w6,ServerOffIcon:w6,Settings:S6,Settings2:C6,Settings2Icon:C6,SettingsIcon:S6,Shapes:I6,ShapesIcon:I6,Share:j6,Share2:b6,Share2Icon:b6,ShareIcon:j6,Sheet:z6,SheetIcon:z6,Shell:A6,ShellIcon:A6,Shield:D6,ShieldAlert:P6,ShieldAlertIcon:P6,ShieldBan:R6,ShieldBanIcon:R6,ShieldCheck:H6,ShieldCheckIcon:H6,ShieldClose:l1,ShieldCloseIcon:l1,ShieldEllipsis:T6,ShieldEllipsisIcon:T6,ShieldHalf:q6,ShieldHalfIcon:q6,ShieldIcon:D6,ShieldMinus:B6,ShieldMinusIcon:B6,ShieldOff:V6,ShieldOffIcon:V6,ShieldPlus:F6,ShieldPlusIcon:F6,ShieldQuestion:E6,ShieldQuestionIcon:E6,ShieldX:l1,ShieldXIcon:l1,Ship:N6,ShipIcon:N6,ShipWheel:O6,ShipWheelIcon:O6,Shirt:_6,ShirtIcon:_6,ShoppingBag:U6,ShoppingBagIcon:U6,ShoppingBasket:W6,ShoppingBasketIcon:W6,ShoppingCart:Z6,ShoppingCartIcon:Z6,Shovel:G6,ShovelIcon:G6,ShowerHead:$6,ShowerHeadIcon:$6,Shrink:X6,ShrinkIcon:X6,Shrub:K6,ShrubIcon:K6,Shuffle:Q6,ShuffleIcon:Q6,Sidebar:t1,SidebarClose:Jn,SidebarCloseIcon:Jn,SidebarIcon:t1,SidebarOpen:e1,SidebarOpenIcon:e1,Sigma:J6,SigmaIcon:J6,SigmaSquare:Y6,SigmaSquareIcon:Y6,Signal:a8,SignalHigh:e8,SignalHighIcon:e8,SignalIcon:a8,SignalLow:t8,SignalLowIcon:t8,SignalMedium:n8,SignalMediumIcon:n8,SignalZero:r8,SignalZeroIcon:r8,Signpost:i8,SignpostBig:o8,SignpostBigIcon:o8,SignpostIcon:i8,Siren:l8,SirenIcon:l8,SkipBack:c8,SkipBackIcon:c8,SkipForward:s8,SkipForwardIcon:s8,Skull:d8,SkullIcon:d8,Slack:u8,SlackIcon:u8,Slash:h8,SlashIcon:h8,Slice:y8,SliceIcon:y8,Sliders:k8,SlidersHorizontal:p8,SlidersHorizontalIcon:p8,SlidersIcon:k8,Smartphone:v8,SmartphoneCharging:f8,SmartphoneChargingIcon:f8,SmartphoneIcon:v8,SmartphoneNfc:m8,SmartphoneNfcIcon:m8,Smile:x8,SmileIcon:x8,SmilePlus:g8,SmilePlusIcon:g8,Snail:M8,SnailIcon:M8,Snowflake:w8,SnowflakeIcon:w8,Sofa:L8,SofaIcon:L8,SortAsc:Tn,SortAscIcon:Tn,SortDesc:Pn,SortDescIcon:Pn,Soup:C8,SoupIcon:C8,Space:S8,SpaceIcon:S8,Spade:I8,SpadeIcon:I8,Sparkle:b8,SparkleIcon:b8,Sparkles:c1,SparklesIcon:c1,Speaker:j8,SpeakerIcon:j8,Speech:z8,SpeechIcon:z8,SpellCheck:P8,SpellCheck2:A8,SpellCheck2Icon:A8,SpellCheckIcon:P8,Spline:R8,SplineIcon:R8,Split:q8,SplitIcon:q8,SplitSquareHorizontal:H8,SplitSquareHorizontalIcon:H8,SplitSquareVertical:T8,SplitSquareVerticalIcon:T8,SprayCan:B8,SprayCanIcon:B8,Sprout:V8,SproutIcon:V8,Square:vr,SquareAsterisk:F8,SquareAsteriskIcon:F8,SquareCode:E8,SquareCodeIcon:E8,SquareDashedBottom:O8,SquareDashedBottomCode:D8,SquareDashedBottomCodeIcon:D8,SquareDashedBottomIcon:O8,SquareDot:N8,SquareDotIcon:N8,SquareEqual:_8,SquareEqualIcon:_8,SquareGantt:Zn,SquareGanttIcon:Zn,SquareIcon:vr,SquareKanban:Kn,SquareKanbanDashed:Xn,SquareKanbanDashedIcon:Xn,SquareKanbanIcon:Kn,SquareSlash:U8,SquareSlashIcon:U8,SquareStack:W8,SquareStackIcon:W8,SquareUser:d1,SquareUserIcon:d1,SquareUserRound:s1,SquareUserRoundIcon:s1,Squirrel:Z8,SquirrelIcon:Z8,Stamp:G8,StampIcon:G8,Star:K8,StarHalf:$8,StarHalfIcon:$8,StarIcon:K8,StarOff:X8,StarOffIcon:X8,Stars:c1,StarsIcon:c1,StepBack:Q8,StepBackIcon:Q8,StepForward:Y8,StepForwardIcon:Y8,Stethoscope:J8,StethoscopeIcon:J8,Sticker:eg,StickerIcon:eg,StickyNote:tg,StickyNoteIcon:tg,StopCircle:ng,StopCircleIcon:ng,Store:rg,StoreIcon:rg,StretchHorizontal:ag,StretchHorizontalIcon:ag,StretchVertical:og,StretchVerticalIcon:og,Strikethrough:ig,StrikethroughIcon:ig,Subscript:lg,SubscriptIcon:lg,Subtitles:cg,SubtitlesIcon:cg,Sun:Ba,SunDim:sg,SunDimIcon:sg,SunIcon:Ba,SunMedium:dg,SunMediumIcon:dg,SunMoon:ug,SunMoonIcon:ug,SunSnow:hg,SunSnowIcon:hg,Sunrise:yg,SunriseIcon:yg,Sunset:pg,SunsetIcon:pg,Superscript:kg,SuperscriptIcon:kg,SwissFranc:fg,SwissFrancIcon:fg,SwitchCamera:mg,SwitchCameraIcon:mg,Sword:vg,SwordIcon:vg,Swords:gg,SwordsIcon:gg,Syringe:xg,SyringeIcon:xg,Table:wg,Table2:Mg,Table2Icon:Mg,TableIcon:wg,TableProperties:gr,TablePropertiesIcon:gr,Tablet:Cg,TabletIcon:Cg,TabletSmartphone:Lg,TabletSmartphoneIcon:Lg,Tablets:Sg,TabletsIcon:Sg,Tag:xr,TagIcon:xr,Tags:Ig,TagsIcon:Ig,Tally1:bg,Tally1Icon:bg,Tally2:jg,Tally2Icon:jg,Tally3:zg,Tally3Icon:zg,Tally4:Ag,Tally4Icon:Ag,Tally5:Pg,Tally5Icon:Pg,Tangent:Rg,TangentIcon:Rg,Target:Hg,TargetIcon:Hg,Tent:qg,TentIcon:qg,TentTree:Tg,TentTreeIcon:Tg,Terminal:Vg,TerminalIcon:Vg,TerminalSquare:Bg,TerminalSquareIcon:Bg,TestTube:Eg,TestTube2:Fg,TestTube2Icon:Fg,TestTubeIcon:Eg,TestTubes:Dg,TestTubesIcon:Dg,Text:Ug,TextCursor:Ng,TextCursorIcon:Ng,TextCursorInput:Og,TextCursorInputIcon:Og,TextIcon:Ug,TextQuote:_g,TextQuoteIcon:_g,TextSelect:u1,TextSelectIcon:u1,TextSelection:u1,TextSelectionIcon:u1,Theater:Wg,TheaterIcon:Wg,Thermometer:$g,ThermometerIcon:$g,ThermometerSnowflake:Zg,ThermometerSnowflakeIcon:Zg,ThermometerSun:Gg,ThermometerSunIcon:Gg,ThumbsDown:Xg,ThumbsDownIcon:Xg,ThumbsUp:Kg,ThumbsUpIcon:Kg,Ticket:Qg,TicketIcon:Qg,Timer:e7,TimerIcon:e7,TimerOff:Yg,TimerOffIcon:Yg,TimerReset:Jg,TimerResetIcon:Jg,ToggleLeft:Mr,ToggleLeftIcon:Mr,ToggleRight:t7,ToggleRightIcon:t7,Tornado:n7,TornadoIcon:n7,Torus:r7,TorusIcon:r7,Touchpad:o7,TouchpadIcon:o7,TouchpadOff:a7,TouchpadOffIcon:a7,TowerControl:i7,TowerControlIcon:i7,ToyBrick:l7,ToyBrickIcon:l7,Tractor:c7,TractorIcon:c7,TrafficCone:s7,TrafficConeIcon:s7,Train:h1,TrainFront:u7,TrainFrontIcon:u7,TrainFrontTunnel:d7,TrainFrontTunnelIcon:d7,TrainIcon:h1,TrainTrack:h7,TrainTrackIcon:h7,TramFront:h1,TramFrontIcon:h1,Trash:y7,Trash2:z1,Trash2Icon:z1,TrashIcon:y7,TreeDeciduous:p7,TreeDeciduousIcon:p7,TreePine:k7,TreePineIcon:k7,Trees:f7,TreesIcon:f7,Trello:m7,TrelloIcon:m7,TrendingDown:v7,TrendingDownIcon:v7,TrendingUp:g7,TrendingUpIcon:g7,Triangle:M7,TriangleIcon:M7,TriangleRight:x7,TriangleRightIcon:x7,Trophy:w7,TrophyIcon:w7,Truck:L7,TruckIcon:L7,Turtle:C7,TurtleIcon:C7,Tv:I7,Tv2:S7,Tv2Icon:S7,TvIcon:I7,Twitch:b7,TwitchIcon:b7,Twitter:j7,TwitterIcon:j7,Type:wr,TypeIcon:wr,Umbrella:A7,UmbrellaIcon:A7,UmbrellaOff:z7,UmbrellaOffIcon:z7,Underline:P7,UnderlineIcon:P7,Undo:T7,Undo2:R7,Undo2Icon:R7,UndoDot:H7,UndoDotIcon:H7,UndoIcon:T7,UnfoldHorizontal:q7,UnfoldHorizontalIcon:q7,UnfoldVertical:B7,UnfoldVerticalIcon:B7,Ungroup:V7,UngroupIcon:V7,Unlink:E7,Unlink2:F7,Unlink2Icon:F7,UnlinkIcon:E7,Unlock:O7,UnlockIcon:O7,UnlockKeyhole:D7,UnlockKeyholeIcon:D7,Unplug:N7,UnplugIcon:N7,Upload:U7,UploadCloud:_7,UploadCloudIcon:_7,UploadIcon:U7,Usb:W7,UsbIcon:W7,User:Q7,User2:v1,User2Icon:v1,UserCheck:Z7,UserCheck2:y1,UserCheck2Icon:y1,UserCheckIcon:Z7,UserCircle:Nn,UserCircle2:On,UserCircle2Icon:On,UserCircleIcon:Nn,UserCog:G7,UserCog2:p1,UserCog2Icon:p1,UserCogIcon:G7,UserIcon:Q7,UserMinus:$7,UserMinus2:k1,UserMinus2Icon:k1,UserMinusIcon:$7,UserPlus:X7,UserPlus2:f1,UserPlus2Icon:f1,UserPlusIcon:X7,UserRound:v1,UserRoundCheck:y1,UserRoundCheckIcon:y1,UserRoundCog:p1,UserRoundCogIcon:p1,UserRoundIcon:v1,UserRoundMinus:k1,UserRoundMinusIcon:k1,UserRoundPlus:f1,UserRoundPlusIcon:f1,UserRoundX:m1,UserRoundXIcon:m1,UserSquare:d1,UserSquare2:s1,UserSquare2Icon:s1,UserSquareIcon:d1,UserX:K7,UserX2:m1,UserX2Icon:m1,UserXIcon:K7,Users:Y7,Users2:g1,Users2Icon:g1,UsersIcon:Y7,UsersRound:g1,UsersRoundIcon:g1,Utensils:ex,UtensilsCrossed:J7,UtensilsCrossedIcon:J7,UtensilsIcon:ex,UtilityPole:tx,UtilityPoleIcon:tx,Variable:nx,VariableIcon:nx,Vegan:rx,VeganIcon:rx,VenetianMask:ax,VenetianMaskIcon:ax,Verified:Vn,VerifiedIcon:Vn,Vibrate:ix,VibrateIcon:ix,VibrateOff:ox,VibrateOffIcon:ox,Video:cx,VideoIcon:cx,VideoOff:lx,VideoOffIcon:lx,Videotape:sx,VideotapeIcon:sx,View:dx,ViewIcon:dx,Voicemail:ux,VoicemailIcon:ux,Volume:kx,Volume1:hx,Volume1Icon:hx,Volume2:yx,Volume2Icon:yx,VolumeIcon:kx,VolumeX:px,VolumeXIcon:px,Vote:fx,VoteIcon:fx,Wallet:gx,Wallet2:mx,Wallet2Icon:mx,WalletCards:vx,WalletCardsIcon:vx,WalletIcon:gx,Wallpaper:xx,WallpaperIcon:xx,Wand:wx,Wand2:Mx,Wand2Icon:Mx,WandIcon:wx,Warehouse:Lx,WarehouseIcon:Lx,Watch:Cx,WatchIcon:Cx,Waves:Sx,WavesIcon:Sx,Waypoints:Ix,WaypointsIcon:Ix,Webcam:bx,WebcamIcon:bx,Webhook:jx,WebhookIcon:jx,Weight:zx,WeightIcon:zx,Wheat:Px,WheatIcon:Px,WheatOff:Ax,WheatOffIcon:Ax,WholeWord:Rx,WholeWordIcon:Rx,Wifi:Tx,WifiIcon:Tx,WifiOff:Hx,WifiOffIcon:Hx,Wind:qx,WindIcon:qx,Wine:Vx,WineIcon:Vx,WineOff:Bx,WineOffIcon:Bx,Workflow:Fx,WorkflowIcon:Fx,WrapText:Ex,WrapTextIcon:Ex,Wrench:Dx,WrenchIcon:Dx,X:Lr,XCircle:Ox,XCircleIcon:Ox,XIcon:Lr,XOctagon:Nx,XOctagonIcon:Nx,XSquare:_x,XSquareIcon:_x,Youtube:Ux,YoutubeIcon:Ux,Zap:Zx,ZapIcon:Zx,ZapOff:Wx,ZapOffIcon:Wx,ZoomIn:Gx,ZoomInIcon:Gx,ZoomOut:$x,ZoomOutIcon:$x,createLucideIcon:o,icons:qH},Symbol.toStringTag,{value:"Module"}));function Aj(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Aj(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function it(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Aj(e))&&(r&&(r+=" "),r+=t);return r}const VH={mini:"mini",small:"small",medium:"medium",large:"large",sm:"small",md:"medium",lg:"large"},Z=V.forwardRef(({variant:e="primary",size:t="medium",loading:n=!1,block:r=!1,iconOnly:a=!1,leftIcon:i,rightIcon:l,children:c,className:d,disabled:u,...h},p)=>{const m=VH[t];return s.jsxs("button",{ref:p,className:it("btn",`btn--${e}`,`btn--${m}`,{"btn--block":r,"btn--icon":a,"btn--loading":n},d),disabled:u||n,...h,children:[n&&s.jsx("span",{className:"btn__spinner"}),!n&&i,c,!n&&l]})});Z.displayName="Button";const Re=V.forwardRef(({variant:e="default",dot:t=!1,children:n,className:r,...a},i)=>s.jsxs("span",{ref:i,className:it("badge",`badge--${e}`,{"badge--dot":t},r),...a,children:[t&&s.jsx("span",{className:"badge__dot"}),n]}));Re.displayName="Badge";const x1=V.forwardRef(({variant:e="default",closable:t,onClose:n,children:r,className:a,...i},l)=>s.jsxs("span",{ref:l,className:it("tag",`tag--${e}`,a),...i,children:[r,t&&s.jsx("button",{type:"button",className:"tag__close",onClick:c=>{c.stopPropagation(),n==null||n()},children:s.jsx(Lr,{size:10})})]}));x1.displayName="Tag";const FH=[{icon:fr,title:"颜色",desc:"Primary、Success、Warning、Danger、Neutral 五色系，各 10 梯度",path:"/colors",badge:"5 色系"},{icon:wr,title:"字体排版",desc:"9 档字号梯度，5 种字重，中英文双语优化",path:"/typography",badge:"正式版"},{icon:hr,title:"间距 / 圆角 / 阴影",desc:"4px 基础单元，15 档间距，8 种圆角，5 层阴影",path:"/spacing",badge:"正式版"},{icon:j1,title:"图标",desc:"基于 Lucide Icons，可搜索，点击复制 JSX",path:"/icons",badge:"Lucide"}],EH=[{icon:kr,title:"Button 按钮",desc:"6 种变体，4 种尺寸，Loading & 禁用状态，图标支持",path:"/components/button",badge:"v1"},{icon:ur,title:"Input 输入框",desc:"多尺寸，前后缀，状态（error/success），Textarea",path:"/components/input",badge:"v1"},{icon:Mr,title:"Select / Checkbox / Radio / Switch",desc:"常用表单选择控件全覆盖",path:"/components/select",badge:"v1"},{icon:xr,title:"Badge / Tag / Avatar / Tooltip",desc:"状态徽标、分类标签、用户头像、文字提示",path:"/components/badge",badge:"v1"},{icon:vr,title:"Modal 弹窗",desc:"3 种尺寸，键盘关闭，危险操作确认",path:"/components/modal",badge:"v1"},{icon:gr,title:"Table 表格",desc:"列定义，客户端排序，空状态，操作列",path:"/components/table",badge:"v1"}];function DH(){const e=()=>{const t=document.createElement("a");t.href="/tokens.json",t.download="bisheng-tokens.json",t.click()};return s.jsxs("div",{children:[s.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-700) 100%)",borderRadius:20,padding:"48px 48px",marginBottom:48,position:"relative",overflow:"hidden"},children:[s.jsx("div",{style:{position:"absolute",right:-60,top:-60,width:240,height:240,borderRadius:"50%",background:"rgba(255,255,255,0.05)"}}),s.jsx("div",{style:{position:"absolute",right:80,bottom:-40,width:180,height:180,borderRadius:"50%",background:"rgba(255,255,255,0.04)"}}),s.jsxs("div",{style:{position:"relative",zIndex:1},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[s.jsx("div",{style:{background:"rgba(255,255,255,0.2)",borderRadius:10,padding:"6px 14px",fontSize:13,color:"white",fontWeight:500},children:"v0.1.0 · Beta"}),s.jsx(Re,{variant:"default",style:{background:"rgba(255,255,255,0.15)",color:"white"},children:"支持 Light / Dark Mode"})]}),s.jsx("h1",{style:{fontSize:40,fontWeight:700,color:"white",marginBottom:12,lineHeight:1.2},children:"BISHENG Design System"}),s.jsx("p",{style:{fontSize:16,color:"rgba(255,255,255,0.85)",lineHeight:1.7,maxWidth:560,marginBottom:28},children:"面向 BISHENG 企业级 AI 平台的统一设计系统，为设计师和前端工程师提供一致的设计语言、组件规范与开发资源。"}),s.jsxs("div",{style:{display:"flex",gap:12},children:[s.jsx(Z,{variant:"outline",style:{background:"white",color:"var(--color-primary-600)",border:"none"},leftIcon:s.jsx(Ra,{size:15}),children:"查看组件"}),s.jsx(Z,{variant:"ghost",style:{color:"white",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)"},leftIcon:s.jsx(pn,{size:15}),onClick:e,children:"下载 Figma Tokens"})]})]})]}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:16,marginBottom:48},children:[{num:"10",label:"基础组件",sub:"v1.0 已覆盖"},{num:"50+",label:"Design Token",sub:"颜色 / 字体 / 间距"},{num:"80+",label:"图标",sub:"Lucide 精选"},{num:"2",label:"主题模式",sub:"Light / Dark"}].map(t=>s.jsxs("div",{style:{border:"1px solid var(--border-primary)",borderRadius:12,padding:"20px 24px"},children:[s.jsx("div",{style:{fontSize:32,fontWeight:700,color:"var(--color-primary-500)",lineHeight:1},children:t.num}),s.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)",marginTop:8},children:t.label}),s.jsx("div",{style:{fontSize:12,color:"var(--text-tertiary)",marginTop:2},children:t.sub})]},t.label))}),s.jsxs("div",{style:{marginBottom:40},children:[s.jsx("h2",{style:{fontSize:20,fontWeight:600,color:"var(--text-primary)",marginBottom:16},children:"基础规范"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:FH.map(t=>s.jsx(L9,{to:t.path,style:{textDecoration:"none"},children:s.jsxs("div",{style:{border:"1px solid var(--border-primary)",borderRadius:12,padding:"20px 20px",display:"flex",gap:16,alignItems:"flex-start",transition:"all 0.15s",cursor:"pointer"},onMouseEnter:n=>{n.currentTarget.style.boxShadow="var(--shadow-md)",n.currentTarget.style.borderColor="var(--color-primary-300)"},onMouseLeave:n=>{n.currentTarget.style.boxShadow="",n.currentTarget.style.borderColor=""},children:[s.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"var(--color-primary-50)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s.jsx(t.icon,{size:20,color:"var(--color-primary-500)"})}),s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[s.jsx("span",{style:{fontSize:15,fontWeight:600,color:"var(--text-primary)"},children:t.title}),s.jsx(Re,{variant:"primary",children:t.badge})]}),s.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.5},children:t.desc})]})]})},t.path))})]}),s.jsxs("div",{children:[s.jsx("h2",{style:{fontSize:20,fontWeight:600,color:"var(--text-primary)",marginBottom:16},children:"组件"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:EH.map(t=>s.jsx(L9,{to:t.path,style:{textDecoration:"none"},children:s.jsxs("div",{style:{border:"1px solid var(--border-primary)",borderRadius:12,padding:"20px 20px",display:"flex",gap:16,alignItems:"flex-start",transition:"all 0.15s"},onMouseEnter:n=>{n.currentTarget.style.boxShadow="var(--shadow-md)",n.currentTarget.style.borderColor="var(--color-primary-300)"},onMouseLeave:n=>{n.currentTarget.style.boxShadow="",n.currentTarget.style.borderColor=""},children:[s.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"var(--surface-subtle)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s.jsx(t.icon,{size:20,color:"var(--text-secondary)"})}),s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[s.jsx("span",{style:{fontSize:15,fontWeight:600,color:"var(--text-primary)"},children:t.title}),s.jsx(Re,{variant:"default",children:t.badge})]}),s.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.5},children:t.desc})]})]})},t.path))})]})]})}const OH=({code:e,lang:t="tsx"})=>{const[n,r]=V.useState(!1),a=async()=>{await navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)};return s.jsxs("div",{className:"ds-demo__code",children:[s.jsxs("div",{className:"ds-demo__code-header",children:[s.jsx("span",{className:"ds-demo__code-lang",children:t}),s.jsx("button",{className:"ds-demo__code-copy",onClick:a,children:n?"✓ 已复制":"复制代码"})]}),s.jsx("pre",{children:s.jsx("code",{children:e})})]})},ie=({id:e,title:t,desc:n,preview:r,code:a,previewCol:i,previewCenter:l,lang:c})=>s.jsxs("div",{className:"ds-section",id:e,children:[s.jsx("h3",{className:"ds-section__title",children:t}),n&&s.jsx("p",{className:"ds-section__desc",children:n}),s.jsxs("div",{className:"ds-demo",children:[s.jsx("div",{className:`ds-demo__preview${i?" ds-demo__preview--col":""}${l?" ds-demo__preview--center":""}`,children:r}),s.jsx(OH,{code:a,lang:c})]})]}),Nr=({props:e})=>s.jsxs("div",{className:"ds-section",children:[s.jsx("h3",{className:"ds-section__title",children:"API"}),s.jsxs("table",{className:"ds-props-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"属性"}),s.jsx("th",{children:"类型"}),s.jsx("th",{children:"默认值"}),s.jsx("th",{children:"是否必填"}),s.jsx("th",{children:"说明"})]})}),s.jsx("tbody",{children:e.map(t=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:t.name})}),s.jsx("td",{children:s.jsx("code",{children:t.type})}),s.jsx("td",{children:t.default?s.jsx("code",{children:t.default}):s.jsx("span",{style:{color:"var(--text-tertiary)"},children:"—"})}),s.jsx("td",{style:{color:t.required?"var(--color-danger-500)":"var(--text-tertiary)"},children:t.required?"是":"否"}),s.jsx("td",{style:{color:"var(--text-secondary)"},children:t.desc})]},t.name))})]})]}),Pt=({badge:e,title:t,desc:n})=>s.jsxs("div",{className:"ds-page-header",children:[e&&s.jsx("div",{className:"ds-page-header__tag",children:e}),s.jsx("h1",{children:t}),s.jsx("p",{className:"ds-page-header__desc",children:n})]}),IS=[{name:"Primary",base:"primary",label:"BISHENG Blue",desc:"品牌主色，用于主要按钮、链接、焦点高亮",steps:[25,50,100,200,300,400,500,600,700,800,900]},{name:"Purple",base:"purple",label:"Accent Purple",desc:"辅助强调色，用于品牌延展、活动氛围和次级视觉强调"},{name:"Yellow",base:"yellow",label:"Golden Yellow",desc:"明亮强调色，用于高可见提醒、数据高亮和辅助视觉点缀"},{name:"Success",base:"success",label:"Success Green",desc:"成功状态色，用于完成、通过、正常运行"},{name:"Warning",base:"warning",label:"Warning Orange",desc:"警告状态色，用于待确认、即将到期"},{name:"Danger",base:"danger",label:"Danger Red",desc:"危险状态色，用于错误、失败、删除操作"},{name:"Neutral",base:"gray",label:"Neutral Gray",desc:"中性色，用于文字、边框、基础背景，以及承接部分 surface 场景",steps:[0,25,50,100,150,200,300,400,500,600,700,800,900]}],bS=[50,100,200,300,400,500,600,700,800,900],Pj=[{group:"Surface",token:"--surface-base",desc:"基础表面，用于页面、卡片、输入框默认背景",type:"bg",paletteRef:"gray-0"},{group:"Surface",token:"--surface-muted",desc:"弱化表面，用于侧边栏、表头，以及中性禁用表面",type:"bg",paletteRef:"gray-100(light) / gray-50(dark)"},{group:"Surface",token:"--surface-subtle",desc:"大面积弱对比表面，用于大背景区、Tag、次级承载",type:"bg",paletteRef:"gray-25(light) / gray-100(dark)"},{group:"Surface",token:"--surface-hover",desc:"轻交互 hover 表面，用于列表项、轻量按钮、关闭按钮等 hover 背景",type:"bg",paletteRef:"gray-50(light) / gray-150(dark)"},{group:"Surface",token:"--surface-selected",desc:"选中态表面，用于导航 / Menu item 的选中背景",type:"bg",paletteRef:"primary-100(light) / primary-25(dark)"},{group:"Text",token:"--text-primary",desc:"主要文字颜色",type:"text",paletteRef:"gray-800"},{group:"Text",token:"--text-secondary",desc:"次要文字颜色",type:"text",paletteRef:"gray-600"},{group:"Text",token:"--text-tertiary",desc:"辅助文字颜色（提示、占位）",type:"text",paletteRef:"gray-400"},{group:"Text",token:"--text-disabled",desc:"禁用文字颜色",type:"text",paletteRef:"gray-300"},{group:"Text",token:"--text-inverse",desc:"反白文字颜色",type:"text",paletteRef:"gray-0"},{group:"Text",token:"--text-link",desc:"链接文字颜色",type:"text",paletteRef:"primary-700"},{group:"Border",token:"--border-primary",desc:"主边框颜色",type:"border",paletteRef:"gray-200"},{group:"Border",token:"--border-secondary",desc:"次要边框颜色（输入框）",type:"border",paletteRef:"gray-300"},{group:"Border",token:"--border-focus",desc:"聚焦态边框颜色",type:"border",paletteRef:"primary-700"},{group:"Fill",token:"--fill-primary",desc:"主填充色",type:"bg",paletteRef:"primary-700"},{group:"Fill",token:"--fill-hover",desc:"悬浮填充色",type:"bg",paletteRef:"primary-800"},{group:"Fill",token:"--fill-active",desc:"按下填充色",type:"bg",paletteRef:"primary-900"},{group:"Fill",token:"--fill-disabled",desc:"强调型填充的禁用态，用于主按钮、已选控件等高强调元素",type:"bg",paletteRef:"gray-300"},{group:"Action",token:"--action-fg-default",desc:"轻量操作前景色，适用于 icon 按钮和文字按钮默认态（灰黑场景）",type:"text",paletteRef:"gray-600"},{group:"Action",token:"--action-fg-default-hover",desc:"轻量操作前景色 hover，适用于 icon 按钮和文字按钮（灰黑场景）",type:"text",paletteRef:"gray-800"},{group:"Action",token:"--action-fg-brand",desc:"品牌操作前景色，适用于 icon 按钮和文字按钮默认态（蓝色场景）",type:"text",paletteRef:"primary-700"},{group:"Action",token:"--action-fg-brand-hover",desc:"品牌操作前景色 hover，适用于 icon 按钮和文字按钮（蓝色场景）",type:"text",paletteRef:"primary-800"},{group:"Action",token:"--action-fg-disabled",desc:"轻量操作禁用态前景色",type:"text",paletteRef:"gray-300"}],NH=["Surface","Text","Border","Fill","Action"].map(e=>({group:e,tokens:Pj.filter(t=>t.group===e)}));function _H(e){const[t,n]=V.useState({});return V.useEffect(()=>{const r=()=>{const i=getComputedStyle(document.documentElement),l=e.reduce((c,d)=>(c[d]=i.getPropertyValue(d).trim(),c),{});n(l)};r();const a=new MutationObserver(r);return a.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style"]}),()=>a.disconnect()},[e]),t}function UH(){const e=V.useMemo(()=>IS.flatMap(i=>(i.steps??bS).map(l=>`--color-${i.base}-${l}`)),[]),t=V.useMemo(()=>Pj.map(i=>i.token),[]),n=V.useMemo(()=>[...e,...t],[e,t]),r=_H(n),a=i=>{const l=document.createElement("a");l.href=`/${i}`,l.download=i,l.click()};return s.jsxs("div",{children:[s.jsx(Pt,{badge:"设计基础",title:"Color 颜色系统",desc:"BISHENG 颜色系统以「功能语义」为核心，每种颜色在设计和代码中具有明确的使用场合。提供 CSS 变量实现动态主题切换，所有颜色均支持 Light / Dark Mode。"}),s.jsxs("div",{className:"ds-section",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[s.jsx("h3",{className:"ds-section__title",style:{marginBottom:0},children:"颜色色板"}),s.jsxs("div",{style:{display:"flex",gap:8},children:[s.jsx(Z,{variant:"outline",size:"sm",leftIcon:s.jsx(pn,{size:13}),onClick:()=>a("figma-variables.light.json"),children:"下载 Light Mode"}),s.jsx(Z,{variant:"outline",size:"sm",leftIcon:s.jsx(pn,{size:13}),onClick:()=>a("figma-variables.dark.json"),children:"下载 Dark Mode"})]})]}),s.jsx("p",{className:"ds-section__desc",children:"颜色色板以主梯度为基础，并在需要时补充中间 step；700 为品牌基准色。Figma Variables 导入时请分别导入 Light / Dark 两个 JSON 文件，每个文件对应一个 mode。"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:IS.map(i=>s.jsxs("div",{children:[s.jsxs("div",{style:{marginBottom:10},children:[s.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)"},children:i.name}),s.jsx("span",{style:{fontSize:12,color:"var(--text-tertiary)",marginLeft:8},children:i.label}),s.jsx("p",{style:{fontSize:12,color:"var(--text-tertiary)",marginTop:2},children:i.desc})]}),s.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:(i.steps??bS).map(l=>s.jsx(WH,{base:i.base,step:l,hex:r[`--color-${i.base}-${l}`]},l))})]},i.base))})]}),s.jsxs("div",{className:"ds-section",children:[s.jsx("h3",{className:"ds-section__title",children:"语义化 Token"}),s.jsx("p",{className:"ds-section__desc",children:"语义化 Token 根据使用场景命名，与具体颜色值解耦，切换 Dark Mode 时自动替换为对应的深色值。开发时应优先使用语义 Token。"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:NH.map(({group:i,tokens:l})=>s.jsxs("div",{children:[s.jsxs("div",{style:{marginBottom:10},children:[s.jsx("h4",{style:{fontSize:13,fontWeight:700,color:"var(--text-primary)",marginBottom:4},children:i}),s.jsxs("p",{style:{fontSize:12,color:"var(--text-tertiary)"},children:["当前分类包含 ",l.length," 个 token"]})]}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:12},children:l.map(c=>s.jsx(ZH,{...c,value:r[c.token]},c.token))})]},i))})]})]})}function WH({base:e,step:t,hex:n}){const r=`--color-${e}-${t}`,[a,i]=V.useState(!1),l=()=>{navigator.clipboard.writeText(`var(${r})`),i(!0),setTimeout(()=>i(!1),1500)};return s.jsxs("div",{onClick:l,style:{flex:"1 1 60px",minWidth:60,cursor:"pointer",borderRadius:8,overflow:"hidden",border:"1px solid var(--border-primary)",transition:"transform 0.15s, box-shadow 0.15s"},title:a?"已复制！":`点击复制 var(${r})`,onMouseEnter:c=>{c.currentTarget.style.transform="translateY(-2px)",c.currentTarget.style.boxShadow="var(--shadow-md)"},onMouseLeave:c=>{c.currentTarget.style.transform="",c.currentTarget.style.boxShadow=""},children:[s.jsx("div",{style:{height:52,background:`var(${r})`}}),s.jsxs("div",{style:{padding:"6px 8px",background:"var(--surface-muted)"},children:[s.jsx("div",{style:{fontSize:11,fontWeight:600,color:"var(--text-primary)"},children:t}),s.jsx("div",{style:{fontSize:10,color:"var(--text-tertiary)",marginTop:1,fontFamily:"var(--font-family-mono)"},children:n||"—"}),a&&s.jsx("div",{style:{fontSize:10,color:"var(--color-primary-500)"},children:"已复制"})]})]})}function ZH({token:e,desc:t,type:n,value:r,paletteRef:a}){const[i,l]=V.useState(!1),c=()=>{navigator.clipboard.writeText(`var(${e})`),l(!0),setTimeout(()=>l(!1),1500)};return s.jsxs("div",{onClick:c,style:{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",border:"1px solid var(--border-primary)",borderRadius:8,cursor:"pointer",transition:"background 0.15s"},onMouseEnter:d=>d.currentTarget.style.background="var(--surface-muted)",onMouseLeave:d=>d.currentTarget.style.background="",children:[s.jsxs("div",{style:{width:32,height:32,borderRadius:6,border:"1px solid var(--border-primary)",flexShrink:0,background:n==="bg"?`var(${e})`:n==="text"?"var(--surface-subtle)":"var(--surface-base)",display:"flex",alignItems:"center",justifyContent:"center"},children:[n==="text"&&s.jsx("span",{style:{fontSize:12,fontWeight:700,color:`var(${e})`},children:"A"}),n==="border"&&s.jsx("div",{style:{width:20,height:1,background:`var(${e})`}})]}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("code",{style:{fontSize:11,color:"var(--color-primary-500)",fontFamily:"var(--font-family-mono)",display:"block"},children:i?"✓ 已复制":e}),s.jsx("div",{style:{fontSize:11,color:"var(--text-tertiary)",marginTop:1},children:t}),s.jsxs("div",{style:{fontSize:10,color:"var(--text-secondary)",marginTop:4,fontFamily:"var(--font-family-mono)"},children:["Hex: ",r||"—"]}),s.jsxs("div",{style:{fontSize:10,color:"var(--text-secondary)",marginTop:2,fontFamily:"var(--font-family-mono)"},children:["Palette: ",a]})]})]})}const jS=[{name:"24 (Large Title)",size:"24px",var:"--font-size-24",weight:"500",lh:"32px",usage:"页面大标题"},{name:"20 (Title)",size:"20px",var:"--font-size-20",weight:"500",lh:"28px",usage:"弹窗、卡片标题"},{name:"16 (Subtitle)",size:"16px",var:"--font-size-16",weight:"500",lh:"24px",usage:"重要正文、副标题"},{name:"14 (Body)",size:"14px",var:"--font-size-14",weight:"400",lh:"22px",usage:"通用段落正文（默认字号）"},{name:"12 (Caption)",size:"12px",var:"--font-size-12",weight:"400",lh:"20px",usage:"辅助说明、标签、时间戳"}],zS=[{name:"Light",var:"--font-weight-light",value:"300",usage:"Large Display 可用（慎用）"},{name:"Regular",var:"--font-weight-regular",value:"400",usage:"正文、说明文字（默认）"},{name:"Medium",var:"--font-weight-medium",value:"500",usage:"导航项、列表 item、按钮"},{name:"Semibold",var:"--font-weight-semibold",value:"600",usage:"卡片标题、弹窗标题、强调"},{name:"Bold",var:"--font-weight-bold",value:"700",usage:"页面主标题、数字统计"}];function GH(){return s.jsxs("div",{children:[s.jsx(Pt,{badge:"设计基础",title:"Typography 字体排版",desc:"BISHENG 强制指定了一套混合字体族链，优先使用系统英文字体并回落至中文字体。字号规范包含 12, 14, 16, 20, 24 这几个阶梯，分别对应着固定的绝对行高像素以保证最佳可读性。"}),s.jsxs("div",{className:"ds-section",children:[s.jsx("h3",{className:"ds-section__title",children:"字体族"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsxs("div",{style:{border:"1px solid var(--border-primary)",borderRadius:12,padding:24},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-tertiary)",marginBottom:8,fontFamily:"monospace"},children:"--font-family-base"}),s.jsx("p",{style:{fontSize:32,lineHeight:1.2,fontWeight:600,marginBottom:12,fontFamily:"var(--font-family-base)"},children:"Apple System"}),s.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)",lineHeight:1.6},children:"BISHENG AI Platform — 智能工作流平台"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-tertiary)",marginTop:12,fontFamily:"monospace"},children:'-apple-system, SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace'})]}),s.jsxs("div",{style:{border:"1px solid var(--border-primary)",borderRadius:12,padding:24},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-tertiary)",marginBottom:8,fontFamily:"monospace"},children:"--font-family-mono"}),s.jsx("p",{style:{fontSize:32,lineHeight:1.2,fontWeight:600,marginBottom:12,fontFamily:"var(--font-family-mono)"},children:"Mono"}),s.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)",lineHeight:1.6,fontFamily:"var(--font-family-mono)"},children:'const api_key = "sk-xxxx"'}),s.jsx("p",{style:{fontSize:12,color:"var(--text-tertiary)",marginTop:12,fontFamily:"monospace"},children:"'JetBrains Mono', 'Fira Code', Consolas, …"})]})]})]}),s.jsxs("div",{className:"ds-section",children:[s.jsx("h3",{className:"ds-section__title",children:"字号系统"}),s.jsx("p",{className:"ds-section__desc",children:"提供 9 个字号梯度，Body（14px）为默认正文字号，向上用于标题，向下用于辅助信息。"}),s.jsx("div",{style:{border:"1px solid var(--border-primary)",borderRadius:12,overflow:"hidden"},children:jS.map((e,t)=>s.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:24,padding:"16px 24px",borderBottom:t<jS.length-1?"1px solid var(--border-primary)":"none",background:t%2===0?"var(--surface-base)":"var(--surface-muted)"},children:[s.jsxs("div",{style:{width:100,flex:"0 0 100px"},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-tertiary)",fontFamily:"monospace"},children:e.size}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-tertiary)",fontFamily:"monospace"},children:["/",e.lh]})]}),s.jsx("div",{style:{flex:1},children:s.jsxs("span",{style:{fontSize:e.size,fontWeight:Number(e.weight),color:"var(--text-primary)",lineHeight:e.lh},children:[e.name," — BISHENG Design System"]})}),s.jsx("div",{style:{width:200,flex:"0 0 200px",textAlign:"right"},children:s.jsx("div",{style:{fontSize:11,color:"var(--text-tertiary)"},children:e.usage})})]},e.name))})]}),s.jsxs("div",{className:"ds-section",children:[s.jsx("h3",{className:"ds-section__title",children:"字重"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,border:"1px solid var(--border-primary)",borderRadius:12,overflow:"hidden"},children:zS.map((e,t)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24,padding:"14px 24px",borderBottom:t<zS.length-1?"1px solid var(--border-primary)":"none",background:t%2===0?"var(--surface-base)":"var(--surface-muted)"},children:[s.jsxs("div",{style:{width:100},children:[s.jsx("code",{style:{fontSize:11,color:"var(--color-primary-500)",fontFamily:"monospace"},children:e.value}),s.jsx("div",{style:{fontSize:12,color:"var(--text-tertiary)"},children:e.name})]}),s.jsx("div",{style:{flex:1,fontSize:18,fontWeight:Number(e.value),color:"var(--text-primary)"},children:"BISHENG 智能平台"}),s.jsx("div",{style:{fontSize:12,color:"var(--text-tertiary)"},children:e.usage})]},e.name))})]})]})}const $H=[1,2,3,4,5,6,7,8,9,10,12,14,16,20,24],XH=[{name:"none",var:"--radius-none",px:"0",usage:"直角，用于特定列表项"},{name:"sm",var:"--radius-sm",px:"2px",usage:"输入框 checkbox"},{name:"base",var:"--radius-base",px:"4px",usage:"按钮、输入框、标签（默认）"},{name:"md",var:"--radius-md",px:"6px",usage:"下拉菜单、Tooltip"},{name:"lg",var:"--radius-lg",px:"8px",usage:"卡片、弹窗、表格"},{name:"xl",var:"--radius-xl",px:"12px",usage:"大卡片、浮层面板"},{name:"2xl",var:"--radius-2xl",px:"16px",usage:"特大卡片"},{name:"full",var:"--radius-full",px:"9999px",usage:"Badge、Avatar、Switch"}],KH=[{name:"sm",var:"--shadow-sm",usage:"微交互悬浮"},{name:"base",var:"--shadow-base",usage:"卡片、弹出"},{name:"md",var:"--shadow-md",usage:"下拉、浮层"},{name:"lg",var:"--shadow-lg",usage:"侧边栏、全屏面板"},{name:"xl",var:"--shadow-xl",usage:"Modal 弹窗"}];function QH(){return s.jsxs("div",{children:[s.jsx(Pt,{badge:"设计基础",title:"Spacing / Radius / Shadow",desc:"间距、圆角、阴影是构建视觉层次的核心维度。BISHENG 采用 4px 基础单元，所有间距值均为 4 的倍数，确保像素对齐和视觉一致性。"}),s.jsxs("div",{className:"ds-section",children:[s.jsx("h3",{className:"ds-section__title",children:"间距系统"}),s.jsx("p",{className:"ds-section__desc",children:"基于 4px 基础单元（spacing-1 = 4px），提供 15 档间距。组件内边距、元素间距、版式节奏均取自此系统。"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:$H.map(e=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[s.jsxs("code",{style:{width:120,fontSize:12,fontFamily:"monospace",color:"var(--color-primary-500)",flexShrink:0},children:["--spacing-",e]}),s.jsxs("code",{style:{width:40,fontSize:12,fontFamily:"monospace",color:"var(--text-tertiary)",flexShrink:0},children:[e*4,"px"]}),s.jsx("div",{style:{width:e*4,height:20,background:"var(--color-primary-400)",borderRadius:3}})]},e))})]}),s.jsxs("div",{className:"ds-section",children:[s.jsx("h3",{className:"ds-section__title",children:"圆角系统"}),s.jsx("p",{className:"ds-section__desc",children:"统一的圆角系统确保组件风格一致。整体偏向现代、圆润的视觉风格，避免过于硬朗或过于圆润的极端。"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:16},children:XH.map(e=>s.jsxs("div",{style:{border:"1px solid var(--border-primary)",borderRadius:8,overflow:"hidden"},children:[s.jsx("div",{style:{height:64,background:"var(--surface-muted)",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("div",{style:{width:40,height:40,background:"var(--color-primary-100)",border:"2px solid var(--color-primary-300)",borderRadius:e.name==="full"?"9999px":e.px}})}),s.jsxs("div",{style:{padding:"10px 12px",background:"var(--surface-base)"},children:[s.jsx("code",{style:{fontSize:11,color:"var(--color-primary-500)",display:"block",fontFamily:"monospace"},children:e.px}),s.jsx("div",{style:{fontSize:11,fontWeight:600,marginTop:2},children:e.name}),s.jsx("div",{style:{fontSize:10,color:"var(--text-tertiary)",marginTop:2,lineHeight:1.4},children:e.usage})]})]},e.name))})]}),s.jsxs("div",{className:"ds-section",children:[s.jsx("h3",{className:"ds-section__title",children:"阴影系统"}),s.jsx("p",{className:"ds-section__desc",children:"五层阴影对应不同海拔层级，从微妙到显著，用于建立 UI 的深度感和层次关系。"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:20},children:KH.map(e=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[s.jsx("div",{style:{width:80,height:80,background:"var(--surface-base)",borderRadius:12,boxShadow:`var(${e.var})`,border:"1px solid var(--border-primary)"}}),s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx("code",{style:{fontSize:11,color:"var(--color-primary-500)",display:"block",fontFamily:"monospace"},children:e.var}),s.jsxs("div",{style:{fontSize:12,fontWeight:600,marginTop:2},children:["shadow-",e.name]}),s.jsx("div",{style:{fontSize:11,color:"var(--text-tertiary)",marginTop:2},children:e.usage})]})]},e.name))})]})]})}const AS=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,PS=it,Rj=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return PS(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,l=Object.keys(a).map(u=>{const h=n==null?void 0:n[u],p=i==null?void 0:i[u];if(h===null)return null;const m=AS(h)||AS(p);return a[u][m]}),c=n&&Object.entries(n).reduce((u,h)=>{let[p,m]=h;return m===void 0||(u[p]=m),u},{}),d=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,h)=>{let{class:p,className:m,...x}=h;return Object.entries(x).every(w=>{let[f,M]=w;return Array.isArray(M)?M.includes({...i,...c}[f]):{...i,...c}[f]===M})?[...u,p,m]:u},[]);return PS(e,l,d,n==null?void 0:n.class,n==null?void 0:n.className)},KL="-",YH=e=>{const t=eT(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{const c=l.split(KL);return c[0]===""&&c.length!==1&&c.shift(),Hj(c,t)||JH(l)},getConflictingClassGroupIds:(l,c)=>{const d=n[l]||[];return c&&r[l]?[...d,...r[l]]:d}}},Hj=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?Hj(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(KL);return(l=t.validators.find(({validator:c})=>c(i)))==null?void 0:l.classGroupId},RS=/^\[(.+)\]$/,JH=e=>{if(RS.test(e)){const t=RS.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},eT=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return nT(Object.entries(e.classGroups),n).forEach(([i,l])=>{Ew(l,r,i,t)}),r},Ew=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:HS(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(tT(a)){Ew(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,l])=>{Ew(l,HS(t,i),n,r)})})},HS=(e,t)=>{let n=e;return t.split(KL).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},tT=e=>e.isThemeGetter,nT=(e,t)=>t?e.map(([n,r])=>{const a=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,c])=>[t+l,c])):i);return[n,a]}):e,rT=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(i,l)=>{n.set(i,l),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let l=n.get(i);if(l!==void 0)return l;if((l=r.get(i))!==void 0)return a(i,l),l},set(i,l){n.has(i)?n.set(i,l):a(i,l)}}},Tj="!",aT=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,a=t[0],i=t.length,l=c=>{const d=[];let u=0,h=0,p;for(let M=0;M<c.length;M++){let k=c[M];if(u===0){if(k===a&&(r||c.slice(M,M+i)===t)){d.push(c.slice(h,M)),h=M+i;continue}if(k==="/"){p=M;continue}}k==="["?u++:k==="]"&&u--}const m=d.length===0?c:c.substring(h),x=m.startsWith(Tj),w=x?m.substring(1):m,f=p&&p>h?p-h:void 0;return{modifiers:d,hasImportantModifier:x,baseClassName:w,maybePostfixModifierPosition:f}};return n?c=>n({className:c,parseClassName:l}):l},oT=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},iT=e=>({cache:rT(e.cacheSize),parseClassName:aT(e),...YH(e)}),lT=/\s+/,cT=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a}=t,i=[],l=e.trim().split(lT);let c="";for(let d=l.length-1;d>=0;d-=1){const u=l[d],{modifiers:h,hasImportantModifier:p,baseClassName:m,maybePostfixModifierPosition:x}=n(u);let w=!!x,f=r(w?m.substring(0,x):m);if(!f){if(!w){c=u+(c.length>0?" "+c:c);continue}if(f=r(m),!f){c=u+(c.length>0?" "+c:c);continue}w=!1}const M=oT(h).join(":"),k=p?M+Tj:M,y=k+f;if(i.includes(y))continue;i.push(y);const v=a(f,w);for(let L=0;L<v.length;++L){const C=v[L];i.push(k+C)}c=u+(c.length>0?" "+c:c)}return c};function sT(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=qj(t))&&(r&&(r+=" "),r+=n);return r}const qj=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=qj(e[r]))&&(n&&(n+=" "),n+=t);return n};function dT(e,...t){let n,r,a,i=l;function l(d){const u=t.reduce((h,p)=>p(h),e());return n=iT(u),r=n.cache.get,a=n.cache.set,i=c,c(d)}function c(d){const u=r(d);if(u)return u;const h=cT(d,n);return a(d,h),h}return function(){return i(sT.apply(null,arguments))}}const te=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Bj=/^\[(?:([a-z-]+):)?(.+)\]$/i,uT=/^\d+\/\d+$/,hT=new Set(["px","full","screen"]),yT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,kT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,fT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,mT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ht=e=>Cr(e)||hT.has(e)||uT.test(e),$t=e=>_r(e,"length",ST),Cr=e=>!!e&&!Number.isNaN(Number(e)),jM=e=>_r(e,"number",Cr),aa=e=>!!e&&Number.isInteger(Number(e)),vT=e=>e.endsWith("%")&&Cr(e.slice(0,-1)),O=e=>Bj.test(e),Xt=e=>yT.test(e),gT=new Set(["length","size","percentage"]),xT=e=>_r(e,gT,Vj),MT=e=>_r(e,"position",Vj),wT=new Set(["image","url"]),LT=e=>_r(e,wT,bT),CT=e=>_r(e,"",IT),oa=()=>!0,_r=(e,t,n)=>{const r=Bj.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},ST=e=>pT.test(e)&&!kT.test(e),Vj=()=>!1,IT=e=>fT.test(e),bT=e=>mT.test(e),jT=()=>{const e=te("colors"),t=te("spacing"),n=te("blur"),r=te("brightness"),a=te("borderColor"),i=te("borderRadius"),l=te("borderSpacing"),c=te("borderWidth"),d=te("contrast"),u=te("grayscale"),h=te("hueRotate"),p=te("invert"),m=te("gap"),x=te("gradientColorStops"),w=te("gradientColorStopPositions"),f=te("inset"),M=te("margin"),k=te("opacity"),y=te("padding"),v=te("saturate"),L=te("scale"),C=te("sepia"),I=te("skew"),S=te("space"),j=te("translate"),T=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",O,t],H=()=>[O,t],_=()=>["",Ht,$t],N=()=>["auto",Cr,O],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],b=()=>["start","end","center","between","around","evenly","stretch"],A=()=>["","0",O],q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],D=()=>[Cr,O];return{cacheSize:500,separator:":",theme:{colors:[oa],spacing:[Ht,$t],blur:["none","",Xt,O],brightness:D(),borderColor:[e],borderRadius:["none","","full",Xt,O],borderSpacing:H(),borderWidth:_(),contrast:D(),grayscale:A(),hueRotate:D(),invert:A(),gap:H(),gradientColorStops:[e],gradientColorStopPositions:[vT,$t],inset:F(),margin:F(),opacity:D(),padding:H(),saturate:D(),scale:D(),sepia:A(),skew:D(),space:H(),translate:H()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[Xt]}],"break-after":[{"break-after":q()}],"break-before":[{"break-before":q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),O]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",aa,O]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",aa,O]}],"grid-cols":[{"grid-cols":[oa]}],"col-start-end":[{col:["auto",{span:["full",aa,O]},O]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[oa]}],"row-start-end":[{row:["auto",{span:[aa,O]},O]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...b()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...b(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...b(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[M]}],mx:[{mx:[M]}],my:[{my:[M]}],ms:[{ms:[M]}],me:[{me:[M]}],mt:[{mt:[M]}],mr:[{mr:[M]}],mb:[{mb:[M]}],ml:[{ml:[M]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,t]}],"min-w":[{"min-w":[O,t,"min","max","fit"]}],"max-w":[{"max-w":[O,t,"none","full","min","max","fit","prose",{screen:[Xt]},Xt]}],h:[{h:[O,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Xt,$t]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",jM]}],"font-family":[{font:[oa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",Cr,jM]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ht,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ht,$t]}],"underline-offset":[{"underline-offset":["auto",Ht,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),MT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",xT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},LT]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:E()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[Ht,O]}],"outline-w":[{outline:[Ht,$t]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:_()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[Ht,$t]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Xt,CT]}],"shadow-color":[{shadow:[oa]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",Xt,O]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[p]}],saturate:[{saturate:[v]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:D()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:D()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[aa,O]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[I]}],"skew-y":[{"skew-y":[I]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ht,$t,jM]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},zT=dT(jT);function nt(...e){return zT(it(e))}const AT=Rj("input",{variants:{size:{small:"input--small",medium:"input--medium",large:"input--large"},status:{default:"",error:"input--error",success:"input--success"},hasPrefix:{true:"input--with-prefix",false:""},hasSuffix:{true:"input--with-suffix",false:""}},defaultVariants:{size:"medium",status:"default",hasPrefix:!1,hasSuffix:!1}}),Be=g.forwardRef(({className:e,type:t,id:n,size:r="medium",status:a="default",prefix:i,suffix:l,label:c,hint:d,required:u,"aria-describedby":h,"aria-invalid":p,...m},x)=>{const w=!!i||!!l,f=g.useId(),M=g.useId(),k=n??f,y=d?`${k}-${M}`:void 0,v=[h,y].filter(Boolean).join(" ")||void 0,L=p??(a==="error"?!0:void 0),C=nt(AT({size:r,status:a,hasPrefix:!!i,hasSuffix:!!l}),e),I=w?s.jsxs("div",{className:nt("input-field",`input-field--${r}`),children:[i&&s.jsx("div",{className:"input-prefix","aria-hidden":"true",children:i}),s.jsx("input",{id:k,type:t,className:C,ref:x,"aria-describedby":v,"aria-invalid":L,...m}),l&&s.jsx("div",{className:"input-suffix",children:l})]}):s.jsx("input",{id:k,type:t,className:C,ref:x,"aria-describedby":v,"aria-invalid":L,...m});return c||d?s.jsxs("div",{className:"input-wrapper",children:[c&&s.jsx("label",{htmlFor:k,className:nt("input-label",{required:u}),children:c}),I,d&&s.jsx("span",{id:y,className:nt("input-hint",{[`input-hint--${a}`]:a!=="default"}),children:d})]}):I});Be.displayName="Input";const Fj=g.forwardRef(({id:e,label:t,hint:n,required:r,className:a,"aria-describedby":i,...l},c)=>{const d=g.useId(),u=g.useId(),h=e??d,p=n?`${h}-${u}`:void 0,m=[i,p].filter(Boolean).join(" ")||void 0;return s.jsxs("div",{className:"input-wrapper w-full",children:[t&&s.jsx("label",{htmlFor:h,className:nt("input-label",{required:r}),children:t}),s.jsx("textarea",{id:h,ref:c,className:nt("textarea",a),rows:4,"aria-describedby":m,...l}),n&&s.jsx("span",{id:p,className:"input-hint",children:n})]})});Fj.displayName="Textarea";const PT=["Search","Plus","Minus","X","Check","ChevronDown","ChevronUp","ChevronLeft","ChevronRight","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","MoreHorizontal","MoreVertical","Settings","Settings2","Sliders","SlidersHorizontal","User","Users","UserPlus","UserMinus","UserCheck","Home","LayoutDashboard","Grid","List","Table2","Columns","Bot","Cpu","Zap","Brain","Workflow","GitBranch","GitMerge","Database","Server","Cloud","CloudUpload","CloudDownload","File","FileText","FileCode","FilePlus","FolderOpen","Folder","Download","Upload","Share","Share2","Copy","Clipboard","Edit","Pencil","Trash","Trash2","Archive","RefreshCw","RotateCcw","Eye","EyeOff","Lock","Unlock","Shield","ShieldCheck","Key","Bell","BellOff","Mail","MessageSquare","MessageCircle","Star","Heart","Bookmark","Flag","Tag","Hash","Play","Pause","Stop","SkipForward","AlertCircle","AlertTriangle","Info","HelpCircle","CheckCircle","XCircle","LogIn","LogOut","Link","ExternalLink","Globe","Wifi","ChartBar","BarChart2","LineChart","PieChart","TrendingUp","TrendingDown","Code","Code2","Terminal","Braces","Brackets","Image","Video","Mic","Volume2","Moon","Sun","Palette","Layout"];function RT(){const[e,t]=V.useState(""),[n,r]=V.useState(null),a=PT.filter(l=>l.toLowerCase().includes(e.toLowerCase())),i=l=>{navigator.clipboard.writeText(`<${l} />`),r(l),setTimeout(()=>r(null),1500)};return s.jsxs("div",{children:[s.jsx(Pt,{badge:"设计基础",title:"Icons 图标",desc:"BISHENG 使用 Lucide Icons 作为图标库，提供一致的线性风格，支持任意尺寸和颜色自定义。点击任意图标可复制 JSX 代码。"}),s.jsxs("div",{className:"ds-section",children:[s.jsx("div",{style:{marginBottom:20},children:s.jsx(Be,{prefix:s.jsx(mr,{size:14}),placeholder:"搜索图标...",value:e,onChange:l=>t(l.target.value),style:{maxWidth:320}})}),s.jsxs("div",{style:{fontSize:13,color:"var(--text-tertiary)",marginBottom:16},children:["共 ",a.length," 个图标（使用方式：",s.jsxs("code",{style:{fontSize:12,background:"var(--surface-subtle)",padding:"1px 6px",borderRadius:3},children:["import ","{ IconName }"," from 'lucide-react'"]}),"）"]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8},children:[a.map(l=>{const c=BH[l];if(!c)return null;const d=n===l;return s.jsxs("button",{onClick:()=>i(l),title:`复制 <${l} />`,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,padding:"12px 8px",border:"1px solid var(--border-primary)",borderRadius:8,cursor:"pointer",background:d?"var(--color-primary-50)":"var(--surface-base)",transition:"all 0.15s",color:d?"var(--color-primary-500)":"var(--text-secondary)"},onMouseEnter:u=>{d||(u.currentTarget.style.background="var(--surface-muted)",u.currentTarget.style.borderColor="var(--color-primary-300)")},onMouseLeave:u=>{d||(u.currentTarget.style.background="",u.currentTarget.style.borderColor="")},children:[s.jsx(c,{size:20}),s.jsx("span",{style:{fontSize:10,textAlign:"center",lineHeight:1.3,wordBreak:"break-all"},children:d?"已复制!":l})]},l)}),a.length===0&&s.jsxs("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:40,color:"var(--text-tertiary)"},children:["没有找到匹配「",e,"」的图标"]})]})]})]})}const HT=[{name:"variant",type:"'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'danger-outline'",default:"'primary'",desc:"按钮变体，控制外观风格"},{name:"size",type:"'mini' | 'small' | 'medium' | 'large'",default:"'medium'",desc:"按钮尺寸"},{name:"loading",type:"boolean",default:"false",desc:"加载状态，显示 loading 动画并禁用点击"},{name:"disabled",type:"boolean",default:"false",desc:"禁用状态"},{name:"block",type:"boolean",default:"false",desc:"是否充满父容器宽度"},{name:"leftIcon",type:"ReactNode",desc:"左侧图标"},{name:"rightIcon",type:"ReactNode",desc:"右侧图标"},{name:"iconOnly",type:"boolean",default:"false",desc:"纯图标按钮，不显示文字，形状变为正方形"},{name:"onClick",type:"(e: MouseEvent) => void",desc:"点击事件回调"}];function TT(){const[e,t]=V.useState(!1),n=()=>{t(!0),setTimeout(()=>t(!1),2e3)};return s.jsxs("div",{children:[s.jsx(Pt,{badge:"通用组件",title:"Button 按钮",desc:"按钮用于触发一个即时操作。BISHENG 中的按钮分为主要操作、次要操作、文字操作等类型，覆盖从强调到低调的全部场景。合理使用按钮层级有助于引导用户完成操作流程。"}),s.jsx(ie,{id:"variant",title:"按钮类型",desc:"按钮按照重要程度分为主要按钮（Primary）、次要按钮（Secondary）、线框按钮（Outline）、幽灵按钮（Ghost）。危险操作使用 Danger 变体，保持用户的注意力。",preview:s.jsxs(s.Fragment,{children:[s.jsx(Z,{variant:"primary",children:"主要按钮"}),s.jsx(Z,{variant:"secondary",children:"次要按钮"}),s.jsx(Z,{variant:"outline",children:"线框按钮"}),s.jsx(Z,{variant:"ghost",children:"幽灵按钮"}),s.jsx(Z,{variant:"danger",children:"危险按钮"}),s.jsx(Z,{variant:"danger-outline",children:"危险线框"})]}),code:`<Button variant="primary">主要按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="outline">线框按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button variant="danger">危险按钮</Button>
<Button variant="danger-outline">危险线框</Button>`}),s.jsx(ie,{id:"size",title:"按钮尺寸",desc:"提供 mini、small、medium（默认）、large 四种尺寸，适配不同的界面密度需求。工具栏、表格操作建议使用 small/mini，普通表单使用 medium，页面主要 CTA 使用 large。",preview:s.jsxs(s.Fragment,{children:[s.jsx(Z,{size:"mini",children:"迷你 mini"}),s.jsx(Z,{size:"small",children:"小号 small"}),s.jsx(Z,{size:"medium",children:"默认 medium"}),s.jsx(Z,{size:"large",children:"大号 large"})]}),code:`<Button size="mini">迷你 mini</Button>
<Button size="small">小号 small</Button>
<Button size="medium">默认 medium</Button>
<Button size="large">大号 large</Button>`}),s.jsx(ie,{id:"icon",title:"图标按钮",desc:"可在按钮左侧或右侧添加图标增强语义。纯图标按钮（iconOnly）常用于工具栏、操作列等空间受限的场景，建议配合 Tooltip 使用以保持可访问性。",preview:s.jsxs(s.Fragment,{children:[s.jsx(Z,{leftIcon:s.jsx(qa,{}),children:"新建"}),s.jsx(Z,{variant:"outline",rightIcon:s.jsx(wa,{}),children:"了解更多"}),s.jsx(Z,{variant:"outline",leftIcon:s.jsx(pn,{}),children:"导出"}),s.jsx(Z,{variant:"danger-outline",iconOnly:!0,size:"medium",children:s.jsx(z1,{})})]}),code:`import { Plus, ArrowRight, Download, Trash2 } from 'lucide-react'

<Button leftIcon={<Plus />}>新建</Button>
<Button variant="outline" rightIcon={<ArrowRight />}>了解更多</Button>
<Button variant="outline" leftIcon={<Download />}>导出</Button>
<Button variant="danger-outline" iconOnly><Trash2 /></Button>`}),s.jsx(ie,{id:"state",title:"加载 & 禁用状态",desc:"按钮的 loading 状态用于需要等待服务端响应的异步操作，自动禁止重复点击。disabled 状态用于条件不满足时的静态禁用。",preview:s.jsxs(s.Fragment,{children:[s.jsx(Z,{loading:e,onClick:n,children:e?"提交中":"点击提交"}),s.jsx(Z,{loading:!0,children:"正在处理"}),s.jsx(Z,{disabled:!0,children:"已禁用"}),s.jsx(Z,{variant:"outline",disabled:!0,children:"禁用线框"})]}),code:`const [loading, setLoading] = useState(false)

<Button loading={loading} onClick={() => {
  setLoading(true)
  setTimeout(() => setLoading(false), 2000)
}}>
  {loading ? '提交中' : '点击提交'}
</Button>
<Button disabled>已禁用</Button>`}),s.jsx(ie,{id:"block",title:"块级按钮",desc:"使用 block 属性可让按钮占满容器全宽，常用于移动端、表单底部提交区域或强引导场景。",preview:s.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:12},children:[s.jsx(Z,{block:!0,children:"块级主要按钮"}),s.jsx(Z,{variant:"outline",block:!0,children:"块级线框按钮"})]}),code:`<Button block>块级主要按钮</Button>
<Button variant="outline" block>块级线框按钮</Button>`}),s.jsx(Nr,{props:HT})]})}const qT=[{name:"size",type:"'small' | 'medium' | 'large'",default:"'medium'",desc:"输入框尺寸"},{name:"label",type:"string",desc:"输入框标签，显示在输入框上方"},{name:"hint",type:"string",desc:"提示文本，显示在输入框下方"},{name:"status",type:"'default' | 'error' | 'success'",default:"'default'",desc:"输入框状态，影响边框颜色和提示文本颜色"},{name:"prefix",type:"ReactNode",desc:"前缀内容，通常为图标"},{name:"suffix",type:"ReactNode",desc:"后缀内容，通常为图标或操作按钮"},{name:"required",type:"boolean",desc:"是否必填，显示红色星号"},{name:"disabled",type:"boolean",desc:"禁用状态"},{name:"placeholder",type:"string",desc:"占位提示文本"}];function BT(){const[e,t]=V.useState(!1);return s.jsxs("div",{children:[s.jsx(Pt,{badge:"数据录入",title:"Input 输入框",desc:"输入框是最基础的表单控件，用于接收用户文本输入。支持多种尺寸、状态、前后缀配置，适用于搜索、登录表单、配置项等场景。"}),s.jsx(ie,{id:"basic",title:"基础用法",desc:"基础输入框，支持 placeholder 和各类 HTML input 属性。",preview:s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{width:280},children:s.jsx(Be,{placeholder:"请输入内容"})}),s.jsx("div",{style:{width:280},children:s.jsx(Be,{label:"用户名",placeholder:"请输入用户名",required:!0})})]}),previewCol:!0,code:`<Input placeholder="请输入内容" />
<Input label="用户名" placeholder="请输入用户名" required />`}),s.jsx(ie,{id:"size",title:"输入框尺寸",desc:"三种尺寸满足不同密度需求，与 Button、Select 尺寸高度严格保持一致(Small=28px, Medium=32px, Large=40px)。",preview:s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{width:240},children:s.jsx(Be,{size:"small",placeholder:"Small 尺寸"})}),s.jsx("div",{style:{width:240},children:s.jsx(Be,{size:"medium",placeholder:"Medium 尺寸（默认）"})}),s.jsx("div",{style:{width:240},children:s.jsx(Be,{size:"large",placeholder:"Large 尺寸"})})]}),previewCol:!0,code:`<Input size="small" placeholder="Small 尺寸" />
<Input size="medium" placeholder="Medium 尺寸（默认）" />
<Input size="large" placeholder="Large 尺寸" />`}),s.jsx(ie,{id:"prefix",title:"前缀 & 后缀",desc:"通过 prefix 和 suffix 在输入框内嵌入图标或操作元素，常见于搜索框、密码框。内嵌内容不会占用独立空间，保持输入框紧凑。",preview:s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{width:280},children:s.jsx(Be,{prefix:s.jsx(mr,{size:14}),placeholder:"搜索..."})}),s.jsx("div",{style:{width:280},children:s.jsx(Be,{label:"密码",prefix:s.jsx(za,{size:14}),type:e?"text":"password",placeholder:"请输入密码",suffix:s.jsx("span",{style:{cursor:"pointer"},onClick:()=>t(n=>!n),children:e?s.jsx(Sa,{size:14}):s.jsx(Ia,{size:14})})})}),s.jsx("div",{style:{width:280},children:s.jsx(Be,{prefix:s.jsx(Aa,{size:14}),placeholder:"请输入邮箱",type:"email"})})]}),previewCol:!0,code:`<Input prefix={<Search size={14} />} placeholder="搜索..." />

<Input
  label="密码"
  prefix={<Lock size={14} />}
  type={showPassword ? 'text' : 'password'}
  suffix={
    <span onClick={() => setShowPassword(v => !v)}>
      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
    </span>
  }
/>`}),s.jsx(ie,{id:"status",title:"输入状态",desc:"通过 status 控制验证状态的视觉反馈。error 状态用于表单校验失败，success 状态用于实时验证通过，配合 hint 文本提示详细信息。",preview:s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{width:280},children:s.jsx(Be,{label:"正常状态",placeholder:"请输入",hint:"这是一条提示信息"})}),s.jsx("div",{style:{width:280},children:s.jsx(Be,{label:"错误状态",status:"error",defaultValue:"错误的内容",hint:"用户名已存在，请更换"})}),s.jsx("div",{style:{width:280},children:s.jsx(Be,{label:"成功状态",status:"success",defaultValue:"bisheng_user",hint:"用户名可用"})}),s.jsx("div",{style:{width:280},children:s.jsx(Be,{label:"禁用状态",disabled:!0,defaultValue:"不可编辑的内容"})})]}),previewCol:!0,code:`<Input label="错误状态" status="error" hint="用户名已存在" />
<Input label="成功状态" status="success" hint="用户名可用" />
<Input label="禁用状态" disabled defaultValue="不可编辑" />`}),s.jsx(ie,{id:"textarea",title:"多行文本",desc:"Textarea 用于多行文本输入，如描述、备注、提示词等场景，支持 resize 拖拽调整高度。",preview:s.jsx("div",{style:{width:"100%",maxWidth:480},children:s.jsx(Fj,{label:"描述",placeholder:"请输入详细描述...",hint:"最多 500 字"})}),previewCol:!0,code:'<Textarea label="描述" placeholder="请输入详细描述..." hint="最多 500 字" />'}),s.jsx(Nr,{props:qT})]})}function TS(e,[t,n]){return Math.min(n,Math.max(t,e))}function pe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function QL(e,t=[]){let n=[];function r(i,l){const c=g.createContext(l),d=n.length;n=[...n,l];const u=p=>{var k;const{scope:m,children:x,...w}=p,f=((k=m==null?void 0:m[e])==null?void 0:k[d])||c,M=g.useMemo(()=>w,Object.values(w));return s.jsx(f.Provider,{value:M,children:x})};u.displayName=i+"Provider";function h(p,m){var f;const x=((f=m==null?void 0:m[e])==null?void 0:f[d])||c,w=g.useContext(x);if(w)return w;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[u,h]}const a=()=>{const i=n.map(l=>g.createContext(l));return function(c){const d=(c==null?void 0:c[e])||i;return g.useMemo(()=>({[`__scope${e}`]:{...c,[e]:d}}),[c,d])}};return a.scopeName=e,[r,VT(a,...t)]}function VT(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const l=r.reduce((c,{useScope:d,scopeName:u})=>{const p=d(i)[`__scope${u}`];return{...c,...p}},{});return g.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function qS(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ej(...e){return t=>{let n=!1;const r=e.map(a=>{const i=qS(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():qS(e[a],null)}}}}function Le(...e){return g.useCallback(Ej(...e),e)}function C9(e){const t=FT(e),n=g.forwardRef((r,a)=>{const{children:i,...l}=r,c=g.Children.toArray(i),d=c.find(DT);if(d){const u=d.props.children,h=c.map(p=>p===d?g.Children.count(u)>1?g.Children.only(null):g.isValidElement(u)?u.props.children:null:p);return s.jsx(t,{...l,ref:a,children:g.isValidElement(u)?g.cloneElement(u,void 0,h):null})}return s.jsx(t,{...l,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}function FT(e){const t=g.forwardRef((n,r)=>{const{children:a,...i}=n;if(g.isValidElement(a)){const l=NT(a),c=OT(i,a.props);return a.type!==g.Fragment&&(c.ref=r?Ej(r,l):l),g.cloneElement(a,c)}return g.Children.count(a)>1?g.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ET=Symbol("radix.slottable");function DT(e){return g.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ET}function OT(e,t){const n={...t};for(const r in t){const a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...c)=>{const d=i(...c);return a(...c),d}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function NT(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function _T(e){const t=e+"CollectionProvider",[n,r]=QL(t),[a,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=f=>{const{scope:M,children:k}=f,y=V.useRef(null),v=V.useRef(new Map).current;return s.jsx(a,{scope:M,itemMap:v,collectionRef:y,children:k})};l.displayName=t;const c=e+"CollectionSlot",d=C9(c),u=V.forwardRef((f,M)=>{const{scope:k,children:y}=f,v=i(c,k),L=Le(M,v.collectionRef);return s.jsx(d,{ref:L,children:y})});u.displayName=c;const h=e+"CollectionItemSlot",p="data-radix-collection-item",m=C9(h),x=V.forwardRef((f,M)=>{const{scope:k,children:y,...v}=f,L=V.useRef(null),C=Le(M,L),I=i(h,k);return V.useEffect(()=>(I.itemMap.set(L,{ref:L,...v}),()=>void I.itemMap.delete(L))),s.jsx(m,{[p]:"",ref:C,children:y})});x.displayName=h;function w(f){const M=i(e+"CollectionConsumer",f);return V.useCallback(()=>{const y=M.collectionRef.current;if(!y)return[];const v=Array.from(y.querySelectorAll(`[${p}]`));return Array.from(M.itemMap.values()).sort((I,S)=>v.indexOf(I.ref.current)-v.indexOf(S.ref.current))},[M.collectionRef,M.itemMap])}return[{Provider:l,Slot:u,ItemSlot:x},w,r]}var UT=g.createContext(void 0);function WT(e){const t=g.useContext(UT);return e||t||"ltr"}var ZT=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ye=ZT.reduce((e,t)=>{const n=C9(`Primitive.${t}`),r=g.forwardRef((a,i)=>{const{asChild:l,...c}=a,d=l?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(d,{...c,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function GT(e,t){e&&Fr.flushSync(()=>e.dispatchEvent(t))}function q1(e){const t=g.useRef(e);return g.useEffect(()=>{t.current=e}),g.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function $T(e,t=globalThis==null?void 0:globalThis.document){const n=q1(e);g.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var XT="DismissableLayer",Dw="dismissableLayer.update",KT="dismissableLayer.pointerDownOutside",QT="dismissableLayer.focusOutside",BS,Dj=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Oj=g.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:i,onInteractOutside:l,onDismiss:c,...d}=e,u=g.useContext(Dj),[h,p]=g.useState(null),m=(h==null?void 0:h.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,x]=g.useState({}),w=Le(t,S=>p(S)),f=Array.from(u.layers),[M]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),k=f.indexOf(M),y=h?f.indexOf(h):-1,v=u.layersWithOutsidePointerEventsDisabled.size>0,L=y>=k,C=eq(S=>{const j=S.target,T=[...u.branches].some(P=>P.contains(j));!L||T||(a==null||a(S),l==null||l(S),S.defaultPrevented||c==null||c())},m),I=tq(S=>{const j=S.target;[...u.branches].some(P=>P.contains(j))||(i==null||i(S),l==null||l(S),S.defaultPrevented||c==null||c())},m);return $T(S=>{y===u.layers.size-1&&(r==null||r(S),!S.defaultPrevented&&c&&(S.preventDefault(),c()))},m),g.useEffect(()=>{if(h)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(BS=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(h)),u.layers.add(h),VS(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=BS)}},[h,m,n,u]),g.useEffect(()=>()=>{h&&(u.layers.delete(h),u.layersWithOutsidePointerEventsDisabled.delete(h),VS())},[h,u]),g.useEffect(()=>{const S=()=>x({});return document.addEventListener(Dw,S),()=>document.removeEventListener(Dw,S)},[]),s.jsx(ye.div,{...d,ref:w,style:{pointerEvents:v?L?"auto":"none":void 0,...e.style},onFocusCapture:pe(e.onFocusCapture,I.onFocusCapture),onBlurCapture:pe(e.onBlurCapture,I.onBlurCapture),onPointerDownCapture:pe(e.onPointerDownCapture,C.onPointerDownCapture)})});Oj.displayName=XT;var YT="DismissableLayerBranch",JT=g.forwardRef((e,t)=>{const n=g.useContext(Dj),r=g.useRef(null),a=Le(t,r);return g.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),s.jsx(ye.div,{...e,ref:a})});JT.displayName=YT;function eq(e,t=globalThis==null?void 0:globalThis.document){const n=q1(e),r=g.useRef(!1),a=g.useRef(()=>{});return g.useEffect(()=>{const i=c=>{if(c.target&&!r.current){let d=function(){Nj(KT,n,u,{discrete:!0})};const u={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=d,t.addEventListener("click",a.current,{once:!0})):d()}else t.removeEventListener("click",a.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",i),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function tq(e,t=globalThis==null?void 0:globalThis.document){const n=q1(e),r=g.useRef(!1);return g.useEffect(()=>{const a=i=>{i.target&&!r.current&&Nj(QT,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function VS(){const e=new CustomEvent(Dw);document.dispatchEvent(e)}function Nj(e,t,n,{discrete:r}){const a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?GT(a,i):a.dispatchEvent(i)}var zM=0;function nq(){g.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??FS()),document.body.insertAdjacentElement("beforeend",e[1]??FS()),zM++,()=>{zM===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),zM--}},[])}function FS(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var AM="focusScope.autoFocusOnMount",PM="focusScope.autoFocusOnUnmount",ES={bubbles:!1,cancelable:!0},rq="FocusScope",_j=g.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:i,...l}=e,[c,d]=g.useState(null),u=q1(a),h=q1(i),p=g.useRef(null),m=Le(t,f=>d(f)),x=g.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;g.useEffect(()=>{if(r){let f=function(v){if(x.paused||!c)return;const L=v.target;c.contains(L)?p.current=L:Kt(p.current,{select:!0})},M=function(v){if(x.paused||!c)return;const L=v.relatedTarget;L!==null&&(c.contains(L)||Kt(p.current,{select:!0}))},k=function(v){if(document.activeElement===document.body)for(const C of v)C.removedNodes.length>0&&Kt(c)};document.addEventListener("focusin",f),document.addEventListener("focusout",M);const y=new MutationObserver(k);return c&&y.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",M),y.disconnect()}}},[r,c,x.paused]),g.useEffect(()=>{if(c){OS.add(x);const f=document.activeElement;if(!c.contains(f)){const k=new CustomEvent(AM,ES);c.addEventListener(AM,u),c.dispatchEvent(k),k.defaultPrevented||(aq(sq(Uj(c)),{select:!0}),document.activeElement===f&&Kt(c))}return()=>{c.removeEventListener(AM,u),setTimeout(()=>{const k=new CustomEvent(PM,ES);c.addEventListener(PM,h),c.dispatchEvent(k),k.defaultPrevented||Kt(f??document.body,{select:!0}),c.removeEventListener(PM,h),OS.remove(x)},0)}}},[c,u,h,x]);const w=g.useCallback(f=>{if(!n&&!r||x.paused)return;const M=f.key==="Tab"&&!f.altKey&&!f.ctrlKey&&!f.metaKey,k=document.activeElement;if(M&&k){const y=f.currentTarget,[v,L]=oq(y);v&&L?!f.shiftKey&&k===L?(f.preventDefault(),n&&Kt(v,{select:!0})):f.shiftKey&&k===v&&(f.preventDefault(),n&&Kt(L,{select:!0})):k===y&&f.preventDefault()}},[n,r,x.paused]);return s.jsx(ye.div,{tabIndex:-1,...l,ref:m,onKeyDown:w})});_j.displayName=rq;function aq(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Kt(r,{select:t}),document.activeElement!==n)return}function oq(e){const t=Uj(e),n=DS(t,e),r=DS(t.reverse(),e);return[n,r]}function Uj(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function DS(e,t){for(const n of e)if(!iq(n,{upTo:t}))return n}function iq(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function lq(e){return e instanceof HTMLInputElement&&"select"in e}function Kt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&lq(e)&&t&&e.select()}}var OS=cq();function cq(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=NS(e,t),e.unshift(t)},remove(t){var n;e=NS(e,t),(n=e[0])==null||n.resume()}}}function NS(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function sq(e){return e.filter(t=>t.tagName!=="A")}var Ne=globalThis!=null&&globalThis.document?g.useLayoutEffect:()=>{},dq=eL[" useId ".trim().toString()]||(()=>{}),uq=0;function YL(e){const[t,n]=g.useState(dq());return Ne(()=>{n(r=>r??String(uq++))},[e]),t?`radix-${t}`:""}const hq=["top","right","bottom","left"],mn=Math.min,Ze=Math.max,S9=Math.round,jo=Math.floor,At=e=>({x:e,y:e}),yq={left:"right",right:"left",bottom:"top",top:"bottom"};function Ow(e,t,n){return Ze(e,mn(t,n))}function _t(e,t){return typeof e=="function"?e(t):e}function Ut(e){return e.split("-")[0]}function Ur(e){return e.split("-")[1]}function JL(e){return e==="x"?"y":"x"}function eC(e){return e==="y"?"height":"width"}function bt(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function tC(e){return JL(bt(e))}function pq(e,t,n){n===void 0&&(n=!1);const r=Ur(e),a=tC(e),i=eC(a);let l=a==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=I9(l)),[l,I9(l)]}function kq(e){const t=I9(e);return[Nw(e),t,Nw(t)]}function Nw(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const _S=["left","right"],US=["right","left"],fq=["top","bottom"],mq=["bottom","top"];function vq(e,t,n){switch(e){case"top":case"bottom":return n?t?US:_S:t?_S:US;case"left":case"right":return t?fq:mq;default:return[]}}function gq(e,t,n,r){const a=Ur(e);let i=vq(Ut(e),n==="start",r);return a&&(i=i.map(l=>l+"-"+a),t&&(i=i.concat(i.map(Nw)))),i}function I9(e){const t=Ut(e);return yq[t]+e.slice(t.length)}function xq(e){return{top:0,right:0,bottom:0,left:0,...e}}function Wj(e){return typeof e!="number"?xq(e):{top:e,right:e,bottom:e,left:e}}function b9(e){const{x:t,y:n,width:r,height:a}=e;return{width:r,height:a,top:n,left:t,right:t+r,bottom:n+a,x:t,y:n}}function WS(e,t,n){let{reference:r,floating:a}=e;const i=bt(t),l=tC(t),c=eC(l),d=Ut(t),u=i==="y",h=r.x+r.width/2-a.width/2,p=r.y+r.height/2-a.height/2,m=r[c]/2-a[c]/2;let x;switch(d){case"top":x={x:h,y:r.y-a.height};break;case"bottom":x={x:h,y:r.y+r.height};break;case"right":x={x:r.x+r.width,y:p};break;case"left":x={x:r.x-a.width,y:p};break;default:x={x:r.x,y:r.y}}switch(Ur(t)){case"start":x[l]-=m*(n&&u?-1:1);break;case"end":x[l]+=m*(n&&u?-1:1);break}return x}async function Mq(e,t){var n;t===void 0&&(t={});const{x:r,y:a,platform:i,rects:l,elements:c,strategy:d}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:m=!1,padding:x=0}=_t(t,e),w=Wj(x),M=c[m?p==="floating"?"reference":"floating":p],k=b9(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(M)))==null||n?M:M.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:u,rootBoundary:h,strategy:d})),y=p==="floating"?{x:r,y:a,width:l.floating.width,height:l.floating.height}:l.reference,v=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),L=await(i.isElement==null?void 0:i.isElement(v))?await(i.getScale==null?void 0:i.getScale(v))||{x:1,y:1}:{x:1,y:1},C=b9(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:v,strategy:d}):y);return{top:(k.top-C.top+w.top)/L.y,bottom:(C.bottom-k.bottom+w.bottom)/L.y,left:(k.left-C.left+w.left)/L.x,right:(C.right-k.right+w.right)/L.x}}const wq=50,Lq=async(e,t,n)=>{const{placement:r="bottom",strategy:a="absolute",middleware:i=[],platform:l}=n,c=l.detectOverflow?l:{...l,detectOverflow:Mq},d=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:a}),{x:h,y:p}=WS(u,r,d),m=r,x=0;const w={};for(let f=0;f<i.length;f++){const M=i[f];if(!M)continue;const{name:k,fn:y}=M,{x:v,y:L,data:C,reset:I}=await y({x:h,y:p,initialPlacement:r,placement:m,strategy:a,middlewareData:w,rects:u,platform:c,elements:{reference:e,floating:t}});h=v??h,p=L??p,w[k]={...w[k],...C},I&&x<wq&&(x++,typeof I=="object"&&(I.placement&&(m=I.placement),I.rects&&(u=I.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:a}):I.rects),{x:h,y:p}=WS(u,m,d)),f=-1)}return{x:h,y:p,placement:m,strategy:a,middlewareData:w}},Cq=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:a,rects:i,platform:l,elements:c,middlewareData:d}=t,{element:u,padding:h=0}=_t(e,t)||{};if(u==null)return{};const p=Wj(h),m={x:n,y:r},x=tC(a),w=eC(x),f=await l.getDimensions(u),M=x==="y",k=M?"top":"left",y=M?"bottom":"right",v=M?"clientHeight":"clientWidth",L=i.reference[w]+i.reference[x]-m[x]-i.floating[w],C=m[x]-i.reference[x],I=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let S=I?I[v]:0;(!S||!await(l.isElement==null?void 0:l.isElement(I)))&&(S=c.floating[v]||i.floating[w]);const j=L/2-C/2,T=S/2-f[w]/2-1,P=mn(p[k],T),F=mn(p[y],T),H=P,_=S-f[w]-F,N=S/2-f[w]/2+j,X=Ow(H,N,_),E=!d.arrow&&Ur(a)!=null&&N!==X&&i.reference[w]/2-(N<H?P:F)-f[w]/2<0,U=E?N<H?N-H:N-_:0;return{[x]:m[x]+U,data:{[x]:X,centerOffset:N-X-U,...E&&{alignmentOffset:U}},reset:E}}}),Sq=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:a,middlewareData:i,rects:l,initialPlacement:c,platform:d,elements:u}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:f=!0,...M}=_t(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const k=Ut(a),y=bt(c),v=Ut(c)===c,L=await(d.isRTL==null?void 0:d.isRTL(u.floating)),C=m||(v||!f?[I9(c)]:kq(c)),I=w!=="none";!m&&I&&C.push(...gq(c,f,w,L));const S=[c,...C],j=await d.detectOverflow(t,M),T=[];let P=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&T.push(j[k]),p){const N=pq(a,l,L);T.push(j[N[0]],j[N[1]])}if(P=[...P,{placement:a,overflows:T}],!T.every(N=>N<=0)){var F,H;const N=(((F=i.flip)==null?void 0:F.index)||0)+1,X=S[N];if(X&&(!(p==="alignment"?y!==bt(X):!1)||P.every(b=>bt(b.placement)===y?b.overflows[0]>0:!0)))return{data:{index:N,overflows:P},reset:{placement:X}};let E=(H=P.filter(U=>U.overflows[0]<=0).sort((U,b)=>U.overflows[1]-b.overflows[1])[0])==null?void 0:H.placement;if(!E)switch(x){case"bestFit":{var _;const U=(_=P.filter(b=>{if(I){const A=bt(b.placement);return A===y||A==="y"}return!0}).map(b=>[b.placement,b.overflows.filter(A=>A>0).reduce((A,q)=>A+q,0)]).sort((b,A)=>b[1]-A[1])[0])==null?void 0:_[0];U&&(E=U);break}case"initialPlacement":E=c;break}if(a!==E)return{reset:{placement:E}}}return{}}}};function ZS(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function GS(e){return hq.some(t=>e[t]>=0)}const Iq=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n,platform:r}=t,{strategy:a="referenceHidden",...i}=_t(e,t);switch(a){case"referenceHidden":{const l=await r.detectOverflow(t,{...i,elementContext:"reference"}),c=ZS(l,n.reference);return{data:{referenceHiddenOffsets:c,referenceHidden:GS(c)}}}case"escaped":{const l=await r.detectOverflow(t,{...i,altBoundary:!0}),c=ZS(l,n.floating);return{data:{escapedOffsets:c,escaped:GS(c)}}}default:return{}}}}},Zj=new Set(["left","top"]);async function bq(e,t){const{placement:n,platform:r,elements:a}=e,i=await(r.isRTL==null?void 0:r.isRTL(a.floating)),l=Ut(n),c=Ur(n),d=bt(n)==="y",u=Zj.has(l)?-1:1,h=i&&d?-1:1,p=_t(t,e);let{mainAxis:m,crossAxis:x,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof w=="number"&&(x=c==="end"?w*-1:w),d?{x:x*h,y:m*u}:{x:m*u,y:x*h}}const jq=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:a,y:i,placement:l,middlewareData:c}=t,d=await bq(t,e);return l===((n=c.offset)==null?void 0:n.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:a+d.x,y:i+d.y,data:{...d,placement:l}}}}},zq=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:a,platform:i}=t,{mainAxis:l=!0,crossAxis:c=!1,limiter:d={fn:k=>{let{x:y,y:v}=k;return{x:y,y:v}}},...u}=_t(e,t),h={x:n,y:r},p=await i.detectOverflow(t,u),m=bt(Ut(a)),x=JL(m);let w=h[x],f=h[m];if(l){const k=x==="y"?"top":"left",y=x==="y"?"bottom":"right",v=w+p[k],L=w-p[y];w=Ow(v,w,L)}if(c){const k=m==="y"?"top":"left",y=m==="y"?"bottom":"right",v=f+p[k],L=f-p[y];f=Ow(v,f,L)}const M=d.fn({...t,[x]:w,[m]:f});return{...M,data:{x:M.x-n,y:M.y-r,enabled:{[x]:l,[m]:c}}}}}},Aq=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:a,rects:i,middlewareData:l}=t,{offset:c=0,mainAxis:d=!0,crossAxis:u=!0}=_t(e,t),h={x:n,y:r},p=bt(a),m=JL(p);let x=h[m],w=h[p];const f=_t(c,t),M=typeof f=="number"?{mainAxis:f,crossAxis:0}:{mainAxis:0,crossAxis:0,...f};if(d){const v=m==="y"?"height":"width",L=i.reference[m]-i.floating[v]+M.mainAxis,C=i.reference[m]+i.reference[v]-M.mainAxis;x<L?x=L:x>C&&(x=C)}if(u){var k,y;const v=m==="y"?"width":"height",L=Zj.has(Ut(a)),C=i.reference[p]-i.floating[v]+(L&&((k=l.offset)==null?void 0:k[p])||0)+(L?0:M.crossAxis),I=i.reference[p]+i.reference[v]+(L?0:((y=l.offset)==null?void 0:y[p])||0)-(L?M.crossAxis:0);w<C?w=C:w>I&&(w=I)}return{[m]:x,[p]:w}}}},Pq=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:a,rects:i,platform:l,elements:c}=t,{apply:d=()=>{},...u}=_t(e,t),h=await l.detectOverflow(t,u),p=Ut(a),m=Ur(a),x=bt(a)==="y",{width:w,height:f}=i.floating;let M,k;p==="top"||p==="bottom"?(M=p,k=m===(await(l.isRTL==null?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(k=p,M=m==="end"?"top":"bottom");const y=f-h.top-h.bottom,v=w-h.left-h.right,L=mn(f-h[M],y),C=mn(w-h[k],v),I=!t.middlewareData.shift;let S=L,j=C;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(j=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(S=y),I&&!m){const P=Ze(h.left,0),F=Ze(h.right,0),H=Ze(h.top,0),_=Ze(h.bottom,0);x?j=w-2*(P!==0||F!==0?P+F:Ze(h.left,h.right)):S=f-2*(H!==0||_!==0?H+_:Ze(h.top,h.bottom))}await d({...t,availableWidth:j,availableHeight:S});const T=await l.getDimensions(c.floating);return w!==T.width||f!==T.height?{reset:{rects:!0}}:{}}}};function G9(){return typeof window<"u"}function Wr(e){return Gj(e)?(e.nodeName||"").toLowerCase():"#document"}function Xe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Rt(e){var t;return(t=(Gj(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Gj(e){return G9()?e instanceof Node||e instanceof Xe(e).Node:!1}function kt(e){return G9()?e instanceof Element||e instanceof Xe(e).Element:!1}function Zt(e){return G9()?e instanceof HTMLElement||e instanceof Xe(e).HTMLElement:!1}function $S(e){return!G9()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Xe(e).ShadowRoot}function co(e){const{overflow:t,overflowX:n,overflowY:r,display:a}=ft(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&a!=="inline"&&a!=="contents"}function Rq(e){return/^(table|td|th)$/.test(Wr(e))}function $9(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Hq=/transform|translate|scale|rotate|perspective|filter/,Tq=/paint|layout|strict|content/,In=e=>!!e&&e!=="none";let RM;function nC(e){const t=kt(e)?ft(e):e;return In(t.transform)||In(t.translate)||In(t.scale)||In(t.rotate)||In(t.perspective)||!rC()&&(In(t.backdropFilter)||In(t.filter))||Hq.test(t.willChange||"")||Tq.test(t.contain||"")}function qq(e){let t=vn(e);for(;Zt(t)&&!Tr(t);){if(nC(t))return t;if($9(t))return null;t=vn(t)}return null}function rC(){return RM==null&&(RM=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),RM}function Tr(e){return/^(html|body|#document)$/.test(Wr(e))}function ft(e){return Xe(e).getComputedStyle(e)}function X9(e){return kt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function vn(e){if(Wr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||$S(e)&&e.host||Rt(e);return $S(t)?t.host:t}function $j(e){const t=vn(e);return Tr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Zt(t)&&co(t)?t:$j(t)}function no(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const a=$j(e),i=a===((r=e.ownerDocument)==null?void 0:r.body),l=Xe(a);if(i){const c=_w(l);return t.concat(l,l.visualViewport||[],co(a)?a:[],c&&n?no(c):[])}else return t.concat(a,no(a,[],n))}function _w(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Xj(e){const t=ft(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const a=Zt(e),i=a?e.offsetWidth:n,l=a?e.offsetHeight:r,c=S9(n)!==i||S9(r)!==l;return c&&(n=i,r=l),{width:n,height:r,$:c}}function aC(e){return kt(e)?e:e.contextElement}function Sr(e){const t=aC(e);if(!Zt(t))return At(1);const n=t.getBoundingClientRect(),{width:r,height:a,$:i}=Xj(t);let l=(i?S9(n.width):n.width)/r,c=(i?S9(n.height):n.height)/a;return(!l||!Number.isFinite(l))&&(l=1),(!c||!Number.isFinite(c))&&(c=1),{x:l,y:c}}const Bq=At(0);function Kj(e){const t=Xe(e);return!rC()||!t.visualViewport?Bq:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Vq(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Xe(e)?!1:t}function B1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect(),i=aC(e);let l=At(1);t&&(r?kt(r)&&(l=Sr(r)):l=Sr(e));const c=Vq(i,n,r)?Kj(i):At(0);let d=(a.left+c.x)/l.x,u=(a.top+c.y)/l.y,h=a.width/l.x,p=a.height/l.y;if(i){const m=Xe(i),x=r&&kt(r)?Xe(r):r;let w=m,f=_w(w);for(;f&&r&&x!==w;){const M=Sr(f),k=f.getBoundingClientRect(),y=ft(f),v=k.left+(f.clientLeft+parseFloat(y.paddingLeft))*M.x,L=k.top+(f.clientTop+parseFloat(y.paddingTop))*M.y;d*=M.x,u*=M.y,h*=M.x,p*=M.y,d+=v,u+=L,w=Xe(f),f=_w(w)}}return b9({width:h,height:p,x:d,y:u})}function K9(e,t){const n=X9(e).scrollLeft;return t?t.left+n:B1(Rt(e)).left+n}function Qj(e,t){const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-K9(e,n),a=n.top+t.scrollTop;return{x:r,y:a}}function Fq(e){let{elements:t,rect:n,offsetParent:r,strategy:a}=e;const i=a==="fixed",l=Rt(r),c=t?$9(t.floating):!1;if(r===l||c&&i)return n;let d={scrollLeft:0,scrollTop:0},u=At(1);const h=At(0),p=Zt(r);if((p||!p&&!i)&&((Wr(r)!=="body"||co(l))&&(d=X9(r)),p)){const x=B1(r);u=Sr(r),h.x=x.x+r.clientLeft,h.y=x.y+r.clientTop}const m=l&&!p&&!i?Qj(l,d):At(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-d.scrollLeft*u.x+h.x+m.x,y:n.y*u.y-d.scrollTop*u.y+h.y+m.y}}function Eq(e){return Array.from(e.getClientRects())}function Dq(e){const t=Rt(e),n=X9(e),r=e.ownerDocument.body,a=Ze(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Ze(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+K9(e);const c=-n.scrollTop;return ft(r).direction==="rtl"&&(l+=Ze(t.clientWidth,r.clientWidth)-a),{width:a,height:i,x:l,y:c}}const XS=25;function Oq(e,t){const n=Xe(e),r=Rt(e),a=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,c=0,d=0;if(a){i=a.width,l=a.height;const h=rC();(!h||h&&t==="fixed")&&(c=a.offsetLeft,d=a.offsetTop)}const u=K9(r);if(u<=0){const h=r.ownerDocument,p=h.body,m=getComputedStyle(p),x=h.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,w=Math.abs(r.clientWidth-p.clientWidth-x);w<=XS&&(i-=w)}else u<=XS&&(i+=u);return{width:i,height:l,x:c,y:d}}function Nq(e,t){const n=B1(e,!0,t==="fixed"),r=n.top+e.clientTop,a=n.left+e.clientLeft,i=Zt(e)?Sr(e):At(1),l=e.clientWidth*i.x,c=e.clientHeight*i.y,d=a*i.x,u=r*i.y;return{width:l,height:c,x:d,y:u}}function KS(e,t,n){let r;if(t==="viewport")r=Oq(e,n);else if(t==="document")r=Dq(Rt(e));else if(kt(t))r=Nq(t,n);else{const a=Kj(e);r={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return b9(r)}function Yj(e,t){const n=vn(e);return n===t||!kt(n)||Tr(n)?!1:ft(n).position==="fixed"||Yj(n,t)}function _q(e,t){const n=t.get(e);if(n)return n;let r=no(e,[],!1).filter(c=>kt(c)&&Wr(c)!=="body"),a=null;const i=ft(e).position==="fixed";let l=i?vn(e):e;for(;kt(l)&&!Tr(l);){const c=ft(l),d=nC(l);!d&&c.position==="fixed"&&(a=null),(i?!d&&!a:!d&&c.position==="static"&&!!a&&(a.position==="absolute"||a.position==="fixed")||co(l)&&!d&&Yj(e,l))?r=r.filter(h=>h!==l):a=c,l=vn(l)}return t.set(e,r),r}function Uq(e){let{element:t,boundary:n,rootBoundary:r,strategy:a}=e;const l=[...n==="clippingAncestors"?$9(t)?[]:_q(t,this._c):[].concat(n),r],c=KS(t,l[0],a);let d=c.top,u=c.right,h=c.bottom,p=c.left;for(let m=1;m<l.length;m++){const x=KS(t,l[m],a);d=Ze(x.top,d),u=mn(x.right,u),h=mn(x.bottom,h),p=Ze(x.left,p)}return{width:u-p,height:h-d,x:p,y:d}}function Wq(e){const{width:t,height:n}=Xj(e);return{width:t,height:n}}function Zq(e,t,n){const r=Zt(t),a=Rt(t),i=n==="fixed",l=B1(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const d=At(0);function u(){d.x=K9(a)}if(r||!r&&!i)if((Wr(t)!=="body"||co(a))&&(c=X9(t)),r){const x=B1(t,!0,i,t);d.x=x.x+t.clientLeft,d.y=x.y+t.clientTop}else a&&u();i&&!r&&a&&u();const h=a&&!r&&!i?Qj(a,c):At(0),p=l.left+c.scrollLeft-d.x-h.x,m=l.top+c.scrollTop-d.y-h.y;return{x:p,y:m,width:l.width,height:l.height}}function HM(e){return ft(e).position==="static"}function QS(e,t){if(!Zt(e)||ft(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Rt(e)===n&&(n=n.ownerDocument.body),n}function Jj(e,t){const n=Xe(e);if($9(e))return n;if(!Zt(e)){let a=vn(e);for(;a&&!Tr(a);){if(kt(a)&&!HM(a))return a;a=vn(a)}return n}let r=QS(e,t);for(;r&&Rq(r)&&HM(r);)r=QS(r,t);return r&&Tr(r)&&HM(r)&&!nC(r)?n:r||qq(e)||n}const Gq=async function(e){const t=this.getOffsetParent||Jj,n=this.getDimensions,r=await n(e.floating);return{reference:Zq(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function $q(e){return ft(e).direction==="rtl"}const Xq={convertOffsetParentRelativeRectToViewportRelativeRect:Fq,getDocumentElement:Rt,getClippingRect:Uq,getOffsetParent:Jj,getElementRects:Gq,getClientRects:Eq,getDimensions:Wq,getScale:Sr,isElement:kt,isRTL:$q};function ez(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Kq(e,t){let n=null,r;const a=Rt(e);function i(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function l(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),i();const u=e.getBoundingClientRect(),{left:h,top:p,width:m,height:x}=u;if(c||t(),!m||!x)return;const w=jo(p),f=jo(a.clientWidth-(h+m)),M=jo(a.clientHeight-(p+x)),k=jo(h),v={rootMargin:-w+"px "+-f+"px "+-M+"px "+-k+"px",threshold:Ze(0,mn(1,d))||1};let L=!0;function C(I){const S=I[0].intersectionRatio;if(S!==d){if(!L)return l();S?l(!1,S):r=setTimeout(()=>{l(!1,1e-7)},1e3)}S===1&&!ez(u,e.getBoundingClientRect())&&l(),L=!1}try{n=new IntersectionObserver(C,{...v,root:a.ownerDocument})}catch{n=new IntersectionObserver(C,v)}n.observe(e)}return l(!0),i}function Qq(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,u=aC(e),h=a||i?[...u?no(u):[],...t?no(t):[]]:[];h.forEach(k=>{a&&k.addEventListener("scroll",n,{passive:!0}),i&&k.addEventListener("resize",n)});const p=u&&c?Kq(u,n):null;let m=-1,x=null;l&&(x=new ResizeObserver(k=>{let[y]=k;y&&y.target===u&&x&&t&&(x.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var v;(v=x)==null||v.observe(t)})),n()}),u&&!d&&x.observe(u),t&&x.observe(t));let w,f=d?B1(e):null;d&&M();function M(){const k=B1(e);f&&!ez(f,k)&&n(),f=k,w=requestAnimationFrame(M)}return n(),()=>{var k;h.forEach(y=>{a&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),p==null||p(),(k=x)==null||k.disconnect(),x=null,d&&cancelAnimationFrame(w)}}const Yq=jq,Jq=zq,eB=Sq,tB=Pq,nB=Iq,YS=Cq,rB=Aq,aB=(e,t,n)=>{const r=new Map,a={platform:Xq,...n},i={...a.platform,_c:r};return Lq(e,t,{...a,platform:i})};var oB=typeof document<"u",iB=function(){},Xx=oB?g.useLayoutEffect:iB;function j9(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!j9(e[r],t[r]))return!1;return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,a[r]))return!1;for(r=n;r--!==0;){const i=a[r];if(!(i==="_owner"&&e.$$typeof)&&!j9(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function tz(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function JS(e,t){const n=tz(e);return Math.round(t*n)/n}function TM(e){const t=g.useRef(e);return Xx(()=>{t.current=e}),t}function lB(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:a,elements:{reference:i,floating:l}={},transform:c=!0,whileElementsMounted:d,open:u}=e,[h,p]=g.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,x]=g.useState(r);j9(m,r)||x(r);const[w,f]=g.useState(null),[M,k]=g.useState(null),y=g.useCallback(b=>{b!==I.current&&(I.current=b,f(b))},[]),v=g.useCallback(b=>{b!==S.current&&(S.current=b,k(b))},[]),L=i||w,C=l||M,I=g.useRef(null),S=g.useRef(null),j=g.useRef(h),T=d!=null,P=TM(d),F=TM(a),H=TM(u),_=g.useCallback(()=>{if(!I.current||!S.current)return;const b={placement:t,strategy:n,middleware:m};F.current&&(b.platform=F.current),aB(I.current,S.current,b).then(A=>{const q={...A,isPositioned:H.current!==!1};N.current&&!j9(j.current,q)&&(j.current=q,Fr.flushSync(()=>{p(q)}))})},[m,t,n,F,H]);Xx(()=>{u===!1&&j.current.isPositioned&&(j.current.isPositioned=!1,p(b=>({...b,isPositioned:!1})))},[u]);const N=g.useRef(!1);Xx(()=>(N.current=!0,()=>{N.current=!1}),[]),Xx(()=>{if(L&&(I.current=L),C&&(S.current=C),L&&C){if(P.current)return P.current(L,C,_);_()}},[L,C,_,P,T]);const X=g.useMemo(()=>({reference:I,floating:S,setReference:y,setFloating:v}),[y,v]),E=g.useMemo(()=>({reference:L,floating:C}),[L,C]),U=g.useMemo(()=>{const b={position:n,left:0,top:0};if(!E.floating)return b;const A=JS(E.floating,h.x),q=JS(E.floating,h.y);return c?{...b,transform:"translate("+A+"px, "+q+"px)",...tz(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:A,top:q}},[n,c,E.floating,h.x,h.y]);return g.useMemo(()=>({...h,update:_,refs:X,elements:E,floatingStyles:U}),[h,_,X,E,U])}const cB=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:a}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?YS({element:r.current,padding:a}).fn(n):{}:r?YS({element:r,padding:a}).fn(n):{}}}},sB=(e,t)=>{const n=Yq(e);return{name:n.name,fn:n.fn,options:[e,t]}},dB=(e,t)=>{const n=Jq(e);return{name:n.name,fn:n.fn,options:[e,t]}},uB=(e,t)=>({fn:rB(e).fn,options:[e,t]}),hB=(e,t)=>{const n=eB(e);return{name:n.name,fn:n.fn,options:[e,t]}},yB=(e,t)=>{const n=tB(e);return{name:n.name,fn:n.fn,options:[e,t]}},pB=(e,t)=>{const n=nB(e);return{name:n.name,fn:n.fn,options:[e,t]}},kB=(e,t)=>{const n=cB(e);return{name:n.name,fn:n.fn,options:[e,t]}};var fB="Arrow",nz=g.forwardRef((e,t)=>{const{children:n,width:r=10,height:a=5,...i}=e;return s.jsx(ye.svg,{...i,ref:t,width:r,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:s.jsx("polygon",{points:"0,0 30,0 15,10"})})});nz.displayName=fB;var mB=nz;function vB(e){const[t,n]=g.useState(void 0);return Ne(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const i=a[0];let l,c;if("borderBoxSize"in i){const d=i.borderBoxSize,u=Array.isArray(d)?d[0]:d;l=u.inlineSize,c=u.blockSize}else l=e.offsetWidth,c=e.offsetHeight;n({width:l,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var oC="Popper",[rz,az]=QL(oC),[gB,oz]=rz(oC),iz=e=>{const{__scopePopper:t,children:n}=e,[r,a]=g.useState(null);return s.jsx(gB,{scope:t,anchor:r,onAnchorChange:a,children:n})};iz.displayName=oC;var lz="PopperAnchor",cz=g.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...a}=e,i=oz(lz,n),l=g.useRef(null),c=Le(t,l),d=g.useRef(null);return g.useEffect(()=>{const u=d.current;d.current=(r==null?void 0:r.current)||l.current,u!==d.current&&i.onAnchorChange(d.current)}),r?null:s.jsx(ye.div,{...a,ref:c})});cz.displayName=lz;var iC="PopperContent",[xB,MB]=rz(iC),sz=g.forwardRef((e,t)=>{var B,ee,Se,Y,K,Q;const{__scopePopper:n,side:r="bottom",sideOffset:a=0,align:i="center",alignOffset:l=0,arrowPadding:c=0,avoidCollisions:d=!0,collisionBoundary:u=[],collisionPadding:h=0,sticky:p="partial",hideWhenDetached:m=!1,updatePositionStrategy:x="optimized",onPlaced:w,...f}=e,M=oz(iC,n),[k,y]=g.useState(null),v=Le(t,_e=>y(_e)),[L,C]=g.useState(null),I=vB(L),S=(I==null?void 0:I.width)??0,j=(I==null?void 0:I.height)??0,T=r+(i!=="center"?"-"+i:""),P=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},F=Array.isArray(u)?u:[u],H=F.length>0,_={padding:P,boundary:F.filter(LB),altBoundary:H},{refs:N,floatingStyles:X,placement:E,isPositioned:U,middlewareData:b}=lB({strategy:"fixed",placement:T,whileElementsMounted:(..._e)=>Qq(..._e,{animationFrame:x==="always"}),elements:{reference:M.anchor},middleware:[sB({mainAxis:a+j,alignmentAxis:l}),d&&dB({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?uB():void 0,..._}),d&&hB({..._}),yB({..._,apply:({elements:_e,rects:gt,availableWidth:Gr,availableHeight:$r})=>{const{width:Xr,height:nA}=gt.reference,so=_e.floating.style;so.setProperty("--radix-popper-available-width",`${Gr}px`),so.setProperty("--radix-popper-available-height",`${$r}px`),so.setProperty("--radix-popper-anchor-width",`${Xr}px`),so.setProperty("--radix-popper-anchor-height",`${nA}px`)}}),L&&kB({element:L,padding:c}),CB({arrowWidth:S,arrowHeight:j}),m&&pB({strategy:"referenceHidden",..._})]}),[A,q]=hz(E),D=q1(w);Ne(()=>{U&&(D==null||D())},[U,D]);const ae=(B=b.arrow)==null?void 0:B.x,mt=(ee=b.arrow)==null?void 0:ee.y,Ce=((Se=b.arrow)==null?void 0:Se.centerOffset)!==0,[vt,Ae]=g.useState();return Ne(()=>{k&&Ae(window.getComputedStyle(k).zIndex)},[k]),s.jsx("div",{ref:N.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:U?X.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:vt,"--radix-popper-transform-origin":[(Y=b.transformOrigin)==null?void 0:Y.x,(K=b.transformOrigin)==null?void 0:K.y].join(" "),...((Q=b.hide)==null?void 0:Q.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:s.jsx(xB,{scope:n,placedSide:A,onArrowChange:C,arrowX:ae,arrowY:mt,shouldHideArrow:Ce,children:s.jsx(ye.div,{"data-side":A,"data-align":q,...f,ref:v,style:{...f.style,animation:U?void 0:"none"}})})})});sz.displayName=iC;var dz="PopperArrow",wB={top:"bottom",right:"left",bottom:"top",left:"right"},uz=g.forwardRef(function(t,n){const{__scopePopper:r,...a}=t,i=MB(dz,r),l=wB[i.placedSide];return s.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:s.jsx(mB,{...a,ref:n,style:{...a.style,display:"block"}})})});uz.displayName=dz;function LB(e){return e!==null}var CB=e=>({name:"transformOrigin",options:e,fn(t){var M,k,y;const{placement:n,rects:r,middlewareData:a}=t,l=((M=a.arrow)==null?void 0:M.centerOffset)!==0,c=l?0:e.arrowWidth,d=l?0:e.arrowHeight,[u,h]=hz(n),p={start:"0%",center:"50%",end:"100%"}[h],m=(((k=a.arrow)==null?void 0:k.x)??0)+c/2,x=(((y=a.arrow)==null?void 0:y.y)??0)+d/2;let w="",f="";return u==="bottom"?(w=l?p:`${m}px`,f=`${-d}px`):u==="top"?(w=l?p:`${m}px`,f=`${r.floating.height+d}px`):u==="right"?(w=`${-d}px`,f=l?p:`${x}px`):u==="left"&&(w=`${r.floating.width+d}px`,f=l?p:`${x}px`),{data:{x:w,y:f}}}});function hz(e){const[t,n="center"]=e.split("-");return[t,n]}var SB=iz,IB=cz,bB=sz,jB=uz,zB="Portal",yz=g.forwardRef((e,t)=>{var c;const{container:n,...r}=e,[a,i]=g.useState(!1);Ne(()=>i(!0),[]);const l=n||a&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return l?zR.createPortal(s.jsx(ye.div,{...r,ref:t}),l):null});yz.displayName=zB;var AB=eL[" useInsertionEffect ".trim().toString()]||Ne;function eI({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[a,i,l]=PB({defaultProp:t,onChange:n}),c=e!==void 0,d=c?e:a;{const h=g.useRef(e!==void 0);g.useEffect(()=>{const p=h.current;p!==c&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),h.current=c},[c,r])}const u=g.useCallback(h=>{var p;if(c){const m=RB(h)?h(e):h;m!==e&&((p=l.current)==null||p.call(l,m))}else i(h)},[c,e,i,l]);return[d,u]}function PB({defaultProp:e,onChange:t}){const[n,r]=g.useState(e),a=g.useRef(n),i=g.useRef(t);return AB(()=>{i.current=t},[t]),g.useEffect(()=>{var l;a.current!==n&&((l=i.current)==null||l.call(i,n),a.current=n)},[n,a]),[n,r,i]}function RB(e){return typeof e=="function"}function HB(e){const t=g.useRef({value:e,previous:e});return g.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var pz=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),TB="VisuallyHidden",qB=g.forwardRef((e,t)=>s.jsx(ye.span,{...e,ref:t,style:{...pz,...e.style}}));qB.displayName=TB;var BB=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},N1=new WeakMap,zo=new WeakMap,Ao={},qM=0,kz=function(e){return e&&(e.host||kz(e.parentNode))},VB=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=kz(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},FB=function(e,t,n,r){var a=VB(t,Array.isArray(e)?e:[e]);Ao[n]||(Ao[n]=new WeakMap);var i=Ao[n],l=[],c=new Set,d=new Set(a),u=function(p){!p||c.has(p)||(c.add(p),u(p.parentNode))};a.forEach(u);var h=function(p){!p||d.has(p)||Array.prototype.forEach.call(p.children,function(m){if(c.has(m))h(m);else try{var x=m.getAttribute(r),w=x!==null&&x!=="false",f=(N1.get(m)||0)+1,M=(i.get(m)||0)+1;N1.set(m,f),i.set(m,M),l.push(m),f===1&&w&&zo.set(m,!0),M===1&&m.setAttribute(n,"true"),w||m.setAttribute(r,"true")}catch(k){console.error("aria-hidden: cannot operate on ",m,k)}})};return h(t),c.clear(),qM++,function(){l.forEach(function(p){var m=N1.get(p)-1,x=i.get(p)-1;N1.set(p,m),i.set(p,x),m||(zo.has(p)||p.removeAttribute(r),zo.delete(p)),x||p.removeAttribute(n)}),qM--,qM||(N1=new WeakMap,N1=new WeakMap,zo=new WeakMap,Ao={})}},EB=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=BB(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live], script"))),FB(r,a,n,"aria-hidden")):function(){return null}},It=function(){return It=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},It.apply(this,arguments)};function fz(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function DB(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Kx="right-scroll-bar-position",Qx="width-before-scroll-bar",OB="with-scroll-bars-hidden",NB="--removed-body-scroll-bar-size";function BM(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function _B(e,t){var n=g.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var UB=typeof window<"u"?g.useLayoutEffect:g.useEffect,tI=new WeakMap;function WB(e,t){var n=_B(null,function(r){return e.forEach(function(a){return BM(a,r)})});return UB(function(){var r=tI.get(n);if(r){var a=new Set(r),i=new Set(e),l=n.current;a.forEach(function(c){i.has(c)||BM(c,null)}),i.forEach(function(c){a.has(c)||BM(c,l)})}tI.set(n,e)},[e]),n}function ZB(e){return e}function GB(e,t){t===void 0&&(t=ZB);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,r);return n.push(l),function(){n=n.filter(function(c){return c!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(c){return i(c)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var c=n;n=[],c.forEach(i),l=n}var d=function(){var h=l;l=[],h.forEach(i)},u=function(){return Promise.resolve().then(d)};u(),n={push:function(h){l.push(h),u()},filter:function(h){return l=l.filter(h),n}}}};return a}function $B(e){e===void 0&&(e={});var t=GB(null);return t.options=It({async:!0,ssr:!1},e),t}var mz=function(e){var t=e.sideCar,n=fz(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return g.createElement(r,It({},n))};mz.isSideCarExport=!0;function XB(e,t){return e.useMedium(t),mz}var vz=$B(),VM=function(){},Q9=g.forwardRef(function(e,t){var n=g.useRef(null),r=g.useState({onScrollCapture:VM,onWheelCapture:VM,onTouchMoveCapture:VM}),a=r[0],i=r[1],l=e.forwardProps,c=e.children,d=e.className,u=e.removeScrollBar,h=e.enabled,p=e.shards,m=e.sideCar,x=e.noRelative,w=e.noIsolation,f=e.inert,M=e.allowPinchZoom,k=e.as,y=k===void 0?"div":k,v=e.gapMode,L=fz(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=m,I=WB([n,t]),S=It(It({},L),a);return g.createElement(g.Fragment,null,h&&g.createElement(C,{sideCar:vz,removeScrollBar:u,shards:p,noRelative:x,noIsolation:w,inert:f,setCallbacks:i,allowPinchZoom:!!M,lockRef:n,gapMode:v}),l?g.cloneElement(g.Children.only(c),It(It({},S),{ref:I})):g.createElement(y,It({},S,{className:d,ref:I}),c))});Q9.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Q9.classNames={fullWidth:Qx,zeroRight:Kx};var KB=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function QB(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=KB();return t&&e.setAttribute("nonce",t),e}function YB(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function JB(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var eV=function(){var e=0,t=null;return{add:function(n){e==0&&(t=QB())&&(YB(t,n),JB(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},tV=function(){var e=eV();return function(t,n){g.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},gz=function(){var e=tV(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},nV={left:0,top:0,right:0,gap:0},FM=function(e){return parseInt(e||"",10)||0},rV=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[FM(n),FM(r),FM(a)]},aV=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return nV;var t=rV(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},oV=gz(),Ir="data-scroll-locked",iV=function(e,t,n,r){var a=e.left,i=e.top,l=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(OB,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(Ir,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Kx,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Qx,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Kx," .").concat(Kx,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Qx," .").concat(Qx,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Ir,`] {
    `).concat(NB,": ").concat(c,`px;
  }
`)},nI=function(){var e=parseInt(document.body.getAttribute(Ir)||"0",10);return isFinite(e)?e:0},lV=function(){g.useEffect(function(){return document.body.setAttribute(Ir,(nI()+1).toString()),function(){var e=nI()-1;e<=0?document.body.removeAttribute(Ir):document.body.setAttribute(Ir,e.toString())}},[])},cV=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;lV();var i=g.useMemo(function(){return aV(a)},[a]);return g.createElement(oV,{styles:iV(i,!t,a,n?"":"!important")})},Uw=!1;if(typeof window<"u")try{var Po=Object.defineProperty({},"passive",{get:function(){return Uw=!0,!0}});window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{Uw=!1}var _1=Uw?{passive:!1}:!1,sV=function(e){return e.tagName==="TEXTAREA"},xz=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!sV(e)&&n[t]==="visible")},dV=function(e){return xz(e,"overflowY")},uV=function(e){return xz(e,"overflowX")},rI=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=Mz(e,r);if(a){var i=wz(e,r),l=i[1],c=i[2];if(l>c)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},hV=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},yV=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Mz=function(e,t){return e==="v"?dV(t):uV(t)},wz=function(e,t){return e==="v"?hV(t):yV(t)},pV=function(e,t){return e==="h"&&t==="rtl"?-1:1},kV=function(e,t,n,r,a){var i=pV(e,window.getComputedStyle(t).direction),l=i*r,c=n.target,d=t.contains(c),u=!1,h=l>0,p=0,m=0;do{if(!c)break;var x=wz(e,c),w=x[0],f=x[1],M=x[2],k=f-M-i*w;(w||k)&&Mz(e,c)&&(p+=k,m+=w);var y=c.parentNode;c=y&&y.nodeType===Node.DOCUMENT_FRAGMENT_NODE?y.host:y}while(!d&&c!==document.body||d&&(t.contains(c)||t===c));return(h&&Math.abs(p)<1||!h&&Math.abs(m)<1)&&(u=!0),u},Ro=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},aI=function(e){return[e.deltaX,e.deltaY]},oI=function(e){return e&&"current"in e?e.current:e},fV=function(e,t){return e[0]===t[0]&&e[1]===t[1]},mV=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},vV=0,U1=[];function gV(e){var t=g.useRef([]),n=g.useRef([0,0]),r=g.useRef(),a=g.useState(vV++)[0],i=g.useState(gz)[0],l=g.useRef(e);g.useEffect(function(){l.current=e},[e]),g.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var f=DB([e.lockRef.current],(e.shards||[]).map(oI),!0).filter(Boolean);return f.forEach(function(M){return M.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),f.forEach(function(M){return M.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=g.useCallback(function(f,M){if("touches"in f&&f.touches.length===2||f.type==="wheel"&&f.ctrlKey)return!l.current.allowPinchZoom;var k=Ro(f),y=n.current,v="deltaX"in f?f.deltaX:y[0]-k[0],L="deltaY"in f?f.deltaY:y[1]-k[1],C,I=f.target,S=Math.abs(v)>Math.abs(L)?"h":"v";if("touches"in f&&S==="h"&&I.type==="range")return!1;var j=window.getSelection(),T=j&&j.anchorNode,P=T?T===I||T.contains(I):!1;if(P)return!1;var F=rI(S,I);if(!F)return!0;if(F?C=S:(C=S==="v"?"h":"v",F=rI(S,I)),!F)return!1;if(!r.current&&"changedTouches"in f&&(v||L)&&(r.current=C),!C)return!0;var H=r.current||C;return kV(H,M,f,H==="h"?v:L)},[]),d=g.useCallback(function(f){var M=f;if(!(!U1.length||U1[U1.length-1]!==i)){var k="deltaY"in M?aI(M):Ro(M),y=t.current.filter(function(C){return C.name===M.type&&(C.target===M.target||M.target===C.shadowParent)&&fV(C.delta,k)})[0];if(y&&y.should){M.cancelable&&M.preventDefault();return}if(!y){var v=(l.current.shards||[]).map(oI).filter(Boolean).filter(function(C){return C.contains(M.target)}),L=v.length>0?c(M,v[0]):!l.current.noIsolation;L&&M.cancelable&&M.preventDefault()}}},[]),u=g.useCallback(function(f,M,k,y){var v={name:f,delta:M,target:k,should:y,shadowParent:xV(k)};t.current.push(v),setTimeout(function(){t.current=t.current.filter(function(L){return L!==v})},1)},[]),h=g.useCallback(function(f){n.current=Ro(f),r.current=void 0},[]),p=g.useCallback(function(f){u(f.type,aI(f),f.target,c(f,e.lockRef.current))},[]),m=g.useCallback(function(f){u(f.type,Ro(f),f.target,c(f,e.lockRef.current))},[]);g.useEffect(function(){return U1.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:m}),document.addEventListener("wheel",d,_1),document.addEventListener("touchmove",d,_1),document.addEventListener("touchstart",h,_1),function(){U1=U1.filter(function(f){return f!==i}),document.removeEventListener("wheel",d,_1),document.removeEventListener("touchmove",d,_1),document.removeEventListener("touchstart",h,_1)}},[]);var x=e.removeScrollBar,w=e.inert;return g.createElement(g.Fragment,null,w?g.createElement(i,{styles:mV(a)}):null,x?g.createElement(cV,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function xV(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const MV=XB(vz,gV);var Lz=g.forwardRef(function(e,t){return g.createElement(Q9,It({},e,{ref:t,sideCar:MV}))});Lz.classNames=Q9.classNames;var wV=[" ","Enter","ArrowUp","ArrowDown"],LV=[" ","Enter"],V1="Select",[Y9,J9,CV]=_T(V1),[Zr]=QL(V1,[CV,az]),eM=az(),[SV,Cn]=Zr(V1),[IV,bV]=Zr(V1),Cz=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:a,onOpenChange:i,value:l,defaultValue:c,onValueChange:d,dir:u,name:h,autoComplete:p,disabled:m,required:x,form:w}=e,f=eM(t),[M,k]=g.useState(null),[y,v]=g.useState(null),[L,C]=g.useState(!1),I=WT(u),[S,j]=eI({prop:r,defaultProp:a??!1,onChange:i,caller:V1}),[T,P]=eI({prop:l,defaultProp:c,onChange:d,caller:V1}),F=g.useRef(null),H=M?w||!!M.closest("form"):!0,[_,N]=g.useState(new Set),X=Array.from(_).map(E=>E.props.value).join(";");return s.jsx(SB,{...f,children:s.jsxs(SV,{required:x,scope:t,trigger:M,onTriggerChange:k,valueNode:y,onValueNodeChange:v,valueNodeHasChildren:L,onValueNodeHasChildrenChange:C,contentId:YL(),value:T,onValueChange:P,open:S,onOpenChange:j,dir:I,triggerPointerDownPosRef:F,disabled:m,children:[s.jsx(Y9.Provider,{scope:t,children:s.jsx(IV,{scope:e.__scopeSelect,onNativeOptionAdd:g.useCallback(E=>{N(U=>new Set(U).add(E))},[]),onNativeOptionRemove:g.useCallback(E=>{N(U=>{const b=new Set(U);return b.delete(E),b})},[]),children:n})}),H?s.jsxs(Zz,{"aria-hidden":!0,required:x,tabIndex:-1,name:h,autoComplete:p,value:T,onChange:E=>P(E.target.value),disabled:m,form:w,children:[T===void 0?s.jsx("option",{value:""}):null,Array.from(_)]},X):null]})})};Cz.displayName=V1;var Sz="SelectTrigger",Iz=g.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...a}=e,i=eM(n),l=Cn(Sz,n),c=l.disabled||r,d=Le(t,l.onTriggerChange),u=J9(n),h=g.useRef("touch"),[p,m,x]=$z(f=>{const M=u().filter(v=>!v.disabled),k=M.find(v=>v.value===l.value),y=Xz(M,f,k);y!==void 0&&l.onValueChange(y.value)}),w=f=>{c||(l.onOpenChange(!0),x()),f&&(l.triggerPointerDownPosRef.current={x:Math.round(f.pageX),y:Math.round(f.pageY)})};return s.jsx(IB,{asChild:!0,...i,children:s.jsx(ye.button,{type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":Gz(l.value)?"":void 0,...a,ref:d,onClick:pe(a.onClick,f=>{f.currentTarget.focus(),h.current!=="mouse"&&w(f)}),onPointerDown:pe(a.onPointerDown,f=>{h.current=f.pointerType;const M=f.target;M.hasPointerCapture(f.pointerId)&&M.releasePointerCapture(f.pointerId),f.button===0&&f.ctrlKey===!1&&f.pointerType==="mouse"&&(w(f),f.preventDefault())}),onKeyDown:pe(a.onKeyDown,f=>{const M=p.current!=="";!(f.ctrlKey||f.altKey||f.metaKey)&&f.key.length===1&&m(f.key),!(M&&f.key===" ")&&wV.includes(f.key)&&(w(),f.preventDefault())})})})});Iz.displayName=Sz;var bz="SelectValue",jz=g.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:a,children:i,placeholder:l="",...c}=e,d=Cn(bz,n),{onValueNodeHasChildrenChange:u}=d,h=i!==void 0,p=Le(t,d.onValueNodeChange);return Ne(()=>{u(h)},[u,h]),s.jsx(ye.span,{...c,ref:p,style:{pointerEvents:"none"},children:Gz(d.value)?s.jsx(s.Fragment,{children:l}):i})});jz.displayName=bz;var jV="SelectIcon",zz=g.forwardRef((e,t)=>{const{__scopeSelect:n,children:r,...a}=e;return s.jsx(ye.span,{"aria-hidden":!0,...a,ref:t,children:r||"▼"})});zz.displayName=jV;var zV="SelectPortal",Az=e=>s.jsx(yz,{asChild:!0,...e});Az.displayName=zV;var F1="SelectContent",Pz=g.forwardRef((e,t)=>{const n=Cn(F1,e.__scopeSelect),[r,a]=g.useState();if(Ne(()=>{a(new DocumentFragment)},[]),!n.open){const i=r;return i?Fr.createPortal(s.jsx(Rz,{scope:e.__scopeSelect,children:s.jsx(Y9.Slot,{scope:e.__scopeSelect,children:s.jsx("div",{children:e.children})})}),i):null}return s.jsx(Hz,{...e,ref:t})});Pz.displayName=F1;var ct=10,[Rz,Sn]=Zr(F1),AV="SelectContentImpl",PV=C9("SelectContent.RemoveScroll"),Hz=g.forwardRef((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:i,onPointerDownOutside:l,side:c,sideOffset:d,align:u,alignOffset:h,arrowPadding:p,collisionBoundary:m,collisionPadding:x,sticky:w,hideWhenDetached:f,avoidCollisions:M,...k}=e,y=Cn(F1,n),[v,L]=g.useState(null),[C,I]=g.useState(null),S=Le(t,B=>L(B)),[j,T]=g.useState(null),[P,F]=g.useState(null),H=J9(n),[_,N]=g.useState(!1),X=g.useRef(!1);g.useEffect(()=>{if(v)return EB(v)},[v]),nq();const E=g.useCallback(B=>{const[ee,...Se]=H().map(Q=>Q.ref.current),[Y]=Se.slice(-1),K=document.activeElement;for(const Q of B)if(Q===K||(Q==null||Q.scrollIntoView({block:"nearest"}),Q===ee&&C&&(C.scrollTop=0),Q===Y&&C&&(C.scrollTop=C.scrollHeight),Q==null||Q.focus(),document.activeElement!==K))return},[H,C]),U=g.useCallback(()=>E([j,v]),[E,j,v]);g.useEffect(()=>{_&&U()},[_,U]);const{onOpenChange:b,triggerPointerDownPosRef:A}=y;g.useEffect(()=>{if(v){let B={x:0,y:0};const ee=Y=>{var K,Q;B={x:Math.abs(Math.round(Y.pageX)-(((K=A.current)==null?void 0:K.x)??0)),y:Math.abs(Math.round(Y.pageY)-(((Q=A.current)==null?void 0:Q.y)??0))}},Se=Y=>{B.x<=10&&B.y<=10?Y.preventDefault():v.contains(Y.target)||b(!1),document.removeEventListener("pointermove",ee),A.current=null};return A.current!==null&&(document.addEventListener("pointermove",ee),document.addEventListener("pointerup",Se,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",Se,{capture:!0})}}},[v,b,A]),g.useEffect(()=>{const B=()=>b(!1);return window.addEventListener("blur",B),window.addEventListener("resize",B),()=>{window.removeEventListener("blur",B),window.removeEventListener("resize",B)}},[b]);const[q,D]=$z(B=>{const ee=H().filter(K=>!K.disabled),Se=ee.find(K=>K.ref.current===document.activeElement),Y=Xz(ee,B,Se);Y&&setTimeout(()=>Y.ref.current.focus())}),ae=g.useCallback((B,ee,Se)=>{const Y=!X.current&&!Se;(y.value!==void 0&&y.value===ee||Y)&&(T(B),Y&&(X.current=!0))},[y.value]),mt=g.useCallback(()=>v==null?void 0:v.focus(),[v]),Ce=g.useCallback((B,ee,Se)=>{const Y=!X.current&&!Se;(y.value!==void 0&&y.value===ee||Y)&&F(B)},[y.value]),vt=r==="popper"?Ww:Tz,Ae=vt===Ww?{side:c,sideOffset:d,align:u,alignOffset:h,arrowPadding:p,collisionBoundary:m,collisionPadding:x,sticky:w,hideWhenDetached:f,avoidCollisions:M}:{};return s.jsx(Rz,{scope:n,content:v,viewport:C,onViewportChange:I,itemRefCallback:ae,selectedItem:j,onItemLeave:mt,itemTextRefCallback:Ce,focusSelectedItem:U,selectedItemText:P,position:r,isPositioned:_,searchRef:q,children:s.jsx(Lz,{as:PV,allowPinchZoom:!0,children:s.jsx(_j,{asChild:!0,trapped:y.open,onMountAutoFocus:B=>{B.preventDefault()},onUnmountAutoFocus:pe(a,B=>{var ee;(ee=y.trigger)==null||ee.focus({preventScroll:!0}),B.preventDefault()}),children:s.jsx(Oj,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:B=>B.preventDefault(),onDismiss:()=>y.onOpenChange(!1),children:s.jsx(vt,{role:"listbox",id:y.contentId,"data-state":y.open?"open":"closed",dir:y.dir,onContextMenu:B=>B.preventDefault(),...k,...Ae,onPlaced:()=>N(!0),ref:S,style:{display:"flex",flexDirection:"column",outline:"none",...k.style},onKeyDown:pe(k.onKeyDown,B=>{const ee=B.ctrlKey||B.altKey||B.metaKey;if(B.key==="Tab"&&B.preventDefault(),!ee&&B.key.length===1&&D(B.key),["ArrowUp","ArrowDown","Home","End"].includes(B.key)){let Y=H().filter(K=>!K.disabled).map(K=>K.ref.current);if(["ArrowUp","End"].includes(B.key)&&(Y=Y.slice().reverse()),["ArrowUp","ArrowDown"].includes(B.key)){const K=B.target,Q=Y.indexOf(K);Y=Y.slice(Q+1)}setTimeout(()=>E(Y)),B.preventDefault()}})})})})})})});Hz.displayName=AV;var RV="SelectItemAlignedPosition",Tz=g.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:r,...a}=e,i=Cn(F1,n),l=Sn(F1,n),[c,d]=g.useState(null),[u,h]=g.useState(null),p=Le(t,S=>h(S)),m=J9(n),x=g.useRef(!1),w=g.useRef(!0),{viewport:f,selectedItem:M,selectedItemText:k,focusSelectedItem:y}=l,v=g.useCallback(()=>{if(i.trigger&&i.valueNode&&c&&u&&f&&M&&k){const S=i.trigger.getBoundingClientRect(),j=u.getBoundingClientRect(),T=i.valueNode.getBoundingClientRect(),P=k.getBoundingClientRect();if(i.dir!=="rtl"){const K=P.left-j.left,Q=T.left-K,_e=S.left-Q,gt=S.width+_e,Gr=Math.max(gt,j.width),$r=window.innerWidth-ct,Xr=TS(Q,[ct,Math.max(ct,$r-Gr)]);c.style.minWidth=gt+"px",c.style.left=Xr+"px"}else{const K=j.right-P.right,Q=window.innerWidth-T.right-K,_e=window.innerWidth-S.right-Q,gt=S.width+_e,Gr=Math.max(gt,j.width),$r=window.innerWidth-ct,Xr=TS(Q,[ct,Math.max(ct,$r-Gr)]);c.style.minWidth=gt+"px",c.style.right=Xr+"px"}const F=m(),H=window.innerHeight-ct*2,_=f.scrollHeight,N=window.getComputedStyle(u),X=parseInt(N.borderTopWidth,10),E=parseInt(N.paddingTop,10),U=parseInt(N.borderBottomWidth,10),b=parseInt(N.paddingBottom,10),A=X+E+_+b+U,q=Math.min(M.offsetHeight*5,A),D=window.getComputedStyle(f),ae=parseInt(D.paddingTop,10),mt=parseInt(D.paddingBottom,10),Ce=S.top+S.height/2-ct,vt=H-Ce,Ae=M.offsetHeight/2,B=M.offsetTop+Ae,ee=X+E+B,Se=A-ee;if(ee<=Ce){const K=F.length>0&&M===F[F.length-1].ref.current;c.style.bottom="0px";const Q=u.clientHeight-f.offsetTop-f.offsetHeight,_e=Math.max(vt,Ae+(K?mt:0)+Q+U),gt=ee+_e;c.style.height=gt+"px"}else{const K=F.length>0&&M===F[0].ref.current;c.style.top="0px";const _e=Math.max(Ce,X+f.offsetTop+(K?ae:0)+Ae)+Se;c.style.height=_e+"px",f.scrollTop=ee-Ce+f.offsetTop}c.style.margin=`${ct}px 0`,c.style.minHeight=q+"px",c.style.maxHeight=H+"px",r==null||r(),requestAnimationFrame(()=>x.current=!0)}},[m,i.trigger,i.valueNode,c,u,f,M,k,i.dir,r]);Ne(()=>v(),[v]);const[L,C]=g.useState();Ne(()=>{u&&C(window.getComputedStyle(u).zIndex)},[u]);const I=g.useCallback(S=>{S&&w.current===!0&&(v(),y==null||y(),w.current=!1)},[v,y]);return s.jsx(TV,{scope:n,contentWrapper:c,shouldExpandOnScrollRef:x,onScrollButtonChange:I,children:s.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:L},children:s.jsx(ye.div,{...a,ref:p,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});Tz.displayName=RV;var HV="SelectPopperPosition",Ww=g.forwardRef((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:a=ct,...i}=e,l=eM(n);return s.jsx(bB,{...l,...i,ref:t,align:r,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ww.displayName=HV;var[TV,lC]=Zr(F1,{}),Zw="SelectViewport",qz=g.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:r,...a}=e,i=Sn(Zw,n),l=lC(Zw,n),c=Le(t,i.onViewportChange),d=g.useRef(0);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),s.jsx(Y9.Slot,{scope:n,children:s.jsx(ye.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...a.style},onScroll:pe(a.onScroll,u=>{const h=u.currentTarget,{contentWrapper:p,shouldExpandOnScrollRef:m}=l;if(m!=null&&m.current&&p){const x=Math.abs(d.current-h.scrollTop);if(x>0){const w=window.innerHeight-ct*2,f=parseFloat(p.style.minHeight),M=parseFloat(p.style.height),k=Math.max(f,M);if(k<w){const y=k+x,v=Math.min(w,y),L=y-v;p.style.height=v+"px",p.style.bottom==="0px"&&(h.scrollTop=L>0?L:0,p.style.justifyContent="flex-end")}}}d.current=h.scrollTop})})})]})});qz.displayName=Zw;var Bz="SelectGroup",[qV,BV]=Zr(Bz),VV=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,a=YL();return s.jsx(qV,{scope:n,id:a,children:s.jsx(ye.div,{role:"group","aria-labelledby":a,...r,ref:t})})});VV.displayName=Bz;var Vz="SelectLabel",FV=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,a=BV(Vz,n);return s.jsx(ye.div,{id:a.id,...r,ref:t})});FV.displayName=Vz;var z9="SelectItem",[EV,Fz]=Zr(z9),Ez=g.forwardRef((e,t)=>{const{__scopeSelect:n,value:r,disabled:a=!1,textValue:i,...l}=e,c=Cn(z9,n),d=Sn(z9,n),u=c.value===r,[h,p]=g.useState(i??""),[m,x]=g.useState(!1),w=Le(t,y=>{var v;return(v=d.itemRefCallback)==null?void 0:v.call(d,y,r,a)}),f=YL(),M=g.useRef("touch"),k=()=>{a||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return s.jsx(EV,{scope:n,value:r,disabled:a,textId:f,isSelected:u,onItemTextChange:g.useCallback(y=>{p(v=>v||((y==null?void 0:y.textContent)??"").trim())},[]),children:s.jsx(Y9.ItemSlot,{scope:n,value:r,disabled:a,textValue:h,children:s.jsx(ye.div,{role:"option","aria-labelledby":f,"data-highlighted":m?"":void 0,"aria-selected":u&&m,"data-state":u?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...l,ref:w,onFocus:pe(l.onFocus,()=>x(!0)),onBlur:pe(l.onBlur,()=>x(!1)),onClick:pe(l.onClick,()=>{M.current!=="mouse"&&k()}),onPointerUp:pe(l.onPointerUp,()=>{M.current==="mouse"&&k()}),onPointerDown:pe(l.onPointerDown,y=>{M.current=y.pointerType}),onPointerMove:pe(l.onPointerMove,y=>{var v;M.current=y.pointerType,a?(v=d.onItemLeave)==null||v.call(d):M.current==="mouse"&&y.currentTarget.focus({preventScroll:!0})}),onPointerLeave:pe(l.onPointerLeave,y=>{var v;y.currentTarget===document.activeElement&&((v=d.onItemLeave)==null||v.call(d))}),onKeyDown:pe(l.onKeyDown,y=>{var L;((L=d.searchRef)==null?void 0:L.current)!==""&&y.key===" "||(LV.includes(y.key)&&k(),y.key===" "&&y.preventDefault())})})})})});Ez.displayName=z9;var da="SelectItemText",Dz=g.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:a,...i}=e,l=Cn(da,n),c=Sn(da,n),d=Fz(da,n),u=bV(da,n),[h,p]=g.useState(null),m=Le(t,k=>p(k),d.onItemTextChange,k=>{var y;return(y=c.itemTextRefCallback)==null?void 0:y.call(c,k,d.value,d.disabled)}),x=h==null?void 0:h.textContent,w=g.useMemo(()=>s.jsx("option",{value:d.value,disabled:d.disabled,children:x},d.value),[d.disabled,d.value,x]),{onNativeOptionAdd:f,onNativeOptionRemove:M}=u;return Ne(()=>(f(w),()=>M(w)),[f,M,w]),s.jsxs(s.Fragment,{children:[s.jsx(ye.span,{id:d.textId,...i,ref:m}),d.isSelected&&l.valueNode&&!l.valueNodeHasChildren?Fr.createPortal(i.children,l.valueNode):null]})});Dz.displayName=da;var Oz="SelectItemIndicator",Nz=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return Fz(Oz,n).isSelected?s.jsx(ye.span,{"aria-hidden":!0,...r,ref:t}):null});Nz.displayName=Oz;var Gw="SelectScrollUpButton",_z=g.forwardRef((e,t)=>{const n=Sn(Gw,e.__scopeSelect),r=lC(Gw,e.__scopeSelect),[a,i]=g.useState(!1),l=Le(t,r.onScrollButtonChange);return Ne(()=>{if(n.viewport&&n.isPositioned){let c=function(){const u=d.scrollTop>0;i(u)};const d=n.viewport;return c(),d.addEventListener("scroll",c),()=>d.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),a?s.jsx(Wz,{...e,ref:l,onAutoScroll:()=>{const{viewport:c,selectedItem:d}=n;c&&d&&(c.scrollTop=c.scrollTop-d.offsetHeight)}}):null});_z.displayName=Gw;var $w="SelectScrollDownButton",Uz=g.forwardRef((e,t)=>{const n=Sn($w,e.__scopeSelect),r=lC($w,e.__scopeSelect),[a,i]=g.useState(!1),l=Le(t,r.onScrollButtonChange);return Ne(()=>{if(n.viewport&&n.isPositioned){let c=function(){const u=d.scrollHeight-d.clientHeight,h=Math.ceil(d.scrollTop)<u;i(h)};const d=n.viewport;return c(),d.addEventListener("scroll",c),()=>d.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),a?s.jsx(Wz,{...e,ref:l,onAutoScroll:()=>{const{viewport:c,selectedItem:d}=n;c&&d&&(c.scrollTop=c.scrollTop+d.offsetHeight)}}):null});Uz.displayName=$w;var Wz=g.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:r,...a}=e,i=Sn("SelectScrollButton",n),l=g.useRef(null),c=J9(n),d=g.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return g.useEffect(()=>()=>d(),[d]),Ne(()=>{var h;const u=c().find(p=>p.ref.current===document.activeElement);(h=u==null?void 0:u.ref.current)==null||h.scrollIntoView({block:"nearest"})},[c]),s.jsx(ye.div,{"aria-hidden":!0,...a,ref:t,style:{flexShrink:0,...a.style},onPointerDown:pe(a.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(r,50))}),onPointerMove:pe(a.onPointerMove,()=>{var u;(u=i.onItemLeave)==null||u.call(i),l.current===null&&(l.current=window.setInterval(r,50))}),onPointerLeave:pe(a.onPointerLeave,()=>{d()})})}),DV="SelectSeparator",OV=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return s.jsx(ye.div,{"aria-hidden":!0,...r,ref:t})});OV.displayName=DV;var Xw="SelectArrow",NV=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,a=eM(n),i=Cn(Xw,n),l=Sn(Xw,n);return i.open&&l.position==="popper"?s.jsx(jB,{...a,...r,ref:t}):null});NV.displayName=Xw;var _V="SelectBubbleInput",Zz=g.forwardRef(({__scopeSelect:e,value:t,...n},r)=>{const a=g.useRef(null),i=Le(r,a),l=HB(t);return g.useEffect(()=>{const c=a.current;if(!c)return;const d=window.HTMLSelectElement.prototype,h=Object.getOwnPropertyDescriptor(d,"value").set;if(l!==t&&h){const p=new Event("change",{bubbles:!0});h.call(c,t),c.dispatchEvent(p)}},[l,t]),s.jsx(ye.select,{...n,style:{...pz,...n.style},ref:i,defaultValue:t})});Zz.displayName=_V;function Gz(e){return e===""||e===void 0}function $z(e){const t=q1(e),n=g.useRef(""),r=g.useRef(0),a=g.useCallback(l=>{const c=n.current+l;t(c),function d(u){n.current=u,window.clearTimeout(r.current),u!==""&&(r.current=window.setTimeout(()=>d(""),1e3))}(c)},[t]),i=g.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return g.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,a,i]}function Xz(e,t,n){const a=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let l=UV(e,Math.max(i,0));a.length===1&&(l=l.filter(u=>u!==n));const d=l.find(u=>u.textValue.toLowerCase().startsWith(a.toLowerCase()));return d!==n?d:void 0}function UV(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var WV=Cz,Kz=Iz,ZV=jz,GV=zz,$V=Az,Qz=Pz,XV=qz,Yz=Ez,KV=Dz,QV=Nz,YV=_z,JV=Uz;const eF=Rj("select-trigger relative",{variants:{size:{sm:"select-trigger--sm",md:"select-trigger--md",lg:"select-trigger--lg"},status:{default:"",error:"select-trigger--error",success:"select-trigger--success"}},defaultVariants:{size:"md",status:"default"}}),tF=WV,nF=ZV,Jz=g.forwardRef(({className:e,size:t="md",status:n="default",children:r,...a},i)=>s.jsxs(Kz,{ref:i,className:nt(eF({size:t,status:n}),e),...a,children:[r,s.jsx(GV,{asChild:!0,children:s.jsx(b1,{className:"select-trigger__icon"})})]}));Jz.displayName=Kz.displayName;const eA=g.forwardRef(({className:e,children:t,position:n="popper",...r},a)=>s.jsx($V,{children:s.jsxs(Qz,{ref:a,className:nt("select-content",e),position:n,...r,children:[s.jsx(YV,{className:"select-scroll-button",children:s.jsx(pr,{size:16})}),s.jsx(XV,{className:nt("select-viewport",n==="popper"&&"select-viewport--popper"),children:t}),s.jsx(JV,{className:"select-scroll-button",children:s.jsx(b1,{size:16})})]})}));eA.displayName=Qz.displayName;const tA=g.forwardRef(({className:e,children:t,...n},r)=>s.jsxs(Yz,{ref:r,className:nt("select-item",e),...n,children:[s.jsx("span",{className:"select-item__indicator",children:s.jsx(QV,{children:s.jsx(yr,{size:16})})}),s.jsx(KV,{children:t})]}));tA.displayName=Yz.displayName;const W1=g.forwardRef(({size:e="md",status:t="default",label:n,hint:r,options:a,placeholder:i,className:l,disabled:c,value:d,defaultValue:u,onValueChange:h,name:p,required:m},x)=>{const w=g.useId(),f=g.useId(),M=`${w}-trigger`,k=r?`${w}-${f}`:void 0;return s.jsxs("div",{className:"input-wrapper",children:[n&&s.jsx("label",{htmlFor:M,className:nt("input-label",{required:m}),children:n}),s.jsxs(tF,{value:d,defaultValue:u,onValueChange:h,disabled:c,name:p,required:m,children:[s.jsx(Jz,{id:M,ref:x,size:e,status:t,className:l,"aria-describedby":k,"aria-invalid":t==="error"?!0:void 0,children:s.jsx(nF,{placeholder:i})}),s.jsx(eA,{children:a.map(y=>s.jsx(tA,{value:y.value,disabled:y.disabled,children:y.label},y.value))})]}),r&&s.jsx("span",{id:k,className:nt("input-hint",{[`input-hint--${t}`]:t!=="default"}),children:r})]})});W1.displayName="Select";const Z1=V.forwardRef(({label:e,indeterminate:t,className:n,onChange:r,onCheckedChange:a,disabled:i,...l},c)=>{const d=V.useRef(null),u=h=>{d.current=h,typeof c=="function"?c(h):c&&(c.current=h)};return V.useEffect(()=>{d.current&&(d.current.indeterminate=!!t)},[t]),s.jsxs("label",{className:it("checkbox-group",n),children:[s.jsx("input",{ref:u,type:"checkbox",disabled:i,onChange:h=>{r==null||r(h),a==null||a(h.currentTarget.indeterminate?"indeterminate":h.currentTarget.checked)},...l}),s.jsx("span",{className:"checkbox-box",children:t?s.jsx(Pa,{size:10,strokeWidth:3,color:"white"}):s.jsx(yr,{size:10,strokeWidth:3,color:"white"})}),e&&s.jsx("span",{className:"checkbox-label",children:e})]})});Z1.displayName="Checkbox";const ua=V.forwardRef(({label:e,className:t,...n},r)=>s.jsxs("label",{className:it("radio-group",t),children:[s.jsx("input",{type:"radio",ref:r,...n}),s.jsx("span",{className:"radio-dot"}),e&&s.jsx("span",{className:"radio-label",children:e})]}));ua.displayName="Radio";const M1=V.forwardRef(({label:e,size:t="md",className:n,onChange:r,onCheckedChange:a,...i},l)=>s.jsxs("label",{className:it("switch",{[`switch--${t}`]:t!=="md"},n),children:[s.jsx("input",{type:"checkbox",ref:l,onChange:c=>{r==null||r(c),a==null||a(c.currentTarget.checked)},...i}),s.jsx("span",{className:"switch-track",children:s.jsx("span",{className:"switch-thumb"})}),e&&s.jsx("span",{className:"switch-label",children:e})]}));M1.displayName="Switch";const rF=[{name:"options",type:"{ value: string; label: string; disabled?: boolean }[]",required:!0,desc:"选项数据"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",desc:"选择器尺寸，对齐 Input 的 small / medium / large 规格"},{name:"label",type:"string",desc:"标签文本"},{name:"hint",type:"string",desc:"提示信息"},{name:"placeholder",type:"string",desc:"占位文本（首选项不可选）"},{name:"disabled",type:"boolean",desc:"禁用状态"}],Ho=[{value:"beijing",label:"北京"},{value:"shanghai",label:"上海"},{value:"guangzhou",label:"广州"},{value:"shenzhen",label:"深圳"},{value:"hangzhou",label:"杭州",disabled:!0}],aF=[{value:"gpt4",label:"GPT-4o"},{value:"claude",label:"Claude 3.5 Sonnet"},{value:"qwen",label:"通义千问 Max"},{value:"baidu",label:"文心一言 4.0"}];function oF(){const[e,t]=V.useState(""),[n,r]=V.useState("gpt4"),[a,i]=V.useState(!0),[l,c]=V.useState(!1),[d,u]=V.useState("option1"),[h,p]=V.useState(!0),[m,x]=V.useState(!1);return s.jsxs("div",{children:[s.jsx(Pt,{badge:"数据录入",title:"Select / Checkbox / Radio / Switch",desc:"选择类控件用于从一组固定选项中做出选择。Select 适用于选项较多时，Checkbox 用于多选，Radio 用于单选，Switch 用于开关切换。"}),s.jsx(ie,{id:"select-basic",title:"Select 选择器",desc:"从下拉列表中选择一个选项，支持禁用选项、placeholder、label 等配置。在模型选择、区域配置等场景中广泛使用。尺寸与 Input 保持一致：small=28px、medium=32px、large=40px。",preview:s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{width:180},children:s.jsx(W1,{size:"sm",options:Ho,placeholder:"小尺寸"})}),s.jsx("div",{style:{width:200},children:s.jsx(W1,{options:Ho,placeholder:"请选择城市",value:e,onValueChange:t,label:"城市"})}),s.jsx("div",{style:{width:220},children:s.jsx(W1,{options:aF,value:n,onValueChange:r,label:"AI 模型",hint:"选择对话所使用的底层模型"})}),s.jsx("div",{style:{width:220},children:s.jsx(W1,{size:"lg",options:Ho,label:"大尺寸",defaultValue:"beijing"})}),s.jsx("div",{style:{width:180},children:s.jsx(W1,{size:"sm",options:Ho,label:"禁用状态",disabled:!0,defaultValue:"beijing"})})]}),previewCol:!0,code:`const [city, setCity] = useState('')

<Select size="sm" options={regionOptions} placeholder="小尺寸" />

<Select
  label="城市"
  options={[
    { value: 'beijing', label: '北京' },
    { value: 'shanghai', label: '上海' },
    { value: 'hangzhou', label: '杭州', disabled: true },
  ]}
  placeholder="请选择城市"
  value={city}
  onValueChange={setCity}
/>

<Select size="lg" options={regionOptions} label="大尺寸" />`}),s.jsx(ie,{id:"checkbox",title:"Checkbox 多选框",desc:"用于同时选择多个选项，或表示「同意条款」等单独勾选场景。支持不确定状态（indeterminate），常用于表格全选场景。",preview:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[s.jsx(Z1,{label:"已阅读并同意服务条款",checked:a,onChange:w=>i(w.target.checked)}),s.jsx(Z1,{label:"接受邮件通知",checked:l,onChange:w=>c(w.target.checked)}),s.jsx(Z1,{label:"RAG 知识库",defaultChecked:!0}),s.jsx(Z1,{label:"Agent 工作流（不可用）",defaultChecked:!0,disabled:!0}),s.jsx(Z1,{label:"半选状态（全选中间态）",indeterminate:!0})]}),previewCol:!0,code:`<Checkbox label="已阅读并同意服务条款" checked={checked} onChange={e => setChecked(e.target.checked)} />
<Checkbox label="禁用状态" disabled defaultChecked />
<Checkbox label="半选状态" indeterminate />`}),s.jsx(ie,{id:"radio",title:"Radio 单选框",desc:"用于在一组互斥选项中选择一个，同一组 Radio 使用相同的 name 实现互斥。推荐选项不超过 6 个，否则考虑使用 Select。",preview:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[s.jsx(ua,{name:"model",label:"GPT-4o",value:"option1",checked:d==="option1",onChange:()=>u("option1")}),s.jsx(ua,{name:"model",label:"Claude 3.5 Sonnet",value:"option2",checked:d==="option2",onChange:()=>u("option2")}),s.jsx(ua,{name:"model",label:"通义千问 Max",value:"option3",checked:d==="option3",onChange:()=>u("option3")}),s.jsx(ua,{name:"model",label:"文心一言 4.0（暂不可用）",disabled:!0})]}),previewCol:!0,code:`<Radio name="model" label="GPT-4o" value="gpt4o" checked={model === 'gpt4o'} onChange={() => setModel('gpt4o')} />
<Radio name="model" label="Claude 3.5" value="claude" checked={model === 'claude'} onChange={() => setModel('claude')} />
<Radio name="model" label="禁用选项" disabled />`}),s.jsx(ie,{id:"switch",title:"Switch 开关",desc:"Switch 用于表示某个功能是否开启，是二元状态切换的最佳选择。相比 Checkbox，Switch 更偏向「立即生效」的操作，如功能开关、权限切换。",preview:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[s.jsx(M1,{size:"sm",label:"小尺寸",checked:m,onChange:w=>x(w.target.checked)}),s.jsx(M1,{label:"默认尺寸",checked:h,onChange:w=>p(w.target.checked)}),s.jsx(M1,{size:"lg",label:"大尺寸",defaultChecked:!0})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[s.jsx(M1,{label:"已启用知识库",defaultChecked:!0}),s.jsx(M1,{label:"启用流式输出",defaultChecked:!0}),s.jsx(M1,{label:"Dark Mode（禁用）",disabled:!0,defaultChecked:!0})]})]}),previewCol:!0,code:`<Switch size="sm" label="小尺寸" />
<Switch label="默认尺寸" checked={enabled} onChange={e => setEnabled(e.target.checked)} />
<Switch size="lg" label="大尺寸" />
<Switch label="禁用状态" disabled defaultChecked />`}),s.jsx(Nr,{props:rF})]})}const Lt=V.forwardRef(({src:e,alt:t,initials:n,size:r="md",shape:a="circle",className:i,...l},c)=>s.jsx("span",{ref:c,className:it("avatar",`avatar--${r}`,{"avatar--square":a==="square"},i),...l,children:e?s.jsx("img",{src:e,alt:t||n||""}):n||"?"}));Lt.displayName="Avatar";const EM=({content:e,children:t,className:n,...r})=>s.jsxs("span",{className:it("tooltip-wrapper",n),...r,children:[t,s.jsx("span",{className:"tooltip-content",children:e})]}),iF=[{name:"variant",type:"'primary' | 'success' | 'warning' | 'danger' | 'default'",default:"'default'",desc:"徽标颜色语义"},{name:"dot",type:"boolean",default:"false",desc:"显示小圆点，用于状态指示"},{name:"children",type:"ReactNode",required:!0,desc:"徽标文本内容"}];function lF(){const[e,t]=V.useState(["RAG","Agent","Workflow","LLM"]),n=r=>t(a=>a.filter(i=>i!==r));return s.jsxs("div",{children:[s.jsx(Pt,{badge:"数据展示",title:"Badge / Tag / Avatar / Tooltip",desc:"展示类组件用于呈现状态、标签、用户信息等辅助信息。这类组件通常无需用户交互，以视觉形式传达上下文信息。"}),s.jsx(ie,{id:"badge",title:"Badge 徽标",desc:"徽标用于标识状态或数量，使用圆角胶囊形态区分于标签。颜色语义：Primary 为信息/操作，Success 为成功/完成，Warning 为警告/待确认，Danger 为错误/失败。dot 模式常用于状态图例说明。",preview:s.jsxs(s.Fragment,{children:[s.jsx(Re,{variant:"primary",children:"Primary"}),s.jsx(Re,{variant:"success",children:"Success"}),s.jsx(Re,{variant:"warning",children:"Warning"}),s.jsx(Re,{variant:"danger",children:"Danger"}),s.jsx(Re,{variant:"default",children:"Default"}),s.jsx("div",{className:"ds-divider--vertical",style:{height:20}}),s.jsx(Re,{variant:"success",dot:!0,children:"运行中"}),s.jsx(Re,{variant:"warning",dot:!0,children:"待审核"}),s.jsx(Re,{variant:"danger",dot:!0,children:"已停用"}),s.jsx(Re,{variant:"default",dot:!0,children:"未知状态"})]}),code:`<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>

{/* 带状态圆点 */}
<Badge variant="success" dot>运行中</Badge>
<Badge variant="warning" dot>待审核</Badge>`}),s.jsx(ie,{id:"tag",title:"Tag 标签",desc:"标签比徽标更强调「分类」语义，带有边框，视觉上更「实」。可添加关闭按钮实现动态标签管理。常用于关键词、技术栈、类型分类等场景。",preview:s.jsx(s.Fragment,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:"100%"},children:[s.jsxs("div",{className:"ds-row",children:[s.jsx(x1,{variant:"primary",children:"技术文档"}),s.jsx(x1,{variant:"success",children:"已发布"}),s.jsx(x1,{variant:"warning",children:"审核中"}),s.jsx(x1,{variant:"danger",children:"已下线"}),s.jsx(x1,{variant:"default",children:"默认标签"})]}),s.jsxs("div",{className:"ds-row",children:[e.map(r=>s.jsx(x1,{variant:"primary",closable:!0,onClose:()=>n(r),children:r},r)),e.length===0&&s.jsx("span",{style:{color:"var(--text-tertiary)",fontSize:13},children:"所有标签已删除"})]})]})}),previewCol:!0,code:`<Tag variant="primary">技术文档</Tag>
<Tag variant="success">已发布</Tag>

{/* 可关闭标签 */}
const [tags, setTags] = useState(['RAG', 'Agent', 'Workflow'])
{tags.map(t => (
  <Tag key={t} closable onClose={() => setTags(prev => prev.filter(p => p !== t))}>
    {t}
  </Tag>
))}`}),s.jsx(ie,{id:"avatar",title:"Avatar 头像",desc:"头像用于展示用户或角色身份。支持图片和文字首字母两种形式，支持圆形和方形两种形状，四种尺寸满足不同场景需求。Avatar 组可用于展示协作者列表。",preview:s.jsx(s.Fragment,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20,width:"100%"},children:[s.jsxs("div",{className:"ds-row",children:[s.jsx(Lt,{initials:"BS",size:"sm"}),s.jsx(Lt,{initials:"BS",size:"md"}),s.jsx(Lt,{initials:"BS",size:"lg"}),s.jsx(Lt,{initials:"AI",size:"xl"})]}),s.jsxs("div",{className:"ds-row",children:[s.jsx(Lt,{initials:"R",size:"md",style:{background:"var(--color-danger-100)",color:"var(--color-danger-600)"}}),s.jsx(Lt,{initials:"G",size:"md",style:{background:"var(--color-success-100)",color:"var(--color-success-700)"}}),s.jsx(Lt,{initials:"O",size:"md",style:{background:"var(--color-warning-100)",color:"var(--color-warning-700)"}}),s.jsx(Lt,{initials:"BS",size:"md",shape:"square"}),s.jsx(Lt,{initials:"AI",size:"lg",shape:"square"})]})]})}),previewCol:!0,code:`<Avatar initials="BS" size="sm" />
<Avatar initials="BS" size="md" />
<Avatar initials="BS" size="lg" />
<Avatar initials="BS" shape="square" />

{/* 自定义颜色 */}
<Avatar initials="R" style={{ background: 'var(--color-danger-100)', color: 'var(--color-danger-600)' }} />`}),s.jsx(ie,{id:"tooltip",title:"Tooltip 文字提示",desc:"Tooltip 在鼠标悬停时显示简短辅助说明，适合为图标、缩略文本提供更多语境。内容应简洁，不超过 1-2 行，不适合放置交互元素（使用 Popover 替代）。",preview:s.jsxs(s.Fragment,{children:[s.jsx(EM,{content:"这是一个提示信息",children:s.jsx("span",{style:{cursor:"pointer",color:"var(--color-primary-500)",textDecoration:"underline dashed"},children:"悬停查看提示"})}),s.jsx(EM,{content:"新建技能",children:s.jsx("button",{style:{border:"1px solid var(--border-primary)",borderRadius:6,padding:"6px 10px",cursor:"pointer",background:"var(--surface-base)",color:"var(--text-secondary)"},children:"+ 新建"})}),s.jsx(EM,{content:"API Token 仅显示一次，请妥善保存",children:s.jsx("span",{style:{color:"var(--text-tertiary)",fontSize:13,cursor:"help",textDecoration:"underline dotted"},children:"Token 说明 ?"})})]}),code:`<Tooltip content="这是一个提示信息">
  <span>悬停查看提示</span>
</Tooltip>`}),s.jsx(Nr,{props:iF})]})}const DM=({open:e,onClose:t,title:n,children:r,size:a="md",footer:i})=>{const l=V.useId();return V.useEffect(()=>{if(!e)return;const c=d=>{d.key==="Escape"&&t()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[e,t]),e?s.jsx("div",{className:"modal-overlay",onClick:c=>c.target===c.currentTarget&&t(),children:s.jsxs("div",{className:`modal modal--${a}`,role:"dialog","aria-modal":"true","aria-labelledby":l,onClick:c=>c.stopPropagation(),children:[s.jsxs("div",{className:"modal__header",children:[s.jsx("h2",{className:"modal__title",id:l,children:n}),s.jsx("button",{type:"button",className:"modal__close",onClick:t,"aria-label":"关闭",children:s.jsx(Lr,{size:16})})]}),s.jsx("div",{className:"modal__body",children:r}),i!==void 0?i:s.jsxs("div",{className:"modal__footer",children:[s.jsx(Z,{variant:"outline",size:"sm",onClick:t,children:"取消"}),s.jsx(Z,{variant:"primary",size:"sm",onClick:t,children:"确认"})]})]})}):null},cF=[{name:"open",type:"boolean",required:!0,desc:"控制弹窗是否显示"},{name:"onClose",type:"() => void",required:!0,desc:"关闭弹窗时的回调"},{name:"title",type:"string",required:!0,desc:"弹窗标题"},{name:"children",type:"ReactNode",required:!0,desc:"弹窗主体内容"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",desc:"弹窗宽度，sm=380px，md=520px，lg=720px"},{name:"footer",type:"ReactNode",desc:"自定义底部操作区，传 null 隐藏默认底部，不传则显示默认确认/取消按钮"}];function sF(){const[e,t]=V.useState(!1),[n,r]=V.useState(!1),[a,i]=V.useState(!1),[l,c]=V.useState(!1),d=()=>{c(!0),setTimeout(()=>{c(!1),i(!1)},1500)};return s.jsxs("div",{children:[s.jsx(Pt,{badge:"反馈组件",title:"Modal 弹窗",desc:"Modal 弹窗用于需要用户确认、输入信息或展示重要内容而不离开当前页面的场景。支持点击蒙层或按 Esc 键关闭。"}),s.jsx(ie,{id:"basic",title:"基础弹窗",desc:"默认弹窗包含标题栏、内容区和底部操作区。底部默认提供「取消」和「确认」两个按钮，满足大多数场景。弹窗宽度默认为 520px（md）。",preview:s.jsxs(s.Fragment,{children:[s.jsx(Z,{onClick:()=>t(!0),children:"打开基础弹窗"}),s.jsxs(DM,{open:e,onClose:()=>t(!1),title:"编辑知识库信息",children:[s.jsx("p",{children:"这里是弹窗的内容区域，可以放置表单、说明文本或任何自定义内容。"}),s.jsx("p",{style:{marginTop:8,color:"var(--text-tertiary)",fontSize:13},children:"你将修改知识库的基本信息，修改后即时生效。"})]})]}),code:`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>打开弹窗</Button>

<Modal open={open} onClose={() => setOpen(false)} title="编辑知识库信息">
  <p>弹窗内容区域</p>
</Modal>`}),s.jsx(ie,{id:"size",title:"弹窗尺寸",desc:"提供 sm（380px）、md（520px，默认）、lg（720px）三种宽度，根据内容复杂度选择。简单确认操作使用 sm，复杂表单使用 lg。",preview:s.jsxs(s.Fragment,{children:[s.jsx(Z,{variant:"outline",onClick:()=>r(!0),children:"小尺寸弹窗"}),s.jsx(DM,{size:"sm",open:n,onClose:()=>r(!1),title:"确认删除",children:s.jsx("p",{children:"此操作无法撤销，确认要删除选中的 3 个文件吗？"})})]}),code:`<Modal size="sm" open={open} onClose={() => setOpen(false)} title="确认删除">
  <p>此操作无法撤销，确认要删除选中的 3 个文件吗？</p>
</Modal>`}),s.jsx(ie,{id:"danger",title:"危险操作确认",desc:"对于不可逆的危险操作（删除、禁用账户、清空数据等），使用危险变体配合自定义 footer，将确认按钮替换为 Danger 样式，并加入等待动画增加操作成本，降低误操作风险。",preview:s.jsxs(s.Fragment,{children:[s.jsx(Z,{variant:"danger-outline",leftIcon:s.jsx(z1,{size:14}),onClick:()=>i(!0),children:"删除工作流"}),s.jsx(DM,{open:a,onClose:()=>!l&&i(!1),title:"删除工作流",size:"sm",footer:s.jsxs("div",{className:"modal__footer",children:[s.jsx(Z,{variant:"outline",size:"sm",onClick:()=>i(!1),disabled:l,children:"取消"}),s.jsx(Z,{variant:"danger",size:"sm",loading:l,onClick:d,children:l?"删除中":"确认删除"})]}),children:s.jsxs("div",{style:{display:"flex",gap:12},children:[s.jsx(Ma,{size:20,color:"var(--color-warning-500)",style:{flexShrink:0,marginTop:2}}),s.jsxs("div",{children:[s.jsx("p",{style:{fontWeight:500,marginBottom:6},children:"此操作无法撤销"}),s.jsx("p",{style:{fontSize:13,lineHeight:1.6},children:"删除后，工作流「智能客服」及其关联的所有配置、运行记录将被永久删除，无法恢复。"})]})]})})]}),code:`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="删除工作流"
  size="sm"
  footer={
    <div className="modal__footer">
      <Button variant="outline" size="sm" onClick={() => setOpen(false)}>取消</Button>
      <Button variant="danger" size="sm" loading={loading} onClick={handleDelete}>确认删除</Button>
    </div>
  }
>
  <p>此操作无法撤销，工作流将被永久删除。</p>
</Modal>`}),s.jsx(Nr,{props:cF})]})}function OM({columns:e,data:t,rowKey:n,striped:r,className:a,loading:i=!1,emptyText:l="暂无数据"}){const[c,d]=V.useState(null),[u,h]=V.useState("asc"),p=f=>{c===f?h(M=>M==="asc"?"desc":"asc"):(d(f),h("asc"))},m=(f,M)=>n?typeof n=="function"?n(f):String(f[n]):String(M),x=V.useMemo(()=>c?[...t].sort((f,M)=>{const k=f[c],y=M[c];if(k===y)return 0;const v=k<y?-1:1;return u==="asc"?v:-v}):t,[t,u,c]),w=i?"加载中...":l;return s.jsx("div",{className:it("table-wrapper",a),children:s.jsxs("table",{className:it("table",{"table--striped":r}),children:[s.jsx("thead",{children:s.jsx("tr",{children:e.map(f=>s.jsx("th",{style:{width:f.width},className:f.sortable?"sortable":"",onClick:()=>f.sortable&&p(f.key),"aria-sort":f.sortable&&c===f.key?u==="asc"?"ascending":"descending":"none",children:s.jsxs("span",{className:"th-inner",children:[f.title,f.sortable&&(c===f.key?u==="asc"?s.jsx(pr,{size:13}):s.jsx(b1,{size:13}):s.jsx(La,{size:13,style:{opacity:.4}}))]})},f.key))})}),s.jsx("tbody",{children:i||x.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:e.length,style:{textAlign:"center",color:"var(--text-tertiary)",padding:"40px"},children:w})}):x.map((f,M)=>s.jsx("tr",{children:e.map(k=>s.jsx("td",{children:k.render?k.render(k.dataIndex?f[k.dataIndex]:void 0,f,M):k.dataIndex?String(f[k.dataIndex]??""):""},k.key))},m(f,M)))})]})})}const NM=[{key:"name",title:"工作流名称",dataIndex:"name",sortable:!0},{key:"type",title:"类型",dataIndex:"type",render:e=>s.jsx(Re,{variant:e==="Agent"?"primary":"default",children:String(e)})},{key:"status",title:"状态",dataIndex:"status",sortable:!0,render:e=>s.jsx(Re,{variant:e==="运行中"?"success":e==="审核中"?"warning":"default",dot:!0,children:String(e)})},{key:"calls",title:"调用次数",dataIndex:"calls",sortable:!0,render:e=>s.jsx("span",{style:{fontVariantNumeric:"tabular-nums"},children:Number(e).toLocaleString()})},{key:"creator",title:"创建者",dataIndex:"creator"},{key:"updated",title:"更新时间",dataIndex:"updated",sortable:!0},{key:"actions",title:"操作",render:(e,t)=>s.jsxs("div",{style:{display:"flex",gap:8},children:[s.jsx(Z,{size:"sm",variant:"ghost",iconOnly:!0,children:s.jsx(Ta,{size:13})}),s.jsx(Z,{size:"sm",variant:"ghost",iconOnly:!0,style:{color:"var(--color-danger-500)"},children:s.jsx(z1,{size:13})})]})}],iI=[{id:"1",name:"智能客服助手",type:"Agent",status:"运行中",creator:"张三",updated:"2026-03-07",calls:12840},{id:"2",name:"合同审核流程",type:"Workflow",status:"审核中",creator:"李四",updated:"2026-03-06",calls:3210},{id:"3",name:"知识库 QA 机器人",type:"RAG",status:"运行中",creator:"王五",updated:"2026-03-05",calls:54321},{id:"4",name:"报告自动生成",type:"Workflow",status:"已停用",creator:"赵六",updated:"2026-03-01",calls:890},{id:"5",name:"销售数据分析",type:"Agent",status:"运行中",creator:"陈七",updated:"2026-02-28",calls:7654}],dF=[{name:"columns",type:"Column<T>[]",required:!0,desc:"列定义，支持 render 自定义单元格"},{name:"data",type:"T[]",required:!0,desc:"表格数据源"},{name:"rowKey",type:"keyof T | (row: T) => string",desc:"行唯一标识，用于 React key"},{name:"striped",type:"boolean",default:"false",desc:"斑马纹模式，偶数行背景略深"},{name:"emptyText",type:"string",default:"'暂无数据'",desc:"无数据时的提示文案"}];function uF(){return s.jsxs("div",{children:[s.jsx(Pt,{badge:"数据展示",title:"Table 表格",desc:"表格用于展示多条结构相似的数据，支持列排序、自定义渲染、操作列等。BISHENG 中大量的列表类数据（工作流、模型、用户）均使用 Table 组件展示。"}),s.jsx(ie,{id:"basic",title:"基础表格",desc:"包含表头、数据行，支持鼠标悬浮高亮。列定义的 sortable 属性开启客户端排序，点击表头切换升序/降序，再次点击切换方向。",preview:s.jsx("div",{style:{width:"100%"},children:s.jsx(OM,{columns:NM,data:iI,rowKey:"id"})}),previewCol:!0,code:`const columns: Column<Row>[] = [
  { key: 'name', title: '工作流名称', dataIndex: 'name', sortable: true },
  { key: 'status', title: '状态', dataIndex: 'status', render: (v) => (
    <Badge variant={v === '运行中' ? 'success' : 'warning'} dot>{v}</Badge>
  )},
  { key: 'calls', title: '调用次数', dataIndex: 'calls', sortable: true },
  { key: 'actions', title: '操作', render: (_, row) => (
    <Button size="sm" variant="ghost" iconOnly><Pencil size={13} /></Button>
  )},
]

<Table columns={columns} data={data} rowKey="id" />`}),s.jsx(ie,{id:"striped",title:"斑马纹表格",desc:"斑马纹模式通过交替行背景提升大量数据的可读性，适合数据密度较高的场景，如日志列表、数据分析报表。",preview:s.jsx("div",{style:{width:"100%"},children:s.jsx(OM,{columns:NM.slice(0,5),data:iI,rowKey:"id",striped:!0})}),previewCol:!0,code:'<Table columns={columns} data={data} rowKey="id" striped />'}),s.jsx(ie,{id:"empty",title:"空状态",desc:"当数据源为空时，表格显示空状态提示，可通过 emptyText 自定义提示文案。",preview:s.jsx("div",{style:{width:"100%"},children:s.jsx(OM,{columns:NM.slice(0,4),data:[],rowKey:"id",emptyText:"没有找到相关工作流"})}),previewCol:!0,code:'<Table columns={columns} data={[]} emptyText="没有找到相关工作流" />'}),s.jsx(Nr,{props:dF})]})}function hF(){const[e,t]=V.useState(!1),n=Or();V.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const r=()=>t(!e),a=[{title:"概览",items:[{path:"/overview",label:"Overview 概览",icon:ja}]},{title:"设计基础 (Tokens)",items:[{path:"/colors",label:"Color 颜色",icon:fr},{path:"/typography",label:"Typography 字体",icon:wr},{path:"/spacing",label:"Spacing / Radius",icon:hr},{path:"/icons",label:"Icons 图标",icon:j1}]},{title:"通用组件",items:[{path:"/components/button",label:"Button 按钮",icon:kr}]},{title:"数据录入",items:[{path:"/components/input",label:"Input 输入框",icon:ur},{path:"/components/select",label:"Select / Selection",icon:Mr}]},{title:"数据展示",items:[{path:"/components/badge",label:"Badge / Tag / Avatar",icon:xr},{path:"/components/table",label:"Table 表格",icon:gr}]},{title:"反馈",items:[{path:"/components/modal",label:"Modal 弹窗",icon:vr}]}],i=()=>{for(const l of a){const c=l.items.find(d=>d.path===n.pathname);if(c)return c.label}return"BISHENG Design System"};return s.jsxs("div",{className:"ds-layout",children:[s.jsxs("aside",{className:"ds-sidebar",children:[s.jsxs(L9,{to:"/overview",className:"ds-sidebar__logo",children:[s.jsx("div",{className:"ds-sidebar__logo-icon",children:s.jsx(j1,{color:"white",size:20})}),s.jsxs("div",{className:"ds-sidebar__logo-text",children:[s.jsx("span",{className:"ds-sidebar__logo-title",children:"BISHENG"}),s.jsx("span",{className:"ds-sidebar__logo-sub",children:"Design System"})]})]}),s.jsx("nav",{className:"ds-sidebar__nav",children:a.map(l=>s.jsxs("div",{className:"ds-sidebar__section",children:[s.jsx("div",{className:"ds-sidebar__section-title",children:l.title}),l.items.map(c=>s.jsxs(L9,{to:c.path,className:`ds-sidebar__item ${n.pathname===c.path?"active":""}`,children:[s.jsx(c.icon,{className:"ds-sidebar__item-icon"}),c.label,c.path.includes("button")&&s.jsx("span",{className:"ds-sidebar__badge",children:"v1.0"})]},c.path))]},l.title))})]}),s.jsxs("main",{className:"ds-main",children:[s.jsxs("header",{className:"ds-topbar",children:[s.jsxs("div",{className:"ds-topbar__breadcrumb",children:[s.jsx("span",{children:"BISHENG Design System"}),s.jsx("span",{className:"ds-topbar__breadcrumb-sep",children:"/"}),s.jsx("span",{className:"ds-topbar__breadcrumb-current",children:i()})]}),s.jsxs("div",{className:"ds-topbar__actions",children:[s.jsxs("a",{href:"https://github.com/dataelement/bisheng",target:"_blank",rel:"noreferrer",className:"ds-demo__code-copy",style:{display:"flex",alignItems:"center",gap:6,padding:"6px 12px"},children:[s.jsx(ba,{size:16}),s.jsx("span",{children:"GitHub"}),s.jsx(Ca,{size:12,opacity:.5})]}),s.jsx("button",{onClick:r,className:"ds-demo__code-copy",style:{width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:8},title:e?"切换到浅色模式":"切换到深色模式",children:e?s.jsx(Ba,{size:18}):s.jsx(Ha,{size:18})})]})]}),s.jsx("div",{className:"ds-content",children:s.jsxs(wH,{children:[s.jsx(Ue,{path:"/",element:s.jsx(xH,{to:"/overview",replace:!0})}),s.jsx(Ue,{path:"/overview",element:s.jsx(DH,{})}),s.jsx(Ue,{path:"/colors",element:s.jsx(UH,{})}),s.jsx(Ue,{path:"/typography",element:s.jsx(GH,{})}),s.jsx(Ue,{path:"/spacing",element:s.jsx(QH,{})}),s.jsx(Ue,{path:"/icons",element:s.jsx(RT,{})}),s.jsx(Ue,{path:"/components/button",element:s.jsx(TT,{})}),s.jsx(Ue,{path:"/components/input",element:s.jsx(BT,{})}),s.jsx(Ue,{path:"/components/select",element:s.jsx(oF,{})}),s.jsx(Ue,{path:"/components/badge",element:s.jsx(lF,{})}),s.jsx(Ue,{path:"/components/modal",element:s.jsx(sF,{})}),s.jsx(Ue,{path:"/components/table",element:s.jsx(uF,{})})]})})]})]})}_M.createRoot(document.getElementById("root")).render(s.jsx(V.StrictMode,{children:s.jsx(zH,{children:s.jsx(hF,{})})}));

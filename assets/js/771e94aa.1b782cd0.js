/*! For license information please see 771e94aa.1b782cd0.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[2708],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},72:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7378),t(3905));const a={id:"ProgressBar",title:"ProgressBar",sidebar_label:"ProgressBar"},i=void 0,s={unversionedId:"components/basic/ProgressBar",id:"components/basic/ProgressBar",isDocsHomePage:!1,title:"ProgressBar",description:"Progress bar",source:"@site/../docs/components/basic/ProgressBar.md",sourceDirName:"components/basic",slug:"/components/basic/ProgressBar",permalink:"/react-native-ui-lib/docs/components/basic/ProgressBar",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/basic/ProgressBar.md",tags:[],version:"current",frontMatter:{id:"ProgressBar",title:"ProgressBar",sidebar_label:"ProgressBar"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"customElement",id:"customelement",children:[]},{value:"fullWidth",id:"fullwidth",children:[]},{value:"progress",id:"progress",children:[]},{value:"progressColor",id:"progresscolor",children:[]},{value:"style",id:"style",children:[]}]}],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Progress bar",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ProgressBarScreen.tsx"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<ProgressBar progress={55} progressColor={Colors.red30}/>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"customelement"},"customElement"),(0,o.kt)("p",null,"Custom element to render on top of the animated progress",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,o.kt)("h3",{id:"fullwidth"},"fullWidth"),(0,o.kt)("p",null,"FullWidth Ui preset",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"progress"},"progress"),(0,o.kt)("p",null,"The progress of the bar from 0 to 100",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"progresscolor"},"progressColor"),(0,o.kt)("p",null,"Progress color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"style"},"style"),(0,o.kt)("p",null,"Override container style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")))}u.isMDXComponent=!0},2525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,c=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))t.call(i,u)&&(c[u]=i[u]);if(r){s=r(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(c[s[p]]=i[s[p]])}}return c}},1535:(e,r,t)=>{var n=t(2525),o=60103,a=60106;var i=60109,s=60110,c=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function g(){}function h(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var v=h.prototype=new g;v.constructor=h,n(v,b.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,t){var n,a={},i=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(i=""+r.key),r)O.call(r,n)&&!w.hasOwnProperty(n)&&(a[n]=r[n]);var c=arguments.length-2;if(1===c)a.children=t;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,t,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),C(i,r,t,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),r.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+S(s=e[l],l);c+=C(s,r,t,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=C(s=s.value,r,t,u=n+S(s,l++),i);else if("object"===s)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function x(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function B(){var e=N.current;if(null===e)throw Error(d(321));return e}},7378:(e,r,t)=>{t(1535)}}]);
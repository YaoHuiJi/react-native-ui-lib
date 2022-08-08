/*! For license information please see 56bdd681.f6339be3.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[6445],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9582:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7378),r(3905));const a={id:"KeyboardTrackingView",title:"KeyboardTrackingView",sidebar_label:"KeyboardTrackingView"},i=void 0,l={unversionedId:"components/infra/KeyboardTrackingView",id:"components/infra/KeyboardTrackingView",isDocsHomePage:!1,title:"KeyboardTrackingView",description:"A UI component that enables 'keyboard tracking' for this view and it's sub-views.",source:"@site/../docs/components/infra/KeyboardTrackingView.md",sourceDirName:"components/infra",slug:"/components/infra/KeyboardTrackingView",permalink:"/react-native-ui-lib/docs/components/infra/KeyboardTrackingView",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/infra/KeyboardTrackingView.md",tags:[],version:"current",frontMatter:{id:"KeyboardTrackingView",title:"KeyboardTrackingView",sidebar_label:"KeyboardTrackingView"},sidebar:"tutorialSidebar",previous:{title:"KeyboardRegistry",permalink:"/react-native-ui-lib/docs/components/infra/KeyboardRegistry"},next:{title:"Modal",permalink:"/react-native-ui-lib/docs/components/infra/Modal/Modal"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"addBottomView",id:"addbottomview",children:[]},{value:"allowHitsOutsideBounds",id:"allowhitsoutsidebounds",children:[]},{value:"bottomViewColor",id:"bottomviewcolor",children:[]},{value:"manageScrollView",id:"managescrollview",children:[]},{value:"ref",id:"ref",children:[]},{value:"requiresSameParentToManageScrollView",id:"requiressameparenttomanagescrollview",children:[]},{value:"revealKeyboardInteractive",id:"revealkeyboardinteractive",children:[]},{value:"scrollBehavior",id:"scrollbehavior",children:[]},{value:"scrollToFocusedInput",id:"scrolltofocusedinput",children:[]},{value:"style",id:"style",children:[]},{value:"trackInteractive",id:"trackinteractive",children:[]},{value:"useSafeArea",id:"usesafearea",children:[]},{value:"usesBottomTabs",id:"usesbottomtabs",children:[]}]}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A UI component that enables 'keyboard tracking' for this view and it's sub-views.\nWould typically be used when you have a TextField or TextInput inside this view.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/nativeComponentScreens/KeyboardTrackingViewScreen.js"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,o.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/KeyboardTrackingView/KeyboardTrackingView.gif?raw=true"})),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<KeyboardTrackingView\n style={}\n trackInteractive\n useSafeArea\n>\n \n</KeyboardTrackingView>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"addbottomview"},"addBottomView"),(0,o.kt)("p",null,"Add a view beneath the KeyboardAccessoryView\niOS only.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"allowhitsoutsidebounds"},"allowHitsOutsideBounds"),(0,o.kt)("p",null,"Allow hitting sub-views that are placed beyond the view bounds\niOS only.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"bottomviewcolor"},"bottomViewColor"),(0,o.kt)("p",null,"The bottom view's color\niOS only.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"managescrollview"},"manageScrollView"),(0,o.kt)("p",null,"Set to false to turn off inset management and manage it yourself\niOS only.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"ref"},"ref"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"any ")," "),(0,o.kt)("h3",{id:"requiressameparenttomanagescrollview"},"requiresSameParentToManageScrollView"),(0,o.kt)("p",null,"Set to true manageScrollView is set to true and still does not work,\nit means that the ScrollView found is the wrong one and you'll have\nto have the KeyboardAccessoryView and the ScrollView as siblings\nand set this to true\niOS only.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"revealkeyboardinteractive"},"revealKeyboardInteractive"),(0,o.kt)("p",null,"Show the keyboard on a negative scroll\niOS only.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"scrollbehavior"},"scrollBehavior"),(0,o.kt)("p",null,"The scrolling behavior (use KeyboardTrackingView.scrollBehaviors.NONE | SCROLL_TO_BOTTOM_INVERTED_ONLY | FIXED_OFFSET)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"scrolltofocusedinput"},"scrollToFocusedInput"),(0,o.kt)("p",null,"Should the scrollView scroll to the focused input",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"style"},"style"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"trackinteractive"},"trackInteractive"),(0,o.kt)("p",null,"Enables tracking of the keyboard when it's dismissed interactively (false by default).\nWhy? When using an external keyboard (BT),\nyou still get the keyboard events and the view just hovers when you focus the input.\nAlso, if you're not using interactive style of dismissing the keyboard\n(or if you don't have an input inside this view) it doesn't make sense to track it anyway.\n(This is caused because of the usage of inputAccessory to be able to track the keyboard interactive change and it introduces this bug)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"usesafearea"},"useSafeArea"),(0,o.kt)("p",null,"Whether or not to handle SafeArea\niOS only.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"usesbottomtabs"},"usesBottomTabs"),(0,o.kt)("p",null,"Whether or not to include bottom tab bar inset\niOS only.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")))}u.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,c=o(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))r.call(i,u)&&(c[u]=i[u]);if(t){l=t(i);for(var p=0;p<l.length;p++)n.call(i,l[p])&&(c[l[p]]=i[l[p]])}}return c}},1535:(e,t,r)=>{var n=r(2525),o=60103,a=60106;var i=60109,l=60110,c=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}function m(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var k=v.prototype=new m;k.constructor=v,n(k,h.prototype),k.isPureReactComponent=!0;var w={current:null},g=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)g.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function V(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+N(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(T,"$&/")+"/"),V(i,t,r,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(T,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=n+N(l=e[s],s);c+=V(l,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(l=e.next()).done;)c+=V(l=l.value,t,r,u=n+N(l,s++),i);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function _(e,t,r){if(null==e)return e;var n=[],o=0;return V(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function P(){var e=x.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,r)=>{r(1535)}}]);
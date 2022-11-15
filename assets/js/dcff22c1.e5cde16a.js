/*! For license information please see dcff22c1.e5cde16a.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[8474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7526:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7378),n(3905));const l={id:"Drawer",title:"Drawer",sidebar_label:"Drawer"},a=void 0,o={unversionedId:"components/lists/Drawer",id:"components/lists/Drawer",isDocsHomePage:!1,title:"Drawer",description:"Drawer Component",source:"@site/../docs/components/lists/Drawer.md",sourceDirName:"components/lists",slug:"/components/lists/Drawer",permalink:"/react-native-ui-lib/docs/components/lists/Drawer",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/lists/Drawer.md",tags:[],version:"current",frontMatter:{id:"Drawer",title:"Drawer",sidebar_label:"Drawer"},sidebar:"tutorialSidebar",previous:{title:"ProgressiveImage",permalink:"/react-native-ui-lib/docs/components/media/ProgressiveImage"},next:{title:"GridList",permalink:"/react-native-ui-lib/docs/components/lists/GridList"}},p=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"bounciness",id:"bounciness",children:[]},{value:"customValue",id:"customvalue",children:[]},{value:"disableHaptic",id:"disablehaptic",children:[]},{value:"fullLeftThreshold",id:"fullleftthreshold",children:[]},{value:"fullRightThreshold",id:"fullrightthreshold",children:[]},{value:"fullSwipeLeft",id:"fullswipeleft",children:[]},{value:"fullSwipeRight",id:"fullswiperight",children:[]},{value:"itemsIconSize",id:"itemsiconsize",children:[]},{value:"itemsMinWidth",id:"itemsminwidth",children:[]},{value:"itemsTextStyle",id:"itemstextstyle",children:[]},{value:"itemsTintColor",id:"itemstintcolor",children:[]},{value:"leftItem",id:"leftitem",children:[]},{value:"leftToggleHapticTrigger",id:"lefttogglehaptictrigger",children:[]},{value:"onDragStart",id:"ondragstart",children:[]},{value:"onFullSwipeLeft",id:"onfullswipeleft",children:[]},{value:"onFullSwipeRight",id:"onfullswiperight",children:[]},{value:"onSwipeableWillClose",id:"onswipeablewillclose",children:[]},{value:"onSwipeableWillOpen",id:"onswipeablewillopen",children:[]},{value:"onToggleSwipeLeft",id:"ontoggleswipeleft",children:[]},{value:"onWillFullSwipeLeft",id:"onwillfullswipeleft",children:[]},{value:"onWillFullSwipeRight",id:"onwillfullswiperight",children:[]},{value:"rightItems",id:"rightitems",children:[]},{value:"style",id:"style",children:[]},{value:"testID",id:"testid",children:[]},{value:"useNativeAnimations",id:"usenativeanimations",children:[]}]}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Drawer Component",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/DrawerScreen.tsx"},"(code example)")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your app works with RNN, your screen must be wrapped with gestureHandlerRootHOC from 'react-native-gesture-handler'. see: ",(0,i.kt)("a",{parentName:"p",href:"https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#with-wix-react-native-navigation-https-githubcom-wix-react-native-navigation"},"https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#with-wix-react-native-navigation-https-githubcom-wix-react-native-navigation")))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Drawer/Drawer.gif?raw=true"})),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<Drawer\n  rightItems={[{text: 'Read', background: Colors.blue30, onPress: () => console.log('read pressed')}]}\n  leftItem={{text: 'Delete', background: Colors.red30, onPress: () => console.log('delete pressed')}}\n>\n  <View centerV padding-s4 bg-white style={{height: 60}}>\n    <Text text70>Item</Text>\n  </View>\n</Drawer>\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"bounciness"},"bounciness"),(0,i.kt)("p",null,"The drawer animation bounciness",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"customvalue"},"customValue"),(0,i.kt)("p",null,"Custom value of any type to pass on to the component and receive back in the action callbacks",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"any ")," "),(0,i.kt)("h3",{id:"disablehaptic"},"disableHaptic"),(0,i.kt)("p",null,"Whether to disable the haptic",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"fullleftthreshold"},"fullLeftThreshold"),(0,i.kt)("p",null,"Threshold for a left full swipe (0-1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"fullrightthreshold"},"fullRightThreshold"),(0,i.kt)("p",null,"Threshold for a right full swipe (0-1)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"fullswipeleft"},"fullSwipeLeft"),(0,i.kt)("p",null,"Whether to allow a full left swipe",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"fullswiperight"},"fullSwipeRight"),(0,i.kt)("p",null,"Whether to allow a full right swipe",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"itemsiconsize"},"itemsIconSize"),(0,i.kt)("p",null,"The items' icon size",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"itemsminwidth"},"itemsMinWidth"),(0,i.kt)("p",null,"Set a different minimum width",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"itemstextstyle"},"itemsTextStyle"),(0,i.kt)("p",null,"The items' text style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,i.kt)("h3",{id:"itemstintcolor"},"itemsTintColor"),(0,i.kt)("p",null,"The color for the text and icon tint of the items",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"leftitem"},"leftItem"),(0,i.kt)("p",null,"The bottom layer's item to appear when opened from the left (a single item)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ItemProps ")," "),(0,i.kt)("h3",{id:"lefttogglehaptictrigger"},"leftToggleHapticTrigger"),(0,i.kt)("p",null,"Haptic trigger callback to use onToggleSwipeLeft",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,i.kt)("h3",{id:"ondragstart"},"onDragStart"),(0,i.kt)("p",null,"Called when drag gesture starts",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => any ")," "),(0,i.kt)("h3",{id:"onfullswipeleft"},"onFullSwipeLeft"),(0,i.kt)("p",null,"Callback for left item full swipe",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,i.kt)("h3",{id:"onfullswiperight"},"onFullSwipeRight"),(0,i.kt)("p",null,"Callback for right item full swipe",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,i.kt)("h3",{id:"onswipeablewillclose"},"onSwipeableWillClose"),(0,i.kt)("p",null,"Callback for close action",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,i.kt)("h3",{id:"onswipeablewillopen"},"onSwipeableWillOpen"),(0,i.kt)("p",null,"Callback for open action",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,i.kt)("h3",{id:"ontoggleswipeleft"},"onToggleSwipeLeft"),(0,i.kt)("p",null,"Callback for left item toggle swipe",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => {rowWidth, leftWidth, dragX, resetItemPosition} ")," "),(0,i.kt)("h3",{id:"onwillfullswipeleft"},"onWillFullSwipeLeft"),(0,i.kt)("p",null,"Callback for just before left item full swipe",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,i.kt)("h3",{id:"onwillfullswiperight"},"onWillFullSwipeRight"),(0,i.kt)("p",null,"Callback for just before right item full swipe",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,i.kt)("h3",{id:"rightitems"},"rightItems"),(0,i.kt)("p",null,"The bottom layer's items to appear when opened from the right",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ItemProps[] ")," "),(0,i.kt)("h3",{id:"style"},"style"),(0,i.kt)("p",null,"Component's style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"testid"},"testID"),(0,i.kt)("p",null,"The test id for e2e tests",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"usenativeanimations"},"useNativeAnimations"),(0,i.kt)("p",null,"Perform the animation in natively",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")))}u.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,l){for(var a,o,p=i(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))n.call(a,u)&&(p[u]=a[u]);if(t){o=t(a);for(var c=0;c<o.length;c++)r.call(a,o[c])&&(p[o[c]]=a[o[c]])}}return p}},1535:(e,t,n)=>{var r=n(2525),i=60103,l=60106;var a=60109,o=60110,p=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;i=c("react.element"),l=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),a=c("react.provider"),o=c("react.context"),p=c("react.forward_ref"),c("react.suspense"),s=c("react.memo"),u=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function k(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var w=g.prototype=new k;w.constructor=g,r(w,b.prototype),w.isPureReactComponent=!0;var v={current:null},y=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,l={},a=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)y.call(t,r)&&!N.hasOwnProperty(r)&&(l[r]=t[r]);var p=arguments.length-2;if(1===p)l.children=n;else if(1<p){for(var s=Array(p),u=0;u<p;u++)s[u]=arguments[u+2];l.children=s}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===l[r]&&(l[r]=p[r]);return{$$typeof:i,type:e,key:a,ref:o,props:l,_owner:v.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var S=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,a){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var p=!1;if(null===e)p=!0;else switch(o){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case i:case l:p=!0}}if(p)return a=a(p=e),e=""===r?"."+j(p,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),x(a,t,n,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||p&&p.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),t.push(a)),1;if(p=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=r+j(o=e[s],s);p+=x(o,t,n,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(o=e.next()).done;)p+=x(o=o.value,t,n,u=r+j(o,s++),a);else if("object"===o)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function T(e,t,n){if(null==e)return e;var r=[],i=0;return x(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function _(){var e=P.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,n)=>{n(1535)}}]);
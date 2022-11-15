/*! For license information please see be796fd1.ca2384bf.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[7015],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5758:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7378),r(3905));const o={id:"WheelPicker",title:"Incubator.WheelPicker",sidebar_label:"WheelPicker"},a=void 0,l={unversionedId:"components/incubator/WheelPicker",id:"components/incubator/WheelPicker",isDocsHomePage:!1,title:"Incubator.WheelPicker",description:"A customizable WheelPicker component",source:"@site/../docs/components/incubator/WheelPicker.md",sourceDirName:"components/incubator",slug:"/components/incubator/WheelPicker",permalink:"/react-native-ui-lib/docs/components/incubator/WheelPicker",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/incubator/WheelPicker.md",tags:[],version:"current",frontMatter:{id:"WheelPicker",title:"Incubator.WheelPicker",sidebar_label:"WheelPicker"},sidebar:"tutorialSidebar",previous:{title:"Toast",permalink:"/react-native-ui-lib/docs/components/incubator/Toast"},next:{title:"Dash",permalink:"/react-native-ui-lib/docs/components/infra/Dash"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"activeTextColor",id:"activetextcolor",children:[]},{value:"align",id:"align",children:[]},{value:"inactiveTextColor",id:"inactivetextcolor",children:[]},{value:"initialValue",id:"initialvalue",children:[]},{value:"itemHeight",id:"itemheight",children:[]},{value:"items",id:"items",children:[]},{value:"label",id:"label",children:[]},{value:"labelProps",id:"labelprops",children:[]},{value:"labelStyle",id:"labelstyle",children:[]},{value:"numberOfVisibleRows",id:"numberofvisiblerows",children:[]},{value:"onChange",id:"onchange",children:[]},{value:"separatorsStyle",id:"separatorsstyle",children:[]},{value:"style",id:"style",children:[]},{value:"testID",id:"testid",children:[]},{value:"textStyle",id:"textstyle",children:[]}]}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A customizable WheelPicker component",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/incubatorScreens/WheelPickerScreen.tsx"},"(code example)")),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<WheelPicker\n  items={[{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}, {label: 'Maybe', value: 'maybe'}]}\n  initialValue={'yes'}\n  onChange={() => console.log('changed')}\n/>\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"activetextcolor"},"activeTextColor"),(0,i.kt)("p",null,"Text color for the focused row",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"align"},"align"),(0,i.kt)("p",null,"Align the content to center, right ot left",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"WheelPickerAlign ")," "),(0,i.kt)("h3",{id:"inactivetextcolor"},"inactiveTextColor"),(0,i.kt)("p",null,"Text color for other, non-focused rows",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"initialvalue"},"initialValue"),(0,i.kt)("p",null,"Initial value (uncontrolled)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number | string ")," "),(0,i.kt)("h3",{id:"itemheight"},"itemHeight"),(0,i.kt)("p",null,"Height of each item in the WheelPicker",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"items"},"items"),(0,i.kt)("p",null,"Data source for WheelPicker",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"WheelPickerItemProps[] ")," "),(0,i.kt)("h3",{id:"label"},"label"),(0,i.kt)("p",null,"Additional label to render next to the items text",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"labelprops"},"labelProps"),(0,i.kt)("p",null,"Additional label's props",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextProps ")," "),(0,i.kt)("h3",{id:"labelstyle"},"labelStyle"),(0,i.kt)("p",null,"Additional label's style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,i.kt)("h3",{id:"numberofvisiblerows"},"numberOfVisibleRows"),(0,i.kt)("p",null,"Number of rows visible",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"onchange"},"onChange"),(0,i.kt)("p",null,"Change item event callback",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(item: string | number, index: number) => void ")," "),(0,i.kt)("h3",{id:"separatorsstyle"},"separatorsStyle"),(0,i.kt)("p",null,"Extra style for the separators",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"style"},"style"),(0,i.kt)("h4",{id:"height-is-computed-according-to-itemheight--numberofvisiblerows"},"height is computed according to itemHeight * numberOfVisibleRows"),(0,i.kt)("p",null,"Container's custom style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"testid"},"testID"),(0,i.kt)("p",null,"test identifier",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"textstyle"},"textStyle"),(0,i.kt)("p",null,"Row text custom style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")))}s.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var a,l,c=i(e),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))r.call(a,s)&&(c[s]=a[s]);if(t){l=t(a);for(var p=0;p<l.length;p++)n.call(a,l[p])&&(c[l[p]]=a[l[p]])}}return c}},1535:(e,t,r)=>{var n=r(2525),i=60103,o=60106;var a=60109,l=60110,c=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),l=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}function y(){}function k(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var v=k.prototype=new y;v.constructor=k,n(v,h.prototype),v.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:g.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var x=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return a=a(c=e),e=""===n?"."+N(c,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),C(a,t,r,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(x,"$&/")+"/")+e)),t.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+N(l=e[u],u);c+=C(l,t,r,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(l=e.next()).done;)c+=C(l=l.value,t,r,s=n+N(l,u++),a);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function S(e,t,r){if(null==e)return e;var n=[],i=0;return C(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function W(){var e=T.current;if(null===e)throw Error(d(321));return e}},7378:(e,t,r)=>{r(1535)}}]);
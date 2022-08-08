/*! For license information please see dadf8b8b.46587898.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[7323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2358:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7378),n(3905));const a={id:"PageControl",title:"PageControl",sidebar_label:"PageControl"},i=void 0,l={unversionedId:"components/navigation/PageControl",id:"components/navigation/PageControl",isDocsHomePage:!1,title:"PageControl",description:"Page indicator, typically used in paged scroll-views",source:"@site/../docs/components/navigation/PageControl.md",sourceDirName:"components/navigation",slug:"/components/navigation/PageControl",permalink:"/react-native-ui-lib/docs/components/navigation/PageControl",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/navigation/PageControl.md",tags:[],version:"current",frontMatter:{id:"PageControl",title:"PageControl",sidebar_label:"PageControl"},sidebar:"tutorialSidebar",previous:{title:"Fader",permalink:"/react-native-ui-lib/docs/components/navigation/Fader"},next:{title:"TabController",permalink:"/react-native-ui-lib/docs/components/navigation/TabController/TabController"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"color",id:"color",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"currentPage",id:"currentpage",children:[]},{value:"enlargeActive",id:"enlargeactive",children:[]},{value:"inactiveColor",id:"inactivecolor",children:[]},{value:"limitShownPages",id:"limitshownpages",children:[]},{value:"numOfPages",id:"numofpages",children:[]},{value:"onPagePress",id:"onpagepress",children:[]},{value:"size",id:"size",children:[]},{value:"spacing",id:"spacing",children:[]},{value:"testID",id:"testid",children:[]}]}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Page indicator, typically used in paged scroll-views",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/PageControlScreen.tsx"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,o.kt)("img",{style:{maxHeight:"420px"},src:"https://user-images.githubusercontent.com/1780255/107114259-2e278d00-686d-11eb-866c-59f3d410d6c3.gif"})),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<PageControl numOfPages={5} currentPage={0}/>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"color"},"color"),(0,o.kt)("p",null,"Color of the selected page dot and, if inactiveColor not passed, the border of the not selected pages",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,o.kt)("p",null,"Additional styles for the top container",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"currentpage"},"currentPage"),(0,o.kt)("p",null,"Zero-based index of the current page",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"enlargeactive"},"enlargeActive"),(0,o.kt)("p",null,"Whether to enlarge the active page indicator. Irrelevant when limitShownPages is in effect.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"inactivecolor"},"inactiveColor"),(0,o.kt)("p",null,"Color of the unselected page dots and the border of the not selected pages",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"limitshownpages"},"limitShownPages"),(0,o.kt)("p",null,"Limit the number of page indicators shown.\\enlargeActive prop is disabled in this state, when set to true there will be maximum of 7 shown.\\Only relevant when numOfPages > 5.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"numofpages"},"numOfPages"),(0,o.kt)("p",null,"Total number of pages",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"onpagepress"},"onPagePress"),(0,o.kt)("p",null,"Action handler for clicking on a page indicator",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(index: number) => void ")," "),(0,o.kt)("h3",{id:"size"},"size"),(0,o.kt)("p",null,"The size of the page indicator.\\When setting limitShownPages the medium sized will be 2/3 of size and the small will be 1/3 of size.\\An alternative is to send an array ","[smallSize, mediumSize, largeSize]",".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number | [number, number, number] ")," "),(0,o.kt)("h3",{id:"spacing"},"spacing"),(0,o.kt)("p",null,"The space between the siblings page indicators",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"testid"},"testID"),(0,o.kt)("p",null,"Used to identify the pageControl in tests",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")))}p.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,c=o(e),s=1;s<arguments.length;s++){for(var p in i=Object(arguments[s]))n.call(i,p)&&(c[p]=i[p]);if(t){l=t(i);for(var u=0;u<l.length;u++)r.call(i,l[u])&&(c[l[u]]=i[l[u]])}}return c}},1535:(e,t,n)=>{var r=n(2525),o=60103,a=60106;var i=60109,l=60110,c=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),l=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),s=u("react.memo"),p=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=y.prototype=new b;v.constructor=y,r(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),p=0;p<c;p++)s[p]=arguments[p+2];a.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+S(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),N(i,t,n,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=r+S(l=e[s],s);c+=N(l,t,n,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(l=e.next()).done;)c+=N(l=l.value,t,n,p=r+S(l,s++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function x(e,t,n){if(null==e)return e;var r=[],o=0;return N(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function T(){var e=E.current;if(null===e)throw Error(d(321));return e}},7378:(e,t,n)=>{n(1535)}}]);
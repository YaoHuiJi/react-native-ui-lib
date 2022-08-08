/*! For license information please see 77bc2782.36ab4408.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[5860],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8554:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7378),r(3905));const a={sidebar_position:1,id:"TabController",title:"TabController",sidebar_label:"TabController"},l=void 0,i={unversionedId:"components/layoutsAndTemplates/TabController/TabController",id:"components/layoutsAndTemplates/TabController/TabController",isDocsHomePage:!1,title:"TabController",description:"A performant solution for a tab controller with lazy load mechanism",source:"@site/../docs/components/layoutsAndTemplates/TabController/TabController.md",sourceDirName:"components/layoutsAndTemplates/TabController",slug:"/components/layoutsAndTemplates/TabController/TabController",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/TabController/TabController",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/layoutsAndTemplates/TabController/TabController.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"TabController",title:"TabController",sidebar_label:"TabController"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"asCarousel",id:"ascarousel",children:[]},{value:"carouselPageWidth;",id:"carouselpagewidth",children:[]},{value:"initialIndex",id:"initialindex",children:[]},{value:"items",id:"items",children:[]},{value:"onChangeIndex",id:"onchangeindex",children:[]},{value:"selectedIndex",id:"selectedindex",children:[]}]}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A performant solution for a tab controller with lazy load mechanism",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/TabControllerScreen/index.tsx"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TabController items={[{label: 'First'}, {label: 'Second'}, {label: 'Third'}]}>\n <TabController.TabBar enableShadows/>\n <View flex>\n   <TabController.TabPage index={0}>{renderFirstPage()}</TabController.TabPage>\n   <TabController.TabPage index={1} lazy>{renderSecondPage()}</TabController.TabPage>\n   <TabController.TabPage index={2} lazy>{renderThirdPage()}</TabController.TabPage>\n </View>\n</TabController>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"ascarousel"},"asCarousel"),(0,o.kt)("p",null,"When using TabController.PageCarousel this should be turned on",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"carouselpagewidth"},"carouselPageWidth;"),(0,o.kt)("p",null,"Pass for custom carousel page width",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"initialindex"},"initialIndex"),(0,o.kt)("p",null,"Initial selected index",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"items"},"items"),(0,o.kt)("p",null,"The list of tab bar items",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"TabControllerItemProps[] ")," "),(0,o.kt)("h3",{id:"onchangeindex"},"onChangeIndex"),(0,o.kt)("p",null,"Callback for when index has change (will not be called on ignored items)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(index: number, prevIndex: number | null) => void ")," "),(0,o.kt)("h3",{id:"selectedindex"},"selectedIndex"),(0,o.kt)("p",null,"The current selected index",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")))}s.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,i,c=o(e),u=1;u<arguments.length;u++){for(var s in l=Object(arguments[u]))r.call(l,s)&&(c[s]=l[s]);if(t){i=t(l);for(var p=0;p<i.length;p++)n.call(l,i[p])&&(c[i[p]]=l[i[p]])}}return c}},1535:(e,t,r)=>{var n=r(2525),o=60103,a=60106;var l=60109,i=60110,c=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),l=p("react.provider"),i=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}function h(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var v=g.prototype=new h;v.constructor=g,n(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},T=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)T.call(t,n)&&!C.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:l,ref:i,props:a,_owner:k.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return l=l(c=e),e=""===n?"."+x(c,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),P(l,t,r,"",(function(e){return e}))):null!=l&&(O(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(j,"$&/")+"/")+e)),t.push(l)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+x(i=e[u],u);c+=P(i,t,r,s,l)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(i=e.next()).done;)c+=P(i=i.value,t,r,s=n+x(i,u++),l);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function _(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function A(){var e=N.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,r)=>{r(1535)}}]);
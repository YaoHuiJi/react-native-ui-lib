/*! For license information please see 52c1f300.40b73ae8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[6947],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7378),n(3905)),a=["components"],l={id:"SkeletonView",title:"SkeletonView",sidebar_label:"SkeletonView"},c=void 0,u={unversionedId:"components/layoutsAndTemplates/SkeletonView",id:"components/layoutsAndTemplates/SkeletonView",isDocsHomePage:!1,title:"SkeletonView",description:"Allows showing a temporary skeleton view while your real view is loading",source:"@site/../docs/components/layoutsAndTemplates/SkeletonView.md",sourceDirName:"components/layoutsAndTemplates",slug:"/components/layoutsAndTemplates/SkeletonView",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/SkeletonView",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/layoutsAndTemplates/SkeletonView.md",tags:[],version:"current",frontMatter:{id:"SkeletonView",title:"SkeletonView",sidebar_label:"SkeletonView"},sidebar:"tutorialSidebar",previous:{title:"TopBar",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/Modal/Modal.TopBar"},next:{title:"StateScreen",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/StateScreen"}},s=[{value:"API",id:"api",children:[{value:"borderRadius",id:"borderradius",children:[]},{value:"circle",id:"circle",children:[]},{value:"customValue",id:"customvalue",children:[]},{value:"height",id:"height",children:[]},{value:"listProps",id:"listprops",children:[]},{value:"renderContent",id:"rendercontent",children:[]},{value:"showContent",id:"showcontent",children:[]},{value:"style",id:"style",children:[]},{value:"template",id:"template",children:[]},{value:"testID",id:"testid",children:[]},{value:"times",id:"times",children:[]},{value:"timesKey",id:"timeskey",children:[]},{value:"width",id:"width",children:[]}]}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Allows showing a temporary skeleton view while your real view is loading",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/SkeletonViewScreen.tsx"},"(code example)")),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Skeleton/Skeleton.gif?raw=true"})),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"borderradius"},"borderRadius"),(0,i.kt)("p",null,"The border radius of the skeleton view",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"circle"},"circle"),(0,i.kt)("p",null,"Whether the skeleton is a circle (will override the borderRadius)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"customvalue"},"customValue"),(0,i.kt)("p",null,"Custom value of any type to pass on to SkeletonView and receive back in the renderContent callback.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"any ")," "),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("p",null,"The height of the skeleton view",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"listprops"},"listProps"),(0,i.kt)("p",null,"Props that are available when using template={SkeletonView.templates.LIST_ITEM}",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"SkeletonListProps ")," "),(0,i.kt)("h3",{id:"rendercontent"},"renderContent"),(0,i.kt)("p",null,"A function that will render the content once the content is ready (i.e. showContent is true). The method will be called with the Skeleton's customValue (i.e. renderContent(props?.customValue))",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(customValue?: any) => React.ReactNode ")," "),(0,i.kt)("h3",{id:"showcontent"},"showContent"),(0,i.kt)("p",null,"The content has been loaded, start fading out the skeleton and fading in the content",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"style"},"style"),(0,i.kt)("p",null,"Override container styles",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"template"},"template"),(0,i.kt)("p",null,"The type of the skeleton view.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"listItem | content ")," "),(0,i.kt)("h3",{id:"testid"},"testID"),(0,i.kt)("p",null,"The component test id",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"times"},"times"),(0,i.kt)("p",null,"Generates duplicate skeletons",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"timeskey"},"timesKey"),(0,i.kt)("p",null,"A key prefix for the duplicated SkeletonViews",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("p",null,"The width of the skeleton view",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,l,c=o(e),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))n.call(a,s)&&(c[s]=a[s]);if(t){l=t(a);for(var p=0;p<l.length;p++)r.call(a,l[p])&&(c[l[p]]=a[l[p]])}}return c}},1535:function(e,t,n){var r=n(2525),o=60103,i=60106;var a=60109,l=60110,c=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),l=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var v=b.prototype=new k;v.constructor=b,r(v,y.prototype),v.isPureReactComponent=!0;var w={current:null},g=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)g.call(t,r)&&!S.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+C(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),T(a,t,n,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(N,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+C(l=e[u],u);c+=T(l,t,n,s,a)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),u=0;!(l=e.next()).done;)c+=T(l=l.value,t,n,s=r+C(l,u++),a);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function V(){var e=_.current;if(null===e)throw Error(f(321));return e}},7378:function(e,t,n){n(1535)}}]);
/*! For license information please see c9a63a4e.62996623.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[4901],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8660:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7378),n(3905)),o=["components"],l={sidebar_position:4,sidebar_label:"Modifiers",title:"Modifiers"},u=void 0,s={unversionedId:"foundation/modifiers",id:"foundation/modifiers",isDocsHomePage:!1,title:"Modifiers",description:"As you have probably noticed already, we translate our style presets into modifiers.",source:"@site/../docs/foundation/modifiers.md",sourceDirName:"foundation",slug:"/foundation/modifiers",permalink:"/react-native-ui-lib/docs/foundation/modifiers",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/foundation/modifiers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Modifiers",title:"Modifiers"},sidebar:"tutorialSidebar",previous:{title:"Assets",permalink:"/react-native-ui-lib/docs/foundation/assets"},next:{title:"ThemeManager",permalink:"/react-native-ui-lib/docs/foundation/theme-manager"}},p=[{value:"Layout Modifiers",id:"layout-modifiers",children:[]},{value:"Spacing Modifiers",id:"spacing-modifiers",children:[]},{value:"Position Modifiers",id:"position-modifiers",children:[]},{value:"Styling Modifiers",id:"styling-modifiers",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As you have probably noticed already, we translate our style presets into modifiers.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Modifiers")," help you create a stunning UI easily and quickly."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[!IMPORTANT]"),(0,a.kt)("br",{parentName:"p"}),"\n","Make sure to use modifiers only on UILib components, as some modifiers can cause issues on Android when used on React Native components directly."),(0,a.kt)("h2",{id:"layout-modifiers"},"Layout Modifiers"),(0,a.kt)("p",null,"Use our alignment properties to quickly position the content of your view without getting confused calculating all those flex rules."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"flex - apply ",(0,a.kt)("inlineCode",{parentName:"li"},"flex:1")," on a view "),(0,a.kt)("li",{parentName:"ul"},"flex-","[value]"," - When you want to control the flex value"),(0,a.kt)("li",{parentName:"ul"},"flexS - FlexShrink "),(0,a.kt)("li",{parentName:"ul"},"flexG - FlexGrow"),(0,a.kt)("li",{parentName:"ul"},"left"),(0,a.kt)("li",{parentName:"ul"},"top"),(0,a.kt)("li",{parentName:"ul"},"right"),(0,a.kt)("li",{parentName:"ul"},"bottom"),(0,a.kt)("li",{parentName:"ul"},"row - change direction to row (default is column)"),(0,a.kt)("li",{parentName:"ul"},"center"),(0,a.kt)("li",{parentName:"ul"},"centerH - center content horizontally"),(0,a.kt)("li",{parentName:"ul"},"centerV - center content vertically"),(0,a.kt)("li",{parentName:"ul"},"spread - spread content (similar to ",(0,a.kt)("inlineCode",{parentName:"li"},"space-between"),")")),(0,a.kt)("p",null,"! Notice that the layout modifiers affect the View's children"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<View flex left>\n  <Button label="Button" />\n</View>\n\n<View flex right>\n  <Button label="Button" />\n</View>\n\n<View flex top>\n  <Button label="Button" />\n</View>\n\n<View flex bottom>\n  <Button label="Button" />\n</View>\n\n<View flex center>\n  <Button label="Button" />\n</View>\n')),(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798566/4de91efc-1b9f-11e7-9974-e06e3daa7c63.png",width:"160"})," ",(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798569/50dc99a4-1b9f-11e7-8231-fbcbb139a010.png",width:"160"})," ",(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798571/52766d08-1b9f-11e7-95a3-b2b262e81170.png",width:"160"})," ",(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798572/545b7abe-1b9f-11e7-9098-409ceee6ff22.png",width:"160"})," ",(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798575/55e3c4f4-1b9f-11e7-998d-7986a038abb6.png",width:"160"}),(0,a.kt)("h2",{id:"spacing-modifiers"},"Spacing Modifiers"),(0,a.kt)("p",null,"It's always important to use your margins and paddings correctly, and that's also easier to do with modifiers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"padding-","[value]"," - will add padding to all corners (e.g. padding-30 will add 30 pt of padding)"),(0,a.kt)("li",{parentName:"ul"},"paddingL-","[value]"," - Left padding"),(0,a.kt)("li",{parentName:"ul"},"paddingT-","[value]"," - Top padding"),(0,a.kt)("li",{parentName:"ul"},"paddingR-","[value]"," - Right padding"),(0,a.kt)("li",{parentName:"ul"},"paddingB-","[value]"," - Bottom padding"),(0,a.kt)("li",{parentName:"ul"},"paddingH-","[value]"," - Horizontal padding"),(0,a.kt)("li",{parentName:"ul"},"paddingV-","[value]"," - Vertical padding")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<View paddingV-20 paddingH-30>...</View>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"margin-","[value]"),(0,a.kt)("li",{parentName:"ul"},"marginL-","[value]"," - Left margin"),(0,a.kt)("li",{parentName:"ul"},"marginT-","[value]"," - Top margin"),(0,a.kt)("li",{parentName:"ul"},"marginR-","[value]"," - Right margin"),(0,a.kt)("li",{parentName:"ul"},"marginB-","[value]"," - Bottom margin"),(0,a.kt)("li",{parentName:"ul"},"marginH-","[value]"," - Horizontal margin"),(0,a.kt)("li",{parentName:"ul"},"marginV-","[value]"," - Vertical margin")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<View marginT-5 marginB-10>...</View>\n")),(0,a.kt)("p",null,"! padding and margin modifiers can also take ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/src/style/spacings.ts"},"Spacing")," constants. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<View margin-s5 padding-s2>...</View>\n")),(0,a.kt)("h2",{id:"position-modifiers"},"Position Modifiers"),(0,a.kt)("p",null,"Use the position modifiers to quickly set an absolute position for your views."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"abs")," will set the absolute position on your View"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"absL"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"absT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"absR"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"absB")," - set the absolute position and align to Left, Top, Right, Bottom accordingly"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"absH")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"absV")," - position absolute and stretch horizontally or vertically"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"absF")," will set the absolute position and fill the parent view (similar to StyleSheet.absoluteFillObject)")),(0,a.kt)("h2",{id:"styling-modifiers"},"Styling Modifiers"),(0,a.kt)("p",null,"The last type of modifiers is for styling your components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[colorKey]"," - Controls the color of text components"),(0,a.kt)("li",{parentName:"ul"},"background-","[colorKey]"," (or bg-","[colorKey]",") - Background color ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Text blue30>...</Text>\n<View bg-grey70>...</View>\n<TouchableOpacity bg-red30/>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[typographyKey]"," - Controls the typography of text components ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Text text70>...</Text>\n<TextInput text80/>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"br","[borderRadiusKey]"," - Set the border radius for the view (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"br10"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"br20"),", .., ",(0,a.kt)("inlineCode",{parentName:"li"},"br60"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<View br40>...</View>\n")),(0,a.kt)("p",null,"! all styling modifiers are based on our ",(0,a.kt)("a",{parentName:"p",href:"/docs/foundation/style"},(0,a.kt)("inlineCode",{parentName:"a"},"Colors")," & ",(0,a.kt)("inlineCode",{parentName:"a"},"Typography")," presets"),".",(0,a.kt)("br",{parentName:"p"}),"\n","You can load your own presets and use them as modifiers. "),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/usage"},"this example")," where we use most of these props."))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,a){for(var o,l,u=i(e),s=1;s<arguments.length;s++){for(var p in o=Object(arguments[s]))n.call(o,p)&&(u[p]=o[p]);if(t){l=t(o);for(var c=0;c<l.length;c++)r.call(o,l[c])&&(u[l[c]]=o[l[c]])}}return u}},1535:function(e,t,n){var r=n(2525),i=60103,a=60106;var o=60109,l=60110,u=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;i=c("react.element"),a=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),o=c("react.provider"),l=c("react.context"),u=c("react.forward_ref"),c("react.suspense"),s=c("react.memo"),p=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var h=k.prototype=new b;h.constructor=k,r(h,y.prototype),h.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,r)&&!N.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var s=Array(u),p=0;p<u;p++)s[p]=arguments[p+2];a.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:i,type:e,key:o,ref:l,props:a,_owner:v.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var x=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case a:u=!0}}if(u)return o=o(u=e),e=""===r?"."+C(u,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),S(o,t,n,"",(function(e){return e}))):null!=o&&(O(o)&&(o=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(x,"$&/")+"/")+e)),t.push(o)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=r+C(l=e[s],s);u+=S(l,t,n,p,o)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),s=0;!(l=e.next()).done;)u+=S(l=l.value,t,n,p=r+C(l,s++),o);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function V(e,t,n){if(null==e)return e;var r=[],i=0;return S(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function _(){var e=P.current;if(null===e)throw Error(f(321));return e}},7378:function(e,t,n){n(1535)}}]);
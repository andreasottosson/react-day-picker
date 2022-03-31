"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80],{6367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>g,toc:()=>f});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),l=["components"],i=[{value:"v8.0.1",id:"v801",level:3},{value:"v8.0",id:"v80",level:2},{value:"Notable changes",id:"notable-changes",level:3},{value:"Older changelog",id:"older-changelog",level:2}],p={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"v801"},"v8.0.1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"added React 18 to the peer dependencies")),(0,o.kt)("h2",{id:"v80"},"v8.0"),(0,o.kt)("p",null,"Introduce mayor breaking changes and is mostly incompatible with v7. Head over the ",(0,o.kt)("a",{parentName:"p",href:"https://react-day-picker.js.org"},"redesigned website")," for more details."),(0,o.kt)("h3",{id:"notable-changes"},"Notable changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"added ",(0,o.kt)("a",{parentName:"li",href:"http://date-fns.org"},"date-fns")," library as peer dependecy"),(0,o.kt)("li",{parentName:"ul"},"native TypeScript support"),(0,o.kt)("li",{parentName:"ul"},"selection modes: single, multiple, range"),(0,o.kt)("li",{parentName:"ul"},"improved ARIA support"),(0,o.kt)("li",{parentName:"ul"},"replaced ",(0,o.kt)("inlineCode",{parentName:"li"},"DayPickerInput")," component with ",(0,o.kt)("inlineCode",{parentName:"li"},"useInput")," hook"),(0,o.kt)("li",{parentName:"ul"},"new features and tons of improvements")),(0,o.kt)("p",null,"See also: \u27a1\ufe0f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://react-day-picker.js.org/guides/upgrading"},"Upgrading from v7")),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"older-changelog"},"Older changelog"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/v7/CHANGELOG.md"},"/v7/CHANGELOG.md")," for the changelog of versions before 8."))}c.isMDXComponent=!0;var u=["components"],s={title:"Changelog",hide_title:!0,pagination_next:null,pagination_prev:null},d=void 0,g={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/changelog",tags:[],version:"current",frontMatter:{title:"Changelog",hide_title:!0,pagination_next:null,pagination_prev:null},sidebar:"developmentSidebar"},m={},f=i,h={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"ChangeLog"}))}v.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
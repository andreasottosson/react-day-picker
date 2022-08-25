"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3913],{5023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(2685),i=n(1244),a=(n(7378),n(5318)),o=["components"],p={},l="Input Fields",s={unversionedId:"guides/input-fields",id:"guides/input-fields",title:"Input Fields",description:"It is a common scenario to bind the date picker with an input field. Since these kind of implementations may have different requirements, DayPicker doesn't come with an input field component.",source:"@site/docs/guides/input-fields.md",sourceDirName:"guides",slug:"/guides/input-fields",permalink:"/guides/input-fields",draft:!1,editUrl:"https://github.com/gpbl/react-day-picker/edit/master/website/docs/guides/input-fields.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Custom Components",permalink:"/guides/custom-components"},next:{title:"Upgrading from v7",permalink:"/guides/upgrading"}},c={},u=[{value:"Example: Date Picker Dialog",id:"example-date-picker-dialog",level:2},{value:"Example: Range Selection",id:"example-range-selection",level:2},{value:"Using the <code>useInput</code> Hook",id:"using-the-useinput-hook",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"input-fields"},"Input Fields"),(0,a.kt)("p",null,"It is a common scenario to bind the date picker with an input field. Since these kind of implementations may have different requirements, DayPicker doesn't come with an input field component."),(0,a.kt)("p",null,"It is easy to build a custom input field that works together with DayPicker:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"when the input field changes, parse its value and set the selected day in DayPicker"),(0,a.kt)("li",{parentName:"ol"},"when a day is selected from DayPicker, set the input value formatting the selected date.")),(0,a.kt)("h2",{id:"example-date-picker-dialog"},"Example: Date Picker Dialog"),(0,a.kt)("p",null,"Implement a DayPicker dialog according to the WAI-ARIA\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html"},"dialog pattern")," for date pickers."),(0,a.kt)("p",null,"The following example uses ",(0,a.kt)("a",{parentName:"p",href:"https://popper.js.org/react-popper/"},"react-popper")," for the popover."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-include-example",metastring:"dependencies=popper,react-popper,@popperjs/core,focus-trap-react,prop-types",dependencies:"popper,react-popper,@popperjs/core,focus-trap-react,prop-types"},"date-picker-dialog\n")),(0,a.kt)("h2",{id:"example-range-selection"},"Example: Range Selection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-include-example"},"input-range\n")),(0,a.kt)("h2",{id:"using-the-useinput-hook"},"Using the ",(0,a.kt)("inlineCode",{parentName:"h2"},"useInput")," Hook"),(0,a.kt)("p",null,"To bind DayPicker to an input field, DayPicker includes the ",(0,a.kt)("a",{parentName:"p",href:"/api/functions/useinput"},"useInput hook"),", returning props to bind DayPicker with a single input field. Should you need something more sophisticated, give a look to the ",(0,a.kt)("a",{parentName:"p",href:"/api/functions/useinput"},"useInput")," source to implement your own hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-include-example"},"useinput.tsx\n")))}m.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
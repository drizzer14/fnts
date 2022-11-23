"use strict";(self.webpackChunkfnts_docs=self.webpackChunkfnts_docs||[]).push([[426],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),c=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=r,d=u["".concat(a,".").concat(f)]||u[f]||m[f]||i;return t?o.createElement(d,s(s({ref:n},l),{},{components:t})):o.createElement(d,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7337:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={id:"composition",slug:"/concepts/composition",title:"Composition"},s=void 0,p={unversionedId:"concepts/composition",id:"concepts/composition",title:"Composition",description:"Composition in fnts is represented through the compose and pipe functions.",source:"@site/docs/concepts/composition.md",sourceDirName:"concepts",slug:"/concepts/composition",permalink:"/fnts/concepts/composition",draft:!1,editUrl:"https://github.com/drizzer14/fnts/docs/docs/concepts/composition.md",tags:[],version:"current",frontMatter:{id:"composition",slug:"/concepts/composition",title:"Composition"},sidebar:"default",previous:{title:"Arguments Permutation",permalink:"/fnts/concepts/arguments-permutation"},next:{title:"Currying",permalink:"/fnts/concepts/currying"}},a={},c=[],l={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Composition in ",(0,r.kt)("inlineCode",{parentName:"p"},"fnts")," is represented through the ",(0,r.kt)("inlineCode",{parentName:"p"},"compose")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe")," functions.\nBoth accept two functions at a time, allowing for safer type inference which\nis not always possible with overloads or event without them (which happened\nin 1.x versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"fnts"),")."),(0,r.kt)("p",null,"Commonly, as well as in ",(0,r.kt)("inlineCode",{parentName:"p"},"fnts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"compose")," is used to apply a list of functions\nto an argument, passing the result of each application to the next one in a ",(0,r.kt)("strong",{parentName:"p"},"\nright to left")," order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import compose from 'fnts/compose';\n\nconst isTwoDigits = compose(\n  compose(\n    (b: boolean) => b ? 'true' : 'false',\n    (s: string) => s.length === 2 // argument type imposed from the next function\n  ),\n  (n: number) => `${n}`,\n); // will accept only a number as argument\n\nisTwoDigits(5) === 'false';\nisTwoDigits(14) === 'true';\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pipe"),", on the other hand, is executed in a more familiar ",(0,r.kt)("strong",{parentName:"p"},"left to right"),"\norder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import pipe from 'fnts/pipe';\n\nconst isTwoDigits = pipe(\n  pipe(\n    (n: number) => `${n}`,\n    (s: string) => s.length === 2\n  ),\n  (b: boolean) => b ? 'true' : 'false',\n);\n\nisTwoDigits(5) === 'false';\nisTwoDigits(14) === 'true';\n")),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"compose")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe")," allow for their first to-be-executed function to\nhave multiple arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import compose from 'fnts/compose';\n\nconst isEvenSum = compose(\n  compose(\n    (b: boolean) => b ? 'true' : 'false',\n    (s: number) => s % 2 === 0\n  ),\n  (a: number, b: number) => a + b,\n);\n\nisEvenSum(2, 2) === 'true';\nisEvenSum(17, 32) === 'false';\n")))}m.isMDXComponent=!0}}]);
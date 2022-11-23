"use strict";(self.webpackChunkfnts_docs=self.webpackChunkfnts_docs||[]).push([[14],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||i;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={id:"currying",slug:"/concepts/currying",title:"Currying"},o=void 0,c={unversionedId:"concepts/currying",id:"concepts/currying",title:"Currying",description:"The curry function is here to help with auto-currying of variadic or fixed",source:"@site/docs/concepts/currying.md",sourceDirName:"concepts",slug:"/concepts/currying",permalink:"/fnts/concepts/currying",draft:!1,editUrl:"https://github.com/drizzer14/fnts/docs/docs/concepts/currying.md",tags:[],version:"current",frontMatter:{id:"currying",slug:"/concepts/currying",title:"Currying"},sidebar:"default",previous:{title:"Composition",permalink:"/fnts/concepts/composition"},next:{title:"Guarding",permalink:"/fnts/concepts/guarding"}},s={},u=[],p={toc:u};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"curry"),' function is here to help with auto-currying of variadic or fixed\namount of arguments. It does not provide the "placeholder" feature like in\nramda, as in JavaScripts, where placeholders are rather a syntetic feature, its\ncost would be to run a loop on each call of the source function\'s curried\nderivatives.'),(0,a.kt)("p",null,"By default it curries up to the function's ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," which can be determined only\nif the function has a fixed amount of declared arguments without the optional\nones."),(0,a.kt)("p",null,"E.g. this function will be predictably curried for up to three consecutive\ncalls:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function sumOfThree (a: number, b: number, c: number): number {\n  return a + b + c;\n}\n\ncurry(sumOfThree)(1)(2)(3);\n")),(0,a.kt)("p",null,"While the next one is gonna be unable to determine the amount of curries to\nperform, so it must be specified manually:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function sum (...args: number[]): number {\n  return args.reduce((a, c) => a + c, 0);\n}\n\nconst sumOfThree = curry(sum, 3)(1)(2)(3);\n")),(0,a.kt)("p",null,"Curried arguments can be passed in any combinations as long as the final amount\nof them is given in the end and the order is preserved:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const curriedSumOfThree = curry(sumOfThree);\n\ncurriedSumOfThree(1, 2, 3) ===\ncurriedSumOfThree(1, 2)(3) ===\ncurriedSumOfThree(1)(2, 3) ===\ncurriedSumOfThree(1)(2)(3);\n")),(0,a.kt)("p",null,"To allow for currying with permutations take a look at\nthe ",(0,a.kt)("a",{parentName:"p",href:"/concepts/arguments-permutation"},"Arguments Permutation")," concept."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"One big downside to this, is that it is not always reliable with generic\nfunctions. For example (taken from\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/drizzer14/fnts/issues/16"},"issue")," on GitHub):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import curry from "fnts/curry";\n\ndeclare function map<A, B> (as: A[], f: (a: A) => B): B[];\n\nconst mapC = curry(map);\n\ndeclare const as: number[];\n\nconst bs = mapC(as, (x) => x > 0);\nconst bs2 = mapC(as)((x) => x > 0);\n')),(0,a.kt)("p",null,"This code is not type-safe right where ",(0,a.kt)("inlineCode",{parentName:"p"},"mapC")," is used. ",(0,a.kt)("inlineCode",{parentName:"p"},"bs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bs2")," have\nmapping functions on their right side, the ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"argument of which cannot be\nassigned a type and has ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")," inferred instead. One way to beat this is to\nexplicitly cast ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),", although I don't think it's a \"good\" way to\nuse this library and TypeScript in general."),(0,a.kt)("p",null,"The issue above comes from\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/30369"},"language itself")," and\nat this moment in time cannot be fixed by the library."))}l.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkfnts_docs=self.webpackChunkfnts_docs||[]).push([[14],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=i,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||o;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2666:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={id:"currying",slug:"/concepts/currying",title:"Currying"},u=void 0,s={unversionedId:"concepts/currying",id:"concepts/currying",isDocsHomePage:!1,title:"Currying",description:"The curry function is here to help with auto-currying of variadic or fixed",source:"@site/docs/concepts/currying.md",sourceDirName:"concepts",slug:"/concepts/currying",permalink:"/fnts/concepts/currying",editUrl:"https://github.com/drizzer14/fnts/docs/docs/concepts/currying.md",tags:[],version:"current",frontMatter:{id:"currying",slug:"/concepts/currying",title:"Currying"},sidebar:"default",previous:{title:"Composition",permalink:"/fnts/concepts/composition"},next:{title:"Guarding",permalink:"/fnts/concepts/guarding"}},p=[],l={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"curry"),' function is here to help with auto-currying of variadic or fixed\namount of arguments. It does not provide the "placeholder" feature like in\nramda, as in JavaScripts, where placeholders are rather a syntetic feature, its\ncost would be to run a loop on each call of the source function\'s curried\nderivatives.'),(0,o.kt)("p",null,"By default it curries up to the function's ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," which can be determined only\nif the function has a fixed amount of declared arguments without the optional\nones."),(0,o.kt)("p",null,"E.g. this function will be predictably curried for up to three consecutive\ncalls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function sumOfThree (a: number, b: number, c: number): number {\n  return a + b + c;\n}\n\ncurry(sumOfThree)(1)(2)(3);\n")),(0,o.kt)("p",null,"While the next one is gonna be unable to determine the amount of curries to\nperform, so it must be specified manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function sum (...args: number[]): number {\n  return args.reduce((a, c) => a + c, 0);\n}\n\nconst sumOfThree = curry(sum, 3)(1)(2)(3);\n")),(0,o.kt)("p",null,"Curried arguments can be passed in any combinations as long as the final amount\nof them is given in the end and the order is preserved:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const curriedSumOfThree = curry(sumOfThree);\n\ncurriedSumOfThree(1, 2, 3) ===\ncurriedSumOfThree(1, 2)(3) ===\ncurriedSumOfThree(1)(2, 3) ===\ncurriedSumOfThree(1)(2)(3);\n")),(0,o.kt)("p",null,"To allow for currying with permutations take a look at\nthe ",(0,o.kt)("a",{parentName:"p",href:"/concepts/arguments-permutation"},"Arguments Permutation")," concept."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"One big downside to this, is that it is not always reliable with generic\nfunctions. For example (taken from\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drizzer14/fnts/issues/16"},"issue")," on GitHub):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import curry from "fnts/curry";\n\ndeclare function map<A, B> (as: A[], f: (a: A) => B): B[];\n\nconst mapC = curry(map);\n\ndeclare const as: number[];\n\nconst bs = mapC(as, (x) => x > 0);\nconst bs2 = mapC(as)((x) => x > 0);\n')),(0,o.kt)("p",null,"This code is not type-safe right where ",(0,o.kt)("inlineCode",{parentName:"p"},"mapC")," is used. ",(0,o.kt)("inlineCode",{parentName:"p"},"bs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bs2")," have\nmapping functions on their right side, the ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"argument of which cannot be\nassigned a type and has ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown")," inferred instead. One way to beat this is to\nexplicitly cast ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"),", although I don't think it's a \"good\" way to\nuse this library and TypeScript in general."),(0,o.kt)("p",null,"The issue above comes from\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/30369"},"language itself")," and\nat this moment in time cannot be fixed by the library."))}m.isMDXComponent=!0}}]);
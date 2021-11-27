"use strict";(self.webpackChunkfnts_docs=self.webpackChunkfnts_docs||[]).push([[223],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),l=s(n),f=o,b=l["".concat(p,".").concat(f)]||l[f]||c[f]||a;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1386:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={id:"arguments-permutation",slug:"/concepts/arguments-permutation",title:"Arguments Permutation"},p=void 0,s={unversionedId:"concepts/arguments-permutation",id:"concepts/arguments-permutation",isDocsHomePage:!1,title:"Arguments Permutation",description:"For non-commutative operations or functions that can be applied in the compositional context it is handy to be able to automatically permutate (switch places of) their arguments. For some functions in fnts this is already implemented:",source:"@site/docs/concepts/arguments-permutation.md",sourceDirName:"concepts",slug:"/concepts/arguments-permutation",permalink:"/concepts/arguments-permutation",editUrl:"https://github.com/drizzer14/fnts/docs/docs/concepts/arguments-permutation.md",tags:[],version:"current",frontMatter:{id:"arguments-permutation",slug:"/concepts/arguments-permutation",title:"Arguments Permutation"},sidebar:"default",previous:{title:"Installation and Usage",permalink:"/installation-and-usage"},next:{title:"Composition",permalink:"/concepts/composition"}},m=[],c={toc:m};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For non-commutative operations or functions that ",(0,a.kt)("em",{parentName:"p"},"can")," be applied in the compositional context it is handy to be able to automatically permutate (switch places of) their arguments. For some functions in ",(0,a.kt)("inlineCode",{parentName:"p"},"fnts")," this is already implemented:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { fmap } from 'fnts/maybe/operators';\n\nconst mapToNumber = (maybe: Maybe<string>): Maybe<number> => fmap(maybe, (value) => Number(value));\n")),(0,a.kt)("p",null,"Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"mapToNumber")," declaration is equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { fmap } from 'fnts/maybe/operators';\n\nconst mapToNumber = fmap<string, number>(Number);\n")),(0,a.kt)("p",null,"On the TypeScript's level this is made possible through the use of function overloads, where for each ",(0,a.kt)("inlineCode",{parentName:"p"},"fmap")," permutation there's a proper overload."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"fnts"),", to allow such an operation, there are two helper functions: ",(0,a.kt)("inlineCode",{parentName:"p"},"permutation2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"permutation3"),". Those functions accept two parameters: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The function to be made permutable. "),(0,a.kt)("li",{parentName:"ol"},"The condition on which to decide if its first argument should be curried and rest shifted to the start. When it's not specified, the permutation function will fall back to the amount of arguments provided.")),(0,a.kt)("p",null,"Let's create a simple permutable function based on the non-commutative operation of subtraction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { permutation2 } from 'fnts/permutation';\n\nfunction subt(b: number): (a: number) => number;\n\nfunction subt(a: number, b: number): number;\n\nfunction subt(...args: [number, number?]) {\n  return permutation2(\n    (a: number, b: number): number => a - b\n  )(...args);\n}\n")),(0,a.kt)("p",null,"Another way to make an overload is to utilize an interface and an arrow function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { permutation2 } from 'fnts/permutation';\n\ninterface Subt {\n  (b: number): (a: number) => number;\n  \n  (a: number, b: number): number;\n}\n\nconst subt = (permutation2(\n    (a: number, b: number): number => a - b\n)) as Subt;\n")),(0,a.kt)("p",null,"Now, our brand new ",(0,a.kt)("inlineCode",{parentName:"p"},"subt")," can be used both without the permutation, as a regular binary function, or with it, if only we desire:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const minusOne = subt(1);\n\nconst amount = subt(1000, 123);\n\nconst decrements = [1, 123, 1000].map(minusOne);\n")))}l.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkfnts_docs=self.webpackChunkfnts_docs||[]).push([[2],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"monads",slug:"/concepts/monads",title:"Monads"},i=void 0,p={unversionedId:"concepts/monads",id:"concepts/monads",title:"Monads",description:"Out of the variety of monads fnts chooses two presumably most suitable ones: maybe and either. Each have their own constructors and operators (as opposed to classes and methods based approach seen commonly).",source:"@site/docs/concepts/monads.md",sourceDirName:"concepts",slug:"/concepts/monads",permalink:"/fnts/concepts/monads",draft:!1,editUrl:"https://github.com/drizzer14/fnts/docs/docs/concepts/monads.md",tags:[],version:"current",frontMatter:{id:"monads",slug:"/concepts/monads",title:"Monads"},sidebar:"default",previous:{title:"Guarding",permalink:"/fnts/concepts/guarding"},next:{title:"Side Effects",permalink:"/fnts/concepts/side-effects"}},s={},l=[{value:"Maybe",id:"maybe",level:2},{value:"Operators",id:"operators",level:3},{value:"Either",id:"either",level:2},{value:"Synchronous either",id:"synchronous-either",level:2},{value:"Guards",id:"guards",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Out of the variety of monads ",(0,r.kt)("inlineCode",{parentName:"p"},"fnts")," chooses two presumably most suitable ones: ",(0,r.kt)("inlineCode",{parentName:"p"},"maybe")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"either"),". Each have their own constructors and operators (as opposed to classes and methods based approach seen commonly)."),(0,r.kt)("h2",{id:"maybe"},"Maybe"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"maybe")," constructor creates an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Maybe")," monad. A nullable value (",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),") produces ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),", any other value \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"Just"),". Each one is just a POJO with a single key \u2013 a unique identifier for the instance, by which it is recognised by some of the operators."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import maybe from 'fnts/maybe';\n\nconst maybeNumber = maybe([1, 2, 3].find((n) => n > 2));\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"maybeNumber")," variable here has a type ",(0,r.kt)("inlineCode",{parentName:"p"},"Maybe<number>")," and holds a value of either ",(0,r.kt)("inlineCode",{parentName:"p"},"just")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"nothing"),"."),(0,r.kt)("h3",{id:"operators"},"Operators"),(0,r.kt)("p",null,"There'd be no much use to it if we could still not perform any operations on ",(0,r.kt)("inlineCode",{parentName:"p"},"maybeNumber"),". That's where operators come into play."),(0,r.kt)("p",null,"An operator is a special function that accepts an instance of the maybe monad and assumes an underlying value (a ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),' in this case) to always be "real", throwing ',(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," away."),(0,r.kt)("p",null,"This way we can operate on it without having to worry about if it's truthy or not every time we have to do something with it."),(0,r.kt)("p",null,"In FP, the distinctive feature of a maybe monad is the ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," operation, which acts similarly to ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.then")," combining the accepted monad and the newly retuned one into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Maybe"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import maybe from 'fnts/maybe';\nimport { bind } from 'fnts/maybe/operators';\n\nbind(\n  maybeNumber,\n  (n) => maybe(n * n)\n); // Maybe<number>\n")),(0,r.kt)("p",null,"Another common example of an operator for ",(0,r.kt)("inlineCode",{parentName:"p"},"Maybe")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"fmap"),", which maps its value onto the new one and returns it wrapped into the monad again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { fmap } from 'fnts/maybe/operators';\n\nconst maybeNumberIncremented = fmap(\n  maybeNumber,\n  (n) => n + 1\n);\n")),(0,r.kt)("p",null,"To get rid of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Maybe")," wrapping we utilise the ",(0,r.kt)("inlineCode",{parentName:"p"},"fold")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { fold } from 'fnts/maybe/operators';\n\nconst numberIncremented = fold(maybeNumberIncremented);\n")),(0,r.kt)("p",null,"A nice thing about ",(0,r.kt)("inlineCode",{parentName:"p"},"fold")," is that it knows which specific constructor it received, and thus can infer the return type based on that information. Here, we can have ",(0,r.kt)("inlineCode",{parentName:"p"},"numberIncremented")," to be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," as long as we're sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"maybeNumberIncremented")," monad was just a ",(0,r.kt)("inlineCode",{parentName:"p"},"Just"),"."),(0,r.kt)("h2",{id:"either"},"Either"),(0,r.kt)("p",null,"Another cool monad in ",(0,r.kt)("inlineCode",{parentName:"p"},"fnts")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Either"),". It works basically the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"Maybe"),", having two constructors \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"Left")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Right")," and a set of operators."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"either")," function accepts an asynchronous function in its argument, successful result of which becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"Right"),", and the thrown error \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"Left"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import tap from 'fnts/tap';\nimport either from 'fnts/either';\nimport identity from 'fnts/identity';\nimport { bifoldMap } from 'fnts/either/operators';\n\nbifoldMap(\n  await either(\n    () => fetch('https://github.com')\n  ),\n  tap(console.error),\n  identity\n)\n")),(0,r.kt)("h2",{id:"synchronous-either"},"Synchronous either"),(0,r.kt)("p",null,"For safely performing synchronous tasks that still may fail with an error, there is the ",(0,r.kt)("inlineCode",{parentName:"p"},"eitherSync")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import eitherSync from 'fnts/either';\nimport { bifoldMap } from 'fnts/either/operators';\n\nbifoldMap(\n  eitherSync(\n   () => JSON.parse(localStorage.getItem('context'))\n  ),\n  (error) => console.error(error),\n  (data) => data\n);\n")),(0,r.kt)("h2",{id:"guards"},"Guards"),(0,r.kt)("p",null,"Every monad instance can be validated through the pre-defined ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards"},"type guard")," functions: ",(0,r.kt)("inlineCode",{parentName:"p"},"isJust"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isNothing"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isLeft"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isRight"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import maybe from 'fnts/maybe';\nimport { isJust, fold } from 'fnts/maybe/operators';\n\nisJust(maybeNumber)\n  ? calculate(fold(maybeNumber)) // Just<number>\n  : 0;\n")))}c.isMDXComponent=!0}}]);
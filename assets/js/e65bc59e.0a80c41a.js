"use strict";(self.webpackChunkfnts_docs=self.webpackChunkfnts_docs||[]).push([[528],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||c;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2811:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],a={id:"side-effects",slug:"/concepts/side-effects",title:"Side Effects"},s=void 0,p={unversionedId:"concepts/side-effects",id:"concepts/side-effects",isDocsHomePage:!1,title:"Side Effects",description:"For handling side effects there are a couple of functions, the underlying concept of which is to not interfere with the main execution flow:",source:"@site/docs/concepts/side-effects.md",sourceDirName:"concepts",slug:"/concepts/side-effects",permalink:"/concepts/side-effects",editUrl:"https://github.com/drizzer14/fnts/docs/docs/concepts/side-effects.md",tags:[],version:"current",frontMatter:{id:"side-effects",slug:"/concepts/side-effects",title:"Side Effects"},sidebar:"default",previous:{title:"Monads",permalink:"/concepts/monads"},next:{title:"Overview",permalink:"/api/Overview"}},l=[],f={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"For handling side effects there are a couple of functions, the underlying concept of which is to not interfere with the main execution flow:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import inject from 'fnts/inject';\n\nconst computeAndLog = inject(\n  compute,\n  (...args) => console.log('Computing with args: ', args)\n);\n\ncomputeAndLog(1, 2, 3);\n")),(0,c.kt)("p",null,"The above one, ",(0,c.kt)("inlineCode",{parentName:"p"},"inject"),", makes sure to leave the original function as is, giving us the ability to perform a ",(0,c.kt)("em",{parentName:"p"},"side effect")," on its every call."),(0,c.kt)("p",null,"A couple more, ",(0,c.kt)("inlineCode",{parentName:"p"},"tap")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"rethrow"),", perform exactly that, only ",(0,c.kt)("inlineCode",{parentName:"p"},"tap")," returns (passes through) the received argument, and ",(0,c.kt)("inlineCode",{parentName:"p"},"rethrow"),", you've guessed it, rethrows an error. "),(0,c.kt)("p",null,"Both use ",(0,c.kt)("inlineCode",{parentName:"p"},"inject"),' under the hood, which means it can be used to create more side effect "creators", e.g. a simple logger, like in the example above:'),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import inject from 'fnts/inject';\n\nconst logFn = inject(console.log);\n")))}u.isMDXComponent=!0}}]);
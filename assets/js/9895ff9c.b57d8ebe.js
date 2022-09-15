"use strict";(self.webpackChunkfnts_docs=self.webpackChunkfnts_docs||[]).push([[74],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,c=u["".concat(l,".").concat(k)]||u[k]||s[k]||i;return n?a.createElement(c,p(p({ref:t},m),{},{components:n})):a.createElement(c,p({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var d=2;d<i;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5743:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=["components"],o={},l="Module: Composition",d={unversionedId:"api/modules/Composition",id:"api/modules/Composition",isDocsHomePage:!1,title:"Module: Composition",description:"Type aliases",source:"@site/docs/api/modules/Composition.md",sourceDirName:"api/modules",slug:"/api/modules/Composition",permalink:"/fnts/api/modules/Composition",editUrl:"https://github.com/drizzer14/fnts/docs/docs/api/modules/Composition.md",tags:[],version:"current",frontMatter:{},sidebar:"default",previous:{title:"Overview",permalink:"/fnts/api/Overview"},next:{title:"Module: Curry",permalink:"/fnts/api/modules/Curry"}},m=[{value:"Type aliases",id:"type-aliases",children:[{value:"Composition",id:"composition",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4}],level:3},{value:"Pipeline",id:"pipeline",children:[{value:"Type parameters",id:"type-parameters-1",children:[],level:4}],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"compose",id:"compose",children:[{value:"Type parameters",id:"type-parameters-2",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[{value:"Parameters",id:"parameters-1",children:[],level:5},{value:"Returns",id:"returns-1",children:[],level:5}],level:4}],level:3},{value:"pipe",id:"pipe",children:[{value:"Type parameters",id:"type-parameters-3",children:[],level:4},{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[{value:"Parameters",id:"parameters-3",children:[],level:5},{value:"Returns",id:"returns-3",children:[],level:5}],level:4}],level:3}],level:2}],s={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"module-composition"},"Module: Composition"),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"composition"},"Composition"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Composition"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Length"),">",": ",(0,i.kt)("inlineCode",{parentName:"p"},"Length")," extends ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," ? ",(0,i.kt)("inlineCode",{parentName:"p"},"Functions")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"Functions")," extends ","[...infer Rest, infer Penultimate, infer Last]"," ? [...Composition<Rest extends UnaryFunction[] ? Last extends UnaryFunction ? Penultimate extends UnaryFunction ? ","[...Rest, Function]"," : never : Last extends VariadicFunction ? Penultimate extends UnaryFunction ? ","[...Rest, Function]"," : never : never : never",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Last"),"] : ",(0,i.kt)("inlineCode",{parentName:"p"},"Functions")),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"Composition")," type which parses all of the provided functions' types.\nAny function with either an incorrect argument or a return type will not fit\ninto the composition and should be typed according to it, so that its argument's\ntype matches the return type of the next function and its return type\nmatches the type of the previous function's argument."),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Functions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends [...UnaryFunction[], ",(0,i.kt)("a",{parentName:"td",href:"/fnts/api/modules/Types#variadicfunction"},(0,i.kt)("inlineCode",{parentName:"a"},"VariadicFunction")),"]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Length")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"td"},"Functions"),"[",(0,i.kt)("inlineCode",{parentName:"td"},'"length"'),"]")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pipeline"},"Pipeline"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Pipeline"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Length"),">",": ",(0,i.kt)("inlineCode",{parentName:"p"},"Length")," extends ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," ? ",(0,i.kt)("inlineCode",{parentName:"p"},"Functions")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"Functions")," extends ","[infer First, infer Second, ...infer Rest]"," ? [",(0,i.kt)("inlineCode",{parentName:"p"},"First"),", ...Pipeline<First extends UnaryFunction ? Second extends UnaryFunction ? Rest extends UnaryFunction[] ? ","[Function, ...Rest]"," : never : never : First extends VariadicFunction ? Second extends UnaryFunction ? Rest extends UnaryFunction[] ? ","[Function, ...Rest]"," : never : never : never",">","] : ",(0,i.kt)("inlineCode",{parentName:"p"},"Functions")),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"Pipeline")," type which parses all of the provided functions' types.\nAny function with either an incorrect argument or a return type will not fit\ninto the pipeline and should be typed according to it, so that its argument's\ntype matches the return type of the previous function and its return type\nmatches the type of the next function's argument."),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Functions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends [",(0,i.kt)("a",{parentName:"td",href:"/fnts/api/modules/Types#variadicfunction"},(0,i.kt)("inlineCode",{parentName:"a"},"VariadicFunction")),", ...UnaryFunction[]]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Length")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"td"},"Functions"),"[",(0,i.kt)("inlineCode",{parentName:"td"},'"length"'),"]")))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"compose"},"compose"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"compose"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),">","(...",(0,i.kt)("inlineCode",{parentName:"p"},"functions"),"): (...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameters"),"<",(0,i.kt)("a",{parentName:"p",href:"/fnts/api/modules/Types#last"},(0,i.kt)("inlineCode",{parentName:"a"},"Last")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),">",">",") => ",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),"[",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"]",">"),(0,i.kt)("p",null,"Applies all of the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," one-by-one in right-to-left order."),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Functions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends [...UnaryFunction[], ",(0,i.kt)("a",{parentName:"td",href:"/fnts/api/modules/Types#variadicfunction"},(0,i.kt)("inlineCode",{parentName:"a"},"VariadicFunction")),"]")))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...functions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fnts/api/modules/Composition#composition"},(0,i.kt)("inlineCode",{parentName:"a"},"Composition")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Functions"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Functions"),"[",(0,i.kt)("inlineCode",{parentName:"td"},'"length"'),"]",">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn")),(0,i.kt)("p",null,"\u25b8 (...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),"[",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"]",">"),(0,i.kt)("p",null,"Applies all of the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," one-by-one in right-to-left order."),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parameters"),"<",(0,i.kt)("a",{parentName:"td",href:"/fnts/api/modules/Types#last"},(0,i.kt)("inlineCode",{parentName:"a"},"Last")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Functions"),">",">")))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),"[",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"]",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pipe"},"pipe"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"pipe"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),">","(...",(0,i.kt)("inlineCode",{parentName:"p"},"functions"),"): (...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameters"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),"[",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"]",">",") => ",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<",(0,i.kt)("a",{parentName:"p",href:"/fnts/api/modules/Types#last"},(0,i.kt)("inlineCode",{parentName:"a"},"Last")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),">",">"),(0,i.kt)("p",null,"Applies all of the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," one-by-one in left-to-right order."),(0,i.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Functions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends [",(0,i.kt)("a",{parentName:"td",href:"/fnts/api/modules/Types#variadicfunction"},(0,i.kt)("inlineCode",{parentName:"a"},"VariadicFunction")),", ...UnaryFunction[]]")))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...functions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fnts/api/modules/Composition#pipeline"},(0,i.kt)("inlineCode",{parentName:"a"},"Pipeline")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Functions"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Functions"),"[",(0,i.kt)("inlineCode",{parentName:"td"},'"length"'),"]",">")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn")),(0,i.kt)("p",null,"\u25b8 (...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<",(0,i.kt)("a",{parentName:"p",href:"/fnts/api/modules/Types#last"},(0,i.kt)("inlineCode",{parentName:"a"},"Last")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),">",">"),(0,i.kt)("p",null,"Applies all of the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," one-by-one in left-to-right order."),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parameters"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Functions"),"[",(0,i.kt)("inlineCode",{parentName:"td"},"0"),"]",">")))),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<",(0,i.kt)("a",{parentName:"p",href:"/fnts/api/modules/Types#last"},(0,i.kt)("inlineCode",{parentName:"a"},"Last")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Functions"),">",">"))}u.isMDXComponent=!0}}]);
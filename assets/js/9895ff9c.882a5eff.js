"use strict";(self.webpackChunkfnts_docs=self.webpackChunkfnts_docs||[]).push([[74],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),N=d(n),s=r,u=N["".concat(m,".").concat(s)]||N[s]||k[s]||p;return n?a.createElement(u,i(i({ref:t},o),{},{components:n})):a.createElement(u,i({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=N;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<p;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},5743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const p={},i="Module: Composition",l={unversionedId:"api/modules/Composition",id:"api/modules/Composition",title:"Module: Composition",description:"Type Aliases",source:"@site/docs/api/modules/Composition.md",sourceDirName:"api/modules",slug:"/api/modules/Composition",permalink:"/fnts/api/modules/Composition",draft:!1,editUrl:"https://github.com/drizzer14/fnts/docs/docs/api/modules/Composition.md",tags:[],version:"current",frontMatter:{},sidebar:"default",previous:{title:"Overview",permalink:"/fnts/api/Overview"},next:{title:"Module: Curry",permalink:"/fnts/api/modules/Curry"}},m={},d=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"Compose",id:"compose",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Decompose",id:"decompose",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Depipe",id:"depipe",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Pipe",id:"pipe",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Functions",id:"functions",level:2},{value:"compose",id:"compose-1",level:3},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"pipe",id:"pipe-1",level:3},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Type parameters",id:"type-parameters-7",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4}],o={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module-composition"},"Module: Composition"),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"compose"},"Compose"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"Compose"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Functions"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"length"'),"]"," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," ? ",(0,r.kt)("inlineCode",{parentName:"p"},"Functions")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments")," extends ","[infer A, infer B]"," ? ","[...Functions, (",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"]"," : ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments")," extends ","[infer A, ...(infer Rest), infer P, infer L]"," ? ",(0,r.kt)("a",{parentName:"p",href:"/fnts/api/modules/Composition#compose"},(0,r.kt)("inlineCode",{parentName:"a"},"Compose")),"<","[",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ...Rest, ",(0,r.kt)("inlineCode",{parentName:"p"},"P"),"]",", ","[...Functions, (",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"P"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"L"),"]",">"," : []"),(0,r.kt)("p",null,"Makes a composition of functions from received arguments."),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Arguments")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Functions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[] = []")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"decompose"},"Decompose"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"Decompose"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Functions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Functions")," extends ","[(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),": infer Arg) => infer Return]"," ? ","[...Arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"Arg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Return"),"]"," : ",(0,r.kt)("inlineCode",{parentName:"p"},"Functions")," extends [...(infer Rest extends UnaryFunction[]), (",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),": infer Arg) => ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"] ? ",(0,r.kt)("a",{parentName:"p",href:"/fnts/api/modules/Composition#decompose"},(0,r.kt)("inlineCode",{parentName:"a"},"Decompose")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Rest"),", ","[...Arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"Arg"),"]",">"," : []"),(0,r.kt)("p",null,"Destructures a composition of functions into arguments."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Functions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/fnts/api/modules/Types#unaryfunction"},(0,r.kt)("inlineCode",{parentName:"a"},"UnaryFunction")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Arguments")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[] = []")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"depipe"},"Depipe"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"Depipe"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Functions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Functions")," extends ","[(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),": infer Arg) => infer Return]"," ? ","[...Arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"Arg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Return"),"]"," : ",(0,r.kt)("inlineCode",{parentName:"p"},"Functions")," extends [(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),": infer Arg) => ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ...(infer Rest extends UnaryFunction[])] ? ",(0,r.kt)("a",{parentName:"p",href:"/fnts/api/modules/Composition#depipe"},(0,r.kt)("inlineCode",{parentName:"a"},"Depipe")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Rest"),", ","[...Arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"Arg"),"]",">"," : []"),(0,r.kt)("p",null,"Destructures a pipeline of functions into arguments."),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Functions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/fnts/api/modules/Types#unaryfunction"},(0,r.kt)("inlineCode",{parentName:"a"},"UnaryFunction")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Arguments")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[] = []")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pipe"},"Pipe"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"Pipe"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Functions"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"length"'),"]"," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," ? ",(0,r.kt)("inlineCode",{parentName:"p"},"Functions")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments")," extends ","[infer A, infer B]"," ? ","[(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ...Functions]"," : ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments")," extends ","[infer A, ...(infer Rest), infer P, infer L]"," ? ",(0,r.kt)("a",{parentName:"p",href:"/fnts/api/modules/Composition#pipe"},(0,r.kt)("inlineCode",{parentName:"a"},"Pipe")),"<","[",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ...Rest, ",(0,r.kt)("inlineCode",{parentName:"p"},"P"),"]",", ","[(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"P"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"L"),", ...Functions]",">"," : []"),(0,r.kt)("p",null,"Makes a pipeline of functions from received arguments."),(0,r.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Arguments")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Functions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[] = []")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"compose-1"},"compose"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"compose"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"f"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),"): (...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("p",null,"(B -> C) . (A -> B) = A -> C"),(0,r.kt)("h4",{id:"type-parameters-4"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C"))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"B"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"g")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"A"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"B"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"compose"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"f"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),", ...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("p",null,"(B -> C) . (A -> B) = A -> C"),(0,r.kt)("h4",{id:"type-parameters-5"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C"))))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"B"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"g")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"A"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pipe-1"},"pipe"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"pipe"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"first"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"second"),"): (...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("p",null,"(A -> B) . (B -> C) = A -> C"),(0,r.kt)("h4",{id:"type-parameters-6"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C"))))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"first")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"A"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"second")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"B"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"C"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A"))))),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"pipe"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),">","(...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("p",null,"(A -> B) . (B -> C) = A -> C"),(0,r.kt)("h4",{id:"type-parameters-7"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C"))))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[...args: A[], first: Function, second: Function]")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C")))}k.isMDXComponent=!0}}]);
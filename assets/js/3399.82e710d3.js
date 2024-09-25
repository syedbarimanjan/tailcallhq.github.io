/*! For license information please see 3399.82e710d3.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3399],{27293:(e,n,t)=>{t.d(n,{A:()=>z});var i=t(96540),s=t(74848);function a(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=n.filter((e=>e!==t)),o=t?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,s.jsx)(s.Fragment,{children:a}):null}}(e.children),a=e.title??n;return{...e,...a&&{title:a},children:t}}var o=t(34164),r=t(21312),l=t(17559);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,s.jsx)("div",{className:(0,o.A)(l.G.common.admonition,l.G.common.admonitionType(n),c.admonition,t),children:i})}function u(e){let{icon:n,title:t}=e;return(0,s.jsxs)("div",{className:c.admonitionHeading,children:[(0,s.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function h(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:c.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:i,children:a,className:o}=e;return(0,s.jsxs)(d,{type:n,className:o,children:[i||t?(0,s.jsx)(u,{title:i,icon:t}):null,(0,s.jsx)(h,{children:a})]})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,s.jsx)(m,{...p,...e,className:(0,o.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,s.jsx)(j,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function A(e){return(0,s.jsx)(m,{...v,...e,className:(0,o.A)("alert alert--success",e.className),children:e.children})}function g(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,s.jsx)(m,{...y,...e,className:(0,o.A)("alert alert--info",e.className),children:e.children})}function w(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const b={icon:(0,s.jsx)(w,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const U={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const k={icon:(0,s.jsx)(w,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:x,tip:A,info:N,warning:function(e){return(0,s.jsx)(m,{...b,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(m,{...U,...e,className:(0,o.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(x,{title:"secondary",...e}),important:e=>(0,s.jsx)(N,{title:"important",...e}),success:e=>(0,s.jsx)(A,{title:"success",...e}),caution:function(e){return(0,s.jsx)(m,{...k,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})}}};function z(e){const n=a(e),t=(i=n.type,T[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),T.info));var i;return(0,s.jsx)(t,{...n})}},4336:(e,n,t)=>{t.d(n,{A:()=>x});t(96540);var i=t(34164),s=t(21312),a=t(17559),o=t(28774);const r={iconEdit:"iconEdit_Z9Sw"};var l=t(74848);function c(e){let{className:n,...t}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(r.iconEdit,n),"aria-hidden":"true",...t,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:n}=e;return(0,l.jsxs)(o.A,{to:n,className:a.G.common.editThisPage,children:[(0,l.jsx)(c,{}),(0,l.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=t(36266);function h(e){let{lastUpdatedAt:n}=e;const t=new Date(n),i=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,l.jsx)(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:i})})},children:" on {date}"})}function m(e){let{lastUpdatedBy:n}=e;return(0,l.jsx)(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:n})},children:" by {user}"})}function f(e){let{lastUpdatedAt:n,lastUpdatedBy:t}=e;return(0,l.jsxs)("span",{className:a.G.common.lastUpdated,children:[(0,l.jsx)(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,l.jsx)(h,{lastUpdatedAt:n}):"",byUser:t?(0,l.jsx)(m,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_JAkA"};function x(e){let{className:n,editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,l.jsxs)("div",{className:(0,i.A)("row",n),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(d,{editUrl:t})}),(0,l.jsx)("div",{className:(0,i.A)("col",p.lastUpdated),children:(s||a)&&(0,l.jsx)(f,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}},65425:(e,n,t)=>{t.d(n,{A:()=>z});var i=t(96540),s=t(28453),a=t(5260),o=t(26334),r=t(74848);function l(e){return(0,r.jsx)("code",{...e})}var c=t(28774);var d=t(34164),u=t(63427),h=t(92303),m=t(41422);const f={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function x(e,n){return!!e&&(e===n||x(e.parentElement,n))}function j(e){let{summary:n,children:t,...s}=e;(0,u.A)().collectAnchor(s.id);const a=(0,h.A)(),o=(0,i.useRef)(null),{collapsed:l,setCollapsed:c}=(0,m.u)({initialState:!s.open}),[j,v]=(0,i.useState)(s.open),A=i.isValidElement(n)?n:(0,r.jsx)("summary",{children:n??"Details"});return(0,r.jsxs)("details",{...s,ref:o,open:j,"data-collapsed":l,className:(0,d.A)(f.details,a&&f.isBrowser,s.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;p(n)&&x(n,o.current)&&(e.preventDefault(),l?(c(!1),v(!0)):c(!0))},children:[A,(0,r.jsx)(m.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),v(!e)},children:(0,r.jsx)("div",{className:f.collapsibleContent,children:t})})]})}const v={details:"details_b_Ee"},A="alert alert--info";function g(e){let{...n}=e;return(0,r.jsx)(j,{...n,className:(0,d.A)(A,v.details,n.className)})}function y(e){const n=i.Children.toArray(e.children),t=n.find((e=>i.isValidElement(e)&&"summary"===e.type)),s=(0,r.jsx)(r.Fragment,{children:n.filter((e=>e!==t))});return(0,r.jsx)(g,{...e,summary:t,children:s})}var N=t(51107);function w(e){return(0,r.jsx)(N.A,{...e})}const b={containsTaskList:"containsTaskList_mC6p"};function C(e){if(void 0!==e)return(0,d.A)(e,e?.includes("contains-task-list")&&b.containsTaskList)}const U={img:"img_ev3q"};var k=t(27293);const T={Head:a.A,details:y,Details:y,code:function(e){return function(e){return void 0!==e.children&&i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,r.jsx)(l,{...e}):(0,r.jsx)(o.A,{...e})},a:function(e){return(0,r.jsx)(c.A,{...e})},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",{...e,className:C(e.className)})},li:function(e){return(0,u.A)().collectAnchor(e.id),(0,r.jsx)("li",{...e})},img:function(e){return(0,r.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,d.A)(n,U.img))});var n},h1:e=>(0,r.jsx)(w,{as:"h1",...e}),h2:e=>(0,r.jsx)(w,{as:"h2",...e}),h3:e=>(0,r.jsx)(w,{as:"h3",...e}),h4:e=>(0,r.jsx)(w,{as:"h4",...e}),h5:e=>(0,r.jsx)(w,{as:"h5",...e}),h6:e=>(0,r.jsx)(w,{as:"h6",...e}),admonition:k.A,mermaid:()=>null};function z(e){let{children:n}=e;return(0,r.jsx)(s.x,{components:T,children:n})}},36266:(e,n,t)=>{t.d(n,{i:()=>s});var i=t(44586);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:n}}=(0,i.A)(),t=function(){const{i18n:{currentLocale:e,localeConfigs:n}}=(0,i.A)();return n[e].calendar}();return new Intl.DateTimeFormat(n,{calendar:t,...e})}},84722:(e,n,t)=>{t.d(n,{A:()=>r});var i=t(96540);const s=(...e)=>e.filter(((e,n,t)=>Boolean(e)&&t.indexOf(e)===n)).join(" ");var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=(0,i.forwardRef)((({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:r="",children:l,iconNode:c,...d},u)=>(0,i.createElement)("svg",{ref:u,...a,width:n,height:n,stroke:e,strokeWidth:o?24*Number(t)/Number(n):t,className:s("lucide",r),...d},[...c.map((([e,n])=>(0,i.createElement)(e,n))),...Array.isArray(l)?l:[l]]))),r=(e,n)=>{const t=(0,i.forwardRef)((({className:t,...a},r)=>{return(0,i.createElement)(o,{ref:r,iconNode:n,className:s(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,t),...a});var l}));return t.displayName=`${e}`,t}},90232:(e,n,t)=>{t.d(n,{A:()=>i});const i=(0,t(84722).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},48635:(e,n,t)=>{t.d(n,{A:()=>i});const i=(0,t(84722).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
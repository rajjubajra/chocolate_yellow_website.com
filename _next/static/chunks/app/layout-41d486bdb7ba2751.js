(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8147:function(e,t,r){Promise.resolve().then(r.bind(r,9378))},9378:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var l=r(3827),n=r(6936),s=r.n(n),i=r(4090);r(3385);var a=r(7809),d=r(8792),c=r(9803),u=r(9045),o=function(e){let{menu:t,setMenu:r}=e;return(0,l.jsx)("div",{className:"fixed top-5 z-50 button-open-close text-2xl pl-1 rounded-full",onClick:()=>t?r(!1):r(!0),children:t?(0,l.jsx)(u.u5Z,{}):(0,l.jsx)(u.V91,{})})};r(703);var h=function(e){let{menudata:t,menu:r,setMenu:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.default,{href:"/",onClick:()=>{r?n(!1):n(!0)},children:"LOgo"}),t&&(null==t?void 0:t.length)&&(null==t?void 0:t.map((e,t)=>(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"px-1 text-left md:cursor-pointer group flex flex-col",children:[(0,l.jsx)(d.default,{href:e.link,className:"py-0 md:pr-0 pr-2 flex justify-between items-center",onClick:()=>{r?n(!1):n(!0)},children:e.name}),e.submenu&&(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"absolute hidden group-hover:md:block  hover:md:block duratin-700",children:[(0,l.jsx)("div",{className:"py-3",children:(0,l.jsx)("div",{className:"triangle rotate-45 w-4 h-4 left-3 absolute mt-1 bg-yellow-500"})}),(0,l.jsx)("ul",{className:"bg-slate-100  dark:bg-slate-500  border-t-[2px] border-yellow-500  w-60 p-3.5 grid grid-cols-3 gap-10",children:e.sublinks.map((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h5",{className:"font-semibold",children:e.head}),e.sublink.map((e,t)=>(0,l.jsx)("li",{className:"text-sm my-2.5 w-60",children:(0,l.jsx)(d.default,{href:e.link,className:"hover:text-slate-800",onClick:()=>{r?n(!1):n(!0)},children:e.name})},t))]},t))})]})})]})},t)))]})};let x=e=>{let[t,r]=(0,i.useState)([]);return(0,i.useEffect)(()=>{(()=>{var t,l,n,s;let i=[],a=[];return(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.length)&&(null==e||null===(l=e.data)||void 0===l||l.map(e=>{""!==e.attributes.parent&&a.push({name:e.attributes.title,link:e.attributes.url.replace("/drupal",""),parent:e.attributes.parent,weight:e.attributes.weight})})),(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.length)&&(null==e||null===(s=e.data)||void 0===s||s.map(e=>{""===e.attributes.parent&&i.push({name:e.attributes.title,link:e.attributes.url.replace("/drupal",""),submenu:e.attributes.expanded,sublinks:[{sublink:a.filter(t=>t.parent===e.id)}],weight:e.attributes.weight})})),r(i)})()},[null==e?void 0:e.data]),{menudata:t}};var m=function(e){let{menudata:t,menu:r,setMenu:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.default,{href:"/",onClick:()=>{r?n(!1):n(!0)},children:"Logo"}),(null==t?void 0:t.length)&&(null==t?void 0:t.map((e,t)=>(0,l.jsx)("ul",{children:(0,l.jsx)("div",{className:"md:hidden flex",children:(0,l.jsxs)("div",{className:"px-1 flex flex-col text-left md:cursor-pointer group",children:[(0,l.jsx)(d.default,{href:e.link,className:"py-0 pr-2 my-1 text-lg flex justify-between items-center",children:(0,l.jsx)("span",{onClick:()=>r?n(!1):n(!0),children:e.name})}),e.submenu&&(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"absolute hidden group-hover:block  hover:block",children:[(0,l.jsx)("div",{className:"py-3 -mt-5",children:(0,l.jsx)("div",{className:"triangle w-3 h-3 rotate-45 left-3 absolute mt-2 bg-yellow-500"})}),(0,l.jsx)("div",{className:"bg-slate-100 dark:bg-slate-400  border-t-[3px] border-yellow-500  p-3.5 grid grid-cols-3 gap-10 w-60",children:e.sublinks.map((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h5",{className:"font-semibold",children:e.head}),e.sublink.map((e,t)=>(0,l.jsx)("li",{className:"text-sm my-2.5 w-60",children:(0,l.jsx)(d.default,{href:e.link,className:"hover:text-slate-800",children:(0,l.jsx)("span",{onClick:()=>r?n(!1):n(!0),children:e.name})})},t))]},t))})]})})]})})},t)))]})};let p=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return fetch(...t).then(e=>e.json())};var f=function(){let[e,t]=(0,i.useState)(!1),{data:r,error:n}=(0,a.ZP)("".concat(c.g.url,"/jsonapi/menu_items/main"),p),{menudata:s}=x(r);return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"flex justify-center",children:[(0,l.jsx)("div",{className:"".concat(e?"translate-y-20 duration-1000 w-full fixed z-5":"-translate-y-80 duration-1000","  w-full fixed z-50"),children:s&&s.length&&(0,l.jsx)("div",{className:"md:flex hidden justify-center",children:(0,l.jsx)(h,{menudata:s,menu:e,setMenu:t})})}),(0,l.jsx)("div",{className:"".concat(e?"translate-y-20 duration-1000 md:hidden w-full min-h-screen fixed -top-20 z-5 bg-white dark:bg-slate-600":"-translate-y-[50rem] duration-1000","  w-full fixed z-50"),children:s&&s.length&&(0,l.jsx)("div",{className:"relative z-40 py-20 px-10",children:(0,l.jsx)(m,{menudata:s,menu:e,setMenu:t})})}),(0,l.jsx)("div",{children:(0,l.jsx)("span",{onClick:()=>e?t(!1):t(!0),children:(0,l.jsx)(o,{menu:e,setMenu:t})})})]})})},j=function(){return(0,l.jsx)("div",{children:"Header Admin"})},v=r(1975),b=function(e){let{mode:t,setMode:r}=e;return(0,l.jsx)("div",{children:(0,l.jsx)("button",{title:"change Dark Mode",className:"fixed right-4 top-0 z-50 p-2 rounded-full m-2  hover:bg-gray-500 dark:bg-slate-700 cursor-pointer",onClick:()=>r("dark"===t?"light":"dark"),children:"dark"===t?(0,l.jsx)(v.pwr,{}):(0,l.jsx)(v.eSY,{})})})},g=r(828),k=r(5972),y=r(5104),N=r(5692);let w=(0,k.xC)({reducer:{shopping:y.ZP,order:N.Z}});var A=function(e){let{children:t}=e;return(0,l.jsx)(g.zt,{store:w,children:t})};function C(e){let{children:t}=e,[r,n]=(0,i.useState)("light");return(0,l.jsx)("html",{lang:"en",className:r,children:(0,l.jsx)("body",{className:s().className,children:(0,l.jsxs)(A,{children:[(0,l.jsx)(b,{mode:r,setMode:n}),(0,l.jsx)(f,{}),(0,l.jsx)(j,{}),t]})})})}},9803:function(e,t,r){"use strict";r.d(t,{g:function(){return l}});let l={url:"https://chocolates.yellow-website.com/drupal/"}},5692:function(e,t,r){"use strict";let l=(0,r(5972).oM)({name:"order",initialState:{orderdata:[]},reducers:{orderPlaced:(e,t)=>{console.log("Slice Order Placed: ",t.payload),e.order=t.payload}}}),{orderPlaced:n}=l.actions;t.Z=l.reducer},5104:function(e,t,r){"use strict";r.d(t,{cl:function(){return s},xr:function(){return n}});let l=(0,r(5972).oM)({name:"shopping",initialState:{productsArr:[]},reducers:{increaseDecreaseQuantity:(e,t)=>{let{product_id:r,qty:l}=t.payload,n=e.productsArr.findIndex(e=>e.product_id===r);if(-1!==n){let t={...e.productsArr[n],qty:Math.max(e.productsArr[n].qty+l,0)};e.productsArr[n]=t}else e.productsArr.push({product_id:r,qty:l});return e.productsArr=e.productsArr.filter(e=>e.qty>0),e},removeItem:(e,t)=>{let{id:r}=t.payload;e.productsArr=e.productsArr.filter(e=>e.product_id!==r)},placeOrder:e=>(e.productsArr=[],e)}}),{increaseDecreaseQuantity:n,removeItem:s}=l.actions;t.ZP=l.reducer},3385:function(){}},function(e){e.O(0,[27,779,809,828,469,758,971,69,744],function(){return e(e.s=8147)}),_N_E=e.O()}]);
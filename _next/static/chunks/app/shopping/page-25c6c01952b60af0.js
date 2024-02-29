(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{7796:function(e,t,i){Promise.resolve().then(i.bind(i,525))},525:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return w}});var r=i(3827),d=i(5230),n=i(9803);let s="".concat(n.g.url,"jsonapi/node/products?include=field_product_ingredients,field_product_image,field_product_image.field_media_image"),l=(e,t)=>{let i=e.map(e=>({mediaId:e.id})),r=[],d=[];t.map(e=>{if("file--file"===e.type){var t,i,n;d.push({fileId:e.id,uid:null==e?void 0:null===(n=e.relationships)||void 0===n?void 0:null===(i=n.uid)||void 0===i?void 0:null===(t=i.data)||void 0===t?void 0:t.id,url:e.attributes.uri.url,filesize:e.attributes.filesize})}"media--image"===e.type&&r.push({mediaId:e.id,mediaTypeId:e.relationships.bundle.data.id,name:e.attributes.name,fileId:e.relationships.field_media_image.data.id,width:e.relationships.thumbnail.data.meta.width,heigh:e.relationships.thumbnail.data.meta.height,alt:e.relationships.thumbnail.data.meta.alt})});let n=r.map(e=>{let t=d.find(t=>t.fileId===e.fileId);return t&&{item:e,...t}});return i.map(e=>{let t=n.find(t=>t.item.mediaId===e.mediaId);return t&&{value:e,...t}})},a=(e,t)=>{let i=[];return t.map(e=>{var t,r,d,n,s;(null==e?void 0:null===(d=e.relationships)||void 0===d?void 0:null===(r=d.vid)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.id)==="585904d9-ece9-4f7f-8ffb-a8899564e19f"&&i.push({id:e.id,name:null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:n.name,created:null===(s=e.attributes)||void 0===s?void 0:s.changed})}),e.map(e=>{let t=i.find(t=>t.id===e.id);return t&&{item:e,...t}})};var o=()=>{let{data:e,isLoading:t,error:i}=(0,d.useQuery)("products",async()=>{let e=await fetch(s),t=await e.json();return console.log(t),t.data.map(e=>({id:e.id,name:e.attributes.field_product_name,description:e.attributes.field_product_description.value,rate:e.attributes.field_product_rate,image:l(e.relationships.field_product_image.data,t.included),type:e.type,ingredients:a(e.relationships.field_product_ingredients.data,t.included)}))});return{data:e,isLoading:t,error:i}},u=i(828),c=i(5104),p=function(e){let{id:t}=e,i=(0,u.I0)(),d=(0,u.v9)(e=>e.shopping),n=(0,u.v9)(e=>e.shopping.productsArr.length);return(0,r.jsx)(r.Fragment,{children:n>0&&d.productsArr.some(e=>e.product_id===t)?(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("button",{className:"w-8 h-8 border",onClick:()=>i((0,c.xr)({product_id:t,qty:1})),children:"+"}),(0,r.jsx)("div",{children:t&&d&&function(e,t){var i;if(!e||!t)return null;let r=null===(i=t.productsArr)||void 0===i?void 0:i.findIndex(t=>t.product_id===e);return -1!==r?"Qty: ".concat(t.productsArr[r].qty):"Qty: 0"}(t,d)}),(0,r.jsx)("button",{className:"w-8 h-8 border",onClick:()=>i((0,c.xr)({product_id:t,qty:-1})),children:"-"})]}):(0,r.jsx)("div",{className:"border w-40 text-center py-2 shadow-md hover:shadow-inner cursor-pointer",onClick:()=>i((0,c.xr)({product_id:t,qty:1})),children:"Add To Cart"})})},h=function(e){let{id:t}=e,i=(0,u.I0)(),d=(0,u.v9)(e=>e.shopping.productsArr);return(0,r.jsx)(r.Fragment,{children:d.some(e=>e.product_id===t)&&(0,r.jsx)("div",{onClick:()=>i((0,c.cl)({id:t})),children:"Remove Item"})})},m=function(){let{data:e,isLoading:t,error:i}=o();return t?(0,r.jsx)("p",{children:"Loading..."}):i?(0,r.jsxs)("p",{children:["Error: ",i.message]}):(0,r.jsxs)("div",{children:["Product Listing Component",e.map(e=>(0,r.jsxs)("div",{className:"border p-2 my-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:e.id}),(0,r.jsx)("div",{children:e.name}),(0,r.jsx)("div",{children:e.rate})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)(p,{id:e.id}),(0,r.jsx)(h,{id:e.id})]})]},e.id))]})},f=i(4090),v=i(997),x=function(){let{productsArr:e}=(0,u.v9)(e=>e.shopping);(0,u.v9)(e=>e.shopping.productsArr.length);let[t,i]=(0,f.useState)(0);return(0,f.useEffect)(()=>{i(e.reduce((e,t)=>e+t.qty,0))},[e]),(0,r.jsxs)("div",{className:"w-10 flex flex-col justify-center items-center",children:[(0,r.jsx)("div",{className:"relative top-1 w-6 h-6 border-2 border-slate-800 flex justify-center items-center rounded-full text-xs",children:t}),(0,r.jsx)("div",{className:"text-2xl",children:(0,r.jsx)(v.XV$,{})})]})},j=function(){let{data:e,isLoading:t,error:i}=o(),{productsArr:d}=(0,u.v9)(e=>e.shopping);console.log(t,i,e);let n=d.reduce((t,i)=>{let r=e.findIndex(e=>e.id===i.product_id);return t+e[r].rate*i.qty},0);return(0,r.jsxs)("div",{className:"mt-20 ml-2 border min-h-screen w-full p-4",children:[(0,r.jsx)("h3",{children:"Shopping Cart"}),(0,r.jsxs)("div",{children:["Gr Total Amount: ",n]}),(0,r.jsx)("div",{}),d&&d.length>0&&d.map((t,i)=>{let d=e.findIndex(e=>e.id===t.product_id),n=e[d].rate*t.qty;return(0,r.jsxs)("div",{className:"w-full p-4 m-2 border",children:[(0,r.jsxs)("div",{children:[i+1," : "]}),(0,r.jsx)("div",{children:e[d].name}),(0,r.jsxs)("div",{children:["Rate: ",e[d].rate]}),(0,r.jsxs)("div",{children:["Amount: ",n," "]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)(p,{id:t.product_id}),(0,r.jsx)(h,{id:t.product_id})]})]},t.product_id)})]})},_=i(7809);let g=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return fetch(...t).then(e=>e.json())},y=()=>{let e=n.g.url+"jsonapi",{data:t,error:i,isLoading:r}=(0,_.ZP)(e,g),[d,s]=(0,f.useState)(""),[l,a]=(0,f.useState)(""),[o,u]=(0,f.useState)(""),[c,p]=(0,f.useState)(""),[h,m]=(0,f.useState)("");return{data:t}},b=new d.QueryClient;var w=function(){let{data:e}=y();return console.log("User",e),(0,r.jsx)("div",{className:"mt-20 mx-10 flex",children:(0,r.jsxs)(d.QueryClientProvider,{client:b,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(x,{}),(0,r.jsx)(m,{})]}),(0,r.jsx)("div",{children:(0,r.jsx)(j,{})})]})})}},9803:function(e,t,i){"use strict";i.d(t,{g:function(){return r}});let r={url:"https://chocolates.yellow-website.com/drupal/"}},5104:function(e,t,i){"use strict";i.d(t,{cl:function(){return n},xr:function(){return d}});let r=(0,i(5972).oM)({name:"shopping",initialState:{productsArr:[]},reducers:{increaseDecreaseQuantity:(e,t)=>{let{product_id:i,qty:r}=t.payload,d=e.productsArr.findIndex(e=>e.product_id===i);if(-1!==d){let t={...e.productsArr[d],qty:Math.max(e.productsArr[d].qty+r,0)};e.productsArr[d]=t}else e.productsArr.push({product_id:i,qty:r});return e.productsArr=e.productsArr.filter(e=>e.qty>0),e},removeItem:(e,t)=>{let{id:i}=t.payload;e.productsArr=e.productsArr.filter(e=>e.product_id!==i)}}}),{increaseDecreaseQuantity:d,removeItem:n}=r.actions;t.ZP=r.reducer}},function(e){e.O(0,[522,135,230,971,69,744],function(){return e(e.s=7796)}),_N_E=e.O()}]);
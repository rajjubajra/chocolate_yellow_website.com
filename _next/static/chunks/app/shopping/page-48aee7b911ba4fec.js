(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{7796:function(e,t,i){Promise.resolve().then(i.bind(i,3045))},3045:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return N}});var d=i(3827),r=i(5230),n=i(9803);let l="".concat(n.g.url,"jsonapi/node/products?include=field_product_ingredients,field_product_image,field_product_image.field_media_image"),s=(e,t)=>{let i=e.map(e=>({mediaId:e.id})),d=[],r=[];t.map(e=>{if("file--file"===e.type){var t,i,n;r.push({fileId:e.id,uid:null==e?void 0:null===(n=e.relationships)||void 0===n?void 0:null===(i=n.uid)||void 0===i?void 0:null===(t=i.data)||void 0===t?void 0:t.id,url:e.attributes.uri.url,filesize:e.attributes.filesize})}"media--image"===e.type&&d.push({mediaId:e.id,mediaTypeId:e.relationships.bundle.data.id,name:e.attributes.name,fileId:e.relationships.field_media_image.data.id,width:e.relationships.thumbnail.data.meta.width,heigh:e.relationships.thumbnail.data.meta.height,alt:e.relationships.thumbnail.data.meta.alt})});let n=d.map(e=>{let t=r.find(t=>t.fileId===e.fileId);return t&&{item:e,...t}});return i.map(e=>{let t=n.find(t=>t.item.mediaId===e.mediaId);return t&&{value:e,...t}})},a=(e,t)=>{let i=[];return t.map(e=>{var t,d,r,n,l;(null==e?void 0:null===(r=e.relationships)||void 0===r?void 0:null===(d=r.vid)||void 0===d?void 0:null===(t=d.data)||void 0===t?void 0:t.id)==="585904d9-ece9-4f7f-8ffb-a8899564e19f"&&i.push({id:e.id,name:null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:n.name,created:null===(l=e.attributes)||void 0===l?void 0:l.changed})}),e.map(e=>{let t=i.find(t=>t.id===e.id);return t&&{item:e,...t}})};var o=()=>{let{data:e,isLoading:t,error:i}=(0,r.useQuery)("products",async()=>{let e=await fetch(l),t=await e.json();return t.data.map(e=>({id:e.id,name:e.attributes.field_product_name,description:e.attributes.field_product_description.value,rate:e.attributes.field_product_rate,image:s(e.relationships.field_product_image.data,t.included),type:e.type,ingredients:a(e.relationships.field_product_ingredients.data,t.included)}))});return{data:e,isLoading:t,error:i}},u=i(828),c=i(5104);let v=(e,t)=>{var i;if(!e||!t)return null;let d=null===(i=t.productsArr)||void 0===i?void 0:i.findIndex(t=>t.product_id===e);return -1!==d?"Qty: ".concat(t.productsArr[d].qty):"Qty: 0"};var p=function(e){let{id:t}=e,i=(0,u.I0)(),r=(0,u.v9)(e=>e.shopping),n=(0,u.v9)(e=>e.shopping.productsArr.length);return(0,d.jsx)(d.Fragment,{children:n>0&&r.productsArr.some(e=>e.product_id===t)?(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsx)("button",{className:"w-8 h-8 border",onClick:()=>i((0,c.xr)({product_id:t,qty:1})),children:"+"}),(0,d.jsx)("div",{children:t&&r&&v(t,r)}),(0,d.jsx)("button",{className:"w-8 h-8 border",onClick:()=>i((0,c.xr)({product_id:t,qty:-1})),children:"-"})]}):(0,d.jsx)("div",{className:"border w-40 text-center py-2 shadow-md hover:shadow-inner cursor-pointer",onClick:()=>i((0,c.xr)({product_id:t,qty:1})),children:"Add To Cart"})})},h=function(e){let{id:t}=e,i=(0,u.I0)(),r=(0,u.v9)(e=>e.shopping.productsArr);return(0,d.jsx)(d.Fragment,{children:r.some(e=>e.product_id===t)&&(0,d.jsx)("div",{onClick:()=>i((0,c.cl)({id:t})),children:"Remove Item"})})},m=function(){let{data:e,isLoading:t,error:i}=o();return t?(0,d.jsx)("p",{children:"Loading..."}):i?(0,d.jsxs)("p",{children:["Error: ",i.message]}):(0,d.jsxs)("div",{children:["Product Listing Component",e.map(e=>(0,d.jsxs)("div",{className:"border p-2 my-2",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:e.id}),(0,d.jsx)("div",{children:e.name}),(0,d.jsx)("div",{children:e.rate})]}),(0,d.jsxs)("div",{className:"flex justify-between",children:[(0,d.jsx)(p,{id:e.id}),(0,d.jsx)(h,{id:e.id})]})]},e.id))]})},f=i(4090),x=i(997),j=function(){let{productsArr:e}=(0,u.v9)(e=>e.shopping);(0,u.v9)(e=>e.shopping.productsArr.length);let[t,i]=(0,f.useState)(0);return(0,f.useEffect)(()=>{i(e.reduce((e,t)=>e+t.qty,0))},[e]),(0,d.jsxs)("div",{className:"w-10 flex flex-col justify-center items-center",children:[(0,d.jsx)("div",{className:"relative top-1 w-6 h-6 border-2 border-slate-800 flex justify-center items-center rounded-full text-xs",children:t}),(0,d.jsx)("div",{className:"text-2xl",children:(0,d.jsx)(x.XV$,{})})]})},_=i(7809);let g=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return fetch(...t).then(e=>e.json())},y=()=>{let e=n.g.url+"jsonapi",{data:t,error:i,isLoading:d}=(0,_.ZP)(e,g),[r,l]=(0,f.useState)("");(0,f.useEffect)(()=>{var e,i,d;t&&l(null==t?void 0:null===(d=t.meta)||void 0===d?void 0:null===(i=d.links)||void 0===i?void 0:null===(e=i.me)||void 0===e?void 0:e.href)},[t]);let{data:s,error:a,isLoading:o}=(0,_.ZP)(r,g),[u,c]=(0,f.useState)(""),[v,p]=(0,f.useState)(""),[h,m]=(0,f.useState)(""),[x,j]=(0,f.useState)(""),[y,b]=(0,f.useState)(""),[w,A]=(0,f.useState)(""),[S,I]=(0,f.useState)(""),[C,N]=(0,f.useState)("");return(0,f.useEffect)(()=>{var e,i,d,r,n,l,a,o,u,v,p,h,f,x,_,g;s&&c(null==s?void 0:null===(i=s.data)||void 0===i?void 0:null===(e=i.attributes)||void 0===e?void 0:e.name),m(null==s?void 0:null===(r=s.data)||void 0===r?void 0:null===(d=r.attributes)||void 0===d?void 0:d.mail),j(null==s?void 0:null===(l=s.data)||void 0===l?void 0:null===(n=l.attributes)||void 0===n?void 0:n.field_phone_number),b(null==s?void 0:null===(o=s.data)||void 0===o?void 0:null===(a=o.attributes)||void 0===a?void 0:a.created),A(null==s?void 0:null===(v=s.data)||void 0===v?void 0:null===(u=v.attributes)||void 0===u?void 0:u.timezone),I(null==s?void 0:null===(h=s.data)||void 0===h?void 0:null===(p=h.attributes)||void 0===p?void 0:p.field_country),N(null==t?void 0:null===(g=t.meta)||void 0===g?void 0:null===(_=g.links)||void 0===_?void 0:null===(x=_.me)||void 0===x?void 0:null===(f=x.meta)||void 0===f?void 0:f.id)},[s,t]),{uid:C,username:u,userEmail:h,userTel:x,userRegisterDate:y,userTimeZone:w,userCountry:S}};var b=i(7908);let w=async e=>{console.log("Form Data",e);let t=async()=>{try{let e=await b.Z.get(n.g.url+"session/token");if(200===e.status)return e.data;console.log("token error: ",e)}catch(e){console.error("Error: ",e)}},i=await t(),d="".concat(n.g.url,"jsonapi/node/sales_book");try{let t=await b.Z.post(d,e,{headers:{"Content-Type":"application/vnd.api+json","X-CSRF-Token":i}});t.statusCode;{let e=t.data;return console.log("POST Success . :",e),t}}catch(e){console.log("Error submitting shopping cart",e)}};var A=i(5692),S=function(){let e=(0,u.I0)(),{uid:t,username:i,userEmail:r,userTel:n,userRegisterDate:l,userTimeZone:s,userCountry:a}=y(),{data:c,isLoading:v,error:m}=o(),{productsArr:x}=(0,u.v9)(e=>e.shopping),j=x.reduce((e,t)=>{let i=c.findIndex(e=>e.id===t.product_id);return e+c[i].rate*t.qty},0),[_,g]=(0,f.useState)([]),[b,S]=(0,f.useState)();(0,f.useEffect)(()=>{g(x.map((e,t)=>{let i=c.findIndex(t=>t.id===e.product_id),d=c[i].rate*e.qty;return'{\n          "name" :   "'.concat(c[i].name,'",\n          "rate" :   ').concat(c[i].rate,',\n          "amount" : ').concat(d,"\n        }")}).join(","))},[c,x]),(0,f.useEffect)(()=>{S({data:{type:"node--sales_book",attributes:{title:"Shopping Cart",id:"1",field_client_country:a,field_client_email:r,field_client_grand_total:j,field_client_id:t,field_client_name:i,field_client_phone:n,field_client_time_zone:s,field_items:_,field_register_date:l}}})},[_,j,t,a,r,l,n,s,i]);let I=async()=>{let t=await w(b);console.log("Response Shopping Cart: ",t),t.status,e((0,A.r)(t.data)),window.location.href="/checkout"};return(0,d.jsxs)("div",{className:"mt-20 ml-2 border min-h-screen w-full p-4",children:[(0,d.jsx)("h3",{children:"Shopping Cart"}),(0,d.jsxs)("div",{children:["Gr Total Amount: ",j]}),(0,d.jsx)("div",{}),(0,d.jsxs)("div",{children:[x&&x.length>0&&x.map((e,t)=>{let i=c.findIndex(t=>t.id===e.product_id),r=c[i].rate*e.qty;return(0,d.jsxs)("div",{className:"w-full p-4 m-2 border",children:[(0,d.jsxs)("div",{children:[t+1," : "]}),(0,d.jsx)("div",{children:c[i].name}),(0,d.jsxs)("div",{children:["Rate: ",c[i].rate]}),(0,d.jsxs)("div",{children:["Amount: ",r," "]}),(0,d.jsxs)("div",{className:"flex justify-between",children:[(0,d.jsx)(p,{id:e.product_id}),(0,d.jsx)(h,{id:e.product_id})]})]},e.product_id)}),j>0&&(0,d.jsx)("button",{onClick:()=>I(),className:"p-4 m-2 border w-full",type:"submit",children:"Place Order"})]})]})},I=function(){let{username:e,userEmail:t,userTel:i,userRegisterDate:r,userTimeZone:n,userCountry:l}=y();return e&&t?(0,d.jsx)("div",{children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:["Name: ",e]}),(0,d.jsxs)("div",{children:["Email: ",t]}),(0,d.jsxs)("div",{children:["Tel:",i]}),(0,d.jsxs)("div",{children:["Country: ",l]}),(0,d.jsxs)("div",{children:["Time Zone: ",n]}),(0,d.jsxs)("div",{children:["Register Date: ",r]})]})}):""};let C=new r.QueryClient;var N=function(){return(0,d.jsx)("div",{className:"mt-20 mx-10 flex",children:(0,d.jsxs)(r.QueryClientProvider,{client:C,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(j,{}),(0,d.jsx)(I,{}),(0,d.jsx)(m,{})]}),(0,d.jsx)("div",{children:(0,d.jsx)(S,{})})]})})}},9803:function(e,t,i){"use strict";i.d(t,{g:function(){return d}});let d={url:"https://chocolates.yellow-website.com/drupal/"}},5692:function(e,t,i){"use strict";i.d(t,{r:function(){return r}});let d=(0,i(5972).oM)({name:"order",initialState:{orderdata:[]},reducers:{orderPlaced:(e,t)=>{console.log("Slice Order Placed: ",t.payload),e.order=t.payload}}}),{orderPlaced:r}=d.actions;t.Z=d.reducer},5104:function(e,t,i){"use strict";i.d(t,{cl:function(){return n},xr:function(){return r}});let d=(0,i(5972).oM)({name:"shopping",initialState:{productsArr:[]},reducers:{increaseDecreaseQuantity:(e,t)=>{let{product_id:i,qty:d}=t.payload,r=e.productsArr.findIndex(e=>e.product_id===i);if(-1!==r){let t={...e.productsArr[r],qty:Math.max(e.productsArr[r].qty+d,0)};e.productsArr[r]=t}else e.productsArr.push({product_id:i,qty:d});return e.productsArr=e.productsArr.filter(e=>e.qty>0),e},removeItem:(e,t)=>{let{id:i}=t.payload;e.productsArr=e.productsArr.filter(e=>e.product_id!==i)},placeOrder:e=>(e.productsArr=[],e)}}),{increaseDecreaseQuantity:r,removeItem:n}=d.actions;t.ZP=d.reducer}},function(e){e.O(0,[522,809,828,469,935,971,69,744],function(){return e(e.s=7796)}),_N_E=e.O()}]);
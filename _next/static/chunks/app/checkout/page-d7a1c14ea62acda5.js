(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{3811:function(i,l,t){Promise.resolve().then(t.bind(t,9503))},9503:function(i,l,t){"use strict";t.r(l),t.d(l,{default:function(){return v}});var d=t(3827),e=t(7664),o=t(828),n=t(4090),u=function(i){let{text:l}=i;console.log("item text: ",l);let[t,e]=(0,n.useState)();return(0,n.useEffect)(()=>{let i="[".concat(l,"]");console.log("itme to array: ",i),e(JSON.parse(i))},[l]),(0,d.jsx)("div",{children:t&&t.map((i,l)=>(console.log(i),(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"m-2 p-2 grid grid-cols-3 w-full",children:[(0,d.jsxs)("div",{children:["Name: ",i.name]}),(0,d.jsxs)("div",{children:["Rate: ",i.rate]}),(0,d.jsxs)("div",{children:["Qty: ",i.qty]}),(0,d.jsxs)("div",{children:["Amount: ",i.amount]})]})},l)))})},v=function(){var i,l,t,n,v,a,s,r,c,h,f;let{orderdata:m}=(0,o.v9)(i=>i.order);console.log("order Data:",m),console.log("order Data data:",null==m?void 0:m.data),console.log("order Data items:",null==m?void 0:null===(i=m.data)||void 0===i?void 0:i.attributes);let{uid:j}=(0,e.a)();return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:(0,d.jsx)("h2",{children:"Checkout"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Client Details:"}),m&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:["Name: ",null==m?void 0:null===(t=m.data)||void 0===t?void 0:null===(l=t.attributes)||void 0===l?void 0:l.field_client_name]}),(0,d.jsxs)("div",{children:["Email: ",null==m?void 0:null===(v=m.data)||void 0===v?void 0:null===(n=v.attributes)||void 0===n?void 0:n.field_client_email]}),(0,d.jsxs)("div",{children:["Tel: ",null==m?void 0:null===(s=m.data)||void 0===s?void 0:null===(a=s.attributes)||void 0===a?void 0:a.field_client_phone]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:(0,d.jsx)(u,{text:null==m?void 0:null===(c=m.data)||void 0===c?void 0:null===(r=c.attributes)||void 0===r?void 0:r.field_items})}),(0,d.jsxs)("div",{children:["Gr. Total: ",null==m?void 0:null===(f=m.data)||void 0===f?void 0:null===(h=f.attributes)||void 0===h?void 0:h.field_client_grand_total]})]})]})]})]})}},9803:function(i,l,t){"use strict";t.d(l,{g:function(){return d}});let d={url:"https://chocolates.yellow-website.com/drupal/"}},7664:function(i,l,t){"use strict";t.d(l,{a:function(){return u}});var d=t(4090),e=t(9803),o=t(7809);let n=function(){for(var i=arguments.length,l=Array(i),t=0;t<i;t++)l[t]=arguments[t];return fetch(...l).then(i=>i.json())},u=()=>{let i=e.g.url+"jsonapi",{data:l,error:t,isLoading:u}=(0,o.ZP)(i,n),[v,a]=(0,d.useState)("");(0,d.useEffect)(()=>{var i,t,d;l&&a(null==l?void 0:null===(d=l.meta)||void 0===d?void 0:null===(t=d.links)||void 0===t?void 0:null===(i=t.me)||void 0===i?void 0:i.href)},[l]);let{data:s,error:r,isLoading:c}=(0,o.ZP)(v,n),[h,f]=(0,d.useState)(""),[m,j]=(0,d.useState)(""),[x,_]=(0,d.useState)(""),[b,g]=(0,d.useState)(""),[p,S]=(0,d.useState)(""),[k,E]=(0,d.useState)(""),[N,y]=(0,d.useState)(""),[w,C]=(0,d.useState)("");return(0,d.useEffect)(()=>{var i,t,d,e,o,n,u,v,a,r,c,h,m,j,x,b;s&&f(null==s?void 0:null===(t=s.data)||void 0===t?void 0:null===(i=t.attributes)||void 0===i?void 0:i.name),_(null==s?void 0:null===(e=s.data)||void 0===e?void 0:null===(d=e.attributes)||void 0===d?void 0:d.mail),g(null==s?void 0:null===(n=s.data)||void 0===n?void 0:null===(o=n.attributes)||void 0===o?void 0:o.field_phone_number),S(null==s?void 0:null===(v=s.data)||void 0===v?void 0:null===(u=v.attributes)||void 0===u?void 0:u.created),E(null==s?void 0:null===(r=s.data)||void 0===r?void 0:null===(a=r.attributes)||void 0===a?void 0:a.timezone),y(null==s?void 0:null===(h=s.data)||void 0===h?void 0:null===(c=h.attributes)||void 0===c?void 0:c.field_country),C(null==l?void 0:null===(b=l.meta)||void 0===b?void 0:null===(x=b.links)||void 0===x?void 0:null===(j=x.me)||void 0===j?void 0:null===(m=j.meta)||void 0===m?void 0:m.id)},[s,l]),{uid:w,username:h,userEmail:x,userTel:b,userRegisterDate:p,userTimeZone:k,userCountry:N}}}},function(i){i.O(0,[809,828,971,69,744],function(){return i(i.s=3811)}),_N_E=i.O()}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2732],{72756:function(t,e,n){n.d(e,{Zl:function(){return l},oZ:function(){return u},wu:function(){return a}});var r,a,o=n(85893),i=n(67294),c=n(9140);(r=a||(a={})).AddToCart="add-to-cart",r.BuyNow="buy-now";let u=(0,i.createContext)({cart:{count:0},setCart:()=>{},cartActiveAction:null,whileAddingToCart:()=>Promise.resolve(),whileBuyingNow:()=>Promise.resolve()}),l=t=>{let{cart:e,children:n}=t,[r,a]=(0,i.useState)(e),[l,s]=(0,c.$)(),[d,h]=(0,c.$)();return(0,i.useEffect)(()=>{a(e)},[e]),(0,o.jsx)(u.Provider,{value:{cart:r,setCart:a,cartActiveAction:l&&"add-to-cart"||d&&"buy-now"||null,whileAddingToCart:s,whileBuyingNow:h},children:n})}},28526:function(t,e,n){n.d(e,{Y:function(){return i}});var r=n(83109),a=n(67294);let o={layoutData:{currency:r.CurrencyCode.GBP,countryCode:null,contactNumber:"",imageCount:0,isDefaultData:!0}},i=(0,a.createContext)(o)},8232:function(t,e,n){n.d(e,{ET:function(){return i},tP:function(){return o}});var r=n(85893),a=n(67294);let o=(0,a.createContext)({lightboxes:[],setLightboxes:()=>{}}),i=t=>{let{lightboxes:e,children:n}=t,[i,c]=(0,a.useState)(e);return(0,a.useEffect)(()=>{c(e)},[e]),(0,r.jsx)(o.Provider,{value:{lightboxes:i,setLightboxes:c},children:n})}},41960:function(t,e,n){n.d(e,{h:function(){return i}});var r=n(67294),a=n(65064),o=n(3322);let i=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,o.eM)((0,r.useContext)(a.T).cookies,(0,r.useContext)(a.T).correlationId,t)}},94883:function(t,e,n){n.d(e,{u:function(){return u}});var r=n(67294),a=n(65064),o=n(92658),i=n(76540),c=n(79203);let u=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",{collectionName:e}=(0,r.useContext)(a.T),n=e||"",u=(0,i.Qj)((0,i.U4)(n)),{populatedHeaderPath:l}=(0,c.X)(t,u);return{collectionNamePath:l,collectionName:o.yK.includes(n)?e:void 0}}},59176:function(t,e,n){n.d(e,{P:function(){return c},p:function(){return u}});var r=n(67294),a=n(65064),o=n(31671);let i=t=>{let e=e=>t.indexOf(e);return(e("iPhone")>-1||e("iPad")>-1||e("iPod")>-1)&&e("OS ")>-1?Number(t.substr(e("OS ")+3,3).replace("_",".")):0},c=(t,e)=>{let n=!1,r=!1,a=!1,o=/Macintosh/i.test(t)&&window.navigator.maxTouchPoints&&window.navigator.maxTouchPoints>1;return(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t)||o)&&!e?(r=!0,a=!0):/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(t)&&!e&&(n=!0,a=!0),{isMobileOrTablet:a,isMobile:n,isTablet:r}},u=()=>{let[t,e]=(0,r.useState)({isMobileOrTablet:!1,isMobile:!1,isTablet:!1}),n=(0,r.useContext)(a.T).userAgent,u=(0,o.D)();(0,r.useEffect)(()=>{e(c(n,u))},[]);let l=i(n),s=/(android)/i.test(n),{isMobileOrTablet:d,isMobile:h,isTablet:f}=t;return{isMobileOrTablet:d,isMobile:h,isTablet:f,iosVersion:l,isAndroid:s}}},93787:function(t,e,n){n.d(e,{e:function(){return y}});var r=n(37340),a=n(85893),o=n(67294),i=n(26793),c=n(8232),u=n(29234);let l=(t,e)=>e<3?"...":t.length>e?"".concat(t.slice(0,e-3).trim()).concat("..."):t;var s=n(41960),d=n(63726),h=n(22154);function f(){let t=(0,r._)(["lightbox.view-lightbox"]);return f=function(){return t},t}let g=t=>{let{lightbox:e}=t,{t:n}=(0,i.$)();return(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[l(n("lightbox.save-success-toast",{lightboxName:e.name}),31),(0,a.jsx)("a",{href:"".concat((0,d.W)(d.A.LightboxDetails),"?lbId=").concat(e.id),className:"highlighted-link",children:n(f())})]})},y=()=>{let{showToast:t}=(0,h.e)(),{lightboxes:e,setLightboxes:n}=(0,o.useContext)(c.tP),r=(0,s.h)(),i=e=>{t((0,a.jsx)(g,{lightbox:e}),{style:h.j.Success})},l=async()=>n(await (0,u.RK)(r)());return{currentLightbox:e.find(t=>t.isCurrent),lightboxes:e,updateLightboxes:l,addToLightbox:async(t,e)=>(i(await (0,u.S7)(r)(t,e)),l()),createNewLightboxWithProduct:async(t,e)=>(i(await (0,u.Rg)(r)(t,e)),l())}}},9140:function(t,e,n){n.d(e,{$:function(){return o}});var r=n(67294),a=n(86420);let o=()=>{let[t,e]=(0,r.useState)(!1),n=async n=>{if(!t){e(!0);try{await n()}catch(t){(0,a.S3)(t),e(!1)}e(!1)}};return[t,n]}},75414:function(t,e,n){n.d(e,{f:function(){return d}});var r=n(67294),a=n(10708),o=n(65064),i=n(82604),c=n(92658),u=n(29479),l=n(75195),s=n(23937);let d=t=>{let e=(0,s.a)(),n=(0,u.b)(),{countryName:d}=(0,l.m)(),{isPPMEnabled:h}=(0,r.useContext)(o.T),[f]=(0,a.Z)([c.B$,c.iZ]);return("true"===f.isPPMEnabled||h)&&!d&&(0,i.Z)(n,e,t,f)}},63726:function(t,e,n){n.d(e,{A:function(){return r.A},W:function(){return c}});var r=n(332),a=n(94883),o=n(29479),i=n(75195);let c=t=>{let e=(0,r.q)(t,(0,o.b)()),{distributorTerritory:n,regionalDistributorUrl:c}=(0,i.m)(e),{collectionNamePath:u,collectionName:l}=(0,a.u)(e),s=[r.A.SearchImages,r.A.SearchNews,r.A.SearchFootage,r.A.SearchPage],d=n||l,h=/blog|category\.aspx|logout\.asp/i.test(e);if(d&&!h){let a="/news/newsresults.aspx";if(e.includes(a))return"".concat(e.slice(0,e.length-a.length),"/").concat(d).concat(a);let o=s.includes(t)?n?c:u:e;return[r.A.Blog,r.A.ContributorHome,...s].includes(t)?o:"/".concat(d).concat(e)}return e}},22154:function(t,e,n){n.d(e,{e:function(){return o},j:function(){return a.jf}});var r=n(67294),a=n(21500);let o=()=>(0,r.useContext)(a.rZ)},25320:function(t,e,n){n.d(e,{Xq:function(){return o},_R:function(){return i},dv:function(){return a}});var r=n(86420);let a=t=>async()=>{try{return(await t.get("cart")).data}catch(t){throw Error(t.message)}},o=t=>async e=>{try{await t.post("cart",e)}catch(t){(0,r.S3)(t)}},i=t=>async e=>{try{return(await t.post("cart/checkout",e)).data}catch(t){throw Error(t.message)}}},98723:function(t,e,n){n.d(e,{SU:function(){return o},Tg:function(){return i},U_:function(){return c}});var r=n(83109),a=n(86420);let o=t=>async function(e,n){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;try{return(await t.get("licences/".concat(e,"?lan=").concat(n,"&isSimplifiedPricingFeatureEnabled=").concat(o,"&isVideo=").concat(i),{...r?{}:{validateStatus:null}})).data}catch(t){return(0,a.S3)(t),{rf:null,standard:[],pack:null}}},i=t=>async function(e,n,o,i){let c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r.CurrencyCode.GBP,s=arguments.length>7?arguments[7]:void 0,d=!(arguments.length>8)||void 0===arguments[8]||arguments[8];try{return(await t.get("ct-licences?query=".concat(e,"&renditions=").concat(n,"&locale=").concat(o,"&cacheKey=").concat(i,"&licenseType=").concat(u,"&ebm=").concat(c,"&currency=").concat(l,"&collectionId=").concat(s),{...d?{}:{validateStatus:null}})).data}catch(t){return(0,a.S3)(t),{rf:null,standard:[],pack:null}}},c=t=>async e=>{try{return(await t.post("purchase",e)).data}catch(t){throw Error(t.message)}}},29234:function(t,e,n){n.d(e,{RK:function(){return r},Rg:function(){return o},S7:function(){return a}});let r=t=>async()=>{try{return(await t.get("lightboxes")).data.items}catch(t){throw Error(t.message)}},a=t=>async(e,n)=>{try{return(await t.post("lightboxes/".concat(e.id),{seq:n.altids.seq,productType:n.type})).data}catch(t){throw Error(t.message)}},o=t=>async(e,n)=>{try{return(await t.post("lightboxes",{name:e,seq:n.altids.seq,productType:n.type})).data}catch(t){throw Error(t.message)}}},43301:function(t,e,n){n.d(e,{um:function(){return m},aD:function(){return P},x2:function(){return C}});var r=n(45429),a=n(83109),o=n(25501),i=n(98981),c=n(35193),u=n(68466),l=n(83423),s=n(25320),d=n(98723),h=n(29234),f=n(44289),g=n(3322),y=n(64521),p=n(82604),v=n(28228),w=n(92980);let b=t=>{let{addContext:e,getInitialProps:n,getFinalProps:r}=t;return t=>{let a=async a=>{let o=await e(a),i={...a,...o},c=await n(i);if("redirect"in c||"notFound"in c)return c;let u=await t(i);if("redirect"in u||"notFound"in u)return u;let l=c.props,s=await r({...i,initialProps:l});return"redirect"in s||"notFound"in s?s:{props:{...c.props,...u.props,...s.props}}};return a.inner=t,a}},x=(t,e)=>Promise.resolve({props:{pageData:{layoutData:{currency:a.CurrencyCode.GBP,countryCode:null,contactNumber:"",imageCount:0,isDefaultData:!0},authInfo:t,lightboxes:[],cart:{count:0},licences:null,cookieDomain:e}}}),m=async(t,e,n,a,o,c,l,g)=>{var y;let v=(0,p.Z)(a,e.user,u.y.PageData,l),[w,b,x,m,C]=await Promise.all([(0,f.r)(t)(),n?(0,h.RK)(t)():[],n&&!v?(0,s.dv)(t)():{count:0},n&&(null==e?void 0:null===(y=e.user)||void 0===y?void 0:y.isIQUser)&&!v?(0,d.SU)(t)(1,a):null,n&&!g&&c&&v?(0,r.pM)((0,i.b)().commercetoolsConfig,c):null]);return{props:{pageData:{layoutData:w,authInfo:e,lightboxes:b,cart:x,licences:m,cookieDomain:o,ppmInitialCart:C||null}}}},C=b({addContext:async t=>{let{req:e,res:n,locale:r}=t,a=new o.Z(e.headers.cookie),i=(0,v.QR)(e.headers.host||""),u=await (0,g.yx)(a,e),s=await (0,g.yx)(a,e,!0),d=(null==e?void 0:e.headers["x-distributor-territory"])?c.a:r||c.a,h=e.headers["user-agent"]||"",f=(0,w.CA)(h),p=!!(0,y.b)(a),b=await (0,l.yr)(u)(a,n,d,i,f),{referer:x}=e.headers,m=null==a?void 0:a.get("ctToken");return{cookies:a,api:u,locale:d,isBot:f,authInfo:b,isAuthenticatedRequest:p,cookieDomain:i,referer:x,ctToken:m,apiSearch:s}},getInitialProps:t=>{let{authInfo:e,cookieDomain:n}=t;return x(e,n)},getFinalProps:t=>{let{cookies:e}=t;return Promise.resolve({props:{cookie:(0,v.SQ)(e)}})}}),P=b({addContext:async t=>{let{req:e,res:n,locale:r}=t,a=new o.Z(e.headers.cookie),i=(0,v.QR)(e.headers.host||""),u=await (0,g.yx)(a,e),s=await (0,g.yx)(a,e,!0),d=r||c.a,h=e.headers["user-agent"]||"",f=(0,w.CA)(h),p=(0,y.b)(a),b=await (0,l.yr)(u)(a,n,d,i,f),{referer:x}=e.headers,m=null==a?void 0:a.get("ctToken");return{cookies:a,api:u,locale:d,isBot:f,authInfo:b,isAuthenticatedRequest:!!p,cookieDomain:i,referer:x,ctToken:m,apiSearch:s}},getInitialProps:t=>{let{api:e,authInfo:n,isAuthenticatedRequest:r,locale:a,cookieDomain:o,ctToken:i,cookies:c}=t;return m(e,n,r,a,o,i,c)},getFinalProps:t=>{let{cookies:e}=t;return Promise.resolve({props:{cookie:(0,v.SQ)(e)}})}})}}]);
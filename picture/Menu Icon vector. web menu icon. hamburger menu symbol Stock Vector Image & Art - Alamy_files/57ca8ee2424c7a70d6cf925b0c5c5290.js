/* Created: 2024/10/09 08:20:11 UTC version: latest */(()=>{"use strict";var e={648:(e,r,t)=>{t.d(r,{FF:()=>c,NI:()=>s,SW:()=>i,fH:()=>u,vV:()=>d});const o={info:"info::",error:"error::",warning:"warning::",verbose:"verbose::",success:"success::"},a={allowed:document.cookie.indexOf("abTastyDebug=")>=0};function n(e,r,t){if(function(){const e=!window.abTastyStopLog;return(a.allowed||window.abTastyDebug)&&e}()){for(var o=arguments.length,n=new Array(o>3?o-3:0),i=3;i<o;i++)n[i-3]=arguments[i];r(`%c [AB Tasty Debug mode] %c ${e}`,"background: #222; color: #bada55; padding: 3px; border-radius: 5px 0px 0px 5px;",`${t} padding: 3px; border-radius: 0px 5px 5px 0px;`,...n)}}function i(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(o.success,console.info,"background: green; color: white;",...r)}function c(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(o.warning,console.warn,"background: orange; color: white;",...r)}function s(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(o.verbose,console.debug,"background: pink; color: white;",...r)}function d(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(o.error,console.error,"background: red; color: white;",...r)}function u(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(o.info,console.info,"background: blue; color: white;",...r)}},6883:(e,r,t)=>{t.d(r,{r:()=>o});const o=e=>{if(window.abTastyNoRandomHit)return!0;if(0===e)return!1;return 1===Math.floor(Math.random()*e)+1}},6361:(e,r,t)=>{t.d(r,{_:()=>a});var o=t(648);async function a(e){try{return await e()}catch(r){try{return(0,o.FF)("Chunk failed to be loaded asynchronously. Retrying...",r),await e()}catch(e){throw(0,o.vV)("Chunk failed to be loaded asynchronously. Retry failed.",e),e}}}},7795:(e,r,t)=>{t.d(r,{Rh:()=>n,iU:()=>i,lK:()=>c});var o=t(648),a=t(6883);const n="abtasty-execution-started",i=()=>window.performance.getEntriesByName(n).length>0,c=()=>{try{if(!(0,a.r)(1e3)||i())return;window.performance.mark(n)}catch(e){(0,o.FF)("Can't start execution time performance measure due to:",e.message)}}}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={exports:{}};return e[o].call(n.exports,n,n.exports,t),n.exports}t.m=e,t.H={},t.G=e=>{Object.keys(t.H).map((r=>{t.H[r](e)}))},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.f={},t.e=(e,r)=>Promise.all(Object.keys(t.f).reduce(((o,a)=>(t.f[a](e,o,r),o)),[])),t.u=e=>223===e?"shared/commons.9b20dd57c6f12e1beb80.js":792===e?"57ca8ee2424c7a70d6cf925b0c5c5290/main.76fa09de01cdacb9e15f.js":153===e?"shared/analytics.708172e91f89d6234d3a.js":693===e?"shared/me.95e8bf721a20e70b0d1a.js":void 0,t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="tag:";t.l=(o,a,n,i,c)=>{if(e[o])e[o].push(a);else{var s,d;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==r+n){s=f;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+n),c&&s.setAttribute("fetchpriority",c),s.src=o),e[o]=[a];var p=(r,t)=>{s.onerror=s.onload=null,clearTimeout(h);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(t))),r)return r(t)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={190:0};t.f.j=(r,o,a)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=i);var c=t.p+t.u(r),s=new Error;t.l(c,(o=>{if(t.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}}),"chunk-"+r,r,a)}},t.H.j=r=>{if(!t.o(e,r)||void 0===e[r]){e[r]=null;var o=document.createElement("link");o.charset="utf-8",t.nc&&o.setAttribute("nonce",t.nc),o.rel="preload",o.as="script",o.href=t.p+t.u(r),document.head.appendChild(o)}};var r=(r,o)=>{var a,n,i=o[0],c=o[1],s=o[2],d=0;if(i.some((r=>0!==e[r]))){for(a in c)t.o(c,a)&&(t.m[a]=c[a]);if(s)s(t)}for(r&&r(o);d<i.length;d++)n=i[d],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0},o=self.webpackChunktag=self.webpackChunktag||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})(),(()=>{var e={792:[223,693]};t.f.preload=r=>{var o=e[r];Array.isArray(o)&&o.map(t.G)}})();var o=t(648),a=t(6361),n=t(7795);(async()=>((0,n.lK)(),(window.ABTastyTagPerforming||window.ABTasty?.started)&&(0,o.FF)("AB Tasty's Tag is already performing or started. If you think that's an issue, please check your tag implementation."),window.ABTastyTagPerforming=!0,await(0,a._)((()=>Promise.all([t.e(223,"high"),t.e(792,"high")]).then(t.bind(t,602))))))().then((e=>e.mainTag())).catch((e=>{(0,o.vV)("AB Tasty's Tag can't be loaded. Caused by:",e)}))})();
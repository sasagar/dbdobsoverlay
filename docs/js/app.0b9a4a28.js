(function(e){function t(t){for(var n,o,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==c[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8e1bc071"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"bb6cb3e6"}[e]+".css",c=i.p+n,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===n||s===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],p.parentNode.removeChild(p),r(a)},p.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){o[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}c[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1f77":function(e,t,r){},"4c41":function(e,t,r){"use strict";r("c14a")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("df85");function c(e,t){var r=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["d"])(r)}r("7635");const a={};a.render=c;var u=a,i=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),l=r("cf05"),s=r.n(l),f={class:"home"},p=Object(n["g"])("img",{alt:"Vue logo",src:s.a},null,-1);function b(e,t,r,o,c,a){var u=Object(n["z"])("HelloWorld");return Object(n["s"])(),Object(n["f"])("div",f,[p,Object(n["i"])(u,{msg:"Welcome to Your Vue.js App"})])}Object(n["v"])("data-v-452f96ec");var d={class:"hello"},h=Object(n["g"])("p",null,"This is just show the perks you use for audience.",-1),v=Object(n["h"])(" Overlay for Survivors is here / サバイバー用オーバーレイはこちら "),g=Object(n["g"])("p",null,"Overlay for Killers is here / キラー用オーバーレイはこちら",-1),m=Object(n["g"])("section",null,[Object(n["g"])("h2",null,"[JP] オーバーレイについて"),Object(n["g"])("p",null,[Object(n["h"])(" このオーバーレイは、今使っているパークをオーバーレイで表示するために作られました。"),Object(n["g"])("br"),Object(n["h"])(" 機能は随時追加される可能性があります。表示が変わってしまったときなどは必要に応じてこのページを確認して、対処法などをご確認ください。 ")])],-1),O=Object(n["g"])("section",null,[Object(n["g"])("h2",null,"[EN] About this overlay"),Object(n["g"])("p",null,[Object(n["h"])(" This overlay was created to show the current park you are using as an overlay. "),Object(n["g"])("br"),Object(n["h"])(" Functions may be added at any time. If the display changes, please check this page as necessary to find out how to fix the problem. ")])],-1);function j(e,t,r,o,c,a){var u=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",d,[Object(n["g"])("h1",null,Object(n["B"])(r.msg),1),h,Object(n["g"])("p",null,[Object(n["i"])(u,{to:"./survivors"},{default:Object(n["G"])((function(){return[v]})),_:1})]),g,m,O])}Object(n["t"])();var y={name:"HelloWorld",props:{msg:String}};r("4c41");y.render=j,y.__scopeId="data-v-452f96ec";var w=y,k={name:"Home",components:{HelloWorld:w}};k.render=b;var S=k,_=[{path:"/",name:"Home",component:S},{path:"/survivors",name:"Survivors",component:function(){return r.e("about").then(r.bind(null,"6aa8"))}}],P=Object(i["a"])({history:Object(i["b"])(),routes:_}),E=P;Object(n["c"])(u).use(E).use(o["a"]).mount("#app")},7635:function(e,t,r){"use strict";r("1f77")},c14a:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0b9a4a28.js.map
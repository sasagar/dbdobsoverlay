(function(e){function t(t){for(var r,o,a=t[0],l=t[1],i=t[2],s=0,f=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);b&&b(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"02911baa"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"02883427"}[e]+".css",c=l.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===c))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){i=f[a],s=i.getAttribute("data-href");if(s===r||s===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],b.parentNode.removeChild(b),n(u)},b.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=a(e);var f=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var b=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f77":function(e,t,n){},"41e9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("df85");function c(e,t){var n=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["d"])(n)}n("7635");const u={};u.render=c;var a=u,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),i=n("cd04"),s=n.n(i),f={class:"home"},b=Object(r["g"])("img",{alt:"Icon",src:s.a},null,-1);function p(e,t,n,o,c,u){var a=Object(r["A"])("HelloWorld");return Object(r["t"])(),Object(r["f"])("div",f,[b,Object(r["j"])(a,{msg:"Welcome to DbD Perks Overlay"})])}Object(r["w"])("data-v-55cf527a");var d={class:"hello"},h=Object(r["g"])("p",null,"This is just show the perks you use for audience.",-1),O=Object(r["g"])("h2",null,"Overlay & Contoller URL",-1),j=Object(r["i"])(" Overlay for Survivors is here / サバイバー用オーバーレイはこちら "),v=Object(r["i"])(" Overlay Controller is here / オーバーレイの設定画面はこちら "),g=Object(r["g"])("p",null," 【Ready for release / 準備中】Overlay for Killers is here / キラー用オーバーレイはこちら ",-1),m=Object(r["g"])("section",null,[Object(r["g"])("h2",null,"[JP] オーバーレイについて"),Object(r["g"])("p",null,[Object(r["i"])(" このオーバーレイは、今使っているパークをオーバーレイで表示するために作られました。"),Object(r["g"])("br"),Object(r["i"])(" 機能は随時追加される可能性があります。表示が変わってしまったときなどは必要に応じてこのページを確認して、対処法などをご確認ください。 ")])],-1),y=Object(r["g"])("section",null,[Object(r["g"])("h2",null,"[EN] About this overlay"),Object(r["g"])("p",null,[Object(r["i"])(" This overlay was created to show the current park you are using as an overlay. "),Object(r["g"])("br"),Object(r["i"])(" Functions may be added at any time. If the display changes, please check this page as necessary to find out how to fix the problem. ")])],-1),w=Object(r["g"])("h2",null,"How to use / 使い方",-1),k=Object(r["i"])(" Guide for this overlay. / 使い方はこちら ");function _(e,t,n,o,c,u){var a=Object(r["A"])("router-link");return Object(r["t"])(),Object(r["f"])("div",d,[Object(r["g"])("h1",null,Object(r["C"])(n.msg),1),h,Object(r["g"])("section",null,[O,Object(r["g"])("p",null,[Object(r["j"])(a,{to:"./survivors"},{default:Object(r["H"])((function(){return[j]})),_:1})]),Object(r["g"])("p",null,[Object(r["j"])(a,{to:"./ctrl"},{default:Object(r["H"])((function(){return[v]})),_:1})]),g]),m,y,Object(r["g"])("section",null,[w,Object(r["g"])("p",null,[Object(r["j"])(a,{to:"./howto"},{default:Object(r["H"])((function(){return[k]})),_:1})])])])}Object(r["u"])();var P={name:"HelloWorld",props:{msg:String}};n("f408");P.render=_,P.__scopeId="data-v-55cf527a";var S=P,C={name:"Home",components:{HelloWorld:S}};n("fce9");C.render=p;var H=C,A=[{path:"/",name:"Home",component:H},{path:"/survivors",name:"Survivors",component:function(){return n.e("about").then(n.bind(null,"6aa8"))}},{path:"/ctrl",name:"Ctrl",component:function(){return n.e("about").then(n.bind(null,"3279"))}},{path:"/howto",name:"HowTo",component:function(){return n.e("about").then(n.bind(null,"5515"))}}],E=Object(l["a"])({history:Object(l["b"])(),routes:A}),T=E;Object(r["c"])(a).use(T).use(o["a"]).mount("#app")},7635:function(e,t,n){"use strict";n("1f77")},"94c3":function(e,t,n){},cd04:function(e,t,n){e.exports=n.p+"img/blank.e585d0b7.png"},f408:function(e,t,n){"use strict";n("41e9")},fce9:function(e,t,n){"use strict";n("94c3")}});
//# sourceMappingURL=app.92e270a6.js.map
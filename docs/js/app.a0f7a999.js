(function(e){function t(t){for(var r,o,a=t[0],l=t[1],i=t[2],s=0,b=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(b.length)b.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3377f509"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"a9ca177f"}[e]+".css",c=l.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===c))return t()}var b=document.getElementsByTagName("style");for(a=0;a<b.length;a++){i=b[a],s=i.getAttribute("data-href");if(s===r||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=a(e);var b=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",b.name="ChunkLoadError",b.type=r,b.request=o,n[1](b)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0794":function(e,t,n){"use strict";n("f548")},"1f77":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("df85");function c(e,t){var n=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["d"])(n)}n("7635");const u={};u.render=c;var a=u,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),i=n("cd04"),s=n.n(i),b={class:"home"},f=Object(r["g"])("img",{alt:"Icon",src:s.a},null,-1);function d(e,t,n,o,c,u){var a=Object(r["A"])("HelloWorld");return Object(r["t"])(),Object(r["f"])("div",b,[f,Object(r["j"])(a,{msg:"Welcome to DbD Perks Overlay"})])}Object(r["w"])("data-v-29dd2b27");var p={class:"hello"},h=Object(r["g"])("p",null,"This is just show the perks you use for audience.",-1),j=Object(r["g"])("h2",null,"Overlay & Contoller URL",-1),O=Object(r["i"])(" Overlay for Survivors is here / サバイバー用オーバーレイはこちら "),v=Object(r["i"])(" Overlay for Killers is here / キラー用オーバーレイはこちら "),g=Object(r["i"])(" Overlay Controller is here / オーバーレイの設定画面はこちら "),m=Object(r["g"])("section",null,[Object(r["g"])("h2",null,"[JP] オーバーレイについて"),Object(r["g"])("p",null,[Object(r["i"])(" このオーバーレイは、今使っているパークをオーバーレイで表示するために作られました。"),Object(r["g"])("br"),Object(r["i"])(" 機能は随時追加される可能性があります。表示が変わってしまったときなどは必要に応じてこのページを確認して、対処法などをご確認ください。 ")])],-1),y=Object(r["g"])("section",null,[Object(r["g"])("h2",null,"[EN] About this overlay"),Object(r["g"])("p",null,[Object(r["i"])(" This overlay was created to show the current park you are using as an overlay. "),Object(r["g"])("br"),Object(r["i"])(" Functions may be added at any time. If the display changes, please check this page as necessary to find out how to fix the problem. ")])],-1),w=Object(r["g"])("h2",null,"How to use / 使い方",-1),k=Object(r["i"])(" Guide for this overlay. / 使い方はこちら ");function _(e,t,n,o,c,u){var a=Object(r["A"])("router-link");return Object(r["t"])(),Object(r["f"])("div",p,[Object(r["g"])("h1",null,Object(r["C"])(n.msg),1),h,Object(r["g"])("section",null,[j,Object(r["g"])("p",null,[Object(r["j"])(a,{to:"./survivors"},{default:Object(r["H"])((function(){return[O]})),_:1})]),Object(r["g"])("p",null,[Object(r["j"])(a,{to:"./killers"},{default:Object(r["H"])((function(){return[v]})),_:1})]),Object(r["g"])("p",null,[Object(r["j"])(a,{to:"./ctrl"},{default:Object(r["H"])((function(){return[g]})),_:1})])]),m,y,Object(r["g"])("section",null,[w,Object(r["g"])("p",null,[Object(r["j"])(a,{to:"./howto"},{default:Object(r["H"])((function(){return[k]})),_:1})])])])}Object(r["u"])();var H={name:"HelloWorld",props:{msg:String}};n("0794");H.render=_,H.__scopeId="data-v-29dd2b27";var P=H,S={name:"Home",components:{HelloWorld:P}};n("fce9");S.render=d;var C=S,A=[{path:"/",name:"Home",component:C},{path:"/survivors",name:"Survivors",component:function(){return n.e("about").then(n.bind(null,"6aa8"))}},{path:"/killers",name:"Killers",component:function(){return n.e("about").then(n.bind(null,"f2b9"))}},{path:"/ctrl",name:"Ctrl",component:function(){return n.e("about").then(n.bind(null,"3279"))}},{path:"/howto",name:"HowTo",component:function(){return n.e("about").then(n.bind(null,"5515"))}}],E=Object(l["a"])({history:Object(l["b"])(),routes:A}),T=E;Object(r["c"])(a).use(T).use(o["a"]).mount("#app")},7635:function(e,t,n){"use strict";n("1f77")},"94c3":function(e,t,n){},cd04:function(e,t,n){e.exports=n.p+"img/blank.e585d0b7.png"},f548:function(e,t,n){},fce9:function(e,t,n){"use strict";n("94c3")}});
//# sourceMappingURL=app.a0f7a999.js.map
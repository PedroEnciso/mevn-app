(function(e){function t(t){for(var r,o,u=t[0],s=t[1],i=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-40b90bb8":"a95f4f9f","chunk-75f66e43":"d011e8f0"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-40b90bb8":1,"chunk-75f66e43":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-40b90bb8":"96e8920a","chunk-75f66e43":"4c9d19df"}[e]+".css",c=s.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3cf5":function(e,t,n){},"4aef":function(e,t,n){"use strict";n("3cf5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(n)}n("4aef");var c=n("6b0d"),a=n.n(c);const u={},s=a()(u,[["render",o]]);var i=s,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));function f(e,t,n,o,c,a){var u=Object(r["x"])("PostComponent");return Object(r["q"])(),Object(r["d"])(u)}var p=function(e){return Object(r["t"])("data-v-d2b162ea"),e=e(),Object(r["r"])(),e},b={class:"container"},d=p((function(){return Object(r["g"])("h1",null,"Latest Posts",-1)})),v={class:"create-post"},h=p((function(){return Object(r["g"])("label",{for:"create-post"},"New Post: ",-1)})),g=p((function(){return Object(r["g"])("p",null,"Double click on a post to delete.",-1)})),m={key:0,class:"error"},O=p((function(){return Object(r["g"])("hr",null,null,-1)})),j={class:"posts-container"},y=["onDblclick","index"],k={class:"text"};function w(e,t,n,o,c,a){return Object(r["q"])(),Object(r["f"])("div",b,[d,Object(r["g"])("div",v,[h,Object(r["D"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.text=e}),type:"text",id:"create-post"},null,512),[[r["B"],o.text]]),Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return o.createPost&&o.createPost.apply(o,arguments)})},"Create Post")]),g,o.error?(Object(r["q"])(),Object(r["f"])("p",m,Object(r["z"])(o.error),1)):Object(r["e"])("",!0),O,Object(r["g"])("div",j,[(Object(r["q"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(o.posts,(function(e,t){return Object(r["q"])(),Object(r["f"])("div",{class:"post",onDblclick:function(t){return o.deletePost(e._id)},key:e._id,index:t},[Object(r["g"])("p",null,Object(r["z"])(e.createdAt.substr(0,10)),1),Object(r["g"])("p",k,Object(r["z"])(e.text),1)],40,y)})),128))])])}var x=n("1da1"),P=(n("96cf"),n("d4ec")),_=n("bee2"),C=n("bc3a"),S=n.n(C),E="/api/posts/",q=function(){function e(){Object(P["a"])(this,e)}return Object(_["a"])(e,null,[{key:"getPosts",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get(E);case 3:return n=e.sent,r=n.data,console.log(r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"insertPost",value:function(e){return S.a.post(E,{text:e})}},{key:"deletePost",value:function(e){return S.a.delete("".concat(E).concat(e))}}]),e}(),R=q,A={name:"PostComponent",setup:function(){var e=Object(r["v"])([]),t=Object(r["v"])(null),n=Object(r["v"])(""),o=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R.getPosts(t.value);case 3:e.value=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),t.value=n.t0.message;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}();o();var c=function(){var r=Object(x["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.value="",!n.value){r.next=10;break}return r.next=4,R.insertPost(n.value);case 4:return n.value="",r.next=7,R.getPosts();case 7:e.value=r.sent,r.next=11;break;case 10:t.value="Please write something before posting!";case 11:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),a=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R.deletePost(n);case 2:return t.next=4,R.getPosts();case 4:e.value=t.sent;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{posts:e,error:t,text:n,createPost:c,deletePost:a}}};n("d69e");const L=a()(A,[["render",w],["__scopeId","data-v-d2b162ea"]]);var T=L,D={name:"Home",components:{PostComponent:T}};const N=a()(D,[["render",f]]);var B=N,M=[{path:"/",name:"Home",component:B},{path:"/login",name:"Login",component:function(){return n.e("chunk-40b90bb8").then(n.bind(null,"a55b"))}},{path:"/signup",name:"SignUp",component:function(){return n.e("chunk-75f66e43").then(n.bind(null,"5c9c"))}}],z=Object(l["a"])({history:Object(l["b"])("/"),routes:M}),H=z,U=n("5502"),I=Object(U["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(i).use(I).use(H).mount("#app")},"7a51":function(e,t,n){},d69e:function(e,t,n){"use strict";n("7a51")}});
//# sourceMappingURL=app.81742cea.js.map
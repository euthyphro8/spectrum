(function(t){function e(e){for(var s,A,r=e[0],c=e[1],o=e[2],h=0,l=[];h<r.length;h++)A=r[h],Object.prototype.hasOwnProperty.call(i,A)&&i[A]&&l.push(i[A][0]),i[A]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(l.length)l.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=A(A.s=n[0]))}return t}var s={},i={app:0},a=[];function A(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,A),n.l=!0,n.exports}A.m=t,A.c=s,A.d=function(t,e,n){A.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},A.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},A.t=function(t,e){if(1&e&&(t=A(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)A.d(n,s,function(e){return t[e]}.bind(null,s));return n},A.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return A.d(e,"a",e),e},A.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},A.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var s=n("85ec"),i=n.n(s);i.a},1963:function(t,e){t.exports="data:image/png;base64,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"},"1a74":function(t,e,n){},"20c3":function(t,e,n){},"355b":function(t,e,n){t.exports=n.p+"img/grass.7e028f55.png"},"3f65":function(t,e,n){"use strict";var s=n("ad34"),i=n.n(s);i.a},"53d1":function(t,e,n){"use strict";var s=n("1a74"),i=n.n(s);i.a},"5c05":function(t,e,n){"use strict";var s=n("20c3"),i=n.n(s);i.a},6779:function(t,e,n){"use strict";var s=n("748f"),i=n.n(s);i.a},"748f":function(t,e,n){},"80b0":function(t,e,n){},"85ec":function(t,e,n){},"8bce":function(t,e,n){"use strict";var s=n("fae4"),i=n.n(s);i.a},"8ddf":function(t,e,n){},"9aad":function(t,e,n){"use strict";var s=n("ae2e"),i=n.n(s);i.a},a437:function(t,e,n){},a6c9:function(t,e,n){"use strict";var s=n("a437"),i=n.n(s);i.a},ad34:function(t,e,n){},ae2e:function(t,e,n){},b6eb:function(t,e,n){"use strict";var s=n("8ddf"),i=n.n(s);i.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=n("9483");Object(i["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},A=[],r=n("d4ec"),c=n("99de"),o=n("7e84"),u=n("262e"),h=n("9ab4"),l=n("60a3"),d=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(l["c"]);d=h["a"]([Object(l["a"])({components:{}})],d);var f=d,p=f,v=(n("034f"),n("2877")),m=Object(v["a"])(p,a,A,!1,null,null,null),y=m.exports,b=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"master-selection",on:{click:function(e){return t.onSelection("/master")}}},[n("h1",[t._v("Game Master")])]),n("div",{staticClass:"player-selection",on:{click:function(e){return t.onSelection("/player")}}},[n("h1",[t._v("Player")])]),n("div",{staticClass:"spectator-selection",on:{click:function(e){return t.onSelection("/spectator")}}},[n("h1",[t._v("Spectator")])])])},E=[],O=n("bee2"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("MapCanvas"),n("MapPalette",{attrs:{onTop:!0}})],1)},k=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("canvas",{ref:"map-canvas"})])},w=[],x=(n("d81d"),n("4c53"),function(){function t(){Object(r["a"])(this,t),this.x=0,this.y=0,this.s=1}return Object(O["a"])(t,[{key:"move",value:function(t,e){this.x+=t/this.s,this.y+=e/this.s}},{key:"zoom",value:function(t){this.s+=t,this.s<.5?this.s=.5:this.s>10&&(this.s=10)}}]),t}()),I=x,S=(n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),function(){function t(){Object(r["a"])(this,t),this.images=new Map,this.unloadedCount=0,this.initImages()}return Object(O["a"])(t,[{key:"hasLoaded",value:function(){return 0===this.unloadedCount}},{key:"getImage",value:function(t){var e=this.images.get(t);if(e)return e;throw new Error("Image ".concat(t," has not been loaded."))}},{key:"loadImage",value:function(e,n){if(!this.images.has(e)){this.unloadedCount+=1;var s=new Image(t.TILE_SIZE,t.TILE_SIZE);s.onload=this.onImageLoaded.bind(this),s.src=n,this.images.set(e,s)}}},{key:"initImages",value:function(){this.loadImage(t.ROCK_IMAGE,n("1963")),this.loadImage(t.COBBLE_IMAGE,n("d676")),this.loadImage(t.GRASS_IMAGE,n("355b"))}},{key:"onImageLoaded",value:function(){this.unloadedCount-=1}}]),t}());S.TILE_SIZE=64,S.ROCK_IMAGE="rock",S.COBBLE_IMAGE="cobble",S.GRASS_IMAGE="grass";var T=S,M=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(r["a"])(this,t),this.x=e,this.y=n}return Object(O["a"])(t,[{key:"add",value:function(t,e){return this.x+=t,this.y+=e,this}},{key:"addV",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t,e){return this.x-=t,this.y-=e,this}},{key:"subV",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"multiply",value:function(t){return this.x*=t,this.y*=t,this}},{key:"divide",value:function(t){return this.x/=t,this.y/=t,this}},{key:"floorDivide",value:function(t){return this.x=Math.floor(this.x/t),this.y=Math.floor(this.y/t),this}}]),t}(),P=M,L=function(){function t(){Object(r["a"])(this,t),this.camera=new I}return Object(O["a"])(t,[{key:"begin",value:function(t){this.context=t,this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.context.strokeStyle="#e4f03d",this.context.lineWidth=3,this.context.beginPath()}},{key:"end",value:function(){this.context&&this.context.stroke(),this.context=void 0}},{key:"renderTile",value:function(t){this.context?this.context.drawImage(t.sprite,(t.x*T.TILE_SIZE+this.camera.x)*this.camera.s,(t.y*T.TILE_SIZE+this.camera.y)*this.camera.s,T.TILE_SIZE*this.camera.s,T.TILE_SIZE*this.camera.s):console.log("[ Screen ] Begin has not been called yet this frame.")}},{key:"renderTileOutline",value:function(t,e){var n=new P(0,0);return this.context?this.context.rect(t,e,T.TILE_SIZE*this.camera.s,T.TILE_SIZE*this.camera.s):console.log("[ Screen ] Begin has not been called yet this frame."),n}},{key:"screenToWorldSpace",value:function(t){return t.divide(this.camera.s).sub(this.camera.x,this.camera.y)}},{key:"worldToScreenSpace",value:function(t){return t.divide(this.camera.s).sub(this.camera.x,this.camera.y)}},{key:"screenToIndexSpace",value:function(t){return t.divide(this.camera.s).sub(this.camera.x,this.camera.y).floorDivide(T.TILE_SIZE)}},{key:"indexToScreenSpace",value:function(t){return t.multiply(T.TILE_SIZE).add(this.camera.x,this.camera.y).multiply(this.camera.s)}}]),t}(),H=L,_=function(){function t(){Object(r["a"])(this,t),this.upPressed=!1,this.downPressed=!1,this.leftPressed=!1,this.rightPressed=!1,this.panPressed=!1,this.clickDown=!1,this.mdx=0,this.mdy=0,this.mlx=0,this.mly=0,this.ds=0,this.mx=0,this.my=0}return Object(O["a"])(t,[{key:"getClick",value:function(){return this.clickDown}},{key:"update",value:function(t,e){var n=5,s=this.leftPressed?this.rightPressed?0:-n:this.rightPressed?n:0,i=this.upPressed?this.downPressed?0:-n:this.downPressed?n:0;s+=this.mdx,i+=this.mdy,this.mdx=0,this.mdy=0,e.move(-s,-i),e.zoom(this.ds),this.ds=0}},{key:"registerEvents",value:function(){document.addEventListener("keydown",this.onKeyDown.bind(this),{passive:!0}),document.addEventListener("keyup",this.onKeyUp.bind(this),{passive:!0}),document.addEventListener("mousedown",this.onMouseDown.bind(this),{passive:!0}),document.addEventListener("mousemove",this.onMouseMove.bind(this),{passive:!0}),document.addEventListener("mouseup",this.onMouseUp.bind(this),{passive:!0}),document.addEventListener("wheel",this.onScroll.bind(this),{passive:!0})}},{key:"unRegisterEvents",value:function(){document.removeEventListener("keydown",this.onKeyDown.bind(this)),document.removeEventListener("keyup",this.onKeyUp.bind(this))}},{key:"onKeyDown",value:function(t){65===t.keyCode||37===t.keyCode?this.leftPressed=!0:87===t.keyCode||38===t.keyCode?this.upPressed=!0:83===t.keyCode||40===t.keyCode?this.downPressed=!0:68!==t.keyCode&&39!==t.keyCode||(this.rightPressed=!0)}},{key:"onKeyUp",value:function(t){65===t.keyCode||37===t.keyCode?this.leftPressed=!1:87===t.keyCode||38===t.keyCode?this.upPressed=!1:83===t.keyCode||40===t.keyCode?this.downPressed=!1:68!==t.keyCode&&39!==t.keyCode||(this.rightPressed=!1)}},{key:"onMouseDown",value:function(t){(t.shiftKey||1===t.button)&&(this.panPressed=!0,this.mlx=t.screenX,this.mly=t.screenY),this.clickDown=!0}},{key:"onMouseMove",value:function(t){this.mx=t.clientX,this.my=t.clientY,this.panPressed&&(this.mdx+=this.mlx-t.screenX,this.mdy+=this.mly-t.screenY,this.mlx=t.screenX,this.mly=t.screenY)}},{key:"onMouseUp",value:function(t){this.panPressed=!1,this.clickDown=!1}},{key:"onScroll",value:function(t){this.ds-=t.deltaY/1e3}}]),t}(),G=_,D=function(){function t(){Object(r["a"])(this,t)}return Object(O["a"])(t,null,[{key:"createTile",value:function(t,e,n,s){return{sprite:t.state.assets.getImage(e),x:n,y:s}}}]),t}(),R=function(){function t(e,n){Object(r["a"])(this,t),this.width=e,this.height=n,this.tiles=new Array(e*n)}return Object(O["a"])(t,[{key:"initTiles",value:function(t){for(var e=0;e<this.height;e++)for(var n=0;n<this.width;n++)this.tiles[this.width*e+n]=D.createTile(t,"grass",n,e)}},{key:"getTile",value:function(t,e){if(!(t<0||t>=this.width||e<0||e>=this.height))return this.tiles[this.width*e+t]}},{key:"render",value:function(t){for(var e=0;e<this.height;e++)for(var n=0;n<this.width;n++)t.renderTile(this.getTile(n,e))}}]),t}(),Q=function(){function t(e){Object(r["a"])(this,t),this.store=e,this.cursorLocation=new P}return Object(O["a"])(t,[{key:"update",value:function(t,e,n){if(this.cursorLocation.x=e.mx,this.cursorLocation.y=e.my,t.screenToIndexSpace(this.cursorLocation),e.getClick()){var s=n.getTile(this.cursorLocation.x,this.cursorLocation.y);s&&this.store.state.selected&&this.lastTileEdited!==s&&(s.sprite=this.store.state.assets.getImage(this.store.state.selected),this.lastTileEdited=s)}else this.lastTileEdited=void 0;t.indexToScreenSpace(this.cursorLocation)}},{key:"render",value:function(t){t.renderTileOutline(this.cursorLocation.x,this.cursorLocation.y)}}]),t}(),F=function(){function t(e){Object(r["a"])(this,t),this.store=e,this.controller=new G,this.screen=new H,this.map=new R(16,16),this.map.initTiles(this.store),this.editor=new Q(this.store),this.controller.registerEvents()}return Object(O["a"])(t,[{key:"update",value:function(t){this.controller.update(t,this.screen.camera),this.editor.update(this.screen,this.controller,this.map)}},{key:"render",value:function(t){this.store.state.assets.hasLoaded()&&(this.screen.begin(t),this.map.render(this.screen),this.editor.render(this.screen),this.screen.end())}},{key:"close",value:function(){}}]),t}(),Y=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(O["a"])(e,[{key:"mounted",value:function(){var t=this.$refs["map-canvas"];this.context=t.getContext("2d"),this.context.canvas.width=this.context.canvas.clientWidth,this.context.canvas.height=this.context.canvas.clientHeight,window.addEventListener("resize",this.onResize.bind(this),{passive:!0}),this.map=new F(this.$store),this.lastTime=Date.now(),this.requestId=requestAnimationFrame(this.tick.bind(this))}},{key:"tick",value:function(t){var e=t-this.lastTime;this.map.update(e),this.lastTime=t,this.map.render(this.context),this.requestId=requestAnimationFrame(this.tick.bind(this))}},{key:"onResize",value:function(t){this.context.canvas.width=this.context.canvas.clientWidth,this.context.canvas.height=this.context.canvas.clientHeight}}]),e}(l["c"]);Y=h["a"]([Object(l["a"])({name:"MapCanvas",components:{}})],Y);var B=Y,U=B,z=(n("53d1"),Object(v["a"])(U,C,w,!1,null,"49eda578",null)),Z=z.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"palette",class:{top:t.onTop,left:!t.onTop}},t._l(t.sprites,(function(e){return n("div",{key:e,staticClass:"tile"},[n("img",{attrs:{src:t.$store.state.assets.images.get(e).src,alt:e},on:{click:function(n){return t.onClick(n,e)}}})])})),0)},W=[],J=n("2909"),V=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.sprites=[],t}return Object(u["a"])(e,t),Object(O["a"])(e,[{key:"mounted",value:function(){var t=this.$store;this.sprites=Object(J["a"])(t.state.assets.images.keys())}},{key:"onClick",value:function(t,e){var n=this.$store;n.state.selected=e}}]),e}(l["c"]);h["a"]([Object(l["b"])({default:!0})],V.prototype,"onTop",void 0),V=h["a"]([Object(l["a"])({name:"MapPalette",components:{}})],V);var q=V,X=q,N=(n("d70e"),Object(v["a"])(X,K,W,!1,null,"fb98a20e",null)),$=N.exports,tt=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(l["c"]);tt=h["a"]([Object(l["a"])({name:"World",components:{MapCanvas:Z,MapPalette:$}})],tt);var et=tt,nt=et,st=(n("8bce"),Object(v["a"])(nt,j,k,!1,null,"1046b38e",null)),it=st.exports,at=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(O["a"])(e,[{key:"onSelection",value:function(t){this.$router.push(t)}}]),e}(l["c"]);at=h["a"]([Object(l["a"])({name:"Home",components:{World:it}})],at);var At=at,rt=At,ct=(n("fd03"),Object(v["a"])(rt,g,E,!1,null,"2b7717a4",null)),ot=ct.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],lt={},dt=Object(v["a"])(lt,ut,ht,!1,null,null,null),ft=dt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"master"},[n("InfoBar",{attrs:{title:"Maps",subtitle:"Example Campaign"}}),n("div",{staticClass:"content"},[t._m(0),n("div",{staticClass:"templates"},[n("SmallMapCard",{attrs:{title:"New Map"}})],1),t._m(1),n("div",{staticClass:"body"},[n("MapCard")],1)])],1)},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"template-header"},[n("h1",[t._v("Start a new map")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body-header"},[n("h1",[t._v("Recent maps")])])}],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-bar"},[n("h1",{staticClass:"left"},[t._v(t._s(t.title))]),n("div",{staticClass:"search"}),n("h1",{staticClass:"right"},[t._v(t._s(t.subtitle))])])},yt=[],bt=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(l["c"]);bt=h["a"]([Object(l["a"])({name:"InfoBar",components:{},props:{title:String,subtitle:String}})],bt);var gt=bt,Et=gt,Ot=(n("b6eb"),Object(v["a"])(Et,mt,yt,!1,null,"502f6b75",null)),jt=Ot.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-card"},[n("div",{staticClass:"thumb"})])}],wt=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(l["c"]);wt=h["a"]([Object(l["a"])({name:"MapCard",components:{}})],wt);var xt=wt,It=xt,St=(n("6779"),Object(v["a"])(It,kt,Ct,!1,null,"d4b3d394",null)),Tt=St.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"small-map-card"},[n("div",{staticClass:"thumb"}),n("h1",[t._v(t._s(t.title))])])},Pt=[],Lt=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(l["c"]);Lt=h["a"]([Object(l["a"])({name:"SmallMapCard",components:{},props:{title:String}})],Lt);var Ht=Lt,_t=Ht,Gt=(n("a6c9"),Object(v["a"])(_t,Mt,Pt,!1,null,"67ba1b84",null)),Dt=Gt.exports,Rt=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(l["c"]);Rt=h["a"]([Object(l["a"])({name:"Master",components:{InfoBar:jt,MapCard:Tt,SmallMapCard:Dt}})],Rt);var Qt=Rt,Ft=Qt,Yt=(n("3f65"),Object(v["a"])(Ft,pt,vt,!1,null,"c820fcce",null)),Bt=Yt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"})},zt=[],Zt=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(l["c"]);Zt=h["a"]([Object(l["a"])({name:"Player",components:{}})],Zt);var Kt=Zt,Wt=Kt,Jt=(n("9aad"),Object(v["a"])(Wt,Ut,zt,!1,null,"6641f362",null)),Vt=Jt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spectator"})},Xt=[],Nt=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(l["c"]);Nt=h["a"]([Object(l["a"])({name:"Spectator",components:{}})],Nt);var $t=Nt,te=$t,ee=(n("5c05"),Object(v["a"])(te,qt,Xt,!1,null,"600f29fe",null)),ne=ee.exports;s["a"].use(b["a"]);var se=new b["a"]({routes:[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:ft},{path:"/master",name:"master",component:Bt},{path:"/player",name:"player",component:Vt},{path:"/spectator",name:"spectator",component:ne}]}),ie=n("2f62");s["a"].use(ie["b"]);var ae=new ie["a"]({state:{assets:new T,selected:""},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:se,store:ae,render:function(t){return t(y)}}).$mount("#app")},d676:function(t,e,n){t.exports=n.p+"img/cobble.40ac5c6f.png"},d70e:function(t,e,n){"use strict";var s=n("80b0"),i=n.n(s);i.a},db18:function(t,e,n){},fae4:function(t,e,n){},fd03:function(t,e,n){"use strict";var s=n("db18"),i=n.n(s);i.a}});
//# sourceMappingURL=app.d3fc7407.js.map
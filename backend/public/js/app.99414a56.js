(function(e){function t(t){for(var i,a,o=t[0],r=t[1],c=t[2],h=0,l=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&l.push(s[a][0]),s[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);u&&u(t);while(l.length)l.shift()();return A.push.apply(A,c||[]),n()}function n(){for(var e,t=0;t<A.length;t++){for(var n=A[t],i=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(i=!1)}i&&(A.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},A=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=r;A.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},1963:function(e,t){e.exports="data:image/png;base64,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"},"1a74":function(e,t,n){},"20c3":function(e,t,n){},"2f7f":function(e,t,n){"use strict";var i=n("729d"),s=n.n(i);s.a},"355b":function(e,t,n){e.exports=n.p+"img/grass.7e028f55.png"},"53d1":function(e,t,n){"use strict";var i=n("1a74"),s=n.n(i);s.a},"5c05":function(e,t,n){"use strict";var i=n("20c3"),s=n.n(i);s.a},"729d":function(e,t,n){},"80b0":function(e,t,n){},"85ec":function(e,t,n){},"8bce":function(e,t,n){"use strict";var i=n("fae4"),s=n.n(i);s.a},9211:function(e,t,n){"use strict";var i=n("ad28"),s=n.n(i);s.a},"9aad":function(e,t,n){"use strict";var i=n("ae2e"),s=n.n(i);s.a},ad28:function(e,t,n){},ae2e:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=n("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o=n("d4ec"),r=n("99de"),c=n("7e84"),u=n("262e"),h=n("9ab4"),l=n("60a3"),d=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(l["c"]);d=h["a"]([Object(l["a"])({components:{}})],d);var f=d,v=f,p=(n("034f"),n("2877")),y=Object(p["a"])(v,A,a,!1,null,null,null),m=y.exports,b=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"master-selection",on:{click:function(t){return e.onSelection("/master")}}},[n("h1",[e._v("Game Master")])]),n("div",{staticClass:"player-selection",on:{click:function(t){return e.onSelection("/player")}}},[n("h1",[e._v("Player")])]),n("div",{staticClass:"spectator-selection",on:{click:function(t){return e.onSelection("/spectator")}}},[n("h1",[e._v("Spectator")])])])},k=[],E=n("bee2"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("MapCanvas"),n("MapPalette",{attrs:{onTop:!0}})],1)},j=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("canvas",{ref:"map-canvas"})])},x=[],I=(n("d81d"),n("4c53"),function(){function e(){Object(o["a"])(this,e),this.x=0,this.y=0,this.s=1}return Object(E["a"])(e,[{key:"move",value:function(e,t){this.x+=e/this.s,this.y+=t/this.s}},{key:"zoom",value:function(e){this.s+=e,this.s<.5?this.s=.5:this.s>10&&(this.s=10)}}]),e}()),C=I,S=(n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),function(){function e(){Object(o["a"])(this,e),this.images=new Map,this.unloadedCount=0,this.initImages()}return Object(E["a"])(e,[{key:"hasLoaded",value:function(){return 0===this.unloadedCount}},{key:"getImage",value:function(e){var t=this.images.get(e);if(t)return t;throw new Error("Image ".concat(e," has not been loaded."))}},{key:"loadImage",value:function(t,n){if(!this.images.has(t)){this.unloadedCount+=1;var i=new Image(e.TILE_SIZE,e.TILE_SIZE);i.onload=this.onImageLoaded.bind(this),i.src=n,this.images.set(t,i)}}},{key:"initImages",value:function(){this.loadImage(e.ROCK_IMAGE,n("1963")),this.loadImage(e.COBBLE_IMAGE,n("d676")),this.loadImage(e.GRASS_IMAGE,n("355b"))}},{key:"onImageLoaded",value:function(){this.unloadedCount-=1}}]),e}());S.TILE_SIZE=64,S.ROCK_IMAGE="rock",S.COBBLE_IMAGE="cobble",S.GRASS_IMAGE="grass";var T=S,P=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(o["a"])(this,e),this.x=t,this.y=n}return Object(E["a"])(e,[{key:"add",value:function(e,t){return this.x+=e,this.y+=t,this}},{key:"addV",value:function(e){return this.x+=e.x,this.y+=e.y,this}},{key:"sub",value:function(e,t){return this.x-=e,this.y-=t,this}},{key:"subV",value:function(e){return this.x-=e.x,this.y-=e.y,this}},{key:"multiply",value:function(e){return this.x*=e,this.y*=e,this}},{key:"divide",value:function(e){return this.x/=e,this.y/=e,this}},{key:"floorDivide",value:function(e){return this.x=Math.floor(this.x/e),this.y=Math.floor(this.y/e),this}}]),e}(),M=P,L=function(){function e(){Object(o["a"])(this,e),this.camera=new C}return Object(E["a"])(e,[{key:"begin",value:function(e){this.context=e,this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.context.strokeStyle="#e4f03d",this.context.lineWidth=3,this.context.beginPath()}},{key:"end",value:function(){this.context&&this.context.stroke(),this.context=void 0}},{key:"renderTile",value:function(e){this.context?this.context.drawImage(e.sprite,(e.x*T.TILE_SIZE+this.camera.x)*this.camera.s,(e.y*T.TILE_SIZE+this.camera.y)*this.camera.s,T.TILE_SIZE*this.camera.s,T.TILE_SIZE*this.camera.s):console.log("[ Screen ] Begin has not been called yet this frame.")}},{key:"renderTileOutline",value:function(e,t){var n=new M(0,0);return this.context?this.context.rect(e,t,T.TILE_SIZE*this.camera.s,T.TILE_SIZE*this.camera.s):console.log("[ Screen ] Begin has not been called yet this frame."),n}},{key:"screenToWorldSpace",value:function(e){return e.divide(this.camera.s).sub(this.camera.x,this.camera.y)}},{key:"worldToScreenSpace",value:function(e){return e.divide(this.camera.s).sub(this.camera.x,this.camera.y)}},{key:"screenToIndexSpace",value:function(e){return e.divide(this.camera.s).sub(this.camera.x,this.camera.y).floorDivide(T.TILE_SIZE)}},{key:"indexToScreenSpace",value:function(e){return e.multiply(T.TILE_SIZE).add(this.camera.x,this.camera.y).multiply(this.camera.s)}}]),e}(),H=L,G=function(){function e(){Object(o["a"])(this,e),this.upPressed=!1,this.downPressed=!1,this.leftPressed=!1,this.rightPressed=!1,this.panPressed=!1,this.clickDown=!1,this.mdx=0,this.mdy=0,this.mlx=0,this.mly=0,this.ds=0,this.mx=0,this.my=0}return Object(E["a"])(e,[{key:"getClick",value:function(){return this.clickDown}},{key:"update",value:function(e,t){var n=5,i=this.leftPressed?this.rightPressed?0:-n:this.rightPressed?n:0,s=this.upPressed?this.downPressed?0:-n:this.downPressed?n:0;i+=this.mdx,s+=this.mdy,this.mdx=0,this.mdy=0,t.move(-i,-s),t.zoom(this.ds),this.ds=0}},{key:"registerEvents",value:function(){document.addEventListener("keydown",this.onKeyDown.bind(this),{passive:!0}),document.addEventListener("keyup",this.onKeyUp.bind(this),{passive:!0}),document.addEventListener("mousedown",this.onMouseDown.bind(this),{passive:!0}),document.addEventListener("mousemove",this.onMouseMove.bind(this),{passive:!0}),document.addEventListener("mouseup",this.onMouseUp.bind(this),{passive:!0}),document.addEventListener("wheel",this.onScroll.bind(this),{passive:!0})}},{key:"unRegisterEvents",value:function(){document.removeEventListener("keydown",this.onKeyDown.bind(this)),document.removeEventListener("keyup",this.onKeyUp.bind(this))}},{key:"onKeyDown",value:function(e){65===e.keyCode||37===e.keyCode?this.leftPressed=!0:87===e.keyCode||38===e.keyCode?this.upPressed=!0:83===e.keyCode||40===e.keyCode?this.downPressed=!0:68!==e.keyCode&&39!==e.keyCode||(this.rightPressed=!0)}},{key:"onKeyUp",value:function(e){65===e.keyCode||37===e.keyCode?this.leftPressed=!1:87===e.keyCode||38===e.keyCode?this.upPressed=!1:83===e.keyCode||40===e.keyCode?this.downPressed=!1:68!==e.keyCode&&39!==e.keyCode||(this.rightPressed=!1)}},{key:"onMouseDown",value:function(e){(e.shiftKey||1===e.button)&&(this.panPressed=!0,this.mlx=e.screenX,this.mly=e.screenY),this.clickDown=!0}},{key:"onMouseMove",value:function(e){this.mx=e.clientX,this.my=e.clientY,this.panPressed&&(this.mdx+=this.mlx-e.screenX,this.mdy+=this.mly-e.screenY,this.mlx=e.screenX,this.mly=e.screenY)}},{key:"onMouseUp",value:function(e){this.panPressed=!1,this.clickDown=!1}},{key:"onScroll",value:function(e){this.ds-=e.deltaY/1e3}}]),e}(),D=G,Q=function(){function e(){Object(o["a"])(this,e)}return Object(E["a"])(e,null,[{key:"createTile",value:function(e,t,n,i){return{sprite:e.state.assets.getImage(t),x:n,y:i}}}]),e}(),R=function(){function e(t,n){Object(o["a"])(this,e),this.width=t,this.height=n,this.tiles=new Array(t*n)}return Object(E["a"])(e,[{key:"initTiles",value:function(e){for(var t=0;t<this.height;t++)for(var n=0;n<this.width;n++)this.tiles[this.width*t+n]=Q.createTile(e,"grass",n,t)}},{key:"getTile",value:function(e,t){if(!(e<0||e>=this.width||t<0||t>=this.height))return this.tiles[this.width*t+e]}},{key:"render",value:function(e){for(var t=0;t<this.height;t++)for(var n=0;n<this.width;n++)e.renderTile(this.getTile(n,t))}}]),e}(),F=function(){function e(t){Object(o["a"])(this,e),this.store=t,this.cursorLocation=new M}return Object(E["a"])(e,[{key:"update",value:function(e,t,n){if(this.cursorLocation.x=t.mx,this.cursorLocation.y=t.my,e.screenToIndexSpace(this.cursorLocation),t.getClick()){var i=n.getTile(this.cursorLocation.x,this.cursorLocation.y);i&&this.store.state.selected&&this.lastTileEdited!==i&&(i.sprite=this.store.state.assets.getImage(this.store.state.selected),this.lastTileEdited=i)}else this.lastTileEdited=void 0;e.indexToScreenSpace(this.cursorLocation)}},{key:"render",value:function(e){e.renderTileOutline(this.cursorLocation.x,this.cursorLocation.y)}}]),e}(),Y=function(){function e(t){Object(o["a"])(this,e),this.store=t,this.controller=new D,this.screen=new H,this.map=new R(16,16),this.map.initTiles(this.store),this.editor=new F(this.store),this.controller.registerEvents()}return Object(E["a"])(e,[{key:"update",value:function(e){this.controller.update(e,this.screen.camera),this.editor.update(this.screen,this.controller,this.map)}},{key:"render",value:function(e){this.store.state.assets.hasLoaded()&&(this.screen.begin(e),this.map.render(this.screen),this.editor.render(this.screen),this.screen.end())}},{key:"close",value:function(){}}]),e}(),B=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(E["a"])(t,[{key:"mounted",value:function(){var e=this.$refs["map-canvas"];this.context=e.getContext("2d"),this.context.canvas.width=this.context.canvas.clientWidth,this.context.canvas.height=this.context.canvas.clientHeight,window.addEventListener("resize",this.onResize.bind(this),{passive:!0}),this.map=new Y(this.$store),this.lastTime=Date.now(),this.requestId=requestAnimationFrame(this.tick.bind(this))}},{key:"tick",value:function(e){var t=e-this.lastTime;this.map.update(t),this.lastTime=e,this.map.render(this.context),this.requestId=requestAnimationFrame(this.tick.bind(this))}},{key:"onResize",value:function(e){this.context.canvas.width=this.context.canvas.clientWidth,this.context.canvas.height=this.context.canvas.clientHeight}}]),t}(l["c"]);B=h["a"]([Object(l["a"])({name:"MapCanvas",components:{}})],B);var U=B,z=U,Z=(n("53d1"),Object(p["a"])(z,w,x,!1,null,"49eda578",null)),K=Z.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"palette",class:{top:e.onTop,left:!e.onTop}},e._l(e.sprites,(function(t){return n("div",{key:t,staticClass:"tile"},[n("img",{attrs:{src:e.$store.state.assets.images.get(t).src,alt:t},on:{click:function(n){return e.onClick(n,t)}}})])})),0)},J=[],V=n("2909"),_=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.sprites=[],e}return Object(u["a"])(t,e),Object(E["a"])(t,[{key:"mounted",value:function(){var e=this.$store;this.sprites=Object(V["a"])(e.state.assets.images.keys())}},{key:"onClick",value:function(e,t){var n=this.$store;n.state.selected=t}}]),t}(l["c"]);h["a"]([Object(l["b"])({default:!0})],_.prototype,"onTop",void 0),_=h["a"]([Object(l["a"])({name:"MapPalette",components:{}})],_);var q=_,X=q,N=(n("d70e"),Object(p["a"])(X,W,J,!1,null,"fb98a20e",null)),$=N.exports,ee=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(l["c"]);ee=h["a"]([Object(l["a"])({name:"World",components:{MapCanvas:K,MapPalette:$}})],ee);var te=ee,ne=te,ie=(n("8bce"),Object(p["a"])(ne,O,j,!1,null,"1046b38e",null)),se=ie.exports,Ae=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(E["a"])(t,[{key:"onSelection",value:function(e){this.$router.push(e)}}]),t}(l["c"]);Ae=h["a"]([Object(l["a"])({name:"Home",components:{World:se}})],Ae);var ae=Ae,oe=ae,re=(n("fd03"),Object(p["a"])(oe,g,k,!1,null,"2b7717a4",null)),ce=re.exports,ue=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},he=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],le={},de=Object(p["a"])(le,ue,he,!1,null,null,null),fe=de.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"master"},[n("InfoBar"),n("div",{staticClass:"body"})],1)},pe=[],ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-bar"})},me=[],be=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(l["c"]);be=h["a"]([Object(l["a"])({name:"InfoBar",components:{}})],be);var ge=be,ke=ge,Ee=(n("2f7f"),Object(p["a"])(ke,ye,me,!1,null,"0cde93ea",null)),Oe=Ee.exports,je=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(l["c"]);je=h["a"]([Object(l["a"])({name:"Master",components:{InfoBar:Oe}})],je);var we=je,xe=we,Ie=(n("9211"),Object(p["a"])(xe,ve,pe,!1,null,"7647b756",null)),Ce=Ie.exports,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player"})},Te=[],Pe=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(l["c"]);Pe=h["a"]([Object(l["a"])({name:"Player",components:{}})],Pe);var Me=Pe,Le=Me,He=(n("9aad"),Object(p["a"])(Le,Se,Te,!1,null,"6641f362",null)),Ge=He.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spectator"})},Qe=[],Re=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(l["c"]);Re=h["a"]([Object(l["a"])({name:"Spectator",components:{}})],Re);var Fe=Re,Ye=Fe,Be=(n("5c05"),Object(p["a"])(Ye,De,Qe,!1,null,"600f29fe",null)),Ue=Be.exports;i["a"].use(b["a"]);var ze=new b["a"]({routes:[{path:"/",name:"home",component:ce},{path:"/about",name:"about",component:fe},{path:"/master",name:"master",component:Ce},{path:"/player",name:"player",component:Ge},{path:"/spectator",name:"spectator",component:Ue}]}),Ze=n("2f62");i["a"].use(Ze["b"]);var Ke=new Ze["a"]({state:{assets:new T,selected:""},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:ze,store:Ke,render:function(e){return e(m)}}).$mount("#app")},d676:function(e,t,n){e.exports=n.p+"img/cobble.40ac5c6f.png"},d70e:function(e,t,n){"use strict";var i=n("80b0"),s=n.n(i);s.a},db18:function(e,t,n){},fae4:function(e,t,n){},fd03:function(e,t,n){"use strict";var i=n("db18"),s=n.n(i);s.a}});
//# sourceMappingURL=app.99414a56.js.map
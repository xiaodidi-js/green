webpackJsonp([29],{68:function(t,e,n){var i,o;n(69),i=n(70),o=n(95),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},69:function(t,e){},70:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),r=i(o),s=n(71),a=i(s),u=n(94);e.default={ready:function(){this.list&&0===this.list.length||this.render(),this.xheight=this.getHeight()},methods:{clickListItem:function(t){(0,u.go)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse((0,r.default)(t)))},buildBackgroundUrl:function(t){return"url("+t+")"},render:function(){var t=this;this.swiper=new a.default({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,n){t.current=n,t.index=n})},rerender:function(){var t=this;this.$el&&this.$nextTick(function(){t.index=0,t.current=0,t.length=t.list.length||t.$children.length,t.destroy(),t.render()})},destroy:function(){this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:{type:Boolean,default:!1},loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},index:{type:Number,default:0}},data:function(){return{current:this.index,xheight:"auto",length:this.list.length}},watch:{list:function(t){this.rerender()},current:function(t){this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper.go(t)})}},beforeDestroy:function(){this.destroy()}}},71:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(72),r=i(o),s=n(87),a=i(s),u=n(88),c=i(u),f=n(91),l=i(f),h=n(93),d=i(h),p=function(){function t(e){if((0,a.default)(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=(0,d.default)(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return(0,c.default)(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.count>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth();var e=t._getZeroIndexByPosition();t._initOffset(e),t._setTransfrom()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._initOffset(),this._setTransfrom(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.count;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){var e=this;if(t>0){var n=e._position.splice(0,1);e._position.push(n[0])}else if(t<0){var i=e._position.pop();e._position.unshift(i)}}},{key:"_initOffset",value:function(t){t=t||0;for(var e=0;e<this.count;e++)this._offset[e]=(e-t)*this._distance}},{key:"_moveOffset",value:function(t){t=t||0;for(var e=0;e<this.count;e++)this._offset[e]=this._offset[e]+t*this._distance}},{key:"_setTransition",value:function(t){t=t||this._options.duration||"none";var e="none"===t?"none":t+"ms";(0,l.default)(this.$items).forEach(function(t,n){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransfrom",value:function(t){var e=this;t=t||0,(0,l.default)(e.$items).forEach(function(n,i){var o=e._offset[i]+t,r="translate3d("+o+"px, 0, 0)";"vertical"===e._options.direction&&(r="translate3d(0, "+o+"px, 0)"),n.style.webkitTransform=r,n.style.transform=r})}},{key:"_bind",value:function(){var t=this;t.touchstartHandler=function(e){t.stop(),t._start.x=e.changedTouches[0].pageX,t._start.y=e.changedTouches[0].pageY,t._setTransition("none")},t.touchmoveHandler=function(e){t._move.x=e.changedTouches[0].pageX,t._move.y=e.changedTouches[0].pageY;var n=t._move.x-t._start.x,i=t._move.y-t._start.y,o=i,r=Math.abs(n)>Math.abs(i);"horizontal"===t._options.direction&&r&&(o=n),(t._options.minMovingDistance&&Math.abs(o)>=t._options.minMovingDistance||!t._options.minMovingDistance)&&r&&t._setTransfrom(o),r&&e.preventDefault()},t.touchendHandler=function(e){t._end.x=e.changedTouches[0].pageX,t._end.y=e.changedTouches[0].pageY;var n=t._end.y-t._start.y;"horizontal"===t._options.direction&&(n=t._end.x-t._start.x),n=t.getDistance(n),0!==n&&t._options.minMovingDistance&&Math.abs(n)<t._options.minMovingDistance||(n>t._options.threshold?t.move(-1):n<-t._options.threshold?t.move(1):t.move(0),t._loopRender())},t.transitionEndHandler=function(e){t._activate(t._current);var n=t._eventHandlers.swiped;n&&n.apply(t,[t._prev,t._current]),t._auto(),t._loopRender(),e.preventDefault()},t.$container.addEventListener("touchstart",t.touchstartHandler,!1),t.$container.addEventListener("touchmove",t.touchmoveHandler,!1),t.$container.addEventListener("touchend",t.touchendHandler,!1),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;if(t._loop())if(0===t._offset[t._offset.length-1]){var e=t.$items[0].cloneNode(!0);t.$container.appendChild(e),t.$container.removeChild(t.$items[0]),t._loopEvent(1)}else if(0===t._offset[0]){var n=t.$items[t.$items.length-1].cloneNode(!0);t.$container.insertBefore(n,t.$container.firstChild),t.$container.removeChild(t.$items[t.$items.length-1]),t._loopEvent(-1)}}},{key:"_loopEvent",value:function(t){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._moveOffset(t),e._setTransfrom()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.count-1?0:t}},{key:"_moveIndex",value:function(t){this._prev=this._current,this._current+=t,this._current%=this.count,this._current=this._current<0?this.count+this._current:this._current}},{key:"_activate",value:function(t){var e=this,n=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(i,o){i.classList.remove(n),t===e._position[o]&&i.classList.add(n)})}},{key:"_getZeroIndexByPosition",value:function(){for(var t=0;t<this._position.length;t++){if(0===this._position[t])return t;if(t===this._position.length-1)return-1}}},{key:"_goOffset",value:function(t){t=t||0,t%=this.count;for(var e=this,n=e._getZeroIndexByPosition(),i=0;i<e._offset.length;i++)if(0===e._offset[i])return n-i}},{key:"go",value:function(t){var e=this;if(e.stop(),e._loop()){var n=e._goOffset(t);e._moveOffset(-n),e._moveIndex(n),e._setTransition(),e._setTransfrom()}else{if(t<0||t>e.count-1||t===e._current)return;e._prev=e._current,e._current=t;for(var i=-(t-e._prev)*e._distance,o=0;o<e._offset.length;o++)e._offset[o]=e._offset[o]+i;e._setTransition(),e._setTransfrom()}return e._auto(),this}},{key:"next",value:function(){var t=this;if(t._loop())t.move(1);else{var e=t._current;e=e===t.count-1?0:e+1,t.go(e)}return this}},{key:"move",value:function(t,e){var n=this;return n._moveOffset(-t),n._movePosition(-t),n._moveIndex(t),n._setTransition(e?"none":void 0),n._setTransfrom(),this}},{key:"on",value:function(t,e){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=e,this}},{key:"_itemDestoy",value:function(){var t=!0,e=!1,n=void 0;try{for(var i,o=(0,r.default)(this.$items);!(t=(i=o.next()).done);t=!0){var s=i.value;s.removeEventListener("webkitTransitionEnd",this.transitionEndHandler,!1)}}catch(t){e=!0,n=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw n}}}},{key:"destroy",value:function(){this.stop(),this._current=0,this._setTransfrom(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy()}}]),t}();e.default=p},72:function(t,e,n){t.exports={default:n(73),__esModule:!0}},73:function(t,e,n){n(74),n(81),t.exports=n(84)},74:function(t,e,n){n(75);var i=n(78);i.NodeList=i.HTMLCollection=i.Array},75:function(t,e,n){"use strict";var i=n(76),o=n(77),r=n(78),s=n(33);t.exports=n(79)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),r.Arguments=r.Array,i("keys"),i("values"),i("entries")},76:function(t,e){t.exports=function(){}},77:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},78:function(t,e){t.exports={}},79:function(t,e,n){"use strict";var i=n(42),o=n(22),r=n(25),s=n(26),a=n(19),u=n(78),c=n(80),f=n(29),l=n(17).getProto,h=n(30)("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",_="values",m=function(){return this};t.exports=function(t,e,n,g,y,b,x){c(n,e,g);var w,k,j=function(t){if(!d&&t in O)return O[t];switch(t){case v:return function(){return new n(this,t)};case _:return function(){return new n(this,t)}}return function(){return new n(this,t)}},$=e+" Iterator",M=y==_,T=!1,O=t.prototype,E=O[h]||O[p]||y&&O[y],D=E||j(y);if(E){var H=l(D.call(new t));f(H,$,!0),!i&&a(O,p)&&s(H,h,m),M&&E.name!==_&&(T=!0,D=function(){return E.call(this)})}if(i&&!x||!d&&!T&&O[h]||s(O,h,D),u[e]=D,u[$]=m,y)if(w={values:M?D:j(_),keys:b?D:j(v),entries:M?j("entries"):D},x)for(k in w)k in O||r(O,k,w[k]);else o(o.P+o.F*(d||T),e,w);return w}},80:function(t,e,n){"use strict";var i=n(17),o=n(27),r=n(29),s={};n(26)(s,n(30)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i.create(s,{next:o(1,n)}),r(t,e+" Iterator")}},81:function(t,e,n){"use strict";var i=n(82)(!0);n(79)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},82:function(t,e,n){var i=n(83),o=n(36);t.exports=function(t){return function(e,n){var r,s,a=String(o(e)),u=i(n),c=a.length;return u<0||u>=c?t?"":void 0:(r=a.charCodeAt(u),r<55296||r>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):r:t?a.slice(u,u+2):(r-55296<<10)+(s-56320)+65536)}}},83:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},84:function(t,e,n){var i=n(40),o=n(85);t.exports=n(12).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},85:function(t,e,n){var i=n(86),o=n(30)("iterator"),r=n(78);t.exports=n(12).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||r[i(t)]}},86:function(t,e,n){var i=n(35),o=n(30)("toStringTag"),r="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=(e=Object(t))[o])?n:r?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},87:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},88:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(89),r=i(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},89:function(t,e,n){t.exports={default:n(90),__esModule:!0}},90:function(t,e,n){var i=n(17);t.exports=function(t,e,n){return i.setDesc(t,e,n)}},91:function(t,e,n){t.exports="function"==typeof Array.from?Array.from:n(92)},92:function(t,e){t.exports=function(){var t=function(t){return"function"==typeof t},e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e},n=Math.pow(2,53)-1,i=function(t){var i=e(t);return Math.min(Math.max(i,0),n)},o=function(t){if(null!=t){if(["string","number","boolean","symbol"].indexOf(typeof t)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in t)return Symbol.iterator;if("@@iterator"in t)return"@@iterator"}},r=function(e,n){if(null!=e&&null!=n){var i=e[n];if(null==i)return;if(!t(i))throw new TypeError(i+" is not a function");return i}},s=function(t){var e=t.next(),n=Boolean(e.done);return!n&&e};return function(e){"use strict";var n,a=this,u=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof u){if(!t(u))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(n=arguments[2])}var c,f,l=r(e,o(e));if(void 0!==l){c=t(a)?Object(new a):[];var h=l.call(e);if(null==h)throw new TypeError("Array.from requires an array-like or iterable object");f=0;for(var d,p;;){if(d=s(h),!d)return c.length=f,c;p=d.value,u?c[f]=u.call(n,p,f):c[f]=p,f++}}else{var v=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var _=i(v.length);c=t(a)?Object(new a(_)):new Array(_),f=0;for(var m;f<_;)m=v[f],u?c[f]=u.call(n,m,f):c[f]=m,f++;c.length=_}return c}}()},93:function(t,e){/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function i(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==i.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=i()?Object.assign:function(t,e){for(var i,a,u=n(t),c=1;c<arguments.length;c++){i=Object(arguments[c]);for(var f in i)r.call(i,f)&&(u[f]=i[f]);if(o){a=o(i);for(var l=0;l<a.length;l++)s.call(i,a[l])&&(u[a[l]]=i[a[l]])}}return u}},94:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!/^javas/.test(t)&&t){var n="object"===("undefined"==typeof t?"undefined":(0,a.default)(t))||e&&"string"==typeof t&&!/http/.test(t);n?e.go(t):window.location.href=t}}function r(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,a.default)(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var s=n(13),a=i(s);e.go=o,e.getUrl=r},95:function(t,e){t.exports=' <div class=vux-slider> <div class=vux-swiper :style="{height: xheight}"> <slot></slot> <div class=vux-swiper-item v-for="item in list" @click=clickListItem(item)> <a href=javascript:> <div class=vux-img :style="{backgroundImage: buildBackgroundUrl(item.img)}"></div> <p class=vux-swiper-desc v-if=showDescMask>{{item.title}}</p> </a> </div> </div> <div :class="[dotsClass, \'vux-indicator\', \'vux-indicator-\' + dotsPosition]" v-show=showDots> <a href=javascript: v-for="key in length"> <i class=vux-icon-dot :class="{\'active\': key === current}"></i> </a> </div> </div> '},327:function(t,e,n){var i,o;i=n(328),o=n(329),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},328:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={ready:function(){this.$parent.rerender()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}}},329:function(t,e){t.exports=" <div class=vux-swiper-item><slot></slot></div> "},564:function(t,e,n){var i,o;n(565),i=n(566),o=n(567),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},565:function(t,e){},566:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(68),r=i(o),s=n(327),a=i(s);e.default={components:{Swiper:r.default,SwiperItem:a.default},data:function(){return{gallery:[{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/19/08/51/08/upload_5c9462e857fe02a61f646f4780982d2f.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/19/08/51/09/upload_9410a7ed11a3bb4df232940e4a70d909.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/19/09/50/54/upload_0ecb4b46d3b998be77536bc012ade862.jpg"}],rdata:[{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/55/upload_5c9462e857fe02a61f646f4780982d2f.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/55/upload_9410a7ed11a3bb4df232940e4a70d909.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/56/upload_5c9462e857fe02a61f646f4780982d2f.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/56/upload_9410a7ed11a3bb4df232940e4a70d909.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/56/upload_5c9462e857fe02a61f646f4780982d2f.jpg"}]}},methods:{replaceData:function(){this.gallery=this.rdata}}}},567:function(t,e){t.exports=' <swiper :list=gallery loop="" auto="" dots-position=center :show-desc-mask=false :aspect-ratio=480/480 dots-class=dots-my-orange @touchstart.stop="" @touchend.stop="" _v-37981ba6=""></swiper> <button @click=replaceData _v-37981ba6="">replace</button> '}});
webpackJsonp([29],{68:function(t,e,i){var n,o;i(69),n=i(70),o=i(95),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},69:function(t,e){},70:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(42),r=n(o),s=i(71),a=n(s),u=i(94);e.default={ready:function(){this.list&&0===this.list.length||this.render(),this.xheight=this.getHeight()},methods:{clickListItem:function(t){(0,u.go)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse((0,r.default)(t)))},buildBackgroundUrl:function(t){return"url("+t+")"},render:function(){var t=this;this.swiper=new a.default({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i,t.index=i})},rerender:function(){var t=this;this.$el&&this.$nextTick(function(){t.index=0,t.current=0,t.length=t.list.length||t.$children.length,t.destroy(),t.render()})},destroy:function(){this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:{type:Boolean,default:!1},loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},index:{type:Number,default:0}},data:function(){return{current:this.index,xheight:"auto",length:this.list.length}},watch:{list:function(t){this.rerender()},current:function(t){this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper.go(t)})}},beforeDestroy:function(){this.destroy()}}},71:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(72),r=n(o),s=i(87),a=n(s),u=i(88),c=n(u),l=i(91),h=n(l),f=i(93),d=n(f),p=function(){function t(e){if((0,a.default)(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=(0,d.default)(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return(0,c.default)(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.count>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth();var e=t._getZeroIndexByPosition();t._initOffset(e),t._setTransfrom()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._initOffset(),this._setTransfrom(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.count;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){var e=this;if(t>0){var i=e._position.splice(0,1);e._position.push(i[0])}else if(t<0){var n=e._position.pop();e._position.unshift(n)}}},{key:"_initOffset",value:function(t){t=t||0;for(var e=0;e<this.count;e++)this._offset[e]=(e-t)*this._distance}},{key:"_moveOffset",value:function(t){t=t||0;for(var e=0;e<this.count;e++)this._offset[e]=this._offset[e]+t*this._distance}},{key:"_setTransition",value:function(t){t=t||this._options.duration||"none";var e="none"===t?"none":t+"ms";(0,h.default)(this.$items).forEach(function(t,i){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransfrom",value:function(t){var e=this;t=t||0,(0,h.default)(e.$items).forEach(function(i,n){var o=e._offset[n]+t,r="translate3d("+o+"px, 0, 0)";"vertical"===e._options.direction&&(r="translate3d(0, "+o+"px, 0)"),i.style.webkitTransform=r,i.style.transform=r})}},{key:"_bind",value:function(){var t=this;t.touchstartHandler=function(e){t.stop(),t._start.x=e.changedTouches[0].pageX,t._start.y=e.changedTouches[0].pageY,t._setTransition("none")},t.touchmoveHandler=function(e){t._move.x=e.changedTouches[0].pageX,t._move.y=e.changedTouches[0].pageY;var i=t._move.x-t._start.x,n=t._move.y-t._start.y,o=n,r=Math.abs(i)>Math.abs(n);"horizontal"===t._options.direction&&r&&(o=i),(t._options.minMovingDistance&&Math.abs(o)>=t._options.minMovingDistance||!t._options.minMovingDistance)&&r&&t._setTransfrom(o),r&&e.preventDefault()},t.touchendHandler=function(e){t._end.x=e.changedTouches[0].pageX,t._end.y=e.changedTouches[0].pageY;var i=t._end.y-t._start.y;"horizontal"===t._options.direction&&(i=t._end.x-t._start.x),i=t.getDistance(i),0!==i&&t._options.minMovingDistance&&Math.abs(i)<t._options.minMovingDistance||(i>t._options.threshold?t.move(-1):i<-t._options.threshold?t.move(1):t.move(0),t._loopRender())},t.transitionEndHandler=function(e){t._activate(t._current);var i=t._eventHandlers.swiped;i&&i.apply(t,[t._prev,t._current]),t._auto(),t._loopRender(),e.preventDefault()},t.$container.addEventListener("touchstart",t.touchstartHandler,!1),t.$container.addEventListener("touchmove",t.touchmoveHandler,!1),t.$container.addEventListener("touchend",t.touchendHandler,!1),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;if(t._loop())if(0===t._offset[t._offset.length-1]){var e=t.$items[0].cloneNode(!0);t.$container.appendChild(e),t.$container.removeChild(t.$items[0]),t._loopEvent(1)}else if(0===t._offset[0]){var i=t.$items[t.$items.length-1].cloneNode(!0);t.$container.insertBefore(i,t.$container.firstChild),t.$container.removeChild(t.$items[t.$items.length-1]),t._loopEvent(-1)}}},{key:"_loopEvent",value:function(t){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._moveOffset(t),e._setTransfrom()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.count-1?0:t}},{key:"_moveIndex",value:function(t){this._prev=this._current,this._current+=t,this._current%=this.count,this._current=this._current<0?this.count+this._current:this._current}},{key:"_activate",value:function(t){var e=this,i=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(n,o){n.classList.remove(i),t===e._position[o]&&n.classList.add(i)})}},{key:"_getZeroIndexByPosition",value:function(){for(var t=0;t<this._position.length;t++){if(0===this._position[t])return t;if(t===this._position.length-1)return-1}}},{key:"_goOffset",value:function(t){t=t||0,t%=this.count;for(var e=this,i=e._getZeroIndexByPosition(),n=0;n<e._offset.length;n++)if(0===e._offset[n])return i-n}},{key:"go",value:function(t){var e=this;if(e.stop(),e._loop()){var i=e._goOffset(t);e._moveOffset(-i),e._moveIndex(i),e._setTransition(),e._setTransfrom()}else{if(t<0||t>e.count-1||t===e._current)return;e._prev=e._current,e._current=t;for(var n=-(t-e._prev)*e._distance,o=0;o<e._offset.length;o++)e._offset[o]=e._offset[o]+n;e._setTransition(),e._setTransfrom()}return e._auto(),this}},{key:"next",value:function(){var t=this;if(t._loop())t.move(1);else{var e=t._current;e=e===t.count-1?0:e+1,t.go(e)}return this}},{key:"move",value:function(t,e){var i=this;return i._moveOffset(-t),i._movePosition(-t),i._moveIndex(t),i._setTransition(e?"none":void 0),i._setTransfrom(),this}},{key:"on",value:function(t,e){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=e,this}},{key:"_itemDestoy",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,o=(0,r.default)(this.$items);!(t=(n=o.next()).done);t=!0){var s=n.value;s.removeEventListener("webkitTransitionEnd",this.transitionEndHandler,!1)}}catch(t){e=!0,i=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw i}}}},{key:"destroy",value:function(){this.stop(),this._current=0,this._setTransfrom(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy()}}]),t}();e.default=p},72:function(t,e,i){t.exports={default:i(73),__esModule:!0}},73:function(t,e,i){i(74),i(81),t.exports=i(84)},84:function(t,e,i){var n=i(38),o=i(85);t.exports=i(20).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},87:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},88:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=i(89),r=n(o);e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r.default)(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()},89:function(t,e,i){t.exports={default:i(90),__esModule:!0}},90:function(t,e,i){var n=i(14);t.exports=function(t,e,i){return n.setDesc(t,e,i)}},91:function(t,e,i){t.exports="function"==typeof Array.from?Array.from:i(92)},92:function(t,e){t.exports=function(){var t=function(t){return"function"==typeof t},e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e},i=Math.pow(2,53)-1,n=function(t){var n=e(t);return Math.min(Math.max(n,0),i)},o=function(t){if(null!=t){if(["string","number","boolean","symbol"].indexOf(typeof t)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in t)return Symbol.iterator;if("@@iterator"in t)return"@@iterator"}},r=function(e,i){if(null!=e&&null!=i){var n=e[i];if(null==n)return;if(!t(n))throw new TypeError(n+" is not a function");return n}},s=function(t){var e=t.next(),i=Boolean(e.done);return!i&&e};return function(e){"use strict";var i,a=this,u=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof u){if(!t(u))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}var c,l,h=r(e,o(e));if(void 0!==h){c=t(a)?Object(new a):[];var f=h.call(e);if(null==f)throw new TypeError("Array.from requires an array-like or iterable object");l=0;for(var d,p;;){if(d=s(f),!d)return c.length=l,c;p=d.value,u?c[l]=u.call(i,p,l):c[l]=p,l++}}else{var v=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var _=n(v.length);c=t(a)?Object(new a(_)):new Array(_),l=0;for(var m;l<_;)m=v[l],u?c[l]=u.call(i,m,l):c[l]=m,l++;c.length=_}return c}}()},93:function(t,e){/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
"use strict";function i(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function n(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;var n=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=n()?Object.assign:function(t,e){for(var n,a,u=i(t),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)r.call(n,l)&&(u[l]=n[l]);if(o){a=o(n);for(var h=0;h<a.length;h++)s.call(n,a[h])&&(u[a[h]]=n[a[h]])}}return u}},94:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!/^javas/.test(t)&&t){var i="object"===("undefined"==typeof t?"undefined":(0,a.default)(t))||e&&"string"==typeof t&&!/http/.test(t);i?e.go(t):window.location.href=t}}function r(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,a.default)(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var s=i(10),a=n(s);e.go=o,e.getUrl=r},95:function(t,e){t.exports=' <div class=vux-slider> <div class=vux-swiper :style="{height: xheight}"> <slot></slot> <div class=vux-swiper-item v-for="item in list" @click=clickListItem(item)> <a href=javascript:> <div class=vux-img :style="{backgroundImage: buildBackgroundUrl(item.img)}"></div> <p class=vux-swiper-desc v-if=showDescMask>{{item.title}}</p> </a> </div> </div> <div :class="[dotsClass, \'vux-indicator\', \'vux-indicator-\' + dotsPosition]" v-show=showDots> <a href=javascript: v-for="key in length"> <i class=vux-icon-dot :class="{\'active\': key === current}"></i> </a> </div> </div> '},370:function(t,e,i){var n,o;n=i(371),o=i(372),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},371:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={ready:function(){this.$parent.rerender()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}}},372:function(t,e){t.exports=" <div class=vux-swiper-item><slot></slot></div> "},611:function(t,e,i){var n,o;i(612),n=i(613),o=i(614),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},612:function(t,e){},613:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(68),r=n(o),s=i(370),a=n(s);e.default={components:{Swiper:r.default,SwiperItem:a.default},data:function(){return{gallery:[{url:"http://www.baidu.com",img:"http://qgshop.b0.upaiyun.com/2016/11/19/08/51/08/upload_5c9462e857fe02a61f646f4780982d2f.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/19/08/51/09/upload_9410a7ed11a3bb4df232940e4a70d909.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/19/09/50/54/upload_0ecb4b46d3b998be77536bc012ade862.jpg"}],rdata:[{url:"http://www.baidu.com",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/55/upload_5c9462e857fe02a61f646f4780982d2f.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/55/upload_9410a7ed11a3bb4df232940e4a70d909.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/56/upload_5c9462e857fe02a61f646f4780982d2f.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/56/upload_9410a7ed11a3bb4df232940e4a70d909.jpg"},{url:"javascript:",img:"http://qgshop.b0.upaiyun.com/2016/11/16/03/24/56/upload_5c9462e857fe02a61f646f4780982d2f.jpg"}]}},methods:{replaceData:function(){this.gallery=this.rdata}}}},614:function(t,e){t.exports=' <swiper :list=gallery loop="" auto="" dots-position=center :show-desc-mask=false :aspect-ratio=480/480 dots-class=dots-my-orange @touchstart.stop="" @touchend.stop="" _v-37981ba6=""></swiper> <button @click=replaceData _v-37981ba6="">replace</button> '}});
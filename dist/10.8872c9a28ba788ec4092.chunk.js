webpackJsonp([10],{122:function(t,e,o){var s,i;o(123),s=o(124),i=o(125),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},123:function(t,e){},124:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},125:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},190:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setCartStorage=function(t,e){var o=t.dispatch;o("SETCARTOBJ",e)},e.setCartAgain=function(t,e){var o=t.dispatch;o("SETCARTOBJS",e)},e.increNums=function(t,e,o){var s=t.dispatch;s("INCRECARTNUMS",e,o)},e.reduceNums=function(t,e,o){var s=t.dispatch;s("REDUCECARTNUMS",e,o)},e.delSingle=function(t,e,o){var s=t.dispatch;s("DELCARTOBJ",e,o)},e.delMultiple=function(t,e){var o=t.dispatch;o("DELCARTOBJS",e)},e.clearAll=function(t){var e=t.dispatch;e("CLEARCART")},e.setSelCartStorage=function(t,e){var o=t.dispatch;o("SETSELCART",e)},e.clearSel=function(t){var e=t.dispatch;e("CLEARSELCART")}},199:function(t,e,o){var s,i;o(200),s=o(201),i=o(206),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},200:function(t,e){},201:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(202),a=s(i);e.default={components:{Dialog:a.default},props:{show:{type:Boolean,default:!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,default:"confirm"},cancelText:{type:String,default:"cancel"},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}}}},202:function(t,e,o){var s,i;o(203),s=o(204),i=o(205),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},203:function(t,e){},204:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},205:function(t,e){t.exports=' <div class=weui_dialog_alert @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)" v-show=show :transition=maskTransition></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div> '},206:function(t,e){t.exports=' <dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog> '},231:function(t,e,o){var s,i;o(232),s=o(233),i=o(243),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},232:function(t,e){},233:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(234),a=s(i),n=o(122),c=s(n);e.default={components:{CardCoupon:a.default,Toast:c.default},data:function(){return{toastMessage:"",toastShow:!1,data:[]}},route:{},ready:function(){},events:{showMes:function(t){"string"==typeof t&&t.length>0&&(this.toastMessage=t,this.toastShow=!0)}}}},234:function(t,e,o){var s,i;o(235),o(236),s=o(237),i=o(242),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},235:function(t,e){},236:function(t,e){},237:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(199),a=s(i),n=o(57),c=s(n),d=o(238),l=s(d),r=o(190);e.default={vuex:{actions:{clearAll:r.clearAll}},components:{Confirm:a.default,Separator:c.default,CouponList:l.default},data:function(){return{confirmShow:!1,choseArr:[],data:[]}},methods:{showConfirm:function(){this.confirmShow=!0},confirmPassword:function(){}},ready:function(){var t=this,e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");e=JSON.parse(e),this.$http.get(localStorage.apiDomain+"public/index/user/couponinfo/uid/"+e.id+"/token/"+e.token).then(function(e){1===e.data.status?t.data=e.data.coupon:e.data.status===-1?!function(){t.$dispatch("showMes",e.data.info);var o=t;setTimeout(function(){o.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),o.$router.go({name:"login"})},800)}():t.$dispatch("showMes",e.data.info)},function(e){t.$dispatch("showMes","网络开小差了~")})}}},238:function(t,e,o){var s,i;o(239),s=o(240),i=o(241),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},239:function(t,e){},240:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{obj:{type:Object,required:!0},showing:{type:Array,twoWay:!0,required:!0}},data:function(){return{}},methods:{changeShow:function(){var t=this.showing.indexOf(this.obj.id);t<0?this.showing.push(this.obj.id):this.showing.splice(t,1)}},computed:{className:function(){return this.showing.indexOf(this.obj.id)>=0},disOff:function(){var t=0;return 2!=this.obj.type&&4!=this.obj.type||(t=10*this.obj.discount.toFixed(2),t%10===0&&(t/=10)),t}}}},241:function(t,e){t.exports=' <div class=card-box _v-3e33fbdc=""> <div class=top _v-3e33fbdc=""> <div class=divider v-if=obj.shotcut _v-3e33fbdc=""> <div class=shotcut v-lazy:background-image=obj.shotcut _v-3e33fbdc=""></div> </div> <div class=divider v-else="" _v-3e33fbdc=""> <div class=shotcut _v-3e33fbdc=""></div> </div> <div class=divider v-if="obj.type==1||obj.type==3" _v-3e33fbdc=""> <label class=number _v-3e33fbdc="">{{ obj.minus_money }}</label> <label class=unit _v-3e33fbdc="">元</label> </div> <div class=divider v-else="" _v-3e33fbdc=""> <label class=number _v-3e33fbdc="">{{ disOff }}</label> <label class=unit _v-3e33fbdc="">折</label> </div> <div class="divider nowrap" _v-3e33fbdc=""> <label class=mes v-if="obj.type==3||obj.type==4" _v-3e33fbdc="">满{{ obj.collect_money }}元使用</label> <label class=mes v-else="" _v-3e33fbdc="">无门槛</label> <label class=mes _v-3e33fbdc="">还有<span _v-3e33fbdc="">{{ obj.remain }}</span>天过期</label> </div> </div> <div class=wave _v-3e33fbdc=""></div> <div class=btm _v-3e33fbdc=""> <div class="con detail" _v-3e33fbdc=""> <a @click=changeShow() _v-3e33fbdc=""> 详细信息<div class=arrow :class="{\'show\':className}" _v-3e33fbdc=""></div> </a> </div> <div class="con deadline" _v-3e33fbdc="">{{ obj.etime }}前使用</div> <div class=addition v-show=className _v-3e33fbdc=""> <div class=line _v-3e33fbdc=""> <div class=title _v-3e33fbdc="">优惠类型：</div> <div class=content v-if="obj.type===1" _v-3e33fbdc="">无门槛现金券</div> <div class=content v-if="obj.type===2" _v-3e33fbdc="">无门槛折扣券</div> <div class=content v-if="obj.type===3" _v-3e33fbdc="">买满即减</div> <div class=content v-if="obj.type===4" _v-3e33fbdc="">买满即折</div> </div> <div class=line _v-3e33fbdc=""> <div class=title _v-3e33fbdc="">使用期限：</div> <div class=content _v-3e33fbdc="">{{ obj.stime }} 至 {{ obj.etime }}</div> </div> <div class=line v-if=obj.description _v-3e33fbdc=""> <div class=title _v-3e33fbdc="">备注信息：</div> <div class=content _v-3e33fbdc="">{{ obj.description }}</div> </div> </div> </div> </div> '},242:function(t,e){t.exports=' <div class=notify-box _v-6f05d2a0=""> <div class=tips _v-6f05d2a0="">当前有 {{ data.length }} 张可用优惠劵</div> <div class=btn _v-6f05d2a0=""> </div> </div> <separator :set-height=40 unit=px _v-6f05d2a0=""></separator> <div class=wrapper _v-6f05d2a0=""> <coupon-list v-for="item in data" :obj=item :showing.sync=choseArr _v-6f05d2a0=""></coupon-list> </div> <confirm :show.sync=confirmShow title=口令兑换 confirm-text=确定 cancel-text=取消 @on-confirm=confirmPassword _v-6f05d2a0=""> <input type=text class=pass-code value="" placeholder=输入兑换码 _v-6f05d2a0=""> </confirm> '},243:function(t,e){t.exports=' <div class=sub-content _v-dedaf6fc=""> <card-coupon _v-dedaf6fc=""></card-coupon> </div> <toast type=text :show.sync=toastShow _v-dedaf6fc="">{{ toastMessage }}</toast> '}});
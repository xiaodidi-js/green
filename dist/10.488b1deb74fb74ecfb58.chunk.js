webpackJsonp([10,39],{122:function(t,e,s){var o,i;s(123),o=s(124),i=s(125),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},123:function(t,e){},124:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},125:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},201:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setCartStorage=function(t,e){var s=t.dispatch;s("SETCARTOBJ",e)},e.setCartAgain=function(t,e){var s=t.dispatch;s("SETCARTOBJS",e)},e.increNums=function(t,e,s){var o=t.dispatch;o("INCRECARTNUMS",e,s)},e.reduceNums=function(t,e,s){var o=t.dispatch;o("REDUCECARTNUMS",e,s)},e.delSingle=function(t,e,s){var o=t.dispatch;o("DELCARTOBJ",e,s)},e.delMultiple=function(t,e){var s=t.dispatch;s("DELCARTOBJS",e)},e.clearAll=function(t){var e=t.dispatch;e("CLEARCART")},e.setSelCartStorage=function(t,e){var s=t.dispatch;s("SETSELCART",e)},e.clearSel=function(t){var e=t.dispatch;e("CLEARSELCART")}},210:function(t,e,s){var o,i;s(211),o=s(212),i=s(217),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},211:function(t,e){},212:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(213),a=o(i);e.default={components:{Dialog:a.default},props:{show:{type:Boolean,default:!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,default:"confirm"},cancelText:{type:String,default:"cancel"},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}}}},213:function(t,e,s){var o,i;s(214),o=s(215),i=s(216),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},214:function(t,e){},215:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},216:function(t,e){t.exports=' <div class=weui_dialog_alert @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)" v-show=show :transition=maskTransition></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div> '},217:function(t,e){t.exports=' <dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog> '},251:function(t,e,s){var o,i;s(252),o=s(253),i=s(263),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},252:function(t,e){},253:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(254),a=o(i),n=s(122),c=o(n);e.default={components:{CardCoupon:a.default,Toast:c.default},data:function(){return{toastMessage:"",toastShow:!1,data:[]}},route:{},ready:function(){},events:{showMes:function(t){"string"==typeof t&&t.length>0&&(this.toastMessage=t,this.toastShow=!0)}}}},254:function(t,e,s){var o,i;s(255),s(256),o=s(257),i=s(262),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},255:function(t,e){},256:function(t,e){},257:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(210),a=o(i),n=s(58),c=o(n),l=s(258),r=o(l),d=s(201);e.default={vuex:{actions:{clearAll:d.clearAll}},components:{Confirm:a.default,Separator:c.default,CouponList:r.default},data:function(){return{confirmShow:!1,choseArr:[],data:[]}},methods:{showConfirm:function(){this.confirmShow=!0},confirmPassword:function(){}},ready:function(){var t=this,e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");e=JSON.parse(e),this.$http.get(localStorage.apiDomain+"public/index/user/couponinfo/uid/"+e.id+"/token/"+e.token).then(function(e){if(1===e.data.status)t.data=e.data.coupon;else if(e.data.status===-1){t.$dispatch("showMes",e.data.info);var s=t;setTimeout(function(){s.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),s.$router.go({name:"login"})},800)}else t.$dispatch("showMes",e.data.info)},function(e){t.$dispatch("showMes","网络开小差了~")})}}},258:function(t,e,s){var o,i;s(259),o=s(260),i=s(261),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},259:function(t,e){},260:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{},data:function(){return{isShow:!1}},methods:{changeShow:function(){var t=this.showing.indexOf(this.obj.id);t<0?this.showing.push(this.obj.id):this.showing.splice(t,1)},toggle:function(){this.isShow=!this.isShow}},computed:{className:function(){return this.showing.indexOf(this.obj.id)>=0},disOff:function(){var t=0;return 2!=this.obj.type&&4!=this.obj.type||(t=10*this.obj.discount.toFixed(2),t%10===0&&(t/=10)),t}}}},261:function(t,e){t.exports=' <div class=card-coupon-box _v-feac07ce=""> <div class=top _v-feac07ce=""> <div class=divider _v-feac07ce=""> <div class=shotcut _v-feac07ce=""></div> </div> <div class=divider _v-feac07ce=""> <label class=unit _v-feac07ce="">￥</label> <label class=number _v-feac07ce="">30</label> </div> <div class="divider nowrap" _v-feac07ce=""> <label class=mes _v-feac07ce="">满300元使用</label> <label class=mes _v-feac07ce="">无门槛</label> <label class=mes _v-feac07ce="">剩余天数<span _v-feac07ce="">23</span>天</label> </div> </div> <div class=wave _v-feac07ce=""></div> <div class=btm _v-feac07ce=""> <div class="con detail" @click=toggle() _v-feac07ce=""> <a _v-feac07ce=""> 详细信息<div class=arrow _v-feac07ce=""></div> </a> </div> <div class="con deadline" _v-feac07ce="">2016-07-13 至 2016-08-13</div> <div class=addition v-show=isShow _v-feac07ce=""> <div class=line _v-feac07ce=""> <div class=title _v-feac07ce="">品牌信息：</div> <div class=content _v-feac07ce="">适用于绿秧田购物商城</div> </div> <div class=line _v-feac07ce=""> <div class=title _v-feac07ce="">限定平台：</div> <div class=content _v-feac07ce="">限绿秧田购物商城微信版、绿秧田购物商城网页版</div> </div> <div class=line _v-feac07ce=""> <div class=title _v-feac07ce="">限定城市：</div> <div class=content _v-feac07ce="">所有城市通用</div> </div> <div class=line _v-feac07ce=""> <div class=title _v-feac07ce="">限定商品:</div> <div class=content _v-feac07ce="">部分限时抢购商品及特价商品不可用</div> </div> </div> </div> </div> '},262:function(t,e){t.exports=' <div class=notify-box _v-684110b7=""> <div class=tips _v-684110b7="">当前有 {{ data.length }} 张可用优惠劵</div> <div class=btn _v-684110b7=""> </div> </div> <separator :set-height=40 unit=px _v-684110b7=""></separator> <div class=wrapper _v-684110b7=""> <coupon-list v-for="item in data" :obj=item :showing.sync=choseArr _v-684110b7=""></coupon-list> </div> <confirm :show.sync=confirmShow title=口令兑换 confirm-text=确定 cancel-text=取消 @on-confirm=confirmPassword _v-684110b7=""> <input type=text class=pass-code value="" placeholder=输入兑换码 _v-684110b7=""> </confirm> '},263:function(t,e){t.exports=' <div class=sub-content _v-0969576e=""> <card-coupon _v-0969576e=""></card-coupon> </div> <toast type=text :show.sync=toastShow _v-0969576e="">{{ toastMessage }}</toast> '}});
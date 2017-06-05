webpackJsonp([57],{123:function(t,e,i){var s,a;i(124),s=i(125),a=i(126),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},124:function(t,e){},125:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},126:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},127:function(t,e,i){var s,a;i(128),s=i(129),a=i(130),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},128:function(t,e){},129:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:Boolean,text:{type:String,default:"Loading"},position:String}}},130:function(t,e){t.exports=' <div class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{position: position}"> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},247:function(t,e,i){var s,a;i(248),s=i(249),a=i(254),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},248:function(t,e){},249:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(250),o=s(a);e.default={components:{Dialog:o.default},props:{show:{type:Boolean,default:!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,default:"confirm"},cancelText:{type:String,default:"cancel"},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}}}},250:function(t,e,i){var s,a;i(251),s=i(252),a=i(253),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},251:function(t,e){},252:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},253:function(t,e){t.exports=' <div class=weui_dialog_alert @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)" v-show=show :transition=maskTransition></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div> '},254:function(t,e){t.exports=' <dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog> '},671:function(t,e,i){var s,a;i(672),s=i(673),a=i(674),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},672:function(t,e){},673:function(t,e,i){(function(t){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(127),o=s(a),n=i(123),l=s(n),r=i(247),c=s(r),d=i(57);e.default={vuex:{actions:{setCartAgain:d.setCartAgain,clearAll:d.clearAll}},components:{Loading:o.default,Toast:l.default,Confirm:c.default},props:{disabled:{type:Boolean,default:!1},orders:{type:Array,default:function(){return[]}}},data:function(){return{loadingShow:!1,loadingMessage:"",confirmShow:!1,confirmTitle:"",confirmText:"",data:{order:{}}}},ready:function(){},methods:{myConfirmClcik:function(e){var i=this,s=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");switch(s=JSON.parse(s),this.clickType){case 1:var a={uid:s.id,token:s.token,oid:e};this.$http.put(localStorage.apiDomain+"public/index/user/orderoperation",a).then(function(t){if(i.$router.go({name:"order-type"}),1===t.data.status)console.log(t.data);else if(t.data.status===-1){var e=i;setTimeout(function(){e.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),e.$router.go({name:"login"})},800)}},function(t){i.loadingShow=!1,i.btnStatus=!1,i.toastMessage="网络开小差了~",i.toastShow=!0});case 2:({uid:s.id,token:s.token,oid:e});this.$http.delete(localStorage.apiDomain+"public/index/user/getsubmitorder/uid/"+s.id+"/token/"+s.token+"/oid/"+e).then(function(e){if(1===e.data.status)console.log(e.data+"1"),i.data.order.statext="用户取消",i.data.order.status=-1,i.btnStatus=!1,t("#cancel-btn").css("display","none"),t("#detail-btn").css("display","none");else if(e.data.status===-1){i.btnStatus=!1,i.toastMessage=e.data.info,i.toastShow=!0;var s=i;setTimeout(function(){s.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),s.$router.go({name:"login"})},800)}else i.btnStatus=!1,i.toastMessage=e.data.info,i.toastShow=!0},function(t){i.toastMessage="网络开小差了~",i.toastShow=!0})}},buyAgain:function(t){var e=this;this.btnStatus=!0,this.loadingMessage="请稍候...",this.loadingShow=!0;var i=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");i=JSON.parse(i),this.$http.get(localStorage.apiDomain+"public/index/user/orderoperation/uid/"+i.id+"/token/"+i.token+"/oid/"+t).then(function(t){if(e.loadingShow=!1,e.btnStatus=!1,1===t.data.status)e.setCartAgain(t.data.list),e.$router.go({name:"cart"});else if(t.data.status===-1){e.toastMessage=t.data.info,e.toastShow=!0;var i=e;setTimeout(function(){i.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),i.$router.go({name:"login"})},800)}else e.toastMessage=t.data.info,e.toastShow=!0},function(t){e.btnStatus=!1,e.toastMessage="网络开小差了~",e.toastShow=!0})},clickExpress:function(t,e){location.href="http://www.kuaidi100.com/chaxun?com="+t+"&nu="+e},clickCancel:function(){this.clickType=2,this.confirmTitle="取消订单",this.confirmText="确定取消该订单吗,确认?",this.btnStatus=!0,this.confirmShow=!0},clickConfirm:function(){this.clickType=1,this.confirmTitle="确认收货",this.confirmText="请在收到货物后才确认收货,确认?",this.btnStatus=!0,this.confirmShow=!0},cancelClick:function(){this.btnStatus=!1,this.clickType=0,this.confirmTitle="",this.confirmText=""}}}}).call(e,i(2))},674:function(t,e){t.exports=' <div class=wrapper id=cardOrder style="margin: 5px auto 0px;width: 97%" _v-374b10bb=""> <div class=card-box v-for="item in orders" _v-374b10bb=""> <div class=top-line _v-374b10bb=""> <div class=date _v-374b10bb="">{{ item.createtime }}</div> <div class=status v-if="item.pay==0&amp;&amp;item.send==0&amp;&amp;item.receive==0&amp;&amp;item.status==0" _v-374b10bb="">待付款</div> <div class=status v-if="item.pay==1&amp;&amp;item.send==0&amp;&amp;item.receive==0&amp;&amp;item.status==0" _v-374b10bb="">待发货</div> <div class=status v-if="item.pay==1&amp;&amp;item.send==1&amp;&amp;item.receive==0&amp;&amp;item.status==0" _v-374b10bb="">待收货</div> <div class=status v-if="item.reject==0&amp;&amp;item.status==1" _v-374b10bb="">交易完成</div> <div class=status v-if="item.reject==0&amp;&amp;item.status==-1" _v-374b10bb="">已取消</div> <div class=status v-if="item.reject==0&amp;&amp;item.status==-2" _v-374b10bb="">申请售后</div> <div class=status v-if="item.reject==0&amp;&amp;item.status==-3" _v-374b10bb="">已关闭</div> <div class=status v-if="item.reject==1" _v-374b10bb="">已退货</div> </div> <div class=mid-line v-link="{name:\'order-detail\',params:{oid:item.id}}" _v-374b10bb=""> <div class=imgs v-for="img in item.imgs" _v-374b10bb=""> <img :src=img style="width:100%;height: 100%" _v-374b10bb=""> </div> <div class=arrow _v-374b10bb=""></div> </div> <div class=btm-line _v-374b10bb=""> <div class=money _v-374b10bb=""> 总金额：<label _v-374b10bb="">¥{{ item.price }}</label> </div> <div class=button _v-374b10bb=""> <a class=manage-btn v-if="item.pay == 0 &amp;&amp; item.send == 0 &amp;&amp; item.receive == 0 &amp;&amp; item.status == 0" v-link="{name:\'order-detail\',params:{oid:item.id}}" _v-374b10bb="">去付款</a> <a class=manage-btn v-if="item.pay == 1 &amp;&amp; item.send == 1 &amp;&amp; item.receive == 0 &amp;&amp; item.status == 0" @click=clickExpress(item.scid,item.snum) _v-374b10bb="">查看快递</a> <a class=manage-btn v-if="item.pay == 1 &amp;&amp; item.send == 1 &amp;&amp; item.receive == 0 &amp;&amp; item.status == 0" @click=clickConfirm() _v-374b10bb="">确认收货</a> <a class=manage-btn v-if="item.pay == 1 &amp;&amp; (item.send == 1 || item.send == 0) &amp;&amp; item.reject == 0 || item.status == 1" @click=buyAgain(item.id) _v-374b10bb="">再次购买</a> <a class=manage-btn v-if="item.reject == 0 &amp;&amp; item.status == 1" v-link="{name:\'service-apply\',params:{oid:item.id}}" _v-374b10bb="">申请售后</a> <a class=manage-btn v-if="item.reject == 0 &amp;&amp; item.status == 1" v-link="{name:\'comment-submit\',params:{oid:item.id}}" _v-374b10bb="">客户评价</a> </div> </div> <confirm :show.sync=confirmShow :title=confirmTitle confirm-text=确定 cancel-text=取消 @on-confirm=myConfirmClcik(item.id) @on-cancel=cancelClick _v-374b10bb=""> <p style=text-align:center _v-374b10bb="">{{ confirmText }}</p> </confirm> </div> </div> <toast :show.sync=toastShow type=text _v-374b10bb="">{{ toastMessage }}</toast> <loading :show=loadingShow :text=loadingMessage _v-374b10bb=""></loading> '}});
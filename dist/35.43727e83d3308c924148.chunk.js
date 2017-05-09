webpackJsonp([35],{122:function(t,e,s){var i,a;s(123),i=s(124),a=s(125),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},123:function(t,e){},124:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},125:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},201:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setCartStorage=function(t,e){var s=t.dispatch;s("SETCARTOBJ",e)},e.setCartAgain=function(t,e){var s=t.dispatch;s("SETCARTOBJS",e)},e.increNums=function(t,e,s){var i=t.dispatch;i("INCRECARTNUMS",e,s)},e.reduceNums=function(t,e,s){var i=t.dispatch;i("REDUCECARTNUMS",e,s)},e.delSingle=function(t,e,s){var i=t.dispatch;i("DELCARTOBJ",e,s)},e.delMultiple=function(t,e){var s=t.dispatch;s("DELCARTOBJS",e)},e.clearAll=function(t){var e=t.dispatch;e("CLEARCART")},e.setSelCartStorage=function(t,e){var s=t.dispatch;s("SETSELCART",e)},e.clearSel=function(t){var e=t.dispatch;e("CLEARSELCART")}},245:function(t,e,s){var i,a;s(246),i=s(247),a=s(248),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},246:function(t,e){},247:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:Boolean,text:{type:String,default:"Loading"},position:String}}},248:function(t,e){t.exports=' <div class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{position: position}"> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},596:function(t,e,s){var i,a;s(597),i=s(598),a=s(599),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},597:function(t,e){},598:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(245),o=i(a),n=s(201),r=s(122),d=i(r);e.default={vuex:{actions:{setCartAgain:n.setCartAgain,clearAll:n.clearAll}},props:{disabled:{type:Boolean,default:!1},orders:{type:Array,default:function(){return[]}}},components:{Loading:o.default,Toast:d.default},data:function(){return{loadingShow:!1,loadingMessage:""}},methods:{buyAgain:function(t){var e=this;this.btnStatus=!0,this.loadingMessage="请稍候...",this.loadingShow=!0;var s=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");s=JSON.parse(s),this.$http.get(localStorage.apiDomain+"public/index/user/orderoperation/uid/"+s.id+"/token/"+s.token+"/oid/"+t).then(function(t){if(e.loadingShow=!1,e.btnStatus=!1,1===t.data.status)e.setCartAgain(t.data.list),e.$router.go({name:"cart"});else if(t.data.status===-1){e.toastMessage=t.data.info,e.toastShow=!0;var s=e;setTimeout(function(){s.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),s.$router.go({name:"login"})},800)}else e.toastMessage=t.data.info,e.toastShow=!0},function(t){e.btnStatus=!1,e.toastMessage="网络开小差了~",e.toastShow=!0})},clickExpress:function(t,e){location.href="http://www.kuaidi100.com/chaxun?com="+t+"&nu="+e},cancelOrder:function(){return!!this.disabled||void this.$dispatch("orderCancel")}}}},599:function(t,e){t.exports=' <div class="wrapper wrap-top"> <div class="card-box box-chonse" v-for="item in orders"> <div class=top-line> <div class=date>{{ item.createtime }}</div> <div class=status v-if="item.pay==0&&item.send==0&&item.receive==0&&item.status==0">待付款</div> <div class=status v-if="item.pay==1&&item.send==0&&item.receive==0&&item.status==0">待发货</div> <div class=status v-if="item.pay==1&&item.send==1&&item.receive==0&&item.status==0">待收货</div> <div class=status v-if="item.reject==0&&item.status==1">交易完成</div> <div class=status v-if="item.reject==0&&item.status==-1">已取消</div> <div class=status v-if="item.reject==0&&item.status==-2">申请售后</div> <div class=status v-if="item.reject==0&&item.status==-3">已关闭</div> <div class=status v-if="item.reject==1">已退货</div> </div> <div class=mid-line v-link="{name:\'order-detail\',params:{oid:item.id}}"> <div class=imgs v-for="img in item.imgs" v-lazy:background-image=img></div> <div class=arrow></div> </div> <div class=btm-line> <div class=money> 总金额：<label>¥{{ item.price }}</label> </div> <div class=button> <a class=manage-btn v-if="item.pay==0&&item.send==0&&item.receive==0&&item.status==0" v-link="{name:\'order-detail\',params:{oid:item.id}}">去付款</a> <a class=manage-btn v-if="item.pay==1&&item.send==1&&item.receive==0&&item.status==0" @click=clickExpress(item.scid,item.snum)>查看快递</a> <a class=manage-btn v-if="item.pay==1&&(item.send==1||item.send==0)&&item.reject==0 || item.status==1" @click=buyAgain(item.id)>再次购买</a> </div> </div> </div> </div> <toast :show.sync=toastShow type=text>{{ toastMessage }}</toast> <loading :show=loadingShow :text=loadingMessage></loading> '}});
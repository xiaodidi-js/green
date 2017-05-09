webpackJsonp([33,35],{123:function(t,e,a){var s,i;a(124),s=a(125),i=a(126),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},124:function(t,e){},125:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},126:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},195:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setCartStorage=function(t,e){var a=t.dispatch;a("SETCARTOBJ",e)},e.setCartAgain=function(t,e){var a=t.dispatch;a("SETCARTOBJS",e)},e.increNums=function(t,e,a){var s=t.dispatch;s("INCRECARTNUMS",e,a)},e.reduceNums=function(t,e,a){var s=t.dispatch;s("REDUCECARTNUMS",e,a)},e.delSingle=function(t,e,a){var s=t.dispatch;s("DELCARTOBJ",e,a)},e.delMultiple=function(t,e){var a=t.dispatch;a("DELCARTOBJS",e)},e.clearAll=function(t){var e=t.dispatch;e("CLEARCART")},e.setSelCartStorage=function(t,e){var a=t.dispatch;a("SETSELCART",e)},e.clearSel=function(t){var e=t.dispatch;e("CLEARSELCART")}},236:function(t,e,a){var s,i;a(237),s=a(238),i=a(243),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},237:function(t,e){},238:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(239),o=s(i),n=a(195),c=a(123),d=s(c);e.default={vuex:{actions:{setCartAgain:n.setCartAgain,clearAll:n.clearAll}},props:{disabled:{type:Boolean,default:!1},orders:{type:Array,default:function(){return[]}}},components:{Loading:o.default,Toast:d.default},data:function(){return{loadingShow:!1,loadingMessage:""}},methods:{buyAgain:function(t){var e=this;this.btnStatus=!0,this.loadingMessage="请稍候...",this.loadingShow=!0;var a=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");a=JSON.parse(a),this.$http.get(localStorage.apiDomain+"public/index/user/orderoperation/uid/"+a.id+"/token/"+a.token+"/oid/"+t).then(function(t){if(e.loadingShow=!1,e.btnStatus=!1,1===t.data.status)e.setCartAgain(t.data.list),e.$router.go({name:"cart"});else if(t.data.status===-1){e.toastMessage=t.data.info,e.toastShow=!0;var a=e;setTimeout(function(){a.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),a.$router.go({name:"login"})},800)}else e.toastMessage=t.data.info,e.toastShow=!0},function(t){e.btnStatus=!1,e.toastMessage="网络开小差了~",e.toastShow=!0})},clickExpress:function(t,e){location.href="http://www.kuaidi100.com/chaxun?com="+t+"&nu="+e},cancelOrder:function(){return!!this.disabled||(this.$dispatch("orderCancel"),void console.log(1))}}}},239:function(t,e,a){var s,i;a(240),s=a(241),i=a(242),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},240:function(t,e){},241:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:Boolean,text:{type:String,default:"Loading"},position:String}}},242:function(t,e){t.exports=' <div class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{position: position}"> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},243:function(t,e){t.exports=' <div class=wrapper _v-720c23f6=""> <div class=card-box v-for="item in orders" _v-720c23f6=""> <div class=top-line _v-720c23f6=""> <div class=date _v-720c23f6="">{{ item.createtime }}</div> <div class=status v-if="item.pay==0&amp;&amp;item.send==0&amp;&amp;item.receive==0&amp;&amp;item.status==0" _v-720c23f6="">待付款</div> <div class=status v-if="item.pay==1&amp;&amp;item.send==0&amp;&amp;item.receive==0&amp;&amp;item.status==0" _v-720c23f6="">待发货</div> <div class=status v-if="item.pay==1&amp;&amp;item.send==1&amp;&amp;item.receive==0&amp;&amp;item.status==0" _v-720c23f6="">待收货</div> <div class=status v-if="item.reject==0&amp;&amp;item.status==1" _v-720c23f6="">交易完成</div> <div class=status v-if="item.reject==0&amp;&amp;item.status==-1" _v-720c23f6="">已取消</div> <div class=status v-if="item.reject==0&amp;&amp;item.status==-2" _v-720c23f6="">申请售后</div> <div class=status v-if="item.reject==0&amp;&amp;item.status==-3" _v-720c23f6="">已关闭</div> <div class=status v-if="item.reject==1" _v-720c23f6="">已退货</div> </div> <div class=mid-line v-link="{name:\'order-detail\',params:{oid:item.id}}" _v-720c23f6=""> <div class=imgs v-for="img in item.imgs" v-lazy:background-image=img _v-720c23f6=""></div> <div class=arrow _v-720c23f6=""></div> </div> <div class=btm-line _v-720c23f6=""> <div class=money _v-720c23f6=""> 总金额：<label _v-720c23f6="">¥{{ item.price }}</label> </div> <div class=button _v-720c23f6=""> <a class=manage-btn :class="{\'disabled\':disabled}" @click=cancelOrder() _v-720c23f6="">取消订单</a> <a class=manage-btn v-if="item.pay==0&amp;&amp;item.send==0&amp;&amp;item.receive==0&amp;&amp;item.status==0" v-link="{name:\'order-detail\',params:{oid:item.id}}" _v-720c23f6="">去付款</a> <a class=manage-btn v-if="item.pay==1&amp;&amp;item.send==1&amp;&amp;item.receive==0&amp;&amp;item.status==0" @click=clickExpress(item.scid,item.snum) _v-720c23f6="">查看快递</a> <a class=manage-btn v-if="item.pay==1&amp;&amp;(item.send==1||item.send==0)&amp;&amp;item.reject==0 || item.status==1" @click=buyAgain(item.id) _v-720c23f6="">再次购买</a> </div> </div> </div> </div> <toast :show.sync=toastShow type=text _v-720c23f6="">{{ toastMessage }}</toast> <loading :show=loadingShow :text=loadingMessage _v-720c23f6=""></loading> '},581:function(t,e,a){var s,i;a(582),s=a(583),i=a(588),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},582:function(t,e){},583:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(236),o=s(i),n=a(58),c=s(n),d=a(123),l=s(d),r=a(53),u=s(r),m=a(195),v=a(584),p=s(v);e.default={vuex:{actions:{clearAll:m.clearAll}},components:{CardOrders:o.default,Separator:c.default,Toast:l.default,Badge:u.default,payment:p.default},data:function(){return{toastShow:!1,toastMessage:"",dtype:-1,count:{unpay:0,unsend:0,unreceive:0,uncomment:0,service:0},data:[]}},route:{},ready:function(){this.getData(0)},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.dtype==e)return!0;this.dtype=e;var a=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");a=JSON.parse(a),this.$http.get(localStorage.apiDomain+"public/index/user/orderselection/uid/"+a.id+"/token/"+a.token+"/type/"+e).then(function(e){if(1===e.data.status)document.body.scrollTop=0,t.count=e.data.count,t.data=e.data.list;else if(e.data.status===-1){t.toastMessage=e.data.info,t.toastShow=!0;var a=t;setTimeout(function(){a.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),a.$router.go({name:"login"})},800)}else t.toastMessage=e.data.info,t.toastShow=!0},function(e){t.toastMessage="网络开小差了~",t.toastShow=!0})}}}},584:function(t,e,a){var s,i;a(585),s=a(586),i=a(587),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},585:function(t,e){},586:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(239),o=s(i),n=a(195),c=a(123),d=s(c);e.default={vuex:{actions:{setCartAgain:n.setCartAgain,clearAll:n.clearAll}},props:{disabled:{type:Boolean,default:!1},orders:{type:Array,default:function(){return[]}}},components:{Loading:o.default,Toast:d.default},data:function(){return{loadingShow:!1,loadingMessage:""}},methods:{buyAgain:function(t){var e=this;this.btnStatus=!0,this.loadingMessage="请稍候...",this.loadingShow=!0;var a=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");a=JSON.parse(a),this.$http.get(localStorage.apiDomain+"public/index/user/orderoperation/uid/"+a.id+"/token/"+a.token+"/oid/"+t).then(function(t){if(e.loadingShow=!1,e.btnStatus=!1,1===t.data.status)e.setCartAgain(t.data.list),e.$router.go({name:"cart"});else if(t.data.status===-1){e.toastMessage=t.data.info,e.toastShow=!0;var a=e;setTimeout(function(){a.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),a.$router.go({name:"login"})},800)}else e.toastMessage=t.data.info,e.toastShow=!0},function(t){e.btnStatus=!1,e.toastMessage="网络开小差了~",e.toastShow=!0})},clickExpress:function(t,e){location.href="http://www.kuaidi100.com/chaxun?com="+t+"&nu="+e},cancelOrder:function(){return!!this.disabled||(this.$dispatch("orderCancel"),void console.log(1))}}}},587:function(t,e){t.exports=' <div class="wrapper wrap-top"> <div class=card-box v-for="item in orders"> <div class=top-line> <div class=date>{{ item.createtime }}</div> <div class=status v-if="item.pay==0&&item.send==0&&item.receive==0&&item.status==0">待付款</div> <div class=status v-if="item.pay==1&&item.send==0&&item.receive==0&&item.status==0">待发货</div> <div class=status v-if="item.pay==1&&item.send==1&&item.receive==0&&item.status==0">待收货</div> <div class=status v-if="item.reject==0&&item.status==1">交易完成</div> <div class=status v-if="item.reject==0&&item.status==-1">已取消</div> <div class=status v-if="item.reject==0&&item.status==-2">申请售后</div> <div class=status v-if="item.reject==0&&item.status==-3">已关闭</div> <div class=status v-if="item.reject==1">已退货</div> </div> <div class=mid-line v-link="{name:\'order-detail\',params:{oid:item.id}}"> <div class=imgs v-for="img in item.imgs" v-lazy:background-image=img></div> <div class=arrow></div> </div> <div class=btm-line> <div class=money> 总金额：<label>¥{{ item.price }}</label> </div> <div class=button> <a class=manage-btn :class="{\'disabled\':disabled}" @click=cancelOrder()>取消订单</a> <a class=manage-btn v-if="item.pay==0&&item.send==0&&item.receive==0&&item.status==0" v-link="{name:\'order-detail\',params:{oid:item.id}}">去付款</a> <a class=manage-btn v-if="item.pay==1&&item.send==1&&item.receive==0&&item.status==0" @click=clickExpress(item.scid,item.snum)>查看快递</a> <a class=manage-btn v-if="item.pay==1&&(item.send==1||item.send==0)&&item.reject==0 || item.status==1" @click=buyAgain(item.id)>再次购买</a> </div> </div> </div> </div> <toast :show.sync=toastShow type=text>{{ toastMessage }}</toast> <loading :show=loadingShow :text=loadingMessage></loading> '},588:function(t,e){t.exports=" <div class=ification-nav> <ul id=card> <li class=activeification-show :class=\"{'active':dtype == 0}\" @click=getData(0)> 全部 </li> <li class=ification-show :class=\"{'active':dtype == 1}\" @click=getData(1)> 待付款 </li> <li class=ification-show :class=\"{'active':dtype == 2}\" @click=getData(2)> 待发货 </li> <li class=ification-show :class=\"{'active':dtype == 3}\" @click=getData(3)> 待收货 </li> <li class=ification-show :class=\"{'active':dtype == 4}\" @click=getData(4)> 评价 </li> </ul> </div> <div class=content id=content> <payment :orders=data></payment> </div> "}});
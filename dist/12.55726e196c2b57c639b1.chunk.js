webpackJsonp([12],{123:function(t,e,s){var i,o;s(124),i=s(125),o=s(126),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},124:function(t,e){},125:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},126:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},197:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setCartStorage=function(t,e){var s=t.dispatch;s("SETCARTOBJ",e)},e.setCartAgain=function(t,e){var s=t.dispatch;s("SETCARTOBJS",e)},e.increNums=function(t,e,s){var i=t.dispatch;i("INCRECARTNUMS",e,s)},e.reduceNums=function(t,e,s){var i=t.dispatch;i("REDUCECARTNUMS",e,s)},e.delSingle=function(t,e,s){var i=t.dispatch;i("DELCARTOBJ",e,s)},e.delMultiple=function(t,e){var s=t.dispatch;s("DELCARTOBJS",e)},e.clearAll=function(t){var e=t.dispatch;e("CLEARCART")},e.setSelCartStorage=function(t,e){var s=t.dispatch;s("SETSELCART",e)},e.clearSel=function(t){var e=t.dispatch;e("CLEARSELCART")}},198:function(t,e,s){var i,o;s(199),i=s(200),o=s(201),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},199:function(t,e){},200:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},201:function(t,e){t.exports=" <i class={{className}}></i> "},202:function(t,e,s){var i,o;s(203),i=s(204),o=s(205),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},203:function(t,e){},204:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},205:function(t,e){t.exports=" <button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button> "},206:function(t,e,s){var i,o;s(207),i=s(208),o=s(213),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},207:function(t,e){},208:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(209),a=i(o);e.default={components:{Dialog:a.default},props:{show:{type:Boolean,default:!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,default:"confirm"},cancelText:{type:String,default:"cancel"},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}}}},209:function(t,e,s){var i,o;s(210),i=s(211),o=s(212),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},210:function(t,e){},211:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},212:function(t,e){t.exports=' <div class=weui_dialog_alert @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)" v-show=show :transition=maskTransition></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div> '},213:function(t,e){t.exports=' <dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog> '},269:function(t,e,s){var i,o;s(270),i=s(271),o=s(277),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},270:function(t,e){},271:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(123),a=i(o),n=s(272),d=i(n),l=s(197);e.default={vuex:{actions:{clearAll:l.clearAll}},components:{CardAddress:d.default,Toast:a.default},data:function(){return{toastShow:!1,toastMessage:"",data:[]}},route:{},ready:function(){var t=this,e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");e=JSON.parse(e),this.$http.get(localStorage.apiDomain+"public/index/user/addresslist/uid/"+e.id+"/token/"+e.token).then(function(e){if(1===e.data.status)t.data=e.data.list;else if(e.data.status===-1){t.toastMessage=e.data.info,t.toastShow=!0;var s=t;setTimeout(function(){s.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),s.$router.go({name:"login"})},800)}},function(e){t.toastMessage="网络开小差了~",t.toastShow=!0})},events:{showMes:function(t){"string"==typeof t&&t.length>0&&(this.toastMessage=t,this.toastShow=!0)}}}},272:function(t,e,s){var i,o;s(273),s(274),i=s(275),o=s(276),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},273:function(t,e){},274:function(t,e){},275:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(198),a=i(o),n=s(202),d=i(n),l=s(206),r=i(l),c=s(197);e.default={vuex:{actions:{clearAll:c.clearAll}},components:{Icon:a.default,XButton:d.default,Confirm:r.default},props:{addresses:{type:Array,default:function(){return[]}}},data:function(){return{confirmShow:!1,delItem:0,issel:0,order_list:[{id:1,name:"22中区-凤岭名都-美宜佳便利店",phone:"23661177",address:"大良凤山中路12号",service:"凤岭名都"},{id:2,name:"1中区-凤岭名都-美宜佳便利店",phone:"23661177",address:"大良凤山中路12号",service:"凤岭名都"},{id:3,name:"80中区-凤岭名都-美宜佳便利店",phone:"23661177",address:"大良凤山中路12号",service:"凤岭名都"}]}},ready:function(){this.siblingsDom()},mounted:function(){var t=this;this.$http.get("../data/since.json").them(function(e){console.log(e),t.order_list=e.data.since,console.log(t.order_list[0])}).catch(function(t){console.log(t)})},methods:{$id:function(t){return document.getElementById(t)},siblings:function(t,e){var s=t.parentElement,i=[].slice.call(s.children);i.filter(function(s){s!=t&&e.call(s)})},siblingsDom:function(){for(var t=this.$id("card"),e=t.children,s=e.length,i=0;i<s;i++){e[i].index=i;var o=this;e[i].onclick=function(){this.className="active",o.siblings(this,function(){this.className=""});var t=document.getElementById("content").children[this.index];t.style.display="block",o.siblings(t,function(){this.style.display="none"})}}},setDefault:function(t,e){var s=this;console.log("Yes");var i=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");i=JSON.parse(i);var o={uid:i.id,token:i.token,aid:e};this.$http.put(localStorage.apiDomain+"public/index/user/addresslist",o).then(function(e){if(1===e.data.status){for(var i=0;i<s.addresses.length;i++)i!=t&&0!=s.addresses[i].is_default&&(s.addresses[i].is_default=0);s.addresses[t].is_default=1}else if(e.data.status===-1){s.$dispatch("showMes",e.data.info);var o=s;setTimeout(function(){o.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),o.$router.go({name:"login"})},800)}else s.$dispatch("showMes",e.data.info)},function(t){s.$dispatch("showMes","网络开小差了~")})},setDel:function(t){this.delItem=t,this.confirmShow=!0},confirmDel:function(){var t=this;if(!this.delItem)return!1;var e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");e=JSON.parse(e),this.$http.delete(localStorage.apiDomain+"public/index/user/addressinfo/uid/"+e.id+"/token/"+e.token+"/aid/"+this.delItem).then(function(e){if(1===e.data.status){for(var s=0;s<t.addresses.length;s++)if(t.addresses[s].id===t.delItem){t.addresses.splice(s,1);break}}else if(e.data.status===-1){t.$dispatch("showMes",e.data.info);var i=t;setTimeout(function(){i.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),i.$router.go({name:"login"})},800)}else t.$dispatch("showMes",e.data.info),console.log("Yes...");t.delItem=0},function(e){t.delItem=0,t.$dispatch("showMes","网络开小差了~")})},cancelDel:function(){this.delItem=0}}}},276:function(t,e){t.exports=' <div class=addresses_table _v-2d476a9a=""> <ul id=card _v-2d476a9a=""> <li class=active _v-2d476a9a=""> 自提点 </li> <li _v-2d476a9a=""> 快递地址 </li> </ul> </div> <div id=content _v-2d476a9a=""> <div id=ziti _v-2d476a9a=""> <div class=main_ziti _v-2d476a9a=""> <div class=address v-for="item in order_list" _v-2d476a9a=""> <ul class=address_list _v-2d476a9a=""> <li _v-2d476a9a="">自提点：{{ item.name }}</li> <li _v-2d476a9a="">电话:23661177</li> <li _v-2d476a9a="">收货地址：大良凤山中路12号</li> <li _v-2d476a9a="">服务范围：凤岭名都</li> </ul> <div class=yuan _v-2d476a9a=""> <icon type=success v-show="item.is_default === 1" _v-2d476a9a=""></icon> <icon type=circle v-show="item.is_default !== 1" _v-2d476a9a=""></icon> </div> </div> </div> <div class=btn-wrapper _v-2d476a9a=""> <x-button text=新增地址 _v-2d476a9a=""></x-button> </div> </div> <div id=cardbox style=display:none _v-2d476a9a=""> <div class=card-box v-for="item in addresses" _v-2d476a9a=""> <div class=half-div _v-2d476a9a="">{{ item.name }}</div> <div class="half-div text-right" _v-2d476a9a="">{{ item.tel }}</div> <div class=address style=background:none _v-2d476a9a="">{{ item.address }}</div> <div class=half-div _v-2d476a9a=""> <icon type=success v-show="item.is_default === 1" _v-2d476a9a=""></icon> <icon type=circle v-show="item.is_default !== 1" @click=setDefault($index,item.id) _v-2d476a9a=""></icon> 默认地址 </div> <div class="half-div text-right" _v-2d476a9a=""> <div class="icon img edit" v-link="{name:\'address-edit\',params:{aid:item.id}}" _v-2d476a9a=""></div> <div class="icon separator" _v-2d476a9a=""></div> <div class="icon img del" @click=setDel(item.id) _v-2d476a9a=""></div> </div> </div> <div class=btn-wrapper _v-2d476a9a=""> <x-button text=新增地址 v-link="{name:\'address-add\'}" _v-2d476a9a=""></x-button> </div> </div> </div> <confirm :show.sync=confirmShow title=删除地址 confirm-text=确定 cancel-text=取消 @on-confirm=confirmDel @on-cancel=cancelDel _v-2d476a9a=""><p style=text-align:center _v-2d476a9a="">确定删除该地址吗？</p></confirm> '},277:function(t,e){t.exports=' <div class=sub-content _v-7867d144=""> <card-address :addresses=data _v-7867d144=""></card-address> </div> <toast type=text :show.sync=toastShow _v-7867d144="">{{ toastMessage }}</toast> '}});
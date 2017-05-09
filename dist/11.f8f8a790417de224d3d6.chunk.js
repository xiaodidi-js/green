webpackJsonp([11],{123:function(t,e,i){var o,s;i(124),o=i(125),s=i(126),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},124:function(t,e){},125:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},126:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},200:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setCartStorage=function(t,e){var i=t.dispatch;i("SETCARTOBJ",e)},e.setCartAgain=function(t,e){var i=t.dispatch;i("SETCARTOBJS",e)},e.increNums=function(t,e,i){var o=t.dispatch;o("INCRECARTNUMS",e,i)},e.reduceNums=function(t,e,i){var o=t.dispatch;o("REDUCECARTNUMS",e,i)},e.delSingle=function(t,e,i){var o=t.dispatch;o("DELCARTOBJ",e,i)},e.delMultiple=function(t,e){var i=t.dispatch;i("DELCARTOBJS",e)},e.clearAll=function(t){var e=t.dispatch;e("CLEARCART")},e.setSelCartStorage=function(t,e){var i=t.dispatch;i("SETSELCART",e)},e.clearSel=function(t){var e=t.dispatch;e("CLEARSELCART")}},205:function(t,e,i){var o,s;i(206),o=i(207),s=i(208),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},206:function(t,e){},207:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},208:function(t,e){t.exports=" <button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button> "},209:function(t,e,i){var o,s;i(210),o=i(211),s=i(216),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},210:function(t,e){},211:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(212),a=o(s);e.default={components:{Dialog:a.default},props:{show:{type:Boolean,default:!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,default:"confirm"},cancelText:{type:String,default:"cancel"},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}}}},212:function(t,e,i){var o,s;i(213),o=i(214),s=i(215),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},213:function(t,e){},214:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},215:function(t,e){t.exports=' <div class=weui_dialog_alert @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)" v-show=show :transition=maskTransition></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div> '},216:function(t,e){t.exports=' <dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog> '},263:function(t,e,i){var o,s;i(264),o=i(265),s=i(275),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},264:function(t,e){},265:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(13),a=o(s),n=i(123),l=o(n),r=i(266),c=o(r),d=i(200);e.default={vuex:{actions:{clearAll:d.clearAll}},components:{Collection:c.default,Toast:l.default},data:function(){return{toastShow:!1,toastMessage:"",data:[]}},route:{},ready:function(){var t=this,e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");e=JSON.parse(e),this.$http.get(localStorage.apiDomain+"public/index/user/usercollection/uid/"+e.id+"/token/"+e.token).then(function(e){if(1===e.data.status)t.data=e.data.list;else if(e.data.status===-1){t.toastMessage=e.data.info,t.toastShow=!0;var i=t;setTimeout(function(){i.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),i.$router.go({name:"login"})},800)}else t.toastMessage=e.data.info,t.toastShow=!0},function(e){t.toastMessage="网络开小差了~",t.toastShow=!0})},events:{showMes:function(t){"string"==typeof t&&t.length>0&&(this.toastMessage=t,this.toastShow=!0)},delData:function(t){if("number"==typeof t){for(var e=0;e<this.data.length;e++)if(t==this.data[e].id){this.data.splice(e,1);break}}else if("object"===("undefined"==typeof t?"undefined":(0,a.default)(t)))for(var i=0;i<t.length;i++)for(var o=0;o<this.data.length;o++)if(t[i]==this.data[o].id){this.data.splice(o,1);break}}}}},266:function(t,e,i){var o,s;i(267),i(268),o=i(269),s=i(274),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},267:function(t,e){},268:function(t,e){},269:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(270),a=o(s),n=i(205),l=o(n),r=i(209),c=o(r),d=i(58),u=o(d),p=i(200);e.default={vuex:{actions:{clearAll:p.clearAll}},components:{XButton:l.default,Confirm:c.default,Separator:u.default,CollectionList:a.default},props:{collections:{type:Array,default:function(){return[]}}},data:function(){return{modeText:"编辑",btnDis:!1,editMode:0,confirmShow:!1,choseArr:[],delItem:0}},ready:function(){},methods:{changMode:function(){this.modeText="编辑"===this.modeText?"完成":"编辑",this.editMode=this.editMode?0:1,0===this.editMode&&(this.choseArr=[])},setMulitpleDel:function(){return 1===this.editMode&&(!(this.choseArr.length<=0)&&void(this.confirmShow=!0))},confirmDel:function(){var t=this,e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");e=JSON.parse(e);var i="";i=this.delItem>0?localStorage.apiDomain+"public/index/user/usercollection/uid/"+e.id+"/token/"+e.token+"/type/0/cid/"+this.delItem:localStorage.apiDomain+"public/index/user/usercollection/uid/"+e.id+"/token/"+e.token+"/type/1/cid/"+this.choseArr.join(","),this.$http.delete(i).then(function(e){if(1===e.data.status)t.delItem>0?t.$dispatch("delData",t.delItem):(t.$dispatch("delData",t.choseArr),t.choseArr=[]),t.delItem=0;else if(e.data.status===-1){t.delItem=0,t.$dispatch("showMes",e.data.info);var i=t;setTimeout(function(){i.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),i.$router.go({name:"login"})},800)}else t.delItem=0,t.$dispatch("showMes",e.data.info)},function(e){t.delItem=0,t.$dispatch("showMes","网络开小差了~")})},cancelDel:function(){this.delItem=0}},computed:{btnText:function(){return this.choseArr.length>0?"删除("+this.choseArr.length+")":"删除"}},events:{setDel:function(t){this.delItem=t,this.confirmShow=!0}}}},270:function(t,e,i){var o,s;i(271),o=i(272),s=i(273),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},271:function(t,e){},272:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mode:{type:Number,required:!0},chosen:{type:Array,twoWay:!0,required:!0},cid:{type:Number,required:!0},pid:{type:Number,required:!0},img:{type:String,required:!0},pname:{type:String,required:!0},pprice:{type:[Number,String],required:!0},pstore:{type:Number,default:0}},data:function(){return{}},computed:{className:function(){var t={};return this.chosen.length>0&&this.chosen.indexOf(this.cid)>=0&&1===this.mode?t.active=!0:t.active=!1,t}},methods:{changeActive:function(t){if(1!==this.mode)return!1;t.preventDefault(),t.stopPropagation();var e=this.chosen.indexOf(this.cid);e>=0?this.chosen.splice(e,1):this.chosen.push(this.cid)},setDel:function(t){t.preventDefault(),t.stopPropagation(),this.$dispatch("setDel",this.cid)}}}},273:function(t,e){t.exports=' <div class=card-box @click=changeActive :class=className v-link="{name:\'detail\',params:{pid:pid}}" _v-6fde7ea1=""> <div class=img v-lazy:background-image=img _v-6fde7ea1=""></div> <div class=mes _v-6fde7ea1=""> <div class=name _v-6fde7ea1="">{{ pname }}</div> <div class=money _v-6fde7ea1=""> <label class=unit _v-6fde7ea1="">¥</label>{{ pprice }} </div> <div class=status _v-6fde7ea1=""> <label v-if="pstore>=1" _v-6fde7ea1="">有货</label><label v-else="" _v-6fde7ea1="">缺货</label> <div class=del v-show="mode !== 1" @click=setDel _v-6fde7ea1=""></div> </div> </div> </div> '},274:function(t,e){t.exports=' <div class=col-wrapper v-if="collections.length>0" _v-59058c9a=""> <div class=notify-box _v-59058c9a=""> <div class=ntips v-show="editMode === 1" _v-59058c9a="">请选择删除商品</div> <div class=ntips v-else="" _v-59058c9a="">当前共有{{ collections.length }}个收藏</div> <div class=btn _v-59058c9a=""> <a @click=changMode _v-59058c9a="">{{ modeText }}</a> </div> </div> <separator :set-height=40 unit=px _v-59058c9a=""></separator> <div class=card-wrapper _v-59058c9a=""> <collection-list v-for="item in collections" :mode=editMode :cid=item.id :pid=item.pid :img=item.shotcut :pname=item.name :pprice=item.price :pstore=item.store :chosen.sync=choseArr _v-59058c9a=""></collection-list> <x-button :text=btnText :disabled=btnDis style="width:80%;margin:2rem auto" @click=setMulitpleDel v-if="editMode === 1" _v-59058c9a=""></x-button> </div> </div> <div class=col-wrapper v-else="" _v-59058c9a=""> <div class=image _v-59058c9a=""></div> <p class=tips _v-59058c9a="">亲，您的收藏夹空空如也~</p> <x-button text=逛一逛 style="width:40%;margin:2rem auto" v-link="{name:\'index\'}" _v-59058c9a=""></x-button> </div> <confirm :show.sync=confirmShow title=删除收藏 confirm-text=确定 cancel-text=取消 @on-confirm=confirmDel @on-cancel=cancelDel _v-59058c9a=""><p style=text-align:center _v-59058c9a="">确定删除收藏商品吗？</p></confirm> '},275:function(t,e){t.exports=' <div class=sub-content _v-37d596d1=""> <collection :collections=data _v-37d596d1=""></collection> </div> <toast :show.sync=toastShow type=text _v-37d596d1="">{{ toastMessage }}</toast> '}});
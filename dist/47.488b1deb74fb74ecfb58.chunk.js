webpackJsonp([47,48],{122:function(t,e,s){var o,i;s(123),o=s(124),i=s(125),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},123:function(t,e){},124:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},125:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},201:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setCartStorage=function(t,e){var s=t.dispatch;s("SETCARTOBJ",e)},e.setCartAgain=function(t,e){var s=t.dispatch;s("SETCARTOBJS",e)},e.increNums=function(t,e,s){var o=t.dispatch;o("INCRECARTNUMS",e,s)},e.reduceNums=function(t,e,s){var o=t.dispatch;o("REDUCECARTNUMS",e,s)},e.delSingle=function(t,e,s){var o=t.dispatch;o("DELCARTOBJ",e,s)},e.delMultiple=function(t,e){var s=t.dispatch;s("DELCARTOBJS",e)},e.clearAll=function(t){var e=t.dispatch;e("CLEARCART")},e.setSelCartStorage=function(t,e){var s=t.dispatch;s("SETSELCART",e)},e.clearSel=function(t){var e=t.dispatch;e("CLEARSELCART")}},202:function(t,e,s){var o,i;s(203),o=s(204),i=s(205),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},203:function(t,e){},204:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},205:function(t,e){t.exports=" <i class={{className}}></i> "},245:function(t,e,s){var o,i;s(246),o=s(247),i=s(248),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},246:function(t,e){},247:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:Boolean,text:{type:String,default:"Loading"},position:String}}},248:function(t,e){t.exports=' <div class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{position: position}"> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},451:function(t,e,s){var o,i;s(452),o=s(453),i=s(459),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},452:function(t,e){},453:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(13),a=o(i),n=s(454),r=o(n),l=s(201),c=s(122),d=o(c),p=s(245),u=o(p);e.default={vuex:{actions:{clearAll:l.clearAll}},components:{FreepopList:r.default,Toast:d.default,Loading:u.default},props:{show:{type:Boolean,required:!0,twoWay:!0},title:{type:String,default:""},showConfirm:Boolean,confirmText:{type:String,default:"确定"},chosen:{type:Number,required:!0,default:0,twoWay:!0}},data:function(){return{showStatus:!0,showTips:"加载中...",getType:"",address:[],toastMessage:"",toastShow:!1,isChonse:!1,options:[],sublist:[],tmp_address:[]}},ready:function(){this.selList()},methods:{onAddressFun:function(t){var e=this;console.log(t);var s=this.address.filter(function(e){return e.pid==t});this.tmp_address=s;var o=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");o=JSON.parse(o),this.$http.get(localStorage.apiDomain+"public/index/Usercenter/myaddress/uid/"+o.id+"/token/"+o.token+"/state/0/sinceid/"+t).then(function(t){if(1===t.data.status);else if(t.data.status===-1){e.toastMessage=t.data.info,e.toastShow=!0;var s=e;setTimeout(function(){s.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),s.$router.go({name:"login"})},800)}else e.toastMessage=t.data.info,e.toastShow=!0},function(t){e.toastMessage="网络开小差了~",e.toastShow=!0})},onChonse:function(){if(this.tmp_address=this.address,this.isChonse){var t=document.getElementById("icon-sanjiao");t.style.transform="rotate(0deg)",t.style.transition="0.5s",this.isChonse=!1}else{this.isChonse=!0;var e=document.createElement("div");e.id="dialog",document.body.appendChild(e);var t=document.getElementById("icon-sanjiao");t.style.transform="rotate(180deg)",t.style.transition="0.5s"}},hidePanel:function(){this.chosen?(this.show=!1,this.ischonse=!1):(this.toastMessage="请选择自提地点~~~~",this.toastShow=!0)},conMove:function(t){t.stopPropagation()},selList:function(t){var e=this,s=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");s=JSON.parse(s);var o={uid:s.id,token:s.token,addressid:t};this.$http.put(localStorage.apiDomain+"public/index/Usercenter/since",o).then(function(t){if(1===t.data.status)console.log(t.data),e.options=t.data.list;else if(t.data.status===-1){console.log(3),e.$dispatch("showMes",t.data.info);var s=e;setTimeout(function(){s.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),s.$router.go({name:"login"})},800)}else console.log(4),e.$dispatch("showMes",t.data.info)},function(t){e.$dispatch("showMes","网络开小差了~")})}},events:{setChosen:function(t){var e=this;if("object"===("undefined"==typeof t?"undefined":(0,a.default)(t))){var s=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");s=JSON.parse(s);var o="";this.$parent.cartIds.length>0&&(o=this.$parent.cartIds.join(","));var i={uid:s.id,token:s.token,type:this.$parent.deliverType,ids:o,area:t.area};this.$http.post(localStorage.apiDomain+"public/index/user/addresschosen",i).then(function(s){if(1===s.data.status)e.chosen=t.id,e.$parent.data.address=t,e.$parent.freight=s.data.freight;else if(s.data.status===-1){e.$parent.toastMessage=s.data.info,e.$parent.toastShow=!0;var o=e;setTimeout(function(){o.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),o.$router.go({name:"login"})},800)}else e.$parent.toastMessage=s.data.info,e.$parent.toastShow=!0},function(t){e.$parent.toastMessage="网络开小差了~",e.$parent.toastShow=!0})}}},watch:{show:function(t,e){var s=this;if(t===!0&&this.address.length<=0||t===!0&&""!=this.$parent.deliverType&&this.$parent.deliverType!=this.getType){var o=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");o=JSON.parse(o),this.getType=this.$parent.deliverType,this.$http.get(localStorage.apiDomain+"public/index/user/addresschosen/uid/"+o.id+"/token/"+o.token+"/type/"+this.getType).then(function(t){if(1===t.data.status)s.showStatus=!1,s.showTips="加载中...",s.address=t.data.list;else if(t.data.status===-1){s.$parent.toastMessage=t.data.info,s.$parent.toastShow=!0;var e=s;setTimeout(function(){e.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),e.$router.go({name:"login"})},800)}else s.address=[],s.chosen=0,s.showTips="暂无添加地址",s.showStatus=!0},function(t){s.$parent.toastMessage="网络开小差了~",s.$parent.toastShow=!0})}}}}},454:function(t,e,s){var o,i;s(455),o=s(456),i=s(457),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},455:function(t,e){},456:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(202),a=o(i);e.default={components:{Icon:a.default},props:{obj:{type:Object,required:!0},choseId:{type:Number,default:0}},data:function(){return{ischonse:!1}},computed:{selSta:function(){return this.obj.id===this.choseId}},methods:{isActiveFun:function(){for(var t=(document.getElementById("content-box"),document.getElementsByClassName("mes-line")),e=this,s=0;s<t.length;s++)t[s].index=s,t[s].onclick=function(){this.className="isActive",e.siblings(this,function(){this.className="mes-line"})}},changeActive:function(t){this.ischonse=!0,t.preventDefault(),t.stopPropagation(),this.$dispatch("setChosen",this.obj)}}}},457:function(t,e,s){t.exports=' <div class="mes-line my-common-fadein" :class="{\'isChonse\':obj.id == this.choseId}" _v-21013602=""> <div class=edit v-link="{name:\'address-edit\',params:{aid:obj.id}}" v-if="$parent.getType==\'express\'" _v-21013602=""> <img src='+s(458)+' _v-21013602=""> </div> <div class=addcon @click=changeActive() v-if="$parent.getType==\'express\'" _v-21013602=""> <div class="name nowrap" _v-21013602=""> <div class=default v-if="obj.is_default === 1" _v-21013602="">默认</div> <p style="line-height: 22px" _v-21013602=""> <span class=address-left _v-21013602="">地址:</span> <span _v-21013602="">{{ obj.name }}</span> </p> <p style="line-height: 22px" _v-21013602=""> <span class=address-left _v-21013602="">地点:</span> <span _v-21013602="">{{ obj.tel }}</span> </p> </div> <div class="address nowrap" _v-21013602=""> {{ obj.address }} </div> </div> <div class="addcon noicon" @click=changeActive v-else="" _v-21013602=""> <div class="name nowrap" _v-21013602=""> <div class=default v-if="obj.is_default === 1" _v-21013602="">默认</div> <p style="line-height: 22px" _v-21013602=""> <span class=address-left _v-21013602="">地址:</span> <span _v-21013602="">{{ obj.name }}</span> </p> <p style="line-height: 22px" _v-21013602=""> <span class=address-left _v-21013602="">地点:</span> <span _v-21013602="">{{ obj.tel }}</span> </p> </div> <div class="address nowrap" _v-21013602=""> <p style="line-height: 22px" _v-21013602=""> <span _v-21013602="">详细地址</span> <span _v-21013602="">{{ obj.address }}</span> </p> </div> </div> <div class=check _v-21013602=""> <icon type=success class=my-icon-chosen v-show=selSta _v-21013602=""></icon> <icon type=circle class=my-icon @click=changeActive v-show=!selSta _v-21013602=""></icon> </div> </div> '},458:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADkElEQVR4Xu2aXVLbMBDHdy0OQE9QOEHxsHkunKBwgpYTADfgBi03SE/Q3ID0GTFuT9BwgpL32OqsR06FMWRlR7EysWfyEuvr//PuSloJYccf3HH9MAAYLGDHCQwusOMGMATBwQV8XCDLsv2iKC6LojhDxCOfup5lp0R06lmnVXGxBbD4xWJxF1j4UoQx5nQ0Gk2bVGVZdpDn+VcAOLHvJ0qp6zRNn3wpiAForccA8Nm3g5blfyulTpoEZVl2lOf5HQDs19p+Ukqdpmn6y6dPHwB/nU5vlVI3bYj7DK5e9g3xVVFvCCIAtuPM9jInojr9LrpEdRvEz9lKAGCW5zm7ygfbEENI0zSdSRoWAbi/vz9BRDY7MMb8HI1Gle9J+uhc5jXxlblzfKpBEAfR6AG8YvYTIjp3yVoI7P/v+X8iEmkTFerLAlb4/JiILioIFgC76QH/p5Q6lLhBtACazJ793fF11llCaJiixXEqSgAeAa+EYIw5qq1PzoloIgk+0QFoEfCe6UTEi+PjY16ziJ6oAKwSX/N3d+orX/mKL+tIMG0iCErF83ibluVtxEcDoC/xUQDoU3zvAPoW3yuAEOIfHh6ujDGfAOA26mkwhHj+mlprY4P6jIgOJQF+47NAKPE1AHHuBUKKjx5AaPFRA9iE+GgBbEp8lAA2KT5KAA2Z5Mak5brW9s40GMcsoLX+U2VonDn5GYR1iY/OAtxMMidSEZEzyW7mlk9+ZvXDlra7uugA2GUpn97wPv06SZJxPX1tjJm5mZwu4qMDoLXmlBSvy5cJyob09dIzuoqPEUC1Ln8kogPrEh8B4Mw502udyWla50cTBN0MEgDwgSX/ynR1/VnHl6/ajAaA1vobAFy+sRt7BICpMWb82gmwZCdXLxMTgKX/20HOWTAiTpIkmUoOLLYagD2/v+Eov7e3N/E9sm4jProg2FZEl3rRuEAXEV3qDgD+p8Ti2At0+Zpt6gazABvUeGNTPkqpd5u+HrMKiNaaF1g/bLly8bWqDr8XJUVthOWj6fLygTGGLyLcKKW8b2VJBuVbpigKFstrj+rqznci+iJpRwzA3dxIGu6zjL0jJLotJgZgrWDVCq9P3dz3HBGv1n487qriTc1isXixoelTOSI+IeI0SRJedIluh1Xj9bKAPkWG6nsAEIrstrQ7WMC2fKlQ4xwsIBTZbWl3sIBt+VKhxjlYQCiy29LuzlvAP6N+rW4gszkAAAAAAElFTkSuQmCC"},459:function(t,e){t.exports=' <div class=masker :class="{\'show\':show}" @click=hidePanel @touchmove.stop.prevent="" @touchend.stop="" @touchstart.stop="" _v-07339440=""></div> <div class=panel :class="{\'show\':show}" @touchmove.stop.prevent="" @touchend.stop="" @touchstart.stop="" _v-07339440=""> <div class=search_panel _v-07339440=""> <form class=search_form _v-07339440=""> <input type=text class=search_txt placeholder=搜索自提点 _v-07339440=""> <input type=button class=search_btn _v-07339440=""> </form> <div class=alladdress _v-07339440=""> <span _v-07339440="">地区选择:</span> <div class=sel-bg _v-07339440=""> <div class=select-add @click=onChonse() _v-07339440="">全部</div> <i class="iconfont icon-sanjiao icon-sanjiao" id=icon-sanjiao _v-07339440=""></i> <ul class=option-list v-show=isChonse _v-07339440=""> <li class=list-li v-for="item in options" _v-07339440=""> <div style="" _v-07339440="">{{ item.name }}</div> <i class=list style="display:block;width:10rem;height:1px;background: #f2f2f2" _v-07339440=""></i> <div class=double-list _v-07339440=""> <ul _v-07339440=""> <li v-for="items in item.sub" @click=onAddressFun(items.id) _v-07339440="">{{ items.name }}</li> </ul> </div> </li> </ul> </div> </div> </div> <div class=con-box id=content-box v-on:touchmove=conMove _v-07339440=""> <div class=emline v-show=showStatus _v-07339440="">{{ showTips }}</div> <freepop-list v-for="item in tmp_address" :obj=item :chose-id=chosen _v-07339440=""></freepop-list> </div> <div class=btn v-if=showConfirm @click=hidePanel _v-07339440="">{{ confirmText }}</div> </div> <toast type=text :show.sync=toastShow _v-07339440="">{{ toastMessage }}</toast> <loading :show=loadingShow :text=loadingMessage _v-07339440=""></loading> '}});
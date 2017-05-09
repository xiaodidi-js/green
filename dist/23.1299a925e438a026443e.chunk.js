webpackJsonp([23],{123:function(t,e,a){var s,i;a(124),s=a(125),i=a(126),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},124:function(t,e){},125:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},126:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},195:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setCartStorage=function(t,e){var a=t.dispatch;a("SETCARTOBJ",e)},e.setCartAgain=function(t,e){var a=t.dispatch;a("SETCARTOBJS",e)},e.increNums=function(t,e,a){var s=t.dispatch;s("INCRECARTNUMS",e,a)},e.reduceNums=function(t,e,a){var s=t.dispatch;s("REDUCECARTNUMS",e,a)},e.delSingle=function(t,e,a){var s=t.dispatch;s("DELCARTOBJ",e,a)},e.delMultiple=function(t,e){var a=t.dispatch;a("DELCARTOBJS",e)},e.clearAll=function(t){var e=t.dispatch;e("CLEARCART")},e.setSelCartStorage=function(t,e){var a=t.dispatch;a("SETSELCART",e)},e.clearSel=function(t){var e=t.dispatch;e("CLEARSELCART")}},204:function(t,e,a){var s,i;a(205),s=a(206),i=a(211),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},205:function(t,e){},206:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(207),o=s(i);e.default={components:{Dialog:o.default},props:{show:{type:Boolean,default:!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,default:"confirm"},cancelText:{type:String,default:"cancel"},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}}}},207:function(t,e,a){var s,i;a(208),s=a(209),i=a(210),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},208:function(t,e){},209:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},210:function(t,e){t.exports=' <div class=weui_dialog_alert @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)" v-show=show :transition=maskTransition></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div> '},211:function(t,e){t.exports=' <dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog> '},216:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAyCAYAAACtd6CrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFBREJBNjQ4OEFBRDExRTZBNDI5QThGRURDNzE1QkQxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFBREJBNjQ5OEFBRDExRTZBNDI5QThGRURDNzE1QkQxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUFEQkE2NDY4QUFEMTFFNkE0MjlBOEZFREM3MTVCRDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUFEQkE2NDc4QUFEMTFFNkE0MjlBOEZFREM3MTVCRDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SRpbUAAACjElEQVR42ryYz0tUURTH3xsrQoQIkhaWm1zmNrf+QCEaXaiLKHQXg7OP0X9AJ/8AZWgjohExiaiEaFkUCrUpqKWu1FVtapHgr+l75AxcTufpzHvnzoPDgXce73O/551z3703CPgqFAqTsHzg8UoxiCBPYTmfwBS/POfcI+C4L2W3lftjAI76gA3DXiixCWtgyN+sDm4W9khTmclk8mYwBl6CW4D1Ks9lAZw2qUa68LJjuEHYsvLcFAYzYqbMUXgFruhDYajdZOAqrEOESrAhAOcTpdG98LJDuDTsvTK4WQzmsZkyR2E93Iqi8JRaplqF4UUPMJAU3hOhE1g/gEuJ0ihS+heuB/ZFhKg3ixhMn5kyR+E1uDVF4RG1TCUKw2pyzsBPsFYRooK6D+BGojSKlP6G64L9ECFqlRUMptNMmaOwEY5U3BWhA2qZKIVh3NmAgVuwFhGiguoE8HOiNIqU/uT+2xEhapU1DKbNTJmj8BbcB9gdEfpDLeMqTAxzgFvKX58Kqh3Ab4nSKFK6R98Jti9C1CrrGEyrmTJHYQuntEmEftFgUpYwKNyGe6KEbsBepjwoe66ESNnDsFYphOrvVtXYzNXYpJQ/VeNXk2rkst+IAPWUQYmrsZqGTjo33oTbVEA0GXcDtGkyN/Ik/DYClNZAsZTF/b3E+VNfh/uogGhp8ACgdZM/NS8JViNAgxeBKlZmsdipdN3YAPdOAdFCdQCgRZN1Iy9QlyJAw9WAzlVmvfQ+bxdzFe6NAgp4FzNnsovh7dKrCFA2Lug/ZT43gnJPfRnutfc9NZ8WzESAxixAZ8pqdSxRVlYTUBm2q9zPW4PcEx73sOwZQObnVrK/vJ83hqVSKajV9U+AAQBF7AnC/7/QtQAAAABJRU5ErkJggg=="},239:function(t,e,a){var s,i;a(240),s=a(241),i=a(242),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},240:function(t,e){},241:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:Boolean,text:{type:String,default:"Loading"},position:String}}},242:function(t,e){t.exports=' <div class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{position: position}"> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},458:function(t,e,a){var s,i;a(459),s=a(460),i=a(461),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},459:function(t,e){},460:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{list:{type:Array,default:function(){return[]}},showTop:{type:Boolean,default:!1},showBtm:{type:Boolean,default:!0}},data:function(){return{amount:0}},ready:function(){},computed:{amount:function(){return this.list.length},sum:function t(){var t=0;if(this.amount>0)for(var e=0;e<this.list.length;e++)t+=this.list[e].price*this.list[e].nums;return t.toFixed(2)}}}},461:function(t,e,a){t.exports=' <div class=bl-wrapper _v-e62edd2a=""> <div class="line top" v-if=showTop _v-e62edd2a=""> <div class=icon _v-e62edd2a=""> <img src='+a(462)+' _v-e62edd2a=""> </div> <div class=wtit _v-e62edd2a=""> 购买清单 <label _v-e62edd2a="">（共{{ amount }}件商品）</label> </div> </div> <div class=line v-for="item in list" v-link="{name:\'detail\',params:{pid:item.id}}" _v-e62edd2a=""> <div class=img v-lazy:background-image=item.shotcut _v-e62edd2a=""></div> <div class=con _v-e62edd2a=""> <div class=left _v-e62edd2a=""> <div class=name _v-e62edd2a="">{{ item.name }}</div> <div class=format _v-e62edd2a="">{{ item.formatName }}</div> </div> <div class=right _v-e62edd2a=""> <div class=price _v-e62edd2a="">¥{{ item.price }}</div> <div class=num _v-e62edd2a="">x{{ item.nums }}</div> </div> </div> </div> <div class=line-bottom v-if=showBtm _v-e62edd2a=""> 共{{ amount }}件商品合计：<label style=color:#f9ad0c _v-e62edd2a="">¥{{ sum }}</label> </div> </div> '},462:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABNCAYAAACyndrTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABIdJREFUeNrsXO1t2zAQlYz8r0dQJqgD5H/lCepMYHuCWhMkmcDxBFYmiDNB3P8BrA2ibuAN2mN6BhSXH0eJp4/0HkAIsWSKfI+84x0ZR5FAIBAIBAKBoD5i283X19cULj+gqOtY6GqEEkoBZXN9fb33EgOE2MJlIRyyIAdBlucfjgxCLEQIViyQY7cYgFvhix23VDES4YodidNnoNN+Mdk6KM9QjsIlCWrR891i8qdVZ37hUfE9fPFO+PXGDgb4L4rpH3lUuhde6wtCeWgkPPEDLEohYgwMIoaIIRAxRAyBiDFAXPS5cRAszeAyx4CzaFjXBC5rKI9QVy4zw488lUJ4gqIEeYK/xw2FUCmeFMpWlzEVMczkvZNW+ShRZNYRBL6ToBDV727xHYMVI20yOj2hI2riKwg++xTpdynTlgbWmDoTfcRQia43qHjVQh9ULudoEGTrIcQLfuccqu68BSEUV2/UNuvEKC3Pqw6u4SUHtMMsQGc9NQgywy1hF2xCqNR1ySjCRHGECwbbTC6sYmAjXSuXk8ngFiQz3F7YBMF7NiEKTiEsA+GDENCOI8VM3VhMRXWWcAuiTMnSIsjCIITJRmctCWGbDUfk9ub8RkyofI6dG1sqv2Ke9guL3V2e4gZ47i4yb+IsOeMLXLUdHDzlGOdoB0Ts4QzXlhG3hxdMmZ2hbcSfZs/WMiMemNv3Ylmh5dgG63Z1zDFCOxDkaBmR2jNKXczcoEEfVppZlr6sQFJ3Bv/ViRCOvmc+AzSuORJOaYpzXIVwkGgWZ5H+yNAXKJRYR82WjeGe8m87l9nwcNoHXawE9d/41FU3UZgZxJgTlsXUkdY0uBw7ZutXyyz3wdzCEX9uCldOO8YUw6QF0xLqHalhVpStiIH42RGJfcOEyA2rGAVjB8sWSOR8Ry1ugm8uqeAnQAC4iWjnfRPNc0ciGZu+TbHgYoSIxCuJQpfwuoi74A5AudDETMl/MgXmpokY3zqy9X1DSeSGVYxZy069ryiI3PD4DNzB0jnY50CLAFsE7hqBCfoS12gOEoFjn2eaNqx8k5NxDaKSSJ8qVh27DJRiWAeIwF14gLZmgQbOm4EPr62FUY0Xmzb4Q420QUXg2GdT8tLriNHIQ4hTQsy0nZlF/y+yyHyAgnxeYEQQIcF9hIPFhmcBZ8XgInDse2YJTJUgWzTx/j6jchwydbQl+J5B5d2cEXjw/XDiDxnsTe+OGzrQtjZvfCLwfZcRuMcvS/yzgDCZqRWxss6E6CuQE8qSduX0GYQzqMrWTkMsCz+xIIqbqcsvnXPtE/Spiu/7epy+h4Io33CJhxVuCQGsV5yxFCFqiaL86mXwoE/Ai6GLoYttnofamYuBm4AHsMmFxlaLGB06SjFTAhFDxBCIGCKGQMT4tKDu9vmIIeek6iMNLcaa858pP/GsoG6UaYO+0vBsEv3dPhSGw+FD9sC00/dbeGolexBTzFQuVLEjp/oM09ETQRhoT5OMDNPn/TRcJD8szAHF6ZXuaJPzeCee9UmEwyAoOX9JQiAQCAQCQQf4I8AA1kDO2TnNFSwAAAAASUVORK5CYII="},463:function(t,e,a){var s,i;a(464),s=a(465),i=a(466),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},464:function(t,e){},465:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{sum:{type:[String,Number],default:0},coupon:{type:[String,Number],default:0},score:{type:[String,Number],default:0},freight:{type:[String,Number],default:0},showSum:{type:Boolean,default:!1}},data:function(){return{}},ready:function(){},computed:{sfee:function(){var t=this.sum;return"string"==typeof t&&(t=parseFloat(t)),t.toFixed(2)},cfee:function(){var t=this.coupon;return"string"==typeof t&&(t=parseFloat(t)),t.toFixed(2)},scfee:function(){var t=this.score;return"string"==typeof t&&(t=parseFloat(t)),t.toFixed(2)},ffee:function(){var t=this.freight;return"string"==typeof t&&(t=parseFloat(t)),t.toFixed(2)},lastSum:function(){var t=this.sum+this.freight-(this.coupon+this.score);return t<=0&&(t=.01),t.toFixed(2)}}}},466:function(t,e){t.exports=' <div class=bl-wrapper _v-45e8de68=""> <div class=line _v-45e8de68=""> <div class=left _v-45e8de68="">商品金额：</div> <div class=right _v-45e8de68=""> {{ sfee }} </div> </div> <div class=line _v-45e8de68=""> <div class=left _v-45e8de68="">优惠券抵扣：</div> <div class=right _v-45e8de68=""> <label _v-45e8de68="">-</label> {{ cfee }} </div> </div> <div class=line _v-45e8de68=""> <div class=left _v-45e8de68="">积分抵扣：</div> <div class=right _v-45e8de68=""> <label _v-45e8de68="">-</label> {{ scfee }} </div> </div> <div class=line _v-45e8de68=""> <div class=left _v-45e8de68="">快递运费：</div> <div class=right _v-45e8de68=""> {{ ffee }} </div> </div> <div class="line bottom" v-if=showSum _v-45e8de68=""> 应付金额：<label _v-45e8de68="">¥{{ lastSum }}</label> </div> </div> '},471:function(t,e,a){var s,i;a(472),s=a(473),i=a(474),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},472:function(t,e){},473:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{disabled:{type:Boolean,default:!1},pay:{type:Number,default:0},send:{type:Number,default:0},receive:{type:Number,default:0},fixed:{type:Boolean,default:!1},btm:{type:Number,default:0},unit:{type:String,default:"rem"}},data:function(){return{}},methods:{clickPay:function(){return!!this.disabled||void this.$dispatch("payOrder")},clickAgain:function(){return!!this.disabled||void this.$dispatch("payAgain")},clickConfirm:function(){return!!this.disabled||void this.$dispatch("orderConfirm")},clickCancel:function(){return!!this.disabled||void this.$dispatch("orderCancel")},clickService:function(){return!!this.disabled||void this.$dispatch("serviceApply")}}}},474:function(t,e){t.exports=' <div class=bottom-buy :class="{\'fixed\':fixed}" :style="{bottom:fixed===true&amp;&amp;btm>0 ? btm+unit : 0}" _v-a85a55cc=""> <div v-if="pay==0&amp;&amp;send==0&amp;&amp;receive==0" _v-a85a55cc=""> <div class="btn again" :class="{\'disabled\':disabled}" @click=clickPay _v-a85a55cc="">确认支付</div> <div class="btn service" :class="{\'disabled\':disabled}" @click=clickCancel _v-a85a55cc="">取消订单</div> </div> <div v-if="pay==1&amp;&amp;(send==0||send==1)&amp;&amp;receive==0" _v-a85a55cc=""> <div class="btn confirm" :class="{\'disabled\':disabled}" @click=clickConfirm _v-a85a55cc="">确认收货</div> <div class="btn again" :class="{\'disabled\':disabled}" @click=clickAgain _v-a85a55cc="">再次购买</div> </div> <div v-if="pay==1&amp;&amp;send==1&amp;&amp;receive==1" _v-a85a55cc=""> <div class="btn service" :class="{\'disabled\':disabled}" @click=clickService _v-a85a55cc="">申请售后</div> <div class="btn again" :class="{\'disabled\':disabled}" @click=clickAgain _v-a85a55cc="">再次购买</div> </div> </div> '},476:function(t,e,a){var s,i;a(477),s=a(478),i=a(479),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},477:function(t,e){},478:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(458),o=s(i),n=a(463),d=s(n),r=a(471),c=s(r),l=a(58),u=s(l),v=a(123),p=s(v),f=a(239),m=s(f),g=a(204),h=s(g),A=a(195);e.default={vuex:{actions:{setCartAgain:A.setCartAgain,clearAll:A.clearAll}},data:function(){return{loadingShow:!1,loadingMessage:"",toastMessage:"",toastShow:!1,btnStatus:!1,confirmShow:!1,confirmTitle:"",confirmText:"",clickType:0,data:{pindex:0,process:[],order:{},products:[],payment:{}}}},components:{BalanceList:o.default,BalancePrice:d.default,BottomConfirm:c.default,Separator:u.default,Toast:p.default,Loading:m.default,Confirm:h.default},route:{data:function(t){"undefined"!=typeof t.to.params.oid&&t.to.params.oid||(t.abort(),t.go({name:"index"}))}},ready:function(){var t=this,e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");e=JSON.parse(e),this.$http.get(localStorage.apiDomain+"public/index/user/getsubmitorder/uid/"+e.id+"/token/"+e.token+"/oid/"+this.$route.params.oid).then(function(e){if(1===e.data.status)t.data.pindex=e.data.pindex,t.data.process=e.data.process,t.data.order=e.data.order,t.data.products=e.data.products;else if(e.data.status===-1){t.toastMessage=e.data.info,t.toastShow=!0;var a=t;setTimeout(function(){a.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),a.$router.go({name:"login"})},800)}else t.toastMessage=e.data.info,t.toastShow=!0},function(e){t.toastMessage="网络开小差了~",t.toastShow=!0})},methods:{jumpExpress:function(){return!(1!=this.data.order.pay||1!=this.data.order.send||!this.data.order.snum)&&void(location.href="http://www.kuaidi100.com/chaxun?com="+this.data.order.scid+"&nu="+this.data.order.snum)},jsApiCall:function(){var t=this;WeixinJSBridge.invoke("getBrandWCPayRequest",t.data.payment,function(e){if("get_brand_wcpay_request:ok"==e.err_msg){var a=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");a=JSON.parse(a);var s=sessionStorage.getItem("openid"),i={uid:a.id,token:a.token,oid:t.$route.params.oid,opid:s,paysuccess:1};t.$http.put(localStorage.apiDomain+"public/index/user/getsubmitorder",i).then(function(e){t.toastMessage=e.data.info,t.toastShow=!0,1===e.data.status?(t.data.pindex=1,t.data.process[1].status=1,t.data.process[1].time=e.data.time,t.data.order.status="待发货",t.data.order.pay=1):e.data.status===-1&&setTimeout(function(){t.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),t.$router.go({name:"login"})},800),t.btnStatus=!1},function(e){t.btnStatus=!1,t.toastMessage="网络开小差了~",t.toastShow=!0})}else t.btnStatus=!1,t.toastMessage="订单支付失败",t.toastShow=!0})},callpay:function(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",this.jsApiCall,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",this.jsApiCall),document.attachEvent("onWeixinJSBridgeReady",this.jsApiCall)):this.jsApiCall()},confirmClcik:function(){var t=this,e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");switch(e=JSON.parse(e),this.clickType){case 1:this.$http.delete(localStorage.apiDomain+"public/index/user/getsubmitorder/uid/"+e.id+"/token/"+e.token+"/oid/"+this.$route.params.oid).then(function(e){if(1===e.data.status)t.data.order.statext="用户取消",t.data.order.status=-1,t.btnStatus=!1;else if(e.data.status===-1){t.btnStatus=!1,t.toastMessage=e.data.info,t.toastShow=!0;var a=t;setTimeout(function(){a.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),a.$router.go({name:"login"})},800)}else t.btnStatus=!1,t.toastMessage=e.data.info,t.toastShow=!0},function(e){t.btnStatus=!1,t.toastMessage="网络开小差了~",t.toastShow=!0});break;case 2:this.loadingMessage="正在确认",this.loadingShow=!0;var a={uid:e.id,token:e.token,oid:this.$route.params.oid};this.$http.put(localStorage.apiDomain+"public/index/user/orderoperation",a).then(function(e){if(t.loadingShow=!1,t.toastMessage=e.data.info,t.toastShow=!0,t.btnStatus=!1,1===e.data.status)t.data.order.receive=1,t.data.pindex=3,t.data.process[3].status=1,t.data.process[3].time=e.data.time,t.data.order.statext="确认收货",t.data.order.status=1;else if(e.data.status===-1){var a=t;setTimeout(function(){a.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),a.$router.go({name:"login"})},800)}},function(e){t.loadingShow=!1,t.btnStatus=!1,t.toastMessage="网络开小差了~",t.toastShow=!0})}},cancelClick:function(){this.btnStatus=!1,this.clickType=0,this.confirmTitle="",this.confirmText=""}},events:{payOrder:function(){var t=this;switch(this.btnStatus=!0,this.data.order.paytype){case 1:if("string"==typeof this.data.payment.appId&&"string"==typeof this.data.payment.package)return void this.callpay();var e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");e=JSON.parse(e);var a=sessionStorage.getItem("openid"),s={uid:e.id,token:e.token,oid:this.$route.params.oid,opid:a};this.$http.put(localStorage.apiDomain+"public/index/user/getsubmitorder",s).then(function(e){if(1===e.data.status)t.data.payment=JSON.parse(e.data.payment),t.callpay();else if(e.data.status===-1){t.btnStatus=!1,t.toastMessage=e.data.info,t.toastShow=!0;var a=t;setTimeout(function(){a.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),a.$router.go({name:"login"})},800)}else t.btnStatus=!1,t.toastMessage=e.data.info,t.toastShow=!0},function(e){t.btnStatus=!1,t.toastMessage="网络开小差了~",t.toastShow=!0});break;case 2:}},orderCancel:function(){return 1==this.data.order.pay||1==this.data.order.send||1==this.data.order.receive?(this.toastMessage="订单已支付",this.toastShow=!0,!1):(this.clickType=1,this.confirmTitle="取消订单",this.confirmText="确定取消该订单吗?",this.confirmShow=!0,void(this.btnStatus=!0))},orderConfirm:function(){return 1!=this.data.order.pay?(this.toastMessage="订单未支付",this.toastShow=!0,!1):1!=this.data.order.send?(this.toastMessage="订单未发货",this.toastShow=!0,!1):1==this.data.order.receive?(this.toastMessage="订单已确认收货",this.toastShow=!0,!1):(this.clickType=2,this.confirmTitle="确认收货",this.confirmText="请在收到货物后才确认收货,确认?",this.confirmShow=!0,void(this.btnStatus=!0))},payAgain:function(){var t=this;this.btnStatus=!0,this.loadingMessage="请稍候...",this.loadingShow=!0;var e=sessionStorage.getItem("userInfo")||localStorage.getItem("userInfo");e=JSON.parse(e),this.$http.get(localStorage.apiDomain+"public/index/user/orderoperation/uid/"+e.id+"/token/"+e.token+"/oid/"+this.$route.params.oid).then(function(e){if(t.loadingShow=!1,t.btnStatus=!1,1===e.data.status)t.setCartAgain(e.data.list),t.$router.go({name:"cart"});else if(e.data.status===-1){t.toastMessage=e.data.info,t.toastShow=!0;var a=t;setTimeout(function(){a.clearAll(),sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),a.$router.go({name:"login"})},800)}else t.toastMessage=e.data.info,t.toastShow=!0},function(e){t.btnStatus=!1,t.toastMessage="网络开小差了~",t.toastShow=!0})},serviceApply:function(){return 1!=this.data.order.pay?(this.toastMessage="订单未支付",this.toastShow=!0,!1):1!=this.data.order.send?(this.toastMessage="订单未发货",this.toastShow=!0,!1):void(this.data.order.status==-2?this.$router.go({name:"service",params:{oid:this.$route.params.oid}}):this.$router.go({name:"service-apply",params:{oid:this.$route.params.oid}}))}}}},479:function(t,e,a){t.exports=' <div class=bal-wrapper _v-586f5c65=""> <div class=bl-express-box _v-586f5c65=""> <div class=mid-line _v-586f5c65=""></div> <div class=item v-for="pitem in data.process" _v-586f5c65=""> <div class=top _v-586f5c65="">{{ pitem.title }}</div> <div class=ball :class="{\'active\':data.pindex==$index,\'none\':pitem.status!=1}" _v-586f5c65=""></div> <div class=btm v-if="pitem.status==1" _v-586f5c65="">{{ pitem.time }}</div> <div class=btm v-else="" _v-586f5c65=""></div> </div> </div> <div class="bl-info-box status" _v-586f5c65=""> <div class=icon _v-586f5c65=""> <img src='+a(480)+' _v-586f5c65=""> </div> <div class=content _v-586f5c65=""> <div class=sta-line _v-586f5c65=""> <label class=stit _v-586f5c65="">订单状态：</label> <label class=stat _v-586f5c65="">{{ data.order.statext }}</label> </div> <div class=sta-line _v-586f5c65=""> 支付方式：<label v-if="data.order.paytype==1" _v-586f5c65="">微信支付</label><label v-else="" _v-586f5c65="">支付宝支付</label> </div> <div class=sta-line _v-586f5c65=""> 订单总计：<label _v-586f5c65="">￥{{ data.order.money }} （含运费 ￥{{ data.order.freight }}）</label> </div> <div class=sta-line _v-586f5c65=""> 订单编号：<label _v-586f5c65="">{{ data.order.orderid }}</label> </div> </div> </div> <div class="bl-info-box express" _v-586f5c65=""> <div class=ex-line style=line-height:1.6rem @click=jumpExpress _v-586f5c65=""> <div class=icon _v-586f5c65=""> <img src='+a(481)+' _v-586f5c65=""> </div> <div class=content _v-586f5c65=""> <label _v-586f5c65="">配送方式：</label> <label class=type v-if="data.order.stype==\'express\'" _v-586f5c65="">快递配送</label> <label class=type v-else="" _v-586f5c65="">到店自提</label> </div> <div class=arrow _v-586f5c65=""> <img src='+a(216)+' _v-586f5c65=""> </div> </div> <div class=ex-line _v-586f5c65=""> <div class=icon _v-586f5c65=""></div> <div class="content address" _v-586f5c65=""> <div class=aname _v-586f5c65="">{{ data.order.person }} {{ data.order.tel }}</div> <div class=astr _v-586f5c65=""> {{ data.order.address }} </div> </div> </div> </div> <balance-list :list=data.products :show-top=true :show-btm=false _v-586f5c65=""></balance-list> <div class=comment v-if="data.order.pay==1&amp;&amp;data.order.receive==1" _v-586f5c65=""> <a v-if="data.order.comment==1" v-link="{name:\'comment-detail\',params:{oid:this.$route.params.oid}}" _v-586f5c65="">查看评价</a> <a v-else="" v-link="{name:\'comment-submit\',params:{oid:this.$route.params.oid}}" _v-586f5c65="">我要评价</a> </div> <balance-price :sum=data.order.sum :coupon=data.order.coupon :score=data.order.score :freight=data.order.freight :show-sum=true _v-586f5c65=""></balance-price> </div> <separator :set-height=4.5 v-show="data.order.status!=-1" _v-586f5c65=""></separator> <bottom-confirm :fixed=true :disabled=btnStatus :pay=data.order.pay :send=data.order.send :receive=data.order.receive v-show="data.order.status!=-1" _v-586f5c65=""></bottom-confirm> <toast type=text :show.sync=toastShow _v-586f5c65="">{{ toastMessage }}</toast> <confirm :show.sync=confirmShow :title=confirmTitle confirm-text=确定 cancel-text=取消 @on-confirm=confirmClcik @on-cancel=cancelClick _v-586f5c65=""><p style=text-align:center _v-586f5c65="">{{ confirmText }}</p></confirm> <loading :show=loadingShow :text=loadingMessage _v-586f5c65=""></loading> '},480:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD4klEQVR4Xu2bUXLTMBBAV1b+oSegnIB6sv6mPQH0BKQnID0B4QTACUhOQHKChm8r4/YEwAlI/mMvszNyJnETyU5tKUylz0SWtE+7q/VqLeCZN/HM5YcAIGiAQwJZlr3M8/wdALwHgAsAONfT/waAewCYSilncRwvXS3LmQkopT4AwFcAeGkRjoUfIuLEBQQnAJRS3wFg0FCgMSLeNHymcfdWAWRZdl4UBe/0phERqzqr/HZbERGr/Fz/eCmE4H4vKv2mQgjut2lRFE3iOGaTaaW1CiBNUxbkzrKyiZRyWLVz7R/YRHYAVscioqskSUpwT4bgGsAMEavasCOEUmoKAOwo97b/GkCdxSulGNCPkwSgPTkv0LiL5eLrCGzT4ZpmVQ7D2jNtcoLUMgFtn7wrl7YFVxzgk+21IYBy+rmU8rpOPGEFwMKv1+s77aWbyA8eNGD79Lnv9XpXNghWAGmajoQQnyqSz/QxtvOzEIIju40X7wjAhIgeHYN6g3acJxF9TpJkZNo1IwCt+n+3BlhJKS/jON45m8v/q+raBQDTmFmWXeR5zkfkJp6QUp6ZtMAIoOqRhRA3/X5/fIiobwC8rsViMSAijjzLdo2I7Bz3NiOAqvrbaJ4CgKrW2sygEQBEtPWvEwk2cqTHRIJKKdo6io1+wCbQjgMMAIIGmE2A3wbX63XT195GJtHr9ca2t0FvJtBIkg47BwC+nGCHm9po6KABQQM8xQGN9LTDzl5MgEPQoig+dijXZugoir6ZXnC8AEjTNDsmZ3AksDkiXh161gsApRRfaFTT2kfKZ31shYgHL1i8ANCvoZzW7hrCSggxNL2WewFg3TOHHQKAEAeEOMBPQsShmRun8uIDdEb2iwsIUsrbQ5lpnt8LAKUUp89txQ9t8Vki4tmpBUJ8WfGqLQkt4/xBxLK85lFXLxqgTWBERJ1qgRBiKaUcnZwJONr5WtN40YBaK3PUKQAIkWCIBN1HgntuZTuzeNsttRcfsD1pZ5JvDWy6p/QCIE3TuRDirQvhiehnkiQH65W8ANBJ0UFRFJ0GQlEULaMo4vvBgwXVXgC42Pm6cwQAIQ7oKA6QUr623c3XVdOu+nGNQp7nv8rxn1QjtKdK7Lbf73Pq+2TbYrEYEtEmMWMr1atTJ8jv+WWuf0lE122Wq7dJUlepcUlveRIZL1B47mMrRfnMb61mvw0IRMRxwU5sYFP/WgB0jo0rQ9+0sVCHYzwgIn+FYmxWDeCndfEhV4ge/JDBNpHj/2dSyoGtULq2BpSL1zbGVWBM9tQ04oE/vSOicRMfVUsDHO+e0+kCAKe4T3CyZ68B/wCcPXVu6eIu0AAAAABJRU5ErkJggg=="},481:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEuElEQVR4XuWb3VHcMBCApVMBkApyVBCM5WeggkAFQAVABYEKEiqAVJBQQeDZMr5UkKOCwDtnZXZGJuZyZ++u1r6biWbuCf3tt6vd1cpo9Z83PaT8Dw8Pu1VVjbXW46qqNrXW22H9qdZ66r1/Go1Gk52dnfuh9tUrgLIsN2ez2Uel1EH4UeS6U0rdGGNukyR5ogyk9O0FQFmWoOEj7/2ZUmqTsqElfQHEZZIkU4G53kwhDqAoik+Cgr/drNYXo9HoStIixACUZbn98vJy3TjX0sqq55saYw6TJJlILCACoCiKY+/9ZyFzR8mltT5J0/QG1bmlUzSAIPx17EY447XWF2maXnLG1mOiAKxS+FcBtD5P0/QLFwIbgHMOQts37sKS42KOAwsAhLnZbFYOeeY7gD0ZY/Y5jpEFwDn3Qym1J6nF2Lm895MsyxLqPGQA62T688Jqhj/gAPillBpTSQ/UH47CFiVRIgEQ8PrPSqnv8DPGTOrUFpKoqqr2qqo60FrvxsCiWgEJQJ7nZUSmd2uMOevK5/M839NaQ1j7wAQxtdZuYceiAQTPD+ZPbtQwFW6RkOXBTZLcjDEJNiKgARRFcRbSXdKGqCZZTx4gwJWYbAne+8ssyy4wG0UDcM7B2SVpxHt/n2UZO1xyrY6yLgUA2ftTTHGZtpxzcBSOMNps9rHWomRDdYKJnXOeuImf1tq65EUc+rc7RIiQdZLmCOGws4CCAhA8M2R/lHZlrYWKUHRzzoEg7ykTee/3sywDH9LaegPAdX6Ldpvn+R01P1g5AOwGujQEf185AM45pISiLggrB8B0gpI+4Df16i3qBAMAKEJSkhJSStoSBjmFl2drLaocj3KCAQDk56dd5jr390NrLSRQ7Oacg6oTQKC0W2stagwFAEcTUMKGvJz1ssMMv4oSgdAAghWAIBsUVcDzlrX2hDhGxZTdjDHvsNCpAFhpKRVCiDpg+pzCC9r8QSkkAFyThIWgZqeUOm/LzuAGWFXVaczTGvXqTQIQjgE5LW2afwBxZ4x5dY7wZB6KrOBnUN57yZF6tNaSrIYMQKAsRnUH6P6c5IsMIMIZogVhdnw2xoyxzq9egwUgz/MLrfUn5kZ7GcbRPtkJ1jsP5SrwBdSQ2IvwSimW9tkAYOA6WQFX+1EAghVAaCMVKnowAbb2owDA4HWICDHajwYQIgL1lihpBOS4P784Kwo0J4nJDmNJULO+RetFAwhWQH4ziBWeUvtvW0sEQLi5wVEYLCxKvDmI+ICa7sBhUazcJmIBNQRO/Z5xFB6NMdvUlHfZOqIABnKI0WW2JgxRAMEhcmqHWEMgFTswk4oD6PGeABkfmH7nex9G8KjbYNcCfXxIRSl0du2v1yPQcIhiuYFUzO8tEVo0seBR6MX0ez0CDSvgvCW84dmX6Q8CIEQFbikdKslRn9hgfIF4FJhfNKJuEHXPxwgvmgq3LchMkEQTnkEywTYIzjlKgvTVWnuM1WJMv96PQHNzzjlM8UQ01++CMygAzLVZ6prbJfhgUWB+I211xL5D3qCJUIc/+Cc0DhHy1gbAgu+ABwl5awMANhK+AYAPGTckP6nDnv2V+YDmBsEfwHN4zL+9UQWe7/8H8t5jX5OnE3sAAAAASUVORK5CYII="}});
webpackJsonp([40],{249:function(e,c,i){var s,a;i(250),s=i(251),a=i(252),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default),a&&(("function"==typeof e.exports?e.exports.options:e.exports).template=a)},250:function(e,c){},251:function(e,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={props:{},data:function(){return{isShow:!1}},methods:{changeShow:function(){var e=this.showing.indexOf(this.obj.id);e<0?this.showing.push(this.obj.id):this.showing.splice(e,1)},toggle:function(){this.isShow=!this.isShow}},computed:{className:function(){return this.showing.indexOf(this.obj.id)>=0},disOff:function(){var e=0;return 2!=this.obj.type&&4!=this.obj.type||(e=10*this.obj.discount.toFixed(2),e%10===0&&(e/=10)),e}}}},252:function(e,c){e.exports=' <div class=card-box _v-feac07ce=""> <div class=top _v-feac07ce=""> <div class=divider _v-feac07ce=""> <div class=shotcut _v-feac07ce=""></div> </div> <div class=divider _v-feac07ce=""> <label class=unit _v-feac07ce="">￥</label> <label class=number _v-feac07ce="">30</label> </div> <div class="divider nowrap" _v-feac07ce=""> <label class=mes _v-feac07ce="">满300元使用</label> <label class=mes _v-feac07ce="">无门槛</label> <label class=mes _v-feac07ce="">剩余天数<span _v-feac07ce="">23</span>天</label> </div> </div> <div class=wave _v-feac07ce=""></div> <div class=btm _v-feac07ce=""> <div class="con detail" @click=toggle() _v-feac07ce=""> <a _v-feac07ce=""> 详细信息<div class=arrow _v-feac07ce=""></div> </a> </div> <div class="con deadline" _v-feac07ce="">2016-07-13 至 2016-08-13</div> <div class=addition v-show=isShow _v-feac07ce=""> <div class=line _v-feac07ce=""> <div class=title _v-feac07ce="">品牌信息：</div> <div class=content _v-feac07ce="">适用于绿秧田购物商城</div> </div> <div class=line _v-feac07ce=""> <div class=title _v-feac07ce="">限定平台：</div> <div class=content _v-feac07ce="">限绿秧田购物商城微信版、绿秧田购物商城网页版</div> </div> <div class=line _v-feac07ce=""> <div class=title _v-feac07ce="">限定城市：</div> <div class=content _v-feac07ce="">所有城市通用</div> </div> <div class=line _v-feac07ce=""> <div class=title _v-feac07ce="">限定商品:</div> <div class=content _v-feac07ce="">部分限时抢购商品及特价商品不可用</div> </div> </div> </div> </div> '}});
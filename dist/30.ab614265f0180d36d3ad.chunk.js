webpackJsonp([30],{576:function(t,e,i){var s,a;i(577),s=i(578),a=i(579),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},577:function(t,e){},578:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={vuex:{data:function(){return{order_Class:{cancel_Order:"取消订单",to_Pay:"去付款",view_Logistics:"查看物流",Confirm_receipt:"确认收货",delete_Order:"删除订单",customer_Reviews:"客户评价",buy_Again:"再次购买"}}},method:{cancelOrder:function(){return!!this.disabled||(this.$dispatch("orderCancel"),void console.log(1))}}}}},579:function(t,e,i){t.exports=' <div style="width:100%;height:100%;background: #fff"> <div class=activity-body id=activity> <div style="margin:0px 10px"> <a href=javascript:void(0); class=activity-text v-link="{name:\'activity-event\'}"> <div class=activity-img> <img src='+i(580)+' alt="" style=width:100% /> </div> <div style="position: relative"> <span class=act-title>新人注册好礼，我和绿秧田约惠</span> <span class=activity-data>2017-1-1</span> <div class=arrow></div> </div> </a> </div> </div> </div> '},580:function(t,e,i){t.exports=i.p+"assets/5c1c2548.banner_zhuce.png"}});
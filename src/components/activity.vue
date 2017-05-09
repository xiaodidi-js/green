<style type="text/css">
    .activity-body{
        padding-top:10px;
        width:100%;
    }

    .activity-body .activity-text{
        font-size: 1.5rem;
        line-height: 2rem;
        color: #333;
        text-align: left;
        border-bottom:1px solid #ccc;
        display:block;
        padding-bottom:35px;
    }

    .activity-text .arrow{
        width: 1rem;
        height: 18px;
        background: url('../images/arrow.png') no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        right: 0px;
        top: 6px;
    }

    .activity-body .activity-text .act-title{
        width:18rem;
        height:30px;
        line-height:30px;
        float:left;
        display:block;
        font-size:13px;
        overflow:hidden;
        text-overflow:ellipsis;
        color:#000;
    }

    .activity-data{
        float:right;
        line-height:30px;
        margin-right:23px;
        color:#666;
    }

</style>

<template>
    <div style="width:100%;height:100%;background: #fff;">
        <div class="activity-body" id="activity">
            <div style="margin:0px 10px;">
                <a href="javascript:void(0);" class="activity-text" v-link="{name:'activity-event'}">
                    <div class="activity-img">
                        <img src="../images/banner_zhuce.png" alt="" style="width:100%;" />
                    </div>
                    <div style="position: relative">
                        <span class="act-title">新人注册好礼，我和绿秧田约惠</span>
                        <span class="activity-data">2017-1-1</span>
                        <div class="arrow"></div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">

    export default {
        vuex: {
            data() {
                return {
                    order_Class: {
                        cancel_Order: '取消订单',
                        to_Pay: '去付款',
                        view_Logistics: '查看物流',
                        Confirm_receipt: '确认收货',
                        delete_Order: '删除订单',
                        customer_Reviews: '客户评价',
                        buy_Again: '再次购买'
                    }
                }
            },
            method: {
                cancelOrder: function() {
                    if(this.disabled){
                        return true;
                    }
                    this.$dispatch('orderCancel');
                    console.log(1);
                }
            }
        }
    }
</script>
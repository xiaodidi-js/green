<!-- 待付款 开始  -->

<style>
    .wrapper{
        width:100%;
        padding:0;
        font-size:0;
    }

    .wrap-top {
        margin:50px 0px 57px 0px;
    }

    .card-box{
        width: 92%;
        height: auto;
        margin: 2% 2%;
        background-color: #fff;
        display: block;
        font-size: 0;
        color: #333;
        box-shadow: 1px 1px 2px #e2e2e2;

    }

    .box-chonse {
        border-radius: 8px;
        padding:7px;
    }

    .card-box .top-line,.card-box .mid-line{
        border-bottom:#F2F2F2 solid 1px;
    }

    .card-box .top-line,.card-box .btm-line{
        height:auto;
        line-height:2.5rem;
    }

    .card-box .top-line,.card-box .mid-line,.card-box .btm-line{
        width:100%;
        max-width:100%;
        font-size:0;
        overflow:hidden;
    }

    .card-box .top-line div,.card-box .btm-line div{
        display:inline-block;
        font-size:1.4rem;
        color:#4D4D4D;
        width:50%;
    }

    .card-box .top-line div.date,.card-box .btm-line div.money{
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        text-align:left;
    }

    .card-box .btm-line div.money{
        width:100%;
        vertical-align:middle;
        padding-top:0.6rem;
    }

    .card-box .btm-line div.button{
        width:100%;
        vertical-align:middle;
        padding-top:0.6rem;
    }

    .card-box .btm-line div.money label{
        color:#F9AD0C;
    }

    .card-box .top-line div.status,.card-box .btm-line div.button{
        color:#81c429;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        text-align:right;
    }

    .card-box .btm-line div.button{
        font-size:0;
    }

    .card-box .mid-line .imgs{
        display:inline-block;
        vertical-align:middle;
        width:20%;
        padding-top:20%;
        margin:2% 1% 2% 0%;
        background-color:#eee;
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
    }

    .card-box .mid-line .imgs:last-child{
        margin-right:0%;
    }

    .card-box .mid-line{
        position:relative;
    }

    .card-box .mid-line .arrow{
        width:3.5%;
        height:100%;
        background-repeat:no-repeat;
        background-position:center;
        background-size:contain;
        background-image:url('../images/arrow.png');
        position:absolute;
        top:0rem;
        right:1rem;
    }

    .manage-btn{
        display:inline-block;
        vertical-align:middle;
        font-size:1.4rem;
        color:#81c429;
        line-height:1.6rem;
        padding:0.5rem 0.6rem;
        border:#81c429 solid 1px;
        border-radius:0.3rem;
        margin-right:0.5rem;
        float:left;
    }

    .manage-btn:last-child{
        margin-right:0rem;
    }

    .manage-btn:active{
        background: #81c429;
        color:#fff;
    }
</style>

<template>
    <div class="wrapper wrap-top">
        <div class="card-box box-chonse" v-for="item in orders">
            <div class="top-line">
                <div class="date">{{ item.createtime }}</div>
                <div class="status" v-if="item.pay==0&&item.send==0&&item.receive==0&&item.status==0">待付款</div>
                <div class="status" v-if="item.pay==1&&item.send==0&&item.receive==0&&item.status==0">待发货</div>
                <div class="status" v-if="item.pay==1&&item.send==1&&item.receive==0&&item.status==0">待收货</div>
                <div class="status" v-if="item.reject==0&&item.status==1">交易完成</div>
                <div class="status" v-if="item.reject==0&&item.status==-1">已取消</div>
                <div class="status" v-if="item.reject==0&&item.status==-2">申请售后</div>
                <div class="status" v-if="item.reject==0&&item.status==-3">已关闭</div>
                <div class="status" v-if="item.reject==1">已退货</div>
            </div>
            <div class="mid-line" v-link="{name:'order-detail',params:{oid:item.id}}">
                <div class="imgs" v-for="img in item.imgs" v-lazy:background-image="img"></div>
                <div class="arrow"></div>
            </div>
            <div class="btm-line">
                <div class="money">
                    总金额：<label>¥{{ item.price }}</label>
                </div>
                <div class="button">
                    <a class="manage-btn" id="cancel-btn"
                       v-if="item.pay==0&&item.send==0&&item.receive==0&&item.status==0"
                       :class="{'disabled':disabled}"
                       @click="cancelOrder()">取消订单</a>

                    <a class="manage-btn" id="detail-btn"
                       v-if="item.pay==0&&item.send==0&&item.receive==0&&item.status==0"
                       v-link="{name:'order-detail',params:{oid:item.id}}">去付款</a>

                    <a class="manage-btn"
                       v-if="item.pay==1&&item.send==1&&item.receive==0&&item.status==0"
                       @click="clickExpress(item.scid,item.snum)">查看快递</a>

                    <a class="manage-btn"
                       v-if="item.pay==1&&item.send==1&&item.receive==0&&item.status==0"
                       @click="clickConfirm()">确认收货</a>

                    <a class="manage-btn"
                       v-if="item.pay==1&&(item.send==1||item.send==0)&&item.reject==0 || item.status==1"
                       @click="buyAgain(item.id)">再次购买</a>
                </div>
            </div>
            <!-- 确定弹框 -->
            <confirm :show.sync="confirmShow" :title="confirmTitle"
                    confirm-text="确定"
                    cancel-text="取消"
                    @on-confirm="confirmClcik(item.id)"
                    @on-cancel="cancelClick">
                <p style="text-align:center;">{{ confirmText }}</p>
            </confirm>
        </div>
    </div>
    <!-- toast提示框 -->
    <toast :show.sync="toastShow" type="text">{{ toastMessage }}</toast>

    <!-- loading加载框 -->
    <loading :show="loadingShow" :text="loadingMessage"></loading>

</template>

<script>
    import Loading from 'vux/src/components/loading'
    import { setCartAgain,clearAll } from 'vxpath/actions'
    import Toast from 'vux/src/components/toast'
    import Swiper from 'vux/src/components/swiper'
    import SwiperItem from 'vux/src/components/swiper-item'
    import Confirm from 'vux/src/components/confirm'
    import ElButton from "../../node_modules/element-ui/packages/button/src/button";

    export default{
        vuex: {
            actions: {
                setCartAgain,
                clearAll
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            orders: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            ElButton, Loading,
            Toast,
            Swiper,
            SwiperItem,
            Confirm
        },
        ready() {

        },
        data() {
            return {
                loadingShow:false,
                loadingMessage:'',
                data: {
                    order:{},
                },
                confirmTitle: '',
                confirmText: '',
                btnStatus:false,
                confirmShow: false,
                clickType:0,
            }
        },
        methods: {
            confirmClcik: function (id) {
                let ustore = sessionStorage.getItem('userInfo') || localStorage.getItem('userInfo');
                ustore = JSON.parse(ustore);
                switch(this.clickType) {
                    case 1:
                        let pdata = {uid:ustore.id,token:ustore.token,oid:id};
                        this.$http.put(localStorage.apiDomain + 'public/index/user/orderoperation',pdata).then((response)=>{
                            if(response.data.status === 1) {
                                console.log(response.data);
                            }else if(response.data.status===-1) {
                                let context = this;
                                setTimeout(function(){
                                    context.clearAll();
                                    sessionStorage.removeItem('userInfo');
                                    localStorage.removeItem('userInfo');
                                    context.$router.go({name:'login'});
                                },800);
                            }
                        },(response)=>{
                            this.loadingShow = false;
                            this.btnStatus = false;
                            this.toastMessage = '网络开小差了~';
                            this.toastShow = true;
                        });
                    case 2:

                        this.$http.delete(localStorage.apiDomain + 'public/index/user/getsubmitorder/uid/' + ustore.id + '/token/' + ustore.token + '/oid/' + id).then((response)=>{
                            if(response.data.status === 1) {
                                console.log(response.data);
                                this.orders.statext = '用户取消';
                                this.orders.status = -1;
                            }else if(response.data.status === -1) {
                                console.log(5);
                                this.btnStatus = false;
                                this.toastMessage = response.data.info;
                                this.toastShow = true;
                                let context = this;
                                setTimeout(function(){
                                    context.clearAll();
                                    sessionStorage.removeItem('userInfo');
                                    localStorage.removeItem('userInfo');
                                    context.$router.go({name:'login'});
                                },800);
                            }else{
                                console.log(6);
                                this.btnStatus = false;
                                this.toastMessage = response.data.info;
                                this.toastShow = true;
                            }
                        },(response)=>{
                            this.toastMessage = '网络开小差了~';
                            this.toastShow = true;
                        });
                }
            },
            clickConfirm: function() {
                this.clickType = 1;
                this.confirmTitle = '确认收货';
                this.confirmText = '请在收到货物后才确认收货,确认?';
                this.btnStatus = true;
                this.confirmShow = true;
            },
            buyAgain: function(oid){
                this.btnStatus = true;
                this.loadingMessage = '请稍候...';
                this.loadingShow = true;
                let ustore = sessionStorage.getItem('userInfo') || localStorage.getItem('userInfo');
                ustore = JSON.parse(ustore);
                this.$http.get(localStorage.apiDomain+'public/index/user/orderoperation/uid/'+ustore.id+'/token/'+ustore.token+'/oid/'+oid).then((response)=>{
                    this.loadingShow = false;
                    this.btnStatus = false;
                    if(response.data.status===1){
                        this.setCartAgain(response.data.list);
                        this.$router.go({name:'cart'});
                    }else if(response.data.status===-1){
                        this.toastMessage = response.data.info;
                        this.toastShow = true;
                        let context = this;
                        setTimeout(function(){
                            context.clearAll();
                            sessionStorage.removeItem('userInfo');
                            localStorage.removeItem('userInfo');
                            context.$router.go({name:'login'});
                        },800);
                    }else{
                        this.toastMessage = response.data.info;
                        this.toastShow = true;
                    }
                },(response)=>{
                    this.btnStatus = false;
                    this.toastMessage = '网络开小差了~';
                    this.toastShow = true;
                });
            },
            clickExpress: function(scid,snum){
                location.href='http://www.kuaidi100.com/chaxun?com='+scid+'&nu='+snum;
            },
            cancelOrder: function() {
                this.clickType = 2;
                this.confirmTitle = '取消订单';
                this.confirmText = '确定取消该订单吗,确认?';
                this.btnStatus = true;
                this.confirmShow = true;
            },
            cancelClick: function() {
                this.btnStatus = false;
                this.clickType = 0;
                this.confirmTitle = '';
                this.confirmText = '';
            }
        }
    }
</script>
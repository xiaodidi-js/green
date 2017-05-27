<style type="text/css">
    .classif {
        width:100%;
        height:4rem;
        background: #fff;
        font-size:14px;
        position: fixed;
        top:46px;
        left:0px;
    }

    .classif .list .tap-type {
        float: left;
        width: 20%;
        height: 100%;
        line-height: 3.7rem;
        text-align: center;
    }

    .classif .list .active {
        border-bottom:3px solid #81c429;
    }

</style>

<template>
    <div class="classif">
        <div class="list licon fixed justify">
            <div class="tap-type" :class="{'active':dtype == 0}" @click="getData(0)">
                <div class="icon unpay icon-ui icon-ui-fukuan"></div>
                <div class="title">全部</div>
            </div>
            <div class="tap-type" :class="{'active':dtype == 1}" @click="getData(1)">
                <div class="title">待付款</div>
            </div>
            <div class="tap-type" :class="{'active':dtype == 2}" @click="getData(2)">
                <div class="title">待发货</div>
            </div>
            <div class="tap-type" :class="{'active':dtype == 3}" @click="getData(3)">
                <div class="title">待收货</div>
            </div>
            <div class="tap-type" :class="{'active':dtype == 4}" @click="getData(4)">
                <div class="title">评价</div>
                <!--<badge :text="count.service.toString()" class="my-badge" v-show="count.service > 0"></badge>-->
            </div>
        </div>
    </div>

    <payment :orders="data"></payment>

</template>


<script>

    import payment from 'components/order-payment'

    export default{
        vuex: {
            actions: {

            }
        },
        props: {

        },
        components: {
            payment
        },
        data() {
            return {
                dtype:0,
                data:[],
                count:{
                    unpay: 0,
                    unsend: 0,
                    unreceive: 0,
                    uncomment: 0,
                    service: 0
                }
            }
        },
        ready() {
            this.getData(0);
        },
        methods: {
            getData: function(type) {
                if(this.dtype == type && this.data){
                    return true;
                }
                this.dtype = type;
                console.log(type);
                let ustore = sessionStorage.getItem('userInfo') || localStorage.getItem('userInfo');
                ustore = JSON.parse(ustore);
                this.$http.get(localStorage.apiDomain + 'public/index/user/orderselection/uid/'+ustore.id+'/token/'+ustore.token+'/type/'+type).then((response)=>{
                    if(response.data.status===1){
                        document.body.scrollTop = 0;
                        this.count = response.data.count;
                        this.data = response.data.list;
                        console.log(this.count);
                    }else if(response.data.status === -1){
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
                    this.toastMessage = '网络开小差了~';
                    this.toastShow = true;
                });
            }
        }
    }
</script>
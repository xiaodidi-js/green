<style>
    .shopcar_youlike{
        width: 100%;
        height: auto;
        box-sizing:border-box;
        padding:0px 2%;
        padding-bottom: 60px;
    }
    .youlike_title{
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        font-size: 1.6rem;
        color: #4D4D4D;
        margin-bottom: 0.9rem;
    }
    .youlike_list{
        width: 100%;
        display: flex;
    }
    .youlike_list ul{
        width: 100%;
        display: flex;
    }
    .youlike_list ul li{
        width: 33.333%;
        height:100%;
        background-color:#fff;
    }
    .youlike_list ul li:nth-of-type(1),
    .youlike_list ul li:nth-of-type(2){
        margin-right:2%;
    }
    .list_pirture img{
        width: 100%;
        height: 8.556rem;
    }
    .list_value{
        width: 100%;
        height: 30px;
        line-height: 14px;
        margin-top: 0.2rem;
        box-sizing: border-box;
        padding: 0px 5px;
        font-size: 12px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align:left;
    }
    .list_footer{
        width: 100%;
        height:2.806rem;
        box-sizing:border-box;
        padding:0px 8px;
    }
    .footer_money{
        width: 50%;
        height: 2.806rem;
        font-size: 12px;
        color: #F9B21C;
        line-height: 3.22rem;
        float: left;
    }
    .footer_shopcar{
        width: 50%;
        height: 2.806rem;
        line-height:2.806rem;
        float: right;
        text-align:right;
    }
    .footer_shopcar{
        margin-top: 5px;
    }
    .footer_shopcar img{
        width: 2.8rem;
        height: 2.3rem;
    }
    @media screen and (max-width: 320px){
        .list_value{margin-top:0.1rem;}
    }
</style>


<template>
    <!-- <猜你喜欢> -->
    <div class="shopcar_youlike">
        <div class="youlike_title">猜你喜欢</div>
        <scroller v-ref:scroller lock-y :scrollbar-x="false">
            <div class="youlike_list">
                <ul>
                    <li v-for="item in likedate" v-link="{name:'detail',params:{pid:item.id}}" >
                        <div class="list_pirture">
                            <img :src="item.shotcut"/>
                        </div>
                        <div class="list_value">
                            {{ item.name }}
                      </div>
                        <div class="list_footer">
                            <div class="footer_money">￥{{ item.price }}</div>
                            <div class="footer_shopcar">
                                <img src="../images/shopcar_youlike.png"/>
                            </div>
                        </div>
                    </li>
                    <div style="clear:both;"></div>
                </ul>
            </div>
        </scroller>

    </div>
    <!-- <猜你喜欢> -->
</template>

<script>

    import Scroller from 'vux/src/components/scroller'

    export default{
        props: {
            info: {
                type: Array,
                default() {
                    return []
                }
            },
            cardWidth: {
                type: Number,
                default: 0
            },
            likedate: []
        },
        components: {
            Scroller
        },
        data() {
            return {

            }
        },
        ready() {
            var _this = this;
            this.$http.get(localStorage.apiDomain+'public/index/user/cainixihuan').then((response)=>{
                _this.likedate = response.data.tuijian_shop;
                console.log(response.data.tuijian_shop);
            },(response)=>{
                this.toastMessage = '网络开小差了~';
                this.toastShow = true;
            })
        }
    }
</script>
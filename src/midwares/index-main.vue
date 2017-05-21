<style scoped>
	.goto_top {
		width:3.7rem;
		height:3.7rem;
		background: url(../images/img13.png) no-repeat;
		background-size: 100%;
		position: fixed;
		right:10px;
		bottom: 6.5rem;
		z-index:1000;
		display:none;
	}
</style>

<template>

	<banners :testarr="data.index_data"></banners>
	<div class="sub-content">
		<!-- 显示抢购 -->
		<!--<card-column :columns="maincolumns" keep-alive></card-column>-->
		<!-- 热销产品排行榜 -->
		<card-rectangle :testarr="data.index_data"></card-rectangle>
		<!-- toast提示框 -->
		<toast :show.sync="toastShow" type="text">{{ toastMessage }}</toast>
	</div>
	<div class="goto_top"></div>

</template>

<script>
	import CardColumn from 'components/card-column'
    import banners from 'components/banners'
	import CardRectangle from 'components/card-rectangle'
	import CardImage from 'components/card-image'
	import Toast from 'vux/src/components/toast'
    import Swiper from 'vux/src/components/swiper'
    import { myPage } from 'vxpath/actions'

	export default{
        vuex: {
            actions: {
                myPage
            }
        },
		components: {
			CardColumn,
			CardRectangle,
			CardImage,
			Toast,
            Swiper,
            banners
		},
		data() {
			return {
				toastMessage:'',
				toastShow:false,
				data: {
					articles: {title:'',list:[]},
					hotproducts: {title:'',list:[]},
					maincolumns: []
				},
                maincolumns:[]
			}
		},
		route: {

		},
        filters: {
            timeline: function (value) {
                let d = new Date(parseInt(value) * 1000);
                var hours = d.getHours();
                var minutes = d.getMinutes();
                var seconds = d.getSeconds();
                for(let i = 0; i < this.maincolumns.length; i++) {
                    console.log(this.maincolumns[i]);
				}
                return (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes) + ":" + (seconds > 9 ? seconds : '0' + seconds)
            }
        },
        mounted() {
			if(this.data.length == 0) {
                this.loadData();
			}
		},
		ready() {
			this.indexMessage();
            this.timeline();
            // 按钮淡入淡出
            $(window).scroll(function(){
                if($(window).scrollTop() >= 350){
                    $(".goto_top").fadeIn(500);
                } else {
                    $(".goto_top").stop(true,true).fadeOut(500);
                }
            });

            $(".goto_top").click(function(){
                $("html,body").animate({
                    scrollTop:0
                },200);
            });

		},
        methods: {
		    indexMessage: function() {
                this.$http.get(localStorage.apiDomain+'public/index/index').then((response)=>{
                    this.data = response.data;
                    var data = this.data;
                    for (var i = 0; i < data.index_data.length; i++) {
                        if(data.index_data[i].type == 4){
                            var l = data.index_data[i].arr.length;
                            for (var k = 0; k < l; k++) {
                                data.index_data[i].arr[k].img = data.index_data[i].arr[k].url;
                                data.index_data[i].arr[k].url = data.index_data[i].arr[k].htmlurl;
                            }
                        }
                    }
                },(response)=>{
                    this.toastMessage = '网络开小差了~';
                    this.toastShow = true;
                });
			},
            timeline: function() {
                let ustore = sessionStorage.getItem('userInfo') || localStorage.getItem('userInfo');
                ustore = JSON.parse(ustore);
                var _this = this;
                this.$http.get(localStorage.apiDomain+'public/index/sale/SaleTimeSolt/uid').then((response) => {
                    if(response.data.status===1) {
                        this.maincolumns = response.data.SaleTimeSolt;
                        console.log(this.maincolumns);
                    } else if(response.data.status===-1) {
                        this.toastMessage = response.data.info;
                        this.toastShow = true;
                        let context = this;
                        setTimeout(function(){
                            context.clearAll();
                            sessionStorage.removeItem('userInfo');
                            localStorage.removeItem('userInfo');
                            context.$router.go({name:'login'});
                        },800);
                    } else {
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
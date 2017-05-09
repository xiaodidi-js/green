<style scoped>
	
</style>

<template>

	<banners :testarr="data.index_data"></banners>

	<div class="sub-content">
		<!-- 显示抢购 -->
		<!--<card-column :columns="maincolumns" keep-alive></card-column>-->
		<!-- 热销产品排行榜 -->
		<card-rectangle :testarr="data.index_data"></card-rectangle>
		<!-- 精选文章列表 -->
		<!--<card-image :articles="data.articles"></card-image>-->
		<!-- toast提示框 -->
		<toast :show.sync="toastShow" type="text">{{ toastMessage }}</toast>
	</div>
</template>

<script>
	import CardColumn from 'components/card-column'
    import banners from 'components/banners'
	import CardRectangle from 'components/card-rectangle'
	import CardImage from 'components/card-image'
	import Toast from 'vux/src/components/toast'
    import Swiper from 'vux/src/components/swiper'

	export default{
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
		ready() {
            this.$http.get(localStorage.apiDomain+'public/index/index').then((response)=>{
                this.data = response.data;
                var data = this.data;
            console.log(response.data)
				for (var i = 0; i < data.index_data.length; i++){
                    console.log(data.index_data[i].type)
                    if(data.index_data[i].type == 4){
				        var l = data.index_data[i].arr.length
                        for (var k = 0; k < l; k++){
                            data.index_data[i].arr[k].img = data.index_data[i].arr[k].url
                            data.index_data[i].arr[k].url = data.index_data[i].arr[k].htmlurl
						}
                    }
				}
            },(response)=>{
                this.toastMessage = '网络开小差了~';
                this.toastShow = true;
            });
		},
        methods: {

		}
	}
</script>
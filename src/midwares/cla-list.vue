<style scoped>
	.fixed-tab{
		position:fixed;
		top:46px;
		left:0;
		width:100%;
		z-index:100;
	}
</style>
<template>
	<div class="sub-content">
		<!-- 头部 -->
		<header-search :fixed="true"></header-search>
		<!-- tab导航栏 -->
		<tab default-color="#333" active-color="#81c429" :line-width="2" class="fixed-tab">
			<tab-item :selected="column === 'hot'" @click="changeColumn('hot')">热卖</tab-item>
			<tab-item :selected="column === 'new'" @click="changeColumn('new')">新品</tab-item>
			<tab-item :selected="column === 'price'" @click="changeColumn('price')">价格</tab-item>
		</tab>
		<separator :set-height="90" unit="px"></separator>
		<!-- 分类列表 -->
		<card-square :info="data" :no-padding="true"></card-square>
		<!-- toast提示框 -->
		<toast :show.sync="toastShow" type="text">{{ toastMessage }}</toast>
	</div>
</template>
<script>

    import HeaderSearch from 'components/header-search'
    import Tab from 'vux/src/components/tab/tab.vue'
    import TabItem from 'vux/src/components/tab/tab-item'
    import CardSquare from 'components/card-square'
    import Toast from 'vux/src/components/toast'
    import Separator from 'components/separator'
    export default {
        data() {
            return {
                toastMessage:'',
                toastShow:false,
                column:'hot',
                data:{
                    title: '',
                    list: []
                }
            }
        },
        components: {
            HeaderSearch,
            Tab,
            TabItem,
            CardSquare,
            Toast,
            Separator
        },
        route: {

        },
        ready() {
            this.getData('');
        },
        methods: {
            getData: function(sk){
                let url = localStorage.apiDomain+'public/index/index/classifylist/cid/'+this.$route.params.cid+'/action/'+this.column;
                if(sk.length > 0) {
                    url += '/search/'+sk;
                }
                this.$http.get(url).then((response)=>{
                    this.data.list = response.data.list;
                },(response)=>{
                    this.toastMessage = "网络开小差啦~";
                    this.toastShow = true;
                });
            },
            changeColumn: function(col) {
                if(this.column === col) {
                    return false;
                }
                this.column = col;
                this.getData('');
            }
        },
        events: {
            goSearch: function(skey){
                this.getData(skey);
            }
        }
    }
</script>

<!--  tuijian -->
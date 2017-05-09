<style scoped>
	@import '../fonts/iconfont.css';

	/* wrapper start */
	.wrapper{
		width:100%;
		height:4.9rem;
		background-color:#fff;
		box-shadow:1px 0px 2px #e4e4e4;
		border-top:#eee solid 1px;
		font-size:0;
		position:fixed;
		left:0;
		bottom:0;
		z-index:10;
	}

	.wrapper .group-cart{
		width:55px;
		height:55px;text-align:center;color:#fff;
		background: #81c429;
		border-radius:100%;
		position:fixed;
		left:0px;
		right:0px;
		bottom:10px;
		margin:0px auto;
		z-index:99;
	}

	.cart-bor{
		position: absolute;
		top: 0px;
		right: -12px;
		padding: 5px;
		background: #ecb01f;
		border-radius: 100%;
	}

	.wrapper .group-cart .icon-gouwuche{
		position: relative;
		top:5px;
	}

	.wrapper .group-cart .name{
		line-height: 23px;
	}

	.wrapper .group{
		display:inline-block;
		width:25%;
		height:auto;
		text-align:center;
		color:#ccc;
		padding:0.7rem 0rem;
		vertical-align:middle;
	}

	.wrapper .active {
		color:#81c429;
		display:inline-block;
		width:25%;
		height:auto;
		text-align:center;
		padding:0.7rem 0rem;
		vertical-align:middle;
	}

	.group.selected{
		color:#7fc72b;
	}

	.iconfont,.name{
		display:block;
	}

	.iconfont{
		font-size:2.4rem;
		line-height:2.5rem;
	}

	.iconfont.icon-gouwuche{
		font-size:2.5rem;
	}

	.name{
		font-size:1.2rem;
		line-height:1.4rem;
	}

	.cart{
		position: absolute;
		top: 0px;
		left: 118px;
		width:40px;
		height:40px;
		border-radius:100px;
		background: #3cc51f;
	}

	.wrapper .group .my-badge{
		background-color:#f9ad0c;
		position:absolute;
		top:2%;
		right:30%;
	}

	/* wrapper start */

</style>

<template>
	<div class="wrapper">
		<!-- 购物车 -->
		<div class="group-cart" @click="cartFun()" v-link="{name:'cart'}">
			<i class="iconfont icon-gouwuche icon-icon22fuzhi"></i>
			<div class="name">购物车</div>
			<badge :text="cartNumsText" class="my-badge cart-bor" v-show="cartNums > 0"></badge>
		</div>
		<div id="card">
			<!-- 选项卡一 -->
			<div class="group active" v-link="{name:'index'}">
				<i class="iconfont icon-home"></i>
				<div class="name">首页</div>
			</div>
			<!-- 选项卡二 -->
			<div class="group" style="position: relative;left: -15px;" v-link="{name:'classify'}">
				<i class="iconfont icon-zizhuxiadan"></i>
				<div class="name">下单</div>
			</div>
			<!-- 选项卡三 -->
			<div class="group" style="position: relative;left: 15px;" v-link="{name:'activity'}">
				<i class="iconfont icon-huodong"></i>
				<div class="name">活动</div>
			</div>
			<!-- 选项卡四 -->
			<div class="group" v-link="{name:'personal'}">
				<i class="iconfont icon-gerenzhongxin"></i>
				<div class="name">个人中心</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { cartNums } from 'vxpath/getters'
	import Badge from 'vux/src/components/badge'

	export default{
		components: {
			Badge
		},
		vuex: {
			getters: {
				cartNums
			}
		},
		data() {
			return {
				
			}
		},
		ready() {
			this.siblingsDom();
		},
        methods: {
            $id: function(id) {
                return document.getElementById(id);
            },
            siblings: function (dom,callback){
                var pdom = dom.parentElement;
                var tabArr = [].slice.call(pdom.children);
                tabArr.filter(function(obj){
                    if(obj!=dom)callback.call(obj);
                });
            },
            siblingsDom:function (){
                var cardDom = this.$id("card");
                var liDomes = cardDom.children;
                var len = liDomes.length;
                for(var i = 0; i < len; i++) {
                    //给对象缓存自有属性
                    liDomes[i].index = i;
                    var _this = this;
                    liDomes[i].onclick = function(){
                        this.className = "active";
                        //同辈元素互斥
                        _this.siblings(this,function(){
                            this.className = "group";
                        });
                    };
                }
            },
            cartFun: function() {
                var cardDom = document.getElementById("card");
                var active = cardDom.children;
                for(var i = 0; i <= active.length; i++) {
                    try {
                        if(active[i]) {
                            active[i].className = "group";
                        }
					} catch(e) {
                        throw "呵呵哒！";
					} finally {

					}
                }
			},
		},
		computed: {
			cartNumsText() {
				return this.cartNums.toString()
			}
		}
	}
</script>
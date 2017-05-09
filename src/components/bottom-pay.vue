<style scoped>
	.bottom-buy{
		width:100%;
		height:auto;
		background-color:#343136;
		font-size:0;
	}

	.bottom-buy.fixed{
		position:fixed;
		bottom:0;
		left:0;
		z-index:100;
	}

	.bottom-buy>div{
		display:inline-block;
		vertical-align:middle;
		font-size:1.6rem;
		color:#fff;
	}

	.bottom-buy>div.mes{
		width:61%;
		text-align:left;
		margin:0% 2%;
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow:hidden;
	}

	.bottom-buy>div.btn{
		width:35%;
		text-align:center;
		color:#FFF;
		height:4.5rem;
		line-height:4.5rem;
	}

	.bottom-buy>div.btn.addCar{
		background-color:#81c429;
	}

	.bottom-buy>div.btn.addCar:active{
		background-color:#81c429;
	}
</style>

<template>
	<div class="bottom-buy" :class="{'fixed':fixed}" :style="{bottom:fixed===true&&btm>0 ? btm+unit : 0}">
		<div class="mes">
			合计：
			<span style="margin-left:12px;">¥{{ sum }}<span>
		</div>
		<div class="btn addCar" @click="submit">提交订单</div>
	</div>
</template>

<script>

	export default{
		props: {
			sum: {
				type: String,
				default: '0.00'
			},
			fixed: {
				type: Boolean,
				default: false
			},
			btm: {
				type: Number,
				default: 0
			},
			unit: {
				type: String,
				default: 'rem'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			submit: function(){
				this.$dispatch('submitOrder');
			}
		}
	}
</script>
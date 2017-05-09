<style scoped>

	.type-bg {
		width:100%;
		height:100%;
		background: #fff;
		position: fixed;
		top:46px;
		left:0px;
	}

	.type-bg .cla-wrapper{
		width:28%;
		height:100%;
		background: #f2f2f2;
		position:fixed;
		top:46px;
		left:0px;
		overflow: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		-moz-overflow-scrolling: touch;
		-ms-overflow-scrolling: touch;
		-o-overflow-scrolling: touch;
		overflow-scrolling: touch;
		margin-bottom:100px;
	}

	.type-bg .cla-wrapper ul .cla-card-li{
		width:100%;
		height:auto;
	}

	.cla-wrapper .menu-item{
		vertical-align: top;
		width: 100%;
		height: 45px;
		font-size: 1.4rem;
		text-align: center;
		max-width: 92%;
		color: #81c429;
		line-height: 24px;
		margin: 0px 4px;
		word-wrap:break-word; word-break:break-all;

	}

	/*.cla-wrapper .menu-item:hover {*/
		/*background: #fff;*/
	/*}*/

	.cla-message {
		float: right;
		width: 72%;
		height: 100%;
		position: absolute;
		top: 0px;
		right: 0px;
		margin-bottom: 75px;
		overflow-x:hidden;
		overflow:hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		-moz-overflow-scrolling: touch;
		-ms-overflow-scrolling: touch;
		-o-overflow-scrolling: touch;
		overflow-scrolling: touch;
	}

	.cla-message .ele-fixed {
		width: 100%;
		height: 100%;
		overflow:hidden;
		overflow-y:  auto;
		margin-bottom: 95px;
	}

	.cla-message .main {
		width:95%;
		height:80px;
		margin:10px auto;
		border-bottom:1px solid #ccc;
		clear:both;
		display: table;
	}

	.cla-message .main .shotcut{
		width:40%;
		height:70px;
		background-color:#EFEFEF;
		background-size:cover;
		overflow:hidden;
		float: left;
	}

	.cla-message .main .shotcut .shotcut-img {
		width:100%;
		height:100%;
	}

	.shotcut-txt {
		width: 55%;
		float: left;
		line-height: 18px;
		font-size: 14px;
		text-align: left;
		margin-left: 10px;
		position: relative;
	}

	.shotcut-txt .money {
		font-size:22px;
	}

	.shotcut-txt .relative {
		color:#f9ad0c;margin-top: 15px;
	}

	.shotcut-txt .icon-card {
		display:block;
		float:right;
		width:2rem;
		height:2rem;
		background: url(../images/gouwuche.png) no-repeat;
		background-size: 100%;
	}

	.active {
		background:#fff;
	}

</style>

<template>
	<div class="type-bg" style="">
		<menu type="popup" class="cla-wrapper" id="cla-wrapper" style="float: left;">
			<ul id="sidebar">
				<li class="cla-card-li" :class="{'active':dtype == item.id}" v-for="item in types" @click="getChonse(item.id)">
					<div class="menu-item" @click="chooseSort(item.id)">
						{{ item.name }}
					</div>
				</li>
			</ul>
		</menu>
		<menu type="popup" class="cla-message">
			<div class="ele-fixed">
				<div class="main" v-for="item in data" v-link="{name:'detail',params:{pid:item.id}}">
					<div class="shotcut">
						<img :src="item.src" alt="" class="shotcut-img" />
					</div>
					<div class="shotcut-txt">
						<p style="height:35px;width:100%;">{{ item.title }}</p>
						<p class="relative" style="">
							<i>￥</i>
							<span class="money">{{item.price}}</span>
							<span class="icon-card"></span>
						</p>
					</div>
				</div>
			</div>
		</menu>
	</div>
</template>

<script>

    import Scroller from 'vux/src/components/scroller'

	export default{
        props: {
            types: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        ready() {
            var wrappe = document.getElementById("cla-wrapper");
            wrappe.onmouseover = function () {
                window.onmousewheel = function () {
                    console.log(1);
                    return false;
                };
            };
            this.siblingsDom(26);
            this.dtype = localStorage.getItem('number');
            this.getChonse(this.dtype);
        },
        data() {
            return {
                data:[],
				item:[],
				isChonse: false,
                dtype:-1,
            }
        },
        components: {
            Scroller
		},
        methods: {
            getChonse: function(type = 0) {
				if(this.dtype == type) {
					return true;
				}
				this.dtype = type;
				localStorage.setItem('number',this.dtype);
			},
            chooseSort(cid){
                let url = localStorage.apiDomain+'/public/index/index/classifylist/cid/' + cid;
                this.$http.get(url).then((response)=>{
                    this.data = response.data.list;
                    localStorage.setItem('listNumber',cid)
                    console.log(response.data.list);
                },(response)=>{
                    this.toastMessage = "网络开小差啦~";
                    this.toastShow = true;
                });
            },
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
                var cardDom = this.$id("sidebar");
                console.log(cardDom);
                var liDomes = cardDom.childNodes;
                console.log(liDomes);
                var len = liDomes.length;
                for(var i = 0; i < len; i++) {
                    //给对象缓存自有属性
                    liDomes[i].index = i;
                    var _this = this;
                    liDomes[i].onclick = function(){
                        console.log(2);
                        this.className = "cla-card-li active";
                        //同辈元素互斥
                        _this.siblings(this,function(){
                            this.className = "cla-card-li";
                        });
                    };
                }
            }
        }
    }
</script>
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
		width:29%;
		height:calc(100% - 100px);
		background: #f2f2f2;
		position:relative;
		top:0px;
		left:0px;
		overflow: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		-moz-overflow-scrolling: touch;
		-ms-overflow-scrolling: touch;
		-o-overflow-scrolling: touch;
		overflow-scrolling: touch;
	}

	.type-bg .cla-wrapper #scroller {
		position: absolute;
		z-index: 1;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		width: 100%;
		-webkit-transform: translateZ(0);
		-moz-transform: translateZ(0);
		-ms-transform: translateZ(0);
		-o-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-text-size-adjust: none;
		-moz-text-size-adjust: none;
		-ms-text-size-adjust: none;
		-o-text-size-adjust: none;
		text-size-adjust: none;
	}

	.type-bg .cla-wrapper .menu-left {
		height:calc(100% - 100px);
		margin-bottom:50px;
	}

	@media screen and (min-width: 414px){
		.type-bg .cla-wrapper{
			height:87%;
		}
	}

	.cla-wrapper .menu-item{
		vertical-align: top;
		width: 100%;
		height: 45px;
		font-size: 1.4rem;
		text-align: center;
		max-width: 92%;
		color: #73a523;
		line-height: 45px;
		margin: 0px 4px;
		word-wrap:break-word;
		word-break:break-all;
	}


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
		height: calc(100% - 100px);
		overflow:hidden;
		overflow-y:  auto;
		margin-bottom: 112px;
		transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
		transition-duration: 0ms;
		transform: translate(0px, 0px) translateZ(0px);
	}

	.cla-message .main {
		width: 95%;
		height: 87px;
		margin: 10px auto;
		border-bottom: 1px solid #ccc;
		clear: both;
		display: table;
		position: relative;
	}

	.cla-message .main .shotcut{
		width: 33%;
		height: 76px;
		background-color: #EFEFEF;
		background-size: cover;
		overflow: hidden;
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
		color:#f9ad0c;margin-top: 20px;
	}

	.main .icon-card {
		display:block;
		float:right;
		width:2rem;
		height:2rem;
		background: url(../images/gouwuche.png) no-repeat;
		background-size: 100%;
		position: absolute;
		top:52px;
		right:0px;
	}

	#touch-ui {
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
		transition-duration: 0ms;
		transform: translate(0px, 0px) translateZ(0px);
	}

	#touch-ui .isChonse {
		background: #fff;
	}

	.active {background: #fff;}

</style>

<template>
	<div class="type-bg" keep-alive>
		<menu type="popup" class="cla-wrapper" id="left_Menu" style="float: left;" @touchstart="startTouch()">
			<div id="scroller">
				<div class="menu-left">
					<ul id="touch-ui">
						<li class="cla-card-li" :class="{'active':dtype == item.id}" v-for="item in types" @click="getChonse(item.id)">
							<div class="menu-item" @click="chooseSort(item.id)">{{ item.name }}</div>
						</li>
					</ul>
				</div>
			</div>
		</menu>
		<menu type="popup" class="cla-message" id="right_Menu">
			<div id="scroller2">
				<div class="ele-fixed">
					<div class="main" v-for="item in data">
						<div v-link="{name:'detail',params:{pid:item.id}}">
							<div class="shotcut">
								<img :src="item.src" alt="{{ item.title }}" class="shotcut-img" style="width:100%;height:100%;" />
							</div>
							<div class="shotcut-txt">
								<p style="height:35px;width:100%;overflow: hidden;text-overflow: ellipsis;">{{ item.title }}</p>
								<p class="relative" style="">
									<i>￥</i>
									<span class="money">{{item.price}}</span>
								</p>
							</div>
						</div>
						<span class="icon-card" @click="goCart(item.id)"></span>
					</div>
				</div>
			</div>
		</menu>
	</div>

	<!-- toast显示框 -->
	<toast type="text" :show.sync="toastShow">{{ toastMessage }}</toast>

	<!-- loading加载框 -->
	<loading :show="loadingShow" :text="loadingMessage"></loading>

</template>

<script>

    import Scroller from 'vux/src/components/scroller'
    import { cartNums } from 'vxpath/getters'
    import { setCartStorage } from 'vxpath/actions'
    import Loading from 'vux/src/components/loading'
    import Toast from 'vux/src/components/toast'

	export default{
        vuex: {
            getters: {
                cartNums
            },
            actions: {
                setCart: setCartStorage
            }
        },
        props: {
            types: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                data: {},
                item: [],
                myScroll: '',
                dtype: null,
                guige:[],
                toastShow: false,
                toastMessage: '',
                loadingMessage:'',
            }
        },
        route: {
            data(transition) {
                if(typeof this.data.id !== 'undefined' && this.data.id != transition.to.params.pid){
                    location.reload();
                }
            }
        },
        ready() {
            this.dtype = localStorage.getItem('number');
            this.chooseSort(this.dtype);
            this.getChonse(this.dtype);
            $(function() {
                //菜单框架自动获取高度
                var doc_H = $(document).height();
                $(".type-bg").height(doc_H);
                window.onresize = function(){
                    var doc_H = $(document).height();
                    $(".type-bg").height(doc_H);
                }
            });

            var myScroll_left;
            var myScroll_right;

			var intervalTime_left = null , intervalTime_right = null;
            intervalTime_left = setInterval(function() {
                var resultContentH = $("#left_Menu").height();
                if (resultContentH > 0) {
                    $("#left_Menu").height(resultContentH);
                    setTimeout(function () {
                        clearInterval(intervalTime_left);
                        myScroll_left = new IScroll('#left_Menu', {
                            vScroll: true,
                            mouseWheel: true,
                            vScrollbar: false,
                            probeType: 2,
							click: true
                        });
                        myScroll_left.refresh();
                    }, 100);
                }
			} ,10);

            intervalTime_right = setInterval(function() {
                var resultContentH = $("#left_Menu").height();
                if (resultContentH > 0) {
                    $("#left_Menu").height(resultContentH);
                    setTimeout(function () {
                        clearInterval(intervalTime_right);
                        myScroll_right = new IScroll('#right_Menu', {
                            vScroll: true,
                            mouseWheel: true,
                            vScrollbar: false,
                            probeType: 2,
                            click: true
                        });
                        myScroll_right.refresh();
                    }, 100);
                }
            } ,10);
        },
        components: {
            Scroller,
            Loading,
            Toast
		},
        methods: {
            startTouch: function() {
                console.log("startTouch");
                let msg = document.getElementById("claWrapper");
			},
            getChonse: function(type) {
                if(this.dtype == type) {
                    return true;
                }
                this.dtype = type;
                localStorage.setItem('number',this.dtype);
                this.menuIndex = type;
            },
            filters: {

			},
            chooseSort(cid){
                //确认收货
                this.loadingMessage = '正在确认';
                this.loadingShow = true;
                let url = localStorage.apiDomain+'/public/index/index/classifylist/cid/' + cid;
                this.$http.get(url).then((response)=>{
                    this.data = response.data.list;
                    console.log(response.data.list);
                },(response)=>{
                    this.toastMessage = "网络开小差啦~";
                    this.toastShow = true;
                });
            },
            goCart: function(cid) {
                this.toastMessage = "加入购物车还在修改~~~";
				this.toastShow = true;
			}
        },
    }
</script>
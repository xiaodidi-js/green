<style type="text/css">
	/* buying-time start */
	.buying-time{
		width:95%;
		height:75px;
		margin:15px auto 0;
		border:1px solid #f26c60;
		border-radius:10px;
		display:none;
	}

	.buying-time .buying-time-title{
		width: 50px;
		background: #f26c60;
		height: 100%;
		text-align: center;
		line-height: 30px;
		font-size: 16px;
		border-radius: 10px 0px 0px 10px;
		position: relative;
		right: 1px;
		float:left;
	}

	.buying-time .buying-time-title span{
		width:100%;
		display:block;
		color:#fff;
		line-height: 30px;
		position: relative;
		top: 8px;
	}

	.buying-time .buying-time-body{
		float:left;
		font-size:16px;
		margin: 9px 22.5px	;
		line-height:30px;
	}

	.buying-time .buying-time-body span{
		display:block;
	}

	/* buying-time end */
</style>

<template>
	<!-- 抢购时间 -->
	<div class="buying-time">
		<p class="buying-time-title">
			<span>抢</span>
			<span>购</span>
		</p>
		<p class="buying-time-body">
			<span style="color:#808080;">
				距离抢购结束还剩：
			</span>
				<span style="color:#f26c60;" id="timeline">
					<i id="times_hour">{{ hour }}</i> 小时
					<i id="times_minute">{{ second }}</i> 分
					<i id="second"> {{ minute }}</i>秒
			</span>
		</p>
	</div>
	<!-- 抢购时间 -->
</template>

<script>

	export default{
		components: {

		},
		props: {

		},
		ready() {
            this.startTimer()
		},
		data() {
			return {
				hour: '0',//小时
                second: '15',//分钟
				minute: '40',//秒钟
                stop: false,
                Interval: null,
			}
		},
		methods: {
            update_timer () {
                if (this.minute <= 0) {
                    this.minute = 60;
                    this.second--;
                    if(this.second === 0) {
                        this.second = 60;
                        this.hour--;
					}
					if(this.hour < 0){
                        clearInterval(this.Interval);
                        this.hour = 0;
                        this.second = 0;
                        this.minute = 0;
					}
                } else {
                    this.minute--
                }
            },
            startTimer () {
                if (this.stop === false) {
                    this.Interval = setInterval(this.update_timer, 1000)
                } else {
                    clearInterval(this.Interval)
                }
                this.stop = !this.stop
            }
		}
	}
</script>
webpackJsonp([39],{403:function(t,e,i){var n,s;i(404),n=i(405),s=i(406),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},404:function(t,e){},405:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{kind:{type:Number,default:0},time:{type:Number,default:0,twoWay:!0},desc:{type:String,default:""},end:{type:String,default:""},unith:{type:String,default:":"},unitm:{type:String,default:":"},units:{type:String,default:""},columns:{type:Array,default:function(){return[]}}},data:function(){return{timer:null,status:1}},methods:{setTime:function(){var t=this;this.columns=setInterval(function(){t.time--},1e3)}},ready:function(){var t=this;this.$watch("columns",function(e){for(var i=0;i<e.length;i++)if(1==e[i].nowsale&&e[i].etime>0){var n=e[i].etime-e[i].servertime;t.time=n,t.nowsale=1}})},computed:{timeRes:function(){var t={hour:"00",minute:"00",second:"00"},e=this.time,i=0,n=0;return e>=3600&&(i=parseInt(e/3600),t.hour=i.toString(),i<10&&(t.hour="0"+t.hour),e-=3600*i),e>=60&&(n=parseInt(e/60),t.minute=n.toString(),n<10&&(t.minute="0"+t.minute),e-=60*n),e>=0&&(t.second=e.toString(),e<10&&(t.second="0"+t.second)),t}},watch:{time:function(t,e){""==e?this.setTime():t<=0&&(this.nowsale=0,clearInterval(this.timer))}}}},406:function(t,e){t.exports=" <div class=buying-time> <p class=buying-time-title> <span>抢</span> <span>购</span> </p> <p class=buying-time-body> <span style=color:#808080>距离抢购结束还剩：</span> <span style=color:#f26c60 id=timeline> <i id=times_hour>{{ timeRes.hour }}</i> 小时 <i id=times_minute>{{ timeRes.minute}}</i> 分 <i id=second>{{ timeRes.second}}</i>秒 </span> </p> </div> "}});
webpackJsonp([40],{640:function(s,t,e){var i,n;e(641),i=e(642),n=e(643),s.exports=i||{},s.exports.__esModule&&(s.exports=s.exports.default),n&&(("function"==typeof s.exports?s.exports.options:s.exports).template=n)},641:function(s,t){},642:function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{columns:{}},data:function(){return{time:"",timer:null,status:1,buydata:[{pic:"../images/banner_chelizi.png",buytitle:"车厘子水果色泽红艳光洁 玲珑珑如玛瑙宝....",status:"准备开抢",money:"35.1"},{pic:"../images/banner_chelizi.png",buytitle:"车厘子水果色泽红艳光洁 玲珑珑如玛瑙宝....",status:"准备开抢",money:"48.58"},{pic:"../images/banner_chelizi.png",buytitle:"车厘子水果色泽红艳光洁 玲珑珑如玛瑙宝....",status:"准备开抢",money:"8.88"}]}},ready:function(){var s=this;this.$watch("columns",function(t,e){for(var i=0;i<t.length;i++)1==t[i].type&&t[i].time>0&&(s.time=t[i].time,s.status=1)}),this.siblingsDom()},methods:{$id:function(s){return document.getElementById(s)},siblings:function(s,t){var e=s.parentElement,i=[].slice.call(e.children);i.filter(function(e){e!=s&&t.call(e)})},siblingsDom:function(){for(var s=this.$id("card"),t=s.children,e=t.length,i=0;i<e;i++){t[i].index=i;var n=this;t[i].onclick=function(){this.className="active",n.siblings(this,function(){this.className=""});var s=document.getElementById("content").children[this.index];s.style.display="block",n.siblings(s,function(){this.style.display="none"})}}},_centerDom:function(s,t,e){for(var i=document.getElementsByClassName(s),n=0,a=i.length;n<a;n++){var l=i[n].offsetWidth;console.log(l);var p=l*t/e+"px";i[n].style.height=p}},setTime:function(){var s=this;this.timer=setInterval(function(){s.time--},1e3)}},components:{},computed:{timeRes:function(){var s={hour:"00",minute:"00",second:"00"},t=this.time,e=0,i=0;return t>=3600&&(e=parseInt(t/3600),s.hour=e.toString(),e<10&&(s.hour="0"+s.hour),t-=3600*e),t>=60&&(i=parseInt(t/60),s.minute=i.toString(),i<10&&(s.minute="0"+s.minute),t-=60*i),t>=0&&(s.second=t.toString(),t<10&&(s.second="0"+s.second)),s}},watch:{time:function(s,t){""==t?this.setTime():s<=0&&(this.status=0,clearInterval(this.timer))}}}},643:function(s,t){s.exports=' <div class=snapped> <div class=snapped-header> <ul class=head-ul id=card> <li class=active> <p class="state gotime">00:00</p> <p class=state>已结束</p> <p class="" style=display:none>即将开抢</p> <i class=bg-sj></i> </li> <li> <p class="state gotime">10:00</p> <p class=state>已结束</p> <p class="" style=display:none>即将开抢</p> <i class=bg-sj></i> </li> <li> <p class="state gotime">12:00</p> <p class=state>即将开抢</p> <p class="" style=display:none>已结束</p> <i class=bg-sj></i> </li> <li> <p class="state gotime">14:00</p> <p class=state>已结束</p> <p class="" style=display:none>即将开抢</p> <i class=bg-sj></i> </li> <li> <p class="state gotime">20:00</p> <p class=state>即将开抢</p> <p class="" style=display:none>已结束</p> <i class=bg-sj></i> </li> </ul> <div class=snapped-h1> <p class=snapped-list></p> <p style=float:left;margin-left:15px class=snapped-title>限时限量 疯狂抢购</p> <p style=float:right;margin-right:15px> 距离本场开始 03:50:51 </p> </div> </div> <div id=content style="margin-top: 115px"> <div class=buyinga> <ul class=snapped-order> <li v-for="item in buydata"> <div class=snapped-main> <div class=snapped-image style=float:left> <img v-bind:src=item.pic alt="" style=width:100%;height:122px /> </div> <div class=description> <p class=desc-h1 style=margin:0px>{{ item.buytitle }}</p> <p class=thisdate> <span class=progress> <i class=go-progress></i> </span> <span class=already> 已抢购 <i>70</i>% </span> </p> <p style=float:left;color:#81c429> <span> <i id=houre>12</i>: <i id=minute>00</i> {{ item.status }} </span> </p> <p style=color:#F9AD0C class=do-money> ￥ <span style="font-size: 28px">{{ item.money }}</span> <button class=now-buying>马上抢</button> </p> </div> </div> </li> </ul> </div> </div> </div> '}});
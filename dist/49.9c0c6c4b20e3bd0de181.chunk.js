webpackJsonp([49],{636:function(s,i,t){var e,a;t(637),e=t(638),a=t(639),s.exports=e||{},s.exports.__esModule&&(s.exports=s.exports.default),a&&(("function"==typeof s.exports?s.exports.options:s.exports).template=a)},637:function(s,i){},638:function(s,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={props:{columns:{}},data:function(){return{time:"",timer:null,status:1,buydata:[{pic:"../images/banner_chelizi.png",buytitle:"车厘子水果色泽红艳光洁 玲珑珑如玛瑙宝....",status:"准备开抢",money:"35.1"},{pic:"../images/banner_chelizi.png",buytitle:"车厘子水果色泽红艳光洁 玲珑珑如玛瑙宝....",status:"准备开抢",money:"48.58"},{pic:"../images/banner_chelizi.png",buytitle:"车厘子水果色泽红艳光洁 玲珑珑如玛瑙宝....",status:"准备开抢",money:"8.88"}]}},ready:function(){var s=this;this.$watch("columns",function(i,t){for(var e=0;e<i.length;e++)1==i[e].type&&i[e].time>0&&(s.time=i[e].time,s.status=1)}),this.siblingsDom()},methods:{$id:function(s){return document.getElementById(s)},siblings:function(s,i){var t=s.parentElement,e=[].slice.call(t.children);e.filter(function(t){t!=s&&i.call(t)})},siblingsDom:function(){for(var s=this.$id("card"),i=s.children,t=i.length,e=0;e<t;e++){i[e].index=e;var a=this;i[e].onclick=function(){this.className="active",a.siblings(this,function(){this.className=""});var s=document.getElementById("content").children[this.index];s.style.display="block",a.siblings(s,function(){this.style.display="none"})}}},_centerDom:function(s,i,t){for(var e=document.getElementsByClassName(s),a=0,n=e.length;a<n;a++){var l=e[a].offsetWidth;console.log(l);var p=l*i/t+"px";e[a].style.height=p}},setTime:function(){var s=this;this.timer=setInterval(function(){s.time--},1e3)}},components:{},computed:{timeRes:function(){var s={hour:"00",minute:"00",second:"00"},i=this.time,t=0,e=0;return i>=3600&&(t=parseInt(i/3600),s.hour=t.toString(),t<10&&(s.hour="0"+s.hour),i-=3600*t),i>=60&&(e=parseInt(i/60),s.minute=e.toString(),e<10&&(s.minute="0"+s.minute),i-=60*e),i>=0&&(s.second=i.toString(),i<10&&(s.second="0"+s.second)),s}},watch:{time:function(s,i){""==i?this.setTime():s<=0&&(this.status=0,clearInterval(this.timer))}}}},639:function(s,i){s.exports=' <div class=snapped> <ul class=head-ul id=card> <li class=active> <p class="state gotime">00:00</p> <p class=state>已结束</p> <p class="" style=display:none>即将开抢</p> <i class=bg-sj></i> </li> <li> <p class="state gotime">10:00</p> <p class=state>已结束</p> <p class="" style=display:none>即将开抢</p> <i class=bg-sj></i> </li> <li> <p class="state gotime">12:00</p> <p class=state>即将开抢</p> <p class="" style=display:none>已结束</p> <i class=bg-sj></i> </li> <li> <p class="state gotime">14:00</p> <p class=state>已结束</p> <p class="" style=display:none>即将开抢</p> <i class=bg-sj></i> </li> <li> <p class="state gotime">20:00</p> <p class=state>即将开抢</p> <p class="" style=display:none>已结束</p> <i class=bg-sj></i> </li> </ul> <div class=snapped-h1> <p class=snapped-list></p> <p style=float:left;margin-left:15px class=snapped-title>限时限量 疯狂抢购</p> <p style=float:right;margin-right:15px> 距离本场开始 03:50:51 </p> </div> <div id=content> <div class=buyinga> <ul class=snapped-order> <li v-for="item in buydata"> <div class=snapped-main> <div class=snapped-image style=float:left> <img v-bind:src=item.pic alt="" style=width:100%;height:122px /> </div> <div class=description> <p class=desc-h1 style=margin:0px>{{ item.buytitle }}</p> <p class=thisdate> <span class=progress> <i class=go-progress></i> </span> <span class=already> 已抢购 <i>70</i>% </span> <span> <i id=houre>12</i>: <i id=minute>00</i> {{ item.status }} </span> </p> <p style=color:#F9AD0C class=do-money> ￥ <span style="font-size: 28px">{{ item.money }}</span> <button class=now-buying>马上抢</button> </p> </div> </div> </li> </ul> </div> <div class=buyingb> <ul class=snapped-order> <li v-for="item in buydata"> <div class=snapped-main> <div class=snapped-image style=float:left> <img v-bind:src=item.pic alt="" style=width:100%;height:122px /> </div> <div class=description> <p class=desc-h1 style=margin:0px>{{ item.buytitle }}</p> <p class=thisdate> <span class=progress> <i class=go-progress></i> </span> <span class=already> 已抢购 <i>70</i>% </span> <span> <i id=houre>12</i>: <i id=minute>00</i> {{ item.status }} </span> </p> <p style=color:#F9AD0C class=do-money> ￥ <span style="font-size: 28px">{{ item.money }}</span> <button class=now-buying>马上抢</button> </p> </div> </div> </li> </ul> </div> <div class=buyingc> <ul class=snapped-order> <li v-for="item in buydata"> <div class=snapped-main> <div class=snapped-image style=float:left> <img v-bind:src=item.pic alt="" style=width:100%;height:122px /> </div> <div class=description> <p class=desc-h1 style=margin:0px>{{ item.buytitle }}</p> <p class=thisdate> <span class=progress> <i class=go-progress></i> </span> <span class=already> 已抢购 <i>70</i>% </span> <span> <i id=houre>12</i>: <i id=minute>00</i> {{ item.status }} </span> </p> <p style=color:#F9AD0C class=do-money> ￥ <span style="font-size: 28px">{{ item.money }}</span> <button class=now-buying>马上抢</button> </p> </div> </div> </li> </ul> </div> <div class=buyingd> <ul class=snapped-order> <li v-for="item in buydata"> <div class=snapped-main> <div class=snapped-image style=float:left> <img v-bind:src=item.pic alt="" style=width:100%;height:122px /> </div> <div class=description> <p class=desc-h1 style=margin:0px>{{ item.buytitle }}</p> <p class=thisdate> <span class=progress> <i class=go-progress></i> </span> <span class=already> 已抢购 <i>70</i>% </span> <span> <i id=houre>12</i>: <i id=minute>00</i> {{ item.status }} </span> </p> <p style=color:#F9AD0C class=do-money> ￥ <span style="font-size: 28px">{{ item.money }}</span> <button class=now-buying>马上抢</button> </p> </div> </div> </li> </ul> </div> <div class=buyinge> <ul class=snapped-order> <li v-for="item in buydata"> <div class=snapped-main> <div class=snapped-image style=float:left> <img v-bind:src=item.pic alt="" style=width:100%;height:122px /> </div> <div class=description> <p class=desc-h1 style=margin:0px>{{ item.buytitle }}</p> <p class=thisdate> <span class=progress> <i class=go-progress></i> </span> <span class=already> 已抢购 <i>70</i>% </span> <span> <i id=houre>12</i>: <i id=minute>00</i> {{ item.status }} </span> </p> <p style=color:#F9AD0C class=do-money> ￥ <span style="font-size: 28px">{{ item.money }}</span> <button class=now-buying>马上抢</button> </p> </div> </div> </li> </ul> </div> </div> </div> '}});
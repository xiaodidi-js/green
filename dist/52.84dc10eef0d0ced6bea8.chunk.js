webpackJsonp([52],{643:function(s,e,t){var i,n;t(644),i=t(645),n=t(646),s.exports=i||{},s.exports.__esModule&&(s.exports=s.exports.default),n&&(("function"==typeof s.exports?s.exports.options:s.exports).template=n)},644:function(s,e){},645:function(s,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{columns:{}},data:function(){return{buydata:[{pic:"../images/banner_chelizi.png",buytitle:"车厘子水果色泽红艳光洁....",status:"准备开抢",money:"175.4"},{pic:"../images/banner_chelizi.png",buytitle:"车厘子水果色泽红艳光洁....",status:"准备开抢",money:"175.4"},{pic:"../images/banner_chelizi.png",buytitle:"玲珑珑如玛瑙宝....",status:"准备开抢",money:"785"},{pic:"../images/banner_chelizi.png",buytitle:"车厘子水果色泽红艳光洁 玲珑珑如玛瑙宝....",status:"准备开抢",money:"348.4"}]}},ready:function(){},methods:{},components:{},computed:{},watch:{}}},646:function(s,e){s.exports=' <ul class=snapped-order> <li v-for="item in buydata"> <div class=snapped-main> <div class=snapped-image style=float:left> <img v-bind:src=item.pic alt="" style=width:100%;height:122px /> </div> <div class=description> <p class=desc-h1 style=margin:0px>{{ item.buytitle }}</p> <p class=thisdate> <span class=progress> <i class=go-progress></i> </span> <span class=already> 已抢购 <i>70</i>% </span> <span> <i id=houre>12</i>: <i id=minute>00</i> {{ item.status }} </span> </p> <p style=color:#F9AD0C class=do-money> ￥ <span style="font-size: 28px">{{ item.money }}</span> <button class=now-buying>马上抢</button> </p> </div> </div> </li> </ul> '}});
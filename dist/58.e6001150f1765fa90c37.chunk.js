webpackJsonp([58],{674:function(s,t,e){var i,c;e(675),i=e(676),c=e(677),s.exports=i||{},s.exports.__esModule&&(s.exports=s.exports.default),c&&(("function"==typeof s.exports?s.exports.options:s.exports).template=c)},675:function(s,t){},676:function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{columns:{}},data:function(){return{}},ready:function(){this.siblingsDom()},methods:{$id:function(s){return document.getElementById(s)},siblings:function(s,t){var e=s.parentElement,i=[].slice.call(e.children);i.filter(function(e){e!=s&&t.call(e)})},siblingsDom:function(){for(var s=this.$id("card"),t=s.children,e=t.length,i=0;i<e;i++){t[i].index=i;var c=this;t[i].onclick=function(){this.className="active",c.siblings(this,function(){this.className=""});var s=document.getElementById("content").children[this.index];s.style.display="block",c.siblings(s,function(){this.style.display="none"})}}}},components:{},computed:{},watch:{}}},677:function(s,t){s.exports=' <div class=search_panel> <form class=search_form> <input type=text class=search_txt placeholder=搜索自提点 /> <input type=button class=search_btn /> </form> </div> <div class=ui-address> <ul id=card> <li class=active> 自提地点 </li> <li> 收货地址 <div class=sel-active></div> </li> </ul> </div> <div id=content> <div class=add-list> <div class=sel-address> <span>地区选择:</span> <div class=sel-bg style=""> <select class=select-add> <option>全部</option> </select> </div> </div> <ul id=container> <li> <p class=li-text>自提点：大良新宁路60号时代大厦14层</p> <p class=li-text>电话:23661177</p> <p class=li-text>收货地址：大良凤山中路12号</p> <p class=li-text>服务范围：凤岭名都</p> <div class=yuan> <icon type=success></icon> <icon type=circle></icon> </div> </li> <li> <p class=li-text>自提点：大良新宁路60号时代大厦14层</p> <p class=li-text>电话:23661177</p> <p class=li-text>收货地址：大良凤山中路12号</p> <p class=li-text>服务范围：凤岭名都</p> <div class=yuan> <icon type=success></icon> <icon type=circle></icon> </div> </li> <li> <p class=li-text>自提点：大良新宁路60号时代大厦14层</p> <p class=li-text>电话:23661177</p> <p class=li-text>收货地址：大良凤山中路12号</p> <p class=li-text>服务范围：凤岭名都</p> <div class=yuan> <icon type=success></icon> <icon type=circle></icon> </div> </li> </ul> <div class=btn-sure> <button class="ui-button determine">确定</button> </div> </div> <div class=receipt style=display:none> <ul> <li class=receipt-li> <p class=receipt-text> <span style=float:left>张三</span> <span style=float:right>15622229999</span> </p> <p class="receipt-text receipt-add" style="">广东省佛山市顺德区大良街道新宁路银景苑四座</p> <div class=sel-yuan> <icon type=success></icon> <icon type=circle></icon> </div> </li> <li class=receipt-li> <p class=receipt-text> <span style=float:left>张三</span> <span style=float:right>15622229999</span> </p> <p class="receipt-text receipt-add" style="">广东省佛山市顺德区大良街道新宁路银景苑四座</p> <div class=sel-yuan> <icon type=success></icon> <icon type=circle></icon> </div> </li> <li class=receipt-li> <p class=receipt-text> <span style=float:left>张三</span> <span style=float:right>15622229999</span> </p> <p class="receipt-text receipt-add" style="">广东省佛山市顺德区大良街道新宁路银景苑四座</p> <div class=sel-yuan> <icon type=success></icon> <icon type=circle></icon> </div> </li> <li class=receipt-li> <p class=receipt-text> <span style=float:left>张三</span> <span style=float:right>15622229999</span> </p> <p class="receipt-text receipt-add" style="">广东省佛山市顺德区大良街道新宁路银景苑四座</p> <div class=sel-yuan> <icon type=success></icon> <icon type=circle></icon> </div> </li> </ul> <div class=btn-sure> <button class="ui-button add-address">增加收货地址</button> <button class="ui-button determine">确定</button> </div> </div> </div> '}});
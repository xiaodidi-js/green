webpackJsonp([50],{71:function(t,c,e){var i,s;e(72),i=e(73),s=e(74),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},72:function(t,c){},73:function(t,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={props:{types:{type:Array,default:function(){return[]}}},ready:function(){var t=document.getElementById("cla-wrapper");t.onmouseover=function(){window.onmousewheel=function(){return console.log(1),!1}},this.chooseSort},data:function(){return{data:[]}},methods:{chooseSort:function(t){var c=this,e=localStorage.apiDomain+"/public/index/index/classifylist/cid/"+t;this.$http.get(e).then(function(t){c.data=t.data.list,console.log(t.data.list)},function(t){c.toastMessage="网络开小差啦~",c.toastShow=!0})}}}},74:function(t,c){t.exports=' <div class=type-bg style="" _v-b37ccb10=""> <div class=cla-wrapper id=cla-wrapper style="float: left" _v-b37ccb10=""> <ul _v-b37ccb10=""> <li class=cla-card-li v-for="item in types" _v-b37ccb10=""> <div class=left-card-box _v-b37ccb10=""> <div class=title @click=chooseSort(item.id) _v-b37ccb10="">{{ item.name }}</div> </div> </li> </ul> </div> <div class=cla-message _v-b37ccb10=""> <div class=ele-fixed _v-b37ccb10=""> <div class=main v-for="item in data" v-link="{name:\'detail\',params:{pid:item.id}}" _v-b37ccb10=""> <div class=shotcut _v-b37ccb10=""> <img :src=item.src alt="" class=shotcut-img _v-b37ccb10=""> </div> <div class=shotcut-txt _v-b37ccb10=""> <p _v-b37ccb10="">{{ item.name }}</p> <p style=color:#f9ad0c _v-b37ccb10=""> <i _v-b37ccb10="">￥</i> <span class=money _v-b37ccb10="">{{item.price}}</span> </p> </div> </div> </div> </div> </div> '}});
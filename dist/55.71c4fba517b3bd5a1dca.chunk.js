webpackJsonp([55],{675:function(t,e,o){var n,i;o(676),n=o(677),i=o(678),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},676:function(t,e){},677:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{types:{type:Array,default:function(){return[]}}},data:function(){return{data:[],item:[],myScroll:"",dtype:null,guige:[]}},ready:function(){var t=this.$id("saosao"),e=t.offsetWidth,o=t.offsetHeight,n=window.innerWidth,i=window.innerHeight,s=(n-e)/2,r=(i-o)/2;t.style.left=s+"px",t.style.top=r+"px",window.onresize=function(){centerElement("saosao")}},components:{},methods:{$id:function(t){return document.getElementById(t)}}}},678:function(t,e){t.exports=' <div class=saobg> <div class=sao id=saosao> <img src=http://green-f.cn/public/static/lvyangtian/logo.jpg alt="" style=width:100%;height:100% /> </div> </div> '}});
webpackJsonp([6,50],{124:function(t,e,i){var a,s;i(125),a=i(126),s=i(127),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},125:function(t,e){},126:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},127:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},160:function(t,e,i){var a,s;i(161),a=i(162),s=i(163),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},161:function(t,e){},162:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{info:{type:Object,required:!0},noPadding:{type:Boolean,default:!1}},data:function(){return{}}}},163:function(t,e){t.exports=' <div class=wrapper :class="{\'nopadding\':noPadding}" v-if=info.title _v-7ef983a4=""> <label class=title _v-7ef983a4="">{{ info.title }}</label> <div class=parent _v-7ef983a4=""> <div class=ui-box v-link="{name:\'detail\',params:{pid:item.id}}" v-for="item in info.list" _v-7ef983a4=""> <div class=img v-lazy:background-image=item.src _v-7ef983a4=""></div> <div class=mes _v-7ef983a4=""> <div class=name _v-7ef983a4=""> {{ item.title }} </div> <div class=money _v-7ef983a4=""> <label class=unit _v-7ef983a4="">¥</label>{{ item.price }} </div> </div> </div> </div> </div> <div class=wrapper :class="{\'nopadding\':noPadding}" v-else="" _v-7ef983a4=""> <div class=ui_box v-link="{name:\'detail\',params:{pid:item.id}}" v-for="item in info.list" _v-7ef983a4=""> <div class=img v-lazy:background-image=item.src _v-7ef983a4=""></div> <div class=mes _v-7ef983a4=""> <div class=name _v-7ef983a4=""> {{ item.title }} </div> <div class=money _v-7ef983a4=""> <label class=unit _v-7ef983a4="">¥</label>{{ item.price }} </div> </div> </div> </div> '},177:function(t,e,i){var a,s;i(178),a=i(179),s=i(193),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},178:function(t,e){},179:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(180),o=a(s),n=i(185),r=a(n),c=i(190),d=a(c),l=i(160),u=a(l),p=i(124),f=a(p),h=i(60),v=a(h);e.default={data:function(){return{toastMessage:"",toastShow:!1,column:"hot",data:{title:"",list:[]}}},components:{HeaderSearch:o.default,Tab:r.default,TabItem:d.default,CardSquare:u.default,Toast:f.default,Separator:v.default},route:{},ready:function(){this.getData("")},methods:{getData:function(t){var e=this,i=localStorage.apiDomain+"public/index/index/classifylist/cid/"+this.$route.params.cid+"/action/"+this.column;t.length>0&&(i+="/search/"+t),this.$http.get(i).then(function(t){e.data.list=t.data.list},function(t){e.toastMessage="网络开小差啦~",e.toastShow=!0})},changeColumn:function(t){return this.column!==t&&(this.column=t,void this.getData(""))}},events:{goSearch:function(t){this.getData(t)}}}},180:function(t,e,i){var a,s;i(181),a=i(182),s=i(183),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},181:function(t,e){},182:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},props:{bgcolor:{type:String,default:""},fixed:{type:Boolean,default:!1},top:{type:Number,default:0},unit:{type:String,default:"rem"}},data:function(){return{searchKey:""}},methods:{goBack:function(){window.history.back()},goSearch:function(){return this.searchKey=this.searchKey.replace(/(^\s*)|(\s*$)/g,""),!(this.searchKey.length<=0)&&void this.$dispatch("goSearch",this.searchKey)}}}},183:function(t,e,i){t.exports=' <div class=search-header :class="{\'fixed\':fixed}" :style="{backgroundColor:bgcolor,top:fixed===true&amp;&amp;top>0 ? top+unit : 0}" _v-1a9a22c8=""> <div class=left _v-1a9a22c8=""> <div class=arrow @click=goBack _v-1a9a22c8=""></div> </div> <div class=center _v-1a9a22c8=""> <img src='+i(184)+' _v-1a9a22c8=""> <input type=text placeholder=请输入您要搜索的商品 v-model=searchKey _v-1a9a22c8=""> </div> <div class=right @click=goSearch _v-1a9a22c8="">搜索</div> </div> '},184:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA19JREFUeNrUme1t4kAQhm3rCuA6IB0Yif9ABTEVBCrgqACoAFKBnQpCKjjzH+ncQVyCO7jbRe8qcyPb2V1/rVeyLPDHzuN3Zmc89r2Wxv1+n4rdtORQMZ/PM6/j4Tc0PBLbs9iWGpekYruJLRFg+eAgAkAav6swPi35r+q8NwGU9A4iAKRBB2bYFU85rXMfqLeEehE5JK/Zi2vTXkCEIUdAqHER26uNiwBqA1Un6n7iXvvOQMSkcqJ3osIVTzBvaXE4E4WkOitx76JVEED8FlsoVx4AJCXnhQDNxfGrBdAGQJMmML4mxIrHAAzY4ZzHEOf4luqEmM8aJqj4/70KQrqE2OSkMYGQSqxt3Qz3X2E+BdVMERbYMwZB3UCOU5t5gSlzEvc9WoEgAD/xU8bEhUHEJDDXXSQ2Ns9MtyrgrqVukDKIiByTCsy6gICbJSSxno1jBAlPLbN7phKF2HrdDzXHEnYZKfJCjKVy0qVx3wOEB7XVUr/TBsFyu8F/b0wllbC2tsnKcrxiH8E+LUWUfDmre3YVKvWhSgYv8Fh9VgvyTPIBTYoRezp9jw/sF7og6oXoRo6FRKVsIJCU2VI5fjDXogbn6r3BG25kuiA+3Ohvk1qpy6FsE+Nn3WITIE+4PHIdVYKKhoGLIN8Ge+Y4iF5m7znJNckrqc7yW5BM7lKga7t9wJa5qaNuleqC3FiGd2UsSvJbLciVlM0Th0CikoqjGgQlSI5yPXIkPjawp9DpztD3EVWKHBxR48WkYKUgF6xeUzyNIdWISKAnRiDIJ4r+PFSsYF71rn7S7Q3w5sOFxEo8kCAx0kAOezxjEKiyJa+Yx57V+GX7ah1UlAIK5tBXvJDmn3Kp1OT6oKKuSUiQxWKSc8cQR+bKxs3w7z4rxKS7kkLuvOXAjok7FSp3eCWNc2NFiDJb4mZyOfwDP24rHj4JhOyZPaEceXwNQC+4uSJk0tD7v/ueI4EaNbBJ/2xHClR5/Vo9fZ1PGtYg7CkevK9uvCroPrAvaJDitWACoxbsJemRt8o67jYwvqVfqy+7oYVXZUi817rl1RTGb+jnUzzlBVwlZGoVMDz3vr7+mrqiFoxz7R9bGOdBdGFGAaIDMxqQ72BGBVIHMzqQKphRgpTBBGMFQTJdqdrsnwADALZrq2qKI2pVAAAAAElFTkSuQmCC"},185:function(t,e,i){var a,s;i(186),a=i(187),s=i(189),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},186:function(t,e){},187:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(188);e.default={mixins:[a.parentMixin],ready:function(){var t=this;setTimeout(function(){t.hasReady=!0},0)},props:{lineWidth:{type:Number,default:3},activeColor:{type:String,default:"#04be02"},defaultColor:{type:String,default:"#666"},animate:{type:Boolean,default:!0}},computed:{barLeft:function(){return this.index*(100/this.number)+"%"},barRight:function(){return(this.number-this.index-1)*(100/this.number)+"%"},barStyle:function(){return{left:this.barLeft,right:this.barRight,display:"block",backgroundColor:this.activeColor,height:this.lineWidth+"px",transition:this.hasReady?null:"none"}},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{index:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},188:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={ready:function(){this.updateIndex()},methods:{updateIndex:function(){if(this.$children){this.number=this.$children.length;for(var t=this.$children,e=0;e<t.length;e++)t[e].index=e,t[e].selected&&(this.index=e)}}},props:{index:{type:Number,default:-1}},watch:{index:function(t,e){e>-1&&(this.$children[e].selected=!1),this.$children[t].selected=!0}},data:function(){return{number:this.$children.length}}},a={props:{selected:{type:Boolean,default:!1}},ready:function(){this.$parent.updateIndex()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.updateIndex()})},methods:{onItemClick:function(){this.selected=!0,this.$parent.index=this.index,this.$emit("on-item-click")}},watch:{selected:function(t){t&&(this.$parent.index=this.index)}},data:function(){return{index:-1}}};e.parentMixin=i,e.childMixin=a},189:function(t,e){t.exports=" <div class=vux-tab :class=\"{'vux-tab-no-animate': !animate}\"> <slot></slot> <div v-if=animate class=vux-tab-ink-bar :class=barClass :style=barStyle></div> </div> "},190:function(t,e,i){var a,s;a=i(191),s=i(192),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},191:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(188);e.default={mixins:[a.childMixin],props:{activeClass:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.selected?this.$parent.activeColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},192:function(t,e){t.exports=" <div class=vux-tab-item :class=\"[selected ? activeClass : '', {'vux-tab-selected': selected}]\" :style=style @click=onItemClick> <slot></slot> </div> "},193:function(t,e){t.exports=' <div class=sub-content _v-15dae412=""> <header-search :fixed=true _v-15dae412=""></header-search> <tab default-color=#333 active-color=#81c429 :line-width=2 class=fixed-tab _v-15dae412=""> <tab-item :selected="column === \'hot\'" @click="changeColumn(\'hot\')" _v-15dae412="">热卖</tab-item> <tab-item :selected="column === \'new\'" @click="changeColumn(\'new\')" _v-15dae412="">新品</tab-item> <tab-item :selected="column === \'price\'" @click="changeColumn(\'price\')" _v-15dae412="">价格</tab-item> </tab> <separator :set-height=90 unit=px _v-15dae412=""></separator> <card-square :info=data :no-padding=true _v-15dae412=""></card-square> <toast :show.sync=toastShow type=text _v-15dae412="">{{ toastMessage }}</toast> </div> '}});
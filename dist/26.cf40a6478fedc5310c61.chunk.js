webpackJsonp([26],{103:function(t,e,i){var o=i(36);t.exports=function(t){return Object(o(t))}},123:function(t,e,i){var o,s;i(124),o=i(125),s=i(126),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},124:function(t,e){},125:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},126:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},127:function(t,e,i){var o,s;i(128),o=i(129),s=i(130),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},128:function(t,e){},129:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:Boolean,text:{type:String,default:"Loading"},position:String}}},130:function(t,e){t.exports=' <div class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{position: position}"> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},239:function(t,e,i){var o,s;i(240),o=i(241),s=i(242),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},240:function(t,e){},241:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},242:function(t,e){t.exports=" <i class={{className}}></i> "},243:function(t,e,i){var o,s;i(244),o=i(245),s=i(246),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},244:function(t,e){},245:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},246:function(t,e){t.exports=" <button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button> "},339:function(t,e,i){t.exports={default:i(340),__esModule:!0}},340:function(t,e,i){i(341),t.exports=i(12).Object.keys},341:function(t,e,i){var o=i(103);i(342)("keys",function(t){return function(e){return t(o(e))}})},342:function(t,e,i){var o=i(22),s=i(12),n=i(21);t.exports=function(t,e){var i=(s.Object||{})[t]||Object[t],a={};a[t]=e(i),o(o.S+o.F*n(function(){i(1)}),"Object",a)}},348:function(t,e,i){var o,s;i(349),s=i(350),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},349:function(t,e){},350:function(t,e){t.exports=" <span class=vux-label-desc><slot></slot></span> "},539:function(t,e,i){var o,s;i(540),o=i(541),s=i(542),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},540:function(t,e){},541:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:String}}},542:function(t,e){t.exports=' <div> <div class=weui_cells_title v-if=title :style={color:titleColor} v-html=title></div> <div class=weui_cells :class="{\'vux-no-group-title\':!title}" :style="{marginTop: gutter}"> <slot></slot> </div> </div> '},543:function(t,e,i){var o,s;i(544),o=i(545),s=i(554),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},544:function(t,e){},545:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(339),n=o(s),a=i(546),r=o(a),u=i(239),l=o(u),d=i(348),c=o(d),f=i(548),p=o(f),h=i(553),v=o(h),_={email:{fn:p.default,msg:"邮箱格式"},"china-mobile":{fn:function(t){return(0,v.default)(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};e.default={ready:function(){this.title||this.placeholder||this.value||console.warn("no title and no placeholder?"),this.equalWith&&(this.showClear=!1),this.required&&!this.value&&(this.valid=!1),"email"===this.isType&&(this.type="email")},mixins:[r.default],components:{Icon:l.default,InlineDesc:c.default},props:{title:{type:String,default:""},placeholder:String,value:{type:String,default:"",twoWay:!0},name:String,readonly:{type:Boolean,default:!1},keyboard:String,inlineDesc:String,isType:String,min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,type:{type:String,default:"text"},textAlign:String,autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false"},computed:{pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1},hasErrors:function(){return(0,n.default)(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}}},methods:{clear:function(){this.value="",this.focus=!0},blur:function(){this.setTouched(),this.validate()},getError:function(){var t=(0,n.default)(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(this.equalWith)return void this.validateEqual();if(this.errors={},!this.value&&!this.required)return void(this.valid=!0);if(!this.value&&this.required)return this.valid=!1,void(this.errors.required="必填哦");var t=_[this.isType];if(t){if(this.valid=t.fn(this.value),!this.valid)return void(this.errors.format=t.msg+"格式不对哦~");delete this.errors.format}if(this.min){if(this.value.length<this.min)return this.errors.min=this.$interpolate("最少应该输入{{min}}个字符哦"),void(this.valid=!1);delete this.errors.min}if(this.max){if(this.value.length>this.max)return this.errors.max=this.$interpolate("最多可以输入{{max}}个字符哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){var t=this.dirty||this.value.length>=this.equalWith.length;return t&&this.value!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.valid=!0,void delete this.errors.equal)}},data:function t(){var t={firstError:"",forceShowError:!1,hasLengthEqual:!1,focus:!1};return t},watch:{focus:function(t){t&&this.$els.input.focus()},valid:function(){this.getError()},value:function(t){this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()}}}},546:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(547),n=o(s);e.default={mixins:[n.default],props:{required:{type:Boolean,default:!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("on-change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},547:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},548:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if((0,a.default)(t),e=(0,u.default)(e,p),e.allow_display_name){var i=t.match(h);i&&(t=i[1])}var o=t.split("@"),s=o.pop(),n=o.join("@"),r=s.toLowerCase();if("gmail.com"!==r&&"googlemail.com"!==r||(n=n.replace(/\./g,"").toLowerCase()),!(0,d.default)(n,{max:64})||!(0,d.default)(s,{max:256}))return!1;if(!(0,f.default)(s,{require_tld:e.require_tld}))return!1;if('"'===n[0])return n=n.slice(1,n.length-1),e.allow_utf8_local_part?g.test(n):_.test(n);for(var l=e.allow_utf8_local_part?x:v,c=n.split("."),m=0;m<c.length;m++)if(!l.test(c[m]))return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=i(549),a=o(n),r=i(550),u=o(r),l=i(551),d=o(l),c=i(552),f=o(c),p={allow_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,_=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,x=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,g=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e.default},549:function(t,e){"use strict";function i(t){if("string"!=typeof t)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,t.exports=e.default},550:function(t,e){"use strict";function i(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];for(var i in e)"undefined"==typeof t[i]&&(t[i]=e[i]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,t.exports=e.default},551:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){(0,r.default)(t);var i=void 0,o=void 0;"object"===("undefined"==typeof e?"undefined":n(e))?(i=e.min||0,o=e.max):(i=arguments[1],o=arguments[2]);var s=encodeURI(t).split(/%..|./).length-1;return s>=i&&("undefined"==typeof o||s<=o)}Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e.default=s;var a=i(549),r=o(a);t.exports=e.default},552:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){(0,a.default)(t),e=(0,u.default)(e,l),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var i=t.split(".");if(e.require_tld){var o=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(o))return!1}for(var s,n=0;n<i.length;n++){if(s=i[n],e.allow_underscores&&(s=s.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(s))return!1;if(/[\uff01-\uff5e]/.test(s))return!1;if("-"===s[0]||"-"===s[s.length-1])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=i(549),a=o(n),r=i(550),u=o(r),l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e.default},553:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return(0,a.default)(t),e in r&&r[e].test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=i(549),a=o(n),r={"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"da-DK":/^(\+?45)?(\d{8})$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[345789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};r["en-CA"]=r["en-US"],r["fr-BE"]=r["nl-BE"],t.exports=e.default},554:function(t,e){t.exports=' <div class=weui_cell :class="{\'weui_cell_warn\': !valid}"> <div class=weui_cell_hd> <label class=weui_label :style="{width: $parent.labelWidth || (labelWidth + \'em\'), textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if=title>{{title}}</label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="weui_cell_bd weui_cell_primary"> <input class=weui_input :autocomplete=autocomplete :autocapitalize=autocapitalize :autocorrect=autocorrect :spellcheck=spellcheck :style=inputStyle :type=type :name=name :pattern=pattern :placeholder=placeholder :readonly=readonly v-model=value @blur=blur v-el:input/> </div> <div class=weui_cell_ft> <icon type=clear v-show="showClear && value && !readonly" @click=clear></icon> <icon type=warn title="{{!valid ? firstError : \'\'}}" v-show="!equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"></icon> <icon type=warn v-show="hasLengthEqual && dirty && equalWith && !valid"></icon> <icon type=success v-show="equalWith && equalWith===value && valid"></icon> <slot name=right><slot> </slot></slot></div> </div> '},592:function(t,e,i){var o,s;i(593),i(594),o=i(595),s=i(600),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},593:function(t,e){},594:function(t,e){},595:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(10),n=o(s),a=i(539),r=o(a),u=i(543),l=o(u),d=i(596),c=o(d),f=i(243),p=o(f),h=i(123),v=o(h),_=i(127),x=o(_);e.default={data:function(){return{loadingShow:!1,toastMessage:"",toastShow:!1,btnText:"登录",btnDis:!1,data:{uname:"",pwd:"",auto:!1}}},components:{Group:r.default,XInput:l.default,BottomCheck:c.default,XButton:p.default,Toast:v.default,Loading:x.default},route:{},ready:function(){this.data.auto=!0},methods:{checkBefore:function(){return!(this.un.length<=0||this.up.length<=0)},postData:function(){var t=this,e=this;return this.checkBefore()===!1?(this.toastMessage="请填写登录账号和密码",this.toastShow=!0,!1):(this.data.auto===!1?setInterval(function(){e.btnText="请选择是否下次自动登录",e.toastShow=!0},1e3):this.data.auto===!0&&(e.toastShow=!1),this.btnText="正在登录...",this.btnDis=!0,this.loadingShow=!0,this.$http.get(localStorage.apiDomain+"public/index/login/useraction/uname/"+this.un+"/upwd/"+this.up).then(function(e){if(1===e.data.status){var i={id:e.data.id,token:e.data.token,time:e.data.time};sessionStorage.removeItem("userInfo"),localStorage.removeItem("userInfo"),t.data.auto?localStorage.setItem("userInfo",(0,n.default)(i)):sessionStorage.setItem("userInfo",(0,n.default)(i)),t.loadingShow=!1,t.toastMessage=e.data.info,t.toastShow=!0;var o=t;setTimeout(function(){o.data.uname="",o.data.pwd="",o.data.auto=!1,o.btnText="登录",o.btnDis=!1,o.$router.replace("index")},800)}else t.loadingShow=!1,t.toastMessage=e.data.info,t.toastShow=!0,t.btnText="登录",t.btnDis=!1},function(e){t.loadingShow=!1,t.toastMessage="网络开小差了~",t.toastShow=!0,t.btnText="登录",t.btnDis=!1}),void 0)}},computed:{un:function(){return this.data.uname.replace(/(^\s*)|(\s*$)/g,"")},up:function(){return this.data.pwd.replace(/(^\s*)|(\s*$)/g,"")}}}},596:function(t,e,i){var o,s;i(597),o=i(598),s=i(599),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},597:function(t,e){},598:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(239),n=o(s);e.default={props:{title:{type:String,required:!0},desc:{type:String,required:!1},status:{type:Boolean,twoWay:!0,default:!1}},components:{Icon:n.default},data:function(){return{}},methods:{changeStatus:function(){this.status===!0?this.status=!1:this.status=!0}}}},599:function(t,e){t.exports=' <div class=wrapper @click=changeStatus _v-59a577e2=""> <div class=cbox _v-59a577e2=""> <icon type=success class="my-icon my-icon-chosen" v-show=status _v-59a577e2=""></icon> <icon type=circle class=my-icon v-show=!status _v-59a577e2=""></icon> </div> <div class=wbox _v-59a577e2=""> &nbsp;<label _v-59a577e2="">{{ title }}<a v-if="desc != \'\'" style=color:#81c429 _v-59a577e2="">{{ desc }}</a></label> </div> </div> '},600:function(t,e){t.exports=' <group title="" _v-5fc4001e=""> <div class=tabmain _v-5fc4001e=""> <i class="iconfont user_icon icon-yonghu" _v-5fc4001e=""></i> <x-input :show-clear=true placeholder=手机号码 type=text :value.sync=data.uname class=login-ipt _v-5fc4001e=""></x-input> </div> <div class=tabmain _v-5fc4001e=""> <i class="iconfont user_icon icon-mima" _v-5fc4001e=""></i> <x-input :show-clear=true placeholder=账号密码 type=password :value.sync=data.pwd class=login-ipt _v-5fc4001e=""></x-input> </div> </group> <bottom-check title=下次自动登录（公众场所请慎用） desc="" :status.sync=data.auto _v-5fc4001e=""></bottom-check> <div class=btn-wrapper _v-5fc4001e=""> <x-button :text=btnText :disabled=btnDis @click=postData _v-5fc4001e=""></x-button> <div class=link-box _v-5fc4001e=""> <a class=left v-link="{name:\'find\'}" _v-5fc4001e="">找回密码</a> <a class=right v-link="{name:\'register\'}" _v-5fc4001e="">免费注册</a> </div> </div> <loading :show=loadingShow text=正在登录... _v-5fc4001e=""></loading> <toast :show.sync=toastShow type=text _v-5fc4001e="">{{ toastMessage }}</toast> '}});
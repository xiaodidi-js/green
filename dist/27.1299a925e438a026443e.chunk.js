webpackJsonp([27],{103:function(t,e,i){var s=i(36);t.exports=function(t){return Object(s(t))}},123:function(t,e,i){var s,o;i(124),s=i(125),o=i(126),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},124:function(t,e){},125:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean,default:!1},time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:{type:String,default:"vux-fade"},width:{type:String,default:"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("on-hide")},this.time))}}}},126:function(t,e){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},196:function(t,e,i){var s,o;i(197),s=i(198),o=i(199),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},197:function(t,e){},198:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},199:function(t,e){t.exports=" <i class={{className}}></i> "},200:function(t,e,i){var s,o;i(201),s=i(202),o=i(203),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},201:function(t,e){},202:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},203:function(t,e){t.exports=" <button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button> "},299:function(t,e,i){t.exports={default:i(300),__esModule:!0}},300:function(t,e,i){i(301),t.exports=i(12).Object.keys},301:function(t,e,i){var s=i(103);i(302)("keys",function(t){return function(e){return t(s(e))}})},302:function(t,e,i){var s=i(22),o=i(12),n=i(21);t.exports=function(t,e){var i=(o.Object||{})[t]||Object[t],a={};a[t]=e(i),s(s.S+s.F*n(function(){i(1)}),"Object",a)}},308:function(t,e,i){var s,o;i(309),o=i(310),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},309:function(t,e){},310:function(t,e){t.exports=" <span class=vux-label-desc><slot></slot></span> "},492:function(t,e,i){var s,o;i(493),s=i(494),o=i(495),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},493:function(t,e){},494:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:String}}},495:function(t,e){t.exports=' <div> <div class=weui_cells_title v-if=title :style={color:titleColor} v-html=title></div> <div class=weui_cells :class="{\'vux-no-group-title\':!title}" :style="{marginTop: gutter}"> <slot></slot> </div> </div> '},496:function(t,e,i){var s,o;i(497),s=i(498),o=i(507),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},497:function(t,e){},498:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(299),n=s(o),a=i(499),r=s(a),u=i(196),l=s(u),d=i(308),c=s(d),f=i(501),p=s(f),h=i(506),v=s(h),x={email:{fn:p.default,msg:"邮箱格式"},"china-mobile":{fn:function(t){return(0,v.default)(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};e.default={ready:function(){this.title||this.placeholder||this.value||console.warn("no title and no placeholder?"),this.equalWith&&(this.showClear=!1),this.required&&!this.value&&(this.valid=!1),"email"===this.isType&&(this.type="email")},mixins:[r.default],components:{Icon:l.default,InlineDesc:c.default},props:{title:{type:String,default:""},placeholder:String,value:{type:String,default:"",twoWay:!0},name:String,readonly:{type:Boolean,default:!1},keyboard:String,inlineDesc:String,isType:String,min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,type:{type:String,default:"text"},textAlign:String,autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false"},computed:{pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1},hasErrors:function(){return(0,n.default)(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}}},methods:{clear:function(){this.value="",this.focus=!0},blur:function(){this.setTouched(),this.validate()},getError:function(){var t=(0,n.default)(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(this.equalWith)return void this.validateEqual();if(this.errors={},!this.value&&!this.required)return void(this.valid=!0);if(!this.value&&this.required)return this.valid=!1,void(this.errors.required="必填哦");var t=x[this.isType];if(t){if(this.valid=t.fn(this.value),!this.valid)return void(this.errors.format=t.msg+"格式不对哦~");delete this.errors.format}if(this.min){if(this.value.length<this.min)return this.errors.min=this.$interpolate("最少应该输入{{min}}个字符哦"),void(this.valid=!1);delete this.errors.min}if(this.max){if(this.value.length>this.max)return this.errors.max=this.$interpolate("最多可以输入{{max}}个字符哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){var t=this.dirty||this.value.length>=this.equalWith.length;return t&&this.value!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.valid=!0,void delete this.errors.equal)}},data:function t(){var t={firstError:"",forceShowError:!1,hasLengthEqual:!1,focus:!1};return t},watch:{focus:function(t){t&&this.$els.input.focus()},valid:function(){this.getError()},value:function(t){this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()}}}},499:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(500),n=s(o);e.default={mixins:[n.default],props:{required:{type:Boolean,default:!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("on-change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},500:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},501:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if((0,a.default)(t),e=(0,u.default)(e,p),e.allow_display_name){var i=t.match(h);i&&(t=i[1])}var s=t.split("@"),o=s.pop(),n=s.join("@"),r=o.toLowerCase();if("gmail.com"!==r&&"googlemail.com"!==r||(n=n.replace(/\./g,"").toLowerCase()),!(0,d.default)(n,{max:64})||!(0,d.default)(o,{max:256}))return!1;if(!(0,f.default)(o,{require_tld:e.require_tld}))return!1;if('"'===n[0])return n=n.slice(1,n.length-1),e.allow_utf8_local_part?y.test(n):x.test(n);for(var l=e.allow_utf8_local_part?_:v,c=n.split("."),g=0;g<c.length;g++)if(!l.test(c[g]))return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=i(502),a=s(n),r=i(503),u=s(r),l=i(504),d=s(l),c=i(505),f=s(c),p={allow_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,_=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,y=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e.default},502:function(t,e){"use strict";function i(t){if("string"!=typeof t)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,t.exports=e.default},503:function(t,e){"use strict";function i(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];for(var i in e)"undefined"==typeof t[i]&&(t[i]=e[i]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,t.exports=e.default},504:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){(0,r.default)(t);var i=void 0,s=void 0;"object"===("undefined"==typeof e?"undefined":n(e))?(i=e.min||0,s=e.max):(i=arguments[1],s=arguments[2]);var o=encodeURI(t).split(/%..|./).length-1;return o>=i&&("undefined"==typeof s||o<=s)}Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e.default=o;var a=i(502),r=s(a);t.exports=e.default},505:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){(0,a.default)(t),e=(0,u.default)(e,l),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var i=t.split(".");if(e.require_tld){var s=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(s))return!1}for(var o,n=0;n<i.length;n++){if(o=i[n],e.allow_underscores&&(o=o.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(o))return!1;if(/[\uff01-\uff5e]/.test(o))return!1;if("-"===o[0]||"-"===o[o.length-1])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=i(502),a=s(n),r=i(503),u=s(r),l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e.default},506:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return(0,a.default)(t),e in r&&r[e].test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=i(502),a=s(n),r={"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"da-DK":/^(\+?45)?(\d{8})$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[345789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};r["en-CA"]=r["en-US"],r["fr-BE"]=r["nl-BE"],t.exports=e.default},507:function(t,e){t.exports=' <div class=weui_cell :class="{\'weui_cell_warn\': !valid}"> <div class=weui_cell_hd> <label class=weui_label :style="{width: $parent.labelWidth || (labelWidth + \'em\'), textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if=title>{{title}}</label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="weui_cell_bd weui_cell_primary"> <input class=weui_input :autocomplete=autocomplete :autocapitalize=autocapitalize :autocorrect=autocorrect :spellcheck=spellcheck :style=inputStyle :type=type :name=name :pattern=pattern :placeholder=placeholder :readonly=readonly v-model=value @blur=blur v-el:input/> </div> <div class=weui_cell_ft> <icon type=clear v-show="showClear && value && !readonly" @click=clear></icon> <icon type=warn title="{{!valid ? firstError : \'\'}}" v-show="!equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"></icon> <icon type=warn v-show="hasLengthEqual && dirty && equalWith && !valid"></icon> <icon type=success v-show="equalWith && equalWith===value && valid"></icon> <slot name=right><slot> </slot></slot></div> </div> '},549:function(t,e,i){var s,o;i(550),s=i(551),o=i(552),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},550:function(t,e){},551:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(196),n=s(o);e.default={props:{title:{type:String,required:!0},desc:{type:String,required:!1},status:{type:Boolean,twoWay:!0,default:!1}},components:{Icon:n.default},data:function(){return{}},methods:{changeStatus:function(){this.status===!0?this.status=!1:this.status=!0}}}},552:function(t,e){t.exports=' <div class=wrapper @click=changeStatus _v-59a577e2=""> <div class=cbox _v-59a577e2=""> <icon type=success class=my-icon v-show=status _v-59a577e2=""></icon> <icon type=circle class=my-icon v-show=!status _v-59a577e2=""></icon> </div> <div class=wbox _v-59a577e2=""> &nbsp;<label _v-59a577e2="">{{ title }}<a v-if="desc != \'\'" style=color:#81c429 _v-59a577e2="">{{ desc }}</a></label> </div> </div> '},554:function(t,e,i){var s,o;i(555),i(556),s=i(557),o=i(558),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default),o&&(("function"==typeof t.exports?t.exports.options:t.exports).template=o)},555:function(t,e){},556:function(t,e){},557:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(10),n=s(o),a=i(492),r=s(a),u=i(496),l=s(u),d=i(549),c=s(d),f=i(200),p=s(f),h=i(123),v=s(h);e.default={data:function(){return{toastMessage:"",toastShow:!1,codeText:"获取验证码",codeDis:!1,btnText:"免费注册",btnDis:!1,data:{tel:"",ucode:"",npwd:"",cpwd:"",check:!1}}},components:{Group:r.default,XInput:l.default,BottomCheck:c.default,XButton:p.default,Toast:v.default},route:{},ready:function(){},methods:{getCode:function(){var t=this;if(this.codeDis)return!1;if(""==this.data.tel)return this.toastMessage="请输入您的手机号码",this.toastShow=!0,!1;var e=120,i=this,s=null;this.codeDis=!0,this.$http.post(localStorage.apiDomain+"public/index/login/getCodeBySms",{tel:this.data.tel}).then(function(o){t.toastMessage=o.data.info,t.toastShow=!0,1===o.data.status?(t.codeText=e+"s",s=setInterval(function(){e>0?(e--,i.codeText=e+"s"):(i.codeText="获取验证码",i.codeDis=!1,clearInterval(s))},1e3)):t.codeDis=!1},function(e){t.toastMessage="网络开小差了~",t.toastShow=!0,t.codeDis=!1})},checkBefore:function(){var t=/^[\d]{9,11}$/,e=/^[\w@\+\?\.\*-\_\#\^]{6,30}$/;return this.data.tel.length<=0?(this.toastMessage="请输入您的手机号码",this.toastShow=!0,!1):t.test(this.data.tel)?5!=this.data.ucode.length?(this.toastMessage="请输入五位验证码",this.toastShow=!0,!1):this.unpwd.length<=0?(this.toastMessage="请输入账号密码",this.toastShow=!0,!1):e.test(this.unpwd)?this.ucpwd.length<=0?(this.toastMessage="请输入确认密码",this.toastShow=!0,!1):this.unpwd!==this.ucpwd?(this.toastMessage="两次密码不一致",this.toastShow=!0,!1):!!this.data.check||(this.toastMessage="请先仔细阅读使用协议",this.toastShow=!0,!1):(this.toastMessage="账号密码格式不正确",this.toastShow=!0,!1):(this.toastMessage="手机号码格式不正确",this.toastShow=!0,!1)},postData:function(){var t=this;if(this.btnDis)return!1;if(!this.checkBefore())return!1;this.btnDis=!0,this.btnText="正在提交...";var e={utel:this.data.tel,upwd:this.unpwd,cpwd:this.ucpwd,code:this.data.ucode};this.$http.post(localStorage.apiDomain+"public/index/login/useraction",e).then(function(e){if(1===e.data.status){var i=e.data;if(i.id&&i.token&&i.time){var s={id:i.id,token:i.token,time:i.time};s=(0,n.default)(s),sessionStorage.removeItem("userInfo"),localStorage.setItem("userInfo",s)}t.toastMessage=i.info,t.toastShow=!0;var o=t;setTimeout(function(){o.btnDis=!1,o.btnText="免费注册",o.$router.replace("index")},800)}else"undefined"!=typeof e.data.info&&(t.toastMessage=e.data.info,t.toastShow=!0,t.btnDis=!1,t.btnText="免费注册")},function(e){t.toastMessage="网络开小差了~",t.toastShow=!0,t.btnDis=!1,t.btnText="免费注册"})}},computed:{unpwd:function(){return this.data.npwd.replace(/(^\s*)|(\s*$)/,"")},ucpwd:function(){return this.data.cpwd.replace(/(^\s*)|(\s*$)/,"")}}}},558:function(t,e){t.exports=' <group title="" _v-dd27716a=""> <x-input :show-clear=true placeholder=请输入您的手机号码 type=number :value.sync=data.tel _v-dd27716a=""></x-input> <x-input :show-clear=false placeholder=请输入验证码 type=number class=weui_vcode :value.sync=data.ucode _v-dd27716a=""> <x-button slot=right type=primary :text=codeText :disabled=codeDis @click=getCode _v-dd27716a=""></x-button> </x-input> <x-input :show-clear=true placeholder=请输入账号密码 type=password :value.sync=data.npwd _v-dd27716a=""></x-input> <x-input :show-clear=true placeholder=请再次输入密码 type=password :value.sync=data.cpwd _v-dd27716a=""></x-input> </group> <bottom-check title=我已阅读并同意 desc=《我够乐网使用协议》 :status.sync=data.check _v-dd27716a=""></bottom-check> <div class=btn-wrapper _v-dd27716a=""> <x-button :text=btnText :disabled=btnDis @click=postData _v-dd27716a=""></x-button> </div> <toast :show.sync=toastShow type=text _v-dd27716a="">{{ toastMessage }}</toast> '}});
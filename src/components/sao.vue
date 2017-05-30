
<style type="text/css">

    .saobg {
        width:100%;
        height:100%;
        background: #fff;
    }

    .sao {
        width:30rem;
        height:30rem;
        position:absolute;
        top:0px;
        left:0px;
        text-align:center;
        font-size:26px;
    }
</style>

<template>
    <div class="saobg">
        <div class="sao" id="saosao">
            <img src="http://green-f.cn/public/static/lvyangtian/logo.jpg" alt="" style="width:100%;height:100%;" />
            <span>长按关注我们！</span>
        </div>
    </div>
</template>

<script>

    export default{
        props: {
            types: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                data: [],
                item: [],
                myScroll: '',
                dtype: null,
                guige:[],
            }
        },
        ready() {
            var boxDom = this.$id("saosao");
            var sw = boxDom.offsetWidth;
            var sh = boxDom.offsetHeight;
            var dw = window.innerWidth;
            var dh = window.innerHeight;
            var cleft = (dw - sw) / 2;
            var ctop = (dh - sh) / 2;
            boxDom.style.left = cleft + "px";
            boxDom.style.top = ctop + "px";
            window.onresize = function(){
                centerElement("saosao");
            };
        },
        components: {

        },
        methods: {
            $id: function(id) {
                return document.getElementById(id);
            }
        },
    }
</script>
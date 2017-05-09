<template>
    <!-- 轮播图 -->
    <div v-for="item in testarr">
        <div v-if="item.type == 4">
            <swiper :list="item.arr" loop dots-position="center" :show-desc-mask="false"
                    :aspect-ratio="650/1242" auto dots-class="dots-my" style="width: 100%;margin-top:50px;"></swiper>
        </div>
    </div>

    <!--<swiper :list="list" loop dots-position="center" :show-desc-mask="false"-->
            <!--:aspect-ratio="650/1242" auto dots-class="dots-my" style="width: 100%;margin-top:50px;"></swiper>-->

</template>

<script>

    import Swiper from 'vux/src/components/swiper'
    import Scroller from 'vux/src/components/scroller'
    import Toast from 'vux/src/components/toast'
    import indexSearch from 'components/index-search'

    export default{
        props: {
            testarr:[]
        },
        data() {
            return {

            }
        },
        components: {
            Swiper,
            Scroller,
        },
        route: {

        },
        ready() {

        },
        methods: {

        },
        events: {

        }
    }

</script>
<template>
  <div>
    <shiwu-list/>
    <div class="my-scrollshiwu">
      <div>
        <div class="swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in detail.banner" :key="index">
                <img  class="swiper-slide-img" :src="item.picUrl">
              </div>
            </div>
          </div>
        </div>
        <!--轮播图下面的详情的滑动-->
        <detail-scroll :scroll="detail.column"/><!--代数据-->
        <!--为你推荐-->
        <detail-item-list :detail="detail"/>
      </div>

    </div>
    <!--totop-->
    <totop/>

  </div>
</template>
<script type="text/javascript">
  import {mapState}from 'vuex'
  import Swiper from 'swiper'
  // import ShiwuList from '../../components/shiwulist/shiwulist'
  import DetailScroll from '../../components/DetailScroll/DetailScroll'
  import DetailItemList from '../../components/DetailItemList/DetailItemList'
  import BScroll from 'better-scroll'

  export default {
    components:{
      // ShiwuList,
      DetailScroll,
      DetailItemList
    },
    computed:{
      ...mapState(['detail'])
    },
    mounted(){
      this.$store.dispatch('getDetail')
    },
    //图片不能滑动,必须的监视属性值是否加载完全
    watch:{
      detail(val){
        this.$nextTick(() =>{
          new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1.15,
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            autoplay: {
              autoplay:true,
              delay: 3000
            },
          })
        })

        this.$nextTick(() =>{
          new BScroll('.my-scrollshiwu',{
            click : true
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    background #eee
    .my-scrollshiwu
      height (1200/$rem)
      .swiper-container
        margin-top (110/$rem)
        .swiper-wrapper
          display: flex
          .swiper-slide
            width 100%

            .swiper-slide-img
              margin 0 (-20/$rem)
              height (400/$rem)
              border-radius (20/$rem)






</style>

<template>
  <div>
    <!--导航栏-->
    <nav class="nav">
      <div class="nav-title">
        <h2 class="nav-logo"><a href="javascript:;">网易严选</a></h2>
        <input class="nav-search" type="text" placeholder="搜索商品,共16705款好物">
      </div>
      <!--导航区-->
      <NavBar/>
    </nav>
    <!--整体上下的滑动区域-->
    <div class="scrollUpDown">
      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <img :src="item.picUrl"/>
          </div>
        </div>
      </div>
      <!--网易自营品牌-->
      <div class="g-grow">
        <div>
          <i class="iconfont icon-zhengquewancheng-xianxingyuankuang"></i>
          <span class="g-grow-font">网易自营品牌</span>
        </div>
        <div>
          <i class="iconfont icon-zhengquewancheng-xianxingyuankuang"></i>
          <span class="g-grow-font">30天无忧退货</span>
        </div>
        <div>
          <i class="iconfont icon-zhengquewancheng-xianxingyuankuang"></i>
          <span class="g-grow-font">48小时快速退款</span>
        </div>
      </div>
      <!--品牌制造商直供内容区-->
      <div class="zhigong-content">
        <div class="zhi-gong">
          <span>品牌制造商直供</span>
          <i class="iconfont icon-xiayiyeqianjinchakangengduo-xianxingyuankuang"></i>
        </div>
      </div>
      <!--上新制造商-->
      <div class="sx-wrap">
        <ul class="sx-list clearFix">
          <li class="sx-item" v-for="(item,index) in homeDateFilter" :key="index">
            <div>
              <h4 class="sx-global">{{item.name}}</h4>
              <span class="sx-price">{{item.floorPrice}}元起</span>
              <i class="iconfont icon-31shangxin"></i>
            </div>
            <img class="sx-img" v-lazy="item.picUrl" alt="logo">
          </li>
        </ul>
      </div>
      <!--下面带滑动区域-->
      <div class="m-xinpinshoufa" v-for="(itemHomeDate,index) in homeDate.cateList" :key="index">
        <header class="hd">
          <a class="more">
            <span class="xinpingshoufa">新品首发</span>
          <div class="all" >
              <span class="chakanquanbu">查看全部 ></span>
          </div>
        </a>
        </header>
        <div class="innerwrap-swiper" ref="home">
          <ul class="list-swiper" >
            <li class="item-swiper" v-for="(item,index) in itemHomeDate.itemList" :key="index">
              <a href="javascript:;">
                <div class="swiper-img">
                  <img :src="item.listPicUrl" alt="">
                </div>
                <div class="swiper-content">
                  <span>{{item.name}}</span>
                </div>
                <div class="swiper-price">
                  <span>¥</span>
                  <span>{{item.couponPrice}}</span>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>

    </div>
    <!--totop-->
    <totop/>
  </div>
</template>
<script>
  import NavBar from '../../components/navBar/navBar'
  import Swiper from 'swiper'
  import {mapState, mapGetters} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    components: {
      NavBar
    },
    mounted() {
      this.$store.dispatch('getBanner')
      this.$store.dispatch('getHomeDate')
    },

    computed: {
      ...mapState(['banner', 'homeDate']),

      homeDateFilter (state) {
        if (state.homeDate.tagList) {
          return state.homeDate.tagList.filter((item, index) => index < 4)
        } else {
              return []
          }
        }

    },


    watch: {
        banner() {
          this.$nextTick(() => {
            new Swiper('.swiper-container', {
              loop: true,
              autoplay: {
                autoplay: true,
              }
            })
          })

        },

        homeDate() {
          //获取遍历后的滑动div,需要加载更新后
          this.$nextTick(() =>{
            const lis = this.$refs.home
            lis.forEach(item => {
              //遍历li加载到的li的图片
              this.$nextTick(() => {
                new BScroll(item, {
                  click: true,
                  scrollX: true
                })
              })
            })

          })





        }
      }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    background #fff
    .nav
      width (750 /$rem)
      height (150 /$rem)
      background #fff
      z-index: 2
      position fixed
      top 0
      left 0
      .nav-title
        .nav-logo
          width: (138 /$rem)
          height: (40 /$rem)
          display: inline-block
          font-size (32 /$rem)
          margin 0 0 0 (25 /$rem)
          & a
            color black
            font-family "Times New Roman"
        .nav-search
          width (532 /$rem)
          height (56 /$rem)
          background #eee
          font-size (25 /$rem)
          text-align: center
          border-radius (15 /$rem)
          outline none

    .scrollUpDown
      width 100%
      height 100%
      margin-top (153 /$rem)
      padding-bottom (98 /$rem)
      .swiper-container
        border-top 5px solid #eee
        margin-top (3 /$rem)
        .swiper-wrapper
          display: flex
          /*margin-top (2/$rem) solid #fff*/
          .swiper-slide
            width 100%
            img
              height (400 /$rem)
      .g-grow
        width: 100%;
        margin-bottom (12 /$rem)
        background: #fff;
        display: flex;
        justify-content space-between;
        margin-top: (-18$rem)
        align-content center
        div
          width: 33%;
          height: (.96 * 75 /$rem)
          margin-left: (15 /$rem)
          .iconfont
            font-size (32 /$rem)
            color #b4282d
            vertical-align middle
          .g-grow-font
            font-size (23 /$rem)
            vertical-align middle

      .zhigong-content
        width 100%
        height (110 /$rem)
        background #fff
        .zhi-gong
          width 100%
          height 100%
          text-align: center
          span
            font-size (32 /$rem)
          .iconfont
            font-size (32 /$rem)

      .sx-wrap
        width 100%
        height (476 /$rem)
        background #fff
        .sx-list
          margin 0 (16 /$rem)
          height (468 /$rem)

          .sx-item
            position relative
            background #eee
            height (236 /$rem)
            width (355 /$rem)
            float left
            margin-right (4 /$rem)
            margin-bottom (4 /$rem)
            div
              width (335 /$rem)
              height (115 /$rem)
              margin-top (20 /$rem)
              margin-left (20 /$rem)
              .sx-global
                font-size (30 /$rem)
              .sx-price
                font-size (30 /$rem)
              .iconfont
                font-size (30 /$rem)
            .sx-img
              width (355 /$rem)
              height (236 /$rem)
              position absolute
              left 0
              top (10 /$rem)


      .m-xinpinshoufa
        width 100%
        height (720/$rem)
        .hd
          width 100%
          height (300/$rem)
          background  #F1F7FD
          display flex
          justify-content center
          align-items center
          .more
            width (250/$rem)
            height (120/$rem)
            display flex
            flex-direction column
            justify-content center
            align-items center
            .xinpingshoufa
              font-size (35/$rem)
              margin-bottom (30/$rem)
          .all
            display flex
            flex-direction column
            justify-content center
            align-items center
            width (250/$rem)
            height (60/$rem)
            font-size (30/$rem)
            background #D8E5F1
        .innerwrap-swiper
          width 100%
          height (450/$rem)
          display flex
          .list-swiper
            display flex

            .item-swiper
              width (350/$rem)
              height (400/$rem)
              margin-left (10/$rem)
              a
                width 100%
                height 100%
                .swiper-img
                  img
                    width (270/$rem)
                    height (270/$rem)
                .swiper-content
                  width (270/$rem)
                  height (40/$rem)
                  font-size (30/$rem)
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                .swiper-price
                  font-size (30/$rem)
                  color #ff0000

</style>

<template>
  <div class="class-container">
    <!--search-->
    <div class="class-search">
      <i class="iconfont icon-search"></i>
      <input class="shopsearch" type="text" placeholder="               搜索商品,共16867款好物">
    </div>
    <div class="leftAndRightNavBar">
      <!--leftNav-->
      <left-nav-bar :activeIndex="activeIndex"/>
      <!--rightNav-->
      <right-nav-bar :activeIndex="activeIndex"/>
    </div>
  </div>
</template>
<script>
  import LeftNavBar from '../../components/leftNavBar/leftNavBar'

export default {
    props:{
      activeIndex:Function
    },
  components:{
    LeftNavBar,
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .class-search
    width 100%
    height (100/$rem)
    text-align: center
    position relative
    .iconfont
      font-size (40/$rem)
      position absolute
      top (35/$rem)
      left (160/$rem)
    .shopsearch
      width (600/$rem)
      height (60/$rem)
      font-size (30/$rem)
      border-radius (10/$rem)
  .leftAndRightNavBar
    position relative
</style>

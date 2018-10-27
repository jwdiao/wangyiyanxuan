<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" @click="goto('/msite')" :class="{on:currentActive('/msite')}" class="guide_item">
    <span class="item_icon">
      <i class="iconfont icon-shouye-xianxing"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" @click="goto('/know')" :class="{on:currentActive('/know')}" class="guide_item">
    <span class="item_icon">
      <i class="iconfont icon-shiwu"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;"@click="goto('/class')" :class="{on:currentActive('/class')}" class="guide_item">
    <span class="item_icon">
      <i class="iconfont icon-liebiaofenlei"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" @click="goto('/shopcart')" :class="{on:currentActive('/shopcart')}" class="guide_item">
    <span class="item_icon">
      <i class="iconfont icon-caigou-xianxing"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" @click="goto('/profile')" :class="{on:currentActive('/profile')}" class="guide_item">
    <span class="item_icon">
      <i class="iconfont icon-geren"></i>
    </span>
      <span>我的</span>
    </a>
  </footer>

</template>
<script type="text/javascript">
  export default {
    data(){
      return{

      }
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      currentActive(path){
        return this.$route.path === path
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height (98/$rem)
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin (5/$rem)
      color #999999
      &.on
        color #B4282D
      span
        font-size (24/$rem)
        margin-bottom (5/$rem)
        margin-top (5/$rem)
        .iconfont
          font-size (48/$rem)
</style>



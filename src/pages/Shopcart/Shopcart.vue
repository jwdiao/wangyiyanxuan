<template>
  <div>
    <div class="shopCartWrap">
      <div class="shop-cart">购物车</div>
      <div class="shop-lingquan">领券</div>
    </div>
    <ul class="shouHou">
      <li>
        <i class="iconfont icon-du"></i>
       <div> 30天无忧退货</div>
      </li>
      <li>
        <i class="iconfont icon-du"></i>
        <div>48小时快速退款</div>
      </li>
      <li>
        <i class="iconfont icon-du"></i>
        <div>满88元免邮费</div>
      </li>
    </ul>
    <div class="logo">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
      <div class="text">去添加点什么吧</div>
    </div>
    <div class="login" @click="$router.replace('/profile')">
      <div class="login-text">登录</div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shopCartWrap
    width 100%
    height (65/$rem)
    background #fff
    text-align: center
    .shop-cart
      font-size (40/$rem)
      margin-top (30/$rem)
    .shop-lingquan
      font-size (30/$rem)
      position absolute
      top (35/$rem)
      right (50/$rem)
      color #b4282d
  .shouHou
    width 100%
    height (50/$rem)
    display flex
    margin-left (40/$rem)
    margin-top (30/$rem)
    li
      flex 1
      i
        font-size (30/$rem)
      div
        font-size (25/$rem)
        color #999

  .logo
    width 100%
    height (300/$rem)
    text-align: center
    position absolute
    top (530/$rem)
    left (0/$rem)
    .text
      font-size (30/$rem)
      color #666
      margin-top (-20/$rem)
  .login
    width (500/$rem)
    height (100/$rem)
    background  #b4282d
    text-align: center
    line-height (100/$rem)
    font-size (30/$rem)
    color #fff
    position absolute
    top (860/$rem)
    left (140/$rem)

</style>

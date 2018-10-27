<template>
  <div>
    <shiwu-list/>
    <div class="img-logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="login-methods">
      <div class="login-phone" @click="phoneLogin1">
          <i class="iconfont icon-shouji"></i>
          <span class="login-text">手机号码登录</span>
      </div>
      <div class="login-email" @click="phoneLogin2">
        <i class="iconfont icon-email"></i>
        <span class="email-text">邮箱帐号登录</span>
      </div>
      <div class="phone-register">手机号快捷注册></div>
    </div>
    <div class="footer-link">
      <div class="wechat-link">
        <i class="iconfont icon-xiangmulan-weixinhao"></i>
        <span class="wechat-text">微信</span>
        <span class="shuxian">|</span>
      </div>
      <div class="qq-link">
        <i class="iconfont icon-qq_fill"></i>
        <span class="qq-text">QQ</span>
        <span class="shuxian">|</span>
      </div>
      <div class="weibo-link">
        <i class="iconfont icon-weibo"></i>
        <span class="weibo-text">微博</span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState}from 'vuex'
export default {
  data(){
    return {
      // isLoginWay:false//false 为邮箱登录  true 为手机登录
    }
  },
  methods:{

    phoneLogin1 () {
      let {isLoginWay} = this
       isLoginWay =true
      this.$router.push('/loginroute') //在函数中实现路由跳转
      this.$store.dispatch('gteIsLoginWay',isLoginWay)

    },
    phoneLogin2 () {
      let {isLoginWay} = this
      isLoginWay =false
      this.$router.push('/loginroute') //在函数中实现路由跳转
      this.$store.dispatch('gteIsLoginWay',isLoginWay)
    },
  },

  computed:{
    ...mapState(['isLoginWay'])
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .img-logo
    width 100%
    height (350/$rem)
    margin-top (88/$rem)
    text-align: center
    line-height (350/$rem)

    img
      width (290/$rem)
      height (90/$rem)
  .login-methods
    width 100%
    hieght (400/$rem)
    text-align: center
    margin-left (50/$rem)
    .login-phone
      width (650/$rem)
      height (100/$rem)
      background: #b4282d
      color #fff
      font-size (28/$rem)
      line-height (100/$rem)
      margin-bottom (20/$rem)
      border-radius (15/$rem)
      .icon-shouji
        font-size (35/$rem)
    .login-email
      width (650/$rem)
      height (100/$rem)
      border: 1px solid #b4282d
      font-size (28/$rem)
      margin-bottom (20/$rem)
      border-radius (15/$rem)
      color #b4282d
      line-height (100/$rem)
      .icon-email
        font-size (28/$rem)

    .phone-register
      width 100%
      height (80/$rem)
      font-size (30/$rem)
      margin-left (-20/$rem)
      color #000
  .footer-link
    width 100%
    height (80/$rem)
    display flex
    color #999
    justify-content center
    position absolute
    bottom (20/$rem)
    left (10/$rem)
    .wechat-link
      width (150/$rem)
      height (20/$rem)
      font-size (35/$rem)
      margin-right (10/$rem)
      .icon-xiangmulan-weixinhao
        font-size (28/$rem)
      .shuxian
        margin-right (10/$rem)
      .wechat-text
        margin-right (10/$rem)
    .qq-link
      width (150/$rem)
      height (20/$rem)
      font-size (35/$rem)
      margin-right (20/$rem)
      .icon-qq_fill
        font-size (28/$rem)
    .weibo-link
      width (150/$rem)
      height (20/$rem)
      font-size (35/$rem)
      .icon-weibo
        font-size (28/$rem)


</style>

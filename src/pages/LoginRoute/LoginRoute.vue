<!--
<template>
  <div>
    <shiwu-list/>
    <div class="login-jiemian">
      <div>
        PhoneLogin
      </div>
      <div>
        emailLogin
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    background #fff
    .login-jiemian
      width 100%
      margin-top (88/$rem)
      background #fff

</style>
-->
<template>
  <div class="login-container">
    <shiwu-list/>
    <div class="logo-wrap">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo-icon">
    </div>

    <div class="input-container"  :class="{on:isLoginWay}">
      <div class="bd">
        <input type="text" placeholder="请输入手机号" v-model="phoneNum">
      </div>

      <div class="bd">
        <input type="password" placeholder="请输入密码" v-model="pwdCode">
      </div>
      <div>
        <div class="msg-login">
          <span>忘记密码?</span>
          <span>使用短信验证码登录</span>
        </div>
      </div>
      <div class="btn-wrap" >
        <div class="phone-login red" @click="loginIn">
          <span>登录</span>
        </div>
        <div class="email-login white" @click="$router.replace('/profile')">
          <span>其他登录方式</span>
        </div>
      </div>
    </div>

    <div class="input-container"  :class="{on:!isLoginWay}" >

      <div class="bd">
        <input type="text" placeholder="邮箱账号" v-model="emailCode">
      </div>
      <div class="bd">
        <input type="password" placeholder="请输入密码" v-model="pwdCode">
      </div>

      <div>
        <div class="msg-login">
          <span>注册账号</span>
          <span>忘记密码</span>
        </div>
      </div>
      <div class="btn-wrap" >
        <div class="phone-login red" @click="emailLogin">
          <span>登录</span>
        </div>
        <div class="email-login white" @click="$router.replace('/profile')">
          <span>其他登录方式</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapState}from 'vuex'
  import {Toast, MessageBox} from 'mint-ui'
  export default {
    data(){
      return{
        phoneNum:'',
        pwdCode:'',
        emailCode:'',
      }
    },
    computed:{
      ...mapState(['isLoginWay'])
    },
    methods:{
      loginIn(){
        if(!this.phoneNum ||!this.pwdCode){
          Toast('请输入手机号或密码')
        }else if(!/^1\d{10}$/.test(this.phoneNum)){
          return MessageBox.alert('请输入正确手机号')
        }else if(!/^\w{6,12}$/.test(this.pwdCode)){
          return MessageBox.alert('请输入正确密码')
        }else{
          return MessageBox.alert('登录成功')
        }
      },
      emailLogin(){
        if(!this.emailLogin || !this.pwdCode){
          Toast('请输入邮箱或密码')
        }else if(!/^[a-zA-Z0-9]{3,8}@\w{3}\.com/.test(this.emailCode)){
          return MessageBox.alert('请输入正确邮箱号')
        }else{
          return MessageBox.alert('登录成功')
        }
      },
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    background-color #fff
    .login-container
      width 100%
      height 100%
      background-color #fff
    .logo-wrap
      width 100%
      text-align: center;
      padding-top: 2.13333rem;
      padding-bottom: 2.13333rem;
      img
        width (192/$rem)
        height (64/$rem)
    .input-container
      display none
      width 100%
      padding 0 (60/$rem)
      box-sizing border-box
      &.on
        display block
      .bd
        height (82/$rem)
        bottom-border-1px(#999)
        input
          display block
          box-sizing border-box
          padding-left (20/$rem)
          height 100%
          outline none
          border none
          font-size (30/$rem)
          &::-webkit-input-placeholder
            font-size (30/$rem)
            color #333
      .msg-login
        width 100%
        display flex
        height (82/$rem)
        justify-content center
        align-items center
        box-sizing border-box
        padding-left (20/$rem)
        span
          flex 1
          font-size (30/$rem)
          color #333
      .btn-wrap
        margin-top (40/$rem)
        .phone-login,.email-login
          color #fff
          &.red
            text-align: center;
            font-size: 0.37333rem;
            border: 1px solid #b4282d;
            background-color: #b4282d;
            overflow: hidden;
            height: 1.25333rem;
            line-height: 1.25333rem;
            width: 100%;
            border-radius: 0.026666666666667rem;
            margin-bottom: 0.42667rem;
          &.white
            color: #b4282d
            text-align: center;
            font-size: 0.37333rem;
            border: 1px solid #b4282d;
            background-color: transparent;
            overflow: hidden;
            height: 1.25333rem;
            line-height: 1.25333rem;
            width: 100%;
            border-radius: 0.026666666666667rem;
            margin-bottom: 0.42667rem;
</style>

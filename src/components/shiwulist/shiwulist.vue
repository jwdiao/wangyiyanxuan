<template>
  <div>
    <div class="m-topBar">
      <div class="bd">
        <div class="row">
          <i class="shouye iconfont icon-shouye-xianxing" @click="$router.replace('/msite')"></i>
          <span class="logo-text">网易严选</span>
          <div class="right">
              <i class="search1 iconfont icon-search" @click="searchshop"></i>
              <i class="cart1 iconfont icon-caigou-xianxing" @click="$router.replace('/shopcart')"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { MessageBox } from 'mint-ui';
  export default {

    data() {
      return {}
    },
    methods:{
      searchshop(){
        MessageBox('提示', '搜索成功');
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m-topBar
    position fixed
    top 0
    left 0
    width 100%
    height (87/$rem)
    background #eee
    z-index 10
    .row
      height 100%
      padding-left (24/$rem)
      padding-right (16/$rem)
      .shouye
        font-size (60/$rem)
      .logo-text
        font-size (40/$rem)
        padding-left (180/$rem)
      .right
        float right
        .search1
          font-size (60/$rem)
        .cart1
          font-size (60/$rem)

</style>

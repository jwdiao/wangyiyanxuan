<template>
  <div>
    <div class="g-bd">
      <div class="g-row">
        <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
        <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
      </div>
      <div class="g-row">
        <img src="//yanxuan.nosdn.127.net/d600f8c56fc184e199aa389e09fb2ff9.jpg">
        <a href="javascript:void(0)" id="downloadBtn"></a>
        <a href="javascript:void(0)" id="backWapBtn" @click="$router.push('/msite')"></a>
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
    background #E3E3E3
    .g-row
      img
        display block
      #backWapBtn
        display block
        width (350/$rem)
        height (50/$rem)
        /*background #007aff*/
        position absolute
        bottom (320/$rem)
        left (200/$rem)
</style>

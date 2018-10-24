<template>
  <div id="app">
    <router-view></router-view>
    <WangyiGuide v-show="this.$route.meta.show"/>

  </div>
</template>

<script>
import WangyiGuide from './components/wangyiGuide/wangyiGuide'


export default {
  components: {
    WangyiGuide,

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    /*background #f5f5f5*/

</style>

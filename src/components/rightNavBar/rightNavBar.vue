<template>
  <div class="rightNavBar">
    <div class="rightWrap">
      <div class="headerImg">
        <img src="http://yanxuan.nosdn.127.net/82cef264da1192ba26d6fc500386962f.jpg?imageView&thumbnail=0x196&quality=75" alt="">
      </div>
      <div class="shopList">
        <ul class="shopItems">
          <li v-for="(item,index) in classify[1].subCateList" :key="index">
            <div class="shopIcon">
              <img :src="item.bannerUrl" alt="">
            </div>
            <div class="shopText">{{item.name}}</div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState}from 'vuex'
  export default {
    data() {
      return {

      }
    },
    props:{
      activeIndex:Function
    },

    mounted(){
      this.$store.dispatch('getClassify')

    },
    computed:{
      ...mapState(['classify'])
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .rightNavBar
    position absolute
    top 0
    left (175/$rem)
    .headerImg
      margin (15/$rem) 0 0 (15/$rem)
    .shopList
      margin-left (30/$rem)
      margin-top (20/$rem)
      .shopItems
        li
          width (140/$rem)
          height (208/$rem)
          margin-right (40/$rem)
          float left
          .shopIcon
            img
              width (140/$rem)
              height (140/$rem)
          .shopText
            font-size (26/$rem)
            text-align: center

</style>

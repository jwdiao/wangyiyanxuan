<template>
  <div class="rightNavBar">
    <div class="rightWrap">
      <div class="headerImg" v-if="classify.length">
        <img v-lazy="classify[activeIndex].bannerUrl" alt="">
      </div>
      <div class="shopList">
        <ul class="shopItems" v-if="classify.length">
          <li v-for="(item,index) in classify[activeIndex].subCateList" :key="index">
            <div class="shopIcon">
              <img v-lazy="item.bannerUrl" alt="">
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
    mounted(){
      this.$store.dispatch('getClassify')
    },
    computed:{
      ...mapState(['classify','activeIndex'])
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
      img
        width (500/$rem)
        height (250/$rem)
        margin-left (20/$rem)
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

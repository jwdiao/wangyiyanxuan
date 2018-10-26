<template>
  <div>
    <div class="m-exploreChannels">
      <div class="scroll-wrap">
        <div class="scroll-item" v-for="(item,index) in scroll" :key="index">
          <div class="imgContainer">
            <img v-lazy="item.picUrl" alt="logo">
          </div>
          <div class="rbGradient">
            <div class="topNum">{{item.articleCount}}</div>
          </div>
          <div class="title">{{item.title}}</div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    props:{
      scroll:Array,
    },
    mounted(){
      this.$nextTick(() =>{
        new BScroll('.m-exploreChannels',{
          click:true,
          scrollX:true
        })
      })
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m-exploreChannels
    overflow: hidden;
    padding (32/$rem) (30/$rem) (28/$rem) (30/$rem)
    height (228/$rem)
    background-color: #fff
    margin-bottom: (20/$rem)
    display: flex
    .scroll-wrap
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 1;
      transform: translate3d(0px, 0px, 0px);
      transition-duration: 0ms;
      display: flex;
      flex-wrap: nowrap;
      .scroll-item
        position: relative;
        width: (164/$rem)
        height: (210/$rem)
        margin-right: (24/$rem)
        .imgContainer
          img
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: (164/$rem)
            height:(164/$rem)
            margin-bottom: (22/$rem)
            border-radius: (5/$rem)
        .title
          color: #333;
          font-size: (22/$rem)
          line-height: 1;
          text-align: center;
          width: (183/$rem)
          margin-left: (-10/$rem)
        .rbGradient
          position: absolute;
          top: 0;
          right: 0;
          color: #fff;
          width: (116/$rem)
          height: (32/$rem)
          border-radius: (5/$rem)
          background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/rbGradient-049c62dfb5.png) no-repeat;
          background-size: 100%;
          display: inline-block;
          vertical-align: middle;
        .topNum
          font-size: (20/$rem)
          position: absolute;
          top: 0;
          right: (5/$rem)
          width: (150/$rem)
          height: (20/$rem)
          line-height: (20/$rem)
          text-align: right;

</style>

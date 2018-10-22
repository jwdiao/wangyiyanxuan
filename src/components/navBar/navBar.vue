<template>
  <div>
    <!--导航滑块-->
    <div class="nav-container">
      <ul class="nav-scrollX">
        <li :class="{on:index ===activeIndex }" @click="selectItem(index)" v-for="(nav,index) in navList" :key="index">{{nav}}</li>
      </ul>
    </div>


  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        navList :["推荐","居家","鞋包配饰","服装","电器","洗护","饮食","餐厨","婴童","文体","特色区"],
        activeIndex:0,//初始化点击时的数据索引
      }
    },
   methods:{
      //点击时改变导航条的状态
     selectItem(index){
       this.activeIndex = index
     },
   },
    mounted() {
        new BScroll('.nav-container', {
          scrollX: true,
          click: true,
        })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .nav-container
    width 100%
    overflow: hidden;
    background: #ffffff;
    display: flex;
    .nav-scrollX
      display: flex;
      margin-top (30/$rem)
      justify-content: space-between;
      align-items: center;
      li
        text-align: center;
        flex-shrink:0;
        flex-wrap:nowrap;
        margin: (0 .5*75/$rem);
        font-size: (.37333*75/$rem);
        padding-bottom (10/$rem)
        &.on
          padding: 0 0 12px 0;
          border-bottom: 3px solid #b4282d;
          color: #b4282d;
</style>

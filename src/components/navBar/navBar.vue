<template>
  <div>
    <!--导航滑块-->
    <div class="nav-container">
      <ul class="nav-scrollX" ref="navUrl">
        <li class="nav-list-hook" :class="{on:index ===activeIndex }" @click="selectItem(index)" v-for="(nav,index) in navList" :key="index">{{nav}}</li>
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
        // activeIndex:0,//初始化点击时的数据索引
        scrollX:0,
        tops:[],
      }
    },
   methods:{

     _initScroll () {
       // 左侧列表滚动对象
       this.leftScroll = new BScroll('.nav-container', {
         click: true, // 会派发点击事件
         scrollX:true,
         probeType: 1
       })

       // 绑定scroll的监听
       this.leftScroll.on('scroll', ({x, y}) => {
         // console.log('scroll', x, y)
         // 更新scrollY
         this.scrollX = Math.abs(x)
       })

     },

     _initTops () {
       const tops = []
       let top = 0
       tops.push(top)
       // 得到所有分类li的伪数组
      const {navList} = this
       const lis = this.$refs.navUrl.querySelectorAll('.nav-list-hook')
       lis.forEach(li => {
         top += li.clientWidth
         tops.push(top)
       })
       // 更新状态
       this.tops = tops
       // console.log('tops=', tops)
     },
     // 选择左侧某个分类项
     selectItem (index) {
       // this.activeIndex = index
       // 得到index对应的目标位置的y坐标
       const x = -this.tops[index]
       // 立即更新scrollY
       this.scrollX = -x
       // 让右侧列表滚动到此处
       this.leftScroll.scrollTo(x, 0, 300)
     },
   },
    computed:{
      activeIndex () {
        const {scrollX, tops} = this
        // scrollY大于或等于当前top && 小于下一个top
        const index = tops.findIndex((top, index) => scrollX>=top && scrollX<tops[index+1])
        if(this.index!=index) {// 只有当当前分类下标发生改变才去执行
          this.index = index
          // 让右侧滚动到index所对应的位置
          if(this.leftScroll) {
            this.leftScroll.scrollToElement(this.$refs.navUrl.children[index], 200)
          }
        }
        return index
      }
    },
    mounted() {
      this._initScroll()
      // 初始化tops数据
      this._initTops()
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .nav-container
    z-index: 2
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

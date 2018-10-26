<template>
  <div>
      <div  class=" tubiao-totop" :class="{on:isActive}" @click="scrTop">
        <img src="../../assets/images/totop.png" alt="">
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isActive:false
      }
    },
    methods:{
      scrTop(){
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        var timer  = null;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn(){
          var oTop = document.body.scrollTop || document.documentElement.scrollTop;
          if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 100;
            timer = requestAnimationFrame(fn);
          }else{
            cancelAnimationFrame(timer);
          }
        });
      }
    },
   /* computed:{
     function () {
       var oTop = document.body.scrollTop || document.documentElement.scrollTop;
       if(oTop > 0){
         isTop = false
       }
       return isTop
     	}
    }*/
    created(){
      var vm=this;

      window.onscroll=function(){
        if (document.documentElement.scrollTop>600) {
          vm.isActive=true;
        }else {
          vm.isActive=false;
        }
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tubiao-totop
    width (100/$rem)
    height (100/$rem)
    position fixed
    bottom (130/$rem)
    right (30/$rem)
    z-index 100
    display none
    &.on
      display block
    img
      width (100/$rem)
      height (100/$rem)
</style>

<template>
  <div>
    <div class="m-exploreRcmds" v-if="detail.recommendOne">
      <div class="container">
        <div class="module-title">{{detail.recommendOne.nickname}}</div>
        <div class="m-mainPosItem">
          <div class="imgContainer">
            <div class="topicTag">
              <div class="m-exploreTag">{{detail.recommendOne.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="topicInfo">
        <div class="line1">
          <div class="title">{{detail.recommendOne.typeName}}</div>
          <div class="price">
            <div class="num">{{detail.recommendOne.priceInfo}}</div>
            <div class="unit">元起</div>
          </div>
        </div>
        <div class="line2">
          <div class="subTitle" v-if="detail.recommendOne">{{detail.recommendOne.subTitle}}</div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="detail.recommendTwo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendTwo.avatar">
              </div>
              <div class="nickname">{{detail.recommendTwo.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{detail.recommendTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{detail.recommendTwo.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img :src="detail.recommendTwo.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{detail.recommendTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="detail.recommendThree">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendThree.avatar">
              </div>
              <div class="nickname">{{detail.recommendThree.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{detail.recommendThree.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{detail.recommendThree.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img :src="detail.recommendThree.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{detail.recommendThree.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    props:{
      detail:{}
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m-exploreRcmds
    padding: (30/$rem) (40/$rem)
    margin-bottom: (20/$rem)
    background-color: #fff;
    .container
      .module-title
        width (690/$rem)
        height (100/$rem)
        font-size (33/$rem)
        text-align: center
        line-height (70/$rem)
      .m-mainPosItem
        margin-bottom: (30/$rem)
        display: block;
        position: relative;
        color: #333;
        border: 1px solid #d9d9d9;
        border-radius: (5/$rem)
        overflow: hidden;
        .imgContainer
          background-image: url(//yanxuan.nosdn.127.net/09d83c97c9963495e6518cfbec776b4c.jpg?imageView&quality=75);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          height: (386/$rem)
          border-radius: (5/$rem) (5/$rem) 0 0;
          overflow: hidden;
          .topicTag
            position: absolute;
            left: (20/$rem) //0.2667rem
            .m-exploreTag
              display: inline-block;
              padding: (16/$rem)
              height: (30/$rem)
              line-height:(30/$rem)
              background-color: rgba(255,255,255,.9);
              border: 1px solid #d9d9d9;
              border-radius: (20/$rem)
              color: #333;
              font-size: (24/$rem)
    .topicInfo
      overflow: hidden
      position: relative;
      padding: (24/$rem) (20/$rem) (67/$rem)
      background-color: #fff
      .line1
        margin-bottom: (19/$rem)
        display: flex;
        align-items: center;
        /*line-height: (14/$rem)*/
        justify-content: space-between;
        .title
          margin-right: (30/$rem)
          font-size: (40/$rem)
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;

        .price
          font-size: (40/$rem)
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          .num
            float: left;
            font-size: (32/$rem)

          .unit
            float: left;
            font-size: (32/$rem)
      .line2
        .subTitle
          position: relative;
          font-size: (30/$rem)
          line-height: 1.2;
          color: #7f7f7f;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
    .m-minorPosItem
      display: flex;
      background-color: #fff;
      color: #333;
      border: 1px solid #d9d9d9;
      border-radius: (5/$rem)
      margin-bottom: (30/$rem)
      .topicInfo
        flex: 1;
        display: flex;
        justify-content: center;
        overflow: hidden;
        position: relative;
        padding-left: (20/$rem)
        padding-right: (30/$rem)
        .author-container
          margin-bottom: (25/$rem)
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          .author
            height: (48/$rem)
            font-size: (20/$rem)
            display: flex;
            align-items: center;
            .avatar
              width: (46/$rem)
              height: (46/$rem)
              margin-right: (1/$rem)
              border-radius: 50%;
              img
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            .nickname
              color: #333;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
          .line1
            margin-bottom: (14/$rem)
            /*line-height: (1.2/$rem)  */
            .title
              margin-right: (30/$rem)
              font-size: (40/$rem)
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
          .line2
            .subTitle
              overflow: hidden;
              text-overflow: ellipsis;
              position: relative;
              font-size: (30/$rem)
              line-height: 1.5;
              color: #7f7f7f;
              white-space: normal;
              height: 182px;
        .minorPic
          position: relative;
          width: (280/$rem)
          height: (272/$rem)
          .imgContainer
            width: 100%;
            //background-image: url(//yanxuan.nosdn.127.net/7af712a….jpg?imageView&quality=75);
            img
              width: 100%;
              background-position: center;
              background-repeat: no-repeat;
            .topicTag
              position: absolute;
              top: (-5/$rem)
              left: (10/$rem)
              .m-exploreTag
                font-size: (30/$rem)
                display: inline-block;
                padding: 0 (16/$rem)
                height: (36/$rem)
                line-height: (36/$rem)
                background-color: rgba(255,255,255,.9);
                border: 1px solid #d9d9d9;
                border-radius: (20/$rem)
                color: #333
</style>

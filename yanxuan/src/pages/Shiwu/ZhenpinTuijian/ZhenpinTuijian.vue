<template>
  <!--为你推荐-->
  <div class="recommend">
    <div class="line"></div>
    <div class="container">
      <div class="hd">为你推荐</div>
      <a  class="topR" href="javascript:;">
        <div class="imgContainer">
            <img :src="recommendOne.picUrl" alt="pic">
            <div class="flag_recommend">{{recommendOne.typeName}}</div>
        </div>
        <div class="desc">
          <h4 class="title">{{recommendOne.title}}</h4>
          <div class="price">{{recommendOne.priceInfo}}元起</div>
          <p class="txt">{{recommendOne.subTitle}} </p>
        </div>
      </a>
      <a class="bottomR" href="javascript:;">
        <div class="recmList">
          <div class="recmItem">
            <div class="itemLeft">
              <div class="author">
                <img :src="recommendTwo.avatar" alt="tx" class="avatar">
                <span class="name">{{recommendTwo.nickname}}</span>
              </div>
              <div class="content">
                <h4 class="title">{{recommendTwo.title}}</h4>
                <p class="txt">{{recommendTwo.subTitle}}</p>
              </div>
            </div>
            <div class="itemRight">
              <div class="imgContainer">
                <img :src="recommendTwo.picUrl" alt="pic">
                <div class="flag_recommend">{{recommendTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a class="bottomR" href="javascript:;">
        <div class="recmList">
          <div class="recmItem">
            <div class="itemLeft">
              <div class="author">
                <img :src="recommendThree.avatar" alt="tx" class="avatar">
                <span class="name">{{recommendThree.nickname}}</span>
              </div>
              <div class="content">
                <h4 class="title">{{recommendThree.title}}</h4>
                <p class="txt">{{recommendThree.subTitle}}</p>
              </div>
            </div>
            <div class="itemRight">
              <div class="imgContainer">
                <img :src="recommendThree.picUrl" alt="pic">
                <div class="flag_recommend">{{recommendThree.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState([
        'recommendOne',
        'recommendTwo',
        'recommendThree',
        'zhenOne',
        'zhenTwo',
        'zhenThree'
      ])
    },
    mounted(){
      this.$store.dispatch('getRecommends')
      this.$store.dispatch('getZhen')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .recommend
    box-sizing border-box
    padding (10/$unit) (20/$unit)
    margin-bottom (10/$unit)
    position relative
    background-color #fff
    .line
      position absolute
      left 0
      width 10rem
      height (10/$unit)
      background-color #f4f4f4
    .container
      position relative
      width 100%
      border-radius (4/$unit) (4/$unit)
      overflow hidden
      .topR
        display block
        position relative
        color #333
        border 1px solid #e9e9e9
        border-radius (4/$unit)
        overflow hidden
        margin-bottom (10/$unit)
        img
          height (220/$unit)
          width 9rem
        .flag_recommend
          position absolute
          text-align center
          width (68/$unit)
          top (10/$unit)
          left (10/$unit)
          height (20/$unit)
          line-height (20/$unit)
          border-radius (4/$unit)
          border 1px solide #d9d9d9
          color #333
          z-index 2
          font-size (12/$unit)
          background-color #fff
      .bottomR
        display block
        position relative
        color #333
        border 1px solid #e9e9e9
        border-radius (4/$unit)
        overflow hidden
        height (136/$unit)
        margin-bottom (15/$unit)
        .itemLeft
          float left
          width 50%
          padding (8/$unit) (8/$unit)
          .author
            height 0.64rem
            line-height 0.64rem
            font-size (12/$unit)
            margin-bottom (16/$unit)
            vertical-align center
            .name
              font-size (12/$unit)
              display inline-block
              overflow hidden
            img
              width 0.64rem
              height 0.64rem
              margin-right (2/$unit)
              border-radius 50%
          .content
            .title
              font-size (16/$unit)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin-bottom (5/$unit)
            .txt
              font-size (14/$unit)
              color #7f7f7f
              line-height 1.5
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
        .itemRight
          position relative
          float right
          width 40%
          img
            width 100%
            height 100%
          .flag_recommend
            float left
            position absolute
            top (6/$unit)
            left (8/$unit)
            background-color rgba(255,255,255,.9)
            font-size (12/$unit)
            color #333333
            border-radius (10/$unit)
            height (18/$unit)
            line-height (18/$unit)
            padding 0 (2/$unit)
      .hd
        height 1.8rem
        line-height 2rem
        text-align center
        font-size (16/$unit)
    .desc
      overflow visible
      background-color #fff
      padding (12/$unit) (10/$unit) 0
      .title
        font-size  (18/$unit)
        margin-right (15/$unit)
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        float left
      .price
        display inline-block
        float right
      p
        width 100%
        line-height 1.2rem
        color #7f7f7f
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
</style>

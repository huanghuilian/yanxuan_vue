<template>
  <!--更多精彩-->
  <div class="moreInfo">
    <div class="moreInner">
      <div class="hd">
        <div class="title">更多精彩</div>
      </div>
      <div v-for="(essay,index) in findMore">
        <!--一张图片-->
        <div class="content" v-if="!essay.picList">
          <a href="javascript:;">
            <div class="item">
              <div class="imgContainer">
                <img v-lazy="essay.itemPicUrl" alt="pic">
              </div>
              <div class="desc">{{essay.subtitle}}</div>
            </div>
          </a>
        </div>
        <!--三张图片的-->
        <div class="content" v-if="essay.picList&&essay.picList.length>3">
          <a href="javascript:;">
            <div class="item">
              <div class="pics">
                <img v-lazy="essay.picList[0]" alt="pic" class="left_pic">
                <div class="pic_right">
                  <img v-lazy="essay.picList[1]" alt="pic">
                  <img v-lazy="essay.picList[2]" alt="pic">
                </div>
              </div>
              <div class="desc">{{essay.subTitle}}</div>
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['findMore'])
    },
    mounted(){
      this.$store.dispatch('getfindMore')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .moreInfo
    width 100%
    position relative
    padding 0 (15/$unit)
    margin-bottom (50/$unit)
    .moreInner
      display block
      .hd
        height (30/$unit)
        text-align center
        font-size (18/$unit)
        text-align center
        .title
          position relative
          margin (28/$unit) auto
          box-sizing border-box
          width 100%
          height 100%
          &:before
            position absolute
            top 0.211rem
            left 0.1rem
            z-index 2
            content: ''
            height (1/$unit)
            width (132/$unit)
            background-color #B5B5B5
          &:after
            position absolute
            top 0.211rem
            right 0.1rem
            z-index 2
            content: ''
            height (1/$unit)
            width (132/$unit)
            background-color #b5b5b5
      .content
        width 100%
        height (250/$unit)
        a
          display block
          padding 0.32rem
          margin 0.4rem 0
          color #333333
          background-color #fff
          .item
            display block
            width 8.56rem
            height 4.8rem
            background-color #f4f4f4
            .pics
              height 100%
              .left_pic
                width (250/$unit)
                height 4.8rem
                float left
              .pic_right
                float right
                height 100%
                img
                  display flex
                  flex-direction column
                  width (70/$unit)
                  height 50%
            .desc
              width 9.2rem
              height (50/$unit)
              margin-left -(12/$unit)
              line-height 1.2
              background-color #fff
              font-size (12/$unit)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              padding (16/$unit) 0 (25/$unit) (15/$unit)
              text-align left
              margin-bottom (20/$unit)
            img
              width 8.56rem
              height 4.8rem
</style>

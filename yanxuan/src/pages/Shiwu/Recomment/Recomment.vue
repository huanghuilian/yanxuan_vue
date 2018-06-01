<template>
  <!--文章推荐-->
  <div class="article_recommend">
    <div class="scrollContainer">
      <ul class="list">
        <li class="item" v-for="(essay,index) in columnRecommend" :key="index">
          <a href="javascript:;">
            <div class="imgContainer">
              <img :src="essay.picUrl" alt="pic">
            </div>
            <div class="essay-num">{{essay.articleCount}}</div>
            <div class="presenter">{{essay.title}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState(['columnRecommend'])
    },
    mounted(){
      this.$store.dispatch('getcolumnRecommend',()=>{
        this.$nextTick(()=>{
          new BScroll('.scrollContainer',{
            probeType:3,
            click:true,
            scrollX:true
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .article_recommend
    padding (16/$unit) (15/$unit) (14/$unit)
    height (143/$unit)
    margin-bottom (10/$unit)
    width 100%
    .scrollContainer
      position relative
      .list
        white-space nowrap
        overflow hidden
        float left
        .item
          width (82/$unit)
          height (105/$unit)
          margin-right (12/$unit)
          display inline-block
          .imgContainer
            width (82/$unit)
            height (82/$unit)
            margin-bottom (11/$unit)
            img
              width 100%
              height 100%
          .essay-num
            font-size (12/$unit)
            text-align right
            color #fff
            position absolute
            top 0
            right (4/$unit)
            height (16/$unit)
            width 1.8rem
            border-radius (5/$unit)
            background-image url("../../../common/imgs/bg_recommend.png")

          .presenter
            line-heigh 1
            text-align ceter
            width (92/$unit)
            margin-left -(5/$unit)
            color #333333
</style>

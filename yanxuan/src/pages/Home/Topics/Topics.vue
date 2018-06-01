<template>
  <!--专题精选-->
  <div class="m_floor">
    <header class="hd">
      <a href="javascript:;" class="more">
        <span>专题精选</span>
        <i class="iconfont icon-arrow-right"></i>
      </a>
    </header>
    <div class="m-indexTopics-slide">
      <div class="inner" id="topicContainer">
        <ul class="list">
          <li class="item" v-for="(topic) in topicList" :key="topic.id">
            <a href="javascript:;" class="imgWrap">
              <img class="img" :src="topic.itemPicUrl" alt="pic">
            </a>
            <div class="line">
              <h4 class="title">{{topic.title}}</h4>
              <span class="price">{{topic.priceInfo}}元起</span>
            </div>
            <div class="desc">{{topic.subtitle}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState(['topicList'])
    },
    mounted(){
      this.$store.dispatch('getTopicList',()=>{
        this.$nextTick(()=>{
          new BScroll('#topicContainer',{
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
  /*专题精选*/
  .m_floor
    margin-bottom (10/$unit)
    background-color #fff
    .hd
      height (55/$unit)
      text-align center

      span
        font-size (17/$unit)
        height 100%
        line-height (55/$unit)
      i
        font-size (17/$unit)
  .m-indexTopics-slide
    padding (0/$unit) (18/$unit)
    height (220/$unit)
    .inner
      height 100%
      .list
        float left
        height 100%
        white-space nowrap
        .item
          display inline-block
          width (287/$unit)
          margin-right (20/$unit)
          .imgWrap
            display block
            width (287/$unit)
            height (160/$unit)
            overflow hidden
            border-radius 4px
            margin-bottom (8/$unit)
            img
              position relative
              width (287/$unit)
              height 100%
          .line
            height (20/$unit)
            margin-top
            margin-bottom (1/$unit)
            .title
              display inline-block
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              float left
              font-size (14/$unit)
              font-weight 400
            .price
              font-size (14/$unit)
              float right
              color #b4282d

          .desc
            height (25/$unit)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            color #7F7F7F
            text-align left
            font-size (13/$unit)
</style>

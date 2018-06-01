<template>
  <!--十点一刻-->
  <div class="wrap">
    <div class="tenFifteen">
      <div class="inner">
        <div class="hd">十点一刻</div>
        <div class="slideContainer" id="TenFifteen">
          <ul class="list">
            <li class="item" v-for="(topicToday,index) in tenfifteen" :key="index">
              <a href="javascript:;">
                <div class="suvTitle">今日话题</div>
                <div class="title">{{topicToday.title}}</div>
                <div class="question">{{topicToday.desc}}</div>
                <div class="join">
                  <div class="left-avatar" v-show="topicToday.participantNum>0" >
                    <img v-for="(Avatar,index) in topicToday.participantAvatar" :src="Avatar" :key="index" alt="avatar">
                  </div>
                  <div class="right-joinNum">{{topicToday.participantNum||'无'}}人参与话题</div>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState([
        'tenfifteen'
      ])
    },
    mounted(){
      this.$store.dispatch('gettenfifteen',()=>{
        this.$nextTick(()=>{
          new BScroll('#TenFifteen',{
            scrollX:true,
            click:true,
            probeType:2
          })
        })
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .wrap
    background-color #fff
    .tenFifteen
      width (345/$unit)
      height (325/$unit)
      padding (10/$unit) (20/$unit)
      .inner
        width 100%
        height 100%
        .hd
          height 1.6rem
          line-height 1.6rem
          font-size (18/$unit)
          text-align center
        .slideContainer
          width 100%
          height 100%
          .list
            white-space nowrap
            float left
            .item
              display inline-block
              width (290/$unit)
              height (230/$unit)
              margin-right 0.4rem
              color #333333
              padding (19/$unit) (20/$unit) (40/$unit)
              background-image url("../../../common/imgs/huati_bg.png")
              background-repeat no-repeat
              background-size 100% 100%
              text-align center
              &.moretody
                position: relative;
                height 6rem
              a
                position relative
                width (292/$unit)
                width (230/$unit)
                color #333333
                padding (19/$unit) (20/$unit) (40/$unit)
                margin-right 0.4rem
                .suvTitle
                  position relative
                  width (80/$unit)
                  height (20/$unit)
                  font-size (14/$unit)
                  line-height (20/$unit)
                  display inline-block
                  margin-bottom (20/$unit)
                  &:before
                    position absolute
                    top (9/$unit)
                    left -(4/$unit)
                    content: ''
                    height (0.5/$unit)
                    background-color #333333
                    display block
                    width (14/$unit)
                  &:after
                    position absolute
                    top (9/$unit)
                    right -(4/$unit)
                    content: ''
                    height (0.5/$unit)
                    background-color #333333
                    display block
                    width (14/$unit)

                .title
                  margin-bottom (13/$unit)
                  font-weight 700
                  font-size 0.48rem
                  text-align center
                .question
                  line-height 1.5
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                .join
                  position absolute
                  left (-80/$unit)
                  bottom (-10/$unit)
                  width (180/$unit)
                  height (24/$unit)
                  text-align center
                  margin-top (20/$unit)
                  vertical-align middle
                  .right-joinNum
                    height 0.64rem
                    line-height 0.64rem
                    font-size (12/$unit)
                  .left-avatar
                    position relative
                    float left
                    white-space nowrap
                    height 0.64rem
                    width 3rem
                    overflow hidden
                    border 1px solid #fff
                    z-index 2
                    img
                      display inline-block
                      margin-left -(8/$unit)
                      height 0.64rem
                      width 0.64rem
                      border-radius 50%
</style>

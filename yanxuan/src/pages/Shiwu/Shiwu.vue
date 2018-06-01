<template>
  <div id="shiwu">
    <ShiwuTop/>
    <!--识物页的轮播-->
    <Carouse/>
    <!--文章推荐-->
    <Recomment/>
    <!--为你推荐-->
    <ZhenpinTuijian/>
    <!--十点一刻-->
    <tenFifteen/>
    <!--严选臻品-->
    <Zhenxuan/>
    <!--严选LOOK-->
    <div class="LOOK">
      <div class="lookInner">
        <div class="hd">LOOK严选</div>
        <a href="javascript:;" class="content">
          <img :src="yxLook.picUrl" alt="img">
          <div class="topicInfo">
            <div class="avatar">
              <img :src="yxLook.avatar" alt="img">
              <span class="name">{{yxLook.nickname}}</span>
              <span >{{yxLook.content}}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!--更多精彩-->
    <MoreContent/>
  </div>
</template>

<script>
  import ShiwuTop from '../../components/ShiwuTop/ShiwuTop'
  import Carouse from './Carouse/Carouse'
  import Recomment from './Recomment/Recomment'
  import ZhenpinTuijian from './ZhenpinTuijian/ZhenpinTuijian'
  import Zhenxuan from './ZhenpinTuijian/Zhenxuan'
  import tenFifteen from './tenFifteen/tenFifteen'
  import MoreContent from './MoreContent/MoreContent'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState([
        'yxLook'
      ])
    },
    mounted(){
      this.$store.dispatch('getyxLook')
    },
    components:{
      ShiwuTop,
      Carouse,
      Recomment,
      ZhenpinTuijian,
      tenFifteen,
      MoreContent,
      Zhenxuan
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import '../../common/stylus/mixins.styl'
  #shiwu
    position relative
    top 0
    left 0
    height 100%
    width 10rem
    background-color #fff
    .LOOK
      position relative
      .lookInner
        background #fff
        text-align center
        .hd
          font-size (18/$unit)
          height 1.6rem
          line-height 1.6rem
        .content
          display block
          color #333333
          position relative
          height (338/$unit)
          img
            width 10rem
            height (268/$unit)
          .topicInfo
            width 10rem
            padding (12/$unit) (15/$unit) (25/$unit)
            height 0.64rem
            line-height 0.64rem
            font-size (12/$unit)
            .avatar
              float left
              margin-right (4/$unit)
              img
                width (28/$unit)
                height (28/$unit)
                border-radius 50%
              .name
                display inline-block
                font-size (12/$unit)
                color #333333
                white-space nowrap
                overflow hidden
                text-overflow ellipsis


</style>

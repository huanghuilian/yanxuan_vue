<template>
  <!--首页滑屏区-->
  <div class="banner">
    <div class="swiper-container slideWrap">
      <ul class="list swiper-wrapper">
        <li class="item swiper-slide" v-for="(carouse,index) in focusList" :key="carouse.id">
          <a href="javascript:;">
            <img :src="carouse.picUrl" alt="slide">
          </a>
        </li>
      </ul>
    </div>
    <div class="swiper-pagination"></div>
    <div class="m-indexServicePolicy">
      <ul class="serverList ">
        <li class="item ">
          <a href="javascript:;">
            <i class="iconfont icon-dagou1"></i>
            <span class="text">网易自营商品</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <i class="iconfont icon-dagou1"></i>
            <span class="text">30天无忧退货</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <i class="iconfont icon-dagou1"></i>
            <span class="text">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      this.$store.dispatch('getFocusList',()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      })
    },
    computed:{
      ...mapState(['focusList'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  /*首页滑屏区*/
  .banner
    width 100%
    position relative
    padding-to (200/$unit)!important
    margin-bottom (10/$unit)
    box-sizing border-box
    .slideWrap
      width 100%
      height (300/$unit)
      overflow hidden
      font-size 0
    .swiper-pagination
      position absolute
      top (260/$unit)
      left 50%
      margin-left -32px
      span
        margin-left 2px
    .list
      clearFix()
      white-space nowrap
      height 100%
      .item
        //display inline-block
        float left
        width 10rem
        height 100%
        img
          width 10rem
          height 100%

    .m-indexServicePolicy
      height (36/$unit)
      background-color #fff
      padding 0 (15/$unit)
      .serverList
        display flex
        white-space nowrap
        height 100%
      .item
        flex 1
        height 100%
        float left
        line-height (36/$unit)
        i
          color #B4282D
          margin-right (2/$unit)
        span
          font-size (12/$unit)
</style>

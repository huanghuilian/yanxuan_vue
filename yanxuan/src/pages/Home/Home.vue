<template>
  <div id="app">
    <HeadTop/>
    <!--首页滑屏区-->
    <Carouse/>
    <!--品牌制造商直购-->
    <Manufactory/>
    <!--新品首发 人气推荐 好物精选-->
    <NewGoods/>
    <!--严选限时购-->
    <ShopLimit/>
    <!--福利社-->
    <Fulishe/>
    <!--专题精选-->
    <Topics/>
    <!--居家好物-->
    <GoodGrid/>
    <div class="footWrap">
      <div class="foot">
        <div class="footContent">
          <a href="javascript:;" class="goApp">下载APP</a>
          <a href="javascript:;" class="goWeb">电脑版</a>
        </div>
        <p class="copyright">
          <span class="copyright">网易公司版权所有 © 1997-</span>
          <span class="copyright">2018</span><br>
          <span class="copyright">食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>

    <div class="present">
      <i class="iconfont icon-present_surface"></i>
    </div>
    <div class="Top">
      <i class="iconfont icon-arrow-up"></i>
    </div>


    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>
<script>
  import HeadTop from '../../components/HeadTop/HeadTop'
  import Carouse from './Carouse/Carouse'
  import Manufactory from './Manufactory/Manufactory'
  import NewGoods from './NewGoods/NewGoods'
  //import PopularComment from './PopularComment/PopularComment'
  import ShopLimit from './ShopLimit/ShopLimit'
  import Fulishe from './Fulishe/Fulishe'
  import Topics from './Topics/Topics'
  import GoodGrid from './GoodGrid/GoodGrid'

  export default {
    components: {
      HeadTop,
      Carouse,
      Manufactory,
      NewGoods,
      ShopLimit,
      Fulishe,
      Topics,
      GoodGrid
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  $unit = (375 / 10) rem;
  #app
    width 100%
    heigth 100%
    position relative
    .footWrap
      border-top 1px solid rgba(0,0,0,.15)
      background-color #414141
      width 10rem
      .foot
        padding .72rem .26667rem .37333rem
        width 100%
        .footContent
          height (31/$unit)
          text-align center
          position relative
          .goApp
            font-size (12/$unit)
            padding (6/$unit) (16/$unit)
            height (30/$unit)
            border 1px solid #999
            border-radius (4/$unit)
            color #fff
          .goWeb
            font-size (12/$unit)
            padding (6/$unit) (25/$unit)
            height (30/$unit)
            border 1px solid #999
            border-radius (4/$unit)
            color #fff
            margin-left (20/$unit)
        .copyright
          text-align center
          font-size 0.32rem
          line-height (16/$unit)
          color #999
    .present
      position fixed
      right 0
      bottom 20%
      z-index 100
      width (56/$unit)
      height (40/$unit)
      border-radius 25% 5% 5% 25%
      background-color #fff
      border 1px #eee solid
      text-align center
      transform translateX((0/$unit))
      animation move step-end 2s
      @keyframes move{
        from {transform :translateX((56/$unit))}
        to {transform:translateX(0)}
      }
      i
        line-height (38/$unit)
        color firebrick
        font-size (30/$unit)
    .Top
      position fixed
      right (11.5/$unit)
      bottom 1.7rem
      vertical-align middle
      width (41/$unit)
      height (41/$unit)
      z-index 100
      border 1px #ddd solid
      border-radius 50%
      text-align center
      vertical-align center
      background-color #fff
      i
        font-size (28/$unit)
        line-height (40/$unit)
        color #999
</style>

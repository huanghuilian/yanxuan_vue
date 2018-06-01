<template>
  <!--严选限时购-->
  <div class="shopLimit">
    <a href="javascript:;">
      <div class="m_indexFlash">
        <div class="left_item">
          <div class="title">严选限时购</div>
          <div class="m_countDown" v-show="flashSaleIndexVO">
         <!--   {{flashSaleIndexVO.remainTime|date-format}}
            {{flashSaleIndexVO.nextStartTime|date-format}}
            {{Date.now()|date-format}}-->
            <span class="hour">{{hour}}</span>
            <span class="colon">:</span>
            <span class="mins">{{minute}}</span>
            <span class="colon">:</span>
            <span class="secs">{{second}}</span>
          </div>
          <div class="next-title">
            <div>
              <span>下一场</span>
              <span>18:00</span>
              <span>开始</span>
            </div>
          </div>
        </div>
        <div class="right_item">
          <div class="goodPic">
            <img :src="flashSaleIndexVO.primaryPicUrl" alt="pic">
          </div>
          <div class="price">
            <div class="priceNow">
              <span class="rmb1">￥</span>
              <span>{{flashSaleIndexVO.activityPrice}}</span>
            </div>
            <div class="priceOld">
              <span class="rmb2">￥</span>
              <span>{{flashSaleIndexVO.originPrice}}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  import {ReqflashSaleIndex} from '../../../api'
  import {mapState} from 'vuex'
  export default {

    data() {
      return {
        flashSaleIndexVO: {},
        hour: '00',
        minute: '00',
        second: '00',
        count: 0,
        interval: null
      }
    },
    async mounted() {

      const result = await ReqflashSaleIndex()
      this.flashSaleIndexVO = result.data
      this.count =this.flashSaleIndexVO.nextStartTime -  new Date().getTime(),
      console.log(this.flashSaleIndexVO.nextStartTime,new Date().getTime())
      this.start()
    },
    methods: {
      start() {
        this.interval = setInterval(() => {
          this.count = this.count - 1000
          if (this.count <= 0) {
            this.second = '00'
            clearInterval(this.interval)
            this.timeDown()
            return
          }
          this.hour = parseInt(this.count / (60 * 60 * 1000)) + ''
          if (this.hour < 10) {
            this.hour = '0' + this.hour
          }
          let n = this.count % (60 * 60 * 1000)
          this.minute = parseInt(n / (60 * 1000)) + ''
          if (this.minute < 10) {
            this.minute = '0' + this.minute
          }
          let n2 = n % (60 * 1000)
          this.second = parseInt(n2 / 1000) + ''
          if (this.second < 10) {
            this.second = '0' + this.second
          }
        }, 1000)
      },
      timeDown() {
        this.$emit('timeDown')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  /*严选限时购*/
  .shopLimit
    height (190/$unit)
    .m_indexFlash
      padding (15/$unit) (20/$unit) (15/$unit) (28/$unit)
      margin-bottom (10/$unit)
      height (190/$unit)
      background-color #fff
      .left_item
        display inline-block
        width (160/$unit)
        height (160/$unit)
        padding-top (40/$unit)
        .title
          font-size (18/$unit)
          line-height (18/$unit)
          margin-bottom (12/$unit)
          color #333
        .m_countDown
          display inline-block
          span
            display inline-block
            width (30/$unit)
            height (28/$unit)
            color #fff
            background-color #444
            text-align center
            line-height (28/$unit)
            &.colon
              display inline
              color #333
              background-color transparent
              font-size (20/$unit)
        .next-title
          margin-top (20/$unit)
          color: #333
          font-size (12/$unit)
          line-height (12/$unit)
          height (12/$unit)
      .right_item
        position relative
        display inline-block
        float right
        width (158/$unit)
        height (158/$unit)
        .goodPic
          width 100%
          height 100%
          img
            width 100%
            height 100%
        .price
          position absolute
          bottom (18/$unit)
          right (8/$unit)
          background-color rgba(244,143,24,.95)
          width 1.28rem
          height 1.28rem
          border-radius 0.64rem
          padding-top (10/$unit)
          span
            color #fff
          .priceNow
            width 100%
            height 0.37rem
            line-height 0.37rem
          .priceOld
            width 100%
            height 0.37rem
            line-height 0.37rem

</style>

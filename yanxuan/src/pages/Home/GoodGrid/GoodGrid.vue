<template>
  <div>
    <!--主页的最后一类列表-->
    <div class="m_floor" v-for="(category,index) in cateList" :key="category.id">
      <div class="m-titleGoodGrid">
        <h3 class="title">{{category.name}}好物</h3>
        <div class="m-goodGrid" v-show="category">
          <ul class="list">
            <li class="item" v-for="(item) in category.itemList" :key="item.id">
              <a href="javascript:;" class="good">
                <div class="hd">
                  <div class="wraper">
                    <img :src="item.listPicUrl" alt="good">
                  </div>
                  <div class="desc">{{item.simpleDesc}}</div>
                </div>
                <div class="name">
                  <span>{{item.name}}</span>
                </div>
                <div class="price">
                  <span>￥{{item.retailPrice}}</span>
                </div>
                <div class="specification" v-if="item.colorNum">
                  <div>{{item.colorNum}}</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;" class="more">
                <p class="txt">更多居家好物</p>
                <i class="iconfont icon-right"></i>
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
  export default {
    computed:{
      ...mapState(['cateList'])
    },
    mounted(){
      this.$store.dispatch('getCateList')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  /*居家好物*/
  .m-titleGoodGrid
    background #fff
    width 100%
    .title
      font-size (14/$unit)
      color #333333
      text-align center
      line-height 1.6rem
    .m-goodGrid
      background #fff
      width 100%
      .list
        position relative
        overflow hidden
        z-index 0
        .item
          position relative
          float left
          width 50%
          padding 0 (5/$unit) (16.5/$unit) (10/$unit)
          text-align left
          a
            display block
            width 100%
            height 100%
            &.more
              background #f4f4f4
              padding (64/$unit) 0
              text-align center
              margin 0 auto
              width (160/$unit)
              height (207/$unit)
              .txt
                font-size (16/$unit)
                color #333
                margin-bottom 0.8rem
              i
                font-size (42/$unit)
                color #999
                font-weight 200
          .hd
            position relative
            width 100%
            height (207/$unit)
            border-radius (2/$unit)
            background #f4f4f4
            img
              display block
              position absolute
              height 4.6rem
              width 100%
              border-radius (2/$unit) (2/$unit)

          .desc
            position absolute
            bottom 0
            width 100%
            border-radius 0 0 (2/$unit) (2/$unit)
            color #9F8A60
            background #F1ECE2
            padding (10/$unit) (5/$unit)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis

          .name
            margin-top (5/$unit)
            padding (5/$unit)

            white-space nowrap
            overflow hidden
            text-overflow ellipsis

            height 0.64rem
            line-height 0.64rem
            span
              font-size (14/$unit)
              color #333333

          .price
            padding (5/$unit)
            span
              font-size (16/$unit)
              color #b4282d
              line-height 1px
          .specification
            position absolute
            top 0
            border-style solid
            border-color #b4a078
            width (16/$unit)
            margin (5/$unit) 0 0 (5/$unit)
            padding 0.14rem 0
            display flex
            flex-direction column
            border-width 0.5px
            border-radius (2/$unit)
            text-align center
            div
              color #b4a078
              font-size (12/$unit)
</style>

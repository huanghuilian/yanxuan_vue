<template>
  <div>
    <!--新品首发-->
    <div class="m_floor m_newItems">
      <header class="hd">
        <a href="javascript:;" class="more">
          <span>新品首发</span>
          <div class="all">
            <div class="wrap">
              <span>查看全部</span>
              <i class="iconfont icon-arrow-right1"></i>
            </div>
          </div>
        </a>
      </header>
      <div class="m_goodGrid">
        <div class="slideContainer">
          <ul class="list">
            <li class="item" v-for="(newItem,index) in newItemList" :key="index">
              <a href="javascript:;" class="good">
                <div class="picWrap">
                  <img :src="newItem.listPicUrl" alt="newGood">
                </div>
                <div class="des">
                  <p class="status gradientPrice"
                     :class="statusClassess[newItem.status]||statusClassess[1]"
                     v-if="newItem.itemTagList.find((itemTag,index)=>itemTag.type!==1)">
                    {{newItem.itemTagList.find((itemTag,index)=>itemTag.type!==1).name}}</p>
                  <div class="name">
                    <span>{{newItem.name}}</span>
                  </div>
                  <div class="newItemDesc">{{newItem.simpleDesc}}</div>
                  <div class="price">￥{{newItem.retailPrice}}</div>
                </div>
                <div class="specification" v-if="newItem.colorNum>0">
                  <div>{{newItem.colorNum}}</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;" class="good more">
                <span class="text">查看全部</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--人气推荐 好物精选-->
    <div class="m_floor m_newItems">
      <header class="hd popu">
        <a href="javascript:;" class="more">
          <span>人气推荐 · 好物精选</span>
          <div class="all">
            <div class="wrap">
              <span>查看全部</span>
              <i class="iconfont icon-arrow-right1"></i>
            </div>
          </div>
        </a>
      </header>
      <div class="m_goodGrid">
        <div class="slideContainer" id="popularContainer">
          <ul class="list">
            <li class="item" v-for="(item,index) in popularItem" :key="index">
              <a href="javascript:;" class="good">
                <div class="picWrap">
                  <img :src="item.listPicUrl" alt="newGood">
                </div>
                <div class="des">
                  <p class="status gradientPrice"  :class="statusClassess[item.itemTagList.find((itemTag,index)=>itemTag.type!==1).type]||statusClassess[1]"
                     v-if="item.itemTagList.find((itemTag,index)=>itemTag.type!==1)">
                    {{item.itemTagList.find((itemTag,index)=>itemTag.type!==1).name}}
                  </p>
                  <div class="name">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="newItemDesc">{{item.simpleDesc}}</div>
                  <div class="price">￥{{item.retailPrice}}</div>
                </div>
                <div class="specification"  v-if="item.colorNum>0">
                  <div>{{item.colorNum}}</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;" class="good more">
                <span class="text">查看全部</span>
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
    data(){
      return {
        statusClassess:['status_red','status_orange'],
        itemTags:['爆品','新品','满额减','满赠']
      }
    },
    mounted(){
      this.$store.dispatch('getNewItemList',()=>{
        this.$nextTick(()=>{
          this.newItemBScroll = new BScroll('.slideContainer',{
            probeType:3,
            scrollX:true,
            click:true
          })
        })
      })
      this.$store.dispatch('getPopularItemList',()=>{
        this.$nextTick(()=>{
          this.popularBScroll = new BScroll('#popularContainer',{
            probeType:3,
            scrollX:true,
            click:true
          })
        })
      })
    },
    computed:{
      ...mapState(['newItemList','popularItem'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  $unit = (375/10)rem;
  /*新品首发 人气推荐 好物精选*/
  .m_newItems
    box-sizing border-box
    margin (10/$unit) 0
    background #fff
    .hd
      position relative
      background-image url("../../../common/imgs/bg_new.png")!important
      background-size (75/$unit) (38/$unit)
      height (130/$unit)!important
      margin-bottom (16/$unit)
      &.popu
        background-image url("../../../common/imgs/bg_populay.png")!important
      .more
        display block
        text-align center
        margin 0 auto
        width (160/$unit)
        span
          font-size 0.48rem
          color #8BA0B6
        .all
          position relative
          box-sizing border-box
          margin (8/$unit) auto 0
          width 3.2rem
          height (28/$unit)
          line-height (28/$unit)
          background #D8E5F1
          .wrap
            position absolute
            left 0
            top 0
            width 3.2rem
            height (28/$unit)
            text-align center
            margin -(14/$unit) auto
            span
              font-size (14/$unit)
            i
              font-size (12/$unit)

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
      div
        color #b4a078
        font-size (12/$unit)
    .m_goodGrid
      height (240/$unit)
      background #fff
      width 100%
      overflow hidden
      .slideContainer
        margin 0 auto
        overflow hidden
        width 100%
        height (240/$unit)
        .list
          float left
          height (240/$unit)
          white-space nowrap
          .item
            background-color blanchedalmond
            display inline-block
            padding 0!important
            margin-left 0.4rem
            width (140/$unit)
            height (240/$unit)
            overflow hidden
            background #fff
            .good
              display block
              height (140/$unit)
              width 100%
              &.more
                border (4/$unit) solid #F4F4F4
                .text
                  display block
                  height (140/$unit)
                  line-height (140/$unit)
                  color #666
                  font-size (14/$unit)

              .picWrap
                background-color #f4f4f4
                height (140/$unit)
                width 100%
                img
                  height (140/$unit)
                  width (140/$unit)
              .des
                margin (5/$unit) 0
                padding (5/$unit)
                font-size (14/$unit)
                line-height (17/$unit)
                text-align left
                p
                  margin-left 0.16rem
                  height 0.5rem
                  line-height 0.5rem
                  text-align center
                  vert-align middle
                  font-size (10/$unit)
                  color #fff

                  &.status_orange
                    background-color #f48f18
                    width (40/$unit)
                  &.status_red
                    background-color #e5686d
                    width (36/$unit)
                span
                  display block
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                  color #333
                .newItemDesc
                  margin-bottom (7/$unit)
                  padding (5/$unit)
                  line-height 0.4rem
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                  color #7f7f7f


</style>

<template>
  <div>
    <HeadTop/>
    <div class="headNav_subItem">
      <div class="banner">
        <img src="../../common/imgs/slide/2.jpg" alt="pic">
      </div>
      <div class="m_subCategoryListContainer">
        <div class="hd">
          <h4 class="title">行李箱</h4>
          <p class="desc">轻奢行李箱陪你走天下</p>
        </div>
        <div class="listContainer">
          <ul class="list">
            <li class="item">
              <a href="javascript:;">
                <div class="itemTop">
                  <img src="../../common/imgs/itemList_xlx.png" alt="pic">
                  <div class="desc">40升适中容量，铝质包角，牢固抗摔</div>
                </div>
                <div class="status gradientPrice">三石福利价</div>
                <div class="name">
                  <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                </div>
                <div class="price">
                  <span>￥349</span>
                </div>
                <div class="selectedColor">
                  <div>9</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <div class="itemTop">
                  <img src="../../common/imgs/itemList_xlx.png" alt="pic">
                </div>
                <div class="status gradientPrice">三石福利价</div>
                <div class="name">
                  <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                </div>
                <div class="price">
                  <span>￥349</span>
                </div>
                <div class="selectedColor">
                  <div>9</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <div class="itemTop">
                  <img src="../../common/imgs/itemList_xlx.png" alt="pic">
                </div>
                <div class="status gradientPrice">三石福利价</div>
                <div class="name">
                  <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                </div>
                <div class="price">
                  <span>￥349</span>
                </div>
                <div class="selectedColor">
                  <div>9</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <div class="itemTop">
                  <img src="../../common/imgs/itemList_xlx.png" alt="pic">
                </div>
                <div class="status gradientPrice">三石福利价</div>
                <div class="name">
                  <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                </div>
                <div class="price">
                  <span>￥349</span>
                </div>
                <div class="selectedColor">
                  <div>9</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
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
  import HeadTop from '../../components/HeadTop/HeadTop'
  export default {
    mounted(){

    },
    components:{
      HeadTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .banner
    width 100%
    height 5.6rem
    background-color rosybrown
    margin-top (72/$unit)
    img
      height 5.6rem
  .m_subCategoryListContainer
    width 100%
    .hd
      height (60/$unit)
      background-color #fff
      text-align center
      line-height (60/$unit)
      .title
        padding-top (10/$unit)
        font-size (16/$unit)
        margin (10/$unit) 0
        line-height 1
      .desc
        color #999
        font-size (12/$unit)
        line-height 1

  .listContainer
    background-color #fff
    .list
      width 10rem
      text-align center
      .item
        box-sizing border-box
        width 5rem
        float left
        background-color bisque
        position relative
        overflow hidden
        z-index 10
        padding 0rem (5/$unit) (16.5/$unit) (10/$unit)
        a
          display block
          width 100%
          .itemTop
            position relative
            padding-bottom 120%
            box-sizing border-box
            width 100%
            border-radius (10/$unit)
            background-color #f4f4f4
            img
              display block
              position absolute
              width 100%
              height 4.6
              border-radius (2/$unit) (2/$unit) 0 0
              background-color #f4f4f4
            .desc
              position absolute
              bottom 0
              width 100%
              background-color #F1ECE2
              border-radius 0 0 (2/$unit) (2/$unit)
              color #9F8A60
              line-height (14/$unit)
              padding (10/$unit) (5/$unit)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-size (12/$unit)

</style>

<template>
  <div class="shopCart">
    <header class="head">
      <div class="head_top">
        <h3>购物车</h3>
      </div>
    </header>
    <div class="supplyContainer">
      <ul class="list">
        <li class="item">
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <span>48小时快速退款</span>
        </li>
        <li class="item">
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="img">
        <i class="iconfont"></i>
        <div class="text">去添加点什么吧</div>
      </div>
      <router-link to="/login" class="login" v-show="$store.state.userInfo">登录</router-link>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .shopCart
    width 100%
    height 100%
    position relative
    .head
      position relative!important
      height (43/$unit)
      line-height (14/$unit)
      padding (15/$unit)
      background-color #fff
      .head_top
        h3
          text-align center
          font-size (19/$unit)

    .supplyContainer
      position relative
      width 100%
      padding 0 (10/$unit)
      .list
        overflow hidden
        white-space nowrap
        height (35/$unit)
        width 100%
        text-align center
        margin-left -(6/$unit)
        .item
          position relative
          display inline-block
          width 33.333%
          height (35/$unit)
          text-align center
          line-height (35/$unit)
          &:nth-type-of()
            padding-left (4/$unit)
          &:before
            position absolute
            left (12/$unit)
            top (16/$unit)
            content ''
            display block
            width (4/$unit)
            height (4/$unit)
            border 1px solid #666
            border-radius 50%

    .content
      width 100%
      height 100%
      position relative
      .img
        position absolute
        top 30%
        left 30%
        text-align center
        i
          display block
          background-image url("../../common/imgs/shopcart.png")
          background-repeat no-repeat
          background-size (124/$unit)
          width  (124/$unit)
          height (124/$unit)
      .text
        position absolute
        bottom -(43/$unit)
        left (10/$unit)
        text-align center
        color #999
        font-size (14/$unit)
        margin-bottom (25/$unit)
      .login
        position absolute
        bottom 35%
        left 15%
        width 6.4rem
        height (46/$unit)
        background-color #b4282d
        color #fff
        line-height (46/$unit)
        text-align center
</style>

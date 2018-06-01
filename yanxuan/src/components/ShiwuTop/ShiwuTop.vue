<template>
  <!--识物头部-->
  <header class="head">
    <a href="/home" class="home">
      <i class="iconfont icon-home"></i>
    </a>
    <span class="title">网易严选</span>
    <div class="head-right">
      <i class="iconfont icon-artboard9-copy"></i>
      <i class="iconfont icon-cart"></i>
    </div>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .head
    box-sizing border-box
    width 10rem
    height (43/$unit)
    position fixed!important
    z-index 100
    top 0
    left 0
    background-color #fafafa
    padding (8/$unit) (12/$unit)
    text-align center
    .home
      float left
      height (43/$unit)
      i
        font-size (28/$unit)
        line-height (36/$unit)
    .title
      font-size (20/$unit)
      line-height (36/$unit)
      color #333
      font-family "华文仿宋"
      font-weight 700
      margin-left (18/$unit)
    .head-right
      float right
      i
        font-size (28/$unit)
        margin-left (10/$unit)
</style>

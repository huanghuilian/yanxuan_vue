<template>
  <!--分类的头部-->
  <header class="head">
    <div class="searchContainer">
      <i class="iconfont icon-artboard9-copy"></i>
      <span class="search">搜索商品, 共9734款好物</span>
    </div>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .head
    position fixed!important
    top 0
    left 0
    width 100%
    z-index 100
    height (43/$unit)
    background-color #fff
    margin auto 0
    .searchContainer
      position relative
      top -(8/$unit)
      left 0
      z-index 100
      text-align center
      margin (10/$unit) (10/$unit)
      background-color #ededed
      height (28/$unit)
      line-height (28/$unit)
      border-radius (4/$unit)
      i
        font-size (18/$unit)
        line-height (28/$unit)

</style>

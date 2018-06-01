<template>
  <nav class="m-tabBar">
    <router-link class="item" to="/home" :class="{active:$route.path==='/home'}" >
      <i name="tabBar-index" class="iconfont icon-home"></i>
      <span>首页</span></router-link>
    <router-link class="item" to="/shiwu" :class="{active:$route.path==='/shiwu'}">
      <i name="tabBar-topic" class="iconfont icon-square-two "></i>
      <span>识物</span>
    </router-link>
    <router-link class="item" to="/category" :class="{active:$route.path==='/category'}">
      <i name="tabBar-cate" class="iconfont icon-category"></i>
      <span>分类</span>
    </router-link>
    <router-link class="item" to="/shopcart" :class="{active:$route.path==='/shopcart'}">
      <i name="tabBar-cart" class="iconfont icon-cart" data-reactid=".0.c.$3.0"></i>
      <span>购物车</span>
    </router-link>
    <router-link class="item" :to="userInfo.userId?'/profile':'/login'" :class="{active:$route.path==='/profile'}">
      <i name="tabBar-ucenter" class="iconfont icon-icon-personal-default"></i>
      <span>个人</span></router-link>
  </nav>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState(['userInfo'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .m-tabBar
    display flex
    flex-flow row nowrap
    align-items center
    justify-content space-around
    position fixed
    bottom 0
    width 100%
    height (51/$unit)
    background-color #fafafa
    border-top 1px solid #d9d9d9
    z-index 10
  .item
    position relative
    text-align center
    cursor pointer
    width (36/$unit)
    i
      font-size (20/$unit)
    span
      font-size (12/$unit)
    &.active
      color #B4282D
      i,span
        color #B4282D


</style>

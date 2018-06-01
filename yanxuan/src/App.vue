<template>
  <div class="root">
    <router-view></router-view>
    <footer >
      <FooterNav v-show="$route.meta.showFoot"/>
    </footer>
  </div>


</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav'
export default {
  components:{
    FooterNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"
  .root
    width 10rem
    height (617/$unit)
    overflow-x hidden
    margin-bottom -(50/$unit)
</style>

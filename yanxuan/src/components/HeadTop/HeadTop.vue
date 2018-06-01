<template>
  <!--首页头部:(logo+搜索框)&&横向滑动的导航-->
  <header class="head">
    <div id="homeHead">
      <div class="header_top">
        <a href="javascript:;" class="logo">网易严选</a>
        <div class="search">
          <i class="iconfont icon-artboard9-copy"></i>
          <span class="placeHolder">搜索商品，共9877款好物</span>
        </div>
      </div>
      <div class="header_navigator  border-1px">
        <div class="nav_container">
          <ul class="list" >
            <li class="tab" @click="$router.replace('/home')">
              <router-link to="/home" class="txt" :class="{active:!$route.query.categoryId}">推荐</router-link>
            </li>
            <li class="tab" v-for="(headCate,index) in  headCateList" :key="index" @click="$router.replace('/item/list?categoryId='+headCate.id)">
              <router-link :to="`/item/list?categoryId=${headCate.id}`" class="txt"
                           :class="{active:$route.query.categoryId==headCate.id}">{{headCate.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import {ReqHeadNav} from '../../api'
  export default {
    data(){
      return {

      }
    },
    computed:{
      ...mapState(['headCateList'])
    },
    mounted(){
      this.$store.dispatch('getHeadNav', ()=> {
        this.$nextTick(()=>{ //当页面完成显示之后的回调
          this.navBScrol = new BScroll('.nav_container',{
            probeType:2,
            scrollX:true,
            click:true
          })
        })
      })

    },
    methods:{
      toSubCate(event,index){
        console.log(event.target)
        console.log(this.$refs)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .head
    position fixed!important
    left 0
    top 0
    z-index 100
    width (375/$unit)
    background #fff
    box-sizing border-box
    #homeHead
      margin-left -(12/$unit)
      background-color #fff
      width (375/$unit)
      height (73/$unit)
      .header_top
        height (43/$unit)
        width 100%
        display flex
        flex-flow row nowrap
        align-items center
        padding (8/$unit) (15/$unit)
        box-sizing border-box
        .logo
          display inline-block
          width (69/$unit)
          height (20/$unit)
          margin-right (10/$unit)
          font-size (16/$unit)
        .search
          background-color #ededed
          border-radius (4/$unit)
          text-align center
          flex 1
          height (28/$unit)
          align-items center
          justify-content center
          line-height (28/$unit)
          i
            font-size (17/$unit)
            line-height (28/$unit)
          .placeHolder
            color #666
            font-size 14px
      .header_navigator
        height (30/$unit)
        background-color #fff
        &.border-1px
          bottom-border-1px(#d9d9d9)
        .nav_container
          height 100%
        .list
          clearFix()
          //box-sizing border-box
          height 100%
          margin 0 (12/$unit)
          float left
          white-space nowrap
          &.maxRight
            transform translateX(-448px)!important
        .tab
          display inline-block
          box-sizing border-box
          margin-left (24/$unit)
          height (30/$unit)
          width (44/$unit)
          line-height (30/$unit)
          .txt
            font-size (14/$unit)
            display inline-block
            height 100%
            padding 0 (8/$unit)
            color #333
            &.active
              color #b4282d
              position relative
              &:after
                content ''
                position absolute
                background-color #b4282d
                left 0
                bottom 0
                width 100%
                height (2/$unit)
</style>

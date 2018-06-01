<template>
  <!--品牌制造商直购-->
  <div class="m_floor">
    <header class="hd">
      <a href="javascript:;">
        <span>品牌制造商直销</span>
        <i class="iconfont icon-arrow-right"></i>
      </a>
    </header>
    <div class="m_ManufacturersSupplying">
      <ul class="list">
        <li class="item" v-for="(tag,index) in showTagList" :key="index">
          <a href="javascript:;">
            <div class="manufacturer_price">
              <h4 class="title">{{tag.name}}</h4>
              <div>
                <span class="price1">{{tag.floorPrice}}</span>
                <span class="price2">元起</span>
              </div>
              <i class="iconfont icon-shangxin" v-if="tag.newOnShelf"></i>
            </div>
            <img :src="tag.picUrl" alt="image">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        showTagList:[]
      }
    },
    computed:{
      ...mapState(['tagList']),

    },
    watch:{
      tagList(val){
        const {tagList} = this
        let result = tagList.slice(0,4)
        this.showTagList = result
      }
    },
    mounted(){
      this.$store.dispatch('getTagList')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  /*品牌制造商直购*/
  .m_floor
    margin-bottom (10/$unit)
    background-color #fff
    .hd
      height (55/$unit)
      text-align center
      span
        font-size (17/$unit)
        height 100%
        line-height (55/$unit)
      i
        font-size (17/$unit)
    .m_ManufacturersSupplying
      margin-bottom (10/$unit)
      .list
        margin (8/$unit)
        height (243/$unit)
        display flex
        flex-flow row wrap
        //white-space nowrap
        &:nth-child(odd)
          margin-right (4/$unit)
        li
          flex 1
          box-sizing border-box
          width (177/$unit)
          height (118/$unit)
          margin-bottom (4/$unit)
          background-color #f4f4f4

          .manufacturer_price
            position absolute
            left 0
            top 0
            z-index 5
            margin (10/$unit) (15/$unit) 0;
            height (29/$unit)
            text-align left
            .title
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
              color: #333
              box-sizing border-box
              font-size (14/$unit)
              margin-bottom (3/$unit)
              line-height (29/$unit)
            .price1
              font-size (14/$unit)
              line-height (17/$unit)
            .price2
              font-size (12/$unit)
              line-height (17/$unit)
              margin-bottom  (5/$unit)
            i
              font-size (30/$unit)
              color: #B4A078
        img
          height (114/$unit)
          width (174/$unit)

</style>

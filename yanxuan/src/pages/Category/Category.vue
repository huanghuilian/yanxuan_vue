<template>
  <div id="fenlei">
  <!--分类页头部-->
    <CategoryHead/>

    <div class="contentContainer ">
      <!--左侧导航-->
      <div class="left_category_container">
        <div class="category_inner">
          <ul class="list">
            <li class="item" v-for="(categoryItem) in categoryL1List"
                :class="{active:currentId==categoryItem.id}"
                :key="categoryItem.id" @click="handleNav(categoryItem.id)">
              <a href="javascript:;">{{categoryItem.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <!--右边组件-->
      <RightItemList :subCateObj="subCateObj"/>
    </div>
  </div>
</template>

<script>
  import CategoryHead from '../../components/CategoryHead/CategoryHead'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import RightItemList from './RightItemList'
  export default {
    data(){
      return {
        currentId:'',
        subCateObj:{}
      }
    },
    mounted(){
      this.$store.dispatch('getcategoryList',()=>{
        this.$nextTick(()=>{
          new BScroll('.category_inner',{scrollY:true,click:true,probeType:2})
        })
      })
    },
    watch:{
      categoryL1List(val){ //监视categoryL1List数据
        this.subCateObj = val.find((item,index)=>{
          this.currentId = item.id
          return item.name=="居家"
        })
      }
    },
    methods:{
      handleNav(id){
        const {categoryL1List} = this
        this.subCateObj = categoryL1List.find((category,index)=>{
          return category.id ==id
        })
        this.currentId = this.subCateObj.id
      }


    },
    computed:{
      ...mapState(['categoryL1List'])
    },

    components:{
      CategoryHead,
      RightItemList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #fenlei
    position relative
    z-index 1
    height 100%
    width 100%
    margin-top (50/$unit)
    background-color #fff
    overflow hidden
    top-border-1px(#ededed)
    .left_category_container
      position fixed!important
      top (38/$unit)
      left 0
      z-index 6
      float left
      width 2.16rem
      //overflow hidden
      right-border-1px(#ededed)
      .category_inner
        width 100%
        height 100%
        margin-bottom -(50/$unit)
        height (595/$unit)
        .list
          overflow hidden
          padding (20/$unit) 0
          .item
            height (25/$unit)
            text-align center
            width 100%
            margin-top (25/$unit)
            &.active
              a
                color: #ab2b2b
                font-size (18/$unit)
              &:before
                content: ''
                position absolute
                top 0
                left 0
                bottom 0
                width 0.08rem
                background-color #ab2b2b
            &:nth-child(1)
              margin-top (10/$unit)
            a
              display block
              width 100%
              height 100%
              line-height (25/$unit)

</style>

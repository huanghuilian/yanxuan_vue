import {
  ReqHeadNav,
  ReqFocusList,
  ReqTagList,
  ReqNewItemList,
  ReqPopularyItemList,
  ReqTopicList,
  ReqCateList,
  ReqBannerList,//识物轮播
  ReqRecommendType,//文章推荐分类
  ReqRecomendOne,//为你推荐1
  ReqRecomendTwo,//为你推荐2
  ReqRecomendThree,//为你推荐三
  ReqTenFifteen,//十点一刻
  ReqZhenOne,//甄选1
  ReqZhenTwo,//甄选2
  ReqZhenThree,//甄选3
  ReqyxLook,//严选look
  ReqfindMore,//更多精彩
  ReqCategory,//请求分类页的数据
} from '../api/index'
import {
  RECEIVEHEADNAV,
  RECEIVE_FOCUSLIST,
  RECEIVE_FACTORY_SUPPORT,
  RECEIVE_NEWITEM,
  RECEIVE_POPULARITEM,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_BANNER,//识物轮播
  RECEIVE_COLUMNRECOMMEND,//文章推荐分类
  RECEIVE_RECOMMEND_ONE,RECEIVE_RECOMMEND_TWO,RECEIVE_RECOMMEND_THREE,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHENONE,RECEIVE_ZHENTWO,RECEIVE_ZHENTHREE,
  RECEIVE_YXLOOK,//严选look
  RECEIVE_FINDMORE,//更多精彩
  RECEIVE_CATEGORYLIST,//分类页的数据
  RECEIVE_USER_INFO
} from './mutation-types'
export default {
  async getHeadNav({commit},callback){
    const request = await ReqHeadNav()
    //console.log(request)//{code: 0, data: Array(10)}
    if (request.code===0){
      const headCateList = request.data
      commit(RECEIVEHEADNAV,{headCateList})
      callback && callback() //调用分发该action时传入的回调，保证数据已经获取到了
    }
  },
  /*=====获取首页轮播图信息======*/
  async getFocusList({commit},callback){
    const result = await ReqFocusList()
    if (result.code===0){
      const focusList = result.data
      commit(RECEIVE_FOCUSLIST,{focusList})
      callback&&callback()
    }
  },
  /*=====获取首页厂家直销======*/
  async getTagList({commit}){
    const result = await ReqTagList()
    if (result.code===0){
      const tagList = result.data
      commit(RECEIVE_FACTORY_SUPPORT,{tagList})
    }
  },
  /*=====获取新品首发======*/
  async getNewItemList({commit},callback){
    const result = await ReqNewItemList()
    if (result.code===0){
      const newItemList = result.data
      commit(RECEIVE_NEWITEM,{newItemList})
      callback&&callback()
    }
  },
  /*=====获取人气推荐======*/
  async getPopularItemList({commit},callback){
    const result = await ReqPopularyItemList()
    if (result.code===0){
      const popularItem = result.data
      commit(RECEIVE_POPULARITEM,{popularItem})
      callback&&callback()
    }
  },
  //获取专题精选
  async getTopicList({commit},callback){
    const result = await ReqTopicList()
    if (result.code===0){
      const topicList = result.data
      commit(RECEIVE_TOPICLIST,{topicList})
      callback&&callback()
    }
  },
  //获取主页最后的列表
  async getCateList({commit}){
    const result = await ReqCateList()
    if (result.code===0){
      const cateList = result.data
      commit(RECEIVE_CATELIST,{cateList})
    }
  },
  //获取识物轮播
  async getBannerList({commit},callback){
    const result = await ReqBannerList()
    if (result.code===0){
      const bannerData = result.data
      commit(RECEIVE_BANNER,{bannerData})
      callback&&callback()
    }
  },
  //文章推荐分类
  async getcolumnRecommend({commit},callback){
    const result = await ReqRecommendType()
    if (result.code===0){
      const columnRecommend = result.data
      commit(RECEIVE_COLUMNRECOMMEND,{columnRecommend})
      callback&&callback()
    }
  },
  //为你推荐
  async getRecommends({commit},callback){
    const resultOne = await ReqRecomendOne()
    const resultTwo = await ReqRecomendTwo()
    const resultThree = await ReqRecomendThree()

    if (resultOne.code===0){
      const recommendOne = resultOne.data
      commit(RECEIVE_RECOMMEND_ONE,{recommendOne})
      callback&&callback()
    }
    if (resultTwo.code===0){
      const recommendTwo = resultTwo.data
      commit(RECEIVE_RECOMMEND_TWO,{recommendTwo})
      callback&&callback()
    }
    if (resultThree.code===0){
      const recommendThree = resultThree.data
      commit(RECEIVE_RECOMMEND_THREE,{recommendThree})
      callback&&callback()
    }
  },
  //甄选
  async getZhen({commit},callback){
      const resultOne = await ReqZhenOne()
    const resultTwo = await ReqZhenTwo()
    const resultThree = await ReqZhenThree()

    if (resultOne.code===0){
      const zhenOne = resultOne.data
      commit(RECEIVE_ZHENONE,{zhenOne})
      callback&&callback()
    }
    if (resultTwo.code===0){
      const zhenTwo = resultTwo.data
      commit(RECEIVE_ZHENTWO,{zhenTwo})
      callback&&callback()
    }
    if (resultThree.code===0){
      const zhenThree = resultThree.data
      commit(RECEIVE_ZHENTHREE,{zhenThree})
      callback&&callback()
    }
  },
  //严选look
  async getyxLook({commit},callback){
    const result = await ReqyxLook()
    if (result.code===0){
      const yxLook = result.data
      commit(RECEIVE_YXLOOK,{yxLook})
      callback&&callback()
    }
  },
  //十点一刻
  async gettenfifteen({commit},callback){
    const result = await ReqTenFifteen()
    if (result.code===0){
      const tenfifteen = result.data
      commit(RECEIVE_TENFIFTEEN,{tenfifteen})
      callback&&callback()
    }
  },
  //更多精彩
  async getfindMore({commit},callback){
    const result = await ReqfindMore()
    if (result.code===0){
      const findMore = result.data
      commit(RECEIVE_FINDMORE,{findMore})
      callback&&callback()
    }
  },
  /*=============分类页============*/
  async getcategoryList({commit},callback){
    const result = await ReqCategory()
    if (result.code===0){
      const categoryL1List = result.data
      commit(RECEIVE_CATEGORYLIST,{categoryL1List})
      callback&&callback()
    }
  },
  /*===================登录注册页=====================*/
  recordUserInfo({commit}, userInfo) {
    console.log(userInfo)
    commit(RECEIVE_USER_INFO, {userInfo})
  },
}

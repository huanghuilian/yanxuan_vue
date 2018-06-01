/*该模块包含n个直接操作state的mutations函数*/
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
  RECEIVE_CATEGORYLIST,//分类页
  RECEIVE_USER_INFO,//接收到用户信息
} from './mutation-types'

export default {
  //主页横向导航
  [RECEIVEHEADNAV](state,{headCateList}){
    state.headCateList = headCateList
  },
  //主页轮播图
  [RECEIVE_FOCUSLIST](state,{focusList}){
    state.focusList = focusList
  },
  //主页厂家直销
 [RECEIVE_FACTORY_SUPPORT](state,{tagList}){
  state.tagList = tagList
},
  //主页新品首发
 [RECEIVE_NEWITEM](state,{newItemList}){
  state.newItemList = newItemList
},
  //主页人气推荐
  [RECEIVE_POPULARITEM](state,{popularItem}){
    state.popularItem = popularItem
  },
  //主页专题精选
[RECEIVE_TOPICLIST](state,{topicList}){
  state.topicList = topicList
},
  //主页最后列表
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList = cateList
  },
  //识物轮播
  [RECEIVE_BANNER](state,{bannerData}){
    state.bannerData = bannerData
  },
  //识物文章推荐
  [RECEIVE_COLUMNRECOMMEND](state,{columnRecommend}){
    state.columnRecommend = columnRecommend
  },
  //为你推荐1
  [RECEIVE_RECOMMEND_ONE](state,{recommendOne}){
    state.recommendOne = recommendOne
  },
  //为你推荐2
  [RECEIVE_RECOMMEND_TWO](state,{recommendTwo}){
    state.recommendTwo = recommendTwo
  },
  //为你推荐3
  [RECEIVE_RECOMMEND_THREE](state,{recommendThree}){
    state.recommendThree = recommendThree
  },
  //十点一刻
  [RECEIVE_TENFIFTEEN](state,{tenfifteen}){
    state.tenfifteen = tenfifteen
  },
  //甄选1
  [RECEIVE_ZHENONE](state,{zhenOne}){
    state.zhenOne = zhenOne
  },
  //甄选2
  [RECEIVE_ZHENTWO](state,{zhenTwo}){
    state.zhenTwo = zhenTwo
  },
  //甄选3
  [RECEIVE_ZHENTHREE](state,{zhenThree}){
    state.zhenThree = zhenThree
  },
  //严选look
  [RECEIVE_YXLOOK](state,{yxLook}){
    state.yxLook = yxLook
  },
  //更多精彩
  [RECEIVE_FINDMORE](state,{findMore}){
    state.findMore = findMore
  },
  //分类页
  [RECEIVE_CATEGORYLIST](state,{categoryL1List}){
    state.categoryL1List = categoryL1List
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
}

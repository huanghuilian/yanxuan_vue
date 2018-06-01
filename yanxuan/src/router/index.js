/*该模块用于注册路由器，注册路由*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Shiwu from '../pages/Shiwu/Shiwu'
import Category from '../pages/Category/Category'
import ShopCart from '../pages/ShopCart/ShopCart'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import ItemList from '../pages/ItemList/ItemList'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/shiwu',
      component:Shiwu,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/category',
      component:Category,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/shopcart',
      component:ShopCart,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        showFoot:false
      }
    },
    {
      path:'/item/list',
      component:ItemList,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

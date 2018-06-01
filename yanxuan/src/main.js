/*=======入口js=========*/
import Vue from 'vue'
import router from './router' //引入路由器模块
import App from './App'
import store from './store/store'
import './mock/mockServer' //引入mockjs模块，劫持ajax请求返回响应数据
import './filters/index'
import loading from './common/imgs/loading.gif'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'dist/error.png',
  loading,
  attempt: 1
})
new Vue({
  el:'#app',
  components:{App},
  render: h => h(App),
  router,
  store
})

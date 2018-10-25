// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import app from './App'
import router from './router'
import  '../mock/mockServer'
import store from './store'
//注册全局组件
import RightNavBar from './components/rightNavBar/rightNavBar'
import ShiwuList from './components/shiwulist/shiwulist'
import Totop from './components/Totop/Totop'

import loading from './assets/images/timg (1).gif'
import error from './assets/images/timg (2).gif'

Vue.component('RightNavBar',RightNavBar)
Vue.component('ShiwuList',ShiwuList)
Vue.component('Totop',Totop)

Vue.use(VueLazyload,{
  loading,
  error,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(app),
  router,
  store

})

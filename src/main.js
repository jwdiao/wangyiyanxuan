// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App'
import router from './router'
import  '../mock/mockServer'
import store from './store'
//注册全局组件
import RightNavBar from './components/rightNavBar/rightNavBar'
import ShiwuList from './components/shiwulist/shiwulist'

Vue.component('RightNavBar',RightNavBar)
Vue.component('ShiwuList',ShiwuList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(app),
  router,
  store

})

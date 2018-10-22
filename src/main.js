// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App'
import router from './router'
import  '../mock/mockServer'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(app),
  router,
  store

})

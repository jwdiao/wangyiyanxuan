import Vue from 'vue'
import vueRouter from 'vue-router'

import Class from '../pages/Class/Class'
import Know from '../pages/Know/Know'
import Msite from '../pages/Msite/Msite'
import Profile from '../pages/Profile/Profile'
import Shopcart from '../pages/Shopcart/Shopcart'

Vue.use(vueRouter)

export default new vueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/class',
      component:Class
    },
    {
      path:'/know',
      component:Know
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/shopcart',
      component:Shopcart
    },
    {
      path:'/',
      redirect:'/msite'
    },
  ]
})

import Vue from 'vue'
import vueRouter from 'vue-router'

import Class from '../pages/Class/Class'
import Know from '../pages/Know/Know'
import Msite from '../pages/Msite/Msite'
import Profile from '../pages/Profile/Profile'
import Shopcart from '../pages/Shopcart/Shopcart'
import Loginroute from '../pages/LoginRoute/LoginRoute'
import Cover from '../pages/Cover/Cover'

Vue.use(vueRouter)

export default new vueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{show:true}
    },
    {
      path:'/class',
      component:Class,
      meta:{show:true}
    },
    {
      path:'/know',
      component:Know,
      meta:{show:true}
    },
    {
      path:'/profile',
      component:Profile

    },
    {
      path:'/shopcart',
      component:Shopcart,
      meta:{show:true}
    },
    {
      path:'/cover',
      component:Cover,
    },
    {
      path:'/loginroute',
      component:Loginroute
    },
    {
      path:'/',
      redirect:'/cover'
    },
  ]
})

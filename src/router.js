import Vue from 'vue'
import Router from 'vue-router'

//引入首页模块
import Home from './views/Home.vue'

//引入菜单修改模块
import  meun from './components/meun.vue'
//引入菜单添加子模块
import add  from  './views/wxmuen/add.vue'
//引入菜单设置子模块
import set  from  './views/wxmuen/set.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/meun',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:meun,
      children:[
        {path : 'add' , name : 'add'  , component:add },
        {path : 'set'   , name : 'set'   , component:set}
      ]
    }
  ]
})

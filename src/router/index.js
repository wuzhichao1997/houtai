import Vue from 'vue'
import VueRouter from 'vue-router'

import lyindex from "../views/router/index.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/test1"
  },
  {
    path:"/",
    compoment:lyindex
  },
  {
    path:"/test1",
    component:()=>import("../components/test1.vue")
  },
  {
    path:"/test2",
    compoment:()=>import("../components/test2.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

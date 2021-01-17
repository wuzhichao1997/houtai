import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    component:()=>import("../components/Home.vue")
  },
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:"/login",
    component:()=>import("../components/Login.vue")
  }
 
  
]

const router = new VueRouter({
  routes
})

// 全局守卫
router.beforeEach((to,from,next)=>{
  if(to.path === "/login"){
    next();
  }else if(!sessionStorage.getItem("token")){
    next("/login")
  }else{
    next();
  }
})
export default router

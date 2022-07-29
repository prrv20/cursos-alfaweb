import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { getAuth } from 'firebase/auth'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      private:true
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue'),
    meta:{
      private:true
    },
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import(/* webpackChunkName: "cursos" */ '../views/Cursos.vue'),
    meta:{
      private:true
    },
  },
  {
    path: '/curso/:idCurso',
    name: 'editCurso',
    props:true,
    component: ()=> import (/* webpackChunkName: "edit" */ '../views/EditCurso.vue'),
    meta:{
      private:true
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      private:true
    },
  },
  {
    path:'/login',
    name:'Login',
    component:() => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },  
  {
    path:'/register',
    name:'Register',
    component:() => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  }, 
  {
    path:'*',
    component:NotFoundView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const auth = getAuth()
  let user = auth.currentUser
  console.log(user)

  let privateRoute = to.meta.private

  if(privateRoute && !user){
    next('/login')
  } else if(privateRoute == undefined && user){
    next('/')
  } else {
    next()
  }
})

export default router

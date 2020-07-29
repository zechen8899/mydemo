import Vue from 'vue'
import VueRouter from 'vue-router'
import MyRegister from '../layout/MyRegister'
import MyLogin from '../layout/MyLogin'
import index from '../layout/index'
import Mycategory from '../layout/Mycategory'
import Mycomplete from '../layout/Mycomplete'
import Myranking from '../layout/Myranking'



Vue.use(VueRouter)

  const routes = [
    { 
      path: '/',
      redirect:'/index'
    },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/MyRegister',
    name: 'MyRegister',
    component: MyRegister
  },
  {
    path: '/MyLogin',
    name: 'MyLogin',
    component: MyLogin
  },
  {
    path: '/Mycategory',
    name: 'Mycategory',
    component: Mycategory
  },
  {
    path: '/Mycomplete',
    name: 'Mycomplete',
    component: Mycomplete
  },
  {
    path: '/Myranking',
    name: 'Myranking',
    component: Myranking
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

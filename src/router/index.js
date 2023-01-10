import Vue from 'vue'
import VueRouter from 'vue-router'
import GLogin from '../components/GLogin.vue'
//import CafeView from "@/components/CafeView";
import GList from '../components/GList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: GList
  },

  {
    path: '/login',
    name: 'login',
    component: GLogin
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

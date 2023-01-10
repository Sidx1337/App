import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLogin from '../components/UserLogin.vue'
import PlaceView from '../components/PlaceView.vue'
import MainList from '../components/MainList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainlist',
    component: MainList
  },
  {
    path: '/place/view',
    name: 'placeview',
    component: PlaceView
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

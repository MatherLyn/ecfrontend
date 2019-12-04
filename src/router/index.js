import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from '../views/Settings'
import OrderList from '../views/OrderList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'orderlist'
  },
  {
    path: '/orderlist',
    name: 'orderlist',
    component: OrderList
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  }
]

const router = new VueRouter({
  routes
})

export default router

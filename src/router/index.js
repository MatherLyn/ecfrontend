import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from '../views/Settings'
import ProductList from '../views/ProductList'
import OrderList from '../views/OrderList'
import Analysis from '../views/Analysis'
import Login from '../views/Login'
import Register from '../views/Register'
import ModifyPwd from '../views/ModifyPwd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/modifypassword',
    name: 'modifypwd',
    component: ModifyPwd
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: Analysis
  },
  {
    path: '/orderlist',
    name: 'orderlist',
    component: OrderList
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: ProductList
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

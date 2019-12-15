import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
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
    meta: {
      requireAuth: true
    },
    component: Analysis
  },
  {
    path: '/orderlist',
    name: 'orderlist',
    meta: {
      requireAuth: true
    },
    component: OrderList
  },
  {
    path: '/productlist',
    name: 'productlist',
    meta: {
      requireAuth: true
    },
    component: ProductList
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      requireAuth: true
    },
    component: Settings,
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(store.state.offline)
  console.log(to.meta.requireAuth)
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (!store.state.offline) {  // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.path}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
})

export default router
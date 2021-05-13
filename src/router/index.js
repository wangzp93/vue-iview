import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLayout from '../layout/PageLayout'
import { getCookie } from "../utils/cookie";

Vue.use(VueRouter)

// 解决跳转当前路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(() => {})
}

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录' },
      component: () => import(/* webpackChunkName: "home" */ '../views/login')
    },
    {
      path: '/404',
      name: '404',
      meta: { title: '404' },
      component: () => import(/* webpackChunkName: "home" */ '../error/404.vue')
    },
    {
      path: '/',
      name: '/',
      component: PageLayout,
      redirect: { name: 'home' },
      children: [{
        path: 'home',
        name: 'home',
        meta: { title: '首页' },
        component: () => import(/* webpackChunkName: "home" */ '../views/home')
      }]
    },
    {
      path: '*',
      redirect: { name: '404' }
    },
  ]
})

/**
 * 路由守卫，根据cookie校验登录状态
 */
router.beforeEach((to, from, next)=> {
  if (to.name === 'login') {
    next()
  } else {
    const username = getCookie('username')
    if (username) {
      next()
    } else {
      router.push({ name: 'login' })
    }
  }
})

export default router
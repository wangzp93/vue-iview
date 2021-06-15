import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLayout from '../layout/PageLayout'
import { getCookie } from "../utils/cookie";
import store from "../store";
import { addRoutes } from "../utils/menu";

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
  ]
})

/**
 * 路由守卫，校验cookie、动态路由等
 */
router.beforeEach((to, from, next)=> {
  if (to.name !== 'login') {
    // 非登录页，校验登录状态
    const username = getCookie('username')
    if (username) {
      // 已登录，校验菜单
      if (store.getters.menuState) {
        // 已有菜单路由，放行
        next()
      } else {
        // 动态加载菜单路由
        addRoutes(router, store).then(()=> {
          // 使用replace: true，避免第一次加载时白屏
          next({ ...to, replace: true })
        })
      }
    } else {
      // 未登录，重定向到登录页
      next({ name: 'login' })
    }
  } else {
    // 登录页，直接放行
    next()
  }
})

export default router
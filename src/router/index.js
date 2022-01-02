import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLayout from '@/layout/PageLayout'
import Cookies from "js-cookie";
import store from "@/store";
import { initRoutes, setActiveByPath } from "@/router/utils";

Vue.use(VueRouter)

// 解决跳转当前路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(() => {})
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: '/',
      component: PageLayout,
      redirect: { name: 'home' },
      children: [{
        path: 'home',
        name: 'home',
        meta: { title: '首页' },
        component: () => import(/* webpackChunkName: "home" */ '@/views/home')
      }]
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录' },
      component: () => import(/* webpackChunkName: "home" */ '@/views/login')
    },
    {
      path: '/404',
      name: '404',
      meta: { title: '404' },
      component: () => import(/* webpackChunkName: "home" */ '@/error/404.vue')
    },
  ]
})

/**
 * 路由守卫，校验cookie、动态路由等
 */
router.beforeEach((to, from, next)=> {
  if (to.name !== 'login') {
    // 非登录页，校验登录状态
    const username = Cookies.get('username')
    if (username) {
      // 已登录，校验当前路由个数，初始路由个数为4
      if (router.getRoutes().length > 4) {
        // 已有菜单路由，放行
        next()
      } else {
        new Promise((resolve) => {
          const menuData = store.getters['menuModule/getMenuData']
          resolve(menuData.length > 0 ? menuData : store.dispatch('menuModule/getMenuData'))
        }).then(menuData => {
          // 初始化动态路由
          initRoutes(router, menuData)
          // 使用replace，避免刷新白屏问题
          next({...to, replace: true})
        })
      }

      // 设置菜单高亮
      setActiveByPath(store, to.fullPath)
    } else {
      // 未登录，重定向到登录页
      next({ name: 'login' })
    }
  } else {
    // 登录页，直接放行
    next()
  }
})

router.afterEach((to)=> {
  // 动态设置title
  document.title = to.meta.title || 'vue-iview'
})

export default router
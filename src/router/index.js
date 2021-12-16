import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLayout from '@/layout/PageLayout'
import Cookies from "js-cookie";
import store from "@/store";
import { initRoutes } from "@/utils/route";

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
      // 已登录，校验菜单
      if (store.getters['menuModule/getMenuData'].length > 0) {
        // 已有菜单路由，放行
        next()
      } else {
        new Promise((resolve) => {
          let menuData = sessionStorage.getItem('menuData')

          // 判断sessionStorage是否存在
          if (menuData) {
            // 存在，直接使用
            sessionStorage.removeItem('menuData') // 清除sessionStorage
            menuData = JSON.parse(menuData)
            store.commit('menuModule/setMenuData', menuData)
            resolve(menuData)
          } else {
            // 不存在，调用接口获取
            resolve(store.dispatch('menuModule/getMenuData'))
          }
        }).then(menuData => {
          // 初始化动态路由
          initRoutes(menuData)
          next()
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

router.afterEach((to)=> {
  // 动态设置title
  document.title = to.meta.title || 'vue-iview'
})

export default router
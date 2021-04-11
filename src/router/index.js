import Vue from 'vue'
import VueRouter from 'vue-router'
import Frame from '@/views/Frame'

import {navList} from './config'

/**
 * 菜单列表转换为路由
 */
function menuToRouter(navList = [], parentPath = '') {
  let routerList = []
  for (let i = 0, len = navList.length; i < len; i++) {
    let menuItem = navList[i],
        children = menuItem.children,
        routerItem = {
          path: `${parentPath}/${menuItem.name}`,
          name: menuItem.name,
          meta: menuItem.meta
        }
    routerList.push(routerItem)
    if (children && children.length > 0) {	// 不是子节点
      let childRouter = menuToRouter(children, routerItem.path)
      routerItem.redirect = `${routerItem.path}/${children[0].name}`
      // routerItem.children = childRouter
      routerList = routerList.concat(childRouter)
    } else {	// 是子节点，路由懒加载
      routerItem.component = resolve => require([`@/views/${menuItem.component}.vue`], resolve)
    }
  }
  return routerList
}

const routerList = menuToRouter(navList)

Vue.use(VueRouter)

// 解决跳转当前路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(() => {
  })
}

const router =  new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: { title: '登录' },
      component: (resolve)=> require(['@/views/Login'], resolve)
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "error" */ '../error/404.vue')
    },
    {
      path: '/',
      redirect: routerList[0].name,
      component: Frame,
      children: routerList
    },
    {
      path: '*',
      redirect: '/404'
    },
  ]
})

export default router
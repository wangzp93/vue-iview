import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLayout from '../layout/PageLayout'

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
      }, /*{
        path: 'nav1',
        name: 'nav1',
        meta: { title: '导航1' },
        component: PageContent,
        redirect: { name: 'cate' },
        children: [{
          path: 'shop/cate',
          name: 'cate',
          meta: { title: '商品分类' },
          component: (resolve)=> require(['../views/nav1/shop/cate'], resolve)
        }, {
          path: 'shop/goods',
          name: 'goods',
          meta: { title: '商品列表' },
          component: (resolve)=> require(['../views/nav1/shop/goods'], resolve)
        }]
      }, {
        path: 'nav2',
        name: 'nav2',
        meta: { title: '导航2' },
        component: PageContent,
        redirect: { name: 'material' },
        children: [{
          path: 'ad/material',
          name: 'material',
          meta: { title: '素材' },
          component: (resolve)=> require(['../views/nav2/ad/material'], resolve)
        }, {
          path: 'ad/resource',
          name: 'resource',
          meta: { title: '资源位' },
          component: (resolve)=> require(['../views/nav2/ad/resource'], resolve)
        }]
      }*/]
    },
    {
      path: '*',
      redirect: { name: '404' }
    },
  ]
})

export default router
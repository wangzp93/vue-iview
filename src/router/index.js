import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLayout from '../layout/PageLayout'
import PageContent from '../layout/PageContent'

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
      component: (resolve)=> require(['../views/login'], resolve)
    },
    {
      path: '/404',
      name: '404',
      meta: { title: '404' },
      component: () => import(/* webpackChunkName: "error" */ '../error/404.vue')
    },
    {
      path: '/',
      component: PageLayout,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'home',
        meta: { title: '首页' },
        component: (resolve)=> require(['../views/home'], resolve)
      }, {
        path: 'nav1',
        component: PageContent,
        redirect: '/nav1/shop/cate',
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
      }]
    },
    {
      path: '*',
      redirect: '/404'
    },
  ]
})

export default router
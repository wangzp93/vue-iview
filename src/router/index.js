import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Frame from '../views/Frame.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/frame' },
		{ path: '/login', name: 'login', component: Login },
		{ path: '/frame', name: 'frame', component: Frame, children: [
            { path: '/test1', name: 'test1', component: ()=> import(/* webpackChunkName: "test1" */ '../views/test1/Test1.vue') },
        ] },
		{ path: '/404', name: '404', component: ()=> import(/* webpackChunkName: "error" */ '../error/404.vue') },
		{ path: '*', redirect: '/404' },
	]
})

export default router
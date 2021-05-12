import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {}, // 用户信息
    navList: [{
      name: 'nav1',
      meta: { title: '导航1' },
      icon: 'ios-paper',
      children: [{
        name: 'shop',
        meta: { title: '商品管理' },
        icon: 'ios-paper',
        children: [
          {
            name: 'cate',
            meta: { title: '商品分类' },
            icon: 'ios-paper'
          },
          {
            name: 'goods',
            meta: { title: '商品' },
            icon: 'ios-paper'
          }
        ]
      }],
    }, {
      name: 'nav2',
      meta: { title: '导航2' },
      icon: 'ios-paper',
      children: [{
        name: 'ad',
        meta: { title: '广告管理' },
        icon: 'ios-paper',
        children: [
          {
            name: 'material',
            meta: { title: '素材' },
            icon: 'ios-paper'
          },
          {
            name: 'resource',
            meta: { title: '资源位' },
            icon: 'ios-paper'
          },
        ]
      }]
    }]
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    },
    navList(state) {
      return state.navList
    }
  },
  mutations: {
    setUserInfoSync(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    /**
     * 设置用户信息
     */
    setUserInfo(context, payload) {
      return new Promise((r)=> {
        setTimeout(()=> {
          context.commit('setUserInfoSync', payload)
          r()
        }, 300)
      })
    }
  }
})

export default store
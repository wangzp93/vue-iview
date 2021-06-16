import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menuState: false,   // 菜单状态，false表示未加载，第一次加载时用
    navList: Object.freeze([]),
  },
  getters: {
    menuState(state) {
      return state.menuState
    },
    navList(state) {
      return state.navList
    }
  },
  mutations: {
    setMenuStateSync(state, payload) {
      state.menuState = payload
    },
    setNavListSync(state, payload) {
      state.navList = payload
    }
  },
  actions: {
    setMenuState(context, payload) {
      context.commit('setMenuStateSync', payload)
    },
    setNavList(context, payload) {
      context.commit('setNavListSync', payload)
    }
  }
})

export default store
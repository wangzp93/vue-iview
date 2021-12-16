/**
 * @author: wangzp
 * @date: 2021-12-15 13:21
 */
import { getMenuData } from '@/api/menu';

export default {
  namespaced: true,
  state: {
    menuData: Object.freeze([]),
    activeNav: 'home',
  },
  getters: {
    getMenuData(state) {
      return state.menuData
    },
    getActiveNav(state) {
      return state.activeNav
    }
  },
  mutations: {
    setMenuData(state, payload) {
      state.menuData = payload
    },
    setActiveNav(state, payload) {
      state.activeNav = payload
    }
  },
  actions: {
    getMenuData(context) {
      return getMenuData().then(menuData => {
        context.commit('setMenuData', Object.freeze(menuData))
        return menuData
      })
    }
  }
}
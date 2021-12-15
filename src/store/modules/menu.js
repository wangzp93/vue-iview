/**
 * @author: wangzp
 * @date: 2021-12-15 13:21
 */
import { getMenuData } from '@/api/menu';

export default {
  namespaced: true,
  state: {
    menuData: Object.freeze([]),
  },
  getters: {
    getMenuData(state) {
      return state.menuData
    }
  },
  mutations: {
    setMenuData(state, payload) {
      state.menuData = payload
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
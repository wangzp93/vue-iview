/**
 * @author: wangzp
 * @date: 2021-12-15 13:21
 */
import { getMenuData } from '@/api/menu';

export default {
  namespaced: true,
  state: {
    // 菜单原始数据
    menuData: Object.freeze(sessionStorage.getItem('menuData') ? JSON.parse(sessionStorage.getItem('menuData')) : []),
    activeNav: 'home', // 当前导航
    activeMenu: Object.freeze({
      subs: [],   // 当前展开目录
      name: '', // 当前菜单
    })
  },
  getters: {
    getMenuData(state) {
      return state.menuData
    },
    getActiveNav(state) {
      return state.activeNav
    },
    getMenuList(state) {
      const { menuData, activeNav } = state
      const navIndex = menuData.findIndex((item)=> {
        return item.name === activeNav
      })
      return navIndex >= 0 ? menuData[navIndex].children : []
    },
    getActiveMenu(state) {
      return state.activeMenu
    },
  },
  mutations: {
    setMenuData(state, payload) {
      sessionStorage.setItem('menuData', JSON.stringify(payload))
      state.menuData = payload
    },
    setActiveNav(state, payload) {
      state.activeNav = payload
    },
    setActiveMenu(state, payload) {
      state.activeMenu = payload
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
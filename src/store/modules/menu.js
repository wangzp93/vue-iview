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
    }),
    breadList: Object.freeze([]), // 面包屑
  },
  getters: {
    getMenuData(state) {
      return state.menuData
    },
    // 菜单数据字典
    getMenuDict(state) {
      const menuDict = {}
      menuToDict(menuDict, state.menuData)
      return Object.freeze(menuDict)
    },
    getActiveNav(state) {
      return state.activeNav
    },
    getMenuList(state, getters) {
      const { activeNav } = state
      const menuDict = getters.getMenuDict
      return menuDict.hasOwnProperty(activeNav) ? menuDict[activeNav].children : []
    },
    getActiveMenu(state) {
      return state.activeMenu
    },
    getBreadList(state) {
      return state.breadList
    }
  },
  mutations: {
    setMenuData(state, payload) {
      sessionStorage.setItem('menuData', JSON.stringify(payload))
      state.menuData = Object.freeze(payload)
    },
    setActiveNav(state, payload) {
      state.activeNav = payload
    },
    setActiveMenu(state, payload) {
      state.activeMenu = Object.freeze(payload)
    },
    setBreadList(state, payload) {
      state.breadList = Object.freeze(payload)
    }
  },
  actions: {
    getMenuData(context) {
      return getMenuData().then(menuData => {
        context.commit('setMenuData', menuData)
        return menuData
      })
    }
  }
}

// 生成菜单数据字典
function menuToDict(menuDict, menuData, parent = '') {
  for (let i=0, len=menuData.length; i<len; i++) {
    const { name, children, meta } = menuData[i]
    const key = parent ? `${parent}/${name}` : name
    const itemDict = {
      text: meta.title,
    }
    // 如果是第一层，存储子内容
    if (parent === '') {
      itemDict.children = children
    }
    menuDict[key] = itemDict

    // 有子节点，递归
    if (Array.isArray(children)) {
      menuToDict(menuDict, children, key)
    }
  }
}
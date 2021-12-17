import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import userModule from './modules/user';
import menuModule from './modules/menu';

const store = new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    userModule, // 用户
    menuModule, // 菜单
  }
})

export default store
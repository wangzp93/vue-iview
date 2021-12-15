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
    userModule,
    menuModule,
  }
})

export default store
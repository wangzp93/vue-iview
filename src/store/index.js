import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    navList: []
  },
  getters: {
    navList(state) {
      return state.navList
    }
  },
  mutations: {

  },
  actions: {

  }
})

export default store
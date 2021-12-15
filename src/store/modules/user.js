/**
 * @author: wangzp
 * @date: 2021-12-15 13:33
 */
import { login } from '@/api/login';

export default {
  namespaced: true,
  state: {

  },
  mutations: {

  },
  actions: {
    login(context, payload) {
      return login(payload).then(res => {
        context.commit('menuModule/setMenuData', Object.freeze(res.menuData), { root: true })
        return res
      })
    }
  }
}
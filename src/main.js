import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由
import store from './store' // vuex

import 'view-design/dist/styles/iview.css' // iview样式
// 自定义iview主题（已通过vue.config.js配置）
import 'view-design/src/styles/index.less'
// iview组件
import {
  Form, FormItem, Input, Button, Icon,
} from 'view-design'

Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Button', Button)
Vue.component('Icon', Icon)

// 阻止启动时生成生产提示
Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

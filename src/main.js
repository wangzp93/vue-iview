import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// vuex
import store from './store'
// iview样式
import 'view-design/dist/styles/iview.css'
// 自定义iview主题（已通过vue.config.js配置）
import 'view-design/src/styles/index.less'
// iview组件
import {
  Layout, Header, Sider, Content, Footer,
  Menu, Submenu, MenuGroup, MenuItem, Icon,
  Dropdown, DropdownMenu, DropdownItem,
  Form, FormItem, Input, Button,
} from 'view-design'

Vue.component('Layout', Layout)
Vue.component('Header', Header)
Vue.component('Sider', Sider)
Vue.component('Content', Content)
Vue.component('Footer', Footer)

Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('MenuGroup', MenuGroup)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)

Vue.component('Dropdown', Dropdown)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('DropdownItem', DropdownItem)

Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Button', Button)

// 阻止启动时生成生产提示
Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

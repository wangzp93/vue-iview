import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'view-design/dist/styles/iview.css'
import './my-theme/index.less'
import {
  Layout, Header, Sider, Content, Footer,
  Menu, Submenu, MenuGroup, MenuItem, Icon,
  Form, FormItem, Input, Button
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


Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Button', Button)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

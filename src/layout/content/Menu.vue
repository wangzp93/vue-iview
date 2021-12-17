<template>
  <Menu ref="menu" :open-names="activeMenu.subs" :active-name="activeMenu.name" width="auto">
    <sider-menu :menu-list="menuList" :parent-name="activeNav" />
  </Menu>
</template>

<script>
import { Menu } from 'view-design';
import SiderMenu from './SiderMenu';

export default {
  name: 'ContentMenu',
  components: {
    Menu,
    SiderMenu,
  },
  computed: {
    // 选中的导航
    activeNav() {
      return this.$store.getters['menuModule/getActiveNav']
    },
    // 菜单列表
    menuList() {
      return this.$store.getters['menuModule/getMenuList']
    },
    // 选中的菜单
    activeMenu() {
      this.$nextTick(()=> {
        this.$refs.menu.updateOpened()
        this.$refs.menu.updateActiveName()
      })
      return this.$store.getters['menuModule/getActiveMenu']
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <Sider :collapsible="false" :collapsed-width="0" v-model="isCollapsed">
    <div class="sider-wrap">
      <Menu ref="menu" theme="dark" width="auto"
            :open-names="openMenus" :active-name="activeMenu"
            @on-select="selectMenu"
      >
        <!--<sider-item :menu-list="menuList"></sider-item>-->
        <sider-item v-for="menu in menuList" :key="menu.name" :item="menu"></sider-item>
      </Menu>
    </div>
  </Sider>
</template>

<script>
import SiderItem from "./SiderItem"

export default {
  name: "SiderMenu",
  components: {
    SiderItem
  },
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isCollapsed: false,   // 菜单是否收起
      openMenus: [],    // 展开的菜单
      activeMenu: '',   // 选中的菜单节点
    }
  },
  methods: {
    selectMenu() {

    }
  }
}
</script>

<style scoped>

</style>
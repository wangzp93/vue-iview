<template>
  <div>
    <template v-for="item in menuList">
      <!-- 是叶子节点 -->
      <div v-if="item.menuList == undefined" class="ivu-menu-submenu" :key="item.key">
        <MenuItem :name="item.key">
          <Icon :type="item.icon"/>
          {{item.label}}
        </MenuItem>
      </div>

      <!-- 不是叶子节点 -->
      <Submenu v-else :name="item.key" :key="item.key">
        <template slot="title">
          <Icon :type="item.icon"/>
          {{ item.label }}
        </template>
        <sider-menu :menuList="item.menuList"></sider-menu>
      </Submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SiderMenu',
    props: {
      menuList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
</style>

<template>
  <div>
    <div v-if="item.children === undefined" class="ivu-menu-submenu">
      <MenuItem :name="item.name">
        <Icon :type="item.icon"/>
        {{ item.meta.title }}
      </MenuItem>
    </div>
    <Submenu v-else :name="item.name" :key="item.name">
      <template slot="title">
        <Icon :type="item.icon"/>
        {{ item.meta.title }}
      </template>
      <sider-item v-for="menu in item.children" :key="menu.name" :item="menu"></sider-item>
    </Submenu>
  </div>
</template>

<script>
  export default {
    name: 'SiderItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
</style>

<template>
    <div>
      <template v-for="item in menuList">
        <!-- 目录 -->
        <Submenu v-if="item.children" :name="item.name" :key="item.name">
          <template slot="title">
            <Icon :type="item.icon" />
            {{ item.meta.title }}
          </template>
          <!-- 递归 -->
          <sider-menu :menu-list="item.children"></sider-menu>
        </Submenu>
        <!-- 叶子节点 -->
        <MenuItem v-else :to="{name: item.name}"
                  :name="item.name" :key="item.name"
        >
          <Icon :type="item.icon" />
          {{ item.meta.title }}
        </MenuItem>
      </template>
    </div>
</template>

<script>
export default {
  name: "SiderMenu",
  props: {
    // 菜单列表
    menuList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
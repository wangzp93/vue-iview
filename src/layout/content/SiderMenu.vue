<template>
    <div>
      <template v-for="item in menuList">
        <!-- 目录 -->
        <Submenu v-if="item.children"
                 :name="formatKey(item.name)"
                 :key="formatKey(item.name)"
        >
          <template slot="title">
            <Icon :type="item.icon" />
            {{ item.meta.title }}
          </template>
          <!-- 递归 -->
          <sider-menu :menu-list="item.children" :parent-name="formatKey(item.name)"></sider-menu>
        </Submenu>
        <!-- 叶子节点 -->
        <MenuItem v-else
                  :to="'/' + formatKey(item.name)"
                  :name="formatKey(item.name)"
                  :key="formatKey(item.name)"
        >
          <Icon :type="item.icon" />
          {{ item.meta.title }}
        </MenuItem>
      </template>
    </div>
</template>

<script>
import { Submenu, MenuItem } from 'view-design';

export default {
  name: "SiderMenu",
  components: {
    Submenu,
    MenuItem,
  },
  props: {
    // 菜单列表
    menuList: {
      type: Array,
      required: true,
    },
    // 父级名称
    parentName: {
      type: String,
      required: true,
    }
  },
  methods: {
    /**
     * 菜单key，nav1/first/second 形式
     */
    formatKey(name) {
      return `${this.parentName}/${name}`
    }
  },
}
</script>

<style scoped>

</style>
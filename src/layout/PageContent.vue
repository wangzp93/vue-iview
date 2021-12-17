<template>
  <div class="page-content">
    <!-- 左侧菜单栏 -->
    <div class="left">
      <Menu ref="menu" :open-names="activeMenu.subs" :active-name="activeMenu.name" width="auto">
        <sider-menu :menu-list="menuList" />
      </Menu>
    </div>

    <!-- 右侧内容 -->
    <div class="right">
      <!-- 面包屑 -->
      <div class="breadcrumb">面包屑</div>
      <!-- 渲染区域 -->
      <div class="real-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SiderMenu from "./SiderMenu"

export default {
  name: "PageContent",
  components: {
    SiderMenu,
  },
  computed: {
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

<style scoped lang="less">
/* 外框 */
.page-content {
  height: 100%;
  display: flex;
  /* 左侧菜单 */
  .left {
    width: @menu-width;
    overflow-y: auto;
  }
  /* 右侧内容 */
  .right {
    flex: 1;
    overflow-y: auto;
    background: #f0f2f5;
    padding: 0px 24px 24px;
    display: flex;
    flex-direction: column;
    /* 面包屑 */
    .breadcrumb {
      margin: 16px 0;
    }
    /* 真实内容区域 */
    .real-content {
      padding: 24px;
      background: #FFF;
      flex: 1;
    }
  }
}
</style>
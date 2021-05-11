<template>
  <div class="page-content-wrap">
    <!-- 左侧菜单栏 -->
    <div class="page-content-left">
      <Menu ref="menu" :open-names="activeSub" :active-name="activeMenu">
        <sider-menu :menu-list="menuList"></sider-menu>
      </Menu>
    </div>
    <!-- 右侧内容区域 -->
    <div class="page-content-right">
      <div class="breadcrumb">面包屑</div>
      <div class="page-content">
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
    SiderMenu
  },
  props: {
    // 菜单列表
    menuList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeSub: Object.freeze([]),   // 展开的目录
      activeMenu: '',   // 选中的菜单
    }
  },
  created() {
    this.onRouteChange()
  },
  beforeUpdate() {
    this.onRouteChange()
  },
  methods: {
    /**
     * 根据路由变化渲染菜单
     */
    onRouteChange() {
      const route = this.$route
      const path = route.path.replace('/', ''),
        pathArr = path.split('/')
      pathArr.shift()   // 去掉导航
      this.activeMenu = pathArr.pop()   // 选中的菜单
      this.activeSub = Object.freeze(pathArr)    // 展开的目录
      // 手动刷新菜单
      this.$nextTick(()=> {
        this.$refs.menu.updateOpened()
        this.$refs.menu.updateActiveName()
      })
    }
  }
}
</script>

<style scoped lang="less">
/* 外框 */
.page-content-wrap {
  height: 100%;
  display: flex;
  /* 左侧菜单 */
  .page-content-left {
    width: 240px;
    overflow-y: auto;
  }
  /* 右侧内容 */
  .page-content-right {
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
    .page-content {
      padding: 24px;
      background: #FFF;
      flex: 1;
    }
  }
}
</style>
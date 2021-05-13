<template>
  <div class="page-layout">
    <!-- 头部 -->
    <page-header :active-nav="activeNav" :nav-list="navList"></page-header>
    <!-- 内容 -->
    <div class="page-layout-content">
      <router-view :menu-list="menuList"></router-view>
    </div>
  </div>
</template>

<script>
import PageHeader from "./PageHeader"

export default {
  name: 'PageLayout',
  components: {
    PageHeader
  },
  data() {
    return {
      activeNav: 'home',    // 当前选中的nav
      navList: Object.freeze([]), // 导航列表
      menuList: Object.freeze([]), // 菜单列表
    }
  },
  created() {
    const route = this.$route
    this.initNav()
    this.onRouteChange(route)
  },
  beforeRouteUpdate(to, from, next) {
    this.onRouteChange(to)
    next()
  },
  methods: {
    /**
     * 初始化导航栏
     */
    initNav() {
      const navList = this.$store.getters.navList
      this.navList = Object.freeze(navList)
    },

    /**
     * 根据路由渲染导航与菜单
     */
    onRouteChange(route) {
      const path = route.path.replace('/', ''),
        pathArr = path.split('/')
      const activeNav = pathArr[0]

      // nav未改变，停止执行
      if (activeNav === this.activeNav) {
        return
      }
      // 选中的导航栏
      this.activeNav = activeNav

      // 菜单列表
      const navList = this.navList
      const navIndex = navList.findIndex((item)=> {
        return item.name === activeNav
      })
      if (navIndex >= 0) {
        const menuList = navList[navIndex].children || []
        this.menuList = Object.freeze(menuList)
      }
    }
  }
}
</script>

<style scoped lang="less">
/* 外框 */
.page-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  /* 内容 */
  .page-layout-content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

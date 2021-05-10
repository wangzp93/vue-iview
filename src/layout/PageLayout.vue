<template>
  <div class="page-layout">
    <page-header :active-nav="activeNav" :nav-list="navList"></page-header>
    <div class="page-layout-content">
      <router-view></router-view>
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
      // 导航列表
      navList: [{
        name: 'nav1',
        meta: { title: '导航1' },
        icon: 'ios-paper',
      }, {
        name: 'nav2',
        meta: { title: '导航2' },
        icon: 'ios-paper',
      }],
      // 菜单列表
      menuList: []
    }
  },
  created() {
    const route = this.$route
    this.onRouteChange(route)
  },
  beforeRouteUpdate(to, from, next) {
    this.onRouteChange(to)
    next()
  },
  methods: {
    /**
     * 根据路由渲染导航与菜单
     */
    onRouteChange(route) {
      const path = route.path.replace('/', ''),
        pathArr = path.split('/')
      // 选中的导航栏
      const activeNav = pathArr[0]
      this.activeNav = activeNav

      //
      const navIndex = this.navList.findIndex((item)=> {
        return item.name === activeNav
      })
      console.log(navIndex)
    }
  }
}
</script>

<style scoped lang="less">
.page-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  .page-layout-content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

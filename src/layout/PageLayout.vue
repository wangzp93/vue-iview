<template>
  <div class="page-layout">
    <page-header :activeNav="activeNav"></page-header>
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

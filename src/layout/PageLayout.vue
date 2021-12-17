<template>
  <div class="page-layout">
    <!-- 头部 -->
    <page-header />
    <!-- 内容 -->
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageHeader from "./PageHeader";

export default {
  name: 'PageLayout',
  components: {
    PageHeader,
  },
}
</script>

<style scoped lang="less">
/* 外框 */
.page-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  /* 内容 */
  .layout-content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

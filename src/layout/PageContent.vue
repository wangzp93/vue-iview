<template>
  <div class="page-content">
    <!-- 左侧菜单栏 -->
    <div class="left">
      <content-menu />
    </div>

    <!-- 右侧内容 -->
    <div class="right">
      <!-- 面包屑 -->
      <content-bread />
      <!-- 渲染区域 -->
      <div class="real-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ContentMenu from './content/Menu';
import ContentBread from './content/Bread';

export default {
  name: "PageContent",
  components: {
    ContentMenu,
    ContentBread,
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
<template>
  <div class="page-content-wrap">
    <div class="page-content-left">

    </div>
    <div class="page-content-right">
      <div class="breadcrumb">面包屑</div>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PageContent"
  }
</script>

<style scoped lang="less">
/* 外框 */
.page-content-wrap {
  height: 100%;
  display: flex;
  /* 左侧菜单 */
  .page-content-left {
    width: 200px;
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
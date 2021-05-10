<template>
  <div class="page-header">
    <img src="../assets/logo.png" class="logo" @click="toHome" alt="">
    <div class="nav-wrap">
      <div class="nav-item active">导航1</div>
      <div class="nav-item">导航2</div>
    </div>
    <div class="user-info">cat</div>
  </div>
</template>

<script>
  export default {
    name: "PageHeader",
    data() {
      return {

      }
    },
    methods: {
      /**
       * 回到首页
       */
      toHome() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped lang="less">
.page-header {
  display: flex;
  height: 64px;
  padding-right: 24px;
  background: #001529;
  /* logo */
  .logo {
    width: 200px;
    height: 100%;
    cursor: pointer;
  }
  /* 导航栏区域 */
  .nav-wrap {
    flex: 1;
    display: flex;
    overflow-x: auto;
    .nav-item {
      line-height: 64px;
      padding: 0 20px;
      color: rgba(255, 255, 255, 0.65);
      cursor: pointer;
      &.active {
        background: #87d068;
        color: #FFF;
      }
      &:hover {
        color: #FFF;
      }
    }
  }
  /* 用户信息 */
  .user-info {
    line-height: 64px;
    padding: 0 20px;
    color: #FFF;
  }
}
</style>
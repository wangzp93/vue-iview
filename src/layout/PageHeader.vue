<template>
  <div class="page-header">
    <!-- logo -->
    <img src="../assets/logo.png" class="logo" @click="toHome" alt="">
    <!-- 导航栏 -->
    <div class="nav-wrap">
      <div v-for="navItem in navList" :key="navItem.name"
           @click="toNav(navItem.name)"
           class="nav-item" :class="{active: activeNav === navItem.name}"
      >
        <Icon :type="navItem.icon" />
        {{ navItem.meta.title }}
      </div>
    </div>
    <!-- 用户信息 -->
    <div class="user-info">
      <Icon type="md-person" />
      cat
    </div>
  </div>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      // 当前选中的nav
      activeNav: {
        type: String,
        required: true
      },
      // 导航列表
      navList: {
        type: Array,
        required: true
      }
    },
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
      },

      /**
       * 跳转nav
       */
      toNav(nav) {
        this.$router.push({ name: nav })
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
<template>
  <div class="page-header">
    <!-- logo -->
    <header-logo />
    <!-- 导航栏 -->
    <div class="nav-page-icon"><Icon type="md-arrow-dropleft" /></div>
    <div class="nav-wrap">
      <div v-for="navItem in navList" :key="navItem.name"
           @click="toNav(navItem.name)"
           class="nav-item" :class="{active: activeNav === navItem.name}"
      >
        <Icon :type="navItem.icon" />
        {{ navItem.meta.title }}
      </div>
    </div>
    <div class="nav-page-icon"><Icon type="md-arrow-dropright" /></div>
    <!-- 用户信息 -->
    <header-user />
  </div>
</template>

<script>
import HeaderLogo from './header/Logo';
import HeaderUser from './header/UserInfo';

export default {
  name: "PageHeader",
  components: {
    HeaderLogo,
    HeaderUser,
  },
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
    },
  }
}
</script>

<style scoped lang="less">
// 导航栏高度
@headerHeight: 64px;

.page-header {
  display: flex;
  height: @headerHeight;
  padding-right: 24px;
  background: #001529;
  user-select: none;

  /* logo */
  .logo {
    width: 200px;
    height: @headerHeight;
    cursor: pointer;
  }

  /* 导航栏区域 */
  .nav-wrap {
    flex: 1;
    display: flex;
    overflow-x: auto;

    .nav-item {
      line-height: @headerHeight;
      padding: 0 20px;
      color: rgba(255, 255, 255, 0.65);
      cursor: pointer;
      &.active {
        background: @primary-color;
        color: #FFF;
      }
      &:hover {
        color: #FFF;
      }
    }
  }

  /* 导航栏翻页 */
  .nav-page-icon {
    width: 26px;
    height: @headerHeight;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 32px;
    cursor: pointer;
    &:hover {
      color: @primary-color;
    }
  }
}
</style>
<template>
  <div class="page-header">
    <!-- logo -->
    <header-logo />
    <!-- 导航栏 -->
    <header-nav />
    <!-- 用户信息 -->
    <header-user />
  </div>
</template>

<script>
import HeaderLogo from './header/Logo';
import HeaderNav from './header/Nav';
import HeaderUser from './header/User';

export default {
  name: "PageHeader",
  components: {
    HeaderLogo,
    HeaderNav,
    HeaderUser,
  },
}
</script>

<style scoped lang="less">
// 导航栏高度
.page-header {
  display: flex;
  height: @nav-height;
  padding-right: 24px;
  background: #001529;
  user-select: none;
}
</style>
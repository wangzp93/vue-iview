<template>
  <div class="page-header">
    <!-- logo -->
    <img src="../assets/logo.png" class="logo" @click="toHome" alt="">
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
    <Dropdown @on-click="onDropClick">
      <div class="user-info">
        <Icon type="md-person" />
        {{ username }}
        <Icon type="ios-arrow-down" />
      </div>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">
          <Icon type="md-exit" />
          退出登录
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import { getCookie, clearCookie } from "../utils/cookie";

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
      username: ''
    }
  },
  created() {
    this.initUserInfo()
  },
  methods: {
    /**
     * 初始化用户信息
     */
    initUserInfo() {
      const username = getCookie('username')
      this.username = username
    },

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

    /**
     * 点击下拉菜单
     */
    onDropClick(name) {
      this[name]()
    },

    /**
     * 退出登录
     */
    logout() {
      // 清除cookie
      clearCookie('username')
      // 清除session暂存的菜单
      sessionStorage.removeItem('navList')
      // 清除vuex菜单数据
      this.$store.dispatch('setMenuState', false)
      this.$store.dispatch('setNavList', [])
      this.$router.push({
        name: 'login'
      })
    }
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

  /* 用户信息 */
  .user-info {
    line-height: @headerHeight;
    padding: 0 20px;
    color: #FFF;
    cursor: pointer;
  }
}
</style>
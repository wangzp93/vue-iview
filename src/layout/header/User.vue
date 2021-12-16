<template>
  <!-- 用户信息 -->
  <Dropdown placement="bottom-end" @on-click="onDropClick">
    <div class="user-info">
      <Icon type="md-person" />
      <span class="user-name">{{ username }}</span>
      <Icon type="ios-arrow-down" />
    </div>
    <DropdownMenu slot="list" class="drop-menu">
      <DropdownItem name="logout">
        <Icon type="md-exit" />
        退出登录
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'HeaderUser',
  data() {
    return {
      username: '',
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
      const username = Cookies.get('username')
      this.username = username
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
      Cookies.remove('username')
      // 跳转登录页
      this.$router.replace({
        name: 'login'
      })
    }
  }
}
</script>

<style scoped lang="less">
@userWidth: 180px;

/* 用户信息 */
.user-info {
  margin-left: 20px;
  width: @userWidth;
  display: flex;
  align-items: center;
  height: 64px;
  color: #FFF;
  cursor: pointer;

  .user-name {
    margin: 0 6px;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

/* 下拉菜单 */
.drop-menu {
  width: @userWidth;
}
</style>
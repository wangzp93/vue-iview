<template>
  <!-- 导航栏 -->
  <div class="nav-wrap">
    <div class="nav-page-icon"><Icon type="md-arrow-dropleft" /></div>
    <div class="nav-content">
      <div v-for="navItem in navList" :key="navItem.name"
           @click="toNav(navItem.name)"
           class="nav-item" :class="{active: activeNav === navItem.name}"
      >
        <Icon :type="navItem.icon" />
        <span class="nav-text">{{ navItem.meta.title }}</span>
      </div>
    </div>
    <div class="nav-page-icon"><Icon type="md-arrow-dropright" /></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    // 当前选中的nav
    activeNav: {
      type: String,
      required: true
    },
  },
  computed: {
    navList() {
      return this.$store.getters['menuModule/getMenuData']
    }
  },
  methods: {
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
.nav-wrap {
  display: flex;
  flex: 1;

  /* 导航内容 */
  .nav-content {
    flex: 1;
    display: flex;
    overflow-x: auto;

    .nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
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

      .nav-text {
        margin-left: 6px;
      }
    }
  }

  /* 导航翻页 */
  .nav-page-icon {
    width: 26px;
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
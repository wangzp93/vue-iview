<template>
  <!-- 导航栏 -->
  <div class="nav-wrap">
    <!-- 导航翻页 -->
    <div class="nav-page-icon left" @click="scrollLeft"><Icon type="md-arrow-dropleft" /></div>
    <div class="nav-page-icon right" @click="scrollRight"><Icon type="md-arrow-dropright" /></div>

    <!-- 滚动区域 -->
    <div id="nav-scroll" class="nav-scroll">
      <div id="nav-content" class="nav-content" :style="{transform: `translateX(-${scroll}px)`}">
        <div v-for="navItem in navList"
             :key="navItem.name"
             :data-key="navItem.name"
             @click="toNav(navItem.name)"
             class="nav-item" :class="{active: activeNav === navItem.name}"
        >
          <Icon :type="navItem.icon" />
          <span class="nav-text">{{ navItem.meta.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      scroll: 0,
      scrollDom: null,
      contentWidth: 0,
    }
  },
  computed: {
    // 导航列表
    navList() {
      return this.$store.getters['menuModule/getMenuData']
    },
    // 选中的导航
    activeNav() {
      const activeNav = this.$store.getters['menuModule/getActiveNav']
      this.scrollToCenter(activeNav)
      return activeNav
    }
  },
  mounted() {
    this.initOffset()
  },
  methods: {
    /**
     * 初始化偏移量
     */
    initOffset() {
      this.scrollDom = document.getElementById('nav-scroll')
      let contentDom = document.getElementById('nav-content')
      this.contentWidth = contentDom.offsetWidth

      let menuDict = this.$store.getters['menuModule/getMenuDict']
      contentDom.children.forEach(function(dom) {
        let key = dom.getAttribute('data-key')
        const navItem = menuDict[key]
        navItem.left = dom.offsetLeft
        navItem.width = dom.offsetWidth
      })
    },

    /**
     * 向左滚动
     */
    scrollLeft() {
      let scrollWidth = this.scrollDom.offsetWidth
      let currentScroll = this.scroll
      if (currentScroll > 0) {
        this.scroll = Math.max(currentScroll - scrollWidth, 0)
      }
    },

    /**
     * 向右滚动
     */
    scrollRight() {
      let scrollWidth = this.scrollDom.offsetWidth
      let maxScroll = this.contentWidth - scrollWidth
      let currentScroll = this.scroll
      if (currentScroll < maxScroll) {
        this.scroll = Math.min(currentScroll + scrollWidth, maxScroll)
      }
    },

    /**
     * 当前导航滚动到居中位置
     */
    scrollToCenter(activeNav) {
      this.$nextTick(() => {
        const menuDict = this.$store.getters['menuModule/getMenuDict']
        const navItem = menuDict[activeNav]
        if (navItem === undefined) { return }

        const left = navItem.left
        const width = navItem.width

        const scrollWidth = this.scrollDom.offsetWidth
        let maxScroll = this.contentWidth - scrollWidth
        let scroll = left - scrollWidth / 2 + width / 2
        if (scroll < 0) {
          scroll = 0
        } else if (scroll > maxScroll) {
          scroll = maxScroll
        }
        this.scroll = scroll
      })
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
@nav-icon-width: 26px;

.nav-wrap {
  flex: 1;
  position: relative;
  padding: 0 @nav-icon-width;
  overflow: hidden;

  /* 导航翻页 */
  .nav-page-icon {
    width: @nav-icon-width;
    height: 100%;
    line-height: @nav-height;
    position: absolute;
    color: #FFF;
    font-size: 32px;
    cursor: pointer;
    &:hover {
      color: @primary-color;
    }
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
    .ivu-icon {
      width: 100%;
    }
  }

  /* 滚动区域 */
  .nav-scroll {
    overflow: hidden;
    /* 导航内容 */
    .nav-content {
      width: max-content;
      transition: transform 500ms ease-in-out;
      .nav-item {
        display: inline-block;
        padding: 0 20px;
        line-height: @nav-height;
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
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
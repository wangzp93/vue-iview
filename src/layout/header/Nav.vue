<template>
  <!-- 导航栏 -->
  <div class="nav-wrap">
    <!-- 导航翻页 -->
    <div v-show="leftVisible" class="nav-page-icon left" @click="scrollLeft">
      <Icon type="md-arrow-dropleft" />
    </div>
    <div v-show="rightVisible" class="nav-page-icon right" @click="scrollRight">
      <Icon type="md-arrow-dropright" />
    </div>

    <!-- 滚动区域 -->
    <div id="nav-scroll" class="nav-scroll">
      <div id="nav-content"
           class="nav-content"
           :style="{transform: `translateX(-${scroll}px)`}"
      >
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
import { throttle, debounce } from '@/utils/common';

export default {
  name: 'HeaderNav',
  data() {
    return {
      scroll: 0, // 偏移量
      scrollWidth: 0, // 滚动区域宽度
      contentWidth: 0, // 内容总宽度
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
    },
    // 控制左滑动按钮显示
    leftVisible() {
      return this.scroll > 0
    },
    // 控制右滑动按钮显示
    rightVisible() {
      return this.scroll < this.contentWidth - this.scrollWidth
    },
  },
  mounted() {
    this.initDomInfo()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    /**
     * 初始化dom宽度信息
     */
    initDomInfo() {
      const contentDom = document.getElementById('nav-content')
      this.scrollWidth = document.getElementById('nav-scroll').offsetWidth
      this.contentWidth = contentDom.offsetWidth

      // 存储每个navItem dom信息
      const menuDict = this.$store.getters['menuModule/getMenuDict']
      const domList = contentDom.children
      for (let i=0, len=domList.length; i<len; i++) {
        const dom = domList[i]
        const key = dom.getAttribute('data-key')
        const navItem = menuDict[key]
        navItem.left = dom.offsetLeft
        navItem.width = dom.offsetWidth
      }
    },

    /**
     * 窗口尺寸改变，重置滚动区域宽度
     */
    onResize: debounce(function() {
      this.scrollWidth = document.getElementById('nav-scroll').offsetWidth
      this.scrollToCenter(this.activeNav)
    }, 300),

    /**
     * 向左滚动
     */
    scrollLeft: throttle(function() {
      const currentScroll = this.scroll
      if (currentScroll > 0) {
        this.scroll = Math.max(currentScroll - this.scrollWidth, 0)
      }
    }, 500),

    /**
     * 向右滚动
     */
    scrollRight: throttle(function() {
      const scrollWidth = this.scrollWidth
      const maxScroll = this.contentWidth - scrollWidth
      const currentScroll = this.scroll
      if (currentScroll < maxScroll) {
        this.scroll = Math.min(currentScroll + scrollWidth, maxScroll)
      }
    }, 500),

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

        const scrollWidth = this.scrollWidth
        const maxScroll = this.contentWidth - scrollWidth
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
<template>
    <Layout style="height: 100%;">
        <Header style="padding-left: 200px;">
            <!-- 顶部导航栏 -->
            <nav-bar :active-nav="activeNav" :nav-list="navList"></nav-bar>
        </Header>
        <Layout style="flex-direction: row;">
            <!-- 左侧菜单栏 -->
            <sider-menu :menu-list="menuList"></sider-menu>
            <Layout>
                <Content>
                    <router-view></router-view>
                </Content>
                <!-- <Footer style="text-align: center;">Footer</Footer> -->
            </Layout>
        </Layout>
    </Layout>
</template>

<script>
import NavBar from "@/components/NavBar"
import SiderMenu from '@/components/SiderMenu'

import {navList} from "../router/config";

export default {
    name: 'Frame',
    components: {
        NavBar,
        SiderMenu
    },
    data() {
        return {
            isCollapsed: false,
            navList,  // 导航栏list
            activeNav: 0,  // 选中的导航栏
        }
    },
    created() {
        this.init()
    },
    mounted() {
        // this.formatMenuData()
        // this.getSelectFromRouter(this.$route.path, true)
    },
    beforeRouteUpdate(to, from, next) {
        debugger
      // this.getSelectFromRouter(to.path)
      next()
    },
    computed: {
        /**
         * 菜单list
         * 取当前选中nav的children
         */
        menuList() {
            const {activeNav, navList} = this
            if (navList.length > 0) {
                return navList[activeNav].children
            } else {
                return []
            }
        }
    },
    methods: {
        init() {
            /* 默认选中导航中第一个 */
            const navList = this.navList
            if (navList && navList.length > 0) {
                // this.activeNav = navList[0].name
            }
        },

        /**
         * 格式化菜单数据
         */
        formatMenuData() {
            let menuOpts = {}
            for (let i = 0, len = this.navList.length; i < len; i++) {
                let navItem = this.navList[i]
                menuOpts[navItem.key] = navItem.menuList
            }
            this.menuOpts = menuOpts
        },

        /**
         * 选择导航栏
         */
        selectNav(nav) {
            this.activeNav = nav
            this.$router.push({
                name: nav
            })
        },

        /**
         * 选择菜单栏
         */
        selectMenu(menu) {
            this.activeMenu = menu
            this.$router.push({
                name: menu
            })
        },

        /**
         * 根据路由选中菜单
         */
        getSelectFromRouter(path, isFirst) {
            let keyList = path.replace(/^\//, '').split('/'),
                len = keyList.length,
                openMenus = []
            for (let i = 1; i < len - 1; i++) {
                openMenus.push(keyList[i])
            }
            this.activeNav = keyList[0]     // 选中的导航栏
            if (isFirst) {
                this.openMenus = openMenus          // 展开的菜单
            }
            this.activeMenu = keyList[len - 1]  // 选中的菜单
            this.$nextTick(() => {
                if (isFirst) {
                    this.$refs.menu.updateOpened()
                }
                this.$refs.menu.updateActiveName()
            })
        }
    },
    watch: {
        activeNav(val) {
            if (val !== '') {
                this.menuList
            }
        }
    }
}
</script>

<style scoped>
.ivu-layout-sider-collapsed .ivu-menu {
    display: none;
}

.sider-wrap {
    height: 100%;
    overflow-y: auto;
}

.ivu-menu-item {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>

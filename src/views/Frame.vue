<template>
    <Layout style="height: 100%;">
        <Header style="padding-left: 200px;">
            <Menu mode="horizontal" theme="dark"
                  :active-name="activeNav"
                  @on-select="selectNav"
            >
                <MenuItem v-for="item in navList" :name="item.key" :key="item.key">
                    <Icon :type="item.icon"/>
                    {{ item.label }}
                </MenuItem>
            </Menu>
        </Header>
        <Layout>
            <Sider :collapsible="false" :collapsed-width="0" v-model="isCollapsed">
                <div class="sider-wrap">
                    <Menu ref="menu" theme="dark" width="auto"
                          :open-names="openMenus" :active-name="activeMenu"
                          @on-select="selectMenu"
                    >
                        <sider-menu :menu-list="menuOpts[activeNav]"></sider-menu>
                    </Menu>
                </div>
            </Sider>
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
    import SiderMenu from '../components/SiderMenu.vue'
    import { navList } from '../router/config'

    export default {
        name: 'Frame',
        components: {
            SiderMenu
        },
        data() {
            return {
                isCollapsed: false,
                navList,
                menuOpts: {},
                activeNav: '',  // 选择的导航栏
                openMenus: [],  // 展开的菜单
                activeMenu: '', // 选择的菜单叶子节点
            }
        },
        mounted() {
            this.formatMenuData()
            this.getSelectFromRouter(this.$route.path, true)
        },
        beforeRouteUpdate (to, from, next) {
            this.getSelectFromRouter(to.path)
            next()
        },
        methods: {
            /**
             * 格式化菜单数据
             */
            formatMenuData() {
                let menuOpts = {}
                for (let i = 0, len = navList.length; i < len; i++) {
                    let navItem = navList[i]
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
                for (let i=1; i<len - 1; i++) {
                    openMenus.push(keyList[i])
                }
                this.activeNav = keyList[0]     // 选中的导航栏
                if (isFirst) {
                    this.openMenus = openMenus          // 展开的菜单
                }
                this.activeMenu = keyList[len - 1]  // 选中的菜单
                this.$nextTick(()=> {
                    if (isFirst) {
                        this.$refs.menu.updateOpened()
                    }
                    this.$refs.menu.updateActiveName()
                })
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

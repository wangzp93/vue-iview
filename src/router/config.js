const navList = [{
    key: 'nav1',
    label: '导航1',
    menuList: [{
        key: 'menu1',
        label: '菜单1',
        menuList: [{
            key: 'menu1-1',
            label: '菜单1-1',
            path: 'nav1/Menu1-1'
        }]
    }, {
        key: 'menu3',
        label: '菜单1-3',
        path: 'nav1/Menu1-3',
        menuList: []
    }]
}, {
    key: 'nav2',
    label: '导航2',
    menuList: [{
        key: 'menu2-3',
        label: '菜单2-3',
        path: 'nav2/Menu2-3'
    }, {
        key: 'menu2-1',
        label: '菜单2-1',
        menuList: [{
            key: 'menu2-1-1',
            label: '菜单2-1-1',
            path: 'nav2/Menu2-1'
        }]
    }]
}]

export { navList }
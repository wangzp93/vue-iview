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
        path: 'nav1/Menu1-3'
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
// var a = 3
// for (var i=1; i<=a; i++) {
//     var tabItem = {
//         key: `tab${i}`,
//         label: `标签${i}`
//     }
//
//     var menuList = []
//     for (var j=1; j<=a; j++) {
//         var menuItem = {
//             key: `menu${i}-${j}`,
//             label: `菜单${i}-${j}`
//         }
//         var childList = []
//         for (var k=0; k<=a; k++) {
//             var childItem = {
//                 key: `menu${i}-${j}-${k}`,
//                 label: `菜单${i}-${j}-${k}`
//             }
//             childList.push(childItem)
//         }
//         menuItem.menuList = childList
//         menuList.push(menuItem)
//     }
//     tabItem.menuList = menuList
//     navList.push(tabItem)
// }

export { navList }
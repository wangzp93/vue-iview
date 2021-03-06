export function navToRouter(navList = []) {
  const routerList = []
  for (let i=0, len=navList.length; i<len; i++) {
    const navItem = navList[i],
      name = navItem.name,
      meta = navItem.meta,
      menuList = navItem.children || [],
      children = menuList.length > 0 ? menuToRouter(menuList, '', name) : [],  // 递归获取子路由
      redirect = children.length > 0 ? { name: children[0].name } : null  // 重定向子路由第一个

    routerList.push({
      path: name,
      name,
      meta,
      component: (resolve)=> require(['@/layout/PageContent'], resolve),
      redirect,
      children
    })
  }
  return routerList
}

function menuToRouter(menuList = [], parentPath = '', nav = '') {
  const routerList = []
  for (let i=0, len=menuList.length; i<len; i++) {
    const menuItem = menuList[i],
      name = menuItem.name,
      path = parentPath + (parentPath ? '/' : '') + name,
      children = menuItem.children || []
    if (children.length > 0) {
      // 子级扁平化
      const childRouterList = menuToRouter(children, path, nav)
      routerList.push(...childRouterList)
    } else {
      routerList.push({
        path,
        name,
        meta: menuItem.meta,
        component: (resolve) => require([`@/views/${nav}/${path}`], resolve)
      })
    }
  }
  return routerList
}
/**
 * @author: wangzp
 * @date: 2021-12-17 18:18
 */
/**
 * 初始化动态路由
 * @param menuData
 */
export function initRoutes(router, menuData) {
  const asyncRoutes = getFirstRoutes(menuData)
  asyncRoutes.forEach(item=> {
    router.addRoute('/', item)
  })
}

/**
 * 获取一级路由
 * @param menuData
 * @returns {*[]}
 */
function getFirstRoutes(menuData = []) {
  const routerList = []
  for (let i=0, len=menuData.length; i<len; i++) {
    const { name, meta, children=[] } = menuData[i]
    const secondRoutes = children.length > 0 ? getSecondRoutes(children, name) : []  // 递归获取子路由
    const redirect = secondRoutes.length > 0 ? { name: secondRoutes[0].name } : null  // 重定向子路由第一个

    routerList.push({
      path: name,
      name,
      meta,
      component: (resolve)=> require(['@/layout/PageContent'], resolve),
      redirect,
      children: secondRoutes
    })
  }

  // 404路由也要动态添加，需放最后
  routerList.push({ path: '*', redirect: '/404', hidden: true })
  return routerList
}

/**
 * 获取二级路由
 * @param secondMenuData
 * @param firstRouteName
 * @param parentPath
 * @returns {*[]}
 */
function getSecondRoutes(secondMenuData = [], firstRouteName = '', parentPath) {
  const routerList = []
  for (let i=0, len=secondMenuData.length; i<len; i++) {
    const { name, meta, children=[] } = secondMenuData[i]
    const path = (parentPath !== undefined) ? (`${parentPath}/${name}`) : name
    if (children.length > 0) {
      // 子级扁平化
      const childRouterList = getSecondRoutes(children, firstRouteName, path)
      routerList.push(...childRouterList)
    } else {
      routerList.push({
        path,
        name,
        meta,
        component: (resolve) => require([`@/views/${firstRouteName}/${path}`], resolve)
      })
    }
  }
  return routerList
}

/**
 * 根据路由地址，设置导航菜单高亮
 * @param path
 */
export function setActiveByPath(store, path) {
  path = path.replace('/', '') // 先去除第一个/
  var list = path.split('/')

  // 选中的导航
  let activeNav = list.shift()
  store.commit('menuModule/setActiveNav', activeNav)

  // 选中的菜单
  let activeMenu = list.pop()
  if (activeMenu) {
    store.commit('menuModule/setActiveMenu', {
      subs: list, // 展开的菜单
      name: activeMenu, // 选中的菜单
    })
  }
}
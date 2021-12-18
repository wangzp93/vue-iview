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
  // 默认404，需放最后
  router.addRoute('/', { path: '*', redirect: '/404', hidden: true })
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
    const path = `/${name}`
    const secondRoutes = children.length > 0 ? getSecondRoutes(children, path) : []  // 递归获取子路由
    const redirect = secondRoutes.length > 0 ? { name: secondRoutes[0].name } : null  // 重定向子路由第一个

    routerList.push({
      path,
      name,
      meta,
      component: (resolve)=> require(['@/layout/PageContent'], resolve),
      redirect,
      children: secondRoutes
    })
  }
  return routerList
}

/**
 * 获取二级路由
 * @param secondMenuData
 * @param parentPath
 * @returns {*[]}
 */
function getSecondRoutes(secondMenuData = [], parentPath) {
  const routerList = []
  for (let i=0, len=secondMenuData.length; i<len; i++) {
    const { name, meta, children=[] } = secondMenuData[i]
    const path = `${parentPath}/${name}`
    if (children.length > 0) {
      // 子级扁平化
      const childRouterList = getSecondRoutes(children, path)
      routerList.push(...childRouterList)
    } else {
      routerList.push({
        path,
        name,
        meta,
        component: (resolve) => require([`@/views${path}`], resolve)
      })
    }
  }
  return routerList
}

/**
 * 根据路由地址，设置导航菜单高亮、面包屑等
 * @param path
 */
export function setActiveByPath(store, path) {
  path = path.replace('/', '') // 先去除第一个/
  let list = path.split('/');

  // 选中的导航
  let currentKey = list.shift()
  store.commit('menuModule/setActiveNav', currentKey)

  let leaf = list.pop() // 叶子节点
  if (leaf) {
    let menuDict = store.getters['menuModule/getMenuDict']

    // 展开的菜单
    const subs = []
    // 面包屑
    const breadList = [{
      name: currentKey,
      text: menuDict[currentKey].text,
    }]

    for (let i=0, len=list.length; i<len; i++) {
      let item = list[i]

      // 展开的菜单
      currentKey = `${currentKey}/${item}` // nav1/first/second
      subs.push(currentKey)
      // 面包屑
      breadList.push({
        text: menuDict[currentKey].text,
      })
    }

    // 选中的菜单 nav1/first/second/leaf
    let activeMenu = `${currentKey}/${leaf}`
    breadList.push({
      text: menuDict[activeMenu].text,
    })
    store.commit('menuModule/setActiveMenu', {
      subs, // 展开的菜单
      name: activeMenu, // 选中的菜单
    })
    store.commit('menuModule/setBreadList', breadList)
  }
}
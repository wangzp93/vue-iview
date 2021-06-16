import NAV_LIST from "../config/menu";

export function getMenus() {
  return new Promise((resolve)=> {
    // 如果是刷新，可从session取数据
    let navList = sessionStorage.getItem('navList')
    sessionStorage.removeItem('navList')
    if (navList) {
      navList = JSON.parse(navList)
      resolve(navList)
    } else {
      // session无数据时，调用接口
      navList = NAV_LIST
      setTimeout(()=> {
        resolve(navList)
      }, 1000)
    }
  })
}
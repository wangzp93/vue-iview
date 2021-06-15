import navList from "../config/menu";

export function getMenus() {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(navList)
    }, 300)
  })
}
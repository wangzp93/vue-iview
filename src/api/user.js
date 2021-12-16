/**
 * @author: wangzp
 * @date: 2021-12-14 17:18
 */
import { get } from "@/axios"

export function login(params) {
  return get('./data/menuData.json').then(menuData => {
    return {
      menuData,
      userInfo: params,
    }
  })
}
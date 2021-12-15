import { get } from '@/axios'

export function getMenuData() {
  return get('./data/menuData.json')
}
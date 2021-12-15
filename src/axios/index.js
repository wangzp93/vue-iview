/**
 * @author: wangzp
 * @date: 2021-12-14 17:44
 */
import Vue from 'vue'
import axios from 'axios'
const $axios = axios.create({

})

$axios.interceptors.response.use(function(res) {
  if (res.status === 200) {
    return res.data
  }
  return res
})

export function get(url, params) {
  return $axios({
    method: 'get',
    url,
    params,
  })
}

export function post(url, params) {
  return $axios({
    method: 'post',
    url,
    data: params,
  })
}

Object.defineProperty(Vue.prototype, '$axios', {
  value: $axios,
  writable: false,
  enumerable: false,
  configurable: false,
})
/**
 * @author: wangzp
 * @date: 2021-12-18 18:34
 */
/**
 * 节流
 */
export function throttle(fn, wait) {
  let lastTime = 0
  return function() {
    const nowTime = Date.now()
    if (nowTime - lastTime > wait) {
      lastTime = nowTime
      fn.apply(this, arguments)
    }
  }
}

/**
 * 防抖
 */
export function debounce(fn, wait) {
  let timer = null
  return function() {
    clearTimeout(timer)
    const _this = this
    const _args = arguments
    timer = setTimeout(function() {
      fn.apply(_this, _args)
    }, wait)
  }
}
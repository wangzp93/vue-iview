/**
 * 设置cookie
 */
export function setCookie(name, value, hours = 24){
  let str = name + "=" + value;
  const time = new Date(new Date().getTime() + hours * 3600 * 1000).toGMTString();  // toGMTstring将时间转换成字符串
  str += "; expires=" + time;
  // 写入Cookie
  document.cookie = str;
}

/**
 * 获取cookie
 */
export function getCookie(name){
  const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
    arr = document.cookie.match(reg);
  if (arr !== null) {
    return arr[2];
  } else {
    return null;
  }
}

/**
 * 清除cookie
 */
export function clearCookie(name){
  setCookie(name, '', -1)
}
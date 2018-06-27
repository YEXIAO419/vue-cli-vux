/**
 * 时间格式化
 * @param {*} date 传入的日期时间
 * @param {*} fmt  需要转化的时间
 * @return 已转换好的时间格式
 * 页面使用：
 *  1 引入：import formatDate from '../utils/formatDate.js'
 *  2 使用：formatDate(new Date(), 'yyyyMMddhhmmss')
 */
export default function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
      }
    }
    return fmt
  }
  
  function padLeftZero (str) {
    return ('00' + str).substr(str.length)
  }

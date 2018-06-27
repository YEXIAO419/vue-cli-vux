/**
 * 页面使用：
 *  1 引入：import storage from '../utils/storage.js'
 *  2 使用：storage.set('login', true)
 */
class StorageFun {
  constructor () {
    this.storage = window.localStorage
    this.prefix = 'lxq_'
  }

  set (key, value, fun) {
    if (typeof value !== 'string') {
      try {
        value = JSON.stringify(value)
      } catch (e) {}
    }
    this.storage.setItem(this.prefix + key, value)
    typeof fun === 'function' && fun()
  }

  get (key, fun) {
    let value = this.storage.getItem(this.prefix + key)
    try {
      value = JSON.parse(value)
      if (value === null)value = {}
    } catch (e) {
      value = {}
    }
    return typeof fun === 'function' ? fun.call(this, value) : value
  }

  remove (key) {
    this.storage.removeItem(this.prefix + key)
  }
}

let storage = new StorageFun()

export default storage

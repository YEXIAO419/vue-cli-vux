import axios from 'axios'
// import qs from 'qs'

export const baseUrl = process.env.API_ROOT

// 新建一个 axios 实例
var instance = axios.create({
  baseURL: baseUrl,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: false
})

// 请求拦截器 发送请求之前做一些处理
instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // 当请求异常时做一些处理
  return Promise.reject(error)
})

// 响应时拦截
instance.interceptors.response.use(function (response) {
  // 返回响应时做一些处理
  if (response.config.headers.Authorization) {
    // console.log(response.config.headers)
    // sessionStorage.setItem('access_token', response.config.headers.Authorization)
    // console.log(sessionStorage.getItem('access_token'))
  }
  return response
}, function (error) {
  // 当响应异常时做一些处理
  return Promise.reject(error)
})

var api = {
  /* ---------- 注册登陆部分 ---------- */
  login (data) {
    return instance({
      url: 'api/home/user/login',
      method: 'POST',
      data: data
    })
  },

  loginOut () {
    console.log('退出')
  }

}

export default api

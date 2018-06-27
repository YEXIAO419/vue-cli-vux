import Vue from 'vue'
import App from './App'
import FastClick from 'fastClick'
import router from './router'
import api from './api/api.js'

Vue.config.productionTip = false
Vue.prototype.$api = api
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

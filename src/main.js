// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import $ from 'jquery'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading:'@/assets/loading-spinning-bubbles.svg'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

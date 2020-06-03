import Vue from 'vue'
import App from './App.vue'
import FlightElementUI from './index'
Vue.use(FlightElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})



import Vue from 'vue'
import App from './App.vue'
require('./assets/main.css');
window.echarts = require('echarts');

new Vue({
  el: '#app',
  render: h => h(App)
})



import Vue from 'vue'
import Screen from './Screen.vue'
require('./assets/main.css');
window.echarts = require('echarts');
var resize = require("./assets/resize.js");
$(document).ready(function(){
  resize.resizeInit();
});
new Vue({
  el: '#screen',
  render: h => h(Screen)
})

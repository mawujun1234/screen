

import Vue from 'vue'
import Screen from './Screen.vue'
require('../assets/main.css');
window.echarts = require('echarts');
var resize = require("../assets/resize.js");

window.screen = {
 width:1280,
 height:1024,
 display:1,
 selecter:'#screen'
};


$(document).ready(function(){
  resize.resizeInit();

  $(window.screen.selecter).css({
    width:window.screen.width,
    height:window.screen.height,
    transformOrigin: "left top",
    backgroundSize: "100%"
  });
});
new Vue({
  el: '#screen',
  render: h => h(Screen)
})

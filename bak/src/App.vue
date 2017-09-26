<template>
  <!-- 存放背景图片啥的-->
  <div id="app">
    <div id="echart" style="height:300px;width:300px;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart'));
// 绘制图表
myChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
  }
}
</script>

<style>
.app_layout {
  width: 100%;
  height:100%;
  background-color: rgba(0, 0, 17,0.9);
  position:absolute;
  top: 0;
  left: 0;
  visibility: hidden;
}
</style>

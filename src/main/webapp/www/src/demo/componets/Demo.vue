<template>
  <div  id="demo" class="border-corner comp-demo">

  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted: function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('demo'));
    // 绘制图表
    myChart.setOption({
        title: {
          show:true,
          text: '图表示例',
          textStyle:{
            color:'#3399CC',//#3366CC
            fontSize:14
          }
        },
        tooltip: {},
        xAxis: {
          axisLine:{
            lineStyle:{
              color:'#99CCFF'
            }
          },
          data: ["衬衫","西服","领带","裤子","床套","袜子"]
        },
        yAxis: {
          axisLine:{
            lineStyle:{
              color:'#99CCFF'
            }
          }
        },
        grid:{
          top:40,
          right:'8%',
          bottom:20,
          left:'8%'
        },
        series: [{
            name: '销量',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  },
  methods: {

  }
}
</script>
<style>
.comp-demo {
  position: absolute;
  height:200px;
  width:300px;
  top:35px;
}
</style>

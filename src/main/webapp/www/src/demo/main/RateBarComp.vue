<!-- 营销公司的费率和毛利率的柱状图-->
<template>
  <div id="ratebarcomp" class="comp-ratebarcomp">

  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted: function mounted() {
    let vm=this;
    vm.show_bar();
  },
  methods: {
    show_bar:function(){
      let vm=this;
      let myChart = echarts.init(document.getElementById('ratebarcomp'));
      var option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          legend: {
              data: ['毛利率', '费率'],
              textStyle:{color:'#99CCFF'}
          },
          grid: {
              top:30
              ,containLabel: true
          },
          xAxis: {
            show:false,
              type: 'value',
              boundaryGap: [0, 0.01],
              axisLine:{
                lineStyle:{
                  color:'#99CCFF'
                }
              }
          },
          yAxis: {
              type: 'category',
              inverse:true,
              data: ['浙江','中原','华东','重庆','北方','闽赣','东北','西北','南方','服饰'],
              axisLine:{
                lineStyle:{
                  color:'#99CCFF'
                }
              }
          },
          series: [
              {
                  name: '毛利率',
                  type: 'bar',
                  data: [56, 67, 12, 34, 66,88, 54, 38, 64, 58],
                  itemStyle: {
                      normal: {
                          color:'#0099cc'
                      }
                  },
                  label:{
                    normal:{
                      show:true,
                      textStyle:{
                        fontSize:8
                      }
                    }
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name: '费率',
                  type: 'bar',
                  data: [44, 55, 76, 34, 54,67, 45, 12, 47, 65],
                  itemStyle: {
                      normal: {
                          color:'#99ccff'
                      }
                  },
                  label:{
                    normal:{
                      show:true,
                      textStyle:{
                        fontSize:10
                      }
                    }
                  },
                  markLine : {
                      data : [
                          {type : 'average', name : '平均值'}
                      ]
                  }
              }
          ]
       };
       myChart.setOption(option);

    }
  }
}
</script>

<style>
.comp-ratebarcomp {
  position:absolute;
  width:300px;
  height:340px;
  min-height:340px;
  top:260px;
  left:500px;
}
</style>

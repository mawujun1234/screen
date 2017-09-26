<template>
  <div id="rateprofit" class="rate-profit">
    <div id="rateprofit_pie">
    </div>
    <div id="rateprofit_bar">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rate_profit:53.7
    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance
    let vm=this;
    vm.show_rate_profit();
    vm.show_rate_bar();
  },
  methods: {
    show_rate_profit:function(){
      let vm=this;
      var myChart = echarts.init(document.getElementById('rateprofit_pie'));

      var donum = vm.rate_profit;
      var option = {
        title:{
          text:'毛利率',
          textStyle:{
            color:'#3399CC',//#3366CC
            fontSize:14
          }
          ,left:'center'

        },
        grid: {
            bottom:0
            ,containLabel: true
        },
        series: [{
            name: '毛利率',
            type: 'pie',
            radius: ['60%', '75%'],
            avoidLabelOverlap: false,
            hoverAnimation:false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            data: [{
                    value: donum,
                    name: donum+'%'
                },{
                    value: 100 - donum,
                    name: ''
                }
            ]
        }],
        color:['#0099cc','#99ccff']
      };
      myChart.setOption(option);
    },
    show_rate_bar:function(){
      let vm=this;
      let myChart = echarts.init(document.getElementById('rateprofit_bar'));
      var option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          grid: {
              top:0
              ,containLabel: true
          },
          xAxis: {
            show:false,
              type: 'value',
              boundaryGap: [0, 0.01],
              max:100,
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
              }
          ]
       };
       myChart.setOption(option);
    }
  }
}
</script>
<style>
.rate-profit{
  position: absolute;
  width:200px;
  height:300px;
  top:265px;
}
#rateprofit_pie{
  width:100px;
  height:120px;
  margin: 0 auto;
}
#rateprofit_bar{
  width:100%;
  height:100%;
}
</style>

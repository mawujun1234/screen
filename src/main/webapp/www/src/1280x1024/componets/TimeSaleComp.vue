<template>
  <div id="timesalecomp" class="timesalecomp border-corner">
    <div id="timesalecomp_bar">
    </div>
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
    vm.show_sale_bar();
    setInterval(function(){
      var data=[];
      for(var i=0;i<10;i++){
        data[i]=(100000*Math.random()).toFixed(0);
      }
      vm.myChart.setOption({
        series:[{
          data: data
        }]
      });
    },3000);
  },
  methods: {
    show_sale_bar:function(){
      let vm=this;
      let myChart = echarts.init(document.getElementById('timesalecomp_bar'));
      vm.myChart=myChart;
      var option = {
        title: {
          show:true,
          text: '营销公司-实时销售',
          textStyle:{
            color:'#3399CC',//#3366CC
            fontSize:14
          }
        },
        tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          grid: {
              top:30
              ,left:0
              ,bottom:0
              ,containLabel: true
          },
          xAxis: {
            show:false,
              type: 'value',
              boundaryGap: [0, 0.01],
              //max:100,
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
                  }
                  // markLine : {
                  //     data : [
                  //         {type : 'average', name: '平均值'}
                  //     ]
                  // }
              }
          ]
       };
       myChart.setOption(option);
    }
  }
}
</script>
<style>
.timesalecomp{
  position: absolute;
  top:220px;
  left:900px;
}
#timesalecomp_bar{
  width:340px;
  height:410px;
}
</style>

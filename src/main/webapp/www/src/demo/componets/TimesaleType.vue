<template>
  <div id="timesaletype" class="timesaletype">
    <div id="timesaletype_bar">
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
        data[i]=(100*Math.random()).toFixed(0);
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
      let myChart = echarts.init(document.getElementById('timesaletype_bar'));
      vm.myChart=myChart;
      var option = {
        title: {
          show:true,
          text: '大类实时销售',
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
              data: ['衬衫','西服','裤子','夹克','T恤','大衣','毛衫','领带','鞋包','羽绒服'],
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
.timesaletype{
  position: absolute;
  width:200px;
  top:265px;
  left:390px;
}
#timesaletype_bar{
  width:160px;
  height:390px;
}
</style>

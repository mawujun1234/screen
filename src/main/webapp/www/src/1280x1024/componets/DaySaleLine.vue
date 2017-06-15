<template>
  <div id="daysaleline" class="border-corner">
    <div id="daysaleline_bar">
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
    // setInterval(function(){
    //   var data=[];
    //   for(var i=0;i<10;i++){
    //     data[i]=(100000*Math.random()).toFixed(0);
    //   }
    //   vm.myChart.setOption({
    //     series:[{
    //       data: data
    //     }]
    //   });
    // },3000);
  },
  methods: {
    show_sale_bar:function(){
      let vm=this;
      let myChart = echarts.init(document.getElementById('daysaleline_bar'));
      vm.myChart=myChart;
      function randomData() {
          now = new Date(+now + oneDay);
          value = value + Math.random() * 21 - 10;
          return {
              name: now.toString(),
              value: [
                  [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                  Math.round(value)
              ]
          }
      }

      var data = [];
      var now = +new Date(1997, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var value = Math.random() * 1000;
      for (var i = 0; i < 1000; i++) {
          data.push(randomData());
      }

      let option = {
          // title: {
          //     text: '动态数据 + 时间坐标轴'
          // },
          tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                  params = params[0];
                  var date = new Date(params.name);
                  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
              },
              axisPointer: {
                  animation: false
              }
          },
          xAxis: {
              type: 'time',
              splitLine: {
                  show: false
              }
          },
          yAxis: {
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                  show: false
              }
          },
          series: [{
              name: '模拟数据',
              type: 'line',
              showSymbol: false,
              hoverAnimation: false,
              data: data
          }]
      };
      myChart.setOption(option);

      setInterval(function () {

          for (var i = 0; i < 5; i++) {
              data.shift();
              data.push(randomData());
          }

          myChart.setOption({
              series: [{
                  data: data
              }]
          });
      }, 1000);

    }
  }
}
</script>
<style>
#daysaleline{
  position: absolute;
  top:650px;
  left:10px;
}
#daysaleline_bar{
  width:660px;
  height:300px;
}
</style>

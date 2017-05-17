<!-- 毛利率，费率-->
<template>
  <div id="rate" class="comp-rate">
    <div id="rate-profit">
    </div>
    <div id="rate-cost">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rate_profit:56,
      rate_cost:68
    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance
    let vm=this;
    vm.show_rate_profit();
    vm.show_rate_cost();
  },
  methods: {
    show_rate_profit:function(){
      let vm=this;
      var myChart = echarts.init(document.getElementById('rate-profit'));

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
        series: [{
            name: '毛利率',
            type: 'pie',
            radius: ['70%', '85%'],
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
    show_rate_cost:function(){
      let vm=this;
      var myChart = echarts.init(document.getElementById('rate-cost'));

      var donum = vm.rate_cost;
      var option = {
        title:{
          text:'费率',
          textStyle:{
            color:'#3399CC',//#3366CC
            fontSize:14
          }
          ,left:'center'
        },
        series: [{
            name: '费率',
            type: 'pie',
            radius: ['70%', '85%'],
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

    }
  }
}
</script>
<style>
.comp-rate{
  position:absolute;
}
#rate-profit {
  display:inline-block;
  width:49%;
  height:100%;
}
#rate-cost{
  display:inline-block;
  width:49%;
  height:100%;
}
</style>

<!-- 可以用于进度，利率等显示-->
<template>
  <div id="grossprofilerate" class="c-grossprofilerate">
    <div id="grossprofilerate_chart">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      grossprofilerate_profit:56
    }
  },
  mounted: function mounted() {
    let vm=this;
    vm.show_grossprofilerate_profit();
  },
  methods: {
    show_grossprofilerate_profit:function(){
      let vm=this;
      var myChart = echarts.init(document.getElementById('grossprofilerate_chart'));

      var donum = vm.grossprofilerate_profit;
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
            type: 'pie',
            radius: ['70%', '85%'],
            //center: ['50%', '70%'],
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
.c-grossprofilerate{
  position:absolute;
  top:70px;
  left:900px;
}
#grossprofilerate_chart{
  width:100px;
  height:140px;
}
</style>

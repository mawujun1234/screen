<!-- 可以用于进度，利率等显示-->
<template>
  <div id="progress" class="comp-progress">
    <div id="progress-profit">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      progress_profit:56
    }
  },
  mounted: function mounted() {
    let vm=this;
    vm.show_progress_profit();
  },
  methods: {
    show_progress_profit:function(){
      let vm=this;
      var myChart = echarts.init(document.getElementById('progress-profit'));

      var donum = vm.progress_profit;
      var option = {
        title:{
          text:'进度',
          textStyle:{
            color:'#3399CC',//#3366CC
            fontSize:14
          }
          ,left:'center'
        },
        series: [{
            name: '进度',
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
.comp-progress{
  position:absolute;
  width:100px;
  height:140px;
  top:260px;
  left:900px;
}
#progress-profit{
  width:100%;
  height:100%;
}
</style>

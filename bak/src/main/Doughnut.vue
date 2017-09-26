<!-- 环形图，可用于占比，各个渠道的占比-->
<template>
  <div id="doughnut" class="comp-doughnut">
    <div id="doughnut-profit">
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
    vm.show_doughnut_profit();
  },
  methods: {
    show_doughnut_profit:function(){
      let vm=this;
      var myChart = echarts.init(document.getElementById('doughnut-profit'));

      var option = {
        title:{
          text:'渠道占比',
          textStyle:{
            color:'#3399CC',//#3366CC
            fontSize:14
          }
          ,left:'center'
        },
        legend: {
            orient: 'horizontal',
            left: 'left',
            top:'bottom',
            data: ['卖场','自营','网销'],
            itemWidth:10,
            itemHeight:8,
            itemGap:5,
            textStyle:{
              color:'#3399CC'
            }
        },
        series: [{
            //name: '进度',
            type: 'pie',
            radius: ['65%', '85%'],
            center: ['50%', 70],
            avoidLabelOverlap: false,
            hoverAnimation:false,
            label: {
                normal: {
                    show: false,
                    position: 'outside',
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            data: [
                {value:335, name:'卖场'},
                {value:310, name:'自营'},
                {value:234, name:'网销'}
            ]
        }],
        color:['#0099cc','#99ccff','red']
      };
      myChart.setOption(option);
    }
  }
}
</script>
<style>
.comp-doughnut{
  position:absolute;
  width:100px;
  height:160px;
  top:260px;
  left:750px;
}
#doughnut-profit{
  width:100%;
  height:100%;

}
</style>

<!-- 环形图，可用于占比，各个渠道的占比-->
<template>
  <div id="chanclrate" class="c-chanclrate">
    <div id="chanclrate-chart">
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
    vm.show_chanclrate_profit();
  },
  methods: {
    show_chanclrate_profit:function(){
      let vm=this;
      var myChart = echarts.init(document.getElementById('chanclrate-chart'));

      var option = {
        title:{
          text:'渠道占比',
          textStyle:{
            color:'#3399CC',//#3366CC
            fontSize:14
          }
          ,left:'center'
        },
        // legend: {
        //     orient: 'horizontal',
        //     left: 'left',
        //     top:'bottom',
        //     data: ['卖场','自营','网销'],
        //     itemWidth:10,
        //     itemHeight:8,
        //     itemGap:5,
        //     textStyle:{
        //       color:'#3399CC'
        //     }
        // },
        series: [{
            //name: '进度',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ['50%', 110],
            avoidLabelOverlap: false,
            hoverAnimation:false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine:{
              normal:{
                length:2
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
.c-chanclrate{
  position:absolute;
  top:670px;
  left:900px;
}
#chanclrate-chart{
  width:230px;
  height:250px;
}
</style>

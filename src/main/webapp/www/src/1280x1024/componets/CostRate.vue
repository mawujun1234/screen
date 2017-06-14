<!-- 可以用于进度，利率等显示-->
<template>
  <div id="costrate" class="c-costrate">
    <div id="costrate_chart">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      costrate:56
    }
  },
  mounted: function mounted() {
    let vm=this;
    vm.show_costrate();
  },
  methods: {
    show_costrate:function(){
      let vm=this;
      var myChart = echarts.init(document.getElementById('costrate_chart'));

      var donum = vm.costrate;
      var option = {
        // title:{
        //   text:'费率',
        //   textStyle:{
        //     color:'#3399CC',//#3366CC
        //     fontSize:14
        //   }
        //   ,left:'center'
        // },
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
                    name: "费率\n"+donum+'%'
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
.c-costrate{
  position:absolute;
  top:70px;
  left:980px;
}
#costrate_chart{
  width:120px;
  height:150px;
}
</style>

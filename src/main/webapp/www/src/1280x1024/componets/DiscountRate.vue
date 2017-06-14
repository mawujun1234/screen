<!-- 可以用于进度，利率等显示-->
<template>
  <div id="discountrate" class="c-discountrate">
    <div id="discountrate_chart">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      discountrate:4.7
    }
  },
  mounted: function mounted() {
    let vm=this;
    vm.show_discountrate();
  },
  methods: {
    show_discountrate:function(){
      let vm=this;
      var myChart = echarts.init(document.getElementById('discountrate_chart'));

      var donum = vm.discountrate;
      var option = {
        // title:{
        //   text:'折扣',
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
                    name: "折扣\n"+donum+''
                },{
                    value: 10 - donum,
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
.c-discountrate{
  position:absolute;
  top:70px;
  left:1120px;
}
#discountrate_chart{
  width:120px;
  height:150px;
}
</style>

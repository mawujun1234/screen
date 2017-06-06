<template>
  <div id="recovery" class="c-recovery">
    <div class="c-recovery-total">
      <div style="">累计货款回收:</div>
      <div class="c-recovery-num">{{sale_num}}<span style="">元</span></div>
    </div>
    <div class="c-recovery-t">
      <div style="">目标货款回收:</div>
      <div class="c-recovery-t-n">{{target_num}}<span style="">元</span></div>
    </div>
    <div id="recovery-complete" class="c-recovery-complete">

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sale_num:'12,322,789',
      target_num:'800,000,000',
      complete_donum:41
    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance
    this.showComplete();
  },
  methods: {
    showComplete:function(){
    var vm=this;
    var myChart = echarts.init(document.getElementById('recovery-complete'));

    var donum = vm.complete_donum; //已完成百分比
    var option = {
        series: [{
            name: '完成率',
            type: 'pie',
            //center : ['33.5%', '40%'],//圆心坐标（div中的%比例）,pie的位置
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
                    name: donum+'%'//,itemStyle:labelTop
                },{
                    value: 100 - donum,
                    name: ''//, itemStyle:labelBottom
                }
            ]
        }],
        //color: ['#339900', '#C9C9C9']//设置两个data的颜色
        color:['#0099cc','#99ccff']
      };
      myChart.setOption(option);

    }
  }
}
</script>
<style>
.c-recovery {
  position:absolute;
  width:280px;
  top:70px;
  left:680px;
  border-left:#3399CC solid 3px;
  padding-left: 10px;
}
.c-recovery .c-recovery-total{
  font-size: 14px;
  color:#4054d6;
  font-weight: bold;
}
.c-recovery .c-recovery-num{
  letter-spacing:2px;
  font-size: 26px;
  color:white;
}
.c-recovery-total span{
  color:#4054d6;
  font-weight:normal;
  font-size:18px;
}
.c-recovery .c-recovery-t{
  font-size: 12px;
  color:#4054d6;
  font-weight: bold;
}
.c-recovery .c-recovery-t-n{
  letter-spacing:1px;
  font-size: 14px;
  color:white;
}
.c-recovery-t span{
  color:#4054d6;
  font-weight:normal;
  font-size:10px;
}
.c-recovery-complete{
  width:80px;
  height:80px;
}
</style>

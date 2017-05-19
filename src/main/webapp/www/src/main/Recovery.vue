<template>
  <div id="recovery" class="comp-recovery">
    <div class="comp-recovery-total">
      <div style="">累计货款回收:</div>
      <div class="comp-recovery-num">{{sale_num}}<span style="">元</span></div>
    </div>
    <div class="comp-recovery-t">
      <div style="">目标货款回收:</div>
      <div class="comp-recovery-t-n">{{target_num}}<span style="">元</span></div>
    </div>
    <div id="recovery-complete" class="comp-recovery-complete">

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
.comp-recovery {
  position:absolute;
  width:200px;
  top:60px;
  left:800px;
  border-left:#3399CC solid 3px;
  padding-left: 10px;
}
.comp-recovery .comp-recovery-total{
  font-size: 14px;
  color:#4054d6;
  font-weight: bold;
}
.comp-recovery .comp-recovery-num{
  letter-spacing:2px;
  font-size: 26px;
  color:white;
}
.comp-recovery-total span{
  color:#4054d6;
  font-weight:normal;
  font-size:18px;
}
.comp-recovery .comp-recovery-t{
  font-size: 12px;
  color:#4054d6;
  font-weight: bold;
}
.comp-recovery .comp-recovery-t-n{
  letter-spacing:1px;
  font-size: 14px;
  color:white;
}
.comp-recovery-t span{
  color:#4054d6;
  font-weight:normal;
  font-size:10px;
}
.comp-recovery-complete{
  width:80px;
  height:80px;
}
</style>

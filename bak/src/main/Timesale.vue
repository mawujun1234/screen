<template>
  <div id="timesale" class="comp-timesale">
    <div class="comp-timesale-total">
      <div style="">累计实时销售额:</div>
      <div class="comp-timesale-num">{{animatedNumber}}<span style="">元</span></div>
    </div>
    <div class="comp-timesale-t">
      <div style="">目标销售额:</div>
      <div class="comp-timesale-t-n">{{target_num}}<span style="">元</span></div>
    </div>
    <div id="timesale-complete" class="comp-timesale-complete">

    </div>
  </div>
</template>
<script>
function linear(t,b,c,d){
  return c*t/d+b;
}
function thousands_separator (str){
  var re = /(?=(?!\b)(\d{3})+$)/g;
  return str.replace(re, ',');
}
export default {
  data () {
    return {
      sale_num:0,
      animatedNumber:0,
      target_num:'6,000,000,000',
      complete_donum:57
    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance
    this.showComplete();
    var vm=this;
    setInterval(function(){
      vm.sale_num=Math.random()*100000;
      vm.complete_donum=(Math.random()*100).toFixed(0);
    }, 3000);
  },
  watch: {
    sale_num: function(newValue, oldValue) {
      var vm = this
      var start = 0, during = 50;
      var _run = function() {
            start++;
      		 var aa=linear(start,oldValue,newValue-oldValue,during).toFixed(0);
      		 vm.animatedNumber=thousands_separator(aa);
           if (start < during) requestAnimationFrame(_run);
      };
      _run();
    },
    complete_donum:function(newValue, oldValue) {
      var vm = this;
      vm.myChart.setOption({
        series: {
            data:[
              {value: newValue,name: newValue+'%'},{ value: 100 - newValue,  name: ''}
            ]
        }
      });

    }
  },
  methods: {
    showComplete:function(){
      var me=this;
      var myChart = echarts.init(document.getElementById('timesale-complete'));
      me.myChart=myChart;
      var donum = me.complete_donum; //已完成百分比
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
.comp-timesale {
  width:200px;
  top:60px;
  left:400px;
  position:absolute;
  border-left:#3399CC solid 3px;
  padding-left: 10px;
}
.comp-timesale .comp-timesale-total{
  font-size: 14px;
  color:#4054d6;
  font-weight: bold;
}
.comp-timesale .comp-timesale-num{
  letter-spacing:2px;
  font-size: 26px;
  color:white;
}
.comp-timesale-total span{
  color:#4054d6;
  font-weight:normal;
  font-size:18px;
}
.comp-timesale .comp-timesale-t{
  font-size: 12px;
  color:#4054d6;
  font-weight: bold;
}
.comp-timesale .comp-timesale-t-n{
  letter-spacing:1px;
  font-size: 14px;
  color:white;
}
.comp-timesale-t span{
  color:#4054d6;
  font-weight:normal;
  font-size:10px;
}
.comp-timesale-complete{
  width:80px;
  height:80px;
}
</style>

<template>
  <!-- 存放背景图片啥的-->
  <div id="screen">
    <Demo id="demo"></Demo>
    <Title id="title"></Title>
    <Timesale id="timesale"></Timesale>
    <Recovery id="recovery"></Recovery>
    <Rate id="rate"></Rate>
    <RateBarComp id="ratebarcomp"></RateBarComp>
    <RateProfit id="rateprofit"></RateProfit>
    <TimeSaleComp id="timesalecomp"></TimeSaleComp>
  </div>
</template>

<script>
import Demo from './main/Demo.vue';
import Title from './main/Title.vue';
import Timesale from './main/Timesale.vue';
import Recovery from './main/Recovery.vue';
import Rate from './main/Rate.vue';
import RateBarComp from './main/RateBarComp.vue';
import RateProfit from './main/RateProfit.vue';
import TimeSaleComp from './main/TimeSaleComp.vue';


export default {
  name: 'screen',
  data () {
    return {
      msg: ''
    }
  },
  components: { Demo,Title,Timesale,Recovery,Rate,RateBarComp,RateProfit,TimeSaleComp},
  mounted:function(){

  }
}
</script>

<style>
#demo{
  height:200px;
  width:300px;
  top:35px;
}
#title{
  top:0px;
}
#timesale{
  width:200px;
  top:60px;
  left:500px;
}
#recovery{
  width:200px;
  top:60px;
  left:800px;
}
#rate{
  width:200px;
  height:140px;
  min-height:140px;
  top:260px;
  left:900px;
}
#ratebarcomp{
  width:300px;
  height:340px;
  min-height:340px;
  top:260px;
  left:500px;
}
#rateprofit{
  width:200px;
  height:300px;
  top:265px;
}
#timesalecomp{
  width:200px;
  height:300px;
  top:265px;
  left:200px;
}
</style>

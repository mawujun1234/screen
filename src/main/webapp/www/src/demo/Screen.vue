<template>
  <!-- 存放背景图片啥的-->
  <div id="screen">
    <Demo ></Demo>
    <Headerr></Headerr>
    <Timesale></Timesale>
    <Recovery></Recovery>
    <Rate></Rate>
    <RateBarComp></RateBarComp>
    <RateProfit></RateProfit>
    <TimesaleComp></TimesaleComp>
    <TimesaleType></TimesaleType>
    <List></List>
    <Top></Top>
    <Doughnut></Doughnut>
    <Doughnut0></Doughnut0>
    <China></China>
    <Videoo></Videoo>

    <Alert></Alert>
  </div>
</template>

<script>
import Demo from './componets/Demo.vue';
import Headerr from './componets/Headerr.vue';
import Timesale from './componets/Timesale.vue';
import Recovery from './componets/Recovery.vue';
import Rate from './componets/Rate.vue';
import RateBarComp from './componets/RateBarComp.vue';
import RateProfit from './componets/RateProfit.vue';
import TimesaleComp from './componets/TimesaleComp.vue';
import TimesaleType from './componets/TimesaleType.vue';
import Alert from './componets/Alert.vue';
import List from './componets/List.vue';
import Top from './componets/Top.vue';
import Doughnut from './componets/Doughnut.vue';
import Doughnut0 from './componets/Doughnut0.vue';
import China from './componets/China.vue';
import Videoo from './componets/Videoo.vue';


export default {
  name: 'screen',
  data () {
    return {
      msg: ''
    }
  },
  components: { Demo,Headerr,Timesale,Recovery,Rate,RateBarComp,RateProfit,TimesaleComp,
    TimesaleType,Alert,List,Top,Doughnut,Doughnut0,China,Videoo},
  mounted:function(){

    //alert($(document).width());
    //  alert($('body').width());
  }
}
</script>

<style>
#screen{
  overflow-x: hidden;
  position:absolute;
  top:0px;
  left:0px;
}

</style>

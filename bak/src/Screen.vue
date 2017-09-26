<template>
  <!-- 存放背景图片啥的-->
  <div id="screen">
    <Demo ></Demo>
    <Title></Title>
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
    <Map></Map>

    <Alert></Alert>
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
import TimesaleComp from './main/TimesaleComp.vue';
import TimesaleType from './main/TimesaleType.vue';
import Alert from './main/Alert.vue';
import List from './main/List.vue';
import Top from './main/Top.vue';
import Doughnut from './main/Doughnut.vue';
import Doughnut0 from './main/Doughnut0.vue';
import Map from './main/Map.vue';


export default {
  name: 'screen',
  data () {
    return {
      msg: ''
    }
  },
  components: { Demo,Title,Timesale,Recovery,Rate,RateBarComp,RateProfit,TimesaleComp,
    TimesaleType,Alert,List,Top,Doughnut,Doughnut0,Map},
  mounted:function(){

  }
}
</script>

<style>

</style>

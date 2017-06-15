<template>
  <!-- 存放背景图片啥的-->
  <div id="screen" class="screen">
  <!--  <ShopSaleList></ShopSaleList>-->
    <ShopTop10></ShopTop10>
    <Headerr></Headerr>
    <TimeSale></TimeSale>
    <Recovery></Recovery>
    <China></China>
    <!--<ProdType></ProdType>
    <CompTimeChart></CompTimeChart>-->

    <GrossProfitRate></GrossProfitRate>
    <CostRate></CostRate>
    <DiscountRate></DiscountRate>

    <DaySaleLine></DaySaleLine>
    <!--<ChanclRate></ChanclRate>-->
    <CompSaleList></CompSaleList>
    <ProdSaleList></ProdSaleList>

    <WaringList></WaringList>
    <WaringAlert ref="waringalert"></WaringAlert>

  </div>
</template>

<script>
//import ShopSaleList from './componets/ShopSaleList.vue';
import ShopTop10 from './componets/ShopTop10.vue';
import Headerr from './componets/Headerr.vue';
import TimeSale from './componets/TimeSale.vue';
import Recovery from './componets/Recovery.vue';
import China from './componets/China.vue';
//import ProdType from './componets/ProdType.vue';
//import CompTimeChart from './componets/CompTimeChart.vue';
import GrossProfitRate from './componets/GrossProfitRate.vue';
import CostRate from './componets/CostRate.vue';
import DiscountRate from './componets/DiscountRate.vue';
//import ChanclRate from './componets/ChanclRate.vue';
import CompSaleList from './componets/CompSaleList.vue';
import ProdSaleList from './componets/ProdSaleList.vue';
import WaringList from './componets/WaringList.vue';
import WaringAlert from './componets/WaringAlert.vue';

import DaySaleLine from './componets/DaySaleLine.vue';

//var bus = new Vue();

export default {
  name: 'screen',
  data () {
    return {
      msg: ''
    }
  },
  components: {ShopTop10,Headerr,TimeSale,Recovery,China,ProdSaleList,GrossProfitRate,CostRate,DiscountRate
    ,CompSaleList,WaringList,WaringAlert,DaySaleLine},
  mounted:function(){

  }
}
</script>

<style>
.screen {
  overflow: hidden;
  position:absolute;
  top:0px;
  left:0px;
}

</style>

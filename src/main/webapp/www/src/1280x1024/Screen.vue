<template>
  <!-- 存放背景图片啥的-->
  <div id="screen" class="screen">
    <SaleList></SaleList>
    <Headerr></Headerr>
    <TimeSale></TimeSale>
    <Recovery></Recovery>
    <China></China>
    <ProdType></ProdType>
    <TimeSaleComp></TimeSaleComp>
    <GrossProfitRate></GrossProfitRate>
    <CostRate></CostRate>
    <DiscountRate></DiscountRate>

    <ChanclRate></ChanclRate>
  </div>
</template>

<script>
import SaleList from './componets/SaleList.vue';
import Headerr from './componets/Headerr.vue';
import TimeSale from './componets/TimeSale.vue';
import Recovery from './componets/Recovery.vue';
import China from './componets/China.vue';
import ProdType from './componets/ProdType.vue';
import TimeSaleComp from './componets/TimeSaleComp.vue';
import GrossProfitRate from './componets/GrossProfitRate.vue';
import CostRate from './componets/CostRate.vue';
import DiscountRate from './componets/DiscountRate.vue';
import ChanclRate from './componets/ChanclRate.vue';

export default {
  name: 'screen',
  data () {
    return {
      msg: ''
    }
  },
  components: {SaleList,Headerr,TimeSale,Recovery,China,ProdType,TimeSaleComp,GrossProfitRate,CostRate,DiscountRate,ChanclRate},
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

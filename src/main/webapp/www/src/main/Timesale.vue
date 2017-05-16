<template>
  <div id="timesale" class="comp-timesale">
    <div class="comp-timesale-total">
      <div>累计实时销售额:</div>
      <div class="comp-timesale-num">245,457,422<span>元</span></div>
    </div>
    <div>
      <div>目标销售额:</div>
      <div>6,000,000,000<span>元</span></div>
    </div>
    <div>
      完成率
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
.comp-timesale {
  position:absolute;
}
.comp-timesale .comp-timesale-total{
  font-size: 12px;
  color:white;
}
.comp-timesale .comp-timesale-num{
  font-size: 26px;
  color:white;
}
</style>

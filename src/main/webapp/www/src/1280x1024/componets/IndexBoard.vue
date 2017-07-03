<template>
  <div id="indexboard" class="c-indexboard">
    <div class="c-indexboard-title">销售额</div>
    <div class="c-indexboard-num">212.23<span class="unit">万</span></div>
    <div class="c-indexboard-other">
      <div class="c-indexboard-other-1">同期</div>
      <div class="c-indexboard-other-2">1325万</div>
    </div>
    <div class="c-indexboard-other">
      <div class="c-indexboard-other-1">同比</div>
      <div class="c-indexboard-other-2">56%</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted: function mounted() {
    let vm=this;
  },
  methods: {

  }
}
</script>
<style>
.c-indexboard {
  position:absolute;
  width:180px;
  height:100px;
  color: #0099cc;
  background-color: rgba(255, 255, 255,0.1);
  padding:8px;
  border-radius: 3px;
}
#indexboard {
  top:560px;
  left:20px;

}
.c-indexboard-title {
  font-size:14px;
  color:white;
}
.c-indexboard-num {
  font-size:22px;
  margin-top:3px;
  margin-bottom:16px;
  font-weight: bold;
}
.c-indexboard-other {
  color:white;
  font-size:14px;
  display: inline-block;
  width:45%;

}
.c-indexboard-other-1 {
  color:rgba(204, 204, 204,0.6);
  font-size:12px;
}
</style>

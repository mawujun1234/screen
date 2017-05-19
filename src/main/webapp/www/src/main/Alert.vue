<template>
  <div id="alert" class="comp-alert comp-alert-animation">
    <div class="comp-alert-title">
      <img src="../assets/timg.png" style="width:50px;vertical-align:middel;"/>
      警告：有可疑交易发生，请注意!
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      alerting:false
    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance
    let vm=this;
    setTimeout(function(){
      vm.alert();
    },300000);
    vm.alert();
  },
  methods: {
    alert:function(){
      var vm=this;

      if(vm.alerting){
        return;
      }
      vm.alerting=true;
      //$("#alert").addClass("comp-alert-animation");
      //$("#alert").css("top",0);
      $("#alert").slideDown("slow");
      setTimeout(function(){
        $("#alert").slideUp("slow");
        vm.alerting=false;
        //$("#alert").removeClass("comp-alert-animation");
      },3000)
    }
  }
}
</script>
<style>
.comp-alert{
  position: absolute;
  width:100%;
  height:100%;
  text-align: center;
  color: yellow;
  font-weight: bold;
  display:none;
}
.comp-alert-title{
  width:100%;
  height:50px;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
  position: absolute;

  margin: 0 0 0 0px;
  top:20%;
}

@keyframes key-comp-alert{
from {
  background-color: rgba(255, 0, 0,0.3);
}
to {background-color: rgba(255, 0, 0,0.6);}
}
.comp-alert-animation {
  animation:key-comp-alert 1s infinite;
}
</style>

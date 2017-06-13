<template>
  <div id="waringalert" class="comp-waringalert comp-waringalert-animation">
    <div class="comp-waringalert-title">
      <img src="../../assets/timg.png" style="width:50px;vertical-align:middel;"/>
      警告：有可疑交易发生，请注意!
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      waringalerting:false
    }
  },
  mounted: function mounted() {
    //do something after mounting vue instance
    let vm=this;
    // setTimeout(function(){
    //   vm.waringalert();
    // },300000);
    //vm.waringalert();
  },
  methods: {
    waringalert:function(){
      var vm=this;

      if(vm.waringalerting){
        return;
      }
      vm.waringalerting=true;
      //$("#waringalert").addClass("comp-waringalert-animation");
      //$("#waringalert").css("top",0);
      $("#waringalert").slideDown("slow");
      setTimeout(function(){
        $("#waringalert").slideUp("slow");
        vm.waringalerting=false;
        //$("#waringalert").removeClass("comp-waringalert-animation");
      },3000)
    }
  }
}
</script>
<style>
.comp-waringalert{
  position: absolute;
  width:100%;
  height:100%;
  text-align: center;
  color: yellow;
  font-weight: bold;
  display:none;
}
.comp-waringalert-title{
  width:100%;
  height:50px;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
  position: absolute;

  margin: 0 0 0 0px;
  top:20%;
}

@keyframes key-comp-waringalert{
from {
  background-color: rgba(255, 0, 0,0.3);
}
to {background-color: rgba(255, 0, 0,0.6);}
}
.comp-waringalert-animation {
  animation:key-comp-waringalert 1s infinite;
}
</style>

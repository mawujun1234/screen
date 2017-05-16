<template>
  <!-- 存放背景图片啥的-->
  <div id="screen">
    <Demo id="demo"></Demo>
    <Title id="title"></Title>
    <Timesale id="timesale"></Timesale>
  </div>
</template>

<script>
import Demo from './main/Demo.vue';
import Title from './main/Title.vue';
import Timesale from './main/Timesale.vue';


export default {
  name: 'screen',
  data () {
    return {
      msg: ''
    }
  },
  components: { Demo,Title,Timesale },
  mounted:function(){

  }
}
</script>

<style>
#demo{
  height:300px;
  width:400px;
  top:65px;
}
#title{
  top:0px;
}
#timesale{
  width:300px;
  top:60px;
  left:500px;
}

</style>

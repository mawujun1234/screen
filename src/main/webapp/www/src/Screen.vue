<template>
  <!-- 存放背景图片啥的-->
  <div id="screen">
    <Demo style="height:300px;width:400px;"></Demo>
  </div>
</template>

<script>
import Demo from './main/Demo.vue';


export default {
  name: 'screen',
  data () {
    return {
      msg: ''
    }
  },
  components: { Demo },
  mounted:function(){

  }
}
</script>

<style>

</style>

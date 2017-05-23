<template>
  <div class="comp-videoo">
    <video src="../static/movie.ogg" controls="controls" autoplay loop>
    你的浏览器不支持视频播放
    </video>
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
.comp-videoo {
  position:absolute;
  width:240px;
  height:240px;
  top:360px;
  left:860px;
}
.comp-videoo video {
  width:100%;
  height:100%;
}
</style>

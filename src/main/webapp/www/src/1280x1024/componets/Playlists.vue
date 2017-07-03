<template>
  <div id="playlists" class="c-playlists">
    <div class="c-playlists-title">实时销售清单:</div>
    <div class="c-playlists-content">
      <div class="c-playlists-span">[XXXX专卖店 2件 1434元 5折]</div>
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
#playlists{
  width:1240px;

  top:950px;
  left:15px;

}
.c-playlists{
  position: absolute;
  border-radius: 3px;
  border:1px solid gray;
  overflow: hidden;
}
.c-playlists-title {
  color:white;
  font-weight: bold;
  display:inline-block;
  height:35px;
  line-height: 35px;
}
.c-playlists-content{

  width:1120px;
  color:white;
  display:inline-block;
  overflow-x: hidden;
  vertical-align: middle;
}
.c-playlists-span {
  display:inline-block;
  width:100%;
  height:35px;
  line-height: 35px;
  transform:translateX(1240px);
  animation: c-playlists-right-2-left 10s linear infinite;
}

@keyframes c-playlists-right-2-left {
	to { transform: translateX(-230px); }
}

</style>

 <template>
  <div id="headerr" class="c-header ">
    XXX实时监控大屏
    <div class="c-header-nowtime">2017.12.23 11:22:55</div>
  </div>
</template>
<script>
var headerr_nowtime=null;
window.nowtime=function(){
              var nowDate = new Date();
              var year = nowDate.getFullYear();
              var month = nowDate.getMonth()+1;
              month = month>9 ? month : "0" + month;
              var date = nowDate.getDate();
              date = date>9 ? date : "0" + date;
              var hour = nowDate.getHours();
              hour = hour>9 ? hour : "0" + hour;
              var miunte = nowDate.getMinutes();
              miunte = miunte>9 ? miunte : "0" + miunte;
              var second = nowDate.getSeconds();
              second = second>9 ? second : "0" + second;

              headerr_nowtime.text(year+"."+month+"."+date+" "+hour+":"+miunte+":"+second);
}
export default {
  data () {
    return {

    }
  },
  mounted:function(){
    headerr_nowtime=$(".c-header-nowtime");
    if(headerr_nowtime){
      nowtime();
      setInterval("nowtime()", 1000);
    }

  },
  methods: {

  }
}
</script>
<style>
.c-header {
  top:0px;
  width: 100%;
  height: 50px;
  background-image: url("../../assets/header_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  text-align: center;
  padding-top:10px;
  padding-bottom:10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  position: absolute;
}
.c-header .c-header-nowtime {
  color:rgba(255, 255, 255, 0.498039);
  font-family: "Microsoft Yahei";
  font-size: 12px;
}
</style>

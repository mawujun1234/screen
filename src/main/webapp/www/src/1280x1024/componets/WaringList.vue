<template>
  <div id="waringlist" class="c-list border-corner">

    <div class="c-list-group">
      <div class="c-list-row">
        <div class="c-list-col c-list-title c-list-name">风险预警事件</div>
        <div class="c-list-col c-list-title c-list-num" style="width:80px;">发生时间</div>
      </div>
      <transition-group name="waringlist" tag="p">
      <div class="c-list-row" v-for="elem in items" :key="elem.code">
        <div class="c-list-col c-list-name">{{elem.name}}</div>
        <div class="c-list-col c-list-num" style="width:80px;font-size:50%;">{{elem.time}}</div>
      </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items:[
        {code:'1',name:'风险事件1',time:'06-11 15:22'},
        {code:'2',name:'风险事件2',time:'06-11 13:22'},
        {code:'3',name:'风险事件3',time:'06-11 13:22'}
      ],
      max_length:5
    }
  },
  mounted: function mounted() {
    let vm=this;

    setInterval(function(){
      vm.add();
    },2000);
  },
  methods: {
    add: function () {
      var date1=new Date();
      var time=(date1.getMonth()+1)+"-"+date1.getDate()+" "+date1.getHours()+":"+date1.getMinutes();
      this.items.splice(0, 0, {code:date1.getTime(),name:'风险事件'+time,time:time});
      if(this.items.length>this.max_length){
        this.items.splice(this.items.length-1,1);
      }
      //获取WaringAlert，弹出红色警告框
      //bus.$emit('waringalert', "aaaaaa");
      alert(WaringAlert);

    }
  }
}
</script>
<style>
#waringlist{
  top:70px;
  left:15px;
  width:340px;
  height:160px;
}

.waringlist-enter-active  {
  transition: all 1s;
}
.waringlist-leave-active {
  transition: all 1s;
}
.waringlist-enter{
  opacity: 0;
  transform: translateX(-50px);
}
.waringlist-leave-active {
  opacity: 0;

}


</style>

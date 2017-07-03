<template>
  <div id="prodsalelist" class="c-list border-corner">

    <div class="c-list-group">
      <div class="c-list-row">
        <div class="c-list-col c-list-title c-list-name">大类</div>
        <div class="c-list-col c-list-title c-list-num" style="width:80px;">实售金额</div>
        <div class="c-list-col c-list-title c-list-num" style="width:80px;">同比</div>
        <div class="c-list-col c-list-title c-list-num" style="width:80px;">折扣</div>
      </div>
      <transition-group name="prodsalelist" tag="p">
      <div class="c-list-row" v-for="elem in items" :key="elem.code">
        <div class="c-list-col c-list-name">{{elem.name}}</div>
        <div class="c-list-col c-list-num" style="width:80px;">{{elem.saleMoney}}</div>
        <div class="c-list-col c-list-num" style="width:80px;">{{elem.yoy}}</div>
        <div class="c-list-col c-list-num" style="width:80px;">{{elem.discount}}</div>
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
        {code:'1',name:'衬衫',saleMoney:'125635.22',yoy:"1.2%",discount:0.56},
        {code:'2',name:'西服',saleMoney:'125635.22',yoy:"1.2%",discount:0.56},
        {code:'3',name:'裤子',saleMoney:'125635.22',yoy:"1.2%",discount:0.56},
        {code:'4',name:'茄克',saleMoney:'125635.22',yoy:"1.2%",discount:0.56},
        {code:'5',name:'T恤',saleMoney:'125635.22',yoy:"1.2%",discount:0.56},
        {code:'6',name:'领带',saleMoney:'125635.22',yoy:"1.2%",discount:0.56},
        {code:'7',name:'鞋包',saleMoney:'125635.22',yoy:"1.2%",discount:0.56},
        {code:'8',name:'毛衫',saleMoney:'125635.22',yoy:"1.2%",discount:0.56},
        {code:'9',name:'羽绒服',saleMoney:'125635.22',yoy:"1.2%",discount:0.56},
        {code:'10',name:'家居',saleMoney:'125635.22',yoy:"1.2%",discount:0.56}
      ],
      max_length:5
    }
  },
  mounted: function mounted() {
    let vm=this;

    // setInterval(function(){
    //   vm.add();
    // },6000);
  },
  methods: {
    add: function () {
      var date1=new Date();

      var time=(date1.getMonth()+1)+"-"+date1.getDate()+" "+date1.getHours()+":"+date1.getMinutes();
      let name='风险事件'+time;
      this.items.splice(0, 0, {code:date1.getTime(),name:name,time:time});
      if(this.items.length>this.max_length){
        this.items.splice(this.items.length-1,1);
      }
      //获取WaringAlert，弹出红色警告框
      this.$parent.$refs.waringalert.waringalert(name);

    }
  }
}
</script>
<style>
#prodsalelist{
  top:630px;
  left:850px;
  width:380px;
  height:290px;
}

.prodsalelist-enter-active  {
  transition: all 1s;
}
.prodsalelist-leave-active {
  transition: all 1s;
}
.prodsalelist-enter{
  opacity: 0;
  transform: translateX(-50px);
}
.prodsalelist-leave-active {
  opacity: 0;

}


</style>

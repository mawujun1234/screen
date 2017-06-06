<template>
  <div id="salelist" class="c-list border-corner">
    <h3>
      门店实时销售清单
    </h3>
    <div class="c-list-group">
      <div class="c-list-row">
        <div class="c-list-col c-list-title c-list-name">门店</div>
        <div class="c-list-col c-list-title c-list-num">金额</div>
      </div>
      <transition-group name="list" tag="p">
      <div class="c-list-row" v-for="elem in items" :key="elem.code">
        <div class="c-list-col c-list-name">{{elem.name}}</div>
        <div class="c-list-col c-list-num">{{elem.money}}</div>
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
        {code:'1',name:'xxxxz专卖店',money:'1952.12'},
        {code:'2',name:'xxxxz专卖店',money:'2569.12'},
        {code:'3',name:'xxxxz宁波水电费水电费水电费sdfwe专卖店',money:'2569.12'}
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
      var index=(Math.random()*1000).toFixed(2);
      this.items.splice(0, 0, {code:index,name:'新增销售单据'+index,money:index});
      if(this.items.length>this.max_length){
        this.items.splice(this.items.length-1,1);
      }

    }
  }
}
</script>
<style>
#salelist{
  top:70px;
  left:15px;
  width:340px;
  height:560px;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter{
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}


</style>

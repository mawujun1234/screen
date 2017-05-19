<template>
  <div id="list" class="comp-list">
    <h3>
      门店实时销售清单
    </h3>
    <div class="list">
      <div class="list-row">
        <div class="list-col title name">门店</div>
        <div class="list-col title money">金额</div>
      </div>
      <transition-group name="list" tag="p">
      <div class="list-row" v-for="elem in items" :key="elem.code">
        <div class="list-col name">{{elem.name}}</div>
        <div class="list-col money">{{elem.money}}</div>
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

.comp-list {
  position:absolute;
  width:250px;
  height:300px;
  color:red;
  top:565px;
  left:490px;

  background-color: rgba(15,42,66, 0.8);
  border-radius: 3px 3px;
}
.comp-list h3{
  color:#3399CC;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.list-row {
  width:100%;
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 15px;
  text-align: left;

  padding-top: 2px;
  padding-bottom: 2px;

}
.list-row:nth-child(even){
  background-color: rgba(51,153,204, 0.5);
}
.list-row .list-col{
  font-size: 14px;
  color:white;
}
.list-row .title{
  padding-left: 5px;
  color:#3399CC;
  font-weight: bold;
  font-size: 14px;
}
.list-row .name {
  flex:1;
  padding-left: 5px;
  padding-right: 5px;
  overflow: hidden;
  text-overflow:ellipsis;
	white-space:nowrap;
}
.list-row .money {
  padding-right: 5px;
  width:60px;
}

</style>

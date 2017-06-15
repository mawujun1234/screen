<template>
  <div id="shoptop10" class="c-list border-corner">
    <!--<h3>
      门店销售TOP
    </h3>-->
    <div class="c-list-group">
      <div class="c-list-row">
        <div class="c-list-col c-list-title c-list-rank"></div>
        <div class="c-list-col c-list-title c-list-name">门店-TOP10</div>
        <div class="c-list-col c-list-title c-list-num">金额</div>
      </div>
      <transition-group name="shoptop10" tag="p">
      <div class="c-list-row" v-for="(elem, index)  in items" :key="elem.code">
        <div class="c-list-col c-list-rank">{{index+1}}</div>
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
        {code:'1',name:'xxxxz专卖店1',money:'1952.12'},
        {code:'2',name:'xxxxz专卖店2',money:'2569.12'},
        {code:'3',name:'xxxxz宁波水电费水电费水电费sdfwe专卖店',money:'2569.12'},
        {code:'4',name:'xxxxz专卖店4',money:'1344.22'},
        {code:'5',name:'xxxxz专卖店5',money:'5679.56'}
      ],
      max_length:10,
      is_shuffle:false
    }
  },
  mounted: function mounted() {
    let vm=this;

    setInterval(function(){
      let aaa=(Math.random()*10).toFixed(0);
      //aaa=3;
      //alert(aaa);
      if(aaa>5){
        vm.shuffle();
      } else {
        vm.add_remove();
      }
    },4000);
  },
  methods: {
    add_remove: function () {
      var vm=this;
      var index=(Math.random()*1000).toFixed(2);
      if(this.items.length>=this.max_length){
        this.items.splice(0,1);
      }

      setTimeout(function(){
        vm.items.splice((Math.random()*5).toFixed(0), 0, {code:index,name:'新增门店'+index,money:index});
      },1300);
    },
    sortNumber:function(a, b){
      return a.money - b.money;
    },
    shuffle:function(){
      //this.items.slice(0,1);
      //this.items.slice(0,0,{code:'6',name:'xxxxz专卖店6',money:'4679.56'});
      this.items[0].money=(Math.random()*10000).toFixed(2);
      this.items.sort(this.sortNumber);
    }
  }
}
</script>
<style>
.shoptop10-enter-active  {
  transition: all 1s;
}
.shoptop10-leave-active {
  transition: all 1s;
}
.shoptop10-enter{
  opacity: 0;
  transform: translateX(-50px);
}
.shoptop10-leave-active {
  opacity: 0;
  transform: translateX(50px);
}
.shoptop10-move {
  transition: transform 1s;
}
#shoptop10 {
  position:absolute;
  top:260px;
  left:15px;
  width:340px;
  height:320px;
/**
  background-color: rgba(15,42,66, 0.8);
  border-radius: 3px 3px;
  **/
}
/**.c-shoptop10 h3{
  color:#3399CC;
  font-size: 18px;
  margin-shoptop10: 5px;
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
**/

</style>

<template>
  <div id="compsalelist" class="c-list border-corner">

    <div class="c-list-group">
      <div class="c-list-row">
        <div class="c-list-col c-list-title c-list-rank"></div>
        <div class="c-list-col c-list-title c-list-name">营销公司</div>
        <div class="c-list-col c-list-title c-list-num">金额</div>
        <div class="c-list-col c-list-title c-list-num" >毛利率</div>
        <div class="c-list-col c-list-title c-list-num">费率</div>
        <div class="c-list-col c-list-title c-list-num">折扣</div>
      </div>
      <transition-group name="top" tag="p">
      <div class="c-list-row" v-for="(elem, index) in items" :key="elem.code">
        <div class="c-list-col c-list-rank">{{index+1}}</div>
        <div class="c-list-col c-list-name">{{elem.name}}<span style="font-size:50%;" v-show="elem.manager">({{elem.manager}})</span></div>
        <div class="c-list-col c-list-num">{{elem.saleMoney}}</div>
        <div class="c-list-col c-list-num">{{elem.profitRate}}</div>
        <div class="c-list-col c-list-num">{{elem.costRate}}</div>
        <div class="c-list-col c-list-num">{{elem.discountRate}}</div>
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
        {code:'1',name:'浙江',manager:'公司直辖',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
        {code:'2',name:'中原',manager:'王升平',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
        {code:'3',name:'华东',manager:'廖永华',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
        {code:'4',name:'重庆',manager:'周占达',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
        {code:'5',name:'北方',manager:'龚明群',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
        {code:'6',name:'闽赣',manager:'王佳峰',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
        {code:'7',name:'东北',manager:'徐明飞',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
        {code:'8',name:'西北',manager:'鱼建伟',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
        {code:'9',name:'南方',manager:'欧光明',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
        {code:'10',name:'服饰',manager:'',saleMoney:1258.22,profitRate:'55%',costRate:'66%',discountRate:'0.58'},
      ],
      max_length:5
    }
  },
  mounted: function mounted() {
    let vm=this;

    setInterval(function(){
      let aaa=(Math.random()*10).toFixed(0);
      vm.shuffle();

    },4000);
  },
  methods: {
    sortNumber:function(a, b){
      return a.saleMoney - b.saleMoney;
    },
    shuffle:function(){
      //this.items.slice(0,1);
      //this.items.slice(0,0,{code:'6',name:'xxxxz专卖店6',money:'4679.56'});
      this.items[0].saleMoney=(Math.random()*10000).toFixed(2);
      this.items.sort(this.sortNumber);
    }
  }
}
</script>
<style>
#compsalelist{
  position: absolute;
  top:260px;
  left:850px;
  width:380px;
  height:320px;
}

.top-move {
  transition: transform 1s;
}


</style>

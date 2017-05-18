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
      <div class="list-row">
        <div class="list-col name">xxxxz专卖店</div>
        <div class="list-col money">1952.12</div>
      </div>
      <div class="list-row">
        <div class="list-col name">xxxxz专卖店</div>
        <div class="list-col money">2569.12</div>
      </div>
      <div class="list-row">
        <div class="list-col name">xxxxz宁波水电费水电费水电费sdfwe专卖店</div>
        <div class="list-col money">2569.12</div>
      </div>
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
.comp-list {
  position:absolute;
  width:250px;
  height:300px;

  background-color: rgba(15,42,66, 0.8);
  border-radius: 5px 5px 5px 5px;
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

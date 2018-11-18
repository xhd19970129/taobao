<template>
  <div class="spinner">
     <ul class="nav">
          <li class="drop-down"><a href="" class="one"><span @mouseover="show1">公告</span><div class="decoration"></div></a>
            <ul class="drop-down-content" v-show="seen1">
              <li><a href="#" class="different1">2135亿！2018天猫双11全面破纪录</a></li>
              <li><a href="#" class="same1">天猫双11国货雄起</a></li>
              <li><a href="#" class="same1">天猫双11里的单身经济</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="two"><span @mouseover="show2">规则</span><div class="decoration"></div></a>
          	<ul class="drop-down-content2" v-show="seen2">
              <li><a href="#" class="same2">新增《淘宝网抽检标准</a></li>
              <li><a href="#" class="different2">《淘宝禁售商品管理规</a></li>
              <li><a href="#" class="same2">新增淘宝网大家电行动</a></li>
              <li><a href="#" class="different2">《淘宝直播平台管理规</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="three"><span @mouseover="show3">论坛</span><div class="decoration"></div></a>
          	<ul class="drop-down-content3" v-show="seen3">
              <li><a href="#" class="same3">淘宝1212活动招商</a></li>
              <li><a href="#" class="different3">中差评功能升级</a></li>
              <li><a href="#" class="same3">陌生人拼团上线</a></li>
              <li><a href="#" class="different3">运营神器年中大促</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="four"><span @mouseover="show4">安全</span><div class="decoration"></div></a>
          	<ul class="drop-down-content4" v-show="seen4">
              <li><a href="#" class="same4">魔豆妈妈公益项目</a></li>
              <li><a href="#" class="different4">让母爱永不打烊</a></li>
              <li><a href="#" class="same4">卖家注意：风险通报！</a></li>
              <li><a href="#" class="different4">售假获刑又起诉！</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="five"><span @mouseover="show5">公益</span><div class="decoration"></div></a>
          	<ul class="drop-down-content5" v-show="seen5">
              <li><a href="#" class="same5">卖家如何设置公益宝贝</a></li>
              <li><a href="#" class="different5">公益项目如何入驻公益</a></li>
              <li><a href="#" class="same5">四重曝光！请你出道~</a></li>
              <li><a href="#" class="different5">公益机构开店全攻略</a></li>
            </ul>
          </li>
     </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      seen1:true,
      seen2:false,
      seen3:false,
      seen4:false,
      seen5:false
    }
  },
  computed:{
  },
  methods:{
    show1:function(){
      this.seen1 = true;
      this.seen2 = false;
      this.seen3 = false;
      this.seen4 = false;
      this.seen5 = false;
    },
    show2:function(){
      this.seen1 = false;
      this.seen2 = true;
      this.seen3 = false;
      this.seen4 = false;
      this.seen5 = false;
    },
    show3:function(){
      this.seen1 = false;
      this.seen2 = false;
      this.seen3 = true;
      this.seen4 = false;
      this.seen5 = false;
    },
    show4:function(){
      this.seen1 = false;
      this.seen2 = false;
      this.seen3 = false;
      this.seen4 = true;
      this.seen5 = false;
    },
    show5:function(){
      this.seen1 = false;
      this.seen2 = false;
      this.seen3 = false;
      this.seen4 = false;
      this.seen5 = true;
    }
  }
}
</script>

<style scoped>
.spinner{
  width:300px;
  height:70px;
  margin-top: -16px;
}
ul{
  list-style: none;
  background:white;
  width:300px;
  margin-left: -40px;
}
.nav li{
  float: left;
}
ul a{
  display: block;
  text-decoration: none;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #6C6C6C;
  background-color: white;
  font-size: 13px;
}
.change{
	border-bottom:2px solid red;
}
.drop-down{
  position: relative;
}
.drop-down-content{
  padding: 0;
  position: absolute;
  left:40px;
  height:70px;
  background: white;
}
.same1{
	background:white;
  width: 150px;
  text-align: left;
  text-indent: 10px;
  height:35px;
}
.different1{
	background:white;
  width: 300px;
  text-align: left;
  text-indent: 10px;
  height: 35px;
  color: red;
}
.drop-down-content2{
  position: absolute;
  left:40px;
  height:70px;
  background: white;
	padding: 0;
} 
.drop-down-content3{
  position: absolute;
  left:-20px;
  height:70px;
  background: white;
  padding: 0;
} 
.drop-down-content4{
  position: absolute;
  left:-80px;
  height:70px;
  background: white;
  padding: 0;
}
.drop-down-content5{
  position: absolute;
  left:-140px;
  height:70px;
  background: white;
  padding: 0;
}
h3{
  font-size: 30px;
  clear: both;
}
.drop-down-content li:hover a{
	color:red;
}
.drop-down-content2 li:hover a{
  color:red;
}
.drop-down-content3 li:hover a{
  color:red;
}
.drop-down-content4 li:hover a{
  color:red;
}
.drop-down-content5 li:hover a{
  color:red;
}
span{
  color: #6C6C6C;
}
.decoration{
  position: relative;
  width:55px;
  height: 3px;
  top:-5px;
  background: red;
  display: none;
}
span:hover+.decoration{
  display: block;
}
.same2{
  background:white;
  width: 150px;
  text-align: left;
  height:35px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left:-60px;
  text-indent: 10px;
}
.different2{
  background:white;
  width: 150px;
  text-align: left;
  height:35px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.same3{
  background:white;
  width: 150px;
  text-align: left;
  height:35px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left:-60px;
  text-indent: 10px;
}
.different3{
  background:white;
  width: 150px;
  text-align: left;
  height:35px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.same4{
  background:white;
  width: 150px;
  text-align: left;
  height:35px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left:-60px;
  text-indent: 10px;
}
.different4{
   background:white;
  width: 150px;
  text-align: left;
  height:35px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.same5{
  background:white;
  width: 150px;
  text-align: left;
  height:35px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left:-60px;
  text-indent: 10px;
}
.different5{
   background:white;
  width: 150px;
  text-align: left;
  height:35px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<template>
<div>
	<div class="navigation-up">
      <span class="theme">主题市场</span>
    </div>
    <div class="navigation-down">
      <button v-for="item in themes" >{{item.text}}</button>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    	themes:[
        {text:"女装"},
        {text:"男装"},
        {text:"内衣"},
        {text:"鞋靴"},
        {text:"箱包"},
        {text:"婴童"},
        {text:"家电"},
        {text:"数码"},
        {text:"手机"},
        {text:"美妆"},
        {text:"珠宝"},
        {text:"眼睛"},
        {text:"手表"},
        {text:"运动"},
        {text:"户外"},
        {text:"乐器"},
        {text:"游戏"},
        {text:"动漫"},
        {text:"影视"},
        {text:"美食"},
        {text:"鲜花"},
        {text:"宠物"},
        {text:"农资"},
        {text:"房产"},
        {text:"装修"},
        {text:"建材"},
        {text:"家居"},
        {text:"百货"},
        {text:"汽车"},
        {text:"二手车"},
        {text:"办公"},
        {text:"定制"},
        {text:"教育"},
        {text:"卡券"},
        {text:"本地"}
      ]
    }
  }
}
</script>

<style scoped>
.navigation-up{
  width:300px;
  height:50px;
  background: white;
}
.theme{
  color: #FC4200;
  font-size: 18px;
}
.navigation-down{
  width:300px;
  height:250px;
  background: white;
}
button{
	height:30px;
	width:36px;
	margin:5px 30px 5px 5px;
	font-size:10px;
}
</style>
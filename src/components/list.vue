<template>
  <div class="list">
     <ul class="nav">
          <li class="drop-down"><a href="" class="">女装</a><a>/</a><a href="">男装</a><a>/</a><a href="">内衣</a>
            <ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">鞋靴</a><a>/</a><a href="">箱包</a><a>/</a><a href="">配件</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">童装玩具</a><a>/</a><a href="">孕产</a><a>/</a><a href="">用品</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">家电</a><a>/</a><a href="">数码</a><a>/</a><a href="">手机</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">美妆</a><a>/</a><a href="">洗护</a><a>/</a><a href="">保健品</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">珠宝</a><a>/</a><a href="">眼睛</a><a>/</a><a href="">手表</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">运动</a><a>/</a><a href="">户外</a><a>/</a><a href="">乐器</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">游戏</a><a>/</a><a href="">动漫</a><a>/</a><a href="">影视</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">美食</a><a>/</a><a href="">生鲜</a><a>/</a><a href="">零食</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">鲜花</a><a>/</a><a href="">宠物</a><a>/</a><a href="">农资</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">工具</a><a>/</a><a href="">装修</a><a>/</a><a href="">建材</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">家具</a><a>/</a><a href="">家饰</a><a>/</a><a href="">家纺</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">汽车</a><a>/</a><a href="">二手车</a><a>/</a><a href="">用品</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">办公</a><a>/</a><a href="">DIY</a><a>/</a><a href="">五金电子</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">百货</a><a>/</a><a href="">餐厨</a><a>/</a><a href="">家庭保健</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
          <li class="drop-down"><a href="" class="">学习</a><a>/</a><a href="">卡券</a><a>/</a><a href="">本地服务</a>
          	<ul class="drop-down-content">
            	<div class="huadong">
            	</div>
            </ul>
          </li>
     </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.list{
	width:200px;
	height:585px;
}
ul {
  list-style: none;
  background:white;
  border-left:1px solid #FF5000;
  border-right: 1px solid #FF5000;
  border-top:0px;
  margin-top:0;
}
.nav li{
	width:200px;
	height:36.5px;
	margin-left: -40px;
	text-align: center;
}
a{
	text-align: center;
	text-decoration:none;
	color:#666666;
	position:relative;
	top:7px;
}
a:hover{
	border-bottom:1px solid #FF5000;
}
.nav li:hover{
	background: #FFE4DD;
}
.nav li:hover >a{
	color:#FF8100;
}
.drop-down-content{
	padding: 0;
  display: none;
  height:581px;
  width:696px;
  border:2px solid #FF5000;
  position: absolute;
  top:170px;
  left:360px;
}
.huadong{
}
.nav .drop-down:hover .drop-down-content{
  display: block;
  z-index: 10;
}
</style>
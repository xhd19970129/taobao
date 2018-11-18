<template>
	<div class="xiaomi8">
		<span class="title">
			Xiaomi/小米 小米8年度旗舰全面屏骁龙845双频GPS 智能拍照游戏手机 旗舰官方正品
		</span>
		<span class="pay">{{money}}</span>
		<div class="img">
			<img :src="imgsrc">
		</div>
		<div class="color">
			<button @click="changeimg1">金色</button>
			<button @click="changeimg2">蓝色</button>
			<button @click="changeimg3">白色</button>
		</div>
		<div class="style">
			<button @click="changetext1">6+64GB</button>
			<button @click="changetext2">6+128GB</button>
			<button @click="changetext3">6+256GB</button>
			<button @click="changetext4">8+128GB</button>
		</div>
	</div>
</template>

<script>
	import gold from '@/assets/xiaomi/1.png'
	import blue from '@/assets/xiaomi/2.png'
	import white from '@/assets/xiaomi/3.png'
export default {
  data () {
    return {
    	gold:gold,
      	white:white,
      	blue:blue,
    	imgsrc:gold,
    	money:"¥2499.00"
    }
  },
  methods:{
  	changeimg1:function(){
  		this.imgsrc=gold
  	},
  	changeimg2:function(){
  		this.imgsrc=blue
  	},
  	changeimg3:function(){
  		this.imgsrc=white
  	},
  	changetext1:function(){
  		this.money="¥2499.00"
  	},
  	changetext2:function(){
  		this.money="¥2799.00"
  	},
  	changetext3:function(){
  		this.money="¥3099.00"
  	},
  	changetext4:function(){
  		this.money="¥3099.00"
  	}
  }
}
</script>

<style scoped>
.xiaomi8{
	width:1200px;
	height:600px;
	margin:0 auto;
}
img{
	height:400px;
	width:400px;
	position: relative;
	top:50px;
	left:100px;
	border: 1px solid #F7F7F7;
}
.title{
	position: relative;
	top:50px;
	left:550px;
}
.color{
	width:500px;
	height:30px;
	position: relative;
	top:-230px;
	left:550px;
}
.style{
	width:600px;
	height:30px;
	position: relative;
	top:-180px;
	left:550px;
}
.pay{
	font-weight: bold;
	font-size: 25px;
	position: relative;
	top:120px;
	color: #FF4000;
}
button{
	background: white;
	border: 1px solid #F7F7F7;
	width:100px;
	height:50px;
	margin-left: 30px;
}
</style>
<template>
<div class="mobilephone">
	<div class="xiaomi">
		<span class="pingmu">超大屏6.21''</span>
		<img src="../assets/phone/1.png" @click="go">
		<router-link :to="{ path: 'mobilePhone/xiaomi'}" replace>小米 小米手机8 <span class="red">超清四曲面，AI超感光双摄，红外人脸识别</span></router-link>
		<span class="yue">约</span><span class="jiage">¥1499</span>
		<span class="pay">30454人付款</span>
		<span class="dianping">暂无点评</span>
		<div class="down">
			<span>共有430商家在售</span>
		</div>
	</div>
	<div class="iphone">
		<span class="pingmu">中屏4.7''</span>
		<img src="../assets/phone/3.png" @click="go">
		<router-link :to="{ path: 'mobilePhone/xiaomi'}" replace class="title">苹果 iPhone8 <span class="red">双面全玻璃设计，防水抗尘，支持无线充电</span></router-link>
		<span class="yue">约</span><span class="jiage">¥4388</span>
		<span class="pay">31439人付款</span>
		<span class="dianping">暂无点评</span>
		<div class="down">
			<span>共有755商家在售</span>
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
  methods:{
  	go:function(){
  		this.$router.push({ path:'/mobilePhone/xiaomi'})
  	}
	}
}
</script>

<style scoped>
.mobilephone{
	width:1200px;
	height:600px;
	margin:0 auto;
	text-indent: 10px;
	display: flex;
}
.xiaomi{
	width:300px;
	height:500px;
	position: relative;
	top:50px;
	left:200px;
	border:1px solid #E8E8E8;
}
.iphone{
	width:300px;
	height:500px;
	position: relative;
	top:50px;
	left:280px;
	border:1px solid #E8E8E8;
}
.xiaomi:hover{
	border:1px solid red;
}
.iphone:hover{
	border:1px solid red;
}
img{
	width:300px;
	height:280px;
	cursor: pointer;
}
.pingmu{
	font-size: 14px;
	color:#999999;
}
.red{
	color:red;
}
.yue{
	position: relative;
	top:35px;
	left:-110px;
	color:#999999;
}
.jiage{
	position: relative;
	top:35px;
	left:-100px;
	font-size: 18px;
	color:#FF4400;
	font-weight: bold;
}
.pay{
	position: relative;
	top:35px;
	left:0px;
	font-size: 13px;
	color:#999999;
}
.dianping{
	position: relative;
	top:50px;
	left:23px;
	font-size:14px;
	color:#999999;
}
.down{
	height:50px;
	position: relative;
	top:80px;
	overflow: hidden;
	background: #F7F7F7;
}
.down span{
	position: relative;
	top:15px;
	font-size:14px;
}
a{
	text-decoration:none;
}
a:hover{
	text-decoration: 1px solid #FF4400;
	color:#FF4400;
}
</style>

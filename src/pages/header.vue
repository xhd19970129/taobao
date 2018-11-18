<template>
<div>
	<div class="header-mid-left">
        <img :src="img" class="img1">
      </div>
      <div class="header-mid-mid">
        <div class="search">
          <form>
            <input type="text" placeholder="请输入您要搜索的内容..." v-model="input">
            <button type="submit" @click="goto"></button>
          </form>
          <a href="" class="link">充电宝</a>
          <a href="">耳机</a>
          <a href="">保温杯</a>
          <a href="">数据线</a>
          <a href="">无线鼠标</a>
        </div>
      </div>
      <div class="header-mid-right">
        <img :src="img1" class="img2">
      </div>
    </div>
</template>

<script>
import img from '@/assets/logo.png'
import img1 from '@/assets/8.png'
import img2 from '@/assets/11.png'
export default {
  data () {
    return {
    	img:img,
      img1:img1,
      img2:img2,
      input:''
    }
  },
  methods:{
    goto:function(){
      if(this.input==="手机"){
        this.$router.push({ path:'/mobilePhone' })
      }
    }
  }
}
</script>

<style scoped>
.header-mid-left{
  width: 200px;
  height:100px;
  margin-left: 0;
}
.header-mid-mid{
  width: 700px;
  height: 80px;
  background: white;
  margin-top: -90px;
  margin-left: 200px;
}
form {
  position: relative;
  width: 600px;
  margin: 0 auto;
}

.search {
  margin:25px 0px 25px 25px;
  width: 750px;
  height:100px;
  overflow: hidden;
}
.search input {
  background: transparent;
  top: 0;
  right: 0;
  width: 550px;
  height: 42px;
  margin-left: -50px;
  border-radius: 42px 0 0 42px;
  border: 2px solid #FF5000;
  background: white;
  font-size: 14px;
  outline:none;
  padding:0 0 0 20px;
}
.search button {
  background: #FF8600;
  border-radius: 0 45px 42px 0;
  top: -2px;
  right: 0;
  height: 48px;
  width: 100px;
  cursor: pointer;
  position: absolute;
  border-style:none;
  outline:none;
}
.search button:before {
  content: "搜索";
  font-size: 20px;
  color: #F9F0DA;
}
.search a{
  color: black;
  font-size: 12;
}
.search a:hover{
  color: red;
}
.header-mid-right{
  width:100px;
  height:100px;
  margin-left:100px;
}
.img2{
	position: absolute;
	top:40px;
	left:1150px;
  width:75px;
  height:75px;
}
.search a{
  text-decoration: none;
}
</style>
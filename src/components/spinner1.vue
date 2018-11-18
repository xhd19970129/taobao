<template>
  <div class="spinner">
    <ul class="nav">
          <li class="drop-down"><a href="" class="change">中国大陆</a>
            <ul class="drop-down-content">
              <li><a href="#">全球</a></li>
              <li><a href="#">中国大陆</a></li>
              <li><a href="#">香港</a></li>
              <li><a href="#">台湾</a></li>
              <li><a href="#">澳门</a></li>
              <li><a href="#">韩国</a></li>
              <li><a href="#">马来西亚</a></li>
              <li><a href="#">澳大利亚</a></li>
              <li><a href="#">新加坡</a></li>
              <li><a href="#">新西兰</a></li>
              <li><a href="#">加拿大</a></li>
              <li><a href="#">美国</a></li>
              <li><a href="#">日本</a></li>
            </ul>
          </li>
          <li class="log"><a href="https://login.taobao.com/member/login.jhtml?spm=a21bo.2017.754894437.1.5af911d9k4O91D&f=top&redirectURL=https%3A%2F%2Fwww.taobao.com%2F">亲，请登录</a></li>
          <li class="reg"><a href="https://reg.taobao.com/member/reg/fill_mobile.htm">免费注册</a></li>
          <li class="moblie"><a href="https://mpage.taobao.com/hd/download.html?spm=a21bo.2017.1997563273.1.5af911d9J2IqFR">手机逛淘宝</a></li>
     </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
  },
  methods:{
  }
}
</script>

<style scoped>
.spinner{
  margin-top:-16px;
  width:350px;
  height:30px;
}
ul{
  margin-left:-40px;
  list-style: none;
  background:white;
  z-index: 100;
}
.nav li{
  float: left;
}
ul a{
  display: block;
  text-decoration: none;
  width: 87.5px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #6C6C6C;
  background-color: #F5F5F5;
  font-size: 13px;
}
.change:hover{
  background: white;
}
.drop-down{
  position: relative;
}

.drop-down-content{
  padding: 0;
  display: none;
  position: absolute;
  left:40px;
  overflow-y:scroll;
  height:300px;
}
.drop-down-content a{
  background:white;
  width: 200px;
  text-align: left;
  text-indent: 30px;
}      
h3{
  font-size: 30px;
  clear: both;
}
.drop-down-content li:hover a{
  background-color:#F5F5F5;
}
.nav .drop-down:hover .drop-down-content{
  display: block;
}
.moblie a:hover{
  color:red;
}
.log a{
  color:red;
}
.reg a:hover{
  color:red;
}
</style>

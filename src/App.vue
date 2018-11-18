<template>
<div>
  <router-view></router-view>
  <div class="header">
    <div class="header-up">
      <div class="header-up-left">
        <router-view name="spinner1"></router-view>
      </div>
      <div class="header-up-right">
        <router-view name="spinner2"></router-view>
      </div>
    </div>
    <div class="header-mid">
      <router-view name="header"></router-view>
    </div>
    <div class="header-down">
      <router-view name="headerDown"></router-view>
    </div>
  </div>
  <div class="content">
    <keep-alive>
          <router-view name="indexpage"></router-view>
      </keep-alive>
  </div>
  <div class="footer">
    <div class="footer-up">
      <router-view name="footerUp"></router-view>
    </div>
    <div class="footer-down">
      <router-view name="foot"></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components:{
  },
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
.header{
  width: 100%;
  height: 30px;
  background: #F5F5F5;
}
.header-up{
  width:1200px;
  height:30px;
  margin:0 auto;
  /*background: blue;*/
  display:flex;
}
.header-up-left{
  width:350px;
  height:30px;
  margin-left: 0;
}
.header-up-right{
  width:600px;
  height: 30px;
  margin-left:250px;
  background:#F5F5F5;
}
.header-mid{
  width: 1200px;
  height:100px;
  margin:0 auto;
  display: flex;
}

.header-mid-right{
  width:100px;
  height:100px;
  margin-left:100px;
}
.header-down{
  width: 100%;
  height:24px;
  background: #FF8A00;
  display: flex;
  margin-top:16px;
}
.content{
  width:1200px;
  height:700px;
  margin:140px auto 15px;
  display: flex;
}
.footer{
  width: 1200px;
  height:150px;
  margin:0 auto;
}
.footer-up{
  width:1200px;
  height:50px;
}
.footer-down{
  width: 1200px;
  height:100px;
  display: flex;
  flex-direction:row;
  padding: 5px 0 5px 0;
}
.link{
  margin-left:100px;
}
.search a{
  text-decoration: none;
}
.img1{
  margin-top: 15px;
  margin-left:25px;
  width:150px;
  height:75px;
}
</style>

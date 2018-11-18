<template>
<div class="footer-down">
      <div class="footer-inner">
            <img src="../assets/yuantu/1.png" class="yuan">
            <a href="" class="link">超级大学生</a>
            <span class="big">我的校园生活</span>
            <img src="../assets/yuantu/7.png" class="love">
            <span class="small">人气63027</span>
      </div>
      <div class="footer-inner">
            <img src="../assets/yuantu/2.png" class="yuan">
            <a href="" class="link">爱上高尔夫</a>
            <span class="big">休闲慢时光</span>
            <img src="../assets/yuantu/7.png" class="love2">
            <span class="small2">人气11592</span>
      </div>
      <div class="footer-inner">
            <img src="../assets/yuantu/3.png" class="yuan">
            <a href="" class="link">吃货的后裔</a>
            <span class="big">翻滚吧美食君</span>
            <img src="../assets/yuantu/7.png" class="love">
            <span class="small">人气46155</span>
      </div>
      <div class="footer-inner">
            <img src="../assets/yuantu/4.png" class="yuan">
            <a href="" class="link">理想家</a>
            <br>
            <span class="big">想要这个家</span>
            <img src="../assets/yuantu/7.png" class="love2">
            <span class="small2">人气91881</span>
      </div>
      <div class="footer-inner">
            <img src="../assets/yuantu/5.png" class="yuan">
            <a href="" class="link">SVIP壕</a>
            <br>
            <span class="big">有品质地败家</span>
            <img src="../assets/yuantu/7.png" class="love5">
            <span class="small5">人气22039</span>
      </div>
      <div class="footer-inner">
            <img src="../assets/yuantu/6.png" class="yuan">
            <a href="" class="link">户外运动控</a>
            <span class="big">一直在路上</span>
            <img src="../assets/yuantu/7.png" class="love6">
            <span class="small2">人气49889</span>
      </div>
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
.footer-down{
      display: flex;
}
.footer-inner{
  width:194.1px;
  height:100px;
  background:white;
  margin-left: 5px;
}
.footer-down .yuan{
      width:100px;
      height:100px;
      border-radius: 50%;
      border:1px solid #34D6AE;
      cursor: pointer;
}
.footer-down .yuan:hover{
      border:1px solid #FF5000;
}
.footer-down .yuan:hover+.link{
      color:red;
}
.link:hover{
      color: red;
}
.link{
      position:relative;
      left:8px;
      top:-90px;
      text-decoration:none;
      color:#707070;
}

.big{
      position:relative;
      left:107px;
      top:-90px;
}
.love{
      width:18px;
      height: 18px;
      position:relative;
      left:20px;
      top:-60px;
}
.small{
      position:relative;
      left:20px;
      top:-65px;
}
.small2{
      position:relative;
      left:35px;
      top:-65px;
}
.small5{
      position:relative;
      left:24px;
      top:-65px;
}
.love2{
      width:18px;
      height: 18px;
      position:relative;
      left:35px;
      top:-60px;
}
.love5{
      width:18px;
      height: 18px;
      position:relative;
      left:25px;
      top:-60px;
}
.love6{
      width:18px;
      height: 18px;
      position:relative;
      left:35px;
      top:-60px;
}
span{
      font-size: 12px;
}
</style>

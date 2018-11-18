<template>
  <div class="slide3">
    <div class="slideshow">
      <transition-group tag="dl" name="image">
        <dd v-for="(item, index) in slides3" v-show="index===mark" :key="index" @mouseenter="stop" @mouseleave="go">
          <a :href="item.href" class="tupian">
            <img :src='item.src'>
          </a>
          <a :href="item.href" class="title">{{item.title}}</a> 
          <br> 
          <span class="text">{{item.text}}</span>
        </dd>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      timer:'',
      mark:0,
      slides3:[
        {
          src: require('../assets/slideshow3/1.png'),
          href:'https://headline.taobao.com/feed/feedList.htm?spm=a21bo.2017.226762.4.5af911d9NbmTvr',
          title:'双11餐厨百货预售优惠攻略 超值实用',
          text:'双11家纺百货预售会场，高颜值的烹饪锅具/水杯，超实用的居家日用收纳用品，全场全额免定金！双11囤家居百货超划算~够用一整年！跟着小编的攻略逛起来吧'
        },
        {
          src: require('../assets/slideshow3/2.png'),
          href:'https://headline.taobao.com/feed/feedList.htm?spm=a21bo.2017.226762.4.5af911d9NbmTvr',
          title:'万圣节去哪玩？良阅二次元游园会等你来！',
          text:'哈喽，大家好，我是你们的微漫酱！万圣节快要到了，再次推荐给大家一个好玩的二次元线下活动，一起来了解一下吧！'
        },
        {
          src: require('../assets/slideshow3/3.png'),
          href:'https://headline.taobao.com/feed/feedList.htm?spm=a21bo.2017.226762.4.5af911d9NbmTvr',
          title:'大魔王带你细数有趣的万圣节COS！',
          text:'万圣节又叫诸圣节，在每年的11月1日，是西方的传统节日'
        }
      ]
    }
  },
  computed:{
  
  },
  methods:{
    autoPlay () {
      this.mark++;
      if (this.mark === 3) { //当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    stop(){
      clearInterval(this.timer)
      this.timer = null
    },
    go(){
      this.timer = setInterval(() =>{
        this.autoPlay()
      },4000)
    }
  },
  created () {
    this.$nextTick(() =>{
      this.timer = setInterval(() =>{
        this.autoPlay()
      },4000)
    })
  }
}
</script>

<style scoped>
.image-enter-active {
  transform: translateY(0);
  transition: all .5s ease;
}
.image-leave-active {
  transform: translateY(100px);
}
.image-enter {
  transform: translateY(100px);
  transition: all 1.0s ease;
}
.image-leave {
  transform: translateY(-100px);
  transition: all 1.0s ease;
}
.slide3 {
  width: 700px;
  height: 100px;
  margin: 0;
  overflow: hidden;
  position: relative;
}
.slide3 .slideshow {
  width: 480px;
  height: 245px;
  display: flex;
}
dl {
  position: absolute;
}
img {
  width: 200px;
  height: 100px;
  position: relative;
  top:-15px;
  left:0;
}
.tupian:hover~.title{
  color:#FF8C00;
}

.title{
  position: relative;
  left:0;
  top:-80px;
  font-size: 15px;
  color:black;
}
.text{
  position: relative;
  left:200px;
  top:-80px;
}
</style>

<template>
  <div class="slide">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(item, index) in slides" v-show="index===mark" :key="index" @mouseenter="stop" @mouseleave="go">
          <a :href="item.href">
            <img :src='item.src'>
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bar">
      <span v-for="(item, index) in slides" :class="{ 'active':index===mark }" :key="index" @click="change(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      timer:'',
      mark:0,
      index:0,
      slides:[
        {
          src: require('../assets/1.png'),
          href:'https://re.taobao.com/action_ecpm_home?keyword=%CE%C0%D2%C2&catid=50010159&refpid=mm_12852562_1778064_13672849&crtid=1193054686&itemid=574022679013&adgrid=1022437690&elemtid=1&clk1info=1725306450%2C88%2CRwn3GcsNmJZuDYhdZYd3tssWXWsbKx49mb%2FaAanj4%2BGnuCqdaj8FiT0UcHs4afLj8m7O0HWrbbYTtI%2B9t%2FVzQA%3D%3D&sbid=;31432;,;31425&nick=%5Cu6D69%5Cu4E1C%5Cu4E1C%5Cu4E1C098402233&qtype=6&tagvalue=&isf=0&templateid=2679843&clk1=15751cc751c7c969b1d4441a7ab923c5'
        },
        {
          src: require('../assets/2.png'),
          href:'https://detail.tmall.com/item.htm?id=575867149767&rn=706310b7cbdf952a5cd35cf56d6f04e2&abbucket=5&ali_trackid=17_82d08f83ea45a73d0dde63b2ca006f10&spm=a21bo.2017.201862-2.1'
        },
        {
          src: require('../assets/3.png'),
          href:'https://detail.tmall.com/item.htm?id=560018928158&sku_properties=1627207:28341&ali_trackid=30_8dd976ea7324bc7d22e553ee39fe5c4d&spm=a21bo.2017.201862-3.1'
        },
        {
          src: require('../assets/4.png'),
          href:'https://pages.tmall.com/wow/fushi/20988/budayang?spm=a21bo.2017.201862-5.d1.5af911d9GcdEt8&wh_biz=tm&pos=1&acm=20140506002.1003.2.4611578&scm=1003.2.20140506002.OTHER_1543785785591_4611578'
        }
      ]
    }
  },
  computed:{
  },
  methods:{
  autoPlay () {
      this.mark++;
      if (this.mark === 4) {
        this.mark = 0
      }
    },
    change (i) {
      this.mark = i
    },
    stop(){
      clearInterval(this.timer)
      this.timer = null
    },
    go(){
      this.timer = setInterval(() =>{
        this.autoPlay()
      },2000)
    }
  },
  created () {
    this.$nextTick(() =>{
      this.timer = setInterval(() =>{
        this.autoPlay()
      },2000)
    })
  }
}
</script>

<style scoped>
.image-enter-active {
  transform: translateX(0);
  transition: all 1.0s ease;
}
.image-leave-active {
  transform: translateX(-480px);
  transition: all 1.0s ease;
}
.image-enter {
  transform: translateX(480px);
}
.image-leave {
  transform: translateX(0);
}
.slide {
  width: 480px;
  height: 320px;
  margin: 0;
  overflow: hidden;
  position: relative;
}
.slideshow {
  width: 480px;
  height: 320px;
}
li {
  position: absolute;
}
img {
  width: 495px;
  height: 320px;
  margin-left:-50px;
  margin-top:-15px;
}
.bar {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 1;
  text-align: center;
}
.bar span {
  width: 7px;
  height: 7px;
  background: white;
  display: inline-block;
  border-radius:50%;
  margin-right: 10px;
  cursor: pointer;
}
.active {
  background: red !important;
}
.button-left{
  position: absolute;
  width:30px;
  height: 30px;
  top:130px;
  left: 0;
  cursor: pointer;
}
.button-right{
  position: absolute;
  width:30px;
  height: 30px;
  top:130px;
  right:-15px;
  cursor: pointer;
}
</style>

<template>
  <div class="slide2">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(item, index) in slides2" v-show="index===mark" :key="index" @mouseenter="stop" @mouseleave="go">
          <a :href="item.href1">
            <img :src='item.src1'>
          </a>
          <a :href="item.href2">
            <img :src='item.src2'>
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bar">
      <span v-for="(item, index) in slides2" :class="{ 'active':index===mark }" :key="index" @click="change(index)"></span>
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
      slides2:[
        {
          src1: require('../assets/slideshow2/1.png'),
          href1:'https://detail.tmall.com/item.htm?id=561161312542&rn=e016e7dc20f388a6c6adf35e70ac1587&abbucket=17&sku_properties=5919063:6536025&ali_trackid=17_3330618cc000a747fe93ac39cdc6af0a&spm=a21bo.2017.201863-2.1',
          src2: require('../assets/slideshow2/2.png'),
          href2:'https://luojinz.tmall.com/shop/view_shop.htm?user_number_id=2986572943&ali_trackid=17_4b995105a2d469e0c9bd24d41cc6d582&spm=a21bo.2017.201863-2.2'
        },
        {
          src1: require('../assets/slideshow2/3.png'),
          href1:'https://burgerking.tmall.com/?spm=a21bo.2017.201863-5.d1.5af911d9GcdEt8&bucket=8&alg_bts=8&scm=1049.lyg_turing_-1_182.61023.61023-THJH_92451&lygClk=1&impid=6RnMxJq%2FO83',
          src2: require('../assets/slideshow2/4.png'),
          href2:'https://gani.tmall.com/?spm=a21bo.2017.201863-5.d2.5af911d9GcdEt8&bucket=8&alg_bts=8&bftRwd=1&bftTag=1049.lyg_buffett_0_1.5238.12573.1&scm=1049.lyg_turing_-1_182.60996.60996-THJH_92429&lygClk=1&impid=6RnMxJq%2FO83'
        },
        {
          src1: require('../assets/slideshow2/5.png'),
          href1:'https://wenbiquan.tmall.com/?spm=a21bo.2017.201863-6.d1.5af911d9GcdEt8&bucket=8&alg_bts=8&scm=1049.lyg_turing_-1_182.61115.61115-THJH_92347&lygClk=1&impid=6RnMxJq%2FO83',
           src2: require('../assets/slideshow2/6.png'),
          href2:'https://content.tmall.com/wow/pegasus/subject/1/725677994/10218593?spm=a21bo.2017.201863-6.d2.5af911d9GcdEt8&bucket=8&alg_bts=8&scm=1049.lyg_turing_-1_182.61034.61034-THJH_92922&lygClk=1&impid=6RnMxJq%2FO83'
        }
      ]
    }
  },
  computed:{
  },
  methods:{
    autoPlay () {
      this.mark++;
      if (this.mark === 3) { 
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
      },2500)
    }
  },
  created () {
    this.$nextTick(() =>{
      this.timer = setInterval(() =>{
        this.autoPlay()
      },2500)
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
.slide2 {
  width: 480px;
  height: 245px;
  margin: 0;
  overflow: hidden;
  position: relative;
}
.slide2 .slideshow {
  width: 480px;
  height: 245px;
  display: flex;
}
li {
  position: absolute;
}
img {
  width: 257.5px;
  height: 245px;
  margin-left:-40px;
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
.slide2 .button-left{
  position: absolute;
  width:30px;
  height: 30px;
  top:130px;
  left: 0;
  cursor: pointer;
}
.slide2 .button-right{
  position: absolute;
  width:30px;
  height: 30px;
  top:130px;
  right:-15px;
  cursor: pointer;
}
</style>

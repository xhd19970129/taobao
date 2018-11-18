<template>
  <div class="content-inner">
    <div class="content-list">
      <List></List>
    </div>
    <div class="content-mid">
      <div class="up-left">
        <slide-show></slide-show>
      </div>
      <div class="up-right">
        <a href="https://pages.tmall.com/wow/jz/act/jzjc1111fc?spm=a21bo.2017.201860.1.5af911d9GcdEt8&scm=20140637.1.62413.239520&wh_biz=tm&wh_weex=true"><img  src="../assets/5.png" ></a>
      </div>
      <div class="down-left">
         <slide-show2></slide-show2>
      </div>
      <div class="down-right">
        <a href="https://soocare.tmall.com/?ali_trackid=30_5a9f175e3d64fd03e1d21d02d125d050&spm=a21bo.2017.201861.1"><img src="../assets/7.png"  ></a>
      </div>
    </div>
    <div class="content-right">
      <div class="content-right-1">
        <div class="content-right-1-1">
          <a href="https://login.taobao.com/member/login.jhtml?from=taobaoindex&f=top&style=&sub=true&redirect_url=https%3A%2F%2Fi.taobao.com%2Fmy_taobao.htm%3Fspm%3Da21bo.2017.201864-1.1.5af911d9NObO6i%26ad_id%3D%26am_id%3D%26cm_id%3D%26pm_id%3D1501036000a02c5c3739"><img src="../assets/9.png"></a>
        </div>
        <p>Hi!xxxxxxx</p>
        <a href="https://taojinbi.taobao.com/index.htm?spm=a21bo.2017.201864-1.d1.5af911d9MbzNx6"><textarea class="text1">领淘金币抵钱</textarea></a>
        <a href="https://vip.taobao.com/vipHomeNew2.htm?spm=a21bo.2017.201864-1.3.5af911d9MbzNx6"><textarea class="text2">会员俱乐部</textarea></a>
        <a href="https://login.taobao.com/member/login.jhtml?spm=a21bo.2017.201864-2.d1.5af911d9MbzNx6&f=top&redirectURL=http%3A%2F%2Fwww.taobao.com%2F"><button class="log">登录</button></a>
        <a href="https://reg.taobao.com/member/reg/fill_mobile.htm"><button class="reg">注册</button></a>
        <a href="https://login.taobao.com/member/login.jhtml?redirectURL=http%3A%2F%2Fopenshop.taobao.com%2Fopenshop%2Fwelcome.htm%3Fspm%3Da21bo.2017.201864-2.3.5af911d9MbzNx6%26"><button class="store">开店</button></a>
      </div>
      <div class="content-right-2">
        <a href="http://report.12377.cn:13225/toreportinputNormal_anis.do?spm=a21bo.2017.0.0.5af911d9MbzNx6&file=toreportinputNormal_anis.do"><button class="jubao">网上有害信息举报专区</button></a>
      </div>
      <div class="content-right-3">
        <spinner3></spinner3>
      </div>
      <div class="content-right-4" >
        <Life></Life>
      </div>
      <div class="content-right-5">
        <div class="message">
          <p>阿里APP</p>
          <a>更多&gt;</a>
        </div>
        <div class="app">
          <img src="../assets/tubiao/1.png">
          <img src="../assets/tubiao/2.png">
          <img src="../assets/tubiao/3.png">
          <img src="../assets/tubiao/4.png">
          <img src="../assets/tubiao/5.png">
          <img src="../assets/tubiao/6.png">
          <img src="../assets/tubiao/7.png">
          <img src="../assets/tubiao/8.png">
          <img src="../assets/tubiao/9.png">
          <img src="../assets/tubiao/10.png">
        </div>
      </div>
    </div>
    <div class="content-footer">
      <div class="footer-left">
        <img src='../assets/10.png'>
      </div>
      <div class="footer-right">
        <slide-show3></slide-show3>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow'
import slideShow2 from '../components/slideShow2'
import slideShow3 from '../components/slideShow3'
import List from '../components/list'
import Life from '../components/life'
import spinner3 from '../components/spinner3'
export default {
  name: 'App',
  components: {
    slideShow,
    slideShow2,
    slideShow3,
    List,
    Life,
    spinner3
  },
  data(){
    return{
      buttonList:[
        {
          src: require('../assets/btn/1.png'),
          href:'https://wt.taobao.com/?spm=a21bo.2017.201866.1.5af911d9MbzNx6&ks-menu=cz',
          text:'充话费'
        },
        {
          src: require('../assets/btn/2.png'),
          href:'https://www.fliggy.com/?spm=a21bo.2017.201866.2.5af911d9MbzNx6',
          text:'旅行'
        },
        {
          src: require('../assets/btn/3.png'),
          href:'https://baoxian.taobao.com/?spm=a21bo.2017.201866.3.5af911d9MbzNx6',
          text:'车险'
        },
        {
          src: require('../assets/btn/4.png'),
          href:'https://game.taobao.com/?spm=a21bo.2017.201866.4.5af911d9MbzNx6',
          text:'游戏'
        },
        {
          src: require('../assets/btn/5.png'),
          href:'https://caipiao.taobao.com/?spm=a21bo.2017.201866.5.5af911d9MbzNx6&t=1&ad_id=&am_id=13010663204b41fb5276&cm_id=&pm_id=',
          text:'彩票'
        },
        {
          src: require('../assets/btn/6.png'),
          href:'https://dianying.taobao.com/?spm=a21bo.2017.201866.6.5af911d9MbzNx6',
          text:'电影'
        },
        {
          src: require('../assets/btn/7.png'),
          href:'http://btrip.alitrip.com/jiudian/?spm=a21bo.2017.201866.7.5af911d9MbzNx6',
          text:'酒店'
        },
        {
          src: require('../assets/btn/8.png'),
          href:'https://login.taobao.com/member/login.jhtml?tpl_redirect_url=https%3A%2F%2Fauthet15.alipay.com%3A443%2Flogin%2FtrustLoginResultDispatch.htm%3FredirectType%3D%26sign_from%3D3000%26goto%3Dhttps%253A%252F%252Fyebprod.alipay.com%252Fyeb%252Fasset.htm%253Fnull%253D&from_alipay=1',
          text:'理财'
        },
        {
          src: require('../assets/btn/9.png'),
          href:'https://app.alipay.com/container/web/index.htm',
          text:'找服务'
        },
        {
          src: require('../assets/btn/10.png'),
          href:'https://damai.tmall.com/shop/view_shop.htm?spm=a21bo.2017.201866.10.5af911d9MbzNx6',
          text:'演出'
        },
        {
          src: require('../assets/btn/11.png'),
          href:'https://jiaofei.alipay.com/jiaofei.htm?_pdType=aecfbbfgeabbifdfdieh&_scType=bacfajegafddadijhagd',
          text:'水电煤'
        },
        {
          src: require('../assets/btn/12.png'),
          href:'http://btrip.alitrip.com/huochepiao/?spm=a21bo.2017.201866.12.5af911d9MbzNx6',
          text:'火车票'
        }
      ]
    }
  }
}
</script>

<style scoped>
body{
  padding: 0;
  margin: 0;
}
.content-inner{
  display: flex;
  flex-wrap:wrap;
}
.content-list{
  width:200px;
  height:585px;
  background: red;
}
.content-mid{
  width: 700px;
  height:595px;
  display: flex;
  flex-wrap:wrap;
}
.up-left{
  width:480px;
  height: 320px;
  margin: 10px;
  background: white;
}
.up-right{
  width:190px;
  height:320px;
  margin-top: 10px;
  background: white;
}
.down-left{
  width:480px;
  height:245px;
  margin-bottom: 10px;
  margin-left:10px;
  background: white;
}
.down-right{
  width:190px;
  height:245px;
  margin-left: 10px;
  margin-bottom: 10px;
  background: white;
}
.content-right{
  width:300px;
  height:600px;
}
.content-footer{
  width:900px;
  height:100px;
  position: absolute;
  top:780px;
  display: flex;
}
.footer-left{
  width:200px;
  height:100px;
  margin-left:0;
}
.footer-right{
  width:700px;
  height:100px;
  margin:0;
}
.content-right-1{
  width:300px;
  height:150px;
  margin-top: 10px;
  text-align: center;
}
.content-right-2{
  width:300px;
  height:30px;
  background: black;
}
.content-right-3{
  width: 300px;
  height:100px;
  background: grey;
}
.content-right-4{
  width:300px;
  height:300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content-right-5{
  width:300px;
  height:120px;
}
.message{
  height:20px;
  width:300px;
  display: flex;
}
.message p{
  margin-left:10px;
}
.content-right-5 .app{
  padding: 5px 10px;
  width:300px;
  height:100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content-right-5 a{
  cursor: pointer;
  margin-top: 2px;
  margin-left: 180px;
}
.content-right-5 .app img{
  width:41px;
  height:41px;
  padding: 3px 8px;
  cursor: pointer;
}
.content-right-5 a:hover{
  color:red;
}
img{
  width:100%;
  height:100%;
}
.content-right-1-1{
  position:relative;
  top:10px;
  left:125px;
  width:50px;
  height:50px;
}
.content-right-1-1 img{
  border-radius:50%;
}
.content-right-1 p{
  margin-top:10px;
  margin-bottom: 0px;
}
.text1{
  border-radius:10px;
  border:0;
  background:#FFE4DB;
  resize:none;
  color:#FF5000;
  width: 80px;
  height: 15px;
  outline:none;
  cursor: pointer;
}
.text2{
  border-radius:10px;
  background:#FFE4DB;
  resize:none;
  color:#FF5000;
  width: 70px;
  height: 15px;
  outline:none;
  cursor: pointer;
  border:0;
}
.log{
  width: 95px;
  height:25px;
  position:absolute;
  top:295px;
  right:340px;
  border-radius:5px;
  border-style: none;
  color:white;
  background: #FF5000;
  cursor: pointer;
  outline:none;
}
.reg{
  width: 75px;
  height:25px;
  position:absolute;
  top:295px;
  right:260px;
  border-radius:5px;
  border-style: none;
  color:white;
  background: #FF5000;
  cursor: pointer;
  outline:none;
}
.store{
  width: 75px;
  height:25px;
  position:absolute;
  top:295px;
  right:180px;
  border-radius:5px;
  border-style: none;
  color:white;
  background: #FF5000;
  cursor: pointer;
  outline:none;
}
.jubao{
  width:100%;
  height:100%;
  border-style: none;
  background: #FFE4DD;
  color: #FF4400;
  cursor: pointer;
  outline:none;
}
</style>

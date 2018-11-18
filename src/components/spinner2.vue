<template>
  <div class="spinner2">
     <ul class="nav2">
          <li class="drop-down2"><a href="https://login.taobao.com/member/login.jhtml?from=taobaoindex&f=top&style=&sub=true&redirect_url=https%3A%2F%2Fi.taobao.com%2Fmy_taobao.htm%3Fspm%3Da21bo.2017.1997525045.1.5af911d9YMKYCr" class="my">我的淘宝</a>
            <ul class="drop-down-content2">
              <li><a href="https://login.taobao.com/member/login.jhtml?redirectURL=http%3A%2F%2Fbuyertrade.taobao.com%2Ftrade%2Fitemlist%2Flist_bought_items.htm%3Fspm%3Da21bo.2017.1997525045.2.5af911d9RwMq0A">已买到的宝贝</a></li>
              <li><a href="https://login.taobao.com/member/login.jhtml?redirectURL=https%3A%2F%2Fwww.taobao.com%2Fmarkets%2Ffootmark%2Ftbfoot%3Fspm%3Da21bo.2017.1997525045.3.5af911d9bESGMi">我的足迹</a></li>
            </ul>
          </li>
          <li class="drop-down2"><a href="#">购物车</a>
            <ul class="drop-down-content3">
              <li><span>您的购物车里还没有任何宝贝。</span><a href="https://login.taobao.com/member/login.jhtml?redirectURL=http%3A%2F%2Fcart.taobao.com%2Fcart.htm%3Ft%3D1542335326983"><button>查看我的购物车</button></a></li>
            </ul>
          </li>
          <li class="drop-down2"><a href="">收藏夹</a>
            <ul class="drop-down-content2" id="collect">
              <li><a href="#">收藏的宝贝</a></li>
              <li><a href="#">收藏的店铺</a></li>
            </ul>
          </li>
          <li class="classification"><a href="">商品分类</a></li>
          <li class="gang">|</li>
          <li class="drop-down2"><a href="">卖家中心</a>
            <ul class="drop-down-content2" id="">
              <li><a href="#">免费开店</a></li>
              <li><a href="#">已卖出的宝贝</a></li>
              <li><a href="#">出售中的宝贝</a></li>
              <li><a href="#">卖家服务市场</a></li>
              <li><a href="#">卖家培训中心</a></li>
              <li><a href="#">体检中心</a></li>
              <li><a href="#">问商友</a></li>
            </ul>
          </li>
          <li class="drop-down2"><a href="">联系客服</a>
            <ul class="drop-down-content2" id="service">
              <li><a href="#">消费者客服</a></li>
              <li><a href="#">卖家客服</a></li>
            </ul>
          </li>
          <li class="drop-down2"><a href="">网站导航</a>
            <ul class="drop-down-content2">
              <li class="webNavigation">
                <div class="navigation">
                  <div class="navigation-left">
                    <div class="navigation-up">
                      <span class="theme">主题市场</span>
                    </div>
                    <div class="navigation-down">
                      <button v-for="item in themes" class="theme-button">{{item.text}}</button>
                    </div>
                  </div>
                  <div class="navigation-mid-left">
                    <div class="navigation-up">
                      <span class="tese">特色市场</span>
                    </div>
                    <div class="navigation-down">
                      <button v-for="item in tese" class="tese-button">{{item.text}}</button>
                    </div>
                  </div>
                  <div class="navigation-mid-right">
                    <div class="navigation-up">
                      <span class="ali">阿里APP</span>
                    </div>
                    <div class="navigation-down">
                      <button v-for="item in ali" class="ali-button">{{item.text}}</button>
                    </div>
                  </div>
                  <div class="navigation-right">
                    <div class="navigation-up">
                      <span class="tuijian">精彩推荐集</span>
                    </div>
                    <div class="navigation-down">
                      <button v-for="item in tuijian" class="tuijian-button">{{item.text}}</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
     </ul> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      themes:[
        {text:"女装"},
        {text:"男装"},
        {text:"内衣"},
        {text:"鞋靴"},
        {text:"箱包"},
        {text:"婴童"},
        {text:"家电"},
        {text:"数码"},
        {text:"手机"},
        {text:"美妆"},
        {text:"珠宝"},
        {text:"眼睛"},
        {text:"手表"},
        {text:"运动"},
        {text:"户外"},
        {text:"乐器"},
        {text:"游戏"},
        {text:"动漫"},
        {text:"影视"},
        {text:"美食"},
        {text:"鲜花"},
        {text:"宠物"},
        {text:"农资"},
        {text:"房产"},
        {text:"装修"},
        {text:"建材"},
        {text:"家居"},
        {text:"百货"},
        {text:"汽车"},
        {text:"二手车"},
        {text:"办公"},
        {text:"定制"},
        {text:"教育"},
        {text:"卡券"},
        {text:"本地"}
      ],
      tese:[
        {text:"爱逛街"},
        {text:"美妆秀"},
        {text:"全球购"},
        {text:"强调"},
        {text:"淘女郎"},
        {text:"星店"},
        {text:"极有家"},
        {text:"阿里拍卖"},
        {text:"淘宝众筹"},
        {text:"飞猪"},
        {text:"亲宝贝"},
        {text:"咸鱼"},
        {text:"农资"},
        {text:"天天特卖"},
        {text:"Outlets"},
        {text:"俪人购"},
        {text:"聚名品"},
        {text:"淘抢购"},
        {text:"全球精选"},
        {text:"非常大牌"},
        {text:"试用"},
        {text:"量贩团"},
        {text:"阿里翻译"},
      ],
      ali:[
        {text:"淘宝"},
        {text:"天猫"},
        {text:"支付宝"},
        {text:"聚划算"},
        {text:"飞猪"},
        {text:"蚂蚁聚宝"},
        {text:"旺信"},
        {text:"咸鱼"},
        {text:"阿里钱盾"},
        {text:"钉钉"},
        {text:"高德地图"},
        {text:"点点虫"},
        {text:"虾米音乐"},
        {text:"淘票票"},
        {text:"菜鸟裹裹"},
        {text:"爱逛街"},
        {text:"拍卖会"},
        {text:"阿里云"},
        {text:"网商银行"},
        {text:"阿里邮箱"},
        {text:"阿里众包"},
      ],
      tuijian:[
        {text:"余额宝"},
        {text:"大牌捡宝"},
        {text:"淘公仔"},
        {text:"浏览器"},
        {text:"淘宝香港"},
        {text:"淘宝台湾"},
        {text:"淘宝全球"},
        {text:"淘宝东南亚"},
        {text:"闺蜜淘宝"},
        {text:"大众评审"},
        {text:"淘工作"},
        {text:"阿里巴巴认证"},
      ]
    }
  },
  computed:{
  },
  methods:{

  }
}
</script>

<style scoped>
.spinner2{
  width:600px;
  height:30px;
  background:black;
  margin-top: -16px;
}
ul{
  margin-left:-40px;
  list-style: none;
  background:#F5F5F5;
  z-index: 100;
}
.nav2{
  width:600px;
  height:30px;
}
.nav2 li{
  float: left;
}
ul a{
  display: block;
  text-decoration: none;
  width: 75px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #6C6C6C;
  background-color: #F5F5F5;
  font-size: 13px;
}
.drop-down2 a:hover{
  background: white;
  color:red;
}
.drop-down2{
  position: relative;
}

.drop-down-content2{
  padding: 0;
  display: none;
  position: absolute;
  left:40px;
  background:black;
}
.drop-down-content3{
  padding: 0;
  display: none;
  position: absolute;
  left:40px;
  width:320px;
  background: white;
}
.drop-down-content3 a{
  position: relative;
  top:-20px;
  left:190px;
}
.drop-down-content3 li{
  height:50px;
}
.drop-down2:hover .drop-down-content2{
  display: block;
}
.drop-down2:hover .drop-down-content3{
  display: block;
}
.drop-down-content2 a{
  background:white;
  width: 100px;
  height: 35px;
  text-align: left;
  text-indent: 10px;
}      
h3{
  font-size: 30px;
  clear: both;
}
.drop-down-content2 li:hover a{
  background-color:#F5F5F5;
}
.gang{
  width:15px;
  text-align: left;
  color:#E1DDDD;
  margin-top:5px;
}
span{
  font-size: 14px;
  position: relative;
  top:13px;
}
button{
  margin-top:13px;
  width:120px;
  border-radius: 2px;
  background:#FF4400;
  border-style: none;
  color: white;
  cursor: pointer;
}
#collect a{
  width:85px;
}
.classification a:hover{
  color: red;
}
#service a{
  width:80px;
}
.webNavigation{
  width:1200px;
  height:300px;
  margin-left: -1065px;
}
.navigation{
  width:1200px;
  height:300px;
  background: #F5F5F5;
  display: flex;
}
.navigation-left{
  width:300px;
  height:300px;
  border:0 2px 0 0 solid #E1DDDD;
  border:1px solid #F5F5F5;
}
.navigation-mid-left{
  width:300px;
  height:300px;
  border:0 2px 0 0 solid #E1DDDD;
  border:1px solid #F5F5F5;
}
.navigation-mid-right{
  width:300px;
  height:300px;
  border:0 2px 0 0 solid #E1DDDD;
  border:1px solid #F5F5F5;
}
.navigation-right{
  width:300px;
  height:300px;
  border:0 2px 0 0 solid #E1DDDD;
  border:1px solid #F5F5F5;
}
.navigation-up{
  width:300px;
  height:50px;
  background: white;
}
.theme{
  color: #FC4200;
  font-size: 18px;
}
.tese{
  color: #9FB838;
  font-size: 18px;
}
.ali{
  color: #D75696;
  font-size: 18px;
}
.tuijian{
  color: #2E9FDB;
  font-size: 18px;
}
.navigation-down{
  width:300px;
  height:250px;
  background: white;
}
.theme-button{
  margin: 5px 30px 0 5px;
  height:20px;
  width:40px;
  font-size: 12px;
  background: white;
  color: black;
}
.theme-button:hover{
  background: #FC4200;
}
.tese-button{
  background: white;
  height:20px;
  margin: 5px 30px 0 5px;
  width:60px;
  font-size: 12px;
  color: black;
}
.tese-button:hover{
  background: #9FB838;
}
.ali-button{
  background: white;
  height:20px;
  margin: 5px 30px 0 5px;
  width:60px;
  font-size: 12px;
  color: black;
}
.ali-button:hover{
  background: #D75696;
}
.tuijian-button{
  background:white;
  height:20px;
  margin: 5px 40px 0 5px;
  width:90px;
  font-size: 12px;
  color: black;
}
.tuijian-button:hover{
  background: #2E9FDB;
}
</style>

<template>
	<div>
		<div class="header-down-left">
        <p>主题市场</p>
      </div>
      <div class="header-down-right">
      <ul>
        <li ><a href="https://www.tmall.com/?spm=a21bo.2017.201859.1.5af911d9CmGi5X">天猫</a></li>
        <li ><a href="https://ju.taobao.com/?spm=a21bo.2017.201859.2.5af911d9CmGi5X">聚划算</a></li>
        <li ><a href="https://chaoshi.tmall.com/?spm=a21bo.2017.201859.3.5af911d9CmGi5X">天猫超市</a></li>
        <li >|</li>
        <li ><a href="https://qiang.taobao.com/?spm=a21bo.2017.201859.4.5af911d9CmGi5X">淘抢购</a></li>
        <li ><a href="https://3c.tmall.com/?spm=a21bo.2017.201859.5.5af911d9CmGi5X">电器城</a></li>
        <li ><a href="https://sf.taobao.com/?spm=a21bo.2017.201859.6.5af911d9CmGi5X">司法拍卖</a></li>
        <li ><a href="https://good.tmall.com/?spm=a21bo.2017.201859.7.5af911d9CmGi5X">淘宝心选</a></li>
        <li ><a href="https://www.taobao.com/markets/xt/znfp?spm=a21bo.2017.201859.8.5af911d9CmGi5X">兴农扶贫</a></li>
        <li>|</li>
        <li ><a href="https://www.fliggy.com/?spm=a21bo.2017.201859.9.5af911d9CmGi5X">飞猪旅行</a></li>
        <li ><a href="https://zhineng.tmall.com/">智能生活</a></li>
        <li ><a href="https://suning.tmall.com/?spm=a21bo.2017.201859.11.5af911d9CmGi5X">苏宁易购</a></li>
      </ul>
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
.header-down-left{
  width:200px;
  height:24px;
  text-align: center;
  background: #FF5000;
  margin-left:160px;
  overflow: hidden;
}
p{
  margin-top:3px;
}
.header-down-right{
  width:1000px;
  height:24px;
  margin-left:280px;
  margin-top: -40px;
}
.header-down-right ul{
  text-align: center;
}
.header-down-right li{
  display: inline-block;
  font-size: 17px;
  color: white;
  margin:0 5px;
}
.header-down-right a{
  color: white;
  text-decoration: none;
}
</style>
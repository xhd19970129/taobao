<template>
	<div>
		<img :src="img2" class="img3" align="absmiddle"><span>发现属于你的生活方式</span>
	</div>
</template>

<script>
	import img2 from '@/assets/11.png'
export default {
  data () {
    return {
    	img2:img2
    }
  }
}
</script>

<style scoped>
.img3{
  height:50px;
}
span{
  font-size: 13px;
  color:#999999;
}
</style>
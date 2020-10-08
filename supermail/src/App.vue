<template>
  <div id="app">
		<keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
		
				
		<ta-bar class="tabbottom">
				 
				<TaBarItem path="/home">
					<img slot="item-icon" src="./assets/img/tabar/homepage.svg" alt="">
					<img slot="item-icon1" src="./assets/img/tabar/homepage1.svg" alt="">
					<div slot="item-text">首页</div>
				</TaBarItem>
				
				<TaBarItem path="/classa">
					<img slot="item-icon" src="./assets/img/tabar/classification.svg" alt="">
					<img slot="item-icon1" src="./assets/img/tabar/classification1.svg" alt="">
					<div slot="item-text">分类</div>
				</TaBarItem>
				
				<TaBarItem path="/cart">
					<img slot="item-icon" src="./assets/img/tabar/goshopping.svg" alt="">
					<img slot="item-icon1" src="./assets/img/tabar/goshopping1.svg" alt="">
					<div slot="item-text">购物车</div>
				</TaBarItem >
				
				
				<TaBarItem path="/per">
					<img slot="item-icon" src="./assets/img/tabar/myicon.svg" alt="">
					<img slot="item-icon1" src="./assets/img/tabar/myicon1.svg" alt="">
					<div slot="item-text">我的</div>
				</TaBarItem>
				
		</ta-bar>
  </div>
</template>

<style scoped="scoped">
@import url("assets/css/base.css");

</style>
<script>
	import TaBar from './components/common/TaBar/TaBar.vue'
	import TaBarItem from './components/common/TaBar/TaBarItem.vue'
	
	export default{
		name:'App',
		components:{
			TaBar,
			TaBarItem
		}
	}
	
	
</script>

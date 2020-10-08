<template>
	<div>
		<!-- 购物车 -->
		<nav-bar class="top_navbar">
			<div slot="center">购物车({{cartlength}})</div>
			
		</nav-bar>
		<!-- 商品列表 -->
		<CartList></CartList>
		<!-- 底部工具栏 -->
		<CartButton></CartButton>
		
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import CartList from './cart/CartList.vue'
	import CartButton from './cart/CartButton.vue'
	
	export default{
		name:'carts',
		components:{
			NavBar,
			CartList,
			CartButton
			
		},
		computed:{
			cartlength(){
			
				return this.$store.state.cartList.length
			}
		}
	}
</script>

<style scoped>
	.top_navbar{
		background: #FF8198;
	}
</style>

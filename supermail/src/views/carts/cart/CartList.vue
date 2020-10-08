<template>
	<div class="carts">
		<scroll class="content">
			<cartslistitem v-for="(item,index) in cartList" :item="item" :key="index"></cartslistitem>
		</scroll>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import scroll from '../../../components/common/scroll/scroll.vue'
	import cartslistitem from './CartListItem.vue'
	
	export default{
		name:'CartList',
		computed:{
			...mapGetters(['cartList'])
		},
		components:{
			scroll,
			cartslistitem
		}
	}
</script>

<style scoped="scoped">
	.content{
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
	}
</style>

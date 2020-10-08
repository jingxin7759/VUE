
<template>
	<div class="goods">
		<GoodsListItem v-for="item in goods" :goodsitm="item">
		</GoodsListItem>
		
	</div>
</template>

<script>
	import GoodsListItem from './goodslistitem.vue'
	
	export default{
		name:'goodslist',
		components:{
			GoodsListItem
		},
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>

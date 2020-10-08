<template>
	<div v-if="Object.keys(detailinfo).length!==0" class="detailgoodsinfo">
		<div class="center">{{detailinfo.desc}}</div>
		<div class="goodsList">
			<img v-for="(item,index) in detailinfo.detailImage[0].list" :src="item" :key="index" @load="imgloag">
		</div>
	</div>
</template>

<script>
	export default{
		name:'deatilgoosinfo',
		props:{
			detailinfo:{
				type:null
			}
		},
		methods:{
			imgloag(){
				
				this.$emit('imgload')
			}
		}
	}
</script>

<style scoped="scoped">
	.goodsList img{
		
		width: 100%;
	}
</style>

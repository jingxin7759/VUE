<template>
	<div class="topimages">
		<Swiper>
			<SwiperItems class="top-items" v-for="item in topimages">
				
					<img :src="item" >
				
			</SwiperItems>
		</Swiper>
	</div>
</template>

<script>
	import Swiper from '../../../components/common/swiper/Swiper.vue'
	import SwiperItems from '../../../components/common/swiper/SwiperItem.vue'
	
	
	export default{
		name:'detailimageitem',
		components:{
			Swiper,
			SwiperItems
		},
		props:{
			topimages:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped="scoped">
	
	.top-items {
		
		height: 300px;
	}
</style>

<template>
	<div class="recommends">
		
		<div v-for="item in recommends" class="recomendsItem">
			<a :href="item.link">
				<img :src="item.image" alt="" @load="imageload">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Homerecommend',
		
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
				
			}
		},
		data(){
			return{
				isload:false
			}
		},
		methods:{
			imageload(){
				if(!this.isload){
					this.$emit('home_imageload')
					this.isload=true
				}
					
					
				
			}
		}
	}
</script>

<style>
	.recommends{
		display: flex;
		width: 100%;
		padding: 10px 0px 20px;
		border-bottom: 10px solid #F2F5F8;
	}
	.recomendsItem{
		font-size: 14px;
		flex: 1;
		text-align: center;
	}
	.recomendsItem img{
		width: 80px;
	}
</style>

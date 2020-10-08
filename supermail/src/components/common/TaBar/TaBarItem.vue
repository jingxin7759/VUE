<template>
	
		<div class="tab_bar_item" @click="clickPage">
			<div v-if="!isActive"><slot name="item-icon"></slot></div>
			<div v-else><slot name="item-icon1"></slot></div>
			<div :class="{active:isActive}"><slot name="item-text"></slot></div>
			
		</div>
	
	
</template>

<script>
	export default{
		name:'TaBarItem',
		props:{
			path:String
		},
		data(){
			return{
				
			}
		},
		
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)!==-1
			}
		},
		methods:{
			clickPage(){
				this.$router.replace(this.path)
			}
		}
		
	}
	
</script>

<style >
		
		
	 .tab_bar_item{
			flex: 1;
			text-align: center;
			height: 49px;
			font-size: 12px;
			
		}
		.tab_bar_item  img{
			height: 24px;
			width: 24px;
			vertical-align: middle;
			margin-top: 5px;
			margin-bottom: 2px;
		}
		.tab_bar_item .active{
			color: deeppink;
		}
		
</style>

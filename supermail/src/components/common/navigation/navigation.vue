<template>
	<div class="title">
		<div v-for="(item,index)
		 in title" class="title-item" 
		 :class="{active:index===cuerindex}"
		 @click="itemclinck(index)">
			<span>{{item}}</span>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'navigation',
	
		props:{
			title:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
					cuerindex:0
			}
		
		},
		methods:{
			itemclinck(index){
				this.cuerindex=index
				this.$emit('btn_returnindex',index)
			}
			
		}
		
		
		
	}
</script>

<style>
	.title{
		display: flex;
		background: #EEEEEE;
		text-align: center;
		width: 100%;
		font-size: 16px;
		height: 28px;
		line-height: 28px;
	}
	.title-item{
		flex: 1;
	}
	.active{
		color: pink;
	}
	.active span{
		border-bottom: 3px solid pink ;
	}
	
</style>

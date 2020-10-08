<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
	
</template>

<script>
	import BScorll from 'better-scroll'
	export default{
		name:'scroll',
		props:{
			probetype:{
				type:Number,
				default:0
			},
				
			pullupload:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				bscroll:null
				
			}
		},
		mounted(){
			this.bscroll= new BScorll(this.$refs.wrapper,{
				probeType:this.probetype,
				click:true,
				pullUpLoad:this.pullupload
			})
			this.bscroll.on('scroll',(p)=>{
				this.$emit('scroll',p)
			})
			this.bscroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
			})
		},
		
		
	}
</script>

<style scoped="scoped">
</style>

<template>
	<div class="toast" v-show="show">
		{{message}}
	</div>
</template>

<script>
	export default{
		name:'Toast',
		props:{
			message:{
				type:String
			},
			show:{
				type:Boolean
			}
		}
	}
</script>

<style scoped="scoped">
	.toast{
	position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		width: 200px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background: #000000;
		opacity: .6;
		color: white;
	}
</style>

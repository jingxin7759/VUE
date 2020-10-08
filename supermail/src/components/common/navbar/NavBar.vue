<template>
	<div class="navbar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.navbar{
	position: fixed;
	z-index: 10;
	left: 0;
	top: 0;
	right: 0;
	display: flex;
	text-align: center;
	line-height: 44px;
	}
	.left,.right{
		width: 60px;
	}
	.center{
		flex: 1;
		
		color: white;
		
	}
</style>

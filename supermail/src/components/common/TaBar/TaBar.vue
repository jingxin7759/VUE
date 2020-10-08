<template>

		<div id="tab_bar">
			<slot></slot>
			
		</div>
	
	
</template>

<script>
	export default{
		name:'Tabar'
	}
</script>

<style >
	
#tab_bar{
	display: flex;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9;
	background-color: #f6f6f6;
	box-shadow: 0px -1px 1px rgba(100,100,100,.1);
}
</style>

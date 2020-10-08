<template>
	<div v-if="Object.keys(goodslist).length!==0">
		<div class="goodslist-title">{{goodslist.title}}</div>
		<div class="goodslist-price">
			<span class="newprice">{{goodslist.newprice}}</span>
			<span class="olpprice">{{goodslist.oldprice}}</span>
			<span v-if="goodslist.discount" class="discount">{{goodslist.discount}}</span>
		</div>
		<div class="columns">
			<span class="columns1">{{goodslist.columns[0]}}</span>
			<span class="columns2">{{goodslist.columns[1]}}</span>
			<span class="columns3">{{goodslist.services[goodslist.services.length-1].name}}</span>
		</div>
		<div class="services">
			<span v-for="index in goodslist.services.length-1" :key="index">
				<div class="service-p">
					<img :src="goodslist.services[index-1].icon" alt="" class="services-img">
					<span class="services-name">{{goodslist.services[index-1].name}}</span>
				</div>
			
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'datebaseinfo',
		props:{
			goodslist:{
				type:null,
				default(){
					return []
				}
			}
		}
		
	}
</script>

<style scoped="scoped">
	.goodslist-title{
		display: flex;
		flex: 1;
		font-size: 16px;
		padding-top: 5px;
		padding-left: 5px;
		padding-right: 5px;
		font-weight: bold;
	}
	
	.goodslist-price{
		display: flex;
		padding-top: 5px;
	}
	.newprice{
		color: red;
		font-size: 20px;
		padding-left: 5px;
		font-weight: bold;
	}
	.olpprice{
		color: #A3A3A5;
		text-decoration: line-through;
		padding-top: 6px;
		padding-left: 2px;
	}
	.discount{
		background: red;
		color: white;
		font-weight: bold;
		font-size: 10px;
		border-radius: 5px;
		line-height: 24.4px;
		margin-left: 5px;
		margin-top: -3px;
	}
	.columns{
		display: flex;
		margin: 5px 10px;
		 word-break: break-all;
	}
	.columns1,.columns2,.columns3{
		flex: 1;
		font-size: 12px;
		margin: 0px 5px;
		color: #A3A3A5;
	}
	.columns1{
		text-align: left;
	}
	.columns2{
		text-align: center;
	}
	.columns3{
		text-align: right;
	}
	
	.service-p{
		display: inline-block;
		margin-left: 10px;
		margin-top: 5px;
	}
	.services-img{
		width: 10px;
	}
	.services-name{
		font-size: 10px;
	}
</style>

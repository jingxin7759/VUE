<template>
	<div class="goodsitm" @click="goodsitemclick">
		
		<img :src="showimages" @load="goodsitenimgload">
		
		<div>
			<div class="goodsitm_title">{{goodsitm.title}}</div>
			<div class="txt_goodsattribute">
				<span>{{goodsitm.price}}</span>
				<span>
					<img src="../../../assets/img/icon/sc.svg" class="icon_sc">
					{{goodsitm.cfav}}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	
	
	export default{
		name:'goodslistitem',
		props:{
			goodsitm:{
				type:null
			}
		},
		computed:{
			showimages(){
				return this.goodsitm.image || this.goodsitm.show.img
			}
		},
		methods:{
			goodsitenimgload(){
				if(this.$route.path.indexOf('/home')){
					this.$bus.$emit('goodsitenimgload')
					}else if(this.$route.path.indexOf('/detail')){
						this.$bus.$emit('detailgoodsitenimgload')
					}
				
			},
			goodsitemclick(){
				this.$router.push("/detail/"+this.goodsitm.iid)
			}
		}
	}
</script>

<style>
	.goodsitm{
		width: 48%;
		padding: 5px 5px 20px 5px;
		z-index: 1;
		position: relative;
	}
	.goodsitm img{
		width: 100%;
		
	}

	.goodsitm_title{
		background: transparent;
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}
	.txt_goodsattribute{
		text-align: center;
	}
	.txt_goodsattribute>span:nth-child(1){
		color: pink;
	}
	
	.goodsitm .icon_sc{
		width: 15px;
	}
</style>

<template>
	<div>
		<navbar class="stylenav">
			<div slot="left" class="left" @click="backHome"><img src="../../../assets/img/detail/backhome.svg"></div>
			<div slot="center" class="title">
				<div v-for="(item,index) in titles" class="title-item" 
				:class="{active: index===cuerindex}" @click="itemclick(index)">{{item}}
				</div>
			</div>
			<div slot="right" class="right"> </div>
		</navbar>
	</div>
</template>

<script>
	import navbar from '../../../components/common/navbar/NavBar.vue'
	export default{
		name:'navbardetail',
		components:{
			navbar
		},
		data(){
			return{
				titles:["商品","参数","评论","推荐"],
				cuerindex:0
			}
		},
		methods:{
			itemclick(index){
				this.cuerindex=index
				this.$emit('titleclick',index)
			},
			backHome(){
				this.$router.go(-1)
			}
		}
		
	}
</script>

<style scoped="scoped">

	.title{
		background:  #F2F5F8;
		color: #000000;
		display: flex;
		font-size: 14px;
		height: 40px;
		line-height: 40px;
		
	}
	.title-item{
		flex: 1;
	}
	.active{
		color: palevioletred;
	}
	.left,.right{
	background:#F2F5F8;
	height: 40px;
	}

	.left img{
		margin-top: 10px;
		width: 20px;
		
	}
</style>

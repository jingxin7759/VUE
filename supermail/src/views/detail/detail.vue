<template>
	<div id="detail">
		<!-- 顶部导航栏 -->
		<navbardetail @titleclick="titleclick" ref="navtop"></navbardetail>
		
		
		<scroll class="scroll-detail" ref="scroll" @scroll="goodsscroll" :probetype="3">
		
			<!-- 顶部轮播图 -->
			<detailimageitem :topimages="topimages"></detailimageitem>
		
			<!-- <div v-for="item in $store.state.cartList">{{item}}</div> -->
			
			<!-- 信息栏 -->
			<detailbaseinfo :goodslist="goodslist"></detailbaseinfo>
			
			<!-- 商品店铺 -->
			<detailshop :shop="shop"></detailshop>
			<!-- 商品详细信息 -->
			<detailgoodsinfo :detailinfo="detailinfo" @imgload="imgload" ref="refs"></detailgoodsinfo>
			<!-- 参数 -->
			<detailparaminfo :paramInfo="paramInfo" ref="parameter"></detailparaminfo>
			<!-- 评论 -->
			<detailcommentinfo :commentInfo="commentInfo" ref="comments"></detailcommentinfo>
			<!-- 推荐信息 -->
			<detailrecommended :goods="recoments" ref="recommended"></detailrecommended>
		</scroll>
		
	<DetailBottonBar @addCart="addToCart"></DetailBottonBar>
		
		<Toast :message="message" :show="show"></Toast>
	</div>
</template>

<script>
	import navbardetail from './childdetail/navbardetail.vue'
	import {getdetail,Goods,Shopping,GoodsParam,getdetailgoods} from '../../network/detail.js'
	import detailimageitem from './childdetail/detailimageitem.vue'
	import detailbaseinfo from './childdetail/datebaseinfo.vue'
	import detailshop from './childdetail/detailShop.vue'
  import scroll from '../../components/common/scroll/scroll.vue'
	import detailgoodsinfo from './childdetail/deatilgoosinfo.vue'
	import detailparaminfo from './childdetail/detailparaminfo.vue'
	import detailcommentinfo from './childdetail/DetailCommentInfo.vue'
	import detailrecommended from '../../components/content/goods/goodslist.vue'
	import DetailBottonBar from './childdetail/DetailBottonBar.vue'
	import Toast from '../../components/common/toast/Toast.vue'
	
	export default{
		name:'detail',
		data(){
			return{
				id:null,
				topimages:[],
				goodslist:[],
				shop:[],
				detailinfo:[],
				paramInfo:[],
				commentInfo:[],
				recoments:[],
				topy:[0,-1000,-2000,-3000],
				navindex:0,
				message:'',
				show:false
				}
			},
			created(){
				this.id=this.$route.params.iid
				getdetail(this.id).then(res=>{
					const date=res.data.result;
					//console.log(res)
					this.topimages=date.itemInfo.topImages
					
					this.goodslist=new Goods(date.itemInfo,date.columns,date.shopInfo.services)
					this.shop=new Shopping(date.shopInfo)
					this.detailinfo=date.detailInfo
					this.paramInfo=new GoodsParam(date.itemParams.info,date.itemParams.rule)
					if (date.rate.cRate !== 0) {
					  this.commentInfo = date.rate.list[0]
					} 
					this.$bus.$on('detailgoodsitenimgload',()=>{
						this.$refs.scroll && this.$refs.scroll.bscroll.refresh()
					})
						// 在资源加载完之后获取值
					this.$nextTick(()=>{
						this.topy=[]
						this.topy.push(0)
						this.topy.push(this.$refs.parameter.$el.offsetTop+40)
						this.topy.push(this.$refs.comments.$el.offsetTop+40)
						this.topy.push(this.$refs.recommended.$el.offsetTop+40)
						
					})
				})
				getdetailgoods().then(res=>{
					console.log(res)
					this.recoments=res.data.data.list
				})
			},
			components:{
				navbardetail,
				detailimageitem,
				detailbaseinfo,
				detailshop,
				scroll,
				detailgoodsinfo,
				detailparaminfo,
				detailcommentinfo,
				detailrecommended,
				DetailBottonBar,
				Toast
			},
			methods:{
				imgload(){
					
					this.$refs.scroll.bscroll.refresh()
					this.topy=[]
					this.topy.push(0)
					this.topy.push(this.$refs.parameter.$el.offsetTop)
					this.topy.push(this.$refs.comments.$el.offsetTop)
					this.topy.push(this.$refs.recommended.$el.offsetTop)
					
				},
				// 传入index，获取相应高度
				titleclick(index){
					
					this.$refs.scroll.bscroll.scrollTo(0,-this.topy[index],500)
				},
				//监听滚动区域值
				goodsscroll(p){
					let length=this.topy.length;
					let positiony=-p.y;
					for (let i=0;i<length;i++) {
						
						// if(positiony>this.topy[i]&&positiony<this.topy[i+1]){
						// 	console.log(i)
						// }
						if(this.navindex!==i&&((i<length-1&&positiony>this.topy[i]&&positiony<this.topy[i+1])||(i===length-1&&positiony>this.topy[i]))){
							this.navindex=i
							
							this.$refs.navtop.cuerindex=this.navindex
							
						}
						
					}
				},
				addToCart(){
					
					//保存商品信息
					const product={};
					product.iid=this.id;
					product.image=this.topimages[0];
					product.title=this.goodslist.title;
					product.desc=this.goodslist.desc;
					product.price=this.goodslist.realprice;
					

					//将商品添加到购物车
					
					//this.$store.commit('addToCart',product)
					this.$store.dispatch('addCart',product).then(res=>{
						this.show=true
						this.message=res
						setTimeout(()=>{
							this.show=false
							this.message=''
						},1000)
						
					})
					
				}
			},
			updated(){
				
			}
			
	}
</script>

<style scoped="scoped">
	#detail{
		position: relative;
		height: 100vh;
		z-index: 22;
		background-color: white;
	}
	.scroll-detail{
		position: absolute;
		top: 40px;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
	}
</style>

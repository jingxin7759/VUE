<template>
	<div id="home">
		
		<!-- 标题 -->
		<nav-bar class="hometop">
				<div slot="left" class="left"></div>
				<div slot="center" class="center">购物街</div>
				<div slot="right" class="right"></div>
		</nav-bar>
		<navigation :title="['流行','新款','精选']" 
		@btn_returnindex="btn_returnindex" 
		ref="backtopot" class="topnative" v-show="istabfixed">
		</navigation>
		
		
		<scroll class="home_hegit" ref='scroll' :probetype="3" @scroll="backtopdispaly"
		 :pullupload="true" @pullingUp="loadmore">
			
				<!-- 轮播图 -->
			<Swiper class="swipertop">
				<SwiperItems v-for="item in banners">
					<a :href="item.link">
						<img :src="item.image" >
					</a>
				</SwiperItems>
			</Swiper>
			
			<!-- 推荐商品 -->
			<Homerecommend :recommends="recommends" @home_imageload="home_imageload"></Homerecommend>
			
			<!-- 排行榜 热点 -->
			<featureview></featureview>
			
			<!-- 导航分类 -->
			<navigation :title="['流行','新款','精选']" 
			class="stactiy" 
			@btn_returnindex="btn_returnindex" 
			ref="backtopot">
			</navigation>
			
			<goodslist :goods="goods[currentType].list"></goodslist>
		</scroll>
	
		<!-- 回到顶部 -->
		
		<backtop class="backtopicon" @click.native='backtop_icon()' v-show="isshowbacktop"></backtop>
	</div>
	
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import {getHomeMultidata,getHomeGoods} from '../../network/home.js'
	import Swiper from '../../components/common/swiper/Swiper.vue'
	import SwiperItems from '../../components/common/swiper/SwiperItem.vue'
	import Homerecommend from './childhome/Homerecommend.vue'
	import featureview from './childhome/featureview.vue'
	import navigation from '../../components/common/navigation/navigation.vue'
	import goodslist from '../../components/content/goods/goodslist.vue'
	import scroll from '../../components/common/scroll/scroll.vue'
	import backtop from '../../components/content/home/backtop/backtop.vue'
	
	export default{
		name:'home',
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				// 分类
				currentType:'pop',
				//回到顶部
				isshowbacktop:false,
				//吸顶值
				topbackoffsettop:0,
				istabfixed:false,
				saveY:0
			}
		},
		components:{
			NavBar,
			Swiper,
			SwiperItems,
			Homerecommend,
			featureview,
			navigation,
			goodslist,
			scroll,
			backtop
		},
	
		created(){
			// 请求
			this.getHomeMultidata()
			
			// 请求首页数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
			
			
			this.$bus.$on('goodsitenimgload',()=>{
				this.$refs.scroll && this.$refs.scroll.bscroll.refresh()
			})
		},
		mounted(){
			
			
		},
		methods:{
			/* 
					事件
			 */
			btn_returnindex(index){
				switch(index){
					case 0:
					this.currentType='pop'
					break
					case 1:
					this.currentType='new'
					break
					case 2:
					this.currentType='sell'
					break
				}
			},
			backtop_icon(){
				
				this.$refs.scroll.bscroll.scrollTo(0,0)
			},
			backtopdispaly(p){
				this.isshowbacktop=-(p.y)>1000
				this.istabfixed=-(p.y)>this.topbackoffsettop
			},
			loadmore(){
				this.getHomeGoods(this.currentType)
			},
			home_imageload(){
				this.topbackoffsettop=this.$refs.backtopot.$el.offsetTop
				
			},
			/* 
					网络请求
			 */
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					
					this.banners=res.data.data.banner.list;
					this.recommends=res.data.data.recommend.list;
				})
			},
			getHomeGoods(type){
				const page=this.goods[type].page+1
				getHomeGoods(type,page).then(res=>{
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page+=1
					this.$refs.scroll.bscroll.finishPullUp()
				})
			}
		}
			
	}
</script>

<style scoped="scoped">
	.swipertop{
		padding-top: 44px;
	}
	.topnative{
		position: relative;
		top: 44px;
		z-index: 9;
	}
	
	.home_hegit{
		position: absolute;
		top: 0;
		bottom: 30px;
		left: 0;
		right: 0;
	overflow: hidden;
	}
	.backtopicon{
		position: absolute;
		bottom:50px ;
		right: 20px;
	}
	.left,.center,.right{
		height: 44px;
		background-color: #FF1493;
	}
</style>

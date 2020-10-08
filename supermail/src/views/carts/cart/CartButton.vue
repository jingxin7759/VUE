<template>
	<div class="cart_button">
		<div class="button_left" @click="checkall">
			<CartCheckButton class="checked_button" :isChecked="checkAll"></CartCheckButton>
			<span>全选</span>
		</div>
		<div class="button_conter">
			合计：￥{{sumPrice}}
		</div>
		<div class="go_price">
			去计算：{{goprice}}
		</div>
	</div>
</template>

<script>
	import CartCheckButton from './CartCheckButton.vue'
	export default{
		name:'CartButton',
		components:{
			CartCheckButton
		},
		methods:{
			checkall() {
			  //取全选按钮相反的值
			  let checkFlag = !this.checkAll;
				//foreach将所有选中状态变成checkflag
			  this.$store.state.cartList.forEach(item => (item.checked = checkFlag));
			}
		},
		computed:{
			sumPrice(){
				return this.$store.state.cartList.filter(item=>{
					return item.checked
				}).reduce((price,item)=>{
					return price+item.price*item.count
				},0)
			},
			goprice(){
				return this.$store.state.cartList.filter(item=>item.checked).length
			},
			checkAll() {
			  if(this.$store.state.cartList.length==0){
					return false
				}else{
					return this.$store.state.cartList.every(item=>item.checked==true)
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.cart_button{
		position: absolute;
		display: flex;
		bottom: 49px;
		left: 0;
		right: 0;
		height: 40px;
		line-height: 40px;
		background: #EEEEEE;
	}
	.button_left{
		display: flex;
	}
	.checked_button{
		flex:1;
		width: 40px;
		height: 40px;
		}
	.button_conter{
		margin-left: 50px;
		font-size: 14px;
		flex:1;
		}
	.go_price{
		flex:1;
		background: #FF6699;
		text-align: center;
		line-height: 40px;
	}
</style>

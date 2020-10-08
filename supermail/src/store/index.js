import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations:{
		addCounter (state,payload) {
		  payload.count++
		},
		addToCart (state,payload) {
		  state.cartList.push(payload)
		}
	},
  actions:{
		
		addCart (context,payload) {
		  return new Promise((resolve,reject)=>{
				let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
						
				if (oldProduct) {
				  context.commit('addCounter',oldProduct)
					resolve("商品加一")
				} else {
					payload.checked = true;
				  payload.count = 1
				  context.commit('addToCart',payload)
					resolve("已加入购物车")
				}
			})
		}
	},
  getters:{
		cartLength (state) {
		  return state.cartList.length
		},
		cartList (state) {
		  return state.cartList
		}
	}
})

export default store
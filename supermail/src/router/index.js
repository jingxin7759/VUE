import Vue from 'vue'
import VueRouter from 'vue-router'

const	Home1=()=>import("../views/home/home.vue")
const	carts=()=>import("../views/carts/cart.vue")
const	classo=()=>import("../views/classo/classa.vue")
const	per=()=>import("../views/per/per.vue")
const detail=()=>import("../views/detail/detail.vue")

Vue.use(VueRouter)

  const routes = [
 
  {
  	path:'',
  	redirect:'/home'
  },
  {
  	path:'/home',
  	component:Home1
  },
  {
  	path:'/classa',
  	component:classo
  },
  {
  	path:'/cart',
  	component:carts
  },
  {
  	path:'/per',
  	component:per
  },
	{
		path:'/detail/:iid',
		component:detail
	}
]

const router = new VueRouter({
  routes
})

export default router

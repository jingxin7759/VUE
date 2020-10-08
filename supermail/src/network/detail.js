import {request} from "./requset.js"

export function getdetail(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}

export function getdetailgoods(){
	return request({
		url:'/recommend'
	})
}

//详情页商品基本信息
export class Goods{
	constructor(itemInfo,columns,services) {
	    this.title=itemInfo.title
			this.desc=itemInfo.desc
			this.newprice=itemInfo.price
			this.oldprice=itemInfo.oldPrice
			this.discount=itemInfo.discountDesc
			this.columns=columns
			this.services=services
			this.realprice=itemInfo.lowNowPrice
			
	}
}

//详情页商品店铺信息
export class Shopping{
	constructor(shopInfo) {
	    this.logo=shopInfo.shopLogo
			this.name=shopInfo.name
			this.fans=shopInfo.cFans
			this.cSells=shopInfo.cSells
			this.score=shopInfo.score
			this.goodscount=shopInfo.cGoods
	}
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
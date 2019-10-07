import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sells = shopInfo.cSells;
    this.goods = shopInfo.cGoods;
    this.score = shopInfo.score;

  }
}
export class Param {
  constructor(info,rule){
    this.image=info.images ? info.images[0] : '';
    this.infos=info.set;
    this.sizes=rule.tables;
  }
}

export  class Comment {
  constructor(rate){
    this.avatar=rate.list[0].user.avatar;
    this.userName=rate.list[0].user.uname;
    this.content=rate.list[0].content;
    this.time=rate.list[0].created;
    this.style=rate.list[0].style;
    this.images=rate.list[0].images;
  }
}
export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit('addCounter',oldProduct)
        resolve('当前商品数量加1')
      } else {
        payload.count = 1;
        context.commit('addCart',payload)
        resolve('添加新的商品')
      }
    })
}}
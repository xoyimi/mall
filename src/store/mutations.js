export default {
  addCounter(state, payload) {
    payload.count++
  },
  addCart(state, payload) {
    payload.isChecked = true;//顺序不能颠倒
    state.cartList.push(payload);

  }
}
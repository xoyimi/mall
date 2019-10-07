<template>
  <div class="cart-bottom">
    <div class="check-button">
      <tick @click.native="buttonClick"
            class="tick"
            :is-checked="isSelectAll"
            ref="tick"/>
      <span>&nbsp;全选</span>
    </div>

    <div class="price">
      <span>合计:￥{{totalPrice}}</span>
    </div>
    <div class="calculate " @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import Tick from "./Tick";
  import {mapGetters} from "vuex"

  export default {
    name: "CartBottom",
    components: {
      Tick,
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return this.cartList.filter(item => item.isChecked).reduce((preValue, item) => preValue + item.price * item.count, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.isChecked).reduce((preValue, item) => preValue + item.count, 0)
      },
      isSelectAll() {
        if (this.cartList.length === 0) return false
        //filter方法
        // return !(this.cartList.filter(item =>!item.isChecked).length)
        //find方法
        // return !(this.cartList.find(item => !item.isChecked))
        //遍历方法
        for (let item of this.cartList) {
          if (!item.isChecked) {
            return false
          }
        }
        return true

      }
    },
    methods: {
      buttonClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.isChecked = false)
        } else
          this.cartList.forEach(item => item.isChecked = true)
      },
      calcClick(){
        if (!this.isSelectAll)
        this.$toast.show('请选择要购买的商品')
      }
    }

  }
</script>

<style scoped>
  .cart-bottom {
    position: relative;
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #eeeeee;
    font-size: 13px;
  }

  .check-button {
    display: flex;
    width: 44px;
    justify-content: center;
    align-items: center;
    margin: 0 5px 0 8px;
  }

  .check-button .tick {
    width: 14px;
    height: 14px;
  }

  .price {
    flex: 1;
    text-align: center;
  }

  .calculate {
    padding: 0 10px;
    background-color: #f13e3a;
    color: #fff;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

</style>
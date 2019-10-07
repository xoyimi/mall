<template>
  <div class="cart-list-item">
    <div class="item-tick">
      <tick @tickClick="checkClick" :is-checked="product.isChecked"/>
    </div>
    <div class="item-image">
      <img :src="product.image">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Tick from './Tick'
  export default {
    name: "CartListItem",
    components:{
      Tick,
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      checkClick(){
        this.product.isChecked=!this.product.isChecked;
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }
.item-tick{
  padding-right: 8px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .item-image {
  }

  .item-image img {
    width: 80px;
    height: 100px;
    vertical-align: middle;
    border-radius: 5px;
    overflow: hidden;
  }

  .item-info {
    position: relative;
    overflow: hidden;
  }

  .item-title, .item-desc {
    padding-left: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-title{
  color: #333;
  }
  .item-desc{
    padding-top: 10px;
    font-size: 13px;
  }
  .info-bottom{
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }
  .item-price{
    color: orangered;
    padding-left: 8px;
  }
</style>
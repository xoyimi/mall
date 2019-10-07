<template>
  <div class="detail-bottom-bar">
    <div class="customer-service">
      <div class="pic1"></div>
      <div>客服</div>
    </div>
    <div class="shop">
      <div class="pic2"></div>
      <div>店铺</div>
    </div>
    <div class="collect" @click="collectClick" >
      <div class="pic3" :class="{pic4:isCollected}"></div>
      <div>收藏</div>
    </div>
    <div class="add-to-cart" @click="addToCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data() {
      return {
        isCollected: false
    }
    },
    methods: {
      collectClick() {
        this.isCollected=!this.isCollected;
      },
      addToCart(){
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    height: 49px;
    bottom: 0;
    text-align: center;
    background-color: #fff;
    z-index: 9;
  }

  .customer-service {
    flex: 1;
    font-size: 13px;
    padding-top: 5px;
  }

  .shop {
    flex: 1;
    font-size: 13px;
    padding-top: 5px;

  }

  .collect {
    flex: 1;
    font-size: 13px;
    padding-top: 5px;


  }

  .add-to-cart {
    flex: 2;
    line-height: 49px;
    background-color: #ffe817;
    color: #333;
  }


  .buy {
    flex: 2;
    line-height: 49px;
    background-color: #f69;
    color: #fff;
  }

  .pic1 {
    display: block;
    height: 22px;
    width: 22px;
    margin: 0 auto 3px;
    background: 0 -53px/100% url(~assets/img/detail/detail_bottom.png) no-repeat;
  }

  .pic2 {
    display: block;
    height: 22px;
    width: 22px;
    margin: 0 auto 3px;
    background: 0 -100px/100% url(~assets/img/detail/detail_bottom.png) no-repeat;
  }

  .pic3 {
    display: block;
    height: 22px;
    width: 22px;
    margin: 0 auto 3px;
    background: 0 -1px/100% url(~assets/img/detail/detail_bottom.png) no-repeat;
  }
  .pic4 {
    display: block;
    height: 22px;
    width: 22px;
    margin: 0 auto 3px;
    background: 0 -28px/100% url(~assets/img/detail/detail_bottom.png) no-repeat;
  }
</style>
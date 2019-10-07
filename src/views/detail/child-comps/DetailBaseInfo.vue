<template>
  <div v-if="Object.keys(goods).length !==0" class="goods-info">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="now-price">{{goods.newPrice}}</span>
      <span v-if="goods.oldPrice" class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="sell-info">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="service-info">
      <div class="service-info-item" v-for="index in goods.services.length-1" >
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .title {
    padding: 10px 8px;
  }

  .now-price {
    color: var(--color-high-text);
    font-size: 22px;
    padding: 0 8px;
  }

  .old-price {
    color: #999999;
    text-decoration: line-through;
  }

  .discount {
    position: relative;
    background: var(--color-high-text);
    color: #ffffff;
    top: -4px;
    left: 15px;
    padding: 2px 3px;
    border-radius: 9px;
  }

  .sell-info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 8px;
    line-height: 25px;
    color: #999999;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .service-info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
    padding: 8px;
    line-height: 30px;
    border-bottom: 3px solid rgba(100, 100, 100, .1);
  }

  .service-info-item {

  }

  .service-info-item img {
    height: 14px;
    vertical-align: text-top;
  }
</style>
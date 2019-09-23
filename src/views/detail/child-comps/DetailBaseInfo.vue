<template>
  <div v-if="Object.keys(goods).length !==0" class="goods-info">
    <div class="title">{{goods.title}}</div>
    <span class="now-price">{{goods.newPrice}}</span>
    <span class="old-price">{{goods.oldPrice}}</span>
    <span class="discount">{{goods.discount}}</span>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      },
      data() {
        return {}
      },
      methods: {}
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
</style>
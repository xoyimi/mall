<template>
  <div v-if="Object.keys(shop).length !==0" class="detail-shop-info">
    <span class="shop-logo">
      <img :src="shop.logo" alt="">
    </span>
    <span class="shop-name">{{shop.name}}</span>
    <div class="shop-other-info">
      <div class="shop-sell-info">
        <div>
          <div class="fs-18">{{shop.sells | filterNum}}</div>
          <div>总销量</div>
        </div>
        <div>
          <div class="fs-18">{{shop.goods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <table class="shop-score-info">
        <tr v-for="index in shop.score.length" class="shop-score-info-item">
          <td>{{shop.score[index-1].name}}</td>
          <td :class="{better:shop.score[index-1].isBetter}">{{shop.score[index-1].score}}</td>
          <td :class="{better:shop.score[index-1].isBetter}"><span>{{shop.score[index-1].isBetter ? '高':'低'}}</span>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      filterNum(num) {
        if (num < 10000) return num;
        return (num / 10000).toFixed(1) + '万';
      }
    }
  }
</script>

<style scoped>
  .detail-shop-info {
    padding: 15px 8px;
  }

  .shop-logo {
    display: inline-block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: #999999 solid 1px;
    overflow: hidden;
    vertical-align: middle;
  }

  .shop-logo img {
    height: 50px;
  }

  .shop-name {
    padding-left: 10px;
  }

  .shop-other-info {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    align-items: center;
    color: #333;
    font-size: 13px;
  }

  .shop-sell-info {
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    text-align: center;
    border-right: 1px solid #ccc;
  }

  .shop-sell-info div {
    padding: 9px 0;
  }

  .shop-score-info {
    font-weight: normal;
  }

  .shop-score-info-item {
    line-height: 20px;
    text-align: left;
  }

  .shop-score-info-item td {
    font-weight: 400;
    padding-right: 18px;
  }

  .shop-score-info-item td:nth-last-child(-n+2) {
    color: #5ea732;
  }

  .better {
    color: #f13e3a !important;

  }
  .fs-18{
    font-size: 18px;
  }
</style>
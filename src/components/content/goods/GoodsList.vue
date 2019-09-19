<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :goods-list-item="item" :key="item.index" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
};
</script>

<style>

</style>
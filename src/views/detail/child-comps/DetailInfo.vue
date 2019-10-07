<template>
  <div v-if="Object.keys(detailInfo).length !==0" class="detail-info">
    <div class="top-line"></div>
    <p>{{detailInfo.desc}}</p>
    <div class="bottom-line">
      <div class="bottom-line-item"></div>
    </div>
    <div v-for="total in detailInfo.detailImage">
      <p>{{total.key}}</p>
      <p>{{total.desc}}</p>
      <div v-for="item in total.list">
        <img :src="item" alt="" @load="imgLoaded">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoaded() {
        this.$emit('imgLoaded')
      },
    },

  }
</script>

<style scoped>
  .detail-info {
    padding: 0 8px;
    bor-bottom: 2px solid rgba(100,100,100,.1);
  }

  img {
    width: 100%;
  }

  .top-line {
    position: relative;
    left: 0;
    top: -5px;
    height: 2px;
    width: 90px;
    background-color: #333;
  }

  .top-line::before {
    content: '';
    position: absolute;
    height: 5px;
    background: #333;
    width: 5px;
    top: -5px;
  }

  .bottom-line {
    position: relative;
    bottom: -5px;
    height: 2px;
    margin-bottom: 10px;
  }
  .bottom-line-item {
    position: absolute;
    right: 0;
    bottom: 0px;
    height: 2px;
    width: 90px;
    background-color: #333;
  }

  .bottom-line-item::before {
    content: '';
    position: absolute;
    height: 5px;
    background: #333;
    width: 5px;
    top: -4px;
  }
</style>
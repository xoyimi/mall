<template>
  <div v-if="Object.keys(goodsListItem).length !==0" class="good-list-item" @click="goodItemClick">
    <img v-lazy="showImg" @load="imgLoad"/>
    <div class="good-list-item-info">
      <p>{{goodsListItem.title}}</p>
      <span class="price">{{goodsListItem.price}}</span>
      <span class="favorite">{{goodsListItem.cfav}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      goodsListItem: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      showImg() {
        return this.goodsListItem.image || this.goodsListItem.show.img
      }
    },
    methods: {
      imgLoad() {

        this.$bus.$emit('itemImgLoad')
        // if (this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('homeItemImgLoad')
        // }else if (this.$route.path.indexOf('/detail')){
        //   this.$bus.$emit('detailItemImgLoad')
        // }
      },
      goodItemClick() {
        this.$router.push('/detail/' + this.goodsListItem.iid)
      }
    }
  };
</script>

<style scope>
  .good-list-item {
    width: 48%;
    position: relative;
    padding-bottom: 40px;
  }

  .good-list-item img {
    width: 100%;
    border-radius: 5px;
    position: relative;
  }

  .good-list-item-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    padding-top: 5px;
    overflow: hidden;
  }

  .good-list-item-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .good-list-item-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .good-list-item-info .favorite {
    position: relative;
  }

  .good-list-item-info .favorite::before {
    content: '';
    position: absolute;
    left: -15px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/favorite.svg") 0/14px no-repeat;
  }
</style>
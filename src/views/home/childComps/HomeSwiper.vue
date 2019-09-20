<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" @load="homeSwiperLoaded"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper";

  export default {
    props: {
      banners: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        isHomeSwiperLoaded: false
      }
    },
    methods: {
      homeSwiperLoaded() {
        if (!this.isHomeSwiperLoaded) {
          this.$emit('homeSwiperLoaded');
          this.isHomeSwiperLoaded = true
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  };
</script>

<style>
</style>

<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/nav-bar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommeds";
import { getHomeMultidata } from "network/home";
import { log } from "util";
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.recommends);
    });
  }
};
</script>

<style>
.home-nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
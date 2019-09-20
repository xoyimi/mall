<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick" ref="tabControlCopy"
                 v-show="isShowTabControlCopy"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scrollPosition="scrollPosition"
            :pull-up-load="true"
            @pullingUp="getMoreGoodsData">
      <home-swiper :banners="banners" @homeSwiperLoaded="homeSwiperLoaded"/>
      <home-recommend :recommends="recommends"/>
      <home-feature/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"/>
      <goods-list class="goods-list" :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  /* home */
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommeds";
  import HomeFeature from "./childComps/HomeFeature";

  /* common */
  import NavBar from "components/common/nav-bar/NavBar";
  import TabControl from "components/content/tab-control/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/back-top/BackTop";

  import {getHomeMultidata, getHomeGoodsData} from "network/home";
  import {debounce} from "common/utils";

  export default {
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isShowTabControlCopy: false,
      };
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata();
      //2.请求商品数据
      this.getHomeGoodsData("pop");
      this.getHomeGoodsData("new");
      this.getHomeGoodsData("sell");
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      //3.监听item中图片加载完成 //this.$refs最好在mounted里调用
      this.$bus.$on('itemImgLoad', () => {
        refresh()
      })
    },

    methods: {

      //事件监听相关
      tabClick(index) {
        switch (index) {
          case 0: {
            this.currentType = 'pop';
            break
          }
          case 1: {
            this.currentType = 'new';
            break
          }
          case 2: {
            this.currentType = 'sell';
            break
          }
        }
        ;
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControlCopy.currentIndex = index
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0, 300)
      },
      scrollPosition(position) {
        this.isShowBackTop = -position.y > 1000;
        this.isShowTabControlCopy = -position.y > this.topOffsetTop
      },
      getMoreGoodsData() {
        this.getHomeGoodsData(this.currentType)
      },
      homeSwiperLoaded() {
        this.topOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      //网络请求相关
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoodsData(type) {
        const page = this.goods[type].page + 1;
        getHomeGoodsData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list); //...自动解构数组
          this.goods[type].page++;
          this.$refs.scroll.finishPullUp()
        });
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
      ,

    }
  };
</script>

<style scoped>

  #home {
    position: relative;
    /*vh: view height*/
    height: 100vh;
  }

  .home-nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
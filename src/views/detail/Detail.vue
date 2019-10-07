<template>
  <div v-if="Object.keys(detailInfo).length !==0" id="detail">
    <detail-nav-bar class="detail-nav-bar" @navBarClick="navBarClick" ref="navBar"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scrollPosition="scrollPosition">
      <detail-swiper :top-images="topImages"/>
      <detail-goods-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-info :detail-info="detailInfo" @imgLoaded="imgLoaded"/>
      <detail-param-info :detail-param-info="paramInfo" ref="detailParamInfo"/>
      <detail-comment :detail-comment="detailComment" ref="detailComment"/>
      <goods-list :goods="recommends" ref="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import DetailNavBar from "./child-comps/DetailNavBar";
  import DetailSwiper from "./child-comps/DetailSwiper";
  import DetailGoodsInfo from "./child-comps/DetailBaseInfo";
  import DetailShopInfo from "./child-comps/DetailShopInfo";
  import DetailInfo from "./child-comps/DetailInfo";
  import DetailParamInfo from "./child-comps/DetailParamInfo";
  import DetailComment from "./child-comps/DetailComment";
  import GoodsList from "components/content/goods/GoodsList";
  import DetailBottomBar from "./child-comps/DetailBottomBar";
  import {getDetail, Goods, Shop, Param, Comment, getRecommend} from "network/detail";
  import {itemListenerMixin, backTopMixin} from "common/mixin";
  import {mapActions} from 'vuex'
  import {debounce} from "../../common/utils";

  export default {
    name: "detail",
    mixins: [itemListenerMixin, backTopMixin],
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailGoodsInfo,
      DetailShopInfo,
      DetailInfo,
      DetailParamInfo,
      DetailComment,
      GoodsList,
      DetailBottomBar,
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        detailComment: {},
        recommends: [],
        itemImgListener: null,
        themeTopY: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid;
      //请求详细数据
      getDetail(this.iid).then(res => {
        //根据iid请求详情数据
        const data = res.result;
        //2.顶部图片数据
        this.topImages = data.itemInfo.topImages
        //3.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //4.获取店铺信息
        this.shop = new Shop(data.shopInfo)
        //5.获取商品详细信息
        this.detailInfo = data.detailInfo;
        //6.获取尺寸参数
        this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)
        //7.获取用户评价
        this.detailComment = new Comment(data.rate)
      });
      //3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      });
      //请求图片高度
      this.getThemeTopY = debounce(() => {
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.detailParamInfo.$el.offsetTop);
        this.themeTopY.push(this.$refs.detailComment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommends.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE)
      })
    },
    methods: {
      ...mapActions(['addCart']),
      imgLoaded() {
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      navBarClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 100)
      },
      //获取滚动位置
      scrollPosition(position) {
        this.isShowBackTop = -position.y > 1000;
        //获取y值
        const positionY = -position.y;
        //对比
        let length = this.themeTopY.length;
        for (let i = 0; i < length - 1; i++) {
          if ((this.currentIndex !== i) && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])) {
            this.currentIndex = i;
            this.$refs.navBar.currentIndex = i
          }
        }
      },
      addToCart() {
        //获取购物车需要展示的信息
        const product = {};
        product.iid = this.iid;
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;

        //将商品添加到购物车
        // this.$store.dispatch('addCart', product).then(res=>console.log(res));
        // this.addCart(product).then(res=>console.log(res))
        this.addCart(product).then(res=>{
          this.$toast.show(res,2000)
        })

      }
    },
    destroyed() {
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
  }

  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
    position: relative;
    background-color: #fff;
  }

</style>
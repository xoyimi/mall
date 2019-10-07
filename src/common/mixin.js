import {debounce} from "./utils";
import BackTop from "components/content/back-top/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  updated() {
    const imgRefresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImgListener = () => {
      imgRefresh()
    };
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  },
}

export const backTopMixin= {
  components:{
    BackTop,
  },
  data(){
    return{
      isShowBackTop: false,
    }
  },
  methods:{
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
  }
}
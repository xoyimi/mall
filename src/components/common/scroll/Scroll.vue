<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }


    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //1创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,// 非button按钮是否可以产生点击事件
        probeType: this.probeType,// 滚动监听开关
        pullUpLoad: this.pullUpLoad//是否监听上拉
      });
      //2创建滚动监听位置
      this.scroll.on('scroll', position => {
        this.$emit('scrollPosition', position)
      });
      //3监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }

    }

  }
</script>

<style scoped>

</style>
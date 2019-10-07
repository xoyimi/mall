<template>
  <div>
    <nav-bar>
      <div slot="left" class="goBack" @click="goBackClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="nav-bar">
        <div v-for="(item,index) in titles"
             class="nav-bar-item"
             :class="{active: index === currentIndex}"
             @click="navBarItemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/nav-bar/NavBar";

  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
      }

    },
    methods: {
      navBarItemClick(index) {
        this.currentIndex = index;
        this.$emit('navBarClick',index)
      },
      goBackClick(){
        this.$router.back()
      }
    },
    components: {
      NavBar,
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    font-size: 13px;
  }

  .nav-bar-item {
    flex: 1;
  }
  .active {
     color: var(--color-high-text);
    }
  .goBack img{
    margin:10px 0 0 10px;
  }
</style>
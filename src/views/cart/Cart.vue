<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list/>
    <cart-bottom/>
  </div>
</template>

<script>
  import NavBar from "components/common/nav-bar/NavBar";
  import CartList from "./child-comps/CartList";
  import CartBottom from "./child-comps/CartBottom";
  import {mapGetters} from "vuex"

  export default {
    name: 'cart',
    components: {
      NavBar,
      CartList,
      CartBottom
    },
    computed: {
      ...mapGetters(["cartLength"])
    },
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .cart {
    height: 100vh;
  }
</style>

<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/nav-bar/NavBar";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
.home-nav-bar{
 color:#fff;
 background-color: var(--color-tint)
}
</style>
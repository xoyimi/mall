<template>
  <div class="profile">
  <nav-bar class="nav-bar">
    <div slot="center">我的档案</div>
  </nav-bar>
     '
  </div>
</template>

<script>
import NavBar from "components/common/nav-bar/NavBar";
  export default {
    components:{
      NavBar
    }
}
</script>

<style scoped>

.nav-bar{
  color: #ffffff;
  background-color: var(--color-tint);
}
</style>
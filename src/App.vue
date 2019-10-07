<template>
  <div id="app">
<!-- exclude : 里面写组件的name属性值   -->
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "components/content/main-tab-bar/MainTabBar";

  export default {
    name: "App",
    components: {
      MainTabBar,
    }
  };
</script>
<style>
  @import "assets/css/base.css";
</style>

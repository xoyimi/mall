<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#FF5777">
      <img slot="tab-bar-item-icon" src="~assets/img/tab-bar/home.svg" />
      <img slot="tab-bar-item-icon-active" src="~assets/img/tab-bar/home_active.svg" />
      <div slot="tab-bar-item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#FF5777">
      <img slot="tab-bar-item-icon" src="~assets/img/tab-bar/category.svg" />
      <img slot="tab-bar-item-icon-active" src="~assets/img/tab-bar/category_active.svg" />
      <div slot="tab-bar-item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#FF5777">
      <img slot="tab-bar-item-icon" src="~assets/img/tab-bar/shopcart.svg" />
      <img slot="tab-bar-item-icon-active" src="~assets/img/tab-bar/shopcart_active.svg" />
      <div slot="tab-bar-item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#FF5777">
      <img slot="tab-bar-item-icon" src="~assets/img/tab-bar/profile.svg" />
      <img slot="tab-bar-item-icon-active" src="~assets/img/tab-bar/profile_active.svg" />
      <div slot="tab-bar-item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tab-bar/TabBar";
import TabBarItem from "components/common/tab-bar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>
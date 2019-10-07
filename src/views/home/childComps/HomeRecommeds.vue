
<template>
  <div id="home-recommeds">
    <div v-for="item in recommends" class="home-recommeds-item">
      <a :href="item.link">
        <img :src="item.image" @load="homeRecommedsLoaded"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
    homeRecommedsLoaded(){
      this.$emit('homeRecommedsLoaded');
    }
  }
};
</script>

<style>
#home-recommeds {
  display: flex;
  padding: 10px 0 10px;
  border-bottom: 8px solid #eee;
}
.home-recommeds-item {
  flex: 1;
  text-align: center;
}
#home-recommeds img {
  height: 70px;
  margin-bottom: 6px;
}
</style>
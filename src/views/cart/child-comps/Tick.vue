<template>
  <div class="tick" :class="{checked:isChecked}" @click="tickClick">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name: "Tick",
    props:{
      isChecked:{
        type:Boolean,
        default:true
      }
    },
    methods:{
      tickClick(){
        this.$emit('tickClick')
      }
    }
  }
</script>

<style scoped>
  .tick {
    border-radius: 50%;
    border:1px solid #999999;
  }
  img{
    display: block;
    height: 100%;
  }
  .checked{
    background-color: red;
    border-color: red;
  }
</style>
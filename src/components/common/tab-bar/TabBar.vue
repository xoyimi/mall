<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  background: #f2f2f2;
  position: fixed;
  left: 0;
  right: 0px;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>


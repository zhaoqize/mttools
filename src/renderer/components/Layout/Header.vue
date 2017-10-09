<template>
    <header class="head">
      <slot></slot>
    </header>
</template>
<script>
export default {
  name: 'head'
}
</script>

<style lang="less" scoped>
.head {
  position: fixed;
  height: 50px;
  z-index: 1024;
  box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
  width: 100%;
  z-index: 1024;
}
</style>

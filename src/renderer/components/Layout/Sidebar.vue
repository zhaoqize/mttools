<template>
    <aside class="sidebar">
        <slot></slot>
    </aside>
</template>
<script>
export default {
  name: 'sidebar'
}
</script>

<style lang="less" scoped>
.sidebar {
  position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    padding: 20px 10px;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    // height: calc(100% - 50px);
    z-index: 1023;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
}
</style>

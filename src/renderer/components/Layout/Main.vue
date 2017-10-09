<template>
    <div class="main">
       <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
          <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
  name: 'main'
}
</script>

<style lang="less" scoped>
.main {
  position: absolute;
  top: 50px;
  left:180px;
  right: 0;
  bottom: 0;
}
</style>


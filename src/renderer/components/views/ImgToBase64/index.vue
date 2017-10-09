<template>
    <div class="base64">
       <webview id="foo" src="http://tool.oschina.net/encrypt?type=4" autosize></webview>
   </div>
</template>
<script>
export default {
  name: 'base64'
}
</script>

<style lang="less" scoped>
.base64 {
  width: 100%;
  height: 100%;
}
#foo {
  height: 100%;
}
</style>


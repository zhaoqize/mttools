<template>
    <div class="online">
      <!--https://electron.atom.io/docs/api/webview-tag/-->
       <webview id="foo" src="http://tool.oschina.net" autosize></webview>
    </div>
</template>
<script>
export default {
  name: 'online',
  components: {
  }
}
</script>

<style lang="less" scoped>
.online {
  width: 100%;
  height: 100%;
}
#foo {
  height: 100%;
}
</style>


<template>
    <div class="codrformat">
      <!--https://electron.atom.io/docs/api/webview-tag/-->
       <webview id="foo" src="http://tool.oschina.net/codeformat/html" autosize></webview>
    </div>
</template>
<script>
export default {
  name: 'codrformat',
  components: {
  }
}
</script>

<style lang="less" scoped>
.codrformat {
  width: 100%;
  height: 100%;
}
#foo {
  height: 100%;
}
</style>


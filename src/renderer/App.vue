<template>
  <div id="app">
     <v-header></v-header>
      <v-siderbar>
        <v-menu></v-menu>
      </v-siderbar>
      <v-main></v-main>
  </div>
</template>

<script>
  import vHeader from './components/Layout/Header.vue'
  import vSiderbar from './components/Layout/Sidebar.vue'
  import vMain from './components/Layout/Main.vue'
  import vMenu from './components/Common/Menu.vue'

  export default {
    name: 'mttools',
    components: {
      vHeader,
      vSiderbar,
      vMain,
      vMenu
    },
    data () {
      return {
        show: true
      }
    },
    methods: {
    }
  }
</script>

<style>
  /* CSS */
</style>

<template>
  <div id="app">
    <vue-component />
  </div>
</template>
<style lang="css">
  #app {
    background-color: #56b983;
  }
</style>
<script>
import VueComponent from './components/VueComponent.vue'

export default {
  name: 'app',
  components: {
    'vue-component': VueComponent,
  },
}
</script>



<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style lang="css" scoped>
  div {
    background-color: #fff;
  }
</style>

<script>
  export default {
    name: 'vue-component',
    data() {
      return {
        msg: 'Built with Parcel'
      }
    }
  };
</script>
<template>
  <div id="app" ref="scrollBox">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        showBackToTop: false,
        componentScrollBar: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    min-height: 100vh;
  }
</style>

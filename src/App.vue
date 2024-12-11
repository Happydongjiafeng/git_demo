<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'App'
})
</script>

<style scoped lang="scss">
.app-container {
  width: 100vw;
  height: 100vh;
}
</style>
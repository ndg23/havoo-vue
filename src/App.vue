<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div
    id="apps"
    class="w-full antialiased bg-gray-100 text-gray-600 min-h-screen mx-auto constainer"
  >
    <RouterView />
  </div>
</template>

<style scoped></style>

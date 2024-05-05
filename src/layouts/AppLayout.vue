<template>
  <div class="flex-col min-h-screen">
    <TheNavbar />
    <slot />
  </div>
</template>
<script lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
export default {}
</script>
<style lang=""></style>

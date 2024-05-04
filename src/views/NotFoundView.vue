<template>
  <div class="flex items-center justify-center h-screen">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p class="text-lg text-gray-700 mb-8">The page you are looking for does not exist.</p>
      <router-link to="/" class="text-blue-500 hover:underline">Retour</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
/* Add styles for the 404 page */
</style>

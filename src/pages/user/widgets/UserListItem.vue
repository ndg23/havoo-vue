<template>
  <div>
    <div
      v-for="(talent, index) in talents"
      :key="index"
      class="flex flex-col md:flex-row items-center bg-white my-2 rounded-lg shadow-slg overflow-hidden"
    >
      <!-- Avatar -->
      <div class="bg-gray-200 h-44 w-full md:w-1/3 flex items-center justify-center">
        <img :src="talent.avatar" alt="Avatar" class="object-cover w-2/3 h-2/3 rounded-full" />
      </div>
      <!-- Talent Information -->
      <div class="p-6 flex flex-col justify-center w-full md:w-2/3">
        <h2 class="text-2xl font-semibold mb-2">{{ talent.name }}</h2>
        <p class="text-gray-600 mb-4">Compétences : {{ talent.skills }}</p>
        <!-- Additional Information -->
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span class="text-gray-500">Localisation : {{ talent.location }}</span>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4m16 0a8 8 0 100-16H4a8 8 0 000 16m16 0v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4m0 0a8 8 0 108 8h-4"
              />
            </svg>
            <span class="text-gray-500">Expérience : {{ talent.experience }}</span>
          </div>
        </div>
        <!-- Buttons can also be added here if needed -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const talents = ref([
  {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
    skills: 'JavaScript, Vue.js, HTML, CSS',
    location: 'Paris, France',
    experience: '5 ans'
  },
  {
    name: 'Jane Smith',
    avatar: 'https://via.placeholder.com/150',
    skills: 'Python, Django, Flask, SQL',
    location: 'New York, USA',
    experience: '3 ans'
  }
  // Add more talents as needed
])
</script>

<style scoped>
/* Add your scoped styles here */
</style>

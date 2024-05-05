<template>
  <div>
    <!-- Avatar -->
    <div class="bg-gray-200 h-44 w-full m-1 rounded md:w-1/3 flex items-center justify-center">
      <img :src="talents.avatar" alt="Avatar" class="object-cover w-2/3 h-2/3 rounded-full" />
    </div>
    <!-- Talents Information -->
    <div class="p-6 flex flex-col relative justify-center w-full md:w-2/3">
      <h2 class="text-2xl font-semibold mb-2">{{ talents.name }}</h2>
      <p class="text-gray-600 mb-4">{{ talents.skills }}</p>
      <!-- Additional Information -->
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2 text-gray-400"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#b1b4b3"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"
            />
            <circle cx="12" cy="9" r="2.5" fill="#b1b4b3" />
          </svg>

          <span class="text-gray-500">Localisation : {{ talents.location }}</span>
        </div>
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2 text-gray-400"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <rect width="18" height="15" x="3" y="6" stroke="#b1b4b3" rx="2" />
              <path
                fill="#b1b4b3"
                d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"
              />
              <path stroke="#b1b4b3" stroke-linecap="round" d="M7 3v3m10-3v3" />
              <rect width="4" height="2" x="7" y="12" fill="#b1b4b3" rx=".5" />
              <rect width="4" height="2" x="7" y="16" fill="#b1b4b3" rx=".5" />
              <rect width="4" height="2" x="13" y="12" fill="#b1b4b3" rx=".5" />
              <rect width="4" height="2" x="13" y="16" fill="#b1b4b3" rx=".5" />
            </g>
          </svg>

          <span class="text-gray-500">Expérience : {{ talents.experience }}</span>
        </div>
      </div>

      <div class="absolute bottom-0 gap-2 flex items-center right-2">
        <button class="text-red-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
            <path
              fill="#b1b4b3"
              d="m236.24 107.76l-80-80A6 6 0 0 0 146 32v42.2c-54.48 3.59-120.39 55-127.93 120.66a10 10 0 0 0 17.23 8C46.56 190.85 87 152.6 146 150.13V192a6 6 0 0 0 10.24 4.24l80-80a6 6 0 0 0 0-8.48M158 177.52V144a6 6 0 0 0-6-6c-27.73 0-54.76 7.25-80.32 21.55a193.38 193.38 0 0 0-40.81 30.65c4.7-26.56 20.16-52 44-72.27C98.47 97.94 127.29 86 152 86a6 6 0 0 0 6-6V46.49L223.51 112Z"
            />
          </svg>
        </button>
        <button class="text-red-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path
              fill="#b1b4b3"
              d="M12 20.043a.98.98 0 0 1-.7-.288L4.63 13.08a5.343 5.343 0 0 1 1.423-8.567A5.27 5.27 0 0 1 12 5.371a5.27 5.27 0 0 1 5.947-.858a5.343 5.343 0 0 1 1.423 8.567l-6.676 6.675a.98.98 0 0 1-.694.288M8.355 4.963a4 4 0 0 0-1.844.437a4.4 4.4 0 0 0-2.389 3.243a4.35 4.35 0 0 0 1.215 3.73l6.675 6.675l6.651-6.675a4.35 4.35 0 0 0 1.215-3.73A4.4 4.4 0 0 0 17.489 5.4a4.34 4.34 0 0 0-4.968.852a.744.744 0 0 1-1.042 0a4.47 4.47 0 0 0-3.124-1.289"
            />
          </svg>
        </button>
      </div>

      <!-- Buttons can also be added here if needed -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const talents = ref(
  {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
    skills: 'JavaScript, Vue.js, HTML, CSS',
    location: 'Paris, France',
    experience: '5 ans'
  }
  // {
  //   name: 'Jane Smith',
  //   avatar: 'https://via.placeholder.com/150',
  //   skills: 'Python, Django, Flask, SQL',
  //   location: 'New York, USA',
  //   experience: '3 ans'
  // }
  // Add more talentss as needed
)
</script>

<style scoped>
/* Add your scoped styles here */
</style>

<template>
  <div
    class="flex flex-col max-w-mds items-center container w-2/3 mx-auto justify-center h- bg-grasy-100"
  >
    <div class="w-40 h-40 bg-red-600 rounded-full border"></div>
    <div class="p- max-w-md bg-white rounded-lg w-full shadsow-md">
      <div class="flex flex-col justify-center text-center">
        <span class="text-lg text-grasy-400 font-bold text-base">Antoine Ndong</span>
        <span class="text-xs text-gray-400 font-bold text-base">Developpeur</span>
        <span class="text-xs text-gray-400 font-bold text-base">anto@gmail.com</span>
        <div class="flex items-center justify-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="#12e293"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="#12e293"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="#12e293"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="#b1b4b3"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex items-center mt-2 gap-3 justify-center">
        <button
          class="bg-white -500 text-blac px-4 py-2 font-semibold rounded-md border shaow-md hover:bg-blue-600 focus:outline-none w-full mb-2s"
        >
          Contacter
        </button>
        <button
          class="bg-red-600 text-white px-4 py-2 font-semibold rounded-md sshadow-mds hover:bg-red-600 focus:outline-none w-full"
        >
          Signaler
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 w-full md:grid-cols-3 gap-2 p-4">
      <div class="w-50 h-40 bg-blue-400 rounded-lg shadow-mds"></div>
      <div class="w-50 h-40 bg-blue-400 rounded-lg shadow-mds"></div>
      <div class="w-50 h-40 bg-blue-400 rounded-lg shadow-mds"></div>
      <div class="w-50 h-40 bg-blue-400 rounded-lg shadow-mds"></div>
      <div class="w-50 h-40 bg-blue-400 rounded-lg shadow-mds"></div>
      <div class="w-50 h-40 bg-blue-400 rounded-lg shadow-mds"></div>
      <div class="w-50 h-40 bg-blue-400 rounded-lg shadow-mds"></div>
      <div class="w-50 h-40 bg-blue-400 rounded-lg shadow-mds"></div>
      <div class="w-50 h-40 bg-blue-400 rounded-lg shadow-mds"></div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const state = reactive({
      userProfilePicture: '/path/to/profile-picture.jpg',
      userCards: []
    })

    onMounted(async () => {
      try {
        // Replace 'https://api.example.com/user/cards' with your actual API endpoint
        const response = await axios.get('https://api.example.com/user/cards')
        state.userCards = response.data.cards.slice(0, 8) // Load first 8 cards
      } catch (error) {
        console.error('Error fetching user cards:', error)
      }
    })

    return { ...state }
  }
}
</script>

<style scoped>
/* Style for the grid of cards */
.grid {
  display: grid;
}

/* Style for the cards */
.card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Aspect ratio for the photos */
.aspect-w-1 {
  width: 100%;
}

.aspect-h-1 {
  height: 0;
  padding-top: 100%;
}
</style>

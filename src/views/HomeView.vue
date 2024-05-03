<template>
  <div class="container mx-auto py-s12">
    <header
      class="fixsed bg-gray-100 inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadsow backdrop-blur-lg md:top-6 md:s-3xl lg:max-w-screen-lg"
    >
      <div class="px-4">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0">
            <a aria-current="page" class="flex font-bold text-xl items-center" href="/"> Havoo </a>
          </div>
          <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              aria-current="page"
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
              >How it works</a
            >
            <a
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
              >Pricing</a
            >
          </div>
          <div class="flex items-center justify-end gap-3">
            <a
              class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              href="/login"
              >Connexion</a
            >
            <a
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="/login"
              >Creer un compte</a
            >
          </div>
        </div>
      </div>
    </header>
    <!-- Menu de filtre -->
    <div class="flex justify-center mt-5 space-x-4 mb-8">
      <button
        v-for="(category, index) in categories"
        :key="index"
        @click="filterTalents(category)"
        :class="{
          'bg-blue-500 text-white': activeFilter === category,
          'bg-gray-200 text-gray-600': activeFilter !== category
        }"
        class="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {{ category }}
      </button>
    </div>

    <!-- Boucle sur la liste des talents -->
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div
        v-for="(talent, index) in talents"
        :key="index"
        class="w-3/5 slg:max-w-md w-full bg-white my-2 bordesr flex rounded-lg shadosw-lg overflow-hidden"
      >
        <!-- Avatar -->
        <div class="bg-gray-200 h-44 w-1/3 flex items-center justify-center">
          <img :src="talent.avatar" alt="Avatar" class="object-cover w-2/3 h-2/3 rounded -full" />
        </div>
        <!-- Talent Information -->
        <div class="p-6 flex flex-col justify-center">
          <h2 class="text-2xl font-semibold mb-2">{{ talent.name }}</h2>
          <p class="text-gray-600 mb-4">Compétences : {{ talent.skills }}</p>
          <!-- Additional Information or Buttons can be added here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// Données d'exemple des talents
const talents = ref([
  {
    name: 'Alice',
    skills: 'Développement web',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Bob',
    skills: 'Design graphique',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Charlie',
    skills: 'Marketing digital',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
  // Ajoutez d'autres talents si nécessaire
])

// Liste des catégories de filtre
const categories = ref(['Tous', 'Développement web', 'Design graphique', 'Marketing digital'])

// Catégorie de filtre active
const activeFilter = ref('Tous')

// Méthode pour filtrer les talents
const filterTalents = (category: string) => {
  activeFilter.value = category
}

// Méthode pour gérer le "like" d'un talent
const likeTalent = (index: number) => {
  // Implémentez la logique pour gérer le "like" ici
  console.log(`J'ai aimé le talent ${talents.value[index].name}`)
}

// Méthode pour obtenir les talents filtrés
const filteredTalents = ref(talents.value)

// Observer les changements de la catégorie de filtre et filtrer les talents en conséquence
watch(activeFilter, () => {
  if (activeFilter.value === 'Tous') {
    filteredTalents.value = talents.value
  } else {
    filteredTalents.value = talents.value.filter((talent) => talent.skills === activeFilter.value)
  }
})
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>

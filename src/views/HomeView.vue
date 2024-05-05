<template>
  <div class="s mx-auto h-screen py-s12">
    <!-- <header class="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <nav
        class="mx-auto flex max-w-6xl h-15 gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 pys-4"
      >
        <div class="relative flex items-center">
          <a class="text-xl lg font-bold text-black" href="/"> Havoo </a>
        </div>
        <ul class="hidden items-center justify-center gap-6 md :flex">
          <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
            <a href="#">Pricing</a>
          </li>
          <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
            <a href="#">Blog</a>
          </li>
          <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
            <a href="#">Docs</a>
          </li>
        </ul>
        <div class="flex-grow"></div>
        <div class="hidden my-1 items-center justify-center gap-6 md:flex">
          <a href="#" class="block mts-4 font-semibold lg:inline-block lg:mt-0 text-whsite mr-4">
            Se connecter
          </a>
          <a
            href="#"
            routerLink="signin"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Créer un compte
          </a>
        </div>
        <div class="relative flex items-center justify-center md:hidden">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-auto text-slate-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <header
      class="fixsed hidden bg-gray-100 rounded-full inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadsow backdrop-blur-lg md:top-6 md:s-3xl lg:max-w-screen-lg"
    >
      <div class="px-4 container px-4">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0">
            <a aria-current="page" class="flex font-bold text-2xl items-center" href="/"> Havoo </a>
          </div>
          <div class="hidden md:flex w-2/3 md:items-center md:justify-center md:gap-5">
            <div class="relative">
              <input
                type="text"
                class="p-2 pl-8 w-fsll rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                placeholder="Chercher..."
              />
              <svg
                class="w-4 h-4 absolute left-2.5 top-3.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
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
    </header> -->

    <!-- <div class="flex justify-center mt-5 space-x-4 mb-8">
      <div class="overflow-x-auto">
        <ul
          class="flex space-x-4 h-15 items-center justify-center bg-white gray-100 rounded-full px-3"
        >
          <li class="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="bg-grsay-100 roundsed-full p-1 w-1s0 h-s10"
              width="2em"
              height="2em"
              viewBox="0 0 128 128"
            >
              <path
                fill="#78a3ad"
                d="M125.52 109.7c-2.86-4.07-9.18-6.24-14.01-6.11c-1.97.05-3.78.58-5.15 1.77c-1.58-.34-3-.97-3.56-2.19c-.45-.95-.13-2.08.45-3.81c.59-1.75 1.26-3.74.57-5.86c-.87-2.66-3.75-5.85-12.8-5.7c-.98.01-1.78.82-1.76 1.81c.01.98.81 1.77 1.78 1.77h.03c5.25-.08 8.66 1.12 9.35 3.23c.32.99-.09 2.2-.56 3.6c-.63 1.85-1.4 4.15-.3 6.48c.99 2.1 2.87 3.21 4.91 3.84c-.74 4.12 4.04 8.41 7.21 10.28c3.42 2.01 8.1 3.27 11.88 1.75c4.86-1.93 4.55-7.15 1.96-10.86M90.93 97.13H14.26c-1.07 0-2.12.85-2.33 1.9l-4.4 21.55c-.21 1.04.48 1.9 1.55 1.9h87.03c1.06 0 1.76-.85 1.55-1.9l-4.4-21.55c-.22-1.05-1.26-1.9-2.33-1.9M46.21 84.49H31.24c-2.29 0-4.16 1.74-4.16 3.88v3.74h50.15v-3.74c0-2.13-1.88-3.88-4.17-3.88H58.1V77.8h39.86c3.13 0 5.7-2.57 5.7-5.71V11.24c0-3.14-2.57-5.71-5.7-5.71H6.35C3.21 5.53.64 8.1.64 11.24V72.1c0 3.14 2.57 5.71 5.71 5.71h39.86z"
              />
              <defs>
                <path
                  id="notoV1Laptop0"
                  d="M12.47 63.07c-2.4 0-4.35-1.96-4.35-4.36V18.12c0-2.4 1.95-4.36 4.35-4.36h79.36c2.39 0 4.35 1.96 4.35 4.36v40.59c0 2.4-1.96 4.36-4.35 4.36z"
                />
              </defs>
              <use fill="#006ca2" href="#notoV1Laptop0" />
              <clipPath id="notoV1Laptop1"><use href="#notoV1Laptop0" /></clipPath>
              <path
                fill="#fff"
                d="M50.73 11.35L32.85 68.11l-27.63-.28V11.92z"
                clip-path="url(#notoV1Laptop1)"
              />
              <path
                fill="#fff"
                d="M18.67 102.69h68.42c1.07 0 1.94.87 1.94 1.94c0 1.07-.87 1.94-1.94 1.94H18.67c-1.06 0-1.94-.87-1.94-1.94c0-1.08.88-1.94 1.94-1.94m70.28 13.23H16.82c-1.07 0-1.94-.87-1.94-1.94c0-1.07.87-1.94 1.94-1.94h72.14a1.94 1.94 0 0 1-.01 3.88"
              />
              <path
                fill="#006ca2"
                d="M91.64 18.3v40.22H12.66V18.3zm.2-4.54H12.47c-2.4 0-4.35 1.96-4.35 4.36v40.59c0 2.4 1.95 4.36 4.35 4.36h79.36c2.39 0 4.35-1.96 4.35-4.36V18.12c0-2.4-1.96-4.36-4.34-4.36"
              />
            </svg>

            <span class="text-xs text-base">Informatique</span>
          </li>
          <li class="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="#12e293"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span class="text-xs text-base">Services professionnels</span>
          </li>
          <li class="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="#12e293"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span class="text-xs text-base">Graphisme</span>
          </li>
          <li class="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="#12e293"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span class="text-xs text-base">Photographie</span>
          </li>
          <li class="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="#12e293"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span class="text-xs text-base">Enseignement</span>
          </li>
          <li class="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="#12e293"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span class="text-xs text-base">Électricité</span>
          </li>
          <li class="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="#12e293"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span class="text-xs text-base">Nettoyage et entretien</span>
          </li>
          <li class="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="#12e293"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span class="text-xs text-base">Réparation</span>
          </li>
          <li class="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="#12e293"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span class="text-xs text-base">Montage de meubles</span>
          </li>

          <li class="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="#12e293"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span class="text-xs text-base"
              >Installation d'accessoires et de dispositifs de sécurité</span
            >
          </li>
        </ul>
      </div>
    </div> -->
    <TheTalentMenu />
    <!-- Boucle sur la liste des talents -->
    <div class="flex flex-col items-center justify-center h-scsreen h-100 bg-gray-100">
      <UserListVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserListVue from '@/pages/user/widgets/UserList.vue'
import TheTalentMenu from '@/components/TheTalentMenu.vue'

import { ref, watch } from 'vue'

// Données d'exemple des talents
const talents = ref([
  {
    name: 'Alice',
    skills: 'Python, Django, Flask, SQL',
    location: 'New York, USA',
    liked: false,
    experience: '3 ans',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Bob',
    skills: 'Python, Django, Flask, SQL',
    location: 'New York, USA',
    liked: false,

    experience: '3 ans',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  }
  // {
  //   name: 'Charlie',
  //   experience: '5 ans',
  //   location: 'Dakar',
  //   liked: false,

  //   skills: 'Marketing digital et creation de compte',
  //   avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  // }
  // Ajoutez d'autres talents si nécessaire
])
const toggleLike = (index: any) => {
  talents.value[index].liked = !talents.value[index].liked
}
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

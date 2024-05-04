<template>
  <div>
    <header class="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
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
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>

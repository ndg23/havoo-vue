<template>
  <div>
    <div class="flex flex-col lg:flex-row gap-4 lg:w-2/3 container">
      <div class="lg:w-1/3">
        <div
          class="h-full rounded-lg shadow-sm p-3 m-4 bg-white dark:bg-gray-50 dark:text-gray-800"
        >
          <div class="flex-col justify-content-center items-center p-2 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              class="rounded-full mx-auto dark:bg-gray-500"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0"
              />
            </svg>
            <div>
              <h2 class="text-md font-semibold text-gray-500 text-base">
                {{ user.fullname }}
              </h2>
              <span class="flex items-center space-x-1"> </span>
            </div>
          </div>
          <div class="divide-y dark:divide-gray-300">
            <ul class="pt-2 pb-4 space-y-1 text-sm">
              <!-- <li class="dark:bg-gray-100 dark:text-gray-900">
            <a               
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-600">
                <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
              </svg>
              <span>Accueil</span>
            </a>
          </li> -->
              <li>
                <a href="." routerLink="." class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 fill-current dark:text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="6" r="4" fill="currentColor" />
                    <path
                      fill="currentColor"
                      d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
                    />
                  </svg>

                  <span>Moi</span>
                </a>
              </li>
              <li>
                <a
                  href="security"
                  routerLink="security"
                  class="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 fill-current dark:text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16 11H8a1 1 0 0 1-1-1V7a5 5 0 0 1 10 0v3a1 1 0 0 1-1 1M9 9h6V7a3 3 0 0 0-6 0Z"
                      opacity="0.5"
                    />
                    <rect width="16" height="13" x="4" y="9" fill="currentColor" rx="3" />
                  </svg>
                  <span>Sécurité</span>
                </a>
              </li>
              <li>
                <a
                  href="shops"
                  routerLink="shops"
                  class="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 fill-current dark:text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14.5 21.991V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491z"
                    />
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M5.732 12c-.89 0-1.679-.376-2.232-.967V14c0 3.771 0 5.657 1.172 6.828c.943.944 2.348 1.127 4.828 1.163h5c2.48-.036 3.885-.22 4.828-1.163C20.5 19.657 20.5 17.771 20.5 14v-2.966a3.06 3.06 0 0 1-5.275-1.789l-.073-.728a3.167 3.167 0 1 1-6.307.038l-.069.69A3.06 3.06 0 0 1 5.732 12m8.768 6.5v3.491h-5V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75"
                      clip-rule="evenodd"
                      opacity="0.5"
                    />
                    <path fill="currentColor" d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z" />
                    <path
                      fill="currentColor"
                      d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.889-1.548C6.057 2 6.51 2 7.418 2h2.083l-.725 7.245a3.06 3.06 0 1 1-6.044-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z"
                      opacity="0.7"
                    />
                  </svg>

                  <span>Mes structures</span>
                </a>
              </li>
              <li>
                <a
                  href="settings"
                  routerLink="settings"
                  class="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 fill-current dark:text-gray-600"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361c0 .558-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605c.47.807.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361c0-.558.306-1.064.782-1.36c.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605c-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083"
                      clip-rule="evenodd"
                      opacity="0.5"
                    />
                    <path
                      fill="currentColor"
                      d="M15.523 12c0 1.657-1.354 3-3.023 3c-1.67 0-3.023-1.343-3.023-3S10.83 9 12.5 9c1.67 0 3.023 1.343 3.023 3"
                    />
                  </svg>

                  <span>Parametres</span>
                </a>
              </li>

              <!-- <li>
            <a               
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-600">
                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
              </svg>
              <span>Wishlist</span>
            </a>
          </li> -->
            </ul>
            <ul class="pt-4 pb-2 space-y-1 text-sm">
              <!-- <li>
            <a               
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-gray-600">
                <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
              </svg>
              <span>Settings</span>
            </a>
          </li> -->
              <li>
                <a href="#" class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-5 h-5 fill-current dark:text-gray-600"
                  >
                    <path
                      d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"
                    ></path>
                    <rect width="32" height="64" x="256" y="232"></rect>
                  </svg>
                  <span>Se déconnecter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lg:flex-1">
        <div class="p-4">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
defineProps({})
const user = reactive({
  fullname: ''
})
</script>
<style lang=""></style>

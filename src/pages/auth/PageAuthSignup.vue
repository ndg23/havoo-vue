<template>
  <div>
    <section class="antialiased bg-gray-100 text-gray-600 min-h-screen p-8">
      <div class="h-full">
        <!-- Pay component -->
        <div>
          <!-- Card background -->
          <div class="relative hidden px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
            <img
              class="rounded-t shadow-lg"
              src="https://preview.cruip.com/mosaic/images/pay-bg.jpg"
              width="460"
              height="180"
              alt="Pay background"
            />
          </div>
          <!-- Card body -->
          <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto">
            <div class="bg-white px-8 pb-6 rounded-b shasdow-lg">
              <!-- Card header -->
              <div class="text-center hidden mb-6">
                <div class="mb-2">
                  <img
                    class="-mt-8 inline-flex rounded-full"
                    src="https://preview.cruip.com/mosaic/images/user-64-13.jpg"
                    width="64"
                    height="64"
                    alt="User"
                  />
                </div>
                <h1 class="text-xl leading-snug text-gray-800 font-semibold mb-2">
                  Front-End Learning 🔥
                </h1>
                <div class="text-sm">
                  Learn how to create real web apps using HTML & CSS. Code templates included.
                </div>
              </div>

              <!-- Card form -->
              <div class="p-4">
                <div class="space-y-4">
                  <!-- Card Number -->
                  <div>
                    <label class="block text-sm font-medium mb-1" for="card-nr"
                      >Card Number <span class="text-red-500">*</span></label
                    >
                    <input
                      id="card-nr"
                      class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      type="text"
                      placeholder="1234 1234 1234 1234"
                    />
                  </div>
                  <!-- Expiry and CVC -->
                  <div class="flex space-x-4">
                    <div class="flex-1">
                      <label class="block text-sm font-medium mb-1" for="card-expiry"
                        >Expiry Date <span class="text-red-500">*</span></label
                      >
                      <input
                        id="card-expiry"
                        class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="text"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div class="flex-1">
                      <label class="block text-sm font-medium mb-1" for="card-cvc"
                        >CVC <span class="text-red-500">*</span></label
                      >
                      <input
                        id="card-cvc"
                        class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="text"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                  <!-- Name on Card -->
                  <div>
                    <label class="block text-sm font-medium mb-1" for="card-name"
                      >Name on Card <span class="text-red-500">*</span></label
                    >
                    <input
                      id="card-name"
                      class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      type="text"
                      placeholder="John Doe"
                    />
                  </div>
                  <!-- Email -->
                  <div>
                    <label class="block text-sm font-medium mb-1" for="card-email"
                      >Email <span class="text-red-500">*</span></label
                    >
                    <input
                      id="card-email"
                      class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      type="email"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <!-- Form footer -->
                <div class="mt-6">
                  <div class="mb-4">
                    <button
                      class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2"
                    >
                      Pay $253.00
                    </button>
                  </div>
                  <div class="text-xs text-gray-500 italic text-center">
                    You'll be charged $253, including $48 for VAT in Italy
                  </div>
                </div>
              </div>

              <!-- PayPal form -->
              <div class="hidden">
                <div>
                  <div class="mb-4">
                    <button
                      class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2"
                    >
                      Pay with PayPal - $253.00
                    </button>
                  </div>
                  <div class="text-xs text-gray-500 italic text-center">
                    You'll be charged $253, including $48 for VAT in Italy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- More components -->
    <div
      class="fixed top-0 left-0 hidden right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
      x-data="{ open: true }"
    >
      <div class="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
        <div>
          👉
          <a
            class="hover:underline ml-1"
            href="https://cruip.com/mosaic/?ref=codepen-cruip-customers-table"
            target="_blank"
            >More components on Cruip.com</a
          >
        </div>
        <button class="text-gray-500 hover:text-gray-400 ml-5" @click="open = false">
          <span class="sr-only">Close</span>
          <svg class="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
            <path
              d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>

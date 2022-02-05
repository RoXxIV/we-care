<template>
  <header class="flex justify-between justify-items-center p-8 bg-white mb-20">
    <div class="text-2xl font-bold rotate-12">
      <router-link to="/"
        ><span class="text-violet-700">We</span>Care</router-link
      >
    </div>
    <nav>
      <button
        @click="$router.push('/devis-en-ligne')"
        class="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-full"
      >
        Obtenir un devis
      </button>
    </nav>
  </header>
</template>

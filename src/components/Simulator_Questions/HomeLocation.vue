<script setup lang="ts"></script>

<template>
  <section
    class="text-center bg-white py-12 md:w-3/4 md:mx-auto md:rounded-lg lg:w-1/2 px-4 lg:p-12"
  >
    <h1 class="text-2xl md:text-4xl font-bold">
      <span class="text-violet-700">Ville</span> de mon logement
    </h1>
    <div class="flex justify-between items-center px-2 py-4 bg-gray-100 my-6">
      <input
        class="bg-gray-100 w-5/6"
        type="text"
        placeholder="Ex: Rennes / 35000"
      /><span
        ><font-awesome-icon
          class="block mx-auto text-violet-700 text-2xl cursor-pointer"
          :icon="['fas', 'map-marked-alt']"
      /></span>
    </div>
    <button
      class="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-full"
    >
      Continuer
    </button>
  </section>
</template>
<style>
input:focus {
  outline: none;
}
</style>

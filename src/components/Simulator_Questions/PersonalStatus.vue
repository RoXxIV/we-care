<script setup lang="ts"></script>

<template>
  <section class="w-1/2 mx-auto text-center bg-white px-32 py-24 rounded-lg">
    <h1 class="text-4xl font-bold">
      Ma situation <span class="text-violet-700">personnelle</span>
    </h1>
    <ul class="flex justify-around py-14">
      <li
        class="w-1/3 p-10 border-2 border-neutral-500 rounded-lg cursor-pointer text-lg font-bold hover:border-violet-700"
      >
        <font-awesome-icon
          class="block mx-auto text-7xl mb-3"
          :icon="['fas', 'key']"
        />
        Maison
      </li>
      <li
        class="w-1/3 p-10 border-2 border-neutral-500 rounded-lg cursor-pointer text-lg font-bold hover:border-violet-700"
      >
        <font-awesome-icon
          class="block mx-auto text-7xl mb-3"
          :icon="['fas', 'stopwatch']"
        />
        Igloo
      </li>
    </ul>
    <button
      class="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-full"
    >
      Continuer
    </button>
  </section>
</template>

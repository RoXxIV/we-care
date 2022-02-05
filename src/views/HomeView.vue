<script setup lang="ts"></script>

<template>
  <section
    class="container mx-auto flex flex-col lg:flex-row justify-around items-center"
  >
    <div class="text-white">
      <h1 class="text-4xl">
        Votre assurances <br />
        à portée de click
      </h1>
      <ul class="mt-10 mb-10 text-lg">
        <li>
          <font-awesome-icon
            class="text-teal-300"
            :icon="['fas', 'check-circle']"
          />
          10% mobile et flexible
        </li>
        <li>
          <font-awesome-icon
            class="text-teal-300"
            :icon="['fas', 'check-circle']"
          />
          100% prise de tête
        </li>
        <li>
          <font-awesome-icon
            class="text-teal-300"
            :icon="['fas', 'check-circle']"
          />
          au juste prix ?
        </li>
      </ul>
      <button
        @click="$router.push('/devis-en-ligne')"
        class="bg-teal-300 hover:bg-teal-400 text-neutral-800 font-bold py-2 px-4 rounded-full"
      >
        Obtenir un devis gratuitement
      </button>
    </div>
    <div>
      <img
        src="@/assets/images/windows.png"
        alt="illustration d'une fenetre"
        class="max-w-xs mx-auto"
      />
      <ul
        class="flex flex-col items-center md:flex-row justify-around text-center"
      >
        <li class="bg-white p-9 rounded-lg m-2 font-bold w-52">
          <p class="mb-3">
            <span class="mr-1 text-violet-700">1.6</span>
            <font-awesome-icon :icon="['fas', 'apple-alt']" />
            Roxx store
          </p>
          <font-awesome-icon class="text-amber-200" :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
        </li>
        <li class="bg-white p-9 rounded-lg m-2 font-bold w-52">
          <p class="mb-3">
            <span class="mr-1 text-violet-700">4.2</span>
            <font-awesome-icon :icon="['fas', 'air-freshener']" />
            DonTrust
          </p>
          <font-awesome-icon class="text-amber-200" :icon="['fas', 'star']" />
          <font-awesome-icon
            class="text-amber-200"
            :icon="['fas', 'star-half-alt']"
          />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
        </li>
      </ul>
    </div>
  </section>
</template>

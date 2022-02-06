<script setup lang="ts">
import { useSimulatorStore } from "@/stores/simulatoreStore";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useSimulatorStore();
const isHouseSelected = ref(false);
const isIglooSelected = ref(false);
/**
 * Active ou desactive le <button> si un choix est actif
 */
const isDisabled = computed(() => {
  if (isHouseSelected.value || isIglooSelected.value) {
    return true;
  }
  return false;
});
/**
 * Update le store en fonction du choix utilisateur
 * puis redirige vers la suite du simulateur
 */
function handleChoice(): void {
  if (isHouseSelected.value) {
    store.addHabitationType("maison");
  } else if (isIglooSelected.value) {
    store.addHabitationType("igloo");
  }
  console.log(store.$state);
  router.push("/devis-en-ligne/2/situation-personnelle");
}

console.log(isDisabled.value);
</script>

<template>
  <section
    class="text-center bg-white py-12 md:w-3/4 md:mx-auto md:rounded-lg lg:w-1/2 lg:p-12"
  >
    <h1 class="text-2xl md:text-4xl font-bold">
      Mon type de
      <span class="text-violet-700">logement</span>
    </h1>
    <ul class="pt-6 flex flex-col text-2xl md:flex-row md:my-12 md:mx-auto">
      <li
        @click="
          isHouseSelected = !isHouseSelected;
          if (isIglooSelected) isIglooSelected = false;
        "
        class="w-3/4 mx-auto p-16 my-2 border-2 border-neutral-500 rounded-lg cursor-pointer font-bold md:w-1/3"
        :class="{ 'border-violet-700': isHouseSelected }"
      >
        <font-awesome-icon
          class="block mx-auto text-violet-700 text-4xl"
          :icon="['fas', 'home']"
        />Maison
      </li>
      <li
        @click="
          isIglooSelected = !isIglooSelected;
          if (isHouseSelected) isHouseSelected = false;
        "
        class="w-3/4 mx-auto p-16 my-2 border-2 border-neutral-500 rounded-lg cursor-pointer font-bold md:w-1/3"
        :class="{ 'border-violet-700': isIglooSelected }"
      >
        <font-awesome-icon
          class="block mx-auto text-violet-700 text-4xl"
          :icon="['fas', 'igloo']"
        />Igloo
      </li>
    </ul>
    <button
      @click="handleChoice()"
      class="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-full"
      :disabled="!isDisabled"
    >
      Continuer
    </button>
  </section>
</template>

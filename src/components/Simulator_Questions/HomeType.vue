<script setup lang="ts">
import { useSimulatorStore } from "@/stores/simulatoreStore";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useSimulatorStore();
const isPrimarySelected = ref(false);
const isSecondarySelected = ref(false);
/**
 * Active ou desactive le <button> si un choix est actif
 */
const isDisabled = computed(() => {
  if (isPrimarySelected.value || isSecondarySelected.value) {
    return true;
  }
  return false;
});
/**
 * Update le store en fonction du choix utilisateur
 * puis redirige vers la suite du simulateur
 */
function handleChoice(): void {
  if (isPrimarySelected.value) {
    store.addHomeType("résidence principale");
  } else if (isSecondarySelected.value) {
    store.addHomeType("résidence secondaire");
  }
  console.log(store.$state);
  router.push("/devis-en-ligne/4/ville");
}

console.log(isDisabled.value);
</script>

<template>
  <section
    class="text-center bg-white py-12 md:w-3/4 md:mx-auto md:rounded-lg lg:w-1/2 lg:p-12"
  >
    <h1 class="text-2xl md:text-4xl font-bold">
      Mon utilisation du
      <span class="text-violet-700">logement</span>
    </h1>
    <ul class="pt-6 flex flex-col text-2xl md:flex-row md:my-12 md:mx-auto">
      <li
        @click="
          isPrimarySelected = !isPrimarySelected;
          if (isSecondarySelected) isSecondarySelected = false;
        "
        class="w-3/4 mx-auto p-16 my-2 border-2 border-neutral-500 rounded-lg cursor-pointer font-bold md:w-1/3"
        :class="{ 'border-violet-700': isPrimarySelected }"
      >
        <font-awesome-icon
          class="block mx-auto text-violet-700 text-4xl"
          :icon="['fas', 'house-user']"
        />Résidence principale
      </li>
      <li
        @click="
          isSecondarySelected = !isSecondarySelected;
          if (isPrimarySelected) isPrimarySelected = false;
        "
        class="w-3/4 mx-auto p-16 my-2 border-2 border-neutral-500 rounded-lg cursor-pointer font-bold md:w-1/3"
        :class="{ 'border-violet-700': isSecondarySelected }"
      >
        <font-awesome-icon
          class="block mx-auto text-violet-700 text-4xl"
          :icon="['fas', 'hot-tub']"
        />Résidence secondaire
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

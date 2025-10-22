<template>
  <div>
    <div class="cyber-tile-big bg-white">
      <img src="../assets/img/cyberpunk-2077-1080p-gaming-nxgxdqn7djd7ukct.webp" />
      <h2 class="cyber-h">
        <slot></slot>
      </h2>

      <ul class="mt-2 text-3xl list-disc list-inside marker:text-black pl-4">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="m-1">
          {{ item }}
        </li>
      </ul>
    </div>

    <button
      @click="addItem"
      class="w-full cyber-glitch-2 cyber-button bg-red fg-white">
      Nova dica
      <span class="glitchtext">nova Dica</span>
      <span class="tag">R25</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hintsArray = ref(0);
const items = ref([]);

const addItem = () => {
  hintsArray.value += 1;
  items.value.push(`Dica ${hintsArray.value}`);
};
</script>

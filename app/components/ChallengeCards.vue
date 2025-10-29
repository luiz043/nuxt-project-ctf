<template>
  <Card
    v-for="(challenge, index) in props.data"
    :key="challenge._id"
    class="w-full h-full">
    <template #content>
      <div class="flex flex-col min-h-[200px] h-full">
        <div class="flex-1">
          <div
            class="text-3xl"
            :class="challenge.taskDone ? 'line-through' : ''">
            <span
              v-if="index == 19"
              class="truncate block">
              {{ scrambledTexts[index] }}
            </span>
            <span v-else> {{ index + 1 }} &gt; {{ challenge.description }} </span>
          </div>
        </div>

        <div class="mt-auto pt-4 border-t border-gray-300">
          <div
            v-if="!challenge?.clue?.description"
            class="flex flex-col gap-1">
            <span class="text-xl text-gray-600">Dica:</span>
            <div class="overflow-hidden">
              <span
                class="scramble-text text-green-400 bg-black px-2 py-1 text-xl font-mono block truncate">
                {{ scrambledTexts[index] }}
              </span>
            </div>
          </div>

          <!-- Dica liberada -->
          <div
            v-else
            class="flex flex-col gap-1">
            <span class="text-xl text-gray-600">Dica:</span>
            <span class="text-green-400 bg-black px-2 py-1 text-xl font-mono block">
              {{ challenge.clue.description }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Challenges {
  clue: {
    description: string;
    degradationRate: number;
    releaseDate: string;
  };
  _id: string;
  title: string;
  description: string;
  code: number;
  category: string;
  firstBlood: boolean;
  taskDone: boolean;
  secret: boolean;
}

const props = defineProps<{
  data: Challenges[];
}>();

const scrambledTexts = ref<string[]>([]);

// Caracteres para embaralhar
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

// Função para embaralhar um texto
const scrambleText = (text: string) => {
  return text
    .split("")
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");
};

// Inicializa os textos embaralhados apenas para desafios sem descrição
const initScrambledTexts = () => {
  scrambledTexts.value = props.data.map((challenge) =>
    challenge?.clue?.description == null ?
      scrambleText("████████████████████████████") // Placeholder visual
    : ""
  );
};

let interval: NodeJS.Timeout;

onMounted(() => {
  // Inicializa os textos
  initScrambledTexts();

  // Atualiza os textos a cada 150ms apenas para desafios sem descrição
  interval = setInterval(() => {
    scrambledTexts.value = props.data.map((challenge) =>
      challenge?.clue?.description == null ? scrambleText("████████████████████████████") : ""
    );
  }, 150);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<style scoped>
.scramble-text {
  letter-spacing: 0.05em;
  text-shadow:
    -1px 0 rgba(255, 0, 0, 0.6),
    1px 0 rgba(0, 255, 0, 0.6);
}

@keyframes glitch-shift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-1px, 1px);
    text-shadow:
      -2px 0 rgba(255, 0, 0, 0.7),
      2px 0 rgba(0, 255, 0, 0.7);
  }
  50% {
    transform: translate(1px, -1px);
    text-shadow:
      1px 0 rgba(255, 0, 0, 0.5),
      -1px 0 rgba(0, 255, 0, 0.5);
  }
  75% {
    transform: translate(-1px, -1px);
    text-shadow:
      -1px 0 rgba(255, 0, 0, 0.8),
      1px 0 rgba(0, 255, 0, 0.8);
  }
}
</style>

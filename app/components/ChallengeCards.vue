<template>
  <Card
    v-for="(challenge, index) in props.data"
    class="w-full">
    <template #content>
      <div class="col-span-1 text-3xl items-center justify-between">
        <span>
          <span>
            <span :class="challenge.taskDone ? 'line-through' : ''">
              {{ index }} > {{ challenge.title }}
            </span>
            <div class="text-xl text-gray-500">
              {{ challenge.description }}
            </div>

            <!-- Mostra scramble-text se description ainda não existir -->
            <div
              class="mt-2"
              v-if="!challenge?.clue?.description">
              <span class="text-2xl text-gray-600">Dica: </span>
              <span class="scramble-text text-green-400 w-full bg-black text-2xl font-mono">
                {{ scrambledTexts[index] }}
              </span>
            </div>

            <div
              class="mt-2"
              v-else>
              <div class="text-2xl text-gray-600">Dica:</div>
              <span class="text-green-400 scramble-text w-full bg-black text-2xl font-mono">
                {{ challenge?.clue?.description }}
              </span>
            </div>
          </span>
        </span>
      </div>
    </template>
  </Card>
</template>
<script setup lang="ts">
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
  scrambledTexts.value = props.data.map(
    (challenge) =>
      challenge.clue.description == null ?
        scrambleText("****************************") // Pode usar um placeholder
      : "" // vazio para desafios já liberados
  );
};

let interval: NodeJS.Timeout;

onMounted(() => {
  // Inicializa os textos
  initScrambledTexts();

  // Atualiza os textos a cada 180ms apenas para desafios sem descrição
  interval = setInterval(() => {
    scrambledTexts.value = props.data.map((challenge) =>
      challenge?.clue?.description == null ? scrambleText("*****************************") : ""
    );
  }, 150);
});
</script>

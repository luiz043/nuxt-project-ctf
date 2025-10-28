<template>
  <div class="grid grid-cols-5 gap-2">
    <!-- <ButtonCard class="col-span-5 mb-15">
      <slot> <h1>Dicas</h1></slot>
    </ButtonCard> -->
    <div class="col-span-5 flex flex-col">
      <div class="cyber-banner cyber-glitch-1 w-full">PONTOS DE EVENTO</div>
      <NormalCard class="mt-5 flex flex-wrap items-center justify-around">
        <template #content>
          <div>
            <div
              class="flex p-2 border-2 2xl:w-7xl sm:w-4xl mt-3 text-white bg-black justify-between items-center">
              <div class="text-4xl">
                First Blood Points
                <span class="animate-code">_</span>
              </div>

              <span class="text-4xl"> +100 Pontos</span>
            </div>
            <div class="text-2xl text-gray-600">
              Ganha ao ser a primeira equipe a finalizar um desafio avançado
            </div>
          </div>
          <div>
            <div class="flex border-2 sm:w-4xl 2xl:w-7xl p-2 mt-3 justify-between items-center">
              <span class="text-4xl"> Start Points </span>
              <span class="text-4xl"> +50 Pontos</span>
            </div>
            <div class="text-2xl text-gray-600">
              Ganha ao ser a primeira equipe a finalizar um desafio geral
            </div>
          </div>
        </template>
      </NormalCard>
    </div>
    <div class="cyber-banner cyber-glitch-1 w-full bg-purple mt-5 fg-white col-span-5">
      DESAFIOS
    </div>
    <div class="col-span-5">
      <div class="grid grid-cols-3 gap-2">
        <Card
          v-for="(challenge, index) in challenges"
          class="w-full">
          <template #content>
            <div class="col-span-1 text-3xl items-center justify-between">
              <span>
                {{ index }} >
                {{ challenge.name }}
                <span>
                  {{ index }} > {{ challenge.name }}

                  <!-- Mostra scramble-text se description ainda não existir -->
                  <div
                    class="mt-2"
                    v-if="!challenge.clue?.description">
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
                      {{ challenge.clue.description }}
                    </span>
                  </div>
                </span>
              </span>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const { $socket } = useNuxtApp();

// const useX = reactive({
//   data: {},
// });

// onMounted(() => {
//   $socket.on("message", (data) => {
//     console.log("📩 Mensagem recebida:", data);
//     useX.data = data;
//   });

//   $socket.emit("join-room", { roomId: "16" });
// });

const challenges = reactive([
  {
    "clue": {
      "description": "Sei lá cardth dth",
      "degradationRate": 0.2,
      "releaseDate": "2025-10-27T19:03:05.644Z",
    },
    "_id": "68ffc1b44d4bea2996f2f408",
    "name": "Qualquer coisa",
    "code": 1,
    "category": "easy",
    "firstBlood": true,
    "taskDone": false,
    "__v": 0,
    "secret": false,
  },
  {
    "clue": {
      "description": "Sei lá cara, pensa",
      "degradationRate": 0.2,
      "releaseDate": "2025-10-27T19:03:05.644Z",
    },
    "_id": "68ffc1b44d4bea2996f2f408",
    "name": "Qualquer coisa",
    "code": 1,
    "category": "easy",
    "firstBlood": true,
    "taskDone": false,
    "__v": 0,
    "secret": false,
  },
  {
    "clue": {
      "description": "Sei lá cara, pensa",
      "degradationRate": 0.2,
      "releaseDate": "2025-10-27T19:03:05.644Z",
    },
    "_id": "68ffc1b44d4bea2996f2f408",
    "name": "Qualquer coisa",
    "code": 1,
    "category": "easy",
    "firstBlood": true,
    "taskDone": false,
    "__v": 0,
    "secret": false,
  },
  {
    "clue": {
      "description": "Sei lá cara, pensa",
      "degradationRate": 0.2,
      "releaseDate": "2025-10-27T19:03:05.644Z",
    },
    "_id": "68ffc1b44d4bea2996f2f408",
    "name": "Qualquer coisa",
    "code": 1,
    "category": "easy",
    "firstBlood": true,
    "taskDone": false,
    "__v": 0,
    "secret": false,
  },
  {
    "clue": {
      "description": null,
      "degradationRate": 0.3,
    },
    "_id": "68ffc1cd4d4bea2996f2f40c",
    "name": "Senha no HTML",
    "code": 2,
    "category": "easy",
    "firstBlood": false,
    "taskDone": false,
    "__v": 0,
    "secret": false,
  },
  {
    "clue": {
      "description": null,
      "degradationRate": 0.3,
    },
    "_id": "68ffc1cd4d4bea2996f2f40c",
    "name": "Senha no HTML",
    "code": 2,
    "category": "easy",
    "firstBlood": false,
    "taskDone": false,
    "__v": 0,
    "secret": false,
  },
]);

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
  scrambledTexts.value = challenges.map(
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
    scrambledTexts.value = challenges.map((challenge) =>
      challenge.clue.description == null ? scrambleText("*****************************") : ""
    );
  }, 200);
});
</script>
<style>
.scramble-text {
  display: inline-block;
  letter-spacing: 0.05em;
  text-shadow: 1px 0 rgba(0, 255, 0, 0.7);
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

/* Animação do cursor piscando */
@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

.animate-code {
  animation: blink 1s infinite;
}
</style>

<template>
  <div class="grid grid-cols-5 gap-2">
    <ButtonCard class="col-span-2">
      <slot> <h1>Dicas</h1></slot>
    </ButtonCard>
    <div class="col-span-3 flex flex-col">
      <div class="cyber-banner cyber-glitch-1 w-full">PONTOS DE EVENTO</div>
      <NormalCard class="mt-5 flex-1 flex flex-col justify-center">
        <template #content>
          <div class="flex p-2 border-2 text-white bg-black justify-between items-center">
            <span class="text-4xl">
              Blood Points
              <span class="animate-code">_</span>
            </span>

            <span class="text-4xl"> +100 Pontos</span>
          </div>
          <span class="text-xl text-gray-600"
            >Ganha ao ser a primeira equipe a finalizar um desafio avançado</span
          >
        </template>
        <template #title>
          <div class="flex border-2 mt-8 p-2 justify-between items-center">
            <span class="text-4xl"> Start Points </span>
            <span class="text-4xl"> +50 Pontos</span>
          </div>
          <span class="text-xl text-gray-600"
            >Ganha ao ser a primeira equipe a finalizar um desafio geral</span
          >
        </template>
      </NormalCard>
    </div>
    <div class="cyber-banner cyber-glitch-1 w-full bg-purple mt-2 fg-white col-span-5">
      DESAFIOS
    </div>
    <Card
      v-for="(teams, index) in challenges"
      class="col-span-5 w-full">
      <template #content>
        <div class="flex text-3xl justify-between">
          <span>
            {{ index }} >
            {{ teams.name }}
          </span>
          <span class="text-4xl"
            >{{ teams.score_base }}
            <span class="text-gray-600 text-3xl">pontos</span>
          </span>
        </div>
      </template>
    </Card>
  </div>
</template>
<script setup>
const challenges = [
  {
    "advanced": false,
    "_id": "68f91a2959176fb01488a6a0",
    "name": "Password no HTML",
    "score_base": 15,
    "code": 1,
    "__v": 0,
  },
  {
    "_id": "68f928492ac95c950dd625aa",
    "name": "Desativar disable",
    "score_base": 40,
    "code": 2,
    "advanced": true,
    "__v": 0,
  },
];
</script>

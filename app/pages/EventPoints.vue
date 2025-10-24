<template>
  <div class="grid grid-cols-5 gap-2">
    <!-- <ButtonCard class="col-span-2">
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
            <div class="text-xl text-gray-600">
              Ganha ao ser a primeira equipe a finalizar um desafio avançado
            </div>
          </div>
          <div>
            <div class="flex border-2 sm:w-4xl 2xl:w-7xl p-2 mt-3 justify-between items-center">
              <span class="text-4xl"> Start Points </span>
              <span class="text-4xl"> +50 Pontos</span>
            </div>
            <div class="text-xl text-gray-600">
              Ganha ao ser a primeira equipe a finalizar um desafio geral
            </div>
          </div>
        </template>
      </NormalCard>
    </div>
    <div class="cyber-banner cyber-glitch-1 w-full bg-purple mt-5 fg-white col-span-5">
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
    advanced: false,
    _id: "68f91a2959176fb01488a6a0",
    name: "Password no HTML",
    score_base: 15,
    code: 1,
    __v: 0,
  },
  {
    _id: "68f928492ac95c950dd625aa",
    name: "Desativar disable",
    score_base: 40,
    code: 2,
    advanced: true,
    __v: 0,
  },
];
</script>

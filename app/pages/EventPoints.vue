<template>
  <div class="grid grid-cols-5 gap-5">
    <ButtonCard class="col-span-2">
      <slot> <h1>Dicas</h1></slot>
    </ButtonCard>
    <div class="col-span-3 flex flex-col">
      <div class="cyber-banner cyber-glitch-1 w-full">PONTOS DE EVENTO</div>
      <NormalCard class="mt-5 flex-1 flex flex-col justify-center">
        <template #content>
          <div class="flex p-2 border-2 text-white bg-black justify-between items-center">
            <span class="text-4xl"> Blood Points </span>
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
    <div class="cyber-banner cyber-glitch-1 w-full bg-purple mt-5 fg-white col-span-5">
      DESAFIOS
    </div>
    <Table class="col-span-5 w-full"></Table>
  </div>
</template>

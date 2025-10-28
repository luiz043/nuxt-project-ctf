<template>
  <div class="grid grid-cols-5 gap-2">
    <!-- <ButtonCard class="col-span-5 mb-15">
      <slot> <h1>Dicas</h1></slot>
    </ButtonCard> -->
    <div class="col-span-5 flex flex-col">
      <CyanBanner><template #default> PONTOS DE EVENTO </template></CyanBanner>
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
    <PurpleBanner class="m-1 mt-5">
      <template #default> DESAFIOS </template>
    </PurpleBanner>
    <div class="col-span-5">
      <div class="grid grid-cols-3 gap-3">
        <ChallengeCards :data="ChallengesData.data"> </ChallengeCards>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { io } from "socket.io-client";

const ChallengesData = reactive({
  data: [],
});

const socket = io("ws://10.10.10.23:3030", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  socket.emit("subscribe", "challenges");
});

onMounted(() => {
  socket.on("challenges:update", (data) => {
    ChallengesData.data = data;
  });
});
</script>

<template>
  <CyanBanner>
    <template #default> PONTOS POR EQUIPE </template>
  </CyanBanner>
  <NormalCard class="mt-3">
    <template #content>
      <div class="flex justify-between items-center">
        <div>
          <div class="text-4xl">Teafve</div>
          <div class="text-2xl text-gray-500">blaa,faefa,baef</div>
        </div>
        <div class="text-4xl">506 Pontos</div>
      </div>
    </template>
  </NormalCard>
  <PurpleBanner class="mt-5"><template #default> DESAFIOS </template></PurpleBanner>
  <div class="grid grid-cols-3 gap-2 mt-5">
    <ChallengeCards :data="ChallengesData.data"></ChallengeCards>
  </div>
</template>
<script setup>
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

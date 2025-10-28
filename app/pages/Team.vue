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
    <ChallengeCards :data="challenges"></ChallengeCards>
  </div>
</template>
<script setup>
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
    "taskDone": true,
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
    "taskDone": true,
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
</script>

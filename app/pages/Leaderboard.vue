<template>
  <div class="grid grid-cols-3 gap-2">
    <div class="cyber-tile-big col-span-3 bg-white">
      <HorizontalBarChart
        :datasets="datasets"
        :labels="['Pontuação']"
        title="LeaderBoard" />
    </div>

    <div class="cyber-banner cyber-glitch-1 w-full col-span-3">TABELA DE PONTUAÇÃO</div>
    <Card
      v-for="(teams, index) in teams.sort((a, b) => b.score - a.score)"
      class="col-span-3 w-full">
      <template #content>
        <div class="flex text-3xl justify-between">
          <span>
            {{ index }} >
            {{ teams.name }}
            <div class="text-xl text-gray-700">
              {{ teams.players.join(", ") }}
            </div>
          </span>
          <span class="text-4xl"
            >{{ teams.score }}
            <span class="text-gray-600 text-3xl">pontos</span>
          </span>
        </div>
      </template>
    </Card>
  </div>
</template>
<script setup lang="ts">
const teams = [
  {
    "_id": "68f909c8619618597434a3f4",
    "name": "Pythonidae",
    "players": ["Luis", "Quirico III"],
    "score": 526,
    "domain": "localhost",
    "challenges": [2, 1],
    "__v": 6,
  },
  {
    "_id": "68f909ce619618597434a3f6",
    "name": "Javali Script",
    "players": ["Helena", "Quirico"],
    "score": 196,
    "domain": "google",
    "challenges": [],
    "__v": 2,
  },
  {
    "_id": "68f909e3619618597434a3f8",
    "name": "Insetos do Front",
    "players": ["Luiz", "Quirico II"],
    "score": 125,
    "domain": "facebook",
    "challenges": [],
    "__v": 0,
  },
  {
    "_id": "68f909f5619618597434a3fa",
    "name": "C++AVALO",
    "players": ["Marcos", "Quirico VII"],
    "score": 52,
    "domain": "bigriver",
    "challenges": [],
    "__v": 0,
  },
  {
    "_id": "68f909f5619618577434a3fa",
    "name": "C++A346346VALO",
    "players": ["Marcos", "Quirico VII"],
    "score": 252,
    "domain": "bigriver",
    "challenges": [],
    "__v": 0,
  },
  {
    "_id": "68f909f5719618597434a3fa",
    "name": "C++ffaeAVALO",
    "players": ["Marcos", "Quirico VII"],
    "score": 122,
    "domain": "bigriver",
    "challenges": [],
    "__v": 0,
  },
];

const generateTeamColor = (index: number) => {
  const colors = [
    "#007BFF", // blue
    "#28A745", // amber
    "#FFC107", // emerald
    "#DC3545", // violet
    "#E83E8C", // red
    "#17A2B8", // teal
    "#6F42C1", // orange
    "#6366f1", // indigo
  ];
  return colors[index % colors.length];
};

const sortedTeams = computed(() => {
  return [...teams].sort((a, b) => b.score - a.score);
});

const datasets = computed(() => {
  return sortedTeams.value.map((team, index) => ({
    label: team.name,
    data: [team.score],
    backgroundColor: generateTeamColor(index),
    borderColor: generateTeamColor(index),
    borderWidth: 2,
  }));
});
</script>

<style></style>

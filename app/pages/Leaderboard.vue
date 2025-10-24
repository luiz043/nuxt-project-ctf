<template>
  <div class="grid grid-cols-3 gap-3">
    <div class="cyber-tile-big col-span-3 bg-white">
      <HorizontalBarChart
        :datasets="datasets"
        :labels="labels"
        title="LeaderBoard" />
    </div>

    <div class="cyber-banner cyber-glitch-1 w-full mt-3 col-span-3">TABELA DE PONTUAÇÃO</div>
    <div class="col-span-3">
      <div class="grid grid-cols-3 gap-3">
        <Card
          v-for="(team, index) in sortedTeams"
          :key="team._id"
          class="col-span-1 w-full">
          <template #content>
            <div class="flex text-3xl justify-between">
              <span :style="{ color: generateTeamColor(index) }">
                {{ index + 1 }}.
                {{ team.name }}
                <div class="text-xl text-gray-700">
                  {{ team.players.join(", ") }}
                </div>
              </span>
              <span class="text-nowrap">
                {{ getTotalScore(team) }}
                <span class="text-gray-600">pontos</span>
              </span>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const teams = [
  {
    _id: "68f909c8619618597434a3f4",
    name: "Pythonidae",
    players: ["Luis", "Quirico III", "Quirico III", "Quirico III", "Quirico III"],
    score: [0, 50, 150, 200, 250],
    domain: "localhost",
    challenges: [2, 1],
    __v: 6,
  },
  {
    _id: "68f909c8619618597434a3f4",
    name: "Pythonidae",
    players: ["Luis", "Quirico III", "Quirico III", "Quirico III", "Quirico III"],
    score: [0, 50, 150, 200, 250],
    domain: "localhost",
    challenges: [2, 1],
    __v: 6,
  },
  {
    _id: "68f909c8619618597434a3f4",
    name: "Pythonidae",
    players: ["Luis", "Quirico III", "Quirico III", "Quirico III", "Quirico III"],
    score: [0, 50, 150, 200, 250],
    domain: "localhost",
    challenges: [2, 1],
    __v: 6,
  },
  {
    _id: "68f909ce619618597434a3f6",
    name: "Javali Script",
    players: ["Helena", "Quirico"],
    score: [0, 100, 150, 300, 350],
    domain: "google",
    challenges: [],
    __v: 2,
  },
  {
    _id: "68f909e3619618597434a3f8",
    name: "Insetos do Front",
    players: ["Luiz", "Quirico II"],
    score: [0, 50, 150, 300],
    domain: "facebook",
    challenges: [],
    __v: 0,
  },
  {
    _id: "68f909f5619618597434a3fa",
    name: "C++AVALO",
    players: ["Marcos", "Quirico VII"],
    score: [0, 100, 200, 350],
    domain: "bigriver",
    challenges: [],
    __v: 0,
  },
  {
    _id: "68f909f5619618597434a3fa",
    name: "C++afaeAVALO",
    players: ["Marcos", "Quirico VII"],
    score: [0, 100, 200, 350],
    domain: "bigriver",
    challenges: [],
    __v: 0,
  },
  {
    _id: "68f909f5619618597434a3fa",
    name: "C++AfaefVALO",
    players: ["Marcos", "Quirico VII"],
    score: [0, 100, 200, 350],
    domain: "bigriver",
    challenges: [],
    __v: 0,
  },
  {
    _id: "68f909f5619618597434a3fa",
    name: "C++AfaefVALO",
    players: ["Marcos", "Quirico VII"],
    score: [0, 100, 200, 350],
    domain: "bigriver",
    challenges: [],
    __v: 0,
  },
  {
    _id: "68f909f5619618597434a3fa",
    name: "C++AfaefVALO",
    players: ["Marcos", "Quirico VII"],
    score: [0, 100, 200, 350],
    domain: "bigriver",
    challenges: [],
    __v: 0,
  },
  {
    _id: "68f909f5619618597434a3fa",
    name: "C++AfaefVALO",
    players: ["Marcos", "Quirico VII"],
    score: [0, 100, 200, 350],
    domain: "bigriver",
    challenges: [],
    __v: 0,
  },
];

const generateTeamColor = (index: number) => {
  const colors = [
    "#1a82f6",
    "#f59e0b",
    "#10b981",
    "#8b5cf6",
    "#ef4444",
    "#14b8a6",
    "#f97316",
    "#6366f1",
  ];
  return colors[index % colors.length];
};

const getTotalScore = (team: any) => {
  return team.score.reduce((acc, cur) => {
    acc += cur;
    return acc;
  });
};

const getRunningScores = (team: any) => {
  let runningTotal = 0;
  return team.score.map((score: number) => {
    runningTotal += score;
    return runningTotal;
  });
};

const sortedTeams = computed(() => {
  return [...teams].sort((a, b) => getTotalScore(b) - getTotalScore(a));
});

const labels = computed(() => Array.from({ length: 10 }, (_, i) => (i * 100).toString()));

const datasets = computed(() => {
  return teams.map((team, index) => {
    return {
      label: team.name,
      data: getRunningScores(team),
      backgroundColor: generateTeamColor(index),
      borderColor: generateTeamColor(index),
      borderWidth: 3,
      tension: 0,
      spanGaps: false,
      pointRadius: 18,
    };
  });
});
</script>

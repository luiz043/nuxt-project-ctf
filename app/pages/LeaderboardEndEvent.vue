<template>
  <div>
    <div class="grid grid-cols-3 gap-3">
      <div class="cyber-banner cyber-glitch-1 col-span-3">TABELA DE PONTUAÇÃO FINAL</div>

      <div class="col-span-3">
        <div class="grid grid-cols-3 gap-3">
          <Card
            v-for="(team, index) in sortedTeams"
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
                <span
                  v-if="index >= sortedTeams.length - revealedCount"
                  class="text-nowrap">
                  {{ getTotalScore(team) }}
                  <span class="text-gray-600">pontos</span>
                </span>
                <span v-else>
                  <span class="text-gray-600">- pontos</span>
                </span>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
    <button
      @click="revealNextScore()"
      class="w-full cyber-glitch-2 col-span-1 cyber-button bg-red fg-white">
      + Mostrar Pontuação
      <span class="glitchtext">HaCk mE</span>
      <span class="tag">R25</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const { $socket } = useNuxtApp();

const revealedCount = ref(0);

const revealNextScore = () => {
  if (revealedCount.value < sortedTeams.value.length) {
    revealedCount.value++;
  }
};

interface TeamType {
  name: string;
  players: string[];
  score: number[];
  domain: {
    type: string;
    required: boolean;
    unique: boolean;
  };
  challenges: number[];
}

interface TeamsDataType {
  data: TeamType[];
}

const teamsData = reactive<TeamsDataType>({
  data: [],
});

onMounted(() => {
  $socket.on("teams:update", (data) => {
    teamsData.data = data;
  });
});

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
  }, 0);
};

const getRunningScores = (team: any) => {
  let runningTotal = 0;
  return team.score.map((score: number) => {
    runningTotal += score;
    return runningTotal;
  });
};

const sortedTeams = computed(() => {
  return [...teamsData.data].sort((a, b) => getTotalScore(b) - getTotalScore(a));
});
</script>

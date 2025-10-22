<template>
  <div class="grid grid-cols-3 gap-5">
    <div class="cyber-tile-big col-span-3 bg-white">
      <HorizontalBarChart
        :datasets="datasets"
        :labels="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']"
        title="LeaderBoard" />
    </div>

    <div class="cyber-banner w-full col-span-3 mt-5">TABELA DE PONTUAÇÃO</div>
    <Table class="col-span-3"></Table>
  </div>
</template>
<script setup lang="ts">
const datasets = [
  {
    label: "Vendas",
    data: [29, 45, 67, 34, 89],
    backgroundColor: "#1a82f6",
  },
  {
    label: "Vendas",
    data: [5, 455, 567, 314, 89],
    backgroundColor: "#f59e0b",
  },
  {
    label: "Teste aqui",
    data: [9, 5, 6, 34, 9],
    backgroundColor: "#3bg2f6",
  },
];
</script>

<style></style>

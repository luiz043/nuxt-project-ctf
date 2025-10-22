<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="cyber-tile-big col-span-3 shadow-2xl cyber-razor-top bg-white">
      <HorizontalBarChart
        :datasets="[
          {
            label: 'Vendas',
            data: [29, 45, 67, 34, 89],
            backgroundColor: '#1a82f6',
          },
          {
            label: 'Vendas',
            data: [5, 455, 567, 314, 89],
            backgroundColor: '#f59e0b',
          },
          {
            label: 'Teste aqui',
            data: [9, 5, 6, 34, 9],
            backgroundColor: '#3bg2f6',
          },
        ]"
        :labels="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']"
        title="LeaderBoard" />
    </div>
    <ButtonCard>
      <slot>Dicas</slot>
    </ButtonCard>

    <NormalCard>
      <template #title><h2 class="text-white text-3xl">Teste Titulo</h2></template>
      <template #content>
        <p class="text-white text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
        </p>
      </template>
    </NormalCard>
    <NormalCard></NormalCard>
    <!-- <table class="cyber-table pt-5 w-full">
      <tr>
        <th
          v-for="key in Object.keys(users[0])"
          :key="key">
          {{ key }}
        </th>
      </tr>
      <tr v-for="user in users">
        <td>
          {{ user.age }}
        </td>
        <td>
          {{ user.name }}
        </td>
        <td>
          {{ user.email }}
        </td>
        <td>
          {{ user.age }}
        </td>
        <td>
          {{ user.role }}
        </td>
        <td>
          {{ user.active }}
        </td>
      </tr>
    </table> -->
  </div>
</template>
<script setup lang="ts">
import HorizontalBarChart from "../components/HorizontalBarChart.vue";
import ButtonCard from "~/components/ButtonCard.vue";
import NormalCard from "~/components/NormalCard.vue";
const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    role: "Admin",
    active: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 34,
    role: "Editor",
    active: false,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    age: 22,
    role: "Viewer",
    active: true,
  },
  {
    id: 4,
    name: "Dana White",
    email: "dana@example.com",
    age: 41,
    role: "Admin",
    active: true,
  },
  {
    id: 5,
    name: "Ethan Clark",
    email: "ethan@example.com",
    age: 30,
    role: "Editor",
    active: false,
  },
];

Object.values(users).forEach((key) => console.log(key));
</script>
<style></style>

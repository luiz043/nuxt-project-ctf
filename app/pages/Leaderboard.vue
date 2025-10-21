<template>
  <div class="flex items-center h-screen justify-center">
    <DataTable class="w-screen px-5" :value="users">
      <Column field="name" header="Code"></Column>
      <Column field="id" header="ID"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="age" header="Idade"></Column>
    </DataTable>
  </div>
</template>
<script setup>
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
</script>

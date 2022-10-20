<script setup>
import { ref } from 'vue'
defineProps({
  msg: String
})
const items = ref(["works", "about", "blogs", "contact"])
</script>

<template>
<div class="navbar flex">
  <h1 class="text-3xl font-bold w-1/2">
    <a>{{ msg }}</a>
  </h1>
  <ul class="menu menu-horizontal w-1/2">
    <li v-for="(item, key) in items" :key="key">
      <a>{{ item }}</a>
    </li>
  </ul>
</div>
</template>

<style scoped>
.navbar{align-items: center;margin: 1rem;}
</style>


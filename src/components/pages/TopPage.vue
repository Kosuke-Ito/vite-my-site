<script setup>
import { ref } from 'vue'
defineProps({
  msg: String
})
const items = ref(["about", "blog", "contact"])
</script>

<template>
  <div class="navbar flex">
    <div class="flex-1">
      <a class="text-xl font-bold" href="#">
        <h1>{{ msg }}</h1>
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal">
        <li v-for="item in items" :key="item.key" class="text-lg font-bold">
          <a :href="`/${item}`">{{item}}</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="container" class="flex">
    <div id="Engineering" class="flex-1">
      <h2>Engineering</h2>
    </div>
    <div id="photograph" class="flex-none">
      <h2>Photograph</h2>
    </div>
  </div>
</template>

<style scoped>
.navbar{padding: 1rem;}
</style>

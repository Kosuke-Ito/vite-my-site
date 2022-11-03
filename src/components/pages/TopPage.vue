<script setup>
import { ref } from 'vue'
defineProps({
  msg: String
})
const items = ref(["works", "about", "blogs", "contact"])
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
        <li class="font-bold" tabindex="0">work</li>
        <li class="font-bold">about</li>
        <li class="font-bold">blogs</li>
        <li class="font-bold">contact</li>
      </ul>
    </div>
  </div>
  
  <div id="container" class="flex">
    <div id="Engineering" class="basis-1/2">
      <h2>Engineering</h2>
    </div>

    <div id="photograph" class="basis-1/2">
      <h2>Photograph</h2>
    </div>
  </div>
</template>

<style scoped>
</style>

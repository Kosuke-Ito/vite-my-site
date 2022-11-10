<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
const items = ref(["about", "blog", "contact"])
</script>

<template>
  <div class="navbar">
    <a class="text-xl font-bold" href="#">
      <h1>{{ msg }}</h1>
    </a>
    <ul class="menu">
      <li v-for="item in items" :key="item.key" class="text-lg font-bold">
        <a :href="`/${item}`">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navbar{padding: 1rem;display: flex;}
.menu{display: flex;}
.menu li{flex: 1 0 auto;}
</style>
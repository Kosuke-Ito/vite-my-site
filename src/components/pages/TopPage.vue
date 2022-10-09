<script setup>
import { ref } from 'vue'

const items = ref(["about", "works", "blogs", "contact"])
defineProps({
  msg: String
})

</script>

<template>
  <header>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item, key) in items" :key="key">
        {{ item }}
      </li>
    </ul>
  </header>
</template>

<style scoped>
header{display: flex;align-items: center}
h1{margin-right: auto;}
ul {list-style: none; display: flex;}
li{margin-right: 1rem;}



</style>

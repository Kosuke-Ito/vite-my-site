<script setup>
import { ref } from 'vue'
import Engineering from "../containers/Engineering.vue"
import Photograph from "../containers/Photograph.vue"

const items = ref(["works", "about", "blogs", "contact"])
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
<div id="content">
  <Engineering />
  <Photograph />
</div>
</template>

<style scoped>
header{display: flex;align-items: center;margin: 0 1rem;}
#content{background-color: blue;}
h1{margin-right: auto;}
ul {list-style: none; display: flex;}
li{margin-right: 1rem;}



</style>

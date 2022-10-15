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
  <header class="navbar bg-base-100 bg-primary accent">
    <div class="flex-1 btn">
      <h1 class="text-3xl font-bold">
        <a>{{ msg }}</a>
      </h1>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li v-for="(item, key) in items" :key="key">
          <a>{{ item }}</a>
        </li>
      </ul>
    </div>
  </header>
  <div id="content">
    <Engineering />
    <Photograph />
  </div>
</template>

<style scoped>
header{align-items: center;margin: 1rem;}
#content{background-color: blue; padding: 0 1rem;}
h1{margin-right: auto;}
ul {list-style: none;}
li{margin-right: 1rem;}



</style>

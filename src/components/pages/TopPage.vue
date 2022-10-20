<script setup>
import { ref } from 'vue'
import Header from "../containers/Header.vue"
import Engineering from "../containers/Engineering.vue"
import Photograph from "../containers/Photograph.vue"
</script>

<template>
  <Header msg="Kosuke Ito Portfolio"/>
  <div id="content flex">
    <Engineering />
    <Photograph />
  </div>
</template>

<style scoped>
#content{background-color: blue; padding: 0 1rem;}
h1{margin-right: auto;}
ul {list-style: none;}
li{margin-right: 1rem;}
</style>

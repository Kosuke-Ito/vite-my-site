<script setup>
import { ref } from 'vue'
import Navbar from '../parts/Navbar.vue';
import Engineering from '../parts/Engineering.vue';
import Photograph from '../parts/Photograph.vue';

</script>

<template>
<Navbar msg="Kosuke Ito Portfolio"/>

<div id="container">
  <Engineering />
  <Photograph />
</div>
</template>

<style scoped>

</style>

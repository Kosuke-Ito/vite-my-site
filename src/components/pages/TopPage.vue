<script setup>
import { ref } from 'vue'
import Navbar from '../parts/Navbar.vue';
import Engineering from '../parts/Engineering.vue';
import Photograph from '../parts/Photograph.vue';

</script>

<template>
<Navbar msg="Kosuke Ito"/>

<div class="container">
  <Engineering />
  <Photograph />
</div>
</template>

<style scoped>
.container{
  display: flex;
  width: 100%;
}
</style>

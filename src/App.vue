<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar/>
  <div class="w-screen flex justify-center">
    <div class="w-3/4">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>

</style>

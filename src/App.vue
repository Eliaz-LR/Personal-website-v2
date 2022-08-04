<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar/>
  <div class="w-screen flex justify-center mt-6">
    <div class="md:w-3/4 2xl:w-1/2">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>

</style>

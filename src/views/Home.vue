<script>
import Bio from "../components/Bio.vue";
import Projects from "../components/Projects.vue";
export default {
  setup() {},
  components: { Bio, Projects },
};
</script>

<template>
    <h1>Welcome</h1>
    <Bio/>
    <hr class=" my-4"/>
    <Projects/>
</template>
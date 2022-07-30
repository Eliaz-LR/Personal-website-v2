<script>
import Bio from "../components/Bio.vue";
import Projects from "../components/Projects.vue";
import Technologies from "../components/Technologies.vue";
export default {
  setup() {},
  components: { Bio, Projects, Technologies },
};
</script>

<template>
    <h1>Welcome</h1>
    <Bio/>
    <hr class=" my-4"/>
    <Projects/>
    <hr class=" my-4"/>
    <Technologies/>
</template>
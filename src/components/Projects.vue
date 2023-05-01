<template>
    <h1>My projects</h1>
    <br />
    <h3>These are mostly personal projects, done on my free time :</h3>
    <div class="">
        <Project v-for="project in projects" :name="project.name" :image="project.image" :description="project.description"
            :link="project.link" />
    </div>
    <!-- <h2>Other projects</h2> -->
</template>

<script>
import { useProjectStore } from "../stores/projectStore.js";
import Project from "./small/Project.vue";

export default {
    setup() {
        const projects = useProjectStore().getFeaturedProjects;
        return { projects };
    },
    components: { Project },
};
</script>
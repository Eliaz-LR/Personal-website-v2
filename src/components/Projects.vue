<template>
    <h1>My projects</h1>
    <div class="">
        <Project v-for="projects in projects"
        :name="projects.name"
        :image="projects.image"
        :description="projects.description"
        :link="projects.link"/>
    </div>
    <!-- <h2>Other projects</h2> -->
</template>

<script>
import { useProjectStore } from "../stores/projectStore.js";
import Project from "./small/Project.vue";

export default {
    setup() {
        const projects = useProjectStore().getProjects;
        return { projects };
    },
    components: { Project },
};
</script>
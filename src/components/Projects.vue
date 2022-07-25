<template>
    <h1>My projects</h1>
    {{ projects[0].name }}
    <h2>Other projects</h2>
</template>

<script>
import { useProjectStore } from "../stores/projectStore.js";

export default {
    setup() {
        const projects = useProjectStore().getProjects;
        return { projects };
    }
};
</script>
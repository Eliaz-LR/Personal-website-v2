<template>
    <h1>Tech I've used before</h1>
    <div class="grid">
        <Techno v-for="techno in technologies"
         :name="techno.name" 
         :image="techno.image" 
         :level="techno.level"/>
    </div>
</template>

<script>
import { useTechnologiesStore } from "../stores/technologiesStore.js";
import Techno from "./small/Techno.vue";

export default {
    setup() {
        const technologies = useTechnologiesStore().getTechnologies;
        return { technologies };
    },
    components: { Techno },
};
</script>
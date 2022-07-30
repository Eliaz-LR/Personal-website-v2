<template>
    <h1>Tech I've used before</h1>
    <h2>Programming languages</h2>
    <div class="grid">
        <Techno v-for="techno in languages"
         :name="techno.name" 
         :image="techno.image" 
         :level="techno.level_out_of_5"/>
    </div>
    <h2>Frameworks</h2>
    <div class="grid">
        <Techno v-for="techno in frameworks"
         :name="techno.name" 
         :image="techno.image" 
         :level="techno.level_out_of_5"/>
    </div>
    <h2>Other</h2>
    <div class="grid">
        <Techno v-for="techno in other"
         :name="techno.name" 
         :image="techno.image" 
         :level="techno.level_out_of_5"/>
    </div>
</template>

<script>
import { useTechnologiesStore } from "../stores/technologiesStore.js";
import Techno from "./small/Techno.vue";

export default {
    setup() {
        const languages = useTechnologiesStore().getProgrammingLanguages;
        const frameworks = useTechnologiesStore().getFrameworks;
        const other = useTechnologiesStore().getOther;
        return { languages, frameworks, other };
    },
    components: { Techno },
};
</script>
<template>
    <div class="flex flex-col mr-4">
        <h1>Tech I've used before</h1>
        <h3>Programming languages</h3>
        <div class="flex flex-row flex-wrap justify-center">
            <Techno v-for="techno in languages"
            :name="techno.name" 
            :image="techno.image" 
            :level="techno.level"
            :comments="techno.comments"/>
        </div>
        <h3>Frameworks</h3>
        <div class="flex flex-row flex-wrap justify-center">
            <Techno v-for="techno in frameworks"
            :name="techno.name" 
            :image="techno.image" 
            :level="techno.level"
            :comments="techno.comments"/>
        </div>
        <h3>Other</h3>
        <div class="flex flex-row flex-wrap justify-center">
            <Techno v-for="techno in other"
            :name="techno.name" 
            :image="techno.image" 
            :level="techno.level"
            :comments="techno.comments"/>
        </div>
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
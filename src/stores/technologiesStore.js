import { defineStore } from "pinia";

export const useTechnologiesStore = defineStore("technologiesStore",{
    state: () => ({
        technologies: [
            {
                name: "Python",
                image : new URL("../assets/python.svg", import.meta.url) .href,
                level_out_of_5: 3.5,
            },
            {
                name: "Vue.js",
                image : new URL("../assets/vue.svg", import.meta.url) .href,
                level_out_of_5: 2.5,
            },
        ],
    }),
    getters: {
        getTechnologies: (state) => state.technologies,
    },
});
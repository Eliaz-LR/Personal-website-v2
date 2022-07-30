import { defineStore } from "pinia";

export const useTechnologiesStore = defineStore("technologiesStore",{
    state: () => ({
        technologies: [
            {
                name: "Python",
                image : new URL("../assets/python.svg", import.meta.url) .href,
                level_out_of_5: 3.5,
                category: "Programming Language",
            },
            {
                name: "Vue.js",
                image : new URL("../assets/vue.svg", import.meta.url) .href,
                level_out_of_5: 2.5,
                category: "Framework",
            },
            {
                name: "C#",
                image : new URL("../assets/csharp.svg", import.meta.url) .href,
                level_out_of_5: 2,
                category: "Programming Language",
            },
            {
                name: "JavaScript",
                image : new URL("../assets/javascript.svg", import.meta.url) .href,
                level_out_of_5: 2,
                category: "Programming Language",
            },
            {
                name: "Git",
                image : new URL("../assets/git.svg", import.meta.url) .href,
                level_out_of_5: 4,
                category: "Other",
            },
        ],
    }),
    getters: {
        getTechnologies: (state) => state.technologies,
        getProgrammingLanguages: (state) => state.technologies.filter(technology => technology.category === "Programming Language"),
        getFrameworks: (state) => state.technologies.filter(technology => technology.category === "Framework"),
        getOther: (state) => state.technologies.filter(technology => technology.category === "Other"),
    },
});
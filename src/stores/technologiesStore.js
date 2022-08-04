import { defineStore } from "pinia";

export const useTechnologiesStore = defineStore("technologiesStore",{
    state: () => ({
        technologies: [
            {
                name: "Python",
                image : new URL("../assets/python.svg", import.meta.url) .href,
                level: 3,
                category: "Programming Language",
                comments: "Python is my go to language when making projects in many areas such as AI, Data Science and automatisation.",
            },
            {
                name: "Vue.js",
                image : new URL("../assets/vue.svg", import.meta.url) .href,
                level: 3,
                category: "Framework",
            },
            {
                name: "C#",
                image : new URL("../assets/csharp.svg", import.meta.url) .href,
                level: 2,
                category: "Programming Language",
            },
            {
                name: "JavaScript",
                image : new URL("../assets/javascript.svg", import.meta.url) .href,
                level: 2,
                category: "Programming Language",
            },
            {
                name: "Git",
                image : new URL("../assets/git.svg", import.meta.url) .href,
                level: 4,
                category: "Other",
            },
            {
                name: "C++",
                image : new URL("../assets/cpp.svg", import.meta.url) .href,
                level: 1,
                category: "Programming Language",
            },
            {
                name: "Java",
                image : new URL("../assets/java.svg", import.meta.url) .href,
                level: 1,
                category: "Programming Language",
            },
            {
                name: "Ruby",
                image : new URL("../assets/ruby.svg", import.meta.url) .href,
                level: 1,
                category: "Programming Language",
            },
            {
                name: "Tailwind CSS",
                image : new URL("../assets/tailwindcss.svg", import.meta.url) .href,
                level: 3,
                category: "Framework",
            },
        ],
    }),
    getters: {
        getTechnologies: (state) => state.technologies,
        getProgrammingLanguages: (state) => state.technologies.filter(technology => technology.category === "Programming Language").sort((a,b) => b.level - a.level),
        getFrameworks: (state) => state.technologies.filter(technology => technology.category === "Framework"),
        getOther: (state) => state.technologies.filter(technology => technology.category === "Other"),
    },
});
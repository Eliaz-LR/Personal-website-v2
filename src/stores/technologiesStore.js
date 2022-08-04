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
                comments: "Vue.js is my go to framework when making web applications.",
            },
            {
                name: "C#",
                image : new URL("../assets/csharp.svg", import.meta.url) .href,
                level: 2,
                category: "Programming Language",
                comments: "I've used C# with Unity to make games and with .NET to make desktop applications.",
            },
            {
                name: "JavaScript",
                image : new URL("../assets/javascript.svg", import.meta.url) .href,
                level: 2,
                category: "Programming Language",
                comments: "I've used JavaScript to make my websites and web applications.",
            },
            {
                name: "Git",
                image : new URL("../assets/git.svg", import.meta.url) .href,
                level: 4,
                category: "Other",
                comments: "Git is my go to version control system. I've used it for many projects and I'm very familiar with it.",
            },
            {
                name: "C++",
                image : new URL("../assets/cpp.svg", import.meta.url) .href,
                level: 1,
                category: "Programming Language",
                comments: "I've used C and C++ in school to learn the basics of programming.",
            },
            {
                name: "Java",
                image : new URL("../assets/java.svg", import.meta.url) .href,
                level: 1,
                category: "Programming Language",
                comments: "I've used Java mainly in school.",
            },
            {
                name: "Ruby",
                image : new URL("../assets/ruby.svg", import.meta.url) .href,
                level: 1,
                category: "Programming Language",
                comments: "I've used Ruby mainly in school.",
            },
            {
                name: "Tailwind CSS",
                image : new URL("../assets/tailwindcss.svg", import.meta.url) .href,
                level: 3,
                category: "Framework",
                comments: "I've used Tailwind CSS to make my websites and web applications.",
            },
        ],
    }),
    getters: {
        getTechnologies: (state) => state.technologies,
        getProgrammingLanguages: (state) => state.technologies.filter(technology => technology.category === "Programming Language").sort((a,b) => b.level - a.level),
        getFrameworks: (state) => state.technologies.filter(technology => technology.category === "Framework").sort((a,b) => b.level - a.level),
        getOther: (state) => state.technologies.filter(technology => technology.category === "Other").sort((a,b) => b.level - a.level),
    },
});
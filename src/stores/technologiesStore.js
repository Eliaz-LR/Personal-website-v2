import { defineStore } from "pinia";

export const useTechnologiesStore = defineStore("technologiesStore",{
    state: () => ({
        technologies: [
            {
                name: "Python",
                image : new URL("../assets/tech_logo/python.svg", import.meta.url) .href,
                level: 3,
                category: "Programming Language",
                comments: "Python is my go-to language when making projects in many areas such as AI, Data Science and automatisation.",
            },
            {
                name: "Vue.js",
                image : new URL("../assets/tech_logo/vue.svg", import.meta.url) .href,
                level: 3,
                category: "Framework",
                comments: "Vue.js is my go-to framework when making web applications.",
            },
            {
                name: "C#",
                image : new URL("../assets/tech_logo/csharp.svg", import.meta.url) .href,
                level: 2,
                category: "Programming Language",
                comments: "I've used C# with Unity to make games and with .NET to make desktop applications.",
            },
            {
                name: "JavaScript",
                image : new URL("../assets/tech_logo/javascript.svg", import.meta.url) .href,
                level: 2,
                category: "Programming Language",
                comments: "I've used JavaScript to make my websites and web applications.",
            },
            {
                name: "Git",
                image : new URL("../assets/tech_logo/git.svg", import.meta.url) .href,
                level: 4,
                category: "Other",
                comments: "Git is my go-to version control system. I've used it for many projects and I'm very familiar with it.",
            },
            {
                name: "C++",
                image : new URL("../assets/tech_logo/cpp.svg", import.meta.url) .href,
                level: 1,
                category: "Programming Language",
                comments: "I've used C and C++ in school to learn the basics of programming.",
            },
            {
                name: "Java",
                image : new URL("../assets/tech_logo/java.svg", import.meta.url) .href,
                level: 1,
                category: "Programming Language",
                comments: "I've used Java mainly in school.",
            },
            {
                name: "Ruby",
                image : new URL("../assets/tech_logo/ruby.svg", import.meta.url) .href,
                level: 1,
                category: "Programming Language",
                comments: "I've used Ruby mainly in school.",
            },
            {
                name: "Tailwind CSS",
                image : new URL("../assets/tech_logo/tailwindcss.svg", import.meta.url) .href,
                level: 3,
                category: "Framework",
                comments: "I've used Tailwind CSS to make my websites and web applications.",
            },
            {
                name: "Firebase",
                image : new URL("../assets/tech_logo/firebase.svg", import.meta.url) .href,
                level: 3,
                category: "Other",
                comments: "I regularly use Firebase to host my websites and databases.",
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
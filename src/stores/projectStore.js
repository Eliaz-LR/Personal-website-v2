import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore",{
    state: () => ({
        projects: [
            {
                id: 1,
                name: "This portfolio website",
                image : new URL("../assets/proj_pic/Website2.png", import.meta.url) .href,
                description : "This is my second portfolio website. I wanted to make it more user friendly.",
                technologies: ["Vue.js", "JavaScript", "HTML", "CSS"],
                link: "https://eliaz-lr.dev/",
                featured: true,
            },
            {
                id: 2,
                name: "3D Minesweeper",
                image : new URL("../assets/proj_pic/3dMinesweeper.png", import.meta.url) .href,
                description : "I made a minesweeper game in 3D and first person view with an online leaderboard.",
                technologies: ["Unity", "C#", "Firebase"],
                link: "https://play.unity.com/mg/other/webgl-build-482",
                featured: true,
            },
            {
                id: 3,
                name: "My old portfolio website",
                image : new URL("../assets/proj_pic/OldWebsite.png", import.meta.url) .href,
                description : "This was my first project with Javascript. It emulates the feel of a command line interface.",
                technologies: ["Unity", "C#", "Firebase"],
                link: "https://old.eliaz-lr.dev/",
                featured: true,
            },
            {
                id: 4,
                name: "More projects available on my GitHub...",
                image : new URL("../assets/proj_pic/GitHub.png", import.meta.url) .href,
                description : "I have more projects on my GitHub. Check them out!",
                technologies: [],
                link: "https://github.com/Eliaz-LR",
                featured: false,
            },
        ],
    }),
    getters: {
        getProjects: (state) => state.projects,
        getFeaturedProjects: (state) => state.projects.filter(project => project.featured),
        getOtherProjects: (state) => state.projects.filter(project => !project.featured),
    },
});
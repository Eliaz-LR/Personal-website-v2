import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore",{
    state: () => ({
        projects: [
            {
                id: 1,
                name: "This website",
                image : "https://picsum.photos/id/1/200/300",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                technologies: ["Vue.js", "JavaScript", "HTML", "CSS"],
                link: "https://eliaz-lr.dev/",
                featured: true,
            }
        ],
    }),
    getters: {
        getProjects: (state) => state.projects,
        getFeaturedProjects: (state) => state.projects.filter(project => project.featured),
        getOtherProjects: (state) => state.projects.filter(project => !project.featured),
    },
});
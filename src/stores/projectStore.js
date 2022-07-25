import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore",{
    state: () => ({
        projects: [
            {
                id: 1,
                name: "Project 1",
                image : "https://picsum.photos/id/1/200/300",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                technologies: [],
                link: "https://www.google.com",
                featured: true,
            }
        ],
    }),
    getters: {
        getProjects: (state) => state.projects,
        getFeaturedProjects: (state) => state.projects.filter(project => project.featured),
    },
});
import { defineStore } from "pinia";
import best_websites_TailwindCSS from "../assets/articles/best_websites_TailwindCSS.md?raw";

export const useArticlesStore = defineStore("articlesStore", {
    state: () => ({
        articles: [
            {
                id: "best_websites_TailwindCSS",
                title: "The best websites I found for Tailwind CSS components",
                markdown : best_websites_TailwindCSS,
                date_created: "2022-08-18",
                date_updated: "2022-08-20",
                tags: ["TailwindCSS", "CSS"],
            },
            {
                id: "unity_ghost_collision",
                title: "How I solved my ghost collision problems for my unity golf game",
                markdown : Unity3d_ghost_collision_tips,
                date_created: "2022-12-22",
                date_updated: "2022-12-22",
                tags: ["Unity3D", "GameDev", "Physics"],
            }
        ],
    }),
    getters: {
        getArticles: (state) => state.articles.sort((a, b) => new Date(b.date_created) - new Date(a.date_created)),
        getArticleByID: (state) => (id) => state.articles.find((article) => article.id === id),
    },
});
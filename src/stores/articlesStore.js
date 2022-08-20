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
        ],
    }),
    getters: {
        getArticles: (state) => state.articles.sort((a, b) => new Date(b.date_created) - new Date(a.date_created)),
        getArticleByID: (state) => (id) => state.articles.find((article) => article.id === id),
    },
});
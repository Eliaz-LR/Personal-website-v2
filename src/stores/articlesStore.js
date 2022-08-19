import { defineStore } from "pinia";
import markdown_test from "../assets/articles/test.md?raw";

export const useArticlesStore = defineStore("articlesStore", {
    state: () => ({
        articles: [
            {
                id: "best_websites_TailwindCSS",
                title: "The best websites I found for Tailwind CSS components",
                markdown : markdown_test,
                date_created: "2022-08-18",
                date_updated: "2022-08-18",
                tags: ["TailwindCSS", "CSS"],
            },
        ],
    }),
    getters: {
        getArticles: (state) => state.articles.sort((a, b) => new Date(b.date_created) - new Date(a.date_created)),
    },
});
import { defineStore } from "pinia";
import markdown_test from "../assets/articles/test.md?raw";

export const useArticlesStore = defineStore("articlesStore", {
    state: () => ({
        articles: [
            {
                id: "0",
                title: "My first article",
                markdown : markdown_test,
                date_created: "2022-08-18",
                date_updated: "2022-08-18",
                tags: ["tag1", "tag2"],
            },
        ],
    }),
    getters: {
        getArticles: (state) => state.articles.sort((a, b) => new Date(b.date_created) - new Date(a.date_created)),
    },
});
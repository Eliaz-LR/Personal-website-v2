import { defineStore } from "pinia";
import markdown_test from "../assets/articles/test.md?raw";

export const useArticlesStore = defineStore("articlesStore", {
    state: () => ({
        articles: [
            // {
            //     id: "test",
            //     title: "My first article",
            //     markdown : markdown_test,
            //     date_created: "2020-01-01",
            //     date_updated: "2020-01-01",
            //     tags: ["tag1", "tag2"],
            // },
        ],
    }),
    getters: {
        getArticles: (state) => state.articles,
    },
});
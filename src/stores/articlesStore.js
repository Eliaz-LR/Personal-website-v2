import { defineStore } from "pinia";

export const useArticlesStore = defineStore("articlesStore", {
    state: () => ({
        articles: [
            {
                id: "test",
                title: "My first article",
                markdown : new URL("../assets/articles/test.md", import.meta.url) .href,
                date_created: "2020-01-01",
                date_updated: "2020-01-01",
                tags: ["tag1", "tag2"],
            },
        ],
    }),
    getters: {
        getArticles: (state) => state.articles,
    },
});

<template>
    <h1>Articles</h1>
    <div class="">
        <Article_preview v-for="article in articles"
        :id="article.id"
        :title="article.title"
        :markdown="article.markdown"
        :date_created="article.date_created"
        :date_updated="article.date_updated"
        :tags="article.tags"
        />
        <div v-if="articles.length === 0">
            <p>No articles here... yet</p>
        </div>
    </div>
</template>

<script>
import { useArticlesStore } from "../stores/articlesStore.js";
import Article_preview from "../components/small/Article_preview.vue";

export default {
    setup() {
        const articles = useArticlesStore().getArticles;
        return { articles };
    },
    components: { Article_preview },
};

</script>

<style scoped>
a{
    @apply underline decoration-purple-600;
}
</style>
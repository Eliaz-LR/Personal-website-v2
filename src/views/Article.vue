<template>
<div class="my-16 mx-2">
  {{this.$dayjs(getArticleByID(this.id).date_created).format('DD MMM YYYY')}}
  <br/>
  <div class="flex flex-row flex-wrap justify-center">
      <span v-for="tag in getArticleByID(this.id).tags" class="bg-zinc-100 rounded-full px-3 py-1 text-sm font-semibold text-zinc-800 mr-2">
      #{{tag}}
      </span>
  </div>
  <article class="markdownit text-left mt-5">
    <Markdown  :source="getArticleByID(this.id).markdown" />
  </article>
</div>
</template>

<script>
import { useArticlesStore } from "../stores/articlesStore.js";
import Markdown from 'vue3-markdown-it';
import router from "../router";

export default {
  name: 'Article',
    components: {
    Markdown
  },
  props: ["id"],
  setup() {
    const store = useArticlesStore()
    return {store}
  },
  methods: {
    getArticleByID(id) {
      const article = this.store.getArticleByID(id)
      if (article===undefined) {
        router.push('/404')
        return 0
      }
      return article;
    },
  },
}
</script>

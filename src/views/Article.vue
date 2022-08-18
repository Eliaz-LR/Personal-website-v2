<template>
{{this.$dayjs(date_created).format('DD MMM YYYY')}}
<br/>
<div class="flex flex-row" v-for="tag in tags">
    <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    #{{tag}}
    </span>
</div>
<article class="markdownit text-left">
  <Markdown  :source="markdown" />
</article>
</template>

<script>
import Markdown from 'vue3-markdown-it';

export default {
  name: 'Article',
    components: {
    Markdown
  },
  props: ["id","title", "markdown", "date_created", "date_updated", "tags"],

}
</script>

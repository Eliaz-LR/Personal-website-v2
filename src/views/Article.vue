<template>
<article class=" text-left">
  <Markdown :source="markdown" />
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
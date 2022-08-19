<template>
{{this.$dayjs(date_created).format('DD MMM YYYY')}}
<br/>
<div class="flex flex-row flex-wrap justify-center">
    <span v-for="tag in backup.tags" class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    #{{tag}}
    </span>
</div>
<article class="markdownit text-left mt-7 ">
  <Markdown  :source="backup.markdown" />
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
  data()  {
    return {
      backup :{
        title: this.title,
        markdown: this.markdown,
        date_created: this.date_created,
        date_updated: this.date_updated,
        tags: this.tags,
      },
    }
  },
  mounted() {
    if (this.backup.markdown === undefined) {
      console.log("Article.vue: markdown is undefined");
      this.backup=JSON.parse(localStorage.getItem("backup"));
    }
    else {
      console.log("Article.vue: markdown is defined");
      localStorage.setItem("backup", JSON.stringify(this.backup));
    }
  },
}
</script>

<template>
This is the Article component.
<h1>{{title}}</h1>
<p>{{markdown}}</p>
</template>

<script>
export default {
  name: 'Article',
  props: ["id","title", "markdown", "date_created", "date_updated", "tags"],
}
</script>
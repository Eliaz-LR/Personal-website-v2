<template>
    <router-link :to="{name:'article', params : {id:id, title:title, markdown:markdown, date_created:date_created}}" class="bg-slate-400"> 
        <h2>{{title}}</h2>
    </router-link>
</template>

<script>
export default {
    setup() {},
    props: ["id","title", "markdown", "date_created", "date_updated", "tags"],
};
</script>
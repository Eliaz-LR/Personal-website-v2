<template>
    <router-link class="" :to="{name:'article', params : {id:id, title:title, markdown:markdown, date_created:date_created, date_updated:date_updated, tags:tags}}"> 
        <h2 class="mx-5">{{this.$dayjs(date_created).format('DD MMM YY')}} - {{title}}</h2>
    </router-link>
</template>

<script>
export default {
    props : {
        id: String,
        title: String,
        markdown: String,
        date_created: String,
        date_updated: String,
        tags: Array
    },
};
</script>
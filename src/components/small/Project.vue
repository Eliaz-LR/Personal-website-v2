<template>
    <div class="flex flex-row border">
        <img :src="image" :alt="name"/>
        <div>
            <h1>{{ name }}</h1>
            <p>{{description}}</p>
        </div>
    </div>
</template>


<script>
export default {
    setup() {},
    props: ["name", "image", "description", "link"],
};
</script>
<template>
{{ name }} and {{ level }}
<img :src="image" :alt="name" class="w-10 h-10"/>
</template>
<script>
export default {
    setup() {},
    props: ["name", "image", "level"]
};
</script>
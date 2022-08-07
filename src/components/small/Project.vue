<template>
    <a class="block overflow-hidden border border-gray-100 rounded-lg shadow-sm m-4 2xl:mx-32 transition-colors hover:bg-zinc-800" :href="link">
    <img
        class="object-cover w-full h-56 shadow-xl rounded-xl"
        :src="image"
        :alt="name"
    />

    <div class="p-4">
        <h5 class="text-xl font-bold text-white">
        {{ name }}
        </h5>
        <p class="mt-2 text-white">
        {{description}}
        </p>
    </div>
    </a>
</template>


<script>
export default {
    setup() {},
    props: ["name", "image", "description", "link"],
};
</script>
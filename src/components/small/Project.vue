<template>
    <a class="block overflow-hidden border-2 border-transparent bg-clip-border bg-gradient-to-r from-purple-500 to-blue-700 rounded-lg shadow-sm m-4 2xl:mx-32" :href="link">
        <div class="rounded-lg bg-clip-content bg-zinc-800 hover:bg-zinc-700">
        <img
            class="object-cover w-full h-56 shadow-xl"
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
        </div>
    </a>
</template>


<script>
export default {
    setup() {},
    props: ["name", "image", "description", "link"],
};
</script>
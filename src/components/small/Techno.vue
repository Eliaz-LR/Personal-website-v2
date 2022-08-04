<template>
<div class="flex shrink border-[1px] rounded-md m-2">
  <img class ="mx-5 h-auto w-20 flex-none bg-cover rounded-t text-center overflow-hidden"
    :src="image"
    :alt="name"/>
  <div class=" p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="font-bold text-xl mb-2">{{ name }}</div>
      <Rating :level="level"/>
    </div>
  </div>
</div>
</template>
<script>
import Rating from "./Rating.vue";

export default {
    setup() {},
    props: ["name", "image", "level"],
    components: { Rating },
};
</script>
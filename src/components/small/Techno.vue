<template>
<div @mouseover="hovered=true" @mouseleave="hovered=false" class="flex flex-row w-auto shrink-0 border-[1px] rounded-md m-2">
  <img class ="mx-5 h-auto w-20 flex-none bg-cover rounded-t text-center overflow-hidden"
    :src="image"
    :alt="name"/>
  <div class=" p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="font-semibold text-xl mb-2">{{ name }}</div>
      {{level_txt}}
    </div>
  </div>
  <div v-if="hovered" class="h-full w-auto">
      {{comments}}
  </div>
</div>
</template>
<script>

export default {
    setup() {},
    props: ["name", "image", "level", "comments"],
    data() {
      return {
        level_txt: "To be determined",
        hovered: false,
      }
    },
    mounted() {
      switch (this.level) {
        case 1:
          this.level_txt = "Novice";
          break;
        case 2:
          this.level_txt = "Beginner";
          break;
        case 3:
          this.level_txt = "Intermediate";
          break;
        case 4:
          this.level_txt = "Advanced";
          break;
        case 5:
          this.level_txt = "Expert";
          break;
        default:
          this.level_txt = "To be determined";
          break;
      }
    },
};
</script>
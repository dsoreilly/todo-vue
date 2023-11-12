<template>
  <button
    v-for="tag in tags"
    :key="tag.id"
    class="ml-2 flex flex-row items-center whitespace-nowrap rounded-full bg-slate-500/10 px-3 py-1 text-sm font-semibold text-pink-500 text-slate-500 hover:bg-pink-500/20"
    @click="$emit('filterByTag', tag)"
  >
    {{ tag }} <TagIcon class="-mr-2 ml-1 h-5 w-5" />
  </button>
</template>

<script setup>
import { TagIcon } from "@heroicons/vue/20/solid";

defineEmits(["filterByTag"]);
defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

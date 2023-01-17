<!-- @format -->

<template>
  <button
    v-for="tag in tags"
    :key="tag.id"
    class="ml-2 flex flex-row items-center whitespace-nowrap rounded-full bg-slate-500/10 py-1 px-3 text-sm font-semibold text-slate-500 text-pink-500 hover:bg-pink-500/20"
    @click="$emit('filterByTag', tag)"
  >
    {{ tag }} <TagIcon class="ml-1 -mr-2 h-5 w-5" />
  </button>
</template>

<script setup>
import { TagIcon } from '@heroicons/vue/20/solid';

defineEmits(['filterByTag']);
defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

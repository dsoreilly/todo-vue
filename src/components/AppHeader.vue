<template>
  <header
    class="sticky left-0 top-0 w-full bg-slate-100/50 backdrop-blur dark:bg-slate-900/50"
  >
    <div class="flex flex-row items-center justify-between py-4">
      <h1 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
        To-do List
      </h1>
      <div class="flex flex-row">
        <AppHeaderTagList
          :tags="itemFilter.tags"
          @filter-by-tag="(tag) => $emit('filterByTag', tag)"
        />
        <button
          class="ml-2 flex flex-row items-center rounded-full bg-slate-500/10 px-3 py-1 text-sm font-semibold text-slate-500 hover:bg-pink-500/20 hover:text-pink-500"
          :class="itemFilter.isComplete && 'text-pink-500'"
          @click="$emit('filterByComplete')"
        >
          Done <CheckCircleIcon class="-mr-2 ml-1 h-5 w-5" />
        </button>
        <button
          class="ml-2 flex flex-row items-center rounded-full bg-slate-500/10 px-3 py-1 text-sm font-semibold text-slate-500 hover:bg-pink-500/20 hover:text-pink-500"
          @click="$emit('newItem')"
        >
          New <PlusCircleIcon class="-mr-2 ml-1 h-5 w-5" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/vue/20/solid";
import AppHeaderTagList from "./partials/AppHeaderTagList.vue";

defineEmits(["filterByComplete", "filterByTag", "newItem"]);
defineProps({
  completeCount: {
    type: Number,
    default: 0,
  },
  itemFilter: {
    type: Object,
    default: () => {},
  },
});
</script>

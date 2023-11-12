<template>
  <li
    class="mb-4 flex flex-row rounded bg-slate-50 p-6 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
  >
    <div class="mr-6 flex flex-col justify-center">
      <input
        :checked="isComplete"
        type="checkbox"
        class="h-5 w-5 cursor-pointer rounded border-0 bg-slate-200/50 text-pink-500 focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-900/50 dark:focus:ring-offset-slate-800"
        @input="$emit('completeItem', !isComplete)"
      />
    </div>
    <div class="flex flex-grow flex-col items-start">
      <button @click="$emit('enableEdit')">
        <h2 class="text-left text-2xl font-semibold">{{ text }}</h2>
      </button>
      <TodoItemTagList
        v-if="tags.length"
        :tags="tags"
        @filter-by-tag="(tag) => $emit('filterByTag', tag)"
      />
    </div>
    <div class="flex flex-col justify-center">
      <button
        class="dark:slate-900/50 text-slate-200/50 hover:text-slate-500"
        @click="$emit('enableRemove')"
      >
        <TrashIcon class="h-6 w-6" />
      </button>
    </div>
  </li>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/24/solid";
import TodoItemTagList from "./TodoItemTagList.vue";

defineEmits(["completeItem", "enableEdit", "enableRemove", "filterByTag"]);
defineProps({
  text: {
    type: String,
    default: "",
  },
  tags: {
    type: Array,
    default: () => [],
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});
</script>

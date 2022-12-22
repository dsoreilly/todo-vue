<!-- @format -->

<template>
  <header
    class="sticky top-0 left-0 w-full bg-slate-100/50 backdrop-blur dark:bg-slate-900/50"
  >
    <div class="flex flex-row items-center justify-between py-4">
      <h1 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
        To-do List
      </h1>
      <div class="flex flex-row">
        <button
          class="flex flex-row items-center rounded-full bg-slate-500/10 py-1 px-3 text-sm font-semibold text-slate-500 hover:bg-pink-500/20 hover:text-pink-500"
          @click="$emit('newItem')"
        >
          New <PlusCircleIcon class="ml-1 -mr-2 h-5 w-5" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { PlusCircleIcon } from '@heroicons/vue/20/solid';

defineEmits(['filterByComplete', 'newItem']);
defineProps({
  completeCount: {
    type: Number,
    default: 0,
  },
});
</script>

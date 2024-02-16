<template>
  <header
    class="sticky top-0 z-10 w-full border-b border-transparent bg-white/90 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/90"
  >
    <div
      class="container mx-auto flex flex-row items-center justify-between px-8 py-4"
    >
      <h1
        class="text-lg font-bold tracking-tight text-slate-900 dark:text-white"
      >
        To-do List
      </h1>
      <div class="flex flex-row gap-3">
        <button
          :disabled="firstTodoItem.description.length === 0"
          class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 disabled:hover:bg-white dark:bg-slate-900 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-800 dark:disabled:hover:bg-slate-900"
          type="button"
          @click="todoItemsStore.addTodoItem()"
        >
          New
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTodoItemsStore } from "@/stores/todoItems.js";

const todoItemsStore = useTodoItemsStore();
const { firstTodoItem } = storeToRefs(todoItemsStore);
</script>

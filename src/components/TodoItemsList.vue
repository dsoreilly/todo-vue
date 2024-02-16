<template>
  <ul
    class="flex w-full flex-col divide-y divide-solid divide-slate-100 dark:divide-slate-800"
  >
    <TodoItem
      v-for="todoItem in todoItems"
      :id="todoItem.id"
      :key="todoItem.id"
      :description="todoItem.description"
      :is-completed="todoItem.isCompleted"
    />
  </ul>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTodoItemsStore } from "@/stores/todoItems.js";
import TodoItem from "@/components/TodoItem.vue";

const todoItemsStore = useTodoItemsStore();
const { todoItems } = storeToRefs(todoItemsStore);
</script>

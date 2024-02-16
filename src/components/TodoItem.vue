<template>
  <li class="py-8">
    <div class="relative">
      <input
        ref="input"
        :value="description"
        class="w-full rounded-md border-0 bg-transparent text-2xl font-medium text-slate-900 placeholder:text-slate-500 dark:text-white"
        placeholder="What's to-do?"
        type="text"
        @input="onInput($event)"
      />
      <button class="absolute"></button>
    </div>
  </li>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTodoItemsStore } from "@/stores/todoItems.js";

/**
 * @type {import("vue").Ref<HTMLInputElement | null>}
 */

const input = ref(null);

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const todoItemsStore = useTodoItemsStore();

onMounted(() => {
  // focus the input element when a new to-do item is mounted
  if (props.description.length === 0) {
    if (input.value) {
      input.value.focus();
    }
  }
});

/**
 * @param {Event} event
 */

function onInput(event) {
  if (event.target && event.target instanceof HTMLInputElement) {
    const { value } = event.target;
    todoItemsStore.$patch((state) => {
      const [item] = state.todoItems.filter((item) => item.id === props.id);
      item.description = value;
    });
  }
}
</script>

<template>
  <li class="py-8">
    <div class="relative">
      <input
        ref="input"
        :value="description"
        class="w-full rounded-md border-0 bg-transparent text-2xl font-medium text-slate-900 placeholder:text-slate-500 dark:text-white"
        placeholder="What's to-do?"
        type="text"
        @blur="onBlur($event)"
        @focus="onFocus($event)"
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

const inputRef = ref(null);

/**
 * @type {import("vue").Ref<string | null>}
 */

const currentValueRef = ref(null);

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

/**
 * Set focus a new `input` element on mount and gets a reference to the current
 * description.
 */

onMounted(() => {
  if (props.description.length === 0) {
    if (inputRef.value) {
      inputRef.value.focus();
    }
  }

  currentValueRef.value = props.description;
});

/**
 * @param {Event} event
 */

function onBlur(event) {
  if (event.target && event.target instanceof HTMLInputElement) {
    const { value } = event.target;

    console.log("onBlur() value:", value);

    if (value === "" && value !== currentValueRef.value) {
      todoItemsStore.$patch((state) => {
        const index = state.todoItems.findIndex((item) => item.id === props.id);
        state.todoItems.splice(index, 1);
      });
    }
  }
}

/**
 * @param {Event} event
 */

function onFocus(event) {
  if (event.target && event.target instanceof HTMLInputElement) {
    const { value } = event.target;

    console.log("onFocus() value:", value);

    currentValueRef.value = value;
  }
}

/**
 * @param {Event} event
 */

function onInput(event) {
  if (event.target && event.target instanceof HTMLInputElement) {
    const { value } = event.target;

    console.log("onInput() value:", value);

    todoItemsStore.$patch((state) => {
      const [item] = state.todoItems.filter((item) => item.id === props.id);
      item.description = value;
    });
  }
}
</script>

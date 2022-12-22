<!-- @format -->

<template>
  <ul class="mt-4 flex flex-row">
    <TodoItemTag v-for="tag in tags" :key="tag.id" :tag="tag" />
  </ul>
</template>

<script setup>
import TodoItemTag from './TodoItemTag.vue';

defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

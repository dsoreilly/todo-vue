<!-- @format -->

<template>
  <ul class="mt-4 flex flex-row">
    <TodoItemTag
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag"
      @filter-by-tag="$emit('filterByTag', tag)"
    />
  </ul>
</template>

<script setup>
import TodoItemTag from './TodoItemTag.vue';

defineEmits(['filterByTag']);
defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

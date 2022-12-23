<!-- @format -->

<template>
  <ul class="my-4 flex w-full flex-col">
    <TodoItem
      v-for="item in list"
      :key="item.id"
      :text="item.text"
      :tags="item.tags"
      :is-complete="item.isComplete"
      @complete-item="(isComplete) => completeItem(item.id, isComplete)"
      @enable-edit="$emit('enableEdit', item.id)"
    />
  </ul>
</template>

<script setup>
import { useItemStore } from '../stores/item';
import TodoItem from './TodoItem.vue';

defineEmits(['enableEdit']);
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const store = useItemStore();

function completeItem(id, isComplete) {
  store.updateItem(id, { isComplete });
}
</script>

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
      @enable-remove="$emit('enableRemove', item.id)"
      @filter-by-tag="(tag) => $emit('filterByTag', tag)"
    />
  </ul>
</template>

<script setup>
import { useItemStore } from "../stores/item";
import TodoItem from "./partials/TodoItem.vue";

defineEmits(["enableEdit", "enableRemove", "filterByTag"]);
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

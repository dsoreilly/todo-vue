/** @format */

import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useItemStore = defineStore('item', () => {
  const items = ref([
    {
      id: nanoid(),
      text: 'Re-write all the things in Rust 🦀',
      tags: ['code', 'programming', 'rust'],
      isComplete: false,
    },
    {
      id: nanoid(),
      text: 'Brew coffee ☕️',
      tags: [],
      isComplete: true,
    },
  ]);

  const getCompletedItems = computed(() =>
    items.value.filter((item) => item.isComplete)
  );

  const getItemById = computed(
    () => (id) => items.value.find((item) => item.id === id)
  );

  function addItem(item) {
    items.value.push({ id: nanoid(), ...item });
  }

  function updateItem(id, itemUpdates) {
    const item = this.getItemById(id);
    Object.assign(item, itemUpdates);
  }

  return { addItem, getCompletedItems, getItemById, items, updateItem };
});

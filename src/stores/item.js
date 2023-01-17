/** @format */

import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';
import { hasAll, readStorage } from '../utils';

const INITIAL_ITEMS = [
  {
    id: nanoid(),
    text: 'Re-write all the things in Rust 🦀',
    tags: ['coding', 'rust', 'dev'],
    isComplete: false,
  },
  {
    id: nanoid(),
    text: 'Drink more coffee ☕️',
    tags: [],
    isComplete: true,
  },
  {
    id: nanoid(),
    text: 'Read Hacker News 🗞',
    tags: ['dev', 'news'],
    isComplete: false,
  },
];

const initialState = readStorage() || INITIAL_ITEMS;

export const useItemStore = defineStore('item', () => {
  const items = ref(initialState);

  const getFilteredItems = computed(() => (query) => {
    const { isComplete, tags } = query;
    const itemComplete = (item) => (isComplete ? item.isComplete : true);
    const itemHasTag = (item) => {
      if (tags.length) {
        if (item.tags.length) {
          return hasAll(tags, item.tags);
        }
        return false;
      }
      return true;
    };
    return items.value.filter(itemHasTag).filter(itemComplete);
  });

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

  function removeItem(id) {
    items.value = items.value.filter((item) => item.id !== id);
  }

  return {
    addItem,
    getFilteredItems,
    getItemById,
    items,
    removeItem,
    updateItem,
  };
});

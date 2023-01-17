<!-- @format -->

<template>
  <div class="mx-auto max-w-5xl px-4">
    <AppHeader
      :item-filter="itemFilter"
      @new-item="isEditing = true"
      @filter-by-complete="filterByComplete"
      @filter-by-tag="filterByTag"
    />
    <ItemEditor
      v-if="isEditing"
      :id="itemToEditId"
      @disable-edit="disableEdit"
    />
    <ItemRemoveConfirm
      v-if="isRemoving"
      :id="itemToRemoveId"
      @disable-remove="disableRemove"
    />
    <TodoItemList
      :list="isFiltered ? filteredItems : items"
      @enable-edit="enableEdit"
      @enable-remove="enableRemove"
      @filter-by-tag="filterByTag"
    />
    <footer
      class="my-4 flex flex-col justify-center px-6 text-center text-xs text-slate-500"
    >
      <p class="mb-2">Vue-based to-do item list &#128406;</p>
      <p>
        <a class="hover:underline" href="https://github.com/dsoreilly/vue-todo">
          View on GitHub
        </a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useItemStore } from '../stores/item';
import { writeStorage } from '../utils';
import AppHeader from './AppHeader.vue';
import ItemEditor from './ItemEditor.vue';
import ItemRemoveConfirm from './ItemRemoveConfirm.vue';
import TodoItemList from './TodoItemList.vue';

const store = useItemStore();
const { items } = storeToRefs(store);
const filteredItems = computed(() => store.getFilteredItems(itemFilter.value));
const isEditing = ref(false);
const isRemoving = ref(false);
const itemToEditId = ref('');
const itemToRemoveId = ref('');

const itemFilter = ref({
  isComplete: false,
  tags: [],
});

const isFiltered = computed(
  () => itemFilter.value.isComplete || itemFilter.value.tags.length
);

store.$subscribe(() => {
  writeStorage(items.value);
});

function disableEdit() {
  itemToEditId.value = '';
  isEditing.value = false;
}

function disableRemove() {
  itemToRemoveId.value = '';
  isRemoving.value = false;
}

function enableEdit(id) {
  itemToEditId.value = id;
  isEditing.value = true;
}

function enableRemove(id) {
  itemToRemoveId.value = id;
  isRemoving.value = true;
}

function filterByComplete() {
  itemFilter.value.isComplete = !itemFilter.value.isComplete;
}

function filterByTag(tag) {
  if (itemFilter.value.tags.includes(tag)) {
    itemFilter.value.tags = itemFilter.value.tags.filter(
      (existingTag) => existingTag !== tag
    );
  } else {
    itemFilter.value.tags = [tag, ...itemFilter.value.tags];
  }
}
</script>

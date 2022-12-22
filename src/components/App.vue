<!-- @format -->

<template>
  <div class="mx-auto max-w-5xl px-4">
    <AppHeader @new-item="isEditing = true" />
    <ItemEditor
      v-if="isEditing"
      :id="itemToEditId"
      @disable-edit="disableEdit"
    />
    <TodoItemList :list="items" @enable-edit="enableEdit" />
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
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useItemStore } from '../stores/item';
import AppHeader from './AppHeader.vue';
import ItemEditor from './ItemEditor.vue';
import TodoItemList from './TodoItemList.vue';

const store = useItemStore();
const { items } = storeToRefs(store);
const isEditing = ref(false);
const itemToEditId = ref('');

function disableEdit() {
  itemToEditId.value = '';
  isEditing.value = false;
}

function enableEdit(id) {
  itemToEditId.value = id;
  isEditing.value = true;
}
</script>

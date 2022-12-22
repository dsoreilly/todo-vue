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
  </div>
  <footer></footer>
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

<!-- @format -->

<template>
  <div
    class="fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-200/50 backdrop-blur dark:bg-slate-900/50"
  >
    <div class="w-full max-w-5xl px-4">
      <div
        class="flex w-full flex-col rounded-lg bg-slate-50 p-6 shadow dark:bg-slate-800"
      >
        <div class="mb-4 flex flex-row items-center justify-between">
          <p class="text-sm text-slate-500">
            {{ statusMessage }}
          </p>
          <div class="flex flex-row">
            <button
              :disabled="!isEdited || isEmpty"
              class="mr-4 text-slate-500 hover:text-pink-500 disabled:text-slate-500/50"
              @click="saveEdit"
            >
              <CheckIcon class="h-6 w-6" />
            </button>
            <button
              class="text-slate-500 hover:text-pink-500"
              @click="$emit('disableEdit')"
            >
              <XMarkIcon class="h-6 w-6" />
            </button>
          </div>
        </div>
        <div>
          <div class="flex flex-col">
            <input
              v-model="editableItem.text"
              placeholder="What needs to be done?"
              class="w-full rounded-lg border-0 bg-slate-200/50 text-2xl text-slate-700 placeholder:text-slate-500/50 focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-2 focus:ring-offset-transparent dark:bg-slate-900/50 dark:text-slate-200"
              type="text"
            />
            <!-- <ItemEditorTagField v-model:tags="editableItem.tags" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { useItemStore } from '../stores/item';
// import ItemEditorTagField from './ItemEditorTagField.vue';
import { isDifferent } from '../utils';

const emit = defineEmits(['disableEdit']);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const store = useItemStore();
const isNew = !props.id.length;
const emptyItem = { text: '', tags: [], isComplete: false };

const editableItem = ref(
  isNew ? { ...emptyItem } : { ...store.getItemById(props.id) }
);

const isEdited = computed(() => {
  const initalItem = isNew ? emptyItem : store.getItemById(props.id);
  return isDifferent(editableItem.value, initalItem);
});
const isEmpty = computed(() => !editableItem.value.text.length);
const statusMessage = computed(() =>
  isNew ? 'New ✨' : editableItem.value.isComplete ? 'Done! 🎉' : 'To-do... ⏳'
);

function saveEdit() {
  if (isNew) {
    store.addItem(editableItem.value);
  } else {
    store.updateItem(props.id, editableItem.value);
  }
  emit('disableEdit');
}
</script>

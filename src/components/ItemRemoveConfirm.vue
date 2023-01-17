<!-- @format -->

<template>
  <div
    class="fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-200/50 backdrop-blur dark:bg-slate-900/50"
  >
    <div class="w-full max-w-xl px-4">
      <div
        class="flex w-full flex-col rounded-lg bg-slate-50 p-6 shadow dark:bg-slate-800"
      >
        <h2 class="mb-4 text-left text-2xl font-semibold">
          Delete to-do item?
        </h2>
        <div class="flex flex-row">
          <button
            class="flex flex-row items-center rounded-full bg-slate-500/10 py-1 px-3 text-sm font-semibold text-slate-500 hover:bg-pink-500/20 hover:text-pink-500"
            @click="removeItem"
          >
            Confirm <CheckCircleIcon class="ml-1 -mr-2 h-5 w-5" />
          </button>
          <button
            class="ml-2 flex flex-row items-center rounded-full bg-slate-500/10 py-1 px-3 text-sm font-semibold text-slate-500 hover:bg-pink-500/20 hover:text-pink-500"
            :class="isFiltered && 'text-pink-500'"
            @click="$emit('disableRemove')"
          >
            Cancel <XCircleIcon class="ml-1 -mr-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/20/solid';
import { useItemStore } from '../stores/item';

const store = useItemStore();

const emit = defineEmits(['disableRemove']);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

function removeItem() {
  store.removeItem(props.id);
  emit('disableRemove');
}
</script>

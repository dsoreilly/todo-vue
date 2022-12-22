<!-- @format -->

<template>
  <li
    class="mr-2 flex flex-row items-center whitespace-nowrap rounded-full bg-pink-500/20 py-1 px-3 text-center text-sm font-semibold text-pink-500"
  >
    {{ tag }}
    <button
      v-if="isEditable"
      class="ml-1 -mr-2 text-pink-500/60 hover:text-pink-500"
      @click="$emit('removeTag')"
    >
      <XCircleIcon class="flex h-5 w-5 flex-row items-center" />
    </button>
  </li>
</template>

<script setup>
import { XCircleIcon } from '@heroicons/vue/20/solid';

defineEmits(['removeTag']);
defineProps({
  isEditable: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="mt-4 flex flex-row flex-wrap rounded-lg p-3 hover:bg-slate-200/50 hover:dark:bg-slate-900/50"
  >
    <ul v-if="tags.length" class="mr-2 flex flex-row items-center">
      <TodoItemTag
        v-for="(tag, index) in tags"
        :key="`tag-${index}`"
        :is-editable="true"
        :tag="tag"
        @remove-tag="removeTagAtIndex(index)"
      />
    </ul>
    <input
      v-model="newTag"
      class="flex-grow border-0 bg-transparent p-0 py-1 align-middle text-sm font-semibold lowercase text-slate-700 placeholder:text-slate-500/50 focus:ring-0 dark:text-slate-200"
      type="text"
      :placeholder="tags.length ? '' : 'New Tag'"
      @keyup.enter="submitNewTag"
      @keyup.backspace="removeTagAtIndex(tags.length - 1)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TodoItemTag from "./TodoItemTag.vue";

const emit = defineEmits(["update:tags"]);
const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});
const newTag = ref("");

function removeTagAtIndex(index) {
  const newTags = [...props.tags];
  newTags.splice(index, 1);
  emit("update:tags", newTags);
}

function submitNewTag(event) {
  const newTags = [...props.tags, event.target.value];
  newTag.value = "";
  emit("update:tags", newTags);
}
</script>

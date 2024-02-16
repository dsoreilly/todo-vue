<template>
  <div class="flex flex-col">
    <MainHeader />
    <div class="container mx-auto px-8">
      <TodoItemsList />
    </div>
  </div>
</template>

<script setup>
import MainHeader from "@/components/MainHeader.vue";
import TodoItemsList from "@/components/TodoItemsList.vue";
</script>

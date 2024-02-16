import { computed } from "vue";
import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

/**
 * @type {TodoItem[]}
 */

const INITIAL_TODO_ITEMS = [
  {
    id: nanoid(),
    description: "write all of the things in Rust",
    isCompleted: false,
  },
  {
    id: nanoid(),
    description: "brew coffee",
    isCompleted: true,
  },
  {
    id: nanoid(),
    description: "read Hacker News",
    isCompleted: false,
  },
];

export const useTodoItemsStore = defineStore("todo-items", () => {
  /**
   * STATE
   */

  /**
   * Persist to-do items state to local storage.
   */

  const todoItems = useLocalStorage("todo-items", INITIAL_TODO_ITEMS);

  /**
   * GETTERS
   */

  const firstTodoItem = computed(() => todoItems.value[0]);

  const todoItemsByCompleted = computed(() =>
    todoItems.value.filter((todoItem) => todoItem.isCompleted),
  );

  /**
   * ACTIONS
   */

  function addTodoItem() {
    console.log("addTodoItem() called");

    todoItems.value.unshift({
      id: nanoid(),
      description: "",
      isCompleted: false,
    });
  }

  return {
    addTodoItem,
    firstTodoItem,
    todoItems,
    todoItemsByCompleted,
  };
});

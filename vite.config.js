import vue from "@vitejs/plugin-vue";

/**
 * @type {import("vite").UserConfig}
 */

export default {
  base: "/todo-vue/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
};

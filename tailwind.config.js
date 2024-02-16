/**
 * @type {import("tailwindcss").Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  plugins: [require("@tailwindcss/forms")],
};

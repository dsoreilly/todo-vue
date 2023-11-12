/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  plugins: [require("@tailwindcss/forms")],
};

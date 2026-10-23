import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: "src/index.js",
      name: "ReactDropdown",
      formats: ["es", "cjs"], // make the lib compatible with more env (require/ import, export)
      fileName: (format) => `react-dropdown.${format}.js`,
    },
    rolldownOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});

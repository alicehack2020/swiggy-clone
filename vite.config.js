import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    watch: {},
    hmr: {
      overlay: true,
    },
  },
  plugins: [
    react({
      include: "**/*.jsx", // Adjust this based on your project's file extensions
    }),
  ],
});

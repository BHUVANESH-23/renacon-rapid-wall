import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

console.log("__dirname:", __dirname); // Log the current directory

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

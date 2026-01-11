import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "client"),

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },

  base: "/", // ✅ IMPORTANT for Vercel

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});

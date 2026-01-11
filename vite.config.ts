import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isReplit =
  process.env.REPL_ID !== undefined && process.env.NODE_ENV !== "production";

export default defineConfig({
  root: path.resolve(import.meta.dirname, "client"),

  plugins: [
    react(),
    ...(isReplit ? [] : []), // Only dev plugins on Replit
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  base: "./", // ✅ Critical for Vercel deployment

  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});

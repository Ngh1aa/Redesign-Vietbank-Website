import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: process.env.PAGES_BASE || "/Redesign-Vietbank-Website/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
    },
  },
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
    sourcemap: false,
    cssMinify: false,
    rollupOptions: {
      input: path.resolve(rootDir, "app/index.html"),
    },
  },
})

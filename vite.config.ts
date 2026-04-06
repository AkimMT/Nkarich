import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react/compiler-runtime": "react-compiler-runtime",
      "react/jsx-runtime": "react/jsx-runtime",
      "react/jsx-dev-runtime": "react/jsx-dev-runtime",
    },
    conditions: ["module", "browser", "development|production"],
    dedupe: ["react", "react-dom", "react-router"],
  },
  optimizeDeps: {
    include: [
      "sanity",
      "sanity/structure",
      "styled-components",
      "react-compiler-runtime",
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        format: "es",
      },
    },
  },
});

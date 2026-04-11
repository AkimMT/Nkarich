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
    dedupe: ["react", "react-dom", "react-router", "styled-components"],
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
    chunkSizeWarningLimit: 6000,
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        format: "es",
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router"],
          "sanity-vendor": ["sanity", "@sanity/client", "@sanity/image-url"],
          "ui-vendor": ["styled-components", "lucide-react"],
        },
      },
    },
  },
});

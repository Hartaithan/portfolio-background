import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "PortfolioBackground",
      formats: ["es", "umd"],
      fileName: "init",
    },
  },
  server: {
    open: "/index.html",
  },
});

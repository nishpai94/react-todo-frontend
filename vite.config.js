import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "react-todo-frontend",
  build: {
    outDir: "build",
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443, // Run the websocket server on the SSL port
    },
  },
});

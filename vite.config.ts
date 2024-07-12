import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  //server part added
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000', // Your local backend server URL
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
  //     },
  //   },
  // },
});

// import vercel from "vite-plugin-vercel";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike({
      prerender: true,
    }),
    react({}),
    // vercel(),
  ],

  resolve: {
    alias: {
      "@": new URL("./", import.meta.url).pathname,
    },
  },
});

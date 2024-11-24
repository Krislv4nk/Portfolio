import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';
import path from "path";

export default defineConfig({
      plugins: [react(), svgr()],
      resolve: {
        alias: {
          src: '/src',
          components: '/src/components',
          pages: '/src/pages',
          assets: '/src/assets',
          // eslint-disable-next-line no-undef
          "@": path.resolve(__dirname, "./src"),
        },
      },
  base: '/Portfolio/',
});

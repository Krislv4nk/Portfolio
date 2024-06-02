import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    {
      name: 'configure-server',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.endsWith('.mp4')) {
            res.setHeader('Content-Type', 'image/jpeg');
          } else if (req.url.endsWith('.png')) {
            res.setHeader('Content-Type', 'image/png');
          } else if (req.url.endsWith('.svg')) {
            res.setHeader('Content-Type', 'image/svg+xml');
          } else if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
          } else if (req.url.endsWith('.jsx')) {
            res.setHeader('Content-Type', 'text/jsx');
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets'
    },
  },
  base: '/Portfolio/',
});

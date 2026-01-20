import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev
export default defineConfig({
  base: '/eval/',
  server: { watch: { usePolling: true } },
  publicDir: 'public', // Ensure public directory is used for static assets
  plugins: [react(), tailwindcss()],
});

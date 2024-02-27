/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '',
  build: {
    outDir: './build',
  },
  publicDir: './public',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    host: '0.0.0.0',
    open: true,
    port: 3000,
  },
});

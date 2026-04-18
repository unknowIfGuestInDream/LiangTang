import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: false,
    setupFiles: ['./vitest.setup.js'],
    include: ['**/__tests__/**/*.{js,jsx}', '**/*.{test,spec}.{js,jsx}'],
    exclude: ['node_modules', '.next', 'build', 'out'],
    css: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});

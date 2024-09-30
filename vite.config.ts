import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async () => ({
  plugins: [react(), tsconfigPaths()],
  clearScreen: false,
  envPrefix: ['VITE_'],
}));

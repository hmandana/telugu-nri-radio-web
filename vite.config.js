import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isGh = mode === 'gh'; // use: vite build --mode gh

  return {
    plugins: [react()],

    // Root locally; subpath on GH Pages builds/previews
    base: isGh ? '/telugu-nri-radio-web/' : '/',

    server: {
      port: 8080,
      host: true,
      strictPort: true,
      open: true,
    },

    // Optional: align preview with the chosen mode
    preview: {
      port: 4173,
      host: true,
      open: true,
    },
  };
});

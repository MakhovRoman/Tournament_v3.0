import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
		}),
		react(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@app': fileURLToPath(new URL('./src/app', import.meta.url)),
			'@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
			'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
		}
	}
});

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
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "@assets/styles/palette.scss" as *;',
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@app': fileURLToPath(new URL('./src/app', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
			'@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
			'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
		}
	}
});

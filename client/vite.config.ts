import { fileURLToPath } from 'node:url';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';
import { type Connect, defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
		}),
		react(),
		{
			name: 'spa-fallback',
			configureServer(server) {
				server.middlewares.use(
					history({
						index: '/index.html',
						verbose: true,
						htmlAcceptHeaders: ['text/html'],
						disableDotRule: true,
						rewrites: [
							{ from: /\/[^.]+$/, to: '/index.html' }, // Все пути без точек (не файлы)
						],
					}) as Connect.NextHandleFunction,
				);
			},
		},
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
		},
	},
	base: '/',
	server: {
		watch: {
			ignored: ['**/node_modules/**', '**/dist/**', '**/.git/**', '**/.vscode/**', '**/.idea/**'],
		},
		fs: { allow: ['.'] },
	},
	preview: {
		headers: {
			'Cache-Control': 'no-store',
		},
	},
});

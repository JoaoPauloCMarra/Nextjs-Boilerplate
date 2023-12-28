import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	test: {
		environment: 'jsdom',
		exclude: [
			'**/.github/**',
			'**/.husky/**',
			'**/.next/**',
			'**/.vscode/**',
			'**/e2e/**',
			'**/node_modules/**',
			'**/public/**',
			'**/test-results/**'
		]
	}
});

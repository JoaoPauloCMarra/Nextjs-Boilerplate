import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	test: {
		globals: true,
		reporters: ['verbose'],
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

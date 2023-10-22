import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { copy } from 'vite-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		copy(
			[
				{
					src: './manifest.json',
					dest: 'dist/',
				},
			],
			{
				hook: 'writeBundle',
			}
		),
	],
});

import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}', 
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/layerchart/**/*.{svelte,js}'
	],
	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: []
} as Config;

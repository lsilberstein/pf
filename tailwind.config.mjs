/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Open Sans', 'sans'],
			serif: ['Playfair Display', 'serif'],
		},
		extend: {
			fontFamily: {
				mono: ['Reddit Mono', 'mono']
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}